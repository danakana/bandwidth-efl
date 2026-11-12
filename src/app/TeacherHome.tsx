import { useCallback, useEffect, useState, type FormEvent } from "react";
import { supabase, type ClassRow, type Profile } from "../lib/supabase";
import { useAuth } from "../lib/auth";
import { AppHeader } from "./AppHeader";
import type { Attempt, Submission } from "../lib/placementApi";
import { Chip, Review } from "./placement/Review";
import "./placement/placement.css";
import "./map/map.css";
import { useAppRoute } from "../lib/route";
import { BANDS } from "../content/bands";
import { BandMap } from "./map/BandMap";
import { BandView } from "./map/BandView";
import { TreeView } from "./map/TreeView";
import { GateReviews } from "./assess/GateReviews";
import { PracticeReviews } from "./practice/PracticeReviews";
import { IcfesOverview } from "./exams/IcfesOverview";
import "./exams/exams.css";
import type { AssessmentRow } from "../lib/progressApi";

type Student = Pick<Profile, "id" | "username" | "display_name" | "class_id" | "onboarded_at"> & { created_at: string };

/** Teacher view: create classes, share codes, see who has joined. */
export function TeacherHome() {
  const { session } = useAuth();
  const [classes, setClasses] = useState<ClassRow[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState<string | null>(null);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [subs, setSubs] = useState<Submission[]>([]);
  const [reviewing, setReviewing] = useState<string | null>(null);
  const [gates, setGates] = useState<AssessmentRow[]>([]);
  const [unlocks, setUnlocks] = useState<{ student_id: string; band: string }[]>([]);
  const route = useAppRoute();
  // Teacher preview of the student map, pretending the student starts at this band.
  const [previewStart, setPreviewStart] = useState(() => {
    try { return Number(localStorage.getItem("bw-preview-band") ?? 5); } catch { return 5; }
  });
  const pickPreview = (i: number) => { setPreviewStart(i); try { localStorage.setItem("bw-preview-band", String(i)); } catch { /* ignore */ } };
  useEffect(() => { window.scrollTo({ top: 0 }); }, [route.band, route.tree]);

  const load = useCallback(async () => {
    const [c, s, a, sub, g, u] = await Promise.all([
      supabase.from("classes").select("*").order("created_at", { ascending: false }),
      supabase.from("profiles").select("id, username, display_name, class_id, onboarded_at, created_at").eq("role", "student").order("created_at"),
      supabase.from("placement_attempts").select("*").eq("status", "completed").order("completed_at", { ascending: false }),
      supabase.from("submissions").select("*").order("created_at", { ascending: false }),
      supabase.from("assessments").select("*").eq("status", "awaiting_teacher").order("created_at"),
      supabase.from("band_unlocks").select("student_id, band"),
    ]);
    setGates((g.data as AssessmentRow[]) ?? []);
    setUnlocks((u.data as { student_id: string; band: string }[]) ?? []);
    setClasses((c.data as ClassRow[]) ?? []);
    setStudents((s.data as Student[]) ?? []);
    setAttempts((a.data as Attempt[]) ?? []);
    setSubs((sub.data as Submission[]) ?? []);
    setLoading(false);
  }, []);

  useEffect(() => { void load(); }, [load]);

  async function createClass(e: FormEvent) {
    e.preventDefault();
    setError("");
    const trimmed = name.trim();
    if (!trimmed) { setError("Give the class a name, for example 'Grade 10 B'."); return; }
    const { error: err } = await supabase.from("classes").insert({ name: trimmed, teacher_id: session!.user.id });
    if (err) { setError("The class couldn't be created. Try again."); return; }
    setName("");
    void load();
  }

  async function toggleActive(c: ClassRow) {
    await supabase.from("classes").update({ active: !c.active }).eq("id", c.id);
    void load();
  }

  async function copy(code: string) {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(code);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      const el = document.getElementById(`code-${code}`);
      if (el) window.getSelection()?.selectAllChildren(el);
    }
  }

  // Newest completed attempt per student, and that attempt's submissions.
  const latest = (id: string) => attempts.find((a) => a.student_id === id);
  const subsFor = (id: string) => { const a = latest(id); return a ? subs.filter((x) => x.attempt_id === a.id) : []; };
  const skillBand = (id: string, skill: "writing" | "speaking") => {
    const x = subsFor(id).find((s) => s.skill === skill);
    return x ? (x.teacher_band ?? "review") : null;
  };
  const pending = subs.filter((x) => !x.teacher_band && attempts.some((a) => a.id === x.attempt_id && latest(a.student_id)?.id === a.id)).length;
  const reviewStudent = students.find((s) => s.id === reviewing);

  if (route.band) {
    return (
      <div className="shell">
        <AppHeader />
        <main id="main" className="page shell-main">
          <p className="preview-banner">Student preview · starting band {BANDS[previewStart].id}</p>
          {route.tree
            ? <TreeView band={route.band} tree={route.tree} start={previewStart} />
            : <BandView band={route.band} start={previewStart} />}
        </main>
      </div>
    );
  }

  return (
    <div className="shell">
      <AppHeader />
      <main id="main" className="page shell-main">
        <section className="home-hero">
          <h1>Your classes</h1>
          <p>Create a class, share its code, and students join with it. They don't need an email.</p>
          <form className="new-class" onSubmit={createClass}>
            <label htmlFor="class-name" className="visually-hidden">Class name</label>
            <input id="class-name" placeholder="Class name, for example Grade 10 B" value={name} onChange={(e) => setName(e.target.value)} maxLength={60} />
            <button type="submit" className="btn btn-primary">Create class</button>
          </form>
          {error && <p className="form-error" role="alert">{error}</p>}
          {pending > 0 && <p className="pill" role="status">{pending} placement {pending === 1 ? "piece" : "pieces"} to review</p>}
          {gates.length > 0 && <p className="pill" role="status">{gates.length} {gates.length === 1 ? "Gate" : "Gates"} waiting for you to confirm</p>}
        </section>

        <GateReviews items={gates} subs={subs}
          nameOf={(id) => { const st = students.find((x) => x.id === id); return st?.display_name ?? st?.username ?? "Student"; }}
          onChanged={() => void load()} />

        <PracticeReviews subs={subs} classes={classes} students={students} onChanged={() => void load()} />
        <IcfesOverview classes={classes} students={students} />

        {reviewStudent && (
          <Review
            name={reviewStudent.display_name ?? reviewStudent.username ?? "Student"}
            attempt={latest(reviewStudent.id)}
            submissions={subsFor(reviewStudent.id)}
            onClose={() => setReviewing(null)}
            onSaved={() => void load()}
          />
        )}

        {loading ? (
          <p className="muted">Loading your classes…</p>
        ) : classes.length === 0 ? (
          <div className="empty">
            <h2>No classes yet</h2>
            <p>Create your first class above. You'll get a 6-character code to share with your students.</p>
          </div>
        ) : (
          <div className="class-list">
            {classes.map((c) => {
              const roster = students.filter((s) => s.class_id === c.id);
              return (
                <article key={c.id} className={c.active ? "class-card" : "class-card is-paused"}>
                  <header className="class-head">
                    <div>
                      <h2>{c.name}</h2>
                      <p className="muted">{roster.length} {roster.length === 1 ? "student" : "students"}{!c.active && " · joining paused"}</p>
                    </div>
                    <div className="class-code">
                      <span id={`code-${c.code}`} className="code">{c.code}</span>
                      <button type="button" className="btn btn-ghost btn-sm" onClick={() => void copy(c.code)}>
                        {copied === c.code ? "Copied" : "Copy code"}
                      </button>
                    </div>
                  </header>
                  {roster.length > 0 ? (
                    <div className="table-wrap">
                      <table className="roster">
                        <thead><tr><th scope="col">Name</th><th scope="col">Username</th><th scope="col">Joined</th><th scope="col">Setup</th><th scope="col">Gate opened</th><th scope="col">Reading</th><th scope="col">Listening</th><th scope="col">Writing</th><th scope="col">Speaking</th><th scope="col"><span className="visually-hidden">Actions</span></th></tr></thead>
                        <tbody>
                          {roster.map((s) => (
                            <tr key={s.id}>
                              <td>{s.display_name}</td>
                              <td>{s.username}</td>
                              <td>{new Date(s.created_at).toLocaleDateString()}</td>
                              <td>{s.onboarded_at ? <span className="pill pill-good">Done</span> : <span className="pill">Not yet</span>}</td>
                              <td>{(() => { const b = unlocks.filter((x) => x.student_id === s.id).map((x) => x.band).sort((p, q) => BANDS.findIndex((z) => z.id === q) - BANDS.findIndex((z) => z.id === p))[0]; return <Chip band={b} />; })()}</td>
                              <td><Chip band={latest(s.id)?.reading_band} /></td>
                              <td><Chip band={latest(s.id)?.listening_band} /></td>
                              {(["writing", "speaking"] as const).map((k) => {
                                const b = skillBand(s.id, k);
                                return <td key={k}>{b === "review" ? <span className="pill">To review</span> : <Chip band={b} />}</td>;
                              })}
                              <td>
                                {latest(s.id) && (
                                  <button type="button" className="link-btn" onClick={() => { setReviewing(s.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                                    {subsFor(s.id).some((x) => !x.teacher_band) ? "Review" : "View"}
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="muted">No students yet. Share the code {c.code} to get started.</p>
                  )}
                  <button type="button" className="link-btn" onClick={() => void toggleActive(c)}>
                    {c.active ? "Pause joining for this class" : "Allow joining again"}
                  </button>
                </article>
              );
            })}
          </div>
        )}

        <section className="home-section" aria-labelledby="preview-title">
          <h2 id="preview-title">Preview the student map</h2>
          <p className="muted">See what a student sees after the placement test. Pick a starting band, then tap any band or skill tree.</p>
          <div className="mode-switch preview-pick" role="group" aria-label="Starting band for the preview">
            {BANDS.map((b, i) => (
              <button key={b.id} type="button" aria-pressed={previewStart === i} onClick={() => pickPreview(i)}>{b.id}</button>
            ))}
          </div>
          <BandMap start={previewStart} />
        </section>
      </main>
    </div>
  );
}
