/**
 * Aptis General (British Council): Core, Reading and Listening trainers and practice tests.
 * Format from the Aptis General guide for teachers: Core 25 grammar + 25 vocabulary (25 min);
 * Reading 4 parts (35 min); Listening 4 parts, each recording heard at most twice (40 min).
 * Original content for Bandwidth EFL. For teacher review.
 */
import type { AudioClip, ExamBlock, ExamConfig, ExamQ, ListBlock, MatchBlock, OrderBlock, Opt, PartInfo, TextBlock } from "./types";

const o = (text: string, why: string): Opt => ({ text, why });
const q = (id: string, prompt: string | undefined, answer: number, options: Opt[]): ExamQ => ({ id, prompt, options, answer });
const F = { sally: "QW1sSL71Pw5oHbFDen25", isabelle: "tPDVQaZ6fdDCUmYpHyYd", jessica: "cgSgspJ2msm6clMCkdW9", aoife: "63T2Z5X6a8FKjTpmpqjH", akshara: "8DvnqWWA3WWXixOm7zQI" };
const M = { ricky: "3f6pec3wODJsjTqtcNI2", will: "bIHbv24MWmeRgasZH58o", noah: "9hb1f7xQcMLB90qbYSY3", hamish: "MAy1fRIg5hTqbhiwOUyh", obinna: "ideEOMYLgcyF9rr94ycz" };
const clip = (file: string, voice: string, script: string, who?: string): AudioClip => ({ file: `p/apl-${file}.mp3`, voice, script, who });

export const APTIS_PARTS: PartInfo[] = [
  { part: 1, group: "Core", name: "Grammar", skill: "Grammar", task: "Choose the word or words that complete the sentence.", options: 3, approx: 25,
    question: "Choose the best answer.",
    method: ["Read the whole sentence first.", "Find the clue: a time word, the subject, a preposition, or who is speaking.", "Say the sentence in your head with each option.", "In mini-dialogues, choose what a real person would say."],
    trap: "An option that looks like Spanish grammar ('I am agree', 'make a question').",
    es: "Busca la pista en la oración: palabras de tiempo, el sujeto o la preposición." },
  { part: 2, group: "Core", name: "Vocabulary", skill: "Vocabulary", task: "Match each word or sentence to the best word in the list.", options: 10, approx: 25,
    question: "Choose the best word.",
    method: ["Read the instruction: same meaning, definition, complete the sentence, or word partner?", "Do the ones you're sure of first.", "Each word in the list is used once at most, so cross words out.", "For word partners, say the phrase aloud: 'make a decision', 'take a photo'."],
    trap: "A word from the same topic with a different meaning (borrow vs lend, fare vs ticket).",
    es: "Haz primero las que sabes. Cada palabra se usa una sola vez." },
  { part: 3, group: "Reading", name: "Reading 1", skill: "Sentence comprehension", task: "Choose the word that completes each sentence of the message.", options: 3, approx: 5,
    question: "Which word completes the sentence?",
    method: ["Read the whole message once for the situation.", "For each gap, read the full sentence.", "Choose the word that fits the meaning and the grammar."],
    trap: "A word that fits the grammar but not the situation.",
    es: "Lee todo el mensaje primero. La palabra debe tener sentido en la situación." },
  { part: 4, group: "Reading", name: "Reading 2", skill: "Text cohesion", task: "Put the sentences in the right order. The first one is done for you.", options: 0, approx: 10,
    question: "Put the sentences in order.",
    method: ["Read the first sentence: what is the story or topic?", "Look for linking clues: time words (then, later, today), 'this', 'these', 'there', names that appear again.", "A pronoun (she, it, they) comes after the noun it refers to.", "Read the whole text again to check it flows."],
    trap: "Ordering by topic only. Use the small words (this, there, then) that link one sentence to the next.",
    es: "Usa las palabras de enlace (then, later, this, there) para ordenar las oraciones." },
  { part: 5, group: "Reading", name: "Reading 3", skill: "Opinion matching", task: "Read four people's opinions. Who says each thing?", options: 4, approx: 7,
    question: "Who says this?",
    method: ["Read the statements first and underline key ideas.", "Read each person's text and find the same idea in other words.", "One person can match more than one statement."],
    trap: "A statement that uses a word from one text but matches the idea in another.",
    es: "Busca la misma idea con otras palabras. Una persona puede tener varias respuestas." },
  { part: 6, group: "Reading", name: "Reading 4", skill: "Long text", task: "Choose the best heading for each paragraph. One heading is extra.", options: 8, approx: 7,
    question: "Choose the heading.",
    method: ["Read all the headings first.", "For each paragraph, find the main idea: often the first or last sentence.", "Choose the heading for the whole paragraph, not one detail.", "Do the easy ones first; the extra heading is often about a detail."],
    trap: "A heading that matches one word or detail, not the main idea of the paragraph.",
    es: "Busca la idea principal de cada párrafo, no un detalle. Sobra un título." },
  { part: 7, group: "Listening", name: "Listening 1", skill: "Information recognition", task: "Listen and choose the right answer. You can listen twice.", options: 3, approx: 8,
    question: "Choose the right answer.",
    method: ["Read the question and options before you listen.", "Listen for the exact detail: a number, time, place or name.", "Speakers often change their mind: listen to the end.", "Use the second play to check."],
    trap: "The first number or place you hear is often changed later ('not Tuesday, Thursday').",
    es: "Lee la pregunta antes de escuchar. Escucha hasta el final: a veces cambian la información." },
  { part: 8, group: "Listening", name: "Listening 2", skill: "Information matching", task: "Four people speak. Match each speaker to a sentence. Two sentences are extra.", options: 6, approx: 4,
    question: "Which sentence matches the speaker?",
    method: ["Read the six sentences first.", "Listen to each speaker for the main idea.", "Match the meaning, not the same words."],
    trap: "A sentence that repeats a word the speaker said but not their main point.",
    es: "Lee las oraciones antes. Busca la idea principal de cada persona." },
  { part: 9, group: "Listening", name: "Listening 3", skill: "Opinion matching", task: "Listen to a man and a woman. Who has each opinion: the man, the woman, or both?", options: 3, approx: 4,
    question: "Who has this opinion?",
    method: ["Read the opinions first.", "Listen for agreeing words: 'I agree', 'exactly', 'that's true' mean both.", "Listen for disagreeing words: 'I'm not so sure', 'really?', 'not me'."],
    trap: "One speaker mentions an idea but then disagrees with it.",
    es: "'I agree', 'exactly' = los dos. 'I'm not so sure', 'not me' = solo uno." },
  { part: 10, group: "Listening", name: "Listening 4", skill: "Monologue", task: "Listen to one person. What is their attitude or opinion?", options: 3, approx: 2,
    question: "Choose the best answer.",
    method: ["Read the questions first.", "Listen to the whole talk, not just one sentence.", "Words like 'but', 'honestly', 'in the end' show the speaker's real opinion."],
    trap: "An idea the speaker mentions only to disagree with it.",
    es: "Escucha todo. Después de 'but' o 'honestly' suele venir la opinión real." },
];
export const APTIS: ExamConfig = { id: "aptis", label: "Aptis General", parts: APTIS_PARTS, neverBlank: true };

/* ---------- Core: grammar (A–C) ---------- */
type G = [string, number, [string, string][]];
const GR: G[] = [
  ["I ___ to the cinema last weekend.", 0, [["went", "'Last weekend' needs the past simple."], ["go", "The sentence is about the past."], ["have gone", "We don't use the present perfect with a finished time like 'last weekend'."]]],
  ["She has lived here ___ 2019.", 0, [["since", "'Since' goes with a starting point (2019)."], ["for", "'For' goes with a period (for three years)."], ["from", "'Has lived from 2019' is not correct; we say 'since'."]]],
  ["If I ___ more time, I would learn the guitar.", 0, [["had", "Imaginary situation: if + past, would + verb."], ["have", "With 'would' we need the past after 'if'."], ["will have", "We don't use 'will' after 'if' here."]]],
  ["This is the ___ film I have ever seen.", 0, [["best", "'The… I have ever seen' needs a superlative: best."], ["better", "'Better' compares two things and needs 'than'."], ["most good", "'Most good' is not correct; the superlative is 'best'."]]],
  ["We ___ dinner when the lights went out.", 0, [["were having", "A longer action in progress, interrupted by a short one: past continuous."], ["had", "'Had dinner when the lights went out' sounds like dinner started after."], ["have", "The sentence is about the past."]]],
  ["You ___ wear a uniform at my school. It's a rule.", 0, [["have to", "A rule = obligation: have to."], ["should", "'Should' is advice, not a rule."], ["might", "'Might' is possibility, not a rule."]]],
  ["The bridge ___ in 1950.", 0, [["was built", "Passive: people built the bridge."], ["built", "'The bridge built' means the bridge did the building."], ["is building", "It's present and active; the year is 1950."]]],
  ["I'm not used to ___ up so early.", 0, [["getting", "'Be used to' + -ing."], ["get", "After 'used to' meaning 'accustomed', we need -ing."], ["got", "'Used to got' is not correct."]]],
  ["A: I don't like coffee. B: ___", 0, [["Neither do I.", "Agreeing with a negative: neither do I."], ["So do I.", "'So do I' agrees with a positive sentence."], ["Neither I do.", "The word order is wrong."]]],
  ["He asked me where ___.", 0, [["I lived", "Reported questions use normal word order."], ["did I live", "Reported questions don't use 'did'."], ["do I live", "Reported questions don't use question word order."]]],
  ["There isn't ___ milk left.", 0, [["any", "Negative sentences use 'any'."], ["some", "'Some' is for positive sentences."], ["no", "'Isn't no' is a double negative."]]],
  ["By the time we arrived, the film ___.", 0, [["had started", "Something that happened before another past action: past perfect."], ["started", "This suggests it started when we arrived, not before."], ["has started", "The sentence is in the past."]]],
  ["She's the girl ___ brother plays in the band.", 0, [["whose", "'Whose' shows possession: her brother."], ["who", "'Who brother' is not correct."], ["which", "'Which' is for things."]]],
  ["It's too cold ___ swim today.", 0, [["to", "'Too + adjective + to + verb'."], ["for", "'For' needs a noun or person: too cold for me."], ["that", "'Too cold that swim' is not correct."]]],
  ["My brother is ___ than me, but I'm faster.", 0, [["taller", "Comparative of a short adjective: taller."], ["more tall", "Short adjectives take -er, not 'more'."], ["tallest", "'Tallest' doesn't go with 'than'."]]],
  ["I've ___ finished my homework, so I can go out.", 0, [["just", "'Just' means a short time ago."], ["yet", "'Yet' goes at the end of negatives and questions."], ["still", "'Still' doesn't go before 'finished' like this."]]],
  ["They suggested ___ a taxi.", 0, [["taking", "'Suggest' + -ing."], ["to take", "We don't say 'suggest to take'."], ["take", "We need -ing after 'suggest'."]]],
  ["If it rains tomorrow, we ___ the match.", 0, [["will cancel", "Real future possibility: if + present, will + verb."], ["would cancel", "'Would' is for imaginary situations."], ["cancelled", "The sentence is about tomorrow."]]],
  ["How long ___ you been learning English?", 0, [["have", "Present perfect continuous: have you been learning."], ["did", "'Did you been' is not correct."], ["are", "'Are you been' is not correct."]]],
  ["She can't ___ at home; her car isn't there.", 0, [["be", "After 'can't' we use the base verb."], ["being", "After 'can't' we don't use -ing."], ["been", "'Can't been' is not correct."]]],
  ["A: Sorry, I forgot your book. B: ___", 0, [["Don't worry about it.", "A natural reply to an apology."], ["You're welcome.", "That's the reply to 'thank you'."], ["Yes, you forgot.", "Correct grammar, but rude and unnatural."]]],
  ["The museum, ___ opened last year, is free on Sundays.", 0, [["which", "Extra information between commas uses 'which'."], ["what", "'What' isn't a relative pronoun here."], ["that", "We don't use 'that' after a comma."]]],
  ["I wish I ___ speak French.", 0, [["could", "'Wish' + past: could."], ["can", "After 'wish' we move back to the past."], ["will", "'Wish… will' is not correct here."]]],
  ["We need to leave now, ___ we'll miss the bus.", 0, [["otherwise", "'Otherwise' means 'if not'."], ["unless", "'Unless we'll miss' doesn't make sense."], ["although", "'Although' shows contrast, which doesn't fit."]]],
  ["A: Shall we meet at six? B: ___", 0, [["Sounds good.", "A natural way to accept a suggestion."], ["Yes, we shall meet.", "Grammatical but not natural spoken English."], ["I meet at six.", "It doesn't answer the suggestion."]]],
  ["He's been working here ___ three months.", 0, [["for", "'For' + a period of time."], ["since", "'Since' needs a starting point."], ["during", "'During three months' doesn't fit with 'has been working'."]]],
  ["You look tired. You ___ go to bed earlier.", 0, [["should", "'Should' gives advice."], ["must to", "'Must' is never followed by 'to'."], ["ought", "'Ought' needs 'to': ought to."]]],
  ["Neither my sister ___ my brother likes fish.", 0, [["nor", "'Neither… nor'."], ["or", "'Either' goes with 'or', not 'neither'."], ["and", "'Neither… and' is not correct."]]],
  ["I'd rather you ___ my phone without asking.", 0, [["didn't use", "'I'd rather you' + past."], ["don't use", "After 'I'd rather you' we use the past."], ["not use", "'Not use' is missing a helper verb."]]],
  ["A: Could you open the window? B: ___", 0, [["Sure, no problem.", "A natural yes to a request."], ["Yes, I could.", "It answers the grammar, not the request."], ["I'm opening.", "It sounds unfinished and unnatural."]]],
];
const GRAMMAR: ListBlock["items"] = GR.map(([stem, answer, opts], k) => ({ stem, ...q(`apg-${k + 1}`, undefined, answer, opts.map(([t, w]) => o(t, w))) }));

/* ---------- Core: vocabulary (10 words, 5 items) ---------- */
const vset = (id: string, title: string, words: string[], items: [string, string, string][]): MatchBlock => ({
  kind: "match", part: 2, id, title, words: words.map((w) => ({ w })),
  items: items.map(([desc, ans, why], k) => ({ id: `${id}-${k + 1}`, desc, answer: words.indexOf(ans), why })),
});
const VOCAB: MatchBlock[] = [
  vset("apv-syn1", "Choose the word with the same meaning.", ["finish", "large", "empty", "fast", "quiet", "start", "cheap", "tiny", "slow", "furious"], [
    ["big", "large", "'Large' means big."], ["begin", "start", "'Start' means begin. 'Finish' is the opposite."], ["quick", "fast", "'Fast' means quick."], ["very angry", "furious", "'Furious' means very angry."], ["very small", "tiny", "'Tiny' means very small."]]),
  vset("apv-syn2", "Choose the word with the same meaning.", ["sell", "huge", "borrow", "buy", "easy", "help", "ask", "answer", "soft", "hard"], [
    ["purchase", "buy", "'Purchase' is a formal word for buy. 'Sell' is the opposite."], ["assist", "help", "'Assist' means help."], ["reply", "answer", "'Reply' means answer, not ask."], ["difficult", "hard", "'Hard' can mean difficult. 'Easy' is the opposite."], ["enormous", "huge", "'Enormous' and 'huge' both mean very big."]]),
  vset("apv-def1", "Choose the word for each definition.", ["ticket", "author", "visa", "theatre", "breakfast", "fare", "actor", "passport", "cinema", "lunch"], [
    ["a person who writes books", "author", "An author writes books. An actor performs."], ["a place where you watch plays", "theatre", "Plays are in a theatre; films are in a cinema."], ["the money you pay to travel on a bus", "fare", "A fare is the money; a ticket is the paper you get."], ["a meal in the middle of the day", "lunch", "Lunch is at midday; breakfast is in the morning."], ["a small book with your photo that you show at the border", "passport", "A passport is a book with your photo. A visa is permission inside it."]]),
  vset("apv-def2", "Choose the word for each definition.", ["accept", "improve", "damage", "search", "leave", "refuse", "prepare", "return", "find", "protect"], [
    ["to make something better", "improve", "Improve = make better. Damage is the opposite."], ["to say no to an offer", "refuse", "Refuse = say no. Accept is the opposite."], ["to look for something", "search", "Search = look for. Find is when you get it."], ["to come or go back", "return", "Return = come back. Leave is to go away."], ["to keep something safe from danger", "protect", "Protect = keep safe."]]),
  vset("apv-use1", "Choose the word that completes each sentence.", ["borrow", "lend", "missed", "lost", "turn on", "turn off", "pays", "spends", "make", "ask"], [
    ["Could you ___ me your pen? I forgot mine.", "lend", "You lend something to someone; you borrow it from them."], ["I ___ my keys. I can't find them anywhere.", "lost", "You lose things you can't find; you miss a bus or a person."], ["Please ___ the lights when you leave the room.", "turn off", "When you leave, you turn the lights off."], ["She ___ a lot of money on clothes.", "spends", "We spend money on things; 'pay' goes with 'for'."], ["Can I ___ a question?", "ask", "We ask a question, not make one."]]),
  vset("apv-col1", "Choose the word that goes best with each phrase.", ["say", "make", "give", "pay", "get", "take", "put", "do", "go", "tell"], [
    ["___ a decision", "make", "We make a decision."], ["___ attention", "pay", "We pay attention."], ["___ a photo", "take", "We take a photo."], ["___ your homework", "do", "We do homework."], ["___ the truth", "tell", "We tell the truth, not say it."]]),
];

/* ---------- Reading 1: sentence comprehension (A–C) ---------- */
const R1: TextBlock[] = [
  { kind: "text", part: 3, id: "apr1-laura", title: "A message from Laura",
    text: "Hi Sam,\nI'm writing from the [1] because I'm stuck in traffic. Can you [2] the teacher I'll be ten minutes late? I finished our project last night, so I'll [3] it to her when I arrive. After class, do you want to [4] lunch together? There's a new café [5] the library.\nSee you soon!\nLaura",
    questions: [
      q("apr1-laura-1", undefined, 0, [o("bus", "Being stuck in traffic happens on a bus."), o("bank", "You don't get stuck in traffic inside a bank."), o("garden", "A garden has no traffic.")]),
      q("apr1-laura-2", undefined, 0, [o("tell", "We 'tell someone' something."), o("say", "We say something TO someone: 'say to the teacher'."), o("speak", "'Speak the teacher' is not correct.")]),
      q("apr1-laura-3", undefined, 0, [o("give", "She will give the project to the teacher."), o("receive", "The teacher receives it; Laura gives it."), o("borrow", "You borrow things from people, you don't borrow to them.")]),
      q("apr1-laura-4", undefined, 0, [o("have", "We 'have lunch'."), o("do", "We don't 'do lunch' in standard English."), o("make", "'Make lunch' means cook it, not eat it together at a café.")]),
      q("apr1-laura-5", undefined, 0, [o("opposite", "'Opposite the library' means across from it."), o("between", "'Between' needs two places: between the library and the bank."), o("among", "'Among' is for groups of things, not one building.")]),
    ] },
  { kind: "text", part: 3, id: "apr1-coach", title: "A message from the coach",
    text: "Dear players,\nTraining on Saturday is [1] because the field is too wet. Instead, we will meet in the sports [2] at 10 a.m. Please [3] your trainers, not football boots. The match against San José is still [4] Sunday afternoon. If you can't come, send me a [5].\nCoach Ríos",
    questions: [
      q("apr1-coach-1", undefined, 0, [o("cancelled", "The field is wet, so training is cancelled."), o("ordered", "You order food, not training."), o("arrived", "Training doesn't arrive.")]),
      q("apr1-coach-2", undefined, 0, [o("hall", "A sports hall is indoors, a good place when the field is wet."), o("kitchen", "Players don't train in a kitchen."), o("bank", "A bank isn't a place for training.")]),
      q("apr1-coach-3", undefined, 0, [o("bring", "Players should bring trainers to the hall."), o("forget", "The coach wants them to have trainers, not forget them."), o("sell", "Selling trainers doesn't make sense here.")]),
      q("apr1-coach-4", undefined, 0, [o("on", "We use 'on' with days: on Sunday."), o("in", "'In' is for months and years."), o("at", "'At' is for times: at 3 p.m.")]),
      q("apr1-coach-5", undefined, 0, [o("message", "You send a message to say you can't come."), o("match", "You can't send a match."), o("goal", "You score a goal; you don't send one.")]),
    ] },
];

/* ---------- Reading 2: text cohesion (order 5 sentences) ---------- */
const R2: OrderBlock[] = [
  { kind: "order", part: 4, id: "apr2-trip", title: "A family trip",
    first: "Last summer, my family decided to visit my grandparents in Santa Marta.",
    sentences: [
      "We left Bogotá very early in the morning to avoid the traffic.",
      "After ten hours on the road, we finally saw the sea.",
      "My grandmother was waiting for us at the door with a big plate of fried fish.",
      "That night, we ate together and told stories until midnight.",
      "It was the best holiday we had had in years.",
    ],
    why: "Time words lead the story: 'very early in the morning' → 'after ten hours' → 'was waiting' when they arrived → 'that night' → a final comment." },
  { kind: "order", part: 4, id: "apr2-phones", title: "The story of the phone",
    first: "Many people use a smartphone every day, but few know how phones developed.",
    sentences: [
      "The first phones, invented in the 1870s, were large and fixed to the wall.",
      "About a hundred years later, engineers created the first mobile phone, which weighed more than a kilogram.",
      "These early mobiles could only make calls, and their batteries lasted about thirty minutes.",
      "In the 2000s, companies added cameras, music and the internet to their phones.",
      "Today, a phone is more powerful than the computers that sent people to the Moon.",
    ],
    why: "Dates and time words give the order (1870s → a hundred years later → 2000s → today). 'These early mobiles' must come right after the first mobile phone." },
  { kind: "order", part: 4, id: "apr2-club", title: "The recycling club",
    first: "Our school has started a new recycling club.",
    sentences: [
      "The club meets every Tuesday after lunch in the science lab.",
      "At the first meeting, the members chose a name: 'Green Team'.",
      "Their first project was to put recycling bins in every classroom.",
      "Since then, the amount of rubbish in the school has gone down by a third.",
      "Next month, the Green Team wants to start a school garden too.",
    ],
    why: "'The club' follows 'a new recycling club'; the name 'Green Team' must come before it is used; 'Since then' follows the first project; 'Next month' ends with the future." },
  { kind: "order", part: 4, id: "apr2-letter", title: "A volunteer application",
    first: "Dear Ms Pérez, I am writing to apply for the volunteer position at the city zoo.",
    sentences: [
      "I am sixteen years old and I study at Colegio Andino.",
      "I have always loved animals, and I help at my uncle's farm every holiday.",
      "There, I feed the cows and clean their area, so I am used to hard work.",
      "I am available on Saturdays and during the December holidays.",
      "I look forward to hearing from you. Yours sincerely, Andrés Gómez",
    ],
    why: "A formal letter goes: who I am → my experience → 'There' (the farm, just mentioned) → when I can work → the closing." },
];

/* ---------- Reading 3: opinion matching (A–D) ---------- */
const op = (id: string, title: string, people: [string, string][], items: [string, number, string][]): MatchBlock => ({
  kind: "match", part: 5, id, title, words: people.map(([w]) => ({ w })), passages: people.map(([who, text]) => ({ who, text })),
  items: items.map(([desc, answer, why], k) => ({ id: `${id}-${k + 1}`, desc, answer, why })),
});
const R3: MatchBlock[] = [
  op("apr3-homework", "Should students get homework at weekends?", [
    ["Camila", "I think a little homework at the weekend is fine, as long as it's short. Thirty minutes is enough to remember what we learnt. But some teachers give us two or three hours, and then we can't see our families or do sport. That isn't fair."],
    ["Mateo", "Honestly, weekends should be free. We spend seven hours a day at school from Monday to Friday. Our brains need a rest. In other countries, like Finland, students get very little homework and they still do really well."],
    ["Valeria", "Homework helps me because I learn better when I'm alone and nobody is talking. At the weekend I have more time to read carefully. What I don't like is homework that is just copying from the book. That's a waste of time."],
    ["Santiago", "My parents work on Saturdays, so I take care of my little brother. For me, weekend homework is really stressful. I think teachers should give us the work on Monday and let us finish it during the week."],
  ], [
    ["Weekend homework is OK if it doesn't take long.", 0, "Camila: 'fine, as long as it's short'."],
    ["Students in some countries do well without much homework.", 1, "Mateo mentions Finland."],
    ["Some homework tasks are not useful.", 2, "Valeria: copying from the book is 'a waste of time'."],
    ["Family responsibilities make weekend homework hard.", 3, "Santiago looks after his brother on Saturdays."],
    ["Too much homework stops students from doing other activities.", 0, "Camila: with hours of homework they 'can't see our families or do sport'."],
    ["It is easier to study when it's quiet.", 2, "Valeria: 'I learn better when I'm alone and nobody is talking'."],
    ["Students already spend a lot of time at school.", 1, "Mateo: 'seven hours a day at school'."],
  ]),
  op("apr3-phones", "Mobile phones in the classroom", [
    ["Ana, a teacher", "I let my students use their phones to look up words or take photos of the board. Used well, a phone is a great tool. The problem is that some students check messages all the time, so I collect phones during tests."],
    ["Julián, a student", "If phones were banned, I wouldn't miss them in class. They distract me. I keep mine in my bag and only look at it at break time."],
    ["Lucía, a parent", "I want my daughter to have her phone at school in case there's an emergency. I don't mind if it stays switched off in her bag, but she must be able to call me."],
    ["Andrés, a student", "Phones help me learn. I use a dictionary app, and I record the teacher's explanations so I can listen again at home. Of course, I always ask permission first."],
  ], [
    ["Phones should be there for emergencies.", 2, "Lucía: 'in case there's an emergency'."],
    ["I wouldn't mind if phones were not allowed.", 1, "Julián: 'If phones were banned, I wouldn't miss them'."],
    ["I check with the teacher before recording.", 3, "Andrés: 'I always ask permission first'."],
    ["Phones are useful when they're used in the right way.", 0, "Ana: 'Used well, a phone is a great tool'."],
    ["I only look at my phone during breaks.", 1, "Julián: 'only look at it at break time'."],
    ["I listen to lessons again after school.", 3, "Andrés records explanations to listen again at home."],
    ["Phones are taken away during exams.", 0, "Ana: 'I collect phones during tests'."],
  ]),
];

/* ---------- Reading 4: long text, headings (8 headings, 7 paragraphs) ---------- */
const hd = (id: string, title: string, headings: string[], paras: [string, string, string][]): MatchBlock => ({
  kind: "match", part: 6, id, title, paragraphs: true, itemLabel: "Paragraph", words: headings.map((w) => ({ w })),
  items: paras.map(([text, heading, why], k) => ({ id: `${id}-${k + 1}`, desc: text, answer: headings.indexOf(heading), why })),
});
const R4: MatchBlock[] = [
  hd("apr4-condor", "The return of the Andean condor", [
    "Not a hunter after all", "The role of local people", "A national symbol that few people have seen", "Few chicks, slow growth",
    "A danger to farm animals", "Why there are so few left", "Technology in the sky", "Young birds from other countries",
  ], [
    ["The Andean condor appears on Colombia's coat of arms, and for many people it is a symbol of freedom. With wings that can measure more than three metres from end to end, it is one of the largest flying birds in the world. Yet many Colombians have never seen one in real life.", "A national symbol that few people have seen", "It's on the coat of arms, but many people have never seen one."],
    ["A century ago, condors were common in the high mountains of the country. Today, experts believe that fewer than two hundred live in Colombia. Some were hunted because farmers thought they killed young animals, and others were poisoned by meat left out to kill foxes.", "Why there are so few left", "The paragraph explains hunting and poison: the reasons numbers fell."],
    ["In fact, condors almost never hunt. They are scavengers, which means they eat animals that are already dead. By cleaning the mountains in this way, they help to stop diseases from spreading. Scientists say that a world without condors would be a dirtier place.", "Not a hunter after all", "'Condors almost never hunt.' (The extra heading, 'A danger to farm animals', is what farmers wrongly believed.)"],
    ["Since the 1990s, conservation groups have worked with zoos in other countries to bring young condors to Colombia. The birds are raised with as little human contact as possible, so that they do not become too comfortable around people. When they are ready, they are taken to protected areas in the mountains.", "Young birds from other countries", "Young condors come from zoos abroad."],
    ["One reason the condor is in danger is that it reproduces very slowly. A pair usually has only one chick every two or three years, and the young bird stays with its parents for a long time. When one adult dies, the whole population feels the loss.", "Few chicks, slow growth", "One chick every two or three years: slow reproduction."],
    ["To find out how the released birds are doing, researchers fix small tracking devices to their wings. The data shows where the condors fly, how far they travel and where they sleep. Some have travelled more than a hundred kilometres in a single day.", "Technology in the sky", "Tracking devices follow the birds."],
    ["Experts agree that the future of the condor depends on local communities. Farmers who protect the birds instead of poisoning them are key, and many schools in the mountains now teach children about the condor. As one guide in Boyacá says, 'If people know the bird, they will want to protect it.'", "The role of local people", "Farmers, schools and communities protect the condor."],
  ]),
  hd("apr4-language", "Learning a language as a teenager", [
    "Short, regular practice", "The importance of sleep", "Why grammar books are the best method", "Teenagers have some advantages",
    "Progress you don't always see", "English in your free time", "Having your own reason", "Don't be afraid of errors",
  ], [
    ["Many people believe that only small children can learn a new language well. It is true that young children often copy accents better than adults. However, research shows that teenagers can learn grammar and vocabulary faster than young children, because they can think about rules and use strategies.", "Teenagers have some advantages", "Teenagers learn grammar and vocabulary faster."],
    ["One of the most useful strategies is to study a little every day instead of a lot once a week. Our memory works better when we see new words several times over a few days. Ten minutes on the bus can be more useful than two hours on a Sunday night.", "Short, regular practice", "A little every day beats a lot once a week."],
    ["Many teenagers are afraid of making mistakes in front of their classmates. But mistakes show that you are trying something new. Teachers say that students who speak, even with errors, usually improve faster than students who wait until they are perfect.", "Don't be afraid of errors", "Speaking with mistakes helps you improve."],
    ["Today, English is everywhere: in songs, video games and series. Watching a series with English subtitles, for example, helps you connect the sound of words with how they are written. Some students learn hundreds of words just by playing online games with people from other countries.", "English in your free time", "Series, songs and games outside school."],
    ["The students who make the most progress are usually the ones who have a personal reason to learn. Some want to study abroad; others want to understand their favourite singer. When the reason is your own, it is easier to keep going on difficult days.", "Having your own reason", "A personal reason keeps you motivated."],
    ["Sleep also plays an important role. While we sleep, the brain organises the information we learnt during the day. Students who stay up late studying the night before a test often remember less than students who study earlier and sleep well.", "The importance of sleep", "The brain organises information while we sleep."],
    ["Learning a language takes years, not weeks, and progress sometimes feels slow. But every small step counts. As one teacher puts it, 'You don't notice your hair growing every day, but one day you need a haircut.'", "Progress you don't always see", "Progress is slow and hard to notice, like hair growing."],
  ]),
];

/* ---------- Listening 1: information recognition (A–C, one recording each) ---------- */
const L1: ListBlock["items"] = [
  { stem: "When is the new appointment?", audio: [clip("1-1", F.sally, "Hi, this is Marta from the dentist's. Your appointment has moved from Tuesday to Thursday, same time, ten thirty. Please call us if that's a problem. Thanks!")],
    ...q("apl1-1", undefined, 1, [o("Tuesday at 10:30", "Tuesday was the old day."), o("Thursday at 10:30", "'Moved from Tuesday to Thursday, same time, ten thirty.'"), o("Thursday at 10:13", "She says ten thirty (10:30), not ten thirteen.")]) },
  { stem: "Which platform does the train leave from now?", audio: [clip("1-2", M.noah, "Attention, please. The train to Tunja will now leave from platform five, not platform two. We apologise for the change.")],
    ...q("apl1-2", undefined, 1, [o("Platform 2", "Two was the old platform."), o("Platform 5", "'Will now leave from platform five.'"), o("Platform 9", "Nine isn't mentioned.")]) },
  { stem: "How much are the headphones today?", audio: [clip("1-3a", M.obinna, "Excuse me, how much are these headphones?", "Customer"), clip("1-3b", F.jessica, "They were sixty thousand pesos, but today they're on sale for forty-five thousand.", "Shop assistant")],
    ...q("apl1-3", undefined, 2, [o("60,000 pesos", "That was the price before the sale."), o("40,000 pesos", "Forty thousand isn't mentioned."), o("45,000 pesos", "'Today they're on sale for forty-five thousand.'")]) },
  { stem: "Where will they meet?", audio: [clip("1-4", F.isabelle, "Hi Juan, it's Sofía. I can't meet you at the library at four. Let's meet at the café next to the cinema instead, at five. See you there!")],
    ...q("apl1-4", undefined, 0, [o("At a café", "'Let's meet at the café next to the cinema instead.'"), o("At the library", "She can't meet at the library."), o("Inside the cinema", "The café is next to the cinema.")]) },
  { stem: "What do students NOT need to bring?", audio: [clip("1-5", M.hamish, "For tomorrow's trip, please bring a hat, some water and a packed lunch. You don't need any money; the museum is free for students.")],
    ...q("apl1-5", undefined, 2, [o("A packed lunch", "He asks them to bring lunch."), o("A hat", "He asks them to bring a hat."), o("Money", "'You don't need any money.'")]) },
  { stem: "What will the weather be like in the afternoon?", audio: [clip("1-6", F.aoife, "Tomorrow morning will be cloudy and cool, but in the afternoon we expect heavy rain, so take an umbrella if you're going out after lunch.")],
    ...q("apl1-6", undefined, 1, [o("Cloudy and cool", "That's the morning."), o("Rainy", "'In the afternoon we expect heavy rain.'"), o("Sunny", "Sun isn't mentioned.")]) },
  { stem: "What is the speaker's brother wearing?", audio: [clip("1-7", M.will, "My brother is the tall one with glasses. He's wearing a green jacket, not the blue one. He should be near the entrance.")],
    ...q("apl1-7", undefined, 0, [o("Glasses and a green jacket", "'The tall one with glasses… a green jacket.'"), o("A blue jacket and glasses", "'Not the blue one.'"), o("A hat and a green scarf", "A hat isn't mentioned.")]) },
  { stem: "When does the pool open on Saturdays?", audio: [clip("1-8", F.akshara, "The swimming pool opens at six on weekdays, but on weekends it doesn't open until eight. On public holidays it's closed.")],
    ...q("apl1-8", undefined, 2, [o("At six", "Six is on weekdays."), o("It's closed", "It's closed on public holidays, not Saturdays."), o("At eight", "'On weekends it doesn't open until eight.'")]) },
];

/* ---------- Listening 2: information matching (4 speakers, 6 sentences) ---------- */
const lm = (id: string, title: string, sentences: string[], speakers: [string, string, string, string][]): MatchBlock => ({
  kind: "match", part: 8, id, title, itemLabel: "Speaker", words: sentences.map((w) => ({ w })),
  items: speakers.map(([file, voice, script, ans], k) => ({ id: `${id}-${k + 1}`, desc: `Speaker ${k + 1}`, answer: sentences.indexOf(ans), why: script, audio: [clip(file, voice, script)] })),
});
const L2: MatchBlock[] = [
  lm("apl2-school", "How I get to school", [
    "uses the journey to study.", "is often late for school.", "lives very close to school.",
    "chose a healthier option.", "wants to change how they travel.", "travels with a family member.",
  ], [
    ["2a-1", M.ricky, "I used to take the bus, but it was always full. Now I ride my bike. It takes the same time, and I get some exercise.", "chose a healthier option."],
    ["2a-2", F.jessica, "My mum drops me at school on her way to work. It's quick, but we often argue about the music in the car!", "travels with a family member."],
    ["2a-3", M.obinna, "I live five minutes away, so I just walk. Sometimes I meet my friends on the corner and we go together.", "lives very close to school."],
    ["2a-4", F.aoife, "I take two buses, and the journey takes over an hour, so I use the time to listen to podcasts in English.", "uses the journey to study."],
  ]),
  lm("apl2-hobby", "A hobby I love", [
    "learnt it from a relative.", "wants to become a professional.", "does it to reduce stress.",
    "finds it expensive.", "earns money from it.", "meets people from other countries.",
  ], [
    ["2b-1", F.isabelle, "I started painting a few years ago. At first my pictures were terrible, but I didn't give up, and now I sell some of them at a local market.", "earns money from it."],
    ["2b-2", M.will, "I play chess online with people from all over the world. Last week I played against someone in India!", "meets people from other countries."],
    ["2b-3", F.sally, "Dancing is how I relax. After a stressful day at school, an hour of salsa makes me feel like a new person.", "does it to reduce stress."],
    ["2b-4", M.hamish, "My grandfather taught me to fish when I was six. Now we go to the river together every Sunday.", "learnt it from a relative."],
  ]),
];

/* ---------- Listening 3: man, woman or both (dialogue) ---------- */
const MWB = (answer: number, why: string, k: number, id: string): ExamQ => q(`${id}-${k}`, undefined, answer, [
  o("The man", answer === 0 ? why : "Listen again: the man doesn't say this."),
  o("The woman", answer === 1 ? why : "Listen again: the woman doesn't say this."),
  o("Both", answer === 2 ? why : "Only one of them has this opinion."),
]);
const dialogue = (id: string, w: string, m: string, lines: ["W" | "M", string][]): AudioClip[] =>
  lines.map(([who, text], k) => clip(`${id}-${k + 1}`, who === "W" ? w : m, text, who === "W" ? "Woman" : "Man"));
const L3: ListBlock[] = [
  { kind: "list", part: 9, id: "apl3-uniform", title: "School uniforms",
    audio: dialogue("3a", F.aoife, M.noah, [
      ["W", "Did you hear? The school is thinking about getting rid of uniforms."],
      ["M", "Really? I think that's a great idea. I'm tired of wearing the same clothes every day."],
      ["W", "I'm not so sure. With a uniform, nobody notices if your clothes are expensive or cheap."],
      ["M", "That's true, I hadn't thought of that. But the uniform is so uncomfortable, especially when it's hot."],
      ["W", "Oh, I agree with you there. The trousers are terrible in summer."],
      ["M", "Still, I'd love to choose my own clothes."],
      ["W", "Not me. With a uniform, I can get dressed in two minutes, and I never worry about what to wear."],
    ]),
    items: [
      { stem: "Wearing the same clothes every day is boring.", ...MWB(0, "The man: 'I'm tired of wearing the same clothes every day.'", 1, "apl3-uniform") },
      { stem: "Uniforms hide differences in how much money families have.", ...MWB(1, "The woman: 'nobody notices if your clothes are expensive or cheap.'", 2, "apl3-uniform") },
      { stem: "The uniform is uncomfortable in hot weather.", ...MWB(2, "The man says it's uncomfortable when hot, and the woman agrees: 'terrible in summer'.", 3, "apl3-uniform") },
      { stem: "A uniform makes getting ready quicker.", ...MWB(1, "The woman: 'I can get dressed in two minutes.'", 4, "apl3-uniform") },
    ] },
  { kind: "list", part: 9, id: "apl3-film", title: "A film",
    audio: dialogue("3b", F.jessica, M.ricky, [
      ["M", "So, what did you think of the film?"],
      ["W", "I loved it! The special effects were amazing."],
      ["M", "They were, I agree. But I thought the story was a bit slow at the start."],
      ["W", "Really? I liked the slow start. It helped me get to know the characters."],
      ["M", "Maybe. And the music was far too loud for me."],
      ["W", "I didn't really notice the music. But it was much too long, almost three hours!"],
      ["M", "Yes, I was checking my watch by the end."],
    ]),
    items: [
      { stem: "The special effects were impressive.", ...MWB(2, "The woman says they were amazing and the man agrees.", 1, "apl3-film") },
      { stem: "The beginning of the film was too slow.", ...MWB(0, "The man: 'a bit slow at the start'. The woman liked it.", 2, "apl3-film") },
      { stem: "The slow start helped with understanding the characters.", ...MWB(1, "The woman: 'It helped me get to know the characters.'", 3, "apl3-film") },
      { stem: "The film was too long.", ...MWB(2, "The woman says it was much too long; the man agrees ('checking my watch').", 4, "apl3-film") },
    ] },
];

/* ---------- Listening 4: monologue (attitude, A–C) ---------- */
const L4: TextBlock[] = [
  { kind: "text", part: 10, id: "apl4-guajira", title: "Teaching in La Guajira", text: "",
    audio: [clip("4a", F.akshara, "When I signed up to teach English in a small town in La Guajira, I thought I would be the teacher. In the end, I learnt more than my students did. They taught me words in Wayuunaiki, how to cook friche, and how to be patient when the internet doesn't work for three days. I'd go back tomorrow, although next time I'd pack more mosquito spray.")],
    questions: [
      q("apl4-guajira-1", "How does the speaker feel about the experience?", 1, [o("Disappointed", "She says she'd go back tomorrow."), o("Very positive", "She learnt a lot and would go back tomorrow."), o("Nervous", "She doesn't talk about being nervous.")]),
      q("apl4-guajira-2", "What does she say about her expectations?", 0, [o("The experience was different from what she expected.", "She thought she'd be the teacher, but she learnt the most."), o("She expected it to be easy, and it was.", "She doesn't say this."), o("She didn't want to go at first, but her parents insisted.", "She signed up herself.")]),
    ] },
  { kind: "text", part: 10, id: "apl4-coach", title: "After the final", text: "",
    audio: [clip("4b", M.noah, "A lot of people think our team lost the final because of the referee. I understand why they say that, and yes, one decision was strange. But if I'm honest, we didn't play well that day. We were tired, we made mistakes, and the other team wanted it more. Next season, we need to be fitter, not angrier.")],
    questions: [
      q("apl4-coach-1", "Why does the speaker think the team lost?", 1, [o("Mainly because of the referee's decisions.", "He mentions the referee only to disagree: 'But if I'm honest…'"), o("Mainly because of the team's own performance.", "'We didn't play well… we were tired, we made mistakes.'"), o("Mainly because the other team cheated.", "He doesn't say this.")]),
      q("apl4-coach-2", "What is his attitude to next season?", 0, [o("The team should focus on improving.", "'We need to be fitter, not angrier.'"), o("They should complain more about referees.", "He says 'not angrier'."), o("He isn't interested in it.", "He talks about what they need to do next season.")]),
    ] },
];

/* ---------- Answer letters: balanced, never three the same in a row ---------- */
const PATTERN: Record<number, number[]> = { 3: [1, 0, 2, 1, 2, 0, 0, 2, 1, 2, 1, 0] };
const counter: Record<number, number> = {};
function placeAnswers(part: number, qs: ExamQ[]) {
  for (const x of qs) {
    const n = x.options.length, pat = PATTERN[n];
    const i = counter[part] ?? 0; counter[part] = i + 1;
    const target = pat[(i + part * 5) % pat.length], k = (target - x.answer + n) % n;
    const rotated: Opt[] = new Array(n);
    x.options.forEach((opt, j) => { rotated[(j + k) % n] = opt; });
    x.options = rotated; x.answer = target;
  }
}
placeAnswers(1, GRAMMAR);
for (const b of R1) placeAnswers(3, b.questions);
placeAnswers(7, L1);
for (const b of L4) placeAnswers(10, b.questions);
// Listening 3 keeps the order Man, Woman, Both (the options are labels, not answers to rotate).

const gl = (id: string, items: ListBlock["items"]): ListBlock => ({ kind: "list", part: 1, id, items });
const ll = (id: string, items: ListBlock["items"]): ListBlock => ({ kind: "list", part: 7, id, items });

/** Bank by part for part practice. Grammar practice takes 10 questions at a time. */
export const APTIS_BANK: Record<number, ExamBlock[]> = {
  1: [gl("apg-a", GRAMMAR.slice(0, 10)), gl("apg-b", GRAMMAR.slice(10, 20)), gl("apg-c", GRAMMAR.slice(20, 30))],
  2: VOCAB, 3: R1, 4: R2, 5: R3, 6: R4,
  7: [ll("apl1-a", L1.slice(0, 4)), ll("apl1-b", L1.slice(4, 8))], 8: L2, 9: L3, 10: L4,
};

export type AptisTest = { id: string; name: string; group: string; minutes: number; blocks: ExamBlock[] };
export const APTIS_TESTS: AptisTest[] = [
  { id: "aptis-core", name: "Core test", group: "Core", minutes: 25,
    blocks: [gl("apt-core-g", GRAMMAR.slice(0, 25)), VOCAB[0], VOCAB[2], VOCAB[3], VOCAB[4], VOCAB[5]] },
  { id: "aptis-reading-a", name: "Reading test A", group: "Reading", minutes: 35, blocks: [R1[0], R2[0], R2[1], R3[0], R4[0]] },
  { id: "aptis-reading-b", name: "Reading test B", group: "Reading", minutes: 35, blocks: [R1[1], R2[2], R2[3], R3[1], R4[1]] },
  { id: "aptis-listening", name: "Listening test", group: "Listening", minutes: 40, blocks: [ll("apt-l1", L1), L2[0], L2[1], L3[0], L3[1], L4[0], L4[1]] },
];

/** Every recording, for generating the audio. */
export const APTIS_CLIPS: AudioClip[] = [
  ...L1.flatMap((x) => x.audio ?? []), ...L2.flatMap((b) => b.items.flatMap((x) => x.audio ?? [])),
  ...L3.flatMap((b) => b.audio ?? []), ...L4.flatMap((b) => b.audio ?? []),
];
