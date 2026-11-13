/* A1+ Grammar. Five steps per skill. Original content for Bandwidth EFL. For teacher review.
   Lowest band: short Spanish notes (es) and glosses shown only after a wrong answer. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, es, fix, gap, heard, ord, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/a1pg-${n}-${k}.mp3`;

export const A1P_GRAMMAR_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "Hi! I'm Sofía. I'm thirteen years old and I'm from Colombia. This is my brother, Diego. He is ten. We are in the same school. Our teacher is very nice. She isn't strict." },
  { file: X("01", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "We are in the same school." },
  { file: X("02", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "I get up at six every day. I have breakfast with my mum. My dad works in a hospital. He starts work at seven. My sister doesn't like mornings. She gets up very late." },
  { file: X("02", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "My dad works in a hospital." },
  { file: X("03", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "I have a big family. I have two sisters and one brother. We have a dog called Max. My best friend has a cat. She doesn't have a dog. Do you have a pet?" },
  { file: X("03", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "We have a dog called Max." },
  { file: X("04", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "I can swim and I can ride a bike, but I can't play the guitar. My brother can play the piano. Can you dance? Yes, I can! Can I open the window, please? Yes, you can." },
  { file: X("04", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "My brother can play the piano." },
  { file: X("05", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "This is my bedroom. There is a bed next to the window. There are two posters on the wall. There is a desk, but there isn't a computer. Are there any books? Yes, there are lots of books!" },
  { file: X("05", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "There are two posters on the wall." },
  { file: X("06", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "This is my family photo. That's my mum. Her name is Ana. That's my dad. His name is Luis. This is our house, and that's my sister's bike. My grandpa's dog is in the photo too." },
  { file: X("06", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "That's my sister's bike." },
  { file: X("07", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Look at this phone. It's new! And look at those shoes over there. They're very cool. These apples here are green, and those apples on the table are red. That is my bag." },
  { file: X("07", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "These apples here are green." },
  { file: X("08", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "I have a cat and an orange fish. The cat is black. The fish is very small. In my class, there are twenty children, ten boxes, and three women teachers." },
  { file: X("08", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "I have a cat and an orange fish." },
  { file: X("09", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "Hello? Hi, Mum. I'm at the park. What am I doing? I'm playing football with Pablo. Lucía is sitting on the grass. She's reading a book. It's sunny, and we're having fun!" },
  { file: X("09", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "I'm playing football with Pablo." },
  { file: X("10", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "My school is in the city centre. My classroom is on the second floor. School starts at seven o'clock, on Monday to Friday. My birthday is in June, on the fifth of June. The party is at my house." },
  { file: X("10", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "My birthday is in June." },
  { file: X("11", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "What's your name? Where are you from? How old are you? When is your birthday? Who is your best friend? Why do you like English? Because it's fun!" },
  { file: X("11", "dict"), voice: "8DvnqWWA3WWXixOm7zQI", script: "Where are you from?" },
  { file: X("12", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Good morning, class. Please sit down. Open your books at page ten. Listen and repeat. Don't talk, please. Don't use your phones. Now, work in pairs." },
  { file: X("12", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Open your books at page ten." },
  { file: X("13", "notice"), voice: "bIHbv24MWmeRgasZH58o", script: "Yesterday was Saturday. I was at my grandma's house. It was very hot. My cousins were there too. We were in the garden all day. Were you at home? No, I wasn't. I was at the beach." },
  { file: X("13", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "My cousins were there too." },
];

const be: NodePractice = {
  nodeId: "a1p.verb-be-am-is-are-all-forms",
  explain: "The verb be has three forms in the present: I am, he / she / it is, you / we / they are. Short forms: I'm, he's, she's, it's, you're, we're, they're. Negative: add not (I'm not, she isn't, they aren't). Question: put the verb first: 'Are you ready?' 'Is she your sister?'",
  pattern: ["I am (I'm) · you are (you're) · he / she / it is (he's)", "we are (we're) · they are (they're)", "Negative: I'm not · she isn't · we aren't", "Question: Are you …? Is he …?"],
  es: "Be es «ser» y «estar» a la vez: I am = soy / estoy. La edad también usa be: I am 13 (no 'I have 13').",
  steps: [
    [
      heard(X("01", "notice"), "How old is Sofía?", ["Thirteen", "Ten", "Twelve"], 0, "'I'm thirteen years old.'"),
      heard(X("01", "notice"), "Who is Diego?", ["Her brother", "Her teacher", "Her friend"], 0, "'This is my brother, Diego.'"),
      heard(X("01", "notice"), "What is the teacher like?", ["Nice", "Strict", "Angry"], 0, "'She is very nice. She isn't strict.'"),
      ch("I ___ a student.", ["am", "is", "are"], 0, "I → am."),
      ch("They ___ my friends.", ["are", "is", "am"], 0, "they → are."),
    ],
    [
      ch("She ___ from Bogotá.", ["is", "are", "am"], 0, "she → is."),
      ch("What is the short form of 'we are'?", ["we're", "were", "we'are"], 0, "we are → we're."),
      es(ch("Which is correct?", ["I am 13.", "I have 13.", "I have 13 years."], 0, "Age uses be."), "La edad en inglés va con be: I am 13."),
      ch("Make it negative: 'He is tall.'", ["He isn't tall.", "He not tall.", "He don't tall."], 0, "is + not → isn't."),
      ch("Which question is correct?", ["Are you happy?", "You are happy?", "Do you happy?"], 0, "Question: verb first."),
    ],
    [
      gap("My name", "Daniela.", ["is", "'s"], "My name → is."),
      gap("We", "in class 7B.", ["are", "'re"], "we → are."),
      tr("Make it negative.", "I am tired.", ["I'm not tired", "I am not tired"], "I + am not."),
      dict(X("01", "dict"), ["We are in the same school", "We're in the same school"]),
      say("I'm thirteen and I'm from Colombia.", "Short forms sound natural: I'm."),
    ],
    [
      es(fix(["My sister", "have", "twelve years old."], 1, ["is"], "Age: be, not have."), "Para la edad usa is / am / are, no have."),
      fix(["They", "is", "in the park."], 1, ["are"], "they → are."),
      fix(["I", "is", "very happy today."], 1, ["am"], "I → am."),
      ch("Which is wrong?", ["You is my friend.", "You are my friend.", "You're my friend."], 0, "you → are."),
      ord("Is your teacher from England?", "Question: Is + subject …?"),
    ],
    [
      ctx("A new student asks: 'Are you in 8A?'", "Best answer:", ["Yes, I am.", "Yes, I'm.", "Yes, I is."], 0, "Short answer: Yes, I am (no 'I'm' at the end)."),
      ch("You meet someone. Best way to start:", ["Hi, I'm Laura. I'm from Cali.", "Hi, I Laura. I from Cali.", "Hi, I have Laura."], 0, "I'm + name."),
      ch("Your friend looks sad. Best question:", ["Are you OK?", "You OK are?", "Is you OK?"], 0, "Are you …?"),
      ctx("Teacher: 'Is Pedro here today?'", "Pedro is at home. Best answer:", ["No, he isn't.", "No, he not.", "No, he aren't."], 0, "No, he isn't."),
      say("Are you ready? Yes, we are!", "Rising tone on the question."),
    ],
  ],
  create: {
    prompts: [
      { text: "Introduce yourself and one friend (20 words or more). Use am, is and are, and one negative (isn't, aren't or I'm not)." },
      { universe: "screens", text: "Describe your favourite YouTuber or singer (20 words or more). Use is, isn't and are." },
    ],
    minWords: 20,
    checks: [
      { label: "Forms of be (am, is, are, 'm, 's, 're)", pattern: "\\b(am|is|are)\\b|\\w'(m|s|re)\\b", min: 3 },
      { label: "A negative (isn't, aren't, not)", pattern: "\\b(isn't|aren't|not)\\b", min: 1 },
    ],
    rubric: ["I used am, is and are correctly.", "I used be for age (I am 13).", "I wrote one negative."],
    model: "Hi! I'm Mateo and I am thirteen. I'm from Medellín. My best friend is Julián. He is twelve. He isn't very tall, but he is very funny. We are in the same class.",
  },
};

const presentSimple: NodePractice = {
  nodeId: "a1p.present-simple-for-routines-and-facts",
  explain: "Use the present simple for things you do every day and for facts. With he, she and it, add -s: 'She plays.' 'He watches TV.' Negative: don't / doesn't + verb. Question: Do / Does + subject + verb: 'Do you like pizza?' 'Does she live here?'",
  pattern: ["I / you / we / they play", "he / she / it plays (+ s)", "Negative: I don't play · she doesn't play", "Question: Do you play? Does he play?"],
  es: "Con he / she / it el verbo lleva -s: she lives, he works. Con doesn't, el verbo ya no lleva -s: she doesn't live.",
  steps: [
    [
      heard(X("02", "notice"), "When does the speaker get up?", ["At six", "At seven", "Very late"], 0, "'I get up at six every day.'"),
      heard(X("02", "notice"), "Where does the dad work?", ["In a hospital", "In a school", "At home"], 0, "'My dad works in a hospital.'"),
      heard(X("02", "notice"), "Who gets up very late?", ["The sister", "The dad", "The mum"], 0, "'She gets up very late.'"),
      ch("He ___ football on Saturdays.", ["plays", "play", "playing"], 0, "he → plays."),
      ch("We ___ in Bogotá.", ["live", "lives", "living"], 0, "we → live (no -s)."),
    ],
    [
      ch("My mum ___ coffee every morning.", ["drinks", "drink", "drinking"], 0, "my mum = she → drinks."),
      es(ch("Which is correct?", ["She doesn't like fish.", "She doesn't likes fish.", "She don't like fish."], 0, "doesn't + verb with no -s."), "Con doesn't, quita la -s: doesn't like."),
      ch("Which question is correct?", ["Do you speak English?", "You speak English?", "Does you speak English?"], 0, "Do + you + verb."),
      ch("He ___ TV after school.", ["watches", "watchs", "watch"], 0, "watch → watches."),
      ctx("'The sun rises in the east.'", "This sentence is:", ["a fact", "a plan", "something happening now"], 0, "Present simple for facts."),
    ],
    [
      gap("My brother", "to school by bus. (go)", ["goes"], "go → goes."),
      gap("I", "like tomatoes. (negative)", ["don't", "do not"], "I don't + verb."),
      tr("Make a question.", "She lives near the park.", ["Does she live near the park?", "Does she live near the park"], "Does + she + live."),
      dict(X("02", "dict"), ["My dad works in a hospital"]),
      say("She gets up at six and goes to school at seven.", "Say the -s clearly: gets, goes."),
    ],
    [
      fix(["My friend", "live", "in Cali."], 1, ["lives"], "he / she → lives."),
      fix(["He", "don't", "like rice."], 1, ["doesn't", "does not"], "he → doesn't."),
      fix(["Does she", "plays", "the piano?"], 1, ["play"], "Does + verb with no -s."),
      ch("Which is wrong?", ["They plays basketball.", "They play basketball.", "He plays basketball."], 0, "they → play."),
      ord("What time do you have lunch?", "Wh- word + do + you + verb."),
    ],
    [
      ch("Tell a new friend about your day. Best sentence:", ["I get up at six and walk to school.", "I getting up at six and walk to school.", "I gets up at six and walks to school."], 0, "I + verb."),
      ctx("Friend: 'Do you like reggaetón?'", "You don't. Best answer:", ["No, I don't.", "No, I not.", "No, I doesn't."], 0, "No, I don't."),
      ch("Ask about your friend's sister:", ["Does your sister play sports?", "Do your sister play sports?", "Your sister plays sports?"], 0, "Does + she / your sister."),
      ch("Describe your dad's job:", ["He teaches maths at a school.", "He teach maths at a school.", "He teaching maths."], 0, "he → teaches."),
      say("Does your brother like football?", "Join 'does your' smoothly."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe a normal school day (20 words or more). Write about you and one person in your family. Use he or she with -s." },
      { universe: "science", text: "Write three facts about an animal you like (20 words or more). Use the present simple: 'It eats …', 'It lives …'." },
    ],
    minWords: 20,
    checks: [
      { label: "A verb with -s for he / she / it", pattern: "\\b(he|she|it|my \\w+)\\s+(\\w+s)\\b", min: 1 },
      { label: "Present simple verbs", pattern: "\\b(get|gets|go|goes|have|has|eat|eats|live|lives|like|likes|play|plays|walk|walks|work|works|watch|watches|start|starts|study|studies|drink|drinks)\\b", min: 3 },
    ],
    rubric: ["I wrote about my routine.", "I added -s for he / she / it.", "I used don't or doesn't correctly."],
    model: "I get up at six and I have breakfast. I walk to school with my sister. She likes music, but I like sports. My mum works in a shop. She starts work at eight.",
  },
};

const haveGot: NodePractice = {
  nodeId: "a1p.have-have-got-for-possession",
  explain: "Use have (or have got) to say what is yours. I / you / we / they have; he / she / it has. Negative: I don't have, she doesn't have (or I haven't got, she hasn't got). Question: Do you have …? Have you got …? Both are correct; American English uses 'have' more.",
  pattern: ["I have a bike. · She has a cat.", "I've got a bike. · She's got a cat.", "Negative: I don't have · I haven't got", "Question: Do you have …? Have you got …?"],
  es: "Have = «tener» para cosas y familia. Con he / she / it cambia a has. Pero la edad NO usa have: I am 13.",
  steps: [
    [
      heard(X("03", "notice"), "How many sisters does the speaker have?", ["Two", "One", "Three"], 0, "'I have two sisters.'"),
      heard(X("03", "notice"), "What is the dog's name?", ["Max", "Mix", "Matt"], 0, "'A dog called Max.'"),
      heard(X("03", "notice"), "What pet does the best friend have?", ["A cat", "A dog", "No pet"], 0, "'My best friend has a cat.'"),
      ch("She ___ a new phone.", ["has", "have", "is"], 0, "she → has."),
      ch("We ___ a big garden.", ["have", "has", "are"], 0, "we → have."),
    ],
    [
      ch("He ___ got two brothers.", ["has", "have", "is"], 0, "he has got."),
      ch("Which is correct?", ["I don't have a bike.", "I haven't a bike.", "I no have a bike."], 0, "Negative: don't have."),
      ch("Which question is correct?", ["Have you got a pen?", "You have got a pen?", "Has you got a pen?"], 0, "Have you got …?"),
      es(ch("Which is correct?", ["Does she have a dog?", "Does she has a dog?", "Has she a dog?"], 0, "Does + have (no -s)."), "Después de does, usa have, no has."),
      ch("'I've got' means:", ["I have got", "I was got", "I am got"], 0, "I've = I have."),
    ],
    [
      gap("My cousin", "a motorbike.", ["has", "has got", "'s got"], "he / she → has."),
      gap("They", "got a car.", ["have", "'ve", "haven't", "have not"], "they → have got."),
      tr("Make a question with 'Do'.", "You have a brother.", ["Do you have a brother?", "Do you have a brother"], "Do + you + have."),
      dict(X("03", "dict"), ["We have a dog called Max"]),
      say("I've got two sisters and a dog.", "I've got: one smooth sound."),
    ],
    [
      fix(["My teacher", "have", "a red car."], 1, ["has"], "he / she → has."),
      fix(["My friends", "has", "a big house."], 1, ["have"], "they → have."),
      fix(["Do you", "has", "a computer?"], 1, ["have"], "Do + have."),
      ch("Which is wrong?", ["He have a blue bike.", "He has a blue bike.", "He's got a blue bike."], 0, "he → has."),
      ord("Has your school got a big library?", "Has + subject + got …?"),
    ],
    [
      ctx("Classmate: 'Can I borrow a pencil?'", "You have one. Best answer:", ["Yes, I've got one. Here you are.", "Yes, I has one. Here you are.", "Yes, I am one. Here you are."], 0, "I've got one."),
      ch("Describe your family:", ["I have one brother and two cousins.", "I has one brother and two cousins.", "I am one brother and two cousins."], 0, "I have."),
      ctx("Friend: 'Do you have a pet?'", "You don't. Best answer:", ["No, I don't.", "No, I haven't got.", "No, I not have."], 0, "No, I don't."),
      ch("Ask a new friend:", ["Have you got any brothers or sisters?", "You got any brothers or sisters?", "Has you got any brothers or sisters?"], 0, "Have you got …?"),
      say("Have you got a pet? Yes, I have. A dog!", "Short answer: Yes, I have."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about your family and your things (20 words or more). Use have / has and one negative (don't have, haven't got)." },
      { universe: "screens", text: "Describe your phone or favourite game (20 words or more). What does it have? Use has and hasn't got." },
    ],
    minWords: 20,
    checks: [
      { label: "have / has / have got", pattern: "\\b(have|has|'ve got|'s got)\\b", min: 3 },
      { label: "A negative (don't have, doesn't have, haven't, hasn't)", pattern: "\\b(don't have|doesn't have|haven't|hasn't)\\b", min: 1 },
    ],
    rubric: ["I used have and has correctly.", "I wrote a negative.", "I didn't use have for age."],
    model: "I have a small family. I have one sister and we have a cat. My sister has a guitar, but she doesn't have a phone. I've got a bike and a lot of books. We haven't got a car.",
  },
};

const can: NodePractice = {
  nodeId: "a1p.can-can-t-for-ability-and-permission",
  explain: "Use can to say you are able to do something: 'I can swim.' Use can't (cannot) for the opposite: 'I can't sing.' Can is the same for everyone (he can, not 'he cans'), and the next verb has no to: 'She can dance' (not 'can to dance'). Use Can I …? to ask for permission: 'Can I go to the toilet, please?'",
  pattern: ["I / he / they can + verb: She can swim.", "Negative: can't / cannot", "Question: Can you …? Can I …, please?", "No to: can dance (not can to dance)"],
  es: "Can = «poder» o «saber hacer»: I can swim = sé nadar. Nunca lleva -s ni 'to': he can play.",
  steps: [
    [
      heard(X("04", "notice"), "What can't the speaker do?", ["Play the guitar", "Swim", "Ride a bike"], 0, "'I can't play the guitar.'"),
      heard(X("04", "notice"), "What can the brother play?", ["The piano", "The guitar", "Football"], 0, "'My brother can play the piano.'"),
      heard(X("04", "notice"), "What does the speaker ask permission for?", ["To open the window", "To open the door of the classroom", "To go home early with her mum"], 0, "'Can I open the window, please?'"),
      ch("She ___ speak three languages.", ["can", "cans", "can to"], 0, "can is the same for everyone."),
      ch("'Can I go to the toilet, please?' is asking for:", ["permission", "ability", "a fact"], 0, "Can I …? = permission."),
    ],
    [
      ch("Which is correct?", ["He can play chess.", "He cans play chess.", "He can plays chess."], 0, "can + base verb."),
      es(ch("Which is correct?", ["I can swim.", "I can to swim.", "I can swimming."], 0, "No 'to' after can."), "Después de can, no va 'to': can swim."),
      ch("Make it negative: 'We can come.'", ["We can't come.", "We don't can come.", "We can no come."], 0, "can + not → can't."),
      ch("Which question is correct?", ["Can you help me?", "Do you can help me?", "You can help me?"], 0, "Can + you + verb?"),
      ctx("'Penguins can't fly.'", "This means penguins:", ["are not able to fly", "don't want to fly", "fly a lot"], 0, "can't = not able."),
    ],
    [
      gap("My dog", "run very fast.", ["can"], "can + verb."),
      gap("Sorry, I", "come to your party. I'm busy.", ["can't", "cannot", "can not"], "can't = not possible."),
      tr("Make a question.", "You can ride a horse.", ["Can you ride a horse?", "Can you ride a horse"], "Can + you + verb."),
      dict(X("04", "dict"), ["My brother can play the piano"]),
      say("I can swim, but I can't dance.", "can is short; can't is long and strong."),
    ],
    [
      fix(["My sister", "cans", "draw very well."], 1, ["can"], "can never has -s."),
      fix(["I can", "to play", "the drums."], 1, ["play"], "No to after can."),
      fix(["She", "don't can", "cook."], 1, ["can't", "cannot", "can not"], "Negative: can't."),
      ch("Which is wrong?", ["Do you can swim?", "Can you swim?", "I can't swim."], 0, "Question: Can you …?"),
      ord("Can I borrow your ruler, please?", "Can I + verb …, please?"),
    ],
    [
      ctx("In class, you need a pen.", "Best question for your classmate:", ["Can I borrow a pen, please?", "I want a pen. Give me it, OK?", "Give me a pen, now, please?"], 0, "Can I …, please? is polite."),
      ctx("Friend: 'Can you play the guitar?'", "You can't. Best answer:", ["No, I can't.", "No, I don't can.", "No, I can."], 0, "No, I can't."),
      ch("Tell your PE teacher about your skills:", ["I can run fast, but I can't swim.", "I can running fast, but I can't swim.", "I cans run fast, but I can't swims."], 0, "can + verb."),
      ch("Ask the teacher politely:", ["Can I open the window, please?", "I open the window.", "Open the window, I can?"], 0, "Can I …, please?"),
      say("Can I go to the toilet, please?", "please at the end, soft and friendly."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about three things you can do and two things you can't do (20 words or more)." },
      { universe: "science", text: "Write about an animal: what can it do and what can't it do? (20 words or more)" },
    ],
    minWords: 20,
    checks: [
      { label: "can + verb", pattern: "\\bcan\\s+(?!not\\b|'t\\b)\\w+", min: 2 },
      { label: "can't / cannot", pattern: "\\b(can't|cannot|can not)\\b", min: 1 },
    ],
    rubric: ["I used can + verb (no 'to').", "I wrote can't for things I can't do.", "I didn't add -s to can."],
    model: "I can swim and I can ride a bike. I can cook rice and eggs. My best friend can dance very well. I can't sing and I can't play the guitar. My dog can't swim!",
  },
};

const thereIs: NodePractice = {
  nodeId: "a1p.there-is-there-are",
  explain: "Use there is (there's) for one thing and there are for two or more: 'There's a bed.' 'There are two posters.' Negative: there isn't / there aren't. Question: Is there …? Are there any …? We use this to say what is in a place.",
  pattern: ["There is (there's) + one thing", "There are + two or more things", "Negative: there isn't a … · there aren't any …", "Question: Is there a …? Are there any …?"],
  es: "There is / there are = «hay». No se dice 'It has a park' para «hay un parque»: se dice There is a park.",
  steps: [
    [
      heard(X("05", "notice"), "Where is the bed?", ["Next to the window", "Next to the door", "Under the desk"], 0, "'There is a bed next to the window.'"),
      heard(X("05", "notice"), "How many posters are there?", ["Two", "One", "Three"], 0, "'There are two posters.'"),
      heard(X("05", "notice"), "What isn't in the room?", ["A computer", "A desk", "Books"], 0, "'There isn't a computer.'"),
      ch("There ___ a park near my house.", ["is", "are", "have"], 0, "One park → there is."),
      ch("There ___ thirty students in my class.", ["are", "is", "has"], 0, "Many → there are."),
    ],
    [
      es(ch("How do you say «hay un cine en mi barrio»?", ["There is a cinema in my neighbourhood.", "It has a cinema in my neighbourhood.", "Have a cinema in my neighbourhood."], 0, "hay → there is."), "«Hay» = there is / there are, no 'it has'."),
      ch("Which question is correct?", ["Are there any shops?", "There are any shops?", "Is there any shops?"], 0, "Are there any + plural?"),
      ch("Make it negative: 'There are trees.'", ["There aren't any trees.", "There isn't trees.", "There no trees."], 0, "there aren't any."),
      ch("___ a bank near here?", ["Is there", "Are there", "There is"], 0, "One bank → Is there …?"),
      ch("'There's' means:", ["There is", "There was", "There are"], 0, "there's = there is."),
    ],
    [
      gap("There", "two bathrooms in my house.", ["are"], "Two → are."),
      gap("Is", "a supermarket near your school?", ["there"], "Is there …?"),
      tr("Make it negative.", "There is a TV in my bedroom.", ["There isn't a TV in my bedroom", "There is not a TV in my bedroom", "There's no TV in my bedroom"], "there isn't a …"),
      dict(X("05", "dict"), ["There are two posters on the wall"]),
      say("There's a desk, but there isn't a computer.", "there's: one quick sound."),
    ],
    [
      fix(["There", "is", "five people in my family."], 1, ["are"], "Five → are."),
      es(fix(["In my town", "it has", "a big park."], 1, ["there is", "there's"], "hay → there is."), "Para «hay» usa there is, no it has."),
      fix(["There", "are", "a cat on the sofa."], 1, ["is", "'s"], "One cat → is."),
      ch("Which is wrong?", ["Is there any chairs?", "Are there any chairs?", "Is there a chair?"], 0, "Plural → Are there any …?"),
      ord("Are there any good restaurants in your town?", "Are there any + plural?"),
    ],
    [
      ctx("A tourist: 'Is there a bank near here?'", "There is one. Best answer:", ["Yes, there is. It's on Main Street.", "Yes, it has. It's on Main Street.", "Yes, there are. It's on Main Street."], 0, "Yes, there is."),
      ch("Describe your classroom:", ["There are twenty desks and there's a big board.", "It has twenty desks and it has a big board.", "There is twenty desks and there are a big board."], 0, "there are + plural."),
      ctx("Friend: 'Are there any cookies?'", "There aren't. Best answer:", ["No, there aren't. Sorry!", "No, there isn't any cookies.", "No, it hasn't."], 0, "No, there aren't."),
      ch("Ask about a new city:", ["Is there a beach in Cartagena?", "There is a beach in Cartagena?", "Has a beach Cartagena?"], 0, "Is there a …?"),
      say("Is there a park near your house?", "Rising tone at the end."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe your bedroom or your classroom (20 words or more). Use there is, there are and one negative." },
      { universe: "arts", text: "Describe a picture or a poster you like (20 words or more). What is in it? Use there is and there are." },
    ],
    minWords: 20,
    checks: [
      { label: "there is / there's", pattern: "\\b(there is|there's|there isn't)\\b", min: 1 },
      { label: "there are", pattern: "\\b(there are|there aren't)\\b", min: 1 },
      { label: "A negative (isn't, aren't)", pattern: "\\bthere (isn't|aren't|is not|are not|is no|are no)\\b", min: 1 },
    ],
    rubric: ["I used there is for one thing.", "I used there are for many things.", "I didn't use 'it has' for «hay»."],
    model: "My bedroom is small but nice. There is a bed and there's a big window. There are three posters on the wall. There are a lot of books, but there isn't a TV.",
  },
};

const possessives: NodePractice = {
  nodeId: "a1p.possessive-adjectives-and-s",
  explain: "Possessive adjectives show who has something: my, your, his (for a boy or man), her (for a girl or woman), its, our, their. Use 's after a person: 'Ana's bag' = the bag of Ana. Don't use 'the bag of Ana' for people.",
  pattern: ["I → my · you → your · he → his · she → her", "it → its · we → our · they → their", "Person + 's: Ana's bag, my dad's car", "his = of a boy · her = of a girl"],
  es: "En español «su» sirve para todo; en inglés no: his (de él), her (de ella), their (de ellos). Y «el carro de mi papá» = my dad's car.",
  steps: [
    [
      heard(X("06", "notice"), "What is the mum's name?", ["Ana", "Luis", "Laura"], 0, "'Her name is Ana.'"),
      heard(X("06", "notice"), "What is the dad's name?", ["Luis", "Ana", "Lucas"], 0, "'His name is Luis.'"),
      heard(X("06", "notice"), "Whose bike is in the photo?", ["The sister's", "The dad's", "The grandpa's"], 0, "'That's my sister's bike.'"),
      ch("This is my brother. ___ name is Tomás.", ["His", "Her", "Its"], 0, "brother → his."),
      ch("This is my aunt. ___ house is very big.", ["Her", "His", "Their"], 0, "aunt → her."),
    ],
    [
      es(ch("Mi mamá y su carro (the car of my mum):", ["My mum and her car", "My mum and his car", "My mum and their car"], 0, "mum → her."), "«Su» de una mujer = her."),
      ch("How do you say 'the phone of Carlos'?", ["Carlos's phone", "the phone of Carlos", "Carlos phone"], 0, "person + 's."),
      ch("We love ___ school.", ["our", "we", "us"], 0, "we → our."),
      ch("They are my neighbours. ___ dog is very noisy.", ["Their", "There", "They're"], 0, "they → their."),
      ch("The cat is eating ___ food.", ["its", "it's", "it"], 0, "its = of it. it's = it is."),
    ],
    [
      gap("Is this", "pen, Juan? (you)", ["your"], "you → your."),
      gap("My", "name is Lucas. (sister)", ["sister's"], "my sister's name."),
      tr("Use 's.", "the bike of my brother", ["my brother's bike"], "person + 's + thing."),
      dict(X("06", "dict"), ["That's my sister's bike", "That is my sister's bike"]),
      say("His name is Luis and her name is Ana.", "his and her: clear h sound."),
    ],
    [
      fix(["My sister loves", "his", "new phone."], 1, ["her"], "sister → her."),
      fix(["I love my", "grandmas", "cooking."], 1, ["grandma's"], "person + 's: grandma's."),
      fix(["Pedro and Ana are here. This is", "they", "house."], 1, ["their"], "they → their."),
      ch("Which is correct?", ["My friend's name is Valeria.", "The name of my friend is Valeria friend.", "My friend name's Valeria."], 0, "my friend's name."),
      ord("What is your teacher's name?", "your teacher's name."),
    ],
    [
      ctx("Someone asks: 'Whose jacket is this?' It belongs to Camila.", "Best answer:", ["It's Camila's.", "It's of Camila.", "It's Camila."], 0, "Camila's."),
      ch("Introduce your best friend:", ["This is Juan. His mum is my English teacher!", "This is Juan. Her mum is my English teacher!", "This is Juan. Su mum is my teacher."], 0, "Juan → his."),
      ch("Talk about your grandparents:", ["Their house is in the countryside.", "There house is in the countryside.", "His house of them is in the countryside."], 0, "their = of them."),
      ctx("Your teacher holds a bag. 'Is this your bag?'", "It is yours. Best answer:", ["Yes, it's my bag. Thank you!", "Yes, it's me bag. Thank you!", "Yes, it's I bag. Thank you!"], 0, "my bag."),
      say("That's my dad's car, and this is my mum's bike.", "Say the 's clearly."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe a family photo (20 words or more). Use his, her, their and two 's (my dad's …, my sister's …)." },
      { universe: "screens", text: "Write about two people from a series you like (20 words or more). Use his, her and 's." },
    ],
    minWords: 20,
    checks: [
      { label: "his / her / their / our", pattern: "\\b(his|her|their|our)\\b", min: 2 },
      { label: "Two uses of 's for people", pattern: "\\b[A-Za-z]+'s\\s+(?!a\\b|an\\b|the\\b|very\\b|not\\b)[a-z]+", min: 2 },
    ],
    rubric: ["I used his for a boy and her for a girl.", "I used 's after people.", "I used their for two or more people."],
    model: "This is a photo of my family. My mum is on the left. Her name is Rosa. My dad is next to her. His name is Andrés. That is my brother's dog and that is my grandma's garden. Their house is very old.",
  },
};

const thisThat: NodePractice = {
  nodeId: "a1p.this-that-these-those",
  explain: "Use this (one) and these (two or more) for things near you. Use that (one) and those (two or more) for things far from you. 'This book here.' 'Those shoes over there.'",
  pattern: ["Near + one → this · near + many → these", "Far + one → that · far + many → those", "These apples are green. · Those cars are fast.", "this / that + is · these / those + are"],
  es: "This = este / esta · these = estos / estas · that = ese / aquel · those = esos / aquellos.",
  steps: [
    [
      heard(X("07", "notice"), "What is new?", ["The phone", "The shoes", "The bag"], 0, "'Look at this phone. It's new!'"),
      heard(X("07", "notice"), "What colour are 'these apples'?", ["Green", "Red", "Yellow"], 0, "'These apples here are green.'"),
      heard(X("07", "notice"), "Where are the red apples?", ["On the table", "In a bag", "Here, near the speaker"], 0, "'Those apples on the table are red.'"),
      ch("___ is my pencil. (in my hand)", ["This", "These", "Those"], 0, "Near + one → this."),
      ch("Look at ___ birds in the sky!", ["those", "this", "that"], 0, "Far + many → those."),
    ],
    [
      ch("___ shoes are too small. (I'm wearing them)", ["These", "This", "That"], 0, "Near + many → these."),
      ch("Who is ___ girl over there?", ["that", "these", "those"], 0, "Far + one → that."),
      es(ch("Which is correct?", ["These books are mine.", "This books are mine.", "These book is mine."], 0, "these + plural + are."), "Estos libros = these books, no 'this books'."),
      ch("Those ___ my friends.", ["are", "is", "am"], 0, "those + are."),
      ch("'That' is for things that are:", ["far and one", "near and many", "far and many"], 0, "that = far + one."),
    ],
    [
      gap("Can I try", "jeans, please? (near, many)", ["these"], "Near + many → these."),
      gap("", "house on the hill is very old. (far, one)", ["That"], "Far + one → that."),
      tr("Make it plural.", "This is my friend.", ["These are my friends", "These are my friends."], "this is → these are."),
      dict(X("07", "dict"), ["These apples here are green"]),
      say("This is my bag, and those are my shoes.", "Clear 'th' in this and those."),
    ],
    [
      fix(["I love", "this", "earrings. Are they new?"], 1, ["these"], "earrings = many → these."),
      fix(["Look,", "these", "is my mum."], 1, ["this"], "One person → this."),
      fix(["Look at", "that", "stars!"], 1, ["those"], "stars = many → those."),
      ch("Which is wrong?", ["Those car is fast.", "That car is fast.", "Those cars are fast."], 0, "those + plural."),
      ord("Are these your keys?", "Are + these + your …?"),
    ],
    [
      ctx("In a shop, you hold a T-shirt.", "Best question:", ["How much is this T-shirt?", "How much is those T-shirt?", "How much are this T-shirt?"], 0, "this + one + is."),
      ctx("You see two dogs across the street.", "Best sentence:", ["Those dogs are very big!", "These dogs are very big!", "That dogs are very big!"], 0, "Far + many → those."),
      ch("You introduce a friend next to you:", ["This is my friend Sara.", "That are my friend Sara.", "These is my friend Sara."], 0, "This is …"),
      ctx("Your friend points at sneakers in a window.", "You ask:", ["Do you like those sneakers?", "Do you like this sneakers?", "Do you like that sneakers?"], 0, "Far + many → those."),
      say("Are these your books or those?", "these (near) and those (far)."),
    ],
  ],
  create: {
    prompts: [
      { text: "Imagine you are showing your room to a friend (20 words or more). Use this, that, these and those." },
      { universe: "arts", text: "You are in a clothes shop with a friend (20 words or more). Talk about the clothes. Use this, that, these and those." },
    ],
    minWords: 20,
    checks: [
      { label: "this / that", pattern: "\\b(this|that)\\b", min: 2 },
      { label: "these / those", pattern: "\\b(these|those)\\b", min: 2 },
    ],
    rubric: ["I used this and these for near things.", "I used that and those for far things.", "I used these / those with plural nouns."],
    model: "Welcome to my room! This is my bed and these are my books. That is my window. Look, those are my football boots. And that poster is from my favourite band.",
  },
};

const articles: NodePractice = {
  nodeId: "a1p.articles-a-an-the-basic-and-plurals",
  explain: "Use a before a consonant sound (a cat, a bike) and an before a vowel sound (an apple, an orange, an hour). Use the for something we already know or there is only one: 'The cat is black.' 'The sun is hot.' Plurals usually add -s (cats), -es after s, sh, ch, x (boxes), and some are irregular: child → children, man → men, woman → women, person → people.",
  pattern: ["a + consonant sound: a book, a uniform", "an + vowel sound: an egg, an hour", "the = the one we know: the teacher, the moon", "Plurals: cats · boxes · children · people · men · women"],
  es: "a / an = un / una. The = el / la / los / las. Ojo: en inglés no se usa the para cosas en general: I like music (no 'the music').",
  steps: [
    [
      heard(X("08", "notice"), "What colour is the cat?", ["Black", "Orange", "White"], 0, "'The cat is black.'"),
      heard(X("08", "notice"), "What is orange?", ["The fish", "The cat", "The box"], 0, "'An orange fish.'"),
      heard(X("08", "notice"), "How many children are in the class?", ["Twenty", "Ten", "Three"], 0, "'Twenty children.'"),
      ch("I have ___ umbrella.", ["an", "a", "the"], 0, "umbrella starts with a vowel sound."),
      ch("She has ___ dog.", ["a", "an", "two"], 0, "dog: consonant sound → a."),
    ],
    [
      ch("Choose the right plural of 'child':", ["children", "childs", "childrens"], 0, "child → children."),
      ch("Choose the right plural of 'box':", ["boxes", "boxs", "box"], 0, "-x → -es."),
      ch("___ moon is beautiful tonight.", ["The", "A", "An"], 0, "Only one moon → the."),
      es(ch("Which is correct?", ["I like music.", "I like the music.", "I like a music."], 0, "Things in general: no article."), "Para gustos en general no uses the: I like music."),
      ch("Choose: ___ hour", ["an", "a", "the a"], 0, "hour: the h is silent → an."),
    ],
    [
      gap("I eat", "apple every day.", ["an"], "apple → an."),
      gap("There are three", "in my family. (person)", ["people"], "person → people."),
      tr("Make it plural.", "a woman", ["women", "two women", "some women"], "woman → women."),
      dict(X("08", "dict"), ["I have a cat and an orange fish"]),
      say("an apple, an egg, a banana, a bus", "an joins the next word: an-apple."),
    ],
    [
      fix(["My mum is", "a", "engineer."], 1, ["an"], "engineer: vowel sound → an."),
      fix(["There are ten", "childs", "in the park."], 1, ["children"], "child → children."),
      es(fix(["She is", "teacher", "in my school."], 1, ["a teacher"], "Jobs need a / an."), "Con profesiones se usa a / an: She is a teacher."),
      ch("Which is wrong?", ["There are two mans.", "There are two men.", "There is one man."], 0, "man → men."),
      ord("The teacher has an orange bag.", "the + known person; an + vowel sound."),
    ],
    [
      ch("Tell your friend about your parents' jobs:", ["My dad is a doctor and my mum is an artist.", "My dad is doctor and my mum is artist.", "My dad is a doctor and my mum is a artist."], 0, "a doctor · an artist."),
      ctx("Your friend: 'Where is the remote?'", "Best answer:", ["It's on the sofa.", "It's on a sofa of the house.", "It's on sofa."], 0, "the sofa (we both know it)."),
      ch("Describe a picture:", ["There are two women and a child.", "There are two womans and a child.", "There are two women and an child."], 0, "women · a child."),
      ch("Say what you like:", ["I love football and pizza.", "I love the football and the pizza.", "I love a football and a pizza."], 0, "General: no article."),
      say("I have an older brother and a little sister.", "an older: link the n."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe your school bag (20 words or more). Use a, an, the and some plurals." },
      { universe: "science", text: "Describe a farm or a zoo (20 words or more). Use a, an, the and plurals like animals, sheep, children." },
    ],
    minWords: 20,
    checks: [
      { label: "a / an", pattern: "\\b(a|an)\\s+\\w+", min: 3 },
      { label: "an + vowel", pattern: "\\ban\\s+[aeiou]\\w*", min: 1 },
      { label: "Plural nouns", pattern: "\\b\\w{3,}(s|es)\\b|\\b(children|people|men|women)\\b", min: 2 },
    ],
    rubric: ["I used a / an correctly.", "I used the for things we know.", "I wrote plurals correctly (boxes, children)."],
    model: "In my bag there is a book, an eraser and a pencil case. The pencil case is blue. There are three pens and two notebooks. There is an apple too. The apple is for lunch.",
  },
};

const presentCont: NodePractice = {
  nodeId: "a1p.present-continuous-for-now",
  explain: "Use the present continuous for actions happening now: am / is / are + verb-ing. 'I'm reading.' 'She's playing.' 'They're eating.' Negative: I'm not reading. Question: Are you reading? Spelling: write → writing (drop e), swim → swimming, sit → sitting (double the last letter).",
  pattern: ["am / is / are + verb-ing", "I'm playing · she's reading · we're eating", "Negative: I'm not watching TV.", "Question: What are you doing?"],
  es: "Es como «estoy jugando», «está leyendo». Necesita am / is / are: I am playing (no 'I playing').",
  steps: [
    [
      heard(X("09", "notice"), "Where is the speaker?", ["At the park", "At home", "At school"], 0, "'I'm at the park.'"),
      heard(X("09", "notice"), "What is the speaker doing?", ["Playing football", "Reading a book", "Eating"], 0, "'I'm playing football with Pablo.'"),
      heard(X("09", "notice"), "What is Lucía doing?", ["Reading a book", "Playing football", "Swimming"], 0, "'She's reading a book.'"),
      ch("Look! It ___ raining.", ["is", "are", "am"], 0, "it → is + -ing."),
      ch("We ___ watching a film right now.", ["are", "is", "am"], 0, "we → are."),
    ],
    [
      es(ch("Which is correct?", ["I am eating.", "I eating.", "I am eat."], 0, "am + -ing."), "No olvides am / is / are: I am eating."),
      ch("The -ing form of 'swim' is:", ["swimming", "swiming", "swimeing"], 0, "Double the m."),
      ch("The -ing form of 'write' is:", ["writing", "writeing", "writting"], 0, "Drop the e."),
      ch("Which question is correct?", ["What are you doing?", "What you are doing?", "What do you doing?"], 0, "What + are + you + -ing?"),
      ctx("'Shh! The baby is sleeping.'", "This is happening:", ["now", "every day", "yesterday"], 0, "Present continuous = now."),
    ],
    [
      gap("My sister", "a shower right now. (have)", ["is having", "'s having"], "is + having."),
      gap("They", "TV. They're playing outside. (watch, negative)", ["aren't watching", "are not watching", "'re not watching"], "aren't + watching."),
      tr("Make a question.", "She is dancing.", ["Is she dancing?", "Is she dancing"], "Is + she + -ing?"),
      dict(X("09", "dict"), ["I'm playing football with Pablo", "I am playing football with Pablo"]),
      say("What are you doing? I'm doing my homework.", "doing my: smooth link."),
    ],
    [
      fix(["Look! The dog", "running", "in the garden."], 1, ["is running", "'s running"], "Add is."),
      fix(["We", "are siting", "in the classroom."], 1, ["are sitting"], "sit → sitting."),
      fix(["She is", "make", "a cake now."], 1, ["making"], "is + making."),
      ch("Which is wrong?", ["They is playing.", "They're playing.", "They are playing."], 0, "they → are."),
      ord("Why are you laughing?", "Why + are + you + -ing?"),
    ],
    [
      ctx("Your mum calls: 'What are you doing?'", "Best answer:", ["I'm doing my homework.", "I do my homework.", "I doing homework."], 0, "Now → I'm doing."),
      ch("Describe a photo of a beach:", ["Two children are swimming and a man is sleeping.", "Two children swim and a man sleep.", "Two children swimming and a man sleeping."], 0, "are / is + -ing."),
      ctx("Friend: 'Are you watching the match?'", "You aren't. Best answer:", ["No, I'm not.", "No, I don't.", "No, I amn't."], 0, "No, I'm not."),
      ch("Send a message from a party:", ["We're dancing and eating cake!", "We dance and eat cake now!", "We dancing!"], 0, "We're + -ing."),
      say("Hurry up! The bus is coming!", "Strong stress on 'coming'."),
    ],
  ],
  create: {
    prompts: [
      { text: "Look around you (or imagine a park). Write what people are doing right now (20 words or more). Use is / are + -ing." },
      { universe: "screens", text: "You are at a concert. Send a message to a friend (20 words or more): what is happening right now?" },
    ],
    minWords: 20,
    checks: [
      { label: "am / is / are + -ing", pattern: "\\b(am|is|are|'m|'s|'re)\\s+(not\\s+)?\\w+ing\\b|\\w'(m|s|re)\\s+\\w+ing\\b", min: 3 },
    ],
    rubric: ["I used am / is / are + -ing.", "I spelled -ing forms correctly.", "I wrote about now."],
    model: "I'm sitting in the park now. Two boys are playing football. A woman is walking her dog. My sister is eating an ice cream, and I'm writing this message. The sun is shining!",
  },
};

const prepositions: NodePractice = {
  nodeId: "a1p.prepositions-of-place-and-time",
  explain: "Place: in (inside: in the box, in Bogotá), on (on a surface: on the table, on the wall), under, next to, between, behind, in front of. Time: at + clock times (at seven), on + days and dates (on Monday, on the fifth of June), in + months, years and parts of the day (in June, in 2025, in the morning). Note: at night, at the weekend.",
  pattern: ["Place: in the bag · on the desk · under the bed · next to the door", "at + time: at 7 o'clock", "on + day / date: on Monday, on 5 June", "in + month / year / part of day: in May, in the morning"],
  es: "«En» puede ser in, on o at. Truco: at para horas, on para días, in para meses y años. Y «en la mesa» = on the table.",
  steps: [
    [
      heard(X("10", "notice"), "Where is the classroom?", ["On the second floor", "In the city centre", "Next to the park"], 0, "'My classroom is on the second floor.'"),
      heard(X("10", "notice"), "When does school start?", ["At seven o'clock", "At eight o'clock", "In the morning only"], 0, "'At seven o'clock.'"),
      heard(X("10", "notice"), "When is the birthday?", ["On the fifth of June", "On the fifth of July", "In May"], 0, "'In June, on the fifth of June.'"),
      ch("The keys are ___ the table.", ["on", "in", "at"], 0, "A surface → on."),
      ch("My birthday is ___ March.", ["in", "on", "at"], 0, "Month → in."),
    ],
    [
      ch("School starts ___ 7:00.", ["at", "on", "in"], 0, "Clock time → at."),
      ch("We have English ___ Tuesday.", ["on", "in", "at"], 0, "Day → on."),
      ch("The cat is ___ the bed. (you can't see it, it's below)", ["under", "on", "next"], 0, "below → under."),
      es(ch("«Estoy en la casa de mi abuela»:", ["I'm at my grandma's house.", "I'm on my grandma's house.", "I'm at the my grandma's house."], 0, "at a house / place."), "Para estar en un sitio (casa, escuela) se usa at: at home, at school."),
      ch("I do my homework ___ the evening.", ["in", "on", "at"], 0, "in the evening."),
    ],
    [
      gap("The bank is", "to the supermarket.", ["next"], "next to."),
      gap("I sleep", "night and I study in the afternoon.", ["at"], "at night."),
      tr("Correct the preposition.", "My mum was born on 1985.", ["My mum was born in 1985", "My mum was born in 1985."], "Year → in."),
      dict(X("10", "dict"), ["My birthday is in June"]),
      say("The party is on Saturday at four o'clock.", "on Saturday, at four: short little words."),
    ],
    [
      fix(["My phone is", "in", "the table, next to the lamp."], 1, ["on"], "A surface → on."),
      fix(["We play football", "in", "Saturdays."], 1, ["on"], "Days → on."),
      es(fix(["The film starts", "in", "eight o'clock."], 1, ["at"], "Clock time → at."), "Para horas usa at: at eight o'clock."),
      ch("Which is wrong?", ["See you in Monday!", "See you on Monday!", "See you at five!"], 0, "Days → on."),
      ord("The library is between the bank and the park.", "between A and B."),
    ],
    [
      ctx("A visitor asks: 'Where is the bathroom?'", "Best answer:", ["It's next to the kitchen.", "It's in next the kitchen.", "It's on next kitchen."], 0, "next to."),
      ctx("Friend: 'When is the party?'", "Best answer:", ["On Friday at seven.", "In Friday on seven.", "At Friday in seven."], 0, "on + day · at + time."),
      ch("Describe your city:", ["I live in Barranquilla, near the river.", "I live on Barranquilla, near the river.", "I live at Barranquilla, near the river."], 0, "City → in."),
      ch("Tell a friend about your routine:", ["I go to bed at ten and get up at six in the morning.", "I go to bed in ten and get up at six in the morning.", "I go to bed at ten and get up on six in the morning."], 0, "at ten · in the morning."),
      say("Where's my phone? It's under your bag!", "under: stress the first part."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write the invitation to your birthday party (20 words or more). Say the day, date, time and place. Use on, at and in." },
      { universe: "screens", text: "Describe where things are in your favourite game or app screen (20 words or more). Use in, on, next to, under." },
    ],
    minWords: 20,
    checks: [
      { label: "Time words: at + time, on + day, in + month", pattern: "\\b(at\\s+\\d|at\\s+(noon|night|midnight)|on\\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday|the\\s+\\w+\\s+of)|in\\s+(january|february|march|april|may|june|july|august|september|october|november|december|the\\s+(morning|afternoon|evening)))", min: 2 },
      { label: "Place words (in, on, next to, under, near…)", pattern: "\\b(in|on|next to|under|near|behind|between|in front of)\\s+(the|my|a|our)\\b", min: 1 },
    ],
    rubric: ["I used at for times.", "I used on for days and in for months.", "I said where the place is."],
    model: "Come to my birthday party! It is on Saturday, the tenth of May. It starts at four o'clock in the afternoon. The party is at my house, next to the big park. There is cake!",
  },
};

const questionWords: NodePractice = {
  nodeId: "a1p.question-words",
  explain: "Question words start questions: what (thing), where (place), when (time), who (person), why (reason, answer with because), how (way), how old (age), how many (number), what time (clock time). Word order: question word + be / do + subject: 'Where are you from?' 'What do you like?'",
  pattern: ["What? thing · Where? place · When? time", "Who? person · Why? reason (Because …)", "How old? age · How many? number · What time? hour", "Order: Where + are + you …? What + do + you + verb …?"],
  es: "What = qué · where = dónde · when = cuándo · who = quién · why = por qué · because = porque · how = cómo.",
  steps: [
    [
      heard(X("11", "notice"), "Which question asks about a place?", ["Where are you from?", "How old are you?", "Who is your best friend?"], 0, "where = place."),
      heard(X("11", "notice"), "Which question asks about a person?", ["Who is your best friend?", "When is your birthday?", "Why do you like English?"], 0, "who = person."),
      heard(X("11", "notice"), "What is the answer to 'Why do you like English?'", ["Because it's fun!", "In June, at the start of the year!", "Thirteen, and my sister is ten."], 0, "why → because."),
      ch("___ is your birthday? In July.", ["When", "Where", "Who"], 0, "Time → when."),
      ch("___ is your favourite singer? Karol G.", ["Who", "What", "Where"], 0, "Person → who."),
    ],
    [
      ch("___ do you live? In Pereira.", ["Where", "When", "Why"], 0, "Place → where."),
      ch("___ brothers do you have? Two.", ["How many", "How old", "How much"], 0, "Number → how many."),
      ch("___ are you? I'm fourteen.", ["How old", "How many", "What old"], 0, "Age → how old."),
      es(ch("«¿Por qué estás feliz?» — «Porque es viernes.»", ["Why are you happy? Because it's Friday.", "Because are you happy? Why it's Friday.", "Why you are happy? Because Friday."], 0, "why (question) · because (answer)."), "Why = ¿por qué? · because = porque."),
      ch("Which question is correct?", ["What do you like?", "What you like?", "What like you?"], 0, "What + do + you + verb?"),
    ],
    [
      gap("", "time is it? It's three o'clock.", ["What"], "What time …?"),
      gap("How", "is your brother? He's ten.", ["old"], "How old …?"),
      tr("Write the question for the answer 'I live in Cali.'", "(question about place)", ["Where do you live?", "Where do you live"], "Where do you live?"),
      dict(X("11", "dict"), ["Where are you from?", "Where are you from"]),
      say("What's your name? Where are you from?", "Falling tone at the end of wh- questions."),
    ],
    [
      fix(["Where", "you live", "?"], 1, ["do you live"], "Where + do + you + live?"),
      fix(["Hey,", "who", "is your phone number?"], 1, ["what"], "A number → what."),
      fix(["How", "many years", "are you?"], 1, ["old"], "Age → How old are you?"),
      ch("Which is wrong?", ["What you are doing?", "What are you doing?", "Where are you going?"], 0, "What + are + you …?"),
      ord("What time does the film start?", "What time + does + subject + verb?"),
    ],
    [
      ctx("You meet a new student.", "Best first question:", ["What's your name?", "Who is your name?", "How is your name?"], 0, "What's your name?"),
      ctx("Your friend is sad.", "Best question:", ["Why are you sad?", "Because are you sad?", "What are you sad?"], 0, "Why …?"),
      ch("Ask about your friend's family:", ["How many people are there in your family?", "How much people are in your family?", "How many people there are?"], 0, "How many + plural."),
      ch("Ask about the party:", ["Where is the party and what time does it start?", "Where the party is and what time it starts?", "Where is the party and what time it start?"], 0, "Where is …? What time …?"),
      say("Who is your favourite footballer and why?", "and why: rising then falling."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write five questions for a new student in your class (20 words or more). Use five different question words." },
      { universe: "screens", text: "You can interview your favourite singer or footballer. Write five questions (20 words or more)." },
    ],
    minWords: 20,
    checks: [
      { label: "Different question words", pattern: "\\b(what|where|when|who|why|how)\\b", min: 4 },
      { label: "Question marks", pattern: "\\?", min: 4 },
    ],
    rubric: ["I used different question words.", "I put do / does or be after the question word.", "I wrote question marks."],
    model: "What is your name? How old are you? Where do you live? Who is your best friend? What music do you like? Why do you like it? When is your birthday?",
  },
};

const imperatives: NodePractice = {
  nodeId: "a1p.imperatives",
  explain: "Use the imperative to give instructions or orders. Use the verb with no subject: 'Sit down.' 'Open your books.' Negative: Don't + verb: 'Don't run.' Add please to be polite: 'Please close the door.' 'Close the door, please.' Let's + verb is for suggestions: 'Let's go!'",
  pattern: ["Verb first: Open your book. Listen.", "Negative: Don't + verb: Don't talk.", "Polite: please at the start or end", "Suggestion: Let's + verb: Let's play!"],
  es: "Es como dar órdenes: «abre», «no corras». No lleva 'you': Open the door (no 'You open'). Para «no» usa Don't.",
  steps: [
    [
      heard(X("12", "notice"), "What should the students open?", ["Their books", "The window", "The door"], 0, "'Open your books at page ten.'"),
      heard(X("12", "notice"), "What page?", ["Ten", "Two", "Twelve"], 0, "'At page ten.'"),
      heard(X("12", "notice"), "What can't students use?", ["Their phones", "Their books", "Their pens"], 0, "'Don't use your phones.'"),
      ch("Which is an instruction?", ["Close the door, please.", "He closes the door.", "The door is closed."], 0, "Verb first → instruction."),
      ch("___ run in the corridor!", ["Don't", "No", "Not"], 0, "Negative: Don't + verb."),
    ],
    [
      es(ch("Which is correct?", ["Don't touch that!", "No touch that!", "Not touch that!"], 0, "Don't + verb."), "Para prohibir usa Don't, no 'No'."),
      ch("Which is the most polite?", ["Please sit down.", "Sit down!", "You sit."], 0, "please = polite."),
      ch("Let's ___ to the cinema!", ["go", "going", "to go"], 0, "Let's + base verb."),
      ch("A sign in the library says:", ["Be quiet.", "You are quiet.", "Quieting."], 0, "Be + adjective."),
      ctx("'Turn left at the bank.'", "This is:", ["a direction", "a question", "a story"], 0, "Imperatives give directions."),
    ],
    [
      gap("", "your hands before lunch. (wash)", ["Wash"], "Verb first."),
      gap("", "forget your homework!", ["Don't", "Do not"], "Don't + verb."),
      tr("Make it an instruction (negative).", "You eat in class.", ["Don't eat in class", "Don't eat in class.", "Do not eat in class"], "Don't + verb."),
      dict(X("12", "dict"), ["Open your books at page ten"]),
      say("Please listen and repeat. Don't talk.", "Don't: strong and clear."),
    ],
    [
      fix(["Class,", "you open", "the window, please."], 1, ["open"], "No you in instructions."),
      fix(["Please,", "not", "shout in the library."], 1, ["don't", "do not"], "Don't + verb."),
      fix(["Let's", "to play", "basketball!"], 1, ["play"], "Let's + verb (no to)."),
      ch("Which is wrong?", ["No run, please!", "Don't run, please!", "Please walk."], 0, "Don't run."),
      ord("Please turn off your phones.", "Please + verb …"),
    ],
    [
      ctx("A tourist asks for the station.", "Best answer:", ["Go straight and turn right.", "You going straight.", "Going straight and turning right."], 0, "Verb first."),
      ctx("Your little brother wants to touch the stove.", "Best sentence:", ["Don't touch it! It's hot!", "No touch it! It's hot!", "You not touch it! It's hot!"], 0, "Don't + verb."),
      ch("You want to go to the park with friends:", ["Let's go to the park!", "Let's going to the park!", "Let we go to the park!"], 0, "Let's + verb."),
      ch("Write a class rule:", ["Listen to the teacher and don't use phones.", "Listening the teacher and no use phones.", "You listen the teacher and not use phones."], 0, "Verb first · Don't + verb."),
      say("Come in and sit down, please.", "please at the end: soft."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write six rules for your classroom or your house (20 words or more). Use at least two Don't." },
      { universe: "science", text: "Write instructions for a simple recipe or experiment (20 words or more). Start each step with a verb." },
    ],
    minWords: 20,
    checks: [
      { label: "Instructions starting with a verb", pattern: "(^|[.!]\\s+)(please\\s+)?(be|listen|open|close|sit|stand|wash|put|take|bring|clean|help|turn|go|come|write|read|eat|mix|add|cut|wait|use|speak|raise|keep|say|look|check|switch)\\b", min: 3 },
      { label: "Don't + verb", pattern: "\\b(don't|do not)\\s+\\w+", min: 2 },
    ],
    rubric: ["I started with a verb.", "I used Don't for negative rules.", "I used please to be polite."],
    model: "Rules for our class: Listen to the teacher. Raise your hand to speak. Don't use your phone. Please put your rubbish in the bin. Don't run in the classroom. Help your classmates.",
  },
};

const wasWere: NodePractice = {
  nodeId: "a1p.was-were-introduction",
  explain: "Was and were are the past of be. I / he / she / it was; you / we / they were. Negative: wasn't, weren't. Question: Were you …? Was it …? Use them with past time words: yesterday, last week, in 2020.",
  pattern: ["I / he / she / it was", "you / we / they were", "Negative: wasn't · weren't", "Question: Was it …? Were you …?"],
  es: "Was / were = «era / estaba / fue / estuvo». Yesterday I was at home = ayer estuve en casa.",
  steps: [
    [
      heard(X("13", "notice"), "Where was the speaker yesterday?", ["At grandma's house", "At the beach", "At home"], 0, "'I was at my grandma's house.'"),
      heard(X("13", "notice"), "What was the weather like?", ["Very hot", "Cold", "Rainy"], 0, "'It was very hot.'"),
      heard(X("13", "notice"), "Where were they all day?", ["In the garden", "In the kitchen", "At the beach"], 0, "'We were in the garden all day.'"),
      ch("Yesterday I ___ at school.", ["was", "were", "am"], 0, "I → was."),
      ch("They ___ very happy last night.", ["were", "was", "are"], 0, "they → were."),
    ],
    [
      ch("The film ___ really good.", ["was", "were", "is been"], 0, "The film = it → was."),
      ch("Make it negative: 'We were tired.'", ["We weren't tired.", "We wasn't tired.", "We didn't tired."], 0, "were + not → weren't."),
      ch("Which question is correct?", ["Were you at the party?", "Was you at the party?", "Did you were at the party?"], 0, "Were + you …?"),
      es(ch("«Ayer estuve enfermo»:", ["Yesterday I was ill.", "Yesterday I am ill.", "Yesterday I were ill."], 0, "I + was."), "Para el pasado de be: I was, no 'I am' ni 'I were'."),
      ch("Which word shows the past?", ["last week", "now", "tomorrow"], 0, "last week = past."),
    ],
    [
      gap("My parents", "at work yesterday.", ["were"], "parents = they → were."),
      gap("It", "cold yesterday, so I wore a jacket.", ["was"], "it → was."),
      tr("Put it in the past (yesterday).", "She is at home.", ["She was at home yesterday", "Yesterday she was at home", "She was at home"], "is → was."),
      dict(X("13", "dict"), ["My cousins were there too"]),
      say("Were you at home? No, I wasn't.", "wasn't: say the t softly."),
    ],
    [
      fix(["We", "was", "at the beach last summer."], 1, ["were"], "we → were."),
      fix(["The test", "were", "easy yesterday."], 1, ["was"], "the test = it → was."),
      fix(["Last night I", "am", "very tired."], 1, ["was"], "Past → was."),
      ch("Which is wrong?", ["You was late yesterday.", "You were late yesterday.", "He was late yesterday."], 0, "you → were."),
      ord("Where were you last Saturday?", "Where + were + you …?"),
    ],
    [
      ctx("Monday at school. Friend: 'How was your weekend?'", "Best answer:", ["It was great! I was at the beach.", "It is great! I am at the beach.", "It were great!"], 0, "Past: was."),
      ctx("Teacher: 'Were you sick yesterday?'", "You were. Best answer:", ["Yes, I was.", "Yes, I were.", "Yes, I did."], 0, "Yes, I was."),
      ch("Talk about a concert:", ["The concert was amazing and the people were very friendly.", "The concert were amazing and the people was very friendly.", "The concert was amazing and the people was very friendly."], 0, "concert → was · people → were."),
      ch("Ask your friend:", ["Was the match exciting?", "Were the match exciting?", "Did the match was exciting?"], 0, "Was + it / the match …?"),
      say("It was hot and we were in the pool all day.", "was / were: short and weak."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about last weekend (20 words or more). Where were you? Who was with you? How was it? Use was, were and one negative." },
      { universe: "past", text: "Write about your first day at school (20 words or more). Use was, were, wasn't or weren't." },
    ],
    minWords: 20,
    checks: [
      { label: "was / were", pattern: "\\b(was|were)\\b", min: 3 },
      { label: "A negative (wasn't, weren't)", pattern: "\\b(wasn't|weren't|was not|were not)\\b", min: 1 },
      { label: "A past time word", pattern: "\\b(yesterday|last\\s+\\w+|\\w+\\s+ago)\\b", min: 1 },
    ],
    rubric: ["I used was for I / he / she / it.", "I used were for you / we / they.", "I used a past time word."],
    model: "Last weekend I was at my uncle's farm. My cousins were there too. The weather was sunny, but it wasn't very hot. The horses were beautiful. It was a great weekend.",
  },
};

export const A1P_GRAMMAR: NodePractice[] = [be, presentSimple, haveGot, can, thereIs, possessives, thisThat, articles, presentCont, prepositions, questionWords, imperatives, wasWere];
