import { useSyncExternalStore } from "react";
import { supabase } from "./supabase";
import { useAuth } from "./auth";
import type { BandId } from "../content/bands";

/**
 * Spanish help: one switch for the whole app. It starts from the choice made at sign-up
 * (profiles.spanish_help); the Español button flips it anywhere, and the choice is saved.
 */
let override: boolean | null = null;
const listeners = new Set<() => void>();
const subscribe = (fn: () => void) => { listeners.add(fn); return () => { listeners.delete(fn); }; };
const snapshot = () => override;

export function useSpanish(): [boolean, (on: boolean) => void] {
  const { profile } = useAuth();
  const o = useSyncExternalStore(subscribe, snapshot, snapshot);
  const on = o ?? !!profile?.spanish_help;
  const set = (v: boolean) => {
    override = v;
    listeners.forEach((fn) => fn());
    if (profile?.role === "student") void supabase.from("profiles").update({ spanish_help: v }).eq("id", profile.id);
  };
  return [on, set];
}

/** The first two bands get bigger type. */
export const isBeginner = (band: BandId | string | undefined) => band === "Pre-A1" || band === "A1";

/** Español on/off. Shows and hides every Spanish note, hint and translation. */
export function SpanishToggle({ className = "" }: { className?: string }) {
  const [on, set] = useSpanish();
  return (
    <button type="button" className={`es-toggle${on ? " is-on" : ""} ${className}`} aria-pressed={on} onClick={() => set(!on)}
      title={on ? "Ocultar la ayuda en español" : "Mostrar ayuda en español"}>
      <span className="es-toggle-dot" aria-hidden="true" />
      <span>Español</span>
      <span className="visually-hidden">{on ? ": on" : ": off"}</span>
    </button>
  );
}
