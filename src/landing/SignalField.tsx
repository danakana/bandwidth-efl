import { useEffect, useRef } from "react";

/** The six band colours, A1 at the bottom to C2 at the top. */
const RIBBONS = [
  { color: "#8BD77B", amp: 26, freq: 0.0042, speed: 0.55, width: 16 },
  { color: "#FFD95C", amp: 34, freq: 0.0036, speed: 0.48, width: 18 },
  { color: "#FF914D", amp: 42, freq: 0.0031, speed: 0.42, width: 20 },
  { color: "#FF85B3", amp: 36, freq: 0.0034, speed: 0.5, width: 18 },
  { color: "#49B8F2", amp: 30, freq: 0.0039, speed: 0.58, width: 16 },
  { color: "#FFFFFF", amp: 22, freq: 0.0045, speed: 0.62, width: 10 },
];

/**
 * Animated "signal field": the band colours as flowing waves.
 * Pauses off-screen, draws a still frame for reduced motion,
 * and swells near the pointer.
 */
export function SignalField({ className, anchor = 0.62 }: { className?: string; anchor?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0, visible = true, t = 0;
    let px = -1, boost = 0, target = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce) draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const n = RIBBONS.length;
      const spread = Math.min(h * 0.11, 64);
      const baseY = h * anchor;
      ctx.lineCap = "round";
      ctx.globalCompositeOperation = "lighter";
      RIBBONS.forEach((r, i) => {
        const y0 = baseY + (n / 2 - i) * spread * 0.55;
        ctx.beginPath();
        for (let x = -20; x <= w + 20; x += 8) {
          const near = px < 0 ? 0 : Math.exp(-((x - px) ** 2) / 26000);
          const a = r.amp * (1 + boost * near * 1.6);
          const y =
            y0 +
            Math.sin(x * r.freq + t * r.speed + i * 0.9) * a +
            Math.sin(x * r.freq * 2.3 - t * r.speed * 0.7 + i) * a * 0.35;
          if (x === -20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = r.color;
        ctx.globalAlpha = i === n - 1 ? 0.55 : 0.8;
        ctx.lineWidth = r.width;
        ctx.stroke();
      });
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };

    const loop = () => {
      if (visible) {
        t += 0.016;
        boost += (target - boost) * 0.06;
        draw();
      }
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      px = e.clientX - rect.left;
      target = 1;
    };
    const onLeave = () => { target = 0; };

    resize();
    window.addEventListener("resize", resize);
    const host = canvas.parentElement;
    host?.addEventListener("pointermove", onMove);
    host?.addEventListener("pointerleave", onLeave);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(canvas);

    if (reduce) draw();
    else raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      host?.removeEventListener("pointermove", onMove);
      host?.removeEventListener("pointerleave", onLeave);
      io.disconnect();
    };
  }, [anchor]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
