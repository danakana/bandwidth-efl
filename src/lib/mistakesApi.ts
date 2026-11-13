import { supabase } from "./supabase";
import { itemKey } from "../content/practice";
import type { Item } from "../content/practice/types";

export type Answer = { item: Item; ok: boolean };
export type ReviewOutcome = { advanced: number; cleared: number; xp: number; coins: number; capped: boolean; badges: string[] };
export type Mistake = { item_key: string; node_id: string; misses: number; streak: number; next_due: string };

/** Sends which questions were right or wrong. Wrong ones come back tomorrow; due ones move on when right. */
export async function logAnswers(answers: Answer[], review = false): Promise<ReviewOutcome | null> {
  const rows = answers.flatMap(({ item, ok }) => { const k = itemKey(item); return k ? [{ k, n: k.split(":")[0], ok }] : []; });
  if (!rows.length) return null;
  const { data, error } = await supabase.rpc("log_answers", { p_answers: rows.slice(0, 40), p_review: review });
  if (error) throw error;
  return data as ReviewOutcome;
}

/** Mistakes still open: the ones due today or earlier first. */
export async function loadMistakes(): Promise<Mistake[]> {
  const { data } = await supabase.from("mistakes").select("item_key, node_id, misses, streak, next_due")
    .is("cleared_at", null).order("next_due").limit(200);
  return (data as Mistake[]) ?? [];
}

export const today = () => new Date().toLocaleDateString("en-CA", { timeZone: "America/Bogota" });
