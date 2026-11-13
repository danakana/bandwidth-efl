import { useEffect, useMemo, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../lib/auth";
import { useProgress } from "../../lib/progress";
import { BANDS, type BandId } from "../../content/bands";
import { setById, setsFor, gapped, formIn, type VocabSet, type VocabWord } from "../../content/vocab";
import { loadWords, saveWord, type MyWord } from "../../lib/wordsApi";
import { say } from "../exams/ExamAudio";
import { Icon } from "../../components/Icon";
import "./words.css";

type Result = { set_id: string; correct: number; total: number; passed: boolean };
const POS: Record<VocabWord["pos"], string> = { noun: "noun", verb: "verb", adj: "adjective", adv: "adverb", phrase: "phrase" };

/**
 * Word lab: the core words of each CEFR band, 60 per band in six topic sets of ten.
 * Learn a set (meaning, example, sound), practise it three ways, then the words join My words for spaced review.
 */
export function WordLab({ start }: { start: number }) {
  const { profile } = useAuth();
  const es = !!profile?.spanish_help;
  const [band, setBand] = useState<BandId>(BANDS[start].id);
  const [results, setResults] = useState<Result[]>([]);
  const [mine, setMine] = useState<MyWord[]>([]);
  const [open, setOpen] = useState<VocabSet | null>(() => setById(window.location.hash.split("/")[2] ?? "") ?? null);

  const load = async () => {
    const [r, w] = await Promise.all([
      supabase.from("vocab_results").select("set_id, correct, total, passed").limit(1000),
      loadWords(),
    ]);
    setResults((r.data as Result[]) ?? []);
    setMine(w);
  };
  useEffect(() => { void load(); }, []);

  const close = (changed: boolean) => {
    setOpen(null);
    if (window.location.hash !== "#app/words") history.replaceState(null, "", "#app/words");
    if (changed) void load();
    window.scrollTo({ top: 0 });
  };
  if (open) return <SetView set={open} es={es} onClose={close} />;

  const sets = setsFor(band);
  const byWord = new Map(mine.map((w) => [w.word, w]));
  const all = sets.flatMap((s) => s.words);
  const inReview = all.filter((w) => byWord.has(w.w.toLowerCase())).length;
  const learnt = all.filter((w) => byWord.get(w.w.toLowerCase())?.learnt_at).length;

  return (
    <div className="wl-page">
      <header className="ex-head">
        <p className="pt-kicker">Word lab</p>
        <h1>The words of your level</h1>
        <p className="pt-lede">Each band has 60 core words that you'll meet again and again at that level. Learn a set of ten, practise it, and the words come back in your review until you know them for good.</p>
        {es && <p lang="es" className="es">Cada nivel tiene 60 palabras clave. Apréndelas en grupos de diez.</p>}
      </header>

      <div className="wl-bands" role="tablist" aria-label="Band">
        {BANDS.map((b, i) => (
          <button key={b.id} type="button" role="tab" aria-selected={band === b.id} className={`wl-band${band === b.id ? " is-on" : ""}${i === start ? " is-mine" : ""}`} onClick={() => setBand(b.id)}>
            {b.id}{i === start && <span className="visually-hidden"> (your band)</span>}
          </button>
        ))}
      </div>

      <section className="home-section wl-summary" aria-live="polite">
        <div className="wl-meter" role="img" aria-label={`${learnt} of ${all.length} learnt for good, ${inReview} in your review`}>
          <span className="wl-meter-review" style={{ width: `${(100 * inReview) / all.length}%` }} />
          <span className="wl-meter-learnt" style={{ width: `${(100 * learnt) / all.length}%` }} />
        </div>
        <p><strong>{learnt} of {all.length}</strong> {band} words learnt for good · {inReview} in your review</p>
        {BANDS.findIndex((b) => b.id === band) > start + 1 && <p className="muted px-small">This band is above yours. Try it if you feel confident.</p>}
      </section>

      <ul className="wl-grid">
        {sets.map((s, k) => {
          const rs = results.filter((r) => r.set_id === s.id);
          const best = rs.reduce((m, r) => Math.max(m, Math.round((100 * r.correct) / r.total)), -1);
          const passed = rs.some((r) => r.passed);
          const known = s.words.filter((w) => byWord.get(w.w.toLowerCase())?.learnt_at).length;
          return (
            <li key={s.id}>
              <button type="button" className={`wl-card${passed ? " is-passed" : ""}`} onClick={() => { history.replaceState(null, "", `#app/words/${s.id}`); setOpen(s); }}>
                <span className="wl-num">Set {k + 1}</span>
                <strong>{s.topic}</strong>
                <span className="wl-preview">{s.words.slice(0, 4).map((w) => w.w).join(", ")}…</span>
                <span className="wl-meta">
                  {passed ? <><Icon name="check" size={14} /> Passed · best {best}%</> : best >= 0 ? <>Best {best}% · 80% to pass</> : "New"}
                  {known > 0 && <span> · {known}/10 learnt</span>}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ---------------- One set ---------------- */

type Q =
  | { kind: "meaning"; word: VocabWord; options: string[] }
  | { kind: "gap"; word: VocabWord; options: string[] }
  | { kind: "listen"; word: VocabWord };

function shuffle<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
}

/**
 * Three wrong options close in length to the right one, so length gives nothing away.
 * Meaning questions use the same set (similar topic, so it's a real choice).
 * Gap questions use the same part of speech from the band's other topics, so grammar gives nothing away
 * but the wrong words don't also fit the sentence.
 */
function optionsFor(word: VocabWord, set: VocabSet, forGap: boolean): string[] {
  const own = set.words.filter((w) => w !== word);
  let pool = forGap ? setsFor(set.band).filter((x) => x.id !== set.id).flatMap((x) => x.words).filter((w) => w.pos === word.pos) : own;
  if (pool.length < 3) pool = own;
  const near = [...pool].sort((a, b) => Math.abs(a.w.length - word.w.length) - Math.abs(b.w.length - word.w.length)).slice(0, 5);
  return shuffle([word.w, ...shuffle(near).slice(0, 3).map((w) => w.w)]);
}

function buildQuiz(set: VocabSet): Q[] {
  const meaning = set.words.map((w) => ({ kind: "meaning" as const, word: w, options: optionsFor(w, set, false) }));
  const gap = set.words.filter((w) => formIn(w)).map((w) => ({ kind: "gap" as const, word: w, options: optionsFor(w, set, true) }));
  const listen = shuffle(set.words).slice(0, 5).map((w) => ({ kind: "listen" as const, word: w }));
  return [...shuffle(meaning), ...shuffle(gap), ...listen];
}

const clean = (s: string) => s.toLowerCase().replace(/[’']/g, "'").replace(/[^a-z' -]/g, "").replace(/\s+/g, " ").trim();

function SetView({ set, es, onClose }: { set: VocabSet; es: boolean; onClose: (changed: boolean) => void }) {
  const progress = useProgress();
  const [phase, setPhase] = useState<"learn" | "practise" | "done">("learn");
  const quiz = useMemo(() => buildQuiz(set), [set]);
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<string | null>(null);
  const [typed, setTyped] = useState("");
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState<VocabWord[]>([]);
  const [reward, setReward] = useState<{ xp: number; coins: number; passed: boolean; first: boolean } | null>(null);

  useEffect(() => { window.scrollTo({ top: 0 }); }, [phase]);
  const q = quiz[i];
  useEffect(() => { if (phase === "practise" && q?.kind === "listen") void say(q.word.w); }, [phase, i, q]);

  const right = q && (q.kind === "listen" ? clean(typed) === clean(q.word.w) : pick === q.word.w);

  function check() {
    setChecked(true);
    if (right) setScore((s) => s + 1);
    else if (!missed.includes(q.word)) setMissed([...missed, q.word]);
  }
  async function next() {
    setPick(null); setTyped(""); setChecked(false);
    if (i + 1 < quiz.length) { setI(i + 1); return; }
    setPhase("done");
    const total = quiz.length;
    const { data } = await supabase.rpc("finish_vocab_set", { p_set: set.id, p_correct: score, p_total: total });
    if (data) setReward(data as typeof reward);
    // Every word in the set joins My words, so the spaced review brings it back.
    await Promise.all(set.words.map((w) => saveWord({ word: w.w, meaning: w.means, es: w.es, example: w.ex, source: `lab:${set.id}` }).catch(() => false)));
    void progress?.refresh();
  }

  if (phase === "learn") {
    return (
      <article className="wl-set" aria-labelledby="wl-title">
        <button type="button" className="btn btn-ghost btn-sm" onClick={() => onClose(false)}><Icon name="x" size={16} /> Back to the lab</button>
        <p className="pt-kicker">{set.band} · Word lab</p>
        <h1 id="wl-title">{set.topic}</h1>
        <p className="pt-lede">Read each word, listen to it and say it aloud. Notice how it's used in the example. Then practise.</p>
        <ol className="wl-learn">
          {set.words.map((w) => (
            <li key={w.w} className="wl-word">
              <div className="wl-word-head">
                <strong lang="en">{w.w}</strong>
                <span className="wl-pos">{POS[w.pos]}</span>
                <button type="button" className="btn btn-ghost btn-sm wl-say" onClick={() => void say(w.w)} aria-label={`Listen to ${w.w}`}><Icon name="headphones" size={16} /> Listen</button>
              </div>
              <p className="wl-means">{w.means}{es && <em lang="es"> ({w.es})</em>}</p>
              <p className="wl-ex">“{w.ex}”</p>
            </li>
          ))}
        </ol>
        <button type="button" className="btn btn-primary" onClick={() => setPhase("practise")}>Practise these words</button>
      </article>
    );
  }

  if (phase === "done") {
    const pct = Math.round((100 * score) / quiz.length);
    return (
      <article className="wl-set" aria-labelledby="wl-title">
        <p className="pt-kicker">{set.band} · {set.topic}</p>
        <h1 id="wl-title">{pct >= 80 ? "Set passed." : "Good practice."}</h1>
        <p className="ex-score" role="status">You got {score} of {quiz.length} ({pct}%).</p>
        {reward && <p className="ex-reward"><Icon name="bolt" size={18} /> +{reward.xp} XP{reward.coins > 0 && <> · <Icon name="coin" size={18} /> +{reward.coins} coins</>}</p>}
        <p>{pct >= 80 ? "All ten words are now in My words. They'll come back in your review over the next weeks, until you know them for good." : "You need 80% to pass. All ten words are now in My words, so you'll review them. Look at the ones below, then try the set again."}</p>
        {missed.length > 0 && (
          <section className="wl-missed">
            <h2>Words to look at again</h2>
            <ul>{missed.map((w) => <li key={w.w}><strong>{w.w}</strong>: {w.means}{es && <em lang="es"> ({w.es})</em>}</li>)}</ul>
          </section>
        )}
        <div className="pt-actions">
          <button type="button" className="btn btn-primary" onClick={() => onClose(true)}>Back to the lab</button>
          {pct < 80 && <button type="button" className="btn btn-ghost" onClick={() => { setI(0); setScore(0); setMissed([]); setReward(null); setPhase("learn"); }}>Study the set again</button>}
        </div>
      </article>
    );
  }

  return (
    <article className="wl-set" aria-labelledby="wl-title">
      <button type="button" className="btn btn-ghost btn-sm" onClick={() => onClose(false)}><Icon name="x" size={16} /> Stop</button>
      <p className="pt-kicker">{set.topic} · {i + 1} of {quiz.length}</p>
      <div className="wl-bar" aria-hidden="true"><span style={{ width: `${(100 * i) / quiz.length}%` }} /></div>
      <h1 id="wl-title" className="visually-hidden">Practise: {set.topic}</h1>

      {q.kind !== "listen" ? (
        <fieldset className="pt-options" disabled={checked}>
          <legend className="pt-stem">
            {q.kind === "meaning" ? <>Which word means: <em>{q.word.means}</em>?</> : <>Complete the sentence: <span className="wl-gap">{gapped(q.word)}</span></>}
          </legend>
          {q.options.map((o, k) => (
            <label key={o} className={`pt-option${pick === o ? " is-picked" : ""}${checked && o === q.word.w ? " is-right" : ""}${checked && pick === o && o !== q.word.w ? " is-wrong" : ""}`}>
              <input type="radio" name="wl" checked={pick === o} onChange={() => setPick(o)} />
              <span className="pt-option-key" aria-hidden="true">{"ABCD"[k]}</span><span>{o}</span>
            </label>
          ))}
        </fieldset>
      ) : (
        <div className="wl-listen">
          <p className="pt-stem">Listen and type the word.</p>
          <button type="button" className="btn btn-ghost" onClick={() => void say(q.word.w)}><Icon name="headphones" size={18} /> Play again</button>
          <label className="visually-hidden" htmlFor="wl-typed">The word you hear</label>
          <input id="wl-typed" className="pt-input" value={typed} disabled={checked} autoComplete="off" autoCapitalize="off" spellCheck={false}
            onChange={(e) => setTyped(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && typed.trim() && !checked) check(); }} />
        </div>
      )}

      {checked && (
        <div className={`px-feedback ${right ? "is-good" : "is-bad"}`} role="status">
          <strong>{right ? "Right." : `It's "${q.word.w}".`}</strong> {q.kind === "gap" ? q.word.ex : `${q.word.w}: ${q.word.means}`}
        </div>
      )}
      <div className="pt-actions">
        {!checked
          ? <button type="button" className="btn btn-primary" disabled={q.kind === "listen" ? !typed.trim() : pick === null} onClick={check}>Check</button>
          : <button type="button" className="btn btn-primary" onClick={() => void next()}>{i + 1 < quiz.length ? "Next" : "Finish"}</button>}
      </div>
    </article>
  );
}
