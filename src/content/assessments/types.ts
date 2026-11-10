import type { BandId } from "../bands";
import type { CreateTask, Item } from "../practice/types";

/** One reading text or listening clip with its questions. Items here never carry their own audio. */
export type TestPart = { id: string; title: string; text?: string; audio?: string; speaker?: string; items: Item[] };

export type ProductionTask = CreateTask & {
  /** Speaking only: the shortest recording accepted when the browser can't transcribe. */
  seconds?: number;
};

/**
 * A four-skill check for one band.
 * Midpoint: halfway through a band, to catch gaps early. Gate: at the end, and it opens the next band.
 */
export type BandAssessment = {
  band: BandId;
  kind: "midpoint" | "gate";
  title: string;
  story: string;
  /** Percent needed in reading and in listening. Must match public.submit_assessment. */
  bar: number;
  reading: TestPart[];
  listening: TestPart[];
  writing: ProductionTask;
  speaking: ProductionTask;
};

/** Skills ready (Secure or better for a Midpoint, Mastered for a Gate) needed to open it. Must match the server. */
export const READY_SHARE = { midpoint: 0.5, gate: 0.8 } as const;
