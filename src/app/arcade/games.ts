import { PRACTICE } from "../../content/practice";
import type { Item } from "../../content/practice/types";
import type { NodeProgress } from "../../lib/progressApi";

export type GameId = "speed" | "frenzy" | "echo";

export type Game = {
  id: GameId; name: string; blurb: string;
  /** Seconds on the clock, or null for a fixed number of items. */
  seconds: number | null; items: number | null;
  /** Must match the per-game maximum in public.record_arcade. */
  max: number; minPool: number;
  accepts: (i: Item) => boolean;
};

export const GAMES: Game[] = [
  { id: "speed", name: "Speed Round", blurb: "60 seconds. Answer as many as you can.", seconds: 60, items: null, max: 60, minPool: 8,
    accepts: (i) => i.kind === "choice" && !i.audio },
  { id: "frenzy", name: "Fix-it Frenzy", blurb: "90 seconds. Spot the mistake, fix it, next.", seconds: 90, items: null, max: 40, minPool: 5,
    accepts: (i) => i.kind === "fix" || i.kind === "transform" },
  { id: "echo", name: "Echo Chamber", blurb: "Eight dictations. Hear it, type it exactly.", seconds: null, items: 8, max: 10, minPool: 4,
    accepts: (i) => i.kind === "type" && !!i.audio },
];

/**
 * Only questions from steps the student has already passed, so every game is review
 * (retrieval practice) rather than a shortcut through new material.
 */
export function poolFor(game: Game, nodes: Record<string, NodeProgress>): Item[] {
  return Object.entries(nodes).flatMap(([id, n]) => {
    const p = PRACTICE[id];
    if (!p || n.steps_passed < 1) return [];
    return p.steps.slice(0, Math.min(n.steps_passed, 5)).flat().filter(game.accepts);
  });
}
