import { useCallback, useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../lib/auth";
import { useProgress } from "../../lib/progress";
import { Icon } from "../../components/Icon";
import { ICFES_BANK, ICFES_MOCKS, ICFES_PARTS, countQ } from "../../content/exams/icfes";
import { ExamRunner, type ExamRun } from "./ExamRunner";
import "./exams.css";

type Row = { mode: "part" | "section"; ref: string; score: number; total: number; by_part: Record<string, [number, number]>; created_at: string };

const OTHER = [
  { name: "IELTS", blurb: "For study and work abroad." },
  { name: "TOEFL", blurb: "For universities in the US and beyond." },
  { name: "Aptis", blurb: "British Council test used by many Colombian universities." },
];

/** Exam prep: ICFES Saber 11 part trainers and mock exams. Other exams are listed as coming next. */
export function ExamsPage() {
  const { profile } = useAuth();
  const progress = useProgress();
  const es = !!profile?.spanish_help;
  const [rows, setRows] = useState<Row[]>([]);
  const [run, setRun] = useState<ExamRun | null>(null);

  const load = useCallback(async () => {
    const { data } = await supabase.from("exam_results").select("mode, ref, score, total, by_part, created_at").eq("exam", "icfes").order("created_at", { ascending: false }).limit(300);
    setRows((data as Row[]) ?? []);
  }, []);
  useEffect(() => { void load(); }, [load]);

  // Accuracy per part over the last results that include it (practice and mocks).
  const acc = ICFES_PARTS.map((p) => {
    const hits = rows.filter((r) => r.by_part[String(p.part)]).slice(0, 5);
    const [c, t] = hits.reduce(([a, b], r) => [a + r.by_part[String(p.part)][0], b + r.by_part[String(p.part)][1]], [0, 0]);
    return t ? Math.round((c / t) * 100) : null;
  });
  const untried = acc.findIndex((a) => a === null);
  const lowest = acc.reduce<number | null>((best, a, k) => (a === null ? best : best === null || a < (acc[best] ?? 101) ? k : best), null);
  const suggest = untried >= 0 ? untried : lowest;
  const best = (ref: string) => { const r = rows.filter((x) => x.ref === ref); return r.length ? Math.max(...r.map((x) => x.score)) : null; };

  function practise(part: number) {
    const bank = ICFES_BANK[part];
    const recent = rows.filter((r) => r.mode === "part" && r.ref === String(part)).length;
    const block = bank[(recent + Math.floor(Math.random() * bank.length)) % bank.length];
    setRun({ mode: "part", ref: String(part), title: `${ICFES_PARTS[part - 1].name} practice`, blocks: [block] });
  }

  if (run) {
    return <ExamRunner run={run} onClose={(changed) => { setRun(null); if (changed) { void load(); void progress?.refresh(); } }} />;
  }

  return (
    <div className="ex-page">
      <nav className="crumbs" aria-label="Breadcrumb"><a href="#app">Map</a><span aria-hidden="true">/</span><span aria-current="page">Exams</span></nav>
      <header className="ex-head">
        <p className="pt-kicker">Exam prep</p>
        <h1>ICFES Saber 11 English</h1>
        <p className="pt-lede">55 questions in 7 parts. Each part has its own method. Learn the method, practise the part, then try a full mock.</p>
        {es && <p lang="es" className="es">Practica cada parte con su método y luego haz un simulacro completo.</p>}
      </header>

      <section className="home-section" aria-labelledby="ex-parts-title">
        <h2 id="ex-parts-title">The 7 parts</h2>
        {suggest !== null && <p className="ex-next"><strong>Your next best step:</strong> {ICFES_PARTS[suggest].name}, {ICFES_PARTS[suggest].skill.toLowerCase()}.</p>}
        <ol className="ex-parts">
          {ICFES_PARTS.map((p, k) => (
            <li key={p.part} className={`ex-part${suggest === k ? " is-next" : ""}`}>
              <div className="ex-part-num" aria-hidden="true">{p.part}</div>
              <div className="ex-part-body">
                <h3>{p.skill}</h3>
                <p>{p.task}</p>
                <p className="muted px-small">≈{p.approx} questions · options A–{"ABCDEFG"[p.options - 1]}{acc[k] !== null && <> · your recent score: <strong>{acc[k]}%</strong></>}</p>
              </div>
              <button type="button" className="btn btn-primary btn-sm" onClick={() => practise(p.part)}>Practise</button>
            </li>
          ))}
        </ol>
      </section>

      <section className="home-section" aria-labelledby="ex-mock-title">
        <h2 id="ex-mock-title">Mock exams</h2>
        <p className="muted">A full 55-question test in two sections. Do them on different days if you like. Answers appear at the end.</p>
        <div className="ex-mocks">
          {ICFES_MOCKS.map((m) => {
            const scores = m.sections.map((s) => best(s.id));
            const totals = m.sections.map((s) => s.blocks.reduce((n, b) => n + countQ(b), 0));
            const both = scores.every((x) => x !== null);
            return (
              <article key={m.id} className="class-card ex-mock">
                <h3>{m.name}</h3>
                {m.sections.map((s, k) => (
                  <div key={s.id} className="ex-section">
                    <div>
                      <strong>{s.name}</strong>
                      <p className="muted px-small">{totals[k]} questions · about {s.minutes} min{scores[k] !== null && <> · best {scores[k]}/{totals[k]}</>}</p>
                    </div>
                    <button type="button" className={`btn btn-sm ${scores[k] === null ? "btn-primary" : "btn-ghost"}`}
                      onClick={() => setRun({ mode: "section", ref: s.id, title: `${m.name} · ${s.name}`, blocks: s.blocks, minutes: s.minutes })}>
                      {scores[k] === null ? "Start" : "Try again"}
                    </button>
                  </div>
                ))}
                {both && (
                  <p className="ex-total"><Icon name="trophy" size={18} /> Best total: <strong>{(scores[0] ?? 0) + (scores[1] ?? 0)} / 55</strong></p>
                )}
              </article>
            );
          })}
        </div>
      </section>

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
