import { Fragment, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BANDS, type BandId } from "../../content/bands";
import { NODES, type TreeId } from "../../content/curriculum";
import { CHECKPOINTS, practiceFor, type Checkpoint } from "../../content/practice";
import { STEP_BLOOM, STEP_NAMES } from "../../content/practice/types";
import { hrefFor } from "../../lib/route";
import { useProgress } from "../../lib/progress";
import { nodeView, type NodeProgress, type NodeView } from "../../lib/progressApi";
import { PracticePlayer, type PlayTarget } from "../practice/PracticePlayer";
import { treeMeta } from "./trees";
import { Icon } from "../../components/Icon";
import { statusFor } from "./BandMap";
import "../practice/practice.css";

const STATE_LABEL: Record<NodeView, string> = {
  locked: "Locked", new: "Not started", practising: "Practising", secure: "Secure", mastered: "Mastered", review: "Review due", check: "Check ready",
};
const SECURE_PLUS = new Set(["secure", "mastered", "review"]);

/** One skill tree inside a band: skills as a path, boss checkpoints between them, and the chosen skill's six steps. */
export function TreeView({ band, tree, start }: { band: BandId; tree: TreeId; start: number }) {
  const progress = useProgress();
  const i = BANDS.findIndex((b) => b.id === band);
  const b = BANDS[i];
  const t = treeMeta(tree);
  const locked = statusFor(i, start) === "locked";
  const nodes = NODES.filter((n) => n.band === band && n.tree === tree);
  const bosses = CHECKPOINTS.filter((c) => c.band === band && c.tree === tree);
  const [sel, setSel] = useState(nodes[0]?.id ?? null);
  const [play, setPlay] = useState<PlayTarget | null>(null);
  const node = nodes.find((n) => n.id === sel) ?? null;
  const prog = (id: string): NodeProgress | undefined => progress?.nodes[id];
  const view = (id: string) => nodeView(prog(id), locked);

  if (play) {
    return <PracticePlayer target={play} onClose={(changed) => { setPlay(null); if (changed) void progress?.refresh(); }} />;
  }

  return (
    <div className="tview" style={{ ["--fill" as string]: b.fill, ["--tree" as string]: t.colour }}>
      <nav className="crumbs" aria-label="Breadcrumb">
        <a href={hrefFor()}>Map</a><span aria-hidden="true">/</span>
        <a href={hrefFor(band)}>{band}</a><span aria-hidden="true">/</span>
        <span aria-current="page">{t.name}</span>
      </nav>
      <header className="tview-head">
        <span className="tree-icon is-big" aria-hidden="true">{t.icon}</span>
        <div>
          <h1>{band} {t.name}</h1>
          <p className="muted">{nodes.length} skills. {t.blurb}</p>
        </div>
      </header>

      <ul className="legend" aria-label="Skill states">
        {(["new", "practising", "secure", "mastered", "review", "locked"] as NodeView[]).map((s) => (
          <li key={s}><span className={`ndot is-${s}`} aria-hidden="true" />{STATE_LABEL[s]}</li>
        ))}
      </ul>

      <div className="tview-body">
        <ol className="nodes">
          {nodes.map((n, k) => {
            const s = view(n.id);
            const boss = bosses.find((c) => c.afterIndex === k);
            return (
              <Fragment key={n.id}>
                <motion.li initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.03 * k }}>
                  <button type="button" className={`node is-${s}${sel === n.id ? " is-sel" : ""}`} aria-pressed={sel === n.id} onClick={() => {
                    setSel(n.id);
                    // On phones the steps sit below the list, so bring them into view.
                    if (window.innerWidth < 860) setTimeout(() => document.querySelector(".node-panel")?.scrollIntoView({ behavior: "smooth", block: "start" }), 250);
                  }}>
                    <span className={`ndot is-${s === "check" ? "review" : s}`} aria-hidden="true">{k + 1}</span>
                    <span className="node-text">
                      <span className="node-title">{n.title}</span>
                      <span className="node-meta">
                        {STATE_LABEL[s]}{prog(n.id) && s === "practising"
                          ? prog(n.id)!.steps_passed >= 6 ? " · check opens tomorrow" : ` · step ${prog(n.id)!.steps_passed + 1} of 6`
                          : ""}
                      </span>
                    </span>
                  </button>
                </motion.li>
                {boss && <BossRow boss={boss} locked={locked} ready={boss.nodeIds.every((id) => SECURE_PLUS.has(prog(id)?.state ?? ""))}
                  beaten={!!progress?.milestones.has(boss.id)} onPlay={() => setPlay({ kind: "milestone", checkpoint: boss })} />}
              </Fragment>
            );
          })}
        </ol>

        <AnimatePresence mode="wait">
          {node && (
            <motion.aside key={node.id} className="node-panel" aria-live="polite"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
              <SkillPanel nodeId={node.id} area={node.area} title={node.title} example={node.example} note={node.note}
                locked={locked} p={prog(node.id)} isStudent={!!progress} onPlay={setPlay} />
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function BossRow({ boss, locked, ready, beaten, onPlay }: { boss: Checkpoint; locked: boolean; ready: boolean; beaten: boolean; onPlay: () => void }) {
  const can = !locked && ready;
  return (
    <li className={`boss-row${beaten ? " is-beaten" : ""}`}>
      <button type="button" disabled={!can} onClick={onPlay}>
        <span className="boss-icon" aria-hidden="true">{beaten ? <Icon name="check" size={22} /> : can ? <Icon name="swords" size={22} /> : <Icon name="lock" size={20} />}</span>
        <span className="boss-text">
          <strong>{boss.title}</strong>
          <span>{beaten ? "Beaten. You can fight it again any time." : can ? "Ready! 9 mixed questions." : "Opens when the skills above are Secure."}</span>
        </span>
      </button>
    </li>
  );
}

function SkillPanel({ nodeId, area, title, example, note, locked, p, isStudent, onPlay }: {
  nodeId: string; area: string; title: string; example: string; note?: string; locked: boolean;
  p: NodeProgress | undefined; isStudent: boolean; onPlay: (t: PlayTarget) => void;
}) {
  const practice = practiceFor(nodeId);
  const v = nodeView(p, locked);
  const passed = p?.steps_passed ?? 0;
  const checkReady = v === "check" || v === "review";
  return (
    <>
      <div className="node-panel-head">
        <p className="pt-kicker">{area}</p>
        <span className={`state-pill is-${v}`}>{STATE_LABEL[v]}</span>
      </div>
      <h2>{title}</h2>
      <div className="node-example">
        <span className="node-example-label">Example</span>
        <p>{example}</p>
      </div>
      {note && <p className="node-note"><strong>Tip:</strong> {note}</p>}

      {!practice ? (
        <div className="node-cta">
          <button type="button" className="btn btn-primary" disabled>Practice opens soon</button>
          <p className="muted">Activities for this level are being written. Every tree from B1+ to C2 is open now.</p>
        </div>
      ) : (
        <>
          {checkReady && isStudent && (
            <div className="check-card">
              <strong>{v === "review" ? "Review due" : "Skill check ready"}</strong>
              <p>{v === "review" ? "This skill slipped a little. Pass a quick check to get it back to Mastered." : "A quick mixed check on a new day. Pass it to move this skill up."}</p>
              <button type="button" className="btn btn-sm" onClick={() => onPlay({ kind: "step", practice, step: 7 })}>Start the check</button>
            </div>
          )}
          <ol className="ladder" aria-label="Six steps">
            {STEP_NAMES.map((name, k) => {
              const step = k + 1;
              const done = step <= passed;
              const next = step === passed + 1;
              const best = p?.best?.[String(step)];
              const can = isStudent && !locked && (done || next);
              return (
                <li key={name} className={`step-row${done ? " is-done" : next && !locked ? " is-next" : " is-locked"}`}>
                  <span className="step-num" aria-hidden="true">{done ? <Icon name="check" size={18} /> : step}</span>
                  <span className="step-text">
                    <strong>{name}</strong>
                    <span>{STEP_BLOOM[k]}{best !== undefined && step < 6 ? ` · best ${best}%` : ""}</span>
                  </span>
                  {can && (
                    <button type="button" className={`btn btn-sm step-go ${next ? "btn-primary" : "btn-ghost"}`} onClick={() => onPlay({ kind: "step", practice, step })}>
                      {done ? "Redo" : "Start"}
                    </button>
                  )}
                </li>
              );
            })}
          </ol>
          {!isStudent && <p className="muted">Teacher preview: students start the steps here.</p>}
          {locked && isStudent && <p className="muted">This band is locked. You're looking at a preview.</p>}
        </>
      )}
    </>
  );
}
