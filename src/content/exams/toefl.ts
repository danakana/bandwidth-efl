/**
 * TOEFL iBT (format from 21 January 2026, scored 1 to 6 in half bands).
 * Reading: Complete the Words, Read in Daily Life, Read an Academic Passage.
 * Listening: Listen and Choose a Response, Conversation, Announcement, Academic Talk.
 * Writing: Build a Sentence (scored here), Write an Email and Academic Discussion (marked by the teacher).
 * Speaking: Listen and Repeat, Take an Interview (marked by the teacher).
 * The real test is adaptive; these practice tests are fixed and shorter. Original content for Bandwidth EFL. For teacher review.
 */
import type { AudioClip, BuildBlock, ExamBlock, ExamConfig, ExamQ, ListBlock, Opt, PartInfo, TextBlock, WordsBlock } from "./types";
import type { SpeakingSet, WritingSet } from "./aptis-production";

const o = (text: string, why: string): Opt => ({ text, why });
const mc = (id: string, prompt: string, a: number, opts: [string, string][]): ExamQ => ({ id, prompt, answer: a, options: opts.map(([t, w]) => o(t, w)) });

export const TOEFL_PARTS: PartInfo[] = [
  { part: 1, group: "Reading", name: "Complete the Words", skill: "Vocabulary and grammar in a text", task: "Finish the missing words in a short text. The first letters are given.", options: 0, approx: 10,
    question: "", method: ["Read the whole text quickly first to get the topic.", "For each gap, decide what kind of word fits: noun, verb, connector (however, because)?", "Use the letters given and the grammar around the gap: plural -s, past -ed?", "Check spelling: one wrong letter makes the word wrong."],
    trap: "Choosing a word that starts with the right letters but doesn't fit the grammar (important vs importance).", es: "Mira la gramática alrededor del espacio: ¿singular o plural? ¿pasado?" },
  { part: 2, group: "Reading", name: "Read in Daily Life", skill: "Practical texts", task: "Read a short email, notice or web page and answer two or three questions.", options: 4, approx: 10,
    question: "", method: ["Look at the type of text and who wrote it: an email from a professor, a sign, a web page?", "Read the questions, then find the answers quickly. These texts are short.", "Questions often ask why the text was written or what someone should do."],
    trap: "An option with a word from the text but the wrong detail (the wrong time, the wrong room).", es: "Busca el propósito del texto y los detalles prácticos: horas, lugares, qué hay que hacer." },
  { part: 3, group: "Reading", name: "Read an Academic Passage", skill: "University texts", task: "Read a short academic passage and answer about five questions.", options: 4, approx: 5,
    question: "", method: ["Read the first and last sentences to get the main idea.", "For vocabulary questions, put each option in the sentence and choose the one that keeps the meaning.", "For detail questions, find the exact sentence; for inference, choose what must be true."],
    trap: "An option that is true in general but not what the passage says.", es: "Responde según el texto, no según lo que sabes del tema." },
  { part: 4, group: "Listening", name: "Choose a Response", skill: "Everyday replies", task: "Hear one sentence and choose the best response.", options: 4, approx: 8,
    question: "", method: ["Listen for the function: a question, a request, news, a complaint?", "Choose the reply a real person would say back.", "Wh- questions need information; yes/no questions often start with yes, no, sure, not yet."],
    trap: "A reply that repeats a word you heard but doesn't answer.", es: "Elige lo que una persona respondería de verdad, no la opción que repite palabras." },
  { part: 5, group: "Listening", name: "Conversation", skill: "Campus conversations", task: "Listen to two people on campus and answer three or four questions.", options: 4, approx: 6,
    question: "", method: ["Find the problem in the first lines: why is the student there?", "Listen for the solution or the next step.", "Speakers sometimes change the plan. The final decision is the answer."],
    trap: "The first suggestion, which is often rejected.", es: "Escucha el problema al inicio y la solución final." },
  { part: 6, group: "Listening", name: "Announcement", skill: "Campus announcements", task: "Listen to an announcement and answer two questions.", options: 4, approx: 4,
    question: "", method: ["Listen for what is changing and why.", "Note times, places and what people need to do."],
    trap: "Mixing up two times or two places that are both mentioned.", es: "Anota horas y lugares: suelen mencionar dos." },
  { part: 7, group: "Listening", name: "Academic Talk", skill: "Short lectures", task: "Listen to part of a lecture and answer about four questions.", options: 4, approx: 8,
    question: "", method: ["The first sentences give the topic: write it down.", "Listen for examples and why the professor gives them.", "Notice words like 'what's remarkable' or 'so': they point to the key idea."],
    trap: "Remembering a detail but missing the main point it supports.", es: "Identifica el tema y para qué sirve cada ejemplo." },
  { part: 8, group: "Writing", name: "Build a Sentence", skill: "Word order", task: "Put the words in order to make a correct reply or question.", options: 0, approx: 10,
    question: "", method: ["Read the situation: are you answering or asking?", "Find the subject and the verb first.", "Questions: auxiliary before the subject (Do we…? Have you…?).", "Read your sentence in your head: does it sound natural?"],
    trap: "Statement word order in a question (we do need… instead of do we need…).", es: "En preguntas, el auxiliar va antes del sujeto: Do we… / Have you…" },
];
export const TOEFL: ExamConfig = { id: "toefl", label: "TOEFL iBT", parts: TOEFL_PARTS, neverBlank: true };

/* ---------- Reading ---------- */
const words = (id: string, title: string, text: string): WordsBlock => ({ kind: "words", part: 1, id, title, text });
const CTW_A = words("tf-ctw-a", "Animal communication",
  "Many [[anim|als]] use sound to [[comm|unicate]]. Whales, for [[exa|mple]], can sing songs that [[trav|el]] hundreds of kilometres under water. [[Scien|tists]] believe these songs [[he|lp]] them find partners and stay in [[cont|act]] with their group. [[How|ever]], [[no|ise]] from ships is making it harder for whales to hear [[ea|ch]] other.");
const CTW_B = words("tf-ctw-b", "Coffee in Colombia",
  "Coffee is one of the most [[imp|ortant]] [[cro|ps]] in Colombia. It [[gro|ws]] best on mountain slopes, where the [[temp|erature]] is mild and rain falls [[regu|larly]]. Most coffee is [[prod|uced]] by small farms, which are often run by [[fam|ilies]]. [[Bec|ause]] the plants are delicate, the beans are [[usu|ally]] picked by hand. Rising temperatures have [[for|ced]] some farmers to move higher up the mountains.");

const daily = (id: string, title: string, text: string, qs: ExamQ[]): TextBlock => ({ kind: "text", part: 2, id, title, text, questions: qs });
const DL: TextBlock[] = [
  daily("tf-dl-1", "Email from a professor",
    "From: Dr. Laura Méndez\nTo: Biology 101 students\nSubject: Change to Thursday's lab\n\nHi everyone,\nThursday's lab session will take place in Room 214 instead of Lab B, because the equipment in Lab B is being repaired. Please bring your lab notebook and a calculator. The session will start 15 minutes later than usual, at 10:15, so that the technicians can finish setting up.\n\nSee you there,\nDr. Méndez", [
      mc("tf-dl-1a", "Why is the lab session moving?", 0, [["The equipment in the usual lab is being repaired.", "\"Because the equipment in Lab B is being repaired.\""], ["Room 214 is bigger and has more equipment.", "The size of the room isn't mentioned."], ["The professor will be late on that day.", "The session starts later so technicians can set up, not because of the professor."], ["There are too many students.", "Student numbers aren't mentioned."]]),
      mc("tf-dl-1b", "What should students bring?", 2, [["A laptop and a textbook", "Neither is mentioned."], ["Their student card", "Not mentioned."], ["A notebook and a calculator", "\"Please bring your lab notebook and a calculator.\""], ["Safety glasses", "Not mentioned."]]),
      mc("tf-dl-1c", "What time will the session start?", 1, [["10:00", "That's probably the usual time; this week it's 15 minutes later."], ["10:15", "\"At 10:15.\""], ["10:30", "Not mentioned."], ["2:14", "214 is the room number."]]),
    ]),
  daily("tf-dl-2", "Notice at the campus gym",
    "CAMPUS GYM: NEW HOURS\nFrom 1 March, the gym will open at 6:00 a.m. on weekdays, one hour earlier than before. Weekend hours are unchanged: 9:00 a.m. to 5:00 p.m. Students must show their ID card at the entrance. Towels are no longer provided, so please bring your own.", [
      mc("tf-dl-2a", "What is changing?", 3, [["The weekend hours", "\"Weekend hours are unchanged.\""], ["The price of membership", "Prices aren't mentioned."], ["The entrance", "Only the ID rule is mentioned, not a new entrance."], ["The weekday opening time", "It will open \"one hour earlier than before\" on weekdays."]]),
      mc("tf-dl-2b", "What must students do now that they didn't do before?", 0, [["Bring their own towel", "\"Towels are no longer provided, so please bring your own.\""], ["Show their ID card", "This isn't described as new."], ["Book a time online", "Booking isn't mentioned."], ["Arrive before 6:00 a.m.", "6:00 is when it opens, not a rule."]]),
    ]),
  daily("tf-dl-3", "Web page: volunteer at the library",
    "Volunteer at the City Library!\nThe library is looking for students to help with its Saturday reading club for children aged 6 to 10. Volunteers read stories aloud and help with simple crafts. No experience is needed, but you must be available for at least two Saturdays a month. Volunteers receive a certificate after 20 hours. To apply, fill in the online form by 15 April.", [
      mc("tf-dl-3a", "What will volunteers do?", 1, [["Teach children to write", "Writing isn't mentioned."], ["Read stories and help with crafts", "\"Volunteers read stories aloud and help with simple crafts.\""], ["Organise the library's books", "Not mentioned."], ["Look after babies", "The children are aged 6 to 10."]]),
      mc("tf-dl-3b", "What is required to volunteer?", 2, [["Previous experience working with children", "\"No experience is needed.\""], ["Being free every Saturday", "At least two Saturdays a month, not every Saturday."], ["Being free at least two Saturdays a month", "\"You must be available for at least two Saturdays a month.\""], ["A teaching certificate or similar", "Volunteers receive a certificate; they don't need one."]]),
      mc("tf-dl-3c", "What do volunteers receive?", 0, [["A certificate after 20 hours", "\"Volunteers receive a certificate after 20 hours.\""], ["Free books from the library sale", "Not mentioned."], ["A small salary for each Saturday", "They are volunteers."], ["A library card", "Not mentioned."]]),
    ]),
  daily("tf-dl-4", "Notice to residents",
    "Notice to residents\nWater will be turned off in Building C on Tuesday from 9 a.m. to 1 p.m. while workers replace old pipes. We recommend filling a few bottles of water before 9 a.m. If the work takes longer than expected, we will send a text message to all residents.\nWe apologise for the inconvenience.\nBuilding Management", [
      mc("tf-dl-4a", "What is the main purpose of the notice?", 3, [["To ask residents to save water", "It suggests filling bottles, but that isn't the main purpose."], ["To announce new pipes in every building", "Only Building C is mentioned."], ["To apologise for a past problem", "The apology is for the coming work."], ["To tell residents about a planned water cut", "Water will be turned off on Tuesday for repairs."]]),
      mc("tf-dl-4b", "What will happen if the work takes longer?", 1, [["The work will continue on Wednesday", "Not mentioned."], ["Residents will get a text message", "\"We will send a text message to all residents.\""], ["Residents can use water in another building", "Not mentioned."], ["The building will be closed", "Not mentioned."]]),
    ]),
];

const academic = (id: string, title: string, text: string, qs: ExamQ[]): TextBlock => ({ kind: "text", part: 3, id, title, text, questions: qs });
const AP: TextBlock[] = [
  academic("tf-ap-1", "Why leaves change colour",
    "Every autumn in cold regions, the leaves of many trees turn from green to yellow, orange and red. This change is not caused by the leaves suddenly producing new colours. Instead, it reveals colours that were there all along. During spring and summer, leaves contain large amounts of chlorophyll, the green substance that plants use to turn sunlight into food. Chlorophyll is so plentiful that it hides other pigments, such as yellow and orange carotenoids.\n\nAs days become shorter in autumn, trees stop producing chlorophyll in order to save energy for the winter. As the green fades, the yellow and orange pigments become visible. Red colours are different: they come from pigments called anthocyanins, which some trees produce only in autumn. Scientists are still debating why trees spend energy making red pigments when the leaves are about to fall. One theory suggests that they protect leaves from too much sunlight, allowing the tree to recover more nutrients before the leaves drop.", [
      mc("tf-ap-1a", "What is the passage mainly about?", 2, [["How trees produce food from sunlight", "This is mentioned only to explain chlorophyll."], ["Why some trees lose their leaves", "The passage is about colour, not leaf loss."], ["Why leaves change colour in autumn", "The whole passage explains the autumn colours."], ["How scientists study trees", "Research methods aren't described."]]),
      mc("tf-ap-1b", "According to the passage, why can't we see yellow pigments in summer?", 0, [["Chlorophyll hides them.", "\"Chlorophyll is so plentiful that it hides other pigments.\""], ["Trees only make them in autumn.", "They \"were there all along\"; only the red pigments are made in autumn."], ["There is too much sunlight.", "Sunlight is linked to the red pigments, not the yellow ones."], ["They are inside the branches.", "Not mentioned."]]),
      mc("tf-ap-1c", "The word \"plentiful\" in the passage is closest in meaning to", 3, [["dangerous", "That changes the meaning of the sentence."], ["useful", "Useful isn't about quantity."], ["colourful", "Chlorophyll is green, but the word is about amount."], ["abundant", "Plentiful means present in large amounts: abundant."]]),
      mc("tf-ap-1d", "Why do trees stop producing chlorophyll in autumn?", 1, [["To protect the leaves from sunlight", "That's the theory about red pigments."], ["To save energy for the winter", "\"In order to save energy for the winter.\""], ["Because the leaves become red", "The red colour is a separate process."], ["Because carotenoids replace it", "Carotenoids were already there; they don't replace chlorophyll."]]),
      mc("tf-ap-1e", "What do scientists still disagree about?", 0, [["Why some trees make red pigments", "\"Scientists are still debating why trees spend energy making red pigments.\""], ["Whether chlorophyll is green", "This is stated as a fact."], ["When leaves fall", "Not presented as a debate."], ["How much sunlight trees need", "Not presented as a debate."]]),
    ]),
  academic("tf-ap-2", "Páramos: water factories of the Andes",
    "High in the Andes, between the upper edge of the forest and the permanent snow, lie ecosystems called páramos. About half of the world's páramos are in Colombia. At first sight they look empty: cold grasslands covered in fog, with strange plants called frailejones that can grow taller than a person. Yet these areas play a vital role for millions of people.\n\nThe soil of the páramo works like a giant sponge. It absorbs water from rain and fog and releases it slowly, keeping rivers flowing even in the dry season. Much of Bogotá's drinking water, for instance, comes from the Chingaza páramo. Frailejones contribute to this process: their hairy leaves capture moisture from the fog, which then drips into the soil. Because frailejones grow only about one centimetre a year, damaged areas take decades to recover. Farming, cattle and mining have already reduced many páramos, and climate change is pushing the ecosystem further up the mountains, where there is less space. Colombian law now protects páramos from mining, although enforcing the law remains difficult.", [
      mc("tf-ap-2a", "What does the passage mainly discuss?", 1, [["How frailejones grow and how long they live", "Frailejones are one part of the topic."], ["Why páramos are important and what threatens them", "The passage explains their role and the dangers they face."], ["The history of Bogotá's water supply system", "Bogotá is one example."], ["The climate of the Andes", "Climate is mentioned only as a threat."]]),
      mc("tf-ap-2b", "Why does the author compare the páramo's soil to a sponge?", 3, [["It is soft to walk on.", "Softness isn't the point."], ["It contains many small animals.", "Not mentioned."], ["It is covered in fog.", "Fog is above the soil."], ["It stores water and releases it slowly.", "\"It absorbs water … and releases it slowly.\""]]),
      mc("tf-ap-2c", "What can be inferred about damaged páramos?", 0, [["They recover very slowly.", "Frailejones grow about one centimetre a year, so damaged areas \"take decades to recover\"."], ["They recover within a year.", "The opposite."], ["They cannot be damaged by farming.", "Farming has \"already reduced many páramos\"."], ["They produce more water.", "Not suggested."]]),
      mc("tf-ap-2d", "The word \"vital\" in the passage is closest in meaning to", 2, [["dangerous", "That changes the meaning."], ["unusual", "The sentence is about how important they are."], ["essential", "Vital means extremely important: essential."], ["recent", "Not related."]]),
      mc("tf-ap-2e", "According to the passage, what is true about the law?", 1, [["It allows mining in some páramos if companies pay.", "It protects páramos from mining."], ["It protects páramos from mining, but it is hard to enforce.", "\"Although enforcing the law remains difficult.\""], ["It was created by Bogotá.", "It's Colombian law; Bogotá isn't mentioned."], ["It has stopped the effects of climate change there.", "Climate change is still pushing the ecosystem higher."]]),
    ]),
];

/* ---------- Listening ---------- */
const V = { isabelle: "tPDVQaZ6fdDCUmYpHyYd", jessica: "cgSgspJ2msm6clMCkdW9", sally: "QW1sSL71Pw5oHbFDen25", will: "bIHbv24MWmeRgasZH58o", ricky: "3f6pec3wODJsjTqtcNI2", noah: "9hb1f7xQcMLB90qbYSY3", obinna: "ideEOMYLgcyF9rr94ycz" };
const clip = (id: string, voice: string, script: string, who?: string): AudioClip => ({ file: `p/tfl-${id}.mp3`, voice, script, who });
const talk = (id: string, w: string, m: string, lines: ["W" | "M", string][]): AudioClip[] =>
  lines.map(([who, script], k) => clip(`${id}-${k + 1}`, who === "W" ? w : m, script, who === "W" ? "Woman" : "Man"));

type CR = [string, string, number, [string, string][]];
const CRS: CR[] = [
  ["1", "Do you know where the library is?", 0, [["Yes, it's next to the cafeteria.", "It answers where."], ["I usually read novels.", "About reading habits, not where."], ["It was really interesting.", "Doesn't answer where."], ["Because I need a book.", "Answers why, but nobody asked why."]]],
  ["2", "Would you mind closing the window?", 2, [["Yes, it's a window.", "Repeats a word; makes no sense as a reply."], ["I mind it every day.", "Repeats 'mind' without answering the request."], ["Sure, no problem.", "Agreeing to a polite request."], ["The window is made of glass.", "Repeats 'window' without answering."]]],
  ["3", "I didn't see you in class yesterday.", 1, [["Yes, I saw it.", "Doesn't explain the absence."], ["I had a doctor's appointment.", "Explains why they weren't there."], ["Class starts at eight.", "Doesn't respond to the comment."], ["I see you every day.", "Contradicts the situation."]]],
  ["4", "How long did the project take you?", 3, [["It's very long.", "Describes length, not time taken."], ["In the lab.", "Answers where."], ["With my classmates.", "Answers who with."], ["About three weeks.", "Answers how long."]]],
  ["5", "Have you finished the reading for Monday?", 0, [["Not yet, I'll do it this weekend.", "Answers the yes/no question naturally."], ["It's due on Monday morning.", "Answers when, not whether."], ["Yes, I like reading a lot.", "About liking reading, not finishing."], ["It's in the library.", "Answers where."]]],
  ["6", "Why don't we study together tonight?", 2, [["Because it's tonight.", "Treats the suggestion as a real 'why' question."], ["I studied yesterday.", "Doesn't respond to the suggestion."], ["Good idea. How about at seven?", "Accepts the suggestion and adds a time."], ["Together is better than alone.", "A general comment, not a reply."]]],
  ["7", "The printer isn't working again.", 1, [["I printed my essay yesterday.", "Doesn't respond to the problem."], ["Let's tell someone in the office.", "Offers a solution to the problem."], ["Yes, it's working fine now.", "Contradicts the speaker without reason."], ["It's a black printer.", "Describes the printer; doesn't help."]]],
  ["8", "Could you lend me your notes from the lecture?", 3, [["The lecture was long.", "Comments on the lecture, not the request."], ["I'm writing a note now.", "Repeats 'note' without answering."], ["Yes, the lecturer is very good.", "'Yes', but about the lecturer."], ["Sure, I'll send you a copy.", "Accepts the request."]]],
];
const CR_VOICES = [V.jessica, V.will, V.sally, V.ricky, V.isabelle, V.noah, V.jessica, V.obinna];
const CHOOSE: ListBlock = { kind: "list", part: 4, id: "tf-cr", title: "Choose the best response",
  items: CRS.map(([n, line, a, opts], k) => ({ id: `tf-cr-${n}`, stem: "Choose the best response.", audio: [clip(`cr-${n}`, CR_VOICES[k], line)], answer: a, options: opts.map(([t, w]) => o(t, `"${line}" ${w}`)) })) };

const C1 = talk("c1", V.isabelle, V.ricky, [
  ["W", "Hi, I need to keep this book for another week. It's due today, but I haven't finished my essay."],
  ["M", "Let me check. Hmm, I'm afraid someone else has reserved it, so I can't extend the loan."],
  ["W", "Oh no. Is there another copy?"],
  ["M", "There's an electronic version you can read online with your student account. You can't download it, but you can read it on any computer."],
  ["W", "That would work. Can I return this one now and use the online version?"],
  ["M", "Sure. And if you need to print a few pages, the printers on the second floor are free for students, up to twenty pages a day."],
  ["W", "Great, thanks!"],
]);
const C2 = talk("c2", V.jessica, V.noah, [
  ["M", "Hey Ana, are we still meeting on Wednesday for the history project?"],
  ["W", "Actually, can we move it? I just found out I have a dentist appointment."],
  ["M", "Sure. What about Thursday after class?"],
  ["W", "Thursday works. Should we meet in the library?"],
  ["M", "The group rooms are always full on Thursdays. Let's use the student centre instead. There's a big table on the first floor."],
  ["W", "Good. I'll bring the photos for the presentation. Can you finish the timeline?"],
  ["M", "I'm almost done. I just need to check two dates with Professor Ruiz."],
]);
const conv = (id: string, title: string, audio: AudioClip[], qs: ExamQ[]): TextBlock => ({ kind: "text", part: 5, id, title, text: "", audio, questions: qs });
const CONV: TextBlock[] = [
  conv("tf-c1", "A conversation at the library", C1, [
    mc("tf-c1a", "Why does the woman go to the desk?", 1, [["To reserve a book", "Someone else reserved it."], ["To keep a book longer", "\"I need to keep this book for another week.\""], ["To print her essay", "Printing comes up later."], ["To pay a fine", "Not mentioned."]]),
    mc("tf-c1b", "Why can't the man extend the loan?", 3, [["The library is closing.", "Not mentioned."], ["She already has too many books.", "Not mentioned."], ["The book is damaged.", "Not mentioned."], ["Another student has reserved it.", "\"Someone else has reserved it.\""]]),
    mc("tf-c1c", "What does the man suggest?", 0, [["Reading the book online", "\"There's an electronic version you can read online.\""], ["Buying the book", "Not mentioned."], ["Downloading the book", "\"You can't download it.\""], ["Asking her professor for more time", "Not mentioned."]]),
    mc("tf-c1d", "What does the man say about printing?", 2, [["It costs ten cents a page.", "It's free."], ["The printers are on the first floor.", "They're on the second floor."], ["It's free for up to twenty pages a day.", "\"Free for students, up to twenty pages a day.\""], ["Students can't print library books.", "Not said."]]),
  ]),
  conv("tf-c2", "Two students plan a meeting", C2, [
    mc("tf-c2a", "Why does the woman want to change the meeting?", 0, [["She has a dentist appointment.", "\"I just found out I have a dentist appointment.\""], ["The library is closed.", "Not mentioned."], ["She hasn't finished the photos.", "She'll bring the photos."], ["Professor Ruiz is busy.", "Not mentioned."]]),
    mc("tf-c2b", "Where will they meet?", 3, [["In the library", "The woman suggests it, but the group rooms are full."], ["In Professor Ruiz's office", "Not a meeting place."], ["In a classroom", "Not mentioned."], ["In the student centre", "\"Let's use the student centre instead.\""]]),
    mc("tf-c2c", "What does the man still need to do?", 1, [["Find photos for the slides", "The woman will bring the photos."], ["Check two dates with the professor", "\"I just need to check two dates with Professor Ruiz.\""], ["Book a room for the rehearsal", "Not mentioned."], ["Write the introduction", "Not mentioned."]]),
  ]),
];

const ann = (id: string, title: string, audio: AudioClip[], qs: ExamQ[]): TextBlock => ({ kind: "text", part: 6, id, title, text: "", audio, questions: qs });
const ANN: TextBlock[] = [
  ann("tf-a1", "A campus announcement", [clip("a1", V.sally, "Attention, students. Because of the storm warning, all classes after 3 p.m. today are cancelled. The library will stay open until 6 p.m. for students who need a safe place to wait, and free buses will leave from the main gate every twenty minutes until 7 p.m. Please check your email for updates about tomorrow's classes.")], [
    mc("tf-a1a", "Why are classes cancelled?", 2, [["A power cut", "Not mentioned."], ["A holiday", "Not mentioned."], ["A storm warning", "\"Because of the storm warning.\""], ["Building repairs", "Not mentioned."]]),
    mc("tf-a1b", "What is said about the buses?", 0, [["They leave from the main gate every twenty minutes.", "\"Free buses will leave from the main gate every twenty minutes until 7 p.m.\""], ["They cost less than usual during the fair.", "They're free."], ["They stop running at 6 p.m. on that day.", "6 p.m. is when the library closes; buses run until 7."], ["They leave from the library.", "They leave from the main gate."]]),
  ]),
  ann("tf-a2", "A school announcement", [clip("a2", V.obinna, "Good morning. This is a reminder that the science fair begins on Friday at 9 a.m. in the sports hall. Students presenting projects should arrive by 8:15 to set up. Visitors are welcome, and entry is free. This year, there will also be a prize for the most creative use of recycled materials.")], [
    mc("tf-a2a", "When should presenters arrive?", 1, [["At 9:00", "That's when the fair begins."], ["By 8:15", "\"Students presenting projects should arrive by 8:15.\""], ["On Thursday", "The fair is on Friday."], ["After lunch", "Not mentioned."]]),
    mc("tf-a2b", "What is new this year?", 3, [["Entry is free for all students and visitors.", "Free entry isn't described as new."], ["The fair is in the sports hall.", "Not described as new."], ["Visitors from outside the university are welcome.", "Not described as new."], ["A prize for creative use of recycled materials", "\"This year, there will also be a prize…\""]]),
  ]),
];

const lec = (id: string, title: string, audio: AudioClip[], qs: ExamQ[]): TextBlock => ({ kind: "text", part: 7, id, title, text: "", audio, questions: qs });
const LEC: TextBlock[] = [
  lec("tf-t1", "A biology lecture", [
    clip("t1-1", V.will, "Today let's look at how honeybees share information about food. When a worker bee finds a good source of flowers, she returns to the hive and performs what's called a waggle dance. She moves in a straight line while shaking her body, then circles back and repeats."),
    clip("t1-2", V.will, "The direction of the straight line tells the other bees where the food is, relative to the sun. So if she dances straight up the honeycomb, the food is in the direction of the sun. And the length of the waggle tells them how far away it is: a longer waggle means a greater distance."),
    clip("t1-3", V.will, "This was worked out by Karl von Frisch, who later won a Nobel Prize for it. What's remarkable is that bees adjust the dance as the sun moves across the sky during the day."),
  ], [
    mc("tf-t1a", "What is the lecture mainly about?", 0, [["How bees tell each other where food is", "The whole talk explains the waggle dance."], ["How bees make honey", "Not discussed."], ["The life of Karl von Frisch", "He's mentioned once."], ["Why bees prefer certain flowers", "Not discussed."]]),
    mc("tf-t1b", "What does the direction of the dance show?", 2, [["How much food there is at the flowers", "Not mentioned."], ["How far away the food is", "That's the length of the waggle."], ["Where the food is compared to the sun", "\"Where the food is, relative to the sun.\""], ["Which bee found the food first", "Not mentioned."]]),
    mc("tf-t1c", "What does a longer waggle mean?", 3, [["The food is closer.", "The opposite."], ["The bee is tired.", "Not mentioned."], ["There are more flowers.", "Not mentioned."], ["The food is farther away.", "\"A longer waggle means a greater distance.\""]]),
    mc("tf-t1d", "What does the professor find remarkable?", 1, [["Bees can see colours that humans can't.", "Not mentioned."], ["Bees change the dance as the sun moves.", "\"What's remarkable is that bees adjust the dance as the sun moves.\""], ["Von Frisch won a prize.", "Mentioned, but not called remarkable."], ["Bees always dance in straight lines.", "Part of the description, not the remarkable point."]]),
  ]),
  lec("tf-t2", "A psychology lecture", [
    clip("t2-1", V.isabelle, "In the 1880s, a German psychologist named Hermann Ebbinghaus tested his own memory by learning lists of nonsense syllables. He found that he forgot most of a list within a day, a pattern now called the forgetting curve."),
    clip("t2-2", V.isabelle, "But he also found something useful. If he reviewed a list several times with gaps in between, he remembered it much longer than if he studied it many times in one session. This is known as the spacing effect. Modern studies confirm it: students who spread their study over several days usually do better than students who study the same amount the night before."),
    clip("t2-3", V.isabelle, "Why does it work? One explanation is that each time we nearly forget something and then recall it, the memory becomes stronger. So, for your own exams, a little practice every day is better than one long session."),
  ], [
    mc("tf-t2a", "What did Ebbinghaus find first?", 1, [["Nonsense syllables are easy to learn.", "Not said."], ["He forgot most of a list within a day.", "\"He forgot most of a list within a day.\""], ["Memory improves with age.", "Not mentioned."], ["Students study too little.", "Not his finding."]]),
    mc("tf-t2b", "What is the spacing effect?", 0, [["Reviewing with gaps helps you remember longer.", "Reviewing \"with gaps in between\" helped him remember \"much longer\"."], ["Forgetting most things within a day", "That's the forgetting curve."], ["Studying in a large, quiet space with no phone", "Not mentioned."], ["Learning long lists of nonsense words by heart", "That was his method."]]),
    mc("tf-t2c", "According to one explanation, why does spacing work?", 3, [["Students sleep more when their study is spread out.", "Not mentioned."], ["Short lists are easier.", "Not mentioned."], ["Teachers give more tests when lessons are spaced out.", "Not mentioned."], ["Recalling something you nearly forgot makes the memory stronger.", "\"Each time we nearly forget something and then recall it, the memory becomes stronger.\""]]),
    mc("tf-t2d", "What does the professor advise?", 2, [["Study the night before the exam", "The opposite."], ["Learn nonsense syllables", "Not advised."], ["Practise a little every day", "\"A little practice every day is better than one long session.\""], ["Study in groups", "Not mentioned."]]),
  ]),
];

/* ---------- Build a Sentence ---------- */
type B = [string, string[], string[], string, string];
const BUILD_ITEMS: B[] = [
  ["Your classmate asks: \"Where did you put my notebook?\"", ["your", "I", "on", "left", "desk", "it"], ["I left it on your desk", "On your desk I left it"], ".", "Subject + verb + object + place: I left it on your desk."],
  ["Your coach asks: \"Why weren't you at practice?\"", ["finish", "I", "my", "to", "had", "science", "project"], ["I had to finish my science project"], ".", "had to + verb: I had to finish…"],
  ["Your friend says: \"Can you help me with the homework?\"", ["is", "exercise", "you", "which", "problems", "giving"], ["Which exercise is giving you problems"], "?", "Question word + noun + auxiliary + -ing: Which exercise is giving you problems?"],
  ["Your teacher says: \"The museum trip is on Friday.\"", ["to", "bring", "do", "need", "money", "any", "we"], ["Do we need to bring any money"], "?", "In a question, the auxiliary comes before the subject: Do we need…?"],
  ["A visitor asks: \"Where's Professor Ruiz's office?\"", ["third", "is", "the", "on", "it", "floor"], ["It is on the third floor"], ".", "It is + on + the third floor."],
  ["Your friend asks: \"How was the concert last night?\"", ["than", "it", "I", "better", "expected", "was"], ["It was better than I expected"], ".", "Comparative + than + clause: better than I expected."],
  ["You ask a classmate: \"Is the cafeteria still open?\" They answer:", ["an", "closed", "No,", "hour", "it", "ago"], ["No, it closed an hour ago"], ".", "Time expression at the end: an hour ago."],
  ["Your friend says: \"My laptop stopped working.\"", ["it", "you", "restarting", "have", "tried"], ["Have you tried restarting it"], "?", "Present perfect question: Have you tried + -ing?"],
  ["A tourist asks: \"Which bus goes to the stadium?\"", ["number", "should", "you", "twelve", "take", "the"], ["You should take the number twelve"], ".", "Subject + should + verb: You should take…"],
  ["Your friend asks: \"Did you enjoy the book?\"", ["best", "have", "it", "the", "read", "book", "was", "I", "ever"], ["It was the best book I have ever read"], ".", "Superlative + present perfect with ever: the best book I have ever read."],
];
const BUILD: BuildBlock[] = [
  { kind: "build", part: 8, id: "tf-build-a", title: "Build a sentence", items: BUILD_ITEMS.slice(0, 5).map(([context, w, answers, end, why], k) => ({ id: `tf-b-${k + 1}`, context, words: w, answers, end, why })) },
  { kind: "build", part: 8, id: "tf-build-b", title: "Build a sentence", items: BUILD_ITEMS.slice(5).map(([context, w, answers, end, why], k) => ({ id: `tf-b-${k + 6}`, context, words: w, answers, end, why })) },
];

export const TOEFL_BANK: Record<number, ExamBlock[]> = {
  1: [CTW_A, CTW_B], 2: DL, 3: AP, 4: [CHOOSE], 5: CONV, 6: ANN, 7: LEC, 8: BUILD,
};
export type ToeflTest = { id: string; name: string; group: string; minutes: number; blocks: ExamBlock[] };
export const TOEFL_TESTS: ToeflTest[] = [
  { id: "toefl-reading", name: "Reading test", group: "Reading", minutes: 30, blocks: [CTW_A, DL[0], DL[1], AP[0], CTW_B, DL[2], DL[3], AP[1]] },
  { id: "toefl-listening", name: "Listening test", group: "Listening", minutes: 25, blocks: [CHOOSE, CONV[0], ANN[0], LEC[0], CONV[1], ANN[1], LEC[1]] },
];
export const TOEFL_CLIPS: AudioClip[] = [...CHOOSE.items.flatMap((x) => x.audio ?? []), ...C1, ...C2, ...ANN.flatMap((b) => b.audio ?? []), ...LEC.flatMap((b) => b.audio ?? [])];

/** A rough guide only: ETS doesn't publish a table for the new 1–6 scale, and the real test is adaptive. */
export function toeflBand(correct: number, total: number): number {
  const p = correct / total;
  return p >= 0.95 ? 6 : p >= 0.88 ? 5.5 : p >= 0.8 ? 5 : p >= 0.7 ? 4.5 : p >= 0.6 ? 4 : p >= 0.5 ? 3.5 : p >= 0.4 ? 3 : p >= 0.3 ? 2.5 : p >= 0.2 ? 2 : p >= 0.1 ? 1.5 : 1;
}

/* ---------- Writing and Speaking, marked by the teacher (parts 31–34) ---------- */
export const TOEFL_W_PARTS: PartInfo[] = [
  { part: 31, group: "Writing", name: "Write an Email", skill: "Practical writing", task: "Reply to an email, covering every point. About 7 minutes.", options: 0, approx: 1,
    question: "", method: ["Read who wrote to you and what they ask for: there are usually three points.", "Greeting, one short paragraph for each point, a polite ending.", "Match the tone: friendly for a classmate, polite for a professor."],
    trap: "Missing one of the points. The score depends on answering all of them.", es: "Responde todos los puntos del correo, con el tono adecuado." },
  { part: 32, group: "Writing", name: "Academic Discussion", skill: "Opinion post", task: "Read a professor's question and two students' posts, then add your own post of at least 100 words. About 10 minutes.", options: 0, approx: 1,
    question: "", method: ["Read the professor's question and both students' posts.", "State your opinion in the first sentence.", "Add a new reason or example that the other students didn't give.", "You can agree or disagree with a classmate by name."],
    trap: "Repeating a classmate's idea instead of adding something new.", es: "Da tu opinión y agrega una idea nueva que los compañeros no mencionaron." },
];
export const TOEFL_S_PARTS: PartInfo[] = [
  { part: 33, group: "Speaking", name: "Listen and Repeat", skill: "Pronunciation and accuracy", task: "Listen to seven sentences and repeat each one exactly.", options: 0, approx: 7,
    question: "", method: ["Listen to the whole sentence before you start.", "Repeat the exact words, in the same order.", "Copy the rhythm and stress, not only the words."],
    trap: "Changing small words (a/the, in/on) or leaving out endings (-s, -ed).", es: "Repite exactamente las mismas palabras, con el mismo ritmo." },
  { part: 34, group: "Speaking", name: "Take an Interview", skill: "Speaking about yourself and ideas", task: "Answer four interview questions with no time to plan. Up to 45 seconds each.", options: 0, approx: 4,
    question: "", method: ["The questions go from your experience, to your preference, to your opinion, to a prediction.", "Answer directly in the first sentence, then give a reason and an example.", "Use the full 45 seconds."],
    trap: "Giving a short answer and stopping after 15 seconds.", es: "Responde, da una razón y un ejemplo. Usa los 45 segundos." },
];

export const TOEFL_WRITING: WritingSet[] = [
  { id: "tf-a", club: "TOEFL Writing set A", parts: [
    { part: 31, intro: "Your classmate Martín sent you this email. Write a reply.",
      email: "Hi!\n\nI heard you went to the new science museum last weekend. I'm thinking of taking my little brother. What did you see there? Was it good for kids? Is there anything I should know before going?\n\nThanks,\nMartín",
      questions: [{ id: "e", ask: "In your email: describe what you saw, say whether it's good for children, and give one practical tip.", min: 80, max: 999 }] },
    { part: 32, intro: "Your professor is teaching a class on education. Read the discussion, then write a post that adds to it.",
      email: "Professor: Some people believe online classes are as effective as classes in a classroom. Others disagree. What do you think, and why?\n\nCamila: I think online classes can be just as good. I can watch recorded lectures again and study at my own pace.\n\nDaniel: I disagree. In a classroom you can ask questions straight away and work with classmates. Online, it's easy to get distracted.",
      questions: [{ id: "d", ask: "Write your post. Write at least 100 words.", min: 100, max: 999 }] },
  ] },
  { id: "tf-b", club: "TOEFL Writing set B", parts: [
    { part: 31, intro: "Your professor, Dr. Ortiz, sent you this email. Write a reply.",
      email: "Dear students,\n\nI'm planning next month's field trip and would like your opinion. We could visit either a coffee farm or a botanical garden. Please write to me with your preference, a reason, and any concerns you have about the trip.\n\nBest wishes,\nDr. Ortiz",
      questions: [{ id: "e", ask: "In your email: say which trip you prefer, give a reason, and mention one concern.", min: 80, max: 999 }] },
    { part: 32, intro: "Your professor is teaching a class on cities. Read the discussion, then write a post that adds to it.",
      email: "Professor: Cities are growing fast. Should city governments spend more money on public transport or on building more roads? Why?\n\nSofía: Public transport, definitely. One bus can carry fifty people, so it reduces traffic and pollution at the same time.\n\nMateo: I think roads are still important. Many people live far from bus routes, and goods are delivered by truck.",
      questions: [{ id: "d", ask: "Write your post. Write at least 100 words.", min: 100, max: 999 }] },
  ] },
];

export const TOEFL_SPEAKING: (SpeakingSet & { repeat: number[] })[] = [
  { id: "tf-a", repeat: [33], parts: [
    { part: 33, intro: "You are a new student. A librarian is showing you around. Listen and repeat each sentence.", questions: [
      "Welcome to the university library.", "Please show your student card at the entrance.", "The computers are on the second floor.", "You can borrow up to five books at a time.",
      "Group study rooms must be booked online.", "Food is not allowed in the reading areas.", "The library closes at ten o'clock on weekdays.",
    ].map((ask) => ({ ask, seconds: 10 })) },
    { part: 34, intro: "Answer four questions. You have up to 45 seconds for each.", questions: [
      { ask: "Tell me about a place where you like to study.", seconds: 45 },
      { ask: "Do you prefer studying alone or with other people? Why?", seconds: 45 },
      { ask: "Some people say students should not use their phones while studying. Do you agree? Why?", seconds: 45 },
      { ask: "How do you think students will study in twenty years?", seconds: 45 },
    ] },
  ] },
  { id: "tf-b", repeat: [33], parts: [
    { part: 33, intro: "You are visiting the campus sports centre. Listen and repeat each sentence.", questions: [
      "Welcome to the campus sports centre.", "Lockers are next to the changing rooms.", "Please bring your own towel.", "The swimming pool is closed on Mondays.",
      "Fitness classes start every hour from eight.", "You need to book the tennis courts in advance.", "Ask at reception if you have any questions.",
    ].map((ask) => ({ ask, seconds: 10 })) },
    { part: 34, intro: "Answer four questions. You have up to 45 seconds for each.", questions: [
      { ask: "Tell me about a trip you enjoyed.", seconds: 45 },
      { ask: "Would you rather visit a big city or the countryside? Why?", seconds: 45 },
      { ask: "Some people think young people should travel before going to university. What do you think?", seconds: 45 },
      { ask: "How do you think tourism will change in the future?", seconds: 45 },
    ] },
  ] },
];

export const TOEFL_BANDS = ["1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5", "5.5", "6"];
export const toeflMarkCoins = (band: string) => { const b = Number(band); return b >= 6 ? 10 : b >= 5 ? 8 : b >= 4 ? 6 : b >= 3 ? 4 : b >= 2 ? 2 : 1; };
