import { useState } from "react";
import type { Submission } from "../../lib/placementApi";
import { reviewGate, type AssessmentRow } from "../../lib/progressApi";
import { BANDS } from "../../content/bands";
import { ReviewItem } from "../placement/Review";

/**
 * Gates waiting for the teacher: read the writing, listen to the speaking, set a band for each,
 * then confirm (opens the next band) or send it back with a note.
 */
export function GateReviews({ items, subs, nameOf, onChanged }: {
  items: AssessmentRow[]; subs: Submission[]; nameOf: (id: string) => string; onChanged: () => void;
}) {
  if (!items.length) return null;
  return (
    <section className="home-section" aria-labelledby="gates-title">
      <h2 id="gates-title">Gates waiting for you</h2>
      <p className="muted">These students passed reading and listening and their automatic writing and speaking checks. Set a band for each piece. If both are at the band or above, confirm to open the next band.</p>
      {items.map((a) => <GateCard key={a.id} a={a} subs={subs} name={nameOf(a.student_id)} onChanged={onChanged} />)}
    </section>
  );
}

function GateCard({ a, subs, name, onChanged }: { a: AssessmentRow; subs: Submission[]; name: string; onChanged: () => void }) {
  const [note, setNote] = useState("");
  const [state, setState] = useState<"idle" | "saving" | "error">("idle");
  const [msg, setMsg] = useState("");
  const w = subs.find((s) => s.id === a.writing_id);
  const sp = subs.find((s) => s.id === a.speaking_id);
  const i = BANDS.findIndex((b) => b.id === a.band);
  const next = BANDS[i + 1]?.id;
  const okBand = (s?: Submission) => !!s?.teacher_band && BANDS.findIndex((b) => b.id === s.teacher_band) >= i;
  const canConfirm = okBand(w) && okBand(sp);

  async function act(confirm: boolean) {
    setState("saving"); setMsg("");
    try { await reviewGate(a.id, confirm, note); onChanged(); }
    catch (e) {
      const m = (e as { message?: string }).message ?? "";
      setMsg(m.includes("both") ? "Save a band for both pieces first." : m.includes("below") ? "Both pieces need to be at least " + a.band + " to confirm." : m.includes("note") ? "Write a note so the student knows what to work on." : "Couldn't save. Try again.");
      setState("error"); return;
    }
    setState("idle");
  }

  return (
    <article className="class-card rv" aria-label={`${name}'s ${a.band} Gate`}>
      <header className="rv-student-head">
        <div>
          <h3>{name} · {a.band} Gate{next ? ` → ${next}` : ""}</h3>
          <p className="muted">Reading {a.reading_pct}% · Listening {a.listening_pct}% · {new Date(a.created_at).toLocaleDateString()}</p>
        </div>
      </header>
      {w && <ReviewItem sub={w} onSaved={onChanged} />}
      {sp && <ReviewItem sub={sp} onSaved={onChanged} />}
      <div className="rv-form">
        <label htmlFor={`gn-${a.id}`}>Note to the student <span className="muted">(needed if you send it back)</span></label>
        <textarea id={`gn-${a.id}`} value={note} maxLength={1500} onChange={(e) => setNote(e.target.value)} placeholder="What went well, and what to work on" />
        <div className="pt-actions">
          <button type="button" className="btn btn-primary btn-sm" disabled={!canConfirm || state === "saving"} onClick={() => void act(true)}>
            {next ? `Confirm and open ${next}` : "Confirm: course complete"}
          </button>
          <button type="button" className="btn btn-ghost btn-sm" disabled={state === "saving"} onClick={() => void act(false)}>Send it back</button>
          {!canConfirm && <span className="muted px-small">Set both bands at {a.band} or higher to confirm.</span>}
          {msg && <span className="form-error" role="alert">{msg}</span>}
        </div>
      </div>
    </article>
  );
}
