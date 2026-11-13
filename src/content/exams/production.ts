/** Writing and Speaking marked by the teacher, for every exam: labels, mark scales and coins. */
import { APTIS_MARK_COINS, APTIS_S_PARTS, APTIS_W_PARTS } from "./aptis-production";
import { IELTS_BANDS, IELTS_S_PARTS, IELTS_W_PARTS, ieltsMarkCoins } from "./ielts-production";
import { TOEFL_BANDS, TOEFL_S_PARTS, TOEFL_W_PARTS, toeflMarkCoins } from "./toefl";
import type { PartInfo } from "./types";

export type ProductionExam = "aptis" | "ielts" | "toefl";
export const PRODUCTION_PARTS: PartInfo[] = [...APTIS_W_PARTS, ...APTIS_S_PARTS, ...IELTS_W_PARTS, ...IELTS_S_PARTS, ...TOEFL_W_PARTS, ...TOEFL_S_PARTS];
export const productionPart = (n: number) => PRODUCTION_PARTS.find((p) => p.part === n)!;

const APTIS_LEVELS = ["A0", "A1", "A2", "B1", "B2", "C"];
const NAME: Record<ProductionExam, string> = { aptis: "Aptis", ielts: "IELTS", toefl: "TOEFL" };

/** For a practice node id like "aptis-w13" or "ielts-s24": what it is and how the teacher marks it. */
export function productionInfo(nodeId: string | null | undefined) {
  const m = nodeId?.match(/^(aptis|ielts|toefl)-[ws](\d+)$/);
  if (!m) return null;
  const exam = m[1] as ProductionExam;
  const p = PRODUCTION_PARTS.find((x) => x.part === Number(m[2]));
  if (!p) return null;
  return {
    exam, name: NAME[exam],
    label: `${NAME[exam]} ${p.name}: ${p.skill}`,
    markWord: exam === "aptis" ? "Level" : exam === "ielts" ? "Band" : "Score",
    levels: exam === "ielts" ? IELTS_BANDS : exam === "toefl" ? TOEFL_BANDS : APTIS_LEVELS,
    coins: (level: string) => (exam === "ielts" ? ieltsMarkCoins(level) : exam === "toefl" ? toeflMarkCoins(level) : APTIS_MARK_COINS[level] ?? 0),
  };
}
