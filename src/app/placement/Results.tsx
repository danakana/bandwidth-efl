import { motion } from "motion/react";
import { BANDS } from "../../content/bands";
import type { Attempt, Submission } from "../../lib/placementApi";

const bandInfo = (id: string | null) => BANDS.find((b) => b.id === id) ?? null;

type Tile = { skill: string; band: string | null; note: string; waiting?: boolean };

/** A student's four skill bands from their latest placement. */
export function Results({ attempt, submissions, es }: { attempt: Attempt; submissions: Submission[]; es: boolean }) {
  const writing = submissions.find((s) => s.skill === "writing");
  const speaking = submissions.find((s) => s.skill === "speaking");

  const tiles: Tile[] = [
    { skill: "Reading", band: attempt.reading_band, note: "Provisional, from the test" },
    { skill: "Listening", band: attempt.listening_band, note: "Provisional, from the test" },
    writing?.teacher_band
      ? { skill: "Writing", band: writing.teacher_band, note: "Checked by your teacher" }
      : { skill: "Writing", band: null, note: writing ? "Your teacher is reading it" : "Not done yet", waiting: !!writing },
    speaking?.teacher_band
      ? { skill: "Speaking", band: speaking.teacher_band, note: "Checked by your teacher" }
      : { skill: "Speaking", band: null, note: speaking ? "Your teacher is listening to it" : "Skipped. Do it with your teacher", waiting: !!speaking },
  ];

  // The lowest measured band is where the map starts: it's what the student can do in every skill.
  const measured = tiles.map((t) => BANDS.findIndex((b) => b.id === t.band)).filter((i) => i >= 0);
  const start = measured.length ? BANDS[Math.min(...measured)] : null;
  const feedback = [writing, speaking].filter((s): s is Submission => !!s?.teacher_feedback);

  return (
    <section className="res" aria-labelledby="res-title">
      <div>
        <h2 id="res-title">Your placement</h2>
        <p className="muted">
          {start
            ? <>You'll start at <strong>{start.id}</strong>. {start.canDo}</>
            : "Your bands will appear here."}
        </p>
        {es && <p lang="es" className="es">Tu nivel en cada habilidad. Tu profe revisa la escritura y la expresión oral.</p>}
      </div>
      <div className="res-grid">
        {tiles.map((t, i) => {
          const b = bandInfo(t.band);
          return (
            <motion.div
              key={t.skill}
              className="res-tile"
              style={{ ["--tile" as string]: b?.fill ?? "var(--cerulean)" }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
            >
              <span className="res-skill">{t.skill}</span>
              {b
                ? <span className="res-band">{b.id}</span>
                : <span className="res-band is-wait">{t.waiting ? "Waiting for review" : "Unmeasured"}</span>}
              <span className="res-note">{t.note}</span>
            </motion.div>
          );
        })}
      </div>
      {feedback.map((s) => (
        <div key={s.id} className="res-feedback">
          <h3>Teacher feedback on your {s.skill}</h3>
          <p>{s.teacher_feedback}</p>
        </div>
      ))}
    </section>
  );
}
