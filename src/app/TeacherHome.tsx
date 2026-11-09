import { useCallback, useEffect, useState, type FormEvent } from "react";
import { supabase, type ClassRow, type Profile } from "../lib/supabase";
import { useAuth } from "../lib/auth";
import { AppHeader } from "./AppHeader";

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

  const load = useCallback(async () => {
    const [c, s] = await Promise.all([
      supabase.from("classes").select("*").order("created_at", { ascending: false }),
      supabase.from("profiles").select("id, username, display_name, class_id, onboarded_at, created_at").eq("role", "student").order("created_at"),
    ]);
    setClasses((c.data as ClassRow[]) ?? []);
    setStudents((s.data as Student[]) ?? []);
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
        </section>

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
                        <thead><tr><th scope="col">Name</th><th scope="col">Username</th><th scope="col">Joined</th><th scope="col">Setup</th></tr></thead>
                        <tbody>
                          {roster.map((s) => (
                            <tr key={s.id}>
                              <td>{s.display_name}</td>
                              <td>{s.username}</td>
                              <td>{new Date(s.created_at).toLocaleDateString()}</td>
                              <td>{s.onboarded_at ? <span className="pill pill-good">Done</span> : <span className="pill">Not yet</span>}</td>
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
      </main>
    </div>
  );
}
