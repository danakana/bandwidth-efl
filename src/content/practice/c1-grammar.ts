/* C1 Grammar. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/c1-${n}-${k}.mp3`;

export const C1_GRAMMAR_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "No sooner had we arrived at the stadium than the rain started. Little did we know that the match would be cancelled. Not until nine o'clock did anyone tell us. And then, through the gates came the whole team, soaking wet, to say sorry. Such was the noise that I couldn't hear myself think." },
  { file: X("01", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "Little did she know what was about to happen." },
  { file: X("02", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "The rapid expansion of online learning has transformed education. However, the closure of many local libraries and the lack of reliable internet in rural areas remain serious concerns. A recent government report calls for a significant increase in investment." },
  { file: X("02", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "The decision to close the library surprised everyone." },
  { file: X("03", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "You needn't have brought an umbrella; the forecast says it'll be sunny. Mind you, it may well change. The weather here is bound to surprise you at some point. Honestly, I could hardly believe it last week: four seasons in one day! Anyway, the bus is late again, so we might as well walk." },
  { file: X("03", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "She's bound to be nervous before the final." },
  { file: X("04", "notice"), voice: "3f6pec3wODJsjTqtcNI2", script: "It is widely believed that teenagers need more sleep than adults. The new study, which is said to be the largest of its kind, would appear to support this. Students who started school later tended to get better grades. However, there is some evidence to suggest that the effect may be smaller for older students." },
  { file: X("04", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "The painting is thought to have been stolen in 1990." },
  { file: X("05", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "Having trained for months, Ada felt ready for the marathon. Weather permitting, it would start at six. Once at the starting line, she looked around. Thousands of runners, most of them nervous, were stretching. The race over, she could hardly walk, but she was smiling." },
  { file: X("05", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "Having finished his homework, he went out." },
  { file: X("06", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Should you need any help during the exam, raise your hand. You may use a calculator, provided that it isn't a phone. Had we known about the fire alarm test, we would have warned you. Supposing it goes off again, just stay calm. But for your patience, today would have been a disaster." },
  { file: X("06", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Had I known, I would have come earlier." },
  { file: X("07", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "I did tell you the concert was sold out! Do listen next time. Strange as it may seem, I actually managed to get tickets anyway. Try as I might, I couldn't get two, though. One ticket I've got; the other we'll have to find. That I can promise you." },
  { file: X("07", "dict"), voice: "8DvnqWWA3WWXixOm7zQI", script: "Strange as it may seem, I enjoy exams." },
];

const inversion: NodePractice = {
  nodeId: "c1.full-inversion",
  explain: "At B2+ you met inversion after Never and Rarely. At C1 you control the whole family. Time structures: No sooner had I sat down than the phone rang; Hardly had we started when it rained; Not until midnight did we leave; Only after the exam did I relax. Emphasis: Little did we know…; Under no circumstances should you…; At no time did he… Degree: Such was the noise that…; So difficult was the test that… There is also full inversion of the main verb after place and direction words, common in stories: Here comes the bus; Down came the rain; Through the gates walked the team. Use it for one powerful moment, not in every sentence.",
  pattern: ["No sooner had + subject + past participle … than …", "Hardly / Scarcely had … when …", "Not until … / Only after … + auxiliary + subject: Not until nine did anyone tell us.", "Little did we know · Under no circumstances should you · At no time did he", "Such was + noun + that … · So + adjective + was + subject + that …", "Place/direction + verb + subject: Here comes the bus · Down came the rain"],
  steps: [
    [
      heard(X("01", "notice"), "What happened immediately after they arrived?", ["The rain started.", "The match began.", "The team arrived."], 0, "'No sooner had we arrived … than the rain started.'"),
      heard(X("01", "notice"), "When did someone finally tell them?", ["Not until nine o'clock", "At seven o'clock", "Nobody ever told them"], 0, "'Not until nine o'clock did anyone tell us.'"),
      heard(X("01", "notice"), "Who came through the gates?", ["The whole team", "The fans", "The referee"], 0, "'through the gates came the whole team'."),
      ch("'Little did we know' means…", ["We had no idea.", "We knew a little.", "We knew everything."], 0, "Little did + subject + know = had no idea."),
      ch("'No sooner had we arrived than…' means…", ["Immediately after we arrived…", "Long before we arrived…", "Because we arrived…"], 0, "No sooner … than = immediately after."),
    ],
    [
      ch("Why does 'Rarely do we see such talent' use 'do'?", ["A negative adverb at the start needs auxiliary + subject.", "'Do' adds a past meaning.", "It's a mistake for 'Rarely we see'."], 0, "Negative/restrictive opener → question word order."),
      ch("Which pair goes together?", ["No sooner … than", "No sooner … when", "Hardly … than"], 0, "No sooner … than; Hardly … when."),
      ctx("A story says: 'Down came the rain, and out ran the children.'", "Why is there no auxiliary here?", ["After place/direction words with verbs of movement, the main verb goes before the subject.", "It's poetry, so grammar doesn't matter.", "Because it's in the present tense."], 0, "Full inversion: Down came the rain."),
      ch("Which sounds most formal and emphatic?", ["Under no circumstances should you open this door.", "You shouldn't open this door in any situation.", "Don't open the door, OK?"], 0, "Inversion for strong official warnings."),
      ch("'Such was her talent that the coach cried.' This means…", ["Her talent was so great that the coach cried.", "She had a similar talent to the coach.", "The coach cried, so she had talent."], 0, "Such was + noun + that = so great that."),
    ],
    [
      gap("Not until I got home", "I realise I'd lost my keys.", ["did"], "Not until … + did + subject."),
      gap("No sooner had the film started", "the power went out.", ["than"], "No sooner … than."),
      tr("Rewrite starting with the word given.", "I had never seen such a beautiful sunset.", ["Never had I seen such a beautiful sunset", "Never before had I seen such a beautiful sunset"], "Never + had + I + seen.", "Never"),
      dict(X("01", "dict"), ["Little did she know what was about to happen"]),
      say("Not only did we win, but we also broke the record.", "Stress NOT ONly, WIN and REcord."),
    ],
    [
      fix(["Rarely", "we see", "such commitment."], 1, ["do we see"], "Negative adverbial at the start → auxiliary + subject."),
      fix(["Hardly had I sat down", "than", "the phone rang."], 1, ["when", "before"], "Hardly … when; No sooner … than."),
      fix(["Only after the exam", "I realised", "how much I had learnt."], 1, ["did I realise", "did I realize"], "Only after … + did + subject."),
      ch("Which is wrong?", ["Here the bus comes.", "Here comes the bus.", "Here it comes."], 0, "With a noun: Here comes the bus. With a pronoun: Here it comes."),
      ch("Which is wrong?", ["Never I have been so tired.", "Never have I been so tired.", "I have never been so tired."], 0, "Never at the start → have I."),
    ],
    [
      ch("When is inversion a good choice?", ["In a speech or story, for one dramatic moment", "In every sentence of a text message", "Never; it's old-fashioned"], 0, "Use it sparingly for impact."),
      ch("Best opening line for a persuasive speech?", ["Never before has our school faced such a challenge.", "Never before our school has faced such a challenge.", "Our school, never before, faced a challenge such."], 0, "Correct and powerful."),
      ctx("Your friend texts: 'Little did I know the pizza was cold lol'.", "The tone is…", ["playfully dramatic: formal grammar used for humour", "very formal and serious", "grammatically wrong"], 0, "Inversion can be used for comic effect."),
      ch("Best warning on an official notice?", ["Under no circumstances should the fire door be blocked.", "The fire door, don't block it.", "Hardly block the fire door."], 0, "Formal, clear, emphatic."),
      say("No sooner had we arrived than the rain started.", "Stress SOONer and RAIN; pause after arRIVED."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a dramatic story opening (80 words or more) about a day that went wrong. Use at least two inversions after a negative word (Never had…, Little did…, Rarely have…) and one time structure (No sooner … than, Hardly … when, Not until … did, Only after … did)." },
      { universe: "screens", text: "Write a dramatic recap (80 words or more) of a match, game or stream with a shocking ending. Use two negative inversions and one time structure (No sooner … than, Not until … did, Only after … did)." },
      { universe: "past", text: "Write about a famous historical moment (80 words or more) as if you were there. Use two negative inversions and one time structure (No sooner … than, Not until … did, Only after … did)." },
    ],
    minWords: 80,
    checks: [
      { label: "Two inversions after a negative word (Never had…, Little did…, Rarely have…)", pattern: "\\b(never|rarely|seldom|little|no sooner|hardly|scarcely|under no circumstances|at no time|nowhere|not only)\\s+(before\\s+)?(had|has|have|did|do|does|was|were|is|are|should|would|could|can|will|must)\\b", min: 2 },
      { label: "A time structure (No sooner … than, Hardly … when, Not until … did, Only after … did)", pattern: "\\b(no sooner\\b[^.!?]*\\bthan|(hardly|scarcely)\\b[^.!?]*\\bwhen|not until\\b[^.!?]*\\b(did|had|was|were|could|would)|only (after|when|then|once)\\b[^.!?]*\\b(did|had|was|were|could|would))\\b", min: 1 },
    ],
    rubric: ["Every inversion has the auxiliary before the subject.", "I used inversion for impact, not in every sentence.", "My story builds tension towards a clear moment."],
    model: "Never before had our town seen a storm like it. No sooner had the first drops fallen than the streets turned into rivers. Little did we know that the worst was still to come. Not until midnight did the wind finally drop, and only then did we dare to look outside. Such was the damage that school was closed for a week. It was terrifying. Rarely have I felt so small, and at no time will I ever forget the sound of that night.",
  },
};

const nominal: NodePractice = {
  nodeId: "c1.complex-noun-phrases-and-nominalisation",
  explain: "Academic and news writing packs a lot of information into noun phrases. Compare: 'Social media grew rapidly, and this worried parents' with 'The rapid growth of social media worried parents.' The second turns a verb into a noun (grow → growth) and is shorter and more objective. Common changes: decide → decision, fail → failure, reduce → reduction, increase → an increase in, important → importance, able → ability. You can add information before the noun (a two-year, government-funded project) and after it (the students taking part in the study; the decision to close the library). Be careful: too many nouns in a row make a text heavy, so balance them with clear verbs.",
  pattern: ["verb → noun: grow → growth · decide → decision · fail → failure · reduce → reduction", "the + adjective + noun + of + noun: the rapid growth of social media", "Before the noun: a two-year, government-funded research project", "After the noun: the students taking part · the decision to close the library", "an increase / a rise / a fall / a reduction + in"],
  steps: [
    [
      heard(X("02", "notice"), "What has transformed education?", ["The rapid expansion of online learning", "The closure of local libraries", "A government report"], 0, "'The rapid expansion of online learning has transformed education.'"),
      heard(X("02", "notice"), "Which is mentioned as a serious concern?", ["The lack of reliable internet in rural areas", "Too many libraries in cities", "Expensive school uniforms"], 0, "'the lack of reliable internet in rural areas'."),
      heard(X("02", "notice"), "What does the report call for?", ["A significant increase in investment", "The closure of more schools", "Less online learning"], 0, "'a significant increase in investment'."),
      ch("Which is the noun form of 'grow'?", ["growth", "growing up", "grown"], 0, "grow → growth."),
      ch("'The rapid expansion of online learning' is…", ["one long noun phrase", "a full sentence", "a question"], 0, "Head noun: expansion."),
    ],
    [
      ch("Which sentence uses nominalisation?", ["The reduction in pollution was significant.", "Pollution went down a lot.", "They reduced pollution a lot."], 0, "reduce → the reduction in."),
      ch("Why do academic texts use nominalisation?", ["It packs information concisely and sounds objective.", "It makes texts easier for young children.", "It avoids using verbs completely."], 0, "Concise and impersonal."),
      ctx("Headline: 'Rise in teen screen time sparks concern'", "The full idea is…", ["Teenagers are spending more time on screens, and people are worried.", "Teenagers are getting up earlier.", "Screens are causing fires."], 0, "Headlines are full of noun phrases."),
      ch("In 'a two-year, government-funded research project', the main noun is…", ["project", "research", "government"], 0, "Everything else describes 'project'."),
      ch("What's the risk of too much nominalisation?", ["The text becomes heavy and hard to follow.", "It becomes too informal.", "There is no risk."], 0, "Balance nouns with clear verbs."),
    ],
    [
      gap("The", "of the new stadium took three years.", ["construction", "building"], "construct → construction."),
      gap("There has been a sharp", "in the price of concert tickets.", ["increase", "rise"], "an increase / a rise in."),
      tr("Rewrite as one sentence with a noun phrase, using the word given.", "The government decided to ban phones in schools, and this surprised many students.", ["The government's decision to ban phones in schools surprised many students", "The decision of the government to ban phones in schools surprised many students"], "decide → the government's decision to…", "decision"),
      dict(X("02", "dict"), ["The decision to close the library surprised everyone"]),
      tr("Rewrite with a noun phrase and the word given.", "Students failed because they did not prepare.", ["Students failed because of a lack of preparation", "Students failed due to a lack of preparation", "Students failed because of their lack of preparation", "Students failed due to their lack of preparation"], "did not prepare → a lack of preparation.", "lack"),
    ],
    [
      fix(["The", "grow", "of the city has caused traffic problems."], 1, ["growth"], "Use the noun: growth."),
      fix(["There was a big", "reduce", "in waste last year."], 1, ["reduction"], "reduce → reduction."),
      fix(["The importance", "about", "sleep is often ignored."], 1, ["of"], "the importance of."),
      ch("Which is wrong?", ["The discuss of the topic was long.", "The discussion of the topic was long.", "Discussing the topic took a long time."], 0, "discuss → discussion."),
      ch("Which is the most natural academic sentence?", ["The failure of the plan led to its abandonment.", "The plan failed and so they stopped it, basically.", "The fail of the plan made the stop."], 0, "Correct nouns, formal tone."),
    ],
    [
      ch("Best sentence for a science report?", ["An increase in temperature led to faster evaporation.", "When it got hotter, stuff dried quicker.", "The temperature, it increased, and evaporation."], 0, "Precise and objective."),
      ch("Best for a text to a friend?", ["The bus was late, so I missed the start.", "The lateness of the bus resulted in my absence from the start.", "Bus lateness, start absence."], 0, "Don't nominalise casual messages."),
      ch("Which is clearest and most concise?", ["The closure of the park angered residents.", "The park was closed, and this fact made the residents feel angry.", "Residents, park, closure, angry."], 0, "One clean noun phrase."),
      ch("A good academic paragraph uses nominalisation…", ["in balance with clear verbs", "in every phrase possible", "never"], 0, "Balance is key."),
      say("The rapid expansion of online learning has transformed education.", "Keep the noun phrase together; pause after LEARNing."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write an academic paragraph (75 words or more) about a change in your city or school. Use at least four nominalisations (the growth of…, the construction of…, a reduction in…) and one noun with a hyphenated modifier (a city-wide plan, a two-year project)." },
      { universe: "science", text: "Write a short science-news paragraph (75 words or more) about a discovery or invention. Use four nominalisations (the development of…, an increase in…) and one hyphenated modifier." },
      { universe: "futures", text: "Write a paragraph (75 words or more) about a problem your country faces and a possible solution. Use four nominalisations and one hyphenated modifier." },
    ],
    minWords: 75,
    checks: [
      { label: "Four nominalisations (the growth of, the construction of, a reduction in…)", pattern: "\\b\\w+(tion|sion|ment|ance|ence|ity|th|ure|ness)\\s+(of|in|to|for)\\b", min: 4 },
      { label: "A hyphenated modifier (city-wide, two-year, well-known…)", pattern: "\\b\\w+-\\w+\\b", min: 1 },
    ],
    rubric: ["My noun phrases are clear, not just long.", "I balanced nouns with strong verbs.", "The paragraph sounds objective, like a report."],
    model: "Over the past five years, the rapid growth of my city has brought both benefits and problems. The construction of new apartment buildings has created jobs, but the increase in traffic has made journeys to school much longer. In addition, the reduction in green spaces has led to growing concern among families. A recent council report recommends the development of a city-wide cycling network. In my view, the success of this plan will depend on the participation of young people.",
  },
};

const modals: NodePractice = {
  nodeId: "c1.modal-nuance",
  explain: "At C1, modals carry fine shades of meaning. Probability: may well (quite likely), might just (a small chance), is bound to (certain). Difficulty: could hardly (almost impossible). Past deduction: can't have / must have + past participle. Necessity: needn't have done (you did it, but it wasn't necessary) is different from didn't need to (we don't know if you did it). No better option: might as well. Polite disagreement: I would have thought… These small words show exactly how sure, surprised or critical you are.",
  pattern: ["may well / might well + verb: quite likely (It may well rain.)", "be bound to + verb: certain (She's bound to win.)", "could hardly + verb: almost impossible (I could hardly breathe.)", "needn't have + past participle: done, but not necessary", "might as well + verb: there's no better option", "can't have / must have + past participle: past deduction · I would have thought…: polite disagreement"],
  steps: [
    [
      heard(X("03", "notice"), "Was it necessary to bring an umbrella?", ["No, but they brought one anyway.", "Yes, it's raining.", "They forgot it."], 0, "'You needn't have brought an umbrella' = you did, but it wasn't necessary."),
      heard(X("03", "notice"), "How likely is the weather to change?", ["Quite likely", "Impossible", "Certain"], 0, "'it may well change'."),
      heard(X("03", "notice"), "Why do they decide to walk?", ["The bus is late, so there's no better option.", "They love walking.", "It's sunny and warm."], 0, "'we might as well walk'."),
      ch("'She's bound to win' means…", ["She will certainly win.", "She is obliged by law to win.", "She might win."], 0, "be bound to = certain."),
      ch("'I could hardly hear you' means…", ["It was almost impossible to hear you.", "I heard you very well.", "I didn't want to hear you."], 0, "hardly = almost not."),
    ],
    [
      ch("Which shows the strongest certainty?", ["It's bound to rain.", "It may well rain.", "It might just rain."], 0, "bound to > may well > might just."),
      ch("'You needn't have cooked' vs 'You didn't need to cook'. The difference?", ["The first means you cooked anyway; the second doesn't say if you did.", "They always mean the same.", "The first is about the future."], 0, "needn't have = done unnecessarily."),
      ctx("Your teacher says: 'I would have thought you'd check your answers first.'", "She is…", ["politely criticising you", "praising you", "asking about the future"], 0, "Polite disapproval."),
      ch("'We might as well start' means…", ["There's no good reason to wait, so let's start.", "We are strongly obliged to start.", "We may start sometime in the future."], 0, "No better option."),
      ch("'He can't have seen us' expresses…", ["a confident deduction that he didn't see us", "permission", "ability in the past"], 0, "Negative past deduction."),
    ],
    [
      gap("Don't worry; she's", "to call you back. She always does.", ["bound"], "be bound to = certain."),
      gap("You", "have bought me a present, but thank you so much!", ["needn't", "need not"], "needn't have + past participle."),
      tr("Rewrite using the word given.", "It's quite likely that the match will be cancelled.", ["The match may well be cancelled", "The match might well be cancelled", "The match could well be cancelled"], "may well = quite likely.", "well"),
      dict(X("03", "dict"), ["She's bound to be nervous before the final", "She is bound to be nervous before the final"]),
      say("We might as well walk; the bus is late again.", "Stress WALK and LATE."),
    ],
    [
      fix(["You", "needn't to bring", "anything to the party."], 1, ["needn't bring", "don't need to bring", "need not bring"], "needn't + base form, no 'to'."),
      fix(["He's bound", "winning", "the race; he's so fast."], 1, ["to win"], "be bound to + base form."),
      fix(["She", "mustn't have", "heard the news yet; she seems so calm."], 1, ["can't have", "cannot have", "couldn't have"], "Negative past deduction: can't have / couldn't have."),
      ch("Which is wrong?", ["I could hardly to sleep.", "I could hardly sleep.", "I could barely sleep."], 0, "could hardly + base form."),
      ch("Spanish 'Es muy posible que llueva' is best translated as…", ["It may well rain.", "It must rain.", "It can rain well."], 0, "may well = quite likely."),
    ],
    [
      ch("You want to disagree politely with a classmate's plan. Best?", ["I would have thought we'd need more time for that.", "That's a terrible plan.", "You must be wrong."], 0, "Polite and indirect."),
      ch("Best way to predict in a balanced essay?", ["Prices may well rise, although this is not certain.", "Prices will 100% go up.", "Prices are bound to maybe rise."], 0, "Careful, honest prediction."),
      ch("Your friend cleaned the whole house before your visit. Kindest reply?", ["Oh, you needn't have gone to all that trouble!", "You didn't need to, so you didn't.", "You mustn't clean."], 0, "Grateful and natural."),
      ch("Which is least appropriate in a scientific claim?", ["This drug is bound to cure everyone.", "This drug may well reduce symptoms.", "The results suggest the drug could help."], 0, "Too certain for science."),
      say("You needn't have brought an umbrella.", "Stress NEEDn't and UMbrella."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a message (80 words or more) to a friend after an important day (an exam, a match, a presentation). Use at least four of: may well, bound to, could hardly, needn't have, might as well, would have thought, can't have, must have." },
      { universe: "futures", text: "Write a short prediction (80 words or more) about life in 2050. Use at least four of: may well, bound to, could hardly, might as well, would have thought, can't have, must have." },
    ],
    minWords: 80,
    checks: [
      { label: "Four nuanced modals (may well, bound to, could hardly, needn't have, might as well…)", pattern: "\\b(may well|might well|could well|bound to|could hardly|can hardly|needn't have|need not have|might as well|may as well|would have thought|can't have|cannot have|couldn't have|must have)\\b", min: 4 },
      { label: "A past modal (needn't have, can't have, must have, might have…)", pattern: "\\b(needn't have|need not have|can't have|cannot have|couldn't have|must have|might have|may have)\\b", min: 1 },
    ],
    rubric: ["Each modal shows exactly how sure I am.", "Past modals use have + past participle.", "My message sounds natural and friendly."],
    model: "Hi Sofi! You needn't have worried about the presentation yesterday; everyone said it was great. The teacher can't have noticed that you skipped a slide, because she gave you top marks. Next week's exam may well be harder, but you're bound to do well if you keep revising like this. Honestly, I could hardly believe how calm you looked! Since the library closes early on Friday, we might as well study at my house. I would have thought you'd want a break first, though!",
  },
};

const hedging: NodePractice = {
  nodeId: "c1.distancing-and-hedging-structures",
  explain: "Careful writers don't claim more than the evidence shows. They distance themselves from a claim with reporting structures: It is widely believed that…; The singer is said to be planning a tour; The castle is thought to have been built in 1200 (to have + past participle for the past). They soften claims with hedges: It would appear that…; There is some evidence to suggest that…; seem / appear to; tend to; arguably; to some extent. Hedging is essential in essays, reports and the news, but don't overdo it: 'It could perhaps possibly be argued…' says nothing.",
  pattern: ["It is said / believed / thought that + clause", "Subject + is said / believed / thought + to + verb", "… to have + past participle for an earlier time: is thought to have been built", "It would appear / seem that… · There is some evidence to suggest that…", "Softeners: arguably, to some extent, tend to, in some cases"],
  steps: [
    [
      heard(X("04", "notice"), "What is widely believed?", ["Teenagers need more sleep than adults.", "Adults need more sleep than teenagers.", "Grades don't depend on sleep."], 0, "'It is widely believed that teenagers need more sleep…'"),
      heard(X("04", "notice"), "How is the study described?", ["Said to be the largest of its kind", "Very old and unreliable", "Completely wrong"], 0, "'which is said to be the largest of its kind'."),
      heard(X("04", "notice"), "What does some evidence suggest?", ["The effect may be smaller for older students.", "There is no effect at all.", "Older students need less school."], 0, "'there is some evidence to suggest…'"),
      ch("'It would appear that…' sounds…", ["careful and objective", "rude", "completely certain"], 0, "A classic academic hedge."),
      ch("'He is said to be very rich' means…", ["People say he is very rich.", "He says he's rich.", "He was rich in the past."], 0, "is said to = people say."),
    ],
    [
      ch("Why hedge in academic writing?", ["To avoid claiming more than the evidence shows", "To make the text longer", "Because you don't know the grammar"], 0, "Accuracy and honesty."),
      ch("Which is most cautious?", ["There is some evidence to suggest that sugar affects mood.", "Sugar affects mood.", "Sugar definitely destroys your mood."], 0, "Hedged claim."),
      ctx("News: 'The suspect is believed to have left the country.'", "This means…", ["People think he left, but it isn't confirmed.", "He definitely left.", "He will leave soon."], 0, "Distancing: not confirmed."),
      ch("In 'is thought to have been stolen', 'to have been' refers to…", ["an earlier time than the reporting", "the future", "right now"], 0, "Perfect infinitive = earlier."),
      ch("Which word is a hedge?", ["arguably", "definitely", "obviously"], 0, "arguably softens a claim."),
    ],
    [
      gap("It is widely", "that music helps concentration.", ["believed", "thought", "accepted", "assumed"], "It is widely believed that…"),
      gap("The castle is said", "been built in the 12th century.", ["to have"], "to have + past participle."),
      tr("Rewrite starting with the subject, using the word given.", "People think that the singer is planning a new album.", ["The singer is thought to be planning a new album"], "is thought to be + -ing.", "thought"),
      dict(X("04", "dict"), ["The painting is thought to have been stolen in 1990", "The painting is thought to have been stolen in nineteen ninety"]),
      tr("Rewrite using the word given.", "It seems that the results are wrong.", ["The results appear to be wrong", "It would appear that the results are wrong", "It appears that the results are wrong"], "appear to / it would appear that.", "appear"),
    ],
    [
      fix(["It", "is believing", "that the city was founded by sailors."], 1, ["is believed"], "Passive: It is believed that…"),
      fix(["The bridge is thought", "to be built", "in 1850."], 1, ["to have been built"], "Past event: to have been + past participle."),
      fix(["There is some evidence", "to suggesting", "that the drug works."], 1, ["to suggest"], "evidence to suggest."),
      ch("Which is wrong?", ["It is said him to be rich.", "He is said to be rich.", "It is said that he is rich."], 0, "It is said that… or He is said to…"),
      ch("Which claim is over-hedged (too weak to be useful)?", ["It could perhaps possibly be argued that it might maybe help.", "It could be argued that it helps.", "There is evidence that it helps."], 0, "One hedge is enough."),
    ],
    [
      ch("Best sentence for a history essay?", ["The king is believed to have died in battle.", "The king 100% died in battle.", "Everyone knows the king died in battle, obviously."], 0, "Careful, academic."),
      ch("Best for telling a friend some gossip?", ["Apparently, Juan's moving to Spain.", "It is widely believed that Juan is moving to Spain.", "There is some evidence to suggest Juan relocates."], 0, "Casual hedge: apparently."),
      ch("When should you NOT hedge?", ["When something is a clear, proven fact", "In science writing", "When presenting a new theory"], 0, "Water boils at 100°C; no hedge needed."),
      ch("Which conclusion sounds most academic?", ["These findings would appear to support the theory, at least to some extent.", "So yeah, the theory's right.", "The theory is definitely, totally correct."], 0, "Balanced and careful."),
      say("It is widely believed that teenagers need more sleep than adults.", "Stress WIDEly beLIEVED and SLEEP."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short report (75 words or more) about a popular claim (for example, that video games are good for the brain). Use two reporting structures (It is believed that…, X is said to…) and two hedges (would appear, some evidence, tend to, arguably, to some extent)." },
      { universe: "science", text: "Write a short report (75 words or more) about a scientific claim you've heard (sleep, diet, phones, climate). Use two reporting structures and two hedges." },
      { universe: "past", text: "Write a short report (75 words or more) about a historical mystery. Use two reporting structures (is believed to have…, It is thought that…) and two hedges." },
    ],
    minWords: 75,
    checks: [
      { label: "Two reporting structures (It is believed that…, X is said to…)", pattern: "\\b((it is|it's) (widely |generally |often |commonly |increasingly )?(said|believed|thought|claimed|reported|argued|assumed|accepted|suggested) that|(is|are|was|were) (widely |generally |often |commonly |increasingly )?(said|believed|thought|claimed|reported|considered|known) to)\\b", min: 2 },
      { label: "Two hedges (would appear, seem/appear to, some evidence, tend to, arguably, to some extent)", pattern: "\\b(would appear|would seem|seems? to|appears? to|some evidence|arguably|to some extent|tends? to|it could be argued)\\b", min: 2 },
    ],
    rubric: ["My claims match the strength of the evidence.", "I didn't hedge so much that I said nothing.", "The report sounds objective."],
    model: "Video games are often criticised, but it is increasingly believed that they can benefit the brain. Action games are said to improve reaction times, and players appear to make faster decisions under pressure. There is some evidence to suggest that puzzle games help memory, although the effect would appear to be small. Gamers who play for many hours a day tend to sleep less, however. Overall, it could be argued that moderate gaming is, to some extent, healthy.",
  },
};

const clauses: NodePractice = {
  nodeId: "c1.participle-verbless-and-absolute-clauses",
  explain: "Good writers reduce clauses to avoid repetition. Participle clauses: Having finished the exam, she left (= after she had finished); Built in 1600, the church… (= which was built); Not knowing what to do, I called my mum (= because I didn't know). Verbless clauses drop the subject and 'be': Once inside, we took off our coats; Although tired, he kept running; If in doubt, ask. Absolute clauses have their own subject: The work done, they went home; Weather permitting, we'll eat outside; Her heart pounding, she opened the letter. Watch out: the hidden subject must match the main subject. 'Walking home, the rain started' says the rain was walking!",
  pattern: ["-ing clause: Walking home, I saw… (= while I was walking)", "Having + past participle: Having finished, she left.", "Past participle (passive): Built in 1600, the church…", "Verbless: Once inside, … · Although tired, … · If in doubt, …", "Absolute (own subject): The work done, … · Weather permitting, … · Her heart pounding, …"],
  steps: [
    [
      heard(X("05", "notice"), "Why did Ada feel ready?", ["She had trained for months.", "The weather was good.", "She was nervous."], 0, "'Having trained for months…'"),
      heard(X("05", "notice"), "When would the race start?", ["At six, if the weather allowed", "At six, whatever the weather", "At noon"], 0, "'Weather permitting, it would start at six.'"),
      heard(X("05", "notice"), "How did she feel after the race?", ["Exhausted but happy", "Angry and disappointed", "Ready to run again"], 0, "'she could hardly walk, but she was smiling'."),
      ch("'Having finished the test, she left' means…", ["After she had finished the test, she left.", "While she was finishing, she left.", "She left without finishing."], 0, "Having + past participle = after."),
      ch("'Weather permitting' means…", ["if the weather is good enough", "because of the bad weather", "whatever the weather"], 0, "An absolute clause."),
    ],
    [
      ch("In 'Built in 1600, the church is very old', 'built' is…", ["a passive participle (= which was built)", "an active verb", "a noun"], 0, "Past participle = passive meaning."),
      ch("'Although tired, he kept running.' What has been left out?", ["he was (Although he was tired)", "because", "Nothing; it's wrong."], 0, "Verbless clause."),
      ctx("A sign says: 'If in doubt, ask a member of staff.'", "This means…", ["If you are not sure, ask.", "Ask a member of staff who looks doubtful.", "Never ask."], 0, "If in doubt = if you are in doubt."),
      ch("'The meeting over, everyone went home.' 'The meeting over' means…", ["When the meeting was over", "Before the meeting", "Although there was a meeting"], 0, "Absolute clause with its own subject."),
      ch("What's wrong with 'Walking home, the rain started'?", ["It says the rain was walking home.", "Nothing at all.", "It needs 'did'."], 0, "Dangling participle."),
    ],
    [
      gap("Not", "what to say, I just smiled.", ["knowing"], "Not + -ing = because I didn't know."),
      gap("Once", ", we took off our wet shoes.", ["inside", "indoors", "home", "there"], "Verbless: Once inside = once we were inside."),
      tr("Rewrite with a participle clause, starting with the word given.", "After she had finished her homework, she went out.", ["Having finished her homework, she went out"], "Having + past participle.", "Having"),
      dict(X("05", "dict"), ["Having finished his homework, he went out"]),
      tr("Rewrite starting with the word given.", "The museum, which was designed by a famous architect, attracts millions of visitors.", ["Designed by a famous architect, the museum attracts millions of visitors"], "Passive participle at the start.", "Designed"),
    ],
    [
      fix(["Having", "finish", "the race, she collapsed."], 1, ["finished"], "Having + past participle."),
      fix(["Building", "in 1990,", "the stadium now needs repairs."], 0, ["Built"], "Passive meaning (the stadium was built): past participle."),
      fix(["Although", "tiring,", "she finished the marathon."], 1, ["tired,"], "She was tired (a feeling): Although tired."),
      ch("Which has a dangling participle (a mistake)?", ["Looking out of the window, the mountains were beautiful.", "Looking out of the window, I saw the mountains.", "Looking out of the window, she noticed the snow."], 0, "The mountains weren't looking!"),
      ch("Which is correct?", ["Weather permitting, we'll eat outside.", "Weather permits, we'll eat outside.", "Weather permitted, we'll eat outside."], 0, "Fixed absolute: weather permitting."),
    ],
    [
      ch("Best opening for a story?", ["Her heart pounding, Ana opened the envelope.", "Ana's heart was pounding and she opened the envelope and she was nervous.", "Ana opened. Envelope. Heart."], 0, "Concise and vivid."),
      ch("Best for a formal notice?", ["If in doubt, please contact reception.", "If you got doubts and stuff, call us.", "In doubt contacting reception."], 0, "Short and correct."),
      ch("When are these clauses most useful?", ["To vary sentences and avoid repetition in writing", "In every sentence of a chat", "Only in poems"], 0, "Variety in writing."),
      ch("Which sentence is correct and clear?", ["Having checked the data, the researchers published their results.", "Having checked the data, the results were published.", "The data checked, published the results."], 0, "The researchers checked the data."),
      say("The race over, she could hardly walk, but she was smiling.", "Pause after OVer; stress WALK and SMILing."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a story paragraph (75 words or more) about an exciting event (a concert, a race, a trip). Use a participle clause (Having…, -ing…), a verbless clause (Once inside…, Although tired…) and an absolute clause (The concert over…, Her heart racing…, Weather permitting…)." },
      { universe: "arts", text: "Write a story paragraph (75 words or more) about the night of a big performance. Use a participle clause, a verbless clause and an absolute clause." },
    ],
    minWords: 75,
    checks: [
      { label: "A participle clause at the start of a sentence (Having saved…, Walking home…, Not knowing…)", pattern: "(^|[.!?]\\s+)(having \\w+|not \\w+ing|\\w+ing)\\b[^.!?,]*,", min: 1 },
      { label: "A verbless clause (Once inside, Although exhausted, If in doubt…)", pattern: "\\b(once|although|though|while|when|if) (inside|outside|home|there|tired|exhausted|nervous|ready|possible|necessary|in doubt|alone|done|young|afraid|unsure)\\b", min: 1 },
      { label: "An absolute clause (The concert over, Her heart racing, Weather permitting…)", pattern: "\\b(weather permitting|time permitting|(the|his|her|their|my|our) \\w+ (done|over|finished|gone|closed|packed|ready|racing|pounding|shaking|full of \\w+))\\b", min: 1 },
    ],
    rubric: ["The hidden subject of each clause matches the main subject.", "I used commas after the opening clauses.", "My sentences vary in length and rhythm."],
    model: "Having saved for months, Camila finally bought tickets to see her favourite band. Once inside the stadium, she pushed her way to the front. Although exhausted after the long queue, she sang every word. Her heart racing, she watched the lead singer walk towards her side of the stage. The concert over, she waited outside for an hour, hoping for a photo. Weather permitting, she decided, she would come back next year and do it all again.",
  },
};

const conditionals: NodePractice = {
  nodeId: "c1.advanced-conditionals-and-alternatives",
  explain: "Formal English can drop 'if' and invert: Had I known (= If I had known); Were it not for your help (= If it weren't for); Should you need anything (= If you happen to need). There are also many alternatives to 'if': provided (that), as long as, on condition that (strict conditions); supposing / imagine (hypothetical situations); unless (= if not); otherwise (= if not, after a statement); but for + noun (= if it hadn't been for). Mixed conditionals connect different times: If I had studied medicine, I would be a doctor now (past cause, present result).",
  pattern: ["Had + subject + past participle: Had I known, I would have come.", "Were it not for + noun / Were + subject + to + verb", "Should + subject + base verb: Should you need help, call me.", "provided (that) / as long as / on condition that = only if", "Supposing… · But for + noun · …; otherwise, …", "Mixed: If + past perfect, would + verb (now)"],
  steps: [
    [
      heard(X("06", "notice"), "What should you do if you need help?", ["Raise your hand", "Use your phone", "Leave the room"], 0, "'Should you need any help… raise your hand.'"),
      heard(X("06", "notice"), "When can you use a calculator?", ["Only if it isn't a phone", "Never", "Always"], 0, "'provided that it isn't a phone'."),
      heard(X("06", "notice"), "Why didn't they warn the students?", ["They didn't know about the alarm test.", "They forgot.", "The alarm was broken."], 0, "'Had we known… we would have warned you.'"),
      ch("'Had I known' means…", ["If I had known", "I had known", "Because I knew"], 0, "Inverted third conditional."),
      ch("'But for your help, we would have failed.' Meaning?", ["If you hadn't helped, we would have failed.", "We failed although you helped.", "You helped but we failed anyway."], 0, "but for = if it hadn't been for."),
    ],
    [
      ch("Which is most formal?", ["Should you require assistance, please contact us.", "If you need help, call us.", "Need help? Call us!"], 0, "Should + inversion = formal."),
      ch("'You can go, provided that you finish your homework.' This sets…", ["a strict condition", "a reason", "a contrast"], 0, "provided that = only if."),
      ctx("Your coach says: 'Train harder; otherwise, you won't make the team.'", "'Otherwise' means…", ["if you don't", "in a different way", "besides"], 0, "otherwise = if not."),
      ch("'If I had studied medicine, I would be a doctor now.' This mixes…", ["a past condition with a present result", "two future ideas", "two present ideas"], 0, "Mixed conditional."),
      ch("'Supposing you won the lottery, what would you do?' 'Supposing' introduces…", ["an imaginary situation", "a proven fact", "a strict rule"], 0, "supposing = imagine."),
    ],
    [
      gap("Were it not", "the scholarship, I couldn't study abroad.", ["for"], "Were it not for + noun."),
      gap("You can borrow my bike as", "as you bring it back tonight.", ["long"], "as long as = only if."),
      tr("Rewrite without 'if', starting with the word given.", "If I had known about the party, I would have gone.", ["Had I known about the party, I would have gone"], "Had + subject + past participle.", "Had"),
      dict(X("06", "dict"), ["Had I known, I would have come earlier"]),
      tr("Rewrite without 'if', starting with the word given.", "If you need anything, please call reception.", ["Should you need anything, please call reception"], "Should + subject + base form.", "Should"),
    ],
    [
      fix(["Had I", "know", "the answer, I would have told you."], 1, ["known"], "Had + past participle."),
      fix(["If I", "would have", "studied harder, I would have passed."], 1, ["had"], "No 'would' in the if-clause: If I had studied."),
      fix(["Should you", "needed", "help, call me."], 1, ["need"], "Should + base form."),
      ch("Which is wrong?", ["Unless you don't hurry, you'll miss the bus.", "Unless you hurry, you'll miss the bus.", "If you don't hurry, you'll miss the bus."], 0, "unless already means 'if not'."),
      ch("Which is wrong?", ["If I would take the job, I live in Bogotá now.", "If I had taken the job, I would live in Bogotá now.", "If I took the job, I'd live in Bogotá."], 0, "No 'would' after if; the result needs 'would'."),
    ],
    [
      ch("Best closing line for a formal email?", ["Should you have any questions, please do not hesitate to contact me.", "If you got questions, hit me up.", "Had you questions, contact."], 0, "Formal and correct."),
      ch("Best for a casual text?", ["If you need anything, just text me.", "Should you require anything, kindly inform me.", "Were you to need anything, notify me."], 0, "Keep chat simple."),
      ch("Which sentence thanks someone most powerfully?", ["But for your support, I would never have finished.", "You supported me, I finished.", "Supposing your support, I finished."], 0, "but for = without."),
      ch("When does a mixed conditional make sense?", ["When a past event affects the present", "When both events are in the future", "Never in English"], 0, "Past cause → present result."),
      say("Should you need any help, raise your hand.", "Stress NEED and HAND."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a formal notice or email (80 words or more) about a school trip or event. Use two inverted conditionals (Had…, Were…, Should…) and two alternatives to 'if' (provided that, as long as, unless, otherwise, supposing, but for)." },
      { universe: "past", text: "Write a short reflection (80 words or more) on a historical turning point. Use two inverted conditionals (Had…, Were it not for…) and two alternatives to 'if' (but for, otherwise, supposing, unless)." },
    ],
    minWords: 80,
    checks: [
      { label: "Two inverted conditionals (Had we…, Were you…, Should the…)", pattern: "(^|[.!?,;]\\s*)(had|were|should) (i|you|we|they|he|she|it|the \\w+|students|anyone|participants)\\b", min: 2 },
      { label: "Two alternatives to 'if' (provided that, as long as, unless, otherwise, supposing, but for)", pattern: "\\b(provided( that)?|providing( that)?|as long as|on condition that|unless|otherwise|supposing|but for)\\b", min: 2 },
    ],
    rubric: ["Inverted conditionals have no 'if'.", "Each alternative to 'if' fits the meaning.", "The tone is formal and clear."],
    model: "Dear students, The school trip to the coffee region will take place on Friday, provided that the weather is good. Should the trip be cancelled, you will receive a message by 7 a.m. You may bring your phone, as long as it stays in your bag during the farm tour. Had we received more permission forms, we could have booked a second bus, so please return yours by Wednesday; otherwise, you will not be able to join. Were you to have any questions, please contact Ms Ríos.",
  },
};

const emphasis: NodePractice = {
  nodeId: "c1.emphasis-with-auxiliaries-and-fronting",
  explain: "English has several ways to add emphasis without shouting. Emphatic do / does / did (stressed in speech) contradicts or insists: I DID tell you! She DOES like you. With imperatives it sounds warm: Do come in. Fronting moves something to the front: That I can promise you; Strange as it may seem, I enjoy exams (= although it may seem strange); Tired though she was, she kept going; Try as I might, I couldn't open it (= although I tried hard). Intensifiers add force: no evidence whatsoever, not at all, the very best. Use them where they matter most.",
  pattern: ["do / does / did + base verb (stressed): I DID tell you!", "Do + imperative (warm, polite): Do sit down.", "Adjective + as / though + subject + verb: Strange as it may seem, …", "Try as I might, … (= although I tried hard)", "Fronted object: That I will never forget. · Intensifiers: whatsoever, at all, the very"],
  steps: [
    [
      heard(X("07", "notice"), "What does the speaker insist they said?", ["That the concert was sold out", "That the concert was cancelled", "That tickets were cheap"], 0, "'I did tell you the concert was sold out!'"),
      heard(X("07", "notice"), "How many tickets did the speaker get?", ["One", "Two", "None"], 0, "'One ticket I've got; the other we'll have to find.'"),
      heard(X("07", "notice"), "'Try as I might' tells us the speaker…", ["tried hard but couldn't get two tickets", "didn't try at all", "got two tickets easily"], 0, "Try as I might = although I tried hard."),
      ch("'I DID study!' The 'did' shows…", ["strong emphasis, contradicting someone", "a question", "the future"], 0, "Emphatic did."),
      ch("'Strange as it may seem, I love Mondays' means…", ["Although it may seem strange, I love Mondays.", "Because it's strange, I love Mondays.", "Mondays seem strange to me."], 0, "Adjective + as = although."),
    ],
    [
      ch("'Do sit down' sounds…", ["warm and polite", "rude", "like a question"], 0, "Emphatic do in invitations."),
      ch("Why front 'That I will never forget'?", ["To give strong emphasis to 'that'", "Because it's a question", "It's a spelling mistake"], 0, "Fronting for emphasis."),
      ctx("Your mum says: 'You never clean your room!'", "Best emphatic reply?", ["I DO clean it! I cleaned it yesterday.", "I clean it.", "I am cleaning it never."], 0, "Emphatic do contradicts."),
      ch("'Tired though she was, she kept going.' 'Though' here means…", ["although", "because", "so"], 0, "Adjective + though + clause."),
      ch("Which adds the strongest emphasis?", ["There's no evidence whatsoever.", "There's some evidence.", "There's maybe no evidence."], 0, "whatsoever intensifies a negative."),
    ],
    [
      gap("I", "lock the door! I remember doing it.", ["did"], "Emphatic did + base form."),
      gap("Strange as it", "seem, I prefer winter.", ["may", "might"], "Strange as it may seem."),
      tr("Rewrite using the words given.", "Although I tried very hard, I couldn't open the jar.", ["Try as I might, I couldn't open the jar"], "Try as I might = although I tried hard.", "Try as"),
      dict(X("07", "dict"), ["Strange as it may seem, I enjoy exams"]),
      say("I did tell you the concert was sold out!", "Stress DID strongly."),
    ],
    [
      fix(["I", "did told", "you the truth."], 1, ["did tell"], "Emphatic did + base form."),
      fix(["Strange", "like", "it may seem, I enjoy maths."], 1, ["as", "though"], "Strange as / though it may seem."),
      fix(["She", "does likes", "chocolate, I promise."], 1, ["does like"], "does + base form."),
      ch("Which is wrong?", ["Try as I tried, I failed.", "Try as I might, I failed.", "Although I tried hard, I failed."], 0, "Fixed phrase: Try as I might."),
      ch("Which is wrong?", ["Do to come in!", "Do come in!", "Please come in!"], 0, "Do + base form, no 'to'."),
    ],
    [
      ch("A friend says you forgot her birthday, but you sent a card. Best reply?", ["But I DID send you a card! Didn't it arrive?", "I sent card.", "I do sent you a card."], 0, "Emphatic did, correct form."),
      ch("Best opening for a reflective essay?", ["Strange as it may seem, failure taught me more than success.", "Failure, it was teaching me, strangely.", "I failed and it was weird."], 0, "Elegant fronting."),
      ch("When does emphatic 'do' sound bad?", ["When you overuse it and sound like you're always arguing", "Never", "In polite invitations"], 0, "Use it where it matters."),
      ch("Which sounds most welcoming to a guest?", ["Do make yourself at home.", "Make yourself at home, now.", "You do make home."], 0, "Warm and polite."),
      say("Strange as it may seem, I actually managed to get tickets.", "Pause after SEEM; stress acTUally."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short speech (80 words or more) defending something you like that others find boring or strange. Use emphatic do/does/did, an 'adjective + as/though' clause (Strange as it may seem…, Try as I might…) and an intensifier (whatsoever, at all, the very)." },
      { universe: "arts", text: "Write a short speech (80 words or more) defending an unpopular film, song or artist. Use emphatic do/does/did, an 'adjective + as/though' clause and an intensifier (whatsoever, at all, the very)." },
    ],
    minWords: 80,
    checks: [
      { label: "Emphatic do / does / did (I do understand, It does help…)", pattern: "\\b((i|you|we|they|he|she|it|people|this|that) (do|does|did) (?!not\\b)[a-z]+|do (come|sit|try|listen|join|take|have|make|give))\\b", min: 1 },
      { label: "An 'adjective + as / though' clause (Strange as it may seem, Try as I might…)", pattern: "\\b[a-z]+ (as|though) (it|i|she|he|we|they|you|this) (may|might|is|was|am|are|were|seems?|sounds?)\\b", min: 1 },
      { label: "An intensifier (whatsoever, at all, the very)", pattern: "\\b(whatsoever|at all|the very)\\b", min: 1 },
    ],
    rubric: ["I used emphasis only where it really matters.", "Emphatic do is followed by the base form.", "My speech is persuasive and personal."],
    model: "Many of my friends think classical music is boring, but I do understand why they feel that way. Strange as it may seem, though, I listen to Beethoven every day while I study. It does help me concentrate, and it has no lyrics whatsoever to distract me. Try as I might, I can't focus with pop music in my ears. Do give it a chance before you judge it. That, at least, I ask of you, and old-fashioned though it may sound, you might just love it.",
  },
};

export const C1_GRAMMAR: NodePractice[] = [inversion, nominal, modals, hedging, clauses, conditionals, emphasis];
