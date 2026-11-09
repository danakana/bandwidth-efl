import { B2_GRAMMAR } from "./b2-grammar";
import type { Item, NodePractice } from "./types";
import { shuffle } from "../../lib/answers";
import type { BandId } from "../bands";
import type { TreeId } from "../curriculum";

const ALL: NodePractice[] = [...B2_GRAMMAR];
export const PRACTICE: Record<string, NodePractice> = Object.fromEntries(ALL.map((p) => [p.nodeId, p]));
export const practiceFor = (nodeId: string): NodePractice | undefined => PRACTICE[nodeId];

/** A "boss" round after every few skills in a tree. Mixes items from those skills. */
export type Checkpoint = { id: string; band: BandId; tree: TreeId; title: string; story: string; nodeIds: string[]; afterIndex: number };

export const CHECKPOINTS: Checkpoint[] = [
  { id: "b2-grammar-1", band: "B2", tree: "grammar", title: "Boss 1: The Time Machine", afterIndex: 2,
    story: "A broken time machine is mixing up past, present and regrets. Fix every sentence to get it home.",
    nodeIds: ["b2.mixed-conditionals", "b2.wish-if-only-present-past-would", "b2.past-modals-of-deduction-and-criticism"] },
  { id: "b2-grammar-2", band: "B2", tree: "grammar", title: "Boss 2: The Newsroom", afterIndex: 5,
    story: "Deadline in ten minutes. Rewrite the reports so they sound like real journalism.",
    nodeIds: ["b2.passive-with-reporting-verbs", "b2.participle-clauses", "b2.cleft-sentences-introduction"] },
  { id: "b2-grammar-3", band: "B2", tree: "grammar", title: "Boss 3: The Storyteller", afterIndex: 7,
    story: "The storyteller lost her notes. Rebuild the story, formal parts and all.",
    nodeIds: ["b2.relative-clauses-with-prepositions", "b2.narrative-tenses-combined"] },
];

/** Mixed review items (Understand, Use, Fix it, Judge) from some skills. */
export function mixedItems(nodeIds: string[], count: number): Item[] {
  const pool = nodeIds.flatMap((id) => {
    const p = PRACTICE[id];
    return p ? p.steps.slice(1, 5).flat() : [];
  });
  const says = shuffle(pool.filter((i) => i.kind === "say")).slice(0, 1);
  const rest = shuffle(pool.filter((i) => i.kind !== "say")).slice(0, count - says.length);
  return shuffle([...rest, ...says]);
}
