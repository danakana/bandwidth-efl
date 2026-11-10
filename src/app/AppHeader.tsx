import { useAuth } from "../lib/auth";
import { Logo } from "../components/Logo";
import { useProgress } from "../lib/progress";
import { Icon } from "../components/Icon";
import { COLORS, TITLES } from "../content/shop";
import { useAppRoute } from "../lib/route";

export function AppHeader() {
  const { profile, signOut } = useAuth();
  const progress = useProgress();
  const st = progress?.stats;
  const route = useAppRoute();
  const color = COLORS[st?.color ?? "sky"] ?? COLORS.sky;
  return (
    <header className="app-header">
      <div className="page app-header-inner">
        <a href="#app" aria-label="Bandwidth EFL home"><Logo size={30} tone="dark" /></a>
        <div className="app-header-right">
          {st && (
            <div className="wallet" aria-label={`${st.streak}-day streak, ${st.coins} coins, ${st.xp} XP`}>
              <span className="w-streak" title="Day streak"><b><Icon name="flame" size={16} fill /></b>{st.streak}</span>
              <a className="w-coin" href="#app/shop" title="Coins: open the shop"><b><Icon name="coin" size={16} /></b>{st.coins}</a>
              <span className="w-xp" title="XP"><b><Icon name="bolt" size={16} fill /></b>{st.xp}</span>
            </div>
          )}
          <span className="app-user">
            {st && <span className="avatar" style={{ background: color.bg, color: color.ink }} aria-hidden="true">{(profile?.display_name ?? "?").slice(0, 1).toUpperCase()}</span>}
            <span className="app-user-name">{profile?.display_name}{st && <small>{TITLES[st.title] ?? "Learner"}</small>}</span>
            {profile?.role === "teacher" && <span className="role-tag">Teacher</span>}
          </span>
          <button type="button" className="btn btn-outline-light app-signout" onClick={() => void signOut()}>Log out</button>
        </div>
      </div>
      {st && (
        <nav className="app-nav" aria-label="Main">
          <div className="page app-nav-inner">
            {([["map", "#app", "Map", "star"], ["arcade", "#app/arcade", "Arcade", "bolt"], ["shop", "#app/shop", "Shop", "coin"]] as const).map(([id, href, label, icon]) => (
              <a key={id} href={href} aria-current={route.page === id ? "page" : undefined}><Icon name={icon} size={16} /> {label}</a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
