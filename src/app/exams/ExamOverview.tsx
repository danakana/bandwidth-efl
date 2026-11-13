import { useEffect, useState } from "react";
import { supabase, type ClassRow } from "../../lib/supabase";
import { APTIS, APTIS_TESTS } from "../../content/exams/aptis";
import { IELTS, IELTS_TESTS, ieltsBand } from "../../content/exams/ielts";
import { TOEFL, TOEFL_TESTS, toeflBand } from "../../content/exams/toefl";
import { countQ } from "../../content/exams/icfes";
import type { ExamBlock, ExamConfig } from "../../content/exams/types";

type ExamId = "aptis" | "ielts" | "toefl";
type Row = { student_id: string; exam: ExamId; mode: "part" | "section"; ref: string; score: number; total: number; by_part: Record<string, [number, number]>; created_at: string };
type Student = { id: string; username: string | null; display_name: string | null; class_id: string | null };

/** How each exam reports a full test: Aptis out of 50, IELTS a band, TOEFL a rough score out of 6. */
const EXAMS: Record<ExamId, { config: ExamConfig; tests: { id: string; name: string; blocks: ExamBlock[] }[]; show: (ref: string, score: number, total: number) => string }> = {
  aptis: { config: APTIS, tests: APTIS_TESTS, show: (_r, s, t) => `${Math.round((s / t) * 50)}/50` },
  ielts: { config: IELTS, tests: IELTS_TESTS, show: (r, s, t) => `band ${ieltsBand(r, s, t)}` },
  toefl: { config: TOEFL, tests: TOEFL_TESTS, show: (_r, s, t) => `≈${toeflBand(s, t)}/6` },
};

function partPct(rows: Row[], part: number): number | null {
  const hits = rows.filter((r) => r.by_part?.[String(part)]).slice(0, 5);
  const [c, t] = hits.reduce(([a, b], r) => [a + r.by_part[String(part)][0], b + r.by_part[String(part)][1]], [0, 0]);
  return t ? Math.round((c / t) * 100) : null;
}
const tone = (p: number | null) => (p === null ? "" : p >= 70 ? " is-good" : p >= 50 ? " is-mid" : " is-low");

/** Teacher overview of Aptis, IELTS and TOEFL practice: recent score per part and best full test. Only exams with practice appear. */
export function ExamOverview({ classes, students }: { classes: ClassRow[]; students: Student[] }) {
  const [rows, setRows] = useState<Row[]>([]);
  const [cls, setCls] = useState("");
  const [pick, setPick] = useState<ExamId | null>(null);

  useEffect(() => {
    let live = true;
    void supabase.from("exam_results").select("student_id, exam, mode, ref, score, total, by_part, created_at")
      .in("exam", ["aptis", "ielts", "toefl"]).in("mode", ["part", "section"]).order("created_at", { ascending: false }).limit(3000)
      .then(({ data }) => { if (live) setRows((data as Row[]) ?? []); });
    return () => { live = false; };
  }, []);

  const used = (["aptis", "ielts", "toefl"] as ExamId[]).filter((e) => rows.some((r) => r.exam === e));
  if (!used.length) return null;
  const exam = pick && used.includes(pick) ? pick : used[0];
  const { config, tests, show } = EXAMS[exam];
  const parts = config.parts.filter((p) => p.part < 11);
  const mine = rows.filter((r) => r.exam === exam);
  const inClass = students.filter((s) => !cls || s.class_id === cls);
  const active = inClass.filter((s) => mine.some((r) => r.student_id === s.id));
  const groupRows = mine.filter((r) => active.some((s) => s.id === r.student_id));
  const groupPct = parts.map((p) => partPct(groupRows, p.part));
  const weakest = groupPct.map((p, k) => ({ p, k })).filter((x) => x.p !== null).sort((a, b) => a.p! - b.p!).slice(0, 2);
  const best = (id: string, ref: string) => {
    const r = mine.filter((x) => x.student_id === id && x.ref === ref);
    if (!r.length) return null;
    const top = r.reduce((a, b) => (b.score / b.total > a.score / a.total ? b : a));
    return show(ref, top.score, top.total);
  };
  const totalOf = (t: { blocks: ExamBlock[] }) => t.blocks.reduce((n, b) => n + countQ(b), 0);

  return (
    <section className="home-section" aria-labelledby="exam-ov-title">
      <h2 id="exam-ov-title">International exam practice</h2>
      <p className="muted">Recent score for each part (last five tries) and the best full practice test. Writing and Speaking are in your Practice work inbox. Only you see this.</p>
      <div className="ov-controls">
        {used.length > 1 && (
          <div role="group" aria-label="Exam" className="ex-seg">
            {used.map((e) => <button key={e} type="button" aria-pressed={exam === e} onClick={() => setPick(e)}>{EXAMS[e].config.label}</button>)}
          </div>
        )}
        {classes.length > 1 && (
          <label className="pw-class">
            <span className="visually-hidden">Class</span>
            <select value={cls} onChange={(e) => setCls(e.target.value)}>
              <option value="">All classes</option>
              {classes.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </label>
        )}
      </div>
      {weakest.length > 0 && (
        <p className="ex-next"><strong>Group focus:</strong> {weakest.map((w) => `${parts[w.k].name} (${w.p}%)`).join(" and ")}.</p>
      )}
      {active.length === 0 ? <p className="muted">No {config.label} practice in this class yet.</p> : (
        <div className="table-wrap">
          <table className="roster ic-table">
            <thead>
              <tr>
                <th scope="col">Student</th>
                {parts.map((p, k) => <th key={p.part} scope="col"><abbr title={`${p.name}: ${p.skill}`}>{p.group?.[0]}{parts.filter((x, j) => j < k && x.group === p.group).length + 1}</abbr></th>)}
                {tests.map((t) => <th key={t.id} scope="col">{t.name}</th>)}
                <th scope="col">Last practice</th>
              </tr>
            </thead>
            <tbody>
              <tr className="ic-group">
                <th scope="row">Group</th>
                {groupPct.map((p, k) => <td key={k} className={`ic-cell${tone(p)}`}>{p === null ? "–" : `${p}%`}</td>)}
                {tests.map((t) => <td key={t.id} />)}
                <td />
              </tr>
              {active.map((s) => {
                const r = mine.filter((x) => x.student_id === s.id);
                return (
                  <tr key={s.id}>
                    <th scope="row">{s.display_name ?? s.username}</th>
                    {parts.map((p) => { const v = partPct(r, p.part); return <td key={p.part} className={`ic-cell${tone(v)}`}>{v === null ? "–" : `${v}%`}</td>; })}
                    {tests.map((t) => <td key={t.id} title={`${totalOf(t)} questions`}>{best(s.id, t.id) ?? "–"}</td>)}
                    <td>{new Date(r[0].created_at).toLocaleDateString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <p className="muted px-small">
        {parts.map((p, k) => `${p.group?.[0]}${parts.filter((x, j) => j < k && x.group === p.group).length + 1} ${p.name.toLowerCase()}`).join(" · ")}. Green 70%+, yellow 50–69%, orange under 50%.
        {exam === "toefl" && " TOEFL scores are a rough guide."}
      </p>
    </section>
  );
}
