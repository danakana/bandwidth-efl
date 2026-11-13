import { useEffect, useState } from "react";
import { BANDS } from "../content/bands";
import { NODES } from "../content/curriculum";
import { readiness } from "../content/assessments";
import { STEP_NAMES } from "../content/practice/types";
import { useProgress } from "../lib/progress";
import { nodeView } from "../lib/progressApi";
import { loadMistakes, today } from "../lib/mistakesApi";
import { hrefFor } from "../lib/route";
import { TREES } from "./map/trees";
import { Icon } from "../components/Icon";
import { LIBRARY, minutesFor } from "../content/library";
import { supabase } from "../lib/supabase";
import { useAuth } from "../lib/auth";
import { loadWords } from "../lib/wordsApi";
import { setsFor } from "../content/vocab";

type Plan = { id: string; title: string; detail: string; minutes: number; href?: string; onClick?: () => void };

/**
 * The goal is always visible: the student's CEFR band, the next one, how far they are, and the next milestone.
 * Below it, a short plan for today that puts the most useful work first.
 */
export function GoalCard({ start, es, onFixMistakes }: { start: number; es: boolean; onFixMistakes: () => void }) {
  const progress = useProgress();
  const { profile } = useAuth();
  const [due, setDue] = useState(0);
  const [read, setRead] = useState<Set<string>>(new Set());
  const [labDone, setLabDone] = useState<Set<string> | null>(null);
  const [wordsDue, setWordsDue] = useState(0);
  useEffect(() => {
    let live = true;
    void loadWords().then((w) => { if (live) setWordsDue(w.filter((x) => !x.learnt_at && x.next_due <= today()).length); });
    return () => { live = false; };
  }, [progress?.stats.xp]);
  useEffect(() => {
    let live = true;
    void supabase.from("vocab_results").select("set_id").eq("passed", true).limit(500).then(({ data }) => { if (live) setLabDone(new Set(((data as { set_id: string }[]) ?? []).map((r) => r.set_id))); });
    void supabase.from("library_reads").select("story_id").limit(500).then(({ data }) => { if (live) setRead(new Set(((data as { story_id: string }[]) ?? []).map((r) => r.story_id))); });
    return () => { live = false; };
  }, [progress?.stats.xp]);
  useEffect(() => {
    let live = true;
    void loadMistakes().then((m) => { if (live) setDue(m.filter((x) => x.next_due <= today()).length); });
    return () => { live = false; };
  }, [progress?.stats.xp]);

  if (!progress?.loaded) return null;
  const band = BANDS[start];
  const next = BANDS[start + 1];
  const nodes = progress.nodes;
  const mine = NODES.filter((n) => n.band === band.id);
  const views = mine.map((n) => ({ n, v: nodeView(nodes[n.id], false), p: nodes[n.id] }));
  const secure = views.filter((x) => x.v === "secure" || x.v === "mastered" || x.v === "check").length;
  const mastered = views.filter((x) => x.p?.state === "mastered").length;
  const mid = readiness(band.id, "midpoint", nodes);
  const gate = readiness(band.id, "gate", nodes);
  const midPassed = progress.assessments.some((a) => a.band === band.id && a.kind === "midpoint" && a.status === "passed");
  const gatePending = progress.assessments.some((a) => a.band === band.id && a.kind === "gate" && a.status === "awaiting_teacher");

  // The next milestone on the road to the next band.
  const milestone = gatePending ? "Your Gate is with your teacher. As soon as they confirm it, the next band opens."
    : midPassed && gate.ready ? "Your Gate is open. Pass it to move up a band."
    : midPassed ? `Gate: ${gate.need - gate.have} more ${gate.need - gate.have === 1 ? "skill" : "skills"} Mastered to open it.`
    : mid.ready ? "Your Midpoint check is open. Take it on your band page."
    : `Midpoint: ${mid.need - mid.have} more ${mid.need - mid.have === 1 ? "skill" : "skills"} Secure to open it.`;

  // Today's plan: mistakes first (they're the fastest gains), then due checks, then the next new step, then something fun.
  const plan: Plan[] = [];
  if (due > 0) plan.push({ id: "mistakes", title: `Fix ${Math.min(due, 10)} mistakes`, detail: "Questions you got wrong, back at the right time.", minutes: 4, onClick: onFixMistakes });
  if (wordsDue > 0) plan.push({ id: "words", title: `Review ${Math.min(wordsDue, 15)} of your words`, detail: "Words you saved while reading. Remember them before you look.", minutes: 3, onClick: () => document.getElementById("wd-start")?.click() });
  const check = views.find((x) => x.v === "check");
  if (check) plan.push({ id: "check", title: `Skill check: ${check.n.title}`, detail: "A quick check on a different day makes it stick.", minutes: 2, href: hrefFor(band.id, check.n.tree) });
  const going = views.filter((x) => x.p && x.p.steps_passed > 0 && x.p.steps_passed < 6).sort((a, b) => b.p!.steps_passed - a.p!.steps_passed)[0];
  const treeLoad = (t: string) => views.filter((x) => x.n.tree === t && (x.v === "secure" || x.v === "mastered")).length;
  const fresh = [...TREES].sort((a, b) => treeLoad(a.id) - treeLoad(b.id))
    .map((t) => views.find((x) => x.n.tree === t.id && x.v === "new")).find(Boolean);
  const step = going ?? fresh;
  if (step) {
    const s = (step.p?.steps_passed ?? 0) + 1;
    plan.push({ id: "step", title: `${going ? "Continue" : "Start"}: ${step.n.title}`, detail: `Step ${s} · ${STEP_NAMES[s - 1]}`, minutes: 5, href: hrefFor(band.id, step.n.tree) });
  }
  // Reading at your level, about something you like: input is how a language grows.
  const unread = LIBRARY.filter((s) => s.band === band.id && !read.has(s.id))
    .sort((a, b) => Number(profile?.universes.includes(b.universe)) - Number(profile?.universes.includes(a.universe)))[0];
  const labSet = labDone ? setsFor(band.id).find((x) => !labDone.has(x.id)) : undefined;
  if (labSet) plan.push({ id: "lab", title: `Word lab: ${labSet.topic}`, detail: `Ten core ${band.id} words. Learn them, then practise.`, minutes: 6, href: `#app/words/${labSet.id}` });
  if (unread) plan.push({ id: "read", title: `Read: ${unread.title}`, detail: unread.blurb, minutes: minutesFor(unread) + 2, href: `#app/library/${unread.id}` });
  if (Object.values(nodes).some((x) => x.steps_passed > 0)) plan.push({ id: "fun", title: "One arcade game", detail: "Quick review of skills you've already passed, against the clock.", minutes: 2, href: "#app/arcade" });
  const minutes = plan.slice(0, 4).reduce((n, p) => n + p.minutes, 0);

  return (
    <section className="goal" aria-labelledby="goal-title" style={{ ["--fill" as string]: band.fill, ["--tint" as string]: band.tint }}>
      <div className="goal-top">
        <div className="goal-bands" aria-hidden="true">
          <span className="goal-band is-now">{band.id}</span>
          {next && <><Icon name="arrow" size={20} /><span className="goal-band">{next.id}</span></>}
        </div>
        <div>
          <p className="pt-kicker">Your goal</p>
          <h2 id="goal-title">{next ? `Reach ${next.id}` : "Master C2"}</h2>
          <p className="goal-can">Finish {band.id} and you'll be able to {band.canDo.charAt(0).toLowerCase() + band.canDo.slice(1)}</p>
          {es && <p lang="es" className="es">Tu meta es subir de nivel. Cada habilidad que dominas te acerca.</p>}
        </div>
      </div>
      <div className="goal-meter">
        <div className="goal-bar" role="img" aria-label={`${secure} of ${mine.length} ${band.id} skills Secure, ${mastered} Mastered`}>
          <span className="goal-bar-secure" style={{ width: `${(secure / mine.length) * 100}%` }} />
          <span className="goal-bar-mastered" style={{ width: `${(mastered / mine.length) * 100}%` }} />
          <span className="goal-mark" style={{ left: "50%" }} title="Midpoint" />
          <span className="goal-mark" style={{ left: "80%" }} title="Gate" />
        </div>
        <p className="goal-meter-text"><strong>{secure}</strong> of {mine.length} {band.id} skills Secure · <strong>{mastered}</strong> Mastered</p>
        <p className="goal-next"><Icon name="trophy" size={16} /> {milestone}</p>
      </div>
      <div className="goal-plan">
        <h3>Today's plan <span className="muted">· about {minutes} minutes</span>{progress.stats.streak > 1 && <span className="pill goal-streak"><Icon name="flame" size={14} /> {progress.stats.streak}-day streak</span>}</h3>
        <ol>
          {plan.slice(0, 4).map((p) => (
            <li key={p.id}>
              {p.href
                ? <a href={p.href} className="goal-task"><strong>{p.title}</strong><span>{p.detail}</span><small>{p.minutes} min</small></a>
                : <button type="button" className="goal-task" onClick={p.onClick}><strong>{p.title}</strong><span>{p.detail}</span><small>{p.minutes} min</small></button>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

