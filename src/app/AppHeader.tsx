import { useAuth } from "../lib/auth";
import { Logo } from "../components/Logo";
import { useProgress } from "../lib/progress";
import { Icon } from "../components/Icon";

export function AppHeader() {
  const { profile, signOut } = useAuth();
  const progress = useProgress();
  const st = progress?.stats;
  return (
    <header className="app-header">
      <div className="page app-header-inner">
        <a href="#app" aria-label="Bandwidth EFL home"><Logo size={30} tone="dark" /></a>
        <div className="app-header-right">
          {st && (
            <div className="wallet" aria-label={`${st.streak}-day streak, ${st.coins} coins, ${st.xp} XP`}>
              <span className="w-streak" title="Day streak"><b><Icon name="flame" size={16} fill /></b>{st.streak}</span>
              <span className="w-coin" title="Coins"><b><Icon name="coin" size={16} /></b>{st.coins}</span>
              <span className="w-xp" title="XP"><b><Icon name="bolt" size={16} fill /></b>{st.xp}</span>
            </div>
          )}
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
