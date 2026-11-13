import { useMemo, useState } from "react";
import type { BandId } from "../../content/bands";
import { EndScreen, GameShell, sfx, type Learnt } from "./GameKit";
import { buildTower, starsFrom, type Block } from "./levels";

/**
 * Word Tower: a wobbly Jenga-style tower of sentence blocks.
 * Pull out every block with a mistake. Pull a correct block and the tower shakes; three shakes and it falls.
 */
export function WordTower({ band, level, onClose, onLevel }: { band: BandId; level: number; onClose: (changed: boolean) => void; onLevel: (n: number) => void }) {
  const [seed, setSeed] = useState(0);
  const blocks = useMemo(() => buildTower(band, level), [band, level, seed]); // eslint-disable-line react-hooks/exhaustive-deps
  const [out, setOut] = useState<Set<number>>(new Set());
  const [leaving, setLeaving] = useState<number | null>(null);
  const [hearts, setHearts] = useState(3);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [wobble, setWobble] = useState(0);
  const [toast, setToast] = useState<{ ok: boolean; text: string } | null>(null);
  const [learnt, setLearnt] = useState<Learnt[]>([]);
  const [done, setDone] = useState<"won" | "lost" | null>(null);
  const [falling, setFalling] = useState(false);

  const badLeft = blocks.filter((b) => b.bad && !out.has(b.id)).length;
  // Gentle random offsets so the tower looks hand-stacked (stable per block).
  const offsets = useMemo(() => blocks.map(() => ({ x: Math.round((Math.random() - 0.5) * 18), r: (Math.random() - 0.5) * 1.6 })), [blocks]);

  function pull(b: Block) {
    if (done || leaving !== null || out.has(b.id)) return;
    if (b.bad) {
      sfx("good");
      const c = combo + 1;
      setCombo(c);
      setScore((s) => s + 100 * c);
      setLeaving(b.id);
      setToast({ ok: true, text: `Fixed: ${b.fixed}` });
      setLearnt((l) => [...l, { text: b.text, note: `→ ${b.fixed}` }]);
      setTimeout(() => {
        setOut((o) => new Set(o).add(b.id));
        setLeaving(null);
        if (badLeft - 1 === 0) { setDone("won"); }
      }, 420);
    } else {
      const h = hearts - 1;
      setHearts(h);
      setCombo(0);
      setToast({ ok: false, text: `That one was correct: "${b.text}"` });
      setWobble((w) => w + 1);
      if (h <= 0) {
        sfx("crash");
        setFalling(true);
        setTimeout(() => {
          setLearnt((l) => [...l, ...blocks.filter((x) => x.bad && !out.has(x.id)).map((x) => ({ text: x.text, note: `→ ${x.fixed}` }))]);
          setDone("lost");
        }, 1400);
      } else sfx("wobble");
    }
  }

  const restart = () => { setSeed((s) => s + 1); setOut(new Set()); setHearts(3); setScore(0); setCombo(0); setLearnt([]); setDone(null); setFalling(false); setToast(null); };
  const stars = starsFrom(done === "won", hearts);

  return (
    <GameShell game="tower" band={band} level={level} hearts={hearts} score={score} combo={combo} onClose={() => onClose(done !== null)} theme="tower">
      {done ? (
        <EndScreen game="tower" band={band} level={level} stars={stars} score={score} learnt={learnt}
          onNext={() => onLevel(level + 1)} onReplay={restart} onMap={onClose} />
      ) : (
        <div className="wt">
          <div className="wt-brief">
            <p><strong>Pull out every block with a mistake.</strong> Careful: pulling a correct block shakes the tower.</p>
            <p className="wt-left" aria-live="polite">{badLeft} {badLeft === 1 ? "mistake" : "mistakes"} left</p>
          </div>
          <div className={`wt-toast${toast ? (toast.ok ? " is-ok" : " is-no") : ""}`} role="status" aria-live="polite">{toast?.text ?? " "}</div>
          <div className="wt-stage">
            <div key={wobble} className={`wt-tower${wobble ? " is-wobble" : ""}${falling ? " is-falling" : ""}`}>
              {blocks.map((b, i) => out.has(b.id) ? null : (
                <button key={b.id} type="button" className={`wt-block${leaving === b.id ? " is-out" : ""}${i % 2 ? " is-alt" : ""}`}
                  style={{ ["--x" as string]: `${offsets[i].x}px`, ["--r" as string]: `${offsets[i].r}deg`, ["--d" as string]: `${(blocks.length - i) * 0.06}s`, ["--fr" as string]: `${(i % 2 ? 1 : -1) * (20 + i * 7)}deg` }}
                  onClick={() => pull(b)}>
                  {b.text}
                </button>
              ))}
            </div>
            <div className="wt-ground" aria-hidden="true" />
          </div>
        </div>
      )}
    </GameShell>
  );
}
