/* A1 Sounds and Errors. Five steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, es, fix, gap, heard, ord, say, tr } from "./helpers";

const S = (n: string, k: string) => `p/a1s-${n}-${k}.mp3`;
const E = (n: string, k: string) => `p/a1e-${n}-${k}.mp3`;

export const A1_SOUNDS_ERRORS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: S("01", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "Thirteen. Thirty. Fourteen. Forty. My grandma is eighty. My cousin is eighteen. The bus is at four fifteen, not four fifty." },
  { file: S("01", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "My cousin is eighteen." },
  { file: S("02", "notice"), voice: "bIHbv24MWmeRgasZH58o", script: "This is a very big van. A berry is a small fruit. I have a vest and a best friend. Victor visits Bob every evening." },
  { file: S("02", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "This is a very big van." },
  { file: S("03", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "My cat is black. My dog is big. I like my bed. The book is red. I want a hot drink and a cold milk." },
  { file: S("03", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "The book is red." },
  { file: E("01", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "This is my mum. She is a doctor. This is my dad. He is a cook. And this is our dog. It is very lazy!" },
  { file: E("01", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "This is my dad. He is a cook." },
  { file: E("02", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "I like football. I don't like cats. Dogs are friendly. Music is my favourite thing. The music in this café is too loud!" },
  { file: E("02", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "I like football." },
  { file: E("03", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "Do you like pizza? Yes, I do. Do you have a pet? No, I don't. Do they live near here? Yes, they do. Where do you play football?" },
  { file: E("03", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "Do you have a pet?" },
];

const teenTy: NodePractice = {
  nodeId: "a1.thirteen-or-thirty",
  explain: "-teen numbers (13 to 19) have the stress at the end: thir-TEEN, four-TEEN. -ty numbers (30, 40 … 90) have the stress at the start: THIR-ty, FOR-ty. Listen for the long 'eeen' at the end of -teen.",
  pattern: ["thir-TEEN (13) · THIR-ty (30)", "four-TEEN (14) · FOR-ty (40)", "fif-TEEN (15) · FIF-ty (50)", "eigh-TEEN (18) · EIGH-ty (80)"],
  es: "En -teen la fuerza va al final y suena larga: thirTEEN. En -ty va al principio: THIRty.",
  steps: [
    [
      heard(S("01", "notice"), "How old is the grandma?", ["80", "18", "8"], 0, "'My grandma is eighty.'"),
      heard(S("01", "notice"), "How old is the cousin?", ["18", "80", "8"], 0, "'My cousin is eighteen.'"),
      heard(S("01", "notice"), "When is the bus?", ["4:15", "4:50", "5:40"], 0, "'four fifteen, not four fifty'"),
      ch("Where is the stress in 'thirteen'?", ["thir-TEEN", "THIR-teen", "No stress"], 0, "-teen: stress at the end."),
      ch("Where is the stress in 'forty'?", ["FOR-ty", "for-TY", "No stress"], 0, "-ty: stress at the start."),
    ],
    [
      es(ch("Which number has a long 'eeen' at the end?", ["sixteen", "sixty", "six"], 0, "sixteen = six-TEEN."), "Los -teen terminan en un sonido largo 'iin'."),
      ch("FIF-ty is …", ["50", "15", "5"], 0, "FIF-ty = 50."),
      ch("nine-TEEN is …", ["19", "90", "9"], 0, "nine-TEEN = 19."),
      ch("Which pair is easy to confuse?", ["14 and 40", "14 and 41", "4 and 44"], 0, "fourteen / forty."),
      ch("To check a number, you can say:", ["Is that one-three or three-zero?", "Repeat louder!", "What?"], 0, "Say the digits to check."),
    ],
    [
      gap("13 = thir", "", ["teen"], "thirteen."),
      gap("30 = thir", "", ["ty"], "thirty."),
      tr("Write the number in words.", "70", ["seventy"], "70 = seventy."),
      dict(S("01", "dict"), ["My cousin is eighteen", "My cousin is 18"]),
      say("thirteen, thirty, fourteen, forty, fifteen, fifty", "Stress: thir-TEEN, THIR-ty."),
    ],
    [
      es(fix(["My grandpa is", "eighteen,", "he's very old."], 1, ["eighty,", "eighty"], "Very old → eighty."), "Un abuelo muy mayor tiene eighty (80)."),
      fix(["There are", "fifteen", "states in the USA."], 1, ["fifty"], "The USA has 50 states."),
      fix(["A week has", "seventeen", "days."], 1, ["seven"], "A week has seven days."),
      ord("The film is at quarter past six.", "The film is + at quarter past six."),
      ord("My mum is forty years old.", "My mum + is + forty years old."),
    ],
    [
      ctx("Someone says 'It's at four FIFty.'", "What time is it?", ["4:50", "4:15", "5:40"], 0, "FIF-ty = 50."),
      ctx("You aren't sure if you heard 13 or 30.", "Best question:", ["Sorry, is that one-three or three-zero?", "What number you say?", "Thirteen thirty?"], 0, "Check with digits."),
      ch("Which word has stress at the START?", ["ninety", "nineteen", "fourteen"], 0, "NINE-ty."),
      ch("Which word has stress at the END?", ["seventeen", "seventy", "sixty"], 0, "seven-TEEN."),
      say("I'm thirteen. My dad is forty.", "Hear the difference."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write ages and times with -teen and -ty numbers (20 words or more). Then read them aloud with the right stress." },
      { universe: "science", text: "Write five facts with -teen and -ty numbers (20 words or more): temperatures, ages, distances." },
    ],
    minWords: 20,
    checks: [
      { label: "-teen numbers", pattern: "\\b(thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen)\\b", min: 1 },
      { label: "-ty numbers", pattern: "\\b(twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)\\b", min: 1 },
    ],
    rubric: ["I used -teen and -ty numbers.", "I spelled forty without u.", "I can say thir-TEEN and THIR-ty."],
    model: "My sister is thirteen and my mum is forty. My grandpa is seventy-five. School starts at seven fifteen and finishes at twelve thirty.",
  },
};

const bv: NodePractice = {
  nodeId: "a1.b-and-v-sounds",
  explain: "In Spanish, b and v sound the same. In English they are different. For b, close your lips: big, bed, best. For v, put your top teeth on your bottom lip and buzz: very, van, vest. Berry and very are different words!",
  pattern: ["b: lips together → big · best · Bob", "v: teeth on lip, buzz → very · van · vest", "berry ≠ very · best ≠ vest", "Victor visits Bob."],
  es: "En inglés la v se hace con los dientes de arriba sobre el labio de abajo, con vibración: vvvery.",
  steps: [
    [
      heard(S("02", "notice"), "What is very big?", ["A van", "A berry", "A vest"], 0, "'This is a very big van.'"),
      heard(S("02", "notice"), "What is a berry?", ["A small fruit", "A big car", "A shirt"], 0, "'A berry is a small fruit.'"),
      heard(S("02", "notice"), "Who visits Bob?", ["Victor", "Vera", "Ben"], 0, "'Victor visits Bob.'"),
      ch("For the v sound, your top teeth touch …", ["your bottom lip", "your top lip", "your tongue"], 0, "Teeth on the bottom lip."),
      ch("For the b sound, your lips are …", ["closed, then open", "apart all the time", "under your teeth"], 0, "Lips together."),
    ],
    [
      es(ch("'berry' and 'very' are …", ["different words", "the same word", "both colours"], 0, "berry = fruta, very = muy."), "berry = fruta pequeña; very = muy."),
      ch("'best' and 'vest' are …", ["different words", "the same", "both numbers"], 0, "best = mejor, vest = chaleco."),
      ch("Which word starts with the v sound?", ["van", "ban", "bed"], 0, "v-an."),
      ch("Which word starts with the b sound?", ["big", "very", "village"], 0, "b-ig."),
      ch("'Very' should NOT sound like …", ["berry", "vvvery", "vehry"], 0, "very ≠ berry."),
    ],
    [
      gap("It's", "cold today. (muy)", ["very"], "very = muy."),
      gap("My", "friend is Ana. (mejor)", ["best"], "best = mejor."),
      tr("Change the first sound from b to v.", "best", ["vest"], "best → vest."),
      dict(S("02", "dict"), ["This is a very big van"]),
      say("Victor visits Bob every evening.", "v: teeth on lip. b: lips together."),
    ],
    [
      es(fix(["The film is", "berry", "good."], 1, ["very"], "very = muy."), "Muy = very, con v."),
      fix(["My", "vest", "friend is Ana."], 1, ["best"], "best friend."),
      fix(["I love", "very", "ice cream: strawberries and blueberries."], 1, ["berry"], "berry ice cream (fruit)."),
      ord("Bob has a very big van.", "Bob + has + a very big van."),
      ord("I have a vest.", "I have + a vest."),
    ],
    [
      ctx("You want to say the food is muy rico.", "Best sentence:", ["It's very good.", "It's berry good.", "It's best good."], 0, "very good."),
      ctx("You describe your mejor amiga.", "Best sentence:", ["She's my best friend.", "She's my vest friend.", "She's my very friend."], 0, "best friend."),
      ch("Which pair is different only in b / v?", ["berry / very", "van / man", "big / pig"], 0, "berry / very."),
      ch("Which word has BOTH b and v?", ["Bev", "Ben", "Vera"], 0, "B-e-v."),
      say("Very, berry. Vest, best. Van, ban.", "Feel the buzz on v."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a silly sentence with many b and v words (20 words or more). Then say it slowly, then fast." },
      { universe: "arts", text: "Write about a very beautiful picture (20 words or more). Use very, big, best, blue, violet." },
    ],
    minWords: 20,
    checks: [
      { label: "v words", pattern: "\\bv\\w+", min: 3 },
      { label: "b words", pattern: "\\bb\\w+", min: 3 },
    ],
    rubric: ["I used three v words and three b words.", "I said v with teeth on my lip.", "I said b with my lips together."],
    model: "Victor has a very big blue van. His best friend Bob has a violet vest. Every evening they buy berries and visit the village.",
  },
};

const finalSounds: NodePractice = {
  nodeId: "a1.final-consonants",
  explain: "In Spanish, many words end in a vowel. In English, many words end in a consonant: cat, big, bed, book, milk. Say the last sound clearly. Don't add a vowel ('cat-e') and don't drop it ('ca').",
  pattern: ["cat · bed · big · book · milk", "Say the last sound: ca-T, be-D", "Not: 'cate' · 'ca'", "Different words: bed / bet · cap / cat"],
  es: "Pronuncia la última consonante: cat, no 'ca' ni 'cate'.",
  steps: [
    [
      heard(S("03", "notice"), "What colour is the cat?", ["Black", "Red", "Big"], 0, "'My cat is black.'"),
      heard(S("03", "notice"), "What colour is the book?", ["Red", "Black", "Big"], 0, "'The book is red.'"),
      heard(S("03", "notice"), "What does the speaker want?", ["A hot drink and a cold milk", "A big bed", "A red book"], 0, "'I want a hot drink and a cold milk.'"),
      ch("Which word ends with a consonant sound?", ["cat", "taco", "pizza"], 0, "ca-T."),
      ch("'bed' and 'bet' are …", ["different words", "the same word", "both colours"], 0, "The last sound changes the word."),
    ],
    [
      es(ch("Which is the best way to say 'book'?", ["boo-K (short k at the end)", "boo-ke", "boo"], 0, "Say the k, no extra vowel."), "No agregues una 'e' al final."),
      ch("'cap' and 'cat' are different because of …", ["the last sound", "the first sound", "the vowel"], 0, "p vs t at the end."),
      ch("Which word ends in a /d/ sound?", ["red", "rat", "rag"], 0, "re-D."),
      ch("Which word ends in a /g/ sound?", ["big", "bit", "bin"], 0, "bi-G."),
      ch("If you drop the last sound of 'milk', it sounds like …", ["mill", "milky", "mile"], 0, "milk - k ≈ mill."),
    ],
    [
      gap("My dog is", ". (grande)", ["big"], "big."),
      gap("I sleep in my", ".", ["bed"], "bed."),
      tr("Change the last sound from t to d.", "bet", ["bed"], "bet → bed."),
      dict(S("03", "dict"), ["The book is red"]),
      say("My black cat is on my red bed.", "Say every last sound."),
    ],
    [
      fix(["I have a", "bet,", "I sleep in it every night."], 1, ["bed,", "bed"], "You sleep in a bed."),
      es(fix(["The", "cap", "says meow."], 1, ["cat"], "A cat says meow."), "El gato = cat, la gorra = cap."),
      fix(["I drink", "mill", "for breakfast."], 1, ["milk"], "milk."),
      ord("The big dog is on the bed.", "The big dog + is on + the bed."),
      ord("I want a hot drink.", "I want + a hot drink."),
    ],
    [
      ctx("You want to say your gorra is red.", "Best sentence:", ["My cap is red.", "My cat is red.", "My cab is red."], 0, "cap = gorra."),
      ctx("A friend hears 'I have a bet' but you mean a cama.", "Best correction:", ["I have a bed. B-E-D.", "I have a bet.", "I have a bad."], 0, "bed, with d."),
      ch("Which is the best pronunciation for 'cat'?", ["ca-T", "ca", "ca-te"], 0, "Clear t at the end."),
      ch("Which pair is different only in the last sound?", ["big / bit", "big / pig", "big / bag"], 0, "g vs t at the end."),
      say("Look! A big black dog and a little red cat.", "Clear last sounds."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about your room or your pet (20 words or more) using words that end in t, d, k or g. Say them clearly." },
      { universe: "science", text: "Write about animals (20 words or more): cat, dog, duck, frog, bat. Say every last sound." },
    ],
    minWords: 20,
    checks: [
      { label: "Words ending in t, d, k or g", pattern: "\\b\\w+[tdkg]\\b", min: 6 },
    ],
    rubric: ["I used many words that end in a consonant.", "I didn't add an e at the end.", "I didn't drop the last sound."],
    model: "I have a big black cat and a small dog. My cat sleeps on my red bed. My dog likes milk and bread. At night I read a good book.",
  },
};

/* ---------------- Errors ---------------- */

const heShe: NodePractice = {
  nodeId: "a1.he-for-men-she-for-women",
  explain: "Spanish often drops the subject (Es doctora), so it's easy to mix he and she in English. Use she for women and girls (my mum, my sister), he for men and boys (my dad, my brother), and it for things and animals you don't know well.",
  pattern: ["my mum, my sister, my aunt → she · her", "my dad, my brother, my uncle → he · his", "a thing, a dog → it · its", "My mum is a doctor. She works in a hospital."],
  es: "Mamá → she; papá → he. No uses he para mujeres.",
  steps: [
    [
      heard(E("01", "notice"), "What is the mum's job?", ["Doctor", "Cook", "Teacher"], 0, "'She is a doctor.'"),
      heard(E("01", "notice"), "What is the dad's job?", ["Cook", "Doctor", "Driver"], 0, "'He is a cook.'"),
      heard(E("01", "notice"), "What is the dog like?", ["Very lazy", "Very big", "Very fast"], 0, "'It is very lazy!'"),
      ch("My aunt is a nurse. ___ works at night.", ["She", "He", "It"], 0, "aunt → she."),
      ch("My uncle is tall. ___ plays basketball.", ["He", "She", "It"], 0, "uncle → he."),
    ],
    [
      es(ch("My grandma is 70. ___ likes gardening.", ["She", "He", "It"], 0, "grandma → she."), "Abuela → she."),
      ch("This is my phone. ___ is new.", ["It", "He", "She"], 0, "a thing → it."),
      ch("My sister and ___ friend.", ["her", "his", "its"], 0, "sister → her."),
      ch("My brother and ___ bike.", ["his", "her", "its"], 0, "brother → his."),
      ch("Ms Ruiz is our teacher. ___ is very kind.", ["She", "He", "It"], 0, "Ms → she."),
    ],
    [
      gap("My mum is a doctor.", "works in a hospital.", ["She"], "mum → she."),
      gap("My dad loves football.", "plays every Sunday.", ["He"], "dad → he."),
      tr("Write it with she or he.", "Laura is my friend. Laura is twelve.", ["Laura is my friend. She is twelve", "Laura is my friend. She's twelve"], "Laura → she."),
      dict(E("01", "dict"), ["This is my dad. He is a cook", "This is my dad. He's a cook"]),
      say("This is my mum. She is a doctor.", "she for a woman."),
    ],
    [
      es(fix(["My mother is a teacher.", "He", "loves books."], 1, ["She"], "mother → she."), "Madre → she."),
      fix(["My grandpa is 80.", "She", "lives with us."], 1, ["He"], "grandpa → he."),
      fix(["My sister loves", "his", "cat."], 1, ["her"], "sister → her."),
      ord("My aunt is a pilot. She flies planes.", "aunt → she."),
      ord("This is my brother. He is ten.", "brother → he."),
    ],
    [
      ctx("You introduce your mum to your teacher.", "Best sentences:", ["This is my mum. She's a nurse.", "This is my mum. He's a nurse.", "This is my mum. Is a nurse."], 0, "mum → she."),
      ctx("You talk about your cousin Daniel.", "Best sentence:", ["Daniel is my cousin. He lives in Cali.", "Daniel is my cousin. She lives in Cali.", "Daniel is my cousin. Lives in Cali."], 0, "Daniel → he."),
      ch("Which is correct?", ["My grandma and her dog.", "My grandma and his dog.", "My grandma and he dog."], 0, "grandma → her."),
      ch("Which is correct?", ["My friend Julia is funny. She's my best friend.", "My friend Julia is funny. He's my best friend.", "My friend Julia is funny. Is my best friend."], 0, "Julia → she."),
      say("My sister is a dancer. She dances every day.", "she for your sister."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about two women and two men in your family (20 words or more). Use she, he, her and his." },
      { universe: "screens", text: "Describe two characters from a series (20 words or more), a woman and a man. Use she, he, her and his." },
    ],
    minWords: 20,
    checks: [
      { label: "she", pattern: "\\bshe\\b|\\bshe's\\b", min: 1 },
      { label: "he", pattern: "\\bhe\\b|\\bhe's\\b", min: 1 },
    ],
    rubric: ["I used she for women and girls.", "I used he for men and boys.", "I used her and his correctly."],
    model: "My mum is a nurse. She works in a hospital. My dad is a driver. He drives a bus. My sister is nine. She loves her cat. My brother loves his bike.",
  },
};

const noThe: NodePractice = {
  nodeId: "a1.no-the-for-things-in-general",
  explain: "In Spanish we say 'Me gusta el fútbol' and 'Los perros son amigables'. In English, don't use 'the' for things in general: I like football. Dogs are friendly. Music is fun. Use 'the' for a specific thing: The music in this café is loud.",
  pattern: ["I like football. (not 'the football')", "Dogs are friendly. (all dogs)", "Music is my favourite thing.", "The music in this café is loud. (this music)"],
  es: "Cuando hablas en general, sin 'the': I like music. Con 'the' hablas de algo específico.",
  steps: [
    [
      heard(E("02", "notice"), "What sport does the speaker like?", ["Football", "Tennis", "Basketball"], 0, "'I like football.'"),
      heard(E("02", "notice"), "What are friendly?", ["Dogs", "Cats", "Cafés"], 0, "'Dogs are friendly.'"),
      heard(E("02", "notice"), "What is too loud?", ["The music in the café", "The dogs", "Football"], 0, "'The music in this café is too loud!'"),
      es(ch("Which is correct?", ["I like football.", "I like the football.", "I like a football."], 0, "In general: no the."), "Me gusta el fútbol = I like football."),
      ch("Which is correct?", ["Cats are cute.", "The cats are cute (all cats in the world).", "A cats are cute."], 0, "All cats → no the."),
    ],
    [
      ch("Which is correct?", ["I love music.", "I love the music.", "I love musics."], 0, "Music in general → no the."),
      es(ch("Which is correct?", ["Apples are healthy.", "The apples are healthy (all apples).", "Apple are healthy."], 0, "In general → no the."), "Las manzanas en general = apples."),
      ch("Which talks about a specific thing?", ["The pizza in this restaurant is great.", "Pizza is great.", "I like pizza."], 0, "This restaurant → the."),
      ch("Which is correct?", ["English is easy for me.", "The English is easy for me.", "An English is easy."], 0, "Languages → no the."),
      ch("Which is correct?", ["I play basketball.", "I play the basketball.", "I play a basketball."], 0, "Sports → no the."),
    ],
    [
      tr("Say it in English (in general).", "Me gusta el chocolate.", ["I like chocolate"], "No the in general."),
      tr("Say it in English (in general).", "Los perros son inteligentes.", ["Dogs are intelligent", "Dogs are smart", "Dogs are clever"], "No the in general."),
      gap("I don't like", ". (las arañas, in general)", ["spiders"], "In general → spiders."),
      dict(E("02", "dict"), ["I like football"]),
      say("I love music and I play basketball.", "No the."),
    ],
    [
      es(fix(["I like", "the football", "a lot."], 1, ["football"], "In general: no the."), "Sin the: I like football."),
      fix(["The dogs", "are friendly animals."], 0, ["Dogs"], "All dogs → no the."),
      fix(["My favourite subject is", "the maths."], 1, ["maths."], "Subjects → no the."),
      ord("I like rice and chicken.", "In general → no the."),
      ord("The music in this shop is loud.", "This shop → the."),
    ],
    [
      ctx("You tell a new friend about your hobbies.", "Best sentence:", ["I love football and video games.", "I love the football and the video games.", "I love a football."], 0, "In general → no the."),
      ctx("You are at a café. The cake is delicious.", "Best sentence:", ["The cake is delicious!", "Cake is delicious!", "A cake delicious!"], 0, "This cake → the."),
      ch("Which is correct?", ["People are friendly here.", "The people are friendly (all people everywhere).", "People is friendly."], 0, "People in general."),
      ch("Which is correct?", ["Do you like music?", "Do you like the music?", "Do you like musics?"], 0, "In general."),
      say("I like dogs, but I don't like spiders.", "No the in general."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about five things you like or don't like in general (20 words or more): sports, food, animals, music. No 'the'!" },
      { universe: "science", text: "Write five facts about animals in general (20 words or more): Cats sleep a lot …" },
    ],
    minWords: 20,
    checks: [
      { label: "like / love / don't like + thing", pattern: "\\b(like|love|hate)\\s+(?!the\\b)\\w+", min: 3 },
    ],
    rubric: ["I didn't use the for things in general.", "I used plurals for groups (dogs, apples).", "I used the only for one specific thing."],
    model: "I love football and I like basketball. I don't like spiders. Dogs are my favourite animals. I like rice, but I don't like fish.",
  },
};

const doQuestions: NodePractice = {
  nodeId: "a1.questions-with-do",
  explain: "In Spanish you make a question with your voice: ¿Te gusta la pizza? In English most questions need do: 'Do you like pizza?' 'Do they live here?' 'Where do you play?' Short answers: Yes, I do. / No, I don't.",
  pattern: ["Do you like pizza? (not 'You like pizza?')", "Do they live near here?", "Where do you play football?", "Yes, I do. / No, I don't."],
  es: "En inglés la pregunta necesita do: Do you like …? No basta con subir la voz.",
  steps: [
    [
      heard(E("03", "notice"), "Does the speaker like pizza?", ["Yes", "No", "We don't know"], 0, "'Yes, I do.'"),
      heard(E("03", "notice"), "Does the speaker have a pet?", ["No", "Yes", "Two"], 0, "'No, I don't.'"),
      heard(E("03", "notice"), "Do they live near here?", ["Yes", "No", "We don't know"], 0, "'Yes, they do.'"),
      es(ch("Which question is correct?", ["Do you like music?", "You like music?", "Like you music?"], 0, "Do + you + verb?"), "Agrega do: Do you like …?"),
      ch("___ they play football?", ["Do", "Are", "Is"], 0, "Do they …?"),
    ],
    [
      ch("Which question is correct?", ["Where do you live?", "Where you live?", "Where are you live?"], 0, "Where + do + you + live?"),
      ch("Do you have a bike? No, I ___.", ["don't", "not", "haven't"], 0, "No, I don't."),
      ch("Do they speak English? Yes, they ___.", ["do", "speak", "are"], 0, "Yes, they do."),
      es(ch("Which question is correct?", ["What do you eat for breakfast?", "What you eat for breakfast?", "What eat you for breakfast?"], 0, "What + do + you + eat?"), "What do you …?"),
      ch("Which needs do?", ["you / like / cats", "you / are / happy", "she / is / ten"], 0, "like is a normal verb → Do you like cats?"),
    ],
    [
      tr("Make it a question.", "You play the guitar.", ["Do you play the guitar?"], "Do + you + play …?"),
      tr("Make it a question.", "They live in Medellín.", ["Do they live in Medellín?", "Do they live in Medellin?"], "Do + they + live …?"),
      gap("What time", "you get up?", ["do"], "What time do you get up?"),
      dict(E("03", "dict"), ["Do you have a pet?"]),
      say("Do you like pizza? Yes, I do!", "Ask and answer."),
    ],
    [
      es(fix(["You", "like dogs?"], 0, ["Do you"], "Do you like dogs?"), "Falta do al principio."),
      fix(["Where", "you play", "basketball?"], 1, ["do you play"], "Where do you play …?"),
      fix(["Do you speak French? Yes, I", "speak."], 1, ["do."], "Yes, I do."),
      ord("Do you watch TV every day?", "Do + you + watch TV + every day?"),
      ord("What do you do after school?", "What + do + you + do + after school?"),
    ],
    [
      ctx("You want to know if your new friend likes video games.", "Best question:", ["Do you like video games?", "You like video games?", "Like you video games?"], 0, "Do you like …?"),
      ctx("Your teacher asks: 'Do you have a pencil?' You don't.", "Best answer:", ["No, I don't. Sorry!", "No, I not.", "No, I haven't pencil."], 0, "No, I don't."),
      ctx("You want to know where your cousins live.", "Best question:", ["Where do your cousins live?", "Where your cousins live?", "Where are your cousins live?"], 0, "Where do … live?"),
      ch("Which question is correct?", ["Do you want some water?", "You want some water?", "Want you some water?"], 0, "Do you want …?"),
      say("Do you play any sports? What do you play?", "Two questions with do."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write six questions with do for a new friend (20 words or more), and answer two of them." },
      { universe: "screens", text: "Write six questions with do for a gamer (20 words or more): Do you play …? What games do you …?" },
    ],
    minWords: 20,
    checks: [
      { label: "Questions with do", pattern: "\\bdo\\s+(you|they|we|your|I)\\b[^?]*\\?", min: 4 },
    ],
    rubric: ["My questions use do.", "I used short answers (Yes, I do).", "I wrote question marks."],
    model: "Do you like music? Yes, I do. Do you play an instrument? No, I don't. Where do you live? What do you eat for breakfast? Do you have a pet? What games do you play?",
  },
};

export const A1_SOUNDS: NodePractice[] = [teenTy, bv, finalSounds];
export const A1_ERRORS: NodePractice[] = [heShe, noThe, doQuestions];
