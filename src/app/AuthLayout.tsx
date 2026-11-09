import type { ReactNode } from "react";
import { Logo } from "../components/Logo";
import { SignalField } from "../landing/SignalField";
import "./app.css";

/** Split layout for join and login: form on the left, signal field on the right. */
export function AuthLayout({ title, intro, children }: { title: string; intro: ReactNode; children: ReactNode }) {
  return (
    <div className="auth">
      <main id="main" className="auth-main">
        <a href="#top" className="auth-logo" aria-label="Bandwidth EFL home">
          <Logo size={36} />
        </a>
        <div className="auth-body">
          <h1 className="auth-title">{title}</h1>
          <div className="auth-intro">{intro}</div>
          {children}
        </div>
      </main>
      <div className="auth-art" aria-hidden="true">
        <SignalField className="auth-field" anchor={0.55} />
      </div>
    </div>
  );
}

/** A labelled input with an optional Spanish hint and inline error. */
export function Field(props: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
  maxLength?: number;
  inputMode?: "text" | "email";
  autoCapitalize?: string;
}) {
  const describedBy = [props.hint ? `${props.id}-hint` : "", props.error ? `${props.id}-error` : ""].filter(Boolean).join(" ");
  return (
    <div className="field">
      <label htmlFor={props.id}>{props.label}</label>
      {props.hint && <p id={`${props.id}-hint`} className="field-hint">{props.hint}</p>}
      <input
        id={props.id}
        type={props.type ?? "text"}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        autoComplete={props.autoComplete}
        maxLength={props.maxLength}
        inputMode={props.inputMode}
        autoCapitalize={props.autoCapitalize}
        aria-invalid={props.error ? true : undefined}
        aria-describedby={describedBy || undefined}
      />
      {props.error && <p id={`${props.id}-error`} className="field-error" role="alert">{props.error}</p>}
    </div>
  );
}
