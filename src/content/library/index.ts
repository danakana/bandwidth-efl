import type { BandId } from "../bands";
import type { AudioClip } from "../exams/types";
import { A_LEVEL_STORIES } from "./a-levels";
import { B_LEVEL_STORIES } from "./b-levels";
import { C_LEVEL_STORIES } from "./c-levels";
import type { Story } from "./types";

export type { Story, StoryQ, Gloss } from "./types";

/** Spread the right answers across A, B and C (the texts are written with them in order). */
const PATTERN = [2, 0, 1, 1, 2, 0, 0, 1, 2, 2, 1, 0];
let turn = 0;
const balance = (s: Story): Story => ({
  ...s,
  questions: s.questions.map((q) => {
    const target = PATTERN[turn++ % PATTERN.length] % q.options.length;
    const k = (target - q.answer + q.options.length) % q.options.length;
    const options = new Array<string>(q.options.length);
    q.options.forEach((o, j) => { options[(j + k) % q.options.length] = o; });
    return { ...q, options, answer: target };
  }),
});

export const LIBRARY: Story[] = [...A_LEVEL_STORIES, ...B_LEVEL_STORIES, ...C_LEVEL_STORIES].map(balance);
export const storyById = (id: string) => LIBRARY.find((s) => s.id === id);
export const storiesFor = (band: BandId) => LIBRARY.filter((s) => s.band === band);
export const wordsIn = (s: Story) => s.text.split(/\s+/).filter(Boolean).length;
/** Minutes to read: slower at lower bands. */
export const minutesFor = (s: Story) => Math.max(2, Math.round(wordsIn(s) / (s.band.startsWith("A") ? 70 : s.band.startsWith("B") ? 100 : 130)));

const VOICES = ["tPDVQaZ6fdDCUmYpHyYd", "9hb1f7xQcMLB90qbYSY3", "cgSgspJ2msm6clMCkdW9", "MAy1fRIg5hTqbhiwOUyh", "8DvnqWWA3WWXixOm7zQI", "bIHbv24MWmeRgasZH58o"];
/** One clip per paragraph. Played from a recording when it exists, otherwise read by the device voice. */
export const clipsFor = (s: Story): AudioClip[] => {
  const voice = VOICES[LIBRARY.indexOf(s) % VOICES.length];
  return s.text.split("\n\n").map((p, k) => ({ file: `p/lib-${s.id}-${k + 1}.mp3`, voice, script: p.replace(/\s+/g, " ").trim() }));
};
