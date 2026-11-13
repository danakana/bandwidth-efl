/** Saving and loading placement attempts and writing/speaking submissions. */
import { supabase } from "./supabase";
import type { LogEntry } from "./placementEngine";
import { BANDS } from "../content/bands";

export const LISTENING_BASE = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/listening/`;

export type Attempt = {
  id: string;
  student_id: string;
  status: "in_progress" | "completed";
  reading_band: string | null;
  listening_band: string | null;
  reading_log: LogEntry[];
  listening_log: LogEntry[];
  started_at: string;
  completed_at: string | null;
};

export type Submission = {
  id: string;
  student_id: string;
  attempt_id: string | null;
  skill: "writing" | "speaking";
  prompt: string;
  target_band: string | null;
  body: string | null;
  word_count: number | null;
  /** A rewrite after the teacher's feedback points to the first version. */
  revision_of?: string | null;
  audio_path: string | null;
  created_at: string;
  teacher_band: string | null;
  teacher_feedback: string | null;
  reviewed_at: string | null;
  node_id?: string | null;
  auto_passed?: boolean | null;
  feedback_seen_at?: string | null;
};

export async function startAttempt(): Promise<Attempt> {
  const { data, error } = await supabase.from("placement_attempts").insert({}).select().single();
  if (error) throw error;
  return data as Attempt;
}

export async function saveSection(attemptId: string, skill: "reading" | "listening", band: string | null, log: LogEntry[]) {
  const patch = skill === "reading" ? { reading_band: band, reading_log: log } : { listening_band: band, listening_log: log };
  const { error } = await supabase.from("placement_attempts").update(patch).eq("id", attemptId);
  if (error) throw error;
}

export async function completeAttempt(attemptId: string) {
  const { error } = await supabase
    .from("placement_attempts")
    .update({ status: "completed", completed_at: new Date().toISOString() })
    .eq("id", attemptId);
  if (error) throw error;
}

export async function submitWriting(attemptId: string, prompt: string, targetBand: string, body: string, wordCount: number) {
  const { error } = await supabase.from("submissions").insert({
    attempt_id: attemptId, skill: "writing", prompt, target_band: targetBand, body, word_count: wordCount,
  });
  if (error) throw error;
}

export async function submitSpeaking(userId: string, attemptId: string, prompt: string, targetBand: string, audio: Blob) {
  const type = (audio.type || "audio/webm").split(";")[0];
  const ext = type === "audio/mp4" ? "m4a" : type === "audio/ogg" ? "ogg" : type === "audio/mpeg" ? "mp3" : "webm";
  const path = `${userId}/${attemptId}.${ext}`;
  const up = await supabase.storage.from("speaking").upload(path, audio, { contentType: type, upsert: true });
  if (up.error) throw up.error;
  const { error } = await supabase.from("submissions").insert({
    attempt_id: attemptId, skill: "speaking", prompt, target_band: targetBand, audio_path: path,
  });
  if (error) throw error;
}

/** The student's most recent completed attempt plus its submissions, or null. */
export async function latestResult(): Promise<{ attempt: Attempt; submissions: Submission[] } | null> {
  const { data } = await supabase
    .from("placement_attempts").select("*").eq("status", "completed")
    .order("completed_at", { ascending: false }).limit(1);
  const attempt = (data as Attempt[] | null)?.[0];
  if (!attempt) return null;
  const subs = await supabase.from("submissions").select("*").eq("attempt_id", attempt.id);
  return { attempt, submissions: (subs.data as Submission[]) ?? [] };
}

export const countWords = (text: string) => (text.trim().match(/[A-Za-zÀ-ÿ0-9'’-]+/g) ?? []).length;

/**
 * Where the map starts: the lowest band measured in any skill, so the student
 * begins where they can do everything. Teacher bands replace pending ones as they arrive.
 */
export function startBandIndex(attempt: Attempt, submissions: Submission[]): number | null {
  const ids = [
    attempt.reading_band,
    attempt.listening_band,
    submissions.find((s) => s.skill === "writing")?.teacher_band ?? null,
    submissions.find((s) => s.skill === "speaking")?.teacher_band ?? null,
  ];
  const idx = ids.map((id) => BANDS.findIndex((b) => b.id === id)).filter((i) => i >= 0);
  return idx.length ? Math.min(...idx) : null;
}
