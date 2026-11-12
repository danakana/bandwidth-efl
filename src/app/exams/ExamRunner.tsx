import { Fragment, useEffect, useMemo, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../lib/auth";
import { Icon } from "../../components/Icon";
import { ICFES_PARTS, countQ } from "../../content/exams/icfes";
import type { ExamBlock, ExamQ, MatchBlock, TextBlock } from "../../content/exams/types";

const L = "ABCDEFG";
export type ExamRun = { mode: "part" | "section"; ref: string; title: string; blocks: ExamBlock[]; minutes?: number };
type Outcome = { xp: number; coins: number; capped: boolean } | null;

/** Plays exam blocks. Part practice shows answers after each block; a mock section shows them only at the end. */
export function ExamRunner({ run, onClose }: { run: ExamRun; onClose: (changed: boolean) => void }) {
  const { profile } = useAuth();
  const es = !!profile?.spanish_help;
  const mock = run.mode === "section";
  const [phase, setPhase] = useState<"intro" | "play" | "done">("intro");
  const [i, setI] = useState(0);
  const [picks, setPicks] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [blankWarn, setBlankWarn] = useState(false);
  const [outcome, setOutcome] = useState<Outcome>(null);
  const [saveError, setSaveError] = useState(false);
  const [left, setLeft] = useState((run.minutes ?? 0) * 60);
  const total = useMemo(() => run.blocks.reduce((n, b) => n + countQ(b), 0), [run.blocks]);
  const block = run.blocks[i];
  const info = ICFES_PARTS[(phase === "intro" ? run.blocks[0] : block).part - 1];

  useEffect(() => {
    if (!mock || phase !== "play") return;
    const t = setInterval(() => setLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [mock, phase]);
  useEffect(() => { window.scrollTo({ top: 0 }); }, [i, phase]);

  const qsOf = (b: ExamBlock) => (b.kind === "match" ? b.items.map((x) => ({ id: x.id, answer: x.answer })) : (b.kind === "list" ? b.items : b.questions));
  const correctIn = (b: ExamBlock) => qsOf(b).filter((x) => picks[x.id] === x.answer).length;
  const blanks = run.blocks.flatMap(qsOf).filter((x) => picks[x.id] === undefined).length;
  const blockDone = qsOf(block).every((x) => picks[x.id] !== undefined);
  const revealed = !mock && !!checked[block.id];

  async function finish() {
    setPhase("done");
    const by: Record<string, [number, number]> = {};
    for (const b of run.blocks) { const k = String(b.part); const c = by[k] ?? [0, 0]; by[k] = [c[0] + correctIn(b), c[1] + countQ(b)]; }
    const score = Object.values(by).reduce((n, [c]) => n + c, 0);
    const { data, error } = await supabase.rpc("record_exam", { p_exam: "icfes", p_mode: run.mode, p_ref: run.ref, p_score: score, p_total: total, p_by_part: by });
    if (error) setSaveError(true); else setOutcome(data as Outcome);
  }

  function next() {
    if (!mock && !checked[block.id]) { setChecked({ ...checked, [block.id]: true }); return; }
    if (i < run.blocks.length - 1) { setI(i + 1); return; }
    if (mock && blanks > 0 && !blankWarn) { setBlankWarn(true); return; }
    void finish();
  }

  const pick = (id: string, v: number) => { if (!revealed) { setPicks({ ...picks, [id]: v }); setBlankWarn(false); } };

  return (
    <div className="ex-run" role="region" aria-label={run.title}>
      <div className="ex-run-bar">
        <button type="button" className="btn btn-ghost btn-sm" onClick={() => onClose(phase === "done")}><Icon name="x" size={16} /> {phase === "done" ? "Close" : "Leave"}</button>
        <h1 className="ex-run-title">{run.title}</h1>
        {mock && phase === "play" && (
          <span className={`ex-timer${left <= 0 ? " is-over" : left < 300 ? " is-low" : ""}`} role="timer" aria-live="off">
            <Icon name="clock" size={16} /> {left <= 0 ? "Time's up" : `${Math.floor(left / 60)}:${String(left % 60).padStart(2, "0")}`}
          </span>
        )}
      </div>

      {phase === "intro" && (
        <section className="pt-card ex-intro">
          {mock ? (
            <>
              <p className="pt-kicker">ICFES Saber 11 · mock exam</p>
              <h2>{run.title}</h2>
              <p className="pt-lede">{total} questions. About {run.minutes} minutes. Answers appear at the end, like the real test.</p>
              <ul className="ex-tips">
                <li><strong>Never leave a blank.</strong> A guess can score; a blank can't.</li>
                <li><strong>Remove wrong options first,</strong> then choose.</li>
                <li><strong>Read the whole sentence</strong> around every gap.</li>
                <li><strong>Move fast in Parts 1–3</strong> so you have time for the long texts.</li>
              </ul>
              {es && <p lang="es" className="es">Nunca dejes una pregunta en blanco: si no sabes, descarta opciones y adivina.</p>}
            </>
          ) : (
            <MethodCard part={run.blocks[0].part} es={es} />
          )}
          <button type="button" className="btn btn-primary pt-go" onClick={() => setPhase("play")}>Start</button>
        </section>
      )}

      {phase === "play" && (
        <section className="pt-card ex-block" aria-labelledby="ex-part-title">
          <div className="pt-meter" aria-hidden="true">{run.blocks.map((b, k) => <span key={b.id} className={k < i ? "is-on" : k === i ? "is-now" : ""} />)}</div>
          <header className="ex-block-head">
            <p className="pt-kicker">{info.name} · {info.skill}</p>
            <h2 id="ex-part-title">{info.task}</h2>
            {block.kind === "text" && block.challenge && <span className="pill">Challenge</span>}
          </header>
          <BlockView block={block} picks={picks} revealed={revealed} onPick={pick} />
          {revealed && <p className="ex-score" role="status">You got {correctIn(block)} of {countQ(block)}.</p>}
          {blankWarn && <p className="form-error" role="alert">You left {blanks} blank. On the real test, never leave a blank: guess! You can go back, or finish anyway.</p>}
          <div className="pt-actions">
            {i > 0 && mock && <button type="button" className="btn btn-ghost" onClick={() => setI(i - 1)}>Back</button>}
            <button type="button" className="btn btn-primary" disabled={!mock && !revealed && !blockDone} onClick={next}>
              {!mock && !revealed ? "Check answers" : i < run.blocks.length - 1 ? "Next" : blankWarn ? "Finish anyway" : "Finish"}
            </button>
            {!mock && !revealed && !blockDone && <span className="muted px-small">Answer every question to check.</span>}
          </div>
        </section>
      )}

      {phase === "done" && (
        <Results run={run} picks={picks} total={total} correctIn={correctIn} outcome={outcome} saveError={saveError} />
      )}
    </div>
  );
}

export function MethodCard({ part, es }: { part: number; es: boolean }) {
  const p = ICFES_PARTS[part - 1];
  return (
    <div className="ex-method">
      <p className="pt-kicker">{p.name} · {p.skill}</p>
      <h2>{p.task}</h2>
      <p className="muted">About {p.approx} questions on the real test · options A–{L[p.options - 1]}</p>
      <h3>The method</h3>
      <ol className="ex-steps">{p.method.map((m) => <li key={m}>{m}</li>)}</ol>
      <p className="ex-trap"><strong>Watch out:</strong> {p.trap}</p>
      {es && <p lang="es" className="es">{p.es}</p>}
    </div>
  );
}

function BlockView({ block, picks, revealed, onPick }: { block: ExamBlock; picks: Record<string, number>; revealed: boolean; onPick: (id: string, v: number) => void }) {
  if (block.kind === "match") return <MatchView b={block} picks={picks} revealed={revealed} onPick={onPick} />;
  if (block.kind === "list") {
    return (
      <ol className="ex-items">
        {block.items.map((x, n) => (
          <li key={x.id}>
            {block.part === 2
              ? <div className="ex-notice" role="note"><span className="visually-hidden">Notice: </span>{x.stem}</div>
              : <p className="ex-line"><span className="visually-hidden">The first person says: </span>“{x.stem}”</p>}
            <Options q={x} label={`${n + 1}. ${ICFES_PARTS[block.part - 1].question}`} picks={picks} revealed={revealed} onPick={onPick} />
          </li>
        ))}
      </ol>
    );
  }
  return <TextView b={block} picks={picks} revealed={revealed} onPick={onPick} />;
}

function TextView({ b, picks, revealed, onPick }: { b: TextBlock; picks: Record<string, number>; revealed: boolean; onPick: (id: string, v: number) => void }) {
  const gaps = b.part === 4 || b.part === 7;
  return (
    <>
      <article className="ex-text" aria-label={b.title}>
        <h3>{b.title}</h3>
        {b.text.split("\n\n").map((para, k) => (
          <p key={k}>{para.split(/\[(\d+)\]/).map((part, j) => j % 2 === 1
            ? <span key={j} className="ex-gap"><span className="visually-hidden">gap </span>{part}{picks[b.questions[Number(part) - 1]?.id] !== undefined && <em> {b.questions[Number(part) - 1].options[picks[b.questions[Number(part) - 1].id]].text}</em>}</span>
            : <Fragment key={j}>{part.split("\n").map((line, m) => <Fragment key={m}>{m > 0 && <br />}{line}</Fragment>)}</Fragment>)}</p>
        ))}
      </article>
      <ol className="ex-items">
        {b.questions.map((x, n) => (
          <li key={x.id}><Options q={x} label={gaps ? `Gap ${n + 1}` : `${n + 1}. ${x.prompt}`} picks={picks} revealed={revealed} onPick={onPick} /></li>
        ))}
      </ol>
    </>
  );
}

function Options({ q, label, picks, revealed, onPick }: { q: ExamQ; label: string; picks: Record<string, number>; revealed: boolean; onPick: (id: string, v: number) => void }) {
  const mine = picks[q.id];
  return (
    <fieldset className="pt-options ex-options" disabled={revealed}>
      <legend className="pt-stem">{label}{q.challenge && <span className="pill ex-ch">Challenge</span>}</legend>
      {q.options.map((opt, k) => {
        const state = revealed ? (k === q.answer ? " is-right" : k === mine ? " is-wrong" : "") : mine === k ? " is-picked" : "";
        return (
          <label key={k} className={`pt-option${state}`}>
            <input type="radio" name={q.id} checked={mine === k} onChange={() => onPick(q.id, k)} />
            <span className="pt-option-key" aria-hidden="true">{L[k]}</span>
            <span>{opt.text}</span>
          </label>
        );
      })}
      {revealed && <Why q={q} mine={mine} />}
    </fieldset>
  );
}

function Why({ q, mine }: { q: ExamQ; mine: number | undefined }) {
  const right = mine === q.answer;
  return (
    <div className={`ex-why${right ? " is-right" : ""}`} role="status">
      <strong>{right ? "Right." : mine === undefined ? `Blank. The answer is ${L[q.answer]}.` : `Not quite. The answer is ${L[q.answer]}.`}</strong> {q.options[q.answer].why}
      {!right && mine !== undefined && <span className="ex-why-wrong"> {L[mine]}: {q.options[mine].why}</span>}
    </div>
  );
}

function MatchView({ b, picks, revealed, onPick }: { b: MatchBlock; picks: Record<string, number>; revealed: boolean; onPick: (id: string, v: number) => void }) {
  return (
    <>
      <ul className="ex-bank" aria-label="Words">
        {b.words.map((w, k) => (
          <li key={w.w}><span className="pt-option-key">{L[k]}</span> {w.w}{revealed && <small> · {w.means}</small>}</li>
        ))}
      </ul>
      <ol className="ex-items">
        {b.items.map((x, n) => {
          const mine = picks[x.id];
          return (
            <li key={x.id}>
              <fieldset className="ex-match" disabled={revealed}>
                <legend className="pt-stem">{n + 1}. {x.desc}</legend>
                <div className="ex-letters">
                  {b.words.map((w, k) => {
                    const state = revealed ? (k === x.answer ? " is-right" : k === mine ? " is-wrong" : "") : mine === k ? " is-picked" : "";
                    return (
                      <label key={w.w} className={`ex-letter${state}`}>
                        <input type="radio" name={x.id} checked={mine === k} onChange={() => onPick(x.id, k)} />
                        <span aria-hidden="true">{L[k]}</span><span className="visually-hidden">{w.w}</span>
                      </label>
                    );
                  })}
                </div>
                {revealed && (
                  <div className={`ex-why${mine === x.answer ? " is-right" : ""}`} role="status">
                    <strong>{mine === x.answer ? "Right." : `The answer is ${L[x.answer]}: ${b.words[x.answer].w}.`}</strong> {x.why}
                  </div>
                )}
              </fieldset>
            </li>
          );
        })}
      </ol>
    </>
  );
}

function Results({ run, picks, total, correctIn, outcome, saveError }: {
  run: ExamRun; picks: Record<string, number>; total: number; correctIn: (b: ExamBlock) => number; outcome: Outcome; saveError: boolean;
}) {
  const score = run.blocks.reduce((n, b) => n + correctIn(b), 0);
  const parts = [...new Set(run.blocks.map((b) => b.part))];
  const rows = parts.map((p) => {
    const bs = run.blocks.filter((b) => b.part === p);
    const c = bs.reduce((n, b) => n + correctIn(b), 0), t = bs.reduce((n, b) => n + countQ(b), 0);
    return { p, c, t, pct: Math.round((c / t) * 100) };
  });
  const weakest = [...rows].sort((a, b) => a.pct - b.pct)[0];
  const [review, setReview] = useState(run.mode === "section");
  return (
    <section className="pt-card ex-results" aria-labelledby="ex-res-title">
      <p className="pt-kicker">{run.title}</p>
      <h2 id="ex-res-title">{score} of {total} correct</h2>
      <p className="pt-lede">{Math.round((score / total) * 100)}% of the questions.</p>
      {outcome && (
        <p className="ex-reward"><Icon name="bolt" size={18} /> +{outcome.xp} XP · <Icon name="coin" size={18} /> +{outcome.coins} coins{outcome.capped && <span className="muted"> (daily exam coins reached)</span>}</p>
      )}
      {saveError && <p className="form-error" role="alert">We couldn't save this result. Your score is still shown here.</p>}
      {rows.length > 1 && (
        <ul className="ex-bars" aria-label="Score by part">
          {rows.map((r) => (
            <li key={r.p}>
              <span>{ICFES_PARTS[r.p - 1].name} · {ICFES_PARTS[r.p - 1].skill}</span>
              <span className="ex-bar" aria-hidden="true"><span style={{ width: `${r.pct}%` }} /></span>
              <strong>{r.c}/{r.t}</strong>
            </li>
          ))}
        </ul>
      )}
      {rows.length > 1 && weakest.pct < 100 && (
        <p className="ex-next"><strong>Practise next:</strong> {ICFES_PARTS[weakest.p - 1].name} ({ICFES_PARTS[weakest.p - 1].skill}). Its method and trap are in the part list.</p>
      )}
      {run.mode === "section" && (
        <>
          <button type="button" className="link-btn" aria-expanded={review} onClick={() => setReview(!review)}>{review ? "Hide answers" : "Show answers"}</button>
          {review && run.blocks.map((b) => (
            <div key={b.id} className="ex-review">
              <h3>{ICFES_PARTS[b.part - 1].name} · {ICFES_PARTS[b.part - 1].skill}</h3>
              <BlockView block={b} picks={picks} revealed onPick={() => {}} />
            </div>
          ))}
        </>
      )}
    </section>
  );
}
