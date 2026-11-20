import { useAuth } from "../lib/auth";
import { TeacherHome } from "./TeacherHome";
import { StudentHome } from "./StudentHome";
import { Onboarding } from "./Onboarding";
import { Login } from "../pages/Login";
import { NoProfile, TeacherPaused } from "./TeacherRequestStatus";
import { ProgressProvider } from "../lib/progress";

/** Decides what a signed-in person sees. */
export function AppGate() {
  const { session, profile, loading } = useAuth();
  if (loading) return <p className="page muted" style={{ padding: "3rem 0" }}>Loading…</p>;
  if (!session) return <Login />;
  if (!profile) return <NoProfile />;
  if (profile.role === "teacher") return <TeacherHome />;
  if (profile.role === "teacher_off") return <TeacherPaused />;
  if (!profile.onboarded_at) return <Onboarding />;
  return <ProgressProvider><StudentHome /></ProgressProvider>;
}
