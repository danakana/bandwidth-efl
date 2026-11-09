import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const TIERS = [
  { name: "Bronze", fill: "#E8C9A8", edge: "#B07D4F", note: "Saved and understood" },
  { name: "Silver", fill: "#E3E9EF", edge: "#8A9AAB", note: "Used correctly on your own" },
  { name: "Gold", fill: "#FFE58A", edge: "#C9A227", note: "Used again days later, without help" },
];

/**
 * A word card that upgrades bronze → silver → gold. It tilts with the pointer,
 * cycles on its own while visible, and stops cycling once the viewer picks a tier.
 */
export function WordCard() {
  const [tier, setTier] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 150, damping: 15 });

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let visible = false;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    if (ref.current) io.observe(ref.current);
    const id = window.setInterval(() => { if (visible) setTier((t) => (t + 1) % TIERS.length); }, 2200);
    return () => { window.clearInterval(id); io.disconnect(); };
  }, [auto]);

  const t = TIERS[tier];
  return (
    <div className="wordcard-demo" ref={ref}>
      <div
        className="wordcard-stage"
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          mx.set((e.clientX - r.left) / r.width - 0.5);
          my.set((e.clientY - r.top) / r.height - 0.5);
        }}
        onPointerLeave={() => { mx.set(0); my.set(0); }}
      >
        <motion.div
          className={tier === 2 ? "wordcard is-gold" : "wordcard"}
          style={{ background: t.fill, borderColor: t.edge, rotateX: rx, rotateY: ry }}
        >
          <p className="wordcard-tier">{t.name}</p>
          <p className="wordcard-word">breathtaking</p>
          <p className="wordcard-def">so beautiful it surprises you</p>
          <p className="wordcard-note">{t.note}</p>
          <span className="wordcard-shine" aria-hidden="true" />
        </motion.div>
      </div>
      <div className="wordcard-controls" role="group" aria-label="Card level">
        {TIERS.map((x, i) => (
          <button
            key={x.name}
            type="button"
            className={i === tier ? "chip-btn is-on" : "chip-btn"}
            aria-pressed={i === tier}
            onClick={() => { setAuto(false); setTier(i); }}
          >
            {x.name}
          </button>
        ))}
      </div>
    </div>
  );
}
