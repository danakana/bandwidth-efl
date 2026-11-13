/* A2+ Words. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review.
   Lower band: short Spanish notes (es) and glosses shown only after a wrong answer. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, es, fix, gap, heard, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/a2pw-${n}-${k}.mp3`;

export const A2P_WORDS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "My brother is really shy, but he's very kind. Yesterday he was so excited about his new game. The game was exciting, but the ending was boring, so he was a bit bored at the end." },
  { file: X("01", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "The film was boring, so I was bored." },
  { file: X("02", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "At our school, we recycle paper and plastic to protect the environment. Every morning I check the news online. My favourite subject is geography, and next year I want to take an online course in design." },
  { file: X("02", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "We recycle paper and plastic at school." },
  { file: X("03", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Last weekend I made a cake and did my homework. My sister took a lot of photos at her friend's party. I had a great time, but I made a big mistake: I forgot my keys!" },
  { file: X("03", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "I made a big mistake in my homework." },
  { file: X("04", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "Please turn off the lights when you leave. Put on your jacket, it's cold. I'm looking for my phone. Can you look after my dog this weekend? And please pick up your clothes!" },
  { file: X("04", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Can you turn off the lights, please?" },
  { file: X("05", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "I've got the test tomorrow and I'm so nervous. My friend said: break a leg! Then my mum said: don't worry, it's a piece of cake. And she was right. It was easy!" },
  { file: X("05", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "Don't worry. It's a piece of cake." },
];

const feelings: NodePractice = {
  nodeId: "a2p.personality-feelings-with-ed-ing-adjecti",
  explain: "Personality words describe how someone usually is: kind, shy, friendly, lazy, funny, generous, honest. Feeling words can end in -ed or -ing. Use -ed for how a person feels: 'I'm bored', 'She's excited'. Use -ing for the thing that makes you feel that way: 'The film is boring', 'The game is exciting'.",
  pattern: ["Personality: kind · shy · friendly · lazy · funny · generous · honest", "-ed = how you feel: bored, excited, tired, interested", "-ing = what causes the feeling: boring, exciting, tiring, interesting", "I'm bored because the class is boring."],
  es: "Cuidado: 'I'm boring' significa «soy aburrido» (una persona que aburre). Para decir «estoy aburrido» usa 'I'm bored'.",
  steps: [
    [
      heard(X("01", "notice"), "What is the brother like?", ["Shy but kind", "Lazy and rude", "Funny and loud"], 0, "'My brother is really shy, but he's very kind.'"),
      heard(X("01", "notice"), "How did he feel about his new game?", ["Excited", "Bored", "Angry"], 0, "'he was so excited about his new game'."),
      heard(X("01", "notice"), "What was the ending of the game like?", ["Boring", "Exciting", "Scary"], 0, "'the ending was boring'."),
      ch("Which word describes a feeling?", ["bored", "boring", "bore"], 0, "-ed = how you feel."),
      ch("Which word is about personality?", ["generous", "tired", "excited"], 0, "generous = gives things to others."),
    ],
    [
      ch("'The class was so ___ that I fell asleep.'", ["boring", "bored"], 0, "The class causes the feeling → -ing."),
      ch("'I'm really ___ in science.'", ["interested", "interesting"], 0, "Your feeling → -ed."),
      es(ch("A person who doesn't like to work is …", ["lazy", "kind", "honest"], 0, "lazy = doesn't want to work."), "lazy = perezoso."),
      ctx("Ana always shares her snacks with everyone.", "Ana is …", ["generous", "shy", "rude"], 0, "generous = likes to give."),
      ch("A person who tells the truth is …", ["honest", "funny", "lazy"], 0, "honest = sincero."),
    ],
    [
      gap("I was so", "after the long walk. (tire)", ["tired"], "Your feeling → -ed."),
      gap("That roller coaster was really", ". (excite)", ["exciting"], "The thing → -ing."),
      tr("Rewrite with an -ed adjective.", "The news surprised me.", ["I was surprised by the news", "I was surprised", "I was surprised at the news"], "Your feeling → surprised."),
      dict(X("01", "dict"), ["The film was boring, so I was bored", "The film was boring so I was bored"]),
      say("I'm so excited about the trip!", "Stress EXcited and TRIP."),
    ],
    [
      es(fix(["I'm", "boring", "because there's nothing to do."], 1, ["bored"], "Your feeling → bored."), "'I'm boring' = soy aburrido. Querías decir 'I'm bored' = estoy aburrido."),
      fix(["The book was very", "interested", "."], 1, ["interesting"], "The book causes the feeling → -ing."),
      fix(["My dad is very", "generosity", "with his time."], 1, ["generous"], "After 'very', use an adjective."),
      ch("Which is correct?", ["I'm tired because the match was tiring.", "I'm tiring because the match was tired.", "I'm tire because the match was tiring."], 0, "-ed for you, -ing for the match."),
      ch("Which is wrong?", ["She was very exciting about the party.", "She was very excited about the party.", "The party was exciting."], 0, "Her feeling → excited."),
    ],
    [
      ch("You describe your best friend for a school magazine. Best sentence:", ["She's funny, kind and very honest.", "She's funning, kindly and honestly.", "She's bored and boring."], 0, "Personality adjectives."),
      ch("Your teacher asks how the trip was. Best answer:", ["It was amazing! I was really surprised by the museum.", "It was amazed! I was really surprising by the museum.", "It was bored. I was really boring at the museum."], 0, "-ing for the trip, -ed for you."),
      ctx("A new student hardly talks in class.", "Kindest description:", ["He's a bit shy.", "He's rude.", "He's boring."], 0, "shy = quiet with new people."),
      ch("Which sentence is natural?", ["I'm interested in music.", "I'm interesting in music.", "I'm interest in music."], 0, "interested in."),
      say("The game was exciting, but I was tired.", "Clear -ing and -ed endings."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe a friend or family member (35 words or more). Use two personality words, one -ed adjective and one -ing adjective." },
      { universe: "screens", text: "Review a game or series (35 words or more). Use one -ed and one -ing adjective, and describe a character's personality." },
      { universe: "arts", text: "Write about a concert, film or book (35 words or more). Use one -ed and one -ing adjective, and describe a person's personality." },
    ],
    minWords: 35,
    checks: [
      { label: "An -ed feeling adjective", pattern: "\\b(bored|excited|tired|interested|surprised|worried|frightened|scared|amazed|annoyed|relaxed|disappointed|embarrassed|confused)\\b", min: 1 },
      { label: "An -ing adjective", pattern: "\\b(boring|exciting|tiring|interesting|surprising|worrying|frightening|amazing|annoying|relaxing|disappointing|embarrassing|confusing)\\b", min: 1 },
      { label: "Two personality words", pattern: "\\b(kind|shy|friendly|lazy|funny|generous|honest|rude|clever|patient|brave|polite|quiet|hard-working|confident|helpful|serious)\\b", min: 2 },
    ],
    rubric: ["I used -ed for feelings and -ing for things.", "I used at least two personality words.", "My description is clear and kind."],
    model: "My cousin Juan is funny and very generous. He always shares his games with me. Last week we watched a horror film. It was frightening, but Juan wasn't scared at all. I was really surprised! He's also patient when I lose.",
  },
};

const topics: NodePractice = {
  nodeId: "a2p.environment-basics-education-media-and-i",
  explain: "Useful topic words. Environment: recycle, pollution, rubbish, plastic, protect, save energy. Education: subject, timetable, exam, pass / fail, course, uniform. Media and internet: news, website, online, download, post, share, app. Many phrases go together: recycle plastic, save energy, pass an exam, take a course, post a photo.",
  pattern: ["Environment: recycle · pollution · rubbish · protect · save energy", "Education: subject · timetable · pass / fail an exam · take a course", "Media: news · website · online · download · post · share", "Phrases: recycle plastic · save water · post a photo"],
  es: "Ojo con 'pass an exam' = aprobar un examen (no «pasar»). 'Take an exam' = presentar un examen. 'Career' no es «carrera universitaria»; eso es 'degree'.",
  steps: [
    [
      heard(X("02", "notice"), "What do they recycle at school?", ["Paper and plastic", "Glass and metal", "Food"], 0, "'we recycle paper and plastic'."),
      heard(X("02", "notice"), "What does the speaker check every morning?", ["The news online", "The timetable", "The weather"], 0, "'Every morning I check the news online.'"),
      heard(X("02", "notice"), "What does the speaker want to do next year?", ["Take an online course in design", "Pass a difficult maths exam", "Change to a new school"], 0, "'take an online course in design'."),
      ch("Which word is about the environment?", ["pollution", "timetable", "download"], 0, "pollution = contaminación."),
      ch("Which word is about the internet?", ["website", "uniform", "rubbish"], 0, "website = página web."),
    ],
    [
      es(ch("'I passed my exam!' This means …", ["I got a good result.", "I didn't do it.", "I failed it."], 0, "pass = get the result you need."), "pass an exam = aprobar."),
      ch("Which goes with 'energy'?", ["save", "post", "fail"], 0, "save energy."),
      ch("Which goes with 'a photo'?", ["post", "recycle", "pass"], 0, "post a photo online."),
      ctx("There's a lot of smoke from cars in the city.", "This is …", ["pollution", "recycling", "a course"], 0, "Dirty air = pollution."),
      ch("Your weekly list of classes and times is your …", ["timetable", "website", "uniform"], 0, "timetable = horario."),
    ],
    [
      gap("Please put your", "in the bin.", ["rubbish"], "rubbish = basura."),
      gap("I want to", "a course in photography.", ["take", "do"], "take / do a course."),
      tr("Say it with 'recycle'.", "We use old bottles again to make new things.", ["We recycle old bottles", "We recycle bottles"], "recycle = use again."),
      dict(X("02", "dict"), ["We recycle paper and plastic at school"]),
      say("We should save energy and recycle plastic.", "Stress SAVE and REcycle."),
    ],
    [
      fix(["I hope I", "approve", "my maths exam."], 1, ["pass"], "pass an exam."),
      fix(["She", "uploaded down", "the app."], 1, ["downloaded"], "download = take from the internet."),
      fix(["We must", "protection", "the rainforest."], 1, ["protect"], "After 'must', use a verb."),
      ch("Which is correct?", ["I read the news on a website.", "I read the news in a web.", "I read the new on a website."], 0, "news (with s), website."),
      ch("Which is wrong?", ["I failed the exam, so I'm very happy.", "I passed the exam, so I'm happy.", "I failed the exam, so I'm sad."], 0, "fail = bad result."),
    ],
    [
      ch("Best idea for a school poster about the environment:", ["Turn off the lights and save energy!", "Turn on the lights and waste energy!", "Post more rubbish!"], 0, "save energy."),
      ch("Your friend asks how to find information. Best answer:", ["Look on the school website.", "Look on the school timetable rubbish.", "Recycle the website."], 0, "website."),
      ctx("Your cousin wants to learn guitar from home.", "Best suggestion:", ["Take an online course.", "Pass an online rubbish.", "Pollute online."], 0, "take an online course."),
      ch("Which sentence is natural?", ["Don't share your password online.", "Don't recycle your password.", "Don't pass your password."], 0, "share = give to others."),
      say("I passed my English exam!", "Happy stress on PASSED."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write three tips for a greener school (35 words or more). Use at least four topic words (recycle, rubbish, save energy, pollution, protect …)." },
      { universe: "screens", text: "Write about how you use the internet for school (35 words or more). Use at least four topic words (online, website, download, course, exam …)." },
      { universe: "science", text: "Write about a problem in your city's environment (35 words or more). Use at least four topic words." },
    ],
    minWords: 35,
    checks: [
      { label: "Four topic words", pattern: "\\b(recycl\\w*|pollution|rubbish|plastic|protect\\w*|energy|environment|subject|timetable|exams?|pass(ed)?|fail(ed)?|courses?|news|websites?|online|download\\w*|post(ed)?|share|apps?|internet)\\b", min: 4 },
    ],
    rubric: ["I used at least four topic words.", "I used good word partners (save energy, pass an exam).", "My ideas are clear."],
    model: "At our school, we can protect the environment in easy ways. First, recycle plastic bottles and paper. Second, turn off the lights to save energy. Third, don't leave rubbish in the playground. We can also post photos online to share our ideas.",
  },
};

const collocations: NodePractice = {
  nodeId: "a2p.common-adjective-noun-and-verb-noun",
  explain: "Some words go together naturally. These are collocations. Verb + noun: make a mistake, make a cake, do homework, do the dishes, take a photo, have a good time, catch a bus. Adjective + noun: heavy rain, strong coffee, a big mistake, a close friend, a long time. Learn them as one chunk.",
  pattern: ["make: a mistake, a cake, a plan, friends, noise", "do: homework, the dishes, sport, your best", "take: a photo, a bus, a break · have: a good time, lunch, fun", "heavy rain · strong coffee · a close friend · a big mistake"],
  es: "En español decimos «hacer» para casi todo, pero en inglés cambia: make a mistake (cometer un error), do homework (hacer tareas), take a photo (tomar una foto).",
  steps: [
    [
      heard(X("03", "notice"), "What did the speaker make last weekend?", ["A cake", "A photo", "Homework"], 0, "'I made a cake'."),
      heard(X("03", "notice"), "What did the sister take at the party?", ["Photos", "A cake", "A bus"], 0, "'My sister took a lot of photos'."),
      heard(X("03", "notice"), "What big mistake did the speaker make?", ["Forgot their keys", "Missed the bus", "Burned the cake"], 0, "'I forgot my keys!'"),
      ch("Which goes with 'homework'?", ["do", "make", "take"], 0, "do homework."),
      ch("Which goes with 'a photo'?", ["take", "do", "make"], 0, "take a photo."),
    ],
    [
      ch("'I ___ a mistake in the test.'", ["made", "did", "took"], 0, "make a mistake."),
      ch("'We ___ a great time at the party.'", ["had", "made", "did"], 0, "have a good time."),
      es(ch("'There was ___ rain last night.'", ["heavy", "strong", "big"], 0, "heavy rain."), "Para «mucha lluvia» se dice 'heavy rain', no 'strong rain'."),
      ch("'She's my ___ friend; I tell her everything.'", ["close", "near", "heavy"], 0, "a close friend."),
      ctx("You go to the kitchen after dinner to wash plates.", "You …", ["do the dishes", "make the dishes", "take the dishes"], 0, "do the dishes."),
    ],
    [
      gap("Can you", "a photo of us, please?", ["take"], "take a photo."),
      gap("I always", "my best in exams.", ["do"], "do your best."),
      tr("Use 'make'.", "We decided what to do on Saturday.", ["We made a plan for Saturday", "We made plans for Saturday"], "make a plan."),
      dict(X("03", "dict"), ["I made a big mistake in my homework"]),
      say("We had a great time at the party.", "Link: had-a GREAT TIME."),
    ],
    [
      es(fix(["I", "did", "a mistake in my essay."], 1, ["made"], "make a mistake."), "«Cometer un error» = make a mistake."),
      fix(["Let's", "make", "our homework together."], 1, ["do"], "do homework."),
      fix(["He drinks very", "heavy", "coffee."], 1, ["strong"], "strong coffee."),
      ch("Which is correct?", ["I took the bus to school.", "I made the bus to school.", "I did the bus to school."], 0, "take a bus."),
      ch("Which is wrong?", ["We made a good time.", "We had a good time.", "We had fun."], 0, "have a good time."),
    ],
    [
      ch("You write a thank-you message after a party. Best line:", ["I had a great time!", "I made a great time!", "I did a great time!"], 0, "have a good time."),
      ch("Your friend is worried about a test. Best advice:", ["Just do your best.", "Just make your best.", "Just take your best."], 0, "do your best."),
      ctx("You're tired after studying for two hours.", "Best suggestion:", ["Let's take a break.", "Let's do a break.", "Let's make a break."], 0, "take a break."),
      ch("Which is the most natural?", ["It was a big mistake.", "It was a heavy mistake.", "It was a strong mistake."], 0, "a big mistake."),
      say("Don't worry. Everyone makes mistakes.", "Stress MAKES and MISTAKES."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about your weekend (35 words or more). Use make, do, take and have with the right nouns." },
      { universe: "arts", text: "Write about a day making something creative (35 words or more). Use make, do, take and have with the right nouns." },
      { universe: "past", text: "Write about a family trip (35 words or more). Use make, do, take and have with the right nouns." },
    ],
    minWords: 35,
    checks: [
      { label: "make + noun", pattern: "\\b(make|makes|made|making)\\s+(a\\s+|an\\s+|the\\s+|some\\s+|new\\s+|big\\s+)?(mistake|cake|plan|friends|noise|decision|dinner|lunch|breakfast|pizza|video|card|mess)", min: 1 },
      { label: "do + noun", pattern: "\\b(do|does|did|doing)\\s+(my\\s+|the\\s+|our\\s+|some\\s+|your\\s+|his\\s+|her\\s+)?(homework|dishes|sport|best|exercise|shopping|housework|project)", min: 1 },
      { label: "take / have + noun", pattern: "\\b(take|takes|took|taking|have|has|had|having)\\s+(a\\s+|an\\s+|the\\s+|lots\\s+of\\s+|some\\s+|great\\s+|good\\s+)*(photos?|bus|break|time|fun|lunch|dinner|shower|walk|picture)", min: 1 },
    ],
    rubric: ["I used make and do correctly.", "I used take or have with the right nouns.", "My text tells a clear story."],
    model: "On Saturday morning I did my homework. Then I made a chocolate cake with my sister. In the afternoon we took the bus to the park and took a lot of photos. We had a great time, but I made a mistake: I forgot the cake at home!",
  },
};

const phrasal: NodePractice = {
  nodeId: "a2p.separable-vs-inseparable-introduction",
  explain: "Phrasal verbs are a verb + a small word: turn off, put on, look for, look after, pick up. Some can separate. With separable verbs, the object can go in the middle: 'Turn off the light' or 'Turn the light off'. With a pronoun (it, them), it must go in the middle: 'Turn it off' (not 'Turn off it'). Inseparable verbs never separate: 'I'm looking for my phone', 'Look after my dog'.",
  pattern: ["Separable: turn off · put on · pick up · take off · turn on", "Turn off the TV / Turn the TV off / Turn it off", "Not: Turn off it", "Inseparable: look for · look after · get on (a bus)", "Look for it (not look it for)"],
  es: "Con 'it' o 'them', el pronombre va en el medio: 'Put it on', 'Pick them up'. 'Look for' = buscar, 'look after' = cuidar.",
  steps: [
    [
      heard(X("04", "notice"), "What should you do when you leave?", ["Turn off the lights", "Put on your jacket", "Pick up the phone"], 0, "'turn off the lights when you leave'."),
      heard(X("04", "notice"), "What is the speaker looking for?", ["Their phone", "Their jacket", "Their dog"], 0, "'I'm looking for my phone.'"),
      heard(X("04", "notice"), "What does the speaker ask you to look after?", ["Their dog", "Their clothes", "Their phone"], 0, "'look after my dog this weekend'."),
      ch("Which means 'search for'?", ["look for", "look after", "put on"], 0, "look for = buscar."),
      ch("Which means 'take care of'?", ["look after", "look for", "pick up"], 0, "look after = cuidar."),
    ],
    [
      ch("Which is correct?", ["Turn it off.", "Turn off it.", "Turn it of."], 0, "Pronoun in the middle."),
      ch("Which is correct?", ["I'm looking for my keys.", "I'm looking my keys for.", "I'm looking for them keys."], 0, "look for doesn't separate."),
      es(ch("'Put on your jacket' means …", ["Wear your jacket.", "Take off your jacket.", "Buy a jacket."], 0, "put on = start wearing."), "put on = ponerse (ropa)."),
      ctx("Your clothes are on the floor. Mum says: 'Pick them up!'", "What should you do?", ["Take the clothes from the floor.", "Wear the clothes from the floor.", "Look for some new clothes."], 0, "pick up = take from the floor."),
      ch("Which can separate?", ["turn off", "look after", "look for"], 0, "Turn the TV off."),
    ],
    [
      gap("It's cold. Put your coat", ".", ["on"], "put your coat on."),
      gap("Can you look", "my cat while I'm away?", ["after"], "look after = take care of."),
      tr("Replace 'the music' with 'it'.", "Turn down the music.", ["Turn it down"], "Pronoun goes in the middle."),
      dict(X("04", "dict"), ["Can you turn off the lights, please", "Can you turn off the lights please"]),
      say("Turn it off, please.", "Link: TURN-i-TOFF."),
    ],
    [
      es(fix(["The TV is loud.", "Turn off it,", "please."], 1, ["Turn it off,", "Turn it off"], "Pronoun in the middle."), "Con 'it', va en el medio: Turn it off."),
      fix(["I'm", "looking my phone for", "everywhere."], 1, ["looking for my phone"], "look for doesn't separate."),
      fix(["Your shoes are on the stairs.", "Pick up them", "now."], 1, ["Pick them up"], "Pronoun in the middle."),
      ch("Which is correct?", ["She looks after her baby brother.", "She looks her baby brother after.", "She looks after him brother."], 0, "look after + object."),
      ch("Which is wrong?", ["Put on it.", "Put it on.", "Put your hat on."], 0, "Pronoun → middle."),
    ],
    [
      ch("You're leaving the classroom. Your teacher says:", ["Please turn the lights off.", "Please turn off it.", "Please look after the lights."], 0, "turn … off."),
      ch("You can't find your book. You say:", ["I'm looking for my book.", "I'm looking after my book.", "I'm putting on my book."], 0, "look for = search."),
      ctx("Your neighbour is going on holiday and has a dog.", "You offer:", ["I can look after your dog.", "I can look for your dog.", "I can turn off your dog."], 0, "look after = care for."),
      ch("Which is the most natural?", ["Take your shoes off, please.", "Take off them, please.", "Take your shoes after, please."], 0, "take … off."),
      say("Can you look after my dog this weekend?", "Stress LOOK AFter."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write instructions for a friend who is staying at your house (35 words or more). Use three phrasal verbs, and one with 'it' or 'them' in the middle." },
      { universe: "science", text: "Write rules for a science lab (35 words or more). Use three phrasal verbs, and one with 'it' or 'them' in the middle." },
      { universe: "words", text: "Write a short morning routine (35 words or more). Use three phrasal verbs, and one with 'it' or 'them' in the middle." },
    ],
    minWords: 35,
    checks: [
      { label: "Three phrasal verbs", pattern: "\\b(turn|turns|turned|put|puts|pick|picks|picked|take|takes|took|look|looks|looked|get|gets|got|switch|switched)\\s+(\\w+\\s+)?(off|on|up|for|after|down|out|away)\\b", min: 3 },
      { label: "A pronoun in the middle (it / them)", pattern: "\\b(turn|put|pick|take|switch|turned|picked|took)\\s+(it|them)\\s+(off|on|up|down|out|away)\\b", min: 1 },
    ],
    rubric: ["I used three phrasal verbs.", "I put 'it' or 'them' in the middle.", "I didn't separate look for or look after."],
    model: "Welcome! Please look after my fish and give them food once a day. When you leave, turn off the lights. If you are cold, put on my blue jacket. Please pick up your towel and put it away. Have fun!",
  },
};

const idioms: NodePractice = {
  nodeId: "a2p.high-frequency-idioms",
  explain: "Idioms are phrases with a meaning that is different from the single words. 'It's a piece of cake' means 'it's very easy'. 'Break a leg!' means 'good luck' before a show or test. 'I'm feeling under the weather' means 'I'm a bit ill'. 'It's raining cats and dogs' means 'it's raining a lot'. 'Hit the books' means 'study hard'.",
  pattern: ["a piece of cake = very easy", "Break a leg! = Good luck!", "under the weather = a bit ill", "raining cats and dogs = raining a lot", "hit the books = study hard"],
  es: "Los modismos no se traducen palabra por palabra. 'It's a piece of cake' es como decir «es pan comido».",
  steps: [
    [
      heard(X("05", "notice"), "How does the speaker feel about the test?", ["Nervous", "Bored", "Happy"], 0, "'I'm so nervous.'"),
      heard(X("05", "notice"), "What did the friend say?", ["Break a leg!", "Hit the books!", "It's raining!"], 0, "'My friend said: break a leg!'"),
      heard(X("05", "notice"), "How was the test?", ["Easy", "Very hard", "Cancelled"], 0, "'It was easy!'"),
      ch("'It's a piece of cake' means …", ["It's very easy.", "It's a dessert.", "It's difficult."], 0, "piece of cake = easy."),
      ch("'Break a leg!' means …", ["Good luck!", "Be careful!", "Go to hospital!"], 0, "Said before a show or test."),
    ],
    [
      es(ch("'I'm under the weather today.' How do I feel?", ["A bit ill", "Very happy", "Cold"], 0, "under the weather = not well."), "= estoy un poco enfermo."),
      ch("'It's raining cats and dogs.' What's the weather like?", ["Very rainy", "Sunny", "Snowy"], 0, "raining a lot."),
      ch("'I need to hit the books.' What will I do?", ["Study hard", "Throw books", "Buy books"], 0, "hit the books = study."),
      ctx("Your friend has a dance show tonight.", "What can you say?", ["Break a leg!", "Hit the books!", "It's a piece of cake!"], 0, "Good luck before a show."),
      ch("Which idiom means 'easy'?", ["a piece of cake", "under the weather", "break a leg"], 0, "piece of cake."),
    ],
    [
      gap("The exam was a piece of", ". I finished in 20 minutes!", ["cake"], "a piece of cake."),
      gap("Take an umbrella. It's raining cats and", "!", ["dogs"], "cats and dogs."),
      tr("Say it with an idiom.", "I'm a bit ill today.", ["I'm under the weather today", "I am under the weather today", "I'm feeling under the weather today", "I'm feeling a bit under the weather today", "I'm a bit under the weather today"], "under the weather."),
      dict(X("05", "dict"), ["Don't worry. It's a piece of cake", "Don't worry, it's a piece of cake", "Don't worry it's a piece of cake"]),
      say("Break a leg tonight!", "Friendly and excited."),
    ],
    [
      fix(["The test was", "a piece of bread,", "it was so easy."], 1, ["a piece of cake,", "a piece of cake"], "The idiom is 'a piece of cake'."),
      fix(["It's raining", "dogs and cats", "outside."], 1, ["cats and dogs"], "Fixed order: cats and dogs."),
      es(fix(["I can't go out.", "I'm under the rain", "today."], 1, ["I'm under the weather", "I'm feeling under the weather"], "under the weather = a bit ill."), "El modismo es 'under the weather' (no 'rain')."),
      ch("Which is correct?", ["Exams are next week, so I'm hitting the books.", "Exams are next week, so I'm breaking a leg.", "Exams are next week, so I'm a piece of cake."], 0, "hit the books = study."),
      ch("Which is wrong?", ["Break a leg on your bike ride! Be careful.", "Break a leg in your concert tonight!", "Break a leg tonight on stage!"], 0, "Break a leg is for shows and tests, not dangerous activities."),
    ],
    [
      ch("Your friend asks if the homework was hard. It was very easy. You say:", ["No, it was a piece of cake.", "No, it was raining cats and dogs.", "No, break a leg."], 0, "piece of cake = easy."),
      ch("Your sister has a piano exam. Best message:", ["Break a leg!", "Under the weather!", "Hit the books!"], 0, "Good luck!"),
      ctx("Your teacher asks why you're absent from football practice.", "Best answer:", ["I'm a bit under the weather.", "I'm a piece of cake today.", "I'm breaking a leg today."], 0, "a bit ill."),
      ch("Which sounds natural in a text?", ["It's raining cats and dogs here!", "It's raining dogs and cats here!", "It's cats and dogs raining here!"], 0, "Fixed phrase."),
      say("Don't worry, it's a piece of cake.", "Relaxed and confident."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short text conversation with a friend before a test (35 words or more). Use at least two idioms." },
      { universe: "arts", text: "Write a message to a friend before their show or concert (35 words or more). Use at least two idioms." },
      { universe: "science", text: "Write a funny weather report (35 words or more). Use at least two idioms." },
    ],
    minWords: 35,
    checks: [
      { label: "Two idioms", pattern: "(piece of cake|break a leg|under the weather|cats and dogs|hit(ting)? the books)", min: 2 },
    ],
    rubric: ["I used at least two idioms.", "I used them in the right situation.", "My message sounds friendly."],
    model: "Hi Vale! Are you ready for the English test tomorrow? I hit the books all afternoon, so I think it will be a piece of cake. Juan is under the weather, so he can't come. Break a leg! See you tomorrow.",
  },
};

export const A2P_WORDS: NodePractice[] = [feelings, topics, collocations, phrasal, idioms];
