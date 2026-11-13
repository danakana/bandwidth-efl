import { Fragment, useCallback, useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../lib/auth";
import { useProgress } from "../../lib/progress";
import { Icon } from "../../components/Icon";
import { ICFES, ICFES_BANK, ICFES_MOCKS, countQ } from "../../content/exams/icfes";
import { APTIS, APTIS_BANK, APTIS_TESTS } from "../../content/exams/aptis";
import { IELTS, IELTS_BANK, IELTS_TESTS, ieltsBand } from "../../content/exams/ielts";
import type { ExamConfig, PartInfo } from "../../content/exams/types";
import { APTIS_SPEAKING, APTIS_S_PARTS, APTIS_WRITING, APTIS_W_PARTS } from "../../content/exams/aptis-production";
import { TOEFL, TOEFL_BANK, TOEFL_SPEAKING, TOEFL_S_PARTS, TOEFL_TESTS, TOEFL_WRITING, TOEFL_W_PARTS, toeflBand } from "../../content/exams/toefl";
import { IELTS_SPEAKING, IELTS_S_PARTS, IELTS_WRITING, IELTS_W_PARTS } from "../../content/exams/ielts-production";
import { ExamRunner, type ExamRun } from "./ExamRunner";
import { ProductionRunner, type ProductionRun } from "./ProductionRunner";
import "./exams.css";

type Row = { exam: "icfes" | "aptis" | "ielts" | "toefl"; mode: "part" | "section"; ref: string; score: number; total: number; by_part: Record<string, [number, number]>; created_at: string };
type Which = "icfes" | "aptis" | "ielts" | "toefl";

const OTHER: { name: string; blurb: string }[] = [];
const KEY = "bw-exam";

/** Recent accuracy per part: the last five results that include it (practice and full tests). */
function accuracy(rows: Row[], parts: PartInfo[]) {
  return parts.map((p) => {
    const hits = rows.filter((r) => r.by_part[String(p.part)]).slice(0, 5);
    const [c, t] = hits.reduce(([a, b], r) => [a + r.by_part[String(p.part)][0], b + r.by_part[String(p.part)][1]], [0, 0]);
    return t ? Math.round((c / t) * 100) : null;
  });
}
/** The first part never tried, otherwise the lowest score. */
function suggestIn(acc: (number | null)[]) {
  const untried = acc.findIndex((a) => a === null);
  if (untried >= 0) return untried;
  return acc.reduce<number | null>((best, a, k) => (a === null ? best : best === null || a < (acc[best] ?? 101) ? k : best), null);
}

/** Exam prep: ICFES Saber 11 and Aptis General, each with part trainers and full practice tests. */
export function ExamsPage() {
  const { profile } = useAuth();
  const progress = useProgress();
  const es = !!profile?.spanish_help;
  const [rows, setRows] = useState<Row[]>([]);
  const [run, setRun] = useState<ExamRun | null>(null);
  const [prod, setProd] = useState<ProductionRun | null>(null);
  const [which, setWhich] = useState<Which>(() => { try { const v = localStorage.getItem(KEY); return v === "aptis" || v === "ielts" || v === "toefl" ? v : "icfes"; } catch { return "icfes"; } });

  const load = useCallback(async () => {
    const { data } = await supabase.from("exam_results").select("exam, mode, ref, score, total, by_part, created_at").order("created_at", { ascending: false }).limit(500);
    setRows((data as Row[]) ?? []);
  }, []);
  useEffect(() => { void load(); }, [load]);

  function choose(w: Which) { setWhich(w); try { localStorage.setItem(KEY, w); } catch { /* private mode */ } }

  function practise(exam: ExamConfig, part: number) {
    const bank = (exam.id === "icfes" ? ICFES_BANK : exam.id === "ielts" ? IELTS_BANK : exam.id === "toefl" ? TOEFL_BANK : APTIS_BANK)[part];
    const recent = rows.filter((r) => r.exam === exam.id && r.mode === "part" && r.ref === String(part)).length;
    const block = bank[(recent + Math.floor(Math.random() * bank.length)) % bank.length];
    const p = exam.parts.find((x) => x.part === part)!;
    setRun({ exam, mode: "part", ref: String(part), title: `${p.name} practice`, blocks: [block] });
  }

  if (prod) return <ProductionRunner run={prod} onClose={() => { setProd(null); void load(); void progress?.refresh(); }} />;
  const pick = <T,>(xs: T[]) => xs[Math.floor(Math.random() * xs.length)];
  const writePart = (part: number) => setProd({ kind: "writing", exam: "aptis", test: false, title: `${APTIS_W_PARTS.find((p) => p.part === part)!.name} practice`, set: pick(APTIS_WRITING), parts: [part] });
  const speakPart = (part: number) => setProd({ kind: "speaking", exam: "aptis", test: false, title: `${APTIS_S_PARTS.find((p) => p.part === part)!.name} practice`, set: pick(APTIS_SPEAKING), parts: [part] });
  const ieWritePart = (part: number) => setProd({ kind: "writing", exam: "ielts", test: false, title: `IELTS ${IELTS_W_PARTS.find((p) => p.part === part)!.name} practice`, set: pick(IELTS_WRITING), parts: [part] });
  const tfWritePart = (part: number) => (part === 8 ? practise(TOEFL, 8) : setProd({ kind: "writing", exam: "toefl", test: false, title: `TOEFL ${TOEFL_W_PARTS.find((p) => p.part === part)!.name} practice`, set: pick(TOEFL_WRITING), parts: [part] }));
  const tfSpeakPart = (part: number) => setProd({ kind: "speaking", exam: "toefl", test: false, title: `TOEFL ${TOEFL_S_PARTS.find((p) => p.part === part)!.name} practice`, set: pick(TOEFL_SPEAKING), parts: [part] });
  const ieSpeakPart = (part: number) => setProd({ kind: "speaking", exam: "ielts", test: false, title: `IELTS ${IELTS_S_PARTS.find((p) => p.part === part)!.name} practice`, set: pick(IELTS_SPEAKING), parts: [part] });

  if (run) {
    return <ExamRunner run={run} onClose={(changed) => { setRun(null); if (changed) { void load(); void progress?.refresh(); } }} />;
  }
  const mine = rows.filter((r) => r.exam === which);
  const best = (ref: string) => { const r = mine.filter((x) => x.ref === ref); return r.length ? Math.max(...r.map((x) => x.score)) : null; };

  return (
    <div className="ex-page">
      <nav className="crumbs" aria-label="Breadcrumb"><a href="#app">Map</a><span aria-hidden="true">/</span><span aria-current="page">Exams</span></nav>
      <div role="group" aria-label="Exam" className="ex-seg">
        <button type="button" aria-pressed={which === "icfes"} onClick={() => choose("icfes")}>ICFES Saber 11</button>
        <button type="button" aria-pressed={which === "aptis"} onClick={() => choose("aptis")}>Aptis</button>
        <button type="button" aria-pressed={which === "ielts"} onClick={() => choose("ielts")}>IELTS</button>
        <button type="button" aria-pressed={which === "toefl"} onClick={() => choose("toefl")}>TOEFL</button>
      </div>

      {which === "icfes" ? (
        <>
          <header className="ex-head">
            <p className="pt-kicker">Exam prep</p>
            <h1>ICFES Saber 11 English</h1>
            <p className="pt-lede">55 questions in 7 parts. Each part has its own method. Learn the method, practise the part, then try a full mock.</p>
            {es && <p lang="es" className="es">Practica cada parte con su método y luego haz un simulacro completo.</p>}
          </header>
          <PartList exam={ICFES} rows={mine} title="The 7 parts" onPractise={(p) => practise(ICFES, p)} />
          <section className="home-section" aria-labelledby="ex-mock-title">
            <h2 id="ex-mock-title">Mock exams</h2>
            <p className="muted">A full 55-question test in two sections. Do them on different days if you like. Answers appear at the end.</p>
            <div className="ex-mocks">
              {ICFES_MOCKS.map((m) => {
                const scores = m.sections.map((s) => best(s.id));
                const totals = m.sections.map((s) => s.blocks.reduce((n, b) => n + countQ(b), 0));
                return (
                  <article key={m.id} className="class-card ex-mock">
                    <h3>{m.name}</h3>
                    {m.sections.map((s, k) => (
                      <TestRow key={s.id} name={s.name} total={totals[k]} minutes={s.minutes} best={scores[k]}
                        onStart={() => setRun({ exam: ICFES, mode: "section", ref: s.id, title: `${m.name} · ${s.name}`, blocks: s.blocks, minutes: s.minutes })} />
                    ))}
                    {scores.every((x) => x !== null) && (
                      <p className="ex-total"><Icon name="trophy" size={18} /> Best total: <strong>{(scores[0] ?? 0) + (scores[1] ?? 0)} / 55</strong></p>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        </>
      ) : which === "toefl" ? (
        <>
          <header className="ex-head">
            <p className="pt-kicker">Exam prep</p>
            <h1>TOEFL iBT</h1>
            <p className="pt-lede">For universities in the US and around the world. Since January 2026 each section is scored from 1 to 6. Learn each task, then try a full test.</p>
            {es && <p lang="es" className="es">Practica cada tarea y luego haz la prueba completa. Cada sección se califica de 1 a 6.</p>}
          </header>
          {(["Reading", "Listening"] as const).map((g) => (
            <Fragment key={g}>
              <PartList exam={{ ...TOEFL, parts: TOEFL.parts.filter((p) => p.group === g) }} rows={mine} title={g} onPractise={(p) => practise(TOEFL, p)} />
              <div className="ex-mocks ex-aptis-tests">
                {TOEFL_TESTS.filter((t) => t.group === g).map((t) => {
                  const total = t.blocks.reduce((n, b) => n + countQ(b), 0);
                  const b = best(t.id);
                  return (
                    <article key={t.id} className="class-card ex-mock">
                      <TestRow name={t.name} total={total} minutes={t.minutes} best={b} extra={b !== null ? ` · about ${toeflBand(b, total)} of 6` : ""}
                        onStart={() => setRun({ exam: TOEFL, mode: "section", ref: t.id, title: `TOEFL ${t.name}`, blocks: t.blocks, minutes: t.minutes })} />
                    </article>
                  );
                })}
              </div>
            </Fragment>
          ))}
          <PartList exam={{ ...TOEFL, parts: [...TOEFL.parts.filter((p) => p.group === "Writing"), ...TOEFL_W_PARTS] }} rows={mine} title="Writing" onPractise={tfWritePart} />
          <div className="ex-mocks ex-aptis-tests">
            {TOEFL_WRITING.map((w, k) => (
              <article key={w.id} className="class-card ex-mock">
                <ProdRow name={`Writing test ${"AB"[k]}`} desc="Email and academic discussion · about 17 min · marked by your teacher"
                  onStart={() => setProd({ kind: "writing", exam: "toefl", test: true, title: `TOEFL Writing test ${"AB"[k]}`, set: w, parts: [31, 32], minutes: 17 })} />
              </article>
            ))}
          </div>
          <PartList exam={{ ...TOEFL, parts: TOEFL_S_PARTS }} rows={[]} title="Speaking" onPractise={tfSpeakPart} />
          <div className="ex-mocks ex-aptis-tests">
            {TOEFL_SPEAKING.map((sp, k) => (
              <article key={sp.id} className="class-card ex-mock">
                <ProdRow name={`Speaking test ${"AB"[k]}`} desc="2 parts · about 8 min · recorded for your teacher"
                  onStart={() => setProd({ kind: "speaking", exam: "toefl", test: true, title: `TOEFL Speaking test ${"AB"[k]}`, set: sp, parts: [33, 34] })} />
              </article>
            ))}
          </div>
          <p className="muted px-small">The real TOEFL adapts to you; these practice tests are fixed and shorter, so scores are a rough guide. Listening uses your device's voice until the recorded voices are ready.</p>
        </>
      ) : which === "ielts" ? (
        <>
          <header className="ex-head">
            <p className="pt-kicker">Exam prep</p>
            <h1>IELTS Academic</h1>
            <p className="pt-lede">For studying at university abroad. Scores go from band 1 to 9. Learn each question type and task, then try a full test. Reading and Listening give you a band at once; your teacher marks Writing and Speaking.</p>
            {es && <p lang="es" className="es">Practica cada tipo de pregunta y luego haz la prueba completa de Reading.</p>}
          </header>
          {(["Reading", "Listening"] as const).map((g) => (
          <Fragment key={g}>
          <PartList exam={{ ...IELTS, parts: IELTS.parts.filter((p) => p.group === g) }} rows={mine} title={g} onPractise={(p) => practise(IELTS, p)} />
          <div className="ex-mocks ex-aptis-tests">
            {IELTS_TESTS.filter((t) => t.group === g).map((t) => {
              const total = t.blocks.reduce((n, b) => n + countQ(b), 0);
              const b = best(t.id);
              return (
                <article key={t.id} className="class-card ex-mock">
                  <TestRow name={`Academic ${t.name}`} total={total} minutes={t.minutes} best={b} extra={b !== null ? ` · band ${ieltsBand(t.id, b, total)}` : ""}
                    onStart={() => setRun({ exam: IELTS, mode: "section", ref: t.id, title: `IELTS ${t.name}`, blocks: t.blocks, minutes: t.minutes })} />
                </article>
              );
            })}
          </div>
          </Fragment>
          ))}
          <PartList exam={{ ...IELTS, parts: IELTS_W_PARTS }} rows={[]} title="Writing" onPractise={ieWritePart} />
          <div className="ex-mocks ex-aptis-tests">
            {IELTS_WRITING.map((w, k) => (
              <article key={w.id} className="class-card ex-mock">
                <ProdRow name={`Writing test ${"AB"[k]}`} desc="Task 1 and Task 2 · 60 min · marked by your teacher"
                  onStart={() => setProd({ kind: "writing", exam: "ielts", test: true, title: `IELTS Writing test ${"AB"[k]}`, set: w, parts: [21, 22], minutes: 60 })} />
              </article>
            ))}
          </div>
          <PartList exam={{ ...IELTS, parts: IELTS_S_PARTS }} rows={[]} title="Speaking" onPractise={ieSpeakPart} />
          <div className="ex-mocks ex-aptis-tests">
            {IELTS_SPEAKING.map((sp, k) => (
              <article key={sp.id} className="class-card ex-mock">
                <ProdRow name={`Speaking test ${"AB"[k]}`} desc="3 parts · about 12 min · recorded for your teacher"
                  onStart={() => setProd({ kind: "speaking", exam: "ielts", test: true, title: `IELTS Speaking test ${"AB"[k]}`, set: sp, parts: [23, 24, 25] })} />
              </article>
            ))}
          </div>
          <p className="muted px-small">Listening and the speaking questions use your device's voice until the recorded voices are ready. Writing Task 1 charts use practice data.</p>
        </>
      ) : (
        <>
          <header className="ex-head">
            <p className="pt-kicker">Exam prep</p>
            <h1>Aptis General</h1>
            <p className="pt-lede">The British Council test many Colombian universities use. Core (grammar and vocabulary), Reading, Listening, Writing and Speaking. Learn each part, then try a full practice test.</p>
            {es && <p lang="es" className="es">Practica cada parte y luego haz la prueba completa de cada componente.</p>}
          </header>
          {(["Core", "Reading", "Listening"] as const).map((g) => {
            const parts = APTIS.parts.filter((p) => p.group === g);
            return (
              <Fragment key={g}>
                <PartList exam={{ ...APTIS, parts }} rows={mine} title={g} onPractise={(p) => practise(APTIS, p)} />
                <div className="ex-mocks ex-aptis-tests">
                  {APTIS_TESTS.filter((t) => t.group === g).map((t) => {
                    const total = t.blocks.reduce((n, b) => n + countQ(b), 0);
                    const b = best(t.id);
                    return (
                      <article key={t.id} className="class-card ex-mock">
                        <TestRow name={t.name} total={total} minutes={t.minutes} best={b} extra={b !== null ? ` · about ${Math.round((b / total) * 50)}/50` : ""}
                          onStart={() => setRun({ exam: APTIS, mode: "section", ref: t.id, title: `Aptis ${t.name}`, blocks: t.blocks, minutes: t.minutes })} />
                      </article>
                    );
                  })}
                </div>
              </Fragment>
            );
          })}
          <PartList exam={{ ...APTIS, parts: APTIS_W_PARTS }} rows={[]} title="Writing" onPractise={writePart} />
          <div className="ex-mocks ex-aptis-tests">
            {APTIS_WRITING.map((w, k) => (
              <article key={w.id} className="class-card ex-mock">
                <ProdRow name={`Writing test ${"AB"[k]}: ${w.club}`} desc="4 parts · about 50 min · marked by your teacher"
                  onStart={() => setProd({ kind: "writing", exam: "aptis", test: true, title: `Aptis Writing test ${"AB"[k]}`, set: w, parts: [11, 12, 13, 14], minutes: 50 })} />
              </article>
            ))}
          </div>
          <PartList exam={{ ...APTIS, parts: APTIS_S_PARTS }} rows={[]} title="Speaking" onPractise={speakPart} />
          <div className="ex-mocks ex-aptis-tests">
            {APTIS_SPEAKING.map((sp, k) => (
              <article key={sp.id} className="class-card ex-mock">
                <ProdRow name={`Speaking test ${"AB"[k]}`} desc="4 parts · about 12 min · recorded for your teacher"
                  onStart={() => setProd({ kind: "speaking", exam: "aptis", test: true, title: `Aptis Speaking test ${"AB"[k]}`, set: sp, parts: [15, 16, 17, 18] })} />
              </article>
            ))}
          </div>
          <p className="muted px-small">Listening uses recorded voices where we have them, and your device's voice for the rest. Speaking questions are read by your device's voice.</p>
        </>
      )}

      {OTHER.length > 0 && (
      <section className="home-section" aria-labelledby="ex-other-title">
        <h2 id="ex-other-title">More exams</h2>
        <ul className="ex-other">
          {OTHER.map((x) => (
            <li key={x.name}><strong>{x.name}</strong><span>{x.blurb}</span><span className="pill">Coming next</span></li>
          ))}
        </ul>
      </section>
      )}
    </div>
  );
}

function PartList({ exam, rows, title, onPractise }: { exam: ExamConfig; rows: Row[]; title: string; onPractise: (part: number) => void }) {
  const acc = accuracy(rows, exam.parts);
  const suggest = suggestIn(acc);
  const id = `ex-parts-${exam.id}-${title.replace(/\W/g, "")}`;
  return (
    <section className="home-section" aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      {exam.id === "icfes" && suggest !== null && <p className="ex-next"><strong>Your next best step:</strong> {exam.parts[suggest].name}, {exam.parts[suggest].skill.toLowerCase()}.</p>}
      <ol className="ex-parts">
        {exam.parts.map((p, k) => (
          <li key={p.part} className={`ex-part${exam.id === "icfes" && suggest === k ? " is-next" : ""}`}>
            <div className="ex-part-num" aria-hidden="true">{exam.id === "icfes" ? p.part : k + 1}</div>
            <div className="ex-part-body">
              <h3>{exam.id === "icfes" || p.name === p.skill ? p.skill : `${p.name}: ${p.skill}`}</h3>
              <p>{p.task}</p>
              <p className="muted px-small">{p.part >= 11 ? "Marked by your teacher" : <>≈{p.approx} questions</>}{p.options > 0 && <> · options A–{"ABCDEFGHIJ"[p.options - 1]}</>}{acc[k] !== null && <> · your recent score: <strong>{acc[k]}%</strong></>}</p>
            </div>
            <button type="button" className="btn btn-primary btn-sm" onClick={() => onPractise(p.part)}>Practise</button>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ProdRow({ name, desc, onStart }: { name: string; desc: string; onStart: () => void }) {
  return (
    <div className="ex-section">
      <div><strong>{name}</strong><p className="muted px-small">{desc}</p></div>
      <button type="button" className="btn btn-sm btn-primary" onClick={onStart}>Start</button>
    </div>
  );
}

function TestRow({ name, total, minutes, best, extra = "", onStart }: { name: string; total: number; minutes: number; best: number | null; extra?: string; onStart: () => void }) {
  return (
    <div className="ex-section">
      <div>
        <strong>{name}</strong>
        <p className="muted px-small">{total} questions · about {minutes} min{best !== null && <> · best {best}/{total}{extra}</>}</p>
      </div>
      <button type="button" className={`btn btn-sm ${best === null ? "btn-primary" : "btn-ghost"}`} onClick={onStart}>{best === null ? "Start" : "Try again"}</button>
    </div>
  );
}
