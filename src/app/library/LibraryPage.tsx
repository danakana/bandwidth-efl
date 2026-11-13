import { Fragment, useEffect, useMemo, useState } from "react";
import { Art } from "../arcade/GameArt";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../lib/auth";
import { useProgress } from "../../lib/progress";
import { BANDS } from "../../content/bands";
import { UNIVERSE_LIST } from "../../content/universes";
import { LIBRARY, clipsFor, minutesFor, storyById, type Story } from "../../content/library";
import { ExamAudio } from "../exams/ExamAudio";
import { Icon } from "../../components/Icon";
import { saveWord, sentenceWith } from "../../lib/wordsApi";
import "./library.css";

type Read = { story_id: string; correct: number; total: number; created_at: string };
const L = "ABC";

/**
 * Read & listen: short texts at the student's band (and one band either side), with their interests first.
 * Lots of reading and listening at the right level is how a language grows.
 */
export function LibraryPage({ start }: { start: number }) {
  const { profile } = useAuth();
  const es = !!profile?.spanish_help;
  const [reads, setReads] = useState<Read[]>([]);
  // A link like #app/library/b1-stories opens that text straight away (used by today's plan).
  const [open, setOpen] = useState<Story | null>(() => storyById(window.location.hash.split("/")[2] ?? "") ?? null);

  const load = async () => {
    const { data } = await supabase.from("library_reads").select("story_id, correct, total, created_at").order("created_at", { ascending: false }).limit(500);
    setReads((data as Read[]) ?? []);
  };
  useEffect(() => { void load(); }, []);

  if (open) return <StoryView story={open} es={es} onClose={(changed) => { setOpen(null); if (window.location.hash !== "#app/library") history.replaceState(null, "", "#app/library"); if (changed) void load(); window.scrollTo({ top: 0 }); }} />;

  const mine = profile?.universes ?? [];
  const byInterest = (a: Story, b: Story) => Number(mine.includes(b.universe)) - Number(mine.includes(a.universe));
  const shelves = [
    { band: BANDS[start], label: "At your level", note: "Most of your reading should be here: you understand most of it, and learn a few new things." },
    { band: BANDS[start - 1], label: "A bit easier", note: "Good for reading fast and enjoying it." },
    { band: BANDS[start + 1], label: "A challenge", note: "Try one when you feel confident. Use the word help." },
  ].filter((s) => s.band);
  const done = new Set(reads.map((r) => r.story_id));

  return (
    <div className="lib-page">
      <header className="ex-head">
        <Art name="world-story" size={190} className="page-art" />
        <p className="pt-kicker">Read & listen</p>
        <h1>Your reading shelf</h1>
        <p className="pt-lede">Reading and listening a lot at your level is how your English grows. Pick something you like, listen while you read, then check you understood.</p>
        {es && <p lang="es" className="es">Leer y escuchar mucho en tu nivel es lo que más te hace avanzar. Escoge algo que te guste.</p>}
        <p className="muted">{done.size} of {LIBRARY.length} texts read.</p>
      </header>
      {shelves.map((sh) => {
        const list = LIBRARY.filter((s) => s.band === sh.band.id).sort(byInterest);
        if (!list.length) return null;
        return (
          <section key={sh.band.id} className="home-section" aria-labelledby={`shelf-${sh.band.id}`}>
            <h2 id={`shelf-${sh.band.id}`}>{sh.label} <span className="band-chip">{sh.band.id}</span></h2>
            <p className="muted">{sh.note}</p>
            <ul className="lib-grid">
              {list.map((s) => {
                const uni = UNIVERSE_LIST.find((u) => u.id === s.universe);
                const best = reads.filter((r) => r.story_id === s.id).reduce<Read | null>((b, r) => (!b || r.correct > b.correct ? r : b), null);
                return (
                  <li key={s.id}>
                    <button type="button" className="lib-card" onClick={() => setOpen(s)} style={{ ["--uni" as string]: uni?.colour, ["--on" as string]: uni?.onColour }}>
                      <span className="lib-uni">{uni?.name}</span>
                      <strong>{s.title}</strong>
                      <span className="lib-blurb">{s.blurb}</span>
                      <span className="lib-meta">
                        <Icon name="clock" size={14} /> {minutesFor(s)} min · {s.kind === "story" ? "Story" : "Article"}
                        {best && <span className="lib-done"><Icon name="check" size={14} /> {best.correct}/{best.total}</span>}
                        {mine.includes(s.universe) && !best && <span className="lib-for-you">For you</span>}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

/** One text: listen, read with word help, answer, then the reward. */
function StoryView({ story, es, onClose }: { story: Story; es: boolean; onClose: (changed: boolean) => void }) {
  const progress = useProgress();
  const [shown, setShown] = useState<string | null>(null);
  const [saved, setSaved] = useState<Set<string>>(new Set());
  const [picks, setPicks] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const [reward, setReward] = useState<{ xp: number; coins: number; first: boolean } | null>(null);
  const clips = useMemo(() => clipsFor(story), [story]);
  const correct = story.questions.filter((q, k) => picks[k] === q.answer).length;

  // Wrap the first appearance of each explained word so students can tap it.
  const glossRe = useMemo(() => {
    const words = story.gloss.map((g) => g.word.split(" / ")[0]).sort((a, b) => b.length - a.length);
    return new RegExp(`\\b(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`, "gi");
  }, [story]);
  const used = new Set<string>();

  async function check() {
    setChecked(true);
    const { data } = await supabase.rpc("finish_reading", { p_story: story.id, p_correct: correct, p_total: story.questions.length });
    if (data) { setReward(data as { xp: number; coins: number; first: boolean }); void progress?.refresh(); }
  }

  return (
    <article className="lib-story" aria-labelledby="story-title">
      <button type="button" className="btn btn-ghost btn-sm" onClick={() => onClose(checked)}><Icon name="x" size={16} /> Back to the shelf</button>
      <p className="pt-kicker">{story.band} · {minutesFor(story)} min · {story.kind === "story" ? "Story" : "Article"}</p>
      <h1 id="story-title">{story.title}</h1>
      <ExamAudio clips={clips} unlimited label="Listen while you read" />
      <p className="muted px-small">Underlined words have help: tap one to see what it means.</p>
      <div className="lib-text">
        {story.text.split("\n\n").map((para, k) => (
          <p key={k}>
            {para.split(glossRe).map((part, j) => {
              if (j % 2 === 0) return <Fragment key={j}>{part}</Fragment>;
              const g = story.gloss.find((x) => x.word.split(" / ")[0].toLowerCase() === part.toLowerCase());
              if (!g || used.has(g.word)) return <Fragment key={j}>{part}</Fragment>;
              used.add(g.word);
              const isOpen = shown === g.word;
              return (
                <span key={j} className="lib-gloss-wrap">
                  <button type="button" className="lib-gloss" aria-expanded={isOpen} onClick={() => setShown(isOpen ? null : g.word)}>{part}</button>
                  {isOpen && (
                    <span className="lib-gloss-note" role="note">
                      {g.means}{es && g.es && <em lang="es"> ({g.es})</em>}
                      <button type="button" className="lib-save" disabled={saved.has(g.word)} onClick={() => {
                        const w = g.word.split(" / ")[0];
                        void saveWord({ word: w, meaning: g.means, es: g.es, example: sentenceWith(story.text, w), source: story.id })
                          .then(() => setSaved(new Set(saved).add(g.word))).catch(() => {});
                      }}>{saved.has(g.word) ? "Saved" : "+ My words"}</button>
                    </span>
                  )}
                </span>
              );
            })}
          </p>
        ))}
      </div>

      <section className="lib-qs" aria-labelledby="lib-q-title">
        <h2 id="lib-q-title">Did you understand?</h2>
        <ol className="ex-items">
          {story.questions.map((q, k) => (
            <li key={k}>
              <fieldset className="pt-options ex-options" disabled={checked}>
                <legend className="pt-stem">{q.q}</legend>
                {q.options.map((o, j) => {
                  const state = checked ? (j === q.answer ? " is-right" : j === picks[k] ? " is-wrong" : "") : picks[k] === j ? " is-picked" : "";
                  return (
                    <label key={j} className={`pt-option${state}`}>
                      <input type="radio" name={`lq-${k}`} checked={picks[k] === j} onChange={() => setPicks({ ...picks, [k]: j })} />
                      <span className="pt-option-key" aria-hidden="true">{L[j]}</span><span>{o}</span>
                    </label>
                  );
                })}
                {checked && <div className={`ex-why${picks[k] === q.answer ? " is-right" : ""}`} role="status"><strong>{picks[k] === q.answer ? "Right." : `The answer is ${L[q.answer]}.`}</strong> {q.why}</div>}
              </fieldset>
            </li>
          ))}
        </ol>
        {!checked
          ? <button type="button" className="btn btn-primary" disabled={Object.keys(picks).length < story.questions.length} onClick={() => void check()}>Check my answers</button>
          : (
            <div className="lib-done-box" role="status">
              <p className="ex-score">You got {correct} of {story.questions.length}.</p>
              {reward && <p className="ex-reward"><Icon name="bolt" size={18} /> +{reward.xp} XP{reward.coins > 0 && <> · <Icon name="coin" size={18} /> +{reward.coins} coins</>}{!reward.first && <span className="muted"> (coins are for the first read)</span>}</p>}
              <p className="muted">{correct === story.questions.length ? "Great reading. Try a text from the next shelf up sometimes." : "Read the parts with the answers again: the explanations show you where they are."}</p>
              <button type="button" className="btn btn-primary" onClick={() => onClose(true)}>Back to the shelf</button>
            </div>
          )}
      </section>
    </article>
  );
}
