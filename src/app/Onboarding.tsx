import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../lib/auth";
import { UNIVERSE_LIST } from "../content/universes";
import { Logo } from "../components/Logo";

const MAX_TOPICS = 8;

/** First-time student setup: Spanish help, Universes, then topics inside them. */
export function Onboarding() {
  const { profile, refreshProfile } = useAuth();
  const [step, setStep] = useState(0);
  const [spanish, setSpanish] = useState<boolean | null>(null);
  const [universes, setUniverses] = useState<string[]>([]);
  const [topics, setTopics] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const toggle = (list: string[], set: (v: string[]) => void, item: string, max = 99) =>
    set(list.includes(item) ? list.filter((x) => x !== item) : list.length < max ? [...list, item] : list);

  async function finish() {
    if (!profile) return;
    setBusy(true);
    setError("");
    const { error: err } = await supabase
      .from("profiles")
      .update({ spanish_help: !!spanish, universes, interests: topics, onboarded_at: new Date().toISOString() })
      .eq("id", profile.id);
    setBusy(false);
    if (err) { setError("We couldn't save your choices. Check your connection and try again."); return; }
    await refreshProfile();
  }

  const chosen = UNIVERSE_LIST.filter((u) => universes.includes(u.id));
  const name = profile?.display_name ?? "there";

  return (
    <div className="onb">
      <header className="onb-head">
        <Logo size={30} />
        <ol className="onb-dots" aria-label={`Step ${step + 1} of 3`}>
          {[0, 1, 2].map((i) => <li key={i} className={i <= step ? "is-on" : ""} />)}
        </ol>
      </header>
      <main id="main" className="onb-main">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.section key="s0" className="onb-step" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}>
              <h1>Hi {name}! Let's set up your Bandwidth.</h1>
              <p className="onb-lede">Do you want instructions in Spanish too? You can change this any time.</p>
              <div className="choice-row">
                <button type="button" className="choice" aria-pressed={spanish === true} onClick={() => setSpanish(true)}>
                  <strong>Yes, please</strong><span lang="es">Sí, con ayuda en español</span>
                </button>
                <button type="button" className="choice" aria-pressed={spanish === false} onClick={() => setSpanish(false)}>
                  <strong>English only</strong><span>I'm ready for it</span>
                </button>
              </div>
              <div className="onb-actions">
                <button type="button" className="btn btn-primary" disabled={spanish === null} onClick={() => setStep(1)}>Next</button>
              </div>
            </motion.section>
          )}

          {step === 1 && (
            <motion.section key="s1" className="onb-step" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}>
              <h1>What are you curious about?</h1>
              <p className="onb-lede">
                Pick at least one Universe. Your English practice will happen inside these topics.
                {spanish && <span lang="es" className="es"> Elige al menos un universo.</span>}
              </p>
              <div className="uni-grid" role="group" aria-label="Universes">
                {UNIVERSE_LIST.map((u) => {
                  const on = universes.includes(u.id);
                  return (
                    <button
                      key={u.id}
                      type="button"
                      className={on ? "uni is-on" : "uni"}
                      aria-pressed={on}
                      onClick={() => toggle(universes, setUniverses, u.id)}
                      style={on ? { background: u.colour, color: u.onColour, borderColor: u.colour } : undefined}
                    >
                      <span className="uni-dot" style={{ background: u.colour }} aria-hidden="true" />
                      <strong>{u.name}</strong>
                      <span className="uni-blurb">{u.blurb}</span>
                    </button>
                  );
                })}
              </div>
              <div className="onb-actions">
                <button type="button" className="btn btn-ghost" onClick={() => setStep(0)}>Back</button>
                <button type="button" className="btn btn-primary" disabled={universes.length === 0}
                  onClick={() => { setTopics((t) => t.filter((x) => chosen.some((u) => u.topics.includes(x)))); setStep(2); }}>
                  Next
                </button>
              </div>
            </motion.section>
          )}

          {step === 2 && (
            <motion.section key="s2" className="onb-step" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}>
              <h1>Now pick your favourite topics</h1>
              <p className="onb-lede">
                Choose up to {MAX_TOPICS}. You can skip this and decide later.
                {spanish && <span lang="es" className="es"> Elige hasta {MAX_TOPICS} temas.</span>}
              </p>
              <div className="topic-groups">
                {chosen.map((u) => (
                  <div key={u.id} className="topic-group">
                    <h2><span className="uni-dot" style={{ background: u.colour }} aria-hidden="true" />{u.name}</h2>
                    <div className="topic-chips" role="group" aria-label={`${u.name} topics`}>
                      {u.topics.map((t) => (
                        <button key={t} type="button" className="topic-chip" aria-pressed={topics.includes(t)}
                          onClick={() => toggle(topics, setTopics, t, MAX_TOPICS)}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="onb-count" aria-live="polite">{topics.length} of {MAX_TOPICS} chosen</p>
              {error && <p className="form-error" role="alert">{error}</p>}
              <div className="onb-actions">
                <button type="button" className="btn btn-ghost" onClick={() => setStep(1)}>Back</button>
                <button type="button" className="btn btn-primary" disabled={busy} onClick={finish}>
                  {busy ? "Saving…" : "Finish setup"}
                </button>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
