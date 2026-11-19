/* A1 Grammar. Five steps per skill. Original content for Bandwidth EFL. For teacher review.
   Bridge band between Pre-A1 and A1+: short sentences, Spanish notes (es) after a wrong answer. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, es, fix, gap, heard, ord, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/a1g-${n}-${k}.mp3`;

export const A1_GRAMMAR_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Are you new here? Yes, I am. Are you in class 6B? No, I'm not. I'm in 6A. Is your teacher Mr Green? Yes, he is. He isn't strict. He's very nice." },
  { file: X("01", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "No, I'm not. I'm in 6A." },
  { file: X("02", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "This is my friend Sara. Her bag is pink. This is my friend Leo. His bag is green. What's your name? And what colour is your bag? My bag is blue." },
  { file: X("02", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "His bag is green." },
  { file: X("03", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "In my town there is a big park. There is a school and there are two cafés. There are lots of trees. There isn't a cinema, but there is a swimming pool." },
  { file: X("03", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "There are two cafés in my town." },
  { file: X("04", "notice"), voice: "3f6pec3wODJsjTqtcNI2", script: "I can swim and I can ride a bike. I can't play the piano. My sister can sing very well. Can you dance? No, I can't. Can you cook? Yes, I can!" },
  { file: X("04", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "My sister can sing very well." },
  { file: X("05", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "We live in a flat. I get up at seven. I walk to school with my friends. We play football at break. In the evening I do my homework and I watch TV." },
  { file: X("05", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "We play football at break." },
  { file: X("06", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "I have a dog. My brother has a cat. My mum has a red car. My grandparents have a big garden. Has your friend got a pet? Yes, she has a rabbit." },
  { file: X("06", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "My brother has a cat." },
  { file: X("07", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Who is your best friend? Her name is Julia. Where is she from? She's from Spain. How old is she? She's eleven. What is her favourite food? Pizza! How many brothers has she got? Two." },
  { file: X("07", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Where is she from?" },
];

const beQ: NodePractice = {
  nodeId: "a1.be-questions-and-negatives",
  explain: "To ask a question with be, put am, is or are first: 'Are you ten?' 'Is he your brother?' Short answers: 'Yes, I am.' 'No, I'm not.' 'Yes, he is.' 'No, he isn't.' Negatives: I'm not, he isn't, they aren't.",
  pattern: ["Are you …? Yes, I am. / No, I'm not.", "Is he / she / it …? Yes, he is. / No, he isn't.", "Are they …? Yes, they are. / No, they aren't.", "Negative: I'm not · he isn't · we aren't"],
  es: "Para preguntar, el verbo va primero: Are you ten? (¿Tienes diez años?). Las respuestas cortas son muy comunes: Yes, I am.",
  steps: [
    [
      heard(X("01", "notice"), "Is the student new?", ["Yes", "No", "We don't know"], 0, "'Are you new here? Yes, I am.'"),
      heard(X("01", "notice"), "Which class is the student in?", ["6A", "6B", "6C"], 0, "'No, I'm not. I'm in 6A.'"),
      heard(X("01", "notice"), "Is Mr Green strict?", ["No, he isn't.", "Yes, he is.", "We don't know."], 0, "'He isn't strict.'"),
      ch("___ you happy?", ["Are", "Is", "Am"], 0, "Are you …?"),
      ch("___ she your sister?", ["Is", "Are", "Am"], 0, "Is she …?"),
    ],
    [
      es(ch("Which question is correct?", ["Are you tired?", "You are tired?", "Do you tired?"], 0, "Verb first: Are you …?"), "La pregunta empieza con el verbo: Are you …?"),
      ch("Is he your teacher? Yes, he ___.", ["is", "are", "isn't"], 0, "Yes, he is."),
      ch("Are they at home? No, they ___.", ["aren't", "isn't", "not"], 0, "No, they aren't."),
      es(ch("Which short answer is correct?", ["Yes, I am.", "Yes, I'm.", "Yes, I is."], 0, "Yes, I am (no short form at the end)."), "Al final no se usa I'm: Yes, I am."),
      ch("Make it negative: 'It is cold.'", ["It isn't cold.", "It not cold.", "It don't cold."], 0, "is + not → isn't."),
    ],
    [
      tr("Make it a question.", "She is eleven.", ["Is she eleven?"], "Is + she + …?"),
      tr("Make it negative.", "They are in the park.", ["They aren't in the park", "They are not in the park", "They're not in the park"], "are + not."),
      gap("Are you from Colombia? Yes, I", ".", ["am"], "Yes, I am."),
      dict(X("01", "dict"), ["No, I'm not. I'm in 6A", "No, I am not. I am in 6A", "No I'm not I'm in 6A"]),
      say("Are you new here? Yes, I am.", "Up at the end of the question."),
    ],
    [
      fix(["You", "are", "ready?"], 0, ["Are you"], "Question: Are you ready?"),
      es(fix(["No, he", "not", "my brother."], 1, ["isn't", "is not", "'s not"], "he isn't."), "Negativo con be: he isn't."),
      fix(["Is", "they", "your friends?"], 0, ["Are"], "they → are."),
      ord("Is your mum a teacher?", "Is + your mum + a teacher?"),
      ord("We aren't late.", "We + aren't + late."),
    ],
    [
      ctx("A new student asks: 'Are you in 6A too?' You are.", "Best answer:", ["Yes, I am.", "Yes, I'm.", "Yes, are."], 0, "Yes, I am."),
      ctx("You want to know if the shop is open.", "Best question:", ["Is the shop open?", "The shop is open?", "Does the shop open is?"], 0, "Is + the shop + open?"),
      ctx("Your friend asks: 'Is your brother eight?' He is nine.", "Best answer:", ["No, he isn't. He's nine.", "No, he not. He nine.", "No, he aren't."], 0, "No, he isn't. He's nine."),
      ch("Which is correct?", ["I'm not hungry.", "I amn't hungry.", "I no am hungry."], 0, "I'm not."),
      say("Is it your bag? No, it isn't. It's Ana's.", "Ask and answer."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write five questions for a new classmate with Are you …? and Is your …? (20 words or more). Answer two of them." },
      { universe: "screens", text: "Write a quiz about a game or a film (20 words or more). Use Is it …? Are they …? and short answers." },
    ],
    minWords: 20,
    checks: [
      { label: "Questions with be (Are you …? Is he …?)", pattern: "\\b(am|is|are)\\s+(I|you|he|she|it|we|they|your|my|the)\\b[^.?!]*\\?", min: 3 },
      { label: "A negative (isn't, aren't, I'm not)", pattern: "\\b(isn't|aren't|not)\\b", min: 1 },
    ],
    rubric: ["My questions start with Are or Is.", "I used short answers (Yes, I am).", "I wrote one negative."],
    model: "Are you new here? Yes, I am. Are you eleven? No, I'm not. I'm twelve. Is your teacher nice? Yes, she is. Is your school big? No, it isn't.",
  },
};

const possessives: NodePractice = {
  nodeId: "a1.my-your-his-her",
  explain: "Say whose thing it is: my (mine), your (yours), his (a boy's), her (a girl's), our, their. 'This is her bag.' 'What's your name?' In Spanish 'su' can be his, her or their, but English chooses.",
  pattern: ["I → my · you → your", "he → his · she → her", "we → our · they → their", "His bag (a boy) · Her bag (a girl)"],
  es: "En español 'su mochila' puede ser de él o de ella. En inglés: his bag (de él), her bag (de ella).",
  steps: [
    [
      heard(X("02", "notice"), "What colour is Sara's bag?", ["Pink", "Green", "Blue"], 0, "'Her bag is pink.'"),
      heard(X("02", "notice"), "What colour is Leo's bag?", ["Green", "Pink", "Blue"], 0, "'His bag is green.'"),
      heard(X("02", "notice"), "What colour is the speaker's bag?", ["Blue", "Green", "Pink"], 0, "'My bag is blue.'"),
      ch("This is Tom. ___ dog is big.", ["His", "Her", "My"], 0, "A boy → his."),
      ch("This is Ana. ___ cat is small.", ["Her", "His", "Your"], 0, "A girl → her."),
    ],
    [
      es(ch("Laura has a phone. It's ___ phone.", ["her", "his", "she"], 0, "Laura → her."), "De ella: her."),
      es(ch("Pablo has a bike. It's ___ bike.", ["his", "her", "he"], 0, "Pablo → his."), "De él: his."),
      ch("What's ___ name?", ["your", "you", "you're"], 0, "your name."),
      ch("We have a dog. ___ dog is black.", ["Our", "We", "Us"], 0, "we → our."),
      ch("My friends have a car. ___ car is red.", ["Their", "They", "There"], 0, "they → their."),
    ],
    [
      gap("My mum is a nurse.", "name is Carmen.", ["Her"], "mum → her."),
      gap("My dad is tall.", "name is Juan.", ["His"], "dad → his."),
      tr("Use his or her.", "Maria's book", ["her book"], "Maria → her."),
      dict(X("02", "dict"), ["His bag is green"]),
      say("This is my brother. His name is Mateo.", "his for a boy."),
    ],
    [
      es(fix(["My sister loves", "his", "new shoes."], 1, ["her"], "sister → her."), "Hermana → her."),
      fix(["What is", "you", "name?"], 1, ["your"], "your name."),
      fix(["My grandpa and", "her", "dog."], 1, ["his"], "grandpa → his."),
      ord("This is our classroom.", "This is + our + classroom."),
      ord("What is her name?", "What is + her + name?"),
    ],
    [
      ctx("You show a photo of your uncle's house.", "Best sentence:", ["This is my uncle and his house.", "This is my uncle and her house.", "This is my uncle and he house."], 0, "uncle → his."),
      ctx("You find a pink pencil case. It belongs to Lucía.", "Best sentence:", ["It's her pencil case.", "It's his pencil case.", "It's she pencil case."], 0, "Lucía → her."),
      ch("Which is correct?", ["Their house is big.", "There house is big.", "They house is big."], 0, "their = belonging to them."),
      ch("Which is correct?", ["Is this your pen?", "Is this you pen?", "Is this yours pen?"], 0, "your + pen."),
      say("Her name is Sofía and his name is Diego.", "her for a girl, his for a boy."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about three people in your family and one thing each of them has (20 words or more). Use my, his, her and our." },
      { universe: "screens", text: "Describe three characters from a game or series and their things (20 words or more). Use his, her and their." },
    ],
    minWords: 20,
    checks: [
      { label: "his or her", pattern: "\\b(his|her)\\b", min: 2 },
      { label: "my, your, our or their", pattern: "\\b(my|your|our|their)\\b", min: 1 },
    ],
    rubric: ["I used his for a boy or man.", "I used her for a girl or woman.", "I wrote your (not you) before a thing."],
    model: "This is my family. My dad is a driver. His car is white. My mum is a teacher. Her school is big. Our house is small, but our garden is nice.",
  },
};

const thereIs: NodePractice = {
  nodeId: "a1.there-is-a-there-are-two",
  explain: "Say what is in a place: 'There is a park' (one thing). 'There are two cafés' (more than one). Negative: There isn't a cinema. There aren't any shops. Question: Is there a pool? Are there any trees?",
  pattern: ["There is a … (one)", "There are two / some … (more)", "There isn't a … · There aren't any …", "Is there a …? · Are there any …?"],
  es: "There is / there are = hay. There is para uno, there are para varios.",
  steps: [
    [
      heard(X("03", "notice"), "What is big in the town?", ["The park", "The school", "The pool"], 0, "'There is a big park.'"),
      heard(X("03", "notice"), "How many cafés are there?", ["Two", "One", "Lots"], 0, "'There are two cafés.'"),
      heard(X("03", "notice"), "What isn't in the town?", ["A cinema", "A school", "A swimming pool"], 0, "'There isn't a cinema.'"),
      ch("There ___ a dog in the garden.", ["is", "are", "have"], 0, "one dog → is."),
      ch("There ___ three books on the desk.", ["are", "is", "has"], 0, "three books → are."),
    ],
    [
      es(ch("Which is correct?", ["There is a park.", "There are a park.", "Has a park."], 0, "one → there is."), "Hay un parque = There is a park."),
      es(ch("Which is correct?", ["There are two cats.", "There is two cats.", "Have two cats."], 0, "two → there are."), "No digas 'have' para 'hay'."),
      ch("___ there a bathroom here?", ["Is", "Are", "Have"], 0, "Is there a …?"),
      ch("Are there any apples? No, there ___.", ["aren't", "isn't", "not"], 0, "No, there aren't."),
      ch("Make it negative: 'There is a TV.'", ["There isn't a TV.", "There not a TV.", "There aren't a TV."], 0, "is → isn't."),
    ],
    [
      gap("There", "a big tree in my garden.", ["is", "'s"], "one tree → is."),
      gap("There", "five people in my family.", ["are"], "five → are."),
      tr("Make it a question.", "There is a pool.", ["Is there a pool?"], "Is there …?"),
      dict(X("03", "dict"), ["There are two cafés in my town", "There are two cafes in my town", "There are 2 cafés in my town"]),
      say("There is a park and there are two cafés.", "is for one, are for two."),
    ],
    [
      es(fix(["In my school", "have", "a library."], 1, ["there is"], "Hay = there is."), "Hay = there is, no 'have'."),
      fix(["There", "is", "two windows."], 1, ["are"], "two → are."),
      fix(["There", "are", "a cat on the bed."], 1, ["is"], "a cat → is."),
      ord("Is there a shop near here?", "Is there + a shop + near here?"),
      ord("There aren't any chairs.", "There aren't + any chairs."),
    ],
    [
      ctx("A tourist asks you about your town. It has one museum.", "Best answer:", ["There is a museum.", "There are a museum.", "It has museums."], 0, "There is a museum."),
      ctx("You want to know if there is a toilet.", "Best question:", ["Is there a toilet here?", "There is a toilet here?", "Have a toilet here?"], 0, "Is there …?"),
      ctx("Your classroom has 30 chairs.", "Best sentence:", ["There are thirty chairs.", "There is thirty chairs.", "Has thirty chairs."], 0, "thirty → are."),
      ch("Which is correct?", ["There aren't any shops.", "There isn't any shops.", "There not shops."], 0, "shops → aren't."),
      say("Is there a park near your house? Yes, there is.", "Ask and answer."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe your town or neighbourhood (20 words or more). Use there is, there are and one negative." },
      { universe: "screens", text: "Describe a level in a game (20 words or more). Use there is, there are and one negative." },
    ],
    minWords: 20,
    checks: [
      { label: "There is / there's", pattern: "\\bthere is\\b|\\bthere's\\b", min: 1 },
      { label: "There are", pattern: "\\bthere are\\b", min: 1 },
      { label: "A negative (isn't, aren't)", pattern: "\\bthere (isn't|aren't|is not|are not)\\b", min: 1 },
    ],
    rubric: ["I used there is for one thing.", "I used there are for more things.", "I didn't use have for 'hay'."],
    model: "In my town there is a big park and there are two schools. There are lots of shops. There isn't a cinema, but there is a swimming pool.",
  },
};

const can: NodePractice = {
  nodeId: "a1.can-for-ability",
  explain: "Use can to say what you are able to do: 'I can swim.' Negative: can't. Question: 'Can you dance?' 'Yes, I can.' / 'No, I can't.' The verb after can has no -s and no 'to': 'She can sing.'",
  pattern: ["I / you / he / she / we / they can swim", "Negative: can't (cannot)", "Can you …? Yes, I can. / No, I can't.", "Not: she cans · can to swim"],
  es: "can = poder / saber hacer algo. No cambia: she can (no 'she cans'). Después de can no va 'to'.",
  steps: [
    [
      heard(X("04", "notice"), "What can the speaker do?", ["Swim and ride a bike", "Play the piano", "Dance"], 0, "'I can swim and I can ride a bike.'"),
      heard(X("04", "notice"), "What can't the speaker do?", ["Play the piano", "Swim", "Cook"], 0, "'I can't play the piano.'"),
      heard(X("04", "notice"), "Who can sing very well?", ["The sister", "The speaker", "The friend"], 0, "'My sister can sing very well.'"),
      ch("I ___ swim.", ["can", "cans", "can to"], 0, "I can swim."),
      ch("She ___ play the guitar.", ["can", "cans", "can to"], 0, "She can (no -s)."),
    ],
    [
      es(ch("Which is correct?", ["He can run fast.", "He cans run fast.", "He can to run fast."], 0, "can + verb."), "Después de can, el verbo solo: can run."),
      ch("Can you speak English? Yes, I ___.", ["can", "do", "am"], 0, "Yes, I can."),
      ch("Can your dog swim? No, it ___.", ["can't", "isn't", "don't"], 0, "No, it can't."),
      ch("Which question is correct?", ["Can you cook?", "You can cook?", "Do you can cook?"], 0, "Can + you + verb?"),
      ch("Fish can't ___.", ["walk", "walks", "to walk"], 0, "can't + verb."),
    ],
    [
      gap("Birds", "fly.", ["can"], "Birds can fly."),
      gap("I", "drive. I'm only eleven!", ["can't", "cannot", "can not"], "can't = not able."),
      tr("Make it a question.", "You can ride a horse.", ["Can you ride a horse?"], "Can + you …?"),
      dict(X("04", "dict"), ["My sister can sing very well"]),
      say("I can swim, but I can't dance.", "Stress can't: CAN'T."),
    ],
    [
      fix(["My brother", "cans", "skate."], 1, ["can"], "can (no -s)."),
      es(fix(["I can", "to play", "chess."], 1, ["play"], "can + play (no to)."), "Sin 'to': can play."),
      fix(["You", "can", "help me?"], 0, ["Can you"], "Question: Can you help me?"),
      ord("Can you play the guitar?", "Can + you + play + …?"),
      ord("My cat can't swim.", "My cat + can't + swim."),
    ],
    [
      ctx("A coach asks: 'Can you play football?' You can.", "Best answer:", ["Yes, I can.", "Yes, I do.", "Yes, I can play."], 0, "Short answer: Yes, I can."),
      ctx("You want to know if your friend can draw.", "Best question:", ["Can you draw?", "Do you can draw?", "You can draw?"], 0, "Can you …?"),
      ctx("Your little brother is four. He can't read.", "Best sentence:", ["He can't read.", "He doesn't can read.", "He not can read."], 0, "He can't …"),
      ch("Which is correct?", ["Penguins can't fly.", "Penguins don't can fly.", "Penguins can't to fly."], 0, "can't + verb."),
      say("Can you dance? No, I can't, but I can sing!", "Ask and answer."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write what you and your family can and can't do (20 words or more)." },
      { universe: "science", text: "Write about three animals: what they can and can't do (20 words or more)." },
    ],
    minWords: 20,
    checks: [
      { label: "can + verb", pattern: "\\bcan\\s+(?!not\\b|'t)\\w+", min: 2 },
      { label: "can't or cannot", pattern: "\\bcan't\\b|\\bcannot\\b", min: 1 },
    ],
    rubric: ["I used can and can't.", "I didn't write cans or can to.", "I wrote about three people or animals."],
    model: "I can swim and I can play football, but I can't sing. My mum can cook very well. My little brother can't ride a bike.",
  },
};

const presentSimple: NodePractice = {
  nodeId: "a1.present-simple-i-you-we-they",
  explain: "Use the present simple for things you do every day: 'I get up at seven.' 'We play football.' With I, you, we and they the verb doesn't change. Negative: I don't … Question: Do you …?",
  pattern: ["I / you / we / they + verb: I play, we live", "Negative: I don't play", "Question: Do you play?", "Yes, I do. / No, I don't."],
  es: "Para la rutina usa el presente simple. Con I, you, we, they el verbo no cambia: I play, we play.",
  steps: [
    [
      heard(X("05", "notice"), "Where do they live?", ["In a flat", "In a big house", "On a farm"], 0, "'We live in a flat.'"),
      heard(X("05", "notice"), "When does the speaker get up?", ["At seven", "At six", "At eight"], 0, "'I get up at seven.'"),
      heard(X("05", "notice"), "What do they play at break?", ["Football", "Basketball", "Video games"], 0, "'We play football at break.'"),
      ch("I ___ to school by bus.", ["go", "goes", "going"], 0, "I go."),
      ch("We ___ in Bogotá.", ["live", "lives", "living"], 0, "We live."),
    ],
    [
      es(ch("Which is correct?", ["I don't like fish.", "I no like fish.", "I not like fish."], 0, "I don't + verb."), "Negativo: I don't …"),
      ch("___ you play an instrument?", ["Do", "Are", "Is"], 0, "Do you …?"),
      ch("Do you like rice? Yes, I ___.", ["do", "like", "am"], 0, "Yes, I do."),
      ch("They ___ TV in the evening.", ["watch", "watches", "watching"], 0, "They watch."),
      ch("Which is a daily routine?", ["I brush my teeth every morning.", "I am in Spain now.", "I can swim."], 0, "Routine → present simple."),
    ],
    [
      gap("I", "my homework after school.", ["do"], "I do my homework."),
      gap("We don't", "on Sundays.", ["study", "work", "go to school"], "don't + verb."),
      tr("Make it a question.", "You walk to school.", ["Do you walk to school?"], "Do + you + verb?"),
      dict(X("05", "dict"), ["We play football at break"]),
      say("I get up at seven and I go to school at half past seven.", "Your own morning."),
    ],
    [
      es(fix(["I", "no", "eat meat."], 1, ["don't"], "I don't eat."), "Usa don't, no 'no'."),
      fix(["You", "like", "pizza?"], 0, ["Do you"], "Question: Do you like …?"),
      fix(["We", "goes", "to the park."], 1, ["go"], "we → go."),
      ord("Do you live near here?", "Do + you + live + …?"),
      ord("I have breakfast at seven.", "I + have breakfast + at seven."),
    ],
    [
      ctx("Your friend asks: 'Do you like music?' You love it.", "Best answer:", ["Yes, I do!", "Yes, I like.", "Yes, I am."], 0, "Yes, I do."),
      ctx("You want to know what time your friend gets up.", "Best question:", ["What time do you get up?", "What time you get up?", "What time are you get up?"], 0, "What time do you …?"),
      ctx("You never drink coffee.", "Best sentence:", ["I don't drink coffee.", "I no drink coffee.", "I not drink coffee."], 0, "I don't drink …"),
      ch("Which is correct?", ["They walk to school.", "They walks to school.", "They walking to school."], 0, "they → walk."),
      say("Do you play video games? Yes, I do. I play every day.", "Ask and answer."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about a normal day for you and your family (20 words or more). Use I, we and one negative (don't)." },
      { universe: "screens", text: "Write about you and your friends' free time (20 words or more): what do you play, watch and do? Use one negative." },
    ],
    minWords: 20,
    checks: [
      { label: "I or we + a verb", pattern: "\\b(I|we|they|you)\\s+(get|go|have|play|walk|watch|do|eat|drink|live|like|read|study|sleep|listen|take|make|brush|ride|swim|visit|help|clean|cook|come|see|talk|use|work|wake|start|finish)\\b", min: 3 },
      { label: "don't", pattern: "\\bdon't\\b|\\bdo not\\b", min: 1 },
    ],
    rubric: ["I wrote about every day.", "I used don't (not no) for negatives.", "I wrote times: at seven, after school."],
    model: "I get up at six. I have breakfast with my family. We walk to school. After school I do my homework and I play video games. I don't watch TV.",
  },
};

const haveHas: NodePractice = {
  nodeId: "a1.have-and-has",
  explain: "Use have with I, you, we and they: 'I have a dog.' Use has with he, she and it: 'My brother has a cat.' Question: 'Do you have …?' 'Does she have …?' In British English you also hear 'has she got …?'",
  pattern: ["I / you / we / they have", "he / she / it has", "Do you have a pet? Yes, I do.", "Does he have a bike? Yes, he does."],
  es: "have = tener. Con he, she, it cambia a has: she has.",
  steps: [
    [
      heard(X("06", "notice"), "What pet does the brother have?", ["A cat", "A dog", "A rabbit"], 0, "'My brother has a cat.'"),
      heard(X("06", "notice"), "What does the mum have?", ["A red car", "A big garden", "A rabbit"], 0, "'My mum has a red car.'"),
      heard(X("06", "notice"), "What pet does the friend have?", ["A rabbit", "A cat", "A dog"], 0, "'Yes, she has a rabbit.'"),
      ch("My sister ___ long hair.", ["has", "have", "is"], 0, "she → has."),
      ch("We ___ a small house.", ["have", "has", "are"], 0, "we → have."),
    ],
    [
      es(ch("Which is correct?", ["He has two brothers.", "He have two brothers.", "He haves two brothers."], 0, "he → has."), "Con he/she: has."),
      ch("They ___ a big dog.", ["have", "has", "having"], 0, "they → have."),
      ch("___ you have a phone?", ["Do", "Does", "Are"], 0, "Do you have …?"),
      ch("___ your dad have a car?", ["Does", "Do", "Is"], 0, "Does + he/she …?"),
      ch("Does she have a sister? Yes, she ___.", ["does", "has", "is"], 0, "Yes, she does."),
    ],
    [
      gap("My cat", "green eyes.", ["has"], "it → has."),
      gap("I", "two pencils.", ["have"], "I → have."),
      tr("Change I to She.", "I have a bike.", ["She has a bike"], "She has."),
      dict(X("06", "dict"), ["My brother has a cat"]),
      say("I have a dog and my sister has a rabbit.", "have for I, has for she."),
    ],
    [
      fix(["My mum", "have", "a new job."], 1, ["has"], "mum → has."),
      fix(["We", "has", "a garden."], 1, ["have"], "we → have."),
      es(fix(["Does", "he has", "a bike?"], 1, ["he have"], "Does he have …?"), "Con does, el verbo vuelve a have."),
      ord("Does your friend have a pet?", "Does + your friend + have + …?"),
      ord("My grandma has a big house.", "My grandma + has + a big house."),
    ],
    [
      ctx("Your friend asks: 'Do you have any brothers?' You have one.", "Best answer:", ["Yes, I have one brother.", "Yes, I has one brother.", "Yes, I am one brother."], 0, "I have."),
      ctx("You describe your teacher. She has glasses.", "Best sentence:", ["She has glasses.", "She have glasses.", "She is glasses."], 0, "She has."),
      ch("Which question is correct?", ["Does it have a garden?", "Does it has a garden?", "Do it have a garden?"], 0, "Does + it + have?"),
      ch("Which is correct?", ["My parents have a car.", "My parents has a car.", "My parents is a car."], 0, "parents = they → have."),
      say("Does your brother have a phone? Yes, he does.", "Ask and answer."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about what people in your family have (20 words or more). Use have and has." },
      { universe: "science", text: "Describe three animals and what they have: legs, wings, tails (20 words or more). Use have and has." },
    ],
    minWords: 20,
    checks: [
      { label: "have", pattern: "\\bhave\\b", min: 1 },
      { label: "has", pattern: "\\bhas\\b", min: 2 },
    ],
    rubric: ["I used has with he, she and it.", "I used have with I, we and they.", "I wrote does … have in questions."],
    model: "I have a big family. My dad has a motorbike. My sister has a pet rabbit. My grandparents have a farm. They have two horses.",
  },
};

const questions: NodePractice = {
  nodeId: "a1.what-where-who-how-many",
  explain: "Ask for information with question words: What (a thing), Where (a place), Who (a person), When (a time), How old (age), How many (number). Put the question word first: 'Where is she from?'",
  pattern: ["What is your name?", "Where are you from?", "Who is your best friend?", "When is your birthday?", "How old are you? · How many brothers have you got?"],
  es: "What = qué, Where = dónde, Who = quién, When = cuándo, How many = cuántos.",
  steps: [
    [
      heard(X("07", "notice"), "Who is the best friend?", ["Julia", "Spain", "Pizza"], 0, "'Her name is Julia.'"),
      heard(X("07", "notice"), "Where is Julia from?", ["Spain", "Italy", "Colombia"], 0, "'She's from Spain.'"),
      heard(X("07", "notice"), "How many brothers has Julia got?", ["Two", "Eleven", "One"], 0, "'Two.'"),
      ch("___ is your birthday? In May.", ["When", "Where", "Who"], 0, "Time → when."),
      ch("___ do you live? In Medellín.", ["Where", "What", "When"], 0, "Place → where."),
    ],
    [
      ch("___ is your teacher? Mrs Ruiz.", ["Who", "What", "Where"], 0, "Person → who."),
      ch("___ is your favourite colour? Green.", ["What", "Who", "Where"], 0, "Thing → what."),
      es(ch("___ cousins have you got? Five.", ["How many", "How old", "How much"], 0, "Number → how many."), "¿Cuántos? = How many."),
      ch("___ is your grandma? She's seventy.", ["How old", "How many", "When"], 0, "Age → how old."),
      ch("Which question is correct?", ["Where is the library?", "Where the library is?", "The library where is?"], 0, "Where + is + the library?"),
    ],
    [
      gap("", "is your name? I'm Paula.", ["What", "What's"], "What is your name?"),
      gap("", "are you from? I'm from Cali.", ["Where"], "Where are you from?"),
      tr("Write the question for the answer: 'I'm twelve.'", "I'm twelve.", ["How old are you?"], "How old are you?"),
      dict(X("07", "dict"), ["Where is she from?", "Where's she from?"]),
      say("What's your name? Where are you from? How old are you?", "Three questions for a new friend."),
    ],
    [
      fix(["Who", "is your favourite food?"], 0, ["What"], "A thing → what."),
      fix(["How", "much", "brothers have you got?"], 1, ["many"], "brothers (you can count) → how many."),
      fix(["Where", "you are", "from?"], 1, ["are you"], "Question order: Where are you from?"),
      ord("When is your birthday?", "When + is + your birthday?"),
      ord("Who is your best friend?", "Who + is + your best friend?"),
    ],
    [
      ctx("You want to know your new friend's city.", "Best question:", ["Where do you live?", "What do you live?", "Who do you live?"], 0, "Place → where."),
      ctx("You want to know the number of students in the class.", "Best question:", ["How many students are there?", "How old students are there?", "What students are there?"], 0, "Number → how many."),
      ctx("Answer: 'My birthday is on the fifth of June.'", "What was the question?", ["When is your birthday?", "Where is your birthday?", "Who is your birthday?"], 0, "Time → when."),
      ch("Which is correct?", ["What is your favourite sport?", "What your favourite sport is?", "Which is you favourite sport?"], 0, "What + is + your …?"),
      say("Who is your favourite singer? Why do you like her?", "Ask a friend."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write six questions to interview a new classmate (20 words or more). Use what, where, who, when, how old and how many." },
      { universe: "screens", text: "Write six questions for your favourite YouTuber or game creator (20 words or more)." },
    ],
    minWords: 20,
    checks: [
      { label: "Different question words", pattern: "\\b(what|where|who|when|how old|how many)\\b", min: 4 },
      { label: "Question marks", pattern: "\\?", min: 4 },
    ],
    rubric: ["I used four different question words.", "My questions start with the question word.", "I wrote question marks."],
    model: "What is your name? Where are you from? How old are you? Who is your best friend? When is your birthday? How many pets have you got?",
  },
};

export const A1_GRAMMAR: NodePractice[] = [beQ, possessives, thereIs, can, presentSimple, haveHas, questions];
