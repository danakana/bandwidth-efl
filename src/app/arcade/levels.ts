import { PRACTICE } from "../../content/practice";
import type { FixItem } from "../../content/practice/types";
import { NODES } from "../../content/curriculum";
import type { BandId } from "../../content/bands";
import { EXAM_SETS, setsFor, gapped, formIn, type VocabWord } from "../../content/vocab";

export type LevelGame = "tower" | "rain" | "crush" | "kitchen" | "golf" | "boss";

/** Name, life icon and the line shown when a level is lost. */
export const GAME_META: Record<LevelGame, { name: string; life: string; lives: string; lost: string }> = {
  tower: { name: "Word Tower", life: "🧱", lives: "steadiness", lost: "The tower fell!" },
  rain: { name: "Word Rain", life: "❤️", lives: "lives", lost: "The city got soaked!" },
  crush: { name: "Collocation Crush", life: "", lives: "moves", lost: "Out of moves!" },
  boss: { name: "Boss Battles", life: "💖", lives: "hit points", lost: "The monster won this time!" },
  golf: { name: "Grammar Golf", life: "", lives: "strokes", lost: "Too many strokes!" },
  kitchen: { name: "Word Kitchen", life: "⭐", lives: "customer ratings", lost: "The restaurant closed early!" },
};
/** A band, or "EX" for the Exams & essays words (Word Rain only). */
export type LevelBand = BandId | "EX";
export const LEVELS = 7;

function shuffle<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
}

/* ---------------- Word Tower ---------------- */

/** One block: a sentence that is either correct, or has one mistake (with its fixed version). */
export type Block = { id: number; text: string; bad: boolean; fixed: string; why: string };

const BAND_OF = new Map(NODES.map((n) => [n.id, n.band]));
const FIXES: Record<string, FixItem[]> = {};
for (const [id, p] of Object.entries(PRACTICE)) {
  const b = BAND_OF.get(id);
  if (!b) continue;
  for (const step of p.steps) for (const it of step) if (it.kind === "fix") (FIXES[b] ??= []).push(it);
}

/* ---------------- Boss Battles ---------------- */

/** One attack: any multiple-choice question from the band that works without audio. */
export type Attack = { id: number; prompt: string; context?: string; options: string[]; answer: string; why: string };

const ATTACKS: Record<string, Attack[]> = {};
{
  let n = 0;
  const needsAudio = /speaker|you hear|listen|clip|video|recording|audio/i;
  for (const [id, p] of Object.entries(PRACTICE)) {
    const b = BAND_OF.get(id);
    if (!b) continue;
    for (const step of p.steps) for (const it of step) {
      if (it.kind !== "choice" || it.audio || needsAudio.test(it.prompt) || it.options.length < 2) continue;
      (ATTACKS[b] ??= []).push({ id: n++, prompt: it.prompt, context: it.context, options: it.options, answer: it.options[it.answer], why: it.why });
    }
  }
}

/** Monster HP and seconds to answer before it strikes. */
export const bossShape = (level: number) => ({ hp: level === 7 ? 14 : 6 + level, seconds: level === 7 ? 12 : 22 - level * 1.5 });

export function buildBoss(band: BandId): Attack[] {
  return shuffle(ATTACKS[band] ?? []).slice(0, 40).map((a) => ({ ...a, options: shuffle(a.options) }));
}

/* ---------------- Grammar Golf ---------------- */

/** One hole: a sentence with a gap and the clubs (options) to choose from. */
export type Hole = { id: number; before: string; after: string; options: string[]; answer: string; why: string };

const GAPS: Record<string, Hole[]> = {};
{
  let n = 0;
  for (const [id, p] of Object.entries(PRACTICE)) {
    const b = BAND_OF.get(id);
    if (!b) continue;
    for (const step of p.steps) for (const it of step) {
      if (it.kind === "choice" && !it.audio && it.options.every((o) => o.split(" ").length <= 3)) {
        const text = it.prompt.includes("___") ? it.prompt : it.context?.includes("___") ? it.context : null;
        if (!text) continue;
        const [before, after = ""] = text.split(/_{2,}/);
        (GAPS[b] ??= []).push({ id: n++, before, after, options: it.options, answer: it.options[it.answer], why: it.why });
      } else if (it.kind === "fix" && it.parts[it.wrong].split(" ").length <= 3 && it.accept[0].split(" ").length <= 3) {
        // A fix-the-mistake sentence becomes a two-club hole: the mistake or the correction.
        const before = it.parts.slice(0, it.wrong).join(" ");
        const after = it.parts.slice(it.wrong + 1).join(" ");
        const right = it.accept[0].replace(/[,.!?;:]+$/, "");
        const wrong = it.parts[it.wrong].replace(/[,.!?;:]+$/, "");
        if (right.toLowerCase() === wrong.toLowerCase()) continue;
        const tail = it.parts[it.wrong].match(/[,.!?;:]+$/)?.[0] ?? "";
        (GAPS[b] ??= []).push({ id: n++, before, after: tail + (after ? " " + after : ""), options: [right, wrong], answer: right, why: it.why });
      }
    }
  }
}

export const golfShape = (level: number) => ({ holes: level === 7 ? 9 : 6, par: 2 });

export function buildGolf(band: BandId, level: number): Hole[] {
  const { holes } = golfShape(level);
  // Later levels prefer holes with more clubs (harder to get a hole-in-one).
  const pool = shuffle(GAPS[band] ?? []).sort((a, b) => (level >= 4 ? b.options.length - a.options.length : 0));
  return pool.slice(0, holes).map((h) => ({ ...h, options: shuffle(h.options) }));
}

/* ---------------- Word Kitchen ---------------- */

/** One order: the customer's messy sentence, the correct one as word ingredients, plus rotten decoys. */
export type Order = { id: number; messy: string; target: string[]; decoys: string[]; why: string };

export const kitchenShape = (level: number) => ({ orders: level === 7 ? 8 : 5, seconds: level === 7 ? 30 : 50 - level * 3, maxWords: level <= 2 ? 8 : level <= 4 ? 11 : 14 });

export function buildKitchen(band: BandId, level: number): Order[] {
  const { orders, maxWords } = kitchenShape(level);
  const pool = shuffle(FIXES[band] ?? []).map((f) => ({ f, words: corrected(f).split(/\s+/) })).filter((x) => x.words.length >= 3 && x.words.length <= maxWords);
  return pool.slice(0, orders).map(({ f, words }, i) => {
    const bad = f.parts[f.wrong].split(/\s+/).filter((w) => !words.includes(w));
    return { id: i, messy: f.parts.join(" ").replace(/\s+([,.!?;:])/g, "$1"), target: words, decoys: bad.slice(0, 2), why: f.why };
  });
}

/** Put the correction in place, keeping punctuation the original part ended with. */
function corrected(f: FixItem): string {
  return f.parts.map((p, i) => {
    if (i !== f.wrong) return p;
    const fix = f.accept[0];
    const tail = p.match(/[,.!?;:]+$/)?.[0] ?? "";
    return /[,.!?;:]$/.test(fix) ? fix : fix + tail;
  }).join(" ").replace(/\s+([,.!?;:])/g, "$1");
}

/** Blocks and mistakes per level: the tower grows taller and trickier; level 7 is the boss. */
export const towerShape = (level: number) => ({ blocks: level === 7 ? 14 : 7 + level, bad: level === 7 ? 6 : 2 + Math.ceil(level / 2) });

export function buildTower(band: BandId, level: number): Block[] {
  const { blocks, bad } = towerShape(level);
  const pool = shuffle(FIXES[band] ?? []).slice(0, blocks);
  return pool.map((f, i) => {
    const isBad = i < bad;
    const fixed = corrected(f);
    return { id: i, text: isBad ? f.parts.join(" ").replace(/\s+([,.!?;:])/g, "$1") : fixed, bad: isBad, fixed, why: f.why };
  }).sort(() => Math.random() - 0.5);
}
export const towerReady = (band: BandId) => (FIXES[band]?.length ?? 0) >= 14;

/* ---------------- Word Rain ---------------- */

/** One wave: a clue at the top and three falling words, one of them right. */
export type Wave = { id: number; clue: string; kind: "meaning" | "gap"; answer: string; words: string[]; es: string };

function wordsFor(band: LevelBand, level: number): VocabWord[] {
  const sets = band === "EX" ? EXAM_SETS : setsFor(band);
  // Levels 1–6 are one topic set each; level 7 (boss) mixes the whole band.
  if (level < 7) return sets[(level - 1) % sets.length].words;
  return sets.flatMap((s) => s.words);
}

/** Waves per level and how long a word takes to fall (seconds). */
export const rainShape = (level: number) => ({ waves: level === 7 ? 15 : 10, fall: level === 7 ? 5.5 : 9 - level * 0.5 });

export function buildRain(band: LevelBand, level: number): Wave[] {
  const own = wordsFor(band, level);
  const { waves } = rainShape(level);
  const picks = shuffle(own).slice(0, waves);
  while (picks.length < waves) picks.push(own[picks.length % own.length]);
  return picks.map((w, i) => {
    const gap = i % 2 === 1 && formIn(w) !== null;
    const others = shuffle(own.filter((x) => x.w !== w.w && (!gap || x.pos === w.pos)))
      .sort((a, b) => Math.abs(a.w.length - w.w.length) - Math.abs(b.w.length - w.w.length)).slice(0, 2);
    const fill = others.length < 2 ? shuffle(own.filter((x) => x.w !== w.w)).slice(0, 2 - others.length) : [];
    return { id: i, clue: gap ? gapped(w) : w.means, kind: gap ? "gap" : "meaning", answer: w.w, words: shuffle([w.w, ...[...others, ...fill].map((x) => x.w)]), es: w.es };
  });
}

/** Stars from hearts left (3 = perfect). 0 means the level wasn't cleared. */
export const starsFrom = (cleared: boolean, hearts: number) => (cleared ? Math.max(1, Math.min(3, hearts)) : 0);

/** Name for each level, so the map feels like a journey. */
export const LEVEL_NAMES: Record<LevelGame, string[]> = {
  tower: ["Wobbly start", "Two floors up", "Windy day", "Night shift", "Earthquake drill", "Sky high", "The Great Tower"],
  rain: ["Light drizzle", "Showers", "Downpour", "Thunder", "Hailstorm", "Monsoon", "The Storm Boss"],
  boss: ["Grumble the Goblin", "Syntax Slime", "The Tense Troll", "Professor Preposition", "The Phrasal Phantom", "Lord Lexicon", "The Grammar Dragon"],
  golf: ["Practice green", "Palm Hills", "Windy links", "Lake course", "Desert dunes", "Mountain pass", "The Championship"],
  kitchen: ["Opening day", "Lunch rush", "Food critic", "Family dinner", "Busy Friday", "Wedding party", "The Master Chef"],
  crush: ["Sweet start", "Sugar rush", "Double trouble", "Candy cave", "Combo canyon", "Sticky situation", "The Big Crush"],
};
