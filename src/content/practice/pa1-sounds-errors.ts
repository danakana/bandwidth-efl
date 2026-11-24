/* Pre-A1 Sounds and Errors. Five steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, es, est, fix, gap, heard, ord, say, tr } from "./helpers";

const S = (n: string, k: string) => `p/pa1s-${n}-${k}.mp3`;
const E = (n: string, k: string) => `p/pa1e-${n}-${k}.mp3`;

export const PA1_SOUNDS_ERRORS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: S("01", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "A as in day. E as in see. I as in my. O as in go. U as in you. My name is Eva: E, V, A." },
  { file: S("01", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "My name is Eva: E, V, A." },
  { file: S("02", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "Hello! I'm happy. This is my house. My horse is in the garden. He has a hat on his head. Ha ha ha!" },
  { file: S("02", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "He has a hat on his head." },
  { file: S("03", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "Thank you! This is my brother. He is three. That is my mother. They are in the bathroom. One, two, three, thirteen." },
  { file: S("03", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "This is my brother. He is three." },
  { file: E("01", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Hi, I'm Dan. I like dogs and I like cats. Today I am happy because I have a new bike." },
  { file: E("01", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Today I am happy." },
  { file: E("02", "notice"), voice: "bIHbv24MWmeRgasZH58o", script: "I have two red balls and three green apples. My cats are black. The big dogs are brown." },
  { file: E("02", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "I have two red balls." },
  { file: E("03", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "How old are you? I am ten. How old is your sister? She is six. My grandpa is seventy!" },
  { file: E("03", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "How old is your sister? She is six." },
];

const letters: NodePractice = {
  nodeId: "pa1.english-letter-names",
  explain: "Five letters are different in English. A = ei (day). E = ii (see). I = ai (my). O = ou (go). U = yuu (you). Practise them to spell names.",
  pattern: ["A = ei (day)", "E = ii (see)", "I = ai (my)", "O = ou (go)", "U = yuu (you)"],
  es: "En español A-E-I-O-U suenan 'a, e, i, o, u'. En inglés suenan 'ei, ii, ai, ou, yuu'.",
  steps: [
    [
      est(heard(S("01", "notice"), "E as in …", ["see", "day", "my"], 0, "'E as in see.'"), "Escucha. ¿La E suena como cuál palabra?"),
      est(heard(S("01", "notice"), "I as in …", ["my", "see", "go"], 0, "'I as in my.'"), "Escucha. ¿La I suena como cuál palabra?"),
      heard(S("01", "notice"), "Eva: ___", ["E, V, A", "I, V, A", "A, V, E"], 0, "'Eva: E, V, A.'"),
      est(ch("A as in …", ["day", "car", "see"], 0, "A = ei, as in day."), "¿La A suena como cuál palabra?"),
      est(ch("O as in …", ["go", "do", "on"], 0, "O = ou, as in go."), "¿La O suena como cuál palabra?"),
    ],
    [
      es(est(ch("ai = ___", ["I", "E", "A"], 0, "'ai' = I."), "Tu amigo dice ai. ¿Qué letra es?"), "El sonido 'ai' es la letra I."),
      es(est(ch("ii = ___", ["E", "I", "Y"], 0, "'ii' = E."), "Tu amigo dice ii. ¿Qué letra es?"), "El sonido 'ii' es la letra E."),
      est(ch("ei = ___", ["A", "E", "I"], 0, "'ei' = A."), "Tu amigo dice ei. ¿Qué letra es?"),
      est(ch("U sounds like …", ["you", "up", "bus"], 0, "U = yuu, like you."), "¿Qué palabra suena igual que la letra U?"),
      est(ch("I sounds like …", ["eye", "it", "in"], 0, "I = ai, like eye."), "¿Qué palabra suena igual que la letra I?"),
    ],
    [
      gap("E as in s", ".", ["ee"], "E as in see."),
      est(tr("Write the letters.", "ei – bii – sii", ["ABC", "A B C", "A, B, C"], "ei = A, bii = B, sii = C."), "Escribe las letras que suenan así."),
      est(tr("Write the name.", "jei – ou – ii", ["JOE", "Joe", "J O E", "J-O-E"], "jei = J, ou = O, ii = E."), "Escribe el nombre que suena así."),
      dict(S("01", "dict"), ["My name is Eva: E, V, A", "My name is Eva E V A", "My name is Eva. EVA"]),
      say("A, E, I, O, U", "ei, ii, ai, ou, yuu."),
    ],
    [
      es(fix(["E", "=", "e"], 2, ["ii"], "E sounds like ii."), "La E inglesa suena 'ii'."),
      fix(["I", "=", "ii"], 2, ["ai"], "I sounds like ai."),
      fix(["A", "=", "a"], 2, ["ei"], "A sounds like ei."),
      ord("How do you spell your name?", "How do you + spell + your name?"),
      ord("A as in day.", "A + as in + day."),
    ],
    [
      est(ctx("ai – vii – ei – en", "What is the name?", ["Ivan", "Evan", "Ian"], 0, "ai = I, vii = V, ei = A, en = N."), "Por teléfono alguien deletrea un nombre. ¿Cuál es?"),
      est(ctx("Eli", "Spell it:", ["ii – el – ai", "e – ele – i", "ai – el – ii"], 0, "E = ii, L = el, I = ai."), "Deletreas Eli por teléfono. ¿Cómo suena?"),
      est(ch("Which letter = ii?", ["E", "I", "A"], 0, "E sounds like ii (like Spanish i)."), "¿Qué letra suena ii? Cuidado: no es la I."),
      est(ch("you = the letter …", ["U", "O", "E"], 0, "U = yuu."), "¿Qué letra suena como you?"),
      say("My name is … : (spell it)", "Spell your own name with English letter names."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write two names from your family. Spell them with dashes (6 words or more). Then say them." },
      { universe: "words", text: "Write three English words with A, E or I. Spell them with dashes (6 words or more)." },
    ],
    minWords: 6,
    checks: [
      { label: "Spelled words (E-V-A)", pattern: "\\b[A-Za-z](-[A-Za-z]){1,}\\b", min: 2 },
    ],
    rubric: ["I spelled names letter by letter.", "I can say A, E and I the English way.", "I started names with a capital letter."],
    model: "My mum is Eva: E-V-A. My dad is Iván: I-V-A-N. My sister is Ana: A-N-A.",
  },
};

const hSound: NodePractice = {
  nodeId: "pa1.the-h-sound",
  explain: "In Spanish, h is silent (hola). In English you hear the h: hello, happy, house. It is a soft breath: hhh. Not a strong j.",
  pattern: ["hello · happy · house · horse · hat", "he · his · her · how · who", "Soft breath: hhh-ello", "Not silent, not a strong j"],
  es: "En español la h no suena. En inglés sí: es un soplo suave, más suave que la j.",
  steps: [
    [
      heard(S("02", "notice"), "Where is the horse?", ["In the garden", "In the house", "On a hat"], 0, "'My horse is in the garden.'"),
      heard(S("02", "notice"), "What is on his head?", ["A hat", "A horse", "A house"], 0, "'He has a hat on his head.'"),
      est(ch("hello: you hear the h.", ["yes, a soft hhh", "no, it is silent", "yes, a strong j"], 0, "A soft breath."), "¿Se oye la h en hello?"),
      est(ch("h…", ["happy", "apple", "orange"], 0, "h-appy."), "¿Qué palabra empieza con h?"),
      est(ch("h…", ["house", "mouse", "out"], 0, "h-ouse."), "¿Qué palabra empieza con h?"),
    ],
    [
      es(est(ch("hat - h =", ["at", "cat", "hot"], 0, "hat - h = at."), "Si quitas la h de hat, ¿qué queda?"), "Sin la h, hat suena como at: ¡otra palabra!"),
      est(ch("his - h =", ["is", "this", "hiss"], 0, "his - h = is."), "Si quitas la h de his, ¿qué queda?"),
      est(ch("heart - h =", ["art", "hurt", "hard"], 0, "heart - h = art."), "Si quitas la h de heart, ¿qué queda?"),
      es(est(ch("English h =", ["soft hhh", "strong j", "no sound"], 0, "Soft breath, not a strong j."), "¿Cómo suena la h en inglés?"), "Más suave que la j española."),
      ch("Which has an h?", ["hat", "at", "art"], 0, "h-at."),
    ],
    [
      gap("", "ello! How are you?", ["H", "h"], "Hello starts with h."),
      gap("He has a", "on his head.", ["hat"], "a hat."),
      tr("Add the h sound.", "at", ["hat"], "at → hat."),
      dict(S("02", "dict"), ["He has a hat on his head"]),
      say("Happy horses.", "Soft h on every word."),
    ],
    [
      fix(["My", "ouse", "is big."], 1, ["house"], "house has an h."),
      fix(["I'm", "appy", "today."], 1, ["happy"], "happy has an h."),
      fix(["Ello!", "How are you?"], 0, ["Hello!", "Hello"], "Hello starts with h."),
      ord("He has a happy horse.", "He + has + a happy horse."),
      ord("How are you?", "How + are + you?"),
    ],
    [
      est(ctx("On my head: a ___.", "Best word:", ["hat", "at", "art"], 0, "Add the h: hat."), "¿Qué llevas en la cabeza?"),
      est(ctx("The boy: ___ name is Tom.", "Best word:", ["His", "Is", "He"], 0, "his has an h."), "Hablas del nombre de un niño."),
      ch("hat or at? A ___ on my head.", ["hat", "at", "hot"], 0, "hat = sombrero."),
      ch("Which has an h?", ["his", "is", "it"], 0, "h-is."),
      say("Hello! How are you? I'm happy!", "Breathe out on every h."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a funny sentence with h words (6 words or more). Then say it with a soft h." },
      { universe: "arts", text: "Write about a funny house (6 words or more). Use house, hat, horse, happy." },
    ],
    minWords: 6,
    checks: [
      { label: "Words that start with h", pattern: "\\bh\\w+", min: 3 },
    ],
    rubric: ["I used three h words.", "I said them with a soft breath.", "I didn't use a strong j sound."],
    model: "Harry the happy horse has a huge hat in his house.",
  },
};

const thSound: NodePractice = {
  nodeId: "pa1.the-th-sound",
  explain: "To say th, put your tongue between your teeth and blow: three, thank you, this, mother. Not t, d or s: three, not tree.",
  pattern: ["Tongue between your teeth", "three · thank you · thirteen", "this · that · mother · brother", "three, not tree · this, not dis"],
  es: "Saca un poquito la lengua entre los dientes. Three no es 'tree' (árbol).",
  steps: [
    [
      heard(S("03", "notice"), "How old is the brother?", ["Three", "Thirteen", "Ten"], 0, "'He is three.'"),
      heard(S("03", "notice"), "Where are they?", ["In the bathroom", "In the bedroom", "In the garden"], 0, "'They are in the bathroom.'"),
      est(ch("th: tongue …", ["between teeth", "behind teeth", "back"], 0, "Between your teeth."), "Para decir th, ¿dónde va la lengua?"),
      est(ch("th…", ["thank", "tank", "sank"], 0, "th-ank."), "¿Qué palabra tiene th?"),
      est(ch("…th…", ["mother", "mutter", "mud"], 0, "mo-th-er."), "¿Qué palabra tiene th?"),
    ],
    [
      es(est(ch("3 = ___", ["three", "tree", "free"], 0, "three = 3, tree = árbol."), "¿Cómo se escribe el número 3?"), "three = 3, tree = árbol."),
      ch("árbol = ___", ["tree", "three", "free"], 0, "tree = árbol."),
      est(ch("this or dis?", ["this", "dis", "tis"], 0, "this has th."), "¿Cuál es la palabra correcta?"),
      est(ch("13 = ___", ["thirteen", "tirteen", "sirteen"], 0, "13 = thirteen."), "¿Cómo se escribe el número 13?"),
      est(ch("Gracias = ___", ["thank you", "tank you", "sank you"], 0, "Thank you, with th."), "¿Cómo se dice gracias?"),
    ],
    [
      gap("", "is my brother.", ["This"], "This has th."),
      gap("Thank", "!", ["you"], "Thank you!"),
      tr("Write the number in words.", "13", ["thirteen"], "13 = thirteen."),
      dict(S("03", "dict"), ["This is my brother. He is three", "This is my brother he is three", "This is my brother. He is 3"]),
      say("Thank you. Three, thirteen.", "Tongue out on every th."),
    ],
    [
      es(fix(["I have", "tree", "cats."], 1, ["three"], "3 = three."), "three, no tree."),
      fix(["Dis", "is my brother."], 0, ["This"], "this, not dis."),
      fix(["Tank you", "very much!"], 0, ["Thank you"], "thank, not tank."),
      ord("This is my mother.", "This + is + my mother."),
      ord("Thank you very much.", "Thank you + very much."),
    ],
    [
      est(ctx("3 brothers", "Best sentence:", ["I have three brothers.", "I have tree brothers.", "I have free brothers."], 0, "three = 3."), "Tienes 3 hermanos. Elige la mejor frase."),
      est(ctx("A present for you!", "Best sentence:", ["Thank you!", "Tank you!", "Sank you!"], 0, "Thank you, with th."), "Un amigo te da un regalo. Elige la mejor frase."),
      est(ch("This is my ___.", ["brother", "broder", "brozer"], 0, "bro-th-er."), "Completa: Este es mi hermano."),
      est(ch("Which word has NO th?", ["tree", "three", "this"], 0, "tree has t + r, no th."), "¿Qué palabra NO tiene th?"),
      say("This is my brother.", "Slow, then faster."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about your family with th words: this, mother, father, brother (6 words or more)." },
      { universe: "science", text: "Write numbers with th: three, thirteen, thirty (6 words or more)." },
    ],
    minWords: 6,
    checks: [
      { label: "th words", pattern: "\\b\\w*th\\w*\\b", min: 3 },
    ],
    rubric: ["I used three th words.", "I put my tongue between my teeth.", "I said three, not tree."],
    model: "This is my mother. That is my father. My brother is three. Thank you!",
  },
};

/* ---------------- Errors ---------------- */

const capitalI: NodePractice = {
  nodeId: "pa1.capital-i",
  explain: "In English, I (yo) is always a capital: Today I am happy. Never write i. Names, days and countries also start with a capital: Ana, Monday, Colombia.",
  pattern: ["I am · I like · I have", "Today I am happy. (not 'today i am happy')", "Ana · Monday · Colombia · English", "Start every sentence with a capital."],
  es: "En inglés 'I' (yo) siempre va en mayúscula. También los días, meses, países e idiomas: Monday, English.",
  steps: [
    [
      heard(E("01", "notice"), "What does Dan like?", ["Dogs and cats", "Bikes and dogs", "Cats only"], 0, "'I like dogs and I like cats.'"),
      heard(E("01", "notice"), "What does Dan have?", ["A new bike", "A new dog", "A new cat"], 0, "'I have a new bike.'"),
      ch("Which is correct?", ["I am ten.", "i am ten.", "I Am ten."], 0, "I is always capital."),
      ch("Which is correct?", ["Today I am happy.", "Today i am happy.", "today I am happy."], 0, "Capital T and capital I."),
      ch("Which is correct?", ["I speak English.", "I speak english.", "i speak English."], 0, "English has a capital E."),
    ],
    [
      es(est(ch("Always a capital:", ["I", "you", "we"], 0, "I is always capital."), "¿Qué palabra va SIEMPRE en mayúscula?"), "I siempre en mayúscula."),
      ch("Which is correct?", ["on Monday", "on monday", "On monday"], 0, "Days have capitals."),
      es(ch("Which is correct?", ["I live in Colombia.", "I live in colombia.", "i live in Colombia."], 0, "Countries have capitals."), "Los países van en mayúscula."),
      est(ch("Needs a capital:", ["ana", "dog", "book"], 0, "Names: Ana."), "¿Qué palabra necesita mayúscula?"),
      ch("Which is correct?", ["My friend and I", "My friend and i", "my Friend and I"], 0, "I is capital."),
    ],
    [
      ch("Choose the correct capitals.", ["I like pizza.", "i like pizza.", "I Like Pizza."], 0, "Only I and the first letter."),
      ch("Choose the correct capitals.", ["Today I am happy.", "today i am happy.", "Today i Am happy."], 0, "Today and I."),
      ch("Choose the correct capitals.", ["My name is Luis.", "my name is luis.", "My Name is luis."], 0, "My and Luis."),
      dict(E("01", "dict"), ["Today I am happy"]),
      say("I like dogs and I like cats.", "Say it, then write it with capital I."),
    ],
    [
      est(ch("Today i have a test.", ["i", "have", "test"], 0, "I is always capital."), "¿Qué palabra necesita mayúscula?"),
      est(ch("I speak spanish.", ["spanish", "speak", "I"], 0, "Languages have capitals: Spanish."), "¿Qué palabra necesita mayúscula?"),
      est(ch("My birthday is in june.", ["june", "birthday", "is"], 0, "Months have capitals: June."), "¿Qué palabra necesita mayúscula?"),
      ord("On Saturday I play football.", "Capital S and capital I."),
      ord("My friend and I like music.", "My friend and I + like music."),
    ],
    [
      est(ch("Which is correct?", ["Hi Pablo! I am home.", "hi pablo! i am home.", "Hi pablo! i am home."], 0, "Capitals for Hi, Pablo and I."), "Escribes un mensaje a Pablo. ¿Cuál tiene bien las mayúsculas?"),
      ch("Which is correct?", ["I like English.", "i like english.", "I like english."], 0, "I and English."),
      ch("Which is correct?", ["I go to Cali.", "i go to cali.", "I go to cali."], 0, "I and Cali."),
      ch("Which is correct?", ["Can I go?", "Can i go?", "can I go?"], 0, "Can I go?"),
      say("Today I am happy.", "Then write it with every capital."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write three sentences about you (6 words or more). Write I with a capital." },
      { universe: "screens", text: "Write a game profile (6 words or more): name, country, language. Check every capital." },
    ],
    minWords: 6,
    checks: [
      { label: "The word I (always a capital)", pattern: "\\bI\\b", min: 2 },
    ],
    rubric: ["I wrote I with a capital every time.", "Every sentence starts with a capital.", "Names, days and countries have capitals."],
    model: "My name is Luis. I live in Colombia. On Saturday I play football. I speak Spanish and English.",
  },
};

const noPluralColours: NodePractice = {
  nodeId: "pa1.colours-don-t-change",
  explain: "In Spanish: rojos, rojas. In English, colours and big or small never change: one red ball, two red balls. Big dogs, not bigs dogs. Only the thing gets -s.",
  pattern: ["one red ball → two red balls", "a big dog → three big dogs", "Not: reds balls · bigs dogs", "Only the thing gets -s."],
  es: "En inglés los adjetivos no tienen plural: red balls (no 'reds balls').",
  steps: [
    [
      heard(E("02", "notice"), "What colour are the balls?", ["Red", "Green", "Black"], 0, "'two red balls'"),
      heard(E("02", "notice"), "What colour are the apples?", ["Green", "Red", "Brown"], 0, "'three green apples'"),
      heard(E("02", "notice"), "What colour are the big dogs?", ["Brown", "Black", "Red"], 0, "'The big dogs are brown.'"),
      es(ch("Which is correct?", ["two red balls", "two reds balls", "two red ball"], 0, "red never changes."), "Rojo no cambia: red balls."),
      ch("Which is correct?", ["three big dogs", "three bigs dogs", "three big dog"], 0, "big never changes."),
    ],
    [
      est(ch("Which is correct?", ["red balls", "reds balls", "reds ball"], 0, "Only the thing gets -s."), "¿Cuál es correcta? Solo la cosa lleva -s."),
      ch("Which is correct?", ["My cats are black.", "My cats are blacks.", "My cat are blacks."], 0, "black never changes."),
      es(ch("Which is correct?", ["small houses", "smalls houses", "small house"], 0, "small never changes."), "small no cambia."),
      ch("Which is correct?", ["blue eyes", "blues eyes", "eyes blues"], 0, "blue eyes."),
      ch("Which is correct?", ["The flowers are yellow.", "The flowers are yellows.", "The flower are yellows."], 0, "yellow never changes."),
    ],
    [
      tr("Make it two.", "a green apple", ["two green apples", "green apples"], "green stays the same."),
      tr("Make it two.", "a big house", ["two big houses", "big houses"], "big stays the same."),
      gap("I have two", "pens.", ["blue", "red", "black", "green"], "Any colour, with no -s."),
      dict(E("02", "dict"), ["I have two red balls", "I have 2 red balls"]),
      say("two red balls", "Hear the -s only on balls."),
    ],
    [
      fix(["I have two", "blacks", "cats."], 1, ["black"], "black (no -s)."),
      fix(["The", "bigs", "dogs are brown."], 1, ["big"], "big (no -s)."),
      fix(["My shoes are", "whites."], 1, ["white."], "white (no -s)."),
      ord("I have three small dogs.", "three + small + dogs."),
      ord("The apples are green.", "The apples + are + green."),
    ],
    [
      est(ctx("Your shoes are red.", "Best sentence:", ["My shoes are red.", "My shoe are reds.", "My shoes are reds."], 0, "red never changes."), "Tus zapatos son rojos. Elige la mejor frase."),
      est(ctx("3 big brothers", "Best sentence:", ["I have three big brothers.", "I have three bigs brothers.", "I have three big brother."], 0, "big + brothers."), "Tienes 3 hermanos grandes. Elige la mejor frase."),
      ch("Which is correct?", ["pink flowers", "pinks flowers", "pink flower"], 0, "Colours don't change; flowers gets -s."),
      ch("Which is correct?", ["two black cats", "two blacks cats", "two black cat"], 0, "Only cats gets -s."),
      say("I have two black cats.", "Colour, then thing."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about your things with colours (6 words or more): two blue pens, three red books …" },
      { universe: "arts", text: "Write about a picture (6 words or more). Use colours and two or three things." },
    ],
    minWords: 6,
    checks: [
      { label: "Number + colour + plural thing", pattern: "\\b(two|three|four|five|six|seven|eight|nine|ten|\\d+)\\s+(big|small|red|blue|green|yellow|black|white|brown|pink|orange|purple|grey|gray)\\s+\\w+s\\b", min: 1 },
    ],
    rubric: ["I didn't add -s to colours.", "I added -s to the things.", "I put the colour before the thing."],
    model: "I have two blue pens, three red books and four small erasers.",
  },
};

const ageBe: NodePractice = {
  nodeId: "pa1.age-with-be",
  explain: "In Spanish: tengo diez años. In English: I am ten (I'm ten). Not I have ten. Ask: How old are you? How old is your sister? She is six.",
  pattern: ["How old are you? I'm ten.", "How old is he? He's twelve.", "I'm ten years old. (OK)", "Not: I have ten (years)."],
  es: "Tengo 10 años = I am 10 (no 'I have 10'). En inglés la edad va con be.",
  steps: [
    [
      heard(E("03", "notice"), "How old is the speaker?", ["Ten", "Six", "Seventy"], 0, "'I am ten.'"),
      heard(E("03", "notice"), "How old is the sister?", ["Six", "Ten", "Sixteen"], 0, "'She is six.'"),
      heard(E("03", "notice"), "Who is seventy?", ["The grandpa", "The sister", "The speaker"], 0, "'My grandpa is seventy!'"),
      es(ch("Which is correct?", ["I am ten.", "I have ten.", "I have ten years."], 0, "Age: be."), "Edad con be: I am ten."),
      ch("How ___ are you?", ["old", "many", "age"], 0, "How old are you?"),
    ],
    [
      ch("Which is correct?", ["She is six.", "She has six.", "She has six years."], 0, "she is + age."),
      ch("Which question is correct?", ["How old is he?", "How many years has he?", "How old has he?"], 0, "How old is …?"),
      ch("Which is correct?", ["I'm twelve.", "I have twelve.", "I twelve."], 0, "I'm twelve."),
      es(ch("¿Cuántos años tienes?", ["How old are you?", "How many years you have?", "How years are you?"], 0, "How old are you?"), "¿Cuántos años tienes? = How old are you?"),
      ch("My grandma ___ eighty.", ["is", "has", "have"], 0, "is + age."),
    ],
    [
      gap("I", "eleven.", ["am", "'m"], "I am eleven."),
      gap("How", "are you?", ["old"], "How old are you?"),
      tr("Say it in English.", "Tengo doce años.", ["I am twelve", "I'm twelve", "I am twelve years old", "I'm twelve years old", "I am 12", "I'm 12"], "I'm twelve."),
      dict(E("03", "dict"), ["How old is your sister? She is six", "How old is your sister? She's six", "How old is your sister she is 6"]),
      say("How old are you? I'm ten.", "Ask and answer."),
    ],
    [
      es(fix(["I", "have", "nine."], 1, ["am", "'m"], "I am nine."), "Edad: I am, no I have."),
      fix(["My brother", "has", "fifteen years."], 1, ["is fifteen years old.", "is fifteen.", "is fifteen"], "He is fifteen (years old)."),
      fix(["How", "many years", "are you?"], 1, ["old"], "How old are you?"),
      ord("How old is your dad?", "How old + is + your dad?"),
      ord("My sister is six years old.", "My sister + is + six years old."),
    ],
    [
      est(ctx("'How old are you?' (11)", "Best answer:", ["I'm eleven.", "I have eleven.", "I have eleven years."], 0, "I'm eleven."), "Un amigo nuevo te pregunta la edad. Tienes 11."),
      est(ctx("Your friend's age?", "Best question:", ["How old are you?", "How many years you have?", "How old do you have?"], 0, "How old are you?"), "Quieres saber la edad de tu amigo."),
      ch("Which is correct?", ["My cat is two.", "My cat has two.", "My cat have two."], 0, "is + age."),
      ch("Which is correct?", ["We are thirteen.", "We have thirteen.", "We has thirteen."], 0, "we are + age."),
      say("I'm twelve and my brother is eight.", "Your own family's ages."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write the ages of people in your family (6 words or more). Use am and is." },
      { universe: "science", text: "Write the ages of two pets or animals (6 words or more)." },
    ],
    minWords: 6,
    checks: [
      { label: "Age with be (I'm 10, she is 6 …)", pattern: "\\b(am|is|are|'m|'s|'re)\\s+(\\d+|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)\\b", min: 2 },
    ],
    rubric: ["I used be for age (I am ten).", "I didn't write I have ten.", "I wrote numbers correctly."],
    model: "I am eleven. My sister is six. My mum is thirty-five. My grandpa is seventy.",
  },
};

export const PA1_SOUNDS: NodePractice[] = [letters, hSound, thSound];
export const PA1_ERRORS: NodePractice[] = [capitalI, noPluralColours, ageBe];
