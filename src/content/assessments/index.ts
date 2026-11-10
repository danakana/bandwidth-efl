import type { BandId } from "../bands";
import { NODES } from "../curriculum";
import type { NodeProgress } from "../../lib/progressApi";
import { B2_GATE, B2_MIDPOINT } from "./b2";
import { B2P_GATE, B2P_MIDPOINT } from "./b2p";
import { READY_SHARE, type BandAssessment } from "./types";

const ALL: BandAssessment[] = [B2_MIDPOINT, B2_GATE, B2P_MIDPOINT, B2P_GATE];

export const assessmentFor = (band: BandId, kind: "midpoint" | "gate") => ALL.find((a) => a.band === band && a.kind === kind);

/** How many of the band's skills count towards opening a Midpoint (Secure or better) or a Gate (Mastered). */
export function readiness(band: BandId, kind: "midpoint" | "gate", nodes: Record<string, NodeProgress>) {
  const ids = NODES.filter((n) => n.band === band).map((n) => n.id);
  const ok = (s: string | undefined) => (kind === "midpoint" ? s === "secure" || s === "mastered" : s === "mastered");
  const have = ids.filter((id) => ok(nodes[id]?.state)).length;
  const need = Math.ceil(ids.length * READY_SHARE[kind]);
  return { have, need, total: ids.length, ready: have >= need };
}

/** Bogotá calendar day, matching the server's one-try-per-day rule. */
export const bogotaDay = (d: Date | string) =>
  new Date(d).toLocaleDateString("en-CA", { timeZone: "America/Bogota" });
