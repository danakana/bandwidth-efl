import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { LISTENING_BASE } from "../lib/placementApi";
import { StackMark } from "../components/Logo";
import type { Overlay, Pose, Shot, Step } from "./video1";
import "./video.css";

type Video = { title: string; sub: string; images: Record<Shot["img"], string>; host: string; steps: readonly Step[] };

const GAP_MS = 380; // breath between lines
const POSE: Record<Pose, [number, number]> = { front: [0, 0], talk: [0, 1], surprised: [1, 1], think: [2, 1], cheer: [3, 1] };

/** Turn "Hi! *I'm* Leo." into text with the starred words highlighted. */
function Caption({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/g).map((part, i) =>
        part.startsWith("*") ? <mark key={i}>{part.slice(1, -1)}</mark> : <Fragment key={i}>{part}</Fragment>,
      )}
    </>
  );
}

/** Centre the camera on a focus point without showing the picture's edges. */
function cameraStyle(s: Shot) {
  const lim = ((s.zoom - 1) / 2) * 100;
  const clamp = (v: number) => Math.max(-lim, Math.min(lim, v));
  const tx = clamp(-(s.x - 0.5) * s.zoom * 100);
  const ty = clamp(-(s.y - 0.5) * s.zoom * 100);
  return { transform: `translate(${tx}%, ${ty}%) scale(${s.zoom})` };
}

export function GrammarVideo({ video }: { video: Video }) {
  const steps = video.steps;
  const [i, setI] = useState(-1); // -1 = poster
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0); // seconds into the current step
  const [durs, setDurs] = useState<number[]>(() => steps.map((s) => s.hold ?? 3));
  const audios = useRef<(HTMLAudioElement | null)[]>([]);
  const timer = useRef<number | undefined>(undefined);
  const raf = useRef<number | undefined>(undefined);
  const holdStart = useRef(0);
  const stage = useRef<HTMLDivElement>(null);

  // Preload every recording and learn its length.
  useEffect(() => {
    audios.current = steps.map((s, k) => {
      if (!s.audio) return null;
      const a = new Audio(`${LISTENING_BASE}${s.audio}`);
      a.preload = "auto";
      a.addEventListener("loadedmetadata", () => setDurs((d) => d.map((v, j) => (j === k && isFinite(a.duration) ? a.duration : v))));
      return a;
    });
    return () => audios.current.forEach((a) => a?.pause());
  }, [steps]);

  const stopAll = () => {
    window.clearTimeout(timer.current);
    if (raf.current) cancelAnimationFrame(raf.current);
    audios.current.forEach((a) => a?.pause());
  };

  const go = useCallback((k: number) => {
    stopAll();
    setT(0);
    setI(k);
    setPlaying(k < steps.length);
  }, [steps.length]);

  // Run the current step: play its recording (or hold), track time, then move on.
  useEffect(() => {
    if (i < 0 || i >= steps.length || !playing) return;
    const step = steps[i];
    const a = audios.current[i];
    const next = () => { timer.current = window.setTimeout(() => go(i + 1), GAP_MS); };
    const tick = () => {
      setT(a ? a.currentTime : (performance.now() - holdStart.current) / 1000);
      raf.current = requestAnimationFrame(tick);
    };
    if (a) {
      a.onended = next;
      a.play().catch(() => setPlaying(false));
    } else {
      holdStart.current = performance.now() - t * 1000;
      timer.current = window.setTimeout(next, Math.max(0, (step.hold ?? 2) - t) * 1000);
    }
    raf.current = requestAnimationFrame(tick);
    return () => { window.clearTimeout(timer.current); if (raf.current) cancelAnimationFrame(raf.current); a?.pause(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i, playing]);

  const toggle = () => {
    if (i < 0 || i >= steps.length) return go(0);
    setPlaying((p) => !p);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space" && (e.target as HTMLElement)?.tagName !== "BUTTON") { e.preventDefault(); toggle(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const total = useMemo(() => durs.reduce((a, b) => a + b, 0) + (steps.length - 1) * (GAP_MS / 1000), [durs, steps.length]);
  const elapsed = i < 0 ? 0 : i >= steps.length ? total : durs.slice(0, i).reduce((a, b) => a + b, 0) + i * (GAP_MS / 1000) + t;
  const step = i >= 0 && i < steps.length ? steps[i] : null;
  const shot = step?.shot ?? steps[0].shot;
  const done = i >= steps.length;

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  const seek = (frac: number) => {
    const target = frac * total;
    let acc = 0;
    for (let k = 0; k < steps.length; k++) {
      if (acc + durs[k] >= target) return go(k);
      acc += durs[k] + GAP_MS / 1000;
    }
    go(steps.length - 1);
  };

  const fullscreen = () => { stage.current?.requestFullscreen?.().catch(() => {}); };

  return (
    <div className="gv">
      <div ref={stage} className="gv-stage" data-done={done || undefined}>
        {(["gate", "class"] as const).map((img) => (
          <img key={img} className="gv-pic" src={`${LISTENING_BASE}${video.images[img]}`} alt="" aria-hidden="true"
            data-on={shot.img === img || undefined} style={shot.img === img ? cameraStyle(shot) : undefined} />
        ))}

        {step?.overlay && <OverlayView o={step.overlay} t={t} dur={durs[i]} key={step.id} />}

        {step?.host && (
          <div className="gv-host" key={`h-${step.id}`} data-talk={playing || undefined}
            style={{ backgroundImage: `url(${LISTENING_BASE}${video.host})`, backgroundPosition: `${(POSE[step.host][0] / 3) * 100}% ${POSE[step.host][1] * 100}%` }} />
        )}

        {step?.text && (
          <p className="gv-cap" key={`c-${step.id}`}>
            <span className="gv-who" data-who={step.speaker}>{step.speaker === "Mira" ? "Mira" : step.speaker}</span>
            <Caption text={step.text} />
          </p>
        )}

        {i < 0 && (
          <button className="gv-poster" onClick={() => go(0)}>
            <span className="gv-poster-card">
              <StackMark size={34} />
              <strong>{video.title}</strong>
              <span>{video.sub}</span>
              <span className="gv-play" aria-hidden="true" />
              <span className="gv-sr">Play video</span>
            </span>
          </button>
        )}

        {done && (
          <div className="gv-end">
            <StackMark size={46} />
            <p className="gv-end-line">Boost your bandwidth!</p>
            <button className="gv-btn" onClick={() => go(0)}>Watch again</button>
          </div>
        )}
      </div>

      <div className="gv-bar">
        <button className="gv-btn gv-pp" onClick={toggle} aria-label={playing ? "Pause" : "Play"}>{playing ? "Pause" : i >= 0 && !done ? "Play" : "Play"}</button>
        <input className="gv-seek" type="range" min={0} max={1000} value={Math.round((elapsed / total) * 1000) || 0}
          onChange={(e) => seek(Number(e.target.value) / 1000)} aria-label="Video position" />
        <span className="gv-time">{fmt(elapsed)} / {fmt(total)}</span>
        <button className="gv-btn" onClick={fullscreen}>Full screen</button>
      </div>
    </div>
  );
}

function OverlayView({ o, t, dur }: { o: Overlay; t: number; dur: number }) {
  switch (o.kind) {
    case "title":
      return <div className="gv-title"><strong>{o.title}</strong><span>{o.sub}</span></div>;
    case "badge":
      return <div className="gv-badge">{o.text}</div>;
    case "card":
      return <div className="gv-card"><span>{o.left}</span><b aria-hidden="true">→</b><span className="gv-verb">{o.right}</span></div>;
    case "rule":
      return (
        <div className="gv-rule">
          {[["I", "am"], ["you", "are"], ["he", "is"], ["she", "is"], ["it", "is"]].map(([a, b], k) => (
            <div key={a} style={{ animationDelay: `${k * 0.45}s` }}><span>{a}</span><span className="gv-verb">{b}</span></div>
          ))}
        </div>
      );
    case "mistake":
      return (
        <div className="gv-mistake">
          <s>{o.wrong}</s>
          <strong style={{ opacity: t > dur * 0.62 ? 1 : 0 }}>{o.right}</strong>
          <span lang="es">{o.es}</span>
        </div>
      );
    case "word":
      return <div className="gv-word"><small>Level-up word</small><strong>{o.word}</strong><span>{o.meaning}</span></div>;
    case "quiz": {
      const reveal = dur - o.revealFromEnd;
      const shown = t >= reveal;
      const left = Math.ceil(reveal - t);
      return (
        <div className="gv-quiz">
          <p>{o.prompt.replace("___", shown ? o.options[o.answer] : "___")}</p>
          <div className="gv-opts">
            {o.options.map((opt, k) => <span key={opt} data-right={(shown && k === o.answer) || undefined} data-wrong={(shown && k !== o.answer) || undefined}>{opt}</span>)}
          </div>
          {!shown && left <= 3 && left > 0 && <span className="gv-count">{left}</span>}
        </div>
      );
    }
    case "ending":
      return <div className="gv-ending"><StackMark size={40} /><strong>{o.line}</strong></div>;
  }
}
