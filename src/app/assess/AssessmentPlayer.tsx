import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import type { BandAssessment, TestPart } from "../../content/assessments/types";
import { badgeInfo, savePractice, submitAssessment, type AssessmentOutcome } from "../../lib/progressApi";
import { useAuth } from "../../lib/auth";
import { Icon } from "../../components/Icon";
import { Clip, ItemView } from "../practice/Items";
import { CreateStep, type CreateResult } from "../practice/CreateStep";
import "../practice/practice.css";
import "./assess.css";

type Phase = "intro" | "reading" | "listening" | "writing" | "speaking" | "saving" | "result" | "error";
const TESTING: Phase[] = ["reading", "listening", "writing", "speaking"];

/**
 * The four-skill Midpoint or Gate. No feedback during the test; results at the end.
 * In preview (teachers) nothing is saved and the result is worked out here.
 */
export function AssessmentPlayer({ test, preview, onClose }: { test: BandAssessment; preview: boolean; onClose: (changed: boolean) => void }) {
  const { session } = useAuth();
  const [phase, setPhase] = useState<Phase>("intro");
  const [reading, setReading] = useState<[number, number] | null>(null);
  const [listening, setListening] = useState<[number, number] | null>(null);
  const [writing, setWriting] = useState<{ id: string; ok: boolean | null } | null>(null);
  const [speaking, setSpeaking] = useState<{ id: string; ok: boolean | null } | null>(null);
  const [outcome, setOutcome] = useState<AssessmentOutcome | null>(null);
  const [error, setError] = useState("");
  const [leaving, setLeaving] = useState(false);

  useEffect(() => { document.querySelector(".pt.px")?.scrollTo({ top: 0 }); }, [phase]);
  useEffect(() => {
    const root = document.getElementById("root");
    if (root) root.inert = true;
    return () => { if (root) root.inert = false; };
  }, []);

  async function hand(kind: "writing" | "speaking", r: CreateResult) {
    const id = preview ? `preview-${kind}` : await savePractice(session!.user.id, `${test.kind}:${test.band}`, r.prompt, r.text, r.words, r.audio, r.ok, test.band);
    if (kind === "writing") { setWriting({ id, ok: r.ok }); setPhase("speaking"); }
    else { setSpeaking({ id, ok: r.ok }); await finish({ id, ok: r.ok }); }
  }

  async function finish(sp: { id: string; ok: boolean | null }) {
    setPhase("saving");
    const r = reading!, l = listening!, w = writing!;
    if (preview) {
      const rp = Math.round((r[0] / r[1]) * 100), lp = Math.round((l[0] / l[1]) * 100);
      const passed = rp >= test.bar && lp >= test.bar && w.ok !== false && sp.ok !== false;
      setOutcome({ id: "preview", status: !passed ? "failed" : test.kind === "midpoint" ? "passed" : "awaiting_teacher", passed,
        reading_pct: rp, listening_pct: lp, bar: test.bar, xp: 0, coins: 0, badges: [] });
      setPhase("result"); return;
    }
    try {
      setOutcome(await submitAssessment(test.band, test.kind, r, l, w.id, sp.id));
      setPhase("result");
    } catch (e) {
      const m = (e as { message?: string }).message ?? "";
      setError(m.includes("tomorrow") ? "You've already had a try today. Come back tomorrow."
        : m.includes("not ready") ? "Some skills dropped back to review. Fix them on the map, then try again."
        : "That didn't save. Check your connection and try again.");
      setPhase("error");
    }
  }

  const step = TESTING.indexOf(phase);
  const label = `${test.title}${preview ? " · preview" : ""}`;

  return createPortal(
    <div className="pt px as" role="dialog" aria-modal="true" aria-label={label}>
      <header className="px-head">
        <button type="button" className="px-close" aria-label={phase === "result" ? "Done" : "Leave the test"}
          onClick={() => (step >= 0 ? setLeaving(true) : onClose(phase === "result"))}>
          <Icon name="x" size={22} />
        </button>
        <p className="px-head-title"><span>{step >= 0 ? `Part ${step + 1} of 4` : test.kind === "gate" ? "Gate" : "Midpoint"}</span>{label}</p>
        {step >= 0 && (
          <ol className="as-parts" aria-label="Parts">
            {TESTING.map((p, i) => <li key={p} className={i < step ? "is-done" : i === step ? "is-now" : ""}>{PART_NAMES[p]}</li>)}
          </ol>
        )}
      </header>
      {leaving && (
        <div className="as-leave" role="alertdialog" aria-labelledby="as-leave-t">
          <p id="as-leave-t"><strong>Leave the test?</strong> Nothing you've done so far will count.</p>
          <div className="pt-actions">
            <button type="button" className="btn btn-primary btn-sm" onClick={() => setLeaving(false)} autoFocus>Keep going</button>
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => onClose(false)}>Leave</button>
          </div>
        </div>
      )}
      <div className="pt-main">
        <AnimatePresence mode="wait">
          <motion.section key={phase} className="pt-card" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            {phase === "intro" && <Intro test={test} preview={preview} onStart={() => setPhase("reading")} />}
            {phase === "reading" && <Parts parts={test.reading} kind="reading" onDone={(s, t) => { setReading([s, t]); setPhase("listening"); }} />}
            {phase === "listening" && <Parts parts={test.listening} kind="listening" onDone={(s, t) => { setListening([s, t]); setPhase("writing"); }} />}
            {phase === "writing" && (
              <>
                <p className="pt-kicker">Part 3 · Writing</p>
                <CreateStep key="w" task={test.writing} only="write" exam submitLabel="Hand in my writing" onSubmit={(r) => hand("writing", r)} />
              </>
            )}
            {phase === "speaking" && (
              <>
                <p className="pt-kicker">Part 4 · Speaking</p>
                <CreateStep key="s" task={test.speaking} only="speak" exam submitLabel="Hand in and finish" onSubmit={(r) => hand("speaking", r)} />
              </>
            )}
            {phase === "saving" && <div className="pt-center"><h2>Marking…</h2></div>}
            {phase === "error" && (
              <div className="pt-center">
                <h2>Not saved</h2>
                <p className="muted">{error}</p>
                <div className="pt-actions">
                  {!error.includes("tomorrow") && !error.includes("review") && speaking && <button type="button" className="btn btn-primary" onClick={() => void finish(speaking)}>Try again</button>}
                  <button type="button" className="btn btn-ghost" onClick={() => onClose(false)}>Back to the band</button>
                </div>
              </div>
            )}
            {phase === "result" && outcome && <Result test={test} outcome={outcome} writingOk={writing?.ok ?? null} speakingOk={speaking?.ok ?? null} preview={preview} onClose={() => onClose(true)} />}
          </motion.section>
        </AnimatePresence>
      </div>
    </div>,
    document.body,
  );
}

const PART_NAMES: Record<string, string> = { reading: "Reading", listening: "Listening", writing: "Writing", speaking: "Speaking" };

function Intro({ test, preview, onStart }: { test: BandAssessment; preview: boolean; onStart: () => void }) {
  const q = (parts: TestPart[]) => parts.reduce((n, p) => n + p.items.length, 0);
  const rows = [
    { icon: "book" as const, name: "Reading", what: `${test.reading.length === 1 ? "1 text" : `${test.reading.length} texts`}, ${q(test.reading)} questions` },
    { icon: "headphones" as const, name: "Listening", what: `${test.listening.length} recordings, ${q(test.listening)} questions` },
    { icon: "sparkle" as const, name: "Writing", what: `At least ${test.writing.minWords} words` },
    { icon: "mic" as const, name: "Speaking", what: `About ${test.kind === "gate" ? "90 seconds" : "a minute"}, recorded` },
  ];
  return (
    <div className="px-intro">
      <div className={`as-emblem is-${test.kind}`} aria-hidden="true"><Icon name={test.kind === "gate" ? "trophy" : "star"} size={40} /></div>
      <p className="pt-kicker">{test.kind === "gate" ? "Gate" : "Midpoint"} · four skills · about {test.kind === "gate" ? 40 : 25} minutes</p>
      <h1>{test.title}</h1>
      <p className="pt-lede">{test.story}</p>
      <ul className="as-plan">
        {rows.map((r) => (
          <li key={r.name}><span className="as-plan-icon" aria-hidden="true"><Icon name={r.icon} size={22} /></span><strong>{r.name}</strong><span>{r.what}</span></li>
        ))}
      </ul>
      <ul className="as-rules">
        <li>You need <strong>{test.bar}%</strong> in reading and in listening, and every check green in writing and speaking.</li>
        <li>No answers are shown during the test. You'll see how you did at the end.</li>
        <li>{test.kind === "gate" ? "If you pass, your teacher reads and listens before B2+ opens." : "Your teacher can read and listen to your work too."}</li>
        <li>One try a day. Use headphones, and find a quiet place for speaking.</li>
      </ul>
      {preview && <p className="preview-banner">Teacher preview: nothing is saved.</p>}
      <button type="button" className="btn btn-primary pt-go" onClick={onStart}>Start part 1: Reading</button>
    </div>
  );
}

/** Reading texts or listening clips, each with its questions. No feedback until the end. */
function Parts({ parts, kind, onDone }: { parts: TestPart[]; kind: "reading" | "listening"; onDone: (score: number, total: number) => void }) {
  const [p, setP] = useState(0);
  const [k, setK] = useState(0);
  const [score, setScore] = useState(0);
  const part = parts[p];
  const total = parts.reduce((n, x) => n + x.items.length, 0);
  const done = parts.slice(0, p).reduce((n, x) => n + x.items.length, 0) + k;

  function answer(v: number) {
    const s = score + v;
    setScore(s);
    if (k < part.items.length - 1) setK(k + 1);
    else if (p < parts.length - 1) { setP(p + 1); setK(0); document.querySelector(".pt.px")?.scrollTo({ top: 0 }); }
    else onDone(s, total);
  }

  return (
    <div className="as-part">
      <div className="pt-meter" aria-hidden="true">
        {Array.from({ length: total }, (_, i) => <span key={i} className={i < done ? "is-on" : i === done ? "is-now" : ""} />)}
      </div>
      <div className="as-grid">
        <div className="as-source">
          <p className="pt-kicker">{kind === "reading" ? "Text" : "Recording"} {p + 1} of {parts.length}</p>
          <h2>{part.title}</h2>
          {part.text && <div className="as-passage" tabIndex={0} aria-label={`Text: ${part.title}`}>{part.text.split(/\n\s*\n/).map((para, i) => <p key={i}>{para}</p>)}</div>}
          {part.audio && (
            <>
              <Clip key={part.audio} src={part.audio} />
              {part.speaker && <p className="muted px-small">{part.speaker}. Listen as many times as you need.</p>}
            </>
          )}
        </div>
        <div className="as-q">
          <p className="pt-kicker">Question {k + 1} of {part.items.length}</p>
          <ItemView key={`${p}-${k}`} item={part.items[k]} onAnswer={(v) => answer(v.score)} />
        </div>
      </div>
    </div>
  );
}

function Result({ test, outcome, writingOk, speakingOk, preview, onClose }: {
  test: BandAssessment; outcome: AssessmentOutcome; writingOk: boolean | null; speakingOk: boolean | null; preview: boolean; onClose: () => void;
}) {
  const rows = [
    { name: "Reading", icon: "book" as const, pct: outcome.reading_pct },
    { name: "Listening", icon: "headphones" as const, pct: outcome.listening_pct },
  ];
  const head = outcome.status === "passed" ? `${test.band} Midpoint passed.`
    : outcome.status === "awaiting_teacher" ? "You passed. One last step."
    : "Not this time.";
  return (
    <div className="px-result as-result">
      <div className={`as-emblem is-${test.kind}${outcome.passed ? " is-pass" : ""}`} aria-hidden="true"><Icon name={outcome.passed ? "trophy" : "arrow"} size={44} /></div>
      <h1>{head}</h1>
      {outcome.status === "awaiting_teacher" && <p className="pt-lede">Your teacher will now read your writing and listen to your speaking. When they confirm, <strong>B2+ opens</strong>.</p>}
      {outcome.status === "passed" && <p className="pt-lede">Keep going: the Gate opens when most of the band's skills are Mastered.</p>}
      {outcome.status === "failed" && <p className="pt-lede">Look at which part fell short, practise those skills, and try again tomorrow.</p>}
      <ul className="as-scores">
        {rows.map((r) => (
          <li key={r.name} className={r.pct >= outcome.bar ? "is-ok" : ""}>
            <span className="as-plan-icon" aria-hidden="true"><Icon name={r.icon} size={20} /></span>
            <strong>{r.name}</strong>
            <span className="as-bar" aria-hidden="true"><span style={{ width: `${r.pct}%` }} /><i style={{ left: `${outcome.bar}%` }} /></span>
            <span>{r.pct}%</span>
          </li>
        ))}
        {[["Writing", "sparkle", writingOk], ["Speaking", "mic", speakingOk]].map(([name, icon, ok]) => (
          <li key={name as string} className={ok !== false ? "is-ok" : ""}>
            <span className="as-plan-icon" aria-hidden="true"><Icon name={icon as "mic"} size={20} /></span>
            <strong>{name as string}</strong>
            <span className="as-verdict">{ok === null ? "Sent to your teacher" : ok ? "All checks green" : "Some checks missing"}</span>
          </li>
        ))}
      </ul>
      <p className="muted">You needed {outcome.bar}% in reading and listening.</p>
      {!preview && (
        <div className="px-loot">
          <div className="px-counter is-xp"><span className="px-counter-icon" aria-hidden="true"><Icon name="bolt" size={22} fill /></span><strong>+{outcome.xp}</strong><span>XP</span></div>
          <div className="px-counter is-coin"><span className="px-counter-icon" aria-hidden="true"><Icon name="coin" size={22} /></span><strong>+{outcome.coins}</strong><span>Coins</span></div>
        </div>
      )}
      {outcome.badges.length > 0 && (
        <div className="px-badges">
          {outcome.badges.map((b) => (
            <div key={b} className="px-badge"><span aria-hidden="true"><Icon name="trophy" size={28} /></span><strong>{badgeInfo(b).name}</strong><small>{badgeInfo(b).blurb}</small></div>
          ))}
        </div>
      )}
      <div className="pt-actions px-result-actions">
        <button type="button" className="btn btn-primary" onClick={onClose}>Back to {test.band}</button>
      </div>
    </div>
  );
}
