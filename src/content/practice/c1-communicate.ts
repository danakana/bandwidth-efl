/* C1 Communicate. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, say, tr } from "./helpers";

const C = (n: string, k: "notice" | "dict") => `p/c1c-${n}-${k}.mp3`;

export const C1_COMMUNICATE_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: C("01", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "Both studies suggest that teenagers sleep less than they need. Whereas the first links this to screens, the second points to early school start times. Taken together, these findings indicate that the problem has more than one cause, a view echoed by several sleep experts." },
  { file: C("01", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "Taken together, these findings are worrying." },
  { file: C("02", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "OK, if I understand you both correctly, Ana wants the trip in May, and Pedro is worried about the cost. What you both seem to want is a trip that everyone can afford. Would you be open to going in May, provided that we find a cheaper hotel? Let's try to meet halfway." },
  { file: C("02", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "Would you be open to a compromise?" },
  { file: C("03", "notice"), voice: "3f6pec3wODJsjTqtcNI2", script: "Here's the same news in three styles. News: Heavy rain has forced the closure of three schools in the city. Text message: No school tomorrow!! The rain's mad. Story: The rain had not stopped for three days, and the old school building groaned under its weight." },
  { file: C("03", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Heavy rain has forced the closure of three schools." },
  { file: C("04", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "I wonder if you might take another look at my grade. I may not have explained my argument very clearly. That's one way of looking at it, of course, but I'm not sure I'd go quite that far. You might want to double-check the second page." },
  { file: C("04", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "I wonder if you might help me with this." },
  { file: C("05", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "What did you think of the new guy? Well, he's very punctual. And the presentation? Some of the slides were good. Is it just me, or is it cold in here? Oh, and are you using that charger? My phone's nearly dead." },
  { file: C("05", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "Is it just me, or is it cold in here?" },
];

const argue: NodePractice = {
  nodeId: "c1.build-an-extended-argument-synthesise-so",
  explain: "At C1 you don't just give opinions: you bring sources together and build an argument across several paragraphs. Synthesise: show how sources agree (Both X and Y suggest…; This view is echoed by…), differ (Whereas X argues…, Y contends…) or combine (Taken together, these findings indicate…). Then evaluate and add your position (However, neither study considers…). Structure: claim → evidence from sources → analysis → counter-argument → conclusion. Each paragraph should have one clear job.",
  pattern: ["Agree: Both X and Y suggest… · This view is echoed / supported by…", "Differ: Whereas X argues…, Y contends… · X challenges this view.", "Combine: Taken together, these findings indicate… · A common thread is…", "Evaluate: However, neither source considers… · This raises the question of…"],
  steps: [
    [
      heard(C("01", "notice"), "What do both studies suggest?", ["Teenagers sleep less than they need.", "Screens are completely harmless for teenagers.", "Schools start much too late for teenagers."], 0, "'Both studies suggest that teenagers sleep less'."),
      heard(C("01", "notice"), "How do the studies differ?", ["One blames screens, the other early start times.", "One is about adults, the other about teenagers.", "They don't differ at all in their conclusions."], 0, "'Whereas the first links this to screens, the second points to early school start times'."),
      heard(C("01", "notice"), "What do the findings indicate when taken together?", ["The problem has more than one cause.", "Screens are the only cause of the problem.", "There is no real problem to worry about."], 0, "'Taken together… more than one cause'."),
      ch("'This view is echoed by experts' means…", ["Experts agree with it.", "Experts repeat it loudly.", "Experts disagree."], 0, "echoed = repeated, supported."),
      ch("'Synthesise sources' means…", ["combine ideas from different sources into one argument", "copy the ideas of one source into your essay", "list the sources at the end, with no comment"], 0, "Synthesis = connecting."),
    ],
    [
      ch("Which sentence synthesises?", ["Both reports link poverty to poor health, although they disagree on the solution.", "Report A says poverty is bad. Report B says health is important. I read both reports.", "I read two reports about poverty and health, and they were both very interesting."], 0, "Shows agreement and difference."),
      ch("'Whereas Smith argues X, Lee contends Y.' This shows…", ["contrast between sources", "strong agreement between the two sources", "a direct quotation from one source"], 0, "Whereas = contrast."),
      ch("Why add a counter-argument?", ["It shows you've considered other views, making your argument stronger.", "To confuse the reader and keep them interested until the very end.", "It weakens your essay, so you should avoid it."], 0, "Anticipate objections."),
      ctx("A student writes: 'However, neither study considers students in rural areas.'", "The student is…", ["evaluating the sources' limits", "summarising what the sources say", "agreeing completely with the sources"], 0, "Critical evaluation."),
      ch("What makes an argument 'extended'?", ["Several connected paragraphs building to a conclusion", "Very long sentences with many commas and clauses", "Lots of quotes, with no comment on them"], 0, "Development."),
    ],
    [
      gap("Both studies", "that sleep affects memory.", ["suggest", "show", "indicate"], "Both… suggest."),
      gap("", "together, these findings indicate a clear trend.", ["Taken"], "Taken together."),
      gap("This view is", "by several experts.", ["echoed", "supported", "shared"], "echoed by."),
      dict(C("01", "dict"), ["Taken together, these findings are worrying", "Taken together these findings are worrying"]),
      tr("Combine into one sentence, using the word given.", "Rivera says uniforms improve discipline. Gómez says they limit self-expression.", ["Whereas Rivera says uniforms improve discipline, Gómez says they limit self-expression", "Whereas Rivera argues that uniforms improve discipline, Gómez contends that they limit self-expression", "Rivera says uniforms improve discipline, whereas Gómez says they limit self-expression"], "Whereas for contrasting sources.", "Whereas"),
    ],
    [
      fix(["Both studies", "suggests", "that exercise improves mood."], 1, ["suggest"], "Both = plural."),
      fix(["Taking together,", "the results are clear."], 0, ["Taken together,"], "Taken together (passive meaning)."),
      fix(["Whereas Martínez argues for longer holidays,", "Torres also agrees."], 1, ["Torres argues against them.", "Torres opposes them.", "Torres argues for shorter ones."], "Whereas needs a contrast."),
      ch("Which is a weak use of sources?", ["Source A says X. Source B says Y. Source C says Z.", "Both A and B suggest X, while C challenges this.", "Taken together, A and B indicate…"], 0, "A list is not a synthesis."),
      ch("Which conclusion is weakest?", ["So yeah, that's my essay.", "On balance, the evidence suggests that later start times would benefit students.", "Taken together, these sources point to one clear solution."], 0, "No position, no summary."),
    ],
    [
      ch("Best topic sentence for a body paragraph?", ["A growing body of research links social media use to lower self-esteem.", "Social media is a thing that many people use every day.", "I will now talk about social media and its effects."], 0, "Clear claim, academic tone."),
      ch("Best way to introduce an opposing view?", ["Critics, however, contend that the evidence is limited.", "Some people are wrong, though, and they say otherwise.", "But whatever, some people disagree with this."], 0, "Fair and academic."),
      ch("Best final sentence?", ["Further research is needed, but the case for change is already strong.", "That's all I have to say about this topic, so I'll stop here.", "Thanks for reading my essay, I hope you liked it."], 0, "Balanced and decisive."),
      ch("What should each paragraph have?", ["One main job (one claim and its support)", "Every idea at once, so nothing is missed", "Only quotes from other writers"], 0, "Paragraph unity."),
      say("Taken together, these findings indicate that the problem has more than one cause.", "Pause after TOGETHER."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write two paragraphs (130 words or more) on whether schools should start later. Imagine two sources: one says teenagers' body clocks need later mornings; the other says later starts cause transport problems. Synthesise them (Both… / Whereas… / Taken together…), evaluate them, and give your position." },
      { universe: "screens", text: "Write two paragraphs (130 words or more) on whether video games are good for teenagers. Imagine two sources with different views. Synthesise, evaluate and give your position." },
      { universe: "futures", text: "Write two paragraphs (130 words or more) on whether cities should ban cars from the centre. Imagine two sources with different views. Synthesise, evaluate and give your position." },
    ],
    minWords: 130,
    checks: [
      { label: "Synthesis phrase (Both… suggest, Taken together, echoed by, A common thread…)", pattern: "\\bboth\\b[^.]{0,60}\\b(suggest|show|indicate|agree|argue|point)\\w*\\b|\\btaken together\\b|\\b(echoed|supported|shared) by\\b|\\ba common thread\\b", min: 1 },
      { label: "Contrast between sources (Whereas / while X argues…, challenges)", pattern: "\\b(whereas|while)\\b[^.]{0,80}\\b(argu|contend|claim|suggest|say|point|believ|insist)\\w*\\b|\\bchalleng\\w*\\b", min: 1 },
      { label: "Evaluation (However, neither…, fails to, does not consider, limited…)", pattern: "\\bneither\\b|\\bfails? to\\b|\\bdo(es)? not (consider|account|address|explain)\\b|\\blimit(ed|ation|ations)\\b|\\boverlook\\w*\\b|\\braises the question\\b", min: 1 },
    ],
    rubric: ["I connected the sources; I didn't just list them.", "I evaluated their limits.", "My own position is clear by the end."],
    model: "The question of whether schools should start later has divided experts. Both sleep researchers and many teachers suggest that teenagers are chronically tired, and this view is echoed by students themselves. Whereas the first source argues that adolescent body clocks make early mornings genuinely harmful, the second contends that later starts would create serious transport problems for families and buses.\n\nTaken together, these sources indicate that the health case is strong, but the practical obstacles are real. However, neither source considers flexible solutions, such as staggered start times or moving the first lesson online. In my view, the evidence on sleep is too important to ignore. A trial of a 9 a.m. start in a few schools would allow us to measure the real benefits before any wider change.",
  },
};

const mediate: NodePractice = {
  nodeId: "c1.mediate-and-negotiate",
  explain: "Mediating means helping people understand each other and reach agreement. Check understanding: If I understand you correctly… / So what you're saying is… Find the shared goal: What you both seem to want is… Propose: Would you be open to…? / How about we…? Make conditional offers: I could agree to X, provided that Y. / We'd be willing to…, as long as… Close: So, are we agreed that…? Keep it neutral, summarise fairly and avoid taking sides too early.",
  pattern: ["Check: If I understand you correctly, … · So what you're saying is…", "Common ground: What you both seem to want is… · We all agree that…", "Propose: Would you be open to…? · How about…? · Let's meet halfway.", "Conditional offer: I could accept X, provided that / as long as Y."],
  steps: [
    [
      heard(C("02", "notice"), "What does Ana want?", ["The trip in May", "A cheaper hotel", "No trip"], 0, "'Ana wants the trip in May'."),
      heard(C("02", "notice"), "What is Pedro worried about?", ["The cost", "The date", "The weather"], 0, "'Pedro is worried about the cost'."),
      heard(C("02", "notice"), "What does the mediator propose?", ["May, provided they find a cheaper hotel", "Cancel the trip because it costs too much", "Go in June, when hotels are cheaper"], 0, "A conditional compromise."),
      ch("'Let's meet halfway' means…", ["Let's both give up something to agree", "Let's meet in the middle of the road", "Let's stop talking"], 0, "Compromise."),
      ch("'If I understand you correctly…' is used to…", ["check you've understood someone", "disagree strongly with someone", "end the conversation politely"], 0, "Checking."),
    ],
    [
      ch("Why does a mediator summarise both sides?", ["So everyone feels heard and the facts are clear", "To show off their listening skills to the group", "To take one side of the argument"], 0, "Fair summaries reduce conflict."),
      ch("'What you both seem to want is…' focuses on…", ["the shared goal", "the differences", "the mediator's opinion"], 0, "Common ground."),
      ch("Which is a conditional offer?", ["I could agree to that, provided we split the cost.", "I agree with you completely on that point.", "No way, I'm not paying for that."], 0, "provided = condition."),
      ctx("In a group project, Lucas says: 'So what you're saying is you'd rather do the slides than the research?'", "Lucas is…", ["checking his understanding", "refusing to work with the others", "giving orders to the group"], 0, "Paraphrase to check."),
      ch("What should a good mediator avoid?", ["Taking sides too early", "Asking questions", "Summarising"], 0, "Neutrality builds trust."),
    ],
    [
      gap("Would you be", "to meeting on Saturday instead?", ["open"], "Would you be open to + -ing."),
      gap("If I understand you", ", you want more time.", ["correctly", "right"], "Checking."),
      gap("I could accept that,", "that we finish by six.", ["provided", "providing", "as long as"], "Conditional offer."),
      dict(C("02", "dict"), ["Would you be open to a compromise"]),
      tr("Rewrite as a conditional offer using the words given.", "We'll pay half if you deliver by Friday.", ["We'd be willing to pay half, provided that you deliver by Friday", "We would be willing to pay half, provided that you deliver by Friday", "We'd be willing to pay half provided you deliver by Friday", "We would be willing to pay half provided you deliver by Friday"], "would be willing to… provided that.", "provided"),
    ],
    [
      fix(["Would you be open", "to meet", "on Monday?"], 1, ["to meeting"], "open to + -ing."),
      fix(["So", "what you say is", "that the date doesn't matter?"], 1, ["what you're saying is", "what you are saying is"], "Use the continuous: what you're saying is."),
      fix(["Let's", "meet in half", "and agree on Thursday."], 1, ["meet halfway"], "meet halfway."),
      ch("Which is NOT neutral?", ["Ana is obviously right, Pedro.", "Let's hear both sides first.", "What do you both think is most important?"], 0, "Taking sides too early."),
      ch("Which closing is best?", ["So, are we agreed that we'll go in May with a cheaper hotel?", "OK, bye, we'll talk about it another day, maybe next week.", "Whatever you want, I don't mind at all."], 0, "Confirm the agreement."),
    ],
    [
      ch("Two friends argue about where to eat. Best mediation?", ["What you both seem to want is somewhere cheap and close. How about the arepa place?", "Just choose one of them, I really don't care where we go, honestly, it's all the same.", "You're both annoying. I'm going home to eat alone."], 0, "Common ground + proposal."),
      ch("Best way to start negotiating a deadline with a teacher?", ["Would you be open to me handing it in on Monday, provided I send a draft today?", "I need more time for the essay. Monday is better for me, so I'll send it then.", "I'm not doing it by Friday. It's too much work, sorry."], 0, "Polite conditional offer."),
      ch("Your group can't agree. Best first step?", ["If I understand everyone correctly, we agree on the topic but not the format.", "I'll decide for everyone, because we can't agree on anything.", "Let's vote right now without talking about it any more."], 0, "Summarise first."),
      ch("When is 'meet halfway' not fair?", ["When one side gives up much more than the other", "Never; meeting halfway is always fair", "When the people are close friends"], 0, "Real compromise is balanced."),
      say("What you both seem to want is a trip that everyone can afford.", "Stress BOTH and AFFORD."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a dialogue or a message (100 words or more) in which you mediate between two classmates who disagree about a group project. Check understanding, find common ground, propose a compromise with a condition, and confirm the agreement." },
      { universe: "screens", text: "Write a message (100 words or more) mediating between two gamers or streamers who are arguing about a team decision. Check understanding, find common ground, propose a conditional compromise, and confirm." },
    ],
    minWords: 100,
    checks: [
      { label: "Check understanding (If I understand…, So what you're saying is…)", pattern: "\\bif i understand\\b|\\bwhat you('re| are) saying\\b|\\bcorrect me if\\b|\\bif i've got this right\\b|\\bso you('re| are) saying\\b", min: 1 },
      { label: "Common ground (both seem to want, we all agree, what you both…)", pattern: "\\bboth (seem to )?(want|agree|need|care)\\b|\\bwe all (agree|want)\\b|\\bcommon ground\\b|\\bwhat you both\\b", min: 1 },
      { label: "Conditional proposal (provided / as long as / would you be open to)", pattern: "\\bprovid(ed|ing)\\b|\\bas long as\\b|\\bwould you be open to\\b|\\bon condition that\\b|\\bmeet halfway\\b", min: 1 },
      { label: "Confirm (are we agreed, so we agree, does that work)", pattern: "\\bare we agreed\\b|\\bso we('ve| have)? agreed\\b|\\bdoes that work\\b|\\bis everyone (happy|ok|okay)\\b|\\bcan we agree\\b|\\bdeal\\b", min: 1 },
    ],
    rubric: ["I summarised both sides fairly.", "My proposal has a clear condition.", "I stayed neutral and confirmed the agreement."],
    model: "Hi Sara and Nico, I've read both of your messages. If I understand you correctly, Sara wants to present the project as a video, while Nico thinks a poster would be easier and cheaper. What you both seem to want is a good grade without spending the whole weekend on it. Would you be open to a compromise? We could make a short two-minute video, provided that Nico designs the slides and Sara does the editing. I'm happy to write the script and find the music. If it gets too complicated, we can switch to the poster by Wednesday. Are we agreed?",
  },
};

const styleShift: NodePractice = {
  nodeId: "c1.style-shifting-across-genres",
  explain: "C1 users can tell the same story in completely different styles. News: impersonal, facts first, passives, nominalisation (Heavy rain has forced the closure of…). Academic: hedged, precise, no contractions. Informal messages: contractions, ellipsis (No school tomorrow!), slang, emoji. Narrative: past tenses, description, emotion, varied sentence length. Review: opinion, evaluative adjectives, recommendation. Ask yourself: Who's reading? Why? Where? The answers decide your grammar and vocabulary.",
  pattern: ["News: facts first · passive · present perfect for new events · no 'I'", "Academic: hedging · nominalisation · no contractions or slang", "Message: contractions · ellipsis · exclamation · casual words", "Narrative: past tenses · description · senses · varied sentences"],
  steps: [
    [
      heard(C("03", "notice"), "In the news version, what has happened?", ["Rain has forced three schools to close.", "Students went to the beach because of the heat.", "The school building fell down in the storm."], 0, "Facts first."),
      heard(C("03", "notice"), "Which version uses exaggeration and informal words?", ["The text message", "The news: 'Rain has forced three schools to close'", "The story"], 0, "'The rain's mad'."),
      heard(C("03", "notice"), "Which version gives the building feelings?", ["The story: 'groaned under its weight'", "The news", "The academic text: 'rainfall increased'"], 0, "Narrative description."),
      ch("Which feature is typical of news?", ["Passives and facts first", "Emoji", "First person feelings"], 0, "Impersonal style."),
      ch("'No school tomorrow!!' is an example of…", ["ellipsis in informal writing", "academic style in a formal report", "a passive form in the news"], 0, "Words left out: (There is) no school…"),
    ],
    [
      ch("Why does news often use the present perfect?", ["To present recent events with current relevance", "Because it's the only tense news can use", "To sound old-fashioned and formal"], 0, "Has forced the closure…"),
      ch("Which is academic style?", ["The data suggest a moderate increase in rainfall.", "It's raining loads lately, honestly, every single day!", "The sky cried for days and days."], 0, "Hedged and precise."),
      ch("Which is narrative style?", ["The streets were silent, apart from the endless drumming of the rain.", "Rainfall increased by 12% in the last month, according to data.", "Rain again lol, so annoying."], 0, "Description and atmosphere."),
      ctx("Your aunt asks for a review of a restaurant for her blog.", "Which features do you need?", ["Opinion, evaluative adjectives and a recommendation", "Passives, statistics and references to studies", "Abbreviations and emoji only"], 0, "Review genre."),
      ch("What decides your style?", ["Reader, purpose and place of publication", "Your mood on the day you write", "The length of the text you need"], 0, "Audience and purpose."),
    ],
    [
      tr("Rewrite in news style, using the word given.", "They closed the bridge because of the floods.", ["The bridge has been closed because of the floods", "The bridge has been closed due to flooding", "The bridge was closed because of the floods", "The bridge has been closed due to the floods"], "Passive, facts first.", "closed"),
      tr("Rewrite as an informal text message.", "The concert has been cancelled due to illness.", ["The concert's cancelled", "Concert's cancelled", "The concert is cancelled", "Concert cancelled", "No concert"], "Ellipsis and contraction."),
      gap("Heavy rain has", "the closure of three schools.", ["forced", "caused", "led to"], "News collocation."),
      dict(C("03", "dict"), ["Heavy rain has forced the closure of three schools"]),
      tr("Rewrite in academic style, using the word given.", "Lots of kids don't sleep enough.", ["Many children do not get enough sleep", "Many children do not sleep enough", "A significant number of children do not get enough sleep", "Many young people do not get enough sleep"], "No contractions, no 'kids', 'lots of'.", "not"),
    ],
    [
      fix(["The study shows that", "loads of kids", "are sleep-deprived."], 1, ["many children", "a large number of children", "many young people"], "Academic style: no slang."),
      fix(["Hey! Can't wait for Saturday!", "Please find attached the details", "of the party."], 1, ["Here are the details", "Here's the info", "I'm sending you the details"], "Too formal for a friendly message."),
      fix(["I think a bridge has been closed", "by the police this morning, says the BBC."], 0, ["A bridge has been closed"], "News doesn't start with 'I think'."),
      ch("Which mixes styles badly?", ["The data indicate a decline, which is kinda sad lol.", "The data indicate a decline in sales over the year.", "Sales went down a little, sadly."], 0, "Academic + chat slang."),
      ch("Which is wrong for a narrative?", ["The temperature was 31.2°C, according to official data.", "The air was thick and heavy with the afternoon heat.", "Sweat ran slowly down his neck."], 0, "Statistics don't fit a story's style."),
    ],
    [
      ch("Best opening for a school newspaper report?", ["The school canteen has introduced a new vegetarian menu following student complaints.", "OMG the canteen has veggie food now, everyone go and try it, it's amazing!!", "Once upon a time, there was a canteen with no vegetarian food."], 0, "News style."),
      ch("Best line for a review?", ["The food is fresh, generous and surprisingly cheap. Highly recommended.", "Food is food. It's OK. You can go if you want, it's near school.", "It has been reported that food is served there daily."], 0, "Evaluative and recommending."),
      ch("Best way to check your style?", ["Read it as your reader would and remove anything that doesn't fit", "Make every sentence as formal as possible, whatever the text", "Add emoji to make it more friendly"], 0, "Reader's eye."),
      ch("Which genre suits 'I reckon'?", ["A chat or informal blog", "A science report", "A legal letter"], 0, "Informal verb."),
      say("Heavy rain has forced the closure of three schools in the city.", "Newsreader style: clear, steady, stress RAIN, CLOSure, THREE."),
    ],
  ],
  create: {
    prompts: [
      { text: "Choose one event (a storm, a concert, a school trip). Write it in three styles, 120 words or more in total: a short news report, a text message to a friend, and the opening of a story. Label each part: News, Message, Story." },
      { universe: "arts", text: "Choose one cultural event. Write it in three styles (120 words or more in total): News, Message, and Review. Label each part." },
    ],
    minWords: 120,
    checks: [
      { label: "Three labelled parts (News:, Message:, Story: or Review:)", pattern: "\\b(news|message|text|story|narrative|review)\\s*:", min: 3 },
      { label: "A passive in the news part (has been / was + participle)", pattern: "\\b(has|have|had) been \\w+(ed|en|t)\\b|\\b(was|were) \\w+(ed|en)\\b", min: 1 },
      { label: "A contraction or ellipsis in the message (it's, can't, no…!)", pattern: "\\b\\w+'(s|re|ve|ll|t|d|m)\\b|!", min: 1 },
    ],
    rubric: ["Each part sounds like its genre.", "I changed grammar and vocabulary, not just the tone.", "A reader could tell the genre without the label."],
    model: "News: A concert by the Colombian band Los Rayos was cancelled last night after a power cut hit the city stadium. Around 20,000 fans had been waiting for over an hour. Organisers have promised full refunds, and a new date is expected to be announced next week.\n\nMessage: Concert's off!! Power cut, can you believe it? We waited for an hour in the rain for nothing 😭 They're giving refunds though. Want to go when they move it?\n\nStory: The lights died just as the crowd began to sing. For a moment there was only silence, then twenty thousand phones lit up the stadium like stars. Nobody knew whether to laugh or cry, so we did both, standing in the dark and singing every word.",
  },
};

const faceSaving: NodePractice = {
  nodeId: "c1.face-saving-and-politeness-strategies",
  explain: "'Face' is the image people want to protect. At C1, you disagree, request and criticise without making anyone lose face. Indirect requests: I wonder if you might… / Would you mind possibly…? Softened disagreement: That's one way of looking at it. / I'm not sure I'd go that far. / I see your point, but… Indirect criticism: You might want to double-check… / It might be worth… Taking the blame yourself: I may not have explained clearly. / Perhaps I misunderstood. Past tense and modals add distance: I was wondering… / Could it be that…? This is how professionals keep relationships working.",
  pattern: ["Request: I wonder if you might… · I was wondering whether… · Would it be possible to…?", "Disagree: That's one way of looking at it. · I'm not sure I'd go that far. · I see your point, but…", "Criticise: You might want to… · It might be worth… · Have you thought about…?", "Self-blame: I may not have explained clearly. · Perhaps I misunderstood."],
  steps: [
    [
      heard(C("04", "notice"), "What does the speaker want?", ["The teacher to look at their grade again", "A new teacher for the rest of the course", "A day off to rest"], 0, "'I wonder if you might take another look at my grade'."),
      heard(C("04", "notice"), "How does the speaker take some of the blame?", ["'I may not have explained my argument very clearly'", "They say the teacher is wrong about the grade", "They don't take any of the blame"], 0, "Self-blame protects the teacher's face."),
      heard(C("04", "notice"), "What do they suggest the teacher do?", ["Double-check the second page", "Change the whole grade", "Read a book"], 0, "'You might want to double-check'."),
      ch("'I'm not sure I'd go that far' is a polite way to…", ["disagree", "agree strongly", "ask a question"], 0, "Softened disagreement."),
      ch("Why say 'I wonder if you might…' instead of 'Do…'?", ["It's indirect and polite, so the listener can refuse easily.", "It's shorter and quicker to say in a busy situation.", "It's an order, so it sounds stronger."], 0, "Indirectness = respect."),
    ],
    [
      ch("Which is the most polite request?", ["I was wondering whether you could possibly extend the deadline.", "Extend the deadline for me, please, I need it.", "Can you extend the deadline? I need two more days."], 0, "Past + modal + possibly."),
      ch("'You might want to check your figures.' The speaker thinks…", ["the figures are probably wrong", "the figures are perfect", "you want to check"], 0, "Indirect criticism."),
      ch("'That's one way of looking at it.' The speaker…", ["probably sees it differently", "completely agrees with the idea", "is confused about what was said"], 0, "Polite disagreement."),
      ctx("Your boss says: 'Perhaps I didn't make myself clear.'", "Your boss is…", ["politely suggesting you misunderstood", "apologising for being unclear only", "praising you"], 0, "Face-saving for both."),
      ch("Why protect the other person's face?", ["It keeps relationships and cooperation working.", "It makes you look weak to others in the group.", "It's only important in Britain."], 0, "Universal, though levels vary by culture."),
    ],
    [
      gap("I", "if you might help me with the report.", ["wonder", "wondered", "was wondering"], "I wonder if you might…"),
      gap("I'm not sure I'd go", "far.", ["that", "quite that"], "I'm not sure I'd go that far."),
      gap("It might be", "checking the dates again.", ["worth"], "It might be worth + -ing."),
      dict(C("04", "dict"), ["I wonder if you might help me with this"]),
      tr("Make this criticism more polite, using the words given.", "Your introduction is too long.", ["You might want to shorten your introduction", "You might want to make your introduction shorter", "You might want to cut your introduction", "You might want to shorten the introduction"], "You might want to…", "might want"),
    ],
    [
      fix(["I was wondering", "if you can", "send me the notes."], 1, ["if you could", "whether you could", "if you might"], "Past for distance: could."),
      fix(["It might be worth", "to check", "the second page."], 1, ["checking"], "worth + -ing."),
      fix(["You're wrong,", "but let me explain why."], 0, ["I see what you mean,", "I see your point,", "That's one way of looking at it,", "I'm not sure I agree,"], "Don't attack, then soften; soften from the start."),
      ch("Which is too direct for an email to a professor?", ["Mark my essay again.", "Would it be possible to discuss my mark?", "I was wondering whether we could talk about my essay."], 0, "Imperative = rude here."),
      ch("Which is TOO indirect for a friend?", ["I was wondering whether you might possibly consider perhaps lending me a pen.", "Can I borrow a pen for a second?", "Got a pen I can use?"], 0, "Over-politeness can sound sarcastic."),
    ],
    [
      ch("Your classmate's slides have errors. Best comment?", ["They look great! You might want to double-check the date on slide 3.", "Slide 3 is wrong. The date is wrong. Fix it before class.", "Did you even read this before you made the slides?"], 0, "Praise + indirect criticism."),
      ch("You disagree with your boss in a meeting. Best?", ["I see your point, but I wonder whether we've considered the cost.", "That's a terrible idea, and it will cost much too much money.", "No. We're not doing that, it's too expensive."], 0, "Acknowledge, then question."),
      ch("You need a deadline extension. Best opening?", ["I was wondering whether it might be possible to have two more days.", "Give me two more days for the project, please.", "I can't do it on time, sorry not sorry, two more days."], 0, "Distance and modals."),
      ch("When is directness better?", ["In emergencies and safety situations", "Never; directness is always rude", "When writing to a professor"], 0, "'Stop! Don't touch that!'"),
      say("That's one way of looking at it, but I'm not sure I'd go that far.", "Rising tone on IT, falling on FAR."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write an email (100 words or more) to a teacher asking them to reconsider a grade you think is unfair. Use an indirect request (I wonder if / I was wondering whether), self-blame (I may not have…), and polite criticism or disagreement (You might want to…, I'm not sure…)." },
      { universe: "arts", text: "Write feedback (100 words or more) for a classmate's creative project that has some problems. Use praise, an indirect request, polite criticism (You might want to…, It might be worth…) and some self-blame or uncertainty." },
    ],
    minWords: 100,
    checks: [
      { label: "Indirect request (I wonder if, I was wondering whether, Would it be possible…)", pattern: "\\bi (wonder|wondered|was wondering) (if|whether)\\b|\\bwould it be possible\\b|\\bwould you mind\\b", min: 1 },
      { label: "Self-blame or uncertainty (I may not have, perhaps I, I might have)", pattern: "\\bi (may|might) not have\\b|\\bperhaps i\\b|\\bi (may|might) have\\b|\\bit('s| is) possible that i\\b|\\bi('m| am) not sure (if|whether)\\b", min: 1 },
      { label: "Polite criticism or disagreement (You might want to, It might be worth, I'm not sure I'd…)", pattern: "\\byou might want to\\b|\\bit might be worth\\b|\\bi('m| am) not sure i'?d\\b|\\bthat's one way\\b|\\bi see your point\\b|\\bhave you (thought|considered)\\b", min: 1 },
    ],
    rubric: ["My tone protects the teacher's face.", "My request is clear despite being indirect.", "I didn't over-apologise."],
    model: "Dear Mr Castro, Thank you for returning our history essays. I was wondering whether you might have a few minutes this week to discuss my mark. I may not have explained my main argument clearly in the introduction, so I understand why it seemed weak. However, I'm not sure I'd agree that I didn't use sources, as I referred to three on page two. It might be worth looking at that section again, if you have time. Of course, I'd also really appreciate any advice on how to improve my writing before the final exam in June. Kind regards, Juliana Pérez",
  },
};

const implicature: NodePractice = {
  nodeId: "c1.implicature-what-is-meant-not-said",
  explain: "People often mean more than they say. This is implicature. 'Well, he's very punctual' (in answer to 'Is he good?') suggests there's nothing better to say. 'Some of the slides were good' implies not all. 'Is it cold in here?' can be a request to close the window. 'Are you using that charger?' means 'Can I borrow it?'. Listeners work out the meaning from context: what was asked, what was NOT said, and what would be normal to say. C1 speakers both understand and use implicature, especially to be polite or diplomatic.",
  pattern: ["Faint praise: Well, he's punctual. (= not much else is good)", "Scale: Some / Most of… (= not all)", "Indirect request: Is it cold in here? (= close the window)", "Pre-request: Are you using that? (= can I borrow it?)"],
  steps: [
    [
      heard(C("05", "notice"), "What does the speaker really think of the new guy?", ["Not much: being punctual is the only good thing they mention.", "He's an excellent worker in every way, always on time.", "He's always late for work."], 0, "Faint praise."),
      heard(C("05", "notice"), "What does 'Some of the slides were good' suggest?", ["Others weren't good.", "All were excellent.", "There were no slides."], 0, "some = not all."),
      heard(C("05", "notice"), "What does the speaker probably want when they mention the cold?", ["Someone to close a window or turn on the heating", "A weather report for the rest of the week", "To go outside for some fresh air"], 0, "Indirect request."),
      ch("'Are you using that charger?' Most likely the speaker…", ["wants to borrow it", "wants to buy it", "is just curious"], 0, "Pre-request."),
      ch("'Implicature' is…", ["meaning that is suggested, not said directly", "a grammar mistake in a sentence or text", "a type of regional accent"], 0, "Reading between the lines."),
    ],
    [
      ctx("A: 'Did you like my cake?' B: 'The decoration was beautiful.'", "B probably thinks…", ["the cake didn't taste great", "the cake was perfect", "there was no decoration"], 0, "Praising only one part."),
      ctx("A: 'Is Mateo coming to the party?' B: 'His car broke down this morning.'", "B means…", ["probably not", "definitely yes", "Mateo is a mechanic"], 0, "Listener connects the facts."),
      ctx("A teacher writes on a report: 'Laura attends every class.'", "This might suggest…", ["her attendance is the main positive thing", "she's the best student in the class", "she often misses classes"], 0, "What's NOT said."),
      ch("Why do people use implicature?", ["To be polite, diplomatic or efficient", "Because they don't know the words", "To confuse foreigners"], 0, "Social reasons."),
      ch("'It's getting late…' at a friend's house usually means…", ["I think I should go (or you should)", "Check the time on your phone", "Let's stay longer and talk"], 0, "Indirect hint."),
    ],
    [
      ctx("A: 'How was the film?' B: 'Well, the popcorn was nice.'", "Rewrite B's real meaning in a few words.", ["The film wasn't good.", "The film was perfect.", "B didn't see the film."], 0, "Faint praise for something irrelevant."),
      gap("'Is it just me, or is it", "in here?' (= please open a window)", ["hot", "warm", "stuffy", "cold"], "Indirect request."),
      gap("'Are you using that", "?' (= can I borrow your pen?)", ["pen"], "Pre-request."),
      dict(C("05", "dict"), ["Is it just me, or is it cold in here", "Is it just me or is it cold in here"]),
      tr("Make this request indirect, starting with the words given.", "Turn the music down.", ["Is the music a bit loud", "Is the music a little loud", "Is the music quite loud", "Is the music loud"], "Hint instead of order.", "Is the music"),
    ],
    [
      ctx("A: 'Can you lend me 20,000 pesos?' B: 'It's the end of the month…'", "What's the best interpretation?", ["B probably can't lend money right now.", "B is telling A today's date.", "B will lend the money tomorrow."], 0, "Hinting at no money."),
      ctx("A student asks a teacher: 'Was my essay OK?' The teacher says: 'Your handwriting is very neat.'", "A literal listener might think…", ["the essay was good, but it probably wasn't", "the essay was bad, and the teacher says so", "the teacher is joking with the student"], 0, "Missing the implicature."),
      ch("Which reply implies 'no' most politely?", ["'I'd love to, but I've got a lot on this week.'", "'No. I can't come, sorry about that.'", "'Never. I don't like parties.'"], 0, "Reason implies refusal."),
      ch("When can implicature cause problems?", ["Across cultures or with people who prefer directness", "Never, in any situation or culture", "Only in writing, not in speech"], 0, "Misunderstandings happen."),
      ch("A: 'Did everyone pass?' B: 'Most people did.' What does B imply?", ["Some people failed.", "Everyone passed.", "Nobody passed."], 0, "most = not all."),
    ],
    [
      ch("You don't want to go to a party. Most diplomatic?", ["'It sounds fun, but I've promised to help my mum that night.'", "'Your parties are always boring, so I'll stay home.'", "'No. I don't want to go to your party.'"], 0, "Implied refusal with a reason."),
      ch("A friend's song isn't great. Kindest honest reply?", ["'I love the guitar part! The lyrics might need some work.'", "'It's amazing! Best song ever, really!' (not true)", "'It's bad. The lyrics are terrible.'"], 0, "Specific praise + gentle hint."),
      ch("Your teacher says: 'You might want to look at question 4 again.' Best reaction?", ["Check question 4: it's probably wrong.", "Ignore it.", "Ask what's wrong with the teacher."], 0, "Understand the implicature."),
      ch("When should you be direct instead?", ["When the message is important and might be missed", "Never; indirect is always better and safer", "Always, in every situation"], 0, "Don't hint about safety or urgent problems."),
      say("Is it just me, or is it cold in here?", "Rising tone on ME, falling on HERE."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short dialogue (100 words or more) between two friends, where at least three things are meant but not said (faint praise, an indirect request, a hint, a polite refusal). After the dialogue, write 'Meaning:' and explain each implicature." },
      { universe: "screens", text: "Write a short group-chat conversation (100 words or more) with at least three implied meanings. Then write 'Meaning:' and explain each one." },
    ],
    minWords: 100,
    checks: [
      { label: "A 'Meaning:' section", pattern: "\\bmeanings?\\s*:", min: 1 },
      { label: "Explanations of implied meaning (means, implies, suggests, really wants)", pattern: "\\b(means|meant|implies|implied|suggests|suggesting|really (wants|means|thinks)|is hinting|hints)\\b", min: 3 },
    ],
    rubric: ["Each implicature is clear from the context.", "My explanations show what was meant but not said.", "The dialogue sounds natural."],
    model: "Valeria: So, what did you think of my brother's band?\nTomás: Well, the drummer was really enthusiastic.\nValeria: Hmm. Are you going to the concert on Friday?\nTomás: I've got a big exam on Saturday morning…\nValeria: Oh, OK. Is it just me, or is it really hot in here?\nTomás: Sure, I'll open the window.\n\nMeaning: When Tomás praises only the drummer's enthusiasm, he implies the band wasn't very good. When he mentions his exam, he means he won't go to the concert, without saying no directly. Valeria's question about the heat is really a request: she really wants him to open the window.",
  },
};

export const C1_COMMUNICATE: NodePractice[] = [argue, mediate, styleShift, faceSaving, implicature];
