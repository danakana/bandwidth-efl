import { useRef, useState, type CSSProperties } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { STEPS } from "../content/landing";

/** "How it works" with a band-coloured track that fills as the reader scrolls. */
export function StepsTrack() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const [reached, setReached] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setReached(Math.min(STEPS.length, Math.floor(v * STEPS.length + 0.35)));
  });

  return (
    <ol ref={ref} className="steps">
      <span className="steps-rail" aria-hidden="true">
        <motion.span className="steps-fill" style={{ "--p": fill } as CSSProperties} />
      </span>
      {STEPS.map((s, i) => (
        <li key={s.title} className={i < reached ? "step is-lit" : "step"}>
          <span className="step-num" aria-hidden="true">{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
