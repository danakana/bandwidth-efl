import { useEffect, useMemo, useRef, useState } from "react";
import type { BandId } from "../../content/bands";
import { makeRecogniser } from "../practice/Items";
import { overlap } from "../../lib/answers";
import { say } from "../exams/ExamAudio";
import { FinishFlag, Kart, Mic, Speaker } from "./GameArt";
import { EndScreen, GameShell, sfx, type Learnt } from "./GameKit";
import { buildRacer, racerShape } from "./levels";

/**
 * Pronunciation Racer: say the word or sentence clearly and your car speeds ahead.
 * The browser listens (speech recognition); clear speech gives a full boost, partly clear speech a smaller one.
 * Beat the two rival cars to the finish. Browsers that can't listen get a "hear it and type it" race instead.
 */
const norm = (s: string) => s.toLowerCase().replace(/[^a-z' ]/g, "").replace(/\s+/g, " ").trim();

export function WordRacer({ band, level, onClose, onLevel }: { band: BandId; level: number; onClose: (changed: boolean) => void; onLevel: (n: number) => void }) {
  const canHear = useMemo(() => makeRecogniser() !== null, []);
  const [seed, setSeed] = useState(0);
  const prompts = useMemo(() => buildRacer(band, level), [band, level, seed]); // eslint-disable-line react-hooks/exhaustive-deps
  const { laps, rivalA, rivalB } = racerShape(level);
  const [count, setCount] = useState(3);
  const [i, setI] = useState(0);
  const [me, setMe] = useState(0);
  const [rivals, setRivals] = useState([0, 0]);
  const [state, setState] = useState<"idle" | "listening" | "heard">("idle");
  const [heard, setHeard] = useState<{ text: string; score: number } | null>(null);
  const [typed, setTyped] = useState("");
  const [tries, setTries] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [boost, setBoost] = useState(0);
  const [learnt, setLearnt] = useState<Learnt[]>([]);
  const [done, setDone] = useState<null | { place: number }>(null);
  const rec = useRef<ReturnType<typeof makeRecogniser>>(null);
  // If you need more attempts than there are prompts, they come round again.
  const target = prompts[i % prompts.length] ?? "";

  // Countdown, then the rivals start driving.
  useEffect(() => {
    if (count <= 0) return;
    const t = setTimeout(() => { setCount((c) => c - 1); sfx(count === 1 ? "win" : "pop"); }, 800);
    return () => clearTimeout(t);
  }, [count]);
  useEffect(() => {
    if (count > 0 || done) return;
    const t = setInterval(() => setRivals(([a, b]) => [Math.min(laps, a + 0.2 / rivalA), Math.min(laps, b + 0.2 / rivalB)]), 200);
    return () => clearInterval(t);
  }, [count, done, laps, rivalA, rivalB]);
  useEffect(() => () => rec.current?.abort(), []);

  // Somebody crossed the line.
  useEffect(() => {
    if (done || count > 0) return;
    // The race ends when you cross the line, or when both rivals have.
    if (me >= laps) setDone({ place: 1 + rivals.filter((r) => r >= laps).length });
    else if (rivals.every((r) => r >= laps)) setDone({ place: 3 });
  }, [me, rivals, done, count, laps]);

  function advance(quality: number) {
    const step = quality >= 0.8 ? 1 : quality >= 0.5 ? 0.6 : 0;
    if (step > 0) {
      const c = quality >= 0.8 ? combo + 1 : 0;
      setCombo(c); setScore((s) => s + Math.round(100 * quality) * Math.max(1, c)); setBoost((b) => b + 1); sfx("good");
      setMe((m) => Math.min(laps, m + step + (c >= 3 ? 0.15 : 0)));
      setTimeout(() => { setI((x) => x + 1); setState("idle"); setHeard(null); setTyped(""); setTries(0); }, 900);
    } else {
      setCombo(0); sfx("bad");
      setMe((m) => Math.min(laps, m + 0.1));
      const t = tries + 1;
      setTries(t);
      if (t >= 2) {
        setLearnt((l) => [...l, { text: target, note: heard ? `(the browser heard "${heard.text}")` : "" }]);
        setTimeout(() => { setI((x) => x + 1); setState("idle"); setHeard(null); setTyped(""); setTries(0); }, 1400);
      }
    }
  }

  function listen() {
    const r = makeRecogniser();
    if (!r || state === "listening") return;
    rec.current = r; setState("listening"); setHeard(null);
    r.onresult = (e) => {
      const alts = Array.from(e.results[0]).map((a) => a.transcript);
      const best = alts.sort((x, y) => overlap(y, target) - overlap(x, target))[0] ?? "";
      const q = overlap(best, target);
      setHeard({ text: best, score: q }); setState("heard");
      advance(q);
    };
    r.onerror = () => setState("idle");
    r.onend = () => setState((s) => (s === "listening" ? "idle" : s));
    r.start();
  }
  function submitTyped() {
    const q = norm(typed) === norm(target) ? 1 : overlap(typed, target);
    setHeard({ text: typed, score: q }); setState("heard");
    advance(q);
  }

  const restart = () => { setSeed((s) => s + 1); setCount(3); setI(0); setMe(0); setRivals([0, 0]); setState("idle"); setHeard(null); setTyped(""); setTries(0); setScore(0); setCombo(0); setLearnt([]); setDone(null); };
  const stars = done ? (done.place === 1 ? 3 : done.place === 2 ? 2 : 0) : 0;
  const pos = (x: number) => `${Math.min(100, (x / laps) * 100) * 0.86}%`;

  return (
    <GameShell game="racer" band={band} level={level} hearts={0} score={score} combo={combo} onClose={() => onClose(done !== null)} theme="racer"
      status={<div className="cc-status"><span className="cc-moves">Stretch <b>{Math.min(i + 1, laps)}</b>/{laps}</span></div>}>
      {done ? (
        <EndScreen game="racer" band={band} level={level} stars={stars} score={score} learnt={learnt}
          onNext={() => onLevel(level + 1)} onReplay={restart} onMap={onClose} />
      ) : (
        <div className="pr">
          <div className="pr-track" aria-hidden="true">
            {[{ x: rivals[0], car: "#49b8f2", name: "Rival", you: false }, { x: me, car: "#ff3d6e", name: "You", you: true }, { x: rivals[1], car: "#ffd95c", name: "Rival", you: false }].map((c, k) => (
              <div key={k} className={`pr-lane${c.you ? " is-you" : ""}`}>
                <span key={c.you ? boost : 0} className={`pr-car${c.you && boost ? " is-boost" : ""}`} style={{ left: pos(c.x) }}><Kart color={c.car} size={c.you ? 58 : 50} /><small>{c.name}</small></span>
                <span className="pr-finish"><FinishFlag size={26} /></span>
              </div>
            ))}
            {count > 0 && <div className="pr-count">{count}</div>}
          </div>
          <div className="pr-card" aria-live="polite">
            <p className="pr-say">{canHear ? "Say this clearly:" : "Listen and type what you hear:"}</p>
            {canHear ? <p className="pr-target">{target}</p> : <p className="pr-target is-hidden">{"• ".repeat(Math.min(8, target.split(" ").length)).trim()}</p>}
            <div className="pr-actions">
              <button type="button" className="btn btn-ghost" onClick={() => void say(target)} disabled={count > 0}><Speaker on size={18} /> Hear it</button>
              {canHear ? (
                <button type="button" className={`btn btn-primary pr-mic${state === "listening" ? " is-on" : ""}`} onClick={listen} disabled={count > 0 || state !== "idle" && state !== "heard"}>
                  <Mic size={18} /> {state === "listening" ? "Listening…" : "Say it"}
                </button>
              ) : (
                <form className="pr-type" onSubmit={(e) => { e.preventDefault(); if (typed.trim()) submitTyped(); }}>
                  <label className="visually-hidden" htmlFor="pr-typed">What you hear</label>
                  <input id="pr-typed" value={typed} onChange={(e) => setTyped(e.target.value)} autoComplete="off" disabled={count > 0} />
                  <button type="submit" className="btn btn-primary" disabled={!typed.trim() || count > 0}>Go!</button>
                </form>
              )}
            </div>
            <p className={`pr-heard${heard ? (heard.score >= 0.8 ? " is-ok" : heard.score >= 0.5 ? " is-mid" : " is-no") : ""}`} role="status">
              {heard ? `${heard.score >= 0.8 ? "Full boost!" : heard.score >= 0.5 ? "Half boost." : tries >= 2 ? "Let's move on." : "Try again!"} ${canHear ? `I heard: "${heard.text}"` : ""}` : canHear ? "Tap the mic, then speak." : "Your browser can't hear speech, so this race is a listening race."}
            </p>
          </div>
        </div>
      )}
    </GameShell>
  );
}
