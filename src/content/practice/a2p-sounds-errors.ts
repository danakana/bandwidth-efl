/* A2+ Sounds and Error Clinic. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review.
   Lower band: short Spanish notes (es) and glosses shown only after a wrong answer. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, es, fix, gap, heard, say, tr } from "./helpers";

const S = (n: string, k: string) => `p/a2ps-${n}-${k}.mp3`;
const E = (n: string, k: string) => `p/a2pe-${n}-${k}.mp3`;

export const A2P_SOUNDS_ERRORS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: S("01", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "I'm tired. I don't want to go out. She's at home, and they're watching a film. I can swim, but I can't dive. Do you want a cup of tea?" },
  { file: S("01", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "I can't come, but she can." },
  { file: S("02", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "Vanessa has a very big van. Bob loves his black bike. Every evening, Victor visits his best friend Ben. Berry, very. Ban, van. Boat, vote." },
  { file: S("02", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "Victor visits his best friend every evening." },
  { file: E("01", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "I agree with you. I don't agree with that idea. Do you agree? Yes, I agree. We all agree that the trip was fun." },
  { file: E("01", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "I agree with you, but they don't agree." },
  { file: E("02", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "I've lived in Bogotá for ten years. I've lived here since 2015. I've known my best friend for six years, since we were in primary school." },
  { file: E("02", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "I've known her since 2018." },
  { file: E("03", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "I saw that film last week. I went to Cali in 2022. Yesterday I lost my keys, but I've found them now. Have you ever been to Peru? I went there two years ago." },
  { file: E("03", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "I saw that film last week." },
  { file: E("04", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "I'm listening to music. Are you waiting for the bus? It depends on the weather. I'm thinking about my holiday, and I'm good at drawing." },
  { file: E("04", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "I'm waiting for the bus and listening to music." },
];

const weak: NodePractice = {
  nodeId: "a2p.contractions-and-weak-forms",
  explain: "In natural English, small words are short and quick. Contractions join two words: I am → I'm, do not → don't, they are → they're. Many small words have a weak form in a sentence: 'to' sounds like /tə/, 'a' like /ə/, 'of' like /əv/, 'can' like /kən/. Listen for 'can' (weak /kən/) and 'can't' (strong /kɑːnt/): the negative is longer and stressed.",
  pattern: ["I'm · you're · she's · they're · don't · can't · won't", "to → /tə/: want to go", "a cup of tea → /ə kʌp əv tiː/", "I can SWIM (/kən/) · I CAN'T dive (/kɑːnt/)"],
  es: "En inglés las palabras pequeñas casi no se pronuncian: 'a cup of tea' suena como «a-cup-a-tea». Para 'can' y 'can't', escucha la fuerza: 'can't' es más largo y fuerte.",
  steps: [
    [
      heard(S("01", "notice"), "How does the speaker feel?", ["Tired", "Happy", "Hungry"], 0, "'I'm tired.'"),
      heard(S("01", "notice"), "What are 'they' doing?", ["Watching a film", "Swimming", "Drinking tea"], 0, "'they're watching a film'."),
      heard(S("01", "notice"), "Can the speaker dive?", ["No", "Yes", "Not sure"], 0, "'I can swim, but I can't dive.'"),
      ch("'I'm' is short for …", ["I am", "I have", "I was"], 0, "I am → I'm."),
      ch("'they're' is short for …", ["they are", "there are", "their"], 0, "they are → they're."),
    ],
    [
      ch("Which word is usually stressed (strong)?", ["can't", "can", "to"], 0, "Negatives are strong."),
      es(ch("In 'I want to go', how does 'to' sound?", ["Short and weak: /tə/", "Long: /tuː/", "Silent"], 0, "Weak form."), "'to' suena como «ta», muy corto."),
      ch("'she's' can mean …", ["she is or she has", "she was", "she does"], 0, "She's happy / She's got a dog."),
      ctx("You hear: 'I kən come.'", "Can the person come?", ["Yes", "No", "Not sure"], 0, "Weak /kən/ = can."),
      ch("Which is the contraction of 'will not'?", ["won't", "willn't", "wont'"], 0, "will not → won't."),
    ],
    [
      gap("I", "know the answer. (do not)", ["don't"], "do not → don't."),
      gap("", "going to the park. (We are)", ["We're"], "We are → We're."),
      ch("Which is the correct short form of 'I am sure they are not at home'?", ["I'm sure they're not at home.", "Im sure theyre not at home.", "I'm sure their not at home."], 0, "Apostrophes: I'm, they're."),
      dict(S("01", "dict"), ["I can't come, but she can", "I can't come but she can", "I cannot come, but she can"]),
      say("I want to have a cup of tea.", "Weak forms: wanna … a cup-a tea."),
    ],
    [
      fix(["Look!", "Their", "playing football in the park."], 1, ["They're"], "They are → They're."),
      fix(["I", "dont", "like spiders."], 1, ["don't"], "Use an apostrophe: don't."),
      es(fix(["She", "is'nt", "here today."], 1, ["isn't"], "is not → isn't."), "El apóstrofo va donde falta la letra: is-n't."),
      ch("Which is correct?", ["You're my best friend.", "Your my best friend.", "Youre my best friend."], 0, "you are → you're."),
      ch("Which is wrong?", ["Its raining today.", "It's raining today.", "It is raining today."], 0, "it is → it's."),
    ],
    [
      ch("In a fast chat, which sounds most natural?", ["I'm not sure. I don't know.", "I am not sure. I do not know.", "I amn't sure."], 0, "Contractions in speech."),
      ch("You want to show you really CAN'T come. You say:", ["Sorry, I CAN'T come.", "Sorry, I kən come.", "Sorry, I can come."], 0, "Stress can't."),
      ctx("A formal letter to the school director.", "Which is better?", ["I do not agree with the new rule.", "I don't agree w/ the rule lol.", "I dunno."], 0, "Formal writing uses fewer contractions."),
      ch("Which phrase sounds natural when spoken?", ["a cup of tea /ə kʌp əv tiː/", "A CUP OF TEA (every word strong)", "a cup tea"], 0, "Weak a and of."),
      say("I can swim, but I can't dive.", "Weak can, strong can't."),
    ],
  ],
  create: {
    prompts: [
      { text: "Record or write a voice message to a friend about your plans (35 words or more). Use at least four contractions (I'm, don't, can't, we're …)." },
      { universe: "screens", text: "Write a short gaming chat (35 words or more). Use at least four contractions." },
      { universe: "arts", text: "Write a message about a show you want to see (35 words or more). Use at least four contractions." },
    ],
    minWords: 35,
    checks: [
      { label: "Four contractions", pattern: "\\b\\w+'(m|re|s|t|ll|ve|d)\\b", min: 4 },
      { label: "can or can't", pattern: "\\b(can|can't)\\b", min: 1 },
    ],
    rubric: ["I used at least four contractions.", "The apostrophes are in the right place.", "It sounds like natural speech."],
    model: "Hi Sara! I'm going to the cinema on Saturday. Do you want to come? It's a new superhero film. I can't go on Friday because I've got football. We're meeting at three. Don't be late! I'll buy the popcorn.",
  },
};

const bv: NodePractice = {
  nodeId: "a2p.b-vs-v",
  explain: "English has two different sounds: /b/ and /v/. For /b/, close both lips, then open them with a small pop: big, bike, Bob. For /v/, put your top teeth on your bottom lip and push air with your voice: very, van, visit. Many words change meaning: ban / van, berry / very, boat / vote.",
  pattern: ["/b/ = both lips together, then pop: big, bike, best", "/v/ = top teeth on bottom lip + voice: very, van, visit", "ban / van · berry / very · boat / vote · best / vest"],
  es: "En español 'b' y 'v' suenan casi igual, pero en inglés no. Para la /v/, pon los dientes de arriba sobre el labio de abajo, como si dijeras una 'f' con voz.",
  steps: [
    [
      heard(S("02", "notice"), "What does Vanessa have?", ["A big van", "A black bike", "A boat"], 0, "'Vanessa has a very big van.'"),
      heard(S("02", "notice"), "What does Bob love?", ["His black bike", "His van", "His best friend"], 0, "'Bob loves his black bike.'"),
      heard(S("02", "notice"), "Who does Victor visit?", ["Ben", "Bob", "Vanessa"], 0, "'Victor visits his best friend Ben.'"),
      ch("For /v/, where are your teeth?", ["Top teeth on bottom lip", "Lips closed", "Tongue between teeth"], 0, "Teeth on lip."),
      ch("Which word starts with /b/?", ["bike", "van", "very"], 0, "bike = /b/."),
    ],
    [
      ch("Which pair has different meanings?", ["boat / vote", "big / big", "very / very"], 0, "b vs v changes the word."),
      es(ch("'I want to vote.' What does it mean?", ["Choose in an election", "Travel by boat", "Eat berries"], 0, "vote = /v/."), "vote = votar; boat = barco."),
      ch("Which word has /v/?", ["visit", "best", "bike"], 0, "visit = /v/."),
      ctx("You say 'I have a bery good idea.'", "What should you say?", ["very (with /v/)", "berry", "bury"], 0, "very = /v/."),
      ch("Which sound has a 'pop' from the lips?", ["/b/", "/v/", "Both"], 0, "/b/ starts with closed lips."),
    ],
    [
      gap("I have a", "good idea. (muy)", ["very"], "very = /v/."),
      gap("We went by", "across the lake. (barco)", ["boat"], "boat = /b/."),
      tr("Change one sound to make a new word: berry → ?", "berry", ["very"], "berry /b/ → very /v/."),
      dict(S("02", "dict"), ["Victor visits his best friend every evening"]),
      say("Vanessa has a very big van.", "Teeth on lip for V, lips together for B."),
    ],
    [
      fix(["I", "bisit", "my grandma every Sunday."], 1, ["visit"], "visit starts with /v/."),
      fix(["This is a", "bery", "good book."], 1, ["very"], "very = /v/."),
      es(fix(["Let's go to the beach in my dad's", "ban", "."], 1, ["van"], "A car-like vehicle = van."), "van = camioneta; ban = prohibir."),
      ch("Which is spelled correctly?", ["vegetables", "begetables", "vejetables"], 0, "vegetables = /v/."),
      ch("Which word is wrong?", ["bideo", "video", "visit"], 0, "video = /v/."),
    ],
    [
      ch("You want to say you need to choose a class leader. Which word?", ["vote", "boat", "both"], 0, "vote = choose."),
      ch("A friend can't understand 'I live in a bery small house'. Fix:", ["very, with teeth on lip", "berry, with lips together", "bury"], 0, "/v/ for very."),
      ctx("You're ordering at a café.", "Which is about food?", ["berry", "very", "vary"], 0, "berry = a small fruit."),
      ch("Which sentence has the most /v/ sounds?", ["Victor visits very often.", "Bob bought a big bag.", "Ben is the best."], 0, "Victor, visits, very."),
      say("Bob has a very big van.", "B-V-B-V: slow, then fast."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a tongue twister or short text (35 words or more) with many /b/ and /v/ words. Then read it aloud." },
      { universe: "science", text: "Describe your favourite vegetables and fruits (35 words or more) with many /b/ and /v/ words." },
      { universe: "arts", text: "Write a short video description (35 words or more) with many /b/ and /v/ words." },
    ],
    minWords: 35,
    checks: [
      { label: "Four /v/ words", pattern: "\\bv\\w+|\\w+ve\\b|\\w+v\\w+", min: 4 },
      { label: "Four /b/ words", pattern: "\\bb\\w+", min: 4 },
    ],
    rubric: ["I used many /b/ and /v/ words.", "I read it slowly, with teeth on lip for /v/.", "It's fun to say."],
    model: "Every Saturday, Valeria visits her brother Bruno. They ride their bikes by the river and buy vegetables in the village. Bruno loves big blueberries, but Valeria prefers very sweet bananas. Their van is very old, but it's the best van in Bogotá!",
  },
};

const iAmAgree: NodePractice = {
  nodeId: "a2p.i-am-agree",
  explain: "In English, 'agree' is a verb. It is not an adjective, so we don't use 'am / is / are' before it. Say 'I agree', 'She agrees', 'We don't agree', 'Do you agree?'. Not 'I am agree' or 'Are you agree?'. Agree with a person: 'I agree with you'. Agree with an idea: 'I agree with that.'",
  pattern: ["I agree. · I don't agree. · Do you agree?", "She agrees (with -s).", "Not: I am agree · Are you agree?", "agree with + person / idea"],
  es: "En español decimos «estoy de acuerdo», por eso a veces decimos 'I am agree'. En inglés solo se dice 'I agree'.",
  steps: [
    [
      heard(E("01", "notice"), "Does the speaker agree in the first sentence?", ["Yes", "No", "Not sure"], 0, "'I agree with you.'"),
      heard(E("01", "notice"), "What do they all agree about?", ["The trip was fun.", "The food was bad.", "The film was long."], 0, "'We all agree that the trip was fun.'"),
      heard(E("01", "notice"), "How does the speaker ask a question?", ["Do you agree?", "Are you agree?", "You agree is?"], 0, "'Do you agree?'"),
      ch("Which is correct?", ["I agree.", "I am agree.", "I'm agree."], 0, "agree is a verb."),
      ch("Which is the negative?", ["I don't agree.", "I'm not agree.", "I no agree."], 0, "don't + agree."),
    ],
    [
      es(ch("Why is 'I am agree' wrong?", ["'agree' is a verb, not an adjective.", "It needs 'the'.", "It's correct."], 0, "Verbs don't need am / is / are."), "'agree' ya es el verbo, como 'like': no dices 'I am like'."),
      ch("'She ___ with me.'", ["agrees", "is agree", "agree"], 0, "she → agrees."),
      ch("Which question is correct?", ["Do you agree?", "Are you agree?", "You are agree?"], 0, "Do you + verb?"),
      ctx("Your friend says: 'Pizza is the best food.' You think the same.", "You say:", ["I agree!", "I'm agree!", "I agreeing!"], 0, "I agree."),
      ch("Which preposition: 'I agree ___ you.'", ["with", "to", "at"], 0, "agree with."),
    ],
    [
      gap("I don't", "with that idea.", ["agree"], "don't + agree."),
      gap("", "you agree with the new rule?", ["Do"], "Do you agree?"),
      tr("Correct the sentence.", "We are agree with the teacher.", ["We agree with the teacher"], "No 'are'."),
      dict(E("01", "dict"), ["I agree with you, but they don't agree", "I agree with you but they don't agree"]),
      say("I agree with you.", "Stress aGREE."),
    ],
    [
      fix(["Yes,", "I am agree", "with you."], 1, ["I agree"], "No 'am'."),
      fix(["Tell me,", "are you agree", "with me?"], 1, ["do you agree"], "Do you agree?"),
      fix(["My mum", "is agree", "with my plan."], 1, ["agrees"], "She → agrees."),
      ch("Which is correct?", ["They don't agree with us.", "They aren't agree with us.", "They not agree with us."], 0, "don't agree."),
      ch("Which is wrong?", ["She is agree.", "She agrees.", "She doesn't agree."], 0, "No 'is'."),
    ],
    [
      ch("In a class debate, you think the same as Juan. Best:", ["I agree with Juan.", "I'm agree with Juan.", "I agreeing Juan."], 0, "I agree with + person."),
      ch("You think differently, politely:", ["I'm not sure I agree.", "I'm not agree.", "I no agree."], 0, "Not sure + agree."),
      ctx("The teacher asks the class a question.", "Best question:", ["Do you all agree?", "Are you all agree?", "You all agree is?"], 0, "Do you agree?"),
      ch("Which is the most natural?", ["I totally agree!", "I'm totally agree!", "I am agree total!"], 0, "totally + agree."),
      say("I don't agree, but I see your point.", "Polite tone."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short class discussion (35 words or more). Use 'agree' at least three times correctly: I agree, I don't agree, Do you agree?" },
      { universe: "screens", text: "Write a chat about the best video game (35 words or more). Use 'agree' at least three times correctly." },
      { universe: "science", text: "Write a discussion about saving water (35 words or more). Use 'agree' at least three times correctly." },
    ],
    minWords: 35,
    checks: [
      { label: "Three forms of 'agree'", pattern: "\\bagree(s|d)?\\b", min: 3 },
      { label: "A question: Do / Does … agree?", pattern: "\\b(do|does)\\s+\\w+(\\s+\\w+)?\\s+agree\\b", min: 1 },
    ],
    rubric: ["I didn't write 'am / is / are agree'.", "I used Do you agree? for the question.", "I used agrees with he / she."],
    model: "Ana: I think we should have a class pet. Do you agree? Leo: Yes, I agree! A fish is easy. Sara: I don't agree. Fish are boring. Leo: Our teacher agrees with Ana, so let's vote!",
  },
};

const sinceFor: NodePractice = {
  nodeId: "a2p.since-vs-for",
  explain: "Use 'for' with a length of time: for ten years, for two hours, for a long time. Use 'since' with a starting point: since 2015, since Monday, since I was eight. Both often go with the present perfect: 'I've lived here for ten years / since 2015.' Don't use 'since' with a length of time.",
  pattern: ["for + length: for 10 years · for 3 days · for a long time", "since + start: since 2015 · since Monday · since I was 8", "I've lived here for ten years. = I've lived here since 2015."],
  es: "En español decimos «hace diez años» o «desde 2015». 'for' = durante (cuánto tiempo); 'since' = desde (cuándo empezó). No digas 'since ten years'.",
  steps: [
    [
      heard(E("02", "notice"), "How long has the speaker lived in Bogotá?", ["For ten years", "Since ten years", "For six years"], 0, "'for ten years'."),
      heard(E("02", "notice"), "Since when?", ["2015", "2018", "Primary school"], 0, "'since 2015'."),
      heard(E("02", "notice"), "How long has the speaker known their best friend?", ["For six years", "For ten years", "Since 2015"], 0, "'for six years'."),
      ch("Which goes with '2015'?", ["since", "for"], 0, "A starting point."),
      ch("Which goes with 'two hours'?", ["for", "since"], 0, "A length of time."),
    ],
    [
      ch("___ Monday", ["since", "for"], 0, "Starting point."),
      ch("___ a long time", ["for", "since"], 0, "Length of time."),
      es(ch("___ I was a baby", ["since", "for"], 0, "Starting point."), "since = desde."),
      ch("___ three weeks", ["for", "since"], 0, "Length."),
      ctx("It's 2025. Lucía started guitar in 2021.", "Which is true?", ["She's played for four years.", "She's played since four years.", "She's played for 2021."], 0, "for + length."),
    ],
    [
      gap("I've had this phone", "two years.", ["for"], "for + length."),
      gap("We've been friends", "primary school.", ["since"], "since + start."),
      tr("Rewrite with 'since'. (It's 2025.)", "I've studied English for five years.", ["I've studied English since 2020", "I have studied English since 2020"], "2025 − 5 = 2020."),
      dict(E("02", "dict"), ["I've known her since 2018", "I have known her since 2018"]),
      say("I've lived here for ten years.", "Link: I've LIVED here for TEN YEARS."),
    ],
    [
      es(fix(["I've lived in Cali", "since", "five years."], 1, ["for"], "for + length of time."), "No se dice 'since five years'; se dice 'for five years'."),
      fix(["She's been here", "for", "Tuesday."], 1, ["since"], "since + starting day."),
      fix(["I've known him", "since", "a long time."], 1, ["for"], "for a long time."),
      ch("Which is correct?", ["We've waited for twenty minutes.", "We've waited since twenty minutes.", "We've waited during twenty minutes since."], 0, "for + length."),
      ch("Which is wrong?", ["I've had my dog since three years.", "I've had my dog for three years.", "I've had my dog since 2022."], 0, "since + start, not length."),
    ],
    [
      ch("A new teacher asks how long you've been at the school. Best answer:", ["For three years. Since sixth grade.", "Since three years.", "During three years ago."], 0, "for / since."),
      ch("Best text to a late friend:", ["I've been here for half an hour!", "I've been here since half an hour!", "I'm here for half an hour ago!"], 0, "for + length."),
      ctx("You met your best friend at age seven.", "You say:", ["We've been friends since we were seven.", "We've been friends for we were seven.", "We are friends since seven years."], 0, "since + start."),
      ch("Which is the most natural?", ["I haven't seen her for ages.", "I haven't seen her since ages.", "I don't see her for ages ago."], 0, "for ages = for a long time."),
      say("We've been friends since primary school.", "Stress FRIENDS and PRIMARY."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about your life (35 words or more): where you've lived, your hobbies and friends. Use 'for' twice and 'since' twice." },
      { universe: "arts", text: "Write about a hobby you've had for a long time (35 words or more). Use 'for' twice and 'since' twice." },
      { universe: "past", text: "Write about your family's history in your town (35 words or more). Use 'for' twice and 'since' twice." },
    ],
    minWords: 35,
    checks: [
      { label: "Two 'for' + time", pattern: "\\bfor\\s+(a\\s+|an\\s+|about\\s+|almost\\s+|over\\s+)?(\\w+\\s+)?(years?|months?|weeks?|days?|hours?|minutes?|ages|long\\s+time|while)\\b", min: 2 },
      { label: "Two 'since' + start", pattern: "\\bsince\\s+\\w+", min: 2 },
    ],
    rubric: ["I used 'for' with lengths of time.", "I used 'since' with starting points.", "I used the present perfect with them."],
    model: "I've lived in Medellín since 2016, so I've been here for nine years. I've played volleyball since I was ten. My best friend is Camila. We've known each other for six years, since we started primary school together.",
  },
};

const ppFinished: NodePractice = {
  nodeId: "a2p.present-perfect-with-finished-time",
  explain: "Don't use the present perfect with a finished time. Words like yesterday, last week, in 2022, two years ago and 'when I was a child' need the past simple. 'I saw that film last week', not 'I have seen that film last week'. Use the present perfect when there is no time, or with ever, never, just, already, yet.",
  pattern: ["Finished time → past simple: I saw it last week.", "yesterday · last … · ago · in 2022 · when …? → past simple", "No time → present perfect: I've seen it.", "Not: I have seen it yesterday."],
  es: "Si dices cuándo (yesterday, last week, ago, in 2022), usa el pasado simple: 'I went', no 'I have gone'.",
  steps: [
    [
      heard(E("03", "notice"), "When did the speaker see the film?", ["Last week", "Yesterday", "Never"], 0, "'I saw that film last week.'"),
      heard(E("03", "notice"), "When did the speaker go to Cali?", ["In 2022", "Last week", "Two years ago"], 0, "'I went to Cali in 2022.'"),
      heard(E("03", "notice"), "Where did the speaker go two years ago?", ["Peru", "Cali", "The cinema"], 0, "'I went there two years ago.'"),
      ch("'last week' needs …", ["past simple", "present perfect", "future"], 0, "Finished time."),
      ch("Which sentence is correct?", ["I saw it yesterday.", "I have seen it yesterday.", "I've saw it yesterday."], 0, "yesterday → saw."),
    ],
    [
      ch("Which word means finished time?", ["ago", "ever", "yet"], 0, "two years ago."),
      ch("Which can go with the present perfect?", ["never", "yesterday", "last year"], 0, "I've never …"),
      es(ch("'I've found my keys now.' Why is the present perfect OK here?", ["'now' is not a finished time; the result is important now.", "It's wrong.", "Because of 'keys'."], 0, "Result now → present perfect."), "'now' no es un tiempo terminado."),
      ctx("A: Have you ever been to Peru? B: Yes, ___ there two years ago.", "Best:", ["I went", "I've been", "I have gone"], 0, "two years ago → went."),
      ch("'When did you arrive?' Which tense is the answer?", ["Past simple: I arrived at 8.", "Present perfect: I've arrived at 8.", "Present: I arrive at 8."], 0, "When → past simple."),
    ],
    [
      gap("I", "my grandmother last Sunday. (visit)", ["visited"], "last Sunday → past simple."),
      gap("She", "to Spain in 2023. (go)", ["went"], "in 2023 → past simple."),
      tr("Correct the sentence.", "I have lost my phone yesterday.", ["I lost my phone yesterday"], "yesterday → lost."),
      dict(E("03", "dict"), ["I saw that film last week"]),
      say("I went to Cali in 2022.", "Clear 'went'."),
    ],
    [
      es(fix(["I", "have seen", "her two days ago."], 1, ["saw"], "ago → past simple."), "Con 'ago' siempre pasado simple: I saw her two days ago."),
      fix(["We", "have gone", "to the beach last summer."], 1, ["went"], "last summer → went."),
      fix(["When", "have you bought", "your bike?"], 1, ["did you buy"], "When …? → past simple."),
      ch("Which is correct?", ["He finished school in 2021.", "He has finished school in 2021.", "He has finish school in 2021."], 0, "in 2021 → past simple."),
      ch("Which is wrong?", ["I've eaten sushi last night.", "I ate sushi last night.", "I've eaten sushi before."], 0, "last night → ate."),
    ],
    [
      ch("Your friend asks about your holiday. Best answer:", ["I went to the beach in July.", "I've gone to the beach in July.", "I go to the beach in July ago."], 0, "in July → went."),
      ch("Best way to talk about an experience (no time):", ["I've climbed a mountain.", "I've climbed a mountain last year.", "I climbed a mountain ever."], 0, "No time → present perfect."),
      ctx("Your teacher: 'Did you do the homework?'", "Best answer:", ["Yes, I did it last night.", "Yes, I've done it last night.", "Yes, I do it last night."], 0, "last night → did."),
      ch("Which mini-story is correct?", ["I've been to Cartagena. I went there in 2023.", "I went to Cartagena. I've been there in 2023.", "I've gone to Cartagena in 2023."], 0, "Experience, then details."),
      say("I lost my keys yesterday, but I've found them now.", "Two tenses, two times."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about last weekend and your life experiences (35 words or more). Use the past simple with finished times and the present perfect without a time." },
      { universe: "screens", text: "Write about games you've played and when you played them (35 words or more). Use the past simple with finished times and the present perfect without a time." },
      { universe: "past", text: "Write about trips you've made (35 words or more). Use the past simple with finished times and the present perfect without a time." },
    ],
    minWords: 35,
    checks: [
      { label: "A finished time word", pattern: "\\b(yesterday|last\\s+\\w+|\\w+\\s+ago|in\\s+(19|20)\\d\\d)\\b", min: 2 },
      { label: "A present perfect without time", pattern: "\\b(have|has|'ve|'s)\\s+(never|ever|already|just)?\\s*(been|seen|visited|played|eaten|tried|done|had|won|lost|met)\\b", min: 1 },
    ],
    rubric: ["I used the past simple with yesterday, last … and ago.", "I used the present perfect only without a time.", "I didn't write 'have + yesterday'."],
    model: "Last weekend I went to my cousin's house. We played football and watched a film. I've never won a match against him! Two years ago, we visited Santa Marta together. I've been there three times, and I love it.",
  },
};

const preps: NodePractice = {
  nodeId: "a2p.prepositions-after-verbs",
  explain: "Many verbs need a special preposition. Learn them together: listen to music, wait for the bus, depend on the weather, think about / of something, be good at drawing, be interested in science, arrive at school / in a city, look at a picture. Don't add a preposition to verbs that don't need one: 'call me', 'discuss the problem', 'enter the room'.",
  pattern: ["listen to · wait for · depend on · think about", "be good at · be interested in · be afraid of", "arrive at (a place) · arrive in (a city / country)", "No preposition: call someone · discuss something · enter a room"],
  es: "Algunas preposiciones no son iguales al español: 'depend on' (no 'of'), 'listen to' (no solo 'listen'), 'arrive at / in' (no 'to'), 'think about' (no 'in').",
  steps: [
    [
      heard(E("04", "notice"), "What is the speaker listening to?", ["Music", "The radio news", "A podcast"], 0, "'I'm listening to music.'"),
      heard(E("04", "notice"), "What does it depend on?", ["The weather", "The bus", "The teacher"], 0, "'It depends on the weather.'"),
      heard(E("04", "notice"), "What is the speaker good at?", ["Drawing", "Singing", "Maths"], 0, "'I'm good at drawing.'"),
      ch("listen ___ music", ["to", "at", "for"], 0, "listen to."),
      ch("wait ___ the bus", ["for", "to", "at"], 0, "wait for."),
    ],
    [
      es(ch("It depends ___ the weather.", ["on", "of", "in"], 0, "depend on."), "En español «depende de», pero en inglés 'depend on'."),
      ch("I'm interested ___ science.", ["in", "on", "at"], 0, "interested in."),
      ch("We arrived ___ Bogotá at night.", ["in", "to", "at"], 0, "arrive in + city."),
      ch("She's good ___ basketball.", ["at", "in", "on"], 0, "good at."),
      ctx("You're planning your holiday in your head.", "You are …", ["thinking about your holiday", "thinking in your holiday", "thinking on your holiday"], 0, "think about."),
    ],
    [
      gap("Look", "this picture!", ["at"], "look at."),
      gap("I'm afraid", "spiders.", ["of"], "afraid of."),
      tr("Correct the sentence.", "I'm waiting the bus.", ["I'm waiting for the bus", "I am waiting for the bus"], "wait for."),
      dict(E("04", "dict"), ["I'm waiting for the bus and listening to music", "I am waiting for the bus and listening to music"]),
      say("It depends on the weather.", "Link: dePENDS-on the WEATHER."),
    ],
    [
      fix(["I love", "listening", "music."], 1, ["listening to"], "listen to."),
      fix(["We arrived", "to", "the airport at six."], 1, ["at"], "arrive at a place."),
      es(fix(["Please", "call to", "me tonight."], 1, ["call"], "call + person (no preposition)."), "'call' no lleva preposición: call me."),
      ch("Which is correct?", ["I'm thinking about my exam.", "I'm thinking in my exam.", "I'm thinking on my exam."], 0, "think about."),
      ch("Which is wrong?", ["She's good in maths.", "She's good at maths.", "She's interested in maths."], 0, "good at."),
    ],
    [
      ch("Your friend asks if you'll go to the beach tomorrow. You're not sure. You say:", ["It depends on the weather.", "It depends of the weather.", "It depends in the weather."], 0, "depend on."),
      ch("Best way to describe your talent:", ["I'm good at drawing.", "I'm good in drawing.", "I'm good for drawing."], 0, "good at."),
      ctx("You're at the bus stop for 20 minutes.", "You text:", ["I'm still waiting for the bus.", "I'm still waiting the bus.", "I'm still waiting to the bus."], 0, "wait for."),
      ch("Which is the most natural?", ["What music do you listen to?", "What music do you listen?", "What music do you listen at?"], 0, "listen to (at the end)."),
      say("I'm interested in science and good at maths.", "Clear 'in' and 'at'."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about yourself (35 words or more): what you're good at, interested in and afraid of, and what you listen to. Use four verb + preposition pairs." },
      { universe: "arts", text: "Write about your favourite music and art (35 words or more). Use four verb + preposition pairs (listen to, look at, interested in, good at …)." },
      { universe: "science", text: "Write about a science topic you like (35 words or more). Use four verb + preposition pairs (interested in, think about, depend on …)." },
    ],
    minWords: 35,
    checks: [
      { label: "Four verb + preposition pairs", pattern: "\\b(listen(ing|s|ed)?\\s+to|wait(ing|s|ed)?\\s+for|depend(s|ing|ed)?\\s+on|think(ing|s)?\\s+(about|of)|good\\s+at|interested\\s+in|afraid\\s+of|look(ing|s|ed)?\\s+at|arriv(e|ed|es|ing)\\s+(at|in)|scared\\s+of|bad\\s+at)\\b", min: 4 },
    ],
    rubric: ["I used four verb + preposition pairs.", "I didn't add a preposition to call or discuss.", "My text tells something real about me."],
    model: "I'm good at drawing, and I'm very interested in comics. I listen to rock music when I draw. I'm afraid of dogs, but I'm not afraid of spiders. My plans for the weekend depend on the weather.",
  },
};

export const A2P_SOUNDS: NodePractice[] = [weak, bv];
export const A2P_ERRORS: NodePractice[] = [iAmAgree, sinceFor, ppFinished, preps];
