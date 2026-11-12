import { useEffect, useState } from "react";
import { supabase, type ClassRow } from "../../lib/supabase";
import { ICFES_MOCKS, ICFES_PARTS } from "../../content/exams/icfes";

type Row = { student_id: string; mode: "part" | "section"; ref: string; score: number; total: number; by_part: Record<string, [number, number]>; created_at: string };
type Student = { id: string; username: string | null; display_name: string | null; class_id: string | null };

/** Recent accuracy for one part: the last five results that include it. */
function partPct(rows: Row[], part: number): number | null {
  const hits = rows.filter((r) => r.by_part[String(part)]).slice(0, 5);
  const [c, t] = hits.reduce(([a, b], r) => [a + r.by_part[String(part)][0], b + r.by_part[String(part)][1]], [0, 0]);
  return t ? Math.round((c / t) * 100) : null;
}
const tone = (p: number | null) => (p === null ? "" : p >= 70 ? " is-good" : p >= 50 ? " is-mid" : " is-low");

/** Teacher overview of ICFES practice: each student's recent score per part, best mock, and the class's weakest parts. */
export function IcfesOverview({ classes, students }: { classes: ClassRow[]; students: Student[] }) {
  const [rows, setRows] = useState<Row[]>([]);
  const [cls, setCls] = useState("");

  useEffect(() => {
    let live = true;
    void supabase.from("exam_results").select("student_id, mode, ref, score, total, by_part, created_at")
      .eq("exam", "icfes").order("created_at", { ascending: false }).limit(2000)
      .then(({ data }) => { if (live) setRows((data as Row[]) ?? []); });
    return () => { live = false; };
  }, []);

  if (!rows.length) return null;
  const inClass = students.filter((s) => !cls || s.class_id === cls);
  const active = inClass.filter((s) => rows.some((r) => r.student_id === s.id));
  const groupRows = rows.filter((r) => active.some((s) => s.id === r.student_id));
  const groupPct = ICFES_PARTS.map((p) => partPct(groupRows, p.part));
  const weakest = groupPct.map((p, k) => ({ p, k })).filter((x) => x.p !== null).sort((a, b) => a.p! - b.p!).slice(0, 2);

  const bestMock = (id: string) => {
    let best: number | null = null;
    for (const m of ICFES_MOCKS) {
      const s = m.sections.map((sec) => rows.filter((r) => r.student_id === id && r.ref === sec.id).reduce<number | null>((b, r) => (b === null || r.score > b ? r.score : b), null));
      if (s.every((x) => x !== null)) best = Math.max(best ?? 0, (s[0] ?? 0) + (s[1] ?? 0));
    }
    return best;
  };

  return (
    <section className="home-section" aria-labelledby="icfes-ov-title">
      <h2 id="icfes-ov-title">ICFES practice</h2>
      <p className="muted">Recent score for each part (last five tries), and the best full mock out of 55. Only you see this.</p>
      {classes.length > 1 && (
        <label className="pw-class">
          <span className="visually-hidden">Class</span>
          <select value={cls} onChange={(e) => setCls(e.target.value)}>
            <option value="">All classes</option>
            {classes.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </label>
      )}
      {weakest.length > 0 && (
        <p className="ex-next"><strong>Group focus:</strong> {weakest.map((w) => `${ICFES_PARTS[w.k].name} (${ICFES_PARTS[w.k].skill.toLowerCase()}, ${w.p}%)`).join(" and ")}.</p>
      )}
      {active.length === 0 ? <p className="muted">No ICFES practice in this class yet.</p> : (
        <div className="table-wrap">
          <table className="roster ic-table">
            <thead>
              <tr>
                <th scope="col">Student</th>
                {ICFES_PARTS.map((p) => <th key={p.part} scope="col" title={p.skill}><abbr title={p.skill}>P{p.part}</abbr></th>)}
                <th scope="col">Best mock</th>
                <th scope="col">Last practice</th>
              </tr>
            </thead>
            <tbody>
              <tr className="ic-group">
                <th scope="row">Group</th>
                {groupPct.map((p, k) => <td key={k} className={`ic-cell${tone(p)}`}>{p === null ? "–" : `${p}%`}</td>)}
                <td /><td />
              </tr>
              {active.map((s) => {
                const mine = rows.filter((r) => r.student_id === s.id);
                const bm = bestMock(s.id);
                return (
                  <tr key={s.id}>
                    <th scope="row">{s.display_name ?? s.username}</th>
                    {ICFES_PARTS.map((p) => { const v = partPct(mine, p.part); return <td key={p.part} className={`ic-cell${tone(v)}`}>{v === null ? "–" : `${v}%`}</td>; })}
                    <td>{bm === null ? "–" : `${bm}/55`}</td>
                    <td>{new Date(mine[0].created_at).toLocaleDateString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <p className="muted px-small">P1 vocabulary · P2 signs · P3 conversations · P4 grammar · P5 reading for detail · P6 reading between the lines · P7 grammar and vocabulary. Green 70%+, yellow 50–69%, orange under 50%.</p>
    </section>
  );
}
