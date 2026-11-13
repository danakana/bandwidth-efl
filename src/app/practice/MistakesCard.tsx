import { useCallback, useEffect, useState } from "react";
import { itemByKey } from "../../content/practice";
import { NODES } from "../../content/curriculum";
import { loadMistakes, today, type Mistake } from "../../lib/mistakesApi";
import { useProgress } from "../../lib/progress";
import { Icon } from "../../components/Icon";
import { PracticePlayer } from "./PracticePlayer";
import type { Item } from "../../content/practice/types";

const ROUND = 10;

/** "Fix your mistakes": questions the student got wrong, back on the right day, until they're fixed. */
export function MistakesCard({ es }: { es: boolean }) {
  const progress = useProgress();
  const [list, setList] = useState<Mistake[] | null>(null);
  const [playing, setPlaying] = useState<Item[] | null>(null);

  const load = useCallback(async () => { setList(await loadMistakes()); }, []);
  useEffect(() => { void load(); }, [load]);

  if (!list || list.length === 0) return null;
  const now = today();
  const due = list.filter((m) => m.next_due <= now && itemByKey(m.item_key));
  const later = list.filter((m) => m.next_due > now);
  const next = later[0]?.next_due;
  // The skills with the most open mistakes: where to go back and review the rule.
  const bySkill = Object.entries(list.reduce<Record<string, number>>((a, m) => ({ ...a, [m.node_id]: (a[m.node_id] ?? 0) + 1 }), {}))
    .sort((a, b) => b[1] - a[1]).slice(0, 3)
    .map(([id, n]) => ({ title: NODES.find((x) => x.id === id)?.title ?? id, n }));

  function start() {
    // Oldest first, then mixed so the same skill doesn't come three times in a row.
    const pick = due.slice(0, ROUND).map((m) => itemByKey(m.item_key)!).sort(() => Math.random() - 0.5);
    setPlaying(pick);
  }

  return (
    <section className="home-section mk-card" aria-labelledby="mk-title">
      <div className="mk-head">
        <span className="mk-icon" aria-hidden="true"><Icon name="bolt" size={24} /></span>
        <div>
          <h2 id="mk-title">Fix your mistakes</h2>
          <p className="muted">
            {due.length > 0
              ? <>{due.length} {due.length === 1 ? "question is" : "questions are"} back today. Get each one right twice, a few days apart, and it's fixed for good.</>
              : <>Nothing due today. Your next mistake comes back on {new Date(`${next}T12:00:00`).toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" })}.</>}
          </p>
          {es && due.length > 0 && <p lang="es" className="es">Repasar tus errores unos días después es una de las mejores formas de aprender.</p>}
        </div>
        {due.length > 0 && (
          <button type="button" id="mk-start" className="btn btn-primary" onClick={start}>Fix {Math.min(ROUND, due.length)} now</button>
        )}
      </div>
      {bySkill.length > 0 && (
        <p className="mk-skills"><strong>Most mistakes in:</strong> {bySkill.map((s) => `${s.title} (${s.n})`).join(" · ")}</p>
      )}
      {playing && (
        <PracticePlayer target={{ kind: "review", items: playing }}
          onClose={(changed) => { setPlaying(null); if (changed) { void load(); void progress?.refresh(); } }} />
      )}
    </section>
  );
}
