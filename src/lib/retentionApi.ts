/** Retention checks: a mixed quiz about three weeks after a Gate, to see what really stuck. */
import { supabase } from "./supabase";
import { PRACTICE, itemKey } from "../content/practice";
import type { Item } from "../content/practice/types";
import { shuffle } from "./answers";

export type RetentionRow = { id: string; student_id: string; band: string; due_at: string; done_at: string | null; correct: number | null; total: number | null; slipped: string[] };
export type RetentionOutcome = { pct: number; slipped: string[]; xp: number; coins: number; badges: string[] };

export async function loadRetention(studentId?: string): Promise<RetentionRow[]> {
  let q = supabase.from("retention_checks").select("*").order("due_at");
  if (studentId) q = q.eq("student_id", studentId);
  const { data } = await q;
  return (data as RetentionRow[]) ?? [];
}

export const isDue = (r: RetentionRow) => !r.done_at && new Date(r.due_at) <= new Date();

const PREFIX: Record<string, string> = { "Pre-A1": "pa1.", A1: "a1.", "A1+": "a1p.", A2: "a2.", "A2+": "a2p.", B1: "b1.", "B1+": "b1p.", B2: "b2.", "B2+": "b2p.", C1: "c1.", C2: "c2." };

/**
 * Twelve questions, one per skill where possible, drawn from the band's practice (Understand, Use, Fix it, Judge),
 * so every tree is tested and nothing is the exact question the student just saw last week.
 * Speaking items are left out: the browser's speech recognition is too unreliable for a check that sends skills back.
 */
export function buildRetention(band: string, count = 12): { item: Item; node: string }[] {
  const pre = PREFIX[band];
  const nodes = shuffle(Object.keys(PRACTICE).filter((id) => id.startsWith(pre)));
  const pools = new Map(nodes.map((id) => [id, shuffle(PRACTICE[id].steps.slice(1, 5).flat().filter((i) => i.kind !== "say"))]));
  const out: { item: Item; node: string }[] = [];
  // Round-robin across skills so the quiz covers as many as possible.
  for (let round = 0; out.length < count && round < 3; round++) {
    for (const id of nodes) {
      const it = pools.get(id)?.[round];
      if (it && itemKey(it)) out.push({ item: it, node: id });
      if (out.length >= count) break;
    }
  }
  return shuffle(out);
}

export async function finishRetention(id: string, results: { node: string; ok: boolean }[]): Promise<RetentionOutcome> {
  const { data, error } = await supabase.rpc("finish_retention", { p_id: id, p_results: results });
  if (error) throw error;
  return data as RetentionOutcome;
}
