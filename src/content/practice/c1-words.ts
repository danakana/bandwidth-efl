/* C1 Words. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, say, tr } from "./helpers";

const W = (n: string, k: "notice" | "dict") => `p/c1w-${n}-${k}.mp3`;

export const C1_WORDS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: W("01", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "I glanced at the clock, then stared at the door. My grandfather strolled in, chuckling to himself, while my little cousins giggled behind the sofa. Then my uncle staggered through the door, carrying a gigantic cake." },
  { file: W("01", "dict"), voice: "8DvnqWWA3WWXixOm7zQI", script: "She glanced at her phone and smiled." },
  { file: W("02", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "Our hypothesis was that plants grow faster with music. We controlled every variable except the sound. The findings were surprising, but the sample was small, so the evidence is not conclusive. We need to replicate the experiment." },
  { file: W("02", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "The evidence is not conclusive yet." },
  { file: W("03", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "The team was bitterly disappointed. It's highly unlikely they'll reach the final now, and the coach has been heavily criticised. Still, the fans paid tribute to the players, and they're fully aware that the season isn't over." },
  { file: W("03", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "We are fully aware of the risks." },
  { file: W("04", "notice"), voice: "bIHbv24MWmeRgasZH58o", script: "After the breakdown of the talks, the outcome was uncertain. The main drawback of the new plan is the cost. Despite a few setbacks, turnout at the meeting was high, and the committee decided to postpone the vote." },
  { file: W("04", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "The meeting has been postponed until Friday." },
  { file: W("05", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "These complaints are just the tip of the iceberg. Social media is a double-edged sword. Be that as it may, nobody wants to talk about the elephant in the room. On balance, though, I'd say the school is handling it well." },
  { file: W("05", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "Be that as it may, we have to decide today." },
  { file: W("06", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "The damage is irreversible, and the current measures are clearly inadequate. We need to modernise the system and clarify the rules. The real question is feasibility: is the plan affordable, and is it reliable?" },
  { file: W("06", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "The damage to the reef is irreversible." },
];

const shades: NodePractice = {
  nodeId: "c1.shades-of-meaning",
  explain: "C1 vocabulary is about choosing the exact word. 'Look' is fine, but glance (quickly), stare (for a long time), gaze (long, with admiration or thought) and glimpse (see for a moment) each paint a different picture. The same goes for laugh (giggle: silly, quiet; chuckle: quiet, amused; burst out laughing: suddenly), walk (stroll: relaxed; stride: long confident steps; stagger: unsteadily; tiptoe: quietly) and thin (slim: attractive; skinny: too thin; slender: elegant). The right word saves you an adverb and shows your attitude.",
  pattern: ["look: glance · stare · gaze · glimpse · peer", "laugh: giggle · chuckle · burst out laughing · smirk", "walk: stroll · stride · stagger · tiptoe · wander", "thin: slim (+) · slender (+) · skinny (−) · underweight (neutral)"],
  steps: [
    [
      heard(W("01", "notice"), "How did the speaker look at the clock?", ["Quickly: they glanced", "For a long time", "With admiration"], 0, "glance = quick look."),
      heard(W("01", "notice"), "How did the grandfather walk in?", ["In a relaxed way: he strolled", "Unsteadily", "Very fast"], 0, "stroll = walk slowly, relaxed."),
      heard(W("01", "notice"), "Why did the uncle stagger?", ["He was carrying a gigantic cake.", "He was tired of walking.", "He was laughing."], 0, "stagger = walk unsteadily."),
      ch("Who giggled?", ["The little cousins", "The grandfather", "The uncle"], 0, "giggle = silly, childish laugh."),
      ch("'Stare' means…", ["look at something for a long time", "look quickly", "see for a second"], 0, "stare = long, fixed look."),
    ],
    [
      ch("Which is positive?", ["slim", "skinny", "bony"], 0, "slim = attractively thin."),
      ch("'I caught a glimpse of the singer.' Meaning?", ["I saw her for a moment.", "I looked at her for hours.", "I photographed her."], 0, "glimpse = brief sight."),
      ch("'He strode into the office.' He walked…", ["with long, confident steps", "slowly and lazily", "on his toes"], 0, "stride = confident."),
      ctx("In a novel: 'She gazed at the ocean for hours.'", "She was probably…", ["thoughtful or admiring", "angry", "in a hurry"], 0, "gaze = long, dreamy look."),
      ch("Why choose 'chuckle' instead of 'laugh quietly'?", ["It's more precise and concise.", "It's louder.", "It's more informal."], 0, "One exact verb beats verb + adverb."),
    ],
    [
      gap("I only had time to", "at the menu before the waiter came.", ["glance"], "glance at = look quickly."),
      gap("We", "along the beach, enjoying the sunset.", ["strolled", "wandered"], "Relaxed walking."),
      gap("The baby", "when I made a funny face.", ["giggled", "laughed", "chuckled"], "Light, happy laughing."),
      dict(W("01", "dict"), ["She glanced at her phone and smiled"]),
      tr("Rewrite with one precise verb and the word given.", "He looked at the painting for a long time with admiration.", ["He gazed at the painting"], "gaze = long admiring look.", "gazed"),
    ],
    [
      fix(["It's rude to", "glance", "at people on the bus for minutes."], 1, ["stare"], "For minutes = stare."),
      fix(["The model was", "skinny and elegant,", "like a dancer."], 1, ["slender and elegant,", "slim and elegant,"], "skinny is negative; slender/slim fit 'elegant'."),
      fix(["She", "strolled", "nervously across the dark room, trying not to wake anyone."], 1, ["tiptoed", "crept"], "Quietly, to avoid waking = tiptoe."),
      ch("Which doesn't fit? 'The exhausted runner ___ over the finish line.'", ["strolled", "staggered", "stumbled"], 0, "stroll is relaxed."),
      ch("Which doesn't fit? 'I ___ a glimpse of the comet.'", ["stared", "caught", "got"], 0, "catch/get a glimpse."),
    ],
    [
      ch("Best for a story about a confident new boss?", ["She strode into the meeting room.", "She went into the meeting room.", "She tiptoed into the meeting room."], 0, "Shows confidence."),
      ch("Best description of a friend in a birthday post?", ["She's slim and full of energy.", "She's skinny and full of energy.", "She's bony and full of energy."], 0, "Positive connotation."),
      ch("Best for showing a character is hiding something?", ["He smirked and said nothing.", "He laughed.", "He burst out laughing loudly."], 0, "smirk = unpleasant, knowing smile."),
      ch("How do you learn shades of meaning best?", ["Group synonyms and notice the situation each one fits", "Learn one word per meaning only", "Translate each word"], 0, "Compare in context."),
      say("My grandfather strolled in, chuckling to himself.", "Stress STROLLED and CHUCKling."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe a busy scene (a family party, a market, a bus station) in 80 words or more. Use at least five precise verbs for looking, laughing or walking (glance, stare, gaze, giggle, chuckle, stroll, stride, stagger, tiptoe…)." },
      { universe: "arts", text: "Describe a painting, photo or film scene (80 words or more) using at least five precise verbs for looking, laughing or moving." },
    ],
    minWords: 80,
    checks: [
      { label: "Five precise verbs (glance, stare, gaze, glimpse, giggle, chuckle, stroll, stride, stagger, tiptoe, wander, peer, smirk…)", pattern: "\\b(glanc|star|gaz|glimps|peer|peep|giggl|chuckl|smirk|grinn|grin|stroll|strod|strid|stagger|tiptoe|wander|stumbl|march|creep|crept|limp|dash|rush|whisper|mutter)\\w*\\b", min: 5 },
    ],
    rubric: ["Each verb paints a clear picture.", "I avoided 'look', 'walk' and 'laugh' + adverb where one verb works.", "The words match the mood of the scene."],
    model: "The bus station was chaos on Friday afternoon. A tired businessman strode past, glancing at his watch every few seconds. Two girls giggled over a video, while an old man stared at the timetable as if it were written in Chinese. A tourist wandered between the platforms, peering at every sign. Then a boy staggered in under an enormous backpack, and his grandmother chuckled. Through the dirty window I caught a glimpse of the sunset, and for a moment everyone seemed calm.",
  },
};

const discipline: NodePractice = {
  nodeId: "c1.discipline-vocabulary-for-universes",
  explain: "Each Universe has its own key words, and using them correctly shows real understanding. Science: hypothesis, variable, sample, findings, evidence, conclusive, replicate. History: primary source, bias, context, legacy, era. Arts: composition, medium, technique, interpretation. Tech and screens: algorithm, data, user, interface, privacy. Futures: sustainability, emissions, renewable, urbanisation. Many are 'false friends' in use: 'evidence' is uncountable (not *evidences), 'data' is often plural in science writing, and 'conclusive' means it settles the question.",
  pattern: ["Science: hypothesis · variable · sample · findings · evidence (uncountable) · replicate", "History: primary / secondary source · bias · context · legacy", "Arts: composition · medium · technique · interpretation", "Tech / Futures: algorithm · data · interface · sustainability · renewable"],
  steps: [
    [
      heard(W("02", "notice"), "What was the hypothesis?", ["Plants grow faster with music.", "Music grows faster with plants.", "Plants don't need water."], 0, "'Our hypothesis was that plants grow faster with music'."),
      heard(W("02", "notice"), "What did they control?", ["Every variable except the sound", "Only the sound", "Nothing"], 0, "'We controlled every variable except the sound'."),
      heard(W("02", "notice"), "Why is the evidence not conclusive?", ["The sample was small.", "The plants died.", "The music was bad."], 0, "Small sample = weak evidence."),
      ch("'Replicate an experiment' means…", ["do it again to check the results", "copy someone's homework", "stop it"], 0, "Replication tests reliability."),
      ch("A 'primary source' in history is…", ["something from the time itself, like a letter or diary", "the most important book", "a modern textbook"], 0, "Primary = original."),
    ],
    [
      ch("Which is correct?", ["There is strong evidence.", "There are strong evidences.", "There is a strong evidence."], 0, "evidence is uncountable."),
      ch("'Findings' are…", ["the results of research", "lost objects only", "the questions"], 0, "research findings."),
      ch("In art, 'medium' means…", ["the material used (oil, watercolour, digital)", "medium size", "a person who talks to ghosts"], 0, "Work in a digital medium."),
      ctx("A historian says: 'This diary is useful, but we must consider the writer's bias.'", "'Bias' means…", ["a one-sided point of view", "the date", "the handwriting"], 0, "Sources reflect their authors."),
      ch("What does an 'algorithm' do on a streaming app?", ["It uses rules and data to decide what to recommend.", "It plays music.", "It charges your battery."], 0, "Rules + data → recommendations."),
    ],
    [
      gap("We need a larger", "before we can draw conclusions.", ["sample"], "sample size."),
      gap("The results were not", ", so we must repeat the test.", ["conclusive"], "conclusive = settles it."),
      gap("Solar and wind are", "energy sources.", ["renewable"], "renewable energy."),
      dict(W("02", "dict"), ["The evidence is not conclusive yet"]),
      tr("Rewrite using the word given.", "We will do the experiment again to see if we get the same results.", ["We will replicate the experiment", "We will replicate the experiment to see if we get the same results"], "replicate = repeat to check.", "replicate"),
    ],
    [
      fix(["The scientists found", "many evidences", "of water on Mars."], 1, ["a lot of evidence", "much evidence", "strong evidence", "evidence"], "evidence is uncountable."),
      fix(["Our", "hypothesis were", "correct."], 1, ["hypothesis was"], "One hypothesis (plural: hypotheses)."),
      fix(["A textbook from 2020 is", "a primary source", "about the French Revolution."], 1, ["a secondary source"], "Written later = secondary."),
      ch("Which is wrong?", ["The findings proves our theory.", "The findings support our theory.", "The findings suggest our theory is right."], 0, "findings is plural; and 'proves' is too strong."),
      ch("Which is wrong in a science report?", ["The experiment was super cool and proved everything.", "The results indicate a clear trend.", "Further research is needed."], 0, "Too informal and too strong."),
    ],
    [
      ch("Best sentence for a lab report?", ["The findings suggest a link between light and growth, although the sample was small.", "Light makes plants grow, 100%.", "We think plants like light, probably."], 0, "Precise and hedged."),
      ch("Best for an art review?", ["The artist's choice of medium gives the composition a raw, urgent feel.", "The painting is nice and has colours.", "The art is good art."], 0, "Discipline vocabulary used well."),
      ch("Best for a history essay?", ["As a primary source, the letter reveals the writer's bias towards the king.", "The letter is old and says things.", "The letter is true because it's old."], 0, "Source + bias."),
      ch("Why learn vocabulary by Universe?", ["Words that belong together are easier to remember and use.", "It's faster to forget them.", "Universes have no special words."], 0, "Topic sets."),
      say("Our hypothesis was that plants grow faster with music.", "hyPOthesis: stress on the second syllable."),
    ],
  ],
  create: {
    prompts: [
      { universe: "science", text: "Write a short report (80 words or more) on an experiment you did or would like to do. Use at least five science words: hypothesis, variable, sample, findings, evidence, conclusive, replicate, data." },
      { universe: "past", text: "Write a short paragraph (80 words or more) about a historical source. Use at least five history words: primary source, secondary source, bias, context, legacy, era, evidence." },
      { universe: "arts", text: "Write a short review (80 words or more) of a work of art. Use at least five arts words: composition, medium, technique, interpretation, perspective, contrast, texture." },
      { universe: "futures", text: "Write a short paragraph (80 words or more) about a future challenge. Use at least five words: sustainability, emissions, renewable, urbanisation, data, algorithm, evidence." },
    ],
    minWords: 80,
    checks: [
      { label: "Five discipline words", pattern: "\\b(hypothes[ie]s|variables?|samples?|findings?|evidence|conclusive|replicat\\w*|data|primary sources?|secondary sources?|bias\\w*|context|legacy|era|composition|medium|techniques?|interpretations?|perspective|contrast|texture|sustainab\\w*|emissions?|renewable|urbani[sz]ation|algorithms?|interface|privacy)\\b", min: 5 },
      { label: "evidence used as uncountable (no 'evidences')", pattern: "^(?![\\s\\S]*\\bevidences\\b)[\\s\\S]+$", min: 1 },
    ],
    rubric: ["Each technical word is used with its exact meaning.", "My claims match my evidence.", "The text sounds like the discipline, not a chat."],
    model: "Our hypothesis was that students remember more vocabulary when they sleep well. We asked a sample of thirty classmates to record their sleep for two weeks and tested them every Monday. We tried to control other variables, such as study time. The findings suggest a clear link: students who slept over eight hours scored higher. However, the evidence is not yet conclusive, because the sample was small. We would like to replicate the study with more data and a bigger group next term.",
  },
};

const strongColl: NodePractice = {
  nodeId: "c1.strong-and-idiomatic-collocations",
  explain: "Native speakers combine words in fixed ways, and the wrong partner sounds odd even if the meaning is clear. Adverb + adjective: bitterly disappointed, deeply concerned, highly unlikely, fully aware, painfully slow, utterly ridiculous. Adverb + verb: heavily criticised, strongly recommend, sincerely apologise. Verb + noun: pay tribute to, draw a conclusion, raise awareness, strike a balance, meet a deadline, pose a threat. These make you sound fluent and precise at C1.",
  pattern: ["bitterly disappointed · deeply concerned · highly unlikely · fully aware · utterly ridiculous", "heavily criticised · strongly recommend · sincerely apologise · widely regarded", "pay tribute to · draw a conclusion · raise awareness · strike a balance", "meet a deadline · pose a threat · take into account · come to terms with"],
  steps: [
    [
      heard(W("03", "notice"), "How did the team feel?", ["Bitterly disappointed", "Mildly happy", "Fully aware"], 0, "bitterly disappointed."),
      heard(W("03", "notice"), "How likely is it that they'll reach the final?", ["Highly unlikely", "Certain", "Quite likely"], 0, "highly unlikely."),
      heard(W("03", "notice"), "What did the fans do?", ["Paid tribute to the players", "Criticised the players", "Left the stadium"], 0, "pay tribute to = show respect."),
      ch("'Heavily criticised' means…", ["criticised a lot", "criticised by heavy people", "slightly criticised"], 0, "heavily = a lot (criticised, influenced)."),
      ch("'Fully aware' means…", ["completely conscious of something", "very tired", "partly informed"], 0, "fully aware of."),
    ],
    [
      ch("Which is natural?", ["deeply concerned", "heavily concerned", "bitterly concerned"], 0, "deeply concerned / worried."),
      ch("Which is natural?", ["strike a balance", "hit a balance", "make a balance"], 0, "strike a balance between X and Y."),
      ch("Which is natural?", ["raise awareness", "lift awareness", "grow awareness"], 0, "raise awareness of."),
      ctx("A report says: 'Plastic waste poses a serious threat to marine life.'", "'Poses a threat' means…", ["is a danger", "takes a photo", "asks a question"], 0, "pose a threat / risk."),
      ch("Why do collocations matter?", ["Wrong partners sound unnatural, even when grammar is right.", "They don't; any word works.", "Only for poetry."], 0, "Fluency = natural combinations."),
    ],
    [
      gap("I'm", "aware that this is a difficult decision.", ["fully", "well", "very"], "fully / well aware."),
      gap("It's highly", "that it will snow in Cartagena.", ["unlikely"], "highly unlikely."),
      gap("We need to strike a", "between work and rest.", ["balance"], "strike a balance."),
      dict(W("03", "dict"), ["We are fully aware of the risks", "We're fully aware of the risks"]),
      tr("Rewrite using the word given.", "The fans showed great respect to the retiring captain.", ["The fans paid tribute to the retiring captain"], "pay tribute to.", "tribute"),
    ],
    [
      fix(["I was", "strongly disappointed", "with the result."], 1, ["bitterly disappointed", "deeply disappointed", "extremely disappointed"], "bitterly / deeply disappointed."),
      fix(["The campaign aims to", "rise awareness", "of mental health."], 1, ["raise awareness"], "raise (transitive), not rise."),
      fix(["We must", "make a conclusion", "from the data."], 1, ["draw a conclusion", "reach a conclusion", "come to a conclusion"], "draw / reach a conclusion."),
      ch("Which is unnatural?", ["highly disappointed", "bitterly disappointed", "deeply disappointed"], 0, "highly goes with likely, recommended, qualified."),
      ch("Which is unnatural?", ["We hit the deadline.", "We met the deadline.", "We missed the deadline."], 0, "meet / miss a deadline."),
    ],
    [
      ch("Best line in a formal complaint?", ["I am deeply concerned about the safety of the building.", "I'm super worried about the building, like really.", "I am heavily worried about the building."], 0, "Formal and natural."),
      ch("Best for a news report?", ["The minister has been heavily criticised for the decision.", "The minister was criticised big.", "People said bad things a lot."], 0, "Journalistic collocation."),
      ch("Best recommendation in a review?", ["I strongly recommend this book to anyone interested in history.", "I hardly recommend this book.", "I heavily recommend it."], 0, "strongly recommend."),
      ch("Best way to learn collocations?", ["Notice them while reading and record the whole phrase", "Learn words alone", "Guess the adverb"], 0, "Chunks again!"),
      say("The team was bitterly disappointed, but the fans paid tribute to the players.", "Stress BITterly and TRIBute."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short news report (80 words or more) about a sports event, concert or school event that didn't go to plan. Use at least five strong collocations (bitterly disappointed, highly unlikely, heavily criticised, pay tribute to, fully aware, raise awareness…)." },
      { universe: "futures", text: "Write a short article (80 words or more) about an environmental problem. Use at least five strong collocations (deeply concerned, pose a threat, raise awareness, strike a balance, highly unlikely…)." },
    ],
    minWords: 80,
    checks: [
      { label: "Five strong collocations", pattern: "\\bbitterly disappointed\\b|\\bdeeply (concerned|worried|moved|disappointed|grateful)\\b|\\bhighly (unlikely|likely|recommended|qualified|regarded)\\b|\\bfully aware\\b|\\butterly \\w+\\b|\\bheavily (criticised|criticized|influenced)\\b|\\bstrongly (recommend|believe|oppose|disagree)\\w*\\b|\\bsincerely apologi\\w+\\b|\\bwidely (regarded|accepted|known)\\b|\\bpa(y|id|ys) tribute\\b|\\b(draw|drew|drawn|reach|reached) (a|the) conclusion\\b|\\brais(e|ed|es|ing) awareness\\b|\\bstr(ike|uck|ikes) a balance\\b|\\b(meet|met|miss|missed) (a|the) deadline\\b|\\bpos(e|es|ed) a (serious )?(threat|risk)\\b|\\btak(e|en|es|ing) into account\\b", min: 5 },
    ],
    rubric: ["Each adverb and verb has its natural partner.", "The collocations suit a news style.", "I didn't use 'very' where a stronger collocation fits."],
    model: "Local fans were bitterly disappointed on Saturday when the city's music festival was cancelled at the last minute. Organisers have been heavily criticised for failing to check the weather forecast, and it now seems highly unlikely that the event will return next year. The mayor said she was deeply concerned about the money lost by small businesses. Nevertheless, several bands played free shows in nearby cafés, and fans paid tribute to them online. Everyone is fully aware that it could have been worse.",
  },
};

const phrasalNouns: NodePractice = {
  nodeId: "c1.phrasal-nouns-and-formal-equivalents",
  explain: "Many phrasal verbs have noun forms: break down → a breakdown, set back → a setback, turn out → (voter) turnout, come out → the outcome, draw back → a drawback, break out → an outbreak, cut back → cutbacks. They're common in news and reports. C1 writers also switch between phrasal verbs (informal, spoken) and single-word formal equivalents: put off → postpone, find out → discover, look into → investigate, set up → establish, cut down on → reduce, carry out → conduct, go up → increase.",
  pattern: ["breakdown · setback · drawback · outcome · turnout · outbreak · cutbacks · input · feedback", "put off → postpone · find out → discover · look into → investigate", "set up → establish · cut down on → reduce · carry out → conduct", "Note the stress: a BREAKdown, a SETback, an OUTcome"],
  steps: [
    [
      heard(W("04", "notice"), "What happened to the talks?", ["They broke down.", "They were a success.", "They were cancelled."], 0, "'the breakdown of the talks'."),
      heard(W("04", "notice"), "What is the main drawback of the plan?", ["The cost", "The date", "The turnout"], 0, "drawback = disadvantage."),
      heard(W("04", "notice"), "What did the committee decide?", ["To postpone the vote", "To cancel the meeting", "To hold the vote immediately"], 0, "postpone = put off."),
      ch("'Turnout' means…", ["the number of people who come to an event or vote", "a change of direction", "a type of turnip"], 0, "high / low turnout."),
      ch("'A setback' is…", ["a problem that delays progress", "a type of chair", "a good result"], 0, "suffer a setback."),
    ],
    [
      ch("Formal equivalent of 'find out'?", ["discover", "outfind", "search"], 0, "find out → discover / establish."),
      ch("Formal equivalent of 'look into'?", ["investigate", "observe", "watch inside"], 0, "look into a problem → investigate it."),
      ch("'An outbreak of flu' means…", ["a sudden start of flu cases", "the end of flu", "a cure for flu"], 0, "outbreak of disease / war."),
      ctx("A report: 'The cutbacks have hit rural schools hardest.'", "'Cutbacks' are…", ["reductions in spending", "haircuts", "new buildings"], 0, "government cutbacks."),
      ch("When are phrasal verbs better than formal verbs?", ["In conversation and informal writing", "In legal documents", "Never"], 0, "Register."),
    ],
    [
      gap("The concert has been", "until next month because of the rain.", ["postponed", "put off"], "postpone = put off."),
      gap("Police are", "the cause of the fire.", ["investigating", "looking into"], "investigate = look into."),
      gap("The final", "of the election surprised everyone.", ["outcome", "result"], "outcome = result."),
      dict(W("04", "dict"), ["The meeting has been postponed until Friday"]),
      tr("Rewrite in formal style using the word given.", "The company was set up in 1998.", ["The company was established in 1998", "The company was founded in 1998"], "set up → establish.", "established"),
    ],
    [
      fix(["The", "break down", "of the bus made us late."], 1, ["breakdown"], "Noun: one word, breakdown."),
      fix(["The researchers", "carried on", "a survey of 500 students."], 1, ["carried out", "conducted"], "carry out (do) ≠ carry on (continue)."),
      fix(["We need to", "reduce down", "our use of plastic."], 1, ["reduce", "cut down on"], "reduce (formal) or cut down on (informal), not both."),
      ch("Which is wrong?", ["The out turn was very high.", "The turnout was very high.", "Turnout was high."], 0, "turnout: one word."),
      ch("Which is too informal for a report?", ["We'll look into it and get back to you, OK?", "The matter will be investigated.", "An investigation is under way."], 0, "Register mismatch."),
    ],
    [
      ch("Best for a formal letter?", ["We regret to inform you that the event has been postponed.", "Sorry, we've put the event off.", "The event got put off, sorry."], 0, "Formal register."),
      ch("Best for chatting with a friend?", ["I found out the party's been put off.", "I discovered that the celebration has been postponed.", "The party's postponement was discovered."], 0, "Phrasal verbs suit speech."),
      ch("Best headline?", ["Measles outbreak closes three schools", "Measles broke out and schools closed", "Schools closed because measles"], 0, "Phrasal nouns are great for headlines."),
      ch("Best way to describe a disadvantage in an essay?", ["The main drawback of online learning is isolation.", "The bad thing of online learning is being alone.", "Online learning's draw back is alone."], 0, "drawback."),
      say("Despite a few setbacks, turnout at the meeting was high.", "Stress SETbacks and TURNout."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short formal report (80 words or more) about a school event or project. Use at least three phrasal nouns (outcome, setback, drawback, turnout, breakdown, feedback…) and three formal verbs (postpone, investigate, establish, conduct, reduce, discover)." },
      { universe: "science", text: "Write a short formal report (80 words or more) on a research project. Use three phrasal nouns and three formal equivalents of phrasal verbs." },
    ],
    minWords: 80,
    checks: [
      { label: "Three phrasal nouns", pattern: "\\b(breakdown|setbacks?|drawbacks?|outcomes?|turnout|outbreaks?|cutbacks?|input|feedback|breakthrough|outlook|output|takeover|upbringing|downfall|layout|workout|dropouts?|shortcomings?)\\b", min: 3 },
      { label: "Three formal verbs (postpone, investigate, establish, conduct, reduce, discover, increase…)", pattern: "\\b(postpon|investigat|establish|conduct|reduc|discover|increas|decreas|tolerat|examin|distribut|eliminat|resum|commenc)\\w*\\b", min: 3 },
    ],
    rubric: ["Phrasal nouns are written as one word.", "My formal verbs replace phrasal verbs consistently.", "The report sounds formal from start to finish."],
    model: "The school recycling project was established in March by the student council. Initially, turnout at meetings was low, and there was a serious setback when the collection bins were damaged. The council investigated the problem and decided to postpone the launch until April. Since then, the volume of waste has been reduced by almost 30%. Feedback from teachers has been positive. The main drawback is that the project depends on volunteers, so we recommend conducting a survey to find new members.",
  },
};

const idioms: NodePractice = {
  nodeId: "c1.sophisticated-idioms-and-linkers",
  explain: "At C1, a few well-chosen idioms and advanced linkers make your argument vivid and precise. Idioms: the tip of the iceberg (a small visible part of a bigger problem), a double-edged sword (good and bad), the elephant in the room (an obvious problem nobody mentions), a grey area (unclear), a vicious circle, food for thought. Linkers: be that as it may (even so), by the same token (for the same reason), notwithstanding (despite), insofar as (to the extent that), on balance (after considering everything), by and large (generally). Use one or two per paragraph, not ten!",
  pattern: ["the tip of the iceberg · a double-edged sword · the elephant in the room", "a grey area · a vicious circle · food for thought", "Be that as it may, … · By the same token, … · On balance, …", "notwithstanding + noun · insofar as + clause · by and large"],
  steps: [
    [
      heard(W("05", "notice"), "What are the complaints compared to?", ["The tip of the iceberg: a small part of a bigger problem", "A double-edged sword", "Food for thought"], 0, "Bigger problem underneath."),
      heard(W("05", "notice"), "How is social media described?", ["A double-edged sword", "The elephant in the room", "A grey area"], 0, "Good and bad."),
      heard(W("05", "notice"), "What is the speaker's final view?", ["On balance, the school is handling it well.", "The school is failing.", "Nobody cares."], 0, "'On balance' = considering everything."),
      ch("'The elephant in the room' is…", ["an obvious problem that nobody talks about", "a zoo trip", "a big person"], 0, "Everyone sees it, nobody mentions it."),
      ch("'Be that as it may' means…", ["Even so / Despite that", "Because of that", "For example"], 0, "Concedes a point, then moves on."),
    ],
    [
      ch("'A vicious circle' is…", ["a situation where one problem causes another, which makes the first worse", "a dangerous dog", "a sports team"], 0, "Stress → poor sleep → more stress."),
      ch("'Insofar as' means…", ["to the extent that", "far away", "as soon as"], 0, "I agree insofar as…"),
      ch("'By and large' means…", ["generally, on the whole", "very big", "slowly"], 0, "By and large, it worked."),
      ctx("In a debate: 'The law is a grey area when it comes to drones.'", "The law is…", ["unclear", "strict", "old"], 0, "grey area = not clearly defined."),
      ch("How many idioms should a C1 essay paragraph contain?", ["One or two, where they fit", "As many as possible", "None ever"], 0, "Natural, not forced."),
    ],
    [
      gap("These problems are only the tip of the", ".", ["iceberg"], "the tip of the iceberg."),
      gap("Technology is a double-", "sword.", ["edged"], "double-edged sword."),
      gap("", "balance, I think the benefits outweigh the costs.", ["On"], "On balance."),
      dict(W("05", "dict"), ["Be that as it may, we have to decide today", "Be that as it may we have to decide today"]),
      tr("Rewrite using the word given.", "Despite the rain, the match went ahead.", ["Notwithstanding the rain, the match went ahead", "The match went ahead, notwithstanding the rain", "The rain notwithstanding, the match went ahead"], "notwithstanding = despite (formal).", "Notwithstanding"),
    ],
    [
      fix(["Rising rents are just the", "top of the iceberg."], 1, ["tip of the iceberg."], "tip, not top."),
      fix(["Nobody mentions the", "elephant of the room,", "but everyone knows."], 1, ["elephant in the room,"], "in the room."),
      fix(["Be it as it may,", "we need to decide."], 0, ["Be that as it may,"], "Be that as it may."),
      ch("Which is wrong?", ["Notwithstanding it rained, we played.", "Notwithstanding the rain, we played.", "Although it rained, we played."], 0, "notwithstanding + noun."),
      ch("Which use is forced?", ["The cafeteria's menu is the elephant in the room, a double-edged sword and the tip of the iceberg.", "Rising rents are just the tip of the iceberg.", "Social media is a double-edged sword."], 0, "Idiom overload sounds unnatural."),
    ],
    [
      ch("Best concluding sentence for an essay?", ["On balance, the advantages of a four-day week outweigh its drawbacks.", "Basically it's good, yeah.", "In the end, the elephant in the room is a grey area."], 0, "Clear and sophisticated."),
      ch("Best sentence in a casual chat?", ["Honestly, that's food for thought.", "Insofar as notwithstanding, I agree.", "By the same token, be that as it may."], 0, "Idioms can be casual; heavy linkers aren't."),
      ch("Best in a debate rebuttal?", ["Be that as it may, the cost is simply too high.", "Yes but no.", "Whatever, cost."], 0, "Concede, then counter."),
      ch("Best way to introduce a parallel argument?", ["By the same token, we should also protect rivers.", "By and large token, rivers.", "On balance, rivers."], 0, "By the same token = for the same reason."),
      say("Be that as it may, nobody wants to talk about the elephant in the room.", "Pause after MAY; stress ELephant."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write an opinion paragraph (90 words or more) about a problem at your school or in your city. Use at least two idioms (tip of the iceberg, double-edged sword, elephant in the room, grey area, vicious circle, food for thought) and two advanced linkers (Be that as it may, By the same token, On balance, notwithstanding, insofar as, by and large)." },
      { universe: "screens", text: "Write an opinion paragraph (90 words or more) about social media or gaming. Use two idioms and two advanced linkers." },
    ],
    minWords: 90,
    checks: [
      { label: "Two idioms", pattern: "\\btip of the iceberg\\b|\\bdouble-edged sword\\b|\\belephant in the room\\b|\\bgr[ae]y area\\b|\\bvicious (circle|cycle)\\b|\\bfood for thought\\b|\\bwake-up call\\b|\\bthe last straw\\b|\\bbite the bullet\\b", min: 2 },
      { label: "Two advanced linkers", pattern: "\\bbe that as it may\\b|\\bby the same token\\b|\\bon balance\\b|\\bnotwithstanding\\b|\\binsofar as\\b|\\bby and large\\b|\\ball things considered\\b|\\bthat said\\b", min: 2 },
    ],
    rubric: ["Each idiom fits the meaning exactly.", "My linkers show the right logical relationship.", "I didn't overload the paragraph."],
    model: "Smartphones in class are a double-edged sword. They can help us research quickly, but they also distract us constantly. The few students caught using TikTok in lessons are just the tip of the iceberg; most of us check our phones far more than we admit. Be that as it may, a total ban is unrealistic, since many families need to contact their children. By the same token, teachers use phones for apps and quizzes. On balance, I believe clear rules, rather than a complete ban, would work best for everyone.",
  },
};

const wordForm: NodePractice = {
  nodeId: "c1.word-formation-for-precision",
  explain: "C1 writers build exact words from roots instead of using long phrases. Verbs with -ise/-ize and -ify: modern → modernise, clear → clarify, simple → simplify, just → justify. Adjectives with -ive, -able/-ible, -ous: create → creative, afford → affordable, reverse → irreversible. Negative prefixes depend on the root: in- (inadequate), im- before p/m (impractical, immature), il- before l (illegal, illogical), ir- before r (irrelevant, irreversible), un- (unreliable), dis- (dissatisfied). Abstract nouns: reliable → reliability, feasible → feasibility, accurate → accuracy.",
  pattern: ["-ise / -ify: modernise · prioritise · clarify · simplify · justify", "-ive / -able / -ible / -ous: creative · affordable · reversible · ambiguous", "in- · im- (p, m) · il- (l) · ir- (r) · un- · dis-: inadequate · impractical · illogical · irrelevant", "-ity / -cy / -ness: reliability · feasibility · accuracy · awareness"],
  steps: [
    [
      heard(W("06", "notice"), "Can the damage be reversed?", ["No, it's irreversible.", "Yes, easily.", "Nobody knows."], 0, "ir- + reversible."),
      heard(W("06", "notice"), "How are the current measures described?", ["Inadequate: not good enough", "Excellent", "Expensive"], 0, "in- + adequate."),
      heard(W("06", "notice"), "What two qualities does the speaker ask about?", ["Whether the plan is affordable and reliable", "Whether it's fast and fun", "Whether it's legal and popular"], 0, "affordable, reliable."),
      ch("'Clarify' means…", ["make clear", "make dirty", "make a class"], 0, "clear → clarify."),
      ch("'Feasibility' means…", ["how possible or practical something is", "how fast it is", "how beautiful it is"], 0, "feasible → feasibility."),
    ],
    [
      ch("Which negative prefix goes with 'legal'?", ["il-", "in-", "un-"], 0, "illegal (before l)."),
      ch("Which negative prefix goes with 'possible'?", ["im-", "in-", "ir-"], 0, "impossible (before p)."),
      ch("Which negative prefix goes with 'relevant'?", ["ir-", "un-", "dis-"], 0, "irrelevant (before r)."),
      ctx("A teacher writes on an essay: 'Your argument is illogical.'", "The argument…", ["doesn't follow logically", "is too long", "is very logical"], 0, "il- + logical."),
      ch("Why use 'simplify' instead of 'make simpler'?", ["It's more concise and formal.", "It's more informal.", "There's no difference in style."], 0, "One precise verb."),
    ],
    [
      gap("Can you", "what you mean? I don't understand.", ["clarify", "explain"], "clear → clarify."),
      gap("The town needs to", "its old bus system.", ["modernise", "modernize", "update"], "modern → modernise."),
      gap("Taking photos here is", "; you could get a fine.", ["illegal", "forbidden", "prohibited"], "il- + legal."),
      dict(W("06", "dict"), ["The damage to the reef is irreversible"]),
      tr("Rewrite using one word formed from the word given.", "The bus service cannot be relied on.", ["The bus service is unreliable"], "rely → reliable → unreliable.", "RELY"),
    ],
    [
      fix(["Plastic damage to the ocean is", "unreversible."], 1, ["irreversible."], "ir- before r."),
      fix(["Your answer is", "unrelevant", "to the question."], 1, ["irrelevant"], "ir- + relevant."),
      fix(["We need to", "simplicate", "the instructions."], 1, ["simplify"], "simple → simplify."),
      ch("Which is wrong?", ["inpossible", "impossible", "impractical"], 0, "im- before p."),
      ch("Which is wrong?", ["The plan's feasibleness is unclear.", "The plan's feasibility is unclear.", "It's unclear whether the plan is feasible."], 0, "feasible → feasibility."),
    ],
    [
      ch("Best sentence for a formal proposal?", ["We must prioritise affordable, reliable transport.", "We must make it first that transport is cheap and you can trust it.", "Transport cheap trust first."], 0, "Precise word formation."),
      ch("Best feedback to a classmate?", ["Could you clarify your second point?", "Your second point is unclarified.", "Clear your point."], 0, "Polite and precise."),
      ch("Best criticism in an essay?", ["The current measures are clearly inadequate.", "The measures are not enough-ish.", "The measures are unadequate."], 0, "Correct prefix."),
      ch("How should you learn word families?", ["Record the root with its forms and prefixes: rely, reliable, unreliable, reliability", "Learn only the root", "Memorise random suffixes"], 0, "Families together."),
      say("The damage is irreversible, and the current measures are clearly inadequate.", "Stress irreVERsible and inADequate."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short proposal (90 words or more) to improve something in your town or school. Use at least two -ise/-ize or -ify verbs, three words with negative prefixes (in-, im-, il-, ir-, un-, dis-), and one abstract noun (reliability, feasibility, accuracy, awareness…)." },
      { universe: "futures", text: "Write a short proposal (90 words or more) for a greener city. Use two -ise/-ify verbs, three negative-prefix words, and one abstract noun." },
    ],
    minWords: 90,
    checks: [
      { label: "Two -ise / -ize / -ify verbs", pattern: "\\b\\w+(is|iz)(e|es|ed|ing)\\b|\\b\\w+if(y|ies|ied|ying)\\b", min: 2 },
      { label: "Three negative-prefix words (inadequate, impractical, illegal, irrelevant, unreliable, dissatisfied…)", pattern: "\\b(inadequate|inefficient|ineffective|insufficient|inaccessible|inaccurate|inconvenient|incapable|impractical|impossible|immature|impatient|imperfect|illegal|illogical|illegible|irrelevant|irreversible|irresponsible|irregular|unreliable|unsafe|unaffordable|unfair|unhealthy|unacceptable|unsustainable|unclear|uncomfortable|dissatisfied|dishonest|disorganised|disorganized|disadvantage\\w*)\\b", min: 3 },
      { label: "Abstract noun (-ity, -cy, -ness…)", pattern: "\\b\\w+(ity|cy|ness)\\b", min: 1 },
    ],
    rubric: ["Each negative prefix matches its root.", "My formed words replace longer phrases.", "The proposal sounds formal and clear."],
    model: "Our town's bus system is inadequate for a growing population. Buses are unreliable, and the routes are impractical for students who live outside the centre. It is also irresponsible to keep running such old, polluting vehicles. We propose that the council modernise the fleet with electric buses and simplify the ticket system so that one card works everywhere. A study of the feasibility of a new route to the university should be the first step. We also need to raise awareness of the many benefits of public transport for young people.",
  },
};

export const C1_WORDS: NodePractice[] = [shades, discipline, strongColl, phrasalNouns, idioms, wordForm];
