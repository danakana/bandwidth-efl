import { B2_GRAMMAR } from "./b2-grammar";
import { B2_WORDS } from "./b2-words";
import { B2_COMMUNICATE } from "./b2-communicate";
import { B2_ERRORS, B2_SOUNDS } from "./b2-sounds-errors";
import type { Item, NodePractice } from "./types";
import { shuffle } from "../../lib/answers";
import type { BandId } from "../bands";
import type { TreeId } from "../curriculum";

const ALL: NodePractice[] = [...B2_GRAMMAR, ...B2_WORDS, ...B2_COMMUNICATE, ...B2_SOUNDS, ...B2_ERRORS];
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
  { id: "b2-words-1", band: "B2", tree: "words", title: "Boss 1: The Market Report", afterIndex: 2,
    story: "The newsroom's data desk is in chaos. Describe the trends precisely, lose every 'very', and make the report sound professional.",
    nodeIds: ["b2.society-ethics-science-careers-describin", "b2.precision-replacing-very-lose-the-very", "b2.adverb-adjective-verb-noun"] },
  { id: "b2-words-2", band: "B2", tree: "words", title: "Boss 2: The Debate Club", afterIndex: 4,
    story: "Final round of the debate championship. Argue, persuade and keep your cool.",
    nodeIds: ["b2.abstract-phrasal-verbs-for-argument", "b2.idioms-for-opinion-and-debate"] },
  { id: "b2-communicate-1", band: "B2", tree: "communicate", title: "Boss 1: The Town Hall", afterIndex: 2,
    story: "The mayor wants to close the youth centre. Argue your case, quote the report and keep it formal.",
    nodeIds: ["b2.argue-counter-argue-and-concede", "b2.summarise-and-paraphrase-sources", "b2.register-switch-informal-to-formal"] },
  { id: "b2-communicate-2", band: "B2", tree: "communicate", title: "Boss 2: The Diplomat", afterIndex: 5,
    story: "Two countries, one tense summit. Write the report, soften the blows and read between the lines.",
    nodeIds: ["b2.essay-conventions-nominalisation-introdu", "b2.do-hedge-claims", "b2.understatement"] },
  { id: "b2-sounds-1", band: "B2", tree: "sounds", title: "Boss: The Radio Booth", afterIndex: 1,
    story: "You're live on air. Every word links, and every line has an attitude.",
    nodeIds: ["b2.connected-speech-in-production", "b2.intonation-for-attitude"] },
  { id: "b2-errors-1", band: "B2", tree: "errors", title: "Boss: The Proofreader", afterIndex: 2,
    story: "A scholarship essay is full of Spanglish traps. Catch every one before the deadline.",
    nodeIds: ["b2.it-s-the-first-time-i-see", "b2.discuss-about-suggest-someone-to", "b2.despite-clause"] },
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
