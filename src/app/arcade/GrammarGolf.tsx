import { useMemo, useState } from "react";
import type { BandId } from "../../content/bands";
import { Club, GolfFlag } from "./GameArt";
import { EndScreen, GameShell, sfx, type Learnt } from "./GameKit";
import { buildGolf, golfShape } from "./levels";

/**
 * Grammar Golf: each hole is a sentence with a gap. Pick a club (a word) to take your shot.
 * The right word sinks the ball; a wrong one lands in a bunker or the lake and costs a stroke.
 * Finish the course in as few strokes as possible.
 */
const HAZARDS = [{ x: 30, y: 30, kind: "sand" }, { x: 62, y: 50, kind: "water" }, { x: 55, y: 70, kind: "sand" }, { x: 20, y: 64, kind: "water" }];

export function GrammarGolf({ band, level, onClose, onLevel }: { band: BandId; level: number; onClose: (changed: boolean) => void; onLevel: (n: number) => void }) {
  const [seed, setSeed] = useState(0);
  const holes = useMemo(() => buildGolf(band, level), [band, level, seed]); // eslint-disable-line react-hooks/exhaustive-deps
  const { par } = golfShape(level);
  const [h, setH] = useState(0);
  const [tried, setTried] = useState<string[]>([]);
  const [strokes, setStrokes] = useState(0);
  const [holeStrokes, setHoleStrokes] = useState(0);
  const [ball, setBall] = useState({ x: 12, y: 84, state: "tee" as "tee" | "flying" | "in" | "hazard" });
  const [hazard, setHazard] = useState(0);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [learnt, setLearnt] = useState<Learnt[]>([]);
  const [card, setCard] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const hole = holes[h];
  const limit = holes.length * par + 1;

  function shoot(word: string) {
    if (ball.state === "flying" || ball.state === "in" || tried.includes(word)) return;
    const s = holeStrokes + 1;
    setHoleStrokes(s); setStrokes((x) => x + 1); sfx("pop");
    if (word === hole.answer) {
      setBall({ x: 82, y: 22, state: "flying" });
      setTimeout(() => {
        setBall({ x: 82, y: 22, state: "in" }); sfx("good");
        const c = s === 1 ? combo + 1 : 0;
        setCombo(c);
        const pts = s === 1 ? 300 + 100 * c : s === 2 ? 150 : 50;
        setScore((x) => x + pts);
        setMsg({ ok: true, text: s === 1 ? (c >= 2 ? `Hole in one! ×${c} streak` : "Hole in one!") : s === 2 ? "Par. Nice recovery!" : "In the hole at last." });
        setCard((cd) => [...cd, s]);
        setTimeout(() => {
          if (h + 1 >= holes.length) { setDone(true); return; }
          setH(h + 1); setTried([]); setHoleStrokes(0); setMsg(null); setBall({ x: 12, y: 84, state: "tee" });
        }, 1500);
      }, 700);
    } else {
      const z = HAZARDS[(h + s) % HAZARDS.length];
      setHazard((x) => x + 1);
      setBall({ x: z.x, y: z.y, state: "flying" });
      setTried([...tried, word]); setCombo(0);
      setTimeout(() => { setBall({ x: z.x, y: z.y, state: "hazard" }); sfx("bad"); }, 700);
      setMsg({ ok: false, text: `${z.kind === "water" ? "Splash!" : "In the bunker!"} "${word}" doesn't fit here. ${hole.why}` });
      setLearnt((l) => (l.some((x) => x.text.includes(hole.answer) && x.note === hole.why) ? l : [...l, { text: `${hole.before}${hole.answer}${hole.after}`.trim(), note: hole.why }]));
    }
  }

  const restart = () => { setSeed((s) => s + 1); setH(0); setTried([]); setStrokes(0); setHoleStrokes(0); setBall({ x: 12, y: 84, state: "tee" }); setMsg(null); setScore(0); setCombo(0); setLearnt([]); setCard([]); setDone(false); };
  const n = holes.length;
  const stars = !done ? 0 : strokes > limit ? 0 : strokes <= n + 1 ? 3 : strokes <= n + 3 ? 2 : 1;

  return (
    <GameShell game="golf" band={band} level={level} hearts={0} score={score} combo={combo} onClose={() => onClose(done)} theme="golf"
      status={<div className="cc-status"><span className="cc-moves">Hole <b>{Math.min(h + 1, n)}</b>/{n}</span><span className="cc-goal" aria-label={`${strokes} strokes, par ${n * par}`}>{strokes} strokes · par {n * par}</span></div>}>
      {done ? (
        <EndScreen game="golf" band={band} level={level} stars={stars} score={score} learnt={learnt}
          onNext={() => onLevel(level + 1)} onReplay={restart} onMap={onClose} />
      ) : (
        <div className="gg">
          <div className="gg-card" aria-label="Scorecard">{holes.map((_, i) => <span key={i} className={i === h ? "is-now" : card[i] === 1 ? "is-ace" : ""}>{card[i] ?? "·"}</span>)}</div>
          <p className="gg-sentence" aria-live="polite">
            {hole.before}<span className={`gg-gap${ball.state === "in" ? " is-filled" : ""}`}>{ball.state === "in" ? hole.answer : "?"}</span>{hole.after}
          </p>
          <div className="gg-course" aria-hidden="true">
            {HAZARDS.map((z, i) => <span key={i} className={`gg-${z.kind}`} style={{ left: `${z.x - 9}%`, top: `${z.y - 8}%` }} />)}
            <span className="gg-green" />
            <span className="gg-flag"><GolfFlag size={46} /></span>
            <span key={hazard} className={`gg-ball is-${ball.state}`} style={{ left: `${ball.x}%`, top: `${ball.y}%` }} />
          </div>
          <div className={`gg-msg${msg ? (msg.ok ? " is-ok" : " is-no") : ""}`} role="status">{msg?.text ?? "Choose your club."}</div>
          <div className="gg-clubs" role="group" aria-label="Clubs">
            {hole.options.map((o) => (
              <button key={o} type="button" className={`gg-club${tried.includes(o) ? " is-used" : ""}`} disabled={tried.includes(o) || ball.state === "flying" || ball.state === "in"} onClick={() => shoot(o)}>
                <span aria-hidden="true" className="gg-ico"><Club size={20} /></span>{o}
              </button>
            ))}
          </div>
        </div>
      )}
    </GameShell>
  );
}
