import { useCallback, useEffect, useState } from "react";
import { loadWords, reviewWord, type MyWord } from "../../lib/wordsApi";
import { today } from "../../lib/mistakesApi";
import { useProgress } from "../../lib/progress";
import { Icon } from "../../components/Icon";
import "./library.css";

/** Blank out the word in its example so the student has to remember it. */
function blank(example: string, word: string) {
  const re = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\w*`, "i");
  return example.replace(re, "_____");
}

/**
 * My words: words saved while reading come back after 1, 3, 7, 16 and 35 days.
 * The student sees the meaning and the sentence with a gap, tries to remember the word, then checks.
 */
export function WordsCard({ es }: { es: boolean }) {
  const progress = useProgress();
  const [words, setWords] = useState<MyWord[] | null>(null);
  const [queue, setQueue] = useState<MyWord[] | null>(null);
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(false);
  const [tally, setTally] = useState({ known: 0, learnt: 0 });

  const load = useCallback(async () => { setWords(await loadWords()); }, []);
  useEffect(() => { void load(); }, [load]);

  if (!words || words.length === 0) return null;
  const now = today();
  const due = words.filter((w) => !w.learnt_at && w.next_due <= now);
  const learnt = words.filter((w) => w.learnt_at).length;

  async function answer(known: boolean) {
    const w = queue![i];
    const r = await reviewWord(w.word, known).catch(() => ({ ok: false, learnt: false }));
    setTally((t) => ({ known: t.known + (known ? 1 : 0), learnt: t.learnt + (r.learnt ? 1 : 0) }));
    setShown(false);
    setI(i + 1);
  }

  const card = queue?.[i];
  return (
    <section className="home-section wd-card" aria-labelledby="wd-title">
      <div className="mk-head">
        <span className="mk-icon" aria-hidden="true"><Icon name="book" size={24} /></span>
        <div>
          <h2 id="wd-title">My words</h2>
          <p className="muted">{words.length} saved · {learnt} learnt{due.length > 0 ? ` · ${due.length} to review today` : ""}</p>
        </div>
        {!queue && due.length > 0 && <button type="button" id="wd-start" className="btn btn-primary" onClick={() => { setQueue(due.slice(0, 15)); setI(0); setTally({ known: 0, learnt: 0 }); }}>Review {Math.min(15, due.length)}</button>}
      </div>

      {queue && card && (
        <div className="wd-flash" aria-live="polite">
          <p className="pt-kicker">Word {i + 1} of {queue.length}</p>
          <p className="wd-meaning">{card.meaning}{es && card.es && <em lang="es"> ({card.es})</em>}</p>
          {card.example && <p className="wd-example">“{shown ? card.example : blank(card.example, card.word)}”</p>}
          {!shown ? (
            <button type="button" className="btn btn-primary" onClick={() => setShown(true)}>Show the word</button>
          ) : (
            <>
              <p className="wd-word">{card.word}</p>
              <p className="muted px-small">Did you remember it before you looked?</p>
              <div className="pt-actions">
                <button type="button" className="btn btn-primary" onClick={() => void answer(true)}>I knew it</button>
                <button type="button" className="btn btn-ghost" onClick={() => void answer(false)}>Not yet</button>
              </div>
            </>
          )}
        </div>
      )}
      {queue && !card && (
        <div className="wd-flash" role="status">
          <p className="wd-meaning">You knew {tally.known} of {queue.length}.{tally.learnt > 0 && ` ${tally.learnt} ${tally.learnt === 1 ? "word is" : "words are"} now learnt for good.`}</p>
          <p className="muted">Words you knew come back in a few days, then a week, then longer. The ones you didn't know come back tomorrow.</p>
          <button type="button" className="btn btn-ghost" onClick={() => { setQueue(null); void load(); void progress?.refresh(); }}>Done</button>
        </div>
      )}
    </section>
  );
}
