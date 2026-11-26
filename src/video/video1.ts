/**
 * Grammar video 1 (Pre-A1): "First day at a new school" · I am, you are, he/she/it is.
 * Each step is one voice line (or a short silent beat). The camera, captions and cards follow the step,
 * and every step lasts exactly as long as its recording, so re-recording a line re-times the video.
 */

export type Shot = { img: "gate" | "class"; x: number; y: number; zoom: number };
export type Speaker = "Mira" | "Sofia" | "Leo" | "Ana" | "Max";
/** Motmot poses on the character sheet (column, row). */
export type Pose = "front" | "talk" | "surprised" | "think" | "cheer";

export type Overlay =
  | { kind: "title"; title: string; sub: string }
  | { kind: "badge"; text: string }
  | { kind: "card"; left: string; right: string }
  | { kind: "rule" }
  | { kind: "mistake"; wrong: string; right: string; es: string }
  | { kind: "word"; word: string; meaning: string }
  | { kind: "quiz"; prompt: string; options: [string, string]; answer: 0 | 1; revealFromEnd: number }
  | { kind: "ending"; line: string };

export type Step = {
  id: string;
  /** Recording in the listening bucket; null for a silent beat of `hold` seconds. */
  audio: string | null;
  hold?: number;
  speaker?: Speaker;
  /** Caption text. Words wrapped in *stars* are highlighted. */
  text?: string;
  shot: Shot;
  overlay?: Overlay;
  /** Show the motmot host in the corner with this pose. */
  host?: Pose;
};

// Focus points measured on the pictures (0..1 of width and height).
const WIDE: Shot = { img: "gate", x: 0.5, y: 0.5, zoom: 1 };
const SOFIA: Shot = { img: "gate", x: 0.18, y: 0.5, zoom: 1.75 };
const LEO: Shot = { img: "gate", x: 0.42, y: 0.38, zoom: 1.55 };
const ANA: Shot = { img: "gate", x: 0.7, y: 0.5, zoom: 1.6 };
const ANA_MAX: Shot = { img: "gate", x: 0.76, y: 0.5, zoom: 1.3 };
const MAX: Shot = { img: "gate", x: 0.86, y: 0.56, zoom: 1.85 };
const COCO: Shot = { img: "gate", x: 0.5, y: 0.74, zoom: 1.6 };
const SOFIA_COCO: Shot = { img: "gate", x: 0.33, y: 0.62, zoom: 1.35 };
const CLASS_WIDE: Shot = { img: "class", x: 0.5, y: 0.5, zoom: 1 };
const CLASS_LEO: Shot = { img: "class", x: 0.66, y: 0.42, zoom: 1.6 };
const CLASS_SOFIA: Shot = { img: "class", x: 0.33, y: 0.5, zoom: 1.6 };

const p = (id: string) => `p/v1-${id}.mp3`;

export const VIDEO1 = {
  title: "First day at a new school",
  sub: "Pre-A1 · I am, you are, he / she / it is",
  images: { gate: "v/v1-gate.png", class: "v/v1-class.png" },
  host: "v/motmot-sheet.png",
  steps: [
    { id: "intro", audio: null, hold: 2.6, shot: WIDE, overlay: { kind: "title", title: "First day at a new school", sub: "I am · you are · he / she / it is" } },
    { id: "n01", audio: p("n01"), speaker: "Mira", text: "First day at a new school. New faces. New names. Watch and listen!", shot: { ...WIDE, zoom: 1.08 }, host: "talk" },
    { id: "l01", audio: p("l01"), speaker: "Leo", text: "Hi! *I'm* Leo. *You are* new!", shot: LEO },
    { id: "s01", audio: p("s01"), speaker: "Sofia", text: "Yes! *I'm* Sofia.", shot: SOFIA },
    { id: "l02", audio: p("l02"), speaker: "Leo", text: "This is Ana. *She is* my sister.", shot: ANA },
    { id: "a01", audio: p("a01"), speaker: "Ana", text: "Hi, Sofia!", shot: ANA },
    { id: "l03", audio: p("l03"), speaker: "Leo", text: "And this is Max. *He is* my friend.", shot: MAX },
    { id: "m01", audio: p("m01"), speaker: "Max", text: "Hey! Nice to meet you.", shot: MAX },
    { id: "l04", audio: p("l04"), speaker: "Leo", text: "And that's Coco. *It is* the school dog!", shot: COCO },
    { id: "s02", audio: p("s02"), speaker: "Sofia", text: "Oh! *It is* so cute!", shot: SOFIA_COCO },
    { id: "n02", audio: p("n02"), speaker: "Mira", text: "Let's look again.", shot: WIDE, overlay: { kind: "badge", text: "Replay" }, host: "think" },
    { id: "n03", audio: p("n03"), speaker: "Mira", text: "Leo talks about Leo. *I am.* I'm Leo.", shot: LEO, overlay: { kind: "card", left: "I", right: "am" }, host: "talk" },
    { id: "n04", audio: p("n04"), speaker: "Mira", text: "Leo talks to Sofia. *You are.* You are new!", shot: SOFIA, overlay: { kind: "card", left: "you", right: "are" }, host: "talk" },
    { id: "n05", audio: p("n05"), speaker: "Mira", text: "Ana is a girl. *She is.* She is my sister.", shot: ANA, overlay: { kind: "card", left: "she", right: "is" }, host: "talk" },
    { id: "n06", audio: p("n06"), speaker: "Mira", text: "Max is a boy. *He is.* He is my friend.", shot: MAX, overlay: { kind: "card", left: "he", right: "is" }, host: "talk" },
    { id: "n07", audio: p("n07"), speaker: "Mira", text: "Coco is a dog, an animal. *It is.* It is the school dog.", shot: COCO, overlay: { kind: "card", left: "it", right: "is" }, host: "talk" },
    { id: "n08", audio: p("n08"), speaker: "Mira", text: "So: I am. You are. He is, she is, it is.", shot: WIDE, overlay: { kind: "rule" }, host: "cheer" },
    { id: "n09", audio: p("n09"), speaker: "Mira", text: "Careful! In Spanish we say: es mi amiga. In English, always say who. Not: is my friend. Say: *she is* my friend!", shot: ANA_MAX, overlay: { kind: "mistake", wrong: "Is my friend.", right: "She is my friend.", es: "En inglés siempre decimos quién: she, he, it…" }, host: "surprised" },
    { id: "l05", audio: p("l05"), speaker: "Leo", text: "Now *you are* my classmate!", shot: CLASS_LEO },
    { id: "s03", audio: p("s03"), speaker: "Sofia", text: "Yes! *I'm* your classmate!", shot: CLASS_SOFIA },
    { id: "n10", audio: p("n10"), speaker: "Mira", text: "Level-up word: *classmate*. A classmate is a student in your class.", shot: CLASS_WIDE, overlay: { kind: "word", word: "classmate", meaning: "a student in your class" }, host: "talk" },
    { id: "n11", audio: p("n11"), speaker: "Mira", text: "Your turn! This is Ana. He or she?", shot: ANA, overlay: { kind: "quiz", prompt: "This is Ana. ___ is Leo's sister.", options: ["He", "She"], answer: 1, revealFromEnd: 2.4 }, host: "think" },
    { id: "n12", audio: p("n12"), speaker: "Mira", text: "This is Coco. She or it?", shot: COCO, overlay: { kind: "quiz", prompt: "This is Coco. ___ is a dog.", options: ["She", "It"], answer: 1, revealFromEnd: 1.6 }, host: "think" },
    { id: "n13", audio: p("n13"), speaker: "Mira", text: "I am, you are, he, she, it is. Boost your bandwidth!", shot: { ...WIDE, zoom: 1.05 }, overlay: { kind: "ending", line: "Boost your bandwidth!" }, host: "cheer" },
  ] satisfies Step[],
};
