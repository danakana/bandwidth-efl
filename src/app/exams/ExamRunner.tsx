import { Fragment, useEffect, useMemo, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../lib/auth";
import { Icon } from "../../components/Icon";
import { countQ } from "../../content/exams/icfes";
import type { AudioClip, ExamBlock, ExamConfig, ExamQ, MatchBlock, OrderBlock, PartInfo, TextBlock } from "../../content/exams/types";
import { ExamAudio, Transcript } from "./ExamAudio";

const L = "ABCDEFGHIJ";
export type ExamRun = { exam: ExamConfig; mode: "part" | "section"; ref: string; title: string; blocks: ExamBlock[]; minutes?: number };
type Outcome = { xp: number; coins: number; capped: boolean } | null;
type Picks = Record<string, number>;
type PickFn = (id: string, v: number) => void;

/** Every scored answer in a block, with its key in `picks`. Order tasks score each position. */
const qsOf = (b: ExamBlock) => (b.kind === "match" || b.kind === "list" ? b.items.map((x) => ({ id: x.id, answer: x.answer }))
  : b.kind === "order" ? b.sentences.map((_, pos) => ({ id: `${b.id}-${pos}`, answer: pos })) : b.questions);

/** A fixed starting order for an order task: scrambled the same way every time, never already correct. */
function scramble(b: OrderBlock): number[] {
  const h = (s: string) => { let x = 7; for (const ch of s) x = (x * 33 + ch.charCodeAt(0)) >>> 0; return x; };
  const idx = b.sentences.map((s, k) => ({ k, h: h(s) })).sort((a, z) => a.h - z.h).map((x) => x.k);
  return idx.every((k, pos) => k === pos) ? [...idx.slice(1), idx[0]] : idx;
}
function startPicks(blocks: ExamBlock[]): Picks {
  const p: Picks = {};
  for (const b of blocks) if (b.kind === "order") scramble(b).forEach((k, pos) => { p[`${b.id}-${pos}`] = k; });
  return p;
}
/** All the audio in a block, for the transcript. */
const clipsOf = (b: ExamBlock): AudioClip[] => [...("audio" in b && b.audio ? b.audio : []), ...(b.kind === "list" || b.kind === "match" ? b.items.flatMap((x) => x.audio ?? []) : [])];

/** Plays exam blocks. Part practice shows answers after each block; a full test shows them only at the end. */
export function ExamRunner({ run, onClose }: { run: ExamRun; onClose: (changed: boolean) => void }) {
  const { profile } = useAuth();
  const es = !!profile?.spanish_help;
  const mock = run.mode === "section";
  const exam = run.exam;
  const partOf = (n: number) => exam.parts.find((p) => p.part === n)!;
  const [phase, setPhase] = useState<"intro" | "play" | "done">("intro");
  const [i, setI] = useState(0);
  const [picks, setPicks] = useState<Picks>(() => startPicks(run.blocks));
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [blankWarn, setBlankWarn] = useState(false);
  const [outcome, setOutcome] = useState<Outcome>(null);
  const [saveError, setSaveError] = useState(false);
  const [left, setLeft] = useState((run.minutes ?? 0) * 60);
  const total = useMemo(() => run.blocks.reduce((n, b) => n + countQ(b), 0), [run.blocks]);
  const block = run.blocks[i];
  const info = partOf((phase === "intro" ? run.blocks[0] : block).part);

  useEffect(() => {
    if (!mock || phase !== "play") return;
    const t = setInterval(() => setLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [mock, phase]);
  useEffect(() => { window.scrollTo({ top: 0 }); }, [i, phase]);

  const correctIn = (b: ExamBlock) => qsOf(b).filter((x) => picks[x.id] === x.answer).length;
  const blanks = run.blocks.flatMap(qsOf).filter((x) => picks[x.id] === undefined).length;
  const blockDone = qsOf(block).every((x) => picks[x.id] !== undefined);
  const revealed = !mock && !!checked[block.id];

  async function finish() {
    setPhase("done");
    const by: Record<string, [number, number]> = {};
    for (const b of run.blocks) { const k = String(b.part); const c = by[k] ?? [0, 0]; by[k] = [c[0] + correctIn(b), c[1] + countQ(b)]; }
    const score = Object.values(by).reduce((n, [c]) => n + c, 0);
    const { data, error } = await supabase.rpc("record_exam", { p_exam: exam.id, p_mode: run.mode, p_ref: run.ref, p_score: score, p_total: total, p_by_part: by });
    if (error) setSaveError(true); else setOutcome(data as Outcome);
  }

  function next() {
    if (!mock && !checked[block.id]) { setChecked({ ...checked, [block.id]: true }); return; }
    if (i < run.blocks.length - 1) { setI(i + 1); return; }
    if (mock && blanks > 0 && !blankWarn) { setBlankWarn(true); return; }
    void finish();
  }

  const pick: PickFn = (id, v) => { if (!revealed) { setPicks((p) => ({ ...p, [id]: v })); setBlankWarn(false); } };
  /** Order tasks: swap two positions. */
  const swap = (b: OrderBlock, a: number, z: number) => {
    if (revealed) return;
    setPicks((p) => ({ ...p, [`${b.id}-${a}`]: p[`${b.id}-${z}`], [`${b.id}-${z}`]: p[`${b.id}-${a}`] }));
  };
  const listening = (b: ExamBlock) => clipsOf(b).length > 0;

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
              <p className="pt-kicker">{exam.label} · {exam.id === "icfes" ? "mock exam" : "practice test"}</p>
              <h2>{run.title}</h2>
              <p className="pt-lede">{total} questions. About {run.minutes} minutes. Answers appear at the end, like the real test.</p>
              <ul className="ex-tips">
                <li><strong>Never leave a blank.</strong> A guess can score; a blank can't.</li>
                <li><strong>Remove wrong options first,</strong> then choose.</li>
                {run.blocks.some(listening)
                  ? <><li><strong>Read the questions before you listen.</strong></li><li><strong>Each recording plays twice at most.</strong> Use the second time to check.</li></>
                  : <li><strong>Read the whole sentence</strong> around every gap.</li>}
                {exam.id === "icfes" ? <li><strong>Move fast in Parts 1–3</strong> so you have time for the long texts.</li>
                  : !run.blocks.some(listening) && <li><strong>Do the short parts quickly</strong> so you have time for the long text at the end.</li>}
              </ul>
              {es && <p lang="es" className="es">Nunca dejes una pregunta en blanco: si no sabes, descarta opciones y adivina.</p>}
            </>
          ) : (
            <MethodCard info={info} es={es} />
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
          <BlockView key={block.id} block={block} info={info} exam={exam} picks={picks} revealed={revealed} onPick={pick} onSwap={swap} test={mock} />
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

export function MethodCard({ info: p, es }: { info: PartInfo; es: boolean }) {
  return (
    <div className="ex-method">
      <p className="pt-kicker">{p.name} · {p.skill}</p>
      <h2>{p.task}</h2>
      <p className="muted">About {p.approx} questions on the real test{p.options > 0 && <> · options A–{L[p.options - 1]}</>}</p>
      <h3>The method</h3>
      <ol className="ex-steps">{p.method.map((m) => <li key={m}>{m}</li>)}</ol>
      <p className="ex-trap"><strong>Watch out:</strong> {p.trap}</p>
      {es && <p lang="es" className="es">{p.es}</p>}
    </div>
  );
}

type ViewProps = { picks: Picks; revealed: boolean; onPick: PickFn; test: boolean };

function BlockView({ block, info, exam, onSwap, ...v }: ViewProps & { block: ExamBlock; info: PartInfo; exam: ExamConfig; onSwap: (b: OrderBlock, a: number, z: number) => void }) {
  const audio = "audio" in block && block.audio?.length ? block.audio : null;
  return (
    <>
      {audio && <ExamAudio clips={audio} unlimited={v.revealed} allowSlow={!v.test} />}
      {block.kind === "match" ? <MatchView b={block} {...v} />
        : block.kind === "order" ? <OrderView b={block} picks={v.picks} revealed={v.revealed} onSwap={onSwap} />
        : block.kind === "text" ? <TextView b={block} {...v} />
        : (
          <ol className="ex-items">
            {block.items.map((x, n) => (
              <li key={x.id}>
                {exam.id === "icfes" ? (
                  <>
                    {block.part === 2
                      ? <div className="ex-notice" role="note"><span className="visually-hidden">Notice: </span>{x.stem}</div>
                      : <p className="ex-line"><span className="visually-hidden">The first person says: </span>“{x.stem}”</p>}
                    <Options q={x} label={`${n + 1}. ${info.question}`} {...v} />
                  </>
                ) : (
                  <>
                    {x.audio && <ExamAudio clips={x.audio} unlimited={v.revealed} allowSlow={!v.test} label={`Listen to recording ${n + 1}`} />}
                    <Options q={x} label={`${n + 1}. ${x.stem}`} {...v} />
                    {v.revealed && x.audio && <Transcript clips={x.audio} />}
                  </>
                )}
              </li>
            ))}
          </ol>
        )}
      {v.revealed && audio && <Transcript clips={audio} />}
    </>
  );
}

function TextView({ b, picks, revealed, onPick, test }: ViewProps & { b: TextBlock }) {
  const gaps = b.questions.every((x) => !x.prompt);
  return (
    <>
      {b.text && (
        <article className="ex-text" aria-label={b.title}>
          <h3>{b.title}</h3>
          {b.text.split("\n\n").map((para, k) => (
            <p key={k}>{para.split(/\[(\d+)\]/).map((part, j) => j % 2 === 1
              ? <span key={j} className="ex-gap"><span className="visually-hidden">gap </span>{part}{picks[b.questions[Number(part) - 1]?.id] !== undefined && <em> {b.questions[Number(part) - 1].options[picks[b.questions[Number(part) - 1].id]].text}</em>}</span>
              : <Fragment key={j}>{part.split("\n").map((line, m) => <Fragment key={m}>{m > 0 && <br />}{line}</Fragment>)}</Fragment>)}</p>
          ))}
        </article>
      )}
      <ol className="ex-items">
        {b.questions.map((x, n) => (
          <li key={x.id}><Options q={x} label={gaps ? `Gap ${n + 1}` : `${n + 1}. ${x.prompt}`} picks={picks} revealed={revealed} onPick={onPick} test={test} /></li>
        ))}
      </ol>
    </>
  );
}

function Options({ q, label, picks, revealed, onPick }: ViewProps & { q: ExamQ; label: string }) {
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

function MatchView({ b, picks, revealed, onPick, test }: ViewProps & { b: MatchBlock }) {
  const people = !!b.passages;
  return (
    <>
      {b.title && <h3 className="ex-match-title">{b.title}</h3>}
      {b.passages && (
        <div className="ex-people">
          {b.passages.map((p, k) => (
            <article key={p.who} className="ex-person" aria-label={p.who}>
              <h4><span className="pt-option-key" aria-hidden="true">{L[k]}</span> {p.who}</h4>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      )}
      {!people && (
        <ul className={`ex-bank${b.words.some((w) => w.w.length > 22) ? " is-long" : ""}`} aria-label={b.paragraphs ? "Headings" : b.itemLabel === "Speaker" ? "Sentences" : "Words"}>
          {b.words.map((w, k) => (
            <li key={w.w}><span className="pt-option-key">{L[k]}</span> {w.w}{revealed && w.means && <small> · {w.means}</small>}</li>
          ))}
        </ul>
      )}
      <ol className="ex-items">
        {b.items.map((x, n) => {
          const mine = picks[x.id];
          return (
            <li key={x.id}>
              <fieldset className="ex-match" disabled={revealed}>
                <legend className="pt-stem">
                  {b.paragraphs ? <>Paragraph {n + 1}</> : x.audio ? <>{x.desc}</> : <>{n + 1}. {x.desc}</>}
                </legend>
                {b.paragraphs && <p className="ex-text ex-para">{x.desc}</p>}
                {x.audio && <ExamAudio clips={x.audio} unlimited={revealed} allowSlow={!test} label={`Listen to ${x.desc}`} />}
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
                    <strong>{mine === x.answer ? "Right." : `The answer is ${L[x.answer]}: ${b.words[x.answer].w}`}</strong>{" "}
                    {x.audio ? <>They said: “{x.why}”</> : x.why}
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

function OrderView({ b, picks, revealed, onSwap }: { b: OrderBlock; picks: Picks; revealed: boolean; onSwap: (b: OrderBlock, a: number, z: number) => void }) {
  const n = b.sentences.length;
  const [moved, setMoved] = useState<string>("");
  const move = (pos: number, dir: -1 | 1) => {
    onSwap(b, pos, pos + dir);
    setMoved(`Moved to position ${pos + dir + 2} of ${n + 1}.`);
  };
  return (
    <>
      <h3 className="ex-match-title">{b.title}</h3>
      <ol className="ex-order">
        <li className="ex-order-item is-fixed"><span className="ex-order-num" aria-hidden="true">1</span><span>{b.first}</span><span className="pill">Given</span></li>
        {b.sentences.map((_, pos) => {
          const k = picks[`${b.id}-${pos}`];
          const state = revealed ? (k === pos ? " is-right" : " is-wrong") : "";
          return (
            <li key={pos} className={`ex-order-item${state}`}>
              <span className="ex-order-num" aria-hidden="true">{pos + 2}</span>
              <span>{b.sentences[k]}</span>
              {!revealed && (
                <span className="ex-order-moves">
                  <button type="button" className="btn btn-ghost btn-sm" disabled={pos === 0} onClick={() => move(pos, -1)} aria-label={`Move up: ${b.sentences[k]}`}>▲</button>
                  <button type="button" className="btn btn-ghost btn-sm" disabled={pos === n - 1} onClick={() => move(pos, 1)} aria-label={`Move down: ${b.sentences[k]}`}>▼</button>
                </span>
              )}
              {revealed && <span className="visually-hidden">{k === pos ? "Right place" : "Wrong place"}</span>}
            </li>
          );
        })}
      </ol>
      <p className="visually-hidden" aria-live="polite">{moved}</p>
      {revealed && (
        <div className={`ex-why${b.sentences.every((_, p) => picks[`${b.id}-${p}`] === p) ? " is-right" : ""}`} role="status">
          <strong>The right order:</strong>
          <ol className="ex-order-key" start={2}>{b.sentences.map((s) => <li key={s}>{s}</li>)}</ol>
          {b.why}
        </div>
      )}
    </>
  );
}

function Results({ run, picks, total, correctIn, outcome, saveError }: {
  run: ExamRun; picks: Picks; total: number; correctIn: (b: ExamBlock) => number; outcome: Outcome; saveError: boolean;
}) {
  const partOf = (n: number) => run.exam.parts.find((p) => p.part === n)!;
  const score = run.blocks.reduce((n, b) => n + correctIn(b), 0);
  const parts = [...new Set(run.blocks.map((b) => b.part))];
  const rows = parts.map((p) => {
    const bs = run.blocks.filter((b) => b.part === p);
    const c = bs.reduce((n, b) => n + correctIn(b), 0), t = bs.reduce((n, b) => n + countQ(b), 0);
    return { p, c, t, pct: Math.round((c / t) * 100) };
  });
  const weakest = [...rows].sort((a, b) => a.pct - b.pct)[0];
  const [review, setReview] = useState(run.mode === "section");
  const aptis = run.exam.id === "aptis" && run.mode === "section";
  return (
    <section className="pt-card ex-results" aria-labelledby="ex-res-title">
      <p className="pt-kicker">{run.title}</p>
      <h2 id="ex-res-title">{score} of {total} correct</h2>
      <p className="pt-lede">{Math.round((score / total) * 100)}% of the questions.</p>
      {aptis && (
        <p className="ex-next"><strong>Estimated Aptis score: {Math.round((score / total) * 50)} / 50.</strong> <span className="muted">An estimate only: the real test uses its own scale.</span></p>
      )}
      {outcome && (
        <p className="ex-reward"><Icon name="bolt" size={18} /> +{outcome.xp} XP · <Icon name="coin" size={18} /> +{outcome.coins} coins{outcome.capped && <span className="muted"> (daily exam coins reached)</span>}</p>
      )}
      {saveError && <p className="form-error" role="alert">We couldn't save this result. Your score is still shown here.</p>}
      {rows.length > 1 && (
        <ul className="ex-bars" aria-label="Score by part">
          {rows.map((r) => (
            <li key={r.p}>
              <span>{partOf(r.p).name} · {partOf(r.p).skill}</span>
              <span className="ex-bar" aria-hidden="true"><span style={{ width: `${r.pct}%` }} /></span>
              <strong>{r.c}/{r.t}</strong>
            </li>
          ))}
        </ul>
      )}
      {rows.length > 1 && weakest.pct < 100 && (
        <p className="ex-next"><strong>Practise next:</strong> {partOf(weakest.p).name} ({partOf(weakest.p).skill}). Its method and trap are in the part list.</p>
      )}
      {run.mode === "section" && (
        <>
          <button type="button" className="link-btn" aria-expanded={review} onClick={() => setReview(!review)}>{review ? "Hide answers" : "Show answers"}</button>
          {review && run.blocks.map((b) => (
            <div key={b.id} className="ex-review">
              <h3>{partOf(b.part).name} · {partOf(b.part).skill}</h3>
              <BlockView block={b} info={partOf(b.part)} exam={run.exam} picks={picks} revealed test onPick={() => {}} onSwap={() => {}} />
            </div>
          ))}
        </>
      )}
    </section>
  );
}
