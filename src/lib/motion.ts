import { useEffect, useRef, useState } from "react";

/** True when the device asks for less motion. Read once per call; cheap enough to use anywhere. */
export const calm = () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * A number that rolls to its new value instead of jumping (coins, XP, scores).
 * Eases out over `ms`; with reduced motion it simply shows the new value.
 */
export function useRolling(value: number, ms = 700) {
  const [shown, setShown] = useState(value);
  const from = useRef(value);
  useEffect(() => {
    if (calm() || from.current === value) { from.current = value; setShown(value); return; }
    const start = performance.now(), a = from.current, b = value;
    let raf = 0;
    const step = (t: number) => {
      const k = Math.min(1, (t - start) / ms);
      const e = 1 - Math.pow(1 - k, 3);
      setShown(Math.round(a + (b - a) * e));
      if (k < 1) raf = requestAnimationFrame(step); else from.current = b;
    };
    raf = requestAnimationFrame(step);
    return () => { cancelAnimationFrame(raf); from.current = b; };
  }, [value, ms]);
  return shown;
}

/**
 * Pointer handlers that tilt a card toward the pointer and move its light.
 * Sets --rx/--ry (degrees) and --mx/--my (percent) on the element; CSS does the rest.
 */
export const tiltHandlers = (max = 10) => ({
  onPointerMove(e: React.PointerEvent<HTMLElement>) {
    if (calm() || e.pointerType === "touch") return;
    const el = e.currentTarget, r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--ry", `${(x - 0.5) * max * 2}deg`);
    el.style.setProperty("--rx", `${(0.5 - y) * max * 2}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  },
  onPointerLeave(e: React.PointerEvent<HTMLElement>) {
    const el = e.currentTarget;
    for (const p of ["--rx", "--ry"]) el.style.setProperty(p, "0deg");
    el.style.setProperty("--mx", "50%"); el.style.setProperty("--my", "30%");
  },
});
