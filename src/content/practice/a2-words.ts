/* A2 Words. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review.
   Lower band: short Spanish notes (es) and glosses shown only after a wrong answer. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, es, fix, gap, heard, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/a2w-${n}-${k}.mp3`;

export const A2_WORDS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "We took a taxi to the airport, but our flight was delayed. At the shop, I bought a T-shirt. It was on sale, so it was cheap. I paid by card, and the shop assistant gave me a receipt." },
  { file: X("01", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Our flight was delayed for two hours." },
  { file: X("02", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "I had a headache and a sore throat, so I stayed at home. My sister broke her arm playing volleyball. She can't play for six weeks. Now she reads and draws in her free time." },
  { file: X("02", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "I had a headache and a sore throat." },
  { file: X("03", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "My laptop is old, so I use my phone for everything. I download music, I watch series online and I play games. Last night, my tablet's battery died in the middle of a film!" },
  { file: X("03", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "I download music and watch series online." },
  { file: X("04", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "On Saturdays, I go swimming in the morning. Then I play basketball with my friends. In the afternoon, I do my homework and make dinner with my dad. In the evening, I take a shower and go to bed early." },
  { file: X("04", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "I do my homework and make dinner." },
  { file: X("05", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Every morning, I wake up at six and get up at ten past. I put on my uniform and turn on the radio. After school, I sit down and look at my phone. At night, I turn off the light and go to sleep." },
  { file: X("05", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "I put on my uniform and turn on the radio." },
  { file: X("06", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "Hey, how's it going? Not bad, thanks. Guess what? I got a new bike! Really? That's great! See you later, then. Yeah, see you. Take care!" },
  { file: X("06", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "How's it going? Not bad, thanks." },
];

const travelShop: NodePractice = {
  nodeId: "a2.travel-and-transport-shopping-and-money",
  explain: "Travel words: take a bus / taxi / plane, catch a train, a flight, the airport, a ticket, delayed, arrive, leave. Shopping words: a shop assistant, the price, on sale, cheap, expensive, pay by card / in cash, a receipt, change. Useful questions: 'How much is it?' 'Can I pay by card?'",
  pattern: ["take / catch a bus · take a taxi · get on / off the bus", "a flight · the airport · a ticket · delayed", "How much is it? · on sale · cheap / expensive", "pay by card · pay in cash · a receipt · change"],
  es: "'delayed' = retrasado. 'on sale' = en oferta. 'receipt' = recibo (la 'p' no suena). Se dice 'pay by card' y 'pay in cash'.",
  steps: [
    [
      heard(X("01", "notice"), "How did they get to the airport?", ["By taxi", "By bus", "By train"], 0, "'We took a taxi to the airport'."),
      heard(X("01", "notice"), "What was the problem with the flight?", ["It was delayed.", "It was cancelled.", "It was full."], 0, "'our flight was delayed'."),
      heard(X("01", "notice"), "Why was the T-shirt cheap?", ["It was on sale.", "It was old.", "It was small."], 0, "'It was on sale'."),
      ch("Which word is about travel?", ["flight", "receipt", "price"], 0, "flight = vuelo."),
      ch("Which word is about shopping?", ["receipt", "airport", "platform"], 0, "receipt = recibo."),
    ],
    [
      es(ch("'The train is delayed.' What does it mean?", ["It's late.", "It's early.", "It's full."], 0, "delayed = late."), "delayed = retrasado."),
      ch("Which question asks for the price?", ["How much is it?", "How many is it?", "What price you?"], 0, "How much is it?"),
      ch("You don't have cash. You ask:", ["Can I pay by card?", "Can I pay with cash card?", "Can I buy card?"], 0, "pay by card."),
      ctx("Shoes: 200,000 pesos. Now: 120,000 pesos.", "The shoes are …", ["on sale", "delayed", "expensive now"], 0, "on sale = cheaper price."),
      ch("The paper the shop gives you after you pay is a …", ["receipt", "ticket", "flight"], 0, "receipt."),
    ],
    [
      gap("We", "the bus to school every morning.", ["take", "catch", "get"], "take / catch a bus."),
      gap("Can I pay", "card?", ["by"], "pay by card."),
      tr("Ask the price politely.", "I want to know the price of this jacket.", ["How much is this jacket", "Excuse me, how much is this jacket", "How much does this jacket cost"], "How much is …?"),
      dict(X("01", "dict"), ["Our flight was delayed for two hours"]),
      say("Excuse me, how much is this T-shirt?", "Rising, polite."),
    ],
    [
      fix(["I", "paid with", "card at the shop."], 1, ["paid by"], "pay by card."),
      fix(["How", "many", "is this bag?"], 1, ["much"], "Price → How much."),
      es(fix(["We", "went in", "a taxi to the airport."], 1, ["took", "went by"], "take a taxi / go by taxi."), "Se dice 'take a taxi' o 'go by taxi'."),
      ch("Which is correct?", ["We got off the bus at the park.", "We got down the bus at the park.", "We went out the bus at park."], 0, "get off the bus."),
      ch("Which is wrong?", ["This shirt is very cheap, it costs a lot.", "This shirt is cheap; it's on sale.", "This shirt is expensive."], 0, "cheap ≠ costs a lot."),
    ],
    [
      ch("At a shop, you want to know if you can use your card. Best:", ["Can I pay by card, please?", "Card OK?", "I pay card."], 0, "Polite question."),
      ch("Your friend asks about your trip. Best answer:", ["We took a plane, but the flight was delayed.", "We catched a plane, it was delay.", "We took plane delayed."], 0, "Travel vocabulary."),
      ctx("The shop assistant says: 'That's 30,000.' You give 50,000.", "What will you get?", ["20,000 change", "A receipt only", "A flight"], 0, "change = money back."),
      ch("Which is the best question at a bus stop?", ["Does this bus go to the centre?", "This bus centre?", "Bus go centre yes?"], 0, "Full question."),
      say("Can I pay by card, please?", "Polite rise on 'please'."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about a trip or a shopping day (30 words or more). Use at least four travel or shopping words (flight, bus, ticket, price, cheap, pay by card…)." },
      { universe: "futures", text: "Plan a dream trip (30 words or more). How will you travel and what will you buy? Use at least four travel or shopping words." },
      { universe: "past", text: "Write about a family trip (30 words or more). Use at least four travel or shopping words." },
    ],
    minWords: 30,
    checks: [
      { label: "Four travel or shopping words", pattern: "\\b(bus|taxi|plane|train|flight|airport|tickets?|delayed|arrived?|left|leave|shop|shopping|price|sale|cheap|expensive|paid|pay|card|cash|receipt|change|bought|buy|cost|costs)\\b", min: 4 },
    ],
    rubric: ["I used at least four travel or shopping words.", "I used good partners (take a bus, pay by card).", "My text tells a clear story."],
    model: "Last December, we took a plane to San Andrés. The flight was delayed for an hour, so we ate at the airport. On the island, I went shopping. I bought a hat; it was on sale, so it was cheap. I paid in cash.",
  },
};

const healthSport: NodePractice = {
  nodeId: "a2.health-and-the-body-sports-and-hobbies",
  explain: "Health: I have a headache / a stomach ache / a sore throat / a cold / a temperature. I feel sick. I broke my arm. Body: head, arm, leg, back, throat, stomach. Sports and hobbies: play football / basketball / volleyball, go swimming / running / cycling, do yoga / karate, draw, paint, read.",
  pattern: ["I have a headache / a sore throat / a cold.", "I broke my arm. · My leg hurts.", "play + ball games: play football", "go + -ing: go swimming · do + yoga / karate"],
  es: "En inglés se dice 'I have a headache' (tengo dolor de cabeza). Para deportes: 'play football', 'go swimming', 'do karate'.",
  steps: [
    [
      heard(X("02", "notice"), "What was wrong with the speaker?", ["A headache and a sore throat", "A broken leg", "A stomach ache"], 0, "'I had a headache and a sore throat'."),
      heard(X("02", "notice"), "What happened to the sister?", ["She broke her arm.", "She had a cold.", "She fell off a bike."], 0, "'My sister broke her arm playing volleyball.'"),
      heard(X("02", "notice"), "What does the sister do now in her free time?", ["Reads and draws", "Plays volleyball", "Goes swimming"], 0, "'Now she reads and draws'."),
      ch("Which word is a body part?", ["throat", "cold", "temperature"], 0, "throat = garganta."),
      ch("Which goes with 'swimming'?", ["go", "play", "do"], 0, "go swimming."),
    ],
    [
      ch("Which goes with 'basketball'?", ["play", "go", "do"], 0, "play + ball games."),
      ch("Which goes with 'karate'?", ["do", "play", "go"], 0, "do karate / yoga."),
      es(ch("'I have a sore throat.' Where does it hurt?", ["In my throat", "In my head", "In my leg"], 0, "sore throat = dolor de garganta."), "sore throat = dolor de garganta."),
      ctx("Your friend's head hurts a lot.", "She has …", ["a headache", "a stomach ache", "a sore arm"], 0, "head + ache."),
      ch("A high body heat when you're ill is …", ["a temperature", "a cold", "a hurt"], 0, "a temperature / a fever."),
    ],
    [
      gap("I can't come to school. I have a", ". My head hurts.", ["headache"], "headache."),
      gap("On Sundays, we", "cycling in the park.", ["go"], "go + -ing."),
      tr("Say it in English.", "Mi pierna me duele.", ["My leg hurts", "My leg hurts a lot"], "My + body part + hurts."),
      dict(X("02", "dict"), ["I had a headache and a sore throat"]),
      say("I have a headache and a sore throat.", "Stress HEADache and THROAT."),
    ],
    [
      fix(["I", "play", "swimming every Saturday."], 1, ["go"], "go swimming."),
      es(fix(["I", "am a headache", "today."], 1, ["have a headache"], "have + illness."), "Se dice 'I have a headache', no 'I am a headache'."),
      fix(["She", "does", "tennis every weekend."], 1, ["plays"], "play tennis."),
      ch("Which is correct?", ["He broke his leg playing football.", "He broke the leg of him.", "He broken his leg."], 0, "break → broke + his leg."),
      ch("Which is wrong?", ["I go yoga.", "I do yoga.", "I go running."], 0, "do yoga."),
    ],
    [
      ch("You call your teacher because you're ill. Best:", ["I'm sorry, I can't come. I have a temperature.", "I'm sorry, I am temperature.", "I sick no come."], 0, "Clear and polite."),
      ch("A new friend asks about your hobbies. Best:", ["I play volleyball and I go running on Sundays.", "I go volleyball and I play running.", "I do football."], 0, "Right verbs."),
      ctx("At the doctor's, the doctor asks: 'What's the matter?'", "Best answer:", ["My stomach hurts and I feel sick.", "My stomach is matter.", "I hurt stomach me."], 0, "Body + hurts."),
      ch("Which advice is natural?", ["You should drink water and rest.", "You should play rest.", "You should do water."], 0, "Simple advice."),
      say("I play basketball and go swimming.", "play / go, clearly."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about your sports and hobbies (30 words or more). Use play, go and do correctly, and one health word." },
      { universe: "science", text: "Write tips to stay healthy (30 words or more). Use play, go or do with sports, and at least two health or body words." },
      { universe: "arts", text: "Write about a hobby you love and a time you were ill and couldn't do it (30 words or more)." },
    ],
    minWords: 30,
    checks: [
      { label: "play / go / do + sport or hobby", pattern: "\\b(play|plays|played|playing)\\s+(football|basketball|volleyball|tennis|chess|games|video games|the \\w+)|\\b(go|goes|went|going)\\s+\\w+ing\\b|\\b(do|does|did|doing)\\s+(yoga|karate|judo|exercise|sport|gymnastics)\\b", min: 2 },
      { label: "A health or body word", pattern: "\\b(headache|stomach ache|sore|throat|cold|temperature|fever|sick|ill|hurt|hurts|broke|arm|leg|back|head|tired|healthy)\\b", min: 1 },
    ],
    rubric: ["I used play, go and do correctly.", "I used health or body words.", "My text is clear."],
    model: "I play basketball on Tuesdays, and I go swimming on Saturdays. I also do yoga with my mum. Last month I couldn't play for two weeks because I had a bad cold and a sore throat. I was so bored!",
  },
};

const tech: NodePractice = {
  nodeId: "a2.entertainment-and-tech-devices",
  explain: "Entertainment: a film / movie, a series, an episode, a concert, a video game, music, the news. Devices: a phone, a laptop, a tablet, headphones, a charger, the battery. Verbs: download, upload, watch online, stream, charge your phone, turn on / off. 'The battery died' means it has no power.",
  pattern: ["film · series · episode · video game · concert", "phone · laptop · tablet · headphones · charger · battery", "download · upload · watch online · charge", "My battery died. · Can I borrow your charger?"],
  es: "'charger' = cargador. 'The battery died' = se acabó la batería. 'episode' = capítulo. 'series' es igual en singular y plural.",
  steps: [
    [
      heard(X("03", "notice"), "Why does the speaker use their phone for everything?", ["Their laptop is old.", "They have no laptop.", "Their phone is new."], 0, "'My laptop is old'."),
      heard(X("03", "notice"), "What does the speaker download?", ["Music", "Games", "Books"], 0, "'I download music'."),
      heard(X("03", "notice"), "What happened last night?", ["The tablet's battery died.", "The phone broke.", "The film was boring."], 0, "'my tablet's battery died'."),
      ch("Which is a device?", ["laptop", "episode", "concert"], 0, "laptop = portátil."),
      ch("What do you need to charge a phone?", ["a charger", "headphones", "a series"], 0, "charger = cargador."),
    ],
    [
      ch("One part of a series is …", ["an episode", "a battery", "a laptop"], 0, "episode = capítulo."),
      es(ch("'My battery died.' What does it mean?", ["My device has no power.", "My device broke.", "I lost my phone."], 0, "No power."), "= se me acabó la batería."),
      ch("To put a file from the internet onto your phone is to …", ["download", "upload", "charge"], 0, "download = descargar."),
      ctx("You want to listen to music without bothering anyone.", "You need …", ["headphones", "a charger", "a laptop"], 0, "headphones."),
      ch("Which goes with 'online'?", ["watch", "charge", "turn"], 0, "watch online."),
    ],
    [
      gap("Can I borrow your", "? My phone is at 2%.", ["charger"], "charger."),
      gap("I", "a new app yesterday.", ["downloaded"], "download → downloaded."),
      tr("Say it in English.", "Vi tres capítulos anoche.", ["I watched three episodes last night"], "episode = capítulo."),
      dict(X("03", "dict"), ["I download music and watch series online"]),
      say("Can I borrow your charger, please?", "Polite rise."),
    ],
    [
      fix(["Oh no! My battery", "is died", "again."], 1, ["died", "is dead"], "Say: My battery died / is dead."),
      fix(["I watched the last", "chapter", "of the series."], 1, ["episode"], "Series → episode."),
      es(fix(["I", "discharged", "a new game."], 1, ["downloaded"], "download = descargar."), "«Descargar» = download, no 'discharge'."),
      ch("Which is correct?", ["I'm watching a series online.", "I'm watching a serie online.", "I'm seeing a series in line."], 0, "series (with s), online."),
      ch("Which is wrong?", ["Turn on your headphones off.", "Turn off your phone.", "Turn on the TV."], 0, "on and off together makes no sense."),
    ],
    [
      ch("Your phone is almost dead at a friend's house. Best:", ["Do you have a charger I can use?", "Give me charge.", "My battery is died, charge."], 0, "Polite request."),
      ch("A friend asks what you do in your free time. Best:", ["I watch series online and play video games.", "I see series in line and play videos.", "I watching series."], 0, "Natural vocabulary."),
      ctx("You're on the bus and want to watch a video quietly.", "You use …", ["headphones", "a charger", "a laptop battery"], 0, "headphones."),
      ch("Which sounds natural?", ["I downloaded the song last night.", "I discharged the song.", "I down the song."], 0, "download."),
      say("My battery died in the middle of the film!", "Surprised tone."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about the devices you use and what you do with them (30 words or more). Use at least four tech or entertainment words." },
      { universe: "screens", text: "Review your favourite series or game (30 words or more). Use at least four tech or entertainment words." },
      { universe: "futures", text: "Describe a device from the future (30 words or more). Use at least four tech words." },
    ],
    minWords: 30,
    checks: [
      { label: "Four tech or entertainment words", pattern: "\\b(phone|laptop|tablet|headphones|charger|battery|download\\w*|upload\\w*|online|stream\\w*|app|apps|film|movie|series|episodes?|video|games?|concert|music|screen|computer)\\b", min: 4 },
    ],
    rubric: ["I used at least four tech or entertainment words.", "I used good verbs (download, watch online, charge).", "My text is clear."],
    model: "I use my phone every day. I watch series online, and I download music for the bus. My favourite series has ten episodes. My laptop is old, so I only use it for homework. I always take my charger to school because my battery dies quickly.",
  },
};

const makeDo: NodePractice = {
  nodeId: "a2.make-do-take-play-go",
  explain: "Some common verbs go with special nouns. make: a cake, dinner, a mistake, friends, noise. do: homework, the dishes, exercise, karate. take: a shower, a photo, a bus, a break. play: football, the guitar, video games. go: swimming, shopping, to bed, home. Learn them as pairs.",
  pattern: ["make: dinner · a cake · a mistake · friends", "do: homework · the dishes · exercise · karate", "take: a shower · a photo · a bus · a break", "play: football · the guitar · games · go: swimming · shopping · to bed · home"],
  es: "En español decimos «hacer» para casi todo, pero en inglés cambia: do homework (hacer tareas), make dinner (hacer la cena), take a shower (darse una ducha), go home (sin 'to').",
  steps: [
    [
      heard(X("04", "notice"), "What does the speaker do on Saturday mornings?", ["Go swimming", "Play tennis", "Do homework"], 0, "'I go swimming in the morning.'"),
      heard(X("04", "notice"), "What do they play with friends?", ["Basketball", "Football", "Video games"], 0, "'I play basketball with my friends.'"),
      heard(X("04", "notice"), "What do they do in the evening?", ["Take a shower and go to bed early", "Go shopping", "Make a cake"], 0, "'I take a shower and go to bed early.'"),
      ch("Which goes with 'homework'?", ["do", "make", "take"], 0, "do homework."),
      ch("Which goes with 'a shower'?", ["take", "make", "go"], 0, "take a shower."),
    ],
    [
      ch("___ dinner", ["make", "do", "play"], 0, "make dinner."),
      ch("___ the guitar", ["play", "do", "make"], 0, "play an instrument."),
      es(ch("___ home", ["go", "go to", "make"], 0, "go home (no 'to')."), "Se dice 'go home', no 'go to home'."),
      ctx("Your mum asks you to wash the plates.", "You …", ["do the dishes", "make the dishes", "take the dishes"], 0, "do the dishes."),
      ch("___ a photo", ["take", "make", "do"], 0, "take a photo."),
    ],
    [
      gap("Let's", "shopping on Saturday.", ["go"], "go shopping."),
      gap("I always", "exercise in the morning.", ["do"], "do exercise."),
      tr("Say it in English.", "Mi papá y yo hacemos la cena.", ["My dad and I make dinner", "My father and I make dinner", "My dad and I make the dinner"], "make dinner."),
      dict(X("04", "dict"), ["I do my homework and make dinner"]),
      say("I do my homework and then I go swimming.", "do / go, clearly."),
    ],
    [
      fix(["I", "make", "my homework every day."], 1, ["do"], "do homework."),
      fix(["We", "did", "a cake for her birthday."], 1, ["made"], "make a cake."),
      es(fix(["After school, I", "go to home", "by bus."], 1, ["go home"], "go home (no 'to')."), "'go home', sin 'to'."),
      ch("Which is correct?", ["She plays the piano very well.", "She does the piano very well.", "She makes the piano."], 0, "play an instrument."),
      ch("Which is wrong?", ["Let's take a break.", "Let's make a break.", "Let's have a break."], 0, "take / have a break."),
    ],
    [
      ch("Your friend asks about your evening. Best:", ["I did my homework and took a shower.", "I made my homework and did a shower.", "I doed homework."], 0, "do homework, take a shower."),
      ch("You invite a friend. Best:", ["Do you want to go swimming on Sunday?", "Do you want to make swimming?", "Do you want to do swimming?"], 0, "go swimming."),
      ctx("You're tired after two hours of study.", "Best idea:", ["Let's take a break.", "Let's do a break.", "Let's go a break."], 0, "take a break."),
      ch("Which is natural?", ["Be quiet! Don't make noise.", "Be quiet! Don't do noise.", "Don't play noise."], 0, "make noise."),
      say("Let's take a photo!", "Happy tone."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe your perfect Saturday (30 words or more). Use make, do, take, play and go with the right nouns." },
      { universe: "arts", text: "Describe a day at an arts camp (30 words or more). Use make, do, take, play and go with the right nouns." },
      { universe: "past", text: "Describe a fun day with your family (30 words or more). Use make, do, take, play and go." },
    ],
    minWords: 30,
    checks: [
      { label: "make / do + noun", pattern: "\\b(make|makes|made|making|do|does|did|doing)\\s+(a\\s+|an\\s+|the\\s+|my\\s+|our\\s+|some\\s+|any\\s+)?(cake|pancakes|pizza|dinner|lunch|breakfast|mistake|friends|noise|homework|dishes|exercise|karate|yoga|best)\\b", min: 1 },
      { label: "take / play / go + noun", pattern: "\\b(take|takes|took|taking)\\s+(a\\s+|the\\s+|some\\s+|lots of\\s+)?(shower|photos?|bus|break|taxi)|\\b(play|plays|played|playing)\\s+(football|basketball|volleyball|tennis|the \\w+|video games|games|chess)|\\b(go|goes|went|going)\\s+(swimming|shopping|running|cycling|home|to bed)\\b", min: 2 },
    ],
    rubric: ["I used make and do correctly.", "I used take, play and go correctly.", "I wrote 'go home' without 'to'."],
    model: "On my perfect Saturday, I go swimming in the morning. Then I play football with my friends in the park. In the afternoon, I make pancakes and take a lot of photos of them. I don't do any homework! At night, I go to bed late.",
  },
};

const phrasal: NodePractice = {
  nodeId: "a2.common-everyday-phrasal-verbs",
  explain: "Phrasal verbs are a verb + a small word. Some everyday ones: wake up (open your eyes), get up (leave your bed), put on (clothes), take off (clothes), turn on / turn off (lights, TV), sit down, stand up, look at, look for (try to find), go out (leave the house for fun).",
  pattern: ["wake up · get up · go to sleep", "put on / take off (clothes)", "turn on / turn off (lights, TV, radio)", "sit down · stand up · look at · look for · go out"],
  es: "wake up = despertarse, get up = levantarse, put on = ponerse, take off = quitarse, turn on / off = prender / apagar, look for = buscar.",
  steps: [
    [
      heard(X("05", "notice"), "What time does the speaker wake up?", ["At six", "At ten past six", "At seven"], 0, "'I wake up at six'."),
      heard(X("05", "notice"), "What does the speaker put on?", ["Their uniform", "Their shoes", "Their jacket"], 0, "'I put on my uniform'."),
      heard(X("05", "notice"), "What does the speaker do at night?", ["Turns off the light and goes to sleep", "Turns on the radio", "Goes out"], 0, "'I turn off the light and go to sleep.'"),
      ch("Which means 'leave your bed'?", ["get up", "wake up", "sit down"], 0, "get up = levantarse."),
      ch("Which means 'start a light or a machine'?", ["turn on", "turn off", "take off"], 0, "turn on = prender."),
    ],
    [
      ch("The opposite of 'put on' (clothes) is …", ["take off", "turn off", "get up"], 0, "take off = quitarse."),
      ch("The opposite of 'sit down' is …", ["stand up", "get up late", "look at"], 0, "stand up."),
      es(ch("'I'm looking for my keys.' What am I doing?", ["Trying to find them", "Looking at them", "Taking them off"], 0, "look for = search."), "look for = buscar."),
      ctx("It's dark in the room.", "You should …", ["turn on the light", "turn off the light", "take off the light"], 0, "turn on."),
      ch("'Let's go out tonight!' means …", ["Let's leave the house to have fun.", "Let's sleep.", "Let's turn off the TV."], 0, "go out = salir."),
    ],
    [
      gap("Please sit", "and open your books.", ["down"], "sit down."),
      gap("It's cold. Put", "your jacket.", ["on"], "put on."),
      tr("Say it in English.", "Me levanto a las seis.", ["I get up at six", "I get up at 6"], "get up = levantarse."),
      dict(X("05", "dict"), ["I put on my uniform and turn on the radio"]),
      say("Please turn off your phones.", "Clear 'off'."),
    ],
    [
      fix(["I", "wake on", "at six every day."], 1, ["wake up"], "wake up."),
      fix(["It's hot. Take", "on", "your jumper."], 1, ["off"], "take off = remove."),
      es(fix(["Can you", "open", "the TV, please?"], 1, ["turn on"], "turn on the TV."), "En español «prender la tele», en inglés 'turn on the TV'."),
      ch("Which is correct?", ["I'm looking for my phone. Have you seen it?", "I'm looking my phone.", "I'm looking at my phone; I can't find it."], 0, "look for = search."),
      ch("Which is wrong?", ["Turn off the light, I want to read.", "Turn on the light, I want to read.", "Sit down, please."], 0, "You need light to read."),
    ],
    [
      ch("Your teacher enters the classroom. You should …", ["stand up and say good morning", "take off and say hi", "go out"], 0, "stand up."),
      ch("Your little brother can't find his shoe. You ask:", ["What are you looking for?", "What are you looking at for?", "What are you turning on?"], 0, "look for."),
      ctx("You leave the classroom last.", "Best action:", ["Turn off the lights.", "Turn on the lights.", "Put on the lights."], 0, "Save energy."),
      ch("Which morning routine is correct?", ["I wake up, get up and put on my clothes.", "I wake on, get down and put off my clothes.", "I wake, up get."], 0, "Natural order."),
      say("I wake up at six and get up at ten past.", "wake UP, get UP."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe your daily routine (30 words or more). Use at least four phrasal verbs (wake up, get up, put on, turn off…)." },
      { universe: "science", text: "Write instructions for a science lab or classroom (30 words or more). Use at least four phrasal verbs." },
      { universe: "words", text: "Write a funny morning story (30 words or more). Use at least four phrasal verbs." },
    ],
    minWords: 30,
    checks: [
      { label: "Four phrasal verbs", pattern: "\\b(wake|wakes|woke|get|gets|got|put|puts|take|takes|took|turn|turns|turned|sit|sits|sat|stand|stands|stood|look|looks|looked|go|goes|went)\\s+(\\w+\\s+)?(up|down|on|off|out|for|at)\\b", min: 4 },
    ],
    rubric: ["I used four phrasal verbs.", "I used the right small word (up, on, off…).", "My routine is in order."],
    model: "I wake up at six, but I get up at six fifteen. I put on my uniform and turn on the radio. After breakfast, I look for my keys every day! In the evening, I take off my shoes, sit down and watch TV.",
  },
};

const chunks: NodePractice = {
  nodeId: "a2.conversational-chunks",
  explain: "Conversational chunks are short phrases people use all the time. Greetings: 'How's it going?' 'Not bad, thanks.' Reactions: 'Really?' 'That's great!' 'Oh no!' 'No way!' 'Guess what?' introduces news. Goodbyes: 'See you later.' 'Take care!' 'Have a good weekend!' Learn them as one block.",
  pattern: ["How's it going? → Not bad, thanks. / Pretty good!", "Guess what? · Really? · That's great! · Oh no! · No way!", "See you later. · Take care! · Have a good one!", "Reply: You too!"],
  es: "Son frases hechas: 'How's it going?' = ¿cómo vas?; 'Take care' = cuídate; 'You too!' = igualmente.",
  steps: [
    [
      heard(X("06", "notice"), "How is the second person?", ["Not bad", "Very sad", "Tired"], 0, "'Not bad, thanks.'"),
      heard(X("06", "notice"), "What is the news?", ["A new bike", "A new phone", "A new school"], 0, "'I got a new bike!'"),
      heard(X("06", "notice"), "How does the friend react?", ["That's great!", "Oh no!", "No way, I don't believe you!"], 0, "'Really? That's great!'"),
      ch("Which is a greeting?", ["How's it going?", "Take care!", "Guess what?"], 0, "Greeting."),
      ch("Which is a goodbye?", ["See you later.", "How's it going?", "Really?"], 0, "Goodbye."),
    ],
    [
      ch("Good answer to 'How's it going?'", ["Not bad, thanks. And you?", "It's going to the park.", "Yes, it goes."], 0, "Natural reply."),
      es(ch("'Have a good weekend!' Best reply:", ["You too!", "Me too!", "Yes, I have."], 0, "You too = igualmente."), "'You too!' = igualmente."),
      ch("Your friend says: 'I won the competition!' You say:", ["That's great!", "Oh no!", "Take care!"], 0, "Good news reaction."),
      ctx("Your friend says: 'I lost my phone.'", "Best reaction:", ["Oh no!", "That's great!", "See you later!"], 0, "Bad news reaction."),
      ch("'Guess what?' is used to …", ["introduce news", "say goodbye", "say sorry"], 0, "Guess what? = ¿adivina qué?"),
    ],
    [
      gap("See you", "!", ["later", "soon", "tomorrow"], "See you later / soon."),
      gap("Take", "!", ["care"], "Take care!"),
      tr("Reply naturally.", "Friend: 'Have a nice day!' (You want to say the same back.)", ["You too", "You too!", "Thanks, you too", "Thanks, you too!"], "You too!"),
      dict(X("06", "dict"), ["How's it going? Not bad, thanks", "How's it going? Not bad thanks", "How is it going? Not bad, thanks"]),
      say("Guess what? I got a new bike!", "Excited tone."),
    ],
    [
      es(fix(["A: Have a good weekend! B:", "Me too!", "See you on Monday."], 1, ["You too!", "You too"], "Wish back → You too."), "Para devolver un deseo: 'You too!', no 'Me too!'."),
      fix(["A: How's it going? B:", "It goes good.", "And you?"], 1, ["Not bad, thanks.", "Pretty good, thanks.", "Good, thanks.", "Not bad, thanks", "Good, thanks"], "Natural reply."),
      fix(["A: I passed my exam! B:", "Oh no!", "Well done!"], 1, ["That's great!", "Really? That's great!", "That's great"], "Good news → That's great!"),
      ch("Which is correct?", ["See you later!", "See you after!", "Look you later!"], 0, "See you later."),
      ch("Which is wrong?", ["Take care of you!", "Take care!", "Take care, see you soon!"], 0, "Just 'Take care!'"),
    ],
    [
      ch("You meet a classmate in the corridor. Best start:", ["Hey! How's it going?", "Good morning, how do you do, sir?", "Goodbye!"], 0, "Casual greeting."),
      ch("Your friend tells you a surprising story. Best reaction:", ["No way! Really?", "Take care!", "You too!"], 0, "Surprise reaction."),
      ctx("Friday afternoon. Your teacher says: 'Have a good weekend!'", "Best reply:", ["Thank you, you too!", "Me too!", "Yes."], 0, "Wish back."),
      ch("Which ending to a chat is natural?", ["OK, see you tomorrow! Take care!", "OK, how's it going!", "OK, guess what!"], 0, "Goodbye chunks."),
      say("Not bad, thanks. And you?", "Friendly rising 'And you?'"),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short chat between two friends (30 words or more). Use a greeting, news with 'Guess what?', a reaction and a goodbye." },
      { universe: "screens", text: "Write a chat about a new game or video (30 words or more). Use a greeting, 'Guess what?', a reaction and a goodbye." },
      { universe: "arts", text: "Write a chat about a concert (30 words or more). Use a greeting, 'Guess what?', a reaction and a goodbye." },
    ],
    minWords: 30,
    checks: [
      { label: "A greeting (How's it going?, Hi, Hey…)", pattern: "\\b(how's it going|how are you|hi|hey|hello)\\b", min: 1 },
      { label: "A reaction (Really?, That's great!, Oh no!, No way!)", pattern: "\\b(really|that's great|oh no|no way|cool|amazing|well done)\\b", min: 1 },
      { label: "A goodbye (See you…, Take care, Bye)", pattern: "\\b(see you|take care|bye|have a good|have a nice)\\b", min: 1 },
    ],
    rubric: ["I used a greeting and a goodbye.", "I reacted to news naturally.", "The chat sounds like real friends."],
    model: "Ana: Hey Leo! How's it going? Leo: Not bad, thanks. And you? Ana: Great! Guess what? I'm going to a concert on Saturday! Leo: No way! That's great! Ana: Yeah! OK, I have to go. See you later! Leo: Take care!",
  },
};

export const A2_WORDS: NodePractice[] = [travelShop, healthSport, tech, makeDo, phrasal, chunks];
