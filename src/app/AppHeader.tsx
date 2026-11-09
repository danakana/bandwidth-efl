import { useAuth } from "../lib/auth";
import { Logo } from "../components/Logo";

export function AppHeader() {
  const { profile, signOut } = useAuth();
  return (
    <header className="app-header">
      <div className="page app-header-inner">
        <a href="#app" aria-label="Bandwidth EFL home"><Logo size={30} tone="dark" /></a>
        <div className="app-header-right">
          <span className="app-user">
            {profile?.display_name}
            {profile?.role === "teacher" && <span className="role-tag">Teacher</span>}
          </span>
          <button type="button" className="btn btn-outline-light app-signout" onClick={() => void signOut()}>Log out</button>
        </div>
      </div>
    </header>
  );
}
