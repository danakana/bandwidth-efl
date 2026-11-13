import { supabase } from "./supabase";

export type MyWord = { word: string; meaning: string; es: string | null; example: string | null; source: string | null; streak: number; next_due: string; learnt_at: string | null };

export async function loadWords(): Promise<MyWord[]> {
  const { data } = await supabase.from("my_words").select("word, meaning, es, example, source, streak, next_due, learnt_at").order("next_due").limit(500);
  return (data as MyWord[]) ?? [];
}

/** Saves a word (once). Returns false if it was already saved. */
export async function saveWord(w: { word: string; meaning: string; es?: string; example?: string; source?: string }): Promise<boolean> {
  const { error } = await supabase.from("my_words").insert({ word: w.word.toLowerCase(), meaning: w.meaning, es: w.es ?? null, example: w.example ?? null, source: w.source ?? null });
  if (error && error.code !== "23505") throw error;
  return !error;
}

export async function reviewWord(word: string, known: boolean): Promise<{ ok: boolean; learnt?: boolean }> {
  const { data, error } = await supabase.rpc("review_word", { p_word: word, p_known: known });
  if (error) throw error;
  return data as { ok: boolean; learnt?: boolean };
}

/** The sentence in a text where a word first appears, to show it in context. */
export function sentenceWith(text: string, word: string): string | undefined {
  const sentences = text.replace(/\s+/g, " ").match(/[^.!?]+[.!?]+["”]?/g) ?? [];
  return sentences.find((s) => s.toLowerCase().includes(word.toLowerCase()))?.trim();
}
