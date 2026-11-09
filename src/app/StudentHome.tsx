import { useAuth } from "../lib/auth";
import { UNIVERSE_LIST } from "../content/universes";
import { AppHeader } from "./AppHeader";

/**
 * Student home for this build stage. The placement test and band map
 * arrive next, so this screen says that plainly instead of faking them.
 */
export function StudentHome() {
  const { profile } = useAuth();
  const mine = UNIVERSE_LIST.filter((u) => profile?.universes.includes(u.id));
  return (
    <div className="shell">
      <AppHeader />
      <main id="main" className="page shell-main">
        <section className="home-hero">
          <h1>Welcome, {profile?.display_name}.</h1>
          <p>Your account is ready. The next step is a short placement test to find your band in each skill.</p>
          <div className="soon-card">
            <h2>Placement test</h2>
            <p>Opening soon. It will check reading, writing, listening and speaking separately.</p>
            {profile?.spanish_help && <p lang="es" className="es">Pronto podrás hacer la prueba de nivel.</p>}
          </div>
        </section>
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
