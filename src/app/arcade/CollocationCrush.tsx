import { useEffect, useMemo, useRef, useState } from "react";
import type { BandId } from "../../content/bands";
import { COLLOCATIONS, type Head } from "../../content/collocations";
import { EndScreen, GameShell, sfx, type Learnt } from "./GameKit";

/**
 * Collocation Crush: a candy board of word tiles. Tap a round "head" (make, heavy, highly…)
 * and a square word that goes with it (a mistake, rain, recommended…). Right pairs pop, tiles
 * fall and new ones drop in. Make the target number of pairs before you run out of moves.
 */
const COLS = 5, ROWS = 6;
const COLORS = ["#c2185b", "#00796b", "#a94a07", "#5b3fd6"];

type Tile = { id: number; col: number; row: number; kind: "head" | "part"; text: string; head: number };

export const crushShape = (level: number) => {
  const goal = level === 7 ? 14 : 5 + level;
  return { group: level <= 3 || level === 7 ? 0 : 1, goal, moves: goal + (level <= 3 ? 6 : 5) };
};

let nextId = 1;

function makeTile(heads: Head[], tiles: Tile[], col: number, row: number): Tile {
  const headsHere = tiles.filter((t) => t.kind === "head").length;
  const wantHead = headsHere < 8 && Math.random() < 0.4;
  if (wantHead || headsHere === 0) {
    const h = Math.floor(Math.random() * heads.length);
    return { id: nextId++, col, row, kind: "head", text: heads[h].head, head: h };
  }
  // A partner for a head that's on the board, favouring heads with the fewest partners showing.
  const present = [...new Set(tiles.filter((t) => t.kind === "head").map((t) => t.head))];
  const pool = present.length ? present : heads.map((_, i) => i);
  pool.sort((a, b) => tiles.filter((t) => t.kind === "part" && t.head === a).length - tiles.filter((t) => t.kind === "part" && t.head === b).length);
  const h = Math.random() < 0.7 ? pool[0] : pool[Math.floor(Math.random() * pool.length)];
  const words = heads[h].partners;
  return { id: nextId++, col, row, kind: "part", text: words[Math.floor(Math.random() * words.length)], head: h };
}

function freshBoard(heads: Head[]): Tile[] {
  const tiles: Tile[] = [];
  for (let c = 0; c < COLS; c++) for (let r = 0; r < ROWS; r++) tiles.push(makeTile(heads, tiles, c, r));
  return ensurePair(heads, tiles);
}

/** Make sure at least one right pair is on the board, so the player is never stuck. */
function ensurePair(heads: Head[], tiles: Tile[]): Tile[] {
  const ok = tiles.some((h) => h.kind === "head" && tiles.some((p) => p.kind === "part" && p.head === h.head));
  if (ok) return tiles;
  const h = tiles.find((t) => t.kind === "head");
  const p = tiles.find((t) => t.kind === "part");
  if (!h || !p) return tiles;
  return tiles.map((t) => (t.id === p.id ? { ...t, head: h.head, text: heads[h.head].partners[0] } : t));
}

export function CollocationCrush({ band, level, onClose, onLevel }: { band: BandId; level: number; onClose: (changed: boolean) => void; onLevel: (n: number) => void }) {
  const shape = crushShape(level);
  const heads = COLLOCATIONS[band][shape.group].heads;
  const [seed, setSeed] = useState(0);
  const initial = useMemo(() => freshBoard(heads), [heads, seed]);
  const [tiles, setTiles] = useState<Tile[]>(initial);
  const [sel, setSel] = useState<number | null>(null);
  const [popping, setPopping] = useState<number[]>([]);
  const [shaking, setShaking] = useState<number[]>([]);
  const [made, setMade] = useState(0);
  const [moves, setMoves] = useState(shape.moves);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [learnt, setLearnt] = useState<Learnt[]>([]);
  const [done, setDone] = useState<"won" | "lost" | null>(null);
  const busy = useRef(false);

  useEffect(() => { setTiles(initial); }, [initial]);

  function settle(removed: number[]) {
    setTiles((ts) => {
      const keep = ts.filter((t) => !removed.includes(t.id));
      const staged: Tile[] = [...keep];
      for (let c = 0; c < COLS; c++) {
        const missing = ROWS - keep.filter((t) => t.col === c).length;
        for (let k = 0; k < missing; k++) staged.push(makeTile(heads, staged, c, -1 - k));
      }
      return staged;
    });
    // Second step: everything falls into place (new tiles slide in from the top).
    setTimeout(() => {
      setTiles((ts) => {
        const out: Tile[] = [];
        for (let c = 0; c < COLS; c++) {
          const col = ts.filter((t) => t.col === c).sort((a, b) => a.row - b.row);
          col.forEach((t, i) => out.push({ ...t, row: i }));
        }
        return ensurePair(heads, out);
      });
      busy.current = false;
    }, 40);
  }

  function tap(t: Tile) {
    if (busy.current || done) return;
    if (sel === null) { setSel(t.id); sfx("pop"); return; }
    if (sel === t.id) { setSel(null); return; }
    const a = tiles.find((x) => x.id === sel)!;
    if (a.kind === t.kind) { setSel(t.id); sfx("pop"); return; }
    const head = a.kind === "head" ? a : t;
    const part = a.kind === "head" ? t : a;
    const left = moves - 1;
    setMoves(left);
    setSel(null);
    if (part.head === head.head) {
      busy.current = true;
      const c = combo + 1;
      const total = made + 1;
      setCombo(c); setMade(total); setScore((s) => s + 100 * c); sfx("good");
      setMsg({ ok: true, text: `${head.text} ${part.text}${c >= 3 ? `  ·  Combo ×${c}!` : ""}` });
      setPopping([head.id, part.id]);
      setTimeout(() => {
        setPopping([]);
        settle([head.id, part.id]);
        if (total >= shape.goal) setDone("won");
        else if (left <= 0) setDone("lost");
      }, 320);
    } else {
      setCombo(0); sfx("bad");
      const right = heads[part.head].head;
      setMsg({ ok: false, text: `We say "${right} ${part.text}", not "${head.text} ${part.text}".` });
      setLearnt((l) => (l.some((x) => x.text === `${right} ${part.text}`) ? l : [...l, { text: `${right} ${part.text}`, note: `(not "${head.text} ${part.text}")` }]));
      setShaking([head.id, part.id]);
      setTimeout(() => setShaking([]), 450);
      if (left <= 0) setTimeout(() => setDone("lost"), 500);
    }
  }

  const restart = () => { setSeed((s) => s + 1); setSel(null); setMade(0); setMoves(shape.moves); setScore(0); setCombo(0); setMsg(null); setLearnt([]); setDone(null); busy.current = false; };
  const stars = done === "won" ? (moves >= 4 ? 3 : moves >= 2 ? 2 : 1) : 0;

  return (
    <GameShell game="crush" band={band} level={level} hearts={0} score={score} combo={combo} onClose={() => onClose(done !== null)} theme="crush"
      status={<div className="cc-status"><span className="cc-moves" aria-label={`${moves} moves left`}><b>{moves}</b> moves</span><span className="cc-goal" aria-label={`${made} of ${shape.goal} pairs`}>{made} / {shape.goal} pairs</span></div>}>
      {done ? (
        <EndScreen game="crush" band={band} level={level} stars={stars} score={score} learnt={learnt}
          onNext={() => onLevel(level + 1)} onReplay={restart} onMap={onClose} />
      ) : (
        <div className="cc">
          <p className="cc-brief">Tap a <span className="cc-key is-head">round word</span> and a <span className="cc-key is-part">square word</span> that go together.</p>
          <div className={`cc-msg${msg ? (msg.ok ? " is-ok" : " is-no") : ""}`} role="status" aria-live="polite">{msg?.text ?? " "}</div>
          <div className="cc-board" role="group" aria-label="Word board">
            {tiles.map((t) => (
              <button key={t.id} type="button"
                className={`cc-tile is-${t.kind}${sel === t.id ? " is-sel" : ""}${popping.includes(t.id) ? " is-pop" : ""}${shaking.includes(t.id) ? " is-shake" : ""}`}
                style={{ top: `${(t.row * 100) / ROWS}%`, left: `${(t.col * 100) / COLS}%`, ["--c" as string]: t.kind === "head" ? COLORS[t.head % COLORS.length] : undefined }}
                aria-pressed={sel === t.id} onClick={() => tap(t)}>
                <span>{t.text}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </GameShell>
  );
}
