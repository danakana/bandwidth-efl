import { useState } from "react";
import type { BandId } from "../../content/bands";
import { assessmentFor, bogotaDay, readiness } from "../../content/assessments";
import type { BandAssessment } from "../../content/assessments/types";
import { useProgress } from "../../lib/progress";
import type { AssessmentRow } from "../../lib/progressApi";
import { Icon } from "../../components/Icon";
import { AssessmentPlayer } from "./AssessmentPlayer";

/**
 * The band's two four-skill checks. Midpoint: half the skills Secure. Gate: most skills Mastered, Midpoint passed,
 * then the teacher confirms writing and speaking. Teachers (no progress) get a preview they can try.
 */
export function BandChecks({ band, next }: { band: BandId; next?: BandId }) {
  const progress = useProgress();
  const preview = progress === null;
  const mid = assessmentFor(band, "midpoint");
  const gate = assessmentFor(band, "gate");
  const [playing, setPlaying] = useState<BandAssessment | null>(null);
  if (!mid || !gate) return null;

  const rows = (kind: "midpoint" | "gate") => (progress?.assessments ?? []).filter((a) => a.band === band && a.kind === kind);
  const latest = (kind: "midpoint" | "gate"): AssessmentRow | undefined => rows(kind)[0];
  const today = bogotaDay(new Date());
  const triedToday = (kind: "midpoint" | "gate") => { const l = latest(kind); return !!l && bogotaDay(l.created_at) === today; };
  const midPassed = rows("midpoint").some((a) => a.status === "passed");

  const card = (kind: "midpoint" | "gate", test: BandAssessment) => {
    const r = readiness(band, kind, progress?.nodes ?? {});
    const last = latest(kind);
    let state: { tag: string; cls?: string; text: string; go?: string } ;
    if (preview) state = { tag: "Teacher preview", text: "Try it as a student would. Nothing is saved.", go: "Try it" };
    else if (kind === "midpoint" && midPassed) state = { tag: "Passed", cls: "is-good", text: "Midpoint done. Now aim for the Gate." };
    else if (kind === "gate" && last?.status === "confirmed") state = { tag: "Passed", cls: "is-good", text: `${band} is complete. ${next ?? "The next band"} is open.` };
    else if (kind === "gate" && last?.status === "awaiting_teacher") state = { tag: "With your teacher", cls: "is-wait", text: "You passed. Your teacher is reading and listening before confirming." };
    else if (kind === "gate" && !midPassed) state = { tag: "Locked", text: "Pass the Midpoint first." };
    else if (!r.ready) state = { tag: "Locked", text: `${r.need - r.have} more ${r.need - r.have === 1 ? "skill" : "skills"} ${kind === "midpoint" ? "Secure" : "Mastered"} to open it.` };
    else if (triedToday(kind)) state = { tag: "Tomorrow", cls: "is-wait", text: "You've had today's try. It opens again tomorrow." };
    else state = { tag: "Open", cls: "is-good", text: last ? "Ready for another try." : "You're ready.", go: `Start the ${kind === "gate" ? "Gate" : "Midpoint"}` };

    return (
      <section className={`bcheck is-${kind}`} aria-labelledby={`chk-${kind}`}>
        <span className={`bcheck-state ${state.cls ?? ""}`}>{state.tag}</span>
        <h2 id={`chk-${kind}`}><Icon name={kind === "gate" ? "trophy" : "star"} size={24} /> {test.title}{kind === "gate" && next ? ` → ${next}` : ""}</h2>
        <p className="muted">
          {kind === "midpoint"
            ? <>Reading, listening, writing and speaking. Opens when <strong>half</strong> of {band}'s skills are Secure.</>
            : <>All four skills again, harder. Opens when <strong>80%</strong> of {band}'s skills are Mastered and the Midpoint is passed. Your teacher confirms writing and speaking.</>}
        </p>
        {!preview && (
          <>
            <div className="bcheck-meter" role="img" aria-label={`${Math.min(r.have, r.need)} of ${r.need} skills ready`}>
              {Array.from({ length: r.need }, (_, i) => <span key={i} className={i < r.have ? "is-on" : ""} />)}
            </div>
            <p className="px-small">{Math.min(r.have, r.need)} of {r.need} skills {kind === "midpoint" ? "Secure" : "Mastered"}</p>
          </>
        )}
        <p>{state.text}</p>
        {last?.status === "returned" && last.teacher_note && (
          <p className="bcheck-note"><strong>From your teacher:</strong> {last.teacher_note}</p>
        )}
        {last && last.status === "failed" && <p className="muted px-small">Last try: reading {last.reading_pct}%, listening {last.listening_pct}%.</p>}
        {state.go && <button type="button" className={kind === "gate" ? "btn btn-primary" : "btn btn-primary"} onClick={() => setPlaying(test)}>{state.go}</button>}
      </section>
    );
  };

  return (
    <div className="bchecks">
      {card("midpoint", mid)}
      {card("gate", gate)}
      {playing && <AssessmentPlayer test={playing} preview={preview} onClose={(changed) => { setPlaying(null); if (changed) void progress?.refresh(); }} />}
    </div>
  );
}
