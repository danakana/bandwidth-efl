/* A2 Grammar. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review.
   Lower band: short Spanish notes (es) and glosses shown only after a wrong answer. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, es, fix, gap, heard, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/a2g-${n}-${k}.mp3`;

export const A2_GRAMMAR_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "Last Sunday, I woke up late. I had breakfast with my family, and then I played football in the park. In the afternoon, I went to my cousin's house. We watched a film and ate popcorn." },
  { file: X("01", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "We watched a film and ate popcorn." },
  { file: X("02", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "I usually walk to school, but today I'm taking the bus because it's raining. My brother plays the guitar every day. Right now, he's practising in his room. It's very loud!" },
  { file: X("02", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Right now, he is practising in his room." },
  { file: X("03", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Next summer, I'm going to visit my grandparents in Cali. I'm going to swim every day. Oh, the phone is ringing! Don't worry, I'll answer it. I think it will be my mum." },
  { file: X("03", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "I'm going to visit my grandparents." },
  { file: X("04", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "This week is very busy. On Monday, I'm having a maths test. On Wednesday, I'm meeting Laura at the library. And on Saturday, we're playing in a basketball tournament!" },
  { file: X("04", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "On Saturday we're playing basketball." },
  { file: X("05", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "My sister is taller than me, but I'm faster. My dog is the biggest dog in our street. Bogotá is colder than Cartagena. And for me, pizza is the best food in the world." },
  { file: X("05", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "My sister is taller than me." },
  { file: X("06", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "Is there any milk? Yes, there's some milk, but there isn't any bread. How many eggs do we need? Three. And how much sugar? Not much. We have a lot of apples." },
  { file: X("06", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "There's some milk, but there isn't any bread." },
  { file: X("07", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "I always get up at six. I usually have eggs for breakfast. I'm never late for school. My friend Pedro is often late, and he sometimes forgets his books." },
  { file: X("07", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "I usually have eggs for breakfast." },
  { file: X("08", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "You look tired. You should go to bed early. At my school, we have to wear a uniform, but we don't have to wear a tie. And you shouldn't eat in the library." },
  { file: X("08", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "We have to wear a uniform at school." },
  { file: X("09", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "I love dancing, and I enjoy listening to music. I want to learn the piano this year. My brother hates getting up early, but he needs to study more. We decided to start a band!" },
  { file: X("09", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "I enjoy listening to music." },
];

const pastSimple: NodePractice = {
  nodeId: "a2.past-simple-regular-and-irregular",
  explain: "Use the past simple for finished actions in the past: yesterday, last week, in 2020. Regular verbs add -ed: play → played, watch → watched. Irregular verbs change: go → went, eat → ate, have → had, see → saw. Questions and negatives use did / didn't + the base verb: 'Did you go?' 'I didn't go.'",
  pattern: ["Regular: verb + -ed (played, watched, stayed)", "Irregular: go → went · eat → ate · have → had · see → saw · get → got", "Question: Did you + base verb …?", "Negative: I didn't + base verb."],
  es: "El pasado simple es como «jugué», «fui», «comí». Con 'did' y 'didn't', el verbo vuelve a la forma base: Did you go? (no 'Did you went?').",
  steps: [
    [
      heard(X("01", "notice"), "When did the speaker wake up?", ["Late", "Early", "At six"], 0, "'I woke up late.'"),
      heard(X("01", "notice"), "What did the speaker do in the park?", ["Played football", "Ate popcorn", "Watched a film"], 0, "'I played football in the park.'"),
      heard(X("01", "notice"), "Where did the speaker go in the afternoon?", ["To a cousin's house", "To the cinema", "To school"], 0, "'I went to my cousin's house.'"),
      ch("Which is a regular past verb?", ["played", "went", "ate"], 0, "Regular verbs add -ed."),
      ch("What is the past of 'go'?", ["went", "goed", "gone"], 0, "go → went (irregular)."),
    ],
    [
      ch("What is the past of 'eat'?", ["ate", "eated", "eaten"], 0, "eat → ate."),
      ch("What is the past of 'watch'?", ["watched", "watcht", "wotch"], 0, "watch + ed."),
      es(ch("Which question is correct?", ["Did you see the match?", "Did you saw the match?", "You saw the match?"], 0, "Did + base verb."), "Con 'did', el verbo va en forma base: see, no saw."),
      ctx("'I didn't go to school yesterday.'", "Did the person go to school?", ["No", "Yes", "We don't know"], 0, "didn't = did not."),
      ch("Which word shows the past?", ["yesterday", "tomorrow", "now"], 0, "yesterday → past simple."),
    ],
    [
      gap("Yesterday I", "my homework. (finish)", ["finished"], "Regular: finish + ed."),
      gap("Last year we", "to Medellín. (go)", ["went"], "go → went."),
      tr("Make it negative.", "I saw Ana at the party.", ["I didn't see Ana at the party", "I did not see Ana at the party"], "didn't + base verb: see."),
      dict(X("01", "dict"), ["We watched a film and ate popcorn"]),
      say("I played football and went to my cousin's house.", "Clear -ed: play-D."),
    ],
    [
      fix(["Yesterday I", "goed", "to the park."], 1, ["went"], "go → went."),
      es(fix(["Did you", "went", "to the party?"], 1, ["go"], "Did + base verb."), "Después de 'did' usa la forma base: go."),
      fix(["She", "didn't saw", "the film."], 1, ["didn't see"], "didn't + base verb."),
      ch("Which is correct?", ["We had pizza last night.", "We haved pizza last night.", "We have pizza last night."], 0, "have → had."),
      ch("Which is wrong?", ["I buyed a new phone.", "I bought a new phone.", "I didn't buy a phone."], 0, "buy → bought."),
    ],
    [
      ch("Your friend asks about your weekend. Best answer:", ["I visited my grandma and we cooked lunch.", "I visit my grandma and we cook lunch yesterday.", "I visiting my grandma."], 0, "Past simple for finished time."),
      ch("Best question for a friend after the holidays:", ["What did you do in the holidays?", "What you did in the holidays?", "What did you did?"], 0, "What did you + base verb?"),
      ctx("Your teacher: 'Did you do your homework?'", "Best answer:", ["Yes, I did.", "Yes, I done.", "Yes, I do it yesterday."], 0, "Short answer: Yes, I did."),
      ch("Which story start is best?", ["Last Saturday, I woke up early and went to the beach.", "Last Saturday, I wake up early and go to the beach.", "Last Saturday, I waked up early."], 0, "Past simple."),
      say("Did you have a good weekend?", "Rising at the end."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about last weekend (30 words or more). Use at least four past simple verbs, regular and irregular." },
      { universe: "screens", text: "Write about the last film or series you watched (30 words or more). Use at least four past simple verbs." },
      { universe: "past", text: "Write about a special day with your family (30 words or more). Use at least four past simple verbs." },
    ],
    minWords: 30,
    checks: [
      { label: "Four past simple verbs", pattern: "\\b(\\w+ed|went|ate|had|saw|got|made|took|came|bought|met|drank|swam|ran|wrote|read|slept|woke|gave|found|left|lost|won|was|were|did)\\b", min: 4 },
      { label: "A past time word (yesterday, last, ago…)", pattern: "\\b(yesterday|last\\s+\\w+|\\w+\\s+ago|in\\s+(19|20)\\d\\d|on\\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday))\\b", min: 1 },
    ],
    rubric: ["I used past simple verbs.", "I wrote irregular verbs correctly (went, ate, saw…).", "I said when it happened."],
    model: "Last Saturday, I got up at nine. I had breakfast with my dad, and then we went to the market. We bought fruit and I ate a big mango. In the afternoon, I played video games with my brother. It was a good day.",
  },
};

const simpleVsCont: NodePractice = {
  nodeId: "a2.present-simple-vs-present-continuous",
  explain: "Use the present simple for habits and facts: 'I walk to school every day.' 'Water boils at 100 degrees.' Use the present continuous (am / is / are + -ing) for actions happening now or around now: 'Today I'm taking the bus.' 'He's practising right now.' Words like usually, every day and on Mondays go with the present simple; now, right now, today and at the moment go with the present continuous.",
  pattern: ["Habits / facts → present simple: I walk to school.", "Now → present continuous: I'm taking the bus today.", "every day · usually · on Mondays → present simple", "now · right now · at the moment · today → present continuous"],
  es: "Present simple = lo que haces normalmente (camino al colegio). Present continuous = lo que estás haciendo ahora (estoy tomando el bus). No olvides 'am / is / are' antes del -ing.",
  steps: [
    [
      heard(X("02", "notice"), "How does the speaker usually go to school?", ["Walks", "Takes the bus", "Goes by car"], 0, "'I usually walk to school'."),
      heard(X("02", "notice"), "Why is the speaker taking the bus today?", ["It's raining.", "They're late.", "It's far."], 0, "'because it's raining'."),
      heard(X("02", "notice"), "What is the brother doing right now?", ["Practising the guitar", "Sleeping", "Doing homework"], 0, "'Right now, he's practising'."),
      ch("Which is the present continuous?", ["is practising", "practises", "practised"], 0, "is + -ing."),
      ch("Which sentence is a habit?", ["He plays the guitar every day.", "He's playing the guitar now.", "He played yesterday."], 0, "every day = habit."),
    ],
    [
      ch("'Look! It ___.'", ["is snowing", "snows", "snow"], 0, "Look! = now."),
      ch("'I ___ my teeth every morning.'", ["brush", "am brushing", "brushing"], 0, "every morning = habit."),
      es(ch("Why is 'I am go to school every day' wrong?", ["Habits use the present simple: I go.", "It needs 'goes'.", "It's correct."], 0, "Present simple for habits."), "Para hábitos no uses 'am': I go to school every day."),
      ctx("Your mum calls you at 8 p.m. You're in the middle of homework.", "You say:", ["I'm doing my homework.", "I do my homework.", "I did my homework."], 0, "Happening now."),
      ch("Which word goes with the present continuous?", ["at the moment", "usually", "every Friday"], 0, "at the moment = now."),
    ],
    [
      gap("My dad", "in a hospital. (work)", ["works"], "Fact → present simple, he + s."),
      gap("Shh! The baby is", ". (sleep)", ["sleeping"], "Now → is + -ing."),
      tr("Change to 'right now'.", "She reads every evening.", ["She is reading right now", "She's reading right now", "Right now she is reading", "Right now, she is reading", "Right now, she's reading"], "right now → is + -ing."),
      dict(X("02", "dict"), ["Right now, he is practising in his room", "Right now he is practising in his room", "Right now, he's practising in his room", "Right now he's practising in his room"]),
      say("I usually walk to school, but today I'm taking the bus.", "Two tenses, one sentence."),
    ],
    [
      fix(["Listen! Someone", "sings", "outside."], 1, ["is singing"], "Listen! = now."),
      fix(["She", "is liking", "chocolate."], 1, ["likes"], "'like' doesn't use -ing."),
      es(fix(["They", "playing", "football now."], 1, ["are playing"], "Present continuous needs are + -ing."), "Falta 'are': They are playing."),
      ch("Which is correct?", ["What are you doing now?", "What do you doing now?", "What you are doing now?"], 0, "are + you + -ing."),
      ch("Which is wrong?", ["I am wanting a drink.", "I want a drink.", "I'm having a drink."], 0, "'want' doesn't use -ing."),
    ],
    [
      ch("Your friend texts: 'Where are you?' Best reply:", ["I'm waiting at the bus stop.", "I wait at the bus stop.", "I waited at the bus stop now."], 0, "Now → continuous."),
      ch("A new friend asks about your hobbies. Best answer:", ["I play volleyball on Saturdays.", "I'm playing volleyball on Saturdays always.", "I playing volleyball."], 0, "Habit → simple."),
      ctx("A video call. Your grandma asks what your brother is doing.", "Best answer:", ["He's watching TV in the living room.", "He watches TV in the living room now.", "He watch TV."], 0, "Now → continuous."),
      ch("Which mini-text is correct?", ["I usually drink juice, but today I'm drinking water.", "I'm usually drinking juice, but today I drink water.", "I usually drinking juice."], 0, "Habit vs now."),
      say("What are you doing right now?", "Stress DOing and NOW."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a message to a friend (30 words or more): what you usually do on Saturdays, and what you are doing right now. Use both tenses." },
      { universe: "arts", text: "Describe an artist or musician (30 words or more): what they usually do, and what they are doing now. Use both tenses." },
      { universe: "science", text: "Describe an animal (30 words or more): what it usually eats and does, and what it is doing in a photo now. Use both tenses." },
    ],
    minWords: 30,
    checks: [
      { label: "A present continuous (am / is / are + -ing)", pattern: "\\b(am|is|are|'m|'s|'re)\\s+(not\\s+)?\\w+ing\\b", min: 1 },
      { label: "A frequency or time word (usually, every, on …days, now)", pattern: "\\b(usually|always|often|every\\s+\\w+|on\\s+\\w+days|now|right now|today|at the moment)\\b", min: 2 },
    ],
    rubric: ["I used the present simple for habits.", "I used am / is / are + -ing for now.", "I used time words like usually and now."],
    model: "Hi Lucas! On Saturdays, I usually go swimming with my sister. We always have lunch at my grandma's house after that. But today it's raining, so right now I'm watching a film at home and eating popcorn. What are you doing?",
  },
};

const goingWill: NodePractice = {
  nodeId: "a2.future-going-to-and-will-basic",
  explain: "Use 'be going to + verb' for plans you have already decided: 'Next summer, I'm going to visit my grandparents.' Use 'will + verb' for quick decisions at the moment of speaking ('The phone is ringing. I'll answer it.'), offers and promises ('I'll help you'), and predictions ('I think it will rain').",
  pattern: ["Plan → am / is / are going to + verb: I'm going to swim.", "Quick decision / offer → will: I'll answer it.", "Prediction → will: I think it will rain.", "Negative: won't = will not"],
  es: "'going to' = voy a (un plan). 'will' = decisión del momento o predicción: «yo contesto», «creo que lloverá».",
  steps: [
    [
      heard(X("03", "notice"), "What is the speaker going to do next summer?", ["Visit grandparents in Cali", "Go to the beach", "Start a new school"], 0, "'I'm going to visit my grandparents in Cali.'"),
      heard(X("03", "notice"), "What is the speaker going to do every day?", ["Swim", "Read", "Cook"], 0, "'I'm going to swim every day.'"),
      heard(X("03", "notice"), "What does the speaker decide when the phone rings?", ["To answer it", "To ignore it", "To call back later"], 0, "'I'll answer it.'"),
      ch("Which is a plan?", ["I'm going to visit my grandparents.", "I'll answer it.", "I think it will rain."], 0, "going to = decided plan."),
      ch("'I'll' means …", ["I will", "I all", "I would"], 0, "I'll = I will."),
    ],
    [
      es(ch("You decide right now to help your friend. You say:", ["I'll help you!", "I'm going to help you yesterday.", "I help you tomorrow."], 0, "Quick decision → will."), "Decisión del momento → will."),
      ch("You bought tickets for a concert. You say:", ["I'm going to see a concert on Friday.", "I'll see a concert, I just decided.", "I see a concert."], 0, "Plan → going to."),
      ch("Which is a prediction?", ["I think Colombia will win.", "I'm going to buy bread.", "I'll answer the door."], 0, "I think … will."),
      ctx("Your friend: 'It's hot in here.'", "Best offer:", ["I'll open the window.", "I'm going to open the window last week.", "I open window."], 0, "Offer → will."),
      ch("What follows 'going to'?", ["base verb", "-ing", "past"], 0, "going to + visit."),
    ],
    [
      gap("We are going", "play football after school.", ["to"], "going to + verb."),
      gap("It's dark. I", "turn on the light.", ["will", "'ll"], "Quick decision → will."),
      tr("Make it a plan with 'going to'.", "My plan: study for the test tonight.", ["I'm going to study for the test tonight", "I am going to study for the test tonight"], "am going to + study."),
      dict(X("03", "dict"), ["I'm going to visit my grandparents", "I am going to visit my grandparents"]),
      say("Don't worry, I'll help you.", "Contract: I'll."),
    ],
    [
      fix(["Next week, I", "going to", "visit my aunt."], 1, ["am going to", "'m going to"], "You need am."),
      fix(["I think it", "will raining", "tomorrow."], 1, ["will rain"], "will + base verb."),
      fix(["She's going", "to visiting", "Spain."], 1, ["to visit"], "going to + base verb."),
      ch("Which is correct?", ["I won't tell anyone.", "I willn't tell anyone.", "I will not to tell anyone."], 0, "won't = will not."),
      ch("Which is wrong?", ["They going to travel.", "They're going to travel.", "They are going to travel."], 0, "Missing are."),
    ],
    [
      ch("Someone knocks at the door. Best:", ["I'll get it!", "I'm going to get it next month.", "I get it yesterday."], 0, "Quick decision."),
      ch("Your teacher asks about your holiday plans. Best answer:", ["I'm going to visit my cousins in Pasto.", "I'll visit my cousins, I just decided now.", "I visit my cousins last week."], 0, "Plan → going to."),
      ctx("Your little sister is scared of the dark.", "Best promise:", ["I'll stay with you.", "I'm staying with you last night.", "I stay with you yesterday."], 0, "Promise → will."),
      ch("Which sounds natural?", ["I think it'll be sunny tomorrow.", "I think it's going to sunny tomorrow.", "I think it will sunny."], 0, "Prediction → will + be."),
      say("Next summer, I'm going to learn to swim.", "Weak 'to': GOing ta LEARN."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about your plans for the holidays (30 words or more). Use 'going to' twice and 'will' once." },
      { universe: "futures", text: "Write about your future (30 words or more). What are you going to do? What do you think will happen? Use 'going to' twice and 'will' once." },
      { universe: "screens", text: "Write about a video you're going to make (30 words or more). Use 'going to' twice and 'will' once." },
    ],
    minWords: 30,
    checks: [
      { label: "Two 'going to + verb'", pattern: "\\bgoing\\s+to\\s+\\w+", min: 2 },
      { label: "One 'will' / 'won't' / 'll'", pattern: "\\b(will|won't|'ll)\\b", min: 1 },
    ],
    rubric: ["I used going to for plans.", "I used will for a prediction, offer or promise.", "I used the base verb after going to and will."],
    model: "In December, I'm going to visit my cousins in Barranquilla. We're going to swim in the sea and eat a lot of fish. I think it will be very hot! I'll send you photos every day, I promise.",
  },
};

const arrangements: NodePractice = {
  nodeId: "a2.present-continuous-for-arrangements",
  explain: "You can use the present continuous (am / is / are + -ing) for future arrangements: plans with a time and often with other people. 'On Saturday, we're playing in a tournament.' 'I'm meeting Laura on Wednesday.' Always say when (on Monday, tomorrow, next week) so the listener knows it's the future.",
  pattern: ["am / is / are + -ing + future time", "I'm meeting Laura on Wednesday.", "We're playing basketball on Saturday.", "What are you doing tomorrow?"],
  es: "En inglés el presente continuo también sirve para planes ya organizados con fecha: «el sábado juego un torneo». Siempre di cuándo (on Saturday, tomorrow).",
  steps: [
    [
      heard(X("04", "notice"), "What is happening on Monday?", ["A maths test", "A basketball game", "A party"], 0, "'On Monday, I'm having a maths test.'"),
      heard(X("04", "notice"), "Who is the speaker meeting on Wednesday?", ["Laura", "Their teacher", "Their cousin"], 0, "'I'm meeting Laura at the library.'"),
      heard(X("04", "notice"), "What is happening on Saturday?", ["A basketball tournament", "A maths test", "A trip"], 0, "'we're playing in a basketball tournament!'"),
      ch("'I'm meeting Laura on Wednesday.' Is this now or the future?", ["The future", "Now", "The past"], 0, "on Wednesday = future arrangement."),
      ch("What makes it clear it's the future?", ["The time phrase (on Wednesday)", "The -ing", "The word 'I'm'"], 0, "Say when."),
    ],
    [
      ch("Which is a future arrangement?", ["We're flying to Lima on Friday.", "We're flying now.", "We fly every year."], 0, "-ing + future time."),
      es(ch("'What are you doing tomorrow?' The person asks about …", ["your plans for tomorrow", "what you're doing now", "your habits"], 0, "Future arrangement."), "= ¿Qué vas a hacer mañana?"),
      ctx("You have a dentist appointment at 3 p.m. tomorrow.", "Best sentence:", ["I'm seeing the dentist tomorrow at three.", "I see the dentist every tomorrow.", "I saw the dentist tomorrow."], 0, "Arrangement with a time."),
      ch("Which question asks about plans?", ["Are you doing anything this weekend?", "Do you do anything every weekend?", "Did you do anything?"], 0, "Are you + -ing + future."),
      ch("Which time phrase is future?", ["next Tuesday", "last Tuesday", "every Tuesday"], 0, "next = future."),
    ],
    [
      gap("We are", "a party on Friday. (have)", ["having"], "are + having."),
      gap("I'm visiting my aunt", "Sunday.", ["on"], "on + day."),
      tr("Make it a future arrangement.", "My plan with Juan: play tennis, tomorrow at five.", ["I'm playing tennis with Juan tomorrow at five", "I am playing tennis with Juan tomorrow at five", "Tomorrow at five I'm playing tennis with Juan", "Tomorrow at five, I'm playing tennis with Juan"], "am + playing + time."),
      dict(X("04", "dict"), ["On Saturday we're playing basketball", "On Saturday, we're playing basketball", "On Saturday we are playing basketball", "On Saturday, we are playing basketball"]),
      say("What are you doing on Saturday?", "Stress DOing and SATurday."),
    ],
    [
      fix(["We", "play", "a match next Sunday, it's all organised."], 1, ["are playing", "'re playing"], "Arrangement → are + -ing."),
      fix(["She's", "meet", "her friends tonight."], 1, ["meeting"], "is + -ing."),
      es(fix(["What", "you are doing", "tomorrow?"], 1, ["are you doing"], "Question order: are you doing."), "En preguntas, 'are' va antes de 'you'."),
      ch("Which is correct?", ["I'm having lunch with Ana tomorrow.", "I having lunch with Ana tomorrow.", "I'm have lunch with Ana tomorrow."], 0, "am + -ing."),
      ch("Which is wrong?", ["He's leave on Monday.", "He's leaving on Monday.", "He leaves on Monday by train."], 0, "is + leaving."),
    ],
    [
      ch("A friend invites you on Saturday, but you have plans. Best:", ["Sorry, I'm visiting my grandma on Saturday.", "Sorry, I visit my grandma yesterday.", "Sorry, I visiting grandma."], 0, "Arrangement as a reason."),
      ch("Best question to plan a meeting:", ["Are you doing anything on Friday afternoon?", "Do you doing anything Friday?", "You did anything Friday?"], 0, "Are you + -ing?"),
      ctx("You are writing your weekly plan in your diary.", "Best line:", ["Thursday: I'm meeting the science group at 4.", "Thursday: I met the science group.", "Thursday: I meet science group always."], 0, "Arrangement with time."),
      ch("Which reply is natural? 'What are you doing tonight?'", ["I'm going to the cinema with Pablo.", "I go to the cinema every night.", "I went to the cinema."], 0, "Arrangement."),
      say("I'm meeting Laura at the library on Wednesday.", "Clear -ing ending."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write your plans for next week (30 words or more), like a diary. Use the present continuous with days and times at least three times." },
      { universe: "arts", text: "Write the plan for a school show week (30 words or more). Use the present continuous with days and times at least three times." },
      { universe: "screens", text: "Write a message to your gaming team about this week's matches (30 words or more). Use the present continuous with days and times." },
    ],
    minWords: 30,
    checks: [
      { label: "Three present continuous verbs", pattern: "\\b(am|is|are|'m|'s|'re)\\s+\\w+ing\\b", min: 3 },
      { label: "Future time words (on Monday, tomorrow, next…)", pattern: "\\b(on\\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)|tomorrow|tonight|next\\s+\\w+|this\\s+(weekend|afternoon|evening))\\b", min: 2 },
    ],
    rubric: ["I used am / is / are + -ing for my plans.", "I said when each plan happens.", "My plans are clear and organised."],
    model: "This week is busy! On Monday, I'm having a science test. On Wednesday, my mum and I are visiting my aunt in Chía. On Friday, I'm meeting my friends at the mall, and on Saturday we're playing in a volleyball match.",
  },
};

const comparatives: NodePractice = {
  nodeId: "a2.comparatives-and-superlatives",
  explain: "To compare two things, use a comparative + than. Short adjectives add -er: tall → taller, fast → faster. Long adjectives use more: more expensive. To say something is number one in a group, use the + superlative: the tallest, the most expensive. Irregular: good → better → the best; bad → worse → the worst.",
  pattern: ["short: tall → taller than → the tallest", "big → bigger → the biggest (double letter)", "long: expensive → more expensive → the most expensive", "good → better → the best · bad → worse → the worst"],
  es: "taller than = más alto que. the tallest = el más alto. No digas 'more taller'; usa -er o more, no los dos.",
  steps: [
    [
      heard(X("05", "notice"), "Who is taller, the speaker or the sister?", ["The sister", "The speaker", "The same"], 0, "'My sister is taller than me'."),
      heard(X("05", "notice"), "What is the speaker's dog like?", ["The biggest dog in the street", "The smallest dog", "A fast dog"], 0, "'the biggest dog in our street'."),
      heard(X("05", "notice"), "Which city is colder?", ["Bogotá", "Cartagena", "Both"], 0, "'Bogotá is colder than Cartagena.'"),
      ch("Which is a comparative?", ["faster", "the fastest", "fast"], 0, "-er = comparative."),
      ch("Which is a superlative?", ["the best", "better", "good"], 0, "the + -est / best."),
    ],
    [
      ch("Which word follows a comparative?", ["than", "that", "then"], 0, "taller than me."),
      ch("What is the comparative of 'expensive'?", ["more expensive", "expensiver", "most expensive"], 0, "Long adjective → more."),
      es(ch("What is the superlative of 'good'?", ["the best", "the goodest", "the better"], 0, "Irregular."), "good → better → the best (el mejor)."),
      ctx("Juan runs 100 m in 14 seconds. Ana runs it in 12 seconds.", "Which is true?", ["Ana is faster than Juan.", "Juan is faster than Ana.", "Juan is the fastest."], 0, "Less time = faster."),
      ch("'big' becomes …", ["bigger", "biger", "more big"], 0, "Double the g."),
    ],
    [
      gap("My bag is heavier", "yours.", ["than"], "comparative + than."),
      gap("This is the", "film I've ever seen. (bad)", ["worst"], "bad → the worst."),
      tr("Compare with 'more'.", "This book: interesting. That book: less interesting.", ["This book is more interesting than that book", "This book is more interesting than that one"], "more + long adjective + than."),
      dict(X("05", "dict"), ["My sister is taller than me"]),
      say("Bogotá is colder than Cartagena.", "Weak 'than': COLDer th'n."),
    ],
    [
      es(fix(["My brother is", "more taller", "than me."], 1, ["taller"], "Don't use more with -er."), "No digas 'more taller'; solo 'taller'."),
      fix(["She is the", "more intelligent", "student in the class."], 1, ["most intelligent"], "Superlative → the most."),
      fix(["This phone is", "gooder", "than that one."], 1, ["better"], "good → better."),
      ch("Which is correct?", ["Today is hotter than yesterday.", "Today is hoter than yesterday.", "Today is more hot than yesterday."], 0, "hot → hotter."),
      ch("Which is wrong?", ["He's the most fast runner.", "He's the fastest runner.", "He's faster than me."], 0, "fast → the fastest."),
    ],
    [
      ch("You describe your town and a big city. Best:", ["My town is smaller and quieter than Bogotá.", "My town is more small and more quiet that Bogotá.", "My town is the smaller."], 0, "Comparatives + than."),
      ch("You talk about your favourite food. Best:", ["Arepas are the best food in the world!", "Arepas are the goodest food!", "Arepas are better food in the world."], 0, "the best."),
      ctx("Shop A: shoes 150,000 pesos. Shop B: same shoes 120,000.", "Best advice:", ["Shop B is cheaper.", "Shop B is more cheap.", "Shop B is the expensive."], 0, "cheap → cheaper."),
      ch("Which is the most natural?", ["This is the most beautiful beach I know.", "This is the beautifulest beach.", "This beach is more beautiful of all."], 0, "the most + long adjective."),
      say("Pizza is the best food in the world!", "Stress BEST."),
    ],
  ],
  create: {
    prompts: [
      { text: "Compare two places, people or things you know (30 words or more). Use two comparatives with 'than' and one superlative." },
      { universe: "science", text: "Compare three animals (30 words or more). Use two comparatives with 'than' and one superlative." },
      { universe: "screens", text: "Compare three games, apps or series (30 words or more). Use two comparatives with 'than' and one superlative." },
    ],
    minWords: 30,
    checks: [
      { label: "Two comparatives with 'than'", pattern: "\\b(\\w+er|more\\s+\\w+|better|worse|less\\s+\\w+)\\s+than\\b", min: 2 },
      { label: "One superlative (the …est / the most / the best)", pattern: "\\bthe\\s+(\\w+est|most\\s+\\w+|best|worst|least\\s+\\w+)\\b", min: 1 },
    ],
    rubric: ["I used -er or more + than.", "I used the + -est / most / best.", "I didn't use 'more' and '-er' together."],
    model: "My dog Toby is bigger than my cat, but my cat is faster than Toby. My fish is smaller than both of them. I think Toby is the friendliest pet in the house because he always wants to play.",
  },
};

const countable: NodePractice = {
  nodeId: "a2.countable-uncountable-some-any-much-many",
  explain: "Countable nouns can be counted: one egg, two eggs. Uncountable nouns can't: milk, bread, sugar, water. Use 'some' in positive sentences and 'any' in questions and negatives: 'There's some milk.' 'Is there any bread?' 'There isn't any bread.' Use 'How many' with countable nouns and 'How much' with uncountable nouns. 'A lot of' works with both.",
  pattern: ["Countable: egg / eggs · apple / apples", "Uncountable: milk · bread · sugar · water · money", "some (+) · any (? and −)", "How many eggs? · How much sugar?", "a lot of + both"],
  es: "some = algo de / unos, any = algún / nada de (en preguntas y negativas). How many = cuántos (contables); How much = cuánto (incontables).",
  steps: [
    [
      heard(X("06", "notice"), "Is there any milk?", ["Yes, some", "No", "A lot"], 0, "'there's some milk'."),
      heard(X("06", "notice"), "Is there any bread?", ["No", "Yes, some", "A lot"], 0, "'there isn't any bread'."),
      heard(X("06", "notice"), "How many eggs do they need?", ["Three", "Two", "Ten"], 0, "'Three.'"),
      ch("Which noun is countable?", ["apple", "milk", "sugar"], 0, "one apple, two apples."),
      ch("Which noun is uncountable?", ["bread", "egg", "banana"], 0, "bread = uncountable."),
    ],
    [
      ch("'Is there ___ juice?'", ["any", "some", "many"], 0, "Questions → any."),
      ch("'I have ___ friends in Cali.'", ["some", "any", "much"], 0, "Positive → some."),
      es(ch("'How ___ water do you drink?'", ["much", "many"], 0, "water = uncountable."), "How much = cuánto (para cosas que no se cuentan)."),
      ch("'How ___ brothers do you have?'", ["many", "much"], 0, "brothers = countable."),
      ctx("'There aren't any chairs.'", "How many chairs are there?", ["Zero", "Some", "A lot"], 0, "not any = zero."),
    ],
    [
      gap("We need", "eggs for the cake.", ["some"], "Positive → some."),
      gap("There isn't", "rice in the kitchen.", ["any"], "Negative → any."),
      tr("Make a question with 'How much'.", "I want to know the quantity of money you have.", ["How much money do you have"], "money = uncountable → How much."),
      dict(X("06", "dict"), ["There's some milk, but there isn't any bread", "There's some milk but there isn't any bread", "There is some milk, but there isn't any bread", "There is some milk but there isn't any bread"]),
      say("How many eggs do we need?", "Stress MANy and EGGS."),
    ],
    [
      es(fix(["I need", "some informations", "about the trip."], 1, ["some information"], "information = uncountable, no -s."), "'information' no lleva -s en inglés."),
      fix(["How", "many", "milk do you want?"], 1, ["much"], "milk = uncountable."),
      fix(["Is there", "some", "water? I'm thirsty."], 1, ["any"], "Questions usually take any."),
      ch("Which is correct?", ["There are a lot of people here.", "There are a lot people here.", "There is a lot of peoples here."], 0, "a lot of + people."),
      ch("Which is wrong?", ["I don't have some money.", "I don't have any money.", "I have some money."], 0, "Negative → any."),
    ],
    [
      ch("You're making a shopping list with your mum. Best question:", ["How many apples do we need?", "How much apples do we need?", "How many apple do we need?"], 0, "apples = countable."),
      ch("Your friend offers juice. You want a little. You say:", ["Just some, please.", "Just any, please.", "Just many, please."], 0, "some in an offer reply."),
      ctx("At a café, you want sugar for your coffee.", "Best question:", ["Is there any sugar?", "Is there many sugar?", "Are there any sugars?"], 0, "Uncountable + any."),
      ch("Which sentence is most natural?", ["We don't have much time.", "We don't have many time.", "We don't have any times."], 0, "time = uncountable."),
      say("Is there any bread? No, there isn't any.", "Rising question, falling answer."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a shopping list and a short message to your family about it (30 words or more). Use some, any, How much / How many and a lot of." },
      { universe: "science", text: "Write a recipe for your favourite food (30 words or more). Use some, any, How much / How many and a lot of." },
      { universe: "words", text: "Describe what's in your fridge or bag (30 words or more). Use some, any, much or many and a lot of." },
    ],
    minWords: 30,
    checks: [
      { label: "some + noun", pattern: "\\bsome\\s+\\w+", min: 1 },
      { label: "any", pattern: "\\bany\\b", min: 1 },
      { label: "much / many / a lot of", pattern: "\\b(much|many|a lot of|lots of)\\b", min: 1 },
    ],
    rubric: ["I used some in positive sentences.", "I used any in questions or negatives.", "I used much with uncountable and many with countable nouns."],
    model: "Hi Mum! We need some eggs and some milk for the pancakes. There isn't any butter, so can you buy some? How many bananas do we have? I think we have a lot of apples, but we don't have much sugar.",
  },
};

const frequency: NodePractice = {
  nodeId: "a2.adverbs-of-frequency-and-their-position",
  explain: "Adverbs of frequency say how often: always (100%), usually, often, sometimes, rarely, never (0%). They go before the main verb: 'I usually have eggs.' But they go after the verb 'be': 'I'm never late.' 'He is often tired.' 'Sometimes' can also go at the start: 'Sometimes I walk.'",
  pattern: ["always · usually · often · sometimes · rarely · never", "Before the main verb: I usually have eggs.", "After be: I'm never late. · She is always happy.", "Ask: How often do you …?"],
  es: "La posición es importante: antes del verbo (I always get up), pero después de 'be' (I'm always late). Never = nunca, y no necesita 'don't'.",
  steps: [
    [
      heard(X("07", "notice"), "What time does the speaker always get up?", ["At six", "At seven", "At eight"], 0, "'I always get up at six.'"),
      heard(X("07", "notice"), "What does the speaker usually have for breakfast?", ["Eggs", "Cereal", "Fruit"], 0, "'I usually have eggs'."),
      heard(X("07", "notice"), "Who is often late?", ["Pedro", "The speaker", "The teacher"], 0, "'My friend Pedro is often late'."),
      ch("Which means 100% of the time?", ["always", "sometimes", "never"], 0, "always = 100%."),
      ch("Which means 0%?", ["never", "often", "usually"], 0, "never = 0%."),
    ],
    [
      ch("Where does 'usually' go? 'I ___ walk ___ to school ___.'", ["Before 'walk'", "After 'school'", "Before 'I'"], 0, "Before the main verb."),
      ch("Where does 'never' go with 'be'? 'I am ___ late.'", ["After 'am'", "Before 'I'", "At the end"], 0, "After be."),
      es(ch("Why is 'I don't never eat meat' wrong?", ["'never' is already negative.", "It needs 'always'.", "It's correct."], 0, "Use: I never eat meat."), "'never' ya es negativo; no uses 'don't' con 'never'."),
      ctx("Ana goes to the gym on Monday, Wednesday and Friday.", "Which is true?", ["She often goes to the gym.", "She never goes to the gym.", "She always goes to the gym."], 0, "3 times a week = often."),
      ch("Which question asks about frequency?", ["How often do you play tennis?", "How long do you play tennis?", "How much tennis?"], 0, "How often …?"),
    ],
    [
      gap("I", "drink coffee. I don't like it. (0%)", ["never"], "never before the verb."),
      gap("She is", "happy. She smiles all the time. (100%)", ["always"], "After be."),
      tr("Put 'often' in the right place.", "We play video games.", ["We often play video games"], "Before the main verb."),
      dict(X("07", "dict"), ["I usually have eggs for breakfast"]),
      say("I'm never late for school.", "Stress NEVer."),
    ],
    [
      fix(["I", "go always", "to bed at ten."], 1, ["always go"], "Adverb before the main verb."),
      fix(["He", "never is", "tired."], 1, ["is never"], "After be."),
      es(fix(["I", "don't never", "eat fish."], 1, ["never", "don't ever"], "never is already negative."), "No uses doble negación: I never eat fish."),
      ch("Which is correct?", ["My dad usually cooks on Sundays.", "My dad cooks usually on Sundays.", "Usually my dad on Sundays cooks."], 0, "Before the main verb."),
      ch("Which is wrong?", ["She always is late.", "She is always late.", "She's always late."], 0, "After be: is always."),
    ],
    [
      ch("A new friend asks how often you play sport. Best answer:", ["I usually play football three times a week.", "I play usually football.", "I'm usually play football."], 0, "usually + verb."),
      ch("You want to say you don't eat fast food at all. Best:", ["I never eat fast food.", "I don't never eat fast food.", "I eat never fast food."], 0, "never + verb."),
      ctx("The teacher asks why Pedro is late again.", "Best description:", ["He's often late because his bus is slow.", "He often is late.", "He late often."], 0, "be + often."),
      ch("Which is most natural?", ["Sometimes I walk, and sometimes I take the bus.", "I walk sometimes, and I sometimes take bus.", "I sometimes walking."], 0, "Sometimes at the start."),
      say("How often do you play video games?", "Stress HOW OFten."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe your weekly routine (30 words or more). Use at least four adverbs of frequency, including one with 'be' (I'm always…)." },
      { universe: "arts", text: "Describe how often you do creative things (30 words or more): draw, sing, dance, write. Use at least four adverbs of frequency." },
      { universe: "screens", text: "Describe your screen habits (30 words or more). Use at least four adverbs of frequency, including one with 'be'." },
    ],
    minWords: 30,
    checks: [
      { label: "Four adverbs of frequency", pattern: "\\b(always|usually|often|sometimes|rarely|never|hardly ever)\\b", min: 4 },
      { label: "One with 'be' (am / is / are + adverb)", pattern: "\\b(am|is|are|'m|'s|'re)\\s+(always|usually|often|sometimes|rarely|never)\\b", min: 1 },
    ],
    rubric: ["I used four adverbs of frequency.", "I put them before the main verb.", "I put them after be."],
    model: "I always get up at six on school days. I usually have arepas for breakfast. I'm never late for school because my mum drives me. In the afternoon, I often play basketball, and I sometimes watch videos. I rarely go to bed after ten.",
  },
};

const shouldHaveTo: NodePractice = {
  nodeId: "a2.should-for-advice-have-to-don-t-have-to",
  explain: "Use 'should / shouldn't + verb' to give advice: 'You should go to bed early.' Use 'have to / has to + verb' for rules and things that are necessary: 'We have to wear a uniform.' Use 'don't have to / doesn't have to' when something is not necessary (you can choose): 'We don't have to wear a tie.' This is different from 'mustn't', which means it's not allowed.",
  pattern: ["Advice: You should / shouldn't + verb.", "Necessary: I have to / She has to + verb.", "Not necessary: You don't have to + verb.", "should + base verb (no 'to')"],
  es: "should = deberías (consejo). have to = tener que (obligación). don't have to = no tienes que (no es necesario, pero puedes). Ojo: 'don't have to' NO significa «no debes».",
  steps: [
    [
      heard(X("08", "notice"), "What advice does the speaker give?", ["Go to bed early", "Eat more", "Study more"], 0, "'You should go to bed early.'"),
      heard(X("08", "notice"), "What do students have to wear?", ["A uniform", "A tie", "A hat"], 0, "'we have to wear a uniform'."),
      heard(X("08", "notice"), "What don't they have to wear?", ["A tie", "A uniform", "Shoes"], 0, "'we don't have to wear a tie'."),
      ch("Which gives advice?", ["You should drink water.", "You have to drink water.", "You don't have to drink."], 0, "should = advice."),
      ch("Which is a rule?", ["We have to arrive at 7.", "You should arrive early.", "You don't have to arrive."], 0, "have to = necessary."),
    ],
    [
      es(ch("'You don't have to come.' This means …", ["You can come or not; it's your choice.", "You must not come.", "You should come."], 0, "Not necessary."), "don't have to = no es necesario, no es una prohibición."),
      ch("'She ___ to work on Saturdays.'", ["has", "have", "haves"], 0, "she → has to."),
      ch("What follows 'should'?", ["base verb", "to + verb", "-ing"], 0, "should go (no 'to')."),
      ctx("Your friend has a bad cough.", "Best advice:", ["You should see a doctor.", "You have to see a doctor yesterday.", "You don't have to see anyone."], 0, "Advice → should."),
      ch("Which is NOT necessary?", ["We don't have to pay; it's free.", "We have to pay.", "We should pay."], 0, "don't have to = not necessary."),
    ],
    [
      gap("You", "eat so much sugar. It's bad for you.", ["shouldn't", "should not"], "Negative advice."),
      gap("My brother", "to wear glasses to read.", ["has"], "he → has to."),
      tr("Give advice with 'should'.", "My idea for you: study for the test.", ["You should study for the test"], "should + study."),
      dict(X("08", "dict"), ["We have to wear a uniform at school"]),
      say("You should go to bed early.", "Soft, friendly advice."),
    ],
    [
      fix(["You", "should to", "rest."], 1, ["should"], "should + base verb."),
      fix(["She", "have to", "get up early."], 1, ["has to"], "she → has."),
      es(fix(["It's Sunday. We", "mustn't", "go to school today. (it's not necessary)"], 1, ["don't have to"], "Not necessary → don't have to."), "Para «no es necesario» usa 'don't have to'."),
      ch("Which is correct?", ["Do you have to wear a uniform?", "Have you to wear a uniform?", "Do you has to wear a uniform?"], 0, "Do you have to …?"),
      ch("Which is wrong?", ["He doesn't has to work.", "He doesn't have to work.", "He has to work."], 0, "doesn't + have."),
    ],
    [
      ch("Your friend can't sleep. Best advice:", ["You shouldn't use your phone in bed.", "You don't have to sleep.", "You should to sleep."], 0, "Negative advice."),
      ch("You explain a school rule to a new student. Best:", ["We have to be in class at seven.", "We should to be in class.", "We don't have be in class."], 0, "Rule → have to."),
      ctx("The museum is free on Sundays.", "Best sentence:", ["You don't have to pay on Sundays.", "You mustn't pay on Sundays.", "You have to pay on Sundays."], 0, "Not necessary."),
      ch("Which sounds natural?", ["You look tired. You should take a break.", "You look tired. You have to take a break yesterday.", "You should taking a break."], 0, "Advice."),
      say("We have to wear a uniform, but we don't have to wear a tie.", "'have to' sounds like /hæftə/."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write advice for a new student at your school (30 words or more). Use should, have to and don't have to." },
      { universe: "science", text: "Write healthy tips for teenagers (30 words or more). Use should, have to and don't have to." },
      { universe: "futures", text: "Write the rules for your dream school (30 words or more). Use should, have to and don't have to." },
    ],
    minWords: 30,
    checks: [
      { label: "should / shouldn't + verb", pattern: "\\b(should|shouldn't)\\s+\\w+", min: 1 },
      { label: "have to / has to", pattern: "\\b(have|has)\\s+to\\s+\\w+", min: 1 },
      { label: "don't / doesn't have to", pattern: "\\b(don't|doesn't|do not|does not)\\s+have\\s+to\\b", min: 1 },
    ],
    rubric: ["I gave advice with should.", "I wrote a rule with have to.", "I used don't have to for things that are not necessary."],
    model: "Welcome to our school! You have to arrive at seven and wear the uniform. You don't have to wear a tie, but you should bring a jacket because it's cold. You shouldn't eat in the classrooms. You should join a club; it's fun!",
  },
};

const ingTo: NodePractice = {
  nodeId: "a2.verb-ing-to-infinitive-common-verbs",
  explain: "Some verbs are followed by -ing: like, love, enjoy, hate, finish, don't mind. 'I enjoy listening to music.' Other verbs are followed by to + verb: want, need, decide, hope, learn, would like. 'I want to learn the piano.' Learn them in two groups.",
  pattern: ["+ -ing: like · love · enjoy · hate · finish · don't mind", "I enjoy listening to music.", "+ to + verb: want · need · decide · hope · learn · would like", "I want to learn the piano."],
  es: "En español decimos «disfruto escuchar», pero en inglés es 'I enjoy listening' (con -ing). Y 'want' siempre va con 'to': I want to go.",
  steps: [
    [
      heard(X("09", "notice"), "What does the speaker love?", ["Dancing", "Running", "Cooking"], 0, "'I love dancing'."),
      heard(X("09", "notice"), "What does the speaker want to learn?", ["The piano", "The guitar", "French"], 0, "'I want to learn the piano'."),
      heard(X("09", "notice"), "What did they decide?", ["To start a band", "To stop studying", "To move house"], 0, "'We decided to start a band!'"),
      ch("Which verb takes -ing?", ["enjoy", "want", "decide"], 0, "enjoy + -ing."),
      ch("Which verb takes to + verb?", ["want", "enjoy", "finish"], 0, "want to + verb."),
    ],
    [
      ch("'I enjoy ___.'", ["swimming", "to swim", "swim"], 0, "enjoy + -ing."),
      ch("'I want ___ a pizza.'", ["to eat", "eating", "eat"], 0, "want + to."),
      es(ch("'She decided ___ a new phone.'", ["to buy", "buying", "buy"], 0, "decide + to."), "decide va con 'to': decided to buy."),
      ctx("'He hates getting up early.'", "How does he feel about early mornings?", ["He doesn't like them.", "He loves them.", "He doesn't mind."], 0, "hate = strong dislike."),
      ch("Which is correct?", ["I've finished doing my homework.", "I've finished to do my homework.", "I've finished do my homework."], 0, "finish + -ing."),
    ],
    [
      gap("I love", "photos. (take)", ["taking"], "love + -ing."),
      gap("We need", "study more. (study)", ["to"], "need + to + verb."),
      tr("Rewrite with 'enjoy'.", "Reading is something I like a lot.", ["I enjoy reading", "I really enjoy reading", "I enjoy reading a lot"], "enjoy + -ing."),
      dict(X("09", "dict"), ["I enjoy listening to music"]),
      say("I want to learn the piano this year.", "Weak 'to': WANT ta LEARN."),
    ],
    [
      es(fix(["I", "enjoy to dance", "at parties."], 1, ["enjoy dancing"], "enjoy + -ing."), "Con 'enjoy' usa -ing: enjoy dancing."),
      fix(["She wants", "going", "to the beach."], 1, ["to go"], "want + to + verb."),
      fix(["Do you mind", "to open", "the window?"], 1, ["opening"], "mind + -ing."),
      ch("Which is correct?", ["I hope to see you soon.", "I hope seeing you soon.", "I hope see you soon."], 0, "hope + to."),
      ch("Which is wrong?", ["I want watching a film.", "I want to watch a film.", "I like watching films."], 0, "want + to."),
    ],
    [
      ch("A new friend asks about your hobbies. Best:", ["I love drawing and I enjoy playing chess.", "I love draw and I enjoy to play chess.", "I loving drawing."], 0, "love / enjoy + -ing."),
      ch("You talk about your plans. Best:", ["I want to travel to Japan one day.", "I want travelling to Japan.", "I want travel Japan."], 0, "want + to."),
      ctx("Your teacher asks: 'Have you finished?'", "Best answer:", ["Yes, I've finished writing.", "Yes, I've finished to write.", "Yes, I finished write."], 0, "finish + -ing."),
      ch("Which is the most natural?", ["I'd like to order a lemonade, please.", "I'd like ordering a lemonade.", "I'd like order lemonade."], 0, "would like + to."),
      say("I enjoy listening to music, and I want to learn the guitar.", "-ing and to, clearly."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about your likes and plans (30 words or more). Use two verbs with -ing (love, enjoy, hate…) and two with to (want, need, decide…)." },
      { universe: "arts", text: "Write about your creative hobbies (30 words or more). Use two verbs with -ing and two with to." },
      { universe: "futures", text: "Write about your dreams for the future (30 words or more). Use two verbs with -ing and two with to." },
    ],
    minWords: 30,
    checks: [
      { label: "Two verb + -ing (love / like / enjoy / hate / finish / mind)", pattern: "\\b(love|loves|like|likes|enjoy|enjoys|hate|hates|finish|finished|mind)\\s+\\w+ing\\b", min: 2 },
      { label: "Two verb + to (want / need / decide / hope / learn / would like)", pattern: "\\b(want|wants|wanted|need|needs|decided|decide|hope|hopes|learn|learning|would like|'d like)\\s+to\\s+\\w+", min: 2 },
    ],
    rubric: ["I used -ing after love, enjoy, hate…", "I used to + verb after want, need, decide…", "My text is about me."],
    model: "I love playing the drums, and I enjoy listening to rock music. I hate waking up early on Saturdays! This year, I want to learn the guitar too. My friends and I decided to start a band, and we hope to play at the school party.",
  },
};

export const A2_GRAMMAR: NodePractice[] = [pastSimple, simpleVsCont, goingWill, arrangements, comparatives, countable, frequency, shouldHaveTo, ingTo];
