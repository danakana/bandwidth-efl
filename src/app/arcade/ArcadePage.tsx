import { useMemo, useState } from "react";
import { useProgress } from "../../lib/progress";
import { ARCADE_DAILY_COINS, ITEMS, owns } from "../../content/shop";
import { bogotaDay } from "../../content/assessments";
import { Icon } from "../../components/Icon";
import { ArcadeGame } from "./ArcadeGame";
import { GAMES, poolFor, type Game } from "./games";
import { LevelWorlds } from "./LevelWorlds";
import "./arcade.css";
import "./games.css";
import "./game-skin.css";

export function ArcadePage({ start }: { start: number }) {
  const progress = useProgress();
  const [playing, setPlaying] = useState<Game | null>(null);
  const nodes = progress?.nodes;
  const pools = useMemo(() => Object.fromEntries(GAMES.map((g) => [g.id, poolFor(g, nodes ?? {})])), [nodes]);
  if (!progress) return null;
  const today = bogotaDay(new Date());
  const coinsToday = progress.arcade.filter((r) => bogotaDay(r.created_at) === today).reduce((n, r) => n + r.coins, 0);
  const best = (g: string) => Math.max(0, ...progress.arcade.filter((r) => r.game === g).map((r) => r.score));

  return (
    <div className="ar-page">
      <nav className="crumbs" aria-label="Breadcrumb"><a href="#app">Map</a><span aria-hidden="true">/</span><span aria-current="page">Arcade</span></nav>
      <header className="ar-page-head">
        <p className="pt-kicker">Arcade</p>
        <h1>Play with your English.</h1>
        <p className="pt-lede">Adventure games use the words and grammar of your band, with levels to unlock and stars to collect. Quick games review the steps you've already passed.</p>
        <p className="ar-cap"><Icon name="coin" size={18} /> Arcade coins today: <strong>{coinsToday} / {ARCADE_DAILY_COINS}</strong></p>
      </header>
      <LevelWorlds start={start} />
      <h2 className="ar-sub">Quick games</h2>
      <ul className="ar-games">
        {GAMES.map((g) => {
          const item = ITEMS.find((x) => x.id === `game:${g.id}`)!;
          const mine = owns(progress.purchases, item.id);
          const enough = pools[g.id].length >= g.minPool;
          return (
            <li key={g.id} className={`ar-game is-${g.id}${mine ? "" : " is-locked"}`}>
              <div className="ar-game-icon" aria-hidden="true"><Icon name={g.id === "speed" ? "bolt" : g.id === "frenzy" ? "swords" : "headphones"} size={30} fill={g.id === "speed"} /></div>
              <h2>{g.name}</h2>
              <p>{g.blurb}</p>
              {mine && <p className="muted px-small">Best: {best(g.id)} · {pools[g.id].length} questions ready</p>}
              {!mine ? (
                <a className="btn btn-ghost" href="#app/shop"><Icon name="lock" size={16} /> Unlock for {item.price} coins</a>
              ) : !enough ? (
                <p className="muted px-small">Pass a few more practice steps to fill this game with questions.</p>
              ) : (
                <button type="button" className="btn btn-primary" onClick={() => setPlaying(g)}>Play</button>
              )}
            </li>
          );
        })}
      </ul>
      {playing && <ArcadeGame game={playing} pool={pools[playing.id]} onClose={(changed) => { setPlaying(null); if (changed) void progress.refresh(); }} />}
    </div>
  );
}
