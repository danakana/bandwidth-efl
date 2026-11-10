import { motion } from "motion/react";
import { Logo, StackMark } from "../components/Logo";
import { LoseTheVery } from "./LoseTheVery";
import { BandLadder } from "./BandLadder";
import { WordCard } from "./WordCard";
import { SignalField } from "./SignalField";
import { Ticker } from "./Ticker";
import { StepsTrack } from "./StepsTrack";
import { Orbit } from "./Orbit";
import { BloomLadder } from "./BloomLadder";
import { Icon, type IconName } from "../components/Icon";
import { CORE, EXAMS, FAQ, SKILLS, TEACHER } from "../content/landing";
import "./landing.css";

const NAV = [
  { href: "#how", label: "How it works" },
  { href: "#bands", label: "Bands" },
  { href: "#topics", label: "Topics" },
  { href: "#exams", label: "Exams" },
  { href: "#faq", label: "FAQ" },
];

const GAME: { icon: IconName; title: string; text: string; fill: string }[] = [
  { icon: "swords", title: "Boss checkpoints", text: "Every few skills, a mixed challenge with a story.", fill: "var(--band-b2)" },
  { icon: "flame", title: "No-guilt streaks", text: "Freezes save your streak on busy days.", fill: "var(--band-b1)" },
  { icon: "coin", title: "Coins and XP", text: "For the Arcade and profile styles. Never for your level.", fill: "var(--band-a2)" },
  { icon: "trophy", title: "Badges", text: "For milestones that took real work.", fill: "var(--band-a1)" },
];

const HEADLINE = ["Your", "English", "has", "places", "to", "go."];

export function Landing() {
  return (
    <>
      <span id="top" />
      <a href="#main" className="skip-link">Skip to content</a>

      <header className="nav">
        <div className="page nav-inner">
          <a href="#top" aria-label="Bandwidth EFL home" className="nav-logo">
            <Logo size={34} tone="dark" />
          </a>
          <nav aria-label="Main">
            <ul className="nav-links">
              {NAV.map((n) => (
                <li key={n.href}><a href={n.href}>{n.label}</a></li>
              ))}
            </ul>
          </nav>
          <a href="#login" className="nav-login">Log in</a>
          <a href="#join" className="btn btn-light nav-cta" aria-label="Join with a class code">
            <span className="cta-long">Join with a class code</span>
            <span className="cta-short">Join</span>
          </a>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="hero">
          <SignalField className="hero-field" anchor={0.86} />
          <div className="page hero-grid">
            <div className="hero-copy">
              <h1 aria-label={HEADLINE.join(" ")}>
                {HEADLINE.map((word, i) => (
                  <span className="hero-word-mask" key={i} aria-hidden="true">
                    <motion.span
                      className="hero-word"
                      initial={{ y: "105%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.7, delay: 0.08 * i, ease: [0.2, 0.7, 0.2, 1] }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h1>
              <motion.div
                className="hero-sub"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="hero-lede">
                  Find your level, explore what you're curious about and play your way from A1+ to C2. Free for students.
                </p>
                <div className="hero-ctas">
                  <a href="#join" className="btn btn-light">Join with a class code</a>
                  <a href="#how" className="btn btn-outline-light">See how it works</a>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="hero-demo"
              initial={{ opacity: 0, y: 30, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.35 }}
            >
              <p className="hero-try">Try a real challenge, no account needed</p>
              <LoseTheVery />
            </motion.div>
          </div>
        </section>

        <Ticker />

        {/* How it works */}
        <section id="how" className="section">
          <div className="page">
            <h2 className="section-title">How it works</h2>
            <StepsTrack />
          </div>
        </section>

        {/* The method: six Bloom steps */}
        <section id="method" className="section section-deep">
          <div className="page">
            <div className="section-head">
              <h2 className="section-title">Six steps to really know it</h2>
              <p className="section-lede">
                Every grammar point, word set and sound goes from noticing to creating, following Bloom's taxonomy.
                No skipping ahead, and no "mastered" after one lucky quiz.
              </p>
            </div>
            <BloomLadder />
            <p className="rule rule-dark">
              <strong>XP and coins reward effort. Only real proof of skill unlocks a new band.</strong> That's how your
              level stays honest.
            </p>
          </div>
        </section>

        {/* Bands */}
        <section id="bands" className="section section-tint">
          <div className="page split">
            <div className="split-copy">
              <h2 className="section-title">Nine bands, four skills</h2>
              <p>
                Bandwidth follows the CEFR, the international scale for language levels, split into nine bands from A1+
                to C2. Each band has its own colour, from green to deep blue.
              </p>
              <p>
                Your reading, writing, listening and speaking move separately. You might read at B2 and speak at B1, and
                that's normal. Bandwidth shows you exactly where each one is.
              </p>
            </div>
            <BandLadder />
          </div>
        </section>

        {/* Two strands */}
        <section id="topics" className="section">
          <div className="page">
            <h2 className="section-title">The foundations, plus everything you're curious about</h2>
            <p className="section-lede">
              Every band mixes the core of English with big ideas. At the start you'll spend more time on the core. As you
              grow, more of your English happens inside the Universes you choose.
            </p>
            <div className="strands">
              <div className="core">
                <h3>Core English</h3>
                <ul className="core-list">
                  {CORE.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
              <div className="universes">
                <h3>Six Universes to explore</h3>
                <Orbit />
                <p className="universe-note">
                  Big ideas at every level. An A2 student can explore black holes too, with simpler language.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Game layer */}
        <section className="section section-ink">
          <div className="page split">
            <div className="split-copy">
              <h2 className="section-title">Play that actually teaches</h2>
              <p>
                Every word you save becomes a card. It only upgrades when you use it correctly, on different days, without
                help. A gold collection means you really know those words.
              </p>
              <ul className="game-tiles">
                {GAME.map((g) => (
                  <li key={g.title} style={{ ["--fill" as string]: g.fill }}>
                    <span className="game-icon"><Icon name={g.icon} size={26} fill={g.icon === "flame" || g.icon === "bolt"} /></span>
                    <strong>{g.title}</strong>
                    <span>{g.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <WordCard />
          </div>
        </section>

        {/* Skills */}
        <section className="section">
          <div className="page">
            <h2 className="section-title">A studio for every skill</h2>
            <div className="skills">
              {SKILLS.map((s, i) => (
                <motion.article
                  key={s.name}
                  className="skill"
                  style={{ background: s.colour }}
                  whileHover={{ y: -4 }}
                  initial={{ y: 16 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <span className="skill-icon" aria-hidden="true"><Icon name={s.icon as IconName} size={28} /></span>
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                </motion.article>
              ))}
            </div>
            <p className="section-note">
              Your teacher reviews your writing and speaking. Any automatic tips are labelled, so you always know where
              feedback comes from.
            </p>
          </div>
        </section>

        {/* Exams */}
        <section id="exams" className="section section-deep">
          <div className="page">
            <h2 className="section-title">Ready for the exam you need</h2>
            <p className="section-lede">Practise the real task types, learn the strategies and see which skills need work.</p>
            <dl className="exams">
              {EXAMS.map((e) => (
                <div key={e.name} className="exam">
                  <dt>{e.name}</dt>
                  <dd>{e.text}</dd>
                </div>
              ))}
            </dl>
            <p className="section-note">Practice scores are estimates, not official results. Exam names belong to their owners.</p>
          </div>
        </section>

        {/* Teachers */}
        <section className="section">
          <div className="page split">
            <div className="split-copy">
              <h2 className="section-title">For teachers</h2>
              <p>
                Bandwidth was designed by an English teacher for her students. The teacher view shows what each student
                needs next, not how long they stared at a screen.
              </p>
            </div>
            <ol className="teacher-list">
              {TEACHER.map((t, i) => <li key={t}><span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>{t}</li>)}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section section-tint">
          <div className="page faq-wrap">
            <h2 className="section-title">Questions</h2>
            <div className="faq">
              {FAQ.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final">
          <SignalField className="final-field" />
          <div className="page final-inner">
            <StackMark size={72} tone="dark" />
            <h2>Expand your bandwidth.</h2>
            <p>Got a class code from your teacher? You're two minutes from your first challenge.</p>
            <a href="#join" className="btn btn-light">Join with a class code</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="page footer-inner">
          <Logo size={28} />
          <p>Free English for students, from A1+ to C2.</p>
        </div>
      </footer>
    </>
  );
}
