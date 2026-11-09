/**
 * Practice content for one skill (node): six steps following Bloom's taxonomy.
 * 1 Notice (remember) · 2 Understand · 3 Use (apply) · 4 Fix it (analyse) · 5 Judge (evaluate) · 6 Create
 */
import type { UniverseId } from "../universes";

/** Pick one option. With `audio`, the student listens first. */
export type ChoiceItem = { kind: "choice"; prompt: string; context?: string; audio?: string; options: string[]; answer: number; why: string };

/** Type into a gap (`before ___ after`), or type what you hear when `audio` is set (dictation). */
export type TypeItem = { kind: "type"; prompt: string; before?: string; after?: string; audio?: string; accept: string[]; hint?: string; why: string };

/** Rewrite a sentence, optionally using a given keyword. */
export type TransformItem = { kind: "transform"; prompt: string; source: string; keyword?: string; accept: string[]; why: string };

/** Tap the words in the right order. */
export type OrderItem = { kind: "order"; prompt: string; words: string[]; answer: string; why: string };

/** Tap the wrong part of the sentence, then type the correction. `parts` joined with spaces make the sentence. */
export type FixItem = { kind: "fix"; prompt: string; parts: string[]; wrong: number; accept: string[]; why: string };

/** Say a sentence aloud. Speech recognition checks it; typing is the fallback. */
export type SayItem = { kind: "say"; prompt: string; target: string; why: string };

export type Item = ChoiceItem | TypeItem | TransformItem | OrderItem | FixItem | SayItem;

/** Step 6: an original piece of writing or speech that must use the skill. */
export type CreateTask = {
  prompts: { universe?: UniverseId; text: string }[];
  minWords: number;
  /** Automatic checks on the text or transcript. Each regex (case-insensitive) must match at least `min` times. */
  checks: { label: string; pattern: string; min: number }[];
  /** Shown to the student as a self-check before sending. */
  rubric: string[];
  model: string;
};

export type NodePractice = {
  nodeId: string;
  /** One-paragraph explanation shown before Step 1. */
  explain: string;
  /** Short form table or pattern. */
  pattern: string[];
  steps: [Item[], Item[], Item[], Item[], Item[]];
  create: CreateTask;
};

export const STEP_NAMES = ["Notice", "Understand", "Use", "Fix it", "Judge", "Create"] as const;
export const STEP_BLOOM = ["Remember", "Understand", "Apply", "Analyse", "Evaluate", "Create"] as const;
export const STEP_BLURB = [
  "Listen and read. Spot the pattern.",
  "Show you know what it means and why.",
  "Build it yourself: gaps, rewrites, dictation.",
  "Find and correct the mistakes.",
  "Choose the best version for the situation, then say it.",
  "Write or record something of your own with it.",
] as const;
