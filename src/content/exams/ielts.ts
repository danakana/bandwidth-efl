/**
 * IELTS Academic: Reading (and, next, Listening) part trainers and full practice tests.
 * Format from the official IELTS guide: Reading is 3 passages, 40 questions, 60 minutes,
 * with question types such as True / False / Not Given, matching headings, completion and multiple choice.
 * Passages here are shorter than the real test (about 500 words, not 700 to 900).
 * Original content for Bandwidth EFL. For teacher review.
 */
import type { AudioClip, ExamBlock, ExamConfig, ExamQ, FillBlock, MatchBlock, Opt, PartInfo, TextBlock } from "./types";

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

IELTS_PARTS.push(
  { part: 5, group: "Listening", name: "Form completion", skill: "Section 1: everyday conversation", task: "Listen to a conversation and complete a form. Write one word and/or a number.", options: 0, approx: 10,
    question: "", method: ["Before you listen, read the form and guess the kind of answer: a name, a number, a date?", "The answers come in order. Follow the form line by line.", "Names are often spelt out: write each letter carefully.", "Check spelling and the word limit at the end."],
    trap: "The speaker changes their mind or corrects a number (\"fifteen… no, fourteen\"). The last one is the answer.", es: "Cuidado: a veces la persona se corrige. La respuesta es la última que dice." },
  { part: 6, group: "Listening", name: "Multiple choice", skill: "Detail and opinion", task: "Listen and choose the correct answer, A, B or C.", options: 3, approx: 10,
    question: "", method: ["Read the questions before the recording starts and underline key words.", "You'll often hear all three options mentioned. Listen for which one is really the answer.", "If you miss one, move on to the next question. Don't lose the next answer too."],
    trap: "Hearing a word from an option. All three options are usually mentioned, but only one answers the question.", es: "Normalmente se mencionan las tres opciones: escucha cuál responde la pregunta." },
  { part: 7, group: "Listening", name: "Matching", skill: "Section 3: discussion", task: "Listen to a discussion and match each item to a person, place or idea.", options: 4, approx: 8,
    question: "", method: ["Read the list of options and the items before you listen.", "Speakers often discuss an idea before they decide. Wait for the decision.", "An option can be used more than once, or not at all."],
    trap: "Choosing the first idea you hear. Students often suggest something, then change the plan.", es: "Los estudiantes suelen cambiar de idea: espera la decisión final." },
  { part: 8, group: "Listening", name: "Lecture notes", skill: "Section 4: academic talk", task: "Listen to a lecture and complete the notes. Write one word and/or a number.", options: 0, approx: 10,
    question: "", method: ["Read the notes first: the headings tell you how the talk is organised.", "Predict the type of word for each gap: a noun, a number, an adjective?", "There's no break in the middle, so keep up with the notes.", "Check spelling and the word limit."],
    trap: "Writing what you expect instead of what you hear, or misspelling a word you heard correctly.", es: "Lee las notas antes de escuchar y revisa la ortografía al final." },
);

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
  mc("ie-m-3", "What does the passage say about shaded pavements?", 2, [["They were two degrees cooler at night.", "Two degrees is the average along the corridors, not the pavements."], ["They were cooler only in the early morning, before the sun rose.", "The comparison is for sunny afternoons."], ["They could be up to ten degrees cooler on sunny afternoons.", "\"Shaded pavements were up to ten degrees cooler than unshaded ones on sunny afternoons.\""], ["They were about as hot as unshaded pavements in the afternoon.", "The opposite: they were much cooler."]]),
  mc("ie-m-4", "What was unusual about the gardeners?", 3, [["They were trained biologists from the city university.", "Biologists studied the wildlife; they weren't the gardeners."], ["They came from other countries.", "Visitors came from abroad, not the gardeners."], ["They were volunteers who worked without any pay.", "It was \"their first formal job\", so they were paid."], ["They were local residents, some of them former prisoners.", "\"The city trained local residents … including former prisoners.\""]]),
  mc("ie-m-5", "Why do supporters say the cost was reasonable?", 0, [["Air-conditioning would cost more and warm the air outside.", "\"Far less than the cost of cooling buildings with air-conditioning, which … makes the air outside even warmer.\""], ["Other countries paid for the project.", "Other countries sent teams to study it, not money."], ["The trees produce fruit that the city can sell at markets.", "Fruit isn't mentioned."], ["The gardeners were paid very little for their work.", "Salaries aren't mentioned."]]),
  mc("ie-m-6", "What is the writer's conclusion?", 2, [["Green corridors solve every problem a city has.", "The designers admit \"it cannot solve every problem\"."], ["Modern cooling technology works better than plants in every case.", "The writer says the opposite."], ["A city can improve without expensive technology, though there are limits.", "The last paragraph gives both the limits and the conclusion."], ["Trees grow far too slowly to be useful for a city in a hurry.", "Slow growth is one limit, not the conclusion."]]),
] };

/* ---------- Passage 3: coral ---------- */
const C_TITLE = "Reading the ocean's past in coral";
const P3_MC: TextBlock = { kind: "text", part: 4, id: "ie-coral-mc", title: C_TITLE, text: CORAL, questions: [
  mc("ie-c-1", "Why do scientists use natural archives?", 3, [["Old thermometers were not accurate enough to use.", "Accuracy isn't the problem; the problem is how far back the records go."], ["Ice is easier to collect and study than coral.", "The passage doesn't compare them."], ["Tree rings show ocean temperatures.", "Tree rings are an example of an archive, not of ocean temperatures."], ["Direct temperature records only go back a short time.", "Records of sea temperature \"go back little more than 150 years\"."]]),
  mc("ie-c-2", "What does each pair of light and dark bands show?", 0, [["One year of growth", "\"each pair representing a single year\""], ["One month of growth", "The bands are yearly."], ["One period of bleaching", "Bleaching is in the last paragraph and isn't linked to bands."], ["One centimetre of growth", "Up to two centimetres a year is the growth rate, not what a band shows."]]),
  mc("ie-c-3", "What happens when the water is warmer?", 2, [["The coral takes in more strontium.", "The ratio is lower, so there's relatively less strontium."], ["The bands become darker.", "The colour of the bands isn't linked to temperature."], ["The strontium-to-calcium ratio is lower.", "\"The ratio of strontium to calcium in the skeleton is lower when the water is warmer.\""], ["The coral grows two centimetres faster.", "Two centimetres is the yearly growth, not a temperature effect."]]),
  mc("ie-c-4", "What happens after a core has been drilled?", 1, [["The whole coral is taken to a laboratory.", "Only the core is removed."], ["The hole is filled so the coral can grow over it.", "\"The hole is filled with a concrete plug so that the colony can grow over it.\""], ["Divers plant new coral in the hole.", "They fill it with concrete, not new coral."], ["The colony usually dies.", "\"Most corals recover completely within a few years.\""]]),
  mc("ie-c-5", "What do the cores from Kiritimati show?", 0, [["El Niño's strength has changed a lot, and some of the strongest events are recent.", "\"Varied greatly in strength … some of the strongest have occurred in recent decades.\""], ["El Niño has kept roughly the same strength for the last seven thousand years.", "The opposite: it \"varied greatly\"."], ["El Niño first appeared about 7,000 years ago and has grown steadily since then.", "7,000 years is how far back the cores go, not when El Niño began."], ["El Niño only affects Australia.", "It brings floods to Peru and drought to Australia."]]),
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

/* ---------- Listening ---------- */
const V = { isabelle: "tPDVQaZ6fdDCUmYpHyYd", jessica: "cgSgspJ2msm6clMCkdW9", aoife: "63T2Z5X6a8FKjTpmpqjH", akshara: "8DvnqWWA3WWXixOm7zQI", will: "bIHbv24MWmeRgasZH58o", hamish: "MAy1fRIg5hTqbhiwOUyh", noah: "9hb1f7xQcMLB90qbYSY3" };
/** A conversation: one clip per line, so each speaker keeps their voice. */
const talk = (id: string, w: string, m: string, lines: ["W" | "M", string][]): AudioClip[] =>
  lines.map(([who, script], k) => ({ file: `p/iel-${id}-${String(k + 1).padStart(2, "0")}.mp3`, voice: who === "W" ? w : m, script, who: who === "W" ? "Woman" : "Man" }));
const mono = (id: string, voice: string, paragraphs: string[]): AudioClip[] =>
  paragraphs.map((script, k) => ({ file: `p/iel-${id}-${String(k + 1).padStart(2, "0")}.mp3`, voice, script }));
const lfill = (id: string, title: string, audio: AudioClip[], instruction: string, max: number, notesTitle: string, items: [string, string[], string][]): FillBlock => ({
  kind: "fill", part: id.startsWith("s1") ? 5 : 8, id: `ie-${id}`, title, audio, instruction, maxWords: max, notesTitle,
  items: items.map(([prompt, accept, why], k) => ({ id: `ie-${id}-${k + 1}`, prompt, accept, why })),
});
const ONE = "Write ONE WORD AND/OR A NUMBER for each answer.";

const S1_AUDIO = talk("s1", V.isabelle, V.will, [
  ["W", "Good morning, Riverside Summer Science Camp. How can I help you?"],
  ["M", "Hi. I'd like to book a place for my son for the summer."],
  ["W", "Of course. Can I take his name, please?"],
  ["M", "Yes, it's Daniel Okafor. That's O, K, A, F, O, R."],
  ["W", "Thank you. And how old is Daniel?"],
  ["M", "He's fifteen. Oh, sorry, no. He'll be fifteen in September, but he's fourteen now."],
  ["W", "That's fine, the camp is for ages eleven to sixteen. What's your address?"],
  ["M", "Twenty-eight Station Road, Hillside."],
  ["W", "Station Road. And a contact phone number?"],
  ["M", "It's oh seven nine one, five eight four, two three six."],
  ["W", "Five eight four, two three six. Lovely. Now, which week would you like? We have weeks starting on the seventh, the fourteenth and the twenty-first of July."],
  ["M", "The seventh is no good, we're away. Let's say the week starting the fourteenth."],
  ["W", "And which course? There's space science, marine biology, or robotics and engineering."],
  ["M", "He was interested in space science, but his friends are doing robotics, so I think robotics and engineering."],
  ["W", "Great choice. The day starts at half past eight and finishes at four."],
  ["M", "Half past eight. Is lunch provided?"],
  ["W", "We have a café, but most children bring a packed lunch. It's cheaper."],
  ["M", "OK, he'll bring a packed lunch. Oh, and he's allergic to nuts."],
  ["W", "Thanks for telling me. I'll make a note of that."],
  ["M", "And how much is it?"],
  ["W", "It's one hundred and seventy-five pounds for the week. That includes all the materials."],
  ["M", "That's fine. Thank you."],
]);
const S1 = lfill("s1", "Summer camp booking", S1_AUDIO, ONE, 2, "Riverside Summer Science Camp: booking form", [
  ["Child's family name: ___", ["Okafor"], "He spells it: O, K, A, F, O, R."],
  ["Age: ___", ["14", "fourteen"], "He says fifteen, then corrects himself: \"he's fourteen now\"."],
  ["Address: 28 ___ Road, Hillside", ["Station"], "\"Twenty-eight Station Road, Hillside.\""],
  ["Phone: 0791 ___", ["584 236", "584236"], "\"Oh seven nine one, five eight four, two three six.\""],
  ["Week starting: ___ July", ["14", "14th", "fourteenth"], "The seventh is no good; he chooses the week starting the fourteenth."],
  ["Course: ___ and engineering", ["robotics"], "He mentions space science, then chooses robotics and engineering."],
  ["Start time each day: ___", ["8:30", "half past eight", "8.30"], "\"The day starts at half past eight.\""],
  ["Lunch: child brings a ___ lunch", ["packed"], "\"He'll bring a packed lunch.\""],
  ["Allergy: ___", ["nuts", "nut"], "\"He's allergic to nuts.\""],
  ["Cost per week: £___", ["175"], "\"One hundred and seventy-five pounds for the week.\""],
]);

const S2_AUDIO = mono("s2", V.hamish, [
  "Good morning, everyone, and welcome to the new Central Library. My name's Tom, and I'm going to tell you a little about the building before you explore it yourselves.",
  "The library opened in March, two months later than planned, because of problems with the glass roof. It cost twelve million pounds. Local businesses gave some of the money, but most of it came from the city council.",
  "The first thing most visitors notice is the light. The architects wanted the building to feel like being outdoors, so the roof is made almost entirely of glass, and there are trees growing inside the main hall.",
  "Membership is free for everyone who lives or studies in the city. You don't need a passport or a photo; you just need to show a document with your address, such as a bank statement. You can borrow up to twelve items at a time, for three weeks.",
  "Now, the floors. On the ground floor, you'll find the café and the children's library, which has a special storytelling corner. The first floor is where most of our books for adults are, and it also has the music room, where you can book a soundproof studio to practise an instrument.",
  "The second floor is our quiet floor: no phones, no talking, just individual study desks. And at the top, on the third floor, there's the local history archive, with old maps and newspapers going back two hundred years, and a roof terrace with views over the river.",
  "A few practical things. The library opens at eight in the morning on weekdays and at ten at weekends. We close at eight every evening, except on Sundays, when we close at five.",
]);
const lmc = (id: string, prompt: string, a: number, opts: [string, string][]): ExamQ => mc(id, prompt, a, opts);
const S2_MC: TextBlock = { kind: "text", part: 6, id: "ie-s2-mc", title: "A talk about the new library", text: "", audio: S2_AUDIO, questions: [
  lmc("ie-s2-1", "Why did the library open late?", 0, [["There were problems with the roof.", "\"Two months later than planned, because of problems with the glass roof.\""], ["There wasn't enough money.", "Money is mentioned, but not as the reason for the delay."], ["The trees took longer to grow.", "The trees are inside the hall; they didn't cause a delay."]]),
  lmc("ie-s2-2", "Where did most of the money come from?", 1, [["Local businesses", "Businesses gave \"some of the money\", not most."], ["The city council", "\"Most of it came from the city council.\""], ["Library members", "Membership is free."]]),
  lmc("ie-s2-3", "What did the architects want?", 2, [["A building that was cheap to heat", "Heating isn't mentioned."], ["A building made from local materials", "Materials aren't mentioned."], ["A building that felt like being outside", "\"The architects wanted the building to feel like being outdoors.\""]]),
  lmc("ie-s2-4", "To join the library, you need to show", 1, [["a passport from your home country.", "\"You don't need a passport.\""], ["a document with your address.", "\"You just need to show a document with your address.\""], ["a recent passport photo.", "\"You don't need … a photo.\""]]),
  lmc("ie-s2-5", "How many items can members borrow at one time?", 0, [["Twelve", "\"Up to twelve items at a time.\""], ["Three", "Three is the number of weeks."], ["Twenty", "Twenty isn't mentioned."]]),
  lmc("ie-s2-6", "What time does the library close on Sundays?", 2, [["Ten", "Ten is the weekend opening time."], ["Eight", "Eight is the closing time on other days."], ["Five", "\"Except on Sundays, when we close at five.\""]]),
] };
const S2_MATCH: MatchBlock = { kind: "match", part: 7, id: "ie-s2-match", title: "Which floor has each of these?", audio: S2_AUDIO,
  words: [{ w: "Ground floor" }, { w: "First floor" }, { w: "Second floor" }, { w: "Third floor" }],
  items: [
    { id: "ie-s2-7", desc: "Old newspapers", answer: 3, why: "The local history archive on the third floor has \"old maps and newspapers\"." },
    { id: "ie-s2-8", desc: "A place to practise an instrument", answer: 1, why: "The music room with a soundproof studio is on the first floor." },
    { id: "ie-s2-9", desc: "A storytelling area", answer: 0, why: "The children's library on the ground floor has \"a special storytelling corner\"." },
    { id: "ie-s2-10", desc: "Silent study", answer: 2, why: "The second floor is the quiet floor: \"no phones, no talking\"." },
  ] };

const S3_AUDIO = talk("s3", V.aoife, V.noah, [
  ["M", "So, Lucía, we've got two weeks to prepare this presentation on recycling plastic. Where should we start?"],
  ["W", "Well, our tutor said we should focus on one city rather than the whole country. I thought we could look at Bogotá, since there's so much information about it."],
  ["M", "Good idea. I read that only about seventeen per cent of the city's rubbish is recycled."],
  ["W", "Actually, I think that figure is out of date. The latest report says it's closer to twenty per cent."],
  ["M", "OK, we'll use the newer one. So who does what? I'm happy to find the statistics. I like working with numbers."],
  ["W", "Great. Then I'll interview someone. My aunt works for a recycling cooperative, so I could ask her about the people who collect materials from the streets."],
  ["M", "That would be really interesting. And what about the slides? I'm terrible at design."],
  ["W", "I'll make them, then. But you should write the introduction, because you're better at speaking in front of people."],
  ["M", "Fine. And the conclusion? I think we should write that together, once we know what we've found."],
  ["W", "Agreed. Oh, and we need a short video. Shall we both film something?"],
  ["M", "Let's ask Mr Díaz first whether videos count toward the time limit. If they do, we might not have space."],
  ["W", "Good point. The limit's fifteen minutes, isn't it?"],
  ["M", "Twelve, plus three for questions."],
  ["W", "Right. I think the hardest part is explaining why people don't recycle more."],
  ["M", "In my opinion, it's not that people don't care. It's that it isn't convenient. There aren't enough collection points."],
  ["W", "I partly agree, but I also think many people simply don't know which plastics can be recycled."],
  ["M", "Then maybe that's our main recommendation: clearer labels on packaging."],
  ["W", "Yes, that's practical. Let's meet on Friday to put it all together."],
]);
const S3_MATCH: MatchBlock = { kind: "match", part: 7, id: "ie-s3-match", title: "Who will do each task?", audio: S3_AUDIO,
  words: [{ w: "Lucía" }, { w: "Sam" }, { w: "Both of them" }],
  items: [
    { id: "ie-s3-1", desc: "Find the statistics", answer: 1, why: "Sam: \"I'm happy to find the statistics.\"" },
    { id: "ie-s3-2", desc: "Interview a recycling worker", answer: 0, why: "Lucía will interview her aunt, who works for a recycling cooperative." },
    { id: "ie-s3-3", desc: "Design the slides", answer: 0, why: "Sam is \"terrible at design\", so Lucía says \"I'll make them\"." },
    { id: "ie-s3-4", desc: "Write the introduction", answer: 1, why: "Lucía: \"You should write the introduction.\" Sam agrees." },
    { id: "ie-s3-5", desc: "Write the conclusion", answer: 2, why: "\"We should write that together.\" \"Agreed.\"" },
  ] };
const S3_MC: TextBlock = { kind: "text", part: 6, id: "ie-s3-mc", title: "Planning a presentation", text: "", audio: S3_AUDIO, questions: [
  lmc("ie-s3-6", "What did their tutor advise?", 0, [["Focus on one city", "\"Our tutor said we should focus on one city rather than the whole country.\""], ["Compare two countries", "The tutor said the opposite: one city, not the whole country."], ["Use only data from this year", "Data age comes up, but not as the tutor's advice."]]),
  lmc("ie-s3-7", "According to the latest report, how much of Bogotá's rubbish is recycled?", 1, [["About 17%", "Sam's figure is \"out of date\"."], ["About 20%", "\"The latest report says it's closer to twenty per cent.\""], ["About 50%", "Fifty isn't mentioned."]]),
  lmc("ie-s3-8", "Before making a video, they will", 2, [["film an interview with Lucía's aunt.", "The aunt will be interviewed; filming her isn't decided."], ["buy a new camera for the project.", "A camera isn't mentioned."], ["ask their tutor about the time limit.", "\"Let's ask Mr Díaz first whether videos count toward the time limit.\""]]),
  lmc("ie-s3-9", "How long can the presentation itself be?", 0, [["12 minutes", "\"Twelve, plus three for questions.\""], ["15 minutes", "Fifteen is Lucía's mistake, which Sam corrects."], ["3 minutes", "Three minutes is for questions."]]),
  lmc("ie-s3-10", "What will their main recommendation be?", 1, [["More collection points", "Sam mentions this, but they choose something else."], ["Clearer labels on packaging", "\"Maybe that's our main recommendation: clearer labels on packaging.\" \"Yes, that's practical.\""], ["Fines for people who don't recycle", "Fines aren't mentioned."]]),
] };

const S4_AUDIO = mono("s4", V.akshara, [
  "Today I want to talk about one of the most remarkable journeys in nature: bird migration. Every year, about four thousand species of birds, roughly forty per cent of all species, travel between the places where they breed and the places where they spend the winter. Colombia is an important stop for many of them: more than a hundred and fifty migrant species spend the northern winter here.",
  "Why do birds migrate? The main reason is food. In the northern summer, days are long and insects are plentiful, which is perfect for raising chicks. When winter comes, food becomes scarce, so birds fly south, where it is still available.",
  "The distances can be extraordinary. The Arctic tern holds the record: it flies from the Arctic to the Antarctic and back every year, a round trip of about seventy thousand kilometres. Smaller birds are just as impressive. The blackpoll warbler, which weighs only twelve grams, flies non-stop over the Atlantic Ocean for up to three days.",
  "How do they find their way? Scientists believe birds use several methods together. Young birds seem to be born with a sense of direction. They also use the position of the sun during the day and the stars at night. Perhaps most surprisingly, many birds can sense the Earth's magnetic field, rather like a compass. In one experiment, pigeons carrying small magnets found their way less accurately on cloudy days, when they could not see the sun.",
  "Preparing for migration takes a great deal of energy. Before leaving, many birds eat so much that they almost double their body weight, storing the extra energy as fat.",
  "Unfortunately, migration is becoming more dangerous. The biggest threat is the loss of habitat, especially the wetlands and forests where birds stop to rest and feed. City lights are another problem: they confuse birds that fly at night, and millions die every year after hitting glass buildings. In the next lecture, we'll look at how scientists track individual birds using tiny GPS devices.",
]);
const S4 = lfill("s4", "A lecture on bird migration", S4_AUDIO, ONE, 2, "Bird migration", [
  ["About ___ per cent of bird species migrate.", ["40", "forty"], "\"Roughly forty per cent of all species.\""],
  ["More than 150 migrant species spend the winter in ___.", ["Colombia"], "\"More than a hundred and fifty migrant species spend the northern winter here\", in Colombia."],
  ["The main reason for migrating: ___", ["food"], "\"The main reason is food.\""],
  ["Arctic tern: a round trip of about ___ km a year", ["70,000", "70000", "seventy thousand"], "\"A round trip of about seventy thousand kilometres.\""],
  ["Blackpoll warbler: weighs only ___ grams", ["12", "twelve"], "\"Weighs only twelve grams.\""],
  ["Navigation: the sun by day and the ___ at night", ["stars"], "\"The position of the sun during the day and the stars at night.\""],
  ["Many birds sense the Earth's magnetic field, like a ___", ["compass"], "\"Rather like a compass.\""],
  ["Pigeons with magnets were less accurate on ___ days", ["cloudy"], "\"Less accurately on cloudy days, when they could not see the sun.\""],
  ["Before leaving, birds store energy as ___", ["fat"], "\"Storing the extra energy as fat.\""],
  ["The biggest threat: loss of ___", ["habitat"], "\"The biggest threat is the loss of habitat.\""],
]);

/* Extra recordings for the trainers only (not in the full test). */
const S1B = lfill("s1b", "Bike hire booking", talk("s1b", V.jessica, V.noah, [
  ["W", "Good morning, City Bike Hire. How can I help?"],
  ["M", "Hello. I'd like to hire some bikes for my family while we're here on holiday."],
  ["W", "Of course. Can I start with your surname?"],
  ["M", "It's Brennan. B, R, E, N, N, A, N."],
  ["W", "Thank you, Mr Brennan. And your nationality?"],
  ["M", "We're Irish. We're from Cork."],
  ["W", "Lovely. Where are you staying?"],
  ["M", "At the Harbour Hotel, near the old port."],
  ["W", "And how long would you like the bikes for?"],
  ["M", "For a week, I think. Actually, no, we leave on Saturday, so five days."],
  ["W", "Five days. And what kind of bikes? We have mountain bikes, city bikes and electric bikes."],
  ["M", "The city has a lot of hills, doesn't it? I think we'll take electric bikes."],
  ["W", "Good idea. Do you need anything else?"],
  ["M", "Yes, a seat for our little girl. She's three."],
  ["W", "No problem, a child seat. When would you like to pick them up?"],
  ["M", "Tomorrow morning. Is nine o'clock OK?"],
  ["W", "We open at half past nine, I'm afraid."],
  ["M", "Then half past nine."],
  ["W", "There's a deposit of fifty pounds, which you get back when you return the bikes."],
  ["M", "Can I pay that in cash?"],
  ["W", "We only take card for the deposit."],
  ["M", "Card is fine."],
  ["W", "When you finish, you can return the bikes here or at our shop at the train station."],
  ["M", "The train station is perfect. We're catching a train on Saturday."],
]), ONE, 2, "City Bike Hire: customer details", [
  ["Surname: ___", ["Brennan"], "He spells it: B, R, E, N, N, A, N."],
  ["Nationality: ___", ["Irish"], "\"We're Irish.\""],
  ["Staying at: the ___ Hotel", ["Harbour", "Harbor"], "\"At the Harbour Hotel, near the old port.\""],
  ["Length of hire: ___ days", ["5", "five"], "He says a week, then corrects himself: \"so five days\"."],
  ["Type of bike: ___", ["electric"], "\"I think we'll take electric bikes.\""],
  ["Extra: a child ___", ["seat"], "\"A seat for our little girl.\" \"A child seat.\""],
  ["Pick-up time: ___", ["9:30", "half past nine", "9.30"], "Nine o'clock is too early; they open at half past nine."],
  ["Deposit: £___", ["50", "fifty"], "\"A deposit of fifty pounds.\""],
  ["Deposit paid by: ___", ["card", "credit card"], "Cash isn't accepted: \"We only take card for the deposit.\""],
  ["Return bikes to the shop at the ___ station", ["train"], "\"Our shop at the train station.\""],
]);
const S4B = lfill("s4b", "A lecture on the history of chocolate", mono("s4b", V.noah, [
  "Today we're going to look at the history of chocolate. Chocolate comes from the seeds of the cacao tree, which grows naturally in the tropical forests of Central and South America. In fact, recent research in Ecuador suggests that people were using cacao more than five thousand years ago.",
  "The Maya, and later the Aztecs, prepared cacao as a drink, not as a solid food. It was bitter, not sweet, and was often mixed with chilli and maize. Cacao beans were so valuable to the Aztecs that they were used as money: a rabbit, for example, could cost about ten beans.",
  "When the Spanish brought cacao to Europe in the sixteenth century, Europeans added sugar to make the drink sweeter, and it became fashionable among rich people.",
  "The big change came in the nineteenth century. In 1828, a Dutch chemist invented a machine that pressed the fat, called cocoa butter, out of the beans, leaving a powder that was easier to mix. This made it possible, in 1847, for a British company to make the first chocolate bar.",
  "Today, most of the world's cacao is grown not in the Americas but in West Africa, especially in Ivory Coast and Ghana. Many cacao farmers earn very little, which is why some consumers choose chocolate with a fair trade label.",
]), ONE, 2, "The history of chocolate", [
  ["Cacao grows naturally in the tropical ___ of Central and South America.", ["forests", "forest"], "\"The tropical forests of Central and South America.\""],
  ["Research in ___ shows cacao was used over 5,000 years ago.", ["Ecuador"], "\"Recent research in Ecuador.\""],
  ["The Maya and Aztecs' cacao drink tasted ___.", ["bitter"], "\"It was bitter, not sweet.\""],
  ["It was often mixed with chilli and ___.", ["maize", "corn"], "\"Mixed with chilli and maize.\""],
  ["The Aztecs used cacao beans as ___.", ["money"], "\"They were used as money.\""],
  ["In Europe, people added ___ to the drink.", ["sugar"], "\"Europeans added sugar.\""],
  ["1828: a machine pressed out the cocoa ___.", ["butter"], "\"The fat, called cocoa butter.\""],
  ["The first chocolate bar was made in ___.", ["1847"], "\"In 1847, … the first chocolate bar.\""],
  ["Today most cacao is grown in West ___.", ["Africa"], "\"Most of the world's cacao is grown … in West Africa.\""],
  ["Some people buy chocolate with a fair ___ label.", ["trade"], "\"A fair trade label.\""],
]);

export const IELTS_BANK: Record<number, ExamBlock[]> = {
  5: [S1, S1B],
  6: [S2_MC, S3_MC],
  7: [S3_MATCH, S2_MATCH],
  8: [S4, S4B],
  1: [P1_TF, P3_TF],
  2: [P2_HEAD, P4_HEAD],
  3: [P1_FILL, P3_FILL],
  4: [P2_MC, P3_MC],
};

export type IeltsTest = { id: string; name: string; group: string; minutes: number; blocks: ExamBlock[] };
export const IELTS_TESTS: IeltsTest[] = [
  { id: "ielts-reading-a", name: "Reading test", group: "Reading", minutes: 60, blocks: [P1_TF, P1_FILL, P2_HEAD, P2_MC, P3_MC, P3_TF, P3_FILL] },
  { id: "ielts-listening-a", name: "Listening test", group: "Listening", minutes: 35, blocks: [S1, S2_MC, S2_MATCH, S3_MATCH, S3_MC, S4] },
];

/** Every recording, for generating the audio later. */
export const IELTS_CLIPS: AudioClip[] = [...S1_AUDIO, ...S2_AUDIO, ...S3_AUDIO, ...S4_AUDIO, ...(S1B.audio ?? []), ...(S4B.audio ?? [])];

/** Official Academic Reading conversion: correct answers out of 40 → band. */
const READING_BANDS: [number, number][] = [[39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [0, 0]];
export function readingBand(correct: number, total = 40): number {
  const c = Math.round((correct / total) * 40);
  return READING_BANDS.find(([min]) => c >= min)![1];
}
/** Official Listening conversion: correct answers out of 40 → band. */
const LISTENING_BANDS: [number, number][] = [[39, 9], [37, 8.5], [35, 8], [32, 7.5], [30, 7], [26, 6.5], [23, 6], [18, 5.5], [16, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [0, 0]];
export function listeningBand(correct: number, total = 40): number {
  const c = Math.round((correct / total) * 40);
  return LISTENING_BANDS.find(([min]) => c >= min)![1];
}
export const ieltsBand = (ref: string, correct: number, total: number) => (ref.includes("listening") ? listeningBand : readingBand)(correct, total);
