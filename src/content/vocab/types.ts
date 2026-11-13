import type { BandId } from "../bands";

export type Pos = "noun" | "verb" | "adj" | "adv" | "phrase";

/**
 * One core word. `ex` must contain `w` exactly (any capitalisation) so the gap-fill can blank it.
 * Meanings use words from the band or below.
 */
export type VocabWord = { w: string; pos: Pos; means: string; es: string; ex: string };

/** Ten words on one topic. Six sets make a band's 60 core words. */
/** `track: "exam"` marks the Exams & essays sets (IELTS, TOEFL, academic writing); `band` is then their level. */
export type VocabSet = { id: string; band: BandId; topic: string; words: VocabWord[]; track?: "exam" };
