import { useState, type FormEvent } from "react";
import { supabase, studentEmail } from "../lib/supabase";
import { AuthLayout, Field } from "../app/AuthLayout";

type Errors = Partial<Record<"code" | "username" | "displayName" | "password" | "form", string>>;

const MESSAGES: Record<string, Errors> = {
  bad_code: { code: "We can't find that class code. Check it with your teacher. (No encontramos ese código.)" },
  bad_username: { username: "Use 3 to 20 letters, numbers, dots or underscores, starting with a letter or number." },
  username_taken: { username: "That username is taken. Try adding a number. (Ese usuario ya existe.)" },
  bad_name: { displayName: "Write a name or nickname, up to 30 characters." },
  weak_password: { password: "Use at least 8 characters. (Mínimo 8 caracteres.)" },
};

/** Student sign-up with a class code. No email needed. */
export function Join() {
  const [code, setCode] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    const local: Errors = {};
    if (code.replace(/\W/g, "").length !== 6) local.code = "Class codes have 6 characters. (El código tiene 6 caracteres.)";
    if (!displayName.trim()) local.displayName = "Write your name or a nickname.";
    if (!/^[a-zA-Z0-9][a-zA-Z0-9_.]{2,19}$/.test(username.trim())) local.username = MESSAGES.bad_username.username;
    if (password.length < 8) local.password = MESSAGES.weak_password.password;
    setErrors(local);
    if (Object.keys(local).length) return;

    setBusy(true);
    const { data, error } = await supabase.functions.invoke("join-class", {
      body: { code, username, displayName, password },
    });
    if (error) {
      let key = "server_error";
      try {
        const ctx = (error as { context?: Response }).context;
        if (ctx) key = (await ctx.json()).error ?? key;
      } catch { /* keep default */ }
      setErrors(MESSAGES[key] ?? { form: "Something went wrong on our side. Try again in a minute." });
      setBusy(false);
      return;
    }
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: studentEmail(data.username),
      password,
    });
    setBusy(false);
    if (signInError) {
      setErrors({ form: "Your account is ready. Log in with your username and password." });
      window.location.hash = "login";
      return;
    }
    window.location.hash = "app";
  }

  return (
    <AuthLayout
      title="Join your class"
      intro={<p>Your teacher gives you a class code. You don't need an email. <span lang="es">No necesitas correo.</span></p>}
    >
      <form className="auth-form" onSubmit={submit} noValidate>
        <Field id="join-code" label="Class code" hint="6 characters, like K7RT2M" value={code} onChange={(v) => setCode(v.toUpperCase())}
          error={errors.code} maxLength={7} autoComplete="off" autoCapitalize="characters" />
        <Field id="join-name" label="Your name or nickname" hint="Your teacher sees this name" value={displayName}
          onChange={setDisplayName} error={errors.displayName} maxLength={30} autoComplete="nickname" />
        <Field id="join-username" label="Choose a username" hint="You'll use it to log in, for example vale.12" value={username}
          onChange={setUsername} error={errors.username} maxLength={20} autoComplete="username" autoCapitalize="none" />
        <Field id="join-password" label="Choose a password" hint="At least 8 characters" type="password" value={password}
          onChange={setPassword} error={errors.password} autoComplete="new-password" />
        {errors.form && <p className="form-error" role="alert">{errors.form}</p>}
        <button type="submit" className="btn btn-primary auth-submit" disabled={busy}>
          {busy ? "Creating your account…" : "Join class"}
        </button>
      </form>
      <p className="auth-switch">Already have an account? <a href="#login">Log in</a></p>
    </AuthLayout>
  );
}
