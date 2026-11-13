/**
 * IELTS Academic: Reading (and, next, Listening) part trainers and full practice tests.
 * Format from the official IELTS guide: Reading is 3 passages, 40 questions, 60 minutes,
 * with question types such as True / False / Not Given, matching headings, completion and multiple choice.
 * Passages here are shorter than the real test (about 500 words, not 700 to 900).
 * Original content for Bandwidth EFL. For teacher review.
 */
import type { ExamBlock, ExamConfig, ExamQ, FillBlock, MatchBlock, Opt, PartInfo, TextBlock } from "./types";

const o = (text: string, why: string): Opt => ({ text, why });

export const IELTS_PARTS: PartInfo[] = [
  { part: 1, group: "Reading", name: "True / False / Not Given", skill: "Checking facts", task: "Decide if each statement agrees with the passage, contradicts it, or isn't there.", options: 3, approx: 13,
    question: "", method: ["Read the statement and underline its key words.", "The questions follow the order of the passage: find the matching part.", "Agrees with the text: TRUE. Says the opposite: FALSE. Not mentioned at all: NOT GIVEN.", "Watch words like all, most, only, always: they often decide the answer."],
    trap: "Using what you know about the world. If the passage doesn't say it, it's NOT GIVEN, even if it's true in real life.", es: "TRUE: el texto lo dice. FALSE: el texto dice lo contrario. NOT GIVEN: el texto no lo menciona." },
  { part: 2, group: "Reading", name: "Matching headings", skill: "Main ideas", task: "Choose the best heading for each paragraph. There are more headings than paragraphs.", options: 9, approx: 7,
    question: "", method: ["Read the paragraph first, not the headings.", "Say its main idea in a few words: usually in the first or last sentence.", "Choose the heading that matches the whole paragraph, not one detail.", "Cross out headings you've used."],
    trap: "A heading that repeats a word from the paragraph but describes only one detail.", es: "Busca la idea principal de todo el párrafo, no una palabra que se repite." },
  { part: 3, group: "Reading", name: "Sentence and summary completion", skill: "Finding exact words", task: "Complete sentences or notes with words from the passage. Keep to the word limit.", options: 0, approx: 10,
    question: "", method: ["Read the instruction: how many words can you write?", "Predict the kind of word: a noun, a number, a place?", "Find the paraphrase in the passage and copy the word exactly.", "Check spelling and that the sentence is grammatical."],
    trap: "Writing too many words, or changing the word's form. Three words when the limit is two is wrong, even if the meaning is right.", es: "Copia las palabras exactas del texto y respeta el límite de palabras." },
  { part: 4, group: "Reading", name: "Multiple choice", skill: "Detail and opinion", task: "Choose the correct answer, A, B, C or D.", options: 4, approx: 10,
    question: "", method: ["Read the question (not the options) and find the right part of the passage.", "Read that part carefully and answer in your own head.", "Now find the option that matches. Remove the ones the text doesn't support."],
    trap: "Options that copy words from the passage but change the meaning.", es: "Las opciones que copian palabras del texto suelen ser trampas: revisa el significado." },
];

export const IELTS: ExamConfig = { id: "ielts", label: "IELTS Academic", parts: IELTS_PARTS, neverBlank: true };

/* ---------- Passages ---------- */

const SLEEP = `For decades, parents and teachers have complained that teenagers stay up too late and are impossible to wake in the morning. Many assumed the cause was simply bad habits: too much television, too many video games, or a lack of discipline. Research carried out since the 1990s, however, suggests that the explanation is largely biological.

Every person has an internal clock, known as the circadian rhythm, which tells the body when to feel sleepy and when to feel alert. One of its most important signals is melatonin, a hormone that rises in the evening and prepares the body for sleep. In children, melatonin levels usually start to rise at around eight or nine o'clock at night. During puberty, this rise is delayed by up to two hours. As a result, a typical sixteen-year-old does not feel truly sleepy until about eleven o'clock, even if he or she is tired.

The American sleep researcher Mary Carskadon was one of the first to measure this shift. In a series of studies at a summer sleep laboratory, she found that adolescents who were allowed to sleep as long as they wanted chose to sleep for around nine hours a night, considerably more than most of them got during the school year.

The problem is that school timetables rarely take this into account. In many countries, secondary schools begin earlier than primary schools, often before half past seven. A student who cannot fall asleep before eleven and must get up at six is losing up to two hours of sleep every night. Over a five-day week, that adds up to the equivalent of a full night without sleep.

The effects of this lost sleep are well documented. Tired students find it harder to concentrate and remember new information, and they are more likely to feel irritable or anxious. Some studies have also linked short sleep to a higher number of road accidents among young drivers.

A few school districts have tried a simple solution: starting the day later. When schools in Seattle, in the United States, moved their start time from 7:50 to 8:45 in 2016, researchers found that students slept an average of 34 minutes longer each night. Attendance improved, and grades in biology classes rose by about four and a half per cent. Not everyone welcomed the change, however. Some parents complained that it made family schedules harder to organise, and sports coaches worried about training times.

Experts agree that later start times are not the whole answer. Bright screens in the evening can delay melatonin even further, so many doctors recommend switching off phones an hour before bed. Getting natural light in the morning, on the other hand, can help to reset the internal clock. Teenagers, it seems, are not lazy; they are simply living on a different schedule from the adults around them.`;

const MED: [string, string][] = [
  ["A", "In 2016, the Colombian city of Medellín began an unusual experiment. Instead of building more roads or installing air-conditioning, it decided to plant. Over the next three years, the city turned 18 of its busiest roads and 12 neglected waterways into what it called \"green corridors\": long lines of trees, palms, shrubs and climbing plants connecting parks across the city."],
  ["B", "The reason was heat. Like many fast-growing cities, Medellín had become noticeably hotter than the countryside around it, a problem known as the urban heat island effect. Concrete and asphalt absorb sunlight during the day and release it slowly at night, so temperatures in the centre stayed high long after sunset. Residents of the poorest neighbourhoods, where there were fewest trees, suffered the most."],
  ["C", "The results came faster than expected. Within three years, average temperatures along the corridors had fallen by around two degrees Celsius, according to city officials. Shaded pavements were up to ten degrees cooler than unshaded ones on sunny afternoons. The plants also trap dust and absorb some of the pollution from traffic."],
  ["D", "Perhaps the most original part of the project was the choice of people to look after it. Rather than hiring outside companies, the city trained local residents, many of them from low-income backgrounds, as gardeners. Around 75 people, including former prisoners, took courses in planting and maintenance. For many, it was their first formal job."],
  ["E", "The project was not cheap. The first phase cost about 16.3 million US dollars. Supporters point out, however, that this is far less than the cost of cooling buildings with air-conditioning, which also uses large amounts of electricity and makes the air outside even warmer."],
  ["F", "Wildlife has also returned. Biologists have recorded more species of birds and butterflies along the corridors, which act as safe routes between larger green areas. In some places, animals that had not been seen in the city for years have reappeared."],
  ["G", "In 2019 the project won an international award for cooling cities with nature, and teams from Latin America, Asia and Africa have since come to study it. Its designers admit that it cannot solve every problem: trees take years to grow, and some residents complain about falling leaves blocking drains. But the corridors have shown that a city can become cooler, cleaner and more pleasant without waiting for expensive technology."],
];

const CORAL = `Scientists who want to know what the climate was like hundreds of years ago face an obvious difficulty: thermometers have only existed since the seventeenth century, and reliable records of sea temperature go back little more than 150 years. To look further into the past, they rely on natural archives, materials that record changes in the environment as they form. Tree rings and ice from glaciers are well-known examples. In the tropical oceans, one of the most valuable archives is coral.

Reef-building corals grow by adding thin layers of calcium carbonate to their skeletons, in a similar way to how trees add rings. Some large corals of the genus Porites can live for more than 400 years and grow up to two centimetres a year. When scientists drill into one of these corals and cut the core into thin slices, X-rays reveal light and dark bands, each pair representing a single year.

The bands contain more than a date. As coral grows, it takes in small amounts of chemical elements from the seawater, and the proportions change with temperature. In particular, the ratio of strontium to calcium in the skeleton is lower when the water is warmer. By measuring this ratio, researchers can estimate past sea temperatures with an accuracy of about half a degree. Other chemical signals record rainfall, river flow and even the amount of dust blowing from nearby deserts.

Drilling a core is a delicate operation. Divers use a drill powered from a boat and work slowly to avoid breaking the core, which may be several metres long. Afterwards, the hole is filled with a concrete plug so that the colony can grow over it. Studies have shown that most corals recover completely within a few years.

Coral records have changed what scientists know about natural climate patterns such as El Niño, the periodic warming of the eastern Pacific that brings floods to Peru and drought to Australia. Cores from the island of Kiritimati show that El Niño events have varied greatly in strength over the last 7,000 years, and that some of the strongest have occurred in recent decades.

Ironically, the archive itself is in danger. When the sea becomes too warm, corals expel the tiny algae that live in their tissues and give them their colour, a process known as bleaching. If high temperatures continue, the coral may die. Some researchers are now racing to collect cores from the oldest colonies before they are lost, storing them in freezers so that future scientists can continue to study them.`;

const BIKE: [string, string][] = [
  ["A", "At the end of the nineteenth century, the bicycle was one of the most important inventions in the world. It gave ordinary people the freedom to travel further than they could walk, and in many cities it became the main form of transport for workers."],
  ["B", "Then came the car. After the Second World War, as cars became cheaper, cities in Europe and the Americas were redesigned around them. Wide roads replaced narrow streets, and cycling began to look old-fashioned and dangerous."],
  ["C", "The Netherlands chose a different path. In the 1970s, after protests about the number of children killed in road accidents, Dutch cities began building separate lanes for bicycles. Today more than a quarter of all trips in the country are made by bike."],
  ["D", "In Latin America, Bogotá became a pioneer. Every Sunday since 1974, the Ciclovía has closed more than 120 kilometres of main roads to cars, and over a million people come out to cycle, run or skate. The idea has since been copied in hundreds of cities around the world."],
  ["E", "Electric bicycles have brought cycling to new groups of people. Because a small motor helps with hills and long distances, older riders, and people who need to arrive at work in formal clothes, can cycle without getting tired or hot."],
  ["F", "Not every problem has been solved. In many cities, cyclists still share roads with buses and trucks, and bicycle theft remains common. Experts say that without safe lanes and secure parking, many people will continue to prefer their cars."],
];
const paras = (p: [string, string][]) => p.map(([l, t]) => `[${l}] ${t}`).join("\n\n");

/* ---------- Question builders ---------- */

const TFNG = ["TRUE", "FALSE", "NOT GIVEN"];
/** A True / False / Not Given statement. `a`: 0 TRUE, 1 FALSE, 2 NOT GIVEN. */
const tf = (id: string, prompt: string, a: 0 | 1 | 2, why: string): ExamQ => ({
  id, prompt, answer: a,
  options: TFNG.map((t, k) => o(t, k === a ? why : k === 0 ? "The passage doesn't say this." : k === 1 ? "The passage doesn't say the opposite." : "The passage does give this information.")),
});
const tfBlock = (id: string, title: string, text: string, qs: ExamQ[]): TextBlock => ({ kind: "text", part: 1, id, title, text, questions: qs });

const mc = (id: string, prompt: string, a: number, opts: [string, string][]): ExamQ => ({ id, prompt, answer: a, options: opts.map(([t, w]) => o(t, w)) });

const fill = (id: string, title: string, text: string, max: number, items: [string, string[], string][], notesTitle?: string): FillBlock => ({
  kind: "fill", part: 3, id, title, text, maxWords: max, notesTitle,
  instruction: max === 1 ? "Write ONE WORD ONLY from the passage for each answer." : `Write NO MORE THAN ${max === 2 ? "TWO" : "THREE"} WORDS AND/OR A NUMBER from the passage for each answer.`,
  items: items.map(([prompt, accept, why], k) => ({ id: `${id}-${k + 1}`, prompt, accept, why })),
});

const headings = (id: string, title: string, list: string[], p: [string, string][], answers: number[], whys: string[]): MatchBlock => ({
  kind: "match", part: 2, id, title, paragraphs: true, itemLabel: "Paragraph",
  words: list.map((w) => ({ w })),
  items: p.map(([l, t], k) => ({ id: `${id}-${l}`, desc: t, answer: answers[k], why: whys[k] })),
});

/* ---------- Passage 1: sleep ---------- */
const S_TITLE = "Why teenagers can't fall asleep";
const P1_TF = tfBlock("ie-sleep-tf", S_TITLE, SLEEP, [
  tf("ie-s-1", "People once believed that teenagers' late nights were caused by their behaviour.", 0, "\"Many assumed the cause was simply bad habits\": bad habits are behaviour."),
  tf("ie-s-2", "Melatonin helps people feel more alert in the evening.", 1, "Melatonin \"prepares the body for sleep\": the opposite of alert."),
  tf("ie-s-3", "During puberty, melatonin starts to rise later than it does in childhood.", 0, "\"During puberty, this rise is delayed by up to two hours.\""),
  tf("ie-s-4", "Carskadon's sleep laboratory was part of a university hospital.", 2, "The passage only says it was a \"summer sleep laboratory\". Where it was isn't mentioned."),
  tf("ie-s-5", "When they could choose, the teenagers in Carskadon's studies slept less than during the school year.", 1, "They slept around nine hours, \"considerably more\" than during the school year."),
  tf("ie-s-6", "In many countries, secondary schools start earlier than primary schools.", 0, "\"In many countries, secondary schools begin earlier than primary schools.\""),
  tf("ie-s-7", "Most parents in Seattle were against the later start time.", 2, "Only \"some parents complained\". The passage doesn't say what most parents thought."),
]);
const P1_FILL = fill("ie-sleep-fill", S_TITLE, SLEEP, 2, [
  ["The body's internal clock is also known as the ___.", ["circadian rhythm"], "\"an internal clock, known as the circadian rhythm\"."],
  ["During puberty, the evening rise in melatonin can be delayed by up to ___.", ["two hours", "2 hours"], "\"this rise is delayed by up to two hours\"."],
  ["Over a five-day week, the sleep students lose is equal to a whole ___ without sleep.", ["night"], "\"the equivalent of a full night without sleep\"."],
  ["After Seattle's change, students slept an average of ___ more each night.", ["34 minutes", "thirty-four minutes", "thirty four minutes"], "\"students slept an average of 34 minutes longer each night\"."],
  ["After the later start, grades went up in ___ classes.", ["biology"], "\"grades in biology classes rose by about four and a half per cent\"."],
  ["Many doctors suggest switching off phones ___ before going to bed.", ["an hour", "one hour", "1 hour"], "\"switching off phones an hour before bed\"."],
]);

/* ---------- Passage 2: Medellín ---------- */
const M_TITLE = "The green corridors of Medellín";
const M_HEAD = ["Measuring the difference", "A plan to build new parks", "Plants instead of roads", "Jobs for local people", "Why the city needed to cool down", "Animals come back", "New rules for drivers", "A cheaper option than machines", "Praise from abroad, and some limits"];
const P2_HEAD = headings("ie-med-head", M_TITLE, M_HEAD, MED, [2, 4, 0, 3, 7, 5, 8], [
  "The city chose to plant trees and plants \"instead of building more roads\".",
  "The paragraph explains the heat island problem: the reason the city had to cool down.",
  "Two degrees cooler, ten degrees cooler on pavements: the paragraph measures the results.",
  "Local residents, including former prisoners, were trained as gardeners: their first formal job.",
  "The cost is compared with air-conditioning, which costs more: plants are the cheaper option.",
  "Birds, butterflies and other animals have returned.",
  "An international award, visitors from other continents, then the problems that remain.",
]);
const P2_MC: TextBlock = { kind: "text", part: 4, id: "ie-med-mc", title: M_TITLE, text: paras(MED), questions: [
  mc("ie-m-1", "Why did Medellín create the green corridors?", 1, [["To reduce traffic in the centre", "Traffic isn't the reason given."], ["To lower temperatures in the city", "\"The reason was heat.\" (paragraph B)"], ["To attract more tourists", "Tourists aren't mentioned."], ["To build new parks", "The corridors connect existing parks; they aren't new parks."]]),
  mc("ie-m-2", "According to paragraph B, who suffered most from the heat?", 1, [["People living in the city centre", "The centre stayed hot, but the paragraph says who suffered most."], ["People in poor areas with few trees", "\"Residents of the poorest neighbourhoods, where there were fewest trees, suffered the most.\""], ["People living near rivers", "Rivers aren't linked to the heat in this paragraph."], ["People in the countryside", "The countryside is cooler than the city."]]),
  mc("ie-m-3", "What does the passage say about shaded pavements?", 2, [["They were two degrees cooler at night.", "Two degrees is the average along the corridors, not the pavements."], ["They were cooler only in the morning.", "The comparison is for sunny afternoons."], ["They could be up to ten degrees cooler on sunny afternoons.", "\"Shaded pavements were up to ten degrees cooler than unshaded ones on sunny afternoons.\""], ["They were as hot as unshaded pavements.", "The opposite: they were much cooler."]]),
  mc("ie-m-4", "What was unusual about the gardeners?", 3, [["They were trained biologists.", "Biologists studied the wildlife; they weren't the gardeners."], ["They came from other countries.", "Visitors came from abroad, not the gardeners."], ["They worked without pay.", "It was \"their first formal job\", so they were paid."], ["They were local residents, some of them former prisoners.", "\"The city trained local residents … including former prisoners.\""]]),
  mc("ie-m-5", "Why do supporters say the cost was reasonable?", 0, [["Air-conditioning would cost more and warm the air outside.", "\"Far less than the cost of cooling buildings with air-conditioning, which … makes the air outside even warmer.\""], ["Other countries paid for the project.", "Other countries sent teams to study it, not money."], ["The trees produce fruit that can be sold.", "Fruit isn't mentioned."], ["The gardeners were paid very little.", "Salaries aren't mentioned."]]),
  mc("ie-m-6", "What is the writer's conclusion?", 2, [["Green corridors solve every problem a city has.", "The designers admit \"it cannot solve every problem\"."], ["Technology works better than plants.", "The writer says the opposite."], ["A city can improve without expensive technology, though there are limits.", "The last paragraph gives both the limits and the conclusion."], ["Trees grow too slowly to be useful.", "Slow growth is one limit, not the conclusion."]]),
] };

/* ---------- Passage 3: coral ---------- */
const C_TITLE = "Reading the ocean's past in coral";
const P3_MC: TextBlock = { kind: "text", part: 4, id: "ie-coral-mc", title: C_TITLE, text: CORAL, questions: [
  mc("ie-c-1", "Why do scientists use natural archives?", 3, [["Thermometers are not accurate enough.", "Accuracy isn't the problem; the problem is how far back the records go."], ["Ice is easier to study than coral.", "The passage doesn't compare them."], ["Tree rings show ocean temperatures.", "Tree rings are an example of an archive, not of ocean temperatures."], ["Direct temperature records only go back a short time.", "Records of sea temperature \"go back little more than 150 years\"."]]),
  mc("ie-c-2", "What does each pair of light and dark bands show?", 0, [["One year of growth", "\"each pair representing a single year\""], ["One month of growth", "The bands are yearly."], ["One period of bleaching", "Bleaching is in the last paragraph and isn't linked to bands."], ["One centimetre of growth", "Up to two centimetres a year is the growth rate, not what a band shows."]]),
  mc("ie-c-3", "What happens when the water is warmer?", 2, [["The coral takes in more strontium.", "The ratio is lower, so there's relatively less strontium."], ["The bands become darker.", "The colour of the bands isn't linked to temperature."], ["The strontium-to-calcium ratio is lower.", "\"The ratio of strontium to calcium in the skeleton is lower when the water is warmer.\""], ["The coral grows two centimetres faster.", "Two centimetres is the yearly growth, not a temperature effect."]]),
  mc("ie-c-4", "What happens after a core has been drilled?", 1, [["The whole coral is taken to a laboratory.", "Only the core is removed."], ["The hole is filled so the coral can grow over it.", "\"The hole is filled with a concrete plug so that the colony can grow over it.\""], ["Divers plant new coral in the hole.", "They fill it with concrete, not new coral."], ["The colony usually dies.", "\"Most corals recover completely within a few years.\""]]),
  mc("ie-c-5", "What do the cores from Kiritimati show?", 0, [["El Niño's strength has changed a lot, and some of the strongest events are recent.", "\"Varied greatly in strength … some of the strongest have occurred in recent decades.\""], ["El Niño has always had the same strength.", "The opposite: it \"varied greatly\"."], ["El Niño began about 7,000 years ago.", "7,000 years is how far back the cores go, not when El Niño began."], ["El Niño only affects Australia.", "It brings floods to Peru and drought to Australia."]]),
] };
const P3_TF = tfBlock("ie-coral-tf", C_TITLE, CORAL, [
  tf("ie-c-6", "Reliable records of sea temperature go back about 150 years.", 0, "\"Reliable records of sea temperature go back little more than 150 years.\""),
  tf("ie-c-7", "Porites corals grow faster than any other type of coral.", 2, "Their growth rate is given, but they aren't compared with other corals."),
  tf("ie-c-8", "Chemicals in coral can give information about rainfall.", 0, "\"Other chemical signals record rainfall, river flow and even … dust.\""),
  tf("ie-c-9", "Drilling a core usually kills the coral.", 1, "\"Most corals recover completely within a few years.\""),
  tf("ie-c-10", "Scientists have stopped collecting cores because of bleaching.", 1, "The opposite: they are \"racing to collect cores\" before the corals are lost."),
]);
const P3_FILL = fill("ie-coral-fill", C_TITLE, CORAL, 2, [
  ["Corals build their skeletons from thin layers of ___.", ["calcium carbonate"], "\"adding thin layers of calcium carbonate to their skeletons\"."],
  ["The bands in a slice of coral can be seen using ___.", ["x-rays", "x rays", "xrays"], "\"X-rays reveal light and dark bands\"."],
  ["El Niño causes floods in ___.", ["Peru"], "\"brings floods to Peru and drought to Australia\"."],
  ["When corals lose their algae and colour, the process is called ___.", ["bleaching"], "\"a process known as bleaching\"."],
], "How coral records the past");

/* ---------- Passage 4 (trainer only): bicycles ---------- */
const B_TITLE = "The return of the bicycle";
const P4_HEAD = headings("ie-bike-head", B_TITLE,
  ["A weekly event that spread around the world", "Why cycling went out of fashion", "The cost of buying a bicycle", "Obstacles that remain", "An early symbol of freedom", "Technology that makes cycling easier", "A country that protected its cyclists", "Bicycle racing becomes popular"],
  BIKE, [4, 1, 6, 0, 5, 3], [
    "The bicycle \"gave ordinary people the freedom\" to travel.",
    "Cities were redesigned for cars and cycling looked \"old-fashioned and dangerous\".",
    "The Netherlands built separate lanes after protests about road deaths.",
    "Bogotá's Sunday Ciclovía \"has since been copied in hundreds of cities\".",
    "Electric bicycles, with a small motor, make hills and long distances easier.",
    "Shared roads, theft and the need for safe lanes: problems that remain.",
  ]);

/* ---------- Balance the answer letters in the A–D questions ---------- */
const PATTERN = [2, 0, 3, 1, 1, 3, 0, 2, 3, 2, 0, 1];
let turn = 0;
for (const x of [...P2_MC.questions, ...P3_MC.questions]) {
  const target = PATTERN[turn++ % PATTERN.length], k = (target - x.answer + 4) % 4;
  const rotated: Opt[] = new Array(4);
  x.options.forEach((opt, j) => { rotated[(j + k) % 4] = opt; });
  x.options = rotated; x.answer = target;
}

export const IELTS_BANK: Record<number, ExamBlock[]> = {
  1: [P1_TF, P3_TF],
  2: [P2_HEAD, P4_HEAD],
  3: [P1_FILL, P3_FILL],
  4: [P2_MC, P3_MC],
};

export type IeltsTest = { id: string; name: string; group: string; minutes: number; blocks: ExamBlock[] };
export const IELTS_TESTS: IeltsTest[] = [
  { id: "ielts-reading-a", name: "Reading test", group: "Reading", minutes: 60, blocks: [P1_TF, P1_FILL, P2_HEAD, P2_MC, P3_MC, P3_TF, P3_FILL] },
];

/** Official Academic Reading conversion: correct answers out of 40 → band. */
const READING_BANDS: [number, number][] = [[39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [0, 0]];
export function readingBand(correct: number, total = 40): number {
  const c = Math.round((correct / total) * 40);
  return READING_BANDS.find(([min]) => c >= min)![1];
}
