import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../lib/auth";
import { UNIVERSE_LIST } from "../content/universes";
import { latestResult, startBandIndex, type Attempt, type Submission } from "../lib/placementApi";
import { useAppRoute } from "../lib/route";
import { AppHeader } from "./AppHeader";
import { Placement } from "./placement/Placement";
import { Results } from "./placement/Results";
import { BandMap } from "./map/BandMap";
import { BandView } from "./map/BandView";
import { TreeView } from "./map/TreeView";
import { ArcadePage } from "./arcade/ArcadePage";
import { ShopPage } from "./arcade/ShopPage";
import { ExamsPage } from "./exams/ExamsPage";
import { LibraryPage } from "./library/LibraryPage";
import { WordsCard } from "./library/WordsCard";
import { WordLab } from "./words/WordLab";
import { useProgress } from "../lib/progress";
import { BANDS } from "../content/bands";
import { TeacherNotes } from "./practice/TeacherNotes";
import { MistakesCard } from "./practice/MistakesCard";
import { GoalCard } from "./GoalCard";
import { JourneyCard } from "./JourneyCard";
import "./placement/placement.css";
import "./map/map.css";

const STRIPES = [
  { w: 60, c: "var(--white)" }, { w: 60, c: "var(--band-c1)" }, { w: 120, c: "var(--band-b2)" },
  { w: 160, c: "var(--band-b1)" }, { w: 160, c: "var(--band-a2)" }, { w: 120, c: "var(--band-a1)" },
];

/** Student home: placement first; after it, the band map, bands and skill trees. */
export function StudentHome() {
  const { profile } = useAuth();
  const es = !!profile?.spanish_help;
  const route = useAppRoute();
  const progress = useProgress();
  const mine = UNIVERSE_LIST.filter((u) => profile?.universes.includes(u.id));
  const [testing, setTesting] = useState(false);
  const [result, setResult] = useState<{ attempt: Attempt; submissions: Submission[] } | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setResult(await latestResult());
    setLoading(false);
  }, []);
  useEffect(() => { void load(); }, [load]);
  useEffect(() => { window.scrollTo({ top: 0 }); }, [route.band, route.tree, route.page]);

  if (testing) {
    return <Placement onExit={() => setTesting(false)} onFinished={() => { setTesting(false); setLoading(true); void load(); }} />;
  }

  // Placement sets the first band; passing a Gate (confirmed by the teacher) moves it up.
  const placed = result ? startBandIndex(result.attempt, result.submissions) ?? 0 : null;
  const unlocked = Math.max(-1, ...(progress?.unlocks ?? []).map((b) => BANDS.findIndex((x) => x.id === b)));
  const start = placed === null ? null : Math.max(placed, unlocked);

  // Arcade and shop.
  if (start !== null && route.page !== "map") {
    return (
      <div className="shell">
        <AppHeader />
        <main id="main" className="page shell-main">
          <div key={route.page} className="route-in">
            {route.page === "arcade" ? <ArcadePage start={start} /> : route.page === "exams" ? <ExamsPage /> : route.page === "library" ? <LibraryPage start={start} /> : route.page === "words" ? <WordLab start={start} /> : <ShopPage />}
          </div>
        </main>
      </div>
    );
  }

  // Band and tree pages, once the student has a starting band.
  if (start !== null && route.band) {
    return (
      <div className="shell">
        <AppHeader />
        <main id="main" className="page shell-main">
          <div key={`${route.band}-${route.tree ?? ""}`} className="route-in">
            {route.tree
              ? <TreeView band={route.band} tree={route.tree} start={start} />
              : <BandView band={route.band} start={start} />}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="shell">
      <AppHeader />
      <main id="main" key="home" className="page shell-main route-in">
        <section className="home-hero">
          <h1>Welcome, {profile?.display_name}.</h1>
          {start !== null && <GoalCard start={start} es={es} onFixMistakes={() => document.getElementById("mk-start")?.click()} />}
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
        {start !== null && <MistakesCard es={es} />}
        {start !== null && <WordsCard es={es} />}
        {start !== null && placed !== null && result && <JourneyCard placed={placed} start={start} placedAt={result.attempt.completed_at} onRetake={() => setTesting(true)} />}
        {start !== null && <TeacherNotes es={es} />}
        {start !== null && <BandMap start={start} />}
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
