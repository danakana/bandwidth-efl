/** Exam-prep content types. Letters are fixed (A, B, C…) like the real exam, so options are never shuffled. */
export type Opt = { text: string; why: string };
export type ExamQ = { id: string; prompt?: string; options: Opt[]; answer: number; challenge?: boolean };

/** Part 1: match short descriptions to a word bank with two extra words. */
export type MatchBlock = { kind: "match"; part: 1; id: string; words: { w: string; means: string }[]; items: { id: string; desc: string; answer: number; why: string }[] };
/** Parts 2 and 3: separate short items (a notice, a line of conversation). */
export type ListBlock = { kind: "list"; part: 2 | 3; id: string; items: (ExamQ & { stem: string })[] };
/** Parts 4–7: one text. In gap parts (4, 7) the text marks gaps as [1], [2]…; in reading parts (5, 6) questions have prompts. */
export type TextBlock = { kind: "text"; part: 4 | 5 | 6 | 7; id: string; title: string; text: string; questions: ExamQ[]; challenge?: boolean };
export type ExamBlock = MatchBlock | ListBlock | TextBlock;

export type PartInfo = {
  part: number; name: string; skill: string; task: string; options: number; approx: number;
  method: string[]; trap: string; es: string; question: string;
};
