import { useEffect, useMemo, useState } from "react";
import type { BandId } from "../../content/bands";
import { EndScreen, GameShell, sfx, type Learnt } from "./GameKit";
import { buildKitchen, kitchenShape, starsFrom } from "./levels";

/**
 * Word Kitchen: customers hand in messy orders (a sentence with a mistake). Cook the correct sentence
 * from the word ingredients on the counter, avoiding the rotten one, and serve it before they lose patience.
 */
const FACES = ["👩🏽", "👨🏾", "🧕🏻", "👵🏼", "🧑🏻‍🦱", "👨🏻‍🦰", "👩🏿‍🦳", "🧒🏽"];
const norm = (s: string) => s.toLowerCase().replace(/[’']/g, "'").replace(/\s+/g, " ").trim();

export function WordKitchen({ band, level, onClose, onLevel }: { band: BandId; level: number; onClose: (changed: boolean) => void; onLevel: (n: number) => void }) {
  const [seed, setSeed] = useState(0);
  const orders = useMemo(() => buildKitchen(band, level), [band, level, seed]); // eslint-disable-line react-hooks/exhaustive-deps
  const { seconds } = kitchenShape(level);
  const [o, setO] = useState(0);
  const [plate, setPlate] = useState<number[]>([]);
  const [left, setLeft] = useState(seconds);
  const [hearts, setHearts] = useState(3);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [mood, setMood] = useState<"wait" | "happy" | "angry">("wait");
  const [note, setNote] = useState<string | null>(null);
  const [learnt, setLearnt] = useState<Learnt[]>([]);
  const [done, setDone] = useState<"won" | "lost" | null>(null);
  const order = orders[o];
  const time = order ? seconds + Math.max(0, order.target.length - 6) * 3 : seconds;

  // Ingredients: the right words plus the rotten ones, shuffled once per order.
  const counter = useMemo(() => {
    if (!order) return [];
    const all = [...order.target, ...order.decoys].map((w, i) => ({ i, w }));
    for (let k = all.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [all[k], all[j]] = [all[j], all[k]]; }
    return all;
  }, [order]);

  useEffect(() => { setLeft(time); }, [o, seed, time]);
  useEffect(() => {
    if (done || mood !== "wait" || !order) return;
    if (left <= 0) { fail("Too slow! The customer left."); return; }
    const t = setTimeout(() => setLeft((x) => x - 1), 1000);
    return () => clearTimeout(t);
  }, [left, mood, done, order]); // eslint-disable-line react-hooks/exhaustive-deps

  function next(h: number) {
    setTimeout(() => {
      setPlate([]); setMood("wait"); setNote(null);
      if (h <= 0) { setDone("lost"); return; }
      if (o + 1 >= orders.length) { setDone("won"); return; }
      setO(o + 1);
    }, 1800);
  }
  function fail(text: string) {
    const h = hearts - 1;
    setHearts(h); setCombo(0); setMood("angry"); sfx("bad");
    setNote(`${text} The order was: "${order.target.join(" ")}"`);
    setLearnt((l) => [...l, { text: order.messy, note: `→ ${order.target.join(" ")}` }]);
    next(h);
  }
  function serve() {
    if (mood !== "wait") return;
    const made = plate.map((i) => counter.find((c) => c.i === i)!.w).join(" ");
    if (norm(made) === norm(order.target.join(" "))) {
      const c = combo + 1;
      setCombo(c); setMood("happy"); sfx("win");
      const tip = Math.max(0, left) * 5;
      setScore((s) => s + 100 * c + tip);
      setNote(`Delicious! +${100 * c} and a ${tip}-point tip.`);
      next(hearts);
    } else fail("That's not quite right.");
  }

  const restart = () => { setSeed((s) => s + 1); setO(0); setPlate([]); setHearts(3); setScore(0); setCombo(0); setMood("wait"); setNote(null); setLearnt([]); setDone(null); };
  const stars = starsFrom(done === "won", hearts);
  const face = FACES[(o + seed) % FACES.length];
  const pct = Math.max(0, left / time);

  return (
    <GameShell game="kitchen" band={band} level={level} hearts={hearts} score={score} combo={combo} onClose={() => onClose(done !== null)} theme="kitchen">
      {done || !order ? (
        <EndScreen game="kitchen" band={band} level={level} stars={stars} score={score} learnt={learnt}
          onNext={() => onLevel(level + 1)} onReplay={restart} onMap={onClose} />
      ) : (
        <div className="wk">
          <div className="wk-customer">
            <div className={`wk-face is-${mood}`} aria-hidden="true">{face}<span className="wk-mood">{mood === "happy" ? "😋" : mood === "angry" ? "😠" : pct < 0.3 ? "😤" : pct < 0.6 ? "😐" : "🙂"}</span></div>
            <div className="wk-ticket">
              <span className="wk-no">Order {o + 1} of {orders.length}</span>
              <p>"{order.messy}"</p>
              <span className="wk-hint">The order has a mistake. Cook it correctly!</span>
            </div>
          </div>
          <div className="wk-patience" role="progressbar" aria-label="Customer's patience" aria-valuemin={0} aria-valuemax={time} aria-valuenow={left}>
            <span style={{ width: `${pct * 100}%` }} className={pct < 0.3 ? "is-low" : ""} />
          </div>
          <div className={`wk-note${note ? (mood === "happy" ? " is-ok" : " is-no") : ""}`} role="status" aria-live="polite">{note ?? " "}</div>
          <div className="wk-plate" aria-label="Your sentence">
            {plate.length === 0 ? <span className="wk-empty">Tap ingredients to add them to the plate</span> : plate.map((i) => {
              const c = counter.find((x) => x.i === i)!;
              return <button key={i} type="button" className="wk-word is-on-plate" onClick={() => mood === "wait" && setPlate(plate.filter((p) => p !== i))} aria-label={`Remove ${c.w}`}>{c.w}</button>;
            })}
          </div>
          <div className="wk-counter" role="group" aria-label="Ingredients">
            {counter.map((c) => (
              <button key={c.i} type="button" className="wk-word" disabled={plate.includes(c.i) || mood !== "wait"}
                onClick={() => { sfx("pop"); setPlate([...plate, c.i]); }}>{c.w}</button>
            ))}
          </div>
          <div className="wk-actions">
            <button type="button" className="btn btn-ghost" onClick={() => setPlate([])} disabled={!plate.length || mood !== "wait"}>Clear plate</button>
            <button type="button" className="btn btn-primary" onClick={serve} disabled={!plate.length || mood !== "wait"}>🍽️ Serve</button>
          </div>
        </div>
      )}
    </GameShell>
  );
}
