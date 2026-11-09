import { useState } from "react";
import { motion } from "motion/react";
import { BANDS } from "../content/bands";

/**
 * The nine bands as stacked stripes (echoing the Stack logo).
 * Stripes grow in when the ladder scrolls into view; choosing one
 * reveals what a student can do at that band.
 */
export function BandLadder() {
  const [active, setActive] = useState(5); // B2: where most current students sit
  const band = BANDS[active];
  const ordered = [...BANDS].reverse(); // C2 at the top, A1+ at the bottom

  return (
    <div className="ladder">
      <div className="ladder-stripes" role="group" aria-label="Choose a band">
        {ordered.map((b, row) => {
          const index = BANDS.indexOf(b);
          const selected = index === active;
          return (
            <motion.button
              key={b.id}
              type="button"
              aria-pressed={selected}
              className={selected ? "ladder-stripe is-active" : "ladder-stripe"}
              style={{ background: b.fill, color: b.onFill, width: `${44 + index * 7}%`, transformOrigin: "left center" }}
              initial={{ scaleX: 0.35 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: "spring", stiffness: 140, damping: 18, delay: (ordered.length - row) * 0.05 }}
              onClick={() => setActive(index)}
            >
              {b.id}
            </motion.button>
          );
        })}
      </div>
      <motion.div
        key={band.id}
        className="ladder-panel"
        style={{ background: band.tint }}
        initial={{ opacity: 0.4, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        aria-live="polite"
      >
        <p className="ladder-band">{band.id}</p>
        <p className="ladder-cando">{band.canDo}</p>
      </motion.div>
    </div>
  );
}
