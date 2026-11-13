/** Exam-prep content types. Letters are fixed (A, B, C…) like the real exams, so options are never shuffled. */
export type Opt = { text: string; why: string };
export type ExamQ = { id: string; prompt?: string; options: Opt[]; answer: number; challenge?: boolean };
/** A recording. Several clips in a row make a dialogue (each line can have its own voice). */
export type AudioClip = { file: string; script: string; voice: string; who?: string };

/**
 * Matching: each item is matched to one entry in a shared list (Aptis lists can have up to 10).
 * Used for ICFES Part 1 (descriptions → words), Aptis vocabulary, opinion matching (statements → people),
 * headings (paragraphs → headings) and listening matching (speakers → statements).
 */
export type MatchBlock = {
  kind: "match"; part: number; id: string; title?: string;
  words: { w: string; means?: string }[];
  items: { id: string; desc: string; answer: number; why: string; audio?: AudioClip[] }[];
  /** Texts shown before the items, e.g. four people's opinions. */
  passages?: { who: string; text: string }[];
  /** Items are whole paragraphs (headings task). */
  paragraphs?: boolean;
  /** What to call each item ("Speaker", "Paragraph"…). */
  itemLabel?: string;
  audio?: AudioClip[];
};
/** Separate short items (a notice, a line of conversation, a sentence with a gap). Optional shared recording. */
export type ListBlock = { kind: "list"; part: number; id: string; items: (ExamQ & { stem: string; audio?: AudioClip[] })[]; audio?: AudioClip[]; title?: string };
/** One text. Gap parts mark gaps as [1], [2]…; reading parts give each question a prompt. Listening texts have audio and no visible text. */
export type TextBlock = { kind: "text"; part: number; id: string; title: string; text: string; questions: ExamQ[]; challenge?: boolean; audio?: AudioClip[] };
/** Put sentences in order. The first sentence is given; `sentences` is the correct order of the rest. */
export type OrderBlock = { kind: "order"; part: number; id: string; title: string; first: string; sentences: string[]; why: string };
/**
 * Typed answers (IELTS completion tasks). Each item is a sentence with a gap written as "___".
 * `accept` lists every right answer (compared ignoring case and extra spaces); longer than `maxWords` is wrong, as in IELTS.
 * With `text` the passage is shown (reading); with `audio` it is played (listening).
 */
export type FillBlock = {
  kind: "fill"; part: number; id: string; title: string; text?: string; audio?: AudioClip[];
  instruction: string; maxWords: number; numbers?: boolean;
  /** Optional heading for the notes or summary the gaps are in. */
  notesTitle?: string;
  items: { id: string; prompt: string; accept: string[]; why: string }[];
};
/**
 * TOEFL "Complete the Words": a short text where words are cut; the first letters are shown.
 * `text` marks each cut word as [[prefix|rest]]; students type the rest (or the whole word).
 */
export type WordsBlock = { kind: "words"; part: number; id: string; title: string; text: string };
/** TOEFL "Build a Sentence": put the words in order to answer or ask something. */
export type BuildBlock = {
  kind: "build"; part: number; id: string; title: string;
  items: { id: string; context: string; words: string[]; answers: string[]; end: string; why: string }[];
};
export type ExamBlock = MatchBlock | ListBlock | TextBlock | OrderBlock | FillBlock | WordsBlock | BuildBlock;

export type PartInfo = {
  part: number; name: string; skill: string; task: string; options: number; approx: number;
  method: string[]; trap: string; es: string; question: string;
  /** Group heading on the hub (Aptis: Core, Reading, Listening). */
  group?: string;
};

/** Everything the runner needs to know about an exam. */
export type ExamConfig = { id: "icfes" | "aptis" | "ielts" | "toefl"; label: string; parts: PartInfo[]; neverBlank: boolean };
