/** Short constructors for practice items, so content files stay readable. */
import type { Item, ChoiceItem, FixItem, OrderItem, SayItem, TransformItem, TypeItem } from "./types";

export const ch = (prompt: string, options: string[], answer: number, why: string, o: { context?: string; audio?: string } = {}): ChoiceItem =>
  ({ kind: "choice", prompt, options, answer, why, ...o });
export const ctx = (context: string, prompt: string, options: string[], answer: number, why: string) => ch(prompt, options, answer, why, { context });
export const heard = (audio: string, prompt: string, options: string[], answer: number, why: string) => ch(prompt, options, answer, why, { audio });
export const gap = (before: string, after: string, accept: string[], why: string, hint?: string): TypeItem =>
  ({ kind: "type", prompt: "Complete the sentence.", before, after, accept, why, hint });
export const dict = (audio: string, accept: string[], why = "Listen for every word, including small ones."): TypeItem =>
  ({ kind: "type", prompt: "Listen and type exactly what you hear.", audio, accept, why });
export const tr = (prompt: string, source: string, accept: string[], why: string, keyword?: string): TransformItem =>
  ({ kind: "transform", prompt, source, accept, why, keyword });
export const ord = (answer: string, why: string, prompt = "Put the words in order."): OrderItem =>
  ({ kind: "order", prompt, words: answer.split(" "), answer, why });
export const fix = (parts: string[], wrong: number, accept: string[], why: string): FixItem =>
  ({ kind: "fix", prompt: "Tap the mistake, then type the correction.", parts, wrong, accept, why });
export const say = (target: string, why: string, prompt = "Say this aloud, naturally."): SayItem => ({ kind: "say", prompt, target, why });
/** Attach a short Spanish gloss to an item (lower bands). Shown only when the answer is wrong. */
export const es = <T extends Item>(item: T, gloss: string): T => ({ ...item, es: gloss });
