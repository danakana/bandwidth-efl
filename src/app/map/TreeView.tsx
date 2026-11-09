import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BANDS, type BandId } from "../../content/bands";
import { NODES, type TreeId } from "../../content/curriculum";
import { hrefFor } from "../../lib/route";
import { treeMeta } from "./trees";
import { statusFor } from "./BandMap";

export type NodeState = "locked" | "new" | "practising" | "secure" | "mastered" | "review";

const STATE_LABEL: Record<NodeState, string> = {
  locked: "Locked", new: "Not started", practising: "Practising", secure: "Secure", mastered: "Mastered", review: "Review due",
};

/** One skill tree inside a band: its nodes as a path, with details for the chosen node. */
export function TreeView({ band, tree, start }: { band: BandId; tree: TreeId; start: number }) {
  const i = BANDS.findIndex((b) => b.id === band);
  const b = BANDS[i];
  const t = treeMeta(tree);
  const locked = statusFor(i, start) === "locked";
  const nodes = NODES.filter((n) => n.band === band && n.tree === tree);
  const [sel, setSel] = useState(nodes[0]?.id ?? null);
  const node = nodes.find((n) => n.id === sel) ?? null;
  // Progress arrives with the practice activities; until then every open node is "Not started".
  const stateOf = (): NodeState => (locked ? "locked" : "new");

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
        {(["new", "practising", "secure", "mastered", "review", "locked"] as NodeState[]).map((s) => (
          <li key={s}><span className={`ndot is-${s}`} aria-hidden="true" />{STATE_LABEL[s]}</li>
        ))}
      </ul>

      <div className="tview-body">
        <ol className="nodes">
          {nodes.map((n, k) => {
            const s = stateOf();
            return (
              <motion.li key={n.id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.03 * k }}>
                <button type="button" className={`node is-${s}${sel === n.id ? " is-sel" : ""}`}
                  aria-pressed={sel === n.id} onClick={() => setSel(n.id)}>
                  <span className={`ndot is-${s}`} aria-hidden="true">{k + 1}</span>
                  <span className="node-text">
                    <span className="node-title">{n.title}</span>
                    <span className="node-meta">{n.area} · {STATE_LABEL[s]}</span>
                  </span>
                </button>
              </motion.li>
            );
          })}
        </ol>

        <AnimatePresence mode="wait">
          {node && (
            <motion.aside key={node.id} className="node-panel" aria-live="polite"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
              <p className="pt-kicker">{node.area}</p>
              <h2>{node.title}</h2>
              <div className="node-example">
                <span className="node-example-label">Example</span>
                <p>{node.example}</p>
              </div>
              {node.note && <p className="node-note"><strong>Tip:</strong> {node.note}</p>}
              <div className="node-cta">
                <button type="button" className="btn btn-primary" disabled>Practice opens soon</button>
                <p className="muted">{locked ? "This band is locked. You're looking at a preview." : "Activities for this skill are being built now."}</p>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
