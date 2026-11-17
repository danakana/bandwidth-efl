import { useCallback, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../lib/auth";
import { useProgress } from "../lib/progress";
import { savePractice } from "../lib/progressApi";
import type { Submission } from "../lib/placementApi";
import { BANDS, type BandId } from "../content/bands";
import { NODES } from "../content/curriculum";
import { GENRE_NAME, MARKS, RUBRIC, weekKey, weeklyFor } from "../content/weekly";
import { CreateStep, type CreateResult } from "./practice/CreateStep";
import { Rewrite } from "./practice/Rewrite";
import { Icon } from "../components/Icon";
import { Art } from "./arcade/GameArt";
import { hrefFor } from "../lib/route";

type Skill = "writing" | "speaking";
const nodeOf = (id: string) => NODES.find((n) => n.id === id);

/**
 * This week's writing and speaking: one of each, at the student's band, marked by the teacher with a CEFR rubric.
 * Production with feedback is what moves a level, so this sits near the top of home every week.
 */
export function WeeklyCard({ start, es }: { start: number; es: boolean }) {
  const { session } = useAuth();
  const progress = useProgress();
  const band = BANDS[start].id as BandId;
  const { key } = weekKey();
  const tasks = weeklyFor(band);
  const [subs, setSubs] = useState<Submission[] | null>(null);
  const [doing, setDoing] = useState<Skill | null>(null);
  const [open, setOpen] = useState<string | null>(null);
  const [rewriting, setRewriting] = useState<string | null>(null);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    const { data } = await supabase.from("submissions").select("*").like("node_id", "week:%")
      .order("created_at", { ascending: false }).limit(20);
    setSubs((data as Submission[]) ?? []);
  }, []);
  useEffect(() => { void load(); }, [load]);

  const mine = (skill: Skill) => subs?.find((s) => s.skill === skill && !s.revision_of && s.node_id?.startsWith(`week:${key}:`));
  const marked = (subs ?? []).filter((s) => s.reviewed_at);
  const unseen = marked.filter((s) => !s.feedback_seen_at);

  async function send(skill: Skill, r: CreateResult) {
    setError("");
    try {
      const id = await savePractice(session!.user.id, `week:${key}:${band}`, r.prompt, r.text, r.words, skill === "speaking" ? r.audio : null, r.ok, band);
      await supabase.rpc("reward_weekly", { p_submission: id });
      setDoing(null);
      await load();
      void progress?.refresh();
    } catch {
      setError("It couldn't be sent. Check your connection and try again.");
    }
  }

  async function read(s: Submission) {
    setOpen(open === s.id ? null : s.id);
    if (s.feedback_seen_at) return;
    setSubs((all) => (all ?? []).map((x) => (x.id === s.id ? { ...x, feedback_seen_at: new Date().toISOString() } : x)));
    await supabase.rpc("mark_feedback_seen", { p_ids: [s.id] });
  }

  if (!subs) return null;

  if (doing) {
    const t = tasks[doing];
    return (
      <section className="home-section wk-card is-doing" aria-labelledby="wk-title">
        <div className="wk-doing-head">
          <p className="pt-kicker">This week · {GENRE_NAME[t.genre]} · {band}</p>
          <button type="button" className="link-btn" onClick={() => setDoing(null)}>Back</button>
        </div>
        <h2 id="wk-title" className="visually-hidden">This week's {doing}</h2>
        <p className="muted px-small">
          {doing === "writing" ? `At least ${t.task.minWords} words. ` : `Talk for about ${Math.round((t.task.seconds ?? 60) / 15) * 15} seconds. `}
          Your teacher marks it for task, {doing === "writing" ? "organisation" : "fluency"}, range and accuracy at {band}.
        </p>
        <CreateStep task={t.task} only={doing === "writing" ? "write" : "speak"} exam submitLabel="Send to my teacher" onSubmit={(r) => send(doing, r)} />
        {error && <p className="form-error" role="alert">{error}</p>}
      </section>
    );
  }

  const done = (["writing", "speaking"] as const).filter((k) => mine(k)).length;
  return (
    <section className="home-section wk-card" aria-labelledby="wk-title">
      <div className="wk-top">
        <Art name="boss-4" size={96} className="wk-art" />
        <div>
          <p className="pt-kicker">Weekly task · {band}</p>
          <h2 id="wk-title">{done === 2 ? "Both sent this week. Nice work." : "This week: write one, say one."}</h2>
          <p className="muted">Your teacher reads and listens to these. It's how your writing and speaking reach the next level.{es && <span lang="es" className="es"> Tu profe revisa estas tareas cada semana.</span>}</p>
        </div>
      </div>
      <ul className="wk-tasks">
        {(["writing", "speaking"] as const).map((k) => {
          const t = tasks[k];
          const s = mine(k);
          return (
            <li key={k} className={`wk-task${s ? " is-sent" : ""}`}>
              <span className="wk-icon" aria-hidden="true"><Icon name={k === "writing" ? "book" : "mic"} size={22} /></span>
              <div>
                <strong>{k === "writing" ? "Write" : "Say"}: {GENRE_NAME[t.genre]}</strong>
                <span className="wk-prompt">{s ? s.prompt : t.task.prompts[0].text}</span>
              </div>
              {s
                ? <span className="pill pill-good">{s.reviewed_at ? "Marked" : "Sent"}</span>
                : <button type="button" className="btn btn-primary btn-sm" onClick={() => setDoing(k)}>{k === "writing" ? "Write it" : "Record it"}</button>}
            </li>
          );
        })}
      </ul>
      <p className="muted px-small">+40 XP and 15 coins for each one you send. A new pair arrives every Monday.</p>

      {marked.length > 0 && (
        <div className="wk-feedback">
          <h3>Your teacher's marks {unseen.length > 0 && <span className="pill tn-new">{unseen.length} new</span>}</h3>
          <ul className="tn-list">
            {marked.slice(0, 4).map((s) => {
              const isOpen = open === s.id;
              const crit = RUBRIC[s.skill];
              return (
                <li key={s.id} className={`tn-item${s.feedback_seen_at ? "" : " is-new"}`}>
                  <button type="button" className="tn-head" aria-expanded={isOpen} onClick={() => void read(s)}>
                    {!s.feedback_seen_at && <span className="tn-dot" aria-label="New" />}
                    <span className="tn-title">
                      <strong>{s.revision_of ? "Rewrite" : s.skill === "writing" ? "Writing" : "Speaking"} · week of {new Date(s.node_id!.split(":")[1] + "T12:00").toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</strong>
                      <small>{s.teacher_band ? `Your teacher placed it at ${s.teacher_band}` : "Marked"}</small>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="tn-body">
                      {s.rubric && (
                        <ul className="wk-marks" aria-label="Rubric">
                          {crit.map((c) => {
                            const v = s.rubric?.[c.id];
                            const m = MARKS.find((x) => x.v === v);
                            return <li key={c.id} className={`is-${v === 1 ? "up" : v === -1 ? "down" : "at"}`}><span>{c.name}</span><strong>{m ? m.label.replace("band", s.node_id!.split(":")[2]) : "–"}</strong></li>;
                          })}
                        </ul>
                      )}
                      {s.teacher_feedback && <blockquote className="tn-quote">{s.teacher_feedback}</blockquote>}
                      {(s.focus?.length ?? 0) > 0 && (
                        <div className="wk-focus">
                          <p><strong>Practise these next.</strong> Your teacher picked them from your {s.skill}; the ones you've learnt are back in your review today.</p>
                          <ul>
                            {s.focus!.map((id) => { const n = nodeOf(id); return n ? <li key={id}><a href={hrefFor(n.band, n.tree)}>{n.title}</a></li> : null; })}
                          </ul>
                        </div>
                      )}
                      {s.skill === "writing" && s.body && (rewriting === s.id
                        ? <Rewrite sub={s} onDone={() => setRewriting(null)} />
                        : <button type="button" className="btn btn-sm btn-primary" onClick={() => setRewriting(s.id)}>Rewrite it with this feedback</button>)}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}
