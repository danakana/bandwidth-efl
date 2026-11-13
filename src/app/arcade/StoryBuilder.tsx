import { useMemo, useState } from "react";
import type { BandId } from "../../content/bands";
import { storiesFor } from "../../content/stories";
import { EndScreen, GameShell, sfx, type Learnt } from "./GameKit";
import { starsFrom } from "./levels";

/**
 * Story Builder: a choose-your-own-adventure. At each step, pick what you do next. Two choices are good
 * English and push the story different ways; one has a mistake and makes the story stumble.
 * Your choices decide the ending.
 */
export function StoryBuilder({ band, level, onClose, onLevel }: { band: BandId; level: number; onClose: (changed: boolean) => void; onLevel: (n: number) => void }) {
  const story = storiesFor(band)[(level - 1) % 7];
  const [seed, setSeed] = useState(0);
  const [step, setStep] = useState(-1);
  const [bold, setBold] = useState(0);
  const [told, setTold] = useState<string[]>([]);
  const [hearts, setHearts] = useState(3);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [wrong, setWrong] = useState<{ text: string; why: string } | null>(null);
  const [learnt, setLearnt] = useState<Learnt[]>([]);
  const [ending, setEnding] = useState<string | null>(null);
  const [done, setDone] = useState<"won" | "lost" | null>(null);
  const s = story.steps[step];

  // The three cards, shuffled once per step.
  const cards = useMemo(() => {
    if (!s) return [];
    const c = [{ text: s[1], kind: "bold" as const }, { text: s[2], kind: "careful" as const }, { text: s[3], kind: "trap" as const }];
    return c.sort(() => Math.random() - 0.5);
  }, [s, seed]); // eslint-disable-line react-hooks/exhaustive-deps

  function choose(c: (typeof cards)[number]) {
    if (c.kind === "trap") {
      const h = hearts - 1;
      setHearts(h); setCombo(0); setWrong({ text: c.text, why: s[4] }); sfx("bad");
      setLearnt((l) => [...l, { text: c.text, note: s[4] }]);
      if (h <= 0) setTimeout(() => setDone("lost"), 900);
      return;
    }
    const k = combo + 1;
    setCombo(k); setScore((x) => x + 150 * k); sfx("good"); setWrong(null);
    const b = bold + (c.kind === "bold" ? 1 : 0);
    setBold(b);
    setTold((t) => [...t, s[0], c.text]);
    if (step + 1 >= story.steps.length) {
      setEnding(b * 2 > story.steps.length ? story.endBold : story.endCareful);
      sfx("win");
    } else setStep(step + 1);
  }

  const restart = () => { setSeed((x) => x + 1); setStep(-1); setBold(0); setTold([]); setHearts(3); setScore(0); setCombo(0); setWrong(null); setLearnt([]); setEnding(null); setDone(null); };
  const stars = starsFrom(done === "won", hearts);

  return (
    <GameShell game="story" band={band} level={level} hearts={hearts} score={score} combo={combo} onClose={() => onClose(done !== null)} theme="story">
      {done ? (
        <EndScreen game="story" band={band} level={level} stars={stars} score={score} learnt={learnt}
          onNext={() => onLevel(level + 1)} onReplay={restart} onMap={onClose} />
      ) : (
        <article className="sb" aria-labelledby="sb-title">
          <div className="sb-book">
            <div className="sb-art" aria-hidden="true">{story.emoji}</div>
            <h1 id="sb-title" className="sb-title">{story.title}</h1>
            <div className="sb-text" aria-live="polite">
              <p>{story.intro}</p>
              {told.map((t, i) => <p key={i} className={i % 2 ? "sb-you" : ""}>{i % 2 ? `“${t}”` : t}</p>)}
              {s && <p className="sb-now">{s[0]}</p>}
              {ending && <p className="sb-ending">{ending}</p>}
            </div>
          </div>
          {step === -1 ? (
            <button type="button" className="btn btn-primary sb-go" onClick={() => setStep(0)}>Start the story</button>
          ) : ending ? (
            <div className="sb-end">
              <p>{bold * 2 > story.steps.length ? "You took the bold path." : "You took the careful path."} Play again and choose differently to see the other ending!</p>
              <button type="button" className="btn btn-primary" onClick={() => setDone("won")}>See my stars</button>
            </div>
          ) : (
            <>
              <p className="sb-ask">What do you do? <span>Choose a sentence with no mistakes.</span></p>
              <div className="sb-cards" role="group" aria-label="Your choices">
                {cards.map((c) => (
                  <button key={c.text} type="button" className={`sb-card${wrong?.text === c.text ? " is-wrong" : ""}`} disabled={wrong?.text === c.text} onClick={() => choose(c)}>{c.text}</button>
                ))}
              </div>
              <p className="sb-why" role="status">{wrong ? `That sentence has a mistake: ${wrong.why} Choose again.` : " "}</p>
            </>
          )}
        </article>
      )}
    </GameShell>
  );
}
