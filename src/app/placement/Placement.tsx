import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useAuth } from "../../lib/auth";
import {
  LISTENING_ITEMS, READING_ITEMS, SPEAKING_PROMPTS, WRITING_PROMPTS, BAND_IDS,
  promptFor, type BandIndex, type ChoiceItem, type ListeningItem,
} from "../../content/placement";
import { answer, estimate, nextItem, startStaircase, type Staircase } from "../../lib/placementEngine";
import {
  LISTENING_BASE, completeAttempt, countWords, saveSection, startAttempt, submitSpeaking, submitWriting, type Attempt,
} from "../../lib/placementApi";
import { Logo } from "../../components/Logo";
import "./placement.css";

type Stage = "intro" | "reading" | "listening" | "writing" | "speaking" | "finishing";

const PARTS: { id: Stage; label: string }[] = [
  { id: "reading", label: "Reading & language" },
  { id: "listening", label: "Listening" },
  { id: "writing", label: "Writing" },
  { id: "speaking", label: "Speaking" },
];

const READING_LEVELS: BandIndex[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const LISTENING_LEVELS: BandIndex[] = [0, 1, 3, 5, 7];

/**
 * Which band the writing and speaking prompts aim at.
 * Production usually lags behind understanding, so we take the lower of the
 * two measured bands. A prompt that's slightly easy still shows what a student
 * can do; one that's far too hard mostly shows panic.
 */
function productionBand(reading: BandIndex | null, listening: BandIndex | null): BandIndex {
  const measured = [reading, listening].filter((b): b is BandIndex => b !== null);
  return measured.length ? (Math.min(...measured) as BandIndex) : 3;
}

export function Placement({ onExit, onFinished }: { onExit: () => void; onFinished: () => void }) {
  const { profile, session } = useAuth();
  const es = !!profile?.spanish_help;
  const [stage, setStage] = useState<Stage>("intro");
  const [attempt, setAttempt] = useState<Attempt | null>(null);
  const [reading, setReading] = useState<BandIndex | null>(null);
  const [listening, setListening] = useState<BandIndex | null>(null);
  const [error, setError] = useState("");
  const target = productionBand(reading, listening);

  useEffect(() => { window.scrollTo({ top: 0 }); }, [stage]);

  async function begin() {
    setError("");
    try {
      setAttempt(await startAttempt());
      setStage("reading");
    } catch {
      setError("We couldn't start the test. Check your connection and try again.");
    }
  }

  async function finishChoice(skill: "reading" | "listening", s: Staircase) {
    const band = estimate(s);
    try {
      await saveSection(attempt!.id, skill, band === null ? null : BAND_IDS[band], s.log);
    } catch {
      setError("Your answers couldn't be saved. Check your connection, then press the button again.");
      return false;
    }
    setError("");
    if (skill === "reading") { setReading(band); setStage("listening"); }
    else { setListening(band); setStage("writing"); }
    return true;
  }

  async function finishAll() {
    setStage("finishing");
    try {
      await completeAttempt(attempt!.id);
      onFinished();
    } catch {
      setError("We couldn't finish saving. Press the button to try again.");
    }
  }

  const partIndex = PARTS.findIndex((p) => p.id === stage);

  return (
    <div className="pt">
      <header className="pt-head">
        <Logo size={28} tone="dark" />
        {partIndex >= 0 && (
          <ol className="pt-parts" aria-label="Test progress">
            {PARTS.map((p, i) => (
              <li key={p.id} className={i < partIndex ? "is-done" : i === partIndex ? "is-now" : ""} aria-current={i === partIndex ? "step" : undefined}>
                <span className="pt-part-num">{i + 1}</span>
                <span className="pt-part-label">{p.label}</span>
              </li>
            ))}
          </ol>
        )}
        <button type="button" className="link-btn pt-exit" onClick={onExit}>Leave test</button>
      </header>

      <main id="main" className="pt-main">
        {error && <p className="form-error pt-error" role="alert">{error}</p>}
        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {stage === "intro" && <Intro es={es} onStart={() => void begin()} />}
            {stage === "reading" && (
              <ChoiceSection
                kind="reading" es={es} pool={READING_ITEMS}
                staircase={startStaircase(READING_LEVELS, 3, 9)}
                onDone={(s) => finishChoice("reading", s)}
              />
            )}
            {stage === "listening" && (
              <ChoiceSection
                kind="listening" es={es} pool={LISTENING_ITEMS}
                staircase={startStaircase(LISTENING_LEVELS, reading ?? 3, 6)}
                onDone={(s) => finishChoice("listening", s)}
              />
            )}
            {stage === "writing" && (
              <WritingSection es={es} band={target} onSubmit={async (prompt, body, words) => {
                try { await submitWriting(attempt!.id, prompt, BAND_IDS[target], body, words); setError(""); setStage("speaking"); }
                catch { setError("Your writing couldn't be saved. Copy it somewhere safe and try again."); }
              }} />
            )}
            {stage === "speaking" && (
              <SpeakingSection es={es} band={target}
                onSubmit={async (prompt, blob) => {
                  try { await submitSpeaking(session!.user.id, attempt!.id, prompt, BAND_IDS[target], blob); setError(""); await finishAll(); }
                  catch { setError("Your recording couldn't be uploaded. Try again, or skip speaking for now."); }
                }}
                onSkip={() => void finishAll()}
              />
            )}
            {stage === "finishing" && (
              <section className="pt-card pt-center" aria-live="polite">
                <h1>Saving your test…</h1>
                {error && <button type="button" className="btn btn-primary" onClick={() => void finishAll()}>Try again</button>}
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

/* ---------------- Intro ---------------- */

function Intro({ es, onStart }: { es: boolean; onStart: () => void }) {
  return (
    <section className="pt-card pt-intro">
      <p className="pt-kicker">Placement test</p>
      <h1>Let's find your starting band.</h1>
      <p className="pt-lede">Four short parts, about 25 minutes. The questions adapt to you, so they'll get harder or easier as you go. That's normal.</p>
      {es && <p lang="es" className="es">Son cuatro partes cortas. Las preguntas cambian según tus respuestas.</p>}
      <ul className="pt-plan">
        <li><strong>Reading & language</strong><span>9 questions</span></li>
        <li><strong>Listening</strong><span>6 short clips</span></li>
        <li><strong>Writing</strong><span>One short text</span></li>
        <li><strong>Speaking</strong><span>One recording</span></li>
      </ul>
      <div className="pt-note">
        <p><strong>No points, no pressure.</strong> This isn't a grade. It just tells Bandwidth where to start, and your teacher checks your writing and speaking.</p>
      </div>
      <button type="button" className="btn btn-primary pt-go" onClick={onStart}>Start the test</button>
    </section>
  );
}

/* ---------------- Reading & listening ---------------- */

function ChoiceSection<T extends ChoiceItem>({
  kind, es, pool, staircase, onDone,
}: {
  kind: "reading" | "listening";
  es: boolean;
  pool: T[];
  staircase: Staircase;
  onDone: (s: Staircase) => Promise<boolean>;
}) {
  const [s, setS] = useState(staircase);
  const [choice, setChoice] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [save, setSave] = useState<"idle" | "saving" | "failed">("idle");
  const item = useMemo(() => nextItem(s, pool), [s, pool]);
  const done = s.log.length;
  const isListening = kind === "listening";

  function trySave() {
    setSave("saving");
    void onDone(s).then((ok) => { if (!ok) setSave("failed"); });
  }

  // When the section runs out of questions, save once. A failure waits for the student to retry.
  useEffect(() => {
    if (!item && save === "idle") trySave();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, save]);

  if (!item) {
    return (
      <section className="pt-card pt-center" aria-live="polite">
        <h1>{save === "failed" ? "Not saved yet" : "Saving…"}</h1>
        {save === "failed" && <button type="button" className="btn btn-primary" onClick={trySave}>Try again</button>}
      </section>
    );
  }

  function confirm() {
    if (choice === null || !item) return;
    if (isListening && !revealed) { setRevealed(true); return; }
    setS(answer(s, item, choice));
    setChoice(null);
    setRevealed(false);
  }

  const L = item as unknown as ListeningItem;
  const label = isListening && !revealed ? "Check answer" : done + 1 === s.maxItems ? "Finish this part" : "Next";

  return (
    <section className="pt-card">
      <div className="pt-meter" aria-hidden="true">
        {Array.from({ length: s.maxItems }, (_, i) => <span key={i} className={i < done ? "is-on" : i === done ? "is-now" : ""} />)}
      </div>
      <p className="pt-kicker">
        {isListening ? "Listening" : "Reading & language"} · Question {done + 1} of {s.maxItems}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.22 }}
          className="pt-q"
        >
          {isListening && <ClipPlayer item={L} es={es} />}
          {item.passage && <blockquote className="pt-passage">{item.passage}</blockquote>}
          <fieldset className="pt-options" disabled={revealed}>
            <legend className="pt-stem">{item.stem}</legend>
            {item.options.map((opt, i) => (
              <label key={i} className={`pt-option${choice === i ? " is-picked" : ""}`}>
                <input type="radio" name={item.id} checked={choice === i} onChange={() => setChoice(i)} />
                <span className="pt-option-key" aria-hidden="true">{"ABC"[i]}</span>
                <span>{opt}</span>
              </label>
            ))}
          </fieldset>
          {isListening && revealed && (
            <motion.div className="pt-transcript" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
              <p className="pt-kicker">What they said</p>
              <p>{L.script}</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="pt-actions">
        <button type="button" className="btn btn-primary" disabled={choice === null} onClick={confirm}>{label}</button>
        {choice === null && <span className="muted pt-hint">Choose an answer to continue.{es && <span lang="es" className="es"> Elige una respuesta.</span>}</span>}
      </div>
    </section>
  );
}

/** Audio for one listening clip. Two plays, like most exams. */
function ClipPlayer({ item, es }: { item: ListeningItem; es: boolean }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [plays, setPlays] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [failed, setFailed] = useState(false);
  const left = 2 - plays;

  function play() {
    const a = audio.current;
    if (!a || left <= 0 || playing) return;
    a.currentTime = 0;
    a.play().then(() => { setPlaying(true); setPlays((p) => p + 1); }).catch(() => setFailed(true));
  }

  return (
    <div className="pt-clip">
      <audio
        ref={audio}
        src={LISTENING_BASE + item.audio}
        preload="auto"
        onTimeUpdate={(e) => { const a = e.currentTarget; setProgress(a.duration ? a.currentTime / a.duration : 0); }}
        onEnded={() => { setPlaying(false); setProgress(1); }}
        onError={() => setFailed(true)}
      />
      <button type="button" className="pt-play" onClick={play} disabled={left <= 0 || playing} aria-label={playing ? "Playing" : `Play the clip, ${left} ${left === 1 ? "play" : "plays"} left`}>
        {playing ? <Bars /> : <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>}
      </button>
      <div className="pt-clip-info">
        <p className="pt-clip-who">{item.speaker} <span className="pt-ai">AI voice</span></p>
        <div className="pt-clip-bar" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
        <p className="muted pt-clip-left">
          {failed ? "The audio didn't load. Check your sound and connection." : left > 0 ? `${left} ${left === 1 ? "play" : "plays"} left` : "No plays left"}
          {es && !failed && <span lang="es" className="es"> · Puedes escucharlo dos veces.</span>}
        </p>
      </div>
    </div>
  );
}

function Bars() {
  return (
    <span className="pt-bars" aria-hidden="true">
      <span /><span /><span /><span />
    </span>
  );
}

/* ---------------- Writing ---------------- */

function WritingSection({ es, band, onSubmit }: { es: boolean; band: BandIndex; onSubmit: (prompt: string, body: string, words: number) => Promise<void> }) {
  const p = promptFor(WRITING_PROMPTS, band);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const words = countWords(text);
  const min = p.minWords ?? 30;
  const ready = words >= min;

  return (
    <section className="pt-card">
      <p className="pt-kicker">Writing</p>
      <h1 className="pt-prompt">{p.text}</h1>
      <p className="muted">{p.hint}. Write in your own words: no translators or AI, so your teacher sees what you can really do.</p>
      {es && <p lang="es" className="es">Escribe tú mismo, sin traductor. Así tu profe ve tu nivel real.</p>}
      <label htmlFor="pt-writing" className="visually-hidden">Your text</label>
      <textarea
        id="pt-writing" className="pt-textarea" value={text} maxLength={5000}
        onChange={(e) => setText(e.target.value)} onPaste={(e) => e.preventDefault()}
        spellCheck={false} autoCorrect="off" autoCapitalize="sentences" rows={10}
        aria-describedby="pt-words"
      />
      <div className="pt-wordbar" id="pt-words" aria-live="polite">
        <div className="pt-wordbar-track" aria-hidden="true"><span style={{ transform: `scaleX(${Math.min(1, words / min)})` }} className={ready ? "is-ready" : ""} /></div>
        <span>{words} {words === 1 ? "word" : "words"}{!ready && ` · at least ${min} to send`}</span>
      </div>
      <div className="pt-actions">
        <button type="button" className="btn btn-primary" disabled={!ready || busy}
          onClick={() => { setBusy(true); void onSubmit(p.text, text.trim(), words).finally(() => setBusy(false)); }}>
          {busy ? "Sending…" : "Send my writing"}
        </button>
      </div>
    </section>
  );
}

/* ---------------- Speaking ---------------- */

type RecState = "idle" | "asking" | "recording" | "recorded" | "blocked" | "unsupported";

function SpeakingSection({ es, band, onSubmit, onSkip }: {
  es: boolean; band: BandIndex;
  onSubmit: (prompt: string, blob: Blob) => Promise<void>;
  onSkip: () => void;
}) {
  const p = promptFor(SPEAKING_PROMPTS, band);
  const max = p.maxSeconds ?? 90;
  const [state, setState] = useState<RecState>(() =>
    typeof window !== "undefined" && "MediaRecorder" in window && typeof navigator.mediaDevices?.getUserMedia === "function" ? "idle" : "unsupported");
  const [seconds, setSeconds] = useState(0);
  const [blob, setBlob] = useState<Blob | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const rec = useRef<MediaRecorder | null>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => {
    window.clearInterval(timer.current);
    rec.current?.stream.getTracks().forEach((t) => t.stop());
  }, []);
  useEffect(() => () => { if (url) URL.revokeObjectURL(url); }, [url]);

  async function start() {
    setState("asking");
    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      setState("blocked");
      return;
    }
    const type = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg"].find((t) => MediaRecorder.isTypeSupported(t));
    const r = new MediaRecorder(stream, type ? { mimeType: type } : undefined);
    const chunks: Blob[] = [];
    r.ondataavailable = (e) => { if (e.data.size) chunks.push(e.data); };
    r.onstop = () => {
      stream.getTracks().forEach((t) => t.stop());
      window.clearInterval(timer.current);
      const b = new Blob(chunks, { type: r.mimeType || type || "audio/webm" });
      setBlob(b);
      setUrl(URL.createObjectURL(b));
      setState("recorded");
    };
    rec.current = r;
    r.start();
    setSeconds(0);
    setState("recording");
    const started = Date.now();
    timer.current = window.setInterval(() => {
      const s = Math.floor((Date.now() - started) / 1000);
      setSeconds(s);
      if (s >= max && r.state === "recording") r.stop();
    }, 250);
  }

  function stop() { if (rec.current?.state === "recording") rec.current.stop(); }
  function redo() { setBlob(null); setUrl(null); setSeconds(0); setState("idle"); }

  const mmss = (n: number) => `${Math.floor(n / 60)}:${String(n % 60).padStart(2, "0")}`;

  return (
    <section className="pt-card">
      <p className="pt-kicker">Speaking · last part</p>
      <h1 className="pt-prompt">{p.text}</h1>
      <p className="muted">{p.hint}. Take a few seconds to think first. Only your teacher can hear the recording.</p>
      {es && <p lang="es" className="es">Piensa unos segundos antes de grabar. Solo tu profe escucha la grabación.</p>}

      <div className={`pt-rec is-${state}`}>
        {(state === "idle" || state === "asking") && (
          <button type="button" className="pt-rec-btn" onClick={() => void start()} disabled={state === "asking"}>
            <span className="pt-rec-dot" aria-hidden="true" />
            {state === "asking" ? "Allow the microphone…" : "Start recording"}
          </button>
        )}
        {state === "recording" && (
          <>
            <button type="button" className="pt-rec-btn is-live" onClick={stop}>
              <span className="pt-rec-square" aria-hidden="true" /> Stop
            </button>
            <p className="pt-rec-time" aria-live="off"><span className="pt-live" aria-hidden="true" /> {mmss(seconds)} <span className="muted">/ {mmss(max)}</span></p>
          </>
        )}
        {state === "recorded" && url && (
          <div className="pt-rec-done">
            <p><strong>Listen back.</strong> Happy with it? Send it. If not, record again.</p>
            <audio controls src={url} className="pt-rec-audio" />
            <div className="pt-actions">
              <button type="button" className="btn btn-primary" disabled={busy}
                onClick={() => { if (!blob) return; setBusy(true); void onSubmit(p.text, blob).finally(() => setBusy(false)); }}>
                {busy ? "Uploading…" : "Send my recording"}
              </button>
              <button type="button" className="btn btn-ghost" onClick={redo} disabled={busy}>Record again</button>
            </div>
          </div>
        )}
        {state === "blocked" && (
          <p className="form-error" role="alert">The microphone is blocked. Allow it in your browser settings and press the button again, or skip this part.</p>
        )}
        {state === "unsupported" && (
          <p className="form-error" role="alert">This browser can't record audio. Try Chrome, Edge or Safari, or skip this part for now.</p>
        )}
        {state === "blocked" && <button type="button" className="btn btn-ghost" onClick={() => setState("idle")}>Try again</button>}
      </div>

      <p className="pt-skip">
        Can't record right now?{" "}
        <button type="button" className="link-btn" onClick={onSkip} disabled={state === "recording" || busy}>Skip speaking</button>
        <span className="muted"> Your speaking band stays unmeasured until you do it with your teacher.</span>
      </p>
    </section>
  );
}
