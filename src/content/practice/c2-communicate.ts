/* C2 Communicate. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/c2c-${n}-${k}.mp3`;

export const C2_COMMUNICATE_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "The novel's greatest strength is also its weakness. Its narrator is so charming that we forgive him everything, even when we shouldn't. The writer clearly knows this; the question is whether she wants us to notice. I suspect she does. And yet, by the final chapter, the trick feels less like art and more like a habit." },
  { file: X("01", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "The novel's greatest strength is also its weakness." },
  { file: X("02", "notice"), voice: "3f6pec3wODJsjTqtcNI2", script: "Here is the same news three ways. Text message: no school tomorrow, pipes burst, lol. Academic report: owing to a failure in the building's water system, classes were suspended. Victorian letter: My dearest cousin, I write with the most extraordinary news: the waters have conquered our schoolhouse, and we are, for one blessed day, at liberty." },
  { file: X("02", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "Owing to a failure in the water system, classes were suspended." },
  { file: X("03", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "So I crashed my uncle's car on my first day with it. Not my finest hour, I'll admit. When I told him, he just said, 'Well, that's a bit unfortunate.' Which, from my uncle, means he was absolutely furious. My American friend thought he was being kind. He wasn't." },
  { file: X("03", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "It was not exactly my finest hour." },
  { file: X("04", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "The article argues that cities should replace car parks with green spaces. It presents three reasons: lower temperatures, better mental health and more local business. It admits the cost is high, but claims the benefits outweigh it within ten years. In short, the writer believes green spaces pay for themselves." },
  { file: X("04", "dict"), voice: "8DvnqWWA3WWXixOm7zQI", script: "In short, the benefits outweigh the costs." },
  { file: X("05", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "We'd love to sponsor your festival, but five thousand dollars is beyond our budget. If you could include our logo on the main stage, we'd be prepared to offer three thousand. We could also provide drinks for the volunteers. Would that work for you? I'm confident we can find something that suits us both." },
  { file: X("05", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "If you could include our logo, we would be prepared to offer more." },
  { file: X("06", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Hi team, thanks so much for all the effort this week. I do need to be clear about one thing: the deadline on Friday is fixed. I know that's tough, and I'm happy to help anyone who's stuck. Let's make this our best project yet. And yes, I promise the pizza is still happening." },
  { file: X("06", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "I do need to be clear about one thing." },
];

const voice: NodePractice = {
  nodeId: "c2.write-with-voice-critique-sophisticated",
  explain: "At C2 your writing should sound like you, not like a template, and you should be able to judge how other writers achieve their effects. Voice comes from choices: a confident opening claim, varied sentence length, precise verbs, a controlled amount of personality ('I suspect', 'frankly'), and an ending that lands. Critique goes beyond 'I liked it': you name a technique, give evidence, and judge its effect. 'The narrator is so charming that we forgive him everything' identifies a technique (a charming narrator) and an effect (the reader's judgement is weakened). Good critique also balances praise and criticism: 'Its greatest strength is also its weakness.' Avoid empty adjectives (interesting, nice, good) and summaries of the plot.",
  pattern: ["Claim + technique + evidence + effect", "Balanced judgement: Its greatest strength is also its weakness. · And yet, …", "Precise verbs: undermines, sustains, exposes, rewards, overstays", "Controlled personal voice: I suspect … · Frankly, … · To my mind, …", "Avoid: interesting, nice, good, plot summary"],
  steps: [
    [
      heard(X("01", "notice"), "What is the novel's greatest strength?", ["Its charming narrator", "Its short chapters", "Its happy ending"], 0, "'Its narrator is so charming that we forgive him everything.'"),
      heard(X("01", "notice"), "Why is that strength also a weakness?", ["We forgive the narrator even when we shouldn't.", "The narrator is boring for most of the novel.", "The writer didn't plan the narrator carefully."], 0, "Balanced critique."),
      heard(X("01", "notice"), "How does the critic feel about the final chapter?", ["The trick feels like a habit, not art.", "It's the best part of the whole novel.", "It's too short to say anything new."], 0, "'less like art and more like a habit'."),
      ch("Which phrase shows personal voice?", ["I suspect she does.", "The novel has 300 pages.", "The book was published in 2020."], 0, "Controlled personality."),
      ch("'Its greatest strength is also its weakness' is an example of…", ["balanced judgement", "plot summary", "an informal opinion"], 0, "Critique, not summary."),
    ],
    [
      ch("Which is real critique, not summary?", ["The short chapters create a breathless pace that suits the thriller.", "In chapter 3, the detective travels to London to meet a witness.", "The book is about a detective who solves a murder in London."], 0, "Technique + effect."),
      ch("Why avoid 'interesting' in a review?", ["It tells the reader nothing specific.", "It's too formal for a magazine review.", "It's grammatically wrong in that position."], 0, "Empty adjective."),
      ctx("A review: 'The final scene overstays its welcome.'", "The critic means…", ["It goes on too long.", "It's the best scene.", "It's confusing."], 0, "Precise, idiomatic judgement."),
      ch("Which sentence has the strongest voice?", ["Frankly, the sequel exists to sell toys.", "The sequel is a film.", "Some people may or may not like the sequel."], 0, "Confident, personal, specific."),
      ch("Which verb is most precise for criticism?", ["undermines", "does", "makes"], 0, "The ending undermines the theme."),
    ],
    [
      gap("The repetition of the word 'cold'", "the sense of loneliness.", ["reinforces", "emphasises", "emphasizes", "intensifies", "strengthens", "heightens", "deepens"], "Precise verb for effect."),
      gap("The novel's greatest strength is", "its weakness.", ["also"], "Balanced judgement."),
      tr("Make this into real critique: technique + effect.", "The film was really good and interesting.", ["The film's long silences build tension and make the ending more powerful", "The long silences in the film build tension and make the ending more powerful", "The film uses long silences to build tension, which makes the ending more powerful"], "Name a technique and its effect."),
      dict(X("01", "dict"), ["The novel's greatest strength is also its weakness", "The novels greatest strength is also its weakness"]),
      say("Frankly, the ending undermines everything the film had built.", "Pause after FRANKly; stress UNdermines and BUILT."),
    ],
    [
      fix(["The book is", "very interesting", "because of the characters."], 1, ["deeply moving", "gripping", "compelling", "thought-provoking"], "Replace an empty adjective with a precise one."),
      fix(["The ending", "makes", "the story's message weaker."], 1, ["undermines"], "One precise verb: undermines."),
      ch("Which review sentence is plot summary, not critique?", ["Then Ana moves to Bogotá and meets Luis.", "The dialogue feels authentic and sharp.", "The pacing collapses in the second half."], 0, "Retelling events."),
      ch("Which is the weakest critique?", ["I liked it because it was nice.", "The cinematography turns the city into a character.", "The jokes rely too heavily on one idea."], 0, "Vague and empty."),
      fix(["In my opinion, I think", "the poem's rhythm", "is clever."], 0, ["I think", "In my opinion,", "To my mind,"], "Avoid repeating your opinion marker."),
    ],
    [
      ch("Best opening line for a review in a student magazine?", ["Rarely does a debut album sound this sure of itself.", "This album is an album by a new singer from Bogotá.", "I am going to talk about an album that I listened to."], 0, "Confident, specific, stylish."),
      ch("Best conclusion for a balanced review?", ["Flawed, overlong and occasionally brilliant, it is still worth your evening.", "In conclusion, it was good and also bad in some ways, so you can decide.", "That's all I have to say about the film. Thanks."], 0, "Lands with voice and balance."),
      ctx("Your teacher writes: 'Too much plot, not enough analysis.'", "You should…", ["cut retelling and add technique + effect comments", "add more events from the plot, in time order", "add more adjectives to each sentence"], 0, "Critique, not summary."),
      ch("Which shows the right amount of personal voice for a school essay?", ["To my mind, the poem is ultimately hopeful.", "OMG I loved this poem soooo much, it's the best!", "The poem exists and has several verses."], 0, "Controlled personality."),
      say("Rarely does a debut album sound this sure of itself.", "Stress RAREly and SURE; a confident tone."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short review (90 words or more) of a book, film, album or series. Name at least two techniques and their effects, include one balanced judgement (strength + weakness), and avoid the words 'interesting', 'nice' and 'good'." },
      { universe: "arts", text: "Write a short critique (90 words or more) of an artwork, song or performance. Name two techniques and their effects, include one balanced judgement, and avoid 'interesting', 'nice' and 'good'." },
      { universe: "screens", text: "Write a short critique (90 words or more) of a video game's story. Name two techniques and their effects, include one balanced judgement, and avoid 'interesting', 'nice' and 'good'." },
    ],
    minWords: 90,
    checks: [
      { label: "Effect verbs (creates, builds, undermines, reinforces, emphasises, exposes, sustains, suggests)", pattern: "\\b(creates?|builds?|undermines?|reinforces?|emphasi[sz]es?|exposes?|sustains?|suggests?|heightens?|intensifies|rewards?|conveys?|evokes?)\\b", min: 2 },
      { label: "A balanced judgement (but, yet, however, and yet, although, while)", pattern: "\\b(and yet|however|although|while|whereas|but|yet)\\b", min: 1 },
    ],
    rubric: ["I named techniques, not just events.", "Every judgement is supported by evidence.", "My voice is confident but fair, and I avoided empty adjectives."],
    model: "Rarely does a series about teenagers feel this honest. The handheld camera creates a sense of intimacy, as if we were sitting in the classroom ourselves. The dialogue, full of half-finished sentences, reinforces that realism. And yet the show's greatest strength is also its weakness: by the final episodes, the constant shaky filming becomes tiring rather than immersive. The soundtrack, frankly, tries too hard. Still, few shows capture the awkwardness of being sixteen so precisely, and that alone makes it worth watching, even if you skip a few episodes in the middle.",
  },
};

const spectrum: NodePractice = {
  nodeId: "c2.full-spectrum-slang-to-academic-parody-a",
  explain: "A C2 speaker can move across the full range of English: text-speak, slang, neutral, formal, academic and even historical styles. Parody imitates a style to make fun of it; pastiche imitates a style as a tribute or game. To shift style, change several features at once: vocabulary (no school tmrw → classes were suspended), grammar (fragments → full passive sentences), length, punctuation, and attitude. A Victorian letter uses long sentences, elevated words (extraordinary, at liberty, my dearest) and exaggerated emotion. An academic report uses nominalisation and causes (owing to, as a result of). Slang uses abbreviations and emojis. Being able to switch on purpose shows deep control, and it is a great tool for humour.",
  pattern: ["Text-speak: no school tmrw lol", "Neutral: There's no school tomorrow because the pipes burst.", "Academic: Owing to a failure in the water system, classes were suspended.", "Victorian: My dearest cousin, I write with the most extraordinary news…", "Change vocabulary, grammar, length, punctuation and attitude together", "Parody = mock a style · Pastiche = imitate a style as a tribute"],
  steps: [
    [
      heard(X("02", "notice"), "What is the news in all three versions?", ["There's no school because of a water problem.", "The school has burned down after a fire.", "A cousin is visiting the family for a week."], 0, "Same news, three styles."),
      heard(X("02", "notice"), "Which style uses 'owing to' and 'suspended'?", ["The academic report", "The text message", "The Victorian letter"], 0, "Formal causal language."),
      heard(X("02", "notice"), "How does the Victorian writer feel about the day off?", ["Delighted, in an exaggerated way", "Angry about losing a day of lessons", "Worried about the state of the pipes"], 0, "'for one blessed day, at liberty'."),
      ch("'Lol' and 'tmrw' are typical of…", ["text-speak", "academic writing", "legal documents"], 0, "Informal abbreviations."),
      ch("Parody means…", ["imitating a style to make fun of it", "copying someone's homework word for word", "a big party with costumes"], 0, "Humorous imitation."),
    ],
    [
      ch("What makes a text sound academic?", ["Nominalisation, passive and cause-effect connectors", "Emojis, slang and abbreviations in every line", "Very short sentences only"], 0, "Owing to a failure…, classes were suspended."),
      ch("Pastiche is different from parody because…", ["it imitates as a tribute, not to mock", "it is always much longer than parody", "it is never funny in any way"], 0, "Respectful imitation."),
      ctx("A student rewrites a football match report in the style of Shakespeare.", "This is…", ["a style-shifting exercise (pastiche or parody)", "plagiarism of someone else's work, copied exactly", "an academic essay on style"], 0, "Playing with register."),
      ch("Which change is NOT enough to shift style convincingly?", ["Changing only one word", "Changing vocabulary, grammar and punctuation", "Changing length and attitude too"], 0, "Change several features at once."),
      ch("Which is Victorian in style?", ["I remain, dear sir, your most humble servant.", "Cheers, mate, see ya soon, have a good one.", "Best regards, and thanks."], 0, "Elevated, exaggerated politeness."),
    ],
    [
      gap("", "to heavy rain, the match was postponed.", ["Owing", "Due"], "Academic causal opener."),
      gap("My dearest cousin, I write with the most", "news.", ["extraordinary", "remarkable", "astonishing", "wonderful", "dreadful", "terrible"], "Elevated Victorian vocabulary."),
      tr("Rewrite in academic style.", "lol the wifi died so nobody did the homework", ["Owing to a failure in the internet connection, the homework was not completed", "Due to a failure in the internet connection, the homework was not completed", "As a result of a failure in the internet connection, the homework was not completed", "Owing to a failure of the internet connection, the homework was not completed", "Due to a failure of the internet connection, the homework was not completed"], "Nominalisation + passive + cause connector."),
      dict(X("02", "dict"), ["Owing to a failure in the water system classes were suspended", "Owing to a failure in the water system, classes were suspended."]),
      say("My dearest cousin, I write with the most extraordinary news.", "Read it dramatically: stress DEAREST and exTRAordinary."),
    ],
    [
      fix(["Owing to a failure in the system,", "the classes got cancelled lol."], 1, ["classes were suspended.", "classes were cancelled.", "the classes were suspended.", "the classes were cancelled."], "Keep the academic style consistent to the end."),
      fix(["My dearest cousin,", "hey, guess what,", "the waters have conquered our schoolhouse."], 1, ["I write with the most extraordinary news:", "I write with extraordinary news:"], "Keep the Victorian voice consistent."),
      ch("Which mixes styles badly by accident?", ["Dear Professor, the data is kinda sus, tbh.", "Dear Professor, the data appears unreliable.", "hey, the data looks a bit off tbh"], 0, "Academic opening, slang content."),
      ch("Which text-message version is most natural?", ["no school tmrw!! pipes burst 😂", "Classes are hereby suspended until further notice.", "I write to inform thee of the school's closure."], 0, "Real text-speak."),
      ch("What's wrong with this 'Victorian' letter: 'Dear cousin, school's off, cool.'?", ["It keeps modern slang and short sentences.", "It's much too long for a letter to a cousin.", "It uses 'Dear' at the start."], 0, "Change grammar and vocabulary, not just the greeting."),
    ],
    [
      ch("Best style for a speech that parodies a boring politician?", ["Long empty phrases: 'Going forward, we will leverage synergies…'", "Plain, clear facts in short sentences, with numbers", "Text-speak and emoji throughout"], 0, "Parody exaggerates recognisable features."),
      ch("Best version for your school's official newsletter?", ["Classes will not take place on Friday owing to essential repairs.", "no class fri cos of repairs lol, enjoy the day off everyone", "Hark! No lessons shall there be upon the morrow!"], 0, "Neutral-formal for official notices."),
      ctx("A student writes a WhatsApp message to friends in perfect academic English.", "The effect is…", ["comic (if deliberate) or strange (if not)", "perfectly normal and natural English", "rude to the reader"], 0, "Register mismatch."),
      ch("Which shows the deepest control of English?", ["Writing the same story convincingly in three styles", "Using only formal words in every text you write", "Using only slang to sound natural"], 0, "Flexibility = mastery."),
      say("Owing to a failure in the water system, classes were suspended.", "Neutral newsreader tone; pause after SYStem."),
    ],
  ],
  create: {
    prompts: [
      { text: "Take one piece of news (for example, a cancelled concert or a lost school pet) and write it in three styles (100 words or more in total): a text message, an academic report, and a Victorian letter. Label each style." },
      { universe: "screens", text: "Write a game update in three styles (100 words or more in total): a gamer's text message, a formal company announcement, and a Victorian letter. Label each style." },
      { universe: "science", text: "Write the result of a science experiment in three styles (100 words or more in total): a text message, an academic abstract, and a Victorian letter. Label each style." },
    ],
    minWords: 100,
    checks: [
      { label: "Text-speak features (lol, omg, tmrw, u, gonna, tbh, !!)", pattern: "\\b(lol|omg|tmrw|tbh|gonna|wanna|u|pls|idk|btw|ngl)\\b|!!", min: 1 },
      { label: "Academic features (owing to, due to, as a result, was/were + past participle, suspended, findings)", pattern: "\\b(owing to|due to|as a result of|consequently|was suspended|were suspended|was cancelled|were cancelled|has been|findings|data)\\b", min: 1 },
      { label: "Victorian features (dearest, I remain, most extraordinary, at liberty, I beg, pray, humble servant)", pattern: "\\b(dearest|i remain|most extraordinary|at liberty|i beg|pray|humble servant|affectionate|i write with|alas)\\b", min: 2 },
    ],
    rubric: ["Each style changes vocabulary, grammar and punctuation.", "Each version stays consistent from start to finish.", "The same facts appear in all three."],
    model: "Text message: omg the concert's cancelled!! singer lost her voice lol, refunds tmrw. Academic report: Owing to the lead performer's sudden illness, the concert was cancelled. Ticket holders will be refunded in full, and a new date is expected to be announced within two weeks. Victorian letter: My dearest Eliza, I write with the most extraordinary and melancholy news. Our long-awaited concert shall not take place, for the singer has, alas, lost her voice entirely. Mama insists we shall go to the seaside instead, which is, I confess, a most agreeable consolation. I remain, as ever, your most affectionate cousin, Clara.",
  },
};

const cultural: NodePractice = {
  nodeId: "c2.cultural-references-and-understatement",
  explain: "British English in particular loves understatement: saying less than you mean. 'Not my finest hour' means a terrible moment. 'That's a bit unfortunate' can mean a disaster. 'I'm not entirely convinced' means I completely disagree. 'Quite good' can be lukewarm. American English tends to be more direct and enthusiastic ('That's awesome!' 'That was terrible.'). Colombian Spanish is often warm and indirect in different ways, so these signals are easy to miss. Cultural references (a famous TV moment, a song, a national habit like tea or Thanksgiving) also carry meaning that the words alone don't. To understand, ask: what is the speaker really feeling? To use understatement yourself, choose a mild phrase for a strong situation, and only use it with people who will get it.",
  pattern: ["Not my finest hour = a very bad moment", "That's a bit unfortunate = that's a disaster", "I'm not entirely convinced = I don't agree", "Quite good (British) = OK, not great", "It could be worse = it's bad", "With respect, … = I'm about to disagree", "US style: more direct and enthusiastic"],
  steps: [
    [
      heard(X("03", "notice"), "What did the speaker do?", ["Crashed his uncle's car", "Lost his uncle's phone", "Missed a flight"], 0, "'I crashed my uncle's car on my first day with it.'"),
      heard(X("03", "notice"), "How did the uncle really feel?", ["Absolutely furious", "Slightly worried", "Happy"], 0, "'that's a bit unfortunate' = he was furious."),
      heard(X("03", "notice"), "What did the American friend misunderstand?", ["He thought the uncle was being kind.", "He thought the car was fine.", "He thought it was a joke."], 0, "Understatement didn't translate across cultures."),
      ch("'Not my finest hour' means…", ["a very bad moment", "a long time", "my favourite moment"], 0, "Understatement for embarrassment."),
      ch("Understatement is…", ["saying less than you mean", "saying more than you mean", "lying"], 0, "Definition."),
    ],
    [
      ch("A British colleague says: 'I'm not entirely convinced by your proposal.' She means…", ["I disagree with it.", "I need ten minutes.", "I love it."], 0, "Polite strong disagreement."),
      ch("A British teacher writes 'Quite good' on your essay. This probably means…", ["It's OK, but not excellent.", "It's outstanding work.", "It's failed completely."], 0, "'Quite' often reduces praise in British English."),
      ctx("After a storm destroys their garden, a British neighbour says: 'Well, it could be worse.'", "This shows…", ["calm understatement about a bad situation", "that nothing at all happened to her", "she's happy about the situation"], 0, "Typical stoic understatement."),
      ch("An American would more likely say…", ["That was terrible!", "That was a touch disappointing.", "Not ideal, all things considered."], 0, "More direct style."),
      ch("'With respect, I think you're mistaken' in a meeting signals…", ["firm disagreement", "agreement", "a compliment"], 0, "'With respect' warns that criticism is coming."),
    ],
    [
      gap("Failing my driving test three times was not my finest", ".", ["hour"], "Not my finest hour."),
      gap("I'm not", "convinced this plan will work.", ["entirely", "completely", "totally", "fully"], "Understatement for disagreement."),
      tr("Say it with British understatement.", "The party was a complete disaster.", ["The party was not a great success", "The party wasn't a great success", "The party was a bit of a disappointment", "The party didn't go entirely to plan", "The party did not go entirely to plan", "The party could have gone better"], "Say less than you mean."),
      dict(X("03", "dict"), ["It was not exactly my finest hour", "It wasn't exactly my finest hour"]),
      say("Well, that's a bit unfortunate.", "Flat, calm tone; the meaning is in what you don't say."),
    ],
    [
      fix(["Your essay is", "quite good,", "so it got the top grade in the class."], 1, ["excellent,", "outstanding,", "brilliant,"], "Top grade = excellent, not 'quite good' (British: only OK)."),
      fix(["After the earthquake destroyed the city,", "he said it was", "the worst disaster ever."], 1, ["he said it could be worse:", "he said, with understatement,"], "Understatement would sound milder."),
      ch("Which reply misreads the understatement?", ["'Not my finest hour.' – 'Great! Congratulations!'", "'Not my finest hour.' – 'Oh no, what happened?'", "'Not my finest hour.' – 'Don't worry, it happens.'"], 0, "Congratulating a disaster."),
      ch("Which might sound rude to a British listener?", ["Your idea is bad.", "I'm not sure that's quite right.", "That might not work."], 0, "Too direct for a polite British context."),
      ch("Which is NOT understatement?", ["The concert was the most amazing night of my entire life!!!", "It was a bit of a disaster, really.", "It could have gone a little better."], 0, "That's exaggeration (hyperbole)."),
    ],
    [
      ch("You spilled coffee on your boss's laptop. Best British-style comment?", ["Well, that's not ideal.", "This is the most catastrophic event in history!", "Whatever, laptops are cheap."], 0, "Understatement plus apology."),
      ch("An American colleague praises your work: 'This is awesome!' Best reading?", ["She is genuinely enthusiastic.", "She is being sarcastic.", "She thinks it's quite good."], 0, "Direct enthusiasm is normal in US English."),
      ctx("At a meeting in London, someone says: 'That's a very brave proposal.'", "This often means…", ["The proposal is risky and probably a bad idea.", "The proposal is heroic and admirable.", "The proposal will definitely work."], 0, "Classic British understatement."),
      ch("When should you avoid understatement?", ["When clarity is essential, like a safety warning", "In a friendly chat with friends about the weekend", "In a short story or novel"], 0, "Some messages must be direct."),
      say("With respect, I'm not entirely convinced.", "Polite, calm tone; stress conVINCED."),
    ],
  ],
  create: {
    prompts: [
      { text: "Tell a funny story (80 words or more) about a disaster, using British understatement at least three times (not my finest hour, a bit unfortunate, not ideal, could have gone better, not entirely convinced, could be worse). Then add one line explaining what you really meant." },
      { universe: "screens", text: "Write a review of a terrible film or game (80 words or more) using British understatement at least three times (not ideal, a bit unfortunate, could have gone better, not entirely convinced, not exactly). Then add one line explaining what you really meant." },
      { universe: "futures", text: "Describe your worst job interview, real or imagined (80 words or more), using British understatement at least three times. Then add one line explaining what you really meant." },
    ],
    minWords: 80,
    checks: [
      { label: "Three understatements (not my finest hour, a bit unfortunate, not ideal, could have gone better, not entirely convinced, could be worse, not exactly, a bit of a)", pattern: "\\b(not my finest hour|a bit unfortunate|not ideal|could have gone better|not entirely|could be worse|not exactly|a bit of a|slightly|not the best|not a great success|a touch|somewhat)\\b", min: 3 },
      { label: "An explanation of what you really meant (in other words, I mean, really meant, actually)", pattern: "\\b(in other words|what i really mean|really meant|i mean|actually|in plain english|translation)\\b", min: 1 },
    ],
    rubric: ["My understatements are much milder than the situation.", "The humour comes from the contrast.", "My explanation makes the real meaning clear."],
    model: "My first day as a waiter was not my finest hour. I dropped a tray of drinks on a customer, which was a bit unfortunate, especially as it was his birthday. Then I gave the wrong pizza to a family of six. Not ideal. When the manager asked how it was going, I said it could have gone better. He said he was not entirely convinced I was cut out for the job. In other words, it was a total disaster and I was nearly fired.",
  },
};

const summarise: NodePractice = {
  nodeId: "c2.summarise-complex-texts-concisely",
  explain: "Summarising at C2 means reducing a long text to its argument, not its examples. Start by finding the main claim and the reasons, and notice what the writer concedes. Then write it in your own words, far shorter, without losing the logic: 'The article argues that…, citing…, and concedes that… but claims…' Cut examples, stories, repetitions and quotations. Keep connectors that show the logic (because, although, therefore). Use reporting verbs (argues, claims, concedes, concludes) and nominalisation to compress ideas. A good test: could someone who hasn't read the original explain the writer's position after reading your summary? A 600-word text can become 60 words if every word does a job.",
  pattern: ["Main claim: The article argues / contends that …", "Reasons: citing … / on the grounds that …", "Concession: It concedes that … but maintains …", "Conclusion: In short / Overall, the writer believes …", "Cut: examples, anecdotes, quotes, repetition", "Keep: claim, reasons, concession, conclusion, logical connectors"],
  steps: [
    [
      heard(X("04", "notice"), "What is the article's main claim?", ["Cities should replace car parks with green spaces.", "Cities need many more car parks in the centre.", "Green spaces are much too expensive."], 0, "The main argument."),
      heard(X("04", "notice"), "How many reasons does it give?", ["Three", "Two", "Five"], 0, "Lower temperatures, mental health, local business."),
      heard(X("04", "notice"), "What does the article concede?", ["The cost is high.", "Cars are necessary.", "Trees take too long to grow."], 0, "'It admits the cost is high.'"),
      ch("Which phrase signals the summary's conclusion?", ["In short", "For example", "Firstly"], 0, "In short = summing up."),
      ch("A good summary keeps…", ["the claim, reasons and conclusion", "all the examples from the text", "every quotation from the text"], 0, "The logic, not the details."),
    ],
    [
      ch("What should you cut first when summarising?", ["Examples and anecdotes", "The main claim of the writer", "The writer's conclusion"], 0, "Examples support but aren't the argument."),
      ch("Why use 'argues' rather than 'says'?", ["It shows the text is making a case.", "It's shorter and simpler than 'says'.", "It's more informal."], 0, "Reporting verbs carry meaning."),
      ctx("Original: 'Some will say the scheme is too costly, and they have a point. However, within a decade the savings will exceed the investment.'", "Best summary?", ["The writer accepts the high cost but argues it will pay for itself within ten years.", "The scheme is costly, so it will never work in the city, says the writer.", "Some people have a point about many things."], 0, "Concession + main point."),
      ch("Which test shows a summary works?", ["Someone who hasn't read the text can explain the writer's position.", "It's exactly half the length of the original text.", "It uses the same words as the original."], 0, "Understanding is the goal."),
      ch("Which is the best concise version of 'the fact that the number of people who use buses has gone down'?", ["the decline in bus use", "the fact that fewer people are using buses these days", "people don't use buses"], 0, "Nominalisation compresses."),
    ],
    [
      gap("The writer argues that green spaces", "for themselves within a decade.", ["pay"], "pay for themselves."),
      gap("It", "that the scheme is expensive but maintains that it is worthwhile.", ["concedes", "admits", "acknowledges", "accepts"], "Concession reporting verb."),
      tr("Summarise in ten words or fewer.", "Although many people believe that homework helps students learn, recent studies have found that too much homework actually causes stress and reduces motivation.", ["Studies suggest too much homework causes stress and lowers motivation", "Research shows excessive homework increases stress and reduces motivation", "Studies show too much homework causes stress and reduces motivation", "Too much homework causes stress and reduces motivation, studies suggest"], "Keep the claim; cut the framing."),
      dict(X("04", "dict"), ["In short, the benefits outweigh the costs", "In short the benefits outweigh the costs"]),
      say("In short, the writer believes the benefits outweigh the costs.", "Pause after SHORT; stress BENefits and COSTS."),
    ],
    [
      fix(["The article argues for green spaces.", "For example, in Medellín there is a garden near the metro.", "It concedes the cost is high."], 1, ["It cites lower temperatures, better health and local business."], "Replace the example with the reasons it illustrates."),
      fix(["The writer", "says", "that the policy is mistaken and should be reversed."], 1, ["argues", "contends", "maintains"], "A case is being made: argues."),
      ch("Which summary changes the writer's meaning?", ["The writer opposes green spaces because of the cost.", "The writer supports green spaces despite the cost.", "The writer thinks the benefits outweigh the cost."], 0, "The writer accepted the cost, not opposed the idea."),
      ch("Which summary is too long?", ["The article, which was published in a newspaper and written by a journalist who lives in the city, argues, in a number of different ways and with many examples, that cities should consider green spaces.", "The article argues cities should replace car parks with green spaces.", "The writer makes the case for urban green spaces."], 0, "Wordy, no logic."),
      ch("Which summary includes the writer's own opinion instead of reporting it?", ["Obviously green spaces are the best idea ever.", "The article argues that green spaces are worth the cost.", "The writer believes green spaces pay for themselves."], 0, "Keep your opinion out of a summary."),
    ],
    [
      ch("Best first sentence of a summary?", ["The article argues that cities should replace car parks with green spaces.", "This article is very interesting and I enjoyed reading it a lot.", "I read an article about car parks."], 0, "Claim first."),
      ch("Which summary is best for a busy reader?", ["Writer backs green spaces: cooler, healthier, better for business; costly, but pays off in ten years.", "The writer writes about the city and many things in it, like cars and parks and money.", "Green. Spaces. Good. Cars. Bad."], 0, "All the logic, minimal words."),
      ctx("A 600-word article; your summary must be 60 words.", "Best strategy?", ["Find the claim, reasons and concession, then write them in your own words.", "Copy the first 60 words of the text exactly, then stop.", "Translate it into Spanish and then back."], 0, "Process."),
      ch("Which connector shows the writer's concession?", ["Although the cost is high, …", "Also, the cost is high, …", "For example, the cost is high, …"], 0, "Concession connector."),
      say("Overall, the article makes a strong case, although it underestimates the cost.", "Pause after OVerall; stress STRONG and UNderestimates."),
    ],
  ],
  create: {
    prompts: [
      { text: "Summarise this argument in 60 to 80 words: 'Some schools are banning phones completely. Supporters say students concentrate better, talk to each other more at break, and are bullied less online during the day. Critics argue that phones are useful learning tools, that parents need to contact children, and that bans just teach students to hide their phones. A middle path, they suggest, is to keep phones in lockers during lessons but allow them at lunch.' Use a reporting verb, mention both sides and the compromise." },
      { universe: "science", text: "Summarise a scientific debate you know (for example, about sleep, sugar or screens) in 60 to 80 words. Use a reporting verb (argues, claims, concedes, concludes), mention both sides and a conclusion." },
      { universe: "futures", text: "Summarise the debate about AI in schools in 60 to 80 words. Use a reporting verb (argues, claims, concedes, concludes), mention both sides and a possible compromise." },
    ],
    minWords: 60,
    checks: [
      { label: "A reporting verb (argues, claims, contends, concedes, concludes, maintains, suggests)", pattern: "\\b(argues?|claims?|contends?|concedes?|concludes?|maintains?|suggests?|acknowledges?|insists?)\\b", min: 2 },
      { label: "Logical connectors (although, while, whereas, however, but, therefore)", pattern: "\\b(although|while|whereas|however|but|therefore|thus|despite|nevertheless)\\b", min: 1 },
    ],
    rubric: ["My summary keeps the logic, not the examples.", "I used my own words.", "A new reader could explain both positions after reading it."],
    model: "The text examines school phone bans. Supporters argue that bans improve concentration and face-to-face interaction while reducing online bullying during the day. Critics contend, however, that phones support learning, allow parents to contact children, and that bans simply encourage secrecy. The text concludes by suggesting a compromise: phones stay in lockers during lessons but are permitted at lunch, which keeps the benefits of both positions.",
  },
};

const negotiate: NodePractice = {
  nodeId: "c2.negotiate-and-persuade-professionally",
  explain: "Professional negotiation in English follows a clear pattern: anchor (state your position), concede (give something), and trade (ask for something in return). The key language is conditional: 'If you could…, we'd be prepared to…' 'We could consider…, provided that…' 'Would you be open to…?' Soften refusals: 'That's beyond our budget', 'I'm afraid that's not something we can do at this stage.' Persuasion uses shared benefit ('something that suits us both'), evidence, and confident modals ('I'm confident we can…'). Avoid ultimatums ('Take it or leave it') unless you really mean it, and avoid sounding desperate. The tone is calm, warm and firm: the relationship matters as much as the deal.",
  pattern: ["Anchor: Our position is … / We're looking for …", "Trade: If you could …, we'd be prepared to … · We could …, provided that …", "Explore: Would you be open to …? · How flexible are you on …?", "Soft refusal: That's beyond our budget. · I'm afraid that's not possible at this stage.", "Win-win: something that suits us both · a mutually beneficial arrangement", "Close: So, do we have a deal? · Shall we put that in writing?"],
  steps: [
    [
      heard(X("05", "notice"), "Why can't the sponsor pay five thousand dollars?", ["It's beyond their budget.", "They don't like the festival.", "They already paid."], 0, "'five thousand dollars is beyond our budget'."),
      heard(X("05", "notice"), "What does the sponsor want in return for three thousand?", ["Their logo on the main stage", "Free tickets", "A speech at the festival"], 0, "'If you could include our logo on the main stage…'"),
      heard(X("05", "notice"), "What extra do they offer?", ["Drinks for the volunteers", "A new stage for the bands", "T-shirts for all the staff"], 0, "'We could also provide drinks for the volunteers.'"),
      ch("'If you could…, we'd be prepared to…' is used to…", ["trade one thing for another", "refuse the offer completely", "apologise for a mistake"], 0, "The core negotiation trade."),
      ch("'Beyond our budget' is…", ["a polite way to say it's too expensive", "a compliment about how good the offer is", "an agreement to the price"], 0, "Soft refusal."),
    ],
    [
      ch("Why say 'something that suits us both'?", ["To show the deal benefits both sides", "To end the conversation quickly", "To refuse politely and leave"], 0, "Win-win framing."),
      ch("'We could offer free delivery, provided that you order 100 units.' 'Provided that' means…", ["only if", "even if", "because"], 0, "A condition."),
      ctx("A client says: 'Take it or leave it.'", "This is…", ["an ultimatum that ends negotiation", "a friendly suggestion between partners", "a polite question"], 0, "Avoid unless you mean it."),
      ch("Which is the strongest anchor?", ["We're looking for a price of around twenty dollars per unit.", "Maybe, if possible, a lower price, sorry, if that's OK?", "Whatever you think is fair, really."], 0, "Clear, confident position."),
      ch("Which sounds desperate?", ["Please, we really need this, we'll accept anything.", "Would you be open to a three-year agreement?", "I'm confident we can find a solution."], 0, "Weak position."),
    ],
    [
      gap("If you could deliver by May, we'd be", "to pay a little more.", ["prepared", "willing", "happy"], "we'd be prepared to…"),
      gap("We can offer a discount,", "that you sign a two-year contract.", ["provided", "providing", "as long as", "on condition"], "Condition for a concession."),
      tr("Make this sound professional with the word given.", "Your price is too high.", ["I'm afraid that price is beyond our budget", "That price is beyond our budget", "I'm afraid your price is beyond our budget", "Your price is beyond our budget"], "Soft refusal.", "beyond"),
      dict(X("05", "dict"), ["If you could include our logo we would be prepared to offer more", "If you could include our logo, we would be prepared to offer more.", "If you could include our logo we'd be prepared to offer more"]),
      say("Would you be open to a compromise that suits us both?", "Rising intonation on OPen; warm tone."),
    ],
    [
      fix(["If you could lower the price,", "we will prepared", "to order more."], 1, ["we'd be prepared", "we would be prepared"], "If you could …, we'd be prepared to …"),
      fix(["We can offer a discount,", "provided", "you don't sign the contract."], 2, ["you sign the contract.", "that you sign the contract."], "The condition should be something the other side gives you."),
      fix(["Take it or leave it,", "but I'm confident", "we can find something that suits us both."], 0, ["Let's talk it through,", "I hear your concerns,"], "An ultimatum contradicts a win-win close."),
      ch("Which is too blunt for a professional negotiation?", ["No. Too expensive. Next.", "I'm afraid that's beyond our budget at this stage.", "That's a little more than we'd planned to spend."], 0, "Rude and closes the conversation."),
      ch("Which is wrong?", ["Would you be open for a discount?", "Would you be open to a discount?", "Would you consider a discount?"], 0, "open to."),
    ],
    [
      ch("Best way to start a negotiation with a new supplier?", ["Thanks for meeting us. We're looking for a long-term partner, and our target price is around twenty dollars.", "Give us your cheapest price and we'll decide. That's all we need from you today.", "We'll pay whatever you want, we just need it fast."], 0, "Warm, clear anchor."),
      ch("The other side won't move on price. Best next move?", ["Would you be more flexible on delivery times or payment terms instead?", "Then we're leaving forever and never coming back to this company.", "OK, fine, we'll pay the full price."], 0, "Trade on another variable."),
      ctx("You're asking your school's head for funding for a club trip.", "Most persuasive line?", ["If the school could cover the bus, we'd be prepared to raise the rest ourselves.", "Pay for our trip, please, we really need it this year more than ever.", "Everyone else gets trips, so it's unfair."], 0, "Trade + shared effort."),
      ch("Best close?", ["So, shall we put that in writing?", "So, I guess that's it, maybe?", "Bye."], 0, "Confirms the deal."),
      say("If you could commit to two years, we'd be prepared to lower the price.", "Stress COMmit, TWO years and LOWer."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a negotiation email (90 words or more) asking a local business to sponsor a school event. Anchor your request, offer something in return using 'If you could…, we'd be prepared to…', add a condition with 'provided that', and close with a win-win line." },
      { universe: "screens", text: "Write a negotiation email (90 words or more) to a game company asking them to sponsor your school's esports tournament. Use 'If you could…, we'd be prepared to…', 'provided that', and a win-win close." },
      { universe: "arts", text: "Write a negotiation email (90 words or more) to a venue owner asking to host your band's first concert. Use 'If you could…, we'd be prepared to…', 'provided that', and a win-win close." },
    ],
    minWords: 90,
    checks: [
      { label: "A trade (If you could …, we'd / we would be prepared / willing / happy to …)", pattern: "\\bif you could\\b[^.!?]*\\b(we'd|we would|i'd|i would) be (prepared|willing|happy|glad)\\b", min: 1 },
      { label: "A condition (provided that / providing / as long as / on condition that)", pattern: "\\b(provided|providing|as long as|on condition that)\\b", min: 1 },
      { label: "A win-win line (suits us both, mutually beneficial, both sides, works for everyone)", pattern: "\\b(suits us both|suit us both|mutually beneficial|both sides|works for (everyone|both of us|us both)|benefit(s)? (us )?both|win-win)\\b", min: 1 },
    ],
    rubric: ["My request is clear and confident.", "I offered something in return.", "My tone is warm, firm and professional."],
    model: "Dear Mr Herrera, I'm writing on behalf of the student council about our charity fun run on 14 June. We're looking for a sponsor to cover the cost of T-shirts, around eight hundred dollars. If you could support us, we'd be prepared to print your logo on every shirt and mention your shop in our school newsletter. We could also set up a stand for you at the finish line, provided that you send us your logo by 1 May. I'm confident this would be mutually beneficial. Kind regards, Valentina Ruiz",
  },
};

const tone: NodePractice = {
  nodeId: "c2.tone-control-in-writing",
  explain: "Tone is how your writing feels to the reader, and at C2 you control it precisely. 'Firm but warm' means you state the rule clearly ('I do need to be clear about one thing: the deadline is fixed') and show support ('I'm happy to help anyone who's stuck'). Tools: emphatic 'do' for firmness (I do need), softeners for warmth (I know that's tough), positive framing (Let's make this our best project yet), and humour that is safe and shared (the pizza promise). Reading the room means adjusting to the reader's mood and your relationship: you can joke with a team after good work, not after a disaster. Common failures: passive-aggressive phrases ('As per my last email'), too many exclamation marks, sarcasm in writing, or ALL CAPS.",
  pattern: ["Firm: I do need to be clear about … · The deadline is fixed.", "Warm: I know that's tough. · I'm happy to help. · Thanks so much for …", "Positive framing: Let's make this … · I'm confident we can …", "Safe humour: shared, light, not at anyone's expense", "Avoid: As per my last email · ALL CAPS · sarcasm · !!!", "Read the room: mood, relationship, situation"],
  steps: [
    [
      heard(X("06", "notice"), "What is the firm message?", ["The Friday deadline is fixed.", "The pizza is cancelled.", "The project is finished."], 0, "'the deadline on Friday is fixed'."),
      heard(X("06", "notice"), "How does the writer show warmth?", ["She offers to help anyone who's stuck.", "She ignores the problem completely.", "She criticises the team for it."], 0, "'I'm happy to help anyone who's stuck.'"),
      heard(X("06", "notice"), "Why mention the pizza?", ["To end with light, shared humour", "Because it's the main topic", "To change the deadline"], 0, "Safe humour."),
      ch("'I do need to be clear' uses 'do' to…", ["add firmness", "ask a question", "show the past"], 0, "Emphatic do."),
      ch("'Firm but warm' means…", ["clear about the rule, kind to the person", "strict, cold and distant with the team", "friendly, with no rules at all"], 0, "Balance."),
    ],
    [
      ch("Why is 'As per my last email' risky?", ["It often sounds passive-aggressive.", "It's too informal for work.", "It's grammatically wrong."], 0, "It implies 'you didn't read it'."),
      ch("Which sounds warmest without losing firmness?", ["I know this is a busy week, but the report must be in by Friday.", "The report MUST be in by Friday!!! No excuses at all!", "Whenever you can, no rush, maybe Friday or next week?"], 0, "Acknowledge + firm."),
      ctx("After the team's project failed, the leader writes: 'Well, that went brilliantly, didn't it?'", "The tone is…", ["sarcastic and likely to hurt", "warm, kind and supportive", "neutral and factual"], 0, "Sarcasm misfires in writing."),
      ch("When is a joke most likely to work in a work message?", ["After shared success, about something everyone enjoys", "After a failure, about one person's mistake", "In a complaint to a stranger"], 0, "Read the room."),
      ch("Which is positive framing?", ["Let's make this our best project yet.", "Don't mess this up again.", "This will probably fail anyway."], 0, "Forward-looking and motivating."),
    ],
    [
      gap("I", "need to be clear about one thing: attendance is compulsory.", ["do"], "Emphatic do for firmness."),
      gap("I know that's tough, and I'm happy to", "anyone who's stuck.", ["help", "support"], "Warmth."),
      tr("Rewrite to be firm but warm.", "Your work is late AGAIN. Send it NOW.", ["I know things have been busy, but I do need your work by the end of today", "I know things have been busy, but I do need your work today", "I know it's been a busy week, but I do need your work by the end of today", "I understand things have been busy, but I do need your work by the end of today"], "Acknowledge + firm request, no caps."),
      dict(X("06", "dict"), ["I do need to be clear about one thing"]),
      say("I know that's tough, and I'm happy to help anyone who's stuck.", "Warm, calm tone; stress TOUGH and HELP."),
    ],
    [
      fix(["As per my last email,", "the meeting is", "at ten."], 0, ["Just a quick reminder:", "Just to confirm,", "A quick reminder:"], "Replace a passive-aggressive phrase with a neutral one."),
      fix(["Please send the report by Friday,", "or else.", "Thanks!"], 1, ["if possible.", "please.", "so I can check it."], "'Or else' is a threat; replace it with something supportive."),
      fix(["Great job forgetting the tickets,", "Pablo.", "Very helpful."], 0, ["No worries about the tickets,", "Don't worry about the tickets,"], "Sarcasm in writing hurts; be direct or kind."),
      ch("Which message reads the room badly (the team just lost a big client)?", ["LOL well that was a disaster 😂 pizza time!", "Tough day, team. Let's meet tomorrow to look at what we learnt.", "I know today was hard. Thank you for everything you put into this."], 0, "Humour at the wrong time."),
      ch("Which is too soft for an urgent safety rule?", ["If it's not too much trouble, maybe consider wearing gloves?", "Gloves must be worn in the lab at all times.", "Please wear gloves in the lab. It's essential for your safety."], 0, "Some messages need to be direct."),
    ],
    [
      ch("Best opening for a message to a team that missed a deadline?", ["Thanks for the effort this week. I do need to talk about Friday's deadline.", "Disappointing, as usual. We need to talk about Friday's deadline again.", "OMG what happened?!?! Friday was a disaster!"], 0, "Warm then firm."),
      ch("Best line to end a firm message warmly?", ["As always, my door is open if you need anything.", "Don't make me repeat myself again, please.", "That's all I have to say."], 0, "Supportive close."),
      ctx("You're writing to a teacher to complain about a grade you think is unfair.", "Best tone?", ["Respectful and specific: 'I was wondering if we could discuss my grade.'", "Angry: 'This grade is a JOKE. Change it now, please.'", "Sarcastic: 'Thanks for the amazing grade, really.'"], 0, "Firm but respectful."),
      ch("Which joke is safest in a class group chat?", ["Who else needs three coffees before maths?", "Did you see Marco's terrible haircut?", "Some people clearly didn't study, haha."], 0, "Shared, not at anyone's expense."),
      say("Let's make this our best project yet.", "Upbeat, confident tone; stress BEST and YET."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a message (90 words or more) as team captain to a team that has been arriving late to training. Be firm (use emphatic 'do' or a clear rule), warm (acknowledge their effort or feelings), include positive framing (Let's…), and one light, safe touch of humour." },
      { universe: "screens", text: "Write a message (90 words or more) as a gaming clan leader to members who keep missing practice. Be firm (emphatic 'do' or a clear rule), warm, positive (Let's…), with one safe touch of humour." },
      { universe: "arts", text: "Write a message (90 words or more) as a theatre director to a cast that hasn't learnt their lines. Be firm (emphatic 'do' or a clear rule), warm, positive (Let's…), with one safe touch of humour." },
    ],
    minWords: 90,
    checks: [
      { label: "Firmness (I do need / does need / must / is fixed / non-negotiable)", pattern: "\\b(i do need|we do need|do need|does need|must|is fixed|non-negotiable|has to|have to)\\b", min: 1 },
      { label: "Warmth (I know / I understand / thanks / I appreciate / happy to help)", pattern: "\\b(i know|i understand|thanks|thank you|i appreciate|happy to help|i'm here|proud of)\\b", min: 2 },
      { label: "Positive framing (Let's …)", pattern: "\\blet's\\b|\\blet us\\b", min: 1 },
    ],
    rubric: ["My message is clear about what must change.", "It shows respect and support.", "My humour is shared and safe, and I avoided sarcasm and caps."],
    model: "Hi everyone, first of all, thank you for the energy you've brought this season. I know early mornings are hard, especially in exam weeks. I do need to be clear about one thing, though: training starts at seven, not seven fifteen. From Monday, anyone who arrives late will run an extra lap. Let's make the next match the one people talk about all year. I'm happy to help anyone who's struggling with transport. And yes, I'll bring the oranges, and maybe even the good ones this time. See you all on Monday morning, Caro",
  },
};

export const C2_COMMUNICATE: NodePractice[] = [voice, spectrum, cultural, summarise, negotiate, tone];
