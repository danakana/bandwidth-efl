import { useEffect, useMemo, useRef, useState } from "react";
import { buildRetention, finishRetention, isDue, loadRetention, type RetentionOutcome, type RetentionRow } from "../lib/retentionApi";
import { logAnswers } from "../lib/mistakesApi";
import { useProgress } from "../lib/progress";
import { NODES } from "../content/curriculum";
import { Session } from "./practice/Session";
import { Art } from "./arcade/GameArt";
import { Icon } from "../components/Icon";
import "./practice/practice.css";

const titleOf = (id: string) => NODES.find((n) => n.id === id)?.title ?? id;

/**
 * The memory check: about three weeks after a Gate, a short mixed quiz across the band.
 * Passing a Gate once isn't the same as keeping the level, so skills that slipped go back into review.
 */
export function RetentionCard({ es }: { es: boolean }) {
  const progress = useProgress();
  const [rows, setRows] = useState<RetentionRow[]>([]);
  const [running, setRunning] = useState<RetentionRow | null>(null);
  const [outcome, setOutcome] = useState<(RetentionOutcome & { band: string }) | null>(null);
  const [error, setError] = useState("");
  const log = useRef<{ results: { node: string; ok: boolean }[]; answers: Parameters<typeof logAnswers>[0] }>({ results: [], answers: [] });

  useEffect(() => { void loadRetention().then(setRows); }, []);
  const due = rows.find(isDue);
  const quiz = useMemo(() => (running ? buildRetention(running.band) : []), [running]);

  async function done(results: { node: string; ok: boolean }[], answers: Parameters<typeof logAnswers>[0]) {
    try {
      const out = await finishRetention(running!.id, results);
      void logAnswers(answers).catch(() => undefined);
      setOutcome({ ...out, band: running!.band });
      setRunning(null);
      setRows(await loadRetention());
      void progress?.refresh();
    } catch {
      setError("Your answers couldn't be saved. Check your connection and try again.");
    }
  }

  if (outcome) {
    const kept = outcome.pct >= 80;
    return (
      <section className="home-section rt-card is-result" aria-labelledby="rt-title" role="status">
        <Art name="chest" size={110} className="rt-art" />
        <div>
          <p className="pt-kicker">Memory check · {outcome.band}</p>
          <h2 id="rt-title">{kept ? `You kept ${outcome.pct}% of ${outcome.band}.` : `${outcome.pct}% stuck. Some skills need another round.`}</h2>
          {outcome.slipped.length > 0 ? (
            <>
              <p>{outcome.slipped.length === 1 ? "This skill is" : "These skills are"} back in your review, due today. A few minutes each will bring {outcome.slipped.length === 1 ? "it" : "them"} back.</p>
              <ul className="rt-slipped">{outcome.slipped.map((id) => <li key={id}><Icon name="clock" size={16} /> {titleOf(id)}</li>)}</ul>
            </>
          ) : <p>Everything stuck. That's what a consolidated level looks like.</p>}
          <p className="ex-reward"><Icon name="bolt" size={18} /> +{outcome.xp} XP{outcome.coins > 0 && <> · <Art name="coin" size={20} /> +{outcome.coins} coins</>}</p>
          <button type="button" className="btn btn-ghost" onClick={() => setOutcome(null)}>Close</button>
        </div>
      </section>
    );
  }

  if (running) {
    return (
      <section className="home-section rt-run" aria-label={`Memory check, ${running.band}`}>
        <Session items={quiz.map((q) => q.item)} label={`Memory check · ${running.band}`}
          onItem={(item, v) => { const q = quiz.find((x) => x.item === item); if (q) { log.current.results.push({ node: q.node, ok: v.score >= 1 }); log.current.answers.push({ item, ok: v.score >= 1 }); } }}
          onDone={() => void done(log.current.results, log.current.answers)} />
        {error && <p className="form-error" role="alert">{error}</p>}
      </section>
    );
  }

  if (!due) return null;
  return (
    <section className="home-section rt-card" aria-labelledby="rt-title">
      <Art name="chest" size={110} className="rt-art" />
      <div>
        <p className="pt-kicker">Memory check · {due.band}</p>
        <h2 id="rt-title">Three weeks ago you passed the {due.band} Gate. What stuck?</h2>
        <p>12 quick questions from across {due.band}, about 5 minutes. Skills you've forgotten go back into your review, so your level stays solid.</p>
        {es && <p lang="es" className="es">12 preguntas rápidas. Lo que hayas olvidado vuelve a tu repaso.</p>}
        <button type="button" className="btn btn-primary" onClick={() => { log.current = { results: [], answers: [] }; setRunning(due); }}>Start the memory check</button>
      </div>
    </section>
  );
}
