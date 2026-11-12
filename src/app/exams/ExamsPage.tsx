import { Fragment, useCallback, useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../lib/auth";
import { useProgress } from "../../lib/progress";
import { Icon } from "../../components/Icon";
import { ICFES, ICFES_BANK, ICFES_MOCKS, countQ } from "../../content/exams/icfes";
import { APTIS, APTIS_BANK, APTIS_TESTS } from "../../content/exams/aptis";
import type { ExamConfig, PartInfo } from "../../content/exams/types";
import { ExamRunner, type ExamRun } from "./ExamRunner";
import "./exams.css";

type Row = { exam: "icfes" | "aptis"; mode: "part" | "section"; ref: string; score: number; total: number; by_part: Record<string, [number, number]>; created_at: string };
type Which = "icfes" | "aptis";

const OTHER = [
  { name: "IELTS", blurb: "For study and work abroad." },
  { name: "TOEFL", blurb: "For universities in the US and beyond." },
];
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
  const [which, setWhich] = useState<Which>(() => { try { return localStorage.getItem(KEY) === "aptis" ? "aptis" : "icfes"; } catch { return "icfes"; } });

  const load = useCallback(async () => {
    const { data } = await supabase.from("exam_results").select("exam, mode, ref, score, total, by_part, created_at").order("created_at", { ascending: false }).limit(500);
    setRows((data as Row[]) ?? []);
  }, []);
  useEffect(() => { void load(); }, [load]);

  function choose(w: Which) { setWhich(w); try { localStorage.setItem(KEY, w); } catch { /* private mode */ } }

  function practise(exam: ExamConfig, part: number) {
    const bank = (exam.id === "icfes" ? ICFES_BANK : APTIS_BANK)[part];
    const recent = rows.filter((r) => r.exam === exam.id && r.mode === "part" && r.ref === String(part)).length;
    const block = bank[(recent + Math.floor(Math.random() * bank.length)) % bank.length];
    const p = exam.parts.find((x) => x.part === part)!;
    setRun({ exam, mode: "part", ref: String(part), title: `${p.name} practice`, blocks: [block] });
  }

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
      ) : (
        <>
          <header className="ex-head">
            <p className="pt-kicker">Exam prep</p>
            <h1>Aptis General</h1>
            <p className="pt-lede">The British Council test many Colombian universities use. Core (grammar and vocabulary), Reading and Listening, each scored out of 50. Learn each part, then try a full practice test.</p>
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
          <p className="muted px-small">Writing and Speaking are coming next. Listening uses recorded voices where we have them, and your device's voice for the rest.</p>
        </>
      )}

      <section className="home-section" aria-labelledby="ex-other-title">
        <h2 id="ex-other-title">More exams</h2>
        <ul className="ex-other">
          {OTHER.map((x) => (
            <li key={x.name}><strong>{x.name}</strong><span>{x.blurb}</span><span className="pill">Coming next</span></li>
          ))}
        </ul>
      </section>
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
            <div className="ex-part-num" aria-hidden="true">{exam.id === "icfes" ? p.part : p.name.replace(/\D/g, "") || p.name[0]}</div>
            <div className="ex-part-body">
              <h3>{exam.id === "icfes" || p.name === p.skill ? p.skill : `${p.name}: ${p.skill}`}</h3>
              <p>{p.task}</p>
              <p className="muted px-small">≈{p.approx} questions{p.options > 0 && <> · options A–{"ABCDEFGHIJ"[p.options - 1]}</>}{acc[k] !== null && <> · your recent score: <strong>{acc[k]}%</strong></>}</p>
            </div>
            <button type="button" className="btn btn-primary btn-sm" onClick={() => onPractise(p.part)}>Practise</button>
          </li>
        ))}
      </ol>
    </section>
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
