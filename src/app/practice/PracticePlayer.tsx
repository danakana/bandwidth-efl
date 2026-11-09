import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useTransform } from "motion/react";
import { STEP_BLOOM, STEP_BLURB, STEP_NAMES, type NodePractice } from "../../content/practice/types";
import { mixedItems, type Checkpoint } from "../../content/practice";
import { NODES } from "../../content/curriculum";
import { shuffle } from "../../lib/answers";
import { badgeInfo, recordMilestone, recordStep, savePractice, type StepOutcome } from "../../lib/progressApi";
import { useAuth } from "../../lib/auth";
import { Logo } from "../../components/Logo";
import { Session } from "./Session";
import { CreateStep } from "./CreateStep";
import "./practice.css";

export type PlayTarget =
  | { kind: "step"; practice: NodePractice; step: number }
  | { kind: "milestone"; checkpoint: Checkpoint };

/** Full-screen practice: intro, the items, then the reward screen. */
export function PracticePlayer({ target, onClose }: { target: PlayTarget; onClose: (changed: boolean) => void }) {
  const { session } = useAuth();
  const [phase, setPhase] = useState<"intro" | "play" | "saving" | "result" | "error">("intro");
  const [outcome, setOutcome] = useState<StepOutcome | null>(null);
  const [raw, setRaw] = useState<{ score: number; total: number } | null>(null);
  const [round, setRound] = useState(0);

  const title = target.kind === "milestone" ? target.checkpoint.title
    : NODES.find((n) => n.id === target.practice.nodeId)?.title ?? "";
  const stepIdx = target.kind === "step" ? target.step - 1 : -1;
  const label = target.kind === "milestone" ? "Checkpoint" : target.step === 7 ? "Skill check" : `Step ${target.step} · ${STEP_NAMES[stepIdx]}`;

  const items = useMemo(() => {
    if (target.kind === "milestone") return mixedItems(target.checkpoint.nodeIds, 9);
    if (target.step === 7) return mixedItems([target.practice.nodeId], 6);
    if (target.step <= 5) {
      const list = target.practice.steps[target.step - 1];
      // Keep listening first in Notice so students hear the clip before reading questions about it.
      return target.step === 1 ? [...list.filter((i) => "audio" in i && i.audio), ...shuffle(list.filter((i) => !("audio" in i && i.audio)))] : shuffle(list);
    }
    return [];
    // A new round reshuffles.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, round]);

  useEffect(() => { window.scrollTo({ top: 0 }); }, [phase]);

  async function finish(score: number, total: number) {
    setRaw({ score, total }); setPhase("saving");
    try {
      const o = target.kind === "milestone"
        ? await recordMilestone(target.checkpoint.id, score, total)
        : await recordStep(target.practice.nodeId, target.step, score, total);
      setOutcome(o); setPhase("result");
    } catch { setPhase("error"); }
  }

  return (
    <div className="pt px">
      <header className="pt-head">
        <Logo size={28} tone="dark" />
        <p className="px-head-title">{title}</p>
        <button type="button" className="link-btn pt-exit" onClick={() => onClose(phase === "result")}>{phase === "result" ? "Done" : "Leave"}</button>
      </header>
      <main id="main" className="pt-main">
        <AnimatePresence mode="wait">
          <motion.section key={phase + round} className="pt-card" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            {phase === "intro" && <Intro target={target} label={label} onStart={() => setPhase("play")} />}
            {phase === "play" && (target.kind === "step" && target.step === 6
              ? <CreateStep task={target.practice.create} onSubmit={async (r) => {
                  try { await savePractice(session!.user.id, target.practice.nodeId, r.prompt, r.text, r.words, r.audio, r.ok); }
                  catch { setPhase("error"); return; }
                  await finish(1, 1);
                }} />
              : <Session items={items} label={label} onDone={(s, t) => void finish(s, t)} />)}
            {phase === "saving" && <div className="pt-center"><h2>Saving…</h2></div>}
            {phase === "error" && (
              <div className="pt-center">
                <h2>That didn't save</h2>
                <p className="muted">Check your connection. Your answers weren't lost on our side; try again.</p>
                <button type="button" className="btn btn-primary" onClick={() => raw ? void finish(raw.score, raw.total) : setPhase("play")}>Try again</button>
              </div>
            )}
            {phase === "result" && outcome && raw && (
              <Result outcome={outcome} raw={raw} isCreate={target.kind === "step" && target.step === 6}
                onAgain={() => { setRound(round + 1); setOutcome(null); setPhase("play"); }}
                onClose={() => onClose(true)} />
            )}
          </motion.section>
        </AnimatePresence>
      </main>
    </div>
  );
}

function Intro({ target, label, onStart }: { target: PlayTarget; label: string; onStart: () => void }) {
  const [open, setOpen] = useState(target.kind === "step" && target.step === 1);
  if (target.kind === "milestone") {
    return (
      <div className="px-intro">
        <div className="px-boss" aria-hidden="true">⚔</div>
        <p className="pt-kicker">Checkpoint · 9 mixed questions</p>
        <h1>{target.checkpoint.title}</h1>
        <p className="pt-lede">{target.checkpoint.story}</p>
        <p className="muted">Everything from the last few skills, mixed together. 80% beats the boss and earns a badge and 30 coins.</p>
        <button type="button" className="btn btn-primary pt-go" onClick={onStart}>Fight the boss</button>
      </div>
    );
  }
  const p = target.practice;
  const s = target.step;
  return (
    <div className="px-intro">
      <p className="pt-kicker">{label}{s <= 6 ? ` · ${STEP_BLOOM[s - 1]}` : ""}</p>
      <h1>{s === 7 ? "Is it still there?" : STEP_BLURB[s - 1]}</h1>
      {s === 7 && <p className="pt-lede">A short mixed check on a different day. This is how a skill becomes Secure, then Mastered.</p>}
      <button type="button" className="px-rule-toggle" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? "Hide the rule" : "Review the rule"}
      </button>
      {open && (
        <div className="px-rule">
          <p>{p.explain}</p>
          <ul>{p.pattern.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      )}
      <p className="muted">You need 80% to pass. No lives, no timer: mistakes are how you learn.</p>
      <button type="button" className="btn btn-primary pt-go" onClick={onStart}>{s === 6 ? "Start creating" : "Start"}</button>
    </div>
  );
}

function Result({ outcome, raw, isCreate, onAgain, onClose }: { outcome: StepOutcome; raw: { score: number; total: number }; isCreate: boolean; onAgain: () => void; onClose: () => void }) {
  const pct = outcome.pct;
  return (
    <div className="px-result">
      {outcome.passed && <Burst />}
      <motion.div className={`px-ring${outcome.passed ? " is-pass" : ""}`} initial={{ scale: 0.6 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 220, damping: 14 }}>
        <span>{isCreate ? "✓" : `${pct}%`}</span>
      </motion.div>
      <h1>{outcome.passed ? (isCreate ? "Sent and passed!" : pick(["Step cleared!", "Level up!", "You've got it."])) : "Not yet. Let's go again."}</h1>
      {!isCreate && <p className="muted">{fmt(raw.score)} out of {raw.total} · you need 80%</p>}
      {isCreate && <p className="muted">Your teacher can read or listen to it and leave feedback.</p>}
      <div className="px-loot">
        <Counter label="XP" value={outcome.xp} cls="is-xp" />
        <Counter label="Coins" value={outcome.coins} cls="is-coin" />
      </div>
      {outcome.next_check_at && outcome.steps_passed === 6 && outcome.state === "practising" && (
        <p className="px-next">All six steps done. Come back <strong>tomorrow</strong> for a quick check: that makes this skill <strong>Secure</strong>.</p>
      )}
      {outcome.badges.length > 0 && (
        <div className="px-badges">
          {outcome.badges.map((b, i) => (
            <motion.div key={b} className="px-badge" initial={{ rotateY: 90, opacity: 0 }} animate={{ rotateY: 0, opacity: 1 }} transition={{ delay: 0.5 + i * 0.2 }}>
              <span aria-hidden="true">★</span><strong>{badgeInfo(b).name}</strong><small>{badgeInfo(b).blurb}</small>
            </motion.div>
          ))}
        </div>
      )}
      <div className="pt-actions px-result-actions">
        {!outcome.passed && <button type="button" className="btn btn-primary" onClick={onAgain}>Try again (new order)</button>}
        <button type="button" className={outcome.passed ? "btn btn-primary" : "btn btn-ghost"} onClick={onClose}>{outcome.passed ? "Continue" : "Back to the skill"}</button>
      </div>
    </div>
  );
}

function Counter({ label, value, cls }: { label: string; value: number; cls: string }) {
  const mv = useMotionValue(0);
  const shown = useTransform(mv, (v) => `+${Math.round(v)}`);
  useEffect(() => { const c = animate(mv, value, { duration: 1, ease: "easeOut", delay: 0.3 }); return c.stop; }, [mv, value]);
  return (
    <div className={`px-counter ${cls}`}>
      <span className="px-counter-icon" aria-hidden="true">{cls === "is-coin" ? "◎" : "⚡"}</span>
      <motion.strong>{shown}</motion.strong>
      <span>{label}</span>
    </div>
  );
}

const COLORS = ["var(--band-a1)", "var(--band-a2)", "var(--band-b1)", "var(--band-b2)", "var(--band-c1)"];
function Burst() {
  const bits = useMemo(() => Array.from({ length: 28 }, (_, i) => ({
    x: (Math.random() - 0.5) * 520, y: -Math.random() * 300 - 60, r: Math.random() * 360, c: COLORS[i % COLORS.length], d: Math.random() * 0.2,
  })), []);
  return (
    <div className="px-burst" aria-hidden="true">
      {bits.map((b, i) => (
        <motion.span key={i} style={{ background: b.c }} initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
          animate={{ x: b.x, y: [0, b.y, b.y + 260], opacity: [1, 1, 0], rotate: b.r }} transition={{ duration: 1.6, delay: b.d, ease: "easeOut" }} />
      ))}
    </div>
  );
}

const fmt = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(1));
const pick = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)];
