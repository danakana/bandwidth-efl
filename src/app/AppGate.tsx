import { useAuth } from "../lib/auth";
import { TeacherHome } from "./TeacherHome";
import { StudentHome } from "./StudentHome";
import { Onboarding } from "./Onboarding";
import { Login } from "../pages/Login";
import { AppHeader } from "./AppHeader";
import { ProgressProvider } from "../lib/progress";

/** Decides what a signed-in person sees. */
export function AppGate() {
  const { session, profile, loading } = useAuth();
  if (loading) return <p className="page muted" style={{ padding: "3rem 0" }}>Loading…</p>;
  if (!session) return <Login />;
  if (!profile) {
    return (
      <div className="shell">
        <AppHeader />
        <main id="main" className="page shell-main">
          <h1>This account isn't connected to a class</h1>
          <p>Students join with a class code from their teacher. If you're a teacher, ask the site owner to add your email.</p>
        </main>
      </div>
    );
  }
  if (profile.role === "teacher") return <TeacherHome />;
  if (!profile.onboarded_at) return <Onboarding />;
  return <ProgressProvider><StudentHome /></ProgressProvider>;
}
