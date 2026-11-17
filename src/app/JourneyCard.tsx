import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useProgress } from "../lib/progress";
import { BANDS } from "../content/bands";
import { Icon } from "../components/Icon";
import { CHECK_EVERY_DAYS, checkBandIndex, type LevelPoint } from "../lib/placementApi";

type Counts = { fixed: number; read: number; learnt: number };

/**
 * Your journey: where the student started, where they are now, and the work that got them there.
 * Real growth is slow, so this shows the evidence (skills made Secure, mistakes fixed, texts read, words learnt)
 * rather than XP. Every six weeks a level check (the placement test again) measures the change in each skill.
 */
export function JourneyCard({ placed, start, placedAt, history, onCheck }: { placed: number; start: number; placedAt: string | null; history: LevelPoint[]; onCheck: () => void }) {
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
  const lastAt = history.length ? history[history.length - 1].attempt.completed_at : placedAt;
  const days = lastAt ? Math.floor((Date.now() - new Date(lastAt).getTime()) / 86_400_000) : 0;
  const nextOn = lastAt ? new Date(new Date(lastAt).getTime() + CHECK_EVERY_DAYS * 86_400_000).toLocaleDateString("en-GB", { day: "numeric", month: "long" }) : null;
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
      {history.length > 0 && <LevelTable history={history} />}
      {days >= CHECK_EVERY_DAYS ? (
        <div className="jr-retake">
          <p><strong>Your level check is ready.</strong> It's been {Math.floor(days / 7)} weeks since your last test. Take it again to see how your English has grown in each skill.</p>
          <button type="button" className="btn btn-primary" onClick={onCheck}>Start the level check</button>
        </div>
      ) : nextOn && (
        <p className="muted jr-next">Next level check: {nextOn}. It measures all four skills again, so you can see real progress.</p>
      )}
    </section>
  );
}

const SKILLS = [["reading", "Reading"], ["listening", "Listening"], ["writing", "Writing"], ["speaking", "Speaking"]] as const;

/** Each test side by side: the band measured in every skill, and the overall level once all four are in. */
export function LevelTable({ history, caption = "Your level over time" }: { history: LevelPoint[]; caption?: string }) {
  const fmt = (d: string | null) => d ? new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "2-digit" }) : "";
  return (
    <div className="table-wrap jr-levels">
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr><th scope="col">Test</th>{SKILLS.map(([, l]) => <th key={l} scope="col">{l}</th>)}<th scope="col">Overall</th></tr>
        </thead>
        <tbody>
          {history.map((p, i) => {
            const all = checkBandIndex(p);
            const prev = i > 0 ? checkBandIndex(history[i - 1]) : null;
            return (
              <tr key={p.attempt.id}>
                <th scope="row">{p.attempt.kind === "check" ? "Level check" : "Placement"}<small>{fmt(p.attempt.completed_at)}</small></th>
                {SKILLS.map(([k]) => {
                  const b = p.bands[k];
                  return <td key={k}>{b ? <span className="band-chip">{b}</span> : <span className="muted">{k === "writing" || k === "speaking" ? "Teacher checking" : "–"}</span>}</td>;
                })}
                <td>
                  {all === null ? <span className="muted">Waiting</span> : <span className="band-chip is-now">{BANDS[all].id}</span>}
                  {all !== null && prev !== null && all > prev && <span className="jr-up"> up {all - prev}</span>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
