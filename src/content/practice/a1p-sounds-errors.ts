/* A1+ Sounds and Error Clinic. Five steps per skill. Original content for Bandwidth EFL. For teacher review.
   Lowest band: short Spanish notes (es) and glosses shown only after a wrong answer. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, es, fix, gap, heard, ord, say, tr } from "./helpers";

const S = (n: string, k: string) => `p/a1ps-${n}-${k}.mp3`;
const E = (n: string, k: string) => `p/a1pe-${n}-${k}.mp3`;

export const A1P_SOUNDS_ERRORS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: S("01", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "She walks. He plays. It washes. Cats. Dogs. Buses. My sister watches TV and my brother reads books. The boxes are in the classes." },
  { file: S("01", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "My sister watches TV and my brother reads books." },
  { file: S("02", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Spain. School. Student. Spanish. Street. Sport. I study Spanish at school. My student card is in the street. I love sports!" },
  { file: S("02", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "I study Spanish at school." },
  { file: S("03", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "Ship. Sheep. Live. Leave. Sit. Seat. Full. Fool. The sheep is on the ship. Please sit in this seat. I live here, but I leave at six." },
  { file: S("03", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Please sit in this seat." },
  { file: E("01", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "How old are you? I'm thirteen. My brother is ten. My grandma is seventy-two years old. How old is your dog? He's five." },
  { file: E("01", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "My grandma is seventy-two years old." },
  { file: E("02", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "It's raining. It's cold today. Is it far? Yes, it is. I like this song. It's great! It's nine o'clock. It's very easy." },
  { file: E("02", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "I like this song. It's great!" },
  { file: E("03", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "My friends are very nice. They're funny and kind. The people in my town are friendly. People are happy here. The red shoes are new." },
  { file: E("03", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "The people in my town are friendly." },
  { file: E("04", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "My dad works at night. My mum teaches English. My cat sleeps all day. My best friend lives near me. She plays the guitar, and he watches football." },
  { file: E("04", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "My best friend lives near me." },
];

const sEndings: NodePractice = {
  nodeId: "a1p.third-person-s-and-plural-endings-s-z-z",
  explain: "The -s ending has three sounds. /s/ after p, t, k, f: walks, cats, books. /z/ after most other sounds: plays, dogs, reads. /ɪz/ (an extra syllable) after s, sh, ch, x, ge: buses, watches, washes, boxes, pages. The same rule works for plurals (cats, dogs, buses) and verbs with he / she / it (walks, plays, watches).",
  pattern: ["/s/ after p, t, k, f: cats, walks, books", "/z/ after most sounds: dogs, plays, reads", "/ɪz/ after s, sh, ch, x: buses, watches, boxes (+1 syllable)", "Same for plurals and he / she / it verbs"],
  es: "Solo se agrega una sílaba (/ɪz/) después de s, sh, ch, x: bus-es, watch-es. 'Cats' es UNA sílaba, no «ca-tes».",
  steps: [
    [
      heard(S("01", "notice"), "Which word has an extra syllable?", ["buses", "dogs", "cats"], 0, "bus-es: 2 syllables."),
      heard(S("01", "notice"), "What does the sister do?", ["Watches TV", "Reads books", "Plays football"], 0, "'My sister watches TV.'"),
      heard(S("01", "notice"), "Where are the boxes?", ["In the classes", "On the bus", "In the kitchen"], 0, "'The boxes are in the classes.'"),
      ch("How many syllables in 'watches'?", ["2", "1", "3"], 0, "watch-es."),
      ch("How many syllables in 'cats'?", ["1", "2", "3"], 0, "cats: one syllable."),
    ],
    [
      ch("Which ending sounds like /ɪz/?", ["washes", "plays", "walks"], 0, "after sh → /ɪz/."),
      ch("Which ending sounds like /s/?", ["books", "dogs", "boxes"], 0, "after k → /s/."),
      ch("Which ending sounds like /z/?", ["dogs", "cats", "buses"], 0, "after g → /z/."),
      es(ch("'Likes' is pronounced:", ["one syllable: /laɪks/", "two syllables: /laɪ-kes/", "three syllables"], 0, "No extra syllable after k."), "'Likes' no es «lai-kes», es una sola sílaba."),
      ch("Which word has 2 syllables?", ["pages", "eats", "runs"], 0, "pag-es."),
    ],
    [
      gap("She", "TV every evening. (watch)", ["watches"], "watch → watches."),
      gap("I have two", ". (box)", ["boxes"], "box → boxes."),
      tr("He / she form.", "I wash the dishes.", ["She washes the dishes", "He washes the dishes", "She washes the dishes.", "He washes the dishes."], "wash → washes."),
      dict(S("01", "dict"), ["My sister watches TV and my brother reads books"]),
      say("She watches TV, he plays games and it sleeps.", "watch-es (2) · plays (1) · sleeps (1)."),
    ],
    [
      fix(["My brother", "watchs", "football."], 1, ["watches"], "ch → -es."),
      fix(["There are three", "bus", "outside."], 1, ["buses"], "Plural: buses."),
      fix(["She", "wash", "her hair every day."], 1, ["washes"], "she → washes."),
      ch("Which spelling is wrong?", ["boxs", "boxes", "foxes"], 0, "x → -es."),
      ord("My mum teaches English and fixes computers.", "teach-es · fix-es."),
    ],
    [
      ctx("You describe your dog.", "Say it naturally:", ["He runs, jumps and catches balls.", "He run, jump and catch balls.", "He runes and jumpes."], 0, "runs /z/, jumps /s/, catches /ɪz/."),
      ch("Count the syllables in 'She misses the buses':", ["6", "4", "5"], 0, "She-miss-es-the-bus-es."),
      ch("Read aloud: 'He likes cats'. How many syllables?", ["3", "5", "4"], 0, "He-likes-cats."),
      ctx("Your friend says 'He watch-es-es'.", "Best help:", ["It's just watch-es: two syllables.", "It's watchs: one syllable.", "It's watch: no s."], 0, "watch-es."),
      say("My cat sleeps, my dog plays and my fish watches me!", "sleeps /s/ · plays /z/ · watches /ɪz/."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about a family member's day (20 words or more). Use he or she with verbs like watches, plays, walks, washes." },
      { universe: "science", text: "Describe what an animal does every day (20 words or more). Use verbs with -s and -es." },
    ],
    minWords: 20,
    checks: [
      { label: "Verbs or plurals with -es (watches, washes, buses…)", pattern: "\\b\\w+(sh|ch|x|ss|s)es\\b", min: 1 },
      { label: "Other -s words", pattern: "\\b\\w{2,}[^s\\s]s\\b", min: 3 },
    ],
    rubric: ["I added -s for he / she / it.", "I used -es after s, sh, ch, x.", "I read my text aloud with the right -s sounds."],
    model: "My grandpa gets up early. He drinks coffee and reads the news. Then he washes the car and watches TV. In the afternoon, he plays dominoes with his friends and walks the dogs.",
  },
};

const noExtraE: NodePractice = {
  nodeId: "a1p.no-extra-e-before-s-consonant",
  explain: "In Spanish, words don't start with s + consonant, so we add an 'e': «escuela», «España». In English, there is NO 'e' sound: school, Spain, student, street, sport, Spanish. Start with a long 'ssss' and go straight to the next sound: ssss-chool, ssss-pain.",
  pattern: ["school (not 'eschool')", "Spain · Spanish (not 'Espain')", "student · study · street · sport · stop", "Trick: start with ssss…"],
  es: "No digas «eschool» ni «Espain». Empieza con una s larga: sssschool, ssssSpain.",
  steps: [
    [
      heard(S("02", "notice"), "How does 'school' start?", ["With an s sound", "With an e sound", "With a k sound"], 0, "ssss-chool."),
      heard(S("02", "notice"), "What does the speaker study?", ["Spanish", "Sport", "Science"], 0, "'I study Spanish at school.'"),
      heard(S("02", "notice"), "Where is the student card?", ["In the street", "At school", "In Spain"], 0, "'My student card is in the street.'"),
      ch("How many syllables does 'school' have?", ["1", "2", "3"], 0, "school: one syllable (no e-)."),
      ch("How many syllables does 'Spain' have?", ["1", "2", "3"], 0, "Spain: one."),
    ],
    [
      es(ch("Which is the right sound?", ["/skuːl/ (school)", "/eskuːl/ (eschool)", "/eskuela/"], 0, "No e at the start."), "No agregues «e» antes de s + consonante."),
      ch("How many syllables does 'student' have?", ["2", "3", "1"], 0, "stu-dent (not es-tu-dent)."),
      ch("Which word starts with s + consonant?", ["street", "seat", "sun"], 0, "s + t."),
      ch("How many syllables in 'Spanish'?", ["2", "3", "4"], 0, "Span-ish."),
      ch("Best trick to say 'sport':", ["Start with a long ssss", "Start with 'e'", "Say 'es-port'"], 0, "ssss-port."),
    ],
    [
      gap("I go to", "every day. (escuela)", ["school"], "school."),
      gap("I'm a", "at Colegio Santa María. (estudiante)", ["student"], "student."),
      tr("Write it in English.", "Estudio español.", ["I study Spanish", "I study Spanish."], "study · Spanish."),
      dict(S("02", "dict"), ["I study Spanish at school"]),
      say("I study Spanish at school in the street near the station.", "No e: ssstudy, ssspanish, ssschool."),
    ],
    [
      fix(["My favourite", "esport", "is volleyball."], 1, ["sport"], "No e: sport."),
      fix(["I live on Seventh", "Estreet", "."], 1, ["Street"], "No e: street."),
      fix(["She is from", "Espain", "."], 1, ["Spain"], "No e: Spain."),
      ch("Which is spelled right?", ["special", "especial", "espetial"], 0, "special (no e)."),
      ord("Stop at the station, please.", "No e: stop, station."),
    ],
    [
      ctx("A tourist asks: 'What do you do?'", "Best answer:", ["I'm a student at a school in Cali.", "I'm a estudent.", "I'm estudent in eschool."], 0, "student · school."),
      ch("Tell a friend about your hobbies:", ["I love sports and I play in a small team.", "I love esports and play in a esmall team.", "I love deportes."], 0, "No extra e."),
      ctx("Your friend says 'Espanish'.", "Best help:", ["Try ssss-panish, with no e at the start.", "Say it faster.", "Say 'Espanich'."], 0, "Long s first."),
      ch("Read: 'Stop! The station is on this street.' How many syllables in 'street'?", ["1", "2", "3"], 0, "street: one syllable."),
      say("Students study at school: stop, start, smile!", "No e on any word."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about your school and your favourite sport (20 words or more). Use at least four words that start with s + consonant (school, student, sport, study…)." },
      { universe: "words", text: "Write a short tongue twister with s + consonant words (20 words or more), then practise it aloud." },
    ],
    minWords: 20,
    checks: [
      { label: "Words starting with s + consonant", pattern: "\\bs[ptkclmnw]\\w+", min: 4 },
    ],
    rubric: ["I used words with s + consonant.", "I said them aloud with no extra e.", "I spelled them with no e."],
    model: "I'm a student at a small school in Spain. I study Spanish, science and sport. My favourite sport is swimming. After school, I stop at a store on my street and buy a snack.",
  },
};

const vowels: NodePractice = {
  nodeId: "a1p.short-vs-long-vowels",
  explain: "English has short and long vowels that change the meaning. Short /ɪ/ (ship, sit, live) is quick and relaxed. Long /iː/ (sheep, seat, leave) is longer, with a smile. Short /ʊ/ (full, look) vs long /uː/ (fool, food). Spanish has only one 'i' sound, so listen carefully and stretch the long ones.",
  pattern: ["Short /ɪ/: ship · sit · live · fill", "Long /iː/: sheep · seat · leave · feel", "Short /ʊ/: full · look · book", "Long /uː/: fool · food · school"],
  es: "En español hay una sola «i». En inglés hay dos: ship (corta) y sheep (larga). La larga se dice más tiempo y sonriendo.",
  steps: [
    [
      heard(S("03", "notice"), "Where is the sheep?", ["On the ship", "In the seat", "At home"], 0, "'The sheep is on the ship.'"),
      heard(S("03", "notice"), "When does the speaker leave?", ["At six", "At seven", "At five"], 0, "'I leave at six.'"),
      heard(S("03", "notice"), "Which word is long?", ["seat", "sit", "ship"], 0, "seat /iː/."),
      ch("Which has a long /iː/?", ["sheep", "ship", "sit"], 0, "sheep."),
      ch("Which has a short /ɪ/?", ["live", "leave", "seat"], 0, "live."),
    ],
    [
      ch("'Leave' means:", ["go away", "be at home", "small"], 0, "leave = salir / irse."),
      es(ch("'Live' (/lɪv/) means:", ["vivir", "salir", "ligero"], 0, "live = vivir."), "Live (corta) = vivir. Leave (larga) = salir."),
      ch("Which pair is short / long?", ["full / fool", "full / full", "fool / food"], 0, "full (short) · fool (long)."),
      ch("Which word has the same vowel as 'food'?", ["school", "book", "look"], 0, "/uː/."),
      ch("Which word has the same vowel as 'sit'?", ["fish", "feet", "eat"], 0, "/ɪ/."),
    ],
    [
      gap("Please sit in this", ". (asiento)", ["seat"], "seat = long."),
      gap("I", "in Medellín. (vivo)", ["live"], "live = short."),
      tr("Write the long-vowel word.", "ship → ? (an animal)", ["sheep"], "ship → sheep."),
      dict(S("03", "dict"), ["Please sit in this seat"]),
      say("ship, sheep · sit, seat · live, leave", "Short-quick, long-smile."),
    ],
    [
      fix(["Please take a", "sit", ", the doctor is coming."], 1, ["seat"], "seat = asiento."),
      fix(["I", "leave", "in a big house with my family."], 1, ["live"], "live = vivir."),
      fix(["There are ten", "ships", "on the farm."], 1, ["sheep"], "Farm animals → sheep."),
      ch("Which is wrong?", ["I live school at 2 p.m.", "I leave school at 2 p.m.", "I live in Cali."], 0, "Go away → leave."),
      ord("The bus leaves at six fifteen.", "leaves = long /iː/."),
    ],
    [
      ctx("In a cinema, someone is in your place.", "Best:", ["Excuse me, I think this is my seat.", "Excuse me, this is my sit.", "Excuse me, my ship."], 0, "seat."),
      ctx("Friend: 'Where do you live?'", "Best answer:", ["I live near the park.", "I leave near the park.", "I lives near the park."], 0, "live (short)."),
      ch("You're full after lunch:", ["I'm full! (short /ʊ/)", "I'm fool! (long /uː/)", "I'm fill!"], 0, "full = lleno."),
      ctx("Your friend asks: 'When does the train leave?'", "Best answer:", ["It leaves at nine.", "It lives at nine.", "It's leave at nine."], 0, "leaves (long)."),
      say("I live here, but I leave at six.", "Short live · long leave."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write sentences that use pairs: live / leave, sit / seat, ship / sheep, full / fool (20 words or more). Then read them aloud." },
      { universe: "words", text: "Write a short funny story with a ship and a sheep (20 words or more). Use more pairs if you can." },
    ],
    minWords: 20,
    checks: [
      { label: "Short-vowel words (live, sit, ship, full, fill)", pattern: "\\b(live|lives|sit|sits|ship|ships|full|fill|bit|hit|it|this|is|fish|big|his)\\b", min: 2 },
      { label: "Long-vowel words (leave, seat, sheep, fool, feel)", pattern: "\\b(leave|leaves|seat|seats|sheep|fool|feel|eat|see|green|tea|beach|meet|food|school)\\b", min: 2 },
    ],
    rubric: ["I used short and long vowel pairs.", "I read the pairs aloud.", "The long ones sound longer."],
    model: "I live in a small town near the sea. I leave home at six. On the bus, I sit in the same seat. At the beach there is a big ship. On the ship there is a sheep!",
  },
};

const ageHave: NodePractice = {
  nodeId: "a1p.age-with-have",
  explain: "In Spanish we say «tengo 13 años», but in English age uses be, not have: 'I am 13.' 'I'm 13 years old.' 'How old are you?' Never say 'I have 13 years.' You can say 'I'm 13' or 'I'm 13 years old', but not 'I'm 13 years' alone.",
  pattern: ["I'm 13. · I'm 13 years old.", "She's 10. · He's 72 years old.", "How old are you? How old is he?", "Not: I have 13 years · I'm 13 years"],
  es: "«Tengo 13 años» = I am 13 (no 'I have 13 years'). Pregunta: How old are you?",
  steps: [
    [
      heard(E("01", "notice"), "How old is the speaker?", ["Thirteen", "Ten", "Thirty"], 0, "'I'm thirteen.'"),
      heard(E("01", "notice"), "How old is the grandma?", ["Seventy-two", "Sixty-two", "Seventy"], 0, "'Seventy-two years old.'"),
      heard(E("01", "notice"), "Which verb does the speaker use for age?", ["be (is / am)", "have", "do"], 0, "Age → be."),
      ch("How do you say «tengo 12 años»?", ["I'm 12.", "I have 12.", "I have 12 years."], 0, "be + age."),
      ch("How do you ask about age?", ["How old are you?", "How many years do you have?", "How years are you?"], 0, "How old …?"),
    ],
    [
      es(ch("Which is correct?", ["My sister is eight.", "My sister has eight.", "My sister has eight years."], 0, "is + age."), "Edad = be: She is 8."),
      ch("Which is correct?", ["I'm 14 years old.", "I'm 14 years.", "I have 14 years old."], 0, "years old (complete)."),
      ch("How old ___ your parents?", ["are", "have", "do"], 0, "parents → are."),
      ch("Which question is correct?", ["How old is your dog?", "How many years has your dog?", "How old has your dog?"], 0, "How old is …?"),
      ch("'He's fifty' means:", ["He is 50 years old.", "He has 50 things.", "He is 15."], 0, "fifty = 50."),
    ],
    [
      gap("My brother", "sixteen years old.", ["is", "'s"], "is + age."),
      gap("How", "are you?", ["old"], "How old?"),
      tr("Correct the sentence.", "I have thirteen years.", ["I'm thirteen", "I am thirteen", "I'm thirteen years old", "I am thirteen years old", "I'm 13", "I am 13", "I'm 13 years old"], "I'm thirteen (years old)."),
      dict(E("01", "dict"), ["My grandma is seventy-two years old", "My grandma is seventy two years old", "My grandma is 72 years old"]),
      say("How old are you? I'm thirteen.", "thirTEEN: stress at the end."),
    ],
    [
      fix(["My cousin", "has", "nine years old."], 1, ["is"], "Age → is."),
      fix(["I", "have", "twelve."], 1, ["am", "'m"], "Age → am."),
      fix(["She is ten", "years", "."], 1, ["years old"], "years old (complete)."),
      ch("Which is wrong?", ["How many years do you have?", "How old are you?", "I'm fifteen."], 0, "How old are you?"),
      ord("How old is your best friend?", "How old + is + person?"),
    ],
    [
      ctx("A new friend: 'How old are you?'", "Best answer:", ["I'm thirteen. And you?", "I have thirteen.", "Thirteen years I have."], 0, "I'm thirteen."),
      ctx("Online form: 'Tell us about your family.'", "Best sentence:", ["My dad is forty and my mum is thirty-eight.", "My dad has forty and my mum has thirty-eight.", "My dad has forty years."], 0, "is + age."),
      ch("Ask about a baby:", ["How old is she?", "How many years has she?", "How old has she?"], 0, "How old is she?"),
      ctx("Your friend writes 'I have 14 years'.", "Best correction:", ["I'm 14 (years old).", "I have 14 years old.", "I has 14."], 0, "I'm 14."),
      say("My dad is forty-five and my mum is forty-two.", "FORty-FIVE."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write the ages of five people or pets in your family (20 words or more). Use is / am / are. Never use have for age." },
      { universe: "past", text: "Write about old things: how old is your house, your town, your grandparents? (20 words or more)" },
    ],
    minWords: 20,
    checks: [
      { label: "be + age", pattern: "\\b(am|is|are|'m|'s|'re)\\s+(\\d+|[a-z]+-?[a-z]*teen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|ten|eleven|twelve|one|two|three|four|five|six|seven|eight|nine)([-\\s]\\w+)?(\\s+years old)?\\b", min: 3 },
    ],
    rubric: ["I used be for every age.", "I didn't write 'have … years'.", "I wrote years old correctly."],
    model: "I'm thirteen years old. My brother is ten and my sister is sixteen. My mum is forty-one and my dad is forty-four. Our cat is three. My grandma is seventy years old.",
  },
};

const missingIt: NodePractice = {
  nodeId: "a1p.missing-subject-it",
  explain: "In Spanish we can say «Llueve», «Es tarde», «Es fácil» with no subject. In English, every sentence needs a subject. For weather, time, distance and opinions, use it: It's raining. It's late. It's far. It's easy. 'Is raining' is wrong.",
  pattern: ["Weather: It's raining. It's cold.", "Time: It's nine o'clock. It's late.", "Distance: It's far. It's near.", "Opinion: It's easy. It's great!"],
  es: "En inglés siempre hay sujeto. «Es tarde» = It's late (no 'Is late'). «Llueve» = It's raining.",
  steps: [
    [
      heard(E("02", "notice"), "What's the weather?", ["It's raining and cold", "It's sunny", "It's hot"], 0, "'It's raining. It's cold today.'"),
      heard(E("02", "notice"), "What time is it?", ["Nine o'clock", "Five o'clock", "Ten o'clock"], 0, "'It's nine o'clock.'"),
      heard(E("02", "notice"), "What does the speaker think about the song?", ["It's great", "It's boring", "It's sad"], 0, "'It's great!'"),
      ch("«Es tarde» in English:", ["It's late.", "Is late.", "Late is."], 0, "It's late."),
      ch("«Llueve» in English:", ["It's raining.", "Is raining.", "Rains."], 0, "It's raining."),
    ],
    [
      es(ch("Which is correct?", ["It's very easy.", "Is very easy.", "Very easy is."], 0, "Subject: it."), "Siempre pon it: It's easy (no 'Is easy')."),
      ch("Is it far? — Yes, ___.", ["it is", "is", "it"], 0, "Yes, it is."),
      ch("Which is correct?", ["It's ten o'clock.", "Are ten o'clock.", "Is ten o'clock."], 0, "Time → It's."),
      ch("I love this film. ___ amazing!", ["It's", "Is", "Are"], 0, "It's amazing."),
      ch("Which is wrong?", ["Is cold today.", "It's cold today.", "It is cold today."], 0, "Needs it."),
    ],
    [
      gap("", "sunny today. Let's go out!", ["It's", "It is"], "It's + weather."),
      gap("I like this game.", "really fun.", ["It's", "It is"], "It's + opinion."),
      tr("Add the subject.", "Is very far from here.", ["It's very far from here", "It is very far from here", "It's very far from here."], "It's far."),
      dict(E("02", "dict"), ["I like this song. It's great!", "I like this song it's great", "I like this song. It is great!"]),
      say("It's late, it's cold and it's raining!", "It's: one short sound."),
    ],
    [
      fix(["Look!", "Is", "snowing!"], 1, ["It's", "It is"], "Weather → It's."),
      fix(["The test was difficult, but", "was", "OK."], 1, ["it was"], "Needs it."),
      fix(["What time is it?", "Is", "half past four."], 1, ["It's", "It is"], "Time → It's."),
      ch("Which is wrong?", ["I like pizza. Is delicious!", "I like pizza. It's delicious!", "Pizza is delicious!"], 0, "It's delicious."),
      ord("Is it far from your house?", "Is + it + adjective?"),
    ],
    [
      ctx("Friend: 'What's the weather like?'", "Best answer:", ["It's cloudy, but it's not cold.", "Is cloudy.", "Cloudy is."], 0, "It's + weather."),
      ctx("Mum: 'What time is it?'", "Best answer:", ["It's seven o'clock.", "Is seven o'clock.", "Are seven."], 0, "It's + time."),
      ctx("Your friend asks about the new game.", "Best answer:", ["It's awesome! I love it.", "Is awesome! I love.", "Awesome is!"], 0, "It's + opinion · love it."),
      ctx("A tourist: 'Is the beach near here?'", "Best answer:", ["No, it's quite far. Take a bus.", "No, is far.", "No, far."], 0, "it's far."),
      say("Is it far? No, it isn't. It's very near.", "it-isn't: link."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about today (20 words or more): the weather, the time, and your opinion of something. Start at least three sentences with It's." },
      { universe: "screens", text: "Write a short review of a game, song or series (20 words or more). Use It's at least three times." },
    ],
    minWords: 20,
    checks: [
      { label: "It's / It is / Is it", pattern: "\\b(it's|it is|is it|it was|it isn't)\\b", min: 3 },
    ],
    rubric: ["I used it for weather, time and opinions.", "Every sentence has a subject.", "I didn't start with 'Is …' for a statement."],
    model: "Today it's Friday and it's a beautiful day. It's sunny and it isn't cold. It's three o'clock now. I'm watching a new series. It's very funny and it's not too long.",
  },
};

const pluralAdj: NodePractice = {
  nodeId: "a1p.plural-adjectives-and-people-is",
  explain: "In English, adjectives never change for plural: 'red shoes' (not 'reds shoes'), 'my friends are nice' (not 'nices'). Also, people is already plural: 'People are friendly' (not 'People is'). The same for police and children: 'The children are happy.'",
  pattern: ["Adjectives don't change: nice friends, big houses", "people + are: People are kind.", "children + are · police + are", "Not: reds shoes · People is"],
  es: "En inglés los adjetivos no tienen plural: red shoes (no 'reds'). Y people es plural: people are (no 'people is').",
  steps: [
    [
      heard(E("03", "notice"), "What are the friends like?", ["Funny and kind", "Tall and strong", "Quiet"], 0, "'They're funny and kind.'"),
      heard(E("03", "notice"), "What are the people in the town like?", ["Friendly", "Angry", "Busy"], 0, "'The people in my town are friendly.'"),
      heard(E("03", "notice"), "What colour are the new shoes?", ["Red", "Black", "White"], 0, "'The red shoes are new.'"),
      ch("I have two ___ cats.", ["black", "blacks", "black's"], 0, "Adjectives don't change."),
      ch("People ___ very nice here.", ["are", "is", "am"], 0, "people → are."),
    ],
    [
      es(ch("Which is correct?", ["They are intelligent students.", "They are intelligents students.", "They are students intelligents."], 0, "No plural on adjectives."), "Los adjetivos no llevan s: intelligent students."),
      ch("The children ___ in the garden.", ["are", "is", "be"], 0, "children → are."),
      ch("Which is correct?", ["My friends are funny.", "My friends are funnys.", "My friends is funny."], 0, "are + funny."),
      ch("The police ___ here.", ["are", "is", "am"], 0, "police → are."),
      ch("Choose the correct one:", ["big houses", "bigs houses", "houses bigs"], 0, "big houses."),
    ],
    [
      gap("I love these", "shoes. (green)", ["green"], "No s on adjectives."),
      gap("People in Colombia", "very friendly.", ["are"], "people → are."),
      tr("Make it plural.", "She is a nice girl.", ["They are nice girls", "They're nice girls", "They are nice girls."], "nice (no s) + girls."),
      dict(E("03", "dict"), ["The people in my town are friendly"]),
      say("My friends are kind and the people here are great.", "people ARE."),
    ],
    [
      fix(["I have two", "bigs", "dogs."], 1, ["big"], "No s on adjectives."),
      fix(["People", "is", "very happy today."], 1, ["are"], "people → are."),
      fix(["The children", "is", "playing outside."], 1, ["are"], "children → are."),
      ch("Which is wrong?", ["They're importants rules.", "They're important rules.", "The rules are important."], 0, "important rules."),
      ord("The people at my school are really nice.", "people + are."),
    ],
    [
      ctx("A tourist: 'What are Colombian people like?'", "Best answer:", ["People here are very friendly and happy.", "People here is very friendly.", "People here are very friendlys."], 0, "are + friendly."),
      ch("Describe your sneakers:", ["They're white and they're very comfortable.", "They're whites and comfortables.", "Is white."], 0, "No s on adjectives."),
      ch("Describe your classmates:", ["My classmates are funny and smart.", "My classmates are funnys and smarts.", "My classmates is funny."], 0, "are + adjectives."),
      ctx("Your friend writes 'The people is nice'.", "Best correction:", ["The people are nice.", "The peoples are nice.", "The people is nices."], 0, "people are."),
      say("These new shoes are amazing!", "new shoes: no extra s."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe the people in your town and your friends (20 words or more). Use people are and adjectives with plural nouns." },
      { universe: "arts", text: "Describe a crowd at a concert or match (20 words or more). Use people are, children are and plural nouns with adjectives." },
    ],
    minWords: 20,
    checks: [
      { label: "people / children / they + are", pattern: "\\b(people|children|they|my friends|friends)\\s+(are|'re)\\b|\\bthey're\\b", min: 2 },
      { label: "Adjective + plural noun", pattern: "\\b(nice|big|small|new|old|good|great|happy|funny|kind|friendly|beautiful|red|blue|green|white|black|tall|smart)\\s+\\w+s\\b", min: 1 },
    ],
    rubric: ["I wrote people are (not people is).", "My adjectives have no s.", "I used plural nouns."],
    model: "In my town, people are very friendly. There are big parks and old houses. My friends are funny and kind. On Sundays, the children are in the park and they're very happy.",
  },
};

const missingS: NodePractice = {
  nodeId: "a1p.missing-s-in-3rd-person",
  explain: "In the present simple, add -s to the verb with he, she, it, or one person / thing: 'My dad works.' 'She lives near me.' 'The cat sleeps.' This is the most common mistake for Spanish speakers! Don't forget it in long sentences: 'My best friend from school plays the guitar.'",
  pattern: ["he / she / it + verb-s", "My mum teaches. The dog sleeps.", "has (not haves) · goes · does · watches", "Questions and negatives: no -s (Does she play? She doesn't play.)"],
  es: "El error más común: olvidar la -s. My dad works (no 'my dad work'). Revisa siempre: ¿es he / she / it? → -s.",
  steps: [
    [
      heard(E("04", "notice"), "When does the dad work?", ["At night", "In the morning", "At weekends"], 0, "'My dad works at night.'"),
      heard(E("04", "notice"), "What does the mum teach?", ["English", "Maths", "Music"], 0, "'My mum teaches English.'"),
      heard(E("04", "notice"), "What does the cat do all day?", ["It sleeps", "It plays", "It eats"], 0, "'My cat sleeps all day.'"),
      ch("My brother ___ in Bogotá.", ["lives", "live", "living"], 0, "he → lives."),
      ch("The shop ___ at eight.", ["opens", "open", "opening"], 0, "it → opens."),
    ],
    [
      es(ch("Which is correct?", ["My mum works in an office.", "My mum work in an office.", "My mum working in an office."], 0, "she → works."), "My mum = she → works (con s)."),
      ch("She ___ two brothers.", ["has", "have", "haves"], 0, "have → has."),
      ch("He ___ to school by bike.", ["goes", "go", "gos"], 0, "go → goes."),
      ch("Which is correct?", ["My best friend from school plays basketball.", "My best friend from school play basketball.", "My best friend from school playing basketball."], 0, "The friend = he / she → plays."),
      ch("Which needs NO -s?", ["Does she like it?", "She likes it.", "He likes it."], 0, "does + verb (no -s)."),
    ],
    [
      gap("My sister", "TV every night. (watch)", ["watches"], "she → watches."),
      gap("Our teacher", "a red car. (have)", ["has"], "have → has."),
      tr("Change 'I' to 'She'.", "I study English every day.", ["She studies English every day", "She studies English every day."], "study → studies."),
      dict(E("04", "dict"), ["My best friend lives near me"]),
      say("She plays the guitar, and he watches football.", "plays, watches: say the -s!"),
    ],
    [
      fix(["My dad", "drive", "a taxi."], 1, ["drives"], "he → drives."),
      fix(["Laura", "speak", "three languages."], 1, ["speaks"], "she → speaks."),
      fix(["The bus", "leave", "at seven."], 1, ["leaves"], "it → leaves."),
      ch("Which is wrong?", ["My cat like fish.", "My cat likes fish.", "My cats like fish."], 0, "my cat = it → likes."),
      ord("My grandma makes the best arepas.", "she → makes."),
    ],
    [
      ctx("Friend: 'What does your mum do?'", "Best answer:", ["She works in a bank.", "She work in a bank.", "She working in a bank."], 0, "she → works."),
      ch("Describe your pet:", ["My dog eats a lot and sleeps on my bed.", "My dog eat a lot and sleep on my bed.", "My dog eats a lot and sleep on my bed."], 0, "eats + sleeps."),
      ch("Describe a footballer:", ["He plays for Nacional and scores a lot.", "He play for Nacional and score a lot.", "He plays for Nacional and score a lot."], 0, "-s on both verbs."),
      ctx("Your friend writes 'My brother have a bike'.", "Best correction:", ["My brother has a bike.", "My brother haves a bike.", "My brother having a bike."], 0, "has."),
      say("My mum teaches, my dad cooks and my sister sings.", "Every verb has -s."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about three people and what they do every day (20 words or more). Check every he / she verb has -s." },
      { universe: "screens", text: "Describe your favourite YouTuber's routine (20 words or more). Use he / she + verb-s." },
    ],
    minWords: 20,
    checks: [
      { label: "he / she / person + verb-s", pattern: "\\b(he|she|it|my \\w+|[A-Z][a-z]+)\\s+(always\\s+|usually\\s+|often\\s+|never\\s+)?\\w+(s|es)\\b", min: 4 },
    ],
    rubric: ["I added -s for he / she / it.", "I used has, goes, does, watches correctly.", "I checked long sentences too."],
    model: "My mum gets up at five. She makes breakfast and goes to work. My dad drives a bus. He works a lot. My little brother watches cartoons and plays with his toys. Our dog sleeps all day.",
  },
};

export const A1P_SOUNDS: NodePractice[] = [sEndings, noExtraE, vowels];
export const A1P_ERRORS: NodePractice[] = [ageHave, missingIt, pluralAdj, missingS];
