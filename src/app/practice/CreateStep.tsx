import { useEffect, useMemo, useRef, useState } from "react";
import type { CreateTask } from "../../content/practice/types";
import type { ProductionTask } from "../../content/assessments/types";
import { runChecks, wordCount } from "../../lib/answers";
import { useAuth } from "../../lib/auth";
import { makeRecogniser } from "./Items";

type Mode = "write" | "speak";

/**
 * Step 6: an original piece that must use the skill. Checked automatically for free:
 * the target structure must appear (regex) and the piece must be long enough.
 * Speaking is transcribed by the browser's own speech recognition.
 */
export type CreateResult = { prompt: string; text: string; words: number; audio: Blob | null; ok: boolean | null };

/**
 * `only` fixes the mode (used by the Midpoint and Gate). `exam` hides the example answer.
 * In an exam, a browser that can't transcribe still records; then the length is checked and the teacher listens.
 */
export function CreateStep({ task, onSubmit, only, exam = false, submitLabel = "Send it" }: {
  task: CreateTask | ProductionTask; onSubmit: (r: CreateResult) => Promise<void>; only?: Mode; exam?: boolean; submitLabel?: string;
}) {
  const { profile } = useAuth();
  const canTranscribe = useMemo(() => makeRecogniser() !== null, []);
  const canRecord = useMemo(() => "MediaRecorder" in window && !!navigator.mediaDevices, []);
  const canSpeak = canTranscribe && canRecord;
  const options = useMemo(() => {
    const mine = task.prompts.filter((p) => p.universe && profile?.universes.includes(p.universe));
    return [...mine, ...task.prompts.filter((p) => !mine.includes(p))];
  }, [task, profile]);
  const [pi, setPi] = useState(0);
  const [picked, setMode] = useState<Mode>("write");
  const mode = only ?? picked;
  const [text, setText] = useState("");
  const [ticks, setTicks] = useState<boolean[]>(task.rubric.map(() => false));
  const [busy, setBusy] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const rec = useSpeaking();

  const body = mode === "write" ? text : rec.transcript;
  const words = wordCount(body);
  const checks = runChecks(body, task.checks);
  const minSeconds = "seconds" in task && task.seconds ? task.seconds : 0;
  // Speaking in a browser without transcription: only the length can be checked here.
  const lengthOnly = mode === "speak" && !canTranscribe;
  const ok = lengthOnly ? rec.blob !== null && rec.seconds >= minSeconds : words >= task.minWords && checks.every((c) => c.ok);
  const prompt = options[pi];
  const noMic = mode === "speak" && !canRecord;

  return (
    <div className="px-item px-create">
      <p className="pt-kicker">Your task</p>
      <h2 className="pt-prompt">{prompt.text}</h2>
      {options.length > 1 && <button type="button" className="link-btn px-hint-btn" onClick={() => setPi((pi + 1) % options.length)}>Give me a different topic</button>}

      {!only && canSpeak && (
        <div className="mode-switch" role="group" aria-label="Write or speak">
          <button type="button" aria-pressed={mode === "write"} onClick={() => setMode("write")}>Write it</button>
          <button type="button" aria-pressed={mode === "speak"} onClick={() => setMode("speak")}>Say it</button>
        </div>
      )}

      {mode === "write" ? (
        <textarea className="pt-textarea" value={text} onChange={(e) => setText(e.target.value)} onPaste={(e) => e.preventDefault()}
          rows={8} aria-label="Your text" spellCheck={false} autoCapitalize="sentences" />
      ) : (
        <div className="pt-rec">
          {rec.state !== "recording"
            ? <button type="button" className="pt-rec-btn" onClick={rec.start} disabled={noMic}><span className="pt-rec-dot" aria-hidden="true" /> {rec.blob ? "Record again" : "Start recording"}</button>
            : <button type="button" className="pt-rec-btn is-live" onClick={rec.stop}><span className="pt-rec-square" aria-hidden="true" /> Stop</button>}
          {rec.state === "blocked" && <p className="form-error">The microphone is blocked. Allow it in your browser{only ? "" : ", or write instead"}.</p>}
          {rec.state === "recording" && <p className="muted px-small" aria-live="off">Recording · {rec.seconds}s</p>}
          {rec.url && <audio controls src={rec.url} className="pt-rec-audio" />}
          {rec.transcript && <p className="px-transcript"><span className="node-example-label">What the browser heard</span>{rec.transcript}</p>}
        </div>
      )}

      {noMic && <p className="form-error">This browser can't record audio. Open Bandwidth in Chrome or Edge to do the speaking part.</p>}
      {lengthOnly ? (
        <>
          <p className="muted px-small">This browser can't check your words automatically, so your teacher will listen to your recording.</p>
          <ul className="px-checks" aria-live="polite">
            <li className={rec.seconds >= minSeconds ? "is-ok" : ""}>{Math.min(rec.seconds, minSeconds)} / {minSeconds} seconds</li>
          </ul>
        </>
      ) : (
        <ul className="px-checks" aria-live="polite">
          <li className={words >= task.minWords ? "is-ok" : ""}>{words} / {task.minWords} words</li>
          {checks.map((c) => <li key={c.label} className={c.ok ? "is-ok" : ""}>{c.label}{c.min > 1 ? ` (${Math.min(c.found, c.min)} / ${c.min})` : ""}</li>)}
        </ul>
      )}

      <fieldset className="px-rubric">
        <legend>Check your own work</legend>
        {task.rubric.map((r, i) => (
          <label key={r}><input type="checkbox" checked={ticks[i]} onChange={(e) => setTicks(ticks.map((t, k) => (k === i ? e.target.checked : t)))} /> {r}</label>
        ))}
      </fieldset>

      <div className="pt-actions">
        <button type="button" className="btn btn-primary" disabled={!ok || !ticks.every(Boolean) || busy || rec.state === "recording"}
          onClick={() => { setBusy(true); void onSubmit({ prompt: prompt.text, text: body, words, audio: mode === "speak" ? rec.blob : null, ok: lengthOnly ? null : ok }).finally(() => setBusy(false)); }}>
          {busy ? "Sending…" : submitLabel}
        </button>
        {!exam && <button type="button" className="link-btn" onClick={() => setShowModel(!showModel)}>{showModel ? "Hide example" : "Stuck? See an example"}</button>}
      </div>
      {!ok && <p className="muted px-small">{submitLabel} unlocks when every check above is green and you've ticked your self-check.</p>}
      {!exam && showModel && <blockquote className="px-context">{task.model}</blockquote>}
    </div>
  );
}

/** Records audio and transcribes it at the same time, both in the browser. */
function useSpeaking() {
  const [state, setState] = useState<"idle" | "recording" | "blocked">("idle");
  const [blob, setBlob] = useState<Blob | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [transcript, setTranscript] = useState("");
  const [seconds, setSeconds] = useState(0);
  const media = useRef<MediaRecorder | null>(null);
  const timer = useRef<number | null>(null);
  const recog = useRef<ReturnType<typeof makeRecogniser>>(null);
  const finals = useRef<string[]>([]);
  useEffect(() => () => {
    recog.current?.abort(); media.current?.stream.getTracks().forEach((t) => t.stop());
    if (timer.current) window.clearInterval(timer.current);
  }, []);
  useEffect(() => () => { if (url) URL.revokeObjectURL(url); }, [url]);

  async function start() {
    let stream: MediaStream;
    try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); } catch { setState("blocked"); return; }
    const type = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find((t) => MediaRecorder.isTypeSupported(t));
    const m = new MediaRecorder(stream, type ? { mimeType: type } : undefined);
    const chunks: Blob[] = [];
    m.ondataavailable = (e) => { if (e.data.size) chunks.push(e.data); };
    m.onstop = () => {
      stream.getTracks().forEach((t) => t.stop());
      const b = new Blob(chunks, { type: m.mimeType || type || "audio/webm" });
      setBlob(b); setUrl(URL.createObjectURL(b));
    };
    media.current = m; m.start();
    finals.current = []; setTranscript(""); setSeconds(0);
    const t0 = Date.now();
    timer.current = window.setInterval(() => setSeconds(Math.floor((Date.now() - t0) / 1000)), 500);
    const r = makeRecogniser();
    if (r) {
      r.continuous = true; r.interimResults = false;
      // Recognition stops after silences; restart it and keep what was already heard.
      let session: string[] = [];
      r.onresult = (e) => {
        session = Array.from(e.results as ArrayLike<ArrayLike<{ transcript: string }>>).map((x) => x[0].transcript.trim());
        setTranscript([...finals.current, ...session].join(". "));
      };
      r.onend = () => {
        finals.current = [...finals.current, ...session]; session = [];
        if (media.current?.state === "recording") { try { r.start(); } catch { /* already started */ } }
      };
      recog.current = r; r.start();
    }
    setState("recording");
  }
  function stop() {
    media.current?.stop();
    if (timer.current) { window.clearInterval(timer.current); timer.current = null; }
    const r = recog.current; recog.current = null;
    if (r) { r.onend = null; r.stop(); }
    setState("idle");
  }
  return { state, blob, url, transcript, seconds, start: () => void start(), stop };
}
