/* B2 Grammar: six Bloom steps per skill. Written for Bandwidth EFL; for teacher review. */
import type { ChoiceItem, FixItem, Item, NodePractice, OrderItem, SayItem, TransformItem, TypeItem } from "./types";

const ch = (prompt: string, options: string[], answer: number, why: string, o: { context?: string; audio?: string } = {}): ChoiceItem =>
  ({ kind: "choice", prompt, options, answer, why, ...o });
const heard = (audio: string, prompt: string, options: string[], answer: number, why: string) => ch(prompt, options, answer, why, { audio });
const gap = (before: string, after: string, accept: string[], why: string, hint?: string): TypeItem =>
  ({ kind: "type", prompt: "Complete the sentence.", before, after, accept, why, hint });
const dict = (audio: string, accept: string[], why = "Listen for the full verb forms and contractions."): TypeItem =>
  ({ kind: "type", prompt: "Listen and type exactly what you hear.", audio, accept, why });
const tr = (prompt: string, source: string, accept: string[], why: string, keyword?: string): TransformItem =>
  ({ kind: "transform", prompt, source, accept, why, keyword });
const ord = (answer: string, why: string, prompt = "Put the words in order."): OrderItem =>
  ({ kind: "order", prompt, words: answer.split(" "), answer, why });
const fix = (parts: string[], wrong: number, accept: string[], why: string): FixItem =>
  ({ kind: "fix", prompt: "Tap the mistake, then type the correction.", parts, wrong, accept, why });
const say = (target: string, why: string, prompt = "Say this aloud, naturally."): SayItem => ({ kind: "say", prompt, target, why });

const A = (n: string, k: "notice" | "dict") => `p/b2g-${n}-${k}.mp3`;

/** Listening clips for the B2 Grammar tree, generated with ElevenLabs. */
export const B2_GRAMMAR_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: A("01", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "If I had taken that job in Medellín, I'd be living there now. But honestly, if I were more organised, I would have planned the move better. So I stayed, and I'm happy." },
  { file: A("01", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "If I'd listened to my coach, I'd be on the team now." },
  { file: A("02", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "I wish I had more free time. Last week I didn't go to my cousin's birthday because of exams, and I really wish I'd gone. And my brother keeps taking my charger. I wish he'd ask first!" },
  { file: A("02", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "If only I'd brought my headphones." },
  { file: A("03", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "Juan isn't answering. He must have left his phone at home. Or he might have gone to practice. He can't have forgotten our plan, though. We talked about it this morning. Honestly, I should have reminded him." },
  { file: A("03", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "She might have missed the bus." },
  { file: A("04", "notice"), voice: "3f6pec3wODJsjTqtcNI2", script: "The new phone is expected to go on sale next month. It is believed that the company sold more than two million units of the previous model. The CEO is said to have tested the camera herself." },
  { file: A("04", "dict"), voice: "8DvnqWWA3WWXixOm7zQI", script: "The missing painting is thought to be in Paris." },
  { file: A("05", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Having finished my shift at the café, I walked home. Feeling exhausted, I didn't notice the rain. Built in the 1950s, my building has no lift, so I climbed six floors." },
  { file: A("05", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Feeling hungry, we stopped at a bakery." },
  { file: A("06", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "It wasn't the plot that I loved about the series. What I really loved was the soundtrack. And the thing that surprised me most was the ending." },
  { file: A("06", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "What surprised me was how quickly he learned." },
  { file: A("07", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "The teacher I spoke to was really helpful. She showed me a website on which you can practise for the exam, and she introduced me to a student with whom I now study every week." },
  { file: A("07", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "The company for which she works is based in Medellín." },
  { file: A("08", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "I had been waiting at the stop for forty minutes when the bus finally arrived. It was pouring with rain and I was freezing. Then I realised I had left my wallet at home." },
  { file: A("08", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "By the time I got home, everyone had gone to bed." },
];

const mixed: NodePractice = {
  nodeId: "b2.mixed-conditionals",
  explain: "Mixed conditionals connect two different times. A past condition with a present result: If + past perfect, would + verb (If I had studied, I would be at university now). A present or general condition with a past result: If + past simple, would have + past participle (If I were braver, I would have spoken up).",
  pattern: ["If I had studied (past) → I would be at university (now)", "If I were braver (in general) → I would have spoken up (then)"],
  steps: [
    [
      heard(A("01", "notice"), "Is the speaker living in Medellín now?", ["Yes", "No", "We don't know"], 1, "'If I had taken that job, I'd be living there now' means they didn't take it, so they aren't there now."),
      heard(A("01", "notice"), "Why didn't the speaker plan the move well?", ["They aren't very organised", "They were too busy", "The job was cancelled"], 0, "'If I were more organised' describes a general fact about them now: they aren't organised."),
      ch("Which sentence is a mixed conditional (past condition, present result)?", ["If I had slept, I would have passed.", "If I had slept, I wouldn't be so tired now.", "If I sleep, I will feel better."], 1, "The condition is past (had slept) and the result is now (wouldn't be … now)."),
      ch("In 'If she hadn't missed the bus, she'd be here now', which part is about the past?", ["she hadn't missed the bus", "she'd be here now", "both parts"], 0, "Past perfect (hadn't missed) points to the past. 'Would be … now' is the present result."),
      ch("'If he spoke English, he would have understood the film.' The condition is about…", ["a general fact about him", "one moment in the past", "the future"], 0, "'If he spoke' is a general, present fact: he doesn't speak English. The result is past."),
    ],
    [
      ch("What's true?", ["I saved money and bought a phone.", "I didn't save money, so I can't buy a phone now.", "I will save money."], 1, "Past perfect = it didn't happen. 'Could buy … now' = present result.", { context: "If I had saved my money, I could buy a new phone now." }),
      ch("What's true?", ["She is shy, so she didn't ask him.", "She asked him out.", "She was shy only that day."], 0, "'If she weren't so shy' = she is shy in general. 'Would have asked' = she didn't, in the past.", { context: "If she weren't so shy, she would have asked him out." }),
      ch("Which ending is right? 'If I hadn't stayed up gaming all night…'", ["…I would feel fresh now.", "…I would have felt fresh now.", "…I will feel fresh now."], 0, "'Now' needs would + verb, the present result."),
      ch("Which beginning is right? '…, she would have won the match yesterday.'", ["If she is taller", "If she were taller", "If she will be taller"], 1, "A general fact (she isn't tall) with a past result: If + past simple, would have + participle."),
      ch("Why is 'If I would have known, I would tell you' wrong?", ["'Would' can't go in the if-clause.", "'Tell' should be 'told'.", "Nothing is wrong."], 0, "Spanish speakers often say 'si hubiera sabido' → 'if I would have known'. In English: If I had known."),
    ],
    [
      gap("If I", "(not lose) my phone, I would have your number now.", ["hadn't lost", "had not lost"], "Past condition → past perfect.", "had + past participle"),
      gap("If we lived closer, we", "(see) the concert together last night.", ["would have seen", "'d have seen"], "General present condition with a past result → would have + past participle."),
      tr("Rewrite as one mixed conditional.", "I didn't eat breakfast, so I'm hungry now.", ["If I had eaten breakfast, I wouldn't be hungry now", "If I'd eaten breakfast, I wouldn't be hungry now", "I wouldn't be hungry now if I had eaten breakfast", "I wouldn't be hungry now if I'd eaten breakfast"], "Past (didn't eat) → If + had eaten. Present result → wouldn't be."),
      dict(A("01", "dict"), ["If I'd listened to my coach, I'd be on the team now", "If I had listened to my coach, I would be on the team now", "If I had listened to my coach, I'd be on the team now", "If I'd listened to my coach, I would be on the team now"], "The first 'd = had (listened). The second 'd = would (be)."),
      ord("If he weren't so stubborn, he would have apologised.", "General condition (weren't) + past result (would have apologised)."),
    ],
    [
      fix(["If I would have known,", "I would be", "there now."], 0, ["If I had known", "If I'd known"], "No 'would' in the if-clause: If I had known."),
      fix(["If she had studied medicine,", "she would have been", "a doctor now."], 1, ["she would be", "she'd be"], "'Now' → present result: she would be."),
      fix(["If they had left earlier,", "they will be", "here by now."], 1, ["they would be", "they'd be"], "Unreal result → would, not will."),
      fix(["If he was more careful,", "he wouldn't break", "his phone yesterday."], 1, ["he wouldn't have broken", "he would not have broken"], "'Yesterday' → past result: wouldn't have broken."),
      fix(["If you had told me the truth,", "we would still been", "friends now."], 1, ["we would still be", "we'd still be"], "would + base verb: would still be."),
    ],
    [
      ch("Your friend: 'I'm so tired. I played Valorant until 3 a.m.' Best reply?", ["If you went to bed earlier, you would have been fine.", "If you'd gone to bed earlier, you wouldn't be so tired.", "If you go to bed earlier, you won't be tired yesterday."], 1, "Past action (gone to bed) → present feeling (wouldn't be tired)."),
      ch("Which sentence best expresses regret about a career choice?", ["If I had studied design, I'd be doing a job I love now.", "If I study design, I'll do a job I love.", "If I studied design, I would do a job I love yesterday."], 0, "Past choice → present situation. That's exactly what a mixed conditional is for."),
      ch("Formal email to a coordinator. Which is most appropriate?", ["If I got the instructions, I'm not in this mess, lol.", "Had I received the instructions, I would not be in this situation now.", "If I would have received them, I wouldn't be here."], 1, "'Had I received…' (inversion) is formal and correct. Full forms suit formal emails."),
      ch("Which is more natural in conversation?", ["If I had not missed the bus, I would not be late.", "If I hadn't missed the bus, I wouldn't be late."], 1, "In speech we contract: hadn't, wouldn't."),
      say("If I'd known about the party, I'd be there now.", "Contract naturally: I'd known, I'd be."),
    ],
  ],
  create: {
    prompts: [
      { text: "Think of a decision in your past. Write how your life would be different now if you had chosen differently. Then add something about you that, if it were different, would have changed what happened." },
      { universe: "screens", text: "Imagine a game studio made one different decision. Write how the game would be different now, and what would have happened if the developers were more (or less) ambitious." },
      { universe: "science", text: "Pick a scientific discovery. If it had never happened, how would our lives be different now? Add one 'If scientists were…, they would have…' sentence." },
      { universe: "past", text: "Choose a moment in history. If it had gone differently, how would the world be now? Add one sentence with 'If people were…, they would have…'." },
      { universe: "futures", text: "Think about a career you're considering. If you had started preparing two years ago, where would you be now? If you were more confident, what would you have done already?" },
    ],
    minWords: 60,
    checks: [
      { label: "Past condition → present result (If … had + participle, … would + verb)", pattern: "\\bif\\b[^.?!]*\\b(had|'d) (not |n't )?\\w+[^.?!]*\\b(would|could|might|'d)(n't| not)? (?!have\\b)\\w+", min: 1 },
      { label: "Present condition → past result (… would have + participle)", pattern: "\\b(would|could|might)(n't| not)? have \\w+|\\b(would|could|might)'ve \\w+|'d have \\w+", min: 1 },
    ],
    rubric: ["I used both kinds of mixed conditional.", "The times make sense: past → now, or always → then.", "I joined ideas with linkers like but, so, because."],
    model: "If I had joined the robotics club in grade 8, I would be much better at coding now. But if I were less shy, I would have joined it in the first place.",
  },
};

const wish: NodePractice = {
  nodeId: "b2.wish-if-only-present-past-would",
  explain: "Use wish or if only for things you'd like to be different. Present: wish + past simple (I wish I had more time). Past regret: wish + past perfect (I wish I hadn't said that). Someone else's annoying habit, or something you want to change: wish + would (I wish you'd stop interrupting). Don't use wish + would about yourself.",
  pattern: ["wish + past simple → now (I wish I knew)", "wish + past perfect → past regret (I wish I'd gone)", "wish + would → someone else's behaviour (I wish you'd listen)"],
  steps: [
    [
      heard(A("02", "notice"), "What does the speaker regret about last week?", ["Missing a birthday", "Failing an exam", "Losing a charger"], 0, "'I really wish I'd gone' = they didn't go to the birthday and regret it."),
      heard(A("02", "notice"), "What annoys the speaker about their brother?", ["He takes the charger without asking.", "He never helps at home.", "He plays music loudly."], 0, "'I wish he'd ask first' = a complaint about his behaviour."),
      ch("Which sentence is about the past?", ["I wish I knew the answer.", "I wish I had known the answer.", "I wish you would tell me the answer."], 1, "wish + past perfect (had known) = past."),
      ch("'I wish it would stop raining.' The speaker…", ["is annoyed and wants a change", "is happy about the rain", "regrets something they did"], 0, "wish + would = wanting a change in something outside our control."),
      ch("Which verb form follows 'wish' for a present situation?", ["present simple", "past simple", "future 'will'"], 1, "One step back in time: I wish I had (not have)."),
    ],
    [
      ch("What's true?", ["I live near the beach.", "I don't live near the beach.", "I lived near the beach before."], 1, "wish + past simple = the opposite is true now.", { context: "I wish I lived near the beach." }),
      ch("What's true?", ["I sent it and I regret it.", "I didn't send it.", "I will send it."], 0, "If only + past perfect = regret about something that happened.", { context: "If only I hadn't sent that message!" }),
      ch("Why is 'I wish I would be taller' wrong?", ["We don't use wish + would about ourselves: say 'I wish I were taller'.", "'Taller' should be 'more tall'.", "It's correct."], 0, "wish + would is for other people or things, not 'I'."),
      ch("Which one complains about someone's habit?", ["I wish you didn't have a cat.", "I wish you'd stop leaving your shoes everywhere.", "I wish I had a cat."], 1, "wish + would + verb = irritation about behaviour."),
      ch("'I wish I were' or 'I wish I was'?", ["Only 'was' is correct.", "Both are used; 'were' is more formal.", "Only 'were' is correct in speech."], 1, "'Were' is traditional and formal; 'was' is common in speech."),
    ],
    [
      gap("I wish I", "(can) speak Japanese.", ["could"], "Present wish → past form: can → could."),
      gap("She wishes she", "(not / spend) all her money on skins last month.", ["hadn't spent", "had not spent"], "Past regret → past perfect."),
      gap("I wish my neighbours", "(stop) playing music at 2 a.m.", ["would stop", "'d stop"], "Annoying behaviour of others → would + verb."),
      dict(A("02", "dict"), ["If only I'd brought my headphones", "If only I had brought my headphones"], "If only + past perfect: I'd brought = I had brought."),
      tr("Rewrite with 'wish'.", "I'm sorry I didn't study for the exam.", ["I wish I had studied for the exam", "I wish I'd studied for the exam"], "Regret about the past → wish + past perfect."),
    ],
    [
      fix(["I wish", "I have", "more followers."], 1, ["I had"], "Present wish → past simple: I had."),
      fix(["I wish", "I didn't say", "that yesterday."], 1, ["I hadn't said", "I had not said"], "'Yesterday' → past regret → past perfect."),
      fix(["I wish", "I would be", "better at maths."], 1, ["I were", "I was"], "No 'would' about yourself: I wish I were."),
      fix(["If only", "you will", "listen to me!"], 1, ["you would", "you'd"], "If only + would for other people's behaviour."),
      fix(["She wishes", "she has gone", "to the concert last night."], 1, ["she had gone", "she'd gone"], "Last night → past perfect."),
    ],
    [
      ch("Your friend keeps checking their phone while you talk. Most natural thing to say?", ["I wish you would stop checking your phone.", "I wish you stopped checking your phone yesterday.", "I wish you will stop checking your phone."], 0, "wish + would for someone's annoying behaviour now."),
      ch("You missed a free concert ticket because you didn't answer a message.", ["I wish I'd answered that message!", "I wish I answer that message!", "I wish I would answer that message!"], 0, "Past regret → wish + past perfect."),
      ch("Which is more polite to a teacher?", ["I wish you'd give us less homework.", "I was wondering if we could have a little less homework this week.", "I wish you gave less homework, seriously."], 1, "'I wish you'd…' said directly to someone can sound like a complaint. A polite request works better with teachers."),
      ch("Which expresses the strongest regret?", ["I wish I'd gone.", "If only I'd gone!", "I'd like to go."], 1, "'If only' is more emotional than 'I wish'."),
      say("I wish I'd started learning English earlier.", "I'd started = I had started."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write three wishes: one about your life now, one regret about the past, and one thing you wish someone else would change." },
      { universe: "screens", text: "Write three wishes about a game, app or series: something you wish it had now, a decision you wish the creators hadn't made, and something you wish other players would stop doing." },
      { universe: "futures", text: "Write about your future: something you wish you knew now, something you wish you'd done earlier, and something you wish adults would understand about your generation." },
      { universe: "arts", text: "Write about your creative life: a skill you wish you had, something you wish you had tried earlier, and something you wish people would notice about art." },
    ],
    minWords: 50,
    checks: [
      { label: "wish / if only used at least 3 times", pattern: "\\b(wish(es)?|if only)\\b", min: 3 },
      { label: "A past regret (wish … had + participle)", pattern: "\\b(wish(es)?|if only)\\b[^.?!]*\\b(had|hadn't|'d) (not )?\\w+(ed|en|ne|wn|t|ght|ung|ept|ook|old|ade)\\b", min: 1 },
      { label: "Someone else's behaviour (wish … would)", pattern: "\\b(wish(es)?|if only)\\b[^.?!]*\\b(would|wouldn't)\\b|\\b(wish(es)?|if only) (you|he|she|they|people|my \\w+|adults|players|the \\w+)'d\\b", min: 1 },
    ],
    rubric: ["I wrote a present wish, a past regret and a wish about someone else.", "I didn't use 'wish + would' about myself.", "I explained why for each wish."],
    model: "I wish I had more time to draw. I wish I'd taken art classes when I was younger, because now I feel behind. And I wish people would stop saying that drawing is just a hobby.",
  },
};

const modals: NodePractice = {
  nodeId: "b2.past-modals-of-deduction-and-criticism",
  explain: "Use modal + have + past participle to make guesses about the past, or to judge past actions. Deduction: must have (I'm sure it happened), might / could have (maybe), can't / couldn't have (I'm sure it didn't). Criticism and regret: should have / shouldn't have. And needn't have = you did it, but it wasn't necessary.",
  pattern: ["must have + participle → I'm sure (She must have left.)", "might / could have + participle → maybe", "can't / couldn't have + participle → impossible", "should(n't) have + participle → criticism or regret", "needn't have + participle → you did it, but it wasn't necessary"],
  steps: [
    [
      heard(A("03", "notice"), "How sure is the speaker that Juan left his phone at home?", ["Very sure", "Not sure at all", "They think it's impossible"], 0, "'Must have' = a strong, logical guess."),
      heard(A("03", "notice"), "What does the speaker think Juan definitely didn't do?", ["Forget the plan", "Go to practice", "Leave his phone"], 0, "'He can't have forgotten' = impossible, because they talked this morning."),
      ch("Which sentence criticises a past action?", ["You might have lost it.", "You should have saved your work.", "It must have been late."], 1, "should have = it was the right thing, but you didn't do it."),
      ch("'You needn't have bought me a present.' Did the person buy a present?", ["Yes", "No", "We don't know"], 0, "needn't have + participle = it happened, but wasn't necessary."),
      ch("Which form follows 'must' for the past?", ["must + past simple", "must have + past participle", "must + had"], 1, "Modal + have + participle: must have gone."),
    ],
    [
      ch("This means…", ["The speaker is guessing with high certainty.", "The speaker saw the rain.", "The speaker is criticising the rain."], 0, "Wet streets are evidence → a confident guess.", { context: "The streets are wet. It must have rained." }),
      ch("This means…", ["It's impossible that she finished.", "She finished very quickly.", "She should finish soon."], 0, "can't have = logically impossible.", { context: "She can't have finished the essay already; she started ten minutes ago." }),
      ch("'You shouldn't have shared that password.' The speaker thinks…", ["sharing it was a mistake", "sharing it was necessary", "sharing it maybe happened"], 0, "shouldn't have = criticism of something that happened."),
      ch("Which means 'maybe it happened'?", ["He must have taken it.", "He might have taken it.", "He can't have taken it."], 1, "might have = possibility, not certainty."),
      ch("'Didn't need to buy' vs 'needn't have bought'?", ["'Needn't have bought' = you bought it, but it wasn't necessary.", "They mean exactly the same.", "'Needn't have bought' = you didn't buy it."], 0, "With needn't have, the action happened."),
    ],
    [
      gap("The lights are off. They", "(must / go) to bed.", ["must have gone", "must've gone"], "Confident guess → must have + gone (not went)."),
      gap("You", "(should / tell) me you were vegetarian! I made chicken.", ["should have told", "should've told"], "Criticism → should have + participle."),
      gap("He", "(can't / see) the message. His phone was dead.", ["can't have seen", "cannot have seen", "couldn't have seen", "could not have seen"], "Impossible → can't / couldn't have + participle."),
      dict(A("03", "dict"), ["She might have missed the bus", "She might've missed the bus"], "In fast speech 'might have' sounds like 'mighta'."),
      tr("Rewrite using 'must'.", "I'm sure she forgot about the meeting.", ["She must have forgotten about the meeting", "She must've forgotten about the meeting"], "I'm sure + past → must have + participle."),
    ],
    [
      fix(["He must", "have went", "home early."], 1, ["have gone"], "have + past participle: gone, not went."),
      fix(["You should", "have to call", "me last night."], 1, ["have called"], "should have + participle."),
      fix(["They can't", "had seen", "the film; it isn't out yet."], 1, ["have seen"], "Modal + have (never had)."),
      fix(["I must", "to have left", "my keys at school."], 1, ["have left"], "No 'to' after must."),
      fix(["She might", "has taken", "the wrong bus."], 1, ["have taken"], "After a modal, always 'have'."),
    ],
    [
      ch("Your friend failed a test after gaming all night. A kind but honest comment?", ["You must have failed because you're bad.", "Maybe you should have slept more before the test.", "You can't have slept."], 1, "'Maybe you should have…' softens the criticism."),
      ch("Your teacher's email didn't arrive. The most polite way to say it?", ["You must have forgotten to send it.", "It might not have gone through. Could you send it again?", "You should have sent it properly."], 1, "Blaming with 'must have' or 'should have' sounds rude. 'Might not have gone through' is neutral."),
      ch("There's a huge queue outside the cinema. Best deduction?", ["The new film must have just come out.", "The new film should have come out.", "The new film needn't have come out."], 0, "Evidence → confident deduction with must have."),
      ch("You took an umbrella, but it didn't rain.", ["I needn't have brought my umbrella.", "I mustn't have brought my umbrella.", "I shouldn't brought my umbrella."], 0, "You brought it and it wasn't necessary → needn't have."),
      say("You should have told me earlier.", "In speech: should've (shoulda)."),
    ],
  ],
  create: {
    prompts: [
      { text: "A mystery: you arrive at school and the classroom is empty, the lights are on and there's a half-eaten arepa on the desk. Write what might, must or can't have happened, and what someone should have done differently." },
      { universe: "science", text: "A space probe stopped sending signals. Write what might, must or can't have happened, and what the team should have done." },
      { universe: "past", text: "Pick a historical mystery (for example, the lost colony of Roanoke). Write what might, must or can't have happened, and what people should have done." },
      { universe: "screens", text: "Your favourite streamer suddenly stopped streaming for a month. Write what might, must or can't have happened, and what the fans should or shouldn't have done." },
    ],
    minWords: 60,
    checks: [
      { label: "Deduction (must / might / could / can't have + participle)", pattern: "\\b(must|might|may|could|can't|cannot|couldn't)( not)? have \\w+|\\b(must|might|could)'ve \\w+", min: 2 },
      { label: "Criticism or regret (should / shouldn't / needn't have)", pattern: "\\b(should|shouldn't|needn't|ought to)( not)? have \\w+|\\bshould've \\w+", min: 1 },
    ],
    rubric: ["I made guesses with different levels of certainty.", "I judged at least one past action.", "I used 'have + past participle' after every modal."],
    model: "The class must have left in a hurry, because the lights are still on. They might have gone to the auditorium for an assembly. They can't have gone home; it's only ten o'clock. Someone should have left a note!",
  },
};

const reporting: NodePractice = {
  nodeId: "b2.passive-with-reporting-verbs",
  explain: "In news and formal writing we often report beliefs without saying who holds them. Two patterns: It is said / believed / thought / reported + that-clause (It is believed that the painting is fake). Or subject + is said / believed + to-infinitive (The painting is believed to be fake). For an earlier action, use to have + past participle (He is thought to have left the country).",
  pattern: ["It + is said / believed + that … → It is said that he is rich.", "Subject + is said / believed + to + verb → He is said to be rich.", "Earlier action: to have + participle → He is said to have left."],
  steps: [
    [
      heard(A("04", "notice"), "When will the phone go on sale?", ["Next month", "This week", "Next year"], 0, "'Is expected to go on sale next month.'"),
      heard(A("04", "notice"), "What did the CEO reportedly do?", ["Tested the camera", "Designed the phone", "Sold two million phones"], 0, "'Is said to have tested the camera herself.'"),
      ch("Which sentence reports a belief without saying who believes it?", ["People say he is rich.", "He is said to be rich.", "I say he is rich."], 1, "The passive hides the source."),
      ch("'The bridge is thought to have been built in 1800.' When was it built?", ["Probably in 1800", "It will be built in 1800", "It's being built now"], 0, "to have + participle = an earlier action; 'thought' = probably."),
      ch("'He is believed ___ the money.' (past action)", ["to steal", "to have stolen", "stealing"], 1, "Earlier action → to have + participle."),
    ],
    [
      ch("This means…", ["The news says she cancelled it.", "The singer reported it herself.", "She will cancel it."], 0, "It is reported = the media says.", { context: "It is reported that the singer has cancelled her tour." }),
      ch("Why do journalists use 'is said to'?", ["It's neutral and doesn't name a source.", "It's more informal.", "It shows the writer is certain."], 0, "It reports information while keeping distance from it."),
      ch("'He is said to be living in Canada.' Is he living there now (reportedly)?", ["Yes, reportedly now", "No, in the past", "It's a plan for the future"], 0, "to be + -ing = now, reportedly."),
      ch("Which is correct?", ["It is believed the virus to spread.", "The virus is believed to spread through water.", "The virus is believed that spreads."], 1, "Subject + is believed + to + verb."),
      ch("What tone does 'It is claimed that…' have?", ["Some doubt about the information", "Total certainty", "A joke"], 0, "'Claimed' suggests the writer isn't sure it's true."),
    ],
    [
      gap("It", "(believe) that the city was founded in 1538.", ["is believed"], "It + is + past participle + that.", "is + past participle"),
      gap("The star is said", "(earn) millions from her last tour.", ["to have earned"], "Earlier action → to have + participle."),
      tr("Rewrite starting with 'The castle'.", "People say that the castle is haunted.", ["The castle is said to be haunted"], "Subject + is said + to be.", "is said"),
      dict(A("04", "dict"), ["The missing painting is thought to be in Paris"]),
      tr("Rewrite starting with 'The hackers'.", "People believe that the hackers stole the data last year.", ["The hackers are believed to have stolen the data last year"], "Plural subject → are; past action → to have stolen."),
    ],
    [
      fix(["The player", "is said", "to be signed", "a new contract yesterday."], 2, ["to have signed"], "Yesterday → earlier action → to have signed."),
      fix(["It is believe", "that the museum", "will reopen in May."], 0, ["It is believed"], "Passive needs the past participle: believed."),
      fix(["She", "is thought", "that she is", "the best candidate."], 2, ["to be"], "Subject + is thought + to be (not 'that she is')."),
      fix(["The company", "is reported", "to have lose", "millions."], 2, ["to have lost"], "to have + past participle."),
      fix(["They", "are expected", "win", "the final."], 2, ["to win"], "are expected + to + verb."),
    ],
    [
      ch("Which is best for a school news article?", ["Everyone says the canteen is gonna close lol.", "It is reported that the canteen will close next term.", "The canteen is closing, trust me."], 1, "News style → neutral, formal reporting passive."),
      ch("You're not sure a rumour is true. Which keeps the most distance?", ["The new teacher is from Spain.", "The new teacher is said to be from Spain.", "I know the new teacher is from Spain."], 1, "'Is said to be' = reported, not confirmed."),
      ch("Which sounds unnatural in a casual chat with a friend?", ["Apparently Sara's moving to Cali.", "Sara is believed to be relocating to Cali.", "I heard Sara's moving to Cali."], 1, "Too formal for chat. Use 'apparently' or 'I heard'."),
      ch("Best headline-style sentence?", ["Scientists think maybe ice on Mars.", "Ice is thought to exist below the surface of Mars.", "Ice is thinking to exist on Mars."], 1, "is thought (passive) + to exist."),
      say("The film is expected to break box-office records.", "Stress the key words: EXPECTED, BREAK, RECORDS."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short news report (like a school newspaper) about a rumour or event in your town or school. Report what is said, believed or expected, without naming sources." },
      { universe: "screens", text: "Write a short gaming news report about an upcoming game: what it is rumoured, expected or said to include." },
      { universe: "science", text: "Write a short science news report about a recent discovery: what it is believed, thought or expected to mean." },
      { universe: "arts", text: "Write a short arts news report about a stolen or rediscovered painting: what is said, believed or thought to have happened." },
    ],
    minWords: 60,
    checks: [
      { label: "It + is said / believed / thought / reported / expected that", pattern: "\\bit (is|was) (widely |generally )?(said|believed|thought|reported|expected|claimed|rumou?red|known|estimated) that\\b", min: 1 },
      { label: "Subject + is said / believed … + to + verb", pattern: "\\b(is|are|was|were) (widely |generally )?(said|believed|thought|reported|expected|claimed|rumou?red|known|estimated|understood) to (have )?\\w+", min: 2 },
    ],
    rubric: ["It sounds like a news report, not a chat.", "I used both patterns (It is said that… / X is said to…).", "I used 'to have + participle' for an earlier event."],
    model: "The school canteen is expected to close for repairs next term. It is believed that the kitchen failed a safety inspection, and the head chef is said to have warned the director months ago.",
  },
};

const participle: NodePractice = {
  nodeId: "b2.participle-clauses",
  explain: "Participle clauses make writing shorter and more fluent. -ing for actions at the same time, or for reasons (Walking home, I saw an accident). The past participle for a passive meaning (Built in 1600, the church is the oldest in town). Having + past participle when one action finished before another (Having finished my homework, I went out). Both parts must have the same subject.",
  pattern: ["-ing → active, same time or reason (Feeling tired, she left.)", "Past participle → passive (Made in Colombia, the bag…)", "Having + participle → first this, then that (Having saved enough, he bought…)"],
  steps: [
    [
      heard(A("05", "notice"), "Why didn't the speaker notice the rain?", ["They were exhausted.", "They had an umbrella.", "It stopped quickly."], 0, "'Feeling exhausted' gives the reason."),
      heard(A("05", "notice"), "What happened first?", ["The speaker finished work.", "The speaker climbed the stairs.", "The building was renovated."], 0, "'Having finished my shift' = this happened first."),
      ch("Which sentence uses a participle clause?", ["When I was walking home, I saw a fox.", "Walking home, I saw a fox.", "I walked home and I saw a fox."], 1, "'Walking home' replaces 'When I was walking home'."),
      ch("'Written in 1605, Don Quixote…' Who wrote it?", ["The clause doesn't say: it's passive.", "Don Quixote wrote it.", "The reader wrote it."], 0, "A past participle clause has a passive meaning: it was written."),
      ch("'Having lost the match, the team…' means…", ["After they lost the match", "While they were losing", "Because they will lose"], 0, "Having + participle = completed first."),
    ],
    [
      ch("Which means 'because she didn't know anyone'?", ["Not knowing anyone, she stayed quiet.", "Known by anyone, she stayed quiet.", "Having known anyone, she stayed quiet."], 0, "Negative participle clause: Not + -ing."),
      ch("Why is 'Walking to school, the rain started' wrong?", ["The rain wasn't walking: both parts need the same subject.", "'Walking' should be 'walked'.", "Nothing is wrong."], 0, "This is a 'dangling participle'. Say: Walking to school, I got caught in the rain."),
      ch("'Designed by Botero, the sculpture…' Why a past participle?", ["The sculpture was designed (passive).", "The sculpture designed something.", "It shows the future."], 0, "Passive meaning → past participle."),
      ch("Which is more formal and compact?", ["Because I had finished early, I left.", "Having finished early, I left."], 1, "Participle clauses are common in formal writing."),
      ch("'___ by millions, the video went viral.'", ["Watching", "Watched", "Having watch"], 1, "The video was watched → past participle."),
    ],
    [
      tr("Rewrite with a participle clause.", "Because she felt nervous, she practised her speech again.", ["Feeling nervous, she practised her speech again"], "Reason → -ing clause."),
      tr("Rewrite starting with 'Designed'.", "The app was designed by two students, and it now has a million users.", ["Designed by two students, the app now has a million users"], "Passive → past participle clause."),
      tr("Rewrite starting with 'Having'.", "After I had saved enough money, I bought a bike.", ["Having saved enough money, I bought a bike"], "First action → Having + participle."),
      dict(A("05", "dict"), ["Feeling hungry, we stopped at a bakery"]),
      gap("", "(not / want) to wake his parents, he took off his shoes.", ["Not wanting"], "Negative reason → Not + -ing at the start."),
    ],
    [
      fix(["Having finish", "the exam,", "we celebrated."], 0, ["Having finished"], "Having + past participle."),
      fix(["Builded", "in 1610,", "the church is famous."], 0, ["Built"], "Irregular participle: built."),
      fix(["Knowing not", "the answer,", "I guessed."], 0, ["Not knowing"], "'Not' goes first: Not knowing."),
      fix(["Having been seen", "the film before,", "I knew the ending."], 0, ["Having seen"], "Active meaning (I saw it) → Having seen."),
      fix(["Wrote", "by a teenager,", "the song became a hit."], 0, ["Written"], "Passive → past participle: written."),
    ],
    [
      ch("Which sentence is correct and clear?", ["Running for the bus, my bag fell open.", "Running for the bus, I dropped my bag.", "Ran for the bus, I dropped my bag."], 1, "The bag wasn't running. The subject must match."),
      ch("Best opening for a formal essay?", ["Considering the evidence, it seems that social media affects sleep.", "So like, considering the evidence, social media is bad.", "Considered the evidence, social media affects sleep."], 0, "Formal, correct and compact."),
      ch("In a text to a friend, which is most natural?", ["Having arrived at the station, I await your presence.", "I'm at the station, where are you?", "Arrived at station, awaiting."], 1, "Participle clauses are mostly for writing. Chat stays simple."),
      ch("Best way to combine: 'The book was translated into 40 languages. It is a global bestseller.'", ["Translating into 40 languages, the book is a global bestseller.", "Translated into 40 languages, the book is a global bestseller.", "Having translated into 40 languages, the book is a global bestseller."], 1, "The book was translated → past participle."),
      say("Having finished my homework, I went out with my friends.", "Pause briefly after the clause: Having finished my homework, … I went out."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe a memorable day using at least three participle clauses (for example: 'Waking up late, I…', 'Having missed the bus, I…', 'Surrounded by people, I…')." },
      { universe: "arts", text: "Write a museum card for a painting, building or street-art piece using participle clauses (Painted in…, Inspired by…, Having…)." },
      { universe: "past", text: "Write a short biography of a historical figure using participle clauses (Born in…, Having studied…, Inspired by…)." },
      { universe: "screens", text: "Write the description for a game or series on a store page using participle clauses (Set in…, Created by…, Having lost…, the hero…)." },
    ],
    minWords: 50,
    checks: [
      { label: "-ing clause (Feeling…, Walking…, Not knowing…)", pattern: "(^|[.!?]\\s+)(not )?(?!having)\\w+ing\\b[^.?!,]{0,60},", min: 1 },
      { label: "Past participle or 'Having' clause (Built…, Having finished…)", pattern: "(^|[.!?]\\s+)(having \\w+|born|built|made|written|painted|designed|inspired|surrounded|known|given|taken|founded|created|located|based|set|\\w+ed)\\b[^.?!,]{0,60},", min: 1 },
    ],
    rubric: ["I used at least three participle clauses.", "Each clause has the same subject as the main sentence.", "I mixed -ing, past participle and having + participle."],
    model: "Born in Aracataca in 1927, Gabriel García Márquez grew up with his grandparents. Listening to their stories every night, he fell in love with storytelling. Having worked as a journalist for years, he published One Hundred Years of Solitude in 1967.",
  },
};

const cleft: NodePractice = {
  nodeId: "b2.cleft-sentences-introduction",
  explain: "Cleft sentences split one idea in two to focus on the important part. It-cleft: It was Ana who called (not someone else). Wh-cleft: What I need is time. Also: All I want is…, The thing that surprised me was… They're great for correcting someone or emphasising a point.",
  pattern: ["It + be + focus + who / that … → It was Ana who called.", "What + clause + be + focus → What I need is a break.", "All / The thing (that) … + be → All I did was ask."],
  steps: [
    [
      heard(A("06", "notice"), "What did the speaker love most?", ["The soundtrack", "The plot", "The ending"], 0, "'What I really loved was the soundtrack.'"),
      heard(A("06", "notice"), "What surprised the speaker?", ["The ending", "The soundtrack", "The actors"], 0, "'The thing that surprised me most was the ending.'"),
      ch("Which sentence emphasises who did it?", ["Ana called me.", "It was Ana who called me.", "Ana was calling me."], 1, "It-cleft puts the focus on Ana."),
      ch("In 'What I need is sleep', the focus is on…", ["sleep", "I", "need"], 0, "The new, important information comes after 'is'."),
      ch("Which is a cleft sentence?", ["I want a new phone.", "All I want is a new phone.", "I want a new phone, too."], 1, "All … is … = a cleft for emphasis."),
    ],
    [
      ch("A: 'Did you lose the keys?' B: 'No, it was my brother who lost them.' Why the cleft?", ["To correct A and emphasise who", "To ask a question", "To sound more informal"], 0, "It-clefts are perfect for corrections."),
      ch("Which means the same as 'I only asked a question'?", ["All I did was ask a question.", "What I asked was all.", "It was a question all."], 0, "All I did was + verb."),
      ch("'It's not the money that matters; it's the experience.' The speaker thinks…", ["experience is more important", "money is more important", "both are useless"], 0, "The cleft contrasts the two."),
      ch("Which is correct?", ["What I need it is a holiday.", "What I need is a holiday.", "What I need, is a holiday."], 1, "No extra 'it', no comma."),
      ch("'It was in 2019 that I first visited Bogotá.' The focus is on…", ["the date", "the city", "the speaker"], 0, "The focus goes between 'It was' and 'that'."),
    ],
    [
      tr("Emphasise 'my grandmother'. Start with 'It was'.", "My grandmother taught me to cook.", ["It was my grandmother who taught me to cook", "It was my grandmother that taught me to cook"], "It was + person + who…"),
      tr("Rewrite starting with 'What'.", "I need a long holiday.", ["What I need is a long holiday"], "What + I need + is + focus."),
      tr("Rewrite starting with 'All'.", "I only wanted to help.", ["All I wanted was to help", "All I wanted to do was help", "All I wanted to do was to help"], "All I wanted was…"),
      dict(A("06", "dict"), ["What surprised me was how quickly he learned", "What surprised me was how quickly he learnt"]),
      gap("", "I love about this city is the food.", ["What"], "Wh-cleft: What I love … is …"),
    ],
    [
      fix(["What I want", "it is", "some peace and quiet."], 1, ["is"], "No extra 'it': What I want is…"),
      fix(["It was", "my sister", "which painted the mural."], 2, ["who painted the mural", "that painted the mural"], "People → who / that."),
      fix(["All what", "I need", "is a nap."], 0, ["All"], "'All I need', not 'all what'. A very common Spanish-speaker error (todo lo que)."),
      fix(["It is", "the teachers", "who knows best."], 2, ["who know best"], "The verb agrees with 'teachers': know."),
      fix(["The thing", "what annoys me", "is the noise."], 1, ["that annoys me", "which annoys me"], "The thing that…, not 'the thing what'."),
    ],
    [
      ch("Your friend thinks you broke the console. Your cousin did. Best reply?", ["It was my cousin who broke it, not me!", "My cousin broke it maybe.", "What broke it was my cousin was."], 0, "It-cleft = clear correction."),
      ch("In a presentation, which opening grabs attention best?", ["I will talk about plastic.", "What most people don't realise is that plastic never disappears.", "Plastic is a thing."], 1, "A wh-cleft builds suspense before the key fact."),
      ch("Which sounds too dramatic for 'I'm hungry'?", ["I'm hungry.", "What I am, at this moment, is hungry.", "I'm starving."], 1, "Clefts add emphasis. For simple facts they can sound odd."),
      ch("They think class is on Tuesday. It's on Thursday. Most natural?", ["It's on Thursday that the class is, actually.", "Actually, I think it's on Thursday.", "Thursday it is that the class happens."], 1, "Sometimes a simple 'Actually…' is more natural than a cleft."),
      say("What I really need is a good night's sleep.", "Stress the focus: what I really NEED is a good night's SLEEP."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short opinion post about something people misunderstand (a hobby, a place, a group of people). Use clefts to correct and emphasise: 'It isn't X that…, it's Y.' 'What people don't realise is…'" },
      { universe: "screens", text: "Write a short review of a game or series using clefts to say what really makes it good (What I love is…, It's the … that…)." },
      { universe: "words", text: "Write about a book, poem or song: What makes it powerful is…, It's the ending that…" },
      { universe: "futures", text: "Write about a career people misunderstand (influencer, nurse, game tester…): What people don't realise is…, It isn't … that…, it's…" },
    ],
    minWords: 50,
    checks: [
      { label: "It-cleft (It is / was … who / that …)", pattern: "\\bit('s| is| was|'s not| isn't| wasn't| is not| was not) [^.?!]{1,60}? (who|that) ", min: 1 },
      { label: "Wh- or All-cleft (What … is / All … is)", pattern: "\\b(what|all|the thing that|the thing) [^.?!]{1,50}? (is|was|are|were) ", min: 1 },
    ],
    rubric: ["I used an it-cleft and a wh- (or all-) cleft.", "My clefts emphasise the most important idea.", "I didn't overuse them: the rest is normal sentences."],
    model: "People think gamers are antisocial, but it isn't the games that isolate us. What most people don't realise is that we talk to friends for hours while we play.",
  },
};

const relatives: NodePractice = {
  nodeId: "b2.relative-clauses-with-prepositions",
  explain: "When a relative clause needs a preposition, it can go at the end (informal: the person I spoke to) or before whom / which (formal: the person to whom I spoke). After a preposition, use whom for people and which for things, never who or that. Common in formal writing: in which, to whom, by which, during which.",
  pattern: ["Informal: the friend (who / that) I went with", "Formal: the friend with whom I went", "Things: the topic I wrote about / the topic about which I wrote", "Never: *with who, *about that"],
  steps: [
    [
      heard(A("07", "notice"), "Who did the speaker talk to?", ["A teacher", "A student", "A website"], 0, "'The teacher I spoke to was really helpful.'"),
      heard(A("07", "notice"), "Who does the speaker study with every week?", ["A student", "The teacher", "Nobody"], 0, "'A student with whom I now study every week.'"),
      ch("Which sentence is formal?", ["The man I talked to was nice.", "The man to whom I talked was nice.", "The man who I talked was nice."], 1, "Preposition + whom = formal."),
      ch("In 'the house in which I grew up', 'in which' could be replaced by…", ["where", "who", "whom"], 0, "For places, in which = where."),
      ch("After a preposition, which word is correct for people?", ["who", "whom", "that"], 1, "with whom, to whom, for whom."),
    ],
    [
      ch("Which two mean the same?", ["'the song I'm listening to' = 'the song to which I'm listening'", "'the song I'm listening to' = 'the song I'm listening'", "'the song to that I'm listening'"], 0, "Same meaning, different register."),
      ch("Why is 'the friend with who I travelled' wrong?", ["After a preposition we use whom.", "'Travelled' is wrong.", "'Friend' should be plural."], 0, "with whom."),
      ch("Which is most natural in conversation?", ["That's the guy I told you about.", "That's the guy about whom I told you.", "That's the guy about who I told you."], 0, "In speech, the preposition goes at the end."),
      ch("'The reasons for which the project failed…' is…", ["formal and correct", "informal", "incorrect"], 0, "Typical of reports and essays."),
      ch("'The period during which…' introduces…", ["a time", "a place", "a person"], 0, "during which = a time."),
    ],
    [
      gap("This is the scholarship", "I applied. (formal)", ["for which"], "apply for → for which."),
      gap("The person", "I owe the most is my mum. (formal)", ["to whom"], "owe something to someone → to whom."),
      tr("Join informally (preposition at the end).", "That's the café. We met in that café.", ["That's the café we met in", "That is the café we met in", "That's the café that we met in", "That's the café which we met in"], "Informal → preposition at the end."),
      dict(A("07", "dict"), ["The company for which she works is based in Medellín", "The company for which she works is based in Medellin"]),
      tr("Make it formal with 'in which'.", "The topic that I'm interested in is climate change.", ["The topic in which I'm interested is climate change", "The topic in which I am interested is climate change"], "interested in → in which."),
    ],
    [
      fix(["The girl", "with who", "I share a desk is from Cali."], 1, ["with whom"], "After a preposition: whom."),
      fix(["The app", "in that", "you can edit videos is free."], 1, ["in which"], "Never 'preposition + that'."),
      fix(["The city", "which I live", "is very noisy."], 1, ["which I live in", "I live in", "where I live", "in which I live"], "live IN a city: the preposition is missing."),
      fix(["The professor", "to whom I wrote to", "replied quickly."], 1, ["to whom I wrote", "who I wrote to", "whom I wrote to"], "Use the preposition once, not twice."),
      fix(["This is the reason", "for what", "I left."], 1, ["for which", "why"], "the reason for which / the reason why."),
    ],
    [
      ch("Formal university application. Best sentence?", ["Medicine is the field I'm super into.", "Medicine is the field in which I hope to build my career.", "Medicine is the field in what I want to work."], 1, "Formal register + correct relative."),
      ch("WhatsApp to a friend. Best sentence?", ["Is that the guy you were talking about?", "Is that the guy about whom you were speaking?", "Is that the guy about who you talk?"], 0, "Casual → preposition at the end."),
      ch("Which is correct and formal?", ["the people with whom I work", "the people with who I work", "the people with that I work"], 0, "with whom."),
      ch("Which sounds too stiff for a casual vlog?", ["This is the camera I film with.", "This is the camera with which I film.", "This is my filming camera."], 1, "Correct, but too formal for a vlog."),
      say("That's the friend I told you about.", "Link the words: told-you-about."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a formal paragraph for a scholarship application about a person, place or project that changed you. Use at least two 'preposition + which / whom' clauses (in which, with whom, to whom, for which…)." },
      { universe: "futures", text: "Write a formal paragraph for a university application describing the field in which you want to work and the people from whom you have learned." },
      { universe: "arts", text: "Describe, formally, a work of art that influenced you: the place in which you saw it, the artist to whom you owe your interest…" },
      { universe: "science", text: "Write a formal paragraph about a scientist to whom we owe an important discovery, and the conditions in which they worked." },
    ],
    minWords: 60,
    checks: [
      { label: "Preposition + which / whom (formal), at least twice", pattern: "\\b(in|on|at|to|with|for|from|by|about|of|during|through|under|without|among|between) (which|whom)\\b", min: 2 },
    ],
    rubric: ["My paragraph sounds formal.", "I used preposition + which / whom at least twice.", "I never wrote 'with who' or 'in that'."],
    model: "The person to whom I owe my love of science is my grandfather, a farmer with whom I spent every holiday. The small lab in which he tested soil samples was the place where my curiosity began.",
  },
};

const narrative: NodePractice = {
  nodeId: "b2.narrative-tenses-combined",
  explain: "Good stories mix past tenses. Past simple for the main events. Past continuous for background actions in progress (It was raining). Past perfect for something that happened earlier (I had left my phone). Past perfect continuous for an activity that had been going on up to that moment (I had been waiting for an hour when…).",
  pattern: ["Past simple → main events: He arrived.", "Past continuous → background: It was raining.", "Past perfect → earlier: I had forgotten my keys.", "Past perfect continuous → duration up to then: I had been waiting for an hour."],
  steps: [
    [
      heard(A("08", "notice"), "How long had the speaker been waiting?", ["Forty minutes", "Fourteen minutes", "Four hours"], 0, "'I had been waiting at the stop for forty minutes.'"),
      heard(A("08", "notice"), "What had the speaker left at home?", ["Their wallet", "Their phone", "Their umbrella"], 0, "'I had left my wallet at home.'"),
      ch("Which tense shows background? 'It ___ when I left.'", ["rained", "was raining", "had rained"], 1, "Past continuous = background in progress."),
      ch("'When I got to the cinema, the film had started.' Did the speaker see the beginning?", ["No", "Yes", "We can't know"], 0, "Past perfect = it started before they arrived."),
      ch("Which form shows an activity continuing up to a past moment?", ["had been + -ing", "was + -ing", "have been + -ing"], 0, "Past perfect continuous."),
    ],
    [
      ch("'When I got there, she left.' vs 'When I got there, she had left.'", ["In the second, she left before I arrived.", "They're the same.", "In the first, she left before I arrived."], 0, "Past perfect = earlier. Past simple = right after."),
      ch("'Her eyes were red. She had been crying.' Why 'had been crying'?", ["It explains a visible result of an earlier activity.", "It's a future plan.", "It's a habit now."], 0, "Past perfect continuous often explains evidence."),
      ch("Which sentence is correct?", ["I was knowing him for years.", "I had known him for years.", "I had been knowing him for years."], 1, "'Know' is a state verb: no continuous forms."),
      ch("'While I was cooking, the power went off.' Which action was longer?", ["Cooking", "The power going off", "Both the same"], 0, "Past continuous = the longer background action."),
      ch("Best ending: 'By the time we arrived, …'", ["the concert finished.", "the concert had already finished.", "the concert has finished."], 1, "By the time + past → past perfect."),
    ],
    [
      gap("When I opened the door, I saw that someone", "(eat) my cake.", ["had eaten"], "It happened earlier → past perfect."),
      gap("We", "(walk) for hours when we finally found the hotel.", ["had been walking"], "Duration up to a past moment → past perfect continuous."),
      gap("I", "(scroll) through TikTok when my mum called.", ["was scrolling"], "Background in progress → past continuous."),
      dict(A("08", "dict"), ["By the time I got home, everyone had gone to bed", "By the time I got home everyone had gone to bed"]),
      ord("She had been training for months before the race.", "had been + -ing + for + time."),
    ],
    [
      fix(["When I arrived,", "the train already left,", "so I took a taxi."], 1, ["the train had already left"], "Earlier action → had already left."),
      fix(["I was waiting", "for two hours", "when he finally texted me."], 0, ["I had been waiting"], "Duration up to that moment → had been waiting."),
      fix(["While she", "had been walking", "home, she saw a fox."], 1, ["was walking"], "Background at that moment → was walking."),
      fix(["He", "had been knowing", "the answer all along."], 1, ["had known", "knew"], "State verb → had known."),
      fix(["We", "have finished", "our project the night before the deadline."], 1, ["had finished", "finished"], "Past story → had finished (not present perfect)."),
    ],
    [
      ch("Best opening for a story?", ["It rained. I walked. A dog came.", "It was raining and I was walking home when a dog appeared out of nowhere.", "It has rained and I have walked home."], 1, "Background (continuous) + event (simple) = vivid."),
      ch("Explain why you were late, in a polite email.", ["I'm late because bus.", "I apologise for arriving late; my bus had broken down on the way.", "Sorry, bus broke down I had been late."], 1, "Clear order of events and a polite tone."),
      ch("Which shows the clearest order of events?", ["I realised I lost my keys after I locked the door.", "After I had locked the door, I realised I had left my keys inside.", "I realised, I lock the door, keys inside."], 1, "Past perfect makes the order clear."),
      ch("Better style for a story climax?", ["Suddenly, the lights went out.", "Suddenly, the lights had been going out.", "Suddenly, the lights were going out since an hour."], 0, "Sudden events → past simple."),
      say("I had been waiting for an hour when he finally arrived.", "Weak forms: I'd been waiting (bin), for an (fər ən) hour."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write the opening of a story (around 100 words) that uses all four narrative tenses: past simple, past continuous, past perfect and past perfect continuous." },
      { universe: "screens", text: "Write the opening of a story set inside a video game world, using all four narrative tenses." },
      { universe: "past", text: "Retell a moment from history as a story (for example, the moment someone heard important news), using all four narrative tenses." },
      { universe: "words", text: "Rewrite the opening of a famous story or legend in your own words, using all four narrative tenses." },
    ],
    minWords: 80,
    checks: [
      { label: "Past continuous (was / were + -ing)", pattern: "\\b(was|were|wasn't|weren't) \\w+ing\\b", min: 1 },
      { label: "Past perfect (had + participle)", pattern: "\\b(had|'d|hadn't) (not |never |already |just )?(?!been \\w+ing\\b)(?!a\\b|an\\b|the\\b|to\\b|some\\b|no\\b)\\w+", min: 1 },
      { label: "Past perfect continuous (had been + -ing)", pattern: "\\b(had|'d|hadn't) been \\w+ing\\b", min: 1 },
    ],
    rubric: ["I used all four narrative tenses.", "The order of events is clear.", "I started with background and then the main event."],
    model: "It was raining hard and the streets were empty. Mateo had been walking for an hour when he finally saw the old bookshop. He had passed it a hundred times, but he had never gone in. He pushed the door…",
  },
};

export const B2_GRAMMAR: NodePractice[] = [mixed, wish, modals, reporting, participle, cleft, relatives, narrative];
export type { Item };
