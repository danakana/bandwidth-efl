import { useEffect, useState, type CSSProperties } from "react";
import { useProgress } from "../../lib/progress";
import { useAuth } from "../../lib/auth";
import { buy, equip } from "../../lib/progressApi";
import { COLORS, FREEZE, ITEMS, TITLES, owns, rarity, type ShopItem } from "../../content/shop";
import { Icon } from "../../components/Icon";
import { WorldIcon } from "./GameArt";
import { calm, tiltHandlers, useRolling } from "../../lib/motion";
import "./arcade.css";
import "./shop.css";

/**
 * The shop as a collector's binder: foil skins, nameplate titles, game cartridges and a frost-blue freeze.
 * The student's own player card at the top previews whatever they hover, so they can try before they buy.
 * Buying still takes two taps (Buy, then Confirm) so nobody spends by accident.
 */
export function ShopPage() {
  const progress = useProgress();
  const { profile } = useAuth();
  const [arming, setArming] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [msg, setMsg] = useState("");
  const [bought, setBought] = useState<string | null>(null);
  const [preview, setPreview] = useState<{ color?: string; title?: string }>({});
  useEffect(() => { if (!arming) return; const t = window.setTimeout(() => setArming(null), 4000); return () => window.clearTimeout(t); }, [arming]);
  useEffect(() => { if (!bought) return; const t = window.setTimeout(() => setBought(null), 1800); return () => window.clearTimeout(t); }, [bought]);
  const coins = useRolling(progress?.stats.coins ?? 0);
  if (!progress) return null;
  const st = progress.stats;

  async function purchase(it: ShopItem) {
    if (arming !== it.id) { setArming(it.id); setMsg(""); return; }
    setArming(null); setBusy(it.id);
    try {
      await buy(it.id);
      if (it.kind === "color" || it.kind === "title") await equip(it.id);
      setMsg(`${it.name} is yours.`);
      setBought(it.id);
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

  const action = (it: ShopItem) => {
    const mine = it.kind !== "consumable" && owns(progress.purchases, it.id);
    const worn = (it.kind === "color" && `color:${st.color}` === it.id) || (it.kind === "title" && `title:${st.title}` === it.id);
    if (it.kind === "game" && mine) return <span className="sp-owned"><Icon name="check" size={16} /> Unlocked</span>;
    if (worn) return <span className="sp-owned"><Icon name="check" size={16} /> Wearing</span>;
    if (mine) return <button type="button" className="sp-btn is-wear" disabled={!!busy} onClick={() => void wear(it)}>Wear</button>;
    const full = it.kind === "consumable" && st.freezes >= 2;
    const poor = st.coins < it.price;
    return (
      <button type="button" className={`sp-btn${arming === it.id ? " is-arming" : ""}`} disabled={!!busy || full || poor}
        onClick={() => void purchase(it)} aria-label={arming === it.id ? `Confirm: spend ${it.price} coins on ${it.name}` : `Buy ${it.name} for ${it.price} coins`}>
        {busy === it.id ? "…" : full ? "Full" : arming === it.id ? <>Confirm <Icon name="coin" size={15} /> {it.price}</> : <><Icon name="coin" size={15} /> {it.price}</>}
      </button>
    );
  };

  const group = (kind: ShopItem["kind"]) => ITEMS.filter((i) => i.kind === kind);
  const skinId = preview.color ?? st.color;
  const skin = COLORS[skinId] ?? COLORS.sky;
  const titleId = preview.title ?? st.title;
  const name = profile?.display_name ?? "You";
  const hover = (p: typeof preview) => ({ onPointerEnter: () => setPreview(p), onPointerLeave: () => setPreview({}), onFocus: () => setPreview(p), onBlur: () => setPreview({}) });
  const Stamp = ({ id }: { id: string }) => bought === id ? <><span className="sp-stamp" aria-hidden="true">Yours!</span><Burst /></> : null;

  return (
    <div className="sp">
      <nav className="crumbs" aria-label="Breadcrumb"><a href="#app">Map</a><span aria-hidden="true">/</span><span aria-current="page">Shop</span></nav>

      <section className="sp-hero" aria-labelledby="sp-title">
        <div className="sp-hero-copy">
          <h1 id="sp-title">Spend your coins.</h1>
          <p>Skins, titles, games and streak freezes. Coins never buy progress: only practice moves you up a band.</p>
          <div className="sp-wallet">
            <span className="sp-coins" aria-label={`${st.coins} coins`}><Icon name="coin" size={22} /><b aria-hidden="true">{coins}</b> coins</span>
            <span className="sp-freezes"><Icon name="snow" size={18} /> {st.freezes} of 2 freezes</span>
          </div>
        </div>
        <div className="sp-player-wrap">
          <article className={`sp-player${preview.color || preview.title ? " is-preview" : ""}`} style={{ "--skin": skin.grad, "--skin-ink": skin.ink } as CSSProperties} {...tiltHandlers(9)} aria-label={`Your player card: ${TITLES[titleId] ?? "Learner"}`}>
            <span className="sp-foil" aria-hidden="true" />
            <span className="sp-player-initial" aria-hidden="true">{name.slice(0, 1).toUpperCase()}</span>
            <strong className="sp-player-name">{name}</strong>
            <span className="sp-player-title">{TITLES[titleId] ?? "Learner"}</span>
            <span className="sp-player-stats" aria-hidden="true"><span><Icon name="flame" size={14} fill /> {st.streak}</span><span><Icon name="bolt" size={14} fill /> {st.xp}</span></span>
          </article>
          <p className="sp-preview-note" aria-hidden="true">{preview.color || preview.title ? "Preview" : " "}</p>
        </div>
      </section>
      <p className="sp-msg" role="status">{msg}</p>

      <section className="sp-section" aria-labelledby="sp-skins">
        <div className="sp-section-head"><h2 id="sp-skins">Skins</h2><p>Your card and avatar colour. Point at a skin to preview it on your card.</p></div>
        <ul className="sp-skins">
          {group("color").map((it) => {
            const c = COLORS[it.id.slice(6)];
            const r = rarity(it.price);
            return (
              <li key={it.id} className={`sp-skin is-${r.toLowerCase()}${bought === it.id ? " is-bought" : ""}`} style={{ "--skin": c.grad, "--skin-ink": c.ink } as CSSProperties} {...hover({ color: it.id.slice(6) })}>
                <div className="sp-skin-face" {...tiltHandlers(12)}>
                  <span className="sp-foil" aria-hidden="true" />
                  <span className="sp-rarity">{r}</span>
                  <strong>{it.name}</strong>
                </div>
                <div className="sp-skin-foot">{action(it)}</div>
                <Stamp id={it.id} />
              </li>
            );
          })}
        </ul>
      </section>

      <section className="sp-section" aria-labelledby="sp-titles">
        <div className="sp-section-head"><h2 id="sp-titles">Titles</h2><p>The word under your name.</p></div>
        <ul className="sp-plates">
          {group("title").map((it) => {
            const r = rarity(it.price);
            return (
              <li key={it.id} className={`sp-plate is-${r.toLowerCase()}${bought === it.id ? " is-bought" : ""}`} {...hover({ title: it.id.slice(6) })}>
                <span className="sp-rarity">{r}</span>
                <strong>{it.name}</strong>
                {action(it)}
                <Stamp id={it.id} />
              </li>
            );
          })}
        </ul>
      </section>

      <section className="sp-section" aria-labelledby="sp-games">
        <div className="sp-section-head"><h2 id="sp-games">Quick games</h2><p>Short review games built from the skills you've practised.</p></div>
        <ul className="sp-carts">
          {group("game").map((it, i) => (
            <li key={it.id} className={`sp-cart is-g${i}${bought === it.id ? " is-bought" : ""}`}>
              <span className="sp-cart-art" aria-hidden="true"><WorldIcon game={["rain", "tower", "story"][i] ?? "rain"} size={64} /></span>
              <div><strong>{it.name}</strong><p>{it.blurb}</p></div>
              {action(it)}
              <Stamp id={it.id} />
            </li>
          ))}
        </ul>
      </section>

      <section className="sp-section" aria-labelledby="sp-freeze">
        <div className="sp-section-head"><h2 id="sp-freeze">Streak freeze</h2></div>
        <div className={`sp-frost${bought === FREEZE.id ? " is-bought" : ""}`}>
          <span className="sp-frost-art" aria-hidden="true"><Icon name="snow" size={34} /></span>
          <div><strong>{FREEZE.name}</strong><p>{FREEZE.blurb} You have {st.freezes}.</p></div>
          {action(FREEZE)}
          <Stamp id={FREEZE.id} />
        </div>
      </section>
    </div>
  );
}

/** A ring of coins that bursts out of a card when it is bought. */
function Burst() {
  if (calm()) return null;
  return (
    <span className="sp-burst" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i / 12) * Math.PI * 2, d = 70 + (i % 3) * 22;
        return <i key={i} style={{ "--x": `${Math.cos(a) * d}px`, "--y": `${Math.sin(a) * d}px`, animationDelay: `${(i % 4) * 30}ms` } as CSSProperties} />;
      })}
    </span>
  );
}
