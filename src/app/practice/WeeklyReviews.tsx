import { useEffect, useMemo, useState } from "react";
import { supabase, type ClassRow } from "../../lib/supabase";
import type { Submission } from "../../lib/placementApi";
import { BANDS } from "../../content/bands";
import { NODES } from "../../content/curriculum";
import { TREES } from "../map/trees";
import { MARKS, RUBRIC } from "../../content/weekly";

const isWeekly = (s: Submission) => !!s.node_id?.startsWith("week:");
const PAGE = 10;

/**
 * Teacher inbox for the weekly writing and speaking. Mark four CEFR criteria against the student's band,
 * set the band you'd give the piece, and pick up to six skills to send back to the student's review.
 */
export function WeeklyReviews({ subs, classes, students, onChanged }: {
  subs: Submission[]; classes: ClassRow[];
  students: { id: string; username: string | null; display_name: string | null; class_id: string | null }[];
  onChanged: () => void;
}) {
  const [filter, setFilter] = useState<"todo" | "all">("todo");
  const [cls, setCls] = useState("");
  const [shown, setShown] = useState(PAGE);
  const weekly = useMemo(() => subs.filter(isWeekly), [subs]);
  const todo = weekly.filter((s) => !s.reviewed_at).length;
  const list = weekly.filter((s) => filter === "all" || !s.reviewed_at)
    .filter((s) => !cls || students.find((st) => st.id === s.student_id)?.class_id === cls);
  const nameOf = (id: string) => { const st = students.find((x) => x.id === id); return st?.display_name ?? st?.username ?? "Student"; };

  return (
    <section className="home-section" aria-labelledby="wr-title">
      <div className="pw-head">
        <h2 id="wr-title">Weekly tasks</h2>
        {todo > 0 && <span className="pill" role="status">{todo} to mark</span>}
      </div>
      <p className="muted">One piece of writing and one recording per student each week, at their band. Your marks, comment and chosen skills go straight back to the student.</p>
      {weekly.length === 0 ? <p className="muted">Nothing yet. Students see a new pair of tasks every Monday.</p> : (
        <>
          <div className="pw-filters">
            <div role="group" aria-label="Show" className="pw-seg">
              <button type="button" aria-pressed={filter === "todo"} onClick={() => { setFilter("todo"); setShown(PAGE); }}>To mark</button>
              <button type="button" aria-pressed={filter === "all"} onClick={() => { setFilter("all"); setShown(PAGE); }}>All</button>
            </div>
            {classes.length > 1 && (
              <label className="pw-class"><span className="visually-hidden">Class</span>
                <select value={cls} onChange={(e) => { setCls(e.target.value); setShown(PAGE); }}>
                  <option value="">All classes</option>
                  {classes.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </label>
            )}
          </div>
          {list.length === 0 ? <p className="muted">All marked. Nice.</p> : list.slice(0, shown).map((s) => <WeeklyMark key={s.id} sub={s} name={nameOf(s.student_id)} onSaved={onChanged} />)}
          {list.length > shown && <button type="button" className="btn btn-ghost btn-sm pw-more" onClick={() => setShown(shown + PAGE)}>Show more ({list.length - shown})</button>}
        </>
      )}
    </section>
  );
}

function WeeklyMark({ sub, name, onSaved }: { sub: Submission; name: string; onSaved: () => void }) {
  const [, monday, band] = sub.node_id!.split(":");
  const crit = RUBRIC[sub.skill];
  const [marks, setMarks] = useState<Record<string, -1 | 0 | 1>>(() => ({ ...(sub.rubric ?? {}) }));
  const [level, setLevel] = useState(sub.teacher_band ?? "");
  const [comment, setComment] = useState(sub.teacher_feedback ?? "");
  const [focus, setFocus] = useState<string[]>(sub.focus ?? []);
  const [audio, setAudio] = useState<string | null>(null);
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [sent, setSent] = useState<number | null>(null);

  useEffect(() => {
    if (sub.skill !== "speaking" || !sub.audio_path) return;
    let live = true;
    void supabase.storage.from("speaking").createSignedUrl(sub.audio_path, 3600).then(({ data }) => { if (live && data) setAudio(data.signedUrl); });
    return () => { live = false; };
  }, [sub.skill, sub.audio_path]);

  // Skills to send back: the band's Error Clinic, grammar and words (plus sounds for speaking).
  const trees = sub.skill === "speaking" ? (["errors", "grammar", "sounds", "words"] as const) : (["errors", "grammar", "words"] as const);
  const options = trees.map((t) => ({ tree: TREES.find((x) => x.id === t), nodes: NODES.filter((n) => n.band === band && n.tree === t) }));
  const toggle = (id: string) => { setFocus((f) => (f.includes(id) ? f.filter((x) => x !== id) : f.length >= 6 ? f : [...f, id])); setState("idle"); };
  const complete = crit.every((c) => marks[c.id] !== undefined);
  // Suggest a band from the marks: mostly above → one up, mostly below → one down.
  const sum = crit.reduce((n, c) => n + (marks[c.id] ?? 0), 0);
  const bi = BANDS.findIndex((b) => b.id === band);
  const suggested = complete ? BANDS[Math.max(0, Math.min(BANDS.length - 1, bi + (sum >= 3 ? 1 : sum <= -2 ? -1 : 0)))].id : null;

  async function save() {
    setState("saving");
    const { data, error } = await supabase.rpc("mark_weekly", { p_id: sub.id, p_rubric: marks, p_band: level || suggested || null, p_feedback: comment, p_focus: focus });
    if (error) { setState("error"); return; }
    setSent((data as { sent_to_review: number }).sent_to_review);
    setState("saved");
    onSaved();
  }

  const label = sub.skill === "writing" ? "Writing" : "Speaking";
  return (
    <article className={`class-card rv-item pw-card wr-card${sub.reviewed_at ? " is-done" : ""}`} aria-label={`${name}: weekly ${label.toLowerCase()}`}>
      <div className="rv-meta">
        <strong>{name}</strong>
        <span className="band-chip">{band}</span>
        <span className="pill">{label}</span>
        {sub.revision_of && <span className="pill pill-good">Rewrite after your feedback</span>}
        <span className="muted">Week of {new Date(monday + "T12:00").toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</span>
        {sub.word_count != null && sub.skill === "writing" && <span className="muted">{sub.word_count} words</span>}
        {sub.reviewed_at && <span className="pill pill-good">Marked</span>}
        {sub.feedback_seen_at && <span className="muted">Seen by student</span>}
      </div>
      <p className="rv-prompt">{sub.prompt}</p>
      {sub.skill === "speaking" && sub.body && <div className="rv-body rv-heard"><strong>What the browser heard (automatic, may have mistakes):</strong> {sub.body}</div>}
      {sub.skill === "writing"
        ? <div className="rv-body" tabIndex={0} aria-label="Student writing">{sub.body}</div>
        : audio ? <audio controls src={audio} style={{ width: "100%", maxWidth: 520 }} /> : <p className="muted">Loading recording…</p>}

      <fieldset className="wr-rubric">
        <legend>Rubric, compared with {band}</legend>
        {crit.map((c) => (
          <div key={c.id} className="wr-row" role="radiogroup" aria-label={`${c.name}: ${c.hint}`}>
            <span className="wr-crit"><strong>{c.name}</strong><small>{c.hint}</small></span>
            <span className="wr-marks">
              {MARKS.map((m) => (
                <button key={m.v} type="button" role="radio" aria-checked={marks[c.id] === m.v}
                  className={`wr-mark is-${m.v === 1 ? "up" : m.v === -1 ? "down" : "at"}`}
                  onClick={() => { setMarks({ ...marks, [c.id]: m.v }); setState("idle"); }}>{m.label.replace("band", band)}</button>
              ))}
            </span>
          </div>
        ))}
      </fieldset>

      <label className="pw-level">
        Band for this piece{" "}
        <select value={level || suggested || ""} onChange={(e) => { setLevel(e.target.value); setState("idle"); }}>
          <option value="">Not set</option>
          {BANDS.map((b) => <option key={b.id} value={b.id}>{b.id}{b.id === suggested && !level ? " (from your marks)" : ""}</option>)}
        </select>
      </label>

      <details className="wr-focus" open={focus.length > 0}>
        <summary>Send skills back to review ({focus.length} of 6)</summary>
        <p className="muted px-small">Pick the skills behind the mistakes you saw. The ones the student has learnt come back into their review today; the others show as "practise next".</p>
        {options.map(({ tree, nodes }) => nodes.length > 0 && (
          <div key={tree?.id} className="wr-group">
            <span className="wr-group-name">{tree?.name}</span>
            <div className="wr-chips">
              {nodes.map((n) => (
                <button key={n.id} type="button" className="pw-chip" aria-pressed={focus.includes(n.id)} onClick={() => toggle(n.id)}>{n.title}</button>
              ))}
            </div>
          </div>
        ))}
      </details>

      <label className="visually-hidden" htmlFor={`wr-${sub.id}`}>Comment for {name}</label>
      <textarea id={`wr-${sub.id}`} placeholder="One thing they did well, and one thing to change next time" value={comment} maxLength={1500}
        onChange={(e) => { setComment(e.target.value); setState("idle"); }} />
      <div className="pt-actions">
        <button type="button" className="btn btn-primary btn-sm" disabled={!complete || state === "saving"} onClick={() => void save()}>
          {state === "saving" ? "Saving…" : sub.reviewed_at ? "Update marks" : "Send marks"}
        </button>
        {!complete && <span className="muted px-small">Mark all four criteria to send.</span>}
        {state === "saved" && <span className="form-notice" role="status">Sent{sent ? ` · ${sent} ${sent === 1 ? "skill" : "skills"} back in review` : ""}</span>}
        {state === "error" && <span className="form-error" role="alert">Couldn't save. Try again.</span>}
      </div>
    </article>
  );
}
