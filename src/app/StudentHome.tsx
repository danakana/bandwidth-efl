import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../lib/auth";
import { UNIVERSE_LIST } from "../content/universes";
import { latestResult, type Attempt, type Submission } from "../lib/placementApi";
import { AppHeader } from "./AppHeader";
import { Placement } from "./placement/Placement";
import { Results } from "./placement/Results";
import "./placement/placement.css";

const STRIPES = [
  { w: 60, c: "var(--white)" }, { w: 60, c: "var(--band-c1)" }, { w: 120, c: "var(--band-b2)" },
  { w: 160, c: "var(--band-b1)" }, { w: 160, c: "var(--band-a2)" }, { w: 120, c: "var(--band-a1)" },
];

/** Student home: placement first, then results. The band map arrives next. */
export function StudentHome() {
  const { profile } = useAuth();
  const es = !!profile?.spanish_help;
  const mine = UNIVERSE_LIST.filter((u) => profile?.universes.includes(u.id));
  const [testing, setTesting] = useState(false);
  const [result, setResult] = useState<{ attempt: Attempt; submissions: Submission[] } | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setResult(await latestResult());
    setLoading(false);
  }, []);
  useEffect(() => { void load(); }, [load]);

  if (testing) {
    return <Placement onExit={() => setTesting(false)} onFinished={() => { setTesting(false); setLoading(true); void load(); }} />;
  }

  return (
    <div className="shell">
      <AppHeader />
      <main id="main" className="page shell-main">
        <section className="home-hero">
          <h1>Welcome, {profile?.display_name}.</h1>
          {loading ? (
            <p className="muted">Loading…</p>
          ) : result ? (
            <Results attempt={result.attempt} submissions={result.submissions} es={es} />
          ) : (
            <>
              <p>Your account is ready. First, a short placement test finds your band in each skill.</p>
              <div className="start-card">
                <div className="start-card-stripes" aria-hidden="true">
                  {STRIPES.map((s, i) => <span key={i} style={{ width: s.w, background: s.c }} />)}
                </div>
                <h2>Placement test</h2>
                <p>Reading, listening, writing and speaking. About 25 minutes. Find a quiet place and use headphones if you can.</p>
                {es && <p lang="es" className="es">Unos 25 minutos. Busca un lugar tranquilo y usa audífonos si puedes.</p>}
                <button type="button" className="btn btn-primary" onClick={() => setTesting(true)}>Start the placement test</button>
              </div>
            </>
          )}
        </section>
        {result && (
          <section className="home-section">
            <div className="soon-card">
              <h2>Your map is next</h2>
              <p>The band map, skill trees and your first Universe are being built now. Your placement is saved, so you'll start in the right place.</p>
              {es && <p lang="es" className="es">Tu resultado está guardado. Pronto se abre el mapa.</p>}
            </div>
          </section>
        )}
        <section className="home-section">
          <h2>Your Universes</h2>
          <ul className="my-unis">
            {mine.map((u) => (
              <li key={u.id} style={{ background: u.colour, color: u.onColour }}>{u.name}</li>
            ))}
          </ul>
          {profile && profile.interests.length > 0 && (
            <>
              <h3>Your topics</h3>
              <p>{profile.interests.join(", ")}</p>
            </>
          )}
        </section>
      </main>
    </div>
  );
}
