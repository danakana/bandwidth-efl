/**
 * ICFES Saber 11 English: method cards and an original question bank in the official format
 * (Guía de orientación Saber 11 2026-2: 7 parts, Part 1 has 5 descriptions and 7 words A–G,
 * Parts 2–5 have options A–C, Parts 6–7 have A–D). Every option has a reason. For teacher review.
 */
import type { ExamBlock, ExamConfig, ExamQ, ListBlock, MatchBlock, Opt, PartInfo, TextBlock } from "./types";

const o = (text: string, why: string): Opt => ({ text, why });
const q = (id: string, prompt: string | undefined, answer: number, options: Opt[], challenge?: boolean): ExamQ => ({ id, prompt, options, answer, challenge });

export const ICFES_PARTS: PartInfo[] = [
  { part: 1, name: "Part 1", skill: "Vocabulary", task: "Match each description to a word. Two words are extra.", options: 7, approx: 5,
    question: "Which word does the description talk about?",
    method: ["Read the description.", "Guess the word before you look at the list.", "Find it in the list and cross it out.", "Use the words that are left for the hard ones."],
    trap: "A word from the same topic with a different meaning (a bakery is a shop too, but it doesn't sell medicine).",
    es: "Lee la descripción y adivina la palabra antes de mirar la lista. Sobran dos palabras." },
  { part: 2, name: "Part 2", skill: "Signs and notices", task: "Where can you see this notice?", options: 3, approx: 7,
    question: "Where can you see this notice?",
    method: ["Ask: who wrote this, and for whom?", "Find the key words (No, Only, Please, Platform, Return…).", "Choose the place where the notice has a real purpose."],
    trap: "A place that shares a word with the notice but where the notice would make no sense.",
    es: "Piensa quién escribió el aviso y para quién. Elige el lugar donde el aviso tiene sentido." },
  { part: 3, name: "Part 3", skill: "Conversations", task: "Choose the best reply.", options: 3, approx: 6,
    question: "What is the best reply?",
    method: ["Name what the first person is doing: offering, asking, apologising, giving news…", "Imagine a real person answering.", "Choose the reply that does that job."],
    trap: "A reply that repeats words from the first line but doesn't answer it.",
    es: "¿Qué hace la primera persona: ofrece, pide, se disculpa, da una noticia? Elige la respuesta natural." },
  { part: 4, name: "Part 4", skill: "Grammar in a text", task: "Choose the right word for each gap.", options: 3, approx: 10,
    question: "Which word goes in the gap?",
    method: ["Read the whole sentence, not just the gap.", "Look left and right: subject, time words, prepositions.", "Name what is missing (a verb in the past, a preposition…).", "Choose, then read the sentence again."],
    trap: "Choosing from the gap alone. The clue is in the rest of the sentence.",
    es: "Lee la oración completa. La pista está antes y después del espacio (sujeto, tiempo, preposición)." },
  { part: 5, name: "Part 5", skill: "Reading for detail", task: "Choose the answer that says the same as the text.", options: 3, approx: 9,
    question: "Choose the correct answer.",
    method: ["Read the question first.", "Underline its key words.", "Find the same idea in the text, in different words.", "Check that the meaning is exactly the same."],
    trap: "An option that copies words from the text but changes the meaning.",
    es: "La respuesta correcta dice lo mismo que el texto con otras palabras. Cuidado con las opciones que copian palabras." },
  { part: 6, name: "Part 6", skill: "Reading between the lines", task: "Purpose, main idea, feelings and meaning.", options: 4, approx: 6,
    question: "Choose the best answer.",
    method: ["Say the main idea in one sentence.", "Ask: why did the writer write this?", "Remove options that are too narrow, too broad, or not in the text."],
    trap: "An option that is true in real life but not what the text says.",
    es: "Piensa en la idea principal y en por qué el autor escribió el texto. Descarta lo que no está en el texto." },
  { part: 7, name: "Part 7", skill: "Grammar and vocabulary in a text", task: "Choose the right word for each gap.", options: 4, approx: 12,
    question: "Which word goes in the gap?",
    method: ["Use the Part 4 routine: read the whole sentence, look left and right.", "Then check the meaning: does the word make sense here?", "Check word partners (famous for, at the same time)."],
    trap: "Two options are grammatical, but only one has the right meaning.",
    es: "Primero la gramática, luego el significado. Dos opciones pueden ser correctas en gramática, pero solo una tiene sentido." },
];

/* ---------- Part 1: vocabulary ---------- */
const P1: MatchBlock[] = [
  { kind: "match", part: 1, id: "ic1-places",
    words: [
      { w: "library", means: "a place where you borrow books" }, { w: "pharmacy", means: "a shop that sells medicine" },
      { w: "bakery", means: "a shop that sells bread and cakes" }, { w: "stadium", means: "a big place for sports matches" },
      { w: "airport", means: "a place where planes arrive and leave" }, { w: "museum", means: "a place with old objects and art" },
      { w: "post office", means: "a place where you send letters and packages" },
    ],
    items: [
      { id: "ic1-places-1", desc: "You can buy medicine here.", answer: 1, why: "A pharmacy sells medicine. A bakery is also a shop, but it sells bread." },
      { id: "ic1-places-2", desc: "You can borrow books here for free.", answer: 0, why: "You borrow books from a library. You buy them in a bookshop." },
      { id: "ic1-places-3", desc: "People go here to watch football matches.", answer: 3, why: "Football matches happen in a stadium." },
      { id: "ic1-places-4", desc: "You can see old objects and paintings here.", answer: 5, why: "A museum shows old objects and art." },
      { id: "ic1-places-5", desc: "You go here to send a letter or a package.", answer: 6, why: "You send letters and packages from a post office." },
    ] },
  { kind: "match", part: 1, id: "ic1-jobs",
    words: [
      { w: "nurse", means: "looks after sick people in a hospital" }, { w: "mechanic", means: "repairs cars and engines" },
      { w: "lawyer", means: "helps people with the law" }, { w: "farmer", means: "grows food and keeps animals" },
      { w: "chef", means: "cooks in a restaurant" }, { w: "pilot", means: "flies planes" },
      { w: "dentist", means: "looks after your teeth" },
    ],
    items: [
      { id: "ic1-jobs-1", desc: "This person grows food and looks after animals.", answer: 3, why: "A farmer grows food and keeps animals." },
      { id: "ic1-jobs-2", desc: "This person repairs cars.", answer: 1, why: "A mechanic repairs cars. A pilot works with planes, not cars." },
      { id: "ic1-jobs-3", desc: "This person flies planes.", answer: 5, why: "A pilot flies planes." },
      { id: "ic1-jobs-4", desc: "This person checks and cleans your teeth.", answer: 6, why: "A dentist looks after teeth. A nurse helps sick people in general." },
      { id: "ic1-jobs-5", desc: "This person cooks food in a restaurant.", answer: 4, why: "A chef cooks in a restaurant. A farmer grows food but doesn't cook it for customers." },
    ] },
  { kind: "match", part: 1, id: "ic1-things",
    words: [
      { w: "umbrella", means: "keeps you dry in the rain" }, { w: "wallet", means: "holds money and cards" },
      { w: "calculator", means: "does maths for you" }, { w: "blanket", means: "a warm cover for a bed" },
      { w: "ladder", means: "helps you climb to high places" }, { w: "scissors", means: "cut paper or cloth" },
      { w: "toothbrush", means: "cleans your teeth" },
    ],
    items: [
      { id: "ic1-things-1", desc: "You use this to stay dry when it rains.", answer: 0, why: "An umbrella keeps you dry in the rain." },
      { id: "ic1-things-2", desc: "You use this to cut paper.", answer: 5, why: "Scissors cut paper." },
      { id: "ic1-things-3", desc: "You keep your money and cards in this.", answer: 1, why: "A wallet holds money and cards." },
      { id: "ic1-things-4", desc: "You use this to reach high places, like a roof.", answer: 4, why: "You climb a ladder to reach high places." },
      { id: "ic1-things-5", desc: "This keeps you warm in bed at night.", answer: 3, why: "A blanket is a warm cover for a bed." },
    ] },
];

/* ---------- Part 2: notices (where can you see this?) ---------- */
const P2_ITEMS: (ExamQ & { stem: string })[] = [
  { stem: "Please keep your seatbelt fastened while the sign is on.", ...q("ic2-1", undefined, 0, [
    o("on a plane", "Planes have a seatbelt sign that the crew turns on."), o("in a cinema", "Cinema seats don't have seatbelts."), o("in a car park", "A car park has cars, but nobody is sitting in a moving seat with a sign above it.")]) },
  { stem: "Return books by the date stamped inside. Late returns: $500 a day.", ...q("ic2-2", undefined, 1, [
    o("in a bookshop", "In a bookshop you buy books; you don't return them by a date."), o("in a library", "You borrow books from a library and pay if you return them late."), o("in a post office", "A post office stamps letters, not books you borrowed.")]) },
  { stem: "Staff must wash their hands before returning to work.", ...q("ic2-3", undefined, 0, [
    o("in a restaurant's staff bathroom", "Kitchen workers must wash their hands before going back to the food."), o("at a swimming pool", "A pool notice is for swimmers, not staff returning to work."), o("in a bank", "Bank staff don't handle food, so this notice is for a kitchen.")]) },
  { stem: "Please do not feed the animals. They follow a special diet.", ...q("ic2-4", undefined, 1, [
    o("in a pet shop", "A pet shop sells animal food, so it wouldn't ask you not to feed animals."), o("at a zoo", "Zoos ask visitors not to feed the animals."), o("in a supermarket", "A supermarket sells food but has no animals.")]) },
  { stem: "Platform 3: trains to Zipaquirá every 30 minutes.", ...q("ic2-5", undefined, 2, [
    o("at an airport", "Airports have gates and planes, not platforms and trains."), o("at a bus stop", "A bus stop has buses, not trains or platforms."), o("at a train station", "Trains leave from platforms at a station.")]) },
  { stem: "Quiet, please. Exam in progress.", ...q("ic2-6", undefined, 0, [
    o("outside a classroom", "Exams happen in classrooms, so the notice asks people outside to be quiet."), o("in a hospital", "Hospitals ask for quiet, but they don't have exams in progress."), o("at a concert", "A concert is noisy; nobody takes an exam there.")]) },
  { stem: "Fitting rooms: maximum 4 items per person.", ...q("ic2-7", undefined, 1, [
    o("in a gym", "A gym has changing rooms, but you don't try on items to buy."), o("in a clothes shop", "In a clothes shop you take clothes into a fitting room to try them on."), o("in a supermarket", "You don't try on supermarket items.")]) },
  { stem: "Keep off the grass.", ...q("ic2-8", undefined, 1, [
    o("in a cinema", "A cinema has no grass."), o("in a park", "Parks often ask people not to walk on the grass."), o("on a plane", "There is no grass on a plane.")]) },
  { stem: "Ring the bell for service.", ...q("ic2-9", undefined, 2, [
    o("on a bus", "On a bus you ring the bell to stop, not for service."), o("in a classroom", "A classroom bell marks the time; it doesn't call a worker."), o("at a hotel reception", "At a hotel desk you ring a bell so a worker comes to help you.")]) },
  { stem: "Take a number and wait until it appears on the screen.", ...q("ic2-10", undefined, 0, [
    o("in a bank", "Banks give numbers so customers wait their turn."), o("in a park", "Nobody waits in line with a number in a park."), o("in a classroom", "Students don't take numbers to wait for a screen.")]) },
  { stem: "Children under 12 must be with an adult in the pool area.", ...q("ic2-11", undefined, 0, [
    o("at a sports centre", "A sports centre has a pool area and rules for children."), o("in a library", "A library has no pool."), o("in a restaurant", "A restaurant has no pool area.")]) },
  { stem: "Mind the step.", ...q("ic2-12", undefined, 1, [
    o("in an email", "An email has no physical step."), o("at a shop entrance", "A notice at a door warns people about a step on the floor."), o("on a food label", "A food label talks about food, not steps.")]) },
  { stem: "Shake well before use. Keep in the fridge after opening.", ...q("ic2-13", undefined, 0, [
    o("on a juice bottle", "You shake juice and keep it in the fridge after opening."), o("on a washing machine", "You don't shake a washing machine or put it in a fridge."), o("on a classroom door", "A door isn't something you shake or keep cold.")]) },
  { stem: "Lost something? Ask at the information desk on the ground floor.", ...q("ic2-14", undefined, 2, [
    o("in a car", "A car has no floors or information desk."), o("on a phone bill", "A bill talks about payments, not lost things in a building."), o("in a shopping centre", "Shopping centres have floors and an information desk.")]) },
];

/* ---------- Part 3: conversations ---------- */
const P3_ITEMS: (ExamQ & { stem: string })[] = [
  { stem: "Would you like some more rice?", ...q("ic3-1", undefined, 0, [
    o("No, thanks. I'm full.", "It answers the offer politely."), o("Rice comes from Asia.", "It repeats 'rice' but doesn't answer the offer."), o("I'd like to cook.", "It repeats 'like' but doesn't answer the offer.")]) },
  { stem: "Sorry I'm late.", ...q("ic3-2", undefined, 1, [
    o("Yes, it's ten o'clock.", "It talks about time but doesn't respond to the apology."), o("Don't worry. We're just starting.", "It accepts the apology in a natural way."), o("Me too, I'm sorry.", "The speaker didn't do anything wrong, so they don't need to apologise.")]) },
  { stem: "How was your weekend?", ...q("ic3-3", undefined, 2, [
    o("Next weekend.", "The question is about the past weekend, not the next one."), o("I'm fine, thanks.", "That answers 'How are you?', not 'How was your weekend?'."), o("Great! We went to the river.", "It says how the weekend was and gives a detail.")]) },
  { stem: "Can you help me with my homework?", ...q("ic3-4", undefined, 0, [
    o("Sure. What do you need?", "It agrees to help and asks a natural follow-up question."), o("Yes, I can do my homework.", "It talks about the speaker's own homework, not helping."), o("Homework is boring.", "It gives an opinion but doesn't answer the request.")]) },
  { stem: "I passed my driving test!", ...q("ic3-5", undefined, 0, [
    o("Congratulations! That's great news.", "Good news needs congratulations."), o("Please drive carefully to the test.", "The test is already finished."), o("I don't have a car.", "It repeats the topic of driving but doesn't react to the news.")]) },
  { stem: "What time does the museum close?", ...q("ic3-6", undefined, 1, [
    o("It's next to the park.", "That answers 'Where?', not 'What time?'."), o("At six o'clock.", "It gives a time, which is what the question asks."), o("Yes, it's closed.", "A 'What time…?' question can't be answered with yes or no.")]) },
  { stem: "Let's go to the cinema tonight.", ...q("ic3-7", undefined, 0, [
    o("Good idea! What do you want to see?", "It accepts the suggestion and asks a natural question."), o("The cinema is big.", "It describes the cinema but doesn't answer the suggestion."), o("Yes, I'm at the cinema.", "The plan is for tonight; the speaker isn't there now.")]) },
  { stem: "Excuse me, is this seat free?", ...q("ic3-8", undefined, 1, [
    o("I'm taking the bus.", "It doesn't answer whether the seat is free."), o("Sorry, my friend is sitting there.", "It answers the question politely: the seat isn't free."), o("It's a nice seat.", "It repeats 'seat' but doesn't say if it's free.")]) },
  { stem: "I've got a terrible headache.", ...q("ic3-9", undefined, 2, [
    o("My head is fine.", "It talks about the wrong person's head."), o("I've got a new hat.", "It talks about the head, but it doesn't respond to the problem."), o("Oh no. Why don't you lie down for a while?", "It shows sympathy and gives advice.")]) },
  { stem: "Could you pass me the salt, please?", ...q("ic3-10", undefined, 1, [
    o("Yes, I could.", "It answers the grammar, not the request. People say 'Here you are' and pass it."), o("Here you are.", "This is what we say when we give someone something."), o("It's very salty.", "It repeats 'salt' but doesn't do what was asked.")]) },
  { stem: "Do you mind if I open the window?", ...q("ic3-11", undefined, 1, [
    o("Yes, it's a window.", "It describes the window instead of giving permission."), o("Not at all. It's hot in here.", "'Not at all' means 'I don't mind', so it gives permission."), o("I don't open windows.", "The question asks for permission, not about your habits.")]) },
  { stem: "Where did you buy those shoes?", ...q("ic3-12", undefined, 2, [
    o("Last Saturday.", "That answers 'When?', not 'Where?'."), o("Size 38.", "That answers 'What size?'."), o("At the shopping centre near my house.", "It gives a place, which is what 'Where?' asks.")]) },
  { stem: "I'm sorry, I broke your pencil.", ...q("ic3-13", undefined, 0, [
    o("That's OK. I have another one.", "It accepts the apology kindly."), o("Yes, it's a pencil.", "It repeats 'pencil' but doesn't respond to the apology."), o("I'm sorry too.", "The other person didn't do anything wrong.")]) },
  { stem: "Are you coming to Laura's party on Saturday?", ...q("ic3-14", undefined, 1, [
    o("Laura is my cousin.", "It talks about Laura but doesn't answer the question."), o("I'd love to, but I have to study.", "It answers politely: no, and gives a reason."), o("It was a great party.", "The party is on Saturday, in the future.")]) },
];

/* ---------- Part 4: grammar in a text (A–C) ---------- */
const P4: TextBlock[] = [
  { kind: "text", part: 4, id: "ic4-farm", title: "My grandmother's farm",
    text: "My grandmother lives [1] a small farm near Guatapé. Every Saturday, my brother and I [2] the bus to visit her. Last week, she [3] us how to make arepas. My arepas were not as good [4] hers, but she said they were delicious. Next month, we [5] going to stay with her for the whole holiday.",
    questions: [
      q("ic4-farm-1", undefined, 1, [o("in", "We say 'in' a city or a house, but 'on' a farm."), o("on", "We live 'on' a farm."), o("at", "'At' is for an exact point, like 'at the door'.")]),
      q("ic4-farm-2", undefined, 0, [o("take", "'My brother and I' is plural, and 'every Saturday' is a routine: take."), o("takes", "'Takes' is for he / she / it, not 'my brother and I'."), o("taking", "'Taking' needs 'are' before it.")]),
      q("ic4-farm-3", undefined, 2, [o("teach", "'Last week' needs the past."), o("teaches", "'Teaches' is present; 'last week' is past."), o("taught", "'Last week' needs the past: taught.")]),
      q("ic4-farm-4", undefined, 0, [o("as", "We say 'as good as'."), o("than", "'Than' goes with 'better', not with 'as good'."), o("like", "'As good like' is not correct English.")]),
      q("ic4-farm-5", undefined, 1, [o("is", "'We' needs 'are', not 'is'."), o("are", "'We are going to' is the future plan."), o("am", "'Am' only goes with 'I'.")]),
    ] },
  { kind: "text", part: 4, id: "ic4-student", title: "A new student",
    text: "Mariana is a new student at our school. She [1] from Pasto, and she has two sisters. She [2] speak English very well because she lived in Canada for three years. When she lived there, there [3] a lot of snow every winter. Yesterday, she [4] me some photos of Toronto. I think she will be [5] best friend this year.",
    questions: [
      q("ic4-student-1", undefined, 1, [o("come", "'She' needs a verb with -s in the present."), o("comes", "'She comes from' tells where she is from."), o("coming", "'Coming' needs 'is' before it.")]),
      q("ic4-student-2", undefined, 0, [o("can", "'Can' + verb shows ability: she can speak."), o("cans", "'Can' never takes -s."), o("is", "'She is speak' is not correct.")]),
      q("ic4-student-3", undefined, 0, [o("was", "'When she lived there' is past, and 'snow' is uncountable: there was."), o("were", "'Were' is for plural nouns, but 'snow' is uncountable."), o("is", "The sentence is about the past ('when she lived there').")]),
      q("ic4-student-4", undefined, 2, [o("show", "'Yesterday' needs the past."), o("shows", "'Shows' is present; 'yesterday' is past."), o("showed", "'Yesterday' needs the past: showed.")]),
      q("ic4-student-5", undefined, 0, [o("my", "Before a noun ('best friend') we use 'my'."), o("me", "'Me' is an object, not used before a noun."), o("mine", "'Mine' stands alone, without a noun after it.")]),
    ] },
  { kind: "text", part: 4, id: "ic4-garden", title: "The school garden",
    text: "Our class started a garden behind the school [1] year. At first, nothing grew [2] the soil was very dry. Then our science teacher showed us [3] to make compost. Now we have tomatoes, lettuce and beans. We [4] them to the school kitchen every Friday. Next year, we want to plant [5] fruit trees.",
    questions: [
      q("ic4-garden-1", undefined, 0, [o("last", "'Last year' is a past time."), o("ago", "'Ago' goes after a number: 'two years ago'."), o("before", "'Before year' is not correct.")]),
      q("ic4-garden-2", undefined, 0, [o("because", "The dry soil is the reason nothing grew."), o("but", "'But' shows contrast, and there is no contrast here."), o("so", "'So' shows a result; the dry soil is the reason, not the result.")]),
      q("ic4-garden-3", undefined, 1, [o("what", "'Showed us what to make' changes the meaning; the teacher showed the method."), o("how", "'How to make' means the way to do it."), o("who", "'Who' is for people, not methods.")]),
      q("ic4-garden-4", undefined, 2, [o("gives", "'We' doesn't take -s."), o("giving", "'Giving' needs 'are'."), o("give", "'We give' is a routine ('every Friday').")]),
      q("ic4-garden-5", undefined, 0, [o("some", "'Some' goes with plural nouns like 'trees'."), o("much", "'Much' is for uncountable nouns, not 'trees'."), o("a", "'A' goes with one thing, but 'trees' is plural.")]),
    ] },
  { kind: "text", part: 4, id: "ic4-match", title: "A football match",
    text: "Last Sunday, my cousins and I [1] to the stadium to watch Atlético Nacional. The match [2] at four o'clock, but we arrived at two. The stadium was [3] than I imagined. My cousin Sebastián, [4] loves football, bought a new shirt. Nacional won 2–1, and everyone [5] singing on the way home.",
    questions: [
      q("ic4-match-1", undefined, 1, [o("go", "'Last Sunday' needs the past."), o("went", "'Last Sunday' needs the past: went."), o("going", "'Going' needs 'were' before it.")]),
      q("ic4-match-2", undefined, 1, [o("start", "The story is in the past."), o("started", "The match happened last Sunday: started."), o("starting", "'Starting' needs 'was' before it.")]),
      q("ic4-match-3", undefined, 0, [o("bigger", "'Than' needs a comparative: bigger."), o("big", "'Big than' is not correct; we need 'bigger than'."), o("biggest", "'Biggest' goes with 'the', not with 'than'.")]),
      q("ic4-match-4", undefined, 1, [o("which", "'Which' is for things, but Sebastián is a person."), o("who", "'Who' is for people."), o("where", "'Where' is for places.")]),
      q("ic4-match-5", undefined, 0, [o("was", "'Everyone' is singular: everyone was."), o("were", "'Everyone' takes a singular verb."), o("are", "The story is in the past.")]),
    ] },
];

/* ---------- Part 5: reading for detail (A–C) ---------- */
const P5: TextBlock[] = [
  { kind: "text", part: 5, id: "ic5-cano", title: "The river of five colours",
    text: "Caño Cristales is a river in the Serranía de La Macarena, in the department of Meta. People call it 'the river of five colours' because, between July and November, a special plant under the water turns red. You can also see yellow, green, blue and black in the river.\n\nThe river is protected, so visitors must follow some rules. They cannot use sun cream or insect repellent in the water, because these products damage the plant. Visitors also need to go with a local guide. There are no roads to the river, so most tourists fly to the small town of La Macarena first and then walk or ride a horse.\n\nMany local families now work in tourism. Some of them were farmers before, but now they work as guides, cooks or hotel owners.",
    questions: [
      q("ic5-cano-1", "When is the river red?", 0, [o("During some months in the second half of the year.", "July to November is the second half of the year."), o("Every day of the year.", "The text says the plant turns red only between July and November."), o("Only at night.", "The text doesn't talk about night.")]),
      q("ic5-cano-2", "Why can't visitors use sun cream in the water?", 1, [o("It is very expensive.", "The text doesn't talk about price."), o("It is bad for the plant.", "The text says these products damage the plant."), o("The guides sell it.", "Guides are mentioned, but not selling sun cream.")]),
      q("ic5-cano-3", "What do visitors need?", 2, [o("A car to get to the river.", "There are no roads to the river."), o("Their own horse.", "Tourists can ride a horse, but they don't need their own."), o("Someone from the area to go with them.", "'A local guide' means a person from the area.")]),
      q("ic5-cano-4", "How do most tourists get to La Macarena?", 0, [o("By plane.", "'Fly' means travel by plane."), o("By road.", "The text says there are no roads to the river."), o("By boat.", "Boats are not mentioned.")]),
      q("ic5-cano-5", "What is true about some local families?", 0, [o("They stopped farming and now work with visitors.", "'Were farmers before, but now they work as guides' means they changed jobs."), o("They don't like tourists.", "The text says they work in tourism."), o("They are farmers and guides at the same time.", "The text says they were farmers before, not now.")]),
    ] },
  { kind: "text", part: 5, id: "ic5-shelter", title: "An email from Juliana",
    text: "Hi Tomás,\n\nHow are you? I have some news. Since February, I have been a volunteer at an animal shelter near my house. I go every Saturday from eight to twelve in the morning. I clean the dogs' beds, give them water and take the older dogs for short walks.\n\nThe shelter has forty dogs and twenty-five cats. Most of them were found in the street. The people who work there don't get a salary; they all do it for free, like me.\n\nLast week, a family adopted Lucky, a black dog I walked every Saturday. I was sad to say goodbye, but I was happy for him. If you want to come with me one day, you need to be fifteen or older.\n\nWrite soon,\nJuliana",
    questions: [
      q("ic5-shelter-1", "When does Juliana help at the shelter?", 1, [o("Every weekend afternoon.", "She goes in the morning, and only on Saturdays."), o("On Saturday mornings.", "From eight to twelve on Saturdays is the morning."), o("Only in February.", "She started in February and still goes.")]),
      q("ic5-shelter-2", "What is true about the people who work at the shelter?", 0, [o("They are not paid.", "'Don't get a salary' means they are not paid."), o("They work forty hours a week.", "Forty is the number of dogs, not hours."), o("They live at the shelter.", "The text doesn't say this.")]),
      q("ic5-shelter-3", "How did Juliana feel when Lucky left?", 2, [o("Only angry.", "She doesn't say she was angry."), o("Very tired.", "The text doesn't talk about being tired."), o("Sad and happy at the same time.", "She was sad to say goodbye but happy for him.")]),
      q("ic5-shelter-4", "What does Tomás need to go to the shelter?", 1, [o("His own dog.", "He doesn't need a dog."), o("To be at least fifteen.", "'Fifteen or older' means at least fifteen."), o("Money to pay for the walks.", "The text doesn't mention paying.")]),
    ] },
  { kind: "text", part: 5, id: "ic5-bikes", title: "The bike library",
    text: "At Colegio San Simón in Ibagué, students can borrow a bicycle the same way they borrow a book. The idea came from a group of tenth-grade students. They noticed that many classmates walked more than forty minutes to school.\n\nThe students asked local businesses for old bicycles. They received thirty, and a mechanic from the neighbourhood taught them how to repair them. Now the school has a 'bike library' with forty-five bicycles.\n\nTo borrow a bike, students fill in a form and go to a short safety class. They can keep the bike for one month, and then they must bring it back for a check. If a bike has a problem, the students in the repair club fix it on Wednesday afternoons.\n\nThe project won a regional prize last year, and two other schools now want to copy it.",
    questions: [
      q("ic5-bikes-1", "Who had the idea for the project?", 1, [o("A mechanic from the neighbourhood.", "The mechanic helped later; the idea came from students."), o("Some older students at the school.", "Tenth-grade students are older students."), o("The school director.", "The director is not mentioned.")]),
      q("ic5-bikes-2", "Why did the project start?", 0, [o("Some students had a long walk to school.", "Many walked more than forty minutes."), o("The students wanted to win a prize.", "The prize came later; it wasn't the reason."), o("The school had too many books.", "Books are only used as a comparison.")]),
      q("ic5-bikes-3", "How many bicycles did the businesses give?", 2, [o("Forty-five", "Forty-five is how many the school has now."), o("Forty", "Forty is the number of minutes, not bicycles."), o("Thirty", "'They received thirty.'")]),
      q("ic5-bikes-4", "What must students do before they borrow a bike?", 2, [o("Pay for one month.", "One month is how long they keep it; they don't pay."), o("Join the repair club.", "The repair club fixes bikes; students don't have to join it."), o("Complete a form and a safety lesson.", "'Fill in a form and go to a short safety class.'")]),
      q("ic5-bikes-5", "What happens on Wednesday afternoons?", 0, [o("Students repair bikes that have problems.", "The repair club fixes bikes then."), o("Everyone returns their bikes.", "Bikes come back after one month, not every Wednesday."), o("The mechanic gives safety classes.", "The text doesn't say who gives the safety class or when.")]),
    ] },
  { kind: "text", part: 5, id: "ic5-reading", title: "Holiday Reading Challenge",
    text: "Biblioteca Pública de Pereira: Holiday Reading Challenge\n\nAre you between 10 and 17 years old? Join our Holiday Reading Challenge! It starts on 1 December and finishes on 31 January.\n\nHow it works: Read at least six books during the holidays. They can be novels, comics or information books, in Spanish or English. After each book, come to the library and tell a librarian about it in two or three minutes. You will get a stamp on your reading card.\n\nPrizes: Everyone who gets six stamps receives a certificate and a free bookmark. Readers with ten stamps or more can also enter a competition to win a tablet.\n\nSign up at the children's desk on the first floor. Bring your library card. If you don't have one, you can get one for free with a photo of your ID.",
    questions: [
      q("ic5-reading-1", "Who can take part?", 1, [o("Children under ten.", "The challenge is for ages 10 to 17."), o("Young people aged 10 to 17.", "'Between 10 and 17 years old.'"), o("Adults who work at the library.", "Librarians help; they don't take part.")]),
      q("ic5-reading-2", "What kind of books can participants read?", 2, [o("Only novels in English.", "Comics and information books are allowed too, in two languages."), o("Only books about the holidays.", "The text doesn't limit the topic."), o("Different types of books in two languages.", "Novels, comics or information books, in Spanish or English.")]),
      q("ic5-reading-3", "What do readers do after they finish a book?", 0, [o("Talk about it briefly with a librarian.", "'Tell a librarian about it in two or three minutes.'"), o("Write a long report.", "They speak; they don't write."), o("Send it back by post.", "The text doesn't talk about post.")]),
      q("ic5-reading-4", "What do you need to sign up if you don't have a library card?", 1, [o("Six stamps.", "Stamps come after reading, not before signing up."), o("A picture of your identity document.", "'A photo of your ID.'"), o("Money for the card.", "The card is free.")]),
    ] },
];

/* ---------- Part 6: reading between the lines (A–D) ---------- */
const P6: TextBlock[] = [
  { kind: "text", part: 6, id: "ic6-phone", title: "Why my phone sleeps in the kitchen",
    text: "Last year I always took my phone to bed. I told myself I was only checking messages, but suddenly it was one in the morning and I was watching videos of people cooking food I would never cook. In the mornings, I was tired and in a bad mood, and my marks in maths went down.\n\nIn January, my mum and I made a deal. At nine thirty, both of our phones go into a box in the kitchen. The first week was terrible. I felt that I was missing everything. By the third week, though, I was falling asleep faster, and I started reading again, something I hadn't done since primary school.\n\nI'm not saying phones are bad. I still use mine every day. But I've learned that the problem was never the phone. It was me not knowing when to stop.",
    questions: [
      q("ic6-phone-1", "What is the writer's main purpose?", 0, [o("To explain how a simple change improved her habits.", "She describes the deal and how her sleep and reading got better."), o("To tell readers that phones are dangerous.", "She says, 'I'm not saying phones are bad.'"), o("To give advice about cooking.", "Cooking videos are only a small detail."), o("To complain about her mum's rules.", "It was a deal they made together, and she is happy with it.")]),
      q("ic6-phone-2", "How did the writer probably feel in the first week?", 1, [o("Relaxed and happy.", "She says the first week was terrible."), o("Worried that she was missing things.", "'I felt that I was missing everything.'"), o("Proud of her maths marks.", "Her marks went down before the deal."), o("Bored with reading.", "She started reading later, and she liked it.")]),
      q("ic6-phone-3", "What does the last sentence suggest?", 1, [o("Phone companies should change their apps.", "She doesn't blame companies."), o("Her own self-control was the real problem.", "'The problem was never the phone. It was me not knowing when to stop.'"), o("Her mum was the problem.", "Her mum helped her with the deal."), o("She will never use a phone again.", "She says she still uses it every day.")], true),
    ] },
  { kind: "text", part: 6, id: "ic6-frailejon", title: "A small plant with a big job",
    text: "High in the páramos of Colombia grows a strange plant with soft, hairy leaves: the frailejón. Some frailejones are more than two hundred years old, but they grow only about one centimetre a year. Their hairy leaves catch water from the fog, and this water slowly goes into the ground and then into rivers. Millions of people in cities like Bogotá drink water that starts in the páramos.\n\nToday, cows, potato farms and fires are destroying parts of the páramos. When a frailejón is cut or burned, it can take many decades to replace it. Some groups of farmers now protect the plants and receive help to grow their crops in other places. Scientists say that protecting a small plant today is one of the best ways to protect a big city's water tomorrow.",
    questions: [
      q("ic6-frailejon-1", "What is the text mainly about?", 1, [o("How to grow potatoes in the mountains.", "Potato farms are mentioned only as a problem."), o("Why a slow-growing plant matters for water.", "The whole text explains the frailejón and the water it gives cities."), o("The history of Bogotá.", "Bogotá is only an example of a city that uses the water."), o("Why cows are dangerous animals.", "Cows are one cause of damage, not the main topic.")]),
      q("ic6-frailejon-2", "Why does the writer say frailejones grow one centimetre a year?", 0, [o("To show that damaged plants are hard to replace.", "Slow growth is why it takes decades to replace them."), o("To compare them with trees in Bogotá.", "There is no comparison with trees."), o("To explain why their leaves are hairy.", "The hairy leaves catch fog; growth speed is not the reason."), o("To show that they are easy to grow.", "Growing slowly makes them hard, not easy, to replace.")]),
      q("ic6-frailejon-3", "What does the last sentence suggest?", 2, [o("Cities should move to the páramos.", "The text doesn't say this."), o("Scientists want to stop all farming.", "Farmers get help to grow crops in other places, so farming continues."), o("Small actions today can have big effects later.", "Protecting a small plant now protects a city's water in the future."), o("Plants are more important than people.", "The point is that plants help people.")]),
    ] },
  { kind: "text", part: 6, id: "ic6-bus", title: "A letter to families",
    text: "Dear families,\n\nAs you know, the school bus company has changed its route this year. We understand that some of you are unhappy because the bus now arrives at 6:10 instead of 6:30. We have listened to your comments, and we met with the company last Tuesday.\n\nThe company explained that the new route avoids a road that floods when it rains. For safety reasons, they cannot go back to the old route. However, they agreed to add a second, smaller bus for students who live in the Los Pinos area, which will leave at 6:30 from next Monday.\n\nWe know early mornings are hard. Thank you for your patience while we look for the best solution for everyone.\n\nSincerely,\nCarmen Ruiz, Director",
    questions: [
      q("ic6-bus-1", "Why did the director write this letter?", 1, [o("To ask families to pay more for the bus.", "Money is not mentioned."), o("To answer complaints and explain a change.", "She mentions families' comments and explains the new route."), o("To say that the bus service will stop.", "The service continues, and a second bus is added."), o("To complain about the bus company.", "She explains the company's reasons calmly.")]),
      q("ic6-bus-2", "Why can't the bus go back to the old route?", 0, [o("Part of the old route can be dangerous when it rains.", "The old road floods, so safety is the reason."), o("Families asked for a new route.", "Families are unhappy with the new route."), o("The company needs more money.", "Money is not mentioned."), o("The driver lives in Los Pinos.", "Los Pinos is where some students live.")]),
      q("ic6-bus-3", "What is the tone of the letter?", 1, [o("Angry", "There are no angry words."), o("Understanding and polite", "'We understand', 'We know early mornings are hard', 'Thank you for your patience.'"), o("Funny", "There are no jokes."), o("Afraid", "The director is calm, not afraid.")]),
    ] },
  { kind: "text", part: 6, id: "ic6-daniel", title: "The new drummer",
    text: "When Daniel's family moved from Cartagena to Tunja, the first thing he noticed was the cold. The second was that nobody at his new school laughed at his jokes. In Cartagena he talked all the time; in Tunja he started sitting at the back of the class with his headphones on.\n\nOne afternoon, the music teacher asked if anyone could play the drums for the school band. Daniel's hand went up before he could stop it. That Friday, he played a fast champeta rhythm that made the whole band smile. After the practice, a girl called Valeria asked him to teach her.\n\nDaniel still thinks Tunja is too cold. But now, when he walks into class, people say hello first.",
    questions: [
      q("ic6-daniel-1", "How did Daniel feel in his first weeks in Tunja?", 1, [o("Excited about the weather.", "He noticed the cold and still thinks it's too cold."), o("Lonely and quiet.", "He sat at the back with headphones and nobody laughed at his jokes."), o("Angry with his teacher.", "The teacher isn't the problem in the story."), o("Proud of his jokes.", "Nobody laughed, so he stopped talking.")]),
      q("ic6-daniel-2", "What does 'Daniel's hand went up before he could stop it' suggest?", 1, [o("Someone told him to raise his hand.", "Nobody told him to."), o("He really wanted to play, even though he felt shy.", "His wish was stronger than his shyness."), o("He hurt his hand.", "Nothing in the story says he was hurt."), o("He didn't hear the question.", "He answered the teacher's question.")], true),
      q("ic6-daniel-3", "What has changed by the end of the story?", 3, [o("The weather is warm now.", "He still thinks Tunja is too cold."), o("Daniel moved back to Cartagena.", "He is still at his school in Tunja."), o("Daniel stopped playing music.", "Music is what helped him."), o("His classmates now accept him.", "People say hello to him first.")]),
    ] },
];

/* ---------- Part 7: grammar and vocabulary in a text (A–D) ---------- */
const P7: TextBlock[] = [
  { kind: "text", part: 7, id: "ic7-coffee", title: "Colombian coffee",
    text: "Colombia is famous [1] its coffee. Most coffee farms are in the mountains, where the weather is neither too hot [2] too cold. Coffee plants need a lot of rain, and the beans are usually [3] by hand. Many families have [4] coffee for generations. Today, more young people are [5] interested in becoming baristas, and some coffee shops [6] special classes for them.",
    questions: [
      q("ic7-coffee-1", undefined, 0, [o("for", "We say 'famous for'."), o("of", "'Famous of' is not correct."), o("with", "'Famous with' is not correct."), o("about", "'Famous about' is not correct.")]),
      q("ic7-coffee-2", undefined, 2, [o("or", "'Neither' goes with 'nor', not 'or'."), o("and", "'Neither… and' is not correct."), o("nor", "'Neither… nor' means not one and not the other."), o("but", "'Neither… but' is not correct.")]),
      q("ic7-coffee-3", undefined, 0, [o("picked", "'Are picked' is the passive: people pick them."), o("picking", "'The beans are picking' means the beans do the picking."), o("pick", "'Are pick' is not correct."), o("picks", "'Are picks' is not correct.")]),
      q("ic7-coffee-4", undefined, 2, [o("grow", "'Have grow' is not correct."), o("grew", "'Have grew' is not correct; we need the past participle."), o("grown", "'Have grown' is the present perfect: for generations until now."), o("growing", "'Have growing' is not correct.")]),
      q("ic7-coffee-5", undefined, 0, [o("becoming", "'Are becoming interested' means more and more people are interested."), o("having", "'Having interested' is not correct."), o("making", "'Making interested' doesn't make sense here."), o("doing", "'Doing interested' is not correct.")]),
      q("ic7-coffee-6", undefined, 0, [o("offer", "Shops offer classes to people."), o("ask", "'Ask special classes' doesn't make sense."), o("take", "The young people take classes; the shops give them."), o("learn", "Shops don't learn classes; they give them.")]),
    ] },
  { kind: "text", part: 7, id: "ic7-job", title: "My first job",
    text: "Last July, I got my first job [1] a waiter in a small restaurant in Santa Marta. I was nervous because I had never [2] before. On my first day, I dropped two plates, but my boss was very [3]. She told me that everybody makes mistakes at the beginning. Soon I learned to carry three plates [4] the same time. By the end of the holidays, I had [5] enough money to buy a new phone. The best part was meeting tourists [6] different countries.",
    questions: [
      q("ic7-job-1", undefined, 0, [o("as", "We say 'a job as a waiter'."), o("like", "'Like a waiter' means similar to a waiter, not working as one."), o("for", "'A job for a waiter' means a job for another person."), o("of", "'A job of a waiter' is not natural.")]),
      q("ic7-job-2", undefined, 1, [o("work", "'Had never work' is not correct."), o("worked", "'Had never worked' is the past perfect."), o("working", "'Had never working' is not correct."), o("works", "'Had never works' is not correct.")]),
      q("ic7-job-3", undefined, 0, [o("patient", "She was kind and calm about the mistake."), o("angry", "Grammatical, but she told him everybody makes mistakes, so she wasn't angry."), o("boring", "'Boring' doesn't fit what she did."), o("lazy", "'Lazy' doesn't fit what she said.")]),
      q("ic7-job-4", undefined, 2, [o("in", "'In the same time' is not correct."), o("on", "'On the same time' is not correct."), o("at", "We say 'at the same time'."), o("by", "'By the same time' has a different meaning.")]),
      q("ic7-job-5", undefined, 1, [o("spent", "If you spend money, you don't have it to buy a phone."), o("saved", "He kept money so he could buy a phone."), o("lost", "Losing money wouldn't help him buy a phone."), o("paid", "'Paid enough money to buy' doesn't make sense here.")]),
      q("ic7-job-6", undefined, 0, [o("from", "People come 'from' countries."), o("of", "'Tourists of different countries' is less natural here."), o("at", "'At different countries' is not correct."), o("to", "'To' shows where they go, not where they come from.")]),
    ] },
  { kind: "text", part: 7, id: "ic7-recycling", title: "Recycling at home",
    text: "In my house, we started recycling two years ago. At first, it was [1] to remember which bin was for plastic and which was for paper. My little brother made colourful signs, and now everybody [2] where to put things. Now we also [3] less plastic than before. For example, we take our own bags [4] we go to the supermarket. My mum says that if every family [5] the same, our city would be much cleaner. I think she is right, [6] recycling is easy once it becomes a habit.",
    questions: [
      q("ic7-recycling-1", undefined, 0, [o("difficult", "After 'it was' we need an adjective: difficult."), o("difficulty", "'Difficulty' is a noun."), o("difficultly", "'Difficultly' is not a word."), o("differently", "'Differently' is an adverb with a different meaning.")]),
      q("ic7-recycling-2", undefined, 1, [o("know", "'Everybody' takes a singular verb."), o("knows", "'Everybody knows': singular with -s."), o("knowing", "'Everybody knowing' is not a complete sentence."), o("known", "'Everybody known' is not correct.")]),
      q("ic7-recycling-3", undefined, 0, [o("use", "'Now we use' is the present."), o("uses", "'We' doesn't take -s."), o("used", "'Now' tells us it's the present, not the past."), o("using", "'We using' needs 'are'.")]),
      q("ic7-recycling-4", undefined, 1, [o("because", "Going to the supermarket isn't the reason for the bags; it's the time."), o("when", "'When we go' tells us the time."), o("so", "'So' shows a result, which doesn't fit."), o("until", "'Until we go' doesn't make sense here.")]),
      q("ic7-recycling-5", undefined, 0, [o("did", "'If every family did…, our city would be…': imaginary situation."), o("does", "'Would' needs the past form after 'if'."), o("do", "'Every family' is singular, and 'would' needs the past."), o("doing", "'If every family doing' is not correct.")]),
      q("ic7-recycling-6", undefined, 0, [o("because", "It gives the reason she is right."), o("but", "'But' shows contrast, and there is no contrast."), o("or", "'Or' gives a choice, which doesn't fit."), o("although", "'Although' shows contrast, which doesn't fit.")]),
    ] },
  { kind: "text", part: 7, id: "ic7-amazon", title: "A trip to the Amazon", challenge: true,
    text: "Last year, my aunt, who is a biologist, invited me to join her on a research trip to Leticia. We spent most of our time on a boat, [1] the pink river dolphins. It was hard work: we had to wake up [2] five every morning and write down everything we saw. One evening, a storm [3] so suddenly that we had to stop the boat under some trees. I was scared, but my aunt stayed completely [4]. She said that in the rainforest, you have to [5] to change your plans. I came home tired, but I am now [6] that I want to study biology too.",
    questions: [
      q("ic7-amazon-1", undefined, 0, [o("watching", "'Spent time… watching' describes what they did."), o("watched", "'Spent our time watched' is not correct."), o("watches", "'Watches' needs a subject like 'she'."), o("watch", "After 'spent our time' we need -ing.")]),
      q("ic7-amazon-2", undefined, 0, [o("at", "We say 'at five' for clock times."), o("in", "'In five' means five minutes or hours from now."), o("on", "'On' is for days, not clock times."), o("by", "'By five' means before five, a different meaning.")]),
      q("ic7-amazon-3", undefined, 1, [o("arrives", "The story is in the past."), o("arrived", "'One evening' is past: arrived."), o("arriving", "'A storm arriving' needs 'was'."), o("arrive", "The story is in the past.")]),
      q("ic7-amazon-4", undefined, 0, [o("calm", "After 'stayed' we use an adjective: calm."), o("calmly", "'Stayed calmly' is not correct; 'stay' needs an adjective."), o("nervous", "Grammatical, but 'but' shows she was different from the scared writer."), o("calmness", "'Calmness' is a noun.")]),
      q("ic7-amazon-5", undefined, 1, [o("ready", "'Have to ready' needs a verb before 'ready'."), o("be ready", "'Have to be ready to' is correct."), o("are ready", "'Have to are' is not correct."), o("readying", "'Have to readying' is not correct.")]),
      q("ic7-amazon-6", undefined, 0, [o("sure", "'I am now sure that I want…' means certain."), o("sorry", "'Sorry' doesn't fit; the trip made the writer want biology."), o("surely", "'Surely' is an adverb; after 'am' we need an adjective."), o("afraid", "Grammatical, but the writer is happy to study biology, not afraid.")]),
    ] },
];

/*
 * Answer letters: items are written with the answer anywhere, then rotated onto a fixed,
 * irregular pattern so letters are balanced, never three the same in a row, and not a simple cycle.
 */
const PATTERN: Record<number, number[]> = { 3: [1, 0, 2, 1, 2, 0, 0, 2, 1, 2, 1, 0], 4: [2, 0, 3, 1, 1, 3, 0, 2, 3, 2, 0, 1] };
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
placeAnswers(2, P2_ITEMS);
placeAnswers(3, P3_ITEMS);
for (const b of [...P4, ...P5, ...P6, ...P7]) placeAnswers(b.part, b.questions);

const list = (part: 2 | 3, id: string, items: (ExamQ & { stem: string })[]): ListBlock => ({ kind: "list", part, id, items });
const P2 = P2_ITEMS, P3 = P3_ITEMS;

/** Every block in the bank, by part. Part practice draws from here. */
export const ICFES_BANK: Record<number, ExamBlock[]> = {
  1: P1,
  2: [list(2, "ic2-a", P2.slice(0, 7)), list(2, "ic2-b", P2.slice(7, 14))],
  3: [list(3, "ic3-a", P3.slice(0, 6)), list(3, "ic3-b", P3.slice(6, 12)), list(3, "ic3-c", P3.slice(8, 14))],
  4: P4, 5: P5, 6: P6, 7: P7,
};

/** Two full mock exams of 55 questions, each in two sections like two class periods. */
export type Mock = { id: string; name: string; sections: { id: string; name: string; minutes: number; blocks: ExamBlock[] }[] };
export const ICFES_MOCKS: Mock[] = [
  { id: "icfes-mock-1", name: "Mock exam 1", sections: [
    { id: "icfes-mock-1a", name: "Section 1 · Parts 1–4", minutes: 25,
      blocks: [P1[0], list(2, "m1-p2", P2.slice(0, 7)), list(3, "m1-p3", P3.slice(0, 6)), P4[0], P4[1]] },
    { id: "icfes-mock-1b", name: "Section 2 · Parts 5–7", minutes: 35,
      blocks: [P5[0], P5[1], P6[0], P6[1], P7[0], P7[1]] },
  ] },
  { id: "icfes-mock-2", name: "Mock exam 2", sections: [
    { id: "icfes-mock-2a", name: "Section 1 · Parts 1–4", minutes: 25,
      blocks: [P1[1], list(2, "m2-p2", P2.slice(7, 14)), list(3, "m2-p3", P3.slice(6, 12)), P4[2], P4[3]] },
    { id: "icfes-mock-2b", name: "Section 2 · Parts 5–7", minutes: 35,
      blocks: [P5[2], P5[3], P6[2], P6[3], P7[2], P7[3]] },
  ] },
];

/** How many questions a block holds (an ordering task scores one point per sentence placed). */
export const countQ = (b: ExamBlock) => (b.kind === "match" || b.kind === "list" || b.kind === "fill" || b.kind === "build" ? b.items.length : b.kind === "order" ? b.sentences.length : b.kind === "words" ? (b.text.match(/\[\[/g) ?? []).length : b.questions.length);

export const ICFES: ExamConfig = { id: "icfes", label: "ICFES Saber 11", parts: ICFES_PARTS, neverBlank: true };
