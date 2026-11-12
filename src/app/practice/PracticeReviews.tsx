import { useEffect, useMemo, useState } from "react";
import { supabase, type ClassRow } from "../../lib/supabase";
import { useAuth } from "../../lib/auth";
import type { Submission } from "../../lib/placementApi";
import { NODES } from "../../content/curriculum";
import { TREES } from "../map/trees";
import { aptisLabel } from "../../content/exams/aptis-production";

const APTIS_LEVELS = ["A0", "A1", "A2", "B1", "B2", "C"];

/** A practice piece: written or recorded at the end of a skill, not part of placement or a Midpoint / Gate. */
export const isPractice = (s: Submission) => !s.attempt_id && !!s.node_id && !s.node_id.includes(":");

const QUICK = [
  "Great work!",
  "Nice ideas. Check your verb tenses.",
  "Remember the -s for he / she / it.",
  "Good start. Try to write a bit more next time.",
  "Clear and easy to understand. Well done!",
  "Check your spelling and capital letters.",
  "Good pronunciation. Speak a little more slowly.",
];

const PAGE = 12;

/** Teacher inbox for practice writing and speaking: read or listen, leave a short comment, mark reviewed. */
export function PracticeReviews({ subs, classes, students, onChanged }: {
  subs: Submission[];
  classes: ClassRow[];
  students: { id: string; username: string | null; display_name: string | null; class_id: string | null }[];
  onChanged: () => void;
}) {
  const [filter, setFilter] = useState<"todo" | "all">("todo");
  const [cls, setCls] = useState("");
  const [shown, setShown] = useState(PAGE);
  const practice = useMemo(() => subs.filter(isPractice), [subs]);
  const todo = practice.filter((s) => !s.reviewed_at).length;
  const list = practice
    .filter((s) => filter === "all" || !s.reviewed_at)
    .filter((s) => !cls || students.find((st) => st.id === s.student_id)?.class_id === cls);

  if (!practice.length) return null;
  const nameOf = (id: string) => { const st = students.find((x) => x.id === id); return st?.display_name ?? st?.username ?? "Student"; };

  return (
    <section className="home-section" aria-labelledby="pw-title">
      <div className="pw-head">
        <h2 id="pw-title">Practice work</h2>
        {todo > 0 && <span className="pill" role="status">{todo} to review</span>}
      </div>
      <p className="muted">Writing and speaking from the end of each skill. Leave a short comment and the student sees it on their home page.</p>
      <div className="pw-filters">
        <div role="group" aria-label="Show" className="pw-seg">
          <button type="button" aria-pressed={filter === "todo"} onClick={() => { setFilter("todo"); setShown(PAGE); }}>Needs feedback</button>
          <button type="button" aria-pressed={filter === "all"} onClick={() => { setFilter("all"); setShown(PAGE); }}>All</button>
        </div>
        {classes.length > 1 && (
          <label className="pw-class">
            <span className="visually-hidden">Class</span>
            <select value={cls} onChange={(e) => { setCls(e.target.value); setShown(PAGE); }}>
              <option value="">All classes</option>
              {classes.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </label>
        )}
      </div>
      {list.length === 0
        ? <p className="muted">{filter === "todo" ? "All caught up. Nothing waiting for feedback." : "No practice work yet."}</p>
        : list.slice(0, shown).map((s) => <PracticeCard key={s.id} sub={s} name={nameOf(s.student_id)} onSaved={onChanged} />)}
      {list.length > shown && (
        <button type="button" className="btn btn-ghost btn-sm pw-more" onClick={() => setShown(shown + PAGE)}>
          Show more ({list.length - shown})
        </button>
      )}
    </section>
  );
}

function PracticeCard({ sub, name, onSaved }: { sub: Submission; name: string; onSaved: () => void }) {
  const { session } = useAuth();
  const node = NODES.find((n) => n.id === sub.node_id);
  const tree = TREES.find((t) => t.id === node?.tree);
  const aptis = aptisLabel(sub.node_id);
  const [feedback, setFeedback] = useState(sub.teacher_feedback ?? "");
  const [level, setLevel] = useState(sub.teacher_band ?? "");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle");

  useEffect(() => {
    if (sub.skill !== "speaking" || !sub.audio_path) return;
    let live = true;
    void supabase.storage.from("speaking").createSignedUrl(sub.audio_path, 3600).then(({ data }) => {
      if (live && data) setAudioUrl(data.signedUrl);
    });
    return () => { live = false; };
  }, [sub.skill, sub.audio_path]);

  const add = (q: string) => { setFeedback((f) => (f.trim() ? f.trim() + " " + q : q)); setState("idle"); };

  async function save() {
    setState("saving");
    const text = feedback.trim() || null;
    const { error } = await supabase.from("submissions").update({
      teacher_feedback: text,
      ...(aptis ? { teacher_band: level || null } : {}),
      reviewed_at: new Date().toISOString(),
      reviewed_by: session!.user.id,
      // A new or changed comment shows up as new for the student.
      ...(text !== (sub.teacher_feedback ?? null) ? { feedback_seen_at: null } : {}),
    }).eq("id", sub.id);
    if (error) { setState("error"); return; }
    setState("saved");
    onSaved();
  }

  const label = sub.skill === "writing" ? "Writing" : "Speaking";
  return (
    <article className={`class-card rv-item pw-card${sub.reviewed_at ? " is-done" : ""}`} aria-label={`${name}: ${label} for ${aptis ?? node?.title ?? "a skill"}`}>
      <div className="rv-meta">
        <strong>{name}</strong>
        <span className="band-chip">{aptis ? "Aptis" : node?.band ?? sub.target_band ?? "?"}</span>
        <span className="muted">{aptis ?? <>{tree?.name ?? ""}{tree ? " · " : ""}{node?.title ?? sub.node_id}</>}</span>
      </div>
      <div className="rv-meta">
        <span className="pill">{label}</span>
        {sub.word_count != null && <span className="muted">{sub.word_count} words</span>}
        {sub.auto_passed === true && <span className="pill pill-good">{aptis ? "Word counts met" : "Auto-check passed"}</span>}
        {sub.auto_passed === false && <span className="pill">{aptis ? "Some answers too short" : "Auto-check not passed"}</span>}
        <span className="muted">{new Date(sub.created_at).toLocaleDateString()}</span>
        {sub.reviewed_at && <span className="pill pill-good">Reviewed</span>}
        {sub.feedback_seen_at && <span className="muted">Seen by student</span>}
      </div>
      <p className="rv-prompt">{sub.prompt}</p>
      {aptis && sub.skill === "speaking" && <p className="muted px-small">One recording for the whole part. Each question was read aloud before the student answered.</p>}
      {sub.skill === "writing"
        ? <div className="rv-body" tabIndex={0} aria-label="Student writing">{sub.body}</div>
        : audioUrl ? <audio controls src={audioUrl} style={{ width: "100%", maxWidth: 520 }} /> : <p className="muted">Loading recording…</p>}
      <div className="rv-form">
        <div className="pw-quick" role="group" aria-label="Quick comments">
          {QUICK.filter((q) => sub.skill === "speaking" ? !q.includes("spelling") : !q.includes("pronunciation")).map((q) => (
            <button key={q} type="button" className="pw-chip" onClick={() => add(q)}>{q}</button>
          ))}
        </div>
        {aptis && (
          <label className="pw-level">
            Aptis level for this part{" "}
            <select value={level} onChange={(e) => { setLevel(e.target.value); setState("idle"); }}>
              <option value="">Not set</option>
              {APTIS_LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
          </label>
        )}
        <label className="visually-hidden" htmlFor={`pw-${sub.id}`}>Comment for {name}</label>
        <textarea id={`pw-${sub.id}`} placeholder="Comment the student will see (optional)" value={feedback}
          maxLength={1500} onChange={(e) => { setFeedback(e.target.value); setState("idle"); }} />
        <div className="pt-actions">
          <button type="button" className="btn btn-primary btn-sm" disabled={state === "saving"} onClick={() => void save()}>
            {state === "saving" ? "Saving…" : sub.reviewed_at ? "Update" : feedback.trim() ? "Send and mark reviewed" : "Mark reviewed"}
          </button>
          {state === "saved" && <span className="form-notice" role="status">Saved</span>}
          {state === "error" && <span className="form-error" role="alert">Couldn't save. Try again.</span>}
        </div>
      </div>
    </article>
  );
}
