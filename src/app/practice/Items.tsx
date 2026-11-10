import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import type { Item } from "../../content/practice/types";
import { matches, normalise, overlap, shuffle } from "../../lib/answers";
import { LISTENING_BASE } from "../../lib/placementApi";

/** Score for one item: 1 right, 0.5 right with a hint or half right, 0 wrong. */
export type Verdict = { score: number; correct: string };

/* ---------- Audio ---------- */
export function Clip({ src }: { src: string }) {
  const a = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [slow, setSlow] = useState(false);
  const [failed, setFailed] = useState(false);
  function play() {
    const el = a.current; if (!el) return;
    el.playbackRate = slow ? 0.75 : 1; el.currentTime = 0;
    el.play().then(() => setPlaying(true)).catch(() => setFailed(true));
  }
  return (
    <div className="px-clip">
      <audio ref={a} src={LISTENING_BASE + src} preload="auto" onEnded={() => setPlaying(false)} onError={() => setFailed(true)} />
      <button type="button" className="px-play" onClick={play} aria-label={playing ? "Playing" : "Play the audio"}>
        {playing ? <span className="pt-bars" aria-hidden="true"><span /><span /><span /><span /></span>
          : <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>}
      </button>
      <div className="px-clip-text">
        <strong>{failed ? "Audio didn't load" : "Listen"}</strong>
        <span className="pt-ai">AI voice</span>
      </div>
      <label className="px-slow"><input type="checkbox" checked={slow} onChange={(e) => setSlow(e.target.checked)} /> Slower</label>
    </div>
  );
}

/* ---------- Speech recognition (free, in the browser) ---------- */
type Rec = { lang: string; interimResults: boolean; continuous: boolean; maxAlternatives: number; start(): void; stop(): void; abort(): void;
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null; onerror: ((e: unknown) => void) | null; onend: (() => void) | null };
export function makeRecogniser(): Rec | null {
  const W = window as unknown as { SpeechRecognition?: new () => Rec; webkitSpeechRecognition?: new () => Rec };
  const C = W.SpeechRecognition ?? W.webkitSpeechRecognition;
  if (!C) return null;
  const r = new C(); r.lang = "en-US"; r.maxAlternatives = 3;
  return r;
}

/* ---------- One item ---------- */
export function ItemView({ item, onAnswer }: { item: Item; onAnswer: (v: Verdict) => void }) {
  switch (item.kind) {
    case "choice": return <Choice item={item} onAnswer={onAnswer} />;
    case "type": return <TypeIn item={item} onAnswer={onAnswer} />;
    case "transform": return <Transform item={item} onAnswer={onAnswer} />;
    case "order": return <Order item={item} onAnswer={onAnswer} />;
    case "fix": return <Fix item={item} onAnswer={onAnswer} />;
    case "say": return <Say item={item} onAnswer={onAnswer} />;
  }
}

function Choice({ item, onAnswer }: { item: Extract<Item, { kind: "choice" }>; onAnswer: (v: Verdict) => void }) {
  const [pick, setPick] = useState<number | null>(null);
  const [locked, setLocked] = useState(false);
  // Content is written with the answer first; shuffle so the right answer isn't always A.
  const order = useMemo(() => shuffle(item.options.map((_, i) => i)), [item]);
  return (
    <div className="px-item">
      {item.audio && <Clip src={item.audio} />}
      {item.context && <blockquote className="px-context">{item.context}</blockquote>}
      <fieldset className="pt-options" disabled={locked}>
        <legend className="pt-stem">{item.prompt}</legend>
        {order.map((i, pos) => (
          <label key={i} className={`pt-option${pick === i ? " is-picked" : ""}${locked && i === item.answer ? " is-right" : ""}${locked && pick === i && i !== item.answer ? " is-wrong" : ""}`}>
            <input type="radio" name="opt" checked={pick === i} onChange={() => setPick(i)} />
            <span className="pt-option-key" aria-hidden="true">{"ABCD"[pos]}</span><span>{item.options[i]}</span>
          </label>
        ))}
      </fieldset>
      <CheckBar disabled={pick === null || locked} onCheck={() => { setLocked(true); onAnswer({ score: pick === item.answer ? 1 : 0, correct: item.options[item.answer] }); }} />
    </div>
  );
}

function TypeIn({ item, onAnswer }: { item: Extract<Item, { kind: "type" }>; onAnswer: (v: Verdict) => void }) {
  const [val, setVal] = useState("");
  const [hinted, setHinted] = useState(false);
  const [locked, setLocked] = useState(false);
  const dictation = !!item.audio;
  function check() {
    setLocked(true);
    const ok = matches(val, item.accept);
    onAnswer({ score: ok ? (hinted ? 0.5 : 1) : 0, correct: dictation ? item.accept[0] : `${item.before ?? ""} ${item.accept[0]} ${item.after ?? ""}`.trim() });
  }
  return (
    <div className="px-item">
      <p className="pt-stem">{item.prompt}</p>
      {item.audio && <Clip src={item.audio} />}
      {dictation ? (
        <textarea className="px-input px-area" value={val} onChange={(e) => setVal(e.target.value)} disabled={locked} rows={2}
          aria-label="Type what you hear" autoCapitalize="sentences" spellCheck={false} />
      ) : (
        <p className="px-gapline">
          {item.before && <span>{item.before} </span>}
          <input className="px-input px-gap" value={val} onChange={(e) => setVal(e.target.value)} disabled={locked} aria-label="Your answer"
            autoCapitalize="none" autoComplete="off" spellCheck={false} onKeyDown={(e) => { if (e.key === "Enter" && val.trim() && !locked) check(); }} />
          {item.after && <span> {item.after}</span>}
        </p>
      )}
      {item.hint && !locked && (hinted ? <p className="px-hint">Hint: {item.hint}</p>
        : <button type="button" className="link-btn px-hint-btn" onClick={() => setHinted(true)}>Show a hint (half points)</button>)}
      <CheckBar disabled={!val.trim() || locked} onCheck={check} />
    </div>
  );
}

function Transform({ item, onAnswer }: { item: Extract<Item, { kind: "transform" }>; onAnswer: (v: Verdict) => void }) {
  const [val, setVal] = useState("");
  const [locked, setLocked] = useState(false);
  return (
    <div className="px-item">
      <p className="pt-stem">{item.prompt}</p>
      <blockquote className="px-context">{item.source}</blockquote>
      {item.keyword && <p className="px-keyword">Use: <strong>{item.keyword}</strong></p>}
      <textarea className="px-input px-area" value={val} onChange={(e) => setVal(e.target.value)} disabled={locked} rows={2}
        aria-label="Your sentence" autoCapitalize="sentences" spellCheck={false} />
      <CheckBar disabled={!val.trim() || locked} onCheck={() => { setLocked(true); onAnswer({ score: matches(val, item.accept) ? 1 : 0, correct: item.accept[0] }); }} />
    </div>
  );
}

function Order({ item, onAnswer }: { item: Extract<Item, { kind: "order" }>; onAnswer: (v: Verdict) => void }) {
  const bank = useMemo(() => {
    let s = shuffle(item.words.map((w, i) => ({ w, i })));
    if (s.every((x, k) => x.i === k)) s = [...s.slice(1), s[0]];
    return s;
  }, [item]);
  const [picked, setPicked] = useState<number[]>([]);
  const [locked, setLocked] = useState(false);
  const built = picked.map((k) => bank[k].w).join(" ");
  return (
    <div className="px-item">
      <p className="pt-stem">{item.prompt}</p>
      <div className="px-build" aria-live="polite">
        {picked.length === 0 && <span className="muted">Tap the words below.</span>}
        {picked.map((k) => (
          <button key={k} type="button" className="px-word is-placed" disabled={locked} onClick={() => setPicked(picked.filter((x) => x !== k))}>{bank[k].w}</button>
        ))}
      </div>
      <div className="px-bank">
        {bank.map((b, k) => (
          <button key={k} type="button" className="px-word" disabled={locked || picked.includes(k)} onClick={() => setPicked([...picked, k])}>{b.w}</button>
        ))}
      </div>
      <CheckBar disabled={picked.length !== bank.length || locked} onCheck={() => { setLocked(true); onAnswer({ score: normalise(built) === normalise(item.answer) ? 1 : 0, correct: item.answer }); }} />
    </div>
  );
}

function Fix({ item, onAnswer }: { item: Extract<Item, { kind: "fix" }>; onAnswer: (v: Verdict) => void }) {
  const [part, setPart] = useState<number | null>(null);
  const [val, setVal] = useState("");
  const [locked, setLocked] = useState(false);
  const fixed = item.parts.map((p, i) => (i === item.wrong ? item.accept[0] : p)).join(" ");
  function check() {
    setLocked(true);
    const rightPart = part === item.wrong;
    const rightFix = rightPart && matches(val, item.accept);
    onAnswer({ score: rightFix ? 1 : rightPart ? 0.5 : 0, correct: fixed });
  }
  return (
    <div className="px-item">
      <p className="pt-stem">{item.prompt}</p>
      <div className="px-parts" role="group" aria-label="Parts of the sentence">
        {item.parts.map((p, i) => (
          <button key={i} type="button" className={`px-part${part === i ? " is-sel" : ""}`} aria-pressed={part === i} disabled={locked}
            onClick={() => { setPart(i); setVal(""); }}>{p}</button>
        ))}
      </div>
      {part !== null && (
        <motion.label className="px-fixline" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
          <span>Correct it:</span>
          <input className="px-input" value={val} onChange={(e) => setVal(e.target.value)} disabled={locked} placeholder={item.parts[part]}
            autoCapitalize="none" autoComplete="off" spellCheck={false} onKeyDown={(e) => { if (e.key === "Enter" && val.trim() && !locked) check(); }} />
        </motion.label>
      )}
      <CheckBar disabled={part === null || !val.trim() || locked} onCheck={check} />
    </div>
  );
}

function Say({ item, onAnswer }: { item: Extract<Item, { kind: "say" }>; onAnswer: (v: Verdict) => void }) {
  const rec = useRef<Rec | null>(null);
  const [supported] = useState(() => makeRecogniser() !== null);
  const [state, setState] = useState<"idle" | "listening" | "heard" | "typed">("idle");
  const [heardText, setHeard] = useState("");
  const [typed, setTyped] = useState("");
  const [tries, setTries] = useState(0);
  const [locked, setLocked] = useState(false);
  useEffect(() => () => rec.current?.abort(), []);

  function listen() {
    const r = makeRecogniser(); if (!r) return;
    rec.current = r; setState("listening"); setHeard("");
    r.onresult = (e) => {
      const alts = Array.from(e.results[0]).map((a) => a.transcript);
      const best = alts.sort((x, y) => overlap(y, item.target) - overlap(x, item.target))[0] ?? "";
      setHeard(best); setState("heard"); setTries((t) => t + 1);
    };
    r.onerror = () => setState("idle");
    r.onend = () => setState((s) => (s === "listening" ? "idle" : s));
    r.start();
  }
  const score = overlap(heardText, item.target);
  return (
    <div className="px-item">
      <p className="pt-stem">{item.prompt}</p>
      <blockquote className="px-say">{item.target}</blockquote>
      {supported && state !== "typed" ? (
        <div className="px-mic">
          <button type="button" className={`pt-rec-btn${state === "listening" ? " is-live" : ""}`} onClick={listen} disabled={state === "listening" || locked}>
            <span className="pt-rec-dot" aria-hidden="true" /> {state === "listening" ? "Listening…" : tries ? "Say it again" : "Tap and speak"}
          </button>
          {state === "heard" && (
            <p className={`px-heard${score >= 0.75 ? " is-good" : ""}`} aria-live="polite">
              I heard: “{heardText}” · {Math.round(score * 100)}% match{score < 0.75 && tries < 3 ? ". Try again, a bit slower." : ""}
            </p>
          )}
          <button type="button" className="link-btn px-hint-btn" onClick={() => setState("typed")}>Can't speak right now? Type it instead</button>
        </div>
      ) : (
        <>
          {!supported && <p className="muted">This browser can't listen. Type the sentence instead, then practise saying it out loud.</p>}
          <textarea className="px-input px-area" rows={2} value={typed} onChange={(e) => setTyped(e.target.value)} disabled={locked} aria-label="Type the sentence" />
        </>
      )}
      <CheckBar
        disabled={locked || (state === "typed" || !supported ? !typed.trim() : state !== "heard")}
        onCheck={() => {
          setLocked(true);
          const s = state === "typed" || !supported ? (matches(typed, [item.target]) ? 0.5 : 0) : score >= 0.75 ? 1 : score >= 0.5 ? 0.5 : 0;
          onAnswer({ score: s, correct: item.target });
        }}
      />
    </div>
  );
}

function CheckBar({ disabled, onCheck }: { disabled: boolean; onCheck: () => void }) {
  return (
    <div className="pt-actions">
      <button type="button" className="btn btn-primary" disabled={disabled} onClick={onCheck}>Check</button>
    </div>
  );
}
