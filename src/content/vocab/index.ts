import type { BandId } from "../bands";
import type { VocabSet, VocabWord } from "./types";
import { A_VOCAB } from "./a-levels";
import { B_VOCAB } from "./b-levels";
import { C_VOCAB } from "./c-levels";

export type { VocabSet, VocabWord } from "./types";

/** Every band's core words: 9 bands × 6 sets × 10 words. */
export const VOCAB: VocabSet[] = [...A_VOCAB, ...B_VOCAB, ...C_VOCAB];

export const setsFor = (band: BandId) => VOCAB.filter((s) => s.band === band);
export const setById = (id: string) => VOCAB.find((s) => s.id === id);
export const wordsFor = (band: BandId) => setsFor(band).flatMap((s) => s.words);

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * The form of the word as it appears in its example ("fell out" for "fall out", "saving up" for "save up").
 * Tries the exact word, then the word with an ending, then the first word with any ending plus the rest.
 */
export function formIn(word: VocabWord): string | null {
  const tries = [
    `\\b${esc(word.w)}\\b`,
    `\\b${esc(word.w)}\\w*`,
    `\\b${esc(word.w.replace(/e$/, ""))}\\w*`,
  ];
  const parts = word.w.split(" ");
  if (parts.length > 1) tries.push(`\\b\\w+\\s${parts.slice(1).map(esc).join("\\s")}\\b`);
  for (const t of tries) {
    const m = word.ex.match(new RegExp(t, "i"));
    if (m) return m[0];
  }
  return null;
}

/** The example with the word blanked out. */
export function gapped(word: VocabWord): string {
  const f = formIn(word);
  return f ? word.ex.replace(f, "_____") : word.ex;
}
