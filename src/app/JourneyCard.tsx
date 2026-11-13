import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useProgress } from "../lib/progress";
import { BANDS } from "../content/bands";
import { Icon } from "../components/Icon";

type Counts = { fixed: number; read: number; learnt: number };

/**
 * Your journey: where the student started, where they are now, and the work that got them there.
 * Real growth is slow, so this shows the evidence (skills made Secure, mistakes fixed, texts read, words learnt)
 * rather than XP. After about three months it suggests retaking the placement test to measure the change.
 */
export function JourneyCard({ placed, start, placedAt, onRetake }: { placed: number; start: number; placedAt: string | null; onRetake: () => void }) {
  const progress = useProgress();
  const [c, setC] = useState<Counts | null>(null);

  useEffect(() => {
    let live = true;
    void Promise.all([
      supabase.from("mistakes").select("item_key", { count: "exact", head: true }).not("cleared_at", "is", null),
      supabase.from("library_reads").select("story_id").limit(500),
      supabase.from("my_words").select("word", { count: "exact", head: true }).not("learnt_at", "is", null),
    ]).then(([m, r, w]) => {
      if (!live) return;
      setC({ fixed: m.count ?? 0, read: new Set((r.data ?? []).map((x: { story_id: string }) => x.story_id)).size, learnt: w.count ?? 0 });
    });
    return () => { live = false; };
  }, [progress?.stats.xp]);

  const secure = Object.values(progress?.nodes ?? {}).filter((n) => n.state === "secure" || n.state === "mastered").length;
  const days = placedAt ? Math.floor((Date.now() - new Date(placedAt).getTime()) / 86_400_000) : 0;
  const since = placedAt ? new Date(placedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : null;
  const moved = start - placed;

  const stats = [
    { n: secure, label: secure === 1 ? "skill made Secure" : "skills made Secure" },
    { n: c?.fixed ?? 0, label: c?.fixed === 1 ? "mistake fixed" : "mistakes fixed" },
    { n: c?.read ?? 0, label: c?.read === 1 ? "text read" : "texts read" },
    { n: c?.learnt ?? 0, label: c?.learnt === 1 ? "word learnt" : "words learnt" },
  ];

  return (
    <section className="home-section jr-card" aria-labelledby="jr-title">
      <h2 id="jr-title">Your journey</h2>
      <p className="jr-path">
        <span className="band-chip">{BANDS[placed]?.id}</span>
        <Icon name="arrow" size={18} />
        <span className="band-chip is-now">{BANDS[start]?.id}</span>
        <span className="muted">
          {since && <>Placed on {since}. </>}
          {moved > 0 ? `You have moved up ${moved} ${moved === 1 ? "band" : "bands"}.` : "Your next band is the goal above."}
        </span>
      </p>
      <ul className="jr-stats">
        {stats.map((s) => <li key={s.label}><strong>{s.n}</strong><span>{s.label}</span></li>)}
      </ul>
      {days >= 90 && (
        <div className="jr-retake">
          <p>It's been {Math.floor(days / 30)} months since your placement test. Take it again to see how much your English has grown.</p>
          <button type="button" className="btn btn-ghost" onClick={onRetake}>Retake the placement test</button>
        </div>
      )}
    </section>
  );
}
