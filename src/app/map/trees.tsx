import type { ReactNode } from "react";
import type { TreeId } from "../../content/curriculum";

export type TreeMeta = { id: TreeId; name: string; blurb: string; colour: string; icon: ReactNode };

const s = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const TREES: TreeMeta[] = [
  { id: "grammar", name: "Grammar", blurb: "How sentences work, from 'I am' to cleft sentences.", colour: "var(--band-c1)",
    icon: <svg viewBox="0 0 24 24" {...s}><path d="M4 6h16M4 12h10M4 18h13" /></svg> },
  { id: "words", name: "Words", blurb: "Vocabulary, collocations, phrasal verbs and idioms.", colour: "var(--band-a2)",
    icon: <svg viewBox="0 0 24 24" {...s}><path d="M4 19V5h9a3 3 0 0 1 0 6H4m9 0a4 4 0 0 1 0 8H4" /></svg> },
  { id: "communicate", name: "Communicate", blurb: "Functions, formal and informal register, do's and don'ts.", colour: "var(--band-b2)",
    icon: <svg viewBox="0 0 24 24" {...s}><path d="M4 5h16v10H9l-5 4z" /></svg> },
  { id: "sounds", name: "Sounds", blurb: "Pronunciation, stress and rhythm.", colour: "var(--band-a1)",
    icon: <svg viewBox="0 0 24 24" {...s}><path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4" /></svg> },
  { id: "errors", name: "Error Clinic", blurb: "The mistakes Spanish speakers make, fixed for good.", colour: "var(--band-b1)",
    icon: <svg viewBox="0 0 24 24" {...s}><path d="M12 3l9 16H3zM12 10v4M12 17h.01" /></svg> },
];

export const treeMeta = (id: TreeId) => TREES.find((t) => t.id === id)!;
