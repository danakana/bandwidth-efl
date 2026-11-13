/**
 * IELTS Academic Writing and Speaking. Marked by the teacher with a band (1 to 9).
 * Writing: Task 1 describes a chart (at least 150 words, about 20 min), Task 2 is an essay (at least 250 words, about 40 min).
 * Speaking: Part 1 interview, Part 2 a one-minute plan then up to two minutes' talk, Part 3 discussion.
 * Chart data is invented for practice. Original content for Bandwidth EFL. For teacher review.
 */
import type { PartInfo } from "./types";
import type { SpeakingSet, WritingSet } from "./aptis-production";

export type ChartId = "screen-time" | "park-visits";

export const IELTS_W_PARTS: PartInfo[] = [
  { part: 21, group: "Writing", name: "Writing Task 1", skill: "Describe a chart", task: "Summarise the main features of a chart in at least 150 words. About 20 minutes.", options: 0, approx: 1,
    question: "", method: ["Introduction: say what the chart shows in your own words (don't copy the title).", "Overview: two sentences with the biggest trends or differences. This is the most important paragraph.", "Two body paragraphs with the key numbers, grouped and compared.", "No opinions and no conclusion with your ideas: only what the chart shows."],
    trap: "Listing every number one by one with no overview. Examiners look for the main trends first.", es: "Lo más importante es el resumen general (overview) con las tendencias principales." },
  { part: 22, group: "Writing", name: "Writing Task 2", skill: "Essay", task: "Write an essay of at least 250 words giving your opinion with reasons and examples. About 40 minutes.", options: 0, approx: 1,
    question: "", method: ["Read the question twice and underline every part you must answer.", "Plan for five minutes: your opinion and two main ideas with examples.", "Introduction (paraphrase + your answer), two or three body paragraphs, conclusion.", "Each body paragraph: one main idea, explained, with an example."],
    trap: "Answering only half the question (for example, giving one view when it asks you to discuss both).", es: "Responde todas las partes de la pregunta y da ejemplos concretos." },
];

export const IELTS_S_PARTS: PartInfo[] = [
  { part: 23, group: "Speaking", name: "Speaking Part 1", skill: "Interview", task: "Answer four questions about yourself and familiar topics. About 30 seconds each.", options: 0, approx: 4,
    question: "", method: ["Answer directly, then add a reason or an example.", "Two or three sentences is perfect. Don't give a speech.", "Use natural phrases: To be honest… / It depends…"],
    trap: "One-word answers, or memorised answers that don't fit the question.", es: "Responde directamente y agrega una razón o un ejemplo." },
  { part: 24, group: "Speaking", name: "Speaking Part 2", skill: "Long turn", task: "Plan for one minute using the cue card, then talk for up to two minutes.", options: 0, approx: 1,
    question: "", method: ["Use the minute to write key words for each point on the card.", "Follow the order of the points; they give your talk a structure.", "Tell it like a story: details, feelings, what happened.", "Keep going until the two minutes end. The last point (explain why) is where you can say most."],
    trap: "Stopping after 40 seconds. Plan enough ideas to fill two minutes.", es: "Escribe palabras clave para cada punto y habla los dos minutos completos." },
  { part: 25, group: "Speaking", name: "Speaking Part 3", skill: "Discussion", task: "Answer four deeper questions linked to Part 2. About 45 seconds each.", options: 0, approx: 4,
    question: "", method: ["Give your opinion, a reason, and an example.", "Talk about people in general, not only about yourself.", "Show both sides: On the one hand… On the other hand…"],
    trap: "Short personal answers. Part 3 asks for ideas about society, not just your own life.", es: "Habla de la sociedad en general y da ejemplos, no solo de tu vida." },
];

/** Charts for Task 1, with the information a screen reader needs. Invented data for practice. */
export const IELTS_CHARTS: Record<ChartId, { title: string; kind: "bars" | "lines"; unit: string; labels: string[]; series: { name: string; values: number[] }[] }> = {
  "screen-time": { title: "Average hours per week spent on four activities by teenagers in one city, 2015 and 2025", kind: "bars", unit: "hours per week",
    labels: ["Social media", "Homework", "Sport", "Reading for fun"],
    series: [{ name: "2015", values: [6, 10, 5, 4] }, { name: "2025", values: [14, 9, 3, 2] }] },
  "park-visits": { title: "Visitors to three national parks, 2010 to 2025 (thousands)", kind: "lines", unit: "thousand visitors",
    labels: ["2010", "2015", "2020", "2025"],
    series: [{ name: "Coastal park", values: [200, 300, 150, 400] }, { name: "Mountain park", values: [50, 90, 40, 120] }, { name: "Forest park", values: [20, 30, 35, 60] }] },
};

export const IELTS_WRITING: (WritingSet & { charts: Partial<Record<number, ChartId>> })[] = [
  {
    id: "ie-a", club: "IELTS Writing set A", charts: { 21: "screen-time" },
    parts: [
      { part: 21, intro: "The chart shows how many hours a week teenagers in one city spent on four activities in 2015 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.", questions: [
        { id: "t1", ask: "Write at least 150 words.", min: 150, max: 999 },
      ] },
      { part: 22, intro: "Some people think schools should ban mobile phones completely. Others believe students should be taught to use them responsibly. Discuss both views and give your own opinion. Give reasons for your answer and include any relevant examples from your own knowledge or experience.", questions: [
        { id: "t2", ask: "Write at least 250 words.", min: 250, max: 999 },
      ] },
    ],
  },
  {
    id: "ie-b", club: "IELTS Writing set B", charts: { 21: "park-visits" },
    parts: [
      { part: 21, intro: "The graph shows the number of visitors to three national parks between 2010 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.", questions: [
        { id: "t1", ask: "Write at least 150 words.", min: 150, max: 999 },
      ] },
      { part: 22, intro: "In many countries, more and more young people are moving from the countryside to big cities. What are the causes of this, and what can be done to solve the problems it creates? Give reasons for your answer and include any relevant examples from your own knowledge or experience.", questions: [
        { id: "t2", ask: "Write at least 250 words.", min: 250, max: 999 },
      ] },
    ],
  },
];

export const IELTS_SPEAKING: (SpeakingSet & { cues: Partial<Record<number, string>> })[] = [
  {
    id: "ie-a", cues: { 24: "Describe a place in your town or city that you like to visit. You should say:" },
    parts: [
      { part: 23, intro: "Answer four questions. About 30 seconds each.", questions: [
        { ask: "Do you live in a house or an apartment?", seconds: 30 },
        { ask: "What do you like most about your neighbourhood?", seconds: 30 },
        { ask: "Let's talk about music. What kind of music do you enjoy?", seconds: 30 },
        { ask: "Did you learn to play an instrument when you were a child?", seconds: 30 },
      ] },
      { part: 24, intro: "You have one minute to plan, then talk for up to two minutes.", prep: 60, questions: [
        { ask: "where it is", seconds: 30 },
        { ask: "how often you go there", seconds: 30 },
        { ask: "what you do there", seconds: 30 },
        { ask: "and explain why you like it.", seconds: 30 },
      ] },
      { part: 25, intro: "Answer four questions. About 45 seconds each.", questions: [
        { ask: "Why do people like to spend time in public places such as parks?", seconds: 45 },
        { ask: "How have towns and cities in your country changed in recent years?", seconds: 45 },
        { ask: "Should governments spend more money on public spaces or on roads? Why?", seconds: 45 },
        { ask: "Do you think people will spend more time at home in the future? Why?", seconds: 45 },
      ] },
    ],
  },
  {
    id: "ie-b", cues: { 24: "Describe a person who has taught you something important. You should say:" },
    parts: [
      { part: 23, intro: "Answer four questions. About 30 seconds each.", questions: [
        { ask: "Do you work, or are you a student?", seconds: 30 },
        { ask: "What subject do you enjoy most? Why?", seconds: 30 },
        { ask: "Let's talk about food. What do you usually eat for breakfast?", seconds: 30 },
        { ask: "Is there any food you didn't like as a child but like now?", seconds: 30 },
      ] },
      { part: 24, intro: "You have one minute to plan, then talk for up to two minutes.", prep: 60, questions: [
        { ask: "who the person is", seconds: 30 },
        { ask: "what they taught you", seconds: 30 },
        { ask: "how they taught it", seconds: 30 },
        { ask: "and explain why it was important to you.", seconds: 30 },
      ] },
      { part: 25, intro: "Answer four questions. About 45 seconds each.", questions: [
        { ask: "What makes a good teacher?", seconds: 45 },
        { ask: "Do people learn better from teachers or from the internet?", seconds: 45 },
        { ask: "Should older people keep learning new skills? Why?", seconds: 45 },
        { ask: "How might education change in the next twenty years?", seconds: 45 },
      ] },
    ],
  },
];

/** Bands the teacher can give, and the coins each earns (matches the server). */
export const IELTS_BANDS = ["3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9"];
export const ieltsMarkCoins = (band: string) => { const b = Number(band); return b >= 8 ? 10 : b >= 7 ? 8 : b >= 6 ? 6 : b >= 5 ? 4 : b >= 4 ? 2 : 1; };
