import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { supabase } from "../../lib/supabase";
import { Icon } from "../../components/Icon";
import { Life, Speaker } from "./GameArt";
import { GAME_META, LEVEL_NAMES, LEVELS, type LevelBand, type LevelGame } from "./levels";

/* ---------------- Sound: tiny synth blips, no files to download ---------------- */

let ctx: AudioContext | null = null;
const muted = () => { try { return localStorage.getItem("bw-sfx") === "off"; } catch { return false; } };
export function sfx(kind: "pop" | "good" | "bad" | "wobble" | "crash" | "win" | "lose") {
  if (muted()) return;
  try {
    ctx ??= new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const notes: Record<typeof kind, [number, number, OscillatorType][]> = {
      pop: [[660, 0.06, "triangle"]],
      good: [[523, 0.08, "triangle"], [784, 0.12, "triangle"]],
      bad: [[220, 0.18, "sawtooth"]],
      wobble: [[140, 0.25, "sine"], [120, 0.25, "sine"]],
      crash: [[110, 0.35, "sawtooth"], [70, 0.5, "sawtooth"]],
      win: [[523, 0.1, "triangle"], [659, 0.1, "triangle"], [784, 0.1, "triangle"], [1047, 0.25, "triangle"]],
      lose: [[392, 0.15, "triangle"], [330, 0.15, "triangle"], [262, 0.3, "triangle"]],
    };
    let t = ctx.currentTime;
    for (const [f, d, type] of notes[kind]) {
      const o = ctx.createOscillator(); const g = ctx.createGain();
      o.type = type; o.frequency.value = f;
      g.gain.setValueAtTime(0.12, t); g.gain.exponentialRampToValueAtTime(0.001, t + d);
      o.connect(g).connect(ctx.destination); o.start(t); o.stop(t + d);
      t += d * 0.8;
    }
  } catch { /* sound is optional */ }
}

export function SoundToggle() {
  const [off, setOff] = useState(muted);
  return (
    <button type="button" className="gk-icon-btn" aria-pressed={!off} aria-label={off ? "Sound off" : "Sound on"}
      onClick={() => { const v = !off; setOff(v); try { localStorage.setItem("bw-sfx", v ? "off" : "on"); } catch { /* ignore */ } }}>
      <Speaker on={!off} />
    </button>
  );
}

/* ---------------- Screen ---------------- */

export function GameShell({ game, band, level, hearts, score, combo, onClose, children, theme, status }: {
  game: LevelGame; band: LevelBand; level: number; hearts: number; score: number; combo: number;
  onClose: () => void; children: ReactNode; theme: string; status?: ReactNode;
}) {
  useEffect(() => {
    const root = document.getElementById("root");
    if (root) root.inert = true;
    document.body.style.overflow = "hidden";
    return () => { if (root) root.inert = false; document.body.style.overflow = ""; };
  }, []);
  return createPortal(
    <div className={`gk gk-${theme}`} role="dialog" aria-modal="true" aria-label={`${GAME_META[game].name}, level ${level}`}>
      <header className="gk-hud">
        <button type="button" className="gk-icon-btn" onClick={onClose} aria-label="Leave the game"><Icon name="x" size={20} /></button>
        <div className="gk-title"><strong>{LEVEL_NAMES[game][level - 1]}</strong><span>{band === "EX" ? "Exams & essays" : band} · Level {level}</span></div>
        {status ?? (
          <div className="gk-hearts" role="img" aria-label={`${hearts} ${GAME_META[game].lives} left`}>
            {[0, 1, 2].map((i) => { const k = GAME_META[game].life; return <span key={i} className={i < hearts ? "is-on" : ""} aria-hidden="true">{k && <Life kind={k} on={i < hearts} />}</span>; })}
          </div>
        )}
        <div className="gk-score" aria-live="off"><Icon name="star" size={16} fill /> {score}{combo > 1 && <em> ×{combo}</em>}</div>
        <SoundToggle />
      </header>
      <main className="gk-main">{children}</main>
    </div>,
    document.body,
  );
}

/* ---------------- Results ---------------- */

export type Learnt = { text: string; note: string };

export function EndScreen({ game, band, level, stars, score, learnt, onNext, onReplay, onMap }: {
  game: LevelGame; band: LevelBand; level: number; stars: number; score: number; learnt: Learnt[];
  onNext: () => void; onReplay: () => void; onMap: (changed: boolean) => void;
}) {
  const [reward, setReward] = useState<{ xp: number; coins: number; new_stars: number } | null>(null);
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    sfx(stars > 0 ? "win" : "lose");
    void supabase.rpc("finish_level", { p_game: game, p_band: band, p_level: level, p_stars: stars, p_score: score })
      .then(({ data }) => { if (data) setReward(data as typeof reward); setSaved(true); });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="gk-end" role="status">
      <p className="gk-end-kicker">{stars > 0 ? "Level cleared!" : GAME_META[game].lost}</p>
      <div className="gk-stars" role="img" aria-label={`${stars} of 3 stars`}>
        {[1, 2, 3].map((i) => <span key={i} className={i <= stars ? "is-on" : ""} style={{ animationDelay: `${i * 0.25}s` }} aria-hidden="true">★</span>)}
      </div>
      <p className="gk-end-score">{score} points</p>
      {reward && (reward.xp > 0 || reward.coins > 0) && (
        <p className="ex-reward"><Icon name="bolt" size={18} /> +{reward.xp} XP{reward.coins > 0 && <> · <Icon name="coin" size={18} /> +{reward.coins} coins for {reward.new_stars} new {reward.new_stars === 1 ? "star" : "stars"}</>}</p>
      )}
      {stars > 0 && stars < 3 && <p className="muted">{game === "crush" ? "Finish with more moves left" : game === "golf" ? "Use fewer strokes" : game === "kitchen" ? "Keep every customer happy" : game === "boss" ? "Take fewer hits" : game === "racer" ? "Finish first" : game === "story" ? "Avoid the sentences with mistakes" : `Lose fewer ${game === "tower" ? "blocks" : "lives"}`} to get 3 stars.</p>}
      {learnt.length > 0 && (
        <details className="gk-learnt" open={stars === 0}>
          <summary>{game === "tower" || game === "kitchen" ? "The mistakes and how to fix them" : game === "crush" ? "Pairs to remember" : game === "golf" ? "Holes to look at again" : game === "boss" ? "Questions to look at again" : game === "snake" ? "Words to practise spelling" : game === "racer" ? "Words and sentences to practise saying" : game === "story" ? "The mistakes in the story" : "Words to look at again"} ({learnt.length})</summary>
          <ul>{learnt.map((l, i) => <li key={i}><strong>{l.text}</strong> <span>{l.note}</span></li>)}</ul>
        </details>
      )}
      <div className="gk-end-actions">
        {stars > 0 && level < LEVELS && <button type="button" className="btn btn-primary" onClick={onNext} disabled={!saved}>Next level</button>}
        <button type="button" className={`btn ${stars > 0 && level < LEVELS ? "btn-ghost" : "btn-primary"}`} onClick={onReplay}>{stars === 0 ? "Try again" : "Play again"}</button>
        <button type="button" className="btn btn-ghost" onClick={() => onMap(true)}>Level map</button>
      </div>
    </div>
  );
}
