import { useEffect, useRef, useState } from "react";
import { LISTENING_BASE } from "../../lib/placementApi";
import type { AudioClip } from "../../content/exams/types";
import "../practice/practice.css";

/** Files that failed to load this session, so we go straight to the device voice next time. */
const missing = new Set<string>();

function hash(s: string) { let h = 0; for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return h; }

/** Reads a line with the device's own voice (free, offline). Women and men get different voices and pitch. */
function speak(c: AudioClip, slow: boolean): Promise<void> {
  return new Promise((resolve) => {
    const s = typeof window !== "undefined" ? window.speechSynthesis : undefined;
    if (!s) { resolve(); return; }
    const u = new SpeechSynthesisUtterance(c.script);
    const en = s.getVoices().filter((v) => v.lang.toLowerCase().startsWith("en"));
    if (en.length) u.voice = en[c.who === "Woman" ? 0 : c.who === "Man" ? Math.min(1, en.length - 1) : hash(c.voice) % en.length];
    u.lang = u.voice?.lang ?? "en-GB";
    u.pitch = c.who === "Woman" ? 1.25 : c.who === "Man" ? 0.8 : 1;
    u.rate = slow ? 0.8 : 0.95;
    u.onend = () => resolve();
    u.onerror = () => resolve();
    s.speak(u);
  });
}

/** Plays one recorded file. Resolves false if the file isn't available. */
function playFile(el: HTMLAudioElement, c: AudioClip, slow: boolean): Promise<boolean> {
  if (missing.has(c.file)) return Promise.resolve(false);
  return new Promise((resolve) => {
    const done = (ok: boolean) => { el.onended = null; el.onerror = null; resolve(ok); };
    el.onended = () => done(true);
    el.onerror = () => { missing.add(c.file); done(false); };
    el.src = LISTENING_BASE + c.file;
    el.playbackRate = slow ? 0.8 : 1;
    el.play().catch(() => { missing.add(c.file); done(false); });
  });
}

/**
 * A recording made of one or more clips (a dialogue is several). Each clip plays its recorded file,
 * or is read by the device voice when there's no file yet. Limited to `max` plays, like the real test,
 * unless `unlimited` (after the answers are shown).
 */
export function ExamAudio({ clips, max = 2, unlimited = false, label = "Listen", allowSlow = true }: { clips: AudioClip[]; max?: number; unlimited?: boolean; label?: string; allowSlow?: boolean }) {
  const el = useRef<HTMLAudioElement>(null);
  const run = useRef(0);
  const [plays, setPlays] = useState(0);
  const [now, setNow] = useState<{ who?: string; device: boolean } | null>(null);
  const [usedDevice, setUsedDevice] = useState(false);
  const [slow, setSlow] = useState(false);
  const left = unlimited ? Infinity : max - plays;

  useEffect(() => () => { run.current++; el.current?.pause(); window.speechSynthesis?.cancel(); }, []);

  async function play() {
    if (now || left <= 0 || !el.current) return;
    const me = ++run.current;
    setPlays((p) => p + 1);
    for (const c of clips) {
      if (run.current !== me) return;
      setNow({ who: c.who, device: missing.has(c.file) });
      const ok = await playFile(el.current, c, slow);
      if (run.current !== me) return;
      if (!ok) {
        setUsedDevice(true);
        setNow({ who: c.who, device: true });
        await speak(c, slow);
      }
      await new Promise((r) => setTimeout(r, clips.length > 1 ? 350 : 0));
    }
    if (run.current === me) setNow(null);
  }

  function stop() { run.current++; el.current?.pause(); window.speechSynthesis?.cancel(); setNow(null); }

  return (
    <div className="px-clip ex-audio">
      <audio ref={el} preload="none" />
      <button type="button" className="px-play" onClick={now ? stop : play} disabled={!now && left <= 0}
        aria-label={now ? "Stop" : left <= 0 ? "No plays left" : `${label}. Plays left: ${left === Infinity ? "unlimited" : left}`}>
        {now ? <span className="pt-bars" aria-hidden="true"><span /><span /><span /><span /></span>
          : <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>}
      </button>
      <div className="px-clip-text">
        <strong>{now?.who && now.device ? `${now.who} speaking` : label}</strong>
        <span className="ex-plays px-small" aria-live="polite">
          {left === Infinity ? "Play as often as you like" : left <= 0 ? "No plays left" : left === max ? `You can listen ${max === 2 ? "twice" : `${max} times`}` : "1 play left"}
        </span>
        {plays > 0 && <span className="pt-ai">{usedDevice ? "Device voice" : "AI voice"}</span>}
      </div>
      {allowSlow && <label className="px-slow"><input type="checkbox" checked={slow} onChange={(e) => setSlow(e.target.checked)} /> Slower</label>}
    </div>
  );
}

/** The words of a recording, shown after the answers. */
export function Transcript({ clips }: { clips: AudioClip[] }) {
  return (
    <details className="ex-transcript">
      <summary>Read what they said</summary>
      {clips.map((c, k) => <p key={k}>{c.who && <strong>{c.who}: </strong>}{c.script}</p>)}
    </details>
  );
}

/** Reads a question aloud with the device voice, like the examiner's recorded voice. */
export function say(text: string): Promise<void> {
  window.speechSynthesis?.cancel();
  // Some browsers never fire "end"; don't let that freeze the test.
  const limit = new Promise<void>((r) => setTimeout(r, 1500 + text.split(/\s+/).length * 450));
  return Promise.race([speak({ file: "", script: text, voice: "examiner" }, false), limit]);
}
