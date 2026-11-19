/* Pre-A1 Sounds and Errors. Five steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, es, fix, gap, heard, ord, say, tr } from "./helpers";

const S = (n: string, k: string) => `p/pa1s-${n}-${k}.mp3`;
const E = (n: string, k: string) => `p/pa1e-${n}-${k}.mp3`;

export const PA1_SOUNDS_ERRORS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: S("01", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "A, E, I, O, U. A as in day. E as in see. I as in my. O as in go. U as in you. My name is Eva: E, V, A." },
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
  explain: "Five letters are tricky for Spanish speakers. A sounds like 'ei' (day). E sounds like 'ii' (see). I sounds like 'ai' (my). O sounds like 'ou' (go). U sounds like 'yuu' (you). Practise them so you can spell names on the phone or in class.",
  pattern: ["A = ei (day)", "E = ii (see)", "I = ai (my)", "O = ou (go)", "U = yuu (you)"],
  es: "En español A-E-I-O-U suenan 'a, e, i, o, u'. En inglés suenan 'ei, ii, ai, ou, yuu'.",
  steps: [
    [
      heard(S("01", "notice"), "The letter E sounds like the word …", ["see", "day", "my"], 0, "'E as in see.'"),
      heard(S("01", "notice"), "The letter I sounds like the word …", ["my", "see", "go"], 0, "'I as in my.'"),
      heard(S("01", "notice"), "How does the speaker spell her name?", ["E, V, A", "I, V, A", "A, V, E"], 0, "'Eva: E, V, A.'"),
      ch("The letter A sounds like the word …", ["day", "car", "see"], 0, "A = ei, as in day."),
      ch("The letter O sounds like the word …", ["go", "do", "on"], 0, "O = ou, as in go."),
    ],
    [
      es(ch("Your friend says 'ai'. Which letter is it?", ["I", "E", "A"], 0, "'ai' = I."), "El sonido 'ai' es la letra I."),
      es(ch("Your friend says 'ii'. Which letter is it?", ["E", "I", "Y"], 0, "'ii' = E."), "El sonido 'ii' es la letra E."),
      ch("Your friend says 'ei'. Which letter is it?", ["A", "E", "I"], 0, "'ei' = A."),
      ch("Which word has the same sound as the letter U?", ["you", "up", "bus"], 0, "U = yuu, like you."),
      ch("Which word has the same sound as the letter I?", ["eye", "it", "in"], 0, "I = ai, like eye."),
    ],
    [
      gap("The letter E sounds like the word s", ".", ["ee"], "E as in see."),
      tr("Write the letters you hear: 'ei – bii – sii'.", "ei – bii – sii", ["ABC", "A B C", "A, B, C"], "ei = A, bii = B, sii = C."),
      tr("Write the name: 'jei – ou – ii'.", "jei – ou – ii", ["JOE", "Joe", "J O E", "J-O-E"], "jei = J, ou = O, ii = E."),
      dict(S("01", "dict"), ["My name is Eva: E, V, A", "My name is Eva E V A", "My name is Eva. EVA"]),
      say("A, E, I, O, U", "ei, ii, ai, ou, yuu."),
    ],
    [
      es(fix(["The letter E", "sounds like", "'e' in Spanish."], 2, ["'ii' as in see.", "'ii'", "ii"], "E sounds like 'ii'."), "La E inglesa suena 'ii'."),
      fix(["The letter I", "sounds like", "'ii'."], 2, ["'ai'.", "'ai'", "ai"], "I sounds like 'ai'."),
      fix(["The letter A", "sounds like", "'a' in casa."], 2, ["'ei' as in day.", "'ei'", "ei"], "A sounds like 'ei'."),
      ord("How do you spell your name?", "How do you + spell + your name?"),
      ord("A as in day.", "A + as in + day."),
    ],
    [
      ctx("On the phone, someone spells: 'ai – vii – ei – en'.", "What is the name?", ["Ivan", "Evan", "Ian"], 0, "ai = I, vii = V, ei = A, en = N."),
      ctx("You spell 'Eli' on the phone.", "Best way to say it:", ["ii – el – ai", "e – ele – i", "ai – el – ii"], 0, "E = ii, L = el, I = ai."),
      ch("Which two letters are easy to mix up for Spanish speakers?", ["E and I", "B and T", "M and S"], 0, "E (ii) sounds like Spanish i."),
      ch("Which letter sounds like the word 'you'?", ["U", "O", "E"], 0, "U = yuu."),
      say("My name is … : (spell it)", "Spell your own name with English letter names."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write three names from your family and spell them with dashes (8 words or more). Then say them aloud." },
      { universe: "words", text: "Write five English words with A, E or I and spell them with dashes (8 words or more)." },
    ],
    minWords: 8,
    checks: [
      { label: "Spelled words (E-V-A)", pattern: "\\b[A-Za-z](-[A-Za-z]){1,}\\b", min: 2 },
    ],
    rubric: ["I spelled names letter by letter.", "I can say A, E and I the English way.", "I started names with a capital letter."],
    model: "My mum is Eva: E-V-A. My dad is Iván: I-V-A-N. My sister is Ana: A-N-A.",
  },
};

const hSound: NodePractice = {
  nodeId: "pa1.the-h-sound",
  explain: "In Spanish, h is silent (hola, hora). In English you hear the h: hello, happy, house, he. It's a soft breath, like when you breathe on a cold window: 'hhh'. Don't say it like a strong Spanish j.",
  pattern: ["hello · happy · house · horse · hat", "he · his · her · how · who", "Soft breath: hhh-ello", "Not silent, not a strong j"],
  es: "En español la h no suena. En inglés sí: es un soplo suave, más suave que la j.",
  steps: [
    [
      heard(S("02", "notice"), "Where is the horse?", ["In the garden", "In the house", "On a hat"], 0, "'My horse is in the garden.'"),
      heard(S("02", "notice"), "What is on his head?", ["A hat", "A horse", "A house"], 0, "'He has a hat on his head.'"),
      ch("In English, the h in 'hello' is …", ["a soft breath", "silent", "a strong j"], 0, "A soft breath."),
      ch("Which word starts with the h sound?", ["happy", "apple", "orange"], 0, "h-appy."),
      ch("Which word starts with the h sound?", ["house", "mouse", "out"], 0, "h-ouse."),
    ],
    [
      es(ch("Without the h, 'hat' sounds like …", ["at", "cat", "hot"], 0, "hat - h = at."), "Sin la h, hat suena como at: ¡otra palabra!"),
      ch("Without the h, 'his' sounds like …", ["is", "this", "hiss"], 0, "his - h = is."),
      ch("Without the h, 'heart' sounds like …", ["art", "hurt", "hard"], 0, "heart - h = art."),
      es(ch("The English h is …", ["softer than the Spanish j", "the same as the Spanish j", "always silent"], 0, "Soft breath, not a strong j."), "Más suave que la j española."),
      ch("Which word has a silent h, like Spanish? (careful!)", ["hour", "house", "happy"], 0, "hour: the h is silent. Most English h's are not."),
    ],
    [
      gap("", "ello! How are you?", ["H", "h"], "Hello starts with h."),
      gap("He has a", "on his head.", ["hat"], "a hat."),
      tr("Add the h sound.", "at", ["hat"], "at → hat."),
      dict(S("02", "dict"), ["He has a hat on his head"]),
      say("Happy horses have hats.", "Soft h on every word."),
    ],
    [
      fix(["My", "ouse", "is big."], 1, ["house"], "house has an h."),
      fix(["I'm", "appy", "today."], 1, ["happy"], "happy has an h."),
      fix(["Ello!", "How are you?"], 0, ["Hello!", "Hello"], "Hello starts with h."),
      ord("He has a happy horse.", "He + has + a happy horse."),
      ord("How are you?", "How + are + you?"),
    ],
    [
      ctx("You say 'I like your at' but you mean the thing on your head.", "Best correction:", ["I like your hat.", "I like your art.", "I like your heart."], 0, "Add the h: hat."),
      ctx("Your friend says 'Is name is Tom.' She means the boy's name.", "Best correction:", ["His name is Tom.", "Is name is Tom.", "He name is Tom."], 0, "his has an h."),
      ch("Which pair sounds different only because of h?", ["at / hat", "cat / hat", "hat / hot"], 0, "at and hat."),
      ch("Which is the best h sound?", ["a soft breath: hhh", "a strong throat sound: jjj", "no sound at all"], 0, "Soft breath."),
      say("Hello! How are you? I'm happy!", "Breathe out on every h."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a silly sentence with five h words (8 words or more). Then say it aloud with a soft h." },
      { universe: "arts", text: "Write about a funny house in a picture (8 words or more). Use h words: house, hat, horse, happy." },
    ],
    minWords: 8,
    checks: [
      { label: "Words that start with h", pattern: "\\bh\\w+", min: 4 },
    ],
    rubric: ["I used four h words.", "I said them with a soft breath.", "I didn't use a strong j sound."],
    model: "Harry the happy horse has a huge hat in his house.",
  },
};

const thSound: NodePractice = {
  nodeId: "pa1.the-th-sound",
  explain: "To say th, put your tongue between your teeth and blow. Two kinds: a soft one with no voice (three, thank you, thirteen) and one with voice (this, that, the, mother, brother). Don't change it to t, d or s.",
  pattern: ["Tongue between your teeth", "No voice: three · thank you · thirteen · bathroom", "With voice: this · that · the · mother · brother", "three, not tree · this, not dis"],
  es: "Saca un poquito la lengua entre los dientes. Three no es 'tree' (árbol).",
  steps: [
    [
      heard(S("03", "notice"), "How old is the brother?", ["Three", "Thirteen", "Ten"], 0, "'He is three.'"),
      heard(S("03", "notice"), "Where are they?", ["In the bathroom", "In the bedroom", "In the garden"], 0, "'They are in the bathroom.'"),
      ch("To say th, your tongue goes …", ["between your teeth", "behind your teeth", "at the back of your mouth"], 0, "Between your teeth."),
      ch("Which word has th?", ["thank", "tank", "sank"], 0, "th-ank."),
      ch("Which word has th?", ["mother", "mutter", "mud"], 0, "mo-th-er."),
    ],
    [
      es(ch("'three' and 'tree' are …", ["different words", "the same word", "both numbers"], 0, "three = 3, tree = árbol."), "three = 3, tree = árbol."),
      ch("Which says the number 3?", ["three", "tree", "free"], 0, "3 = three."),
      ch("Which word has th with voice (your throat buzzes)?", ["this", "thank", "three"], 0, "this has voice."),
      ch("Which word has th without voice?", ["thirteen", "the", "that"], 0, "thirteen: no voice."),
      ch("'Thank you' should NOT sound like …", ["tank you", "thank you", "th-ank you"], 0, "Not tank."),
    ],
    [
      gap("", "is my brother.", ["This"], "This has th."),
      gap("Thank", "!", ["you"], "Thank you!"),
      tr("Write the number in words.", "13", ["thirteen"], "13 = thirteen."),
      dict(S("03", "dict"), ["This is my brother. He is three", "This is my brother he is three", "This is my brother. He is 3"]),
      say("Thank you, mother. Three, thirteen, thirty.", "Tongue out on every th."),
    ],
    [
      es(fix(["I have", "tree", "cats."], 1, ["three"], "3 = three."), "three, no tree."),
      fix(["Dis", "is my brother."], 0, ["This"], "this, not dis."),
      fix(["Tank you", "very much!"], 0, ["Thank you"], "thank, not tank."),
      ord("This is my mother.", "This + is + my mother."),
      ord("Thank you very much.", "Thank you + very much."),
    ],
    [
      ctx("You want to say you have 3 brothers.", "Best sentence:", ["I have three brothers.", "I have tree brothers.", "I have free brothers."], 0, "three = 3."),
      ctx("A friend gives you a present.", "Best sentence:", ["Thank you!", "Tank you!", "Sank you!"], 0, "Thank you, with th."),
      ch("Which sound is correct for 'the'?", ["tongue between teeth, with voice", "d, like Spanish 'de'", "s, like 'se'"], 0, "th with voice."),
      ch("Which word does NOT have th?", ["tree", "three", "this"], 0, "tree has t + r, no th."),
      say("This is the thirteenth birthday of my brother.", "Slow, then faster."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about your family with th words: this, that, mother, father, brother, three (8 words or more)." },
      { universe: "science", text: "Write numbers with th: three, thirteen, thirty, third (8 words or more)." },
    ],
    minWords: 8,
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
  explain: "When you write about yourself in English, 'I' is always a capital letter, even in the middle of a sentence: 'Today I am happy.' Never write 'i'. Names, days and countries also start with a capital: Ana, Monday, Colombia.",
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
      es(ch("Which word ALWAYS has a capital?", ["I", "you", "we"], 0, "I is always capital."), "I siempre en mayúscula."),
      ch("Which is correct?", ["on Monday", "on monday", "On monday"], 0, "Days have capitals."),
      es(ch("Which is correct?", ["I live in Colombia.", "I live in colombia.", "i live in Colombia."], 0, "Countries have capitals."), "Los países van en mayúscula."),
      ch("Which needs a capital?", ["ana", "dog", "book"], 0, "Names: Ana."),
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
      ch("'Today i have a test.' Which word needs a capital?", ["i", "have", "test"], 0, "I is always capital."),
      ch("'I speak spanish and English.' Which word needs a capital?", ["spanish", "speak", "and"], 0, "Languages have capitals: Spanish."),
      ch("'My birthday is in june.' Which word needs a capital?", ["june", "birthday", "is"], 0, "Months have capitals: June."),
      ord("On Saturday I play football.", "Capital S and capital I."),
      ord("My friend and I like music.", "My friend and I + like music."),
    ],
    [
      ctx("You write a message to your friend.", "Best message:", ["Hi Pablo! I am at home.", "hi pablo! i am at home.", "Hi pablo! i am at home."], 0, "Capitals for Hi, Pablo and I."),
      ctx("You write about your English class.", "Best sentence:", ["I like English on Tuesdays.", "i like english on tuesdays.", "I like english on Tuesdays."], 0, "I, English, Tuesdays."),
      ch("How many capitals in 'today i go to bogotá with ana'?", ["4: Today, I, Bogotá, Ana", "1: Today", "2: Today, Bogotá"], 0, "Today, I, Bogotá, Ana."),
      ch("Which is correct?", ["Can I go?", "Can i go?", "can I go?"], 0, "Can I go?"),
      say("Today I am happy because I have a new friend.", "Then write it with every capital."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write four sentences about you (8 words or more). Start each one with a capital and write I with a capital." },
      { universe: "screens", text: "Write a short game profile (8 words or more): name, country, language. Check every capital." },
    ],
    minWords: 8,
    checks: [
      { label: "The word I (always a capital)", pattern: "\\bI\\b", min: 2 },
    ],
    rubric: ["I wrote I with a capital every time.", "Every sentence starts with a capital.", "Names, days and countries have capitals."],
    model: "My name is Luis. I live in Colombia. On Saturday I play football. I speak Spanish and English.",
  },
};

const noPluralColours: NodePractice = {
  nodeId: "pa1.colours-don-t-change",
  explain: "In Spanish we say 'rojos' and 'rojas'. In English, colour and size words never change: one red ball, two red balls. Big dogs, not 'bigs dogs'. Only the thing gets -s.",
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
      ch("Which word gets -s?", ["the thing (balls)", "the colour (reds)", "both (reds balls)"], 0, "Only the thing gets -s."),
      ch("Which is correct?", ["My cats are black.", "My cats are blacks.", "My cat are blacks."], 0, "black never changes."),
      es(ch("Which is correct?", ["small houses", "smalls houses", "small house"], 0, "small never changes."), "small no cambia."),
      ch("Which is correct?", ["blue eyes", "blues eyes", "eyes blues"], 0, "blue eyes."),
      ch("Which is correct?", ["The flowers are yellow.", "The flowers are yellows.", "The flower are yellows."], 0, "yellow never changes."),
    ],
    [
      tr("Make it plural.", "a green apple", ["two green apples", "green apples"], "green stays the same."),
      tr("Make it plural.", "a big house", ["two big houses", "big houses"], "big stays the same."),
      gap("I have two", "pens.", ["blue", "red", "black", "green"], "Any colour, with no -s."),
      dict(E("02", "dict"), ["I have two red balls", "I have 2 red balls"]),
      say("two red balls and three green apples", "Hear the -s only on balls and apples."),
    ],
    [
      fix(["I have two", "blacks", "cats."], 1, ["black"], "black (no -s)."),
      fix(["The", "bigs", "dogs are brown."], 1, ["big"], "big (no -s)."),
      fix(["My shoes are", "whites."], 1, ["white."], "white (no -s)."),
      ord("I have three small dogs.", "three + small + dogs."),
      ord("The apples are green.", "The apples + are + green."),
    ],
    [
      ctx("You describe your two new shoes. They are red.", "Best sentence:", ["My new shoes are red.", "My news shoes are reds.", "My new shoes are reds."], 0, "new and red never change."),
      ctx("Your friend has three big brothers.", "Best sentence:", ["She has three big brothers.", "She has three bigs brothers.", "She has three big brother."], 0, "big + brothers."),
      ch("Which is correct?", ["pink and purple flowers", "pinks and purples flowers", "pink and purple flower"], 0, "Colours don't change; flowers gets -s."),
      ch("Which is correct?", ["two small black cats", "two smalls blacks cats", "two small black cat"], 0, "Only cats gets -s."),
      say("I have two small black cats.", "Size, colour, thing."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe some of your things with colours (8 words or more): two blue pens, three red books …" },
      { universe: "arts", text: "Describe a picture with many things (8 words or more). Use colours and plurals." },
    ],
    minWords: 8,
    checks: [
      { label: "Number + colour + plural thing", pattern: "\\b(two|three|four|five|six|seven|eight|nine|ten|\\d+)\\s+(big|small|red|blue|green|yellow|black|white|brown|pink|orange|purple|grey|gray)\\s+\\w+s\\b", min: 1 },
    ],
    rubric: ["I didn't add -s to colours.", "I added -s to the things.", "I put the colour before the thing."],
    model: "I have two blue pens, three red books and four small erasers.",
  },
};

const ageBe: NodePractice = {
  nodeId: "pa1.age-with-be",
  explain: "In Spanish: tengo diez años. In English: I am ten (I'm ten), with be, not have. Ask: How old are you? How old is your sister? She is six.",
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
      ch("Which question is correct?", ["How old is your brother?", "How many years has your brother?", "How old has your brother?"], 0, "How old is …?"),
      ch("Which is correct?", ["I'm twelve years old.", "I have twelve years old.", "I'm twelve years."], 0, "I'm twelve years old (or I'm twelve)."),
      es(ch("'¿Cuántos años tienes?' in English is …", ["How old are you?", "How many years do you have?", "How years are you?"], 0, "How old are you?"), "¿Cuántos años tienes? = How old are you?"),
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
      ctx("A new friend asks your age. You are 11.", "Best answer:", ["I'm eleven.", "I have eleven.", "I have eleven years."], 0, "I'm eleven."),
      ctx("You want to know your friend's age.", "Best question:", ["How old are you?", "How many years do you have?", "How old do you have?"], 0, "How old are you?"),
      ch("Which is correct?", ["My cat is two.", "My cat has two years.", "My cat have two."], 0, "is + age."),
      ch("Which is correct?", ["We are thirteen.", "We have thirteen.", "We has thirteen."], 0, "we are + age."),
      say("I'm twelve and my brother is eight.", "Your own family's ages."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write the ages of people in your family (8 words or more). Use am, is and are." },
      { universe: "science", text: "Write the ages of three animals or pets you know (8 words or more)." },
    ],
    minWords: 8,
    checks: [
      { label: "Age with be (I'm 10, she is 6 …)", pattern: "\\b(am|is|are|'m|'s|'re)\\s+(\\d+|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)\\b", min: 2 },
    ],
    rubric: ["I used be for age (I am ten).", "I didn't write I have ten.", "I wrote numbers correctly."],
    model: "I am eleven. My sister is six. My mum is thirty-five. My grandpa is seventy.",
  },
};

export const PA1_SOUNDS: NodePractice[] = [letters, hSound, thSound];
export const PA1_ERRORS: NodePractice[] = [capitalI, noPluralColours, ageBe];
