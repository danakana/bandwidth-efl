/* B1+ Sounds and Error Clinic. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, say, tr } from "./helpers";

const S = (n: string, k: string) => `p/b1ps-${n}-${k}.mp3`;
const E = (n: string, k: string) => `p/b1pe-${n}-${k}.mp3`;

export const B1P_SOUNDS_ERRORS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: S("01", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "No, no, the party is on TUESDAY, not Thursday. And it's at Ana's house, not Laura's. Bring a DRINK, not food. Oh, and it starts at SEVEN, not eight. Got it?" },
  { file: S("01", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "I said Tuesday, not Thursday." },
  { file: S("02", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "Listen to how the stress moves. PHOtograph. phoTOgrapher. photoGRAPHic. ECOnomy. eCOnomics. ecoNOMic. And one more: PERson, perSONality." },
  { file: S("02", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "My brother is a photographer, and his photographs are amazing." },
  { file: E("01", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "I moved to the coast last year. At first, the heat was terrible. But now I'm used to living here. I'm used to swimming every morning, and I'm getting used to eating fish every day. I'm not used to cold weather any more!" },
  { file: E("01", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "I'm used to waking up early for school." },
  { file: E("02", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Excuse me, can you tell me where the station is? And do you know what time the next train leaves? I'd also like to know how much a ticket costs. Thank you!" },
  { file: E("02", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Can you tell me where the station is?" },
  { file: E("03", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "My friend told me a secret yesterday. She said that she's moving to Spain! She told me not to tell anyone. But then her mum said the same thing to my mum. So now everyone knows. I told my friend I was sorry, but it wasn't my fault!" },
  { file: E("03", "dict"), voice: "8DvnqWWA3WWXixOm7zQI", script: "She told me that she was moving to Spain." },
];

const contrastive: NodePractice = {
  nodeId: "b1p.contrastive-stress",
  explain: "In English, we stress (say louder, longer and higher) the word that carries new or corrected information. This is called contrastive stress. 'I said TUESDAY, not Thursday.' 'It's at ANA'S house, not Laura's.' The stressed word changes the meaning: 'I didn't take YOUR bike' (I took someone else's) vs 'I didn't TAKE your bike' (I borrowed it, or did something else). In Spanish, word order often shows contrast; in English, stress does the work. Practise by saying the same sentence with different stressed words.",
  pattern: ["Stress the new or corrected word: I said TUESDAY, not Thursday.", "Different stress, different meaning: I didn't take YOUR bike. / I didn't TAKE your bike.", "Stressed = louder, longer, higher", "Use it to correct, compare and contrast"],
  steps: [
    [
      heard(S("01", "notice"), "What day is the party?", ["Tuesday", "Thursday", "Saturday"], 0, "'on TUESDAY, not Thursday'."),
      heard(S("01", "notice"), "Whose house is the party at?", ["Ana's", "Laura's", "The speaker's"], 0, "'at Ana's house, not Laura's'."),
      heard(S("01", "notice"), "What should people bring?", ["A drink", "Food", "Music"], 0, "'Bring a DRINK, not food.'"),
      ch("Which word is stressed when you correct a mistake?", ["The corrected word", "The first word", "The last word"], 0, "Stress the new information."),
      ch("'I said TUESDAY, not Thursday.' Why is Tuesday stressed?", ["It corrects the day.", "It's the first word.", "Days are always stressed."], 0, "Contrastive stress."),
    ],
    [
      ch("'I didn't take YOUR bike.' The speaker means…", ["I took someone else's bike.", "I didn't take any bike.", "I borrowed your bike."], 0, "Stress on YOUR."),
      ch("'I didn't TAKE your bike.' The speaker means…", ["I did something else with it, like borrow or fix it.", "I took someone else's bike.", "I took it."], 0, "Stress on TAKE."),
      ctx("Waiter: 'One coffee?' You: 'No, TWO coffees.'", "Why stress TWO?", ["To correct the number", "Because coffee is important", "To sound angry"], 0, "Correction."),
      ch("How do we make a word stressed?", ["Louder, longer and higher", "Quieter and faster", "Whispering it"], 0, "Features of stress."),
      ch("In Spanish we often change word order for contrast. In English we usually…", ["change the stress", "change the tense", "add more words"], 0, "Stress does the work."),
    ],
    [
      gap("It's at seven, not", ".", ["eight", "six", "nine"], "A contrast pair: seven / eight."),
      gap("I wanted a SMALL coffee, not a", "one.", ["big", "large"], "Contrast: small / large."),
      tr("Write the correction with 'not'.", "Friend: 'Your birthday is in June, right?' (It's in July.)", ["No, it's in July, not June", "It's in July, not June", "No, it's in July not June"], "Correction + not."),
      dict(S("01", "dict"), ["I said Tuesday, not Thursday", "I said Tuesday not Thursday"]),
      say("I said TUESDAY, not Thursday.", "Make TUESDAY louder, longer and higher."),
    ],
    [
      ch("Your friend thinks you're going to Lima, but you're going to Quito. Which stress is right?", ["I'm going to QUITO, not Lima.", "I'M going to Quito, not Lima.", "I'm GOING to Quito, not Lima."], 0, "Stress the corrected place."),
      ch("You want to say it was your SISTER who broke the window, not you. Which is right?", ["My SISTER broke the window.", "My sister broke the WINDOW.", "My sister BROKE the window."], 0, "Stress the person."),
      ch("Waiter: 'A cheese pizza?' You wanted chicken. Which is right?", ["No, a CHICKEN pizza.", "No, a chicken PIZZA.", "NO, a chicken pizza."], 0, "Stress the corrected type."),
      ch("You ordered a big pizza and got a small one. Which stress is right?", ["I asked for a BIG pizza, not a SMALL one.", "I ASKED for a big pizza, not a small one.", "I asked for a big PIZZA, not a small one."], 0, "Stress both parts of the contrast: BIG … SMALL."),
      ch("A student stresses every word equally when correcting a friend. The problem is…", ["The listener doesn't know which part is the correction.", "It's too short.", "The grammar is wrong."], 0, "Stress shows meaning."),
    ],
    [
      ch("You're on the phone booking a table. They wrote 'four people'. You need six.", ["No, sorry, SIX people, not four.", "No, sorry, six PEOPLE, not four.", "NO, sorry, six people."], 0, "Stress the number."),
      ch("Best way to correct a teacher politely?", ["Sorry, I think it's PAGE twenty, not page twelve.", "You're WRONG, it's page twenty.", "Page twenty."], 0, "Polite + clear stress."),
      ctx("Your mum says: 'You ate ALL the cake?'", "What is she surprised about?", ["The amount: all of it", "That it was cake", "That you ate"], 0, "Stress shows her focus."),
      say("It's at Ana's house, not Laura's.", "Stress ANA'S and LAURA'S."),
      say("I wanted a CHICKEN sandwich, not a cheese one.", "Stress CHICKEN and CHEESE."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write and record a short dialogue (50 words or more) where someone gets the details of a plan wrong and you correct them. Use at least three corrections with 'not' and write the stressed words in CAPITALS." },
      { universe: "screens", text: "Write and record a short dialogue (50 words or more) where a friend gets the details of a game night wrong. Use at least three corrections with 'not' and write the stressed words in CAPITALS." },
      { universe: "futures", text: "Write and record a phone call (50 words or more) where a travel agent gets your booking wrong. Use at least three corrections with 'not' and write the stressed words in CAPITALS." },
    ],
    minWords: 50,
    checks: [
      { label: "Three corrections with 'not'", pattern: "\\bnot\\s+\\w+", min: 3 },
      { label: "Stressed words in CAPITALS", pattern: "\\b[A-Z]{3,}\\b", min: 3 },
    ],
    rubric: ["I stressed only the corrected words.", "My corrections are clear and polite.", "My dialogue sounds natural."],
    model: "Leo: So the trip is on Saturday, right? Me: No, it's on SUNDAY, not Saturday. Leo: OK, and we meet at the bus station? Me: No, at the METRO station, not the bus station. Leo: At nine? Me: At EIGHT, not nine. Bring a jacket, it gets cold. Leo: Got it. Sunday, metro, eight. Me: Perfect! See you there.",
  },
};

const stressShift: NodePractice = {
  nodeId: "b1p.stress-shift-in-word-families",
  explain: "In some word families, the stress moves when you add a suffix. PHOtograph → phoTOgrapher → photoGRAPHic. ECOnomy → eCOnomics → ecoNOMic. PERson → perSONality. Two useful patterns: with -ic and -ity, the stress usually falls on the syllable just before the suffix (photoGRAPHic, persoNALity). With -er, -y and -ist after a long word, the stress often moves to the second syllable (phoTOgrapher). When you learn a new word, learn its stress too, because wrong stress can make a word hard to understand.",
  pattern: ["PHOtograph → phoTOgrapher → photoGRAPHic", "ECOnomy → eCOnomics → ecoNOMic", "PERson → perSONal → persoNALity", "-ic / -ity: stress just before the suffix: photoGRAPHic · electRICity", "Learn the stress with every new word"],
  steps: [
    [
      heard(S("02", "notice"), "In 'photographer', which syllable is stressed?", ["TO: phoTOgrapher", "PHO: PHOtographer", "GRA: photoGRApher"], 0, "phoTOgrapher."),
      heard(S("02", "notice"), "In 'photographic', which syllable is stressed?", ["GRAPH: photoGRAPHic", "PHO: PHOtographic", "TO: phoTOgraphic"], 0, "photoGRAPHic."),
      heard(S("02", "notice"), "In 'personality', where is the stress?", ["NAL: persoNALity", "PER: PERsonality", "SON: perSONality"], 0, "Before -ity."),
      ch("What happens to stress in some word families?", ["It moves to a different syllable.", "It disappears.", "It always stays on the first syllable."], 0, "Stress shift."),
      ch("Which is correct?", ["ecoNOMic", "ECOnomic", "economIC"], 0, "Before -ic."),
    ],
    [
      ch("With -ic, the stress usually falls…", ["on the syllable just before -ic", "on the first syllable", "on -ic"], 0, "Rule."),
      ch("Where is the stress in 'electricity'?", ["electRICity", "ELECtricity", "electriCIty"], 0, "Before -ity."),
      ctx("A student says 'PHOtographer' with stress on the first syllable.", "What's the problem?", ["The stress should be on TO: phoTOgrapher.", "Nothing.", "It should be photoGRAPHer."], 0, "Stress shift."),
      ch("Why is wrong stress a problem?", ["It can make a word hard to understand.", "It changes the spelling.", "It's never a problem."], 0, "Intelligibility."),
      ch("Which pair shows the same stress pattern?", ["photoGRAPHic / ecoNOMic", "PHOtograph / phoTOgrapher", "PERson / persoNALity"], 0, "Both before -ic."),
    ],
    [
      gap("pho", "grapher (type the stressed syllable in capitals)", ["TO"], "phoTOgrapher."),
      gap("e", "nomics (type the stressed syllable in capitals)", ["CO"], "eCOnomics."),
      tr("Write the -ity word and mark the stress with capitals.", "possible", ["possiBIlity"], "possiBIlity: stress before -ity."),
      dict(S("02", "dict"), ["My brother is a photographer, and his photographs are amazing", "My brother is a photographer and his photographs are amazing"]),
      say("My brother is a photographer, and his photographs are amazing.", "phoTOgrapher, PHOtographs."),
    ],
    [
      ch("Which stress is wrong?", ["PHOtographer", "phoTOgrapher", "PHOtograph"], 0, "phoTOgrapher."),
      ch("Which stress is wrong?", ["ECOnomic", "ecoNOMic", "eCOnomy"], 0, "ecoNOMic."),
      ch("Which stress is wrong?", ["PERsonality", "persoNALity", "PERson"], 0, "persoNALity."),
      ch("A famous photographer from Cali. Which stress is right?", ["phoTOgrapher", "PHOtographer", "photoGRApher"], 0, "Stress on the second syllable."),
      ch("Which word follows the -ic rule?", ["scienTIFic", "SCIentific", "scientiFIC"], 0, "Before -ic."),
    ],
    [
      ch("You're presenting your hobby. Which is correct?", ["I love photography: I'm a phoTOgrapher.", "I love PHOtography: I'm a PHOtographer.", "I love photoGRAphy."], 0, "phoTOgraphy, phoTOgrapher."),
      ch("Best pronunciation for a debate?", ["The ecoNOMic situation is difficult.", "The ECOnomic situation is difficult.", "The economIC situation is difficult."], 0, "ecoNOMic."),
      ctx("You learn the new word 'electricity'.", "Best study habit?", ["Learn the stress (electRICity) together with the spelling.", "Only learn the spelling.", "Guess the stress."], 0, "Learn stress with new words."),
      say("Her personality is amazing.", "persoNALity: stress NAL."),
      say("The photographic exhibition was fantastic.", "photoGRAPHic, exhiBItion, fanTAStic."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write and record a short text (50 words or more) about a job or hobby, using at least three words from a word family where the stress moves (photograph/photographer/photographic, economy/economic, person/personality, science/scientific, history/historic). Mark the stressed syllable in CAPITALS." },
      { universe: "science", text: "Write and record a short text (50 words or more) about a scientist, using at least three stress-shift words (science/scientific, economy/economic, electric/electricity, photograph/photographer). Mark the stressed syllable in CAPITALS." },
      { universe: "arts", text: "Write and record a short text (50 words or more) about an artist or photographer, using at least three stress-shift words. Mark the stressed syllable in CAPITALS." },
    ],
    minWords: 50,
    checks: [
      { label: "Three stress-shift words", pattern: "\\b(photo\\w*|econom\\w*|person\\w*|scien\\w*|histor\\w*|electric\\w*|politic\\w*|possib\\w*|creativ\\w*|nation\\w*|technolog\\w*|biolog\\w*)\\b", min: 3 },
      { label: "Stress marked in CAPITALS inside words", pattern: "\\b[a-z]*[A-Z]{2,}[a-z]*\\b", min: 3 },
    ],
    rubric: ["I marked the stress correctly.", "I said each word with the right stress.", "My text is clear and natural."],
    model: "My cousin is a phoTOgrapher. She takes PHOtographs of animals in the jungle. Her work is very photoGRAPHic, with bright colours and amazing light. She also studied eCOnomics, so she knows how to sell her photos. I love her persoNALity: she's funny and creative. One day, I want to be a phoTOgrapher too.",
  },
};

const usedToErr: NodePractice = {
  nodeId: "b1p.be-used-to-base-verb",
  explain: "A very common mistake is 'I'm used to wake up early.' In 'be used to' and 'get used to', the word 'to' is a preposition, not part of the infinitive, so it is followed by -ing or a noun: I'm used to waking up early. I'm getting used to the heat. Compare with 'used to + base verb' for past habits: I used to wake up late (but now I don't). A quick test: if you can put a noun after 'to' (I'm used to the noise), you need -ing for a verb (I'm used to living here).",
  pattern: ["✗ I'm used to wake up early.", "✓ I'm used to waking up early.", "✓ I'm getting used to the heat. / to eating fish.", "✓ I used to wake up late. (past habit)", "Test: can you put a noun after 'to'? Then use -ing."],
  steps: [
    [
      heard(E("01", "notice"), "Where does the speaker live now?", ["On the coast", "In the mountains", "In a cold city"], 0, "'I moved to the coast last year.'"),
      heard(E("01", "notice"), "What is normal for them now?", ["Living there and swimming every morning", "Cold weather", "Eating no fish"], 0, "'I'm used to living here… swimming every morning'."),
      heard(E("01", "notice"), "What are they still getting used to?", ["Eating fish every day", "Swimming", "The cold"], 0, "'I'm getting used to eating fish every day.'"),
      ch("Which is correct?", ["I'm used to waking up early.", "I'm used to wake up early.", "I'm use to wake up early."], 0, "be used to + -ing."),
      ch("In 'be used to', 'to' is…", ["a preposition", "part of the infinitive", "a mistake"], 0, "Followed by -ing or a noun."),
    ],
    [
      ch("Why do Spanish speakers often say 'I'm used to wake up'?", ["They think 'to' is the infinitive 'to'.", "It's correct in British English.", "It sounds more formal."], 0, "Confusion with infinitive to."),
      ch("Which needs a base verb?", ["I used to ___ in Cali. (past habit)", "I'm used to ___ in Cali.", "I'm getting used to ___ in Cali."], 0, "used to + base verb."),
      ctx("'I'm used to the noise.'", "So with a verb we say…", ["I'm used to hearing the noise.", "I'm used to hear the noise.", "I'm used hear the noise."], 0, "Noun position → -ing."),
      ch("Which is correct?", ["She's getting used to speaking English all day.", "She's getting used to speak English all day.", "She's getting use to speak English."], 0, "get used to + -ing."),
      ch("Which is a past habit?", ["We used to play in the street.", "We're used to playing in the street.", "We got used to playing in the street."], 0, "used to + base verb."),
    ],
    [
      gap("I'm used to", "early. I do it every day.", ["waking up", "getting up"], "-ing after be used to."),
      gap("He's getting used to", "on the left in London.", ["driving"], "-ing after get used to."),
      tr("Correct the sentence.", "I'm not used to eat spicy food.", ["I'm not used to eating spicy food", "I am not used to eating spicy food"], "be used to + -ing."),
      dict(E("01", "dict"), ["I'm used to waking up early for school", "I am used to waking up early for school"]),
      say("I'm used to waking up early.", "Link 'used to': YOOS-tuh."),
    ],
    [
      fix(["I'm used to", "work", "late at night."], 1, ["working"], "be used to + -ing."),
      fix(["We're getting used to", "live", "in a big city."], 1, ["living"], "get used to + -ing."),
      fix(["She", "is used to cook", "for her whole family."], 1, ["is used to cooking"], "be used to + -ing."),
      fix(["When I was little, I", "was used to play", "with my cousins every weekend."], 1, ["used to play"], "Past habit: used to + base verb."),
      ch("Which is wrong?", ["They're used to wear uniforms.", "They're used to wearing uniforms.", "They used to wear uniforms."], 0, "be used to + -ing."),
    ],
    [
      ch("Best sentence for an email to an exchange student?", ["Don't worry, you'll get used to speaking English quickly.", "Don't worry, you'll get used to speak English.", "Don't worry, you used to speak English."], 0, "get used to + -ing."),
      ch("Best sentence about your daily routine?", ["I'm used to walking to school.", "I'm used to walk to school.", "I'm use walking to school."], 0, "be used to + -ing."),
      ctx("Your new classmate says: 'I'm used to study in silence.'", "Kindest correction?", ["Oh, you mean you're used to studying in silence? Me too!", "That's wrong.", "Say 'study'."], 0, "Gentle recast."),
      ch("Which shows a change in progress?", ["I'm getting used to cooking for myself.", "I used to cook for myself.", "I'm used to cook for myself."], 0, "get used to + -ing."),
      say("I'm getting used to living in a new city.", "Stress GETting, LIVing and NEW."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about a new routine or a new place (50 words or more). Use 'be used to + -ing' at least twice and 'get used to + -ing' at least once. Be careful: no base verbs after these!" },
      { universe: "futures", text: "Imagine you've started university in another city (50 words or more). Use 'be used to + -ing' at least twice and 'get used to + -ing' at least once." },
      { universe: "screens", text: "Write about getting used to a new game, phone or app (50 words or more). Use 'be used to + -ing' at least twice and 'get used to + -ing' at least once." },
    ],
    minWords: 50,
    checks: [
      { label: "be used to + -ing (twice)", pattern: "\\b(am|'m|is|'s|are|'re|was|were|not)\\s+used to\\s+\\w+ing\\b", min: 2 },
      { label: "get used to + -ing", pattern: "\\b(get|gets|getting|got)\\s+used to\\s+\\w+ing\\b", min: 1 },
    ],
    rubric: ["After be/get used to, I used -ing or a noun.", "I didn't mix it up with 'used to + base verb'.", "My text is clear."],
    model: "Last month I started working in my uncle's bakery on weekends. At first it was hard, but now I'm used to waking up at five. I'm used to working with hot ovens too. I'm still getting used to talking to customers, because I'm a bit shy. But my uncle says I'll get used to smiling all day very soon!",
  },
};

const indirectErr: NodePractice = {
  nodeId: "b1p.word-order-in-indirect-questions",
  explain: "Spanish speakers often say 'Can you tell me where is it?' because Spanish keeps the same order: ¿Puedes decirme dónde está? In English, after 'Can you tell me', 'Do you know' or 'I'd like to know', use statement order: subject before verb. 'Where is it?' → Can you tell me where it is? 'What time does the train leave?' → Do you know what time the train leaves? (no 'does'). 'How much is a ticket?' → I'd like to know how much a ticket is.",
  pattern: ["✗ Can you tell me where is the station?", "✓ Can you tell me where the station is?", "✗ Do you know what time does it leave?", "✓ Do you know what time it leaves?", "Rule: question word + subject + verb"],
  steps: [
    [
      heard(E("02", "notice"), "What is the speaker looking for?", ["The station", "A hotel", "A shop"], 0, "'can you tell me where the station is?'"),
      heard(E("02", "notice"), "What do they want to know about the train?", ["What time the next one leaves", "How fast it is", "Where it goes"], 0, "'do you know what time the next train leaves?'"),
      heard(E("02", "notice"), "What else would they like to know?", ["How much a ticket costs", "Where to sit", "If there's Wi-Fi"], 0, "'how much a ticket costs'."),
      ch("Which is correct?", ["Can you tell me where the station is?", "Can you tell me where is the station?", "Can you tell me where does the station is?"], 0, "Statement order."),
      ch("Which is correct?", ["Do you know what time the train leaves?", "Do you know what time does the train leave?", "Do you know what time leaves the train?"], 0, "No 'does'."),
    ],
    [
      ch("Why do Spanish speakers say 'where is it' in indirect questions?", ["Spanish keeps question order (dónde está).", "It's correct English.", "It's more polite."], 0, "Transfer from Spanish."),
      ch("In an indirect question, the subject comes…", ["before the verb", "after the verb", "at the end"], 0, "Statement order."),
      ctx("'Could you tell me how much does it cost?'", "What's the mistake?", ["'does' shouldn't be there: how much it costs", "'how much' is wrong", "There's no mistake"], 0, "No auxiliary do/does."),
      ch("'Where are the toilets?' → Do you know…", ["where the toilets are?", "where are the toilets?", "where the toilets?"], 0, "Statement order."),
      ch("'When did she leave?' → I'd like to know…", ["when she left.", "when did she leave.", "when she did leave."], 0, "Past: left, no did."),
    ],
    [
      gap("Can you tell me where the museum", "?", ["is"], "Verb at the end."),
      gap("Do you know what time the shop", "?", ["opens", "closes"], "No does; opens."),
      tr("Correct the question.", "Do you know where is my phone?", ["Do you know where my phone is?", "Do you know where my phone is"], "Statement order."),
      dict(E("02", "dict"), ["Can you tell me where the station is?", "Can you tell me where the station is"]),
      say("Can you tell me where the station is?", "Rising tone at the end."),
    ],
    [
      fix(["Can you tell me", "where is the bathroom?"], 1, ["where the bathroom is?", "where the bathroom is"], "Statement order."),
      fix(["Do you know", "what does this word mean?"], 1, ["what this word means?", "what this word means"], "No does; means."),
      fix(["I'd like to know", "how much does it cost."], 1, ["how much it costs.", "how much it costs"], "No does; costs."),
      fix(["Could you tell me", "when does the film start?"], 1, ["when the film starts?", "when the film starts"], "No does; starts."),
      ch("Which is correct?", ["Do you remember where we parked?", "Do you remember where did we park?", "Do you remember where parked we?"], 0, "Statement order, no did."),
    ],
    [
      ch("Best question at a train station?", ["Excuse me, do you know which platform the train to Cali leaves from?", "Excuse me, which platform does leave the train to Cali?", "Platform Cali where?"], 0, "Correct indirect question."),
      ch("Best question in an email to a school?", ["Could you tell me when the next course starts?", "Could you tell me when does the next course start?", "When starts the course?"], 0, "Correct order."),
      ctx("Your friend writes: 'Do you know where is the party?'", "Kind correction?", ["You mean 'Do you know where the party is?' I think it's at Sara's!", "Wrong order, try again.", "Party is where?"], 0, "Gentle recast."),
      ch("Which is the most polite AND correct?", ["Sorry to bother you, could you tell me where the nearest pharmacy is?", "Sorry, where is the nearest pharmacy is?", "Tell me where is the pharmacy."], 0, "Polite + correct."),
      say("Do you know what time the next train leaves?", "Statement order; rising tone at the end."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short dialogue (50 words or more) at a train or bus station with at least three correct indirect questions (Can you tell me where…, Do you know what time…, I'd like to know how much…). Check the word order carefully." },
      { universe: "screens", text: "Write a short chat (50 words or more) asking a friend about an online event, with at least three correct indirect questions (Do you know what time…, Can you tell me where…, I'd like to know how…)." },
      { universe: "arts", text: "Write a short dialogue (50 words or more) at a museum information desk, with at least three correct indirect questions (Could you tell me where…, Do you know what time…, I'd like to know how much…)." },
    ],
    minWords: 50,
    checks: [
      { label: "Three indirect questions", pattern: "\\b(can you tell me|could you tell me|do you know|i'?d like to know|i would like to know|i wonder|do you remember)\\b", min: 3 },
    ],
    rubric: ["In every indirect question, the subject comes before the verb.", "I didn't use do/does/did after the question word.", "My dialogue is polite."],
    model: "Me: Excuse me, can you tell me where the bus to Medellín leaves from? Officer: From platform three. Me: Thank you. Do you know what time the next one leaves? Officer: At four fifteen. Me: Great. I'd like to know how much a ticket costs, too. Officer: It's sixty thousand pesos. Me: Perfect, thank you very much!",
  },
};

const sayTell: NodePractice = {
  nodeId: "b1p.say-vs-tell",
  explain: "Spanish uses 'decir' for both, but English has say and tell with different grammar. Tell needs a person: tell someone something (She told me a secret. She told me that she was moving.). Say doesn't need a person: say something (She said that she was moving.). If you want to add a person with say, use 'to': She said hello to me. Fixed expressions: tell the truth, tell a lie, tell a story, tell a joke, tell the time; say hello, say goodbye, say sorry, say yes/no.",
  pattern: ["tell + person (+ that …): She told me (that) she was moving.", "say (+ that …): She said (that) she was moving.", "say something to someone: She said hello to me.", "tell: the truth · a lie · a story · a joke · the time", "say: hello · goodbye · sorry · yes · no"],
  steps: [
    [
      heard(E("03", "notice"), "What did the friend tell the speaker?", ["A secret", "A joke", "A lie"], 0, "'My friend told me a secret yesterday.'"),
      heard(E("03", "notice"), "What did the friend ask the speaker not to do?", ["Tell anyone", "Go to Spain", "Call her mum"], 0, "'She told me not to tell anyone.'"),
      heard(E("03", "notice"), "How did everyone find out?", ["The friend's mum told the speaker's mum.", "The speaker told everyone.", "It was on social media."], 0, "'her mum said the same thing to my mum'."),
      ch("Which is correct?", ["She told me a secret.", "She said me a secret.", "She told a secret me."], 0, "tell + person + thing."),
      ch("Which is correct?", ["He said that he was tired.", "He said me that he was tired.", "He told that he was tired."], 0, "say + that (no person)."),
    ],
    [
      ch("What's the main grammar difference?", ["'Tell' needs a person; 'say' doesn't.", "'Say' needs a person; 'tell' doesn't.", "No difference."], 0, "tell someone; say something."),
      ch("How can you add a person after 'say'?", ["With 'to': said hello to me", "Directly: said me hello", "You can't"], 0, "say … to someone."),
      ctx("'Tell me the truth!'", "Why 'tell' here?", ["It's a fixed expression: tell the truth.", "Because of 'me' only.", "Both are wrong."], 0, "Fixed expression."),
      ch("Which is a fixed expression with 'say'?", ["say goodbye", "say a story", "say the truth"], 0, "say goodbye."),
      ch("Which is a fixed expression with 'tell'?", ["tell a joke", "tell hello", "tell sorry"], 0, "tell a joke."),
    ],
    [
      gap("My grandma always", "us funny stories.", ["tells", "told"], "tell + person + story."),
      gap("She", "goodbye and left.", ["said"], "say goodbye."),
      tr("Correct the sentence.", "The teacher said us to be quiet.", ["The teacher told us to be quiet"], "tell + person + to."),
      dict(E("03", "dict"), ["She told me that she was moving to Spain"]),
      say("She told me that she was moving to Spain.", "Stress TOLD and SPAIN."),
    ],
    [
      fix(["He", "said me", "that the exam was easy."], 1, ["told me", "said"], "tell + person, or say without a person."),
      fix(["Can you", "say me", "the time, please?"], 1, ["tell me"], "tell someone the time."),
      fix(["She", "told that", "she was sorry."], 1, ["said that", "told me that"], "tell needs a person: told me that / said that."),
      fix(["Please", "tell", "hello to your parents for me."], 1, ["say"], "say hello."),
      ch("Which is wrong?", ["Don't say lies!", "Don't tell lies!", "Always tell the truth."], 0, "tell a lie."),
    ],
    [
      ch("Best way to report what your friend said?", ["Sara told me that she's coming to the party.", "Sara said me that she's coming.", "Sara told that she's coming."], 0, "tell + person + that."),
      ch("Best sentence for a story?", ["My grandfather told us a story about a ghost.", "My grandfather said us a story.", "My grandfather said a story to us about."], 0, "tell + person + story."),
      ctx("A classmate writes: 'The teacher said us the homework.'", "Kind correction?", ["You mean 'The teacher told us the homework'?", "No.", "Say it again."], 0, "Gentle recast."),
      ch("Which sentence is correct and polite?", ["Could you tell me what you said to the teacher?", "Could you say me what you told to the teacher?", "Tell me what you told."], 0, "Correct use of both."),
      say("He said sorry and told me the truth.", "Stress SORry and TRUTH."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short story (50 words or more) about a secret, a surprise or a misunderstanding. Use 'say' at least twice and 'tell' at least twice correctly (including one fixed expression like tell the truth, tell a joke, say sorry)." },
      { universe: "screens", text: "Write about a funny misunderstanding in a group chat (50 words or more). Use 'say' at least twice and 'tell' at least twice correctly." },
      { universe: "past", text: "Write a short story about a famous message from history (50 words or more). Use 'say' at least twice and 'tell' at least twice correctly." },
    ],
    minWords: 50,
    checks: [
      { label: "Two uses of 'say' (say / says / said)", pattern: "\\b(say|says|said|saying)\\b", min: 2 },
      { label: "Two uses of 'tell' with a person or fixed expression", pattern: "\\b(tell|tells|told|telling)\\s+(me|us|him|her|them|you|my|his|our|their|everyone|a|the)\\b", min: 2 },
    ],
    rubric: ["Every 'tell' has a person or is a fixed expression.", "I never wrote 'say me' or 'said us'.", "My story is clear and fun to read."],
    model: "Last week my brother told me a big secret: he wanted to surprise Mum for her birthday. He said that he was baking a cake. I promised not to tell anyone. But at dinner, Dad said, 'Who ate all the chocolate?' My brother went red and told the truth. Mum laughed and said thank you. In the end, we all made the cake together.",
  },
};

export const B1P_SOUNDS: NodePractice[] = [contrastive, stressShift];
export const B1P_ERRORS: NodePractice[] = [usedToErr, indirectErr, sayTell];
