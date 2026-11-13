import { useEffect, useMemo, useState } from "react";
import type { BandId } from "../../content/bands";
import { EndScreen, GameShell, sfx, type Learnt } from "./GameKit";
import { LEVEL_NAMES, bossShape, buildBoss, starsFrom } from "./levels";

/**
 * Boss Battles: every right answer is an attack on the monster (streaks land critical hits);
 * every wrong answer, or running out of time, lets the monster strike back.
 */
const MONSTERS = ["👺", "🦠", "🧌", "🦉", "👻", "🧙", "🐉"];
const HUES = [0, 120, 30, 260, 200, 300, 350];

export function BossBattle({ band, level, onClose, onLevel }: { band: BandId; level: number; onClose: (changed: boolean) => void; onLevel: (n: number) => void }) {
  const [seed, setSeed] = useState(0);
  const attacks = useMemo(() => buildBoss(band), [band, seed]); // eslint-disable-line react-hooks/exhaustive-deps
  const { hp: maxHp, seconds } = bossShape(level);
  const [q, setQ] = useState(0);
  const [hp, setHp] = useState(maxHp);
  const [hearts, setHearts] = useState(3);
  const [left, setLeft] = useState(seconds);
  const [phase, setPhase] = useState<"ask" | "hit" | "hurt">("ask");
  const [pick, setPick] = useState<string | null>(null);
  const [dmg, setDmg] = useState<{ n: number; crit: boolean } | null>(null);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [learnt, setLearnt] = useState<Learnt[]>([]);
  const [done, setDone] = useState<"won" | "lost" | null>(null);
  const a = attacks[q % attacks.length];

  useEffect(() => { setLeft(seconds); }, [q, seed, seconds]);
  useEffect(() => {
    if (done || phase !== "ask") return;
    if (left <= 0) { hurt(null); return; }
    const t = setTimeout(() => setLeft((x) => +(x - 0.5).toFixed(1)), 500);
    return () => clearTimeout(t);
  }, [left, phase, done]); // eslint-disable-line react-hooks/exhaustive-deps

  function next(h: number, m: number) {
    setTimeout(() => {
      setPick(null); setDmg(null); setPhase("ask");
      if (m <= 0) { setDone("won"); return; }
      if (h <= 0) { setDone("lost"); return; }
      setQ(q + 1);
    }, 1400);
  }
  function hurt(word: string | null) {
    const h = hearts - 1;
    setHearts(h); setCombo(0); setPhase("hurt"); setPick(word); sfx("crash");
    setLearnt((l) => [...l, { text: `${a.context ? a.context + " · " : ""}${a.prompt}`, note: `→ ${a.answer}. ${a.why}` }]);
    next(h, hp);
  }
  function answer(word: string) {
    if (phase !== "ask" || done) return;
    if (word !== a.answer) { hurt(word); return; }
    const c = combo + 1;
    const crit = c >= 3;
    const n = crit ? 2 : 1;
    const m = Math.max(0, hp - n);
    setCombo(c); setHp(m); setPick(word); setPhase("hit"); setDmg({ n, crit }); sfx(crit ? "win" : "good");
    setScore((s) => s + 100 * n + Math.round(left * 10));
    next(hearts, m);
  }

  const restart = () => { setSeed((s) => s + 1); setQ(0); setHp(maxHp); setHearts(3); setPhase("ask"); setPick(null); setDmg(null); setScore(0); setCombo(0); setLearnt([]); setDone(null); };
  const stars = starsFrom(done === "won", hearts);

  return (
    <GameShell game="boss" band={band} level={level} hearts={hearts} score={score} combo={combo} onClose={() => onClose(done !== null)} theme="boss">
      {done ? (
        <EndScreen game="boss" band={band} level={level} stars={stars} score={score} learnt={learnt}
          onNext={() => onLevel(level + 1)} onReplay={restart} onMap={onClose} />
      ) : (
        <div className={`bb${phase === "hurt" ? " is-hurt" : ""}`}>
          <div className="bb-arena">
            <div className="bb-hpbar" role="progressbar" aria-label={`${LEVEL_NAMES.boss[level - 1]}'s health`} aria-valuemin={0} aria-valuemax={maxHp} aria-valuenow={hp}>
              <span style={{ width: `${(hp / maxHp) * 100}%` }} />
              <b>{LEVEL_NAMES.boss[level - 1]}</b>
            </div>
            <div className={`bb-monster is-${phase}`} style={{ ["--h" as string]: `${HUES[level - 1]}deg` }} aria-hidden="true">
              <span>{MONSTERS[level - 1]}</span>
              {dmg && <em className={dmg.crit ? "is-crit" : ""}>{dmg.crit ? "CRITICAL! " : ""}-{dmg.n}</em>}
            </div>
            <div className="bb-timer" aria-hidden="true"><span style={{ width: `${(left / seconds) * 100}%` }} className={left < seconds * 0.3 ? "is-low" : ""} /></div>
          </div>
          <div className="bb-q" aria-live="polite">
            {a.context && <p className="bb-context">{a.context}</p>}
            <p className="bb-prompt">{a.prompt}</p>
            <div className="bb-options" role="group" aria-label="Your attack">
              {a.options.map((o, i) => (
                <button key={o} type="button" disabled={phase !== "ask"}
                  className={`bb-opt${phase !== "ask" && o === a.answer ? " is-right" : ""}${phase === "hurt" && o === pick ? " is-wrong" : ""}`}
                  onClick={() => answer(o)}>
                  <span className="bb-key" aria-hidden="true">{["⚔️", "🔥", "⚡", "🛡️"][i] ?? "✦"}</span>{o}
                </button>
              ))}
            </div>
            <p className="bb-why" role="status">{phase === "hurt" ? `${pick === null ? "Too slow! " : ""}The monster strikes! ${a.why}` : phase === "hit" ? (combo >= 3 ? `Critical hit! ${combo} in a row.` : "Direct hit!") : " "}</p>
          </div>
        </div>
      )}
    </GameShell>
  );
}
