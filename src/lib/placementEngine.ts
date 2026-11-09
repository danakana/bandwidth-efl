/**
 * Adaptive "staircase" placement engine.
 * A correct answer moves the next question up a level; a wrong one moves it down.
 * The staircase settles around the student's level, and the estimate is the
 * average level of the last few questions. Results are always provisional.
 */
import { BAND_IDS, type BandIndex, type ChoiceItem } from "../content/placement";

export type LogEntry = { id: string; band: BandIndex; choice: number; correct: boolean };

export type Staircase = {
  /** Levels this section can visit, in order (e.g. every band, or a subset for listening). */
  levels: BandIndex[];
  /** Index into `levels` for the next question. */
  position: number;
  log: LogEntry[];
  maxItems: number;
};

export function startStaircase(levels: BandIndex[], startBand: BandIndex, maxItems: number): Staircase {
  const position = Math.max(0, levels.findIndex((b) => b >= startBand));
  return { levels, position, log: [], maxItems };
}

/** Picks the next unused item at the current level, or the nearest level that still has one. */
export function nextItem<T extends ChoiceItem>(s: Staircase, pool: T[]): T | null {
  if (s.log.length >= s.maxItems) return null;
  const used = new Set(s.log.map((l) => l.id));
  const order = [0, 1, -1, 2, -2, 3, -3, 4, -4];
  for (const delta of order) {
    const level = s.levels[s.position + delta];
    if (level === undefined) continue;
    const item = pool.find((i) => i.band === level && !used.has(i.id));
    if (item) return item;
  }
  return null;
}

export function answer<T extends ChoiceItem>(s: Staircase, item: T, choice: number): Staircase {
  const correct = choice === item.answer;
  const levelIndex = Math.max(0, s.levels.indexOf(item.band));
  const position = Math.min(s.levels.length - 1, Math.max(0, levelIndex + (correct ? 1 : -1)));
  return { ...s, position, log: [...s.log, { id: item.id, band: item.band, choice, correct }] };
}

/**
 * Provisional estimate: the highest level where the student answered at least
 * half of that level's questions correctly (and at least one). With fewer than
 * three answers there is not enough evidence, so it returns null ("Unmeasured").
 * If nothing qualifies, the student starts at the first band.
 */
export function estimate(s: Staircase): BandIndex | null {
  if (s.log.length < 3) return null;
  let best: BandIndex = 0;
  for (const level of s.levels) {
    const atLevel = s.log.filter((l) => l.band === level);
    const right = atLevel.filter((l) => l.correct).length;
    if (right >= 1 && right >= atLevel.length - right && level > best) best = level;
  }
  return best;
}

export const bandLabel = (b: BandIndex | null) => (b === null ? "Unmeasured" : BAND_IDS[b]);
export const bandIndexOf = (id: string | null | undefined): BandIndex | null => {
  const i = BAND_IDS.indexOf(id as (typeof BAND_IDS)[number]);
  return i < 0 ? null : (i as BandIndex);
};
