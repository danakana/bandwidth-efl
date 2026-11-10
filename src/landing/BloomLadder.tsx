import { motion } from "motion/react";
import { BLOOM } from "../content/landing";

const FILLS = ["var(--band-a1)", "var(--band-a2)", "var(--band-b1)", "var(--band-b2)", "var(--band-c1)", "var(--white)"];
const CHECKS = ["Tomorrow", "In 3 days", "In a week", "In 3 weeks"];

/**
 * The six Bloom steps as growing bars: the same stacked-bars idea as the logo,
 * so the method itself becomes the visual signature.
 */
export function BloomLadder() {
  return (
    <div className="bloom">
      <ol className="bloom-bars">
        {BLOOM.map((b, i) => (
          <motion.li
            key={b.name}
            className="bloom-bar"
            style={{ ["--fill" as string]: FILLS[i], ["--w" as string]: `${52 + i * 9.6}%` }}
            initial={{ scaleX: 0.15, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <span className="bloom-num">{i + 1}</span>
            <span className="bloom-text">
              <strong>{b.name}</strong>
              <span>{b.text}</span>
            </span>
            <span className="bloom-verb">{b.verb}</span>
          </motion.li>
        ))}
      </ol>
      <div className="bloom-checks" aria-label="Then the skill comes back">
        <p><strong>Then it comes back.</strong> A skill is only Mastered when you can still do it days later.</p>
        <ol>
          {CHECKS.map((c, i) => (
            <li key={c}><span className={i < 1 ? "is-secure" : i < 2 ? "is-mastered" : ""} aria-hidden="true" />{c}</li>
          ))}
        </ol>
        <p className="bloom-legend"><span>Secure</span> after the next-day check · <span>Mastered</span> after the delayed check</p>
      </div>
    </div>
  );
}
