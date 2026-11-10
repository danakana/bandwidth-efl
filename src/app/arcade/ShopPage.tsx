import { useEffect, useState } from "react";
import { useProgress } from "../../lib/progress";
import { buy, equip } from "../../lib/progressApi";
import { COLORS, FREEZE, ITEMS, TITLES, owns, type ShopItem } from "../../content/shop";
import { Icon } from "../../components/Icon";
import "./arcade.css";

/**
 * Coins buy streak freezes, a profile colour and title, and arcade games.
 * Buying takes two taps (Buy, then Confirm) so nobody spends by accident.
 */
export function ShopPage() {
  const progress = useProgress();
  const [arming, setArming] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [msg, setMsg] = useState("");
  useEffect(() => { if (!arming) return; const t = window.setTimeout(() => setArming(null), 4000); return () => window.clearTimeout(t); }, [arming]);
  if (!progress) return null;
  const st = progress.stats;

  async function purchase(it: ShopItem) {
    if (arming !== it.id) { setArming(it.id); setMsg(""); return; }
    setArming(null); setBusy(it.id);
    try {
      await buy(it.id);
      if (it.kind === "color" || it.kind === "title") await equip(it.id);
      setMsg(`${it.name} is yours.`);
      await progress!.refresh();
    } catch (e) {
      const m = (e as { message?: string }).message ?? "";
      setMsg(m.includes("not enough") ? "Not enough coins yet. Practice steps and checks earn more." : m.includes("full") ? "You already hold two freezes." : "That didn't go through. Try again.");
    }
    setBusy(null);
  }
  async function wear(it: ShopItem) {
    setBusy(it.id);
    try { await equip(it.id); await progress!.refresh(); setMsg(`Now wearing ${it.name}.`); } catch { setMsg("That didn't go through. Try again."); }
    setBusy(null);
  }

  const button = (it: ShopItem) => {
    const mine = it.kind !== "consumable" && owns(progress.purchases, it.id);
    const worn = (it.kind === "color" && `color:${st.color}` === it.id) || (it.kind === "title" && `title:${st.title}` === it.id);
    if (it.kind === "game" && mine) return <span className="sh-owned"><Icon name="check" size={16} /> Unlocked</span>;
    if (worn) return <span className="sh-owned"><Icon name="check" size={16} /> Wearing</span>;
    if (mine) return <button type="button" className="btn btn-ghost btn-sm" disabled={!!busy} onClick={() => void wear(it)}>Wear</button>;
    const full = it.kind === "consumable" && st.freezes >= 2;
    const poor = st.coins < it.price;
    return (
      <button type="button" className={`btn btn-sm ${arming === it.id ? "btn-primary" : "btn-ghost"}`} disabled={!!busy || full || poor}
        onClick={() => void purchase(it)} aria-label={arming === it.id ? `Confirm: spend ${it.price} coins on ${it.name}` : `Buy ${it.name} for ${it.price} coins`}>
        {busy === it.id ? "…" : full ? "Full" : arming === it.id ? `Confirm ${it.price}` : <><Icon name="coin" size={15} /> {it.price}</>}
      </button>
    );
  };

  const group = (kind: ShopItem["kind"]) => ITEMS.filter((i) => i.kind === kind);
  const color = COLORS[st.color] ?? COLORS.sky;

  return (
    <div className="sh-page">
      <nav className="crumbs" aria-label="Breadcrumb"><a href="#app">Map</a><span aria-hidden="true">/</span><span aria-current="page">Shop</span></nav>
      <header className="sh-head">
        <div>
          <p className="pt-kicker">Shop</p>
          <h1>Spend your coins.</h1>
          <p className="muted">Coins buy looks, streak protection and games. They never buy progress: only practice moves you up.</p>
        </div>
        <div className="sh-me">
          <span className="avatar is-lg" style={{ background: color.bg, color: color.ink }} aria-hidden="true"><Icon name="star" size={26} fill /></span>
          <div><strong>{TITLES[st.title] ?? "Learner"}</strong><span className="sh-balance"><Icon name="coin" size={18} /> {st.coins} coins</span></div>
        </div>
      </header>
      <p className="sh-msg" role="status">{msg}</p>

      <section className="sh-section" aria-labelledby="sh-freeze">
        <h2 id="sh-freeze">Streak freeze</h2>
        <ul className="sh-grid">
          <li className="sh-item is-wide">
            <span className="sh-swatch is-freeze" aria-hidden="true"><Icon name="flame" size={26} fill /></span>
            <div><strong>{FREEZE.name}</strong><p className="muted px-small">{FREEZE.blurb} You have <b>{st.freezes}</b>.</p></div>
            {button(FREEZE)}
          </li>
        </ul>
      </section>

      <section className="sh-section" aria-labelledby="sh-games">
        <h2 id="sh-games">Arcade games</h2>
        <ul className="sh-grid">
          {group("game").map((it) => (
            <li key={it.id} className="sh-item is-wide">
              <span className="sh-swatch is-game" aria-hidden="true"><Icon name={it.id === "game:speed" ? "bolt" : it.id === "game:frenzy" ? "swords" : "headphones"} size={24} /></span>
              <div><strong>{it.name}</strong><p className="muted px-small">{it.blurb}</p></div>
              {button(it)}
            </li>
          ))}
        </ul>
      </section>

      <section className="sh-section" aria-labelledby="sh-colors">
        <h2 id="sh-colors">Profile colour</h2>
        <ul className="sh-grid">
          {group("color").map((it) => {
            const c = COLORS[it.id.slice(6)];
            return (
              <li key={it.id} className="sh-item">
                <span className="sh-swatch" style={{ background: c.bg, color: c.ink }} aria-hidden="true"><Icon name="star" size={22} fill /></span>
                <strong>{it.name}</strong>
                {button(it)}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="sh-section" aria-labelledby="sh-titles">
        <h2 id="sh-titles">Title</h2>
        <ul className="sh-grid">
          {group("title").map((it) => (
            <li key={it.id} className="sh-item">
              <span className="sh-swatch is-title" aria-hidden="true"><Icon name="sparkle" size={22} /></span>
              <strong>{it.name}</strong>
              {button(it)}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
