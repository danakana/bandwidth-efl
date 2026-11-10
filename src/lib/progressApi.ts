/** Practice progress, rewards and badges. Writes go through server functions that apply the rules. */
import { supabase } from "./supabase";

export type NodeProgress = {
  node_id: string;
  steps_passed: number;
  best: Record<string, number>;
  state: "practising" | "secure" | "mastered" | "review";
  check_stage: number;
  next_check_at: string | null;
};
export type Stats = { xp: number; coins: number; streak: number; best_streak: number; freezes: number; last_day: string | null };
export type StepOutcome = { passed: boolean; pct: number; xp: number; coins: number; steps_passed?: number; state?: string; next_check_at?: string | null; badges: string[] };

export type AssessmentRow = {
  id: string; student_id: string; band: string; kind: "midpoint" | "gate"; reading_pct: number; listening_pct: number;
  writing_id: string | null; speaking_id: string | null;
  status: "failed" | "passed" | "awaiting_teacher" | "confirmed" | "returned"; teacher_note: string | null; created_at: string;
};

export async function loadProgress(): Promise<{ nodes: Record<string, NodeProgress>; stats: Stats; badges: string[]; milestones: Set<string>; assessments: AssessmentRow[]; unlocks: string[] }> {
  const [n, s, b, m, a, u] = await Promise.all([
    supabase.from("node_progress").select("node_id, steps_passed, best, state, check_stage, next_check_at"),
    supabase.from("student_stats").select("*").maybeSingle(),
    supabase.from("badges").select("badge_id"),
    supabase.from("milestone_results").select("milestone_id").eq("passed", true),
    supabase.from("assessments").select("*").order("created_at", { ascending: false }),
    supabase.from("band_unlocks").select("band"),
  ]);
  const nodes: Record<string, NodeProgress> = {};
  for (const r of (n.data as NodeProgress[]) ?? []) nodes[r.node_id] = r;
  return {
    nodes,
    stats: (s.data as Stats) ?? { xp: 0, coins: 0, streak: 0, best_streak: 0, freezes: 1, last_day: null },
    badges: ((b.data as { badge_id: string }[]) ?? []).map((x) => x.badge_id),
    milestones: new Set(((m.data as { milestone_id: string }[]) ?? []).map((x) => x.milestone_id)),
    assessments: (a.data as AssessmentRow[]) ?? [],
    unlocks: ((u.data as { band: string }[]) ?? []).map((x) => x.band),
  };
}

export async function recordStep(nodeId: string, step: number, correct: number, total: number): Promise<StepOutcome> {
  const { data, error } = await supabase.rpc("record_step", { p_node: nodeId, p_step: step, p_correct: correct, p_total: total });
  if (error) throw error;
  return data as StepOutcome;
}

export async function recordMilestone(id: string, correct: number, total: number): Promise<StepOutcome> {
  const { data, error } = await supabase.rpc("record_milestone", { p_id: id, p_correct: correct, p_total: total });
  if (error) throw error;
  return data as StepOutcome;
}

/** Save a Create piece so the teacher can read or listen and give feedback. */
export async function savePractice(userId: string, nodeId: string, prompt: string, body: string, words: number, audio: Blob | null, autoPassed: boolean | null, targetBand?: string): Promise<string> {
  let audio_path: string | null = null;
  if (audio) {
    const type = (audio.type || "audio/webm").split(";")[0];
    const ext = type === "audio/mp4" ? "m4a" : type === "audio/ogg" ? "ogg" : "webm";
    audio_path = `${userId}/practice-${nodeId}-${Date.now()}.${ext}`;
    const up = await supabase.storage.from("speaking").upload(audio_path, audio, { contentType: type });
    if (up.error) throw up.error;
  }
  const { data, error } = await supabase.from("submissions").insert({
    skill: audio ? "speaking" : "writing", prompt, body: body || null, word_count: words || null,
    audio_path, node_id: nodeId, auto_passed: autoPassed, target_band: targetBand ?? null,
  }).select("id").single();
  if (error) throw error;
  return (data as { id: string }).id;
}

export type AssessmentOutcome = { id: string; status: AssessmentRow["status"]; passed: boolean; reading_pct: number; listening_pct: number; bar: number; xp: number; coins: number; badges: string[] };

export async function submitAssessment(band: string, kind: "midpoint" | "gate", r: [number, number], l: [number, number], writingId: string, speakingId: string): Promise<AssessmentOutcome> {
  const { data, error } = await supabase.rpc("submit_assessment", {
    p_band: band, p_kind: kind, p_r_correct: r[0], p_r_total: r[1], p_l_correct: l[0], p_l_total: l[1], p_writing: writingId, p_speaking: speakingId,
  });
  if (error) throw error;
  return data as AssessmentOutcome;
}

export async function reviewGate(id: string, confirm: boolean, note: string): Promise<{ status: string; unlocked?: string }> {
  const { data, error } = await supabase.rpc("review_gate", { p_id: id, p_confirm: confirm, p_note: note });
  if (error) throw error;
  return data as { status: string; unlocked?: string };
}

/** What a node shows on the tree. */
export type NodeView = "locked" | "new" | "practising" | "secure" | "mastered" | "review" | "check";
export function nodeView(p: NodeProgress | undefined, bandLocked: boolean): NodeView {
  if (bandLocked) return "locked";
  if (!p) return "new";
  const due = p.check_stage > 0 && p.next_check_at !== null && new Date(p.next_check_at) <= new Date();
  if (p.state === "review") return "review";
  if (due) return "check";
  return p.state;
}

export const BADGES: Record<string, { name: string; blurb: string }> = {
  "first-step": { name: "First step", blurb: "Finished your first Notice step." },
  "first-secure": { name: "Locked in", blurb: "Made your first skill Secure." },
  "first-mastered": { name: "Master", blurb: "Mastered your first skill." },
  "streak-3": { name: "On a roll", blurb: "Practised 3 days in a row." },
  "streak-7": { name: "One full week", blurb: "Practised 7 days in a row." },
  "streak-30": { name: "Unstoppable", blurb: "Practised 30 days in a row." },
};
export const badgeInfo = (id: string) =>
  BADGES[id]
  ?? (id.startsWith("ms:") ? { name: "Boss beaten", blurb: "Passed a checkpoint." }
    : id.startsWith("mid:") ? { name: `${id.slice(4)} halfway`, blurb: "Passed the four-skill Midpoint." }
    : id.startsWith("gate:") ? { name: `${id.slice(5)} complete`, blurb: "Passed the Gate. The next band is open." }
    : { name: id, blurb: "" });
