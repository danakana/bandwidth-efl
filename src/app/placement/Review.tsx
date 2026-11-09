import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../lib/auth";
import { BAND_IDS } from "../../content/placement";
import type { Attempt, Submission } from "../../lib/placementApi";

/** Teacher review of one student's placement: read writing, play speaking, set bands. */
export function Review({ name, attempt, submissions, onClose, onSaved }: {
  name: string;
  attempt: Attempt | undefined;
  submissions: Submission[];
  onClose: () => void;
  onSaved: () => void;
}) {
  return (
    <section className="class-card rv" aria-labelledby="rv-title">
      <header className="rv-student-head">
        <div>
          <h2 id="rv-title">{name}'s placement</h2>
          <p className="muted">
            Reading <Chip band={attempt?.reading_band} /> · Listening <Chip band={attempt?.listening_band} />
            {attempt?.completed_at && <> · finished {new Date(attempt.completed_at).toLocaleDateString()}</>}
          </p>
        </div>
        <button type="button" className="btn btn-ghost btn-sm" onClick={onClose}>Close</button>
      </header>
      {submissions.length === 0 && <p className="muted">Nothing to review yet.</p>}
      {submissions.map((s) => <ReviewItem key={s.id} sub={s} onSaved={onSaved} />)}
    </section>
  );
}

export function Chip({ band }: { band: string | null | undefined }) {
  return band ? <span className="band-chip">{band}</span> : <span className="band-chip is-empty">–</span>;
}

function ReviewItem({ sub, onSaved }: { sub: Submission; onSaved: () => void }) {
  const { session } = useAuth();
  const [band, setBand] = useState<string | null>(sub.teacher_band);
  const [feedback, setFeedback] = useState(sub.teacher_feedback ?? "");
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

  async function save() {
    if (!band) return;
    setState("saving");
    const { error } = await supabase.from("submissions").update({
      teacher_band: band,
      teacher_feedback: feedback.trim() || null,
      reviewed_at: new Date().toISOString(),
      reviewed_by: session!.user.id,
    }).eq("id", sub.id);
    if (error) { setState("error"); return; }
    setState("saved");
    onSaved();
  }

  const label = sub.skill === "writing" ? "Writing" : "Speaking";
  return (
    <article className={`rv-item${sub.teacher_band ? " is-done" : ""}`}>
      <div className="rv-meta">
        <strong>{label}</strong>
        <span className="pill">aimed at {sub.target_band ?? "?"}</span>
        {sub.word_count != null && <span className="muted">{sub.word_count} words</span>}
        {sub.teacher_band ? <span className="pill pill-good">Reviewed</span> : <span className="pill">Needs review</span>}
      </div>
      <p className="rv-prompt">{sub.prompt}</p>
      {sub.skill === "writing"
        ? <div className="rv-body">{sub.body}</div>
        : audioUrl ? <audio controls src={audioUrl} style={{ width: "100%", maxWidth: 520 }} /> : <p className="muted">Loading recording…</p>}
      <div className="rv-form">
        <fieldset className="rv-bands">
          <legend>{label} band</legend>
          {BAND_IDS.map((b) => (
            <button key={b} type="button" className="rv-band" aria-pressed={band === b} onClick={() => { setBand(b); setState("idle"); }}>{b}</button>
          ))}
        </fieldset>
        <label className="visually-hidden" htmlFor={`fb-${sub.id}`}>Feedback for the student</label>
        <textarea id={`fb-${sub.id}`} placeholder="Feedback the student will see (optional)" value={feedback}
          maxLength={1500} onChange={(e) => { setFeedback(e.target.value); setState("idle"); }} />
        <div className="pt-actions">
          <button type="button" className="btn btn-primary btn-sm" disabled={!band || state === "saving"} onClick={() => void save()}>
            {state === "saving" ? "Saving…" : "Save review"}
          </button>
          {state === "saved" && <span className="form-notice" role="status">Saved</span>}
          {state === "error" && <span className="form-error" role="alert">Couldn't save. Try again.</span>}
        </div>
      </div>
    </article>
  );
}
