/* A2 Sounds and Error Clinic. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review.
   Lower band: short Spanish notes (es) and glosses shown only after a wrong answer. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, es, fix, gap, heard, say, tr } from "./helpers";

const S = (n: string, k: string) => `p/a2s-${n}-${k}.mp3`;
const E = (n: string, k: string) => `p/a2e-${n}-${k}.mp3`;

export const A2_SOUNDS_ERRORS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: S("01", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "Yesterday I walked to school. I played football and watched a film. Then I wanted a snack, so I needed money. I visited my aunt, and she cooked dinner." },
  { file: S("01", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "I played football and watched a film." },
  { file: S("02", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Teacher. Doctor. Pizza. Happy. Hotel. Begin. Today. Ago. My teacher is happy today." },
  { file: S("02", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "My teacher is happy today." },
  { file: E("01", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "Did you go to the park? Yes, I went. Did she see the film? No, she didn't see it. I didn't eat breakfast today." },
  { file: E("01", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "Did you go to the park yesterday?" },
  { file: E("02", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "My brother is taller than me. Cali is hotter than Bogotá. This book is more interesting than that one. Pizza is better than salad." },
  { file: E("02", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "This book is more interesting than that one." },
  { file: E("03", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "I need some information about the trip. Can you give me some advice? I have a lot of homework today. My hair is very long, and my furniture is old." },
  { file: E("03", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "Can you give me some advice?" },
  { file: E("04", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "My sister is very sensitive: she cries at sad films. My brother is sensible: he makes good decisions. Actually, I'm in Bogotá now. My aunt is pregnant, not embarrassed! And I went to the library to read, not to buy books." },
  { file: E("04", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "Actually, I'm in Bogotá now." },
  { file: E("05", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Can you explain the homework to me? After school, I go home. My teacher explained the rule to us. Let's go home now!" },
  { file: E("05", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "Can you explain it to me, please?" },
];

const ed: NodePractice = {
  nodeId: "a2.ed-endings-t-d-d",
  explain: "The -ed ending has three sounds. After t or d, it's an extra syllable /ɪd/: wanted, needed, visited. After voiceless sounds like p, k, s, sh, ch, f, it sounds like /t/: walked, watched, cooked. After other sounds, it sounds like /d/: played, cleaned, lived. Only /ɪd/ adds a syllable: 'walked' is one syllable, not 'walk-ed'.",
  pattern: ["/ɪd/ after t or d: wanted · needed · visited (extra syllable)", "/t/ after p, k, s, sh, ch, f: walked · watched · cooked", "/d/ after other sounds: played · cleaned · lived", "walked = 1 syllable (not walk-ed)"],
  es: "En español pronunciamos todas las letras, pero en inglés 'walked' suena «uokt», una sola sílaba. Solo se añade sílaba después de t o d: want-ed, need-ed.",
  steps: [
    [
      heard(S("01", "notice"), "How did the speaker go to school?", ["Walked", "Took the bus", "Cycled"], 0, "'I walked to school.'"),
      heard(S("01", "notice"), "Why did the speaker need money?", ["They wanted a snack.", "They wanted a film.", "They lost their bag."], 0, "'I wanted a snack, so I needed money.'"),
      heard(S("01", "notice"), "Who cooked dinner?", ["The aunt", "The speaker", "A friend"], 0, "'she cooked dinner'."),
      ch("Which word has an extra syllable?", ["wanted", "walked", "played"], 0, "After t → /ɪd/."),
      ch("How many syllables in 'watched'?", ["One", "Two", "Three"], 0, "/wɒtʃt/ = one."),
    ],
    [
      ch("'needed' ends with …", ["/ɪd/", "/t/", "/d/"], 0, "After d → /ɪd/."),
      ch("'cooked' ends with …", ["/t/", "/ɪd/", "/d/"], 0, "After k → /t/."),
      ch("'played' ends with …", ["/d/", "/t/", "/ɪd/"], 0, "After a vowel sound → /d/."),
      es(ctx("A student says 'walk-ed' with two syllables.", "What's the problem?", ["'walked' has only one syllable: /wɔːkt/.", "Nothing.", "It should be 'walk-id-ed'."], 0, "Only /ɪd/ adds a syllable."), "'walked' suena «uokt», sin 'e'."),
      ch("Which group all sound /t/?", ["walked, watched, cooked", "wanted, needed, visited", "played, lived, cleaned"], 0, "Voiceless sounds → /t/."),
    ],
    [
      gap("Yesterday I", "my grandma. (visit, /ɪd/)", ["visited"], "visit + ed = /ɪd/."),
      gap("We", "a film last night. (watch, /t/)", ["watched"], "watch + ed = /t/."),
      ch("Which word has a /d/ ending?", ["cleaned", "helped", "started"], 0, "clean + ed = /d/."),
      dict(S("01", "dict"), ["I played football and watched a film"]),
      say("I walked to school and watched a film.", "One syllable each: WALKT, WATCHT."),
    ],
    [
      ch("How do you say 'walked'?", ["/wɔːkt/, one syllable", "/wɔːk-ɪd/, two syllables", "/wɔːk-ed/, two syllables"], 0, "After k → /t/, one syllable."),
      fix(["She", "wantd", "a new phone."], 1, ["wanted"], "Spell it wanted; say /ɪd/."),
      es(fix(["We", "visitted", "the museum."], 1, ["visited"], "visit → visited."), "Se escribe 'visited', con una sola t."),
      ch("Which pronunciation is right for 'stopped'?", ["/stɒpt/ (one syllable)", "/stɒp-ɪd/ (two syllables)", "/stɒp-ed/"], 0, "After p → /t/."),
      ch("Which word is pronounced with two syllables?", ["decided", "liked", "jumped"], 0, "After d → /ɪd/."),
    ],
    [
      ch("You tell a story out loud. Which sounds best?", ["I /wɔːkt/ home and /kʊkt/ dinner.", "I walk-ed home and cook-ed dinner.", "I walk home and cook dinner yesterday."], 0, "Natural -ed sounds."),
      ch("Which sentence has three different -ed sounds?", ["I wanted, played and watched.", "I walked, watched and cooked.", "I needed, wanted and visited."], 0, "/ɪd/, /d/, /t/."),
      ctx("Your friend can't hear the past in your sentence 'I watch a film yesterday'.", "Best fix:", ["Say 'watched' with a clear /t/.", "Say 'watch-ed' with two syllables.", "Say it louder."], 0, "Clear /t/."),
      ch("Which is the best tip?", ["Add a syllable only after t or d.", "Always add a syllable.", "Never pronounce -ed."], 0, "The key rule."),
      say("I needed money, so I visited my aunt.", "Two /ɪd/ endings."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about yesterday (30 words or more) with at least six regular -ed verbs. Then read it aloud: are your -ed endings /t/, /d/ or /ɪd/?" },
      { universe: "screens", text: "Write about a game you played (30 words or more) with at least six regular -ed verbs. Read it aloud carefully." },
      { universe: "science", text: "Write about a science experiment you did (30 words or more) with at least six regular -ed verbs." },
    ],
    minWords: 30,
    checks: [
      { label: "Six regular -ed verbs", pattern: "\\b\\w+ed\\b", min: 6 },
    ],
    rubric: ["I used six regular past verbs.", "I said /ɪd/ only after t or d.", "I read it aloud slowly."],
    model: "Yesterday I walked to school with my sister. We talked about our weekend. In class, we watched a video and answered questions. After school, I visited my grandma. She cooked rice and I helped her. Then I played video games and needed a rest!",
  },
};

const stress: NodePractice = {
  nodeId: "a2.word-stress-in-two-syllable-words",
  explain: "In two-syllable words, one syllable is stronger (stressed). Most nouns and adjectives are stressed on the first syllable: TEAcher, DOCtor, PIZza, HAPpy. Many verbs and some other words are stressed on the second syllable: beGIN, toDAY, aGO, hoTEL. Saying the wrong syllable can make a word hard to understand.",
  pattern: ["First syllable (most nouns / adjectives): TEAcher · DOCtor · HAPpy · PIZza", "Second syllable (many verbs, some words): beGIN · deCIDE · toDAY · aGO · hoTEL", "Stressed = longer, louder, higher"],
  es: "En español 'hotel' y 'doctor' llevan acento al final, pero en inglés es DOCtor (al inicio) y hoTEL (al final). Escucha y repite.",
  steps: [
    [
      heard(S("02", "notice"), "Where is the stress in 'teacher'?", ["TEA-cher", "tea-CHER", "Both"], 0, "TEAcher."),
      heard(S("02", "notice"), "Where is the stress in 'hotel'?", ["ho-TEL", "HO-tel", "Both"], 0, "hoTEL."),
      heard(S("02", "notice"), "Where is the stress in 'today'?", ["to-DAY", "TO-day", "Both"], 0, "toDAY."),
      ch("Which part is louder in 'DOCtor'?", ["DOC", "tor", "Both the same"], 0, "First syllable."),
      ch("A stressed syllable is …", ["longer and louder", "shorter and quieter", "silent"], 0, "Stress = strong."),
    ],
    [
      ch("Where is the stress in 'happy'?", ["HAP-py", "hap-PY"], 0, "Adjective → first."),
      ch("Where is the stress in 'begin'?", ["be-GIN", "BE-gin"], 0, "Verb → second."),
      es(ch("Where is the stress in 'doctor' in English?", ["DOC-tor", "doc-TOR"], 0, "First syllable."), "En español «doctor» es aguda, pero en inglés es DOCtor."),
      ch("Where is the stress in 'pizza'?", ["PIZ-za", "piz-ZA"], 0, "First syllable."),
      ctx("You say 'the HO-tel' and the tourist doesn't understand.", "What should you say?", ["ho-TEL", "HO-TEL", "hotel-o"], 0, "Second syllable."),
    ],
    [
      ch("Which word is stressed on the second syllable?", ["decide", "garden", "yellow"], 0, "deCIDE."),
      ch("Which word is stressed on the first syllable?", ["window", "begin", "hotel"], 0, "WINdow."),
      ch("Choose the right stress for 'ago'.", ["a-GO", "A-go"], 0, "aGO."),
      dict(S("02", "dict"), ["My teacher is happy today"]),
      say("My teacher is happy today.", "TEAcher, HAPpy, toDAY."),
    ],
    [
      ch("A student says 'tea-CHER'. Correct stress?", ["TEA-cher", "tea-CHER is fine"], 0, "First syllable."),
      ch("A student says 'HO-tel'. Correct stress?", ["ho-TEL", "HO-tel is fine"], 0, "Second syllable."),
      es(ch("A student says 'doc-TOR' like in Spanish. Correct stress?", ["DOC-tor", "doc-TOR is fine"], 0, "First syllable."), "Cuidado con las palabras parecidas al español: DOCtor, no docTOR."),
      ch("Which list is all stressed on the FIRST syllable?", ["teacher, doctor, happy", "today, begin, hotel", "ago, decide, hello"], 0, "Nouns / adjectives."),
      ch("Which list is all stressed on the SECOND syllable?", ["begin, today, hotel", "pizza, window, garden", "happy, yellow, doctor"], 0, "Second syllable."),
    ],
    [
      ch("You want to be understood at a hotel reception. Say:", ["I'd like a room in this hoTEL.", "I'd like a room in this HOtel.", "Both are perfect."], 0, "hoTEL."),
      ch("Which sentence has natural stress?", ["The DOCtor is HAPpy toDAY.", "The docTOR is hapPY TOday.", "THE doctor IS happy."], 0, "Correct word stress."),
      ctx("Your friend asks: 'When did the film beGIN?'", "Best answer with good stress:", ["It began two hours aGO.", "It began two hours Ago.", "It BEgan two HOURS ago."], 0, "aGO."),
      ch("Which tip helps most?", ["Make the stressed syllable longer and louder.", "Say every syllable the same.", "Stress the last letter."], 0, "Stress = length + volume."),
      say("The doctor is at the hotel today.", "DOCtor, hoTEL, toDAY."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write five sentences (30 words or more) using two-syllable words: some stressed on the first syllable (teacher, happy) and some on the second (today, hotel). Write the stressed part in capitals." },
      { universe: "arts", text: "Write a short poem or song verse (30 words or more) with two-syllable words. Write the stressed syllables in capitals." },
      { universe: "words", text: "Make a mini word list (30 words or more): ten two-syllable words with the stress in capitals, then use three in a sentence." },
    ],
    minWords: 30,
    checks: [
      { label: "Two-syllable words from the lesson", pattern: "\\b(teacher|doctor|pizza|happy|hotel|begin|today|ago|window|garden|yellow|decide|hello|water|morning|football|after|before|again|about|answer|apple|basket|brother|sister|mother|father|number|picture|money)\\b", min: 5 },
    ],
    rubric: ["I used at least five two-syllable words.", "I marked the stress in capitals.", "I read my text aloud with clear stress."],
    model: "My TEAcher is very HAPpy toDAY. We had PIZza for LUNCH aGO. The DOCtor works in a big hoTEL. Please beGIN your HOMEwork after DINner. My SISter has a YELlow WINdow in her BEDroom.",
  },
};

const doublePast: NodePractice = {
  nodeId: "a2.double-past-in-questions-and-negatives",
  explain: "In past simple questions and negatives, 'did' already shows the past. So the main verb goes back to the base form. 'Did you go?' (not 'Did you went?'). 'She didn't see it' (not 'didn't saw'). Only positive sentences use the past form: 'I went.'",
  pattern: ["Did + subject + base verb? → Did you go?", "didn't + base verb → She didn't see it.", "Positive: I went. · She saw it.", "Not: Did you went? · I didn't ate."],
  es: "En español el pasado está en el verbo («¿fuiste?»), pero en inglés el pasado está en 'did'. Por eso: Did you go?, no 'Did you went?'.",
  steps: [
    [
      heard(E("01", "notice"), "How does the speaker ask about the park?", ["Did you go to the park?", "Did you went to the park?", "You went park?"], 0, "Did + go."),
      heard(E("01", "notice"), "Did she see the film?", ["No", "Yes", "We don't know"], 0, "'she didn't see it'."),
      heard(E("01", "notice"), "What didn't the speaker eat?", ["Breakfast", "Lunch", "Dinner"], 0, "'I didn't eat breakfast today.'"),
      ch("Which is correct?", ["Did you see it?", "Did you saw it?", "Did you seen it?"], 0, "Did + base verb."),
      ch("Which word shows the past in 'Did you go'?", ["Did", "go", "you"], 0, "'did' carries the past."),
    ],
    [
      es(ch("Why is 'I didn't went' wrong?", ["'didn't' already shows the past; use 'go'.", "It needs 'goed'.", "It's correct."], 0, "One past is enough."), "Con 'didn't' el verbo va en forma base: I didn't go."),
      ch("'She ___ like the film.'", ["didn't", "didn't liked", "not liked"], 0, "didn't + like."),
      ch("'Did they ___ the bus?'", ["catch", "caught", "catched"], 0, "Did + base verb."),
      ctx("Positive: 'He ate pizza.'", "Negative:", ["He didn't eat pizza.", "He didn't ate pizza.", "He not ate pizza."], 0, "didn't + eat."),
      ch("Which sentence is positive past?", ["We went to the beach.", "We didn't go.", "Did we go?"], 0, "Positive uses went."),
    ],
    [
      gap("Did you", "your homework? (do)", ["do"], "Did + base verb."),
      gap("I didn't", "the answer. (know)", ["know"], "didn't + base verb."),
      tr("Make a question.", "You saw the match.", ["Did you see the match"], "Did + you + see."),
      dict(E("01", "dict"), ["Did you go to the park yesterday"]),
      say("Did you go to the park? No, I didn't go.", "Did + go, didn't + go."),
    ],
    [
      fix(["Did you", "went", "to the party?"], 1, ["go"], "Did + base verb."),
      fix(["She", "didn't saw", "the message."], 1, ["didn't see"], "didn't + base verb."),
      es(fix(["What", "did you bought", "at the shop?"], 1, ["did you buy"], "did + buy."), "Después de 'did', el verbo va en forma base: buy."),
      ch("Which is correct?", ["Where did you have lunch?", "Where did you had lunch?", "Where you had lunch?"], 0, "did + have."),
      ch("Which is wrong?", ["They didn't came.", "They didn't come.", "They came."], 0, "didn't + come."),
    ],
    [
      ch("You ask a friend about the weekend. Best:", ["What did you do at the weekend?", "What did you did at the weekend?", "What you did at the weekend?"], 0, "did + do."),
      ch("You explain why you're hungry. Best:", ["I didn't eat breakfast.", "I didn't ate breakfast.", "I no ate breakfast."], 0, "didn't + eat."),
      ctx("Your teacher asks: 'Did you bring your book?'", "Best answer:", ["Sorry, I didn't bring it.", "Sorry, I didn't brought it.", "Sorry, I not bring."], 0, "didn't + bring."),
      ch("Which mini-dialogue is correct?", ["Did you win? Yes, we won!", "Did you won? Yes, we win!", "Did you win? Yes, we winned!"], 0, "Did + win; positive: won."),
      say("Did you see the film? Yes, I saw it.", "Question: see. Answer: saw."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write five questions to ask a friend about their weekend, and their answers (30 words or more). Use 'Did you …?' and 'didn't' correctly." },
      { universe: "screens", text: "Write an interview with a gamer about their last tournament (30 words or more). Use 'Did you …?' and 'didn't' correctly." },
      { universe: "past", text: "Write an interview with a grandparent about their childhood (30 words or more). Use 'Did you …?' and 'didn't' correctly." },
    ],
    minWords: 30,
    checks: [
      { label: "Two 'Did … + base verb' questions", pattern: "\\bdid\\s+(you|he|she|they|we|it)\\s+\\w+", min: 2 },
      { label: "One didn't + verb", pattern: "\\b(didn't|did not)\\s+\\w+", min: 1 },
    ],
    rubric: ["I used Did + base verb in questions.", "I used didn't + base verb in negatives.", "I used the past form only in positive answers."],
    model: "Did you go out on Saturday? Yes, I went to the cinema. Did you like the film? Yes, I loved it! Did you eat popcorn? No, I didn't eat popcorn, but I had a hot dog. Did your brother come? No, he didn't come.",
  },
};

const doubleComp: NodePractice = {
  nodeId: "a2.double-comparatives",
  explain: "Use -er OR more, never both. Short adjectives: taller, hotter, faster (not 'more taller'). Long adjectives: more interesting, more expensive (not 'interestinger'). Irregular: better, worse (not 'more better'). The same for superlatives: the tallest or the most beautiful, never 'the most tallest'.",
  pattern: ["taller (not more taller)", "more interesting (not interestinger)", "better (not more better) · worse (not more worse)", "the tallest · the most beautiful (not the most tallest)"],
  es: "En español decimos «más alto», por eso a veces decimos 'more taller'. En inglés, -er ya significa «más». Usa uno, no los dos.",
  steps: [
    [
      heard(E("02", "notice"), "Who is taller?", ["The brother", "The speaker", "The same"], 0, "'My brother is taller than me.'"),
      heard(E("02", "notice"), "Which city is hotter?", ["Cali", "Bogotá", "The same"], 0, "'Cali is hotter than Bogotá.'"),
      heard(E("02", "notice"), "What is better than salad?", ["Pizza", "Books", "Bogotá"], 0, "'Pizza is better than salad.'"),
      ch("Which is correct?", ["taller", "more taller", "more tall"], 0, "Short → -er only."),
      ch("Which is correct?", ["more interesting", "interestinger", "more interestinger"], 0, "Long → more only."),
    ],
    [
      es(ch("Why is 'more better' wrong?", ["'better' already means 'more good'.", "It needs 'most'.", "It's correct."], 0, "Irregular comparative."), "'better' ya significa «mejor»; no le pongas 'more'."),
      ch("'This test was ___ than the last one.'", ["easier", "more easier", "more easy"], 0, "easy → easier."),
      ch("'She's ___ person in my class.'", ["the funniest", "the most funniest", "the more funny"], 0, "funny → the funniest."),
      ctx("Mount Everest vs. Monserrate.", "Best sentence:", ["Everest is higher than Monserrate.", "Everest is more higher than Monserrate.", "Everest is more high."], 0, "high → higher."),
      ch("Which is NOT a double comparative?", ["more expensive", "more cheaper", "most biggest"], 0, "Long adjective + more is correct."),
    ],
    [
      gap("My new phone is", "than my old one. (good)", ["better"], "good → better."),
      gap("This is the", "beautiful beach in Colombia.", ["most"], "Long → the most."),
      tr("Correct the sentence.", "Today is more colder than yesterday.", ["Today is colder than yesterday"], "Remove 'more'."),
      dict(E("02", "dict"), ["This book is more interesting than that one"]),
      say("My brother is taller than me.", "One comparative only."),
    ],
    [
      fix(["My bike is", "more faster", "than yours."], 1, ["faster"], "Remove 'more'."),
      fix(["She is", "the most smartest", "girl in the class."], 1, ["the smartest"], "Remove 'most'."),
      es(fix(["Your idea is", "more better", "than mine."], 1, ["better"], "better alone."), "Solo 'better', sin 'more'."),
      ch("Which is correct?", ["This film is worse than the first one.", "This film is more worse than the first one.", "This film is worser."], 0, "bad → worse."),
      ch("Which is wrong?", ["It's the most easiest game.", "It's the easiest game.", "It's an easy game."], 0, "Double superlative."),
    ],
    [
      ch("You compare two phones for a friend. Best:", ["This one is cheaper and faster than that one.", "This one is more cheaper and more faster.", "This one is most cheap."], 0, "Simple comparatives."),
      ch("You describe your best day. Best:", ["It was the best day of my life!", "It was the most best day!", "It was the more good day."], 0, "the best."),
      ctx("A friend says: 'My dog is more bigger than yours.'", "Best correction:", ["You mean 'bigger', without 'more'.", "Say 'most bigger'.", "It's correct."], 0, "One form only."),
      ch("Which is most natural?", ["Math is harder than English for me.", "Math is more harder than English.", "Math is most hard."], 0, "hard → harder."),
      say("Pizza is better than salad, but salad is healthier.", "No 'more'."),
    ],
  ],
  create: {
    prompts: [
      { text: "Compare your town with a big city (30 words or more). Use three comparatives and one superlative, with no double forms." },
      { universe: "science", text: "Compare planets or animals (30 words or more). Use three comparatives and one superlative, with no double forms." },
      { universe: "screens", text: "Compare two phones, consoles or apps (30 words or more). Use three comparatives and one superlative." },
    ],
    minWords: 30,
    checks: [
      { label: "Three comparatives with 'than'", pattern: "\\b(\\w+er|more\\s+\\w+|better|worse|less\\s+\\w+)\\s+than\\b", min: 3 },
      { label: "One superlative", pattern: "\\bthe\\s+(\\w+est|most\\s+\\w+|best|worst)\\b", min: 1 },
    ],
    rubric: ["I used -er or more, not both.", "I used better and worse correctly.", "My superlative has only 'the -est' or 'the most'."],
    model: "My town is smaller than Medellín, and it's quieter than the city too. The food is cheaper than in Medellín, but the buses are slower. For me, the best thing about my town is the river. It's the most beautiful place I know.",
  },
};

const uncountPlural: NodePractice = {
  nodeId: "a2.uncountable-nouns-made-plural",
  explain: "Some nouns are uncountable in English, even if they are countable in Spanish. They never take -s or 'a / an': information, advice, homework, furniture, hair, news, money, bread, music. Say 'some information', 'a piece of advice', 'a lot of homework'. Use a singular verb: 'The news is good.'",
  pattern: ["No -s: information · advice · homework · furniture · hair · news · money", "some information · a piece of advice · a lot of homework", "Singular verb: The news is good. · My hair is long.", "Not: an advice · informations · homeworks"],
  es: "En español decimos «unas informaciones» o «los consejos», pero en inglés 'information' y 'advice' no tienen plural. Di 'some advice' o 'a piece of advice'.",
  steps: [
    [
      heard(E("03", "notice"), "What does the speaker need about the trip?", ["Some information", "Some money", "Some furniture"], 0, "'I need some information about the trip.'"),
      heard(E("03", "notice"), "What does the speaker ask for?", ["Some advice", "Some homework", "Some bread"], 0, "'Can you give me some advice?'"),
      heard(E("03", "notice"), "What is old?", ["The furniture", "The hair", "The homework"], 0, "'my furniture is old'."),
      ch("Which noun never takes -s?", ["information", "book", "chair"], 0, "information = uncountable."),
      ch("Which is correct?", ["some advice", "an advice", "advices"], 0, "advice = uncountable."),
    ],
    [
      es(ch("Why is 'I have many homeworks' wrong?", ["'homework' is uncountable: a lot of homework.", "It needs 'much homeworks'.", "It's correct."], 0, "No -s."), "'homework' no tiene plural: a lot of homework."),
      ch("'My hair ___ long.'", ["is", "are"], 0, "hair = uncountable → is."),
      ch("'The news ___ good today.'", ["is", "are"], 0, "news = singular."),
      ctx("You want one suggestion from your teacher.", "Best phrase:", ["Can you give me a piece of advice?", "Can you give me an advice?", "Can you give me one advices?"], 0, "a piece of advice."),
      ch("Which phrase is correct?", ["a lot of furniture", "a lot of furnitures", "many furnitures"], 0, "No -s."),
    ],
    [
      gap("I need some", "about the bus times. (información)", ["information"], "No -s."),
      gap("We have a lot of", "today. (tareas)", ["homework"], "No -s."),
      tr("Correct the sentence.", "Thanks for the advices.", ["Thanks for the advice"], "advice, no -s."),
      dict(E("03", "dict"), ["Can you give me some advice"]),
      say("I need some information, please.", "No -s on information."),
    ],
    [
      fix(["Can I have", "some informations", "about the course?"], 1, ["some information"], "No -s."),
      es(fix(["My mum gave me", "a good advice", "yesterday."], 1, ["some good advice", "a good piece of advice", "good advice"], "No 'a' with advice."), "No uses 'a' con 'advice': some advice / a piece of advice."),
      fix(["We bought new", "furnitures", "for the living room."], 1, ["furniture"], "No -s."),
      ch("Which is correct?", ["Her hair is very long.", "Her hairs are very long.", "Her hair are very long."], 0, "hair = uncountable."),
      ch("Which is wrong?", ["I have many homeworks.", "I have a lot of homework.", "I don't have much homework."], 0, "No -s."),
    ],
    [
      ch("At a tourist office. Best:", ["Could I have some information about museums?", "Could I have informations about museums?", "Could I have an information?"], 0, "some information."),
      ch("Your friend has a problem. Best offer:", ["Can I give you some advice?", "Can I give you an advice?", "Can I give you advices?"], 0, "some advice."),
      ctx("Your teacher asks why you're tired.", "Best answer:", ["I had a lot of homework last night.", "I had a lot of homeworks.", "I had many homework."], 0, "a lot of homework."),
      ch("Which sentence sounds natural?", ["The news is on at eight.", "The news are on at eight.", "The new is on at eight."], 0, "news = singular."),
      say("Can you give me some advice about my homework?", "No -s on advice or homework."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a message asking a friend for help with a school problem (30 words or more). Use advice, homework and information correctly." },
      { universe: "futures", text: "Write an email asking for information about a summer camp (30 words or more). Use information, advice and money correctly." },
      { universe: "arts", text: "Write about your bedroom (30 words or more). Use furniture, music and hair correctly." },
    ],
    minWords: 30,
    checks: [
      { label: "Three uncountable nouns", pattern: "\\b(information|advice|homework|furniture|hair|news|money|bread|music|rice|water|equipment)\\b", min: 3 },
    ],
    rubric: ["I didn't add -s to uncountable nouns.", "I didn't use 'a / an' with them.", "I used some, a lot of or a piece of."],
    model: "Hi Lina! I need some advice. I have a lot of homework this week, and I don't understand the science project. Can you send me some information about the solar system? Also, my mum says I need more money for the trip. Help!",
  },
};

const falseFriends: NodePractice = {
  nodeId: "a2.false-friends-set-1",
  explain: "False friends are English words that look like Spanish words but mean something different. sensible = practical and wise (not 'sensible' in Spanish, which is 'sensitive'). actually = in fact (not 'actualmente', which is 'currently / now'). embarrassed = feeling silly (not 'embarazada', which is 'pregnant'). library = biblioteca (not 'librería', which is 'bookshop'). carpet = alfombra (not 'carpeta', which is 'folder').",
  pattern: ["sensible = práctico · sensitive = sensible", "actually = en realidad · now / currently = actualmente", "embarrassed = avergonzado · pregnant = embarazada", "library = biblioteca · bookshop = librería · carpet = alfombra · folder = carpeta"],
  es: "Estos son «falsos amigos»: parecen palabras en español pero significan otra cosa. ¡Cuidado con 'embarrassed', no es «embarazada»!",
  steps: [
    [
      heard(E("04", "notice"), "What is the brother like?", ["Sensible: he makes good decisions", "Sensitive: he cries at films", "Embarrassed"], 0, "'My brother is sensible: he makes good decisions.'"),
      heard(E("04", "notice"), "Where is the speaker now?", ["In Bogotá", "In Cali", "In a library"], 0, "'I'm in Bogotá now.'"),
      heard(E("04", "notice"), "Why did the speaker go to the library?", ["To read", "To buy books", "To meet friends"], 0, "'to read, not to buy books'."),
      ch("'library' means …", ["biblioteca", "librería", "libreta"], 0, "False friend."),
      ch("'embarrassed' means …", ["avergonzado", "embarazada", "enojado"], 0, "False friend."),
    ],
    [
      es(ch("'Actually, I'm 14, not 13.' What does 'actually' mean here?", ["In fact / really", "Currently / now", "Finally"], 0, "actually = in fact."), "actually = en realidad; actualmente = currently / now."),
      ch("A practical person with good decisions is …", ["sensible", "sensitive", "embarrassed"], 0, "sensible = practical."),
      ch("A person who cries easily at sad films is …", ["sensitive", "sensible", "actual"], 0, "sensitive = sensible (Spanish)."),
      ctx("You want to buy a new book.", "Where do you go?", ["A bookshop", "A library", "A carpet"], 0, "bookshop = librería."),
      ch("Your teacher's papers are in a …", ["folder", "carpet", "library"], 0, "folder = carpeta."),
    ],
    [
      gap("I'm going to the", "to borrow a book. (biblioteca)", ["library"], "library = biblioteca."),
      gap("I felt so", "when I fell in front of everyone. (avergonzado)", ["embarrassed"], "embarrassed = avergonzado."),
      tr("Say it in English.", "Actualmente vivo en Medellín.", ["Now I live in Medellín", "Currently I live in Medellín", "I currently live in Medellín", "I live in Medellín now", "Currently, I live in Medellín", "At the moment I live in Medellín"], "actualmente = currently / now."),
      dict(E("04", "dict"), ["Actually, I'm in Bogotá now", "Actually I'm in Bogotá now", "Actually, I am in Bogotá now"]),
      say("I felt really embarrassed, but my friends laughed with me.", "emBARrassed."),
    ],
    [
      es(fix(["My aunt is", "embarrassed,", "the baby is coming in May."], 1, ["pregnant,", "pregnant"], "A baby is coming → pregnant."), "«Embarazada» = pregnant. 'Embarrassed' = avergonzado."),
      fix(["I bought this book at the", "library", "for 40,000 pesos."], 1, ["bookshop"], "You buy at a bookshop."),
      fix(["Please put your homework in the blue", "carpet", "."], 1, ["folder"], "folder = carpeta."),
      ch("Which is correct?", ["My brother is very sensitive; he cries at films.", "My brother is very sensible; he cries at films.", "My brother is actual."], 0, "sensitive."),
      ch("Which is wrong?", ["Actually I live in Cali (meaning 'now').", "Currently I live in Cali.", "I live in Cali now."], 0, "actually ≠ currently."),
    ],
    [
      ch("You forgot your lines in the school play. You say:", ["I was so embarrassed!", "I was so pregnant!", "I was so sensible!"], 0, "embarrassed."),
      ch("Your friend makes good, practical choices. You say:", ["She's very sensible.", "She's very sensitive.", "She's very embarrassed."], 0, "sensible = practical."),
      ctx("Someone thinks you're 13, but you're 14.", "Best reply:", ["Actually, I'm 14.", "Currently, I'm 14.", "Sensible, I'm 14."], 0, "actually = in fact."),
      ch("Which is the right place to study quietly and borrow books?", ["the library", "the bookshop", "the carpet"], 0, "library."),
      say("Actually, I study in the library, not in the bookshop.", "Clear contrast."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short funny story (30 words or more) using at least three of these words correctly: actually, sensible, sensitive, embarrassed, library, bookshop, folder, carpet." },
      { universe: "words", text: "Make a mini guide for Spanish speakers (30 words or more): explain three false friends with an example sentence for each." },
      { universe: "past", text: "Write about an embarrassing moment (30 words or more) using at least three false friends correctly." },
    ],
    minWords: 30,
    checks: [
      { label: "Three false-friend words", pattern: "\\b(actually|sensible|sensitive|embarrassed|library|bookshop|folder|carpet|pregnant|currently)\\b", min: 3 },
    ],
    rubric: ["I used at least three false friends correctly.", "My meaning is clear.", "I didn't use 'embarrassed' for 'pregnant'."],
    model: "Last week I went to the library to study. Actually, I wanted to see my friend Ana there. I opened my folder and all my papers fell on the carpet! I was so embarrassed. Ana is very sensible; she helped me and didn't laugh.",
  },
};

const explainMe: NodePractice = {
  nodeId: "a2.explain-me-go-to-home",
  explain: "Two common mistakes. 1) 'explain' needs 'to' before the person: 'Can you explain it to me?' or 'Explain the homework to me' (not 'Explain me'). 2) 'home' doesn't take 'to' after go, come or get: 'I go home', 'Come home', 'I got home late' (not 'go to home'). But: 'I'm at home' and 'I stayed at home' are correct.",
  pattern: ["explain + something + to + person: Explain it to me.", "Not: Explain me the homework.", "go / come / get + home: I go home. (no 'to')", "be / stay + at home: I'm at home."],
  es: "En español decimos «explícame», pero en inglés es 'explain it to me'. Y se dice 'go home' sin 'to' (no 'go to home').",
  steps: [
    [
      heard(E("05", "notice"), "What does the speaker ask the teacher to explain?", ["The homework", "The test", "The rule"], 0, "'explain the homework to me?'"),
      heard(E("05", "notice"), "Where does the speaker go after school?", ["Home", "To the park", "To the library"], 0, "'After school, I go home.'"),
      heard(E("05", "notice"), "Who did the teacher explain the rule to?", ["To us", "To the parents", "To the director"], 0, "'explained the rule to us'."),
      ch("Which is correct?", ["Can you explain it to me?", "Can you explain me it?", "Can you explain me?"], 0, "explain + to + person."),
      ch("Which is correct?", ["I go home.", "I go to home.", "I go at home."], 0, "go home."),
    ],
    [
      es(ch("Why is 'Explain me the rule' wrong?", ["'explain' needs 'to' before the person.", "'rule' is wrong.", "It's correct."], 0, "Explain the rule to me."), "En inglés: 'Explain the rule to me', no 'Explain me'."),
      ch("'I'm ___ home today.' (location)", ["at", "to", "in to"], 0, "be at home."),
      ch("'What time did you get ___?'", ["home", "to home", "at home"], 0, "get home."),
      ctx("You don't understand the exercise.", "Best question to your teacher:", ["Could you explain it to me, please?", "Could you explain me, please?", "Explain me!"], 0, "explain it to me."),
      ch("Which needs 'at'?", ["stay ___ home", "go ___ home", "come ___ home"], 0, "stay at home."),
    ],
    [
      gap("Can you explain the game", "me?", ["to"], "explain … to me."),
      gap("Let's go", "now. It's late.", ["home"], "go home."),
      tr("Correct the sentence.", "My dad explained me the problem.", ["My dad explained the problem to me"], "explain + something + to + person."),
      dict(E("05", "dict"), ["Can you explain it to me, please", "Can you explain it to me please"]),
      say("Can you explain it to me, please?", "explain it TO me."),
    ],
    [
      fix(["Please", "explain me", "the homework."], 1, ["explain"], "Explain the homework to me."),
      es(fix(["At six, I", "went to home", "by bus."], 1, ["went home"], "go home (no 'to')."), "'went home', sin 'to'."),
      fix(["I stayed", "in home", "because it was raining."], 1, ["at home"], "stay at home."),
      ch("Which is correct?", ["The teacher explained the exercise to us.", "The teacher explained us the exercise.", "The teacher explained to us it."], 0, "explain + thing + to + person."),
      ch("Which is wrong?", ["I came to home late.", "I came home late.", "I was at home all day."], 0, "come home."),
    ],
    [
      ch("You're confused in maths class. Best:", ["Excuse me, could you explain this to me again?", "Explain me again!", "Me explain."], 0, "Polite + correct."),
      ch("Your mum asks when you'll be back. Best:", ["I'll be home at seven.", "I'll be to home at seven.", "I'll go to home at seven."], 0, "be home."),
      ctx("A friend asks why you weren't at the party.", "Best answer:", ["I stayed at home because I was ill.", "I stayed to home.", "I stayed in home."], 0, "stay at home."),
      ch("Which sentence is natural?", ["Can you explain the rules to my brother?", "Can you explain my brother the rules?", "Explain my brother rules."], 0, "explain + to + person."),
      say("After school, I go home and do my homework.", "go HOME (no 'to')."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about your afternoon routine (30 words or more). Use 'go / come / get home' and 'explain … to …' correctly." },
      { universe: "screens", text: "Write a message asking a friend to explain a game to you (30 words or more). Use 'explain … to me' and 'go home' correctly." },
      { universe: "science", text: "Write about a science class (30 words or more): what the teacher explained to you and what you did when you got home." },
    ],
    minWords: 30,
    checks: [
      { label: "explain … to + person", pattern: "\\bexplain(ed|s|ing)?\\s+(\\w+\\s+){0,4}to\\s+(me|us|him|her|them|my|the|you)\\b", min: 1 },
      { label: "go / come / get home (no 'to')", pattern: "\\b(go|goes|went|going|come|comes|came|coming|get|gets|got|getting)\\s+home\\b", min: 1 },
    ],
    rubric: ["I wrote 'explain it to me', not 'explain me'.", "I wrote 'go home' without 'to'.", "I used 'at home' with be or stay."],
    model: "Today our science teacher explained the solar system to us. It was interesting! After school, I went home by bus. I got home at four. My brother was at home, so I explained the lesson to him. Then we played video games.",
  },
};

export const A2_SOUNDS: NodePractice[] = [ed, stress];
export const A2_ERRORS: NodePractice[] = [doublePast, doubleComp, uncountPlural, falseFriends, explainMe];
