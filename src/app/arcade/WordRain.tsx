import { useEffect, useMemo, useRef, useState } from "react";
import { useAuth } from "../../lib/auth";
import { EndScreen, GameShell, sfx, type Learnt } from "./GameKit";
import { buildRain, rainShape, starsFrom, type LevelBand } from "./levels";

/**
 * Word Rain: words fall towards the city. Read the clue (a meaning or a sentence with a gap)
 * and tap the right word before it lands. Wrong taps and missed words cost a life.
 */
export function WordRain({ band, level, onClose, onLevel }: { band: LevelBand; level: number; onClose: (changed: boolean) => void; onLevel: (n: number) => void }) {
  const { profile } = useAuth();
  const es = !!profile?.spanish_help;
  const [seed, setSeed] = useState(0);
  const waves = useMemo(() => buildRain(band, level), [band, level, seed]); // eslint-disable-line react-hooks/exhaustive-deps
  const { fall } = rainShape(level);
  const [w, setW] = useState(0);
  const [gone, setGone] = useState<Record<string, "hit" | "miss">>({});
  const [hearts, setHearts] = useState(3);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [learnt, setLearnt] = useState<Learnt[]>([]);
  const [flash, setFlash] = useState<{ ok: boolean; text: string } | null>(null);
  const [hit, setHit] = useState(0);
  const [done, setDone] = useState<"won" | "lost" | null>(null);
  const [started, setStarted] = useState(false);
  const locked = useRef(false);
  const wave = waves[w];

  // A short countdown so the first wave doesn't catch anyone off guard.
  useEffect(() => { const t = setTimeout(() => setStarted(true), 900); return () => clearTimeout(t); }, [seed]);

  function nextWave(h: number) {
    setTimeout(() => {
      locked.current = false;
      setGone({});
      if (h <= 0) { setDone("lost"); return; }
      if (w + 1 >= waves.length) { setDone("won"); return; }
      setW(w + 1);
    }, 650);
  }

  function miss(note: string) {
    const h = hearts - 1;
    setHearts(h); setCombo(0); setHit((x) => x + 1); sfx("bad");
    setLearnt((l) => (l.some((x) => x.text === wave.answer) ? l : [...l, { text: wave.answer, note }]));
    return h;
  }

  function tap(word: string) {
    if (locked.current || done || gone[word]) return;
    if (word === wave.answer) {
      locked.current = true;
      const c = combo + 1;
      setCombo(c); setScore((s) => s + 100 * c + (c >= 5 ? 50 : 0)); sfx("good");
      setGone({ ...gone, [word]: "hit" });
      setFlash({ ok: true, text: c >= 3 ? `Combo ×${c}!` : "Nice!" });
      nextWave(hearts);
    } else {
      setGone({ ...gone, [word]: "miss" });
      setFlash({ ok: false, text: `Not "${word}"` });
      const h = miss(wave.kind === "gap" ? `fits the gap: ${wave.clue.replace("_____", wave.answer)}` : wave.clue);
      if (h <= 0) { locked.current = true; nextWave(h); }
    }
  }

  function landed(word: string) {
    if (word !== wave.answer || locked.current || done) return;
    locked.current = true;
    setFlash({ ok: false, text: `Splash! It was "${wave.answer}"` });
    const h = miss(wave.kind === "gap" ? `fits the gap: ${wave.clue.replace("_____", wave.answer)}` : wave.clue);
    nextWave(h);
  }

  const restart = () => { setSeed((s) => s + 1); setW(0); setGone({}); setHearts(3); setScore(0); setCombo(0); setLearnt([]); setDone(null); setStarted(false); setFlash(null); locked.current = false; };
  const stars = starsFrom(done === "won", hearts);

  return (
    <GameShell game="rain" band={band} level={level} hearts={hearts} score={score} combo={combo} onClose={() => onClose(done !== null)} theme="rain">
      {done ? (
        <EndScreen game="rain" band={band} level={level} stars={stars} score={score} learnt={learnt}
          onNext={() => onLevel(level + 1)} onReplay={restart} onMap={onClose} />
      ) : (
        <div className="wr">
          <div className="wr-clue" aria-live="polite">
            <span className="wr-wave">Wave {w + 1} / {waves.length}</span>
            <p>{wave.kind === "meaning" ? <>Which word means: <strong>{wave.clue}</strong>{es && <em lang="es"> ({wave.es})</em>}</> : <>Which word fits? <strong>{wave.clue}</strong></>}</p>
          </div>
          <div className={`wr-flash${flash ? (flash.ok ? " is-ok" : " is-no") : ""}`} role="status">{flash?.text ?? " "}</div>
          <div className="wr-sky">
            {!started ? <p className="wr-ready">Ready…</p> : wave.words.map((word, k) => (
              <button key={`${w}-${seed}-${word}`} type="button"
                className={`wr-drop${gone[word] === "hit" ? " is-hit" : gone[word] === "miss" ? " is-miss" : ""}`}
                style={{ left: `${8 + k * 31}%`, animationDuration: `${fall + k * 0.6}s`, animationDelay: `${k * 0.35}s` }}
                onAnimationEnd={(e) => { if (e.animationName === "wr-fall") landed(word); }}
                onClick={() => tap(word)}>
                {word}
              </button>
            ))}
            <div key={hit} className={`wr-city${hit ? " is-hit" : ""}`} aria-hidden="true">
              {[38, 64, 46, 80, 52, 70, 42, 58].map((h, i) => <span key={i} style={{ height: `${h}%` }}><i /><i /><i /></span>)}
            </div>
          </div>
        </div>
      )}
    </GameShell>
  );
}
