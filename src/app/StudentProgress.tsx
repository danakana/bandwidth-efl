import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { CHECK_EVERY_DAYS, levelHistory, type LevelPoint } from "../lib/placementApi";
import { loadRetention, type RetentionRow } from "../lib/retentionApi";
import type { AssessmentRow } from "../lib/progressApi";
import { NODES } from "../content/curriculum";
import { LevelTable } from "./JourneyCard";
import { Icon } from "../components/Icon";

type Evidence = { secure: number; mastered: number; review: number; read: number; learnt: number; openMistakes: number; vocabSets: number };
const titleOf = (id: string) => NODES.find((n) => n.id === id)?.title ?? id;
const fmt = (d: string | null) => d ? new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "";

/**
 * Teacher view of one student's real progress: the level measured at every test (placement and 6-weekly checks),
 * Gates, memory checks and the practice evidence behind them.
 */
export function StudentProgress({ studentId, name, onClose }: { studentId: string; name: string; onClose: () => void }) {
  const [history, setHistory] = useState<LevelPoint[] | null>(null);
  const [checks, setChecks] = useState<AssessmentRow[]>([]);
  const [memory, setMemory] = useState<RetentionRow[]>([]);
  const [ev, setEv] = useState<Evidence | null>(null);

  useEffect(() => {
    let live = true;
    void Promise.all([
      levelHistory(studentId),
      supabase.from("assessments").select("*").eq("student_id", studentId).order("created_at", { ascending: false }),
      loadRetention(studentId),
      supabase.from("node_progress").select("state").eq("student_id", studentId),
      supabase.from("library_reads").select("story_id").eq("student_id", studentId).limit(1000),
      supabase.from("my_words").select("word", { count: "exact", head: true }).eq("student_id", studentId).not("learnt_at", "is", null),
      supabase.from("mistakes").select("item_key", { count: "exact", head: true }).eq("student_id", studentId).is("cleared_at", null),
      supabase.from("vocab_results").select("set_id, passed").eq("student_id", studentId),
    ]).then(([h, a, r, n, l, w, m, v]) => {
      if (!live) return;
      setHistory(h);
      setChecks((a.data as AssessmentRow[]) ?? []);
      setMemory(r);
      const states = ((n.data as { state: string }[]) ?? []).map((x) => x.state);
      setEv({
        secure: states.filter((s) => s === "secure").length, mastered: states.filter((s) => s === "mastered").length, review: states.filter((s) => s === "review").length,
        read: new Set(((l.data as { story_id: string }[]) ?? []).map((x) => x.story_id)).size, learnt: w.count ?? 0, openMistakes: m.count ?? 0,
        vocabSets: new Set(((v.data as { set_id: string; passed: boolean }[]) ?? []).filter((x) => x.passed).map((x) => x.set_id)).size,
      });
    });
    return () => { live = false; };
  }, [studentId]);

  const last = history?.length ? history[history.length - 1].attempt.completed_at : null;
  const overdue = last ? Math.floor((Date.now() - new Date(last).getTime()) / 86_400_000) - CHECK_EVERY_DAYS : null;

  return (
    <section className="home-section sp-progress" aria-labelledby="spp-title">
      <header className="spp-head">
        <div>
          <p className="pt-kicker">Student progress</p>
          <h2 id="spp-title">{name}</h2>
        </div>
        <button type="button" className="btn btn-ghost btn-sm" onClick={onClose}><Icon name="x" size={16} /> Close</button>
      </header>

      {!history ? <p className="muted">Loading…</p> : history.length === 0 ? <p className="muted">No placement test yet.</p> : (
        <>
          <LevelTable history={history} caption="Level at each test" />
          <p className="muted spp-note">
            Overall is the lowest of the four skills, the same rule the map uses. Level checks open every 6 weeks.
            {overdue !== null && (overdue >= 0 ? ` The next check has been open for ${overdue} ${overdue === 1 ? "day" : "days"}.` : ` The next one opens in ${-overdue} ${overdue === -1 ? "day" : "days"}.`)}
          </p>
        </>
      )}

      {ev && (
        <ul className="jr-stats spp-ev" aria-label="Practice evidence">
          <li><strong>{ev.mastered}</strong><span>skills Mastered</span></li>
          <li><strong>{ev.secure}</strong><span>skills Secure</span></li>
          <li><strong>{ev.review}</strong><span>skills back in review</span></li>
          <li><strong>{ev.read}</strong><span>texts read</span></li>
          <li><strong>{ev.learnt}</strong><span>words learnt</span></li>
          <li><strong>{ev.vocabSets}</strong><span>Word lab sets passed</span></li>
          <li><strong>{ev.openMistakes}</strong><span>mistakes still open</span></li>
        </ul>
      )}

      <h3>Memory checks</h3>
      {memory.length === 0 ? <p className="muted">A memory check is scheduled 3 weeks after each Gate you confirm.</p> : (
        <ul className="spp-list">
          {memory.map((r) => (
            <li key={r.id}>
              <strong>{r.band}</strong>{" "}
              {r.done_at
                ? <>{Math.round((Number(r.correct) / Number(r.total)) * 100)}% on {fmt(r.done_at)}{r.slipped.length > 0 && <> · slipped: {r.slipped.map(titleOf).join(", ")}</>}</>
                : <span className="muted">due {fmt(r.due_at)}</span>}
            </li>
          ))}
        </ul>
      )}

      <h3>Midpoints and Gates</h3>
      {checks.length === 0 ? <p className="muted">None yet.</p> : (
        <ul className="spp-list">
          {checks.map((a) => (
            <li key={a.id}><strong>{a.band} {a.kind === "gate" ? "Gate" : "Midpoint"}</strong> · {fmt(a.created_at)} · reading {a.reading_pct}%, listening {a.listening_pct}% · {STATUS[a.status]}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

const STATUS: Record<AssessmentRow["status"], string> = { failed: "not passed", passed: "passed", awaiting_teacher: "waiting for you", confirmed: "confirmed", returned: "returned with a note" };
