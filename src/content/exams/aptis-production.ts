/**
 * Aptis General Writing and Speaking: part trainers and full practice tests.
 * Format from the Aptis General guide: Writing 4 parts (about 50 min), all on one club theme;
 * Speaking 4 parts (about 12 min), each question read aloud, answers timed.
 * These are marked by the teacher, so answers go to the Practice work inbox.
 * Original content for Bandwidth EFL. For teacher review.
 */
import type { PartInfo } from "./types";

export type SceneId = "kitchen" | "bus" | "bike" | "market" | "football" | "gaming";

/* ---------- Writing ---------- */
export type WQ = { id: string; ask: string; from?: string; min: number; max: number };
export type WritingPart = { part: number; intro: string; questions: WQ[]; email?: string };
export type WritingSet = { id: string; club: string; parts: WritingPart[] };

/** Parts 11–14 are Writing, 15–18 are Speaking, so they never clash with the scored parts 1–10. */
export const APTIS_W_PARTS: PartInfo[] = [
  { part: 11, group: "Writing", name: "Writing 1", skill: "Word-level writing", task: "Answer five short questions. One to five words is enough.", options: 0, approx: 5,
    question: "", method: ["Read the question and find the question word (what, where, when, who).", "Answer only that. One to five words is enough.", "Check spelling and capital letters for names and places."],
    trap: "Writing long sentences. Short and correct scores best here.", es: "Respuestas cortas: de una a cinco palabras. Revisa la ortografía." },
  { part: 12, group: "Writing", name: "Writing 2", skill: "Short text", task: "Write about yourself in full sentences: 20 to 30 words.", options: 0, approx: 1,
    question: "", method: ["Answer the exact question in your first sentence.", "Add one reason or example with because, so or for example.", "Write full sentences and count your words: 20 to 30."],
    trap: "A list of words, or a text about something else. The examiner checks that you answer the question.", es: "Escribe oraciones completas y responde exactamente lo que te preguntan." },
  { part: 13, group: "Writing", name: "Writing 3", skill: "Social media replies", task: "Reply to three messages from club members: 30 to 40 words each.", options: 0, approx: 3,
    question: "", method: ["Each message asks something. Find the question and answer it first.", "Give a reason and a short example or detail.", "Use a friendly, informal tone: Hi! / I think… / What about you?"],
    trap: "Answering only part of the message. Many messages ask two things.", es: "Cada mensaje hace una o dos preguntas: respóndelas todas, con una razón." },
  { part: 14, group: "Writing", name: "Writing 4", skill: "Informal and formal emails", task: "Read the club's email. Write to a friend (about 50 words) and to the manager (120 to 150 words).", options: 0, approx: 2,
    question: "", method: ["Read the club email and note the problem and the changes.", "Friend email: informal, your feelings, short (Hi / I can't believe… / See you!).", "Manager email: formal, polite, clear paragraphs: why you're writing, your opinion, a suggestion, a polite ending.", "Don't copy the club's sentences. Use your own words."],
    trap: "Writing both emails in the same style. The examiner marks the difference between informal and formal.", es: "El correo al amigo es informal; el correo al director es formal y más largo." },
];

export const APTIS_WRITING: WritingSet[] = [
  {
    id: "photo", club: "Photography Club",
    parts: [
      { part: 11, intro: "You want to join a Photography Club. Fill in the form. Write short answers (1 to 5 words).", questions: [
        { id: "w1-1", ask: "What do you like to photograph?", min: 1, max: 5 },
        { id: "w1-2", ask: "When do you usually take photos?", min: 1, max: 5 },
        { id: "w1-3", ask: "What do you use to take photos?", min: 1, max: 5 },
        { id: "w1-4", ask: "Where would you like to travel?", min: 1, max: 5 },
        { id: "w1-5", ask: "What's your favourite colour?", min: 1, max: 5 },
      ] },
      { part: 12, intro: "You are a new member of the Photography Club. Fill in the form. Write in full sentences (20 to 30 words).", questions: [
        { id: "w2-1", ask: "Please tell us why you want to join the Photography Club.", min: 20, max: 30 },
      ] },
      { part: 13, intro: "You are talking to other members of the club in a chat room. Reply to each message in full sentences (30 to 40 words each).", questions: [
        { id: "w3-1", from: "Sofía", ask: "Hi, welcome to the club! Do you prefer taking photos of people or of places? Why?", min: 30, max: 40 },
        { id: "w3-2", from: "Mateo", ask: "What's the best photo you've ever taken? Tell us about it.", min: 30, max: 40 },
        { id: "w3-3", from: "Laura", ask: "We want to have an exhibition of our photos. Where should we have it, and why?", min: 30, max: 40 },
      ] },
      { part: 14, intro: "You are a member of the Photography Club. You received this email from the club.",
        email: "Dear member,\n\nWe are sorry to tell you that our trip to the Coffee Region next month has been cancelled, because the bus company has closed. Instead, we will have a photography workshop in the school hall on the same day. The workshop costs 20,000 pesos.\n\nPlease tell us what you think.\n\nThe Club Manager",
        questions: [
          { id: "w4-1", ask: "Write an email to your friend, who is also a member of the club. Write about your feelings and what you think about the change. Write about 50 words.", min: 40, max: 60 },
          { id: "w4-2", ask: "Write an email to the club manager. Write about your feelings and what you think about the change, and make a suggestion. Write 120 to 150 words.", min: 120, max: 150 },
        ] },
    ],
  },
  {
    id: "film", club: "Film Club",
    parts: [
      { part: 11, intro: "You want to join a Film Club. Fill in the form. Write short answers (1 to 5 words).", questions: [
        { id: "w1-1", ask: "What kind of films do you like?", min: 1, max: 5 },
        { id: "w1-2", ask: "Who do you watch films with?", min: 1, max: 5 },
        { id: "w1-3", ask: "What's your favourite snack?", min: 1, max: 5 },
        { id: "w1-4", ask: "Where do you watch films?", min: 1, max: 5 },
        { id: "w1-5", ask: "Which day is best for you?", min: 1, max: 5 },
      ] },
      { part: 12, intro: "You are a new member of the Film Club. Fill in the form. Write in full sentences (20 to 30 words).", questions: [
        { id: "w2-1", ask: "Please tell us about your favourite film and why you like it.", min: 20, max: 30 },
      ] },
      { part: 13, intro: "You are talking to other members of the club in a chat room. Reply to each message in full sentences (30 to 40 words each).", questions: [
        { id: "w3-1", from: "Camila", ask: "Hi! Do you prefer watching films at the cinema or at home? Why?", min: 30, max: 40 },
        { id: "w3-2", from: "Andrés", ask: "Is there a film you have watched many times? Tell us about it.", min: 30, max: 40 },
        { id: "w3-3", from: "Valeria", ask: "Some people say books are always better than films. What do you think?", min: 30, max: 40 },
      ] },
      { part: 14, intro: "You are a member of the Film Club. You received this email from the club.",
        email: "Dear member,\n\nFrom next month, the club will meet on Saturday mornings at 8 a.m. instead of Friday afternoons. Also, every member will need to pay 10,000 pesos a month, because we now have to pay to show the films.\n\nPlease tell us what you think.\n\nThe Club Manager",
        questions: [
          { id: "w4-1", ask: "Write an email to your friend, who is also a member of the club. Write about your feelings and what you think about the changes. Write about 50 words.", min: 40, max: 60 },
          { id: "w4-2", ask: "Write an email to the club manager. Write about your feelings and what you think about the changes, and make a suggestion. Write 120 to 150 words.", min: 120, max: 150 },
        ] },
    ],
  },
];

/* ---------- Speaking ---------- */
export type SQ = { ask: string; seconds: number };
export type SpeakingPart = { part: number; intro: string; scenes?: SceneId[]; prep?: number; questions: SQ[] };
export type SpeakingSet = { id: string; parts: SpeakingPart[] };

export const APTIS_S_PARTS: PartInfo[] = [
  { part: 15, group: "Speaking", name: "Speaking 1", skill: "Personal information", task: "Answer three questions about yourself. 30 seconds each.", options: 0, approx: 3,
    question: "", method: ["Answer in a full sentence, then add one detail.", "Use the 30 seconds: answer + reason + example.", "Speak clearly. Don't worry about small mistakes."],
    trap: "One-word answers. 'Yes.' scores very little; 'Yes, I have two brothers and…' scores.", es: "Responde con una oración completa y agrega un detalle." },
  { part: 16, group: "Speaking", name: "Speaking 2", skill: "Describe, express opinion", task: "Describe a picture, then answer two questions. 45 seconds each.", options: 0, approx: 3,
    question: "", method: ["Describe: where it is, who you can see, what they are doing (present continuous), how they feel.", "Use 'In the picture…', 'On the left / right…', 'It looks like…'.", "Questions 2 and 3: your experience, then your opinion with a reason."],
    trap: "Listing objects ('a pot, a table, a man'). Describe actions and feelings.", es: "Describe acciones con presente continuo: 'They are cooking…'." },
  { part: 17, group: "Speaking", name: "Speaking 3", skill: "Describe and compare", task: "Compare two pictures, then answer two questions. 45 seconds each.", options: 0, approx: 3,
    question: "", method: ["Say what the pictures have in common, then the main difference.", "Use comparisons: both, whereas, while, -er than, more … than.", "Choose a side and give two reasons."],
    trap: "Describing each picture separately without comparing them.", es: "Compara: 'In both pictures…', 'whereas', 'more … than'." },
  { part: 18, group: "Speaking", name: "Speaking 4", skill: "Discuss an abstract topic", task: "Plan for one minute, then answer three linked questions in one two-minute talk.", options: 0, approx: 3,
    question: "", method: ["Use the minute to write key words for each question, not sentences.", "Story question first: when, where, what happened, how you felt.", "Then the general questions: give your opinion, a reason and an example.", "Keep talking for the full two minutes; use linking words (first, also, however, in the end)."],
    trap: "Finishing after 40 seconds. Plan enough to fill two minutes.", es: "Usa el minuto para escribir palabras clave; habla los dos minutos completos." },
];

export const APTIS_SPEAKING: SpeakingSet[] = [
  {
    id: "a",
    parts: [
      { part: 15, intro: "Answer three questions about yourself. You have 30 seconds for each answer.", questions: [
        { ask: "Please tell me about your family.", seconds: 30 },
        { ask: "What do you usually do after school?", seconds: 30 },
        { ask: "Tell me about the place where you live.", seconds: 30 },
      ] },
      { part: 16, intro: "Look at the picture and answer three questions. You have 45 seconds for each answer.", scenes: ["kitchen"], questions: [
        { ask: "Describe this picture.", seconds: 45 },
        { ask: "Tell me about a meal you enjoy eating with your family.", seconds: 45 },
        { ask: "Why do you think some young people don't learn to cook?", seconds: 45 },
      ] },
      { part: 17, intro: "Look at the two pictures and answer three questions. You have 45 seconds for each answer.", scenes: ["bus", "bike"], questions: [
        { ask: "Tell me what you see in the two pictures.", seconds: 45 },
        { ask: "Which way of travelling would you prefer, and why?", seconds: 45 },
        { ask: "How could cities make it easier for people to travel without cars?", seconds: 45 },
      ] },
      { part: 18, intro: "You will see three questions. You have one minute to plan, then two minutes to answer all three.", prep: 60, questions: [
        { ask: "Tell me about a time when you helped someone.", seconds: 40 },
        { ask: "Why do some people volunteer to help others?", seconds: 40 },
        { ask: "Should schools make students do volunteer work? Why or why not?", seconds: 40 },
      ] },
    ],
  },
  {
    id: "b",
    parts: [
      { part: 15, intro: "Answer three questions about yourself. You have 30 seconds for each answer.", questions: [
        { ask: "What do you like doing at weekends?", seconds: 30 },
        { ask: "Tell me about your best friend.", seconds: 30 },
        { ask: "What's the weather like where you live?", seconds: 30 },
      ] },
      { part: 16, intro: "Look at the picture and answer three questions. You have 45 seconds for each answer.", scenes: ["market"], questions: [
        { ask: "Describe this picture.", seconds: 45 },
        { ask: "Tell me about a place where you like to go shopping.", seconds: 45 },
        { ask: "Do you think small shops and markets will disappear in the future? Why?", seconds: 45 },
      ] },
      { part: 17, intro: "Look at the two pictures and answer three questions. You have 45 seconds for each answer.", scenes: ["football", "gaming"], questions: [
        { ask: "Tell me what you see in the two pictures.", seconds: 45 },
        { ask: "Which free-time activity is better for young people, and why?", seconds: 45 },
        { ask: "Why do you think many young people spend so much time on screens?", seconds: 45 },
      ] },
      { part: 18, intro: "You will see three questions. You have one minute to plan, then two minutes to answer all three.", prep: 60, questions: [
        { ask: "Tell me about a time when you learnt something difficult.", seconds: 40 },
        { ask: "Why do some people find it hard to learn new things?", seconds: 40 },
        { ask: "Is it better to learn from a teacher or from the internet? Why?", seconds: 40 },
      ] },
    ],
  },
];

export const APTIS_PRODUCTION_PARTS = [...APTIS_W_PARTS, ...APTIS_S_PARTS];

/** Practice inbox label for an Aptis node id ("aptis-w13", "aptis-s16"). */
export function aptisLabel(nodeId: string | null | undefined): string | null {
  const m = nodeId?.match(/^aptis-[ws](\d+)$/);
  if (!m) return null;
  const p = APTIS_PRODUCTION_PARTS.find((x) => x.part === Number(m[1]));
  return p ? `Aptis ${p.name}: ${p.skill}` : null;
}

/** Coins a student earns when the teacher gives this Aptis level (XP is three times this). Matches the server. */
export const APTIS_MARK_COINS: Record<string, number> = { A0: 0, A1: 2, A2: 4, B1: 6, B2: 8, C: 10 };
