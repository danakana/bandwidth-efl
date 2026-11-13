import { useAuth } from "../lib/auth";
import { Logo } from "../components/Logo";
import { useProgress } from "../lib/progress";
import { Icon } from "../components/Icon";
import { COLORS, TITLES } from "../content/shop";
import { useAppRoute } from "../lib/route";
import { useRolling } from "../lib/motion";
import { useEffect, useRef, useState } from "react";

export function AppHeader() {
  const { profile, signOut } = useAuth();
  const progress = useProgress();
  const st = progress?.stats;
  const route = useAppRoute();
  const color = COLORS[st?.color ?? "sky"] ?? COLORS.sky;
  const coins = useRolling(st?.coins ?? 0), xp = useRolling(st?.xp ?? 0);
  const bump = useBump(st?.coins ?? 0), bumpXp = useBump(st?.xp ?? 0), bumpStreak = useBump(st?.streak ?? 0);
  return (
    <header className="app-header">
      <div className="page app-header-inner">
        <a href="#app" aria-label="Bandwidth EFL home"><Logo size={30} tone="dark" /></a>
        <div className="app-header-right">
          {st && (
            <div className="wallet" aria-label={`${st.streak}-day streak, ${st.coins} coins, ${st.xp} XP`}>
              <span className={`w-streak${bumpStreak}`} title="Day streak"><b><Icon name="flame" size={16} fill /></b>{st.streak}</span>
              <a className={`w-coin${bump}`} href="#app/shop" title="Coins: open the shop"><b><Icon name="coin" size={16} /></b>{coins}</a>
              <span className={`w-xp${bumpXp}`} title="XP"><b><Icon name="bolt" size={16} fill /></b>{xp}</span>
            </div>
          )}
          <span className="app-user">
            {st && <span className="avatar" style={{ background: color.grad, color: color.ink }} aria-hidden="true">{(profile?.display_name ?? "?").slice(0, 1).toUpperCase()}</span>}
            <span className="app-user-name">{profile?.display_name}{st && <small>{TITLES[st.title] ?? "Learner"}</small>}</span>
            {profile?.role === "teacher" && <span className="role-tag">Teacher</span>}
          </span>
          <button type="button" className="btn btn-outline-light app-signout" onClick={() => void signOut()}>Log out</button>
        </div>
      </div>
      {st && (
        <nav className="app-nav" aria-label="Main">
          <div className="page app-nav-inner">
            {([["map", "#app", "Map", "star"], ["library", "#app/library", "Read", "book"], ["words", "#app/words", "Words", "sparkle"], ["exams", "#app/exams", "Exams", "trophy"], ["arcade", "#app/arcade", "Arcade", "bolt"], ["shop", "#app/shop", "Shop", "coin"]] as const).map(([id, href, label, icon]) => (
              <a key={id} href={href} aria-current={route.page === id ? "page" : undefined}><Icon name={icon} size={16} /> {label}</a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

/** Returns " is-bump" for a moment whenever a number goes up, so the wallet can celebrate earnings. */
function useBump(n: number) {
  const prev = useRef(n);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (n > prev.current) { setOn(false); requestAnimationFrame(() => setOn(true)); const t = setTimeout(() => setOn(false), 900); prev.current = n; return () => clearTimeout(t); }
    prev.current = n;
  }, [n]);
  return on ? " is-bump" : "";
}
