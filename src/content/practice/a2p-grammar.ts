/* A2+ Grammar. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review.
   Lower band: each skill has a short Spanish note (es) and a few Spanish glosses shown only after a wrong answer. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, es, fix, gap, heard, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/a2pg-${n}-${k}.mp3`;

export const A2P_GRAMMAR_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "Have you ever been to the sea? I have! But I've never seen snow. My brother has just finished his exams, and he has already started his holiday. I haven't finished mine yet." },
  { file: X("01", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "I have never seen snow." },
  { file: X("02", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "I've visited Cartagena three times. The first time, I went with my grandparents in 2019. Last year, we went again and we stayed in a small hotel near the beach. I've eaten a lot of fried fish there!" },
  { file: X("02", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Last year we went to the beach." },
  { file: X("03", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "I was walking home when it started to rain. While I was running to the bus stop, I dropped my phone. A girl was waiting at the stop, and she picked it up for me. What a nice person!" },
  { file: X("03", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "I was walking home when it started to rain." },
  { file: X("04", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "If it rains tomorrow, we will stay at home and watch a film. If it's sunny, we'll go to the park. And if you finish your homework, I'll make pizza!" },
  { file: X("04", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "If it rains, we will stay at home." },
  { file: X("05", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "This is my friend Sofía. She's the girl who sits next to me in maths. This is the café where we meet after school. And this is the cake that we always share. It's chocolate, of course!" },
  { file: X("05", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "She is the girl who sits next to me." },
  { file: X("06", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "When I was little, I used to play in the street with my cousins. We used to ride our bikes every afternoon. I didn't use to like vegetables, but now I love them." },
  { file: X("06", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "I used to ride my bike every afternoon." },
  { file: X("07", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Take an umbrella. It might rain later. We may go to the cinema on Saturday, but I'm not sure. I can't go swimming; the water is too cold. And I'm not old enough to drive yet." },
  { file: X("07", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "It might rain later. Take an umbrella." },
  { file: X("08", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "For the party, we have a few balloons and a little juice. We don't have much time, and there are only a few chairs. Pizza? We have none! Can someone buy some, please?" },
  { file: X("08", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "We have a few balloons and a little juice." },
];

const everNever: NodePractice = {
  nodeId: "a2p.present-perfect-ever-never-just-already",
  explain: "Use the present perfect (have / has + past participle) to talk about experiences in your life, without saying when. 'Have you ever been to the sea?' means 'at any time in your life'. 'I've never seen snow' means 'not at any time'. Use 'just' for something that happened a moment ago, 'already' for something that happened sooner than expected, and 'yet' in questions and negatives for something we expect.",
  pattern: ["have / has + past participle", "Have you ever + participle …? · I've never + participle …", "I've just finished. (a moment ago)", "She's already left. (earlier than expected)", "I haven't finished yet. · Have you finished yet?"],
  es: "Es parecido a «he visto», «has estado». Ever = alguna vez, never = nunca, just = acabo de, already = ya, yet = todavía / ya (en preguntas). Ojo: 'yet' va al final de la frase.",
  steps: [
    [
      heard(X("01", "notice"), "Has the speaker been to the sea?", ["Yes", "No", "We don't know"], 0, "'Have you ever been to the sea? I have!'"),
      heard(X("01", "notice"), "What has the speaker never seen?", ["Snow", "The sea", "Exams"], 0, "'I've never seen snow.'"),
      heard(X("01", "notice"), "What has the brother just done?", ["Finished his exams", "Started school", "Seen snow"], 0, "'My brother has just finished his exams.'"),
      ch("Which word means 'at any time in your life'?", ["ever", "yet", "just"], 0, "Have you ever …?"),
      ch("Which is the present perfect?", ["She has visited Peru.", "She visits Peru.", "She is visiting Peru."], 0, "has + past participle."),
    ],
    [
      ch("'I've just eaten.' When did I eat?", ["A moment ago", "Last year", "Tomorrow"], 0, "just = a very short time ago.", ),
      es(ch("'I haven't done my homework yet.' What does it mean?", ["I'm going to do it, but not now.", "I did it yesterday.", "I never do homework."], 0, "yet = we expect it to happen."), "'yet' en negativo = todavía no."),
      ch("Where does 'already' usually go?", ["Between have and the participle", "At the end", "At the start"], 0, "I've already finished."),
      ch("Where does 'yet' usually go?", ["At the end", "Between have and the participle", "Before the subject"], 0, "Have you finished yet?"),
      ctx("Your friend says: 'I've never eaten sushi.'", "Has your friend tried sushi?", ["No, not in his life", "Yes, once", "Yes, today"], 0, "never = not at any time."),
    ],
    [
      gap("Have you", "been to Medellín?", ["ever"], "Have you ever + participle?"),
      gap("I've", "finished. Now I can play!", ["just", "already"], "just / already go between have and the participle."),
      gap("She hasn't called me", ".", ["yet"], "yet at the end of a negative."),
      dict(X("01", "dict"), ["I have never seen snow", "I've never seen snow"]),
      say("Have you ever been to the sea?", "Stress the main words: Have you EVER been to the SEA?"),
    ],
    [
      es(fix(["I", "have saw", "that film."], 1, ["have seen", "'ve seen"], "Use the past participle: see → seen."), "Con 'have' usa el participio: seen, no saw."),
      fix(["Have you", "ever went", "to Bogotá?"], 1, ["ever been"], "go → been (been to = visited)."),
      fix(["I haven't", "yet finished", "my project."], 1, ["finished"], "Put 'yet' at the end: I haven't finished my project yet."),
      ch("Which is correct?", ["She has already left.", "She has left already yesterday.", "She already has leave."], 0, "has + already + participle."),
      ch("Which is wrong?", ["I have never ate mango.", "I have never eaten mango.", "I've never tried mango."], 0, "eat → eaten."),
    ],
    [
      ch("Your mum asks if you did your homework. You finished it a minute ago. You say:", ["I've just finished it!", "I finish it.", "I'm finishing it tomorrow."], 0, "just = a moment ago."),
      ch("Best question for a new friend:", ["Have you ever been to a concert?", "Did you ever be to a concert?", "Are you ever go to a concert?"], 0, "Have you ever been …?"),
      ctx("The film starts at 7. It's 6:50 and your friend asks: 'Are you ready?'", "Best answer:", ["Yes, I've already got my jacket!", "Yes, I've got my jacket yet.", "Yes, I get my jacket last week."], 0, "already = sooner than expected."),
      ch("Which is the most natural reply to 'Have you finished?'", ["Not yet.", "Not already.", "Not just."], 0, "Not yet = still not."),
      say("I haven't finished my homework yet.", "Contract it: I HAVEN'T finished … YET."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write 'My life list' (35 words or more): things you have done and have never done. Use ever or never, and just, already or yet." },
      { universe: "screens", text: "Write about games or series (35 words or more): which have you played or watched, and which have you never tried? Use never, and already or yet." },
      { universe: "past", text: "Write about places you have visited and places you have never visited (35 words or more). Use never, and just or already." },
    ],
    minWords: 35,
    checks: [
      { label: "Two present perfect verbs (have / has + participle)", pattern: "\\b(have|has|'ve|'s|haven't|hasn't)\\s+(ever\\s+|never\\s+|just\\s+|already\\s+)?(been|seen|eaten|gone|done|played|visited|tried|watched|read|made|had|met|finished|travelled|traveled|won|lost|heard|written|climbed|swum|ridden|cooked|bought)\\b", min: 2 },
      { label: "ever / never / just / already / yet", pattern: "\\b(ever|never|just|already|yet)\\b", min: 2 },
    ],
    rubric: ["I used have / has + past participle.", "I used never or ever, and just, already or yet.", "I didn't say when (no 'yesterday' or 'last year')."],
    model: "I have been to the sea three times, but I have never seen snow. I have already tried sushi and I liked it! I have never ridden a horse. My best friend has just bought a skateboard, but I haven't tried it yet.",
  },
};

const ppVsPast: NodePractice = {
  nodeId: "a2p.present-perfect-vs-past-simple",
  explain: "Use the present perfect for experiences or results without a time: 'I've visited Cartagena three times.' Use the past simple when you say or ask when: 'I went there last year.' Words like yesterday, last week, in 2019 and ago always take the past simple. A conversation often starts with the present perfect and then moves to the past simple for the details.",
  pattern: ["No time said → present perfect: I've been to Cali.", "Time said → past simple: I went to Cali in 2022.", "yesterday · last … · ago · in 2019 · when …? → past simple", "Have you ever …? → Yes. When did you …?"],
  es: "En español a veces usamos el pasado para todo, pero en inglés, si dices cuándo (yesterday, last year, ago), usa el pasado simple. Si no dices cuándo, usa have / has + participio.",
  steps: [
    [
      heard(X("02", "notice"), "How many times has the speaker visited Cartagena?", ["Three", "Two", "One"], 0, "'I've visited Cartagena three times.'"),
      heard(X("02", "notice"), "When was the first visit?", ["In 2019", "Last year", "Last month"], 0, "'The first time, I went … in 2019.'"),
      heard(X("02", "notice"), "Where did they stay last year?", ["In a small hotel near the beach", "With grandparents", "In a big apartment"], 0, "'we stayed in a small hotel near the beach'."),
      ch("'I went there last year.' Which tense?", ["Past simple", "Present perfect", "Present simple"], 0, "last year → past simple."),
      ch("'I've eaten a lot of fish there.' Do we know when?", ["No", "Yes, yesterday", "Yes, in 2019"], 0, "Present perfect: time is not important."),
    ],
    [
      ch("Which time word goes with the past simple?", ["yesterday", "ever", "yet"], 0, "yesterday = finished time."),
      ch("Which time word goes with the present perfect?", ["never", "last week", "ago"], 0, "never = in my life."),
      ctx("A: Have you ever been to a concert? B: Yes, I have.", "What is A's next question?", ["When did you go?", "When have you gone?", "When do you go?"], 0, "Ask for details with the past simple."),
      es(ch("Why is 'I have seen him yesterday' wrong?", ["'Yesterday' needs the past simple.", "'Seen' is wrong.", "It needs 'ever'."], 0, "Finished time → past simple: I saw him yesterday."), "Con 'yesterday' nunca uses 'have': I saw him yesterday."),
      ch("Which is about a life experience?", ["I've climbed a volcano.", "I climbed a volcano in May.", "I climb every Sunday."], 0, "No time → experience."),
    ],
    [
      gap("I", "my phone last night. (lose)", ["lost"], "last night → past simple."),
      gap("She has", "to Spain twice. (be)", ["been"], "has been = experience."),
      tr("Rewrite with 'last summer'.", "I've been to Santa Marta.", ["I went to Santa Marta last summer", "Last summer I went to Santa Marta", "Last summer, I went to Santa Marta"], "Time said → past simple: went."),
      dict(X("02", "dict"), ["Last year we went to the beach", "Last year, we went to the beach"]),
      say("Have you ever been to Cartagena? When did you go?", "Two questions, two tenses."),
    ],
    [
      fix(["I", "have visited", "my aunt last weekend."], 1, ["visited"], "last weekend → past simple."),
      fix(["When", "have you arrived", "in Bogotá?"], 1, ["did you arrive"], "When …? → past simple."),
      fix(["She", "has bought", "a new bike two days ago."], 1, ["bought"], "ago → past simple."),
      ch("Which is correct?", ["I've never tried arepas de choclo.", "I never have tried arepas de choclo yesterday.", "I didn't never try arepas."], 0, "never + present perfect, no time."),
      ch("Which is wrong?", ["Did you ever seen a whale?", "Have you ever seen a whale?", "Did you see the whale yesterday?"], 0, "Ever experience → Have you ever seen …?"),
    ],
    [
      ch("You want to tell your friend about a trip in 2020. Best start:", ["I went to Peru in 2020.", "I've gone to Peru in 2020.", "I go to Peru in 2020."], 0, "in 2020 → past simple."),
      ch("Best way to start a conversation about films:", ["Have you seen the new Spider-Man film?", "Did you saw the new film?", "Do you seen the new film?"], 0, "Present perfect opens the topic."),
      ctx("A: Have you finished the book? B: Yes, I ___ it on Sunday.", "Best word:", ["finished", "have finished", "finish"], 0, "on Sunday → past simple."),
      ch("Which mini-dialogue is natural?", ["Have you been to Cali? Yes, I went last year.", "Did you go to Cali? Yes, I've gone last year.", "Do you go to Cali? Yes, I've went."], 0, "Present perfect → past simple."),
      say("I've been to Cali. I went there last year.", "Two tenses: I've BEEN … I WENT …"),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about a place you have visited (35 words or more). Start with the present perfect, then tell the details (when, who, what) in the past simple." },
      { universe: "arts", text: "Write about a concert, play or film you have seen (35 words or more). Start with the present perfect, then give details with the past simple." },
      { universe: "science", text: "Write about a museum or park you have visited (35 words or more). Start with the present perfect, then give details with the past simple." },
    ],
    minWords: 35,
    checks: [
      { label: "One present perfect verb", pattern: "\\b(have|has|'ve|'s)\\s+(ever\\s+|never\\s+|already\\s+|just\\s+)?(been|seen|visited|gone|eaten|tried|watched|played|done|had|met|travelled|traveled)\\b", min: 1 },
      { label: "A finished time word (yesterday, last, ago, in 20…)", pattern: "\\b(yesterday|last\\s+\\w+|\\w+\\s+ago|in\\s+(19|20)\\d\\d|when\\s+i\\s+was)\\b", min: 1 },
    ],
    rubric: ["I started with the present perfect (no time).", "I used the past simple with a time word for details.", "I didn't use 'have' with yesterday, last or ago."],
    model: "I have been to Villa de Leyva twice. The last time, I went with my class in 2023. We visited the big square and we ate ice cream. It was very sunny, and I took a lot of photos. I want to go again next year!",
  },
};

const pastCont: NodePractice = {
  nodeId: "a2p.past-continuous-with-when-while",
  explain: "Use the past continuous (was / were + -ing) for a longer action in progress in the past. Use the past simple for a short action that interrupts it. 'I was walking home when it started to rain.' Use 'when' before the short action and 'while' before the long action: 'While I was running, I dropped my phone.'",
  pattern: ["was / were + verb-ing", "I was walking home when it started to rain.", "While I was running, I dropped my phone.", "long action (past continuous) + short action (past simple)"],
  es: "Es como «estaba caminando cuando empezó a llover». While = mientras. Usa was con I / he / she / it y were con you / we / they.",
  steps: [
    [
      heard(X("03", "notice"), "What was the speaker doing when it started to rain?", ["Walking home", "Waiting for the bus", "Playing football"], 0, "'I was walking home when it started to rain.'"),
      heard(X("03", "notice"), "What happened while the speaker was running?", ["They dropped their phone.", "They fell over.", "The bus left."], 0, "'While I was running … I dropped my phone.'"),
      heard(X("03", "notice"), "Who picked up the phone?", ["A girl at the bus stop", "The bus driver", "A friend"], 0, "'she picked it up for me'."),
      ch("Which is the past continuous?", ["was walking", "walked", "walks"], 0, "was + -ing."),
      ch("In 'I was walking when it started to rain', which action is longer?", ["walking", "started to rain", "Both the same"], 0, "Past continuous = the longer background action."),
    ],
    [
      ch("Which word goes before the long action?", ["while", "when", "ago"], 0, "While I was walking …"),
      ch("'They ___ playing football.'", ["were", "was", "did"], 0, "they → were."),
      ctx("'While I was cooking, the phone rang.'", "Which action interrupted the other?", ["The phone rang.", "I was cooking.", "Neither"], 0, "Short action interrupts."),
      ch("Choose the right picture: 'When I arrived, they were eating.'", ["They started eating before I arrived.", "They started eating after I arrived.", "They didn't eat."], 0, "They were already in the middle of eating."),
      es(ch("'I was sleeping when you called.' What does it mean?", ["I was asleep, then you called.", "I went to sleep after you called.", "I always sleep when you call."], 0, "Long action, short interruption."), "«Estaba durmiendo cuando llamaste»."),
    ],
    [
      gap("We", "watching TV when the lights went out.", ["were"], "we → were + -ing."),
      gap("She was reading", "her brother came in.", ["when"], "when + short action."),
      tr("Join with 'while'.", "I was waiting for the bus. I saw my teacher.", ["While I was waiting for the bus, I saw my teacher", "While I was waiting for the bus I saw my teacher", "I saw my teacher while I was waiting for the bus"], "While + long action, short action."),
      dict(X("03", "dict"), ["I was walking home when it started to rain"]),
      say("I was walking home when it started to rain.", "Link: I was WALKing HOME when it STARted to RAIN."),
    ],
    [
      fix(["They", "was playing", "in the park."], 1, ["were playing"], "they → were."),
      fix(["While I", "cooked dinner,", "the phone was ringing."], 1, ["was cooking dinner,", "was cooking dinner"], "The long action takes the past continuous."),
      fix(["I was sleeping", "while", "the alarm rang."], 1, ["when"], "when + short action."),
      ch("Which is correct?", ["What were you doing at 8 last night?", "What did you doing at 8 last night?", "What was you doing at 8 last night?"], 0, "you → were + -ing."),
      ch("Which is wrong?", ["I was knowing the answer.", "I knew the answer.", "I was thinking about it."], 0, "'know' doesn't use -ing."),
    ],
    [
      ch("Your teacher asks why you are late. Best answer:", ["I was waiting for the bus when it broke down.", "I wait for the bus and it break down.", "I was wait for the bus when it was breaking."], 0, "Long + short action."),
      ch("Best start for a story:", ["It was raining and everyone was sleeping, when suddenly …", "It rains and everyone sleeps, when suddenly …", "It rained and everyone slept, when suddenly …"], 0, "Past continuous sets the scene."),
      ctx("A friend asks: 'What were you doing when the earthquake happened?'", "Best answer:", ["I was having lunch.", "I had lunch.", "I have lunch."], 0, "Answer with the past continuous."),
      ch("Which sentence sounds most natural?", ["While we were walking, we saw a dog.", "While we walked, we were seeing a dog.", "When we were walk, we saw a dog."], 0, "While + past continuous, past simple."),
      say("What were you doing at eight o'clock?", "Weak form: What w'r you DOing?"),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short story (35 words or more) that starts 'I was … when …'. Use the past continuous twice and 'when' or 'while'." },
      { universe: "futures", text: "Write a short story about a strange day at school (35 words or more). Use the past continuous twice and 'when' or 'while'." },
      { universe: "science", text: "Write about a storm or a power cut (35 words or more). What were people doing when it happened? Use the past continuous twice and 'when' or 'while'." },
    ],
    minWords: 35,
    checks: [
      { label: "Two past continuous verbs (was / were + -ing)", pattern: "\\b(was|were)\\s+(not\\s+)?\\w+ing\\b", min: 2 },
      { label: "'when' or 'while'", pattern: "\\b(when|while)\\b", min: 1 },
    ],
    rubric: ["I used was / were + -ing for the long actions.", "I used the past simple for the short action.", "I used 'when' or 'while' to join them."],
    model: "Last Friday, I was doing my homework when the lights went out. My mum was cooking and my brother was playing a game. While we were looking for a torch, the cat jumped on the table. We laughed a lot!",
  },
};

const firstCond: NodePractice = {
  nodeId: "a2p.first-conditional",
  explain: "Use the first conditional for real possibilities in the future. Form: If + present simple, will + verb. 'If it rains, we'll stay at home.' After 'if', use the present simple, not 'will'. You can change the order: 'We'll stay at home if it rains' (no comma). Use 'unless' to mean 'if not'.",
  pattern: ["If + present simple, will + verb", "If it rains, we'll stay at home.", "We'll stay at home if it rains.", "No 'will' after 'if': If it rains (not 'If it will rain')", "unless = if not"],
  es: "Es como «si llueve, nos quedaremos en casa». Igual que en español, después de 'if' va el presente: If it rains, no 'If it will rain'.",
  steps: [
    [
      heard(X("04", "notice"), "What will they do if it rains?", ["Stay at home and watch a film", "Go to the park", "Make pizza"], 0, "'If it rains … we will stay at home and watch a film.'"),
      heard(X("04", "notice"), "What will they do if it's sunny?", ["Go to the park", "Watch a film", "Go swimming"], 0, "'If it's sunny, we'll go to the park.'"),
      heard(X("04", "notice"), "What does the speaker promise?", ["Pizza, if you finish your homework", "A film tomorrow", "A trip to the beach"], 0, "'if you finish your homework, I'll make pizza!'"),
      ch("Which is a first conditional?", ["If you study, you'll pass.", "If you studied, you'd pass.", "You study, you pass."], 0, "If + present, will + verb."),
      ch("Which part uses 'will'?", ["The result", "The if-part", "Both"], 0, "If it rains (present), we'll stay (will)."),
    ],
    [
      ch("'If I see Ana, I'll tell her.' Is this possible in the future?", ["Yes, it's a real possibility.", "No, it's imaginary.", "It's about the past."], 0, "First conditional = real future possibility."),
      ch("Which verb goes after 'if'?", ["Present simple", "will", "Past simple"], 0, "If it rains …"),
      es(ch("'Unless you hurry, you'll miss the bus.' This means:", ["If you don't hurry, you'll miss the bus.", "If you hurry, you'll miss the bus.", "You will hurry."], 0, "unless = if not."), "unless = a menos que / si no."),
      ctx("Mum: 'If you don't tidy your room, you won't go out.'", "What happens if you don't tidy?", ["You can't go out.", "You can go out.", "Mum will tidy it."], 0, "won't = will not."),
      ch("Where is the comma?", ["After the if-part when it comes first", "Always before 'if'", "Never"], 0, "If it rains, we'll stay. / We'll stay if it rains."),
    ],
    [
      gap("If you", "late, the teacher will be angry. (be)", ["are"], "If + present simple."),
      gap("If we win, we", "celebrate.", ["will", "'ll"], "will + verb in the result."),
      tr("Make one sentence with 'if'.", "Maybe it will be sunny. Then we'll go to the beach.", ["If it is sunny, we will go to the beach", "If it's sunny, we'll go to the beach", "If it's sunny, we will go to the beach", "If it is sunny, we'll go to the beach", "We'll go to the beach if it's sunny", "We will go to the beach if it is sunny"], "If + present, will + verb."),
      dict(X("04", "dict"), ["If it rains, we will stay at home", "If it rains we will stay at home"]),
      say("If it's sunny, we'll go to the park.", "Contract it: we'll."),
    ],
    [
      es(fix(["If it", "will rain,", "we'll stay inside."], 1, ["rains,", "rains"], "No 'will' after 'if'."), "Después de 'if' no va 'will', igual que en español: «si llueve», no «si lloverá»."),
      fix(["If you study,", "you pass", "the test tomorrow."], 1, ["you will pass", "you'll pass"], "Result → will + verb."),
      fix(["She'll be sad", "if you won't", "come to her party."], 1, ["if you don't"], "if + present simple: don't come."),
      ch("Which is correct?", ["If I have time, I'll call you.", "If I will have time, I call you.", "If I have time, I calling you."], 0, "If + present, will + verb."),
      ch("Which is wrong?", ["Unless you don't hurry, you'll be late.", "Unless you hurry, you'll be late.", "If you don't hurry, you'll be late."], 0, "unless already means 'if not'."),
    ],
    [
      ch("Your little brother wants to touch the hot pan. You say:", ["If you touch it, you'll burn your hand!", "If you touched it, you'd burn.", "You touch it, you burn yesterday."], 0, "A real danger now → first conditional."),
      ch("Best way to make a promise to a friend:", ["If you help me with maths, I'll help you with English.", "If you will help me, I help you.", "You help me, I helped you."], 0, "If + present, will + verb."),
      ctx("Your friend is nervous about an exam.", "Best encouragement:", ["If you study tonight, you'll be fine.", "If you studied, you were fine.", "If you will study, you are fine."], 0, "Real future possibility."),
      ch("Which sounds most natural?", ["I'll call you if I'm late.", "I call you if I will be late.", "I'll calling you if I late."], 0, "Result first, no comma."),
      say("If you finish your homework, I'll make pizza.", "Stress the key words: FINISH … PIZZA."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about your plans for next weekend (35 words or more). Use 'if' at least twice: If it rains, … If I have time, …" },
      { universe: "futures", text: "Write about your future (35 words or more). Use 'if' at least twice: If I pass my exams, … If I learn English, …" },
      { universe: "science", text: "Write tips to help the planet (35 words or more). Use 'if' at least twice: If we recycle, …" },
    ],
    minWords: 35,
    checks: [
      { label: "Two if-clauses", pattern: "\\b(if|unless)\\b", min: 2 },
      { label: "Two 'will' / 'won't' results", pattern: "\\b(will|won't|'ll)\\b", min: 2 },
    ],
    rubric: ["I used If + present simple.", "I used will / won't in the result.", "I didn't put 'will' after 'if'."],
    model: "If it's sunny on Saturday, I'll go to the park with my cousins. We'll play football if my uncle brings the ball. If it rains, we'll stay at home and watch a film. If I have time on Sunday, I'll finish my science project.",
  },
};

const relatives: NodePractice = {
  nodeId: "a2p.relative-clauses-who-which-that-where",
  explain: "Relative clauses give more information about a noun. Use 'who' for people, 'which' for things and animals, 'that' for people or things, and 'where' for places. 'She's the girl who sits next to me.' 'This is the café where we meet.' Don't repeat the subject: 'the girl who sits', not 'the girl who she sits'.",
  pattern: ["who → people: the girl who sits next to me", "which → things: the book which I read", "that → people or things: the cake that we share", "where → places: the café where we meet", "No extra pronoun: the boy who plays (not who he plays)"],
  es: "who = que (personas), which = que (cosas), that = que (los dos), where = donde. En inglés no repitas el sujeto: «the girl who sits», no «the girl who she sits».",
  steps: [
    [
      heard(X("05", "notice"), "Who is Sofía?", ["The girl who sits next to the speaker in maths", "The speaker's sister", "The café owner"], 0, "'She's the girl who sits next to me in maths.'"),
      heard(X("05", "notice"), "What happens at the café?", ["They meet after school.", "They study maths.", "They buy books."], 0, "'the café where we meet after school'."),
      heard(X("05", "notice"), "What kind of cake do they share?", ["Chocolate", "Vanilla", "Lemon"], 0, "'It's chocolate, of course!'"),
      ch("Which word is for places?", ["where", "who", "which"], 0, "the café where we meet."),
      ch("Which word is for people?", ["who", "which", "where"], 0, "the girl who sits …"),
    ],
    [
      ch("'The phone ___ I bought is broken.'", ["which", "who", "where"], 0, "Things → which / that."),
      ch("'That's the park ___ we play football.'", ["where", "which", "who"], 0, "Places → where."),
      ch("'He's the teacher ___ helped me.'", ["who", "which", "where"], 0, "People → who / that."),
      ch("Which word works for people AND things?", ["that", "where", "which"], 0, "that = who or which."),
      es(ch("Why is 'the boy who he lives here' wrong?", ["'he' repeats 'who'.", "'who' is for things.", "'lives' is wrong."], 0, "who already replaces he."), "No repitas el sujeto: 'who' ya es 'he'."),
    ],
    [
      gap("This is the school", "my mum studied.", ["where"], "Places → where."),
      gap("I have a friend", "speaks three languages.", ["who", "that"], "People → who / that."),
      tr("Join with 'which'.", "I have a dog. It sleeps all day.", ["I have a dog which sleeps all day", "I have a dog that sleeps all day"], "which replaces 'it'."),
      dict(X("05", "dict"), ["She is the girl who sits next to me", "She's the girl who sits next to me"]),
      say("This is the café where we meet after school.", "Link: CAfé where we MEET."),
    ],
    [
      fix(["I know a boy", "which", "plays the drums."], 1, ["who", "that"], "People → who / that."),
      fix(["That's the shop", "which", "I bought my shoes."], 1, ["where"], "A place where something happens → where."),
      fix(["The girl who", "she won", "the race is my cousin."], 1, ["won"], "Don't repeat the subject."),
      ch("Which is correct?", ["The film that we watched was funny.", "The film who we watched was funny.", "The film where we watched was funny."], 0, "Things → that / which."),
      ch("Which is wrong?", ["She's the singer which I like.", "She's the singer who I like.", "She's the singer that I like."], 0, "People → who / that."),
    ],
    [
      ch("You describe your best friend. Best sentence:", ["She's a person who always makes me laugh.", "She's a person which always make me laugh.", "She's a person where makes me laugh."], 0, "who + present simple."),
      ch("You show a photo of your town. Best caption:", ["This is the river where we swim in summer.", "This is the river which we swim in summer there.", "This is the river who we swim."], 0, "Place → where."),
      ctx("You can't remember the word 'scissors'.", "Best way to explain:", ["It's a thing which you use to cut paper.", "It's a person who cuts.", "It's a place where paper."], 0, "Describe with 'which'."),
      ch("Which description is clearest?", ["He's the boy who lives next door.", "He's the boy lives next door who.", "He's the boy which next door."], 0, "noun + who + verb."),
      say("She's the girl who sits next to me.", "Weak 'who': the GIRL who SITS."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe three people or places in your life (35 words or more). Use who, which, that or where at least three times." },
      { universe: "arts", text: "Describe your favourite artist, song and place to listen to music (35 words or more). Use who, which, that or where at least three times." },
      { universe: "words", text: "Write a mini-dictionary of three objects or jobs (35 words or more): 'A … is a person who …', 'A … is a thing which …'." },
    ],
    minWords: 35,
    checks: [
      { label: "Three relative words (who / which / that / where)", pattern: "\\b(who|which|that|where)\\b", min: 3 },
      { label: "A relative clause after a noun", pattern: "\\b\\w+\\s+(who|which|where)\\s+\\w+", min: 2 },
    ],
    rubric: ["I used who for people and which for things.", "I used where for places.", "I didn't repeat the subject after who or which."],
    model: "My grandma is a person who tells amazing stories. She lives in a small town where there is a big river. She has a parrot which says 'hola' every morning. The food that she cooks is the best in the world!",
  },
};

const usedTo: NodePractice = {
  nodeId: "a2p.used-to-for-past-habits",
  explain: "Use 'used to + verb' for habits or states in the past that are not true now. 'I used to play in the street' (I don't now). Negative: didn't use to (no 'd'). Question: Did you use to …? Don't use 'used to' for the present; for present habits use the present simple or 'usually'.",
  pattern: ["used to + verb: I used to ride my bike.", "didn't use to + verb: I didn't use to like vegetables.", "Did you use to + verb …?", "Now: I usually … (not 'I use to')"],
  es: "Es como «solía jugar» o «antes jugaba». En negativo y pregunta se escribe 'use to' sin 'd': didn't use to, Did you use to …?",
  steps: [
    [
      heard(X("06", "notice"), "Where did the speaker use to play?", ["In the street", "In the park", "At school"], 0, "'I used to play in the street with my cousins.'"),
      heard(X("06", "notice"), "What did they use to do every afternoon?", ["Ride their bikes", "Watch TV", "Do homework"], 0, "'We used to ride our bikes every afternoon.'"),
      heard(X("06", "notice"), "How does the speaker feel about vegetables now?", ["They love them.", "They hate them.", "They never eat them."], 0, "'I didn't use to like vegetables, but now I love them.'"),
      ch("'I used to play in the street.' Do I play in the street now?", ["No", "Yes", "Sometimes"], 0, "used to = past, not now."),
      ch("Which is the negative?", ["didn't use to", "didn't used to", "not used to"], 0, "didn't + use to."),
    ],
    [
      ch("'used to' talks about …", ["past habits that are not true now", "future plans", "things happening now"], 0, "Past only."),
      ch("Which is a question?", ["Did you use to have long hair?", "Did you used to have long hair?", "Used you to have long hair?"], 0, "Did … use to …?"),
      es(ch("'I use to get up at 6.' Why is it wrong?", ["For the present, say 'I usually get up at 6.'", "It needs 'did'.", "It's correct."], 0, "used to is only for the past."), "Para el presente usa 'usually' (normalmente), no 'use to'."),
      ctx("Grandpa: 'We used to walk two hours to school.'", "What does Grandpa mean?", ["He walked to school regularly in the past.", "He walks to school now.", "He will walk tomorrow."], 0, "Repeated past habit."),
      ch("Which can follow 'used to'?", ["live", "living", "lived"], 0, "used to + base verb."),
    ],
    [
      gap("I", "to have a dog, but he died.", ["used"], "used to + verb."),
      gap("She didn't", "to like coffee.", ["use"], "didn't use to (no d)."),
      tr("Rewrite with 'used to'.", "When I was small, I watched cartoons every day. I don't now.", ["When I was small, I used to watch cartoons every day", "When I was small I used to watch cartoons every day", "I used to watch cartoons every day"], "used to + watch."),
      dict(X("06", "dict"), ["I used to ride my bike every afternoon"]),
      say("I used to play in the street with my cousins.", "Say 'used to' as one sound: /juːstə/."),
    ],
    [
      fix(["When I was a child,", "I use to", "climb trees."], 1, ["I used to"], "Past habit → used to."),
      fix(["I", "didn't used to", "like fish."], 1, ["didn't use to"], "After didn't, no d."),
      fix(["We used to", "going", "to the beach."], 1, ["go"], "used to + base verb."),
      ch("Which is correct?", ["Did you use to play football?", "Did you used to play football?", "Do you used to play football?"], 0, "Did + use to."),
      ch("Which is wrong?", ["I use to wake up early every day.", "I usually wake up early.", "I used to wake up early."], 0, "Present habit → usually."),
    ],
    [
      ch("You show an old photo of yourself with long hair. You say:", ["I used to have long hair!", "I use to have long hair!", "I am used to have long hair!"], 0, "Past state, not now."),
      ch("Best question for your grandma:", ["What games did you use to play?", "What games you used to play?", "What games did you used to play?"], 0, "Did + use to."),
      ctx("Your friend says: 'You love vegetables!'", "Best answer:", ["Now I do, but I didn't use to.", "Now I do, but I didn't used to.", "Now I do, but I use to not."], 0, "didn't use to."),
      ch("Which is the most natural?", ["My town used to be very quiet.", "My town use to be quiet now.", "My town is used to be quiet."], 0, "Past state → used to be."),
      say("I didn't use to like vegetables, but now I love them.", "Contrast: DIDN'T … NOW I LOVE them."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about you when you were small (35 words or more). Use 'used to' twice and 'didn't use to' once." },
      { universe: "past", text: "Interview an older person and write about their childhood (35 words or more). Use 'used to' twice and 'didn't use to' once." },
      { universe: "screens", text: "Write about the games or shows you used to love (35 words or more). Use 'used to' twice and 'didn't use to' once." },
    ],
    minWords: 35,
    checks: [
      { label: "Two 'used to + verb'", pattern: "\\bused\\s+to\\s+\\w+", min: 2 },
      { label: "One 'didn't use to'", pattern: "\\b(didn't|did\\s+not)\\s+use\\s+to\\b", min: 1 },
    ],
    rubric: ["I used 'used to' + base verb.", "I wrote 'didn't use to' without d.", "My examples are about the past, not now."],
    model: "When I was small, I used to live in a little town near Tunja. I used to play with my dog every afternoon. I didn't use to like school, but now it's OK. My brother used to watch cartoons all day!",
  },
};

const mightToo: NodePractice = {
  nodeId: "a2p.might-may-for-possibility-too-enough",
  explain: "Use 'might' or 'may' + verb when something is possible but not sure: 'It might rain later.' 'We may go to the cinema.' Use 'too + adjective' when something is more than you want: 'The water is too cold.' Use 'adjective + enough' when something is the right amount: 'I'm not old enough to drive.' Notice: enough comes after the adjective.",
  pattern: ["might / may + verb (maybe): It might rain.", "might not / may not: I might not come.", "too + adjective: too cold, too expensive", "adjective + enough: old enough, tall enough", "not + adjective + enough: not fast enough"],
  es: "might / may = puede que, a lo mejor. too = demasiado. enough = suficiente, y va después del adjetivo: 'old enough', no 'enough old'.",
  steps: [
    [
      heard(X("07", "notice"), "Why should you take an umbrella?", ["It might rain later.", "It's raining now.", "It's very cold."], 0, "'It might rain later.'"),
      heard(X("07", "notice"), "Are they sure about the cinema?", ["No", "Yes", "They said no."], 0, "'We may go … but I'm not sure.'"),
      heard(X("07", "notice"), "Why can't the speaker go swimming?", ["The water is too cold.", "They're not old enough.", "It's raining."], 0, "'the water is too cold'."),
      ch("'It might rain.' How sure is the speaker?", ["Not sure (maybe)", "100% sure", "Sure it won't"], 0, "might = maybe."),
      ch("Where does 'enough' go?", ["After the adjective", "Before the adjective", "At the start"], 0, "old enough."),
    ],
    [
      ch("Which means 'maybe I will go'?", ["I might go.", "I must go.", "I go."], 0, "might = possibility."),
      es(ch("'This bag is too heavy.' What does it mean?", ["I can't carry it easily.", "It's light.", "It's perfect."], 0, "too = more than is good."), "too = demasiado (problema)."),
      ch("'She's tall enough to reach the shelf.' Can she reach it?", ["Yes", "No", "Maybe"], 0, "enough = the right amount."),
      ctx("The shirt costs 300,000 pesos. You have 100,000.", "What do you say?", ["It's too expensive.", "It's expensive enough.", "It's too cheap."], 0, "More than you can pay → too."),
      ch("Which follows 'might'?", ["go", "to go", "going"], 0, "might + base verb."),
    ],
    [
      gap("Take a jacket. It", "be cold tonight.", ["might", "may"], "might / may + verb."),
      gap("I can't drink this tea. It's", "hot.", ["too"], "too + adjective."),
      tr("Rewrite with 'enough'.", "He is too short to play basketball.", ["He isn't tall enough to play basketball", "He is not tall enough to play basketball"], "not + adjective + enough."),
      dict(X("07", "dict"), ["It might rain later. Take an umbrella", "It might rain later, take an umbrella", "It might rain later take an umbrella"]),
      say("I might go to the party, but I'm not sure.", "Stress MIGHT and NOT SURE."),
    ],
    [
      fix(["I", "might to", "visit my aunt."], 1, ["might"], "might + base verb, no 'to'."),
      es(fix(["I'm not", "enough old", "to drive."], 1, ["old enough"], "adjective + enough."), "En español decimos «suficiente edad», pero en inglés: 'old enough'."),
      fix(["This soup is", "too much hot", "to eat."], 1, ["too hot"], "too + adjective (no 'much')."),
      ch("Which is correct?", ["We may not have time.", "We may not to have time.", "We not may have time."], 0, "may not + verb."),
      ch("Which is wrong?", ["She is enough tall.", "She is tall enough.", "She isn't tall enough."], 0, "Adjective first: tall enough."),
    ],
    [
      ch("You aren't sure about the weekend. You text:", ["I might go to the beach.", "I go to the beach sure.", "I must go to the beach."], 0, "might = not sure."),
      ch("Your little cousin wants to ride a big roller coaster. You say:", ["Sorry, you're not tall enough.", "Sorry, you're enough tall.", "Sorry, you're too much small."], 0, "not + adjective + enough."),
      ctx("Your friend wants to walk to a town 30 km away.", "Best advice:", ["It's too far to walk.", "It's far enough to walk.", "It's too much far."], 0, "too + far."),
      ch("Which sounds polite and unsure?", ["I may be a bit late.", "I am late.", "I must be late."], 0, "may = possibility."),
      say("The water is too cold for swimming.", "Stress TOO and COLD."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about your plans for the holidays (35 words or more). Use might or may twice and too or enough once." },
      { universe: "science", text: "Write a weather report for your town (35 words or more). Use might or may twice and too or enough once." },
      { universe: "futures", text: "Write about your future (35 words or more). What might you do? Use might or may twice and too or enough once." },
    ],
    minWords: 35,
    checks: [
      { label: "Two might / may + verb", pattern: "\\b(might|may)\\s+(not\\s+)?\\w+", min: 2 },
      { label: "too + adjective or adjective + enough", pattern: "\\btoo\\s+\\w+|\\b\\w+\\s+enough\\b", min: 1 },
    ],
    rubric: ["I used might or may for things that are not sure.", "I used too or enough correctly.", "I didn't write 'might to' or 'enough old'."],
    model: "In December, I might visit my cousins in Pereira. We may go to a hot spring, but my mum says the water might be too hot for me! I'm not old enough to travel alone, so my dad will come too.",
  },
};

const quantifiers: NodePractice = {
  nodeId: "a2p.quantifiers-a-few-a-little-none",
  explain: "Use 'a few' with countable nouns (chairs, balloons) and 'a little' with uncountable nouns (juice, time, money). Both mean 'some, but not a lot'. 'Much' goes with uncountable nouns in negatives and questions; 'many' goes with countable nouns. 'None' means 'not one' or 'not any', and it stands alone: 'We have none.'",
  pattern: ["a few + countable: a few chairs, a few friends", "a little + uncountable: a little juice, a little time", "many + countable · much + uncountable", "none = not any: Pizza? We have none."],
  es: "a few = unos pocos (con cosas que se cuentan), a little = un poco (con cosas que no se cuentan). none = ninguno / nada.",
  steps: [
    [
      heard(X("08", "notice"), "How many balloons do they have?", ["A few", "A lot", "None"], 0, "'we have a few balloons'."),
      heard(X("08", "notice"), "How much pizza do they have?", ["None", "A little", "A lot"], 0, "'Pizza? We have none!'"),
      heard(X("08", "notice"), "What do they not have much of?", ["Time", "Juice", "Chairs"], 0, "'We don't have much time.'"),
      ch("Which goes with 'juice'?", ["a little", "a few", "many"], 0, "Juice is uncountable."),
      ch("Which goes with 'chairs'?", ["a few", "a little", "much"], 0, "Chairs are countable."),
    ],
    [
      ch("'I have a few friends in Cali.' How many?", ["Some, not many", "None", "Hundreds"], 0, "a few = some."),
      ch("Which noun is uncountable?", ["money", "coin", "dollar"], 0, "money = uncountable."),
      ch("'How ___ water do you drink?'", ["much", "many", "few"], 0, "water = uncountable."),
      es(ch("'How ___ brothers do you have?'", ["many", "much", "little"], 0, "brothers = countable."), "many = muchos (cosas contables), much = mucho (incontables)."),
      ctx("A: Do we have any milk? B: No, there's none.", "How much milk is there?", ["Zero", "A little", "A lot"], 0, "none = not any."),
    ],
    [
      gap("Can I have a", "sugar in my tea?", ["little"], "sugar = uncountable."),
      gap("There are only a", "students in the classroom.", ["few"], "students = countable."),
      tr("Rewrite with 'none'.", "There aren't any biscuits.", ["There are none", "There are none left", "There are no biscuits", "None"], "none = not any."),
      dict(X("08", "dict"), ["We have a few balloons and a little juice"]),
      say("We don't have much time.", "Stress MUCH and TIME."),
    ],
    [
      fix(["I have", "a little", "friends at my new school."], 1, ["a few"], "friends = countable."),
      fix(["She doesn't have", "many", "money."], 1, ["much"], "money = uncountable."),
      fix(["We need", "a few", "rice for dinner."], 1, ["a little", "some"], "rice = uncountable."),
      ch("Which is correct?", ["How many people came?", "How much people came?", "How little people came?"], 0, "people = countable."),
      ch("Which is wrong?", ["I have a few homework.", "I have a little homework.", "I don't have much homework."], 0, "homework = uncountable."),
    ],
    [
      ch("Your friend asks for milk in her coffee. You ask:", ["Just a little?", "Just a few?", "How many milk?"], 0, "milk = uncountable."),
      ch("You describe a quiet park. Best sentence:", ["There were only a few people.", "There were only a little people.", "There was a few people."], 0, "people = countable."),
      ctx("A: How many tickets are left? B: ___. They sold all of them.", "Best answer:", ["None", "A little", "Much"], 0, "none = zero."),
      ch("Which is the most natural question?", ["How much time do we have?", "How many time do we have?", "How few time?"], 0, "time = uncountable."),
      say("Can I have a little water, please?", "Polite rise at the end."),
    ],
  ],
  create: {
    prompts: [
      { text: "Plan a class party (35 words or more). What do you have and what do you need? Use a few, a little, much / many and none." },
      { universe: "science", text: "Write a recipe or shopping list with a short explanation (35 words or more). Use a few, a little, much / many and none." },
      { universe: "words", text: "Describe your bedroom or bag (35 words or more). Use a few, a little, much / many and none." },
    ],
    minWords: 35,
    checks: [
      { label: "a few + noun", pattern: "\\ba\\s+few\\s+\\w+", min: 1 },
      { label: "a little + noun", pattern: "\\ba\\s+little\\s+\\w+", min: 1 },
      { label: "much / many / none", pattern: "\\b(much|many|none)\\b", min: 1 },
    ],
    rubric: ["I used a few with countable nouns.", "I used a little with uncountable nouns.", "I used much, many or none correctly."],
    model: "For the party, we have a few balloons and a little juice. We don't have much money, so we can't buy many snacks. Cake? We have none! I can bake a chocolate cake with a little help from my mum.",
  },
};

export const A2P_GRAMMAR: NodePractice[] = [everNever, ppVsPast, pastCont, firstCond, relatives, usedTo, mightToo, quantifiers];
