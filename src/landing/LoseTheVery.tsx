import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ROUNDS, type Verdict } from "../content/loseTheVery";
import "./loseTheVery.css";

const VERDICT_LABEL: Record<Verdict, string> = {
  best: "Best choice",
  works: "That works",
  miss: "Not quite",
};

/** Playable three-round demo of the Say It Better tool. */
export function LoseTheVery() {
  const [round, setRound] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const r = ROUNDS[round];
  const choice = picked === null ? null : r.options[picked];

  function pick(i: number) {
    if (picked !== null) return;
    setPicked(i);
    if (r.options[i].verdict !== "miss") setScore((s) => s + 1);
  }

  function next() {
    if (round === ROUNDS.length - 1) {
      setDone(true);
      return;
    }
    setRound((n) => n + 1);
    setPicked(null);
  }

  function restart() {
    setRound(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  }

  return (
    <section className="ltv" aria-labelledby="ltv-title">
      <header className="ltv-head">
        <h2 id="ltv-title" className="ltv-title">Lose the <s>very</s></h2>
        {!done && (
          <p className="ltv-progress" aria-live="polite">
            Round {round + 1} of {ROUNDS.length}
          </p>
        )}
      </header>

      <AnimatePresence mode="wait">
        {done ? (
          <motion.div
            key="done"
            className="ltv-done"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <p className="ltv-score">
              {score} of {ROUNDS.length} upgrades
            </p>
            <p>
              In Bandwidth, every word you choose becomes a word card. Use it correctly on different days and it turns
              from bronze to gold.
            </p>
            <button type="button" className="btn btn-ghost" onClick={restart}>
              Play again
            </button>
          </motion.div>
        ) : (
          <motion.div
            key={round}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <p className="ltv-context">{r.context}</p>
            <p className="ltv-sentence">
              {r.before}
              <span className={choice ? "ltv-slot ltv-slot-filled" : "ltv-slot"}>
                {choice ? choice.word : <s>{r.target}</s>}
              </span>
              {r.after}
            </p>

            <p className="ltv-ask" id={`ltv-ask-${round}`}>
              Replace <strong>{r.target}</strong> with one precise word:
            </p>
            <div className="ltv-options" role="group" aria-labelledby={`ltv-ask-${round}`}>
              {r.options.map((o, i) => {
                const state = picked === null ? "" : i === picked ? `is-${o.verdict}` : "is-dim";
                return (
                  <button
                    key={o.word}
                    type="button"
                    className={`ltv-option ${state}`}
                    onClick={() => pick(i)}
                    aria-pressed={picked === i}
                    disabled={picked !== null && picked !== i}
                  >
                    {o.word}
                  </button>
                );
              })}
            </div>

            <div aria-live="polite">
              {choice && (
                <motion.div
                  className={`ltv-feedback is-${choice.verdict}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                >
                  <p className="ltv-verdict">{VERDICT_LABEL[choice.verdict]}</p>
                  <p>{choice.why}</p>
                  {choice.verdict === "miss" && (
                    <p className="ltv-hint">
                      Strongest fit: <strong>{r.options.find((o) => o.verdict === "best")?.word}</strong>
                    </p>
                  )}
                  <button type="button" className="btn btn-primary ltv-next" onClick={next}>
                    {round === ROUNDS.length - 1 ? "See my result" : "Next sentence"}
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
