import { motion } from "motion/react";
import { BANDS } from "../../content/bands";
import { NODES } from "../../content/curriculum";
import { hrefFor } from "../../lib/route";

export type BandStatus = "review" | "current" | "locked";
export const statusFor = (i: number, start: number): BandStatus => (i < start ? "review" : i === start ? "current" : "locked");

// Zigzag positions for the nine stops, as a % of the map width.
const XS = [50, 70, 80, 66, 46, 28, 20, 34, 52];
const ROW = 150;
const TOP = 80;

/** The nine bands as a winding path. The student's band glows; higher bands wait behind a Gate. */
export function BandMap({ start }: { start: number }) {
  const h = TOP * 2 + ROW * (BANDS.length - 1);
  const pts = BANDS.map((_, i) => ({ x: XS[i], y: TOP + i * ROW }));
  // Smooth vertical S-curves between stops.
  const seg = (a: { x: number; y: number }, b: { x: number; y: number }) =>
    `C ${a.x} ${a.y + ROW / 2}, ${b.x} ${b.y - ROW / 2}, ${b.x} ${b.y}`;
  const done = `M ${pts[0].x} ${pts[0].y} ` + pts.slice(1, start + 1).map((p, i) => seg(pts[i], p)).join(" ");
  const ahead = `M ${pts[start].x} ${pts[start].y} ` + pts.slice(start + 1).map((p, i) => seg(pts[start + i], p)).join(" ");

  return (
    <section className="bmap" aria-labelledby="bmap-title">
      <div className="bmap-head">
        <h2 id="bmap-title">Your map</h2>
        <p className="muted">Nine bands from A1+ to C2. Master your band's skills and pass its Gate to open the next one.</p>
      </div>
      <div className="bmap-field" style={{ height: h }}>
        <svg className="bmap-path" viewBox={`0 0 100 ${h}`} preserveAspectRatio="none" aria-hidden="true">
          <path d={ahead} className="bmap-path-ahead" vectorEffect="non-scaling-stroke" />
          {start > 0 && (
            <motion.path d={done} className="bmap-path-done" vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, ease: "easeInOut" }} />
          )}
        </svg>
        <ol className="bmap-stops">
          {BANDS.map((b, i) => {
            const st = statusFor(i, start);
            const count = NODES.filter((n) => n.band === b.id).length;
            const left = XS[i] < 50;
            return (
              <li key={b.id} className={`bmap-stop is-${st}${left ? " is-left" : ""}`}
                style={{ top: pts[i].y, left: `${pts[i].x}%`, ["--fill" as string]: b.fill, ["--on" as string]: b.onFill }}>
                <motion.a
                  href={hrefFor(b.id)}
                  className="bmap-node"
                  aria-label={`${b.id}: ${st === "current" ? "your band" : st === "review" ? "open for review" : "locked"}. ${count} skills.`}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.06, type: "spring", stiffness: 260, damping: 18 }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="bmap-id">{b.id}</span>
                  {st === "locked" && (
                    <svg className="bmap-lock" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" strokeWidth="2.4" /></svg>
                  )}
                  {st === "review" && (
                    <svg className="bmap-check" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  )}
                </motion.a>
                <div className="bmap-label" aria-hidden="true">
                  {st === "current" && <span className="bmap-here">You are here</span>}
                  <strong>{st === "current" ? "Your band" : st === "review" ? "Review" : "Locked"}</strong>
                  <span>{count} skills{st === "locked" && i === start + 1 ? " · next Gate" : ""}</span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
