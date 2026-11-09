import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { UNIVERSES } from "../content/landing";

/**
 * The six Universes orbiting "you". The ring rotates slowly and pauses
 * on hover or focus; choosing a planet shows its topics.
 */
export function Orbit() {
  const [active, setActive] = useState(0);
  const u = UNIVERSES[active];
  return (
    <div className="orbit-wrap">
      <div className="orbit" role="group" aria-label="Choose a Universe">
        <div className="orbit-ring" aria-hidden="true" />
        <div className="orbit-ring orbit-ring-inner" aria-hidden="true" />
        <div className="orbit-center" aria-hidden="true">You</div>
        <div className="orbit-spin">
          {UNIVERSES.map((x, i) => {
            const angle = (360 / UNIVERSES.length) * i;
            return (
              <div key={x.name} className="orbit-slot" style={{ transform: `rotate(${angle}deg) translateY(calc(var(--orbit-r) * -1))` }}>
                <div className="orbit-upright" style={{ transform: `rotate(${-angle}deg)` }}>
                  <span className="orbit-counter">
                  <button
                    type="button"
                    className={i === active ? "planet is-active" : "planet"}
                    style={{ background: x.colour, color: x.name === "Futures" ? "#fff" : "var(--ink)" }}
                    aria-pressed={i === active}
                    onClick={() => setActive(i)}
                  >
                    {x.name}
                  </button>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="orbit-panel" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={u.name}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.22 }}
          >
            <span className="orbit-swatch" style={{ background: u.colour }} aria-hidden="true" />
            <h3>{u.name}</h3>
            <p>{u.topics}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
