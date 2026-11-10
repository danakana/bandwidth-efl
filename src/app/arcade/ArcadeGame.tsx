import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { shuffle } from "../../lib/answers";
import type { Item } from "../../content/practice/types";
import { recordArcade, type ArcadeOutcome } from "../../lib/progressApi";
import { Icon } from "../../components/Icon";
import { ItemView, type Verdict } from "../practice/Items";
import type { Game } from "./games";
import "../practice/practice.css";
import "./arcade.css";

type Phase = "ready" | "playing" | "saving" | "over";

/** One arcade run. Quick feedback after each answer (it's review, so seeing the answer helps), then straight on. */
export function ArcadeGame({ game, pool, onClose }: { game: Game; pool: Item[]; onClose: (changed: boolean) => void }) {
  const [phase, setPhase] = useState<Phase>("ready");
  const deck = useMemo(() => shuffle(pool), [pool]);
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [streak, setStreak] = useState(0);
  const [left, setLeft] = useState(game.seconds ?? 0);
  const [flash, setFlash] = useState<{ ok: boolean; text: string; q?: string } | null>(null);
  const [result, setResult] = useState<ArcadeOutcome | null>(null);
  const [failed, setFailed] = useState(false);
  const finished = useRef(false);

  useEffect(() => {
    const root = document.getElementById("root");
    if (root) root.inert = true;
    return () => { if (root) root.inert = false; };
  }, []);

  // The clock.
  useEffect(() => {
    if (phase !== "playing" || game.seconds === null) return;
    const t0 = Date.now();
    const id = window.setInterval(() => {
      const rest = Math.max(0, game.seconds! - Math.floor((Date.now() - t0) / 1000));
      setLeft(rest);
      if (rest === 0) window.clearInterval(id);
    }, 250);
    return () => window.clearInterval(id);
  }, [phase, game.seconds]);

  useEffect(() => { if (phase === "playing" && game.seconds !== null && left === 0) void end(score, answered); });

  async function end(s: number, n: number) {
    if (finished.current) return;
    finished.current = true;
    if (n === 0) { onClose(false); return; }
    setPhase("saving");
    const total = Math.max(1, Math.min(n, game.max));
    const sc = Math.min(Math.floor(s), total);
    try { setResult(await recordArcade(game.id, sc, total)); }
    catch { setFailed(true); }
    setPhase("over");
  }

  function answer(v: Verdict) {
    const s = score + v.score, n = answered + 1;
    setScore(s); setAnswered(n);
    setStreak(v.score >= 1 ? streak + 1 : 0);
    setFlash(v.score >= 1
      ? { ok: true, text: streak + 1 >= 3 ? `${streak + 1} in a row!` : "Right!" }
      : { ok: false, q: item.prompt, text: v.correct });
    const outOfItems = game.items !== null ? n >= game.items : n >= game.max;
    if (outOfItems) { void end(s, n); return; }
    setI(i + 1);
  }

  const item = deck[i % deck.length];
  const urgent = game.seconds !== null && left <= 10;

  return createPortal(
    <div className="pt px ar" role="dialog" aria-modal="true" aria-label={game.name}>
      <header className="px-head">
        <button type="button" className="px-close" aria-label="Stop playing" onClick={() => (phase === "playing" ? void end(score, answered) : onClose(phase === "over"))}>
          <Icon name="x" size={22} />
        </button>
        <p className="px-head-title"><span>Arcade</span>{game.name}</p>
        {phase === "playing" && (
          <div className="ar-hud">
            {game.seconds !== null
              ? <span className={`ar-clock${urgent ? " is-urgent" : ""}`} role="timer" aria-label={`${left} seconds left`}>{left}s</span>
              : <span className="ar-clock">{Math.min(answered + 1, game.items!)} / {game.items}</span>}
            <span className="ar-score" aria-label={`Score ${Math.floor(score)}`}><Icon name="star" size={16} fill /> {Math.floor(score)}</span>
          </div>
        )}
      </header>
      <div className="pt-main">
        <section className="pt-card">
          {phase === "ready" && (
            <div className="px-intro ar-intro">
              <div className="ar-emblem" aria-hidden="true"><Icon name="bolt" size={42} fill /></div>
              <h1>{game.name}</h1>
              <p className="pt-lede">{game.blurb}</p>
              <p className="muted">Every question comes from a skill you've already practised. Wrong answers show you the right one, so you learn as you play.</p>
              <button type="button" className="btn btn-primary pt-go" onClick={() => setPhase("playing")} autoFocus>Go!</button>
            </div>
          )}
          {phase === "playing" && item && (
            <>
              <p className={`ar-flash${flash ? (flash.ok ? " is-ok" : " is-no") : ""}`} aria-live="polite">
                {flash?.q ? <><span className="ar-flash-q">Last one: {flash.q}</span>Answer: {flash.text}</> : flash?.text ?? " "}
              </p>
              <ItemView key={i} item={item} onAnswer={answer} />
            </>
          )}
          {phase === "saving" && <div className="pt-center"><h2>Time!</h2></div>}
          {phase === "over" && (
            <div className="px-result ar-over">
              <div className="ar-emblem" aria-hidden="true"><Icon name={result?.new_best ? "trophy" : "star"} size={42} fill={!result?.new_best} /></div>
              <h1>{result?.new_best ? "New best!" : "Nice run."}</h1>
              <p className="px-score"><strong>{Math.floor(score)}</strong> <span>right out of {answered}</span></p>
              {result && <p className="muted">Your best: {result.best}</p>}
              {result && (
                <div className="px-loot">
                  <div className="px-counter is-xp"><span className="px-counter-icon" aria-hidden="true"><Icon name="bolt" size={22} fill /></span><strong>+{result.xp}</strong><span>XP</span></div>
                  <div className="px-counter is-coin"><span className="px-counter-icon" aria-hidden="true"><Icon name="coin" size={22} /></span><strong>+{result.coins}</strong><span>Coins</span></div>
                </div>
              )}
              {result?.capped && <p className="muted px-small">You've hit today's arcade coin limit. XP still counts, and coins come back tomorrow. Practice steps always pay coins.</p>}
              {failed && <p className="form-error">That run didn't save. Check your connection.</p>}
              <div className="pt-actions px-result-actions">
                <button type="button" className="btn btn-primary" onClick={() => onClose(true)}>Back to the arcade</button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>,
    document.body,
  );
}
