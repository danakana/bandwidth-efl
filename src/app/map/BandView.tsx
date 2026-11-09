import { motion } from "motion/react";
import { BANDS, type BandId } from "../../content/bands";
import { BAND_TOPICS, NODES } from "../../content/curriculum";
import { UNIVERSE_LIST } from "../../content/universes";
import { hrefFor } from "../../lib/route";
import { useAuth } from "../../lib/auth";
import { TREES } from "./trees";
import { statusFor } from "./BandMap";

/** One band: what it lets you do, its five skill trees, its Universe topics and its Gate. */
export function BandView({ band, start }: { band: BandId; start: number }) {
  const { profile } = useAuth();
  const i = BANDS.findIndex((b) => b.id === band);
  const b = BANDS[i];
  const st = statusFor(i, start);
  const topics = BAND_TOPICS[band];
  const mine = new Set(UNIVERSE_LIST.filter((u) => profile?.universes.includes(u.id)).map((u) => u.name));
  const prev = BANDS[i - 1];
  const next = BANDS[i + 1];

  return (
    <div className="bview" style={{ ["--fill" as string]: b.fill, ["--on" as string]: b.onFill, ["--tint" as string]: b.tint }}>
      <nav className="crumbs" aria-label="Breadcrumb">
        <a href={hrefFor()}>Map</a><span aria-hidden="true">/</span><span aria-current="page">{band}</span>
      </nav>

      <header className="bview-hero">
        <motion.span className="bview-badge" initial={{ rotate: -8, scale: 0.7 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: "spring", stiffness: 240, damping: 14 }}>
          {band}
        </motion.span>
        <div>
          <p className="pt-kicker">
            {st === "current" ? "Your band" : st === "review" ? "Below your band · open for review" : "Locked · preview"}
          </p>
          <h1>{b.canDo}</h1>
          <p className="muted">Mix at this band: {topics.mix.replace(" / ", " Core, ")} Universes.</p>
        </div>
      </header>

      {st === "locked" && (
        <p className="bview-lock">
          You can look around, but practice opens when you pass the Gate at the end of {BANDS[i - 1].id}.
        </p>
      )}

      <section aria-labelledby="trees-title">
        <h2 id="trees-title" className="bview-h2">Skill trees</h2>
        <ul className="trees">
          {TREES.map((t, k) => {
            const nodes = NODES.filter((n) => n.band === band && n.tree === t.id);
            if (!nodes.length) return null;
            return (
              <motion.li key={t.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * k }}>
                <a href={hrefFor(band, t.id)} className="tree-card" style={{ ["--tree" as string]: t.colour }}>
                  <span className="tree-icon" aria-hidden="true">{t.icon}</span>
                  <span className="tree-name">{t.name}</span>
                  <span className="tree-blurb">{t.blurb}</span>
                  <span className="tree-foot">
                    <span className="tree-bar" aria-hidden="true"><span style={{ width: "0%" }} /></span>
                    <span>0 of {nodes.length} mastered</span>
                  </span>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </section>

      <section className="bview-split">
        <div className="topics-card">
          <h2 className="bview-h2">Everyday topics</h2>
          <ul className="chip-list">{topics.core.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
        <div className="topics-card is-dark">
          <h2 className="bview-h2">Universe worlds</h2>
          <ul className="uni-topics">
            {topics.universe.map((u) => {
              const [world, rest] = u.includes(":") ? [u.split(":")[0].trim(), u.split(":").slice(1).join(":").trim()] : ["", u];
              const uni = UNIVERSE_LIST.find((x) => x.name === world);
              return (
                <li key={u} className={mine.has(world) ? "is-mine" : ""}>
                  {uni && <span className="uni-dot" style={{ background: uni.colour }} aria-hidden="true" />}
                  <span><strong>{world || "Theme"}</strong> {rest}</span>
                  {mine.has(world) && <span className="mine-tag">Yours</span>}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="gate-card" aria-labelledby="gate-title">
        <div className="gate-arch" aria-hidden="true"><span /><span /><span /></div>
        <div>
          <h2 id="gate-title">{band} Gate{next ? ` → ${next.id}` : ""}</h2>
          <p>
            {next
              ? <>Opens when 80% of this band's core skills are <strong>Mastered</strong>. Pass it, and your teacher confirms your writing and speaking, to unlock {next.id}.</>
              : <>The last Gate. Pass it and your teacher confirms C2 across all four skills.</>}
          </p>
          <p className="muted">Points and coins never change your band. Only mastery does.</p>
        </div>
      </section>

      <nav className="band-nav" aria-label="Other bands">
        {prev ? <a href={hrefFor(prev.id)} className="btn btn-ghost btn-sm">← {prev.id}</a> : <span />}
        {next && <a href={hrefFor(next.id)} className="btn btn-ghost btn-sm">{next.id} →</a>}
      </nav>
    </div>
  );
}
