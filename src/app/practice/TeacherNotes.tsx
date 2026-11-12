import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import type { Submission } from "../../lib/placementApi";
import { NODES } from "../../content/curriculum";
import { aptisLabel } from "../../content/exams/aptis-production";

/** "From your teacher": comments on the student's practice writing and speaking. New ones stay highlighted until read. */
export function TeacherNotes({ es }: { es: boolean }) {
  const [notes, setNotes] = useState<Submission[]>([]);
  const [open, setOpen] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    let live = true;
    void supabase.from("submissions").select("*")
      .not("teacher_feedback", "is", null).not("node_id", "is", null).is("attempt_id", null)
      .order("reviewed_at", { ascending: false }).limit(20)
      .then(({ data }) => {
        if (live) setNotes(((data as Submission[]) ?? []).filter((s) => !s.node_id!.includes(":")));
      });
    return () => { live = false; };
  }, []);

  if (!notes.length) return null;
  const unread = notes.filter((n) => !n.feedback_seen_at).length;
  const list = showAll ? notes : notes.slice(0, 3);

  async function read(n: Submission) {
    setOpen(open === n.id ? null : n.id);
    if (n.feedback_seen_at) return;
    const now = new Date().toISOString();
    setNotes((all) => all.map((x) => (x.id === n.id ? { ...x, feedback_seen_at: now } : x)));
    await supabase.rpc("mark_feedback_seen", { p_ids: [n.id] });
  }

  return (
    <section className="home-section tn" aria-labelledby="tn-title">
      <div className="pw-head">
        <h2 id="tn-title">From your teacher</h2>
        {unread > 0 && <span className="pill tn-new" role="status">{unread} new</span>}
      </div>
      {es && <p lang="es" className="es">Comentarios de tu profe sobre lo que escribiste o grabaste.</p>}
      <ul className="tn-list">
        {list.map((n) => {
          const node = NODES.find((x) => x.id === n.node_id);
          const isOpen = open === n.id;
          return (
            <li key={n.id} className={`tn-item${n.feedback_seen_at ? "" : " is-new"}`}>
              <button type="button" className="tn-head" aria-expanded={isOpen} onClick={() => void read(n)}>
                {!n.feedback_seen_at && <span className="tn-dot" aria-label="New" />}
                <span className="tn-title">
                  <strong>{aptisLabel(n.node_id) ?? node?.title ?? "Your practice"}</strong>
                  <small>{n.skill === "writing" ? "Your writing" : "Your speaking"} · {aptisLabel(n.node_id) ? (n.teacher_band ? `Level ${n.teacher_band}` : "Aptis") : node?.band ?? ""}</small>
                </span>
              </button>
              {isOpen && (
                <div className="tn-body">
                  <blockquote className="tn-quote">{n.teacher_feedback}</blockquote>
                  {n.skill === "writing" && n.body && (
                    <details>
                      <summary>What you wrote</summary>
                      <p className="rv-body">{n.body}</p>
                    </details>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
      {notes.length > 3 && (
        <button type="button" className="link-btn" onClick={() => setShowAll(!showAll)}>{showAll ? "Show fewer" : `Show all ${notes.length}`}</button>
      )}
    </section>
  );
}
