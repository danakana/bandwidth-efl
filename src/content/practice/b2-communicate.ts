/* B2 Communicate: functions, register and pragmatics. Six Bloom steps per skill. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, ord, say, tr } from "./helpers";

const A = (n: string, k: "notice" | "dict") => `p/b2c-${n}-${k}.mp3`;

export const B2_COMMUNICATE_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: A("01", "notice"), voice: "3f6pec3wODJsjTqtcNI2", script: "Admittedly, homework can be stressful. Nevertheless, a small amount helps you remember what you learned. While it's true that some students have jobs after school, teachers can still set short, flexible tasks." },
  { file: A("01", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "Granted, it's expensive. Even so, it's worth every peso." },
  { file: A("02", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "In her article, the writer argues that teenagers aren't lazy; they're simply on a different sleep schedule. She points out that their body clock shifts later during puberty. In other words, an eight a.m. class feels like five a.m. to a sixteen-year-old." },
  { file: A("02", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "In other words, the plan didn't work." },
  { file: A("03", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Okay, so basically kids need way more help with mental health. Or, to put it formally: young people require greater support for their mental health, and schools should therefore invest in counselling services." },
  { file: A("03", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Young people require greater support." },
  { file: A("04", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "The growth of online shopping has led to a reduction in the number of local shops. This development raises an important question: what is the future of the high street? The decision, in the end, belongs to consumers." },
  { file: A("04", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "The growth of cities has created new problems." },
  { file: A("05", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "It seems that teenagers who sleep less tend to get lower grades. This could be because tired students find it harder to focus, although other factors may also play a role. Arguably, schools should start later." },
  { file: A("05", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "This could be one of the reasons." },
  { file: A("06", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "So, how was the concert? Not bad at all, actually. The traffic afterwards was a bit of a nightmare, though. And the new singer? Hmm. I'm not entirely convinced." },
  { file: A("06", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "It wasn't exactly a success." },
];

const argue: NodePractice = {
  nodeId: "b2.argue-counter-argue-and-concede",
  explain: "A strong argument admits the other side's best point, then answers it. Concede: Admittedly, … / Granted, … / It's true that … Then counter: Nevertheless, … / However, … / Even so, … / That said, … Or do both in one sentence: While it's true that X, Y. / Although X, Y. Your real opinion is always the second part.",
  pattern: ["Concede: Admittedly · Granted · It's true that · Of course", "Counter: Nevertheless · However · Even so · That said", "One sentence: While it's true that…, … / Although…, …"],
  steps: [
    [
      heard(A("01", "notice"), "What does the speaker admit?", ["Homework can be stressful.", "Homework is useless.", "Teachers give too little homework."], 0, "'Admittedly, homework can be stressful.'"),
      heard(A("01", "notice"), "What is the speaker's main position?", ["A small amount of homework is useful.", "Homework should be banned.", "Students with jobs need more homework."], 0, "After 'Nevertheless' comes the real opinion."),
      ch("Which word introduces a concession?", ["Admittedly", "Therefore", "Firstly"], 0, "Admittedly = I accept this point."),
      ch("Which word introduces the counter-argument?", ["Nevertheless", "Moreover", "For example"], 0, "Nevertheless = despite that."),
      ch("'While it's true that X, Y.' Which part is the writer's real opinion?", ["Y", "X", "Neither"], 0, "X is conceded; Y is the claim."),
    ],
    [
      ctx("Granted, electric cars are expensive. Even so, they save money over time.", "The writer thinks electric cars…", ["are worth it in the long run", "are too expensive", "are free"], 0, "The opinion comes after 'Even so'."),
      ch("'Moreover' vs 'Nevertheless'?", ["Moreover adds a point; Nevertheless contrasts.", "They mean the same.", "Moreover contrasts; Nevertheless adds."], 0, "Moreover = and also. Nevertheless = but still."),
      ch("Why concede a point at all?", ["It shows you've considered the other side, so you sound more convincing.", "It means you've lost.", "It makes the text longer."], 0, "Fair arguments persuade better."),
      ch("Which is correctly punctuated?", ["Admittedly, it's hard. Nevertheless, it's worth it.", "Admittedly it's hard nevertheless it's worth it.", "Admittedly, it's hard, nevertheless it's worth it."], 0, "Nevertheless starts a new sentence (or follows a semicolon), not a comma."),
      ctx("Although uniforms are boring, they reduce pressure.", "The writer is…", ["for uniforms", "against uniforms", "undecided"], 0, "The main clause (they reduce pressure) is the opinion."),
    ],
    [
      gap("", ", social media can be addictive. Nevertheless, it helps people stay in touch.", ["Admittedly", "Granted", "Of course", "Certainly"], "Start with a concession word."),
      gap("Video games can be violent.", ", many of them teach teamwork.", ["Nevertheless", "However", "Even so", "That said", "Still"], "Now counter the concession."),
      tr("Join into one sentence starting with 'While'.", "It's true that cities are noisy. They offer more opportunities.", ["While it's true that cities are noisy, they offer more opportunities", "While cities are noisy, they offer more opportunities"], "While + concession, + main claim."),
      dict(A("01", "dict"), ["Granted, it's expensive. Even so, it's worth every peso", "Granted it's expensive even so it's worth every peso"]),
      ord("Although the trip was tiring, it was absolutely worth it.", "Although + concession, + opinion."),
    ],
    [
      fix(["Although it's expensive,", "but it's worth it."], 1, ["it's worth it", "it is worth it"], "Although and but together is a Spanish-speaker error (aunque… pero). Use one, not both."),
      fix(["Admittedly, online classes are flexible.", "Moreover,", "they can feel lonely."], 1, ["Nevertheless", "However", "Even so", "That said"], "Moreover adds; you need a contrast here."),
      fix(["While it's true that phones are useful,", "so they distract students."], 1, ["they distract students", "they also distract students", "they can distract students"], "No 'so' after a While-clause."),
      fix(["Even though", "of the rain,", "we played the match."], 1, ["it was raining", "it rained"], "Even though + clause. 'Of the rain' needs 'despite' or 'in spite of'."),
      fix(["In the other hand,", "prices are rising."], 0, ["On the other hand"], "ON the other hand."),
    ],
    [
      ch("Debate: you want to sound fair but still win.", ["You're wrong. Uniforms are pointless.", "Granted, uniforms save time in the morning. Even so, they limit self-expression.", "Uniforms, whatever."], 1, "Concede, then counter: fair and persuasive."),
      ch("Formal essay. Best concession word?", ["Admittedly", "Like, okay", "Anyway"], 0, "Admittedly is neutral to formal."),
      ch("Which is most natural in conversation?", ["Fair enough, but I still think it's too expensive.", "Admittedly, nevertheless, it is expensive.", "Notwithstanding, expensive."], 0, "In speech: 'Fair enough, but…'"),
      ch("Which counter-argument is strongest?", ["But I just don't like it.", "Even so, the data shows it reduces stress by 20%.", "Nevertheless, whatever."], 1, "Evidence makes a counter-argument strong."),
      say("Admittedly, it's not perfect. Nevertheless, it's a big improvement.", "Pause after the concession."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short argument on a debate topic: should school start later? Concede at least one point to the other side, then counter it." },
      { universe: "screens", text: "Is gaming good for teenagers? Concede the other side's best point, then counter it." },
      { universe: "science", text: "Should countries spend money on space exploration? Concede the other side's best point, then counter it." },
      { universe: "futures", text: "Should everyone go to university? Concede the other side's best point, then counter it." },
    ],
    minWords: 70,
    checks: [
      { label: "A concession (Admittedly, Granted, It's true that, While, Although…)", pattern: "\\b(admittedly|granted|it'?s true that|it is true that|while it'?s true|although|even though|of course|certainly|fair enough)\\b", min: 1 },
      { label: "A counter-argument (Nevertheless, However, Even so, That said…)", pattern: "\\b(nevertheless|nonetheless|however|even so|that said|but|still,)", min: 1 },
    ],
    rubric: ["I conceded at least one point fairly.", "My own opinion is clear after the counter-argument.", "I supported it with a reason or example."],
    model: "Admittedly, starting school later would mean finishing later, and many students have activities in the afternoon. Nevertheless, research shows that teenagers sleep better and concentrate more when classes start after 8:30. While it's true that families would need to adjust, the benefits for health and grades are hard to ignore.",
  },
};

const summarise: NodePractice = {
  nodeId: "b2.summarise-and-paraphrase-sources",
  explain: "Summarising means giving the main idea in fewer words. Paraphrasing means saying the same idea in your own words. Use reporting phrases: The writer argues / claims / suggests / points out that… According to the article, … In other words, … Change the words AND the structure, keep the meaning, and leave your own opinion out.",
  pattern: ["The writer argues / claims / suggests / points out that…", "According to X, …", "In other words, …", "Paraphrase: new words + new structure, same meaning"],
  steps: [
    [
      heard(A("02", "notice"), "What does the writer argue?", ["Teenagers have a different sleep schedule, not a lazy attitude.", "Teenagers are lazy.", "Classes should start at 5 a.m."], 0, "'The writer argues that teenagers aren't lazy; they're simply on a different sleep schedule.'"),
      heard(A("02", "notice"), "What does 'in other words' introduce?", ["A simpler way of saying the same idea", "A new argument", "A disagreement"], 0, "In other words = to say it differently."),
      ch("Which phrase reports what a writer says?", ["The writer points out that…", "I think that…", "In my opinion…"], 0, "Reporting phrases present someone else's ideas."),
      ch("Summarising means…", ["giving the main idea in fewer words", "copying the text", "adding your opinion"], 0, "Short and faithful."),
      ch("Paraphrasing means…", ["saying the same idea in your own words", "changing the meaning", "translating"], 0, "Same meaning, new words."),
    ],
    [
      ctx("Original: 'Plastic takes hundreds of years to decompose.'", "Best paraphrase?", ["Plastic remains in the environment for centuries.", "Plastic takes hundreds of years to decompose.", "Plastic is bad and I hate it."], 0, "New words, same meaning, no opinion."),
      ch("Which is a problem in a summary?", ["Adding your own opinion", "Using reporting verbs", "Using fewer words"], 0, "A summary reports; it doesn't judge."),
      ch("'Claims' or 'shows': which suggests the writer may not be right?", ["claims", "shows"], 0, "'Shows' accepts it as true; 'claims' keeps some distance."),
      ctx("The article suggests that remote work may reduce stress.", "What does 'suggests' tell us?", ["The writer is cautious, not certain.", "The writer is 100% sure.", "The writer is joking."], 0, "Suggest = propose carefully."),
      ch("Best summary: 'Bees pollinate a third of the crops we eat. Without them, food prices would rise and some foods would disappear.'", ["Bees are essential to our food supply.", "Bees are insects with wings.", "I like honey."], 0, "The main idea in one sentence."),
    ],
    [
      gap("The writer", "that social media harms sleep. (argue)", ["argues"], "Third person: argues."),
      gap("", "to the report, half of teenagers read for pleasure.", ["According"], "According to + source."),
      tr("Paraphrase using 'more and more'.", "The number of people working from home is increasing.", ["More and more people are working from home", "More and more people work from home"], "New structure, same meaning.", "more and more"),
      dict(A("02", "dict"), ["In other words, the plan didn't work", "In other words, the plan did not work"]),
      tr("Report it. Start with 'The author claims that'.", "The author: 'Reading on paper improves memory.'", ["The author claims that reading on paper improves memory"], "claims that + statement."),
    ],
    [
      fix(["The writer", "argue", "that exams are unfair."], 1, ["argues"], "The writer (he / she) → argues."),
      fix(["According", "with the article,", "bees are disappearing."], 1, ["to the article"], "According TO."),
      fix(["The writer", "explains about", "the causes of stress."], 1, ["explains", "describes", "discusses"], "Explain something (no 'about')."),
      fix(["In another words,", "the experiment failed."], 0, ["In other words"], "In OTHER words."),
      fix(["The report", "mentions about", "three main problems."], 1, ["mentions", "talks about", "refers to"], "Mention something (no 'about')."),
    ],
    [
      ch("Which summary is fairest?", ["The article says phones are evil and should be destroyed.", "The article argues that phone use before bed can reduce sleep quality.", "The article is about phones."], 1, "Accurate, neutral and specific."),
      ch("Academic writing, strong evidence. Best reporting verb?", ["The study shows that…", "The study kind of says…", "The study thinks…"], 0, "Studies show, find or demonstrate. They don't 'think'."),
      ch("Which paraphrase changes the meaning (and is wrong)? Original: 'Most students prefer online homework.'", ["All students prefer online homework.", "The majority of students would rather do homework online.", "Online homework is preferred by most students."], 0, "'Most' is not 'all'."),
      ch("Telling a friend about an article. Most natural?", ["So basically, the article says teens need more sleep.", "The aforementioned article posits that adolescents require additional sleep.", "Article: sleep."], 0, "Conversation needs a conversational summary."),
      say("In other words, teenagers aren't lazy; they're just tired.", "Slight pause after 'In other words'."),
    ],
  ],
  create: {
    prompts: [
      { text: "Think of a short article or video you've seen about any topic. Summarise it in 4–6 sentences using reporting verbs (argues, points out, suggests, claims), then add one sentence starting with 'In other words'." },
      { universe: "science", text: "Summarise a science article or video you've seen, using reporting verbs and 'In other words'." },
      { universe: "words", text: "Summarise the main argument of a book, essay or poem you know, using reporting verbs and 'In other words'." },
      { universe: "screens", text: "Summarise a video essay or review about a game or film, using reporting verbs and 'In other words'." },
    ],
    minWords: 60,
    checks: [
      { label: "Reporting verbs (argues, claims, suggests, points out…), at least two", pattern: "\\b(argues?|argued|claims?|claimed|suggests?|suggested|points? out|pointed out|explains?|explained|states?|believes?|shows?|showed|concludes?|mentions?|describes?|according to)\\b", min: 2 },
      { label: "'In other words' or another paraphrase signal", pattern: "\\b(in other words|that is to say|put simply|to put it simply|basically)\\b", min: 1 },
    ],
    rubric: ["My summary only includes the main ideas.", "I used my own words, not copied sentences.", "I kept my opinion out of it."],
    model: "In this article, the writer argues that teenagers aren't lazy; they simply sleep on a different schedule. She points out that the body clock shifts later during puberty and suggests that schools start after 8:30. According to one study, students who slept more had better grades. In other words, later classes could help both health and learning.",
  },
};

const register: NodePractice = {
  nodeId: "b2.register-switch-informal-to-formal",
  explain: "Formal English (essays, emails to schools or companies) avoids slang, contractions and many phrasal verbs. Swap: kids → young people / children; get → receive / obtain; a lot of → a large number of; need → require; find out → discover; look into → investigate; but → however; so → therefore. Write 'do not', not 'don't'.",
  pattern: ["kids → young people · get → receive / obtain · a lot of → a large number of", "find out → discover · look into → investigate · need → require", "but → however · so → therefore · also → furthermore", "don't → do not (no contractions)"],
  steps: [
    [
      heard(A("03", "notice"), "How does the speaker say 'kids' formally?", ["young people", "guys", "teens lol"], 0, "kids → young people."),
      heard(A("03", "notice"), "Which formal verb replaces 'need'?", ["require", "want", "gotta"], 0, "need → require."),
      ch("Formal version of 'find out'?", ["discover", "figure out", "get"], 0, "find out → discover."),
      ch("Formal version of 'so' (for a result)?", ["therefore", "like", "anyway"], 0, "so → therefore."),
      ch("Which is NOT typical of formal writing?", ["contractions like don't", "precise vocabulary", "linkers like however"], 0, "Formal writing uses full forms."),
    ],
    [
      ch("Why is 'Dear Sir, I wanna ask about the course' inappropriate?", ["'Wanna' is very informal.", "'Dear Sir' is wrong.", "Nothing is wrong."], 0, "Wanna → I would like to."),
      ch("'Obtain' is a formal equivalent of…", ["get", "give", "go"], 0, "obtain = get."),
      ch("Which sentence is most formal?", ["We should look into it.", "The matter should be investigated.", "Let's check it out."], 1, "Passive + formal verb."),
      ch("'A significant number of' replaces…", ["a lot of", "a little", "none of"], 0, "Formal quantity."),
      ch("When is informal English the right choice?", ["Chatting with friends", "A university application", "A complaint to a company"], 0, "Register depends on the situation."),
    ],
    [
      tr("Make it formal.", "Kids get a lot of homework.", ["Children receive a large amount of homework", "Young people receive a large amount of homework", "Students receive a large amount of homework", "Children are given a large amount of homework", "Students are given a large amount of homework", "Young people are given a large amount of homework", "Children receive a considerable amount of homework", "Students receive a considerable amount of homework"], "kids → children / students; get → receive; a lot of → a large amount of."),
      gap("The school should", "the problem. (formal for 'look into')", ["investigate", "examine"], "look into → investigate."),
      gap("Students", "more support. (formal for 'need')", ["require"], "need → require."),
      dict(A("03", "dict"), ["Young people require greater support"]),
      gap("The course was expensive.", ", it was excellent value. (formal for 'but')", ["However", "Nevertheless", "Nonetheless"], "but → However, (new sentence)."),
    ],
    [
      fix(["I am writing to", "ask for info", "about the course."], 1, ["request information", "ask for information", "enquire", "inquire"], "info → information (or: request information)."),
      fix(["Furthermore,", "the results", "were kinda disappointing."], 2, ["were somewhat disappointing", "were rather disappointing", "were disappointing", "were quite disappointing"], "kinda → somewhat / rather."),
      fix(["The government", "should sort out", "the housing crisis."], 1, ["should resolve", "should solve", "should address", "should tackle"], "sort out → resolve / address."),
      fix(["The results", "were awesome,", "exceeding all expectations."], 1, ["were excellent", "were outstanding", "were impressive", "were very positive", "were exceptional"], "awesome → excellent / outstanding in formal writing."),
      fix(["Therefore,", "loads of people", "support the proposal."], 1, ["many people", "a large number of people", "a significant number of people", "numerous people"], "loads of → a large number of."),
    ],
    [
      ch("Email to a university. Best opening?", ["Hey! Quick question", "Dear Admissions Team,", "Yo,"], 1, "Dear + name or team."),
      ch("Best formal closing sentence?", ["Thanks a lot, see ya!", "I look forward to hearing from you.", "Write back soon xx"], 1, "Standard formal closing."),
      ch("Which is TOO formal for a text to your mum?", ["I'll be home at 8.", "I shall arrive at approximately 20:00.", "Home by 8!"], 1, "Register should match the reader."),
      ch("Most appropriate in an essay?", ["Social media is super bad for kids.", "Social media may have a negative impact on young people.", "Social media sucks."], 1, "Formal, precise, hedged."),
      say("I look forward to hearing from you.", "Stress: LOOK FORward, HEARing."),
    ],
  ],
  create: {
    prompts: [
      { text: "Rewrite this message as a formal email to your school director, and add one more point of your own: 'Hey! So the wifi in the library is really bad and we can't do our homework. Can you guys fix it? Thanks!'" },
      { universe: "futures", text: "Rewrite this message as a formal email to a company, and add one more point: 'Hi, I saw your internship thing online and I wanna apply. I'm really into design. Can I send my stuff?'" },
      { universe: "science", text: "Rewrite as a formal email to a museum, and add one more point: 'Hey, our class wants to visit the science museum. Can we get a discount? There's like 30 of us.'" },
    ],
    minWords: 60,
    checks: [
      { label: "Formal greeting and closing (Dear… / I look forward to… / Kind regards…), both", pattern: "\\b(dear|i look forward to|yours sincerely|yours faithfully|kind regards|best regards)\\b", min: 2 },
      { label: "No contractions or slang (don't, I'm, wanna, guys, kinda, stuff, hey…)", pattern: "^(?![\\s\\S]*\\b(\\w+n't|i'm|it's|we're|they're|i'd|wanna|gonna|guys|kinda|stuff|hey|lol|super)\\b)", min: 1 },
    ],
    rubric: ["Formal greeting and closing.", "No contractions or slang.", "A clear, polite request."],
    model: "Dear Director, I am writing to inform you that the internet connection in the library is extremely unreliable. As a result, students are unable to complete their homework. I would be grateful if this issue could be resolved as soon as possible. Furthermore, additional power sockets would be very useful. I look forward to hearing from you. Kind regards, Valentina",
  },
};

const essay: NodePractice = {
  nodeId: "b2.essay-conventions-nominalisation-introdu",
  explain: "Academic English often turns verbs and adjectives into nouns (nominalisation). It sounds more objective and packs in more information: People consume more → Consumption has increased. Prices rose → The rise in prices… It is important → The importance of… Essays also follow a structure: an introduction that ends with a thesis, one idea per paragraph opened by a topic sentence, and a conclusion that adds no new ideas.",
  pattern: ["consume → consumption · develop → development · decide → decision", "rise → a rise in · reduce → a reduction in · grow → growth", "important → importance · possible → possibility", "Essay: thesis → topic sentences → conclusion (no new ideas)"],
  steps: [
    [
      heard(A("04", "notice"), "What has caused fewer local shops?", ["The growth of online shopping", "A government decision", "Higher rents"], 0, "'The growth of online shopping has led to a reduction…'"),
      heard(A("04", "notice"), "Who does the final decision belong to?", ["Consumers", "Shop owners", "The writer"], 0, "'The decision belongs to consumers.'"),
      ch("Noun form of 'develop'?", ["development", "developing", "developed"], 0, "-ment."),
      ch("Noun form of 'reduce'?", ["reduction", "reducement", "reducing"], 0, "-tion."),
      ch("Which sentence uses nominalisation?", ["Prices rose sharply.", "There was a sharp rise in prices.", "Prices are rising."], 1, "rose (verb) → a rise (noun)."),
    ],
    [
      ch("Why use nominalisation in essays?", ["It sounds more objective and compact.", "It always makes sentences shorter.", "It's informal."], 0, "It focuses on ideas, not people."),
      ch("What should a conclusion NOT do?", ["Introduce a new argument", "Summarise the main points", "Answer the question"], 0, "No new ideas in the conclusion."),
      ch("A topic sentence…", ["states the main idea of a paragraph", "ends the essay", "is always a question"], 0, "It opens the paragraph."),
      ch("Noun form of 'possible'?", ["possibility", "possiblement", "possibleness"], 0, "-ity."),
      ctx("The introduction of the new law caused protests.", "Here, 'introduction' means…", ["the act of bringing in the law", "the first paragraph of an essay", "a greeting"], 0, "Nominalisation of 'introduce'."),
    ],
    [
      tr("Nominalise. Start with 'Consumption'.", "People consume more energy than ever.", ["Consumption of energy is higher than ever", "Consumption of energy has never been higher", "Consumption of energy is greater than ever"], "consume → consumption."),
      tr("Nominalise. Start with 'The decision'.", "The school decided to ban phones, which surprised everyone.", ["The decision to ban phones surprised everyone", "The decision to ban phones surprised everybody"], "decided → the decision."),
      gap("There has been a significant", "in pollution. (reduce)", ["reduction", "decrease"], "reduce → reduction."),
      dict(A("04", "dict"), ["The growth of cities has created new problems"]),
      gap("Many people doubt the", "of the plan. (effective)", ["effectiveness"], "effective → effectiveness."),
    ],
    [
      fix(["The", "grow", "of tourism has changed the town."], 1, ["growth"], "grow → growth."),
      fix(["There was a", "reduce", "in crime last year."], 1, ["reduction", "decrease", "drop", "fall"], "Noun after 'a'."),
      fix(["The", "important", "of sleep is often ignored."], 1, ["importance"], "important → importance."),
      fix(["Their", "decide", "to leave shocked the fans."], 1, ["decision"], "decide → decision."),
      fix(["The", "develop", "of new medicines takes years."], 1, ["development"], "develop → development."),
    ],
    [
      ch("Best academic sentence?", ["People use cars a lot and it's bad.", "Increased car use has led to higher levels of air pollution.", "Cars are everywhere, which is bad."], 1, "Nominalisation + precise cause and effect."),
      ch("Best concluding sentence?", ["In conclusion, the evidence suggests that later start times benefit students.", "In conclusion, also, aliens.", "To conclude, here's a new idea nobody mentioned."], 0, "Sum up; don't add."),
      ch("Which is overloaded with nominalisation (hard to read)?", ["The implementation of the reduction of the consumption of sugar is a necessity.", "Reducing sugar consumption is necessary.", "We need to eat less sugar."], 0, "Use it, but keep sentences readable."),
      ch("Best thesis for 'Should homework be banned?'", ["Homework.", "Although homework can cause stress, a limited amount improves learning.", "I will talk about homework."], 1, "A thesis takes a position."),
      say("There has been a significant increase in energy consumption.", "Stress: sigNIFicant INcrease, conSUMPtion."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write the introduction and one body paragraph of an essay: 'Has technology made teenagers' lives better?' Use at least three nominalisations (development, growth, reduction, importance…)." },
      { universe: "science", text: "Write the introduction and one body paragraph of an essay on climate change, with at least three nominalisations." },
      { universe: "past", text: "Write the introduction and one paragraph of an essay on how one invention changed society, with at least three nominalisations." },
    ],
    minWords: 90,
    checks: [
      { label: "Nominalisations (-tion, -ment, -ance, -ence, -ity, growth, rise…), at least six", pattern: "\\b\\w{3,}(tion|sion|ment|ance|ence|ity|ness)s?\\b|\\b(growth|rise|increase|decrease|decline|impact)\\b", min: 6 },
      { label: "A clear position (On balance, This essay will argue, Overall…)", pattern: "\\b(this essay|i will argue|i would argue|it can be argued|on balance|overall|i believe)\\b", min: 1 },
    ],
    rubric: ["My introduction ends with a clear thesis.", "My paragraph starts with a topic sentence.", "I used nominalisation, but sentences are still readable."],
    model: "The development of smartphones has transformed the daily lives of teenagers. On balance, this essay will argue that the benefits outweigh the problems. Firstly, the growth of online learning has given students access to free education. The availability of video lessons and the reduction in the cost of information mean that anyone can learn new skills. However, the importance of limits should not be ignored.",
  },
};

const hedge: NodePractice = {
  nodeId: "b2.do-hedge-claims",
  explain: "In English, especially in essays and discussions, very certain claims can sound naive or arrogant. We hedge: It seems that…, tend to…, may / might / could…, arguably…, likely…, to some extent…, it could be argued that… Compare: 'Social media causes depression' (too certain) → 'Social media may contribute to depression in some teenagers.' Don't over-hedge, though: one or two per claim is enough.",
  pattern: ["Modals: may, might, could", "Verbs: seem, appear, tend to, suggest", "Adverbs: arguably, possibly, probably, generally", "Phrases: to some extent, in many cases, it could be argued that"],
  steps: [
    [
      heard(A("05", "notice"), "How certain is the speaker?", ["Careful, not 100% certain", "Completely certain", "Joking"], 0, "It seems, tend to, could, may, arguably: all hedges."),
      heard(A("05", "notice"), "What does the speaker say about other factors?", ["They may also play a role.", "They don't matter.", "They're the main cause."], 0, "'Other factors may also play a role.'"),
      ch("Which phrase hedges a claim?", ["tend to", "definitely", "always"], 0, "Tend to = usually, not always."),
      ch("Which sentence is hedged?", ["Video games cause violence.", "Video games may contribute to aggression in some cases.", "Video games are evil."], 1, "may + in some cases."),
      ch("'Arguably' means…", ["you could reasonably argue this", "it's a proven fact", "nobody agrees"], 0, "A careful way to give an opinion."),
    ],
    [
      ch("Why hedge in academic writing?", ["Over-certain claims sound naive; evidence is rarely 100%.", "To make the text longer.", "Because English speakers are unsure of everything."], 0, "Precision about certainty."),
      ctx("Students tend to prefer shorter videos.", "This means…", ["most students usually prefer them, but not all", "all students prefer them", "no students prefer them"], 0, "tend to = generally."),
      ch("Which is the strongest (least hedged)?", ["This proves that…", "This suggests that…", "This may indicate that…"], 0, "Prove = 100% certain."),
      ch("When is NOT hedging better?", ["Stating a clear fact: 'Water boils at 100°C at sea level.'", "Giving an opinion on a complex social issue", "Discussing study results"], 0, "Don't hedge facts."),
      ctx("To some extent, I agree.", "This means…", ["I partly agree.", "I completely agree.", "I completely disagree."], 0, "to some extent = partly."),
    ],
    [
      tr("Hedge it using 'may'.", "Social media causes anxiety.", ["Social media may cause anxiety"], "may + base verb."),
      tr("Hedge it using 'tend to'.", "Teenagers stay up late.", ["Teenagers tend to stay up late"], "tend to + base verb."),
      gap("It", "that the new policy is working. (seem)", ["seems", "appears"], "It seems that…"),
      dict(A("05", "dict"), ["This could be one of the reasons"]),
      ord("Arguably, the most important skill is listening.", "Arguably, + claim."),
    ],
    [
      fix(["Studies", "prove 100% that", "coffee is healthy."], 1, ["suggest that", "show that", "indicate that"], "Studies suggest; they rarely 'prove 100%'."),
      fix(["People", "always tend to", "prefer cheap products."], 1, ["tend to", "often", "generally"], "Always + tend to contradict each other."),
      fix(["It", "seems as", "the plan failed."], 1, ["seems that", "seems as if", "seems as though", "appears that"], "It seems that / as if."),
      fix(["Teenagers", "are tend to", "use their phones at night."], 1, ["tend to"], "Tend is a verb: they tend to."),
      fix(["This", "might could", "be a problem."], 1, ["might", "could", "may"], "One modal only."),
    ],
    [
      ch("Essay conclusion. Best sentence?", ["Phones destroy all teenagers' brains.", "Excessive phone use may affect concentration in some teenagers.", "Phones are bad, period."], 1, "Hedged and precise."),
      ch("Science discussion. Best way to present results?", ["The results suggest a link between sleep and memory.", "The results prove everything.", "The results are, like, obviously true."], 0, "suggest a link."),
      ch("Which is over-hedged (too unclear)?", ["It might possibly perhaps seem that this could maybe be true.", "It seems that this is true.", "This may be true."], 0, "Too many hedges and the meaning disappears."),
      ch("Advice to a friend. Most natural?", ["You might want to talk to her first.", "It could be argued that communication with her may be beneficial.", "Talk."], 0, "'You might want to…' is a friendly hedge."),
      say("It seems that the plan might not work as well as expected.", "Keep it smooth: it-SEEMS-that."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short paragraph answering: 'Does social media make teenagers less happy?' Give a balanced answer and hedge your claims (may, tend to, it seems that, arguably, to some extent)." },
      { universe: "science", text: "Write a short paragraph on whether AI will replace teachers, hedging your claims carefully." },
      { universe: "screens", text: "Write a short paragraph on whether video games improve problem-solving, hedging your claims carefully." },
    ],
    minWords: 70,
    checks: [
      { label: "Hedging language (may, tend to, it seems, arguably…), at least four", pattern: "\\b(may|might|could|seems?|appears?|tends? to|arguably|possibly|probably|likely|generally|to some extent|in some cases|in many cases|it could be argued|suggests?)\\b", min: 4 },
      { label: "No absolute claims (always, never, definitely, proves, 100%)", pattern: "^(?![\\s\\S]*(\\b(always|never|definitely|proves?|undoubtedly|certainly)\\b|100 ?%))", min: 1 },
    ],
    rubric: ["My answer is balanced.", "I hedged claims I can't prove.", "I didn't over-hedge every sentence."],
    model: "It seems that social media can affect teenagers' happiness, but the effect tends to depend on how it is used. Scrolling for hours may increase anxiety, especially at night. However, to some extent, it also helps young people stay connected with friends. Arguably, the problem is not social media itself, but the amount of time spent on it.",
  },
};

const understatement: NodePractice = {
  nodeId: "b2.understatement",
  explain: "English speakers, especially British ones, often say less than they mean. 'It's not bad' can mean 'it's quite good'. 'It's a bit of a problem' can mean 'it's a serious problem'. 'I'm not entirely convinced' means 'I disagree'. Understatement sounds polite and relaxed. Learn to decode it, and use it to soften criticism.",
  pattern: ["not bad = quite good · not great = bad", "a bit of a problem = a real problem", "I'm not entirely sure / convinced = I doubt it / I disagree", "That's an interesting idea = (sometimes) I'm not keen on it"],
  steps: [
    [
      heard(A("06", "notice"), "What did the speaker think of the concert?", ["It was quite good.", "It was terrible.", "It was cancelled."], 0, "'Not bad at all' = quite good."),
      heard(A("06", "notice"), "What does the speaker think of the new singer?", ["They don't really like the singer.", "They love the singer.", "They've never heard the singer."], 0, "'Not entirely convinced' = I don't think so."),
      ch("'It's not bad' usually means…", ["it's quite good", "it's terrible", "it's not finished"], 0, "Understatement for a positive opinion."),
      ch("'We have a bit of a problem' often means…", ["we have a real problem", "there's no problem", "the problem is tiny"], 0, "'A bit of' softens bad news."),
      ch("Understatement means…", ["saying less than you mean", "saying more than you mean", "lying"], 0, "Exaggeration is the opposite."),
    ],
    [
      ctx("Your manager says: 'Your report wasn't quite what we expected.'", "This means…", ["there were real problems with it", "it was perfect", "it was late"], 0, "Polite criticism."),
      ctx("'It's not the best idea I've ever heard.'", "This means…", ["I think it's a bad idea.", "It's the second-best idea.", "I love it."], 0, "Understated disagreement."),
      ch("Why use understatement?", ["To sound polite and less aggressive", "To confuse people", "Because exams require it"], 0, "It softens what you say."),
      ctx("On a 40°C day: 'Bit warm today, isn't it?'", "This is…", ["humour: it's extremely hot", "a statement that it's slightly warm", "a complaint about the cold"], 0, "Ironic understatement."),
      ch("Why can English feedback confuse Spanish speakers?", ["Criticism is often hidden in polite understatement.", "English has no polite forms.", "English speakers are always direct."], 0, "Read between the lines."),
    ],
    [
      gap("The food wasn't", "; I'd go back. (= quite good)", ["bad", "too bad"], "not bad = quite good."),
      gap("Losing the keys was a", "of a problem. (= a real problem)", ["bit"], "a bit of a problem."),
      gap("I'm not entirely", "it will work. (= I doubt it)", ["sure", "convinced"], "not entirely sure / convinced."),
      dict(A("06", "dict"), ["It wasn't exactly a success", "It was not exactly a success"], "'Not exactly a success' = a failure, said politely."),
      tr("Soften this criticism. Start with 'It's not'.", "Your essay is bad.", ["It's not your best essay", "It's not your best work", "It's not quite there yet", "It's not the best essay", "It's not great"], "Understatement softens criticism."),
    ],
    [
      fix(["Honestly,", "your presentation was terrible,", "but the slides looked nice."], 1, ["your presentation wasn't your best", "your presentation could have been better", "your presentation wasn't great"], "Too harsh for feedback to a classmate."),
      fix(["The film", "was not bad at all;", "I hated it."], 1, ["wasn't great", "was not great", "wasn't very good", "was not very good", "was terrible", "was awful"], "'Not bad at all' is positive, which contradicts 'I hated it'."),
      fix(["I'm", "not entirely convinced;", "it's perfect!"], 1, ["completely convinced", "totally convinced", "convinced"], "'Not entirely convinced' means doubt, which contradicts 'perfect'."),
      fix(["Your idea", "is stupid,", "but let's discuss it."], 1, ["is interesting", "might need some work", "needs some work", "is an interesting idea"], "Soften it in a discussion."),
      fix(["We have", "a little tiny problem:", "the house is on fire!"], 1, ["a serious problem", "a big problem", "an emergency"], "Emergencies need direct language, not understatement."),
    ],
    [
      ch("Your friend's cooking is too salty. Kindest honest comment?", ["It's disgusting.", "It's not bad; maybe a little salty?", "Perfect!"], 1, "Honest but kind."),
      ch("Your teacher writes 'Some interesting ideas, but not quite there yet.' What should you do?", ["Revise the work; it needs improvement.", "Nothing; it's excellent.", "Celebrate."], 0, "Decode the understatement."),
      ch("Formal meeting. You disagree with a plan.", ["That's the worst plan ever.", "I'm not entirely convinced this will work.", "No."], 1, "Polite disagreement."),
      ch("When is understatement a bad idea?", ["In an emergency, when you need to be clear", "With friends", "In a polite email"], 0, "Clarity first when it matters."),
      say("It's not bad at all, actually.", "Light, relaxed tone."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short, honest but polite review of a film, meal or place that disappointed you. Use at least two understatements (not great, a bit of a…, not entirely convinced, not quite…)." },
      { universe: "screens", text: "Write a polite but honest review of a game or series that disappointed you, with at least two understatements." },
      { universe: "arts", text: "Write polite but honest feedback on an exhibition, concert or album that disappointed you, with at least two understatements." },
    ],
    minWords: 50,
    checks: [
      { label: "Understatement, at least two", pattern: "\\b(not bad|not great|not (exactly|quite|entirely|the best|my favou?rite|ideal)|a bit of a|a little|slightly|wasn'?t (exactly|quite|great)|could have been better|not (too|that) (good|great))\\b", min: 2 },
    ],
    rubric: ["My review is honest but polite.", "I used at least two understatements.", "A reader can still tell what I really think."],
    model: "The new burger place wasn't exactly what I expected. The fries were not bad, but the burger was a bit of a disappointment: slightly dry and not quite hot enough. The staff were lovely, though, so I'm not entirely convinced I won't go back.",
  },
};

export const B2_COMMUNICATE: NodePractice[] = [argue, summarise, register, essay, hedge, understatement];
