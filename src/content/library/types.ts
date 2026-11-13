import type { BandId } from "../bands";
import type { UniverseId } from "../universes";

/** A word explained in the text. `es` only for lower bands, shown on request. */
export type Gloss = { word: string; means: string; es?: string };
export type StoryQ = { q: string; options: string[]; answer: number; why: string };

/**
 * A short graded text for reading (and listening: the device voice, or a recording later, reads it).
 * Paragraphs are separated by blank lines. Glossed words are explained when tapped.
 */
export type Story = {
  id: string; band: BandId; universe: UniverseId; kind: "story" | "article";
  title: string; blurb: string; text: string; gloss: Gloss[]; questions: StoryQ[];
};
