import { useCallback, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Request = { id: string; email: string; display_name: string | null; school: string | null; status: string; created_at: string };
type Teacher = { id: string; email: string; display_name: string | null; school: string | null; role: string; is_owner: boolean; classes: number; students: number; created_at: string };

const date = (s: string) => new Date(s).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

/**
 * Only the owner sees this. Approve or decline teacher requests, and pause or resume teachers.
 * Approved teachers can only manage their own classes; the database enforces that.
 */
export function OwnerPanel() {
  const [requests, setRequests] = useState<Request[] | null>(null);
  const [teachers, setTeachers] = useState<Teacher[] | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    const [r, t] = await Promise.all([
      supabase.from("teacher_requests").select("*").eq("status", "pending").order("created_at"),
      supabase.rpc("owner_teachers"),
    ]);
    setRequests((r.data as Request[]) ?? []);
    setTeachers((t.data as Teacher[]) ?? []);
  }, []);
  useEffect(() => { void load(); }, [load]);

  async function act(id: string, fn: "decide_teacher" | "set_teacher_access", args: Record<string, unknown>) {
    setBusy(id); setError("");
    const { error: err } = await supabase.rpc(fn, args);
    setBusy(null);
    if (err) { setError("That didn't work. Try again."); return; }
    await load();
  }

  if (!requests || !teachers) return null;
  return (
    <section className="home-section owner-panel" aria-labelledby="owner-title">
      <div className="pw-head">
        <h2 id="owner-title">Teachers</h2>
        {requests.length > 0 && <span className="pill tn-new" role="status">{requests.length} waiting</span>}
      </div>
      <p className="muted">Only you see this. Approved teachers make and manage their own classes; they can't see other teachers' students.</p>
      {error && <p className="form-error" role="alert">{error}</p>}

      {requests.length > 0 && (
        <>
          <h3>Waiting for you</h3>
          <ul className="owner-list">
            {requests.map((r) => (
              <li key={r.id} className="owner-row is-pending">
                <div>
                  <strong>{r.display_name ?? "No name"}</strong>
                  <span className="muted">{r.email}{r.school ? ` · ${r.school}` : ""}</span>
                  <small className="muted">Asked on {date(r.created_at)}</small>
                </div>
                <div className="owner-actions">
                  <button type="button" className="btn btn-primary btn-sm" disabled={busy === r.id}
                    onClick={() => void act(r.id, "decide_teacher", { p_id: r.id, p_approve: true })}>Approve</button>
                  <button type="button" className="btn btn-ghost btn-sm" disabled={busy === r.id}
                    onClick={() => void act(r.id, "decide_teacher", { p_id: r.id, p_approve: false })}>Decline</button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      <h3>Approved teachers</h3>
      <ul className="owner-list">
        {teachers.map((t) => (
          <li key={t.id} className={`owner-row${t.role === "teacher_off" ? " is-off" : ""}`}>
            <div>
              <strong>{t.display_name ?? "Teacher"}{t.is_owner && <span className="pill pill-good">You · owner</span>}{t.role === "teacher_off" && <span className="pill">Paused</span>}</strong>
              <span className="muted">{t.email}{t.school ? ` · ${t.school}` : ""}</span>
              <small className="muted">{t.classes} {t.classes === 1 ? "class" : "classes"} · {t.students} {t.students === 1 ? "student" : "students"}</small>
            </div>
            {!t.is_owner && (
              <div className="owner-actions">
                <button type="button" className="btn btn-ghost btn-sm" disabled={busy === t.id}
                  onClick={() => void act(t.id, "set_teacher_access", { p_id: t.id, p_on: t.role === "teacher_off" })}>
                  {t.role === "teacher_off" ? "Turn access back on" : "Pause access"}
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
