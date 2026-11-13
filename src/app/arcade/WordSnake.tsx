import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAuth } from "../../lib/auth";
import { EndScreen, GameShell, sfx, type Learnt } from "./GameKit";
import { buildSnake, snakeShape, starsFrom, type LevelBand } from "./levels";

/**
 * Word Snake: read the clue and spell the word by eating its letters in order.
 * The right letter makes the snake grow; a wrong letter, a wall or your own tail costs a life.
 * Arrow keys, WASD, swipes or the on-screen pad.
 */
const N = 13;
type P = { x: number; y: number };
type Dir = "up" | "down" | "left" | "right";
const STEP: Record<Dir, P> = { up: { x: 0, y: -1 }, down: { x: 0, y: 1 }, left: { x: -1, y: 0 }, right: { x: 1, y: 0 } };
const OPP: Record<Dir, Dir> = { up: "down", down: "up", left: "right", right: "left" };
const ABC = "abcdefghijklmnopqrstuvwxyz";

type Food = P & { ch: string; good: boolean };

function placeFood(word: string, typed: number, snake: P[]): Food[] {
  const need = word[typed];
  // Decoys: letters from elsewhere in the word first (more tempting), then random ones.
  const pool = [...new Set([...word.slice(typed + 1), ...ABC])].filter((c) => c !== need);
  const decoys = pool.sort(() => Math.random() - 0.5).slice(0, 3);
  const taken = new Set(snake.map((p) => `${p.x},${p.y}`));
  const out: Food[] = [];
  for (const [ch, good] of [[need, true], ...decoys.map((d) => [d, false])] as [string, boolean][]) {
    let p: P;
    do { p = { x: 1 + Math.floor(Math.random() * (N - 2)), y: 1 + Math.floor(Math.random() * (N - 2)) }; }
    while (taken.has(`${p.x},${p.y}`) || Math.abs(p.x - snake[0].x) + Math.abs(p.y - snake[0].y) < 3);
    taken.add(`${p.x},${p.y}`);
    out.push({ ...p, ch, good });
  }
  return out;
}

const startSnake = (): P[] => [{ x: 3, y: 6 }, { x: 2, y: 6 }, { x: 1, y: 6 }];

export function WordSnake({ band, level, onClose, onLevel }: { band: LevelBand; level: number; onClose: (changed: boolean) => void; onLevel: (n: number) => void }) {
  const { profile } = useAuth();
  const es = !!profile?.spanish_help;
  const [seed, setSeed] = useState(0);
  const words = useMemo(() => buildSnake(band, level), [band, level, seed]); // eslint-disable-line react-hooks/exhaustive-deps
  const { tick } = snakeShape(level);
  const [wi, setWi] = useState(0);
  const [typed, setTyped] = useState(0);
  const [snake, setSnake] = useState<P[]>(startSnake);
  const [food, setFood] = useState<Food[]>(() => placeFood(words[0].word, 0, startSnake()));
  const [hearts, setHearts] = useState(3);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [paused, setPaused] = useState(true);
  const [flash, setFlash] = useState<{ ok: boolean; text: string } | null>(null);
  const [learnt, setLearnt] = useState<Learnt[]>([]);
  const [done, setDone] = useState<"won" | "lost" | null>(null);
  const dir = useRef<Dir>("right");
  const queued = useRef<Dir | null>(null);
  const w = words[wi];

  const turn = useCallback((d: Dir) => {
    if (d === OPP[dir.current] || d === dir.current) return;
    queued.current = d;
    setPaused(false);
  }, []);

  useEffect(() => {
    const keys: Record<string, Dir> = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right", w: "up", s: "down", a: "left", d: "right" };
    const on = (e: KeyboardEvent) => { const d = keys[e.key]; if (d) { e.preventDefault(); turn(d); } else if (e.key === " ") { e.preventDefault(); setPaused((p) => !p); } };
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, [turn]);

  function loseLife(text: string) {
    const h = hearts - 1;
    setHearts(h); setCombo(0); sfx("bad");
    setFlash({ ok: false, text });
    setLearnt((l) => (l.some((x) => x.text === w.word) ? l : [...l, { text: w.word, note: w.clue }]));
    const fresh = startSnake();
    setSnake(fresh); dir.current = "right"; queued.current = null; setPaused(true);
    setFood(placeFood(w.word, typed, fresh));
    if (h <= 0) setTimeout(() => setDone("lost"), 400);
  }

  useEffect(() => {
    if (paused || done) return;
    const t = setTimeout(() => {
      if (queued.current) { dir.current = queued.current; queued.current = null; }
      const head = { x: snake[0].x + STEP[dir.current].x, y: snake[0].y + STEP[dir.current].y };
      if (head.x < 0 || head.y < 0 || head.x >= N || head.y >= N) { loseLife("Bonk! You hit the wall."); return; }
      if (snake.some((p) => p.x === head.x && p.y === head.y)) { loseLife("Ouch! You bit your tail."); return; }
      const f = food.find((p) => p.x === head.x && p.y === head.y);
      if (!f) { setSnake([head, ...snake.slice(0, -1)]); return; }
      if (!f.good) {
        setSnake([head, ...snake.slice(0, -1)]);
        loseLife(`"${f.ch}" isn't next. You need the next letter of the word.`);
        return;
      }
      const grown = [head, ...snake];
      setSnake(grown); sfx("pop");
      const t2 = typed + 1;
      if (t2 >= w.word.length) {
        const c = combo + 1;
        setCombo(c); setScore((s) => s + 100 * c + w.word.length * 10); sfx("good");
        setFlash({ ok: true, text: `${w.word}! ${c >= 3 ? `Combo ×${c}` : ""}` });
        if (wi + 1 >= words.length) { setDone("won"); return; }
        setWi(wi + 1); setTyped(0);
        const fresh = startSnake();
        setSnake(fresh); dir.current = "right"; queued.current = null; setPaused(true);
        setFood(placeFood(words[wi + 1].word, 0, fresh));
      } else {
        setTyped(t2);
        setFood(placeFood(w.word, t2, grown));
      }
    }, tick);
    return () => clearTimeout(t);
  }); // runs every render while playing: one step per tick

  // Swipes on touch screens.
  const touch = useRef<P | null>(null);
  const restart = () => { setSeed((s) => s + 1); setWi(0); setTyped(0); const f = startSnake(); setSnake(f); setHearts(3); setScore(0); setCombo(0); setPaused(true); setFlash(null); setLearnt([]); setDone(null); dir.current = "right"; queued.current = null; };
  useEffect(() => { setFood(placeFood(words[0].word, 0, startSnake())); }, [words]);
  const stars = starsFrom(done === "won", hearts);
  const cells = useMemo(() => new Map<string, string>(), []);
  cells.clear();
  snake.forEach((p, i) => cells.set(`${p.x},${p.y}`, i === 0 ? "head" : "body"));

  return (
    <GameShell game="snake" band={band} level={level} hearts={hearts} score={score} combo={combo} onClose={() => onClose(done !== null)} theme="snake">
      {done ? (
        <EndScreen game="snake" band={band} level={level} stars={stars} score={score} learnt={learnt}
          onNext={() => onLevel(level + 1)} onReplay={restart} onMap={onClose} />
      ) : (
        <div className="ws">
          <div className="ws-clue" aria-live="polite">
            <span className="wr-wave">Word {wi + 1} / {words.length}</span>
            <p>{w.clue}{es && <em lang="es"> ({w.es})</em>}</p>
            <p className="ws-typed" aria-label={`Spelled so far: ${w.word.slice(0, typed) || "nothing"}`}>
              {w.word.split("").map((c, i) => <span key={i} className={i < typed ? "is-on" : i === typed ? "is-next" : ""}>{i < typed ? c : "_"}</span>)}
            </p>
          </div>
          <div className={`ws-flash${flash ? (flash.ok ? " is-ok" : " is-no") : ""}`} role="status">{flash?.text ?? " "}</div>
          <div className="ws-board" style={{ ["--n" as string]: N }}
            onTouchStart={(e) => { touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }}
            onTouchEnd={(e) => {
              if (!touch.current) return;
              const dx = e.changedTouches[0].clientX - touch.current.x, dy = e.changedTouches[0].clientY - touch.current.y;
              if (Math.max(Math.abs(dx), Math.abs(dy)) > 20) turn(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : (dy > 0 ? "down" : "up"));
              touch.current = null;
            }}>
            {Array.from({ length: N * N }, (_, i) => {
              const x = i % N, y = Math.floor(i / N);
              const kind = cells.get(`${x},${y}`);
              const f = food.find((p) => p.x === x && p.y === y);
              return <span key={i} className={`ws-cell${kind ? ` is-${kind}` : ""}${f ? " is-food" : ""}`}>{f ? f.ch : kind === "head" ? "👀" : ""}</span>;
            })}
            {paused && <button type="button" className="ws-start" onClick={() => setPaused(false)}>{typed === 0 && wi === 0 && hearts === 3 ? "Tap to start" : "Tap to go on"}<small>Arrow keys, swipe or the buttons below</small></button>}
          </div>
          <div className="ws-pad" role="group" aria-label="Steer the snake">
            <button type="button" onClick={() => turn("up")} aria-label="Up">▲</button>
            <button type="button" onClick={() => turn("left")} aria-label="Left">◀</button>
            <button type="button" onClick={() => setPaused((p) => !p)} aria-label={paused ? "Play" : "Pause"}>{paused ? "▶" : "⏸"}</button>
            <button type="button" onClick={() => turn("right")} aria-label="Right">▶</button>
            <button type="button" onClick={() => turn("down")} aria-label="Down">▼</button>
          </div>
        </div>
      )}
    </GameShell>
  );
}
