import { useState, type FormEvent } from "react";
import { supabase, studentEmail } from "../lib/supabase";
import { AuthLayout, Field } from "../app/AuthLayout";

type Mode = "student" | "teacher" | "teacher-new";

/** Login for students (username) and teachers (email). Teachers can create their account here. */
export function Login() {
  const [mode, setMode] = useState<Mode>("student");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setNotice("");
    if (mode === "teacher-new" && !name.trim()) { setError("Write your name so the owner knows who you are."); return; }
    if (!id.trim() || !password) {
      setError(mode === "student" ? "Write your username and password." : "Write your email and password.");
      return;
    }
    setBusy(true);
    if (mode === "teacher-new") {
      // This creates a request, not a teacher account: the site owner approves it in the app.
      const { data, error: err } = await supabase.auth.signUp({
        email: id.trim(), password,
        options: { data: { teacher_request: "true", display_name: name.trim().slice(0, 30), school: school.trim().slice(0, 80) } },
      });
      setBusy(false);
      if (err) { setError(err.message); return; }
      if (data.session) { window.location.hash = "app"; return; }
      setNotice("Request sent. Confirm your email, then log in here to see when the owner has approved you.");
      setMode("teacher");
      return;
    }
    const email = mode === "student" ? studentEmail(id) : id.trim();
    const { error: err } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (err) {
      setError(
        mode === "student"
          ? "That username or password doesn't match. Check both and try again. (Usuario o contraseña incorrectos.)"
          : err.message.includes("confirm")
            ? "Confirm your email first. Look for the message from Supabase in your inbox."
            : "That email or password doesn't match.",
      );
      return;
    }
    window.location.hash = "app";
  }

  const isStudent = mode === "student";
  return (
    <AuthLayout
      title={isStudent ? "Welcome back" : mode === "teacher" ? "Teacher login" : "Ask for a teacher account"}
      intro={<p>{isStudent ? "Log in with the username you chose." : mode === "teacher" ? "Teachers log in with their email." : "The Bandwidth owner checks every teacher request. You can use your account once it's approved."}</p>}
    >
      <div className="mode-switch" role="group" aria-label="Who is logging in">
        <button type="button" aria-pressed={isStudent} onClick={() => { setMode("student"); setError(""); }}>Student</button>
        <button type="button" aria-pressed={!isStudent} onClick={() => { setMode("teacher"); setError(""); }}>Teacher</button>
      </div>
      <form className="auth-form" onSubmit={submit} noValidate>
        {mode === "teacher-new" && (
          <>
            <Field id="req-name" label="Your name" value={name} onChange={setName} autoComplete="name" maxLength={30} />
            <Field id="req-school" label="School (optional)" value={school} onChange={setSchool} autoComplete="organization" maxLength={80} />
          </>
        )}
        {isStudent ? (
          <Field id="login-user" label="Username" value={id} onChange={setId} autoComplete="username" autoCapitalize="none" maxLength={20} />
        ) : (
          <Field id="login-email" label="Email" type="email" inputMode="email" value={id} onChange={setId} autoComplete="email" />
        )}
        <Field id="login-password" label="Password" type="password" value={password} onChange={setPassword}
          autoComplete={mode === "teacher-new" ? "new-password" : "current-password"} />
        {error && <p className="form-error" role="alert">{error}</p>}
        {notice && <p className="form-notice" role="status">{notice}</p>}
        <button type="submit" className="btn btn-primary auth-submit" disabled={busy}>
          {busy ? "One moment…" : mode === "teacher-new" ? "Send my request" : "Log in"}
        </button>
      </form>
      {isStudent ? (
        <p className="auth-switch">New here? <a href="#join">Join with a class code</a></p>
      ) : mode === "teacher" ? (
        <p className="auth-switch">New teacher? <button type="button" className="link-btn" onClick={() => setMode("teacher-new")}>Ask for a teacher account</button></p>
      ) : (
        <p className="auth-switch">Already have one? <button type="button" className="link-btn" onClick={() => setMode("teacher")}>Log in</button></p>
      )}
    </AuthLayout>
  );
}
