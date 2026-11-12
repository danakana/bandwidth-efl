import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Item } from "../../content/practice/types";
import { ItemView, type Verdict } from "./Items";
import { Icon } from "../../components/Icon";

/** Runs a list of items one at a time with instant feedback, then reports the score. */
export function Session({ items, label, onDone }: { items: Item[]; label: string; onDone: (score: number, total: number) => void }) {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const item = items[i];
  const last = i === items.length - 1;

  function next() {
    const total = score;
    if (last) { onDone(total, items.length); return; }
    setVerdict(null); setI(i + 1);
  }

  return (
    <div className={`px-session${verdict ? " has-feedback" : ""}`}>
      <div className="pt-meter" aria-hidden="true">
        {items.map((_, k) => <span key={k} className={k < i ? "is-on" : k === i ? "is-now" : ""} />)}
      </div>
      <p className="pt-kicker">{label} · {i + 1} of {items.length}</p>
      <AnimatePresence mode="wait">
        <motion.div key={i} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.2 }}>
          <ItemView item={item} onAnswer={(v) => { setVerdict(v); setScore((s) => s + v.score); }} />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {verdict && (
          <motion.div
            className={`px-feedback ${verdict.score === 1 ? "is-good" : verdict.score > 0 ? "is-half" : "is-bad"}`}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            role="status"
          >
            <span className="px-fb-icon" aria-hidden="true"><Icon name={verdict.score > 0 ? "check" : "x"} size={26} /></span>
            <div>
              <strong>{verdict.score === 1 ? PRAISE[i % PRAISE.length] : verdict.score > 0 ? "Almost: half a point." : "Not quite."}</strong>
              {verdict.score < 1 && <p className="px-answer">Answer: <span>{verdict.correct}</span></p>}
              <p className="px-why">{item.why}</p>
              {verdict.score < 1 && item.es && <p className="px-es-gloss" lang="es">{item.es}</p>}
            </div>
            <button type="button" className="btn btn-primary" onClick={next} autoFocus>{last ? "See results" : "Continue"}</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const PRAISE = ["Nailed it.", "Exactly.", "Spot on.", "Perfect.", "Yes!"];
