/* C2 Grammar. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/c2g-${n}-${k}.mp3`;

export const C2_GRAMMAR_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "3f6pec3wODJsjTqtcNI2", script: "Come what may, the show goes on tonight. The lead actor has a cold; be that as it may, he insists on performing. Were it not for his stubbornness, we would have cancelled weeks ago. Suffice it to say, the rehearsals have been chaotic. Far be it from me to complain, but I could do with some sleep." },
  { file: X("01", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "Be that as it may, we still have to finish by Friday." },
  { file: X("02", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Gone are the days when a phone was just a phone. Now it's a camera. A bank. A diary. A best friend, almost. That it has made life easier, nobody denies. Whether it has made us happier is another question. And that question, I suspect, we would rather not answer." },
  { file: X("02", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "Gone are the days when we wrote letters by hand." },
  { file: X("03", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "Hi Marta, I've been meaning to write to you for weeks. I was wondering whether you might have time for a coffee on Saturday. By then, I'll have been working on this project for six months, so I'll need a break. And don't worry, I won't be talking about work all afternoon. Well, not the whole afternoon." },
  { file: X("03", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "I was hoping you might give me some advice." },
  { file: X("04", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "The club's president insisted that the money had been spent properly. However, he conceded that some receipts were missing. A former treasurer claimed that the accounts had been changed. The president is alleged to have ignored several warnings, an accusation he dismissed as ridiculous. The investigation continues." },
  { file: X("04", "dict"), voice: "8DvnqWWA3WWXixOm7zQI", script: "The minister is alleged to have ignored the report." },
  { file: X("05", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "Given more time, we would have finished the mural. Without the neighbours' help, we'd still be painting the first wall. If we had started in January, we would be celebrating now instead of working. I'd have asked my cousin to help, but she was away. Otherwise, it would have been perfect." },
  { file: X("05", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "Without her help, we would still be lost." },
  { file: X("06", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Tired she may have been; defeated she was not. The others gave up at the second hill. She did not. Some walked, others ran. Ana chose the mountain path; her brother, the road. Would she finish before dark? She hoped so. Would she stop? Certainly not." },
  { file: X("06", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "Some stayed until the end; others left early." },
];

const rare: NodePractice = {
  nodeId: "c2.rare-structures-for-style",
  explain: "Some structures are rare in everyday speech but give writing and speeches real style. Many are old subjunctive or inverted forms that survive as fixed expressions. 'Come what may' means whatever happens. 'Be that as it may' means even so, accepting a point but moving on. 'Were it not for…' means if it weren't for. 'Suffice it to say' means I won't give all the details. 'Far be it from me to…' introduces criticism while pretending not to criticise. 'If need be' means if necessary, and 'as it were' softens an unusual expression. Learn them as whole chunks: you cannot change their grammar (never 'Comes what may'). Used once, they sound elegant; used three times in a paragraph, they sound like a costume.",
  pattern: ["Come what may, … = whatever happens", "Be that as it may, … = even so", "Were it not for + noun, … = if it weren't for", "Suffice it to say (that) … = I'll only say this", "Far be it from me to + verb, but … = I don't want to criticise, but…", "If need be · as it were · so be it"],
  steps: [
    [
      heard(X("01", "notice"), "Will the show happen tonight?", ["Yes, whatever happens", "Only if the actor recovers", "No, it has been cancelled"], 0, "'Come what may, the show goes on tonight.'"),
      heard(X("01", "notice"), "Why didn't they cancel weeks ago?", ["Because the actor was so stubborn", "Because the tickets were sold", "Because the director refused"], 0, "'Were it not for his stubbornness, we would have cancelled.'"),
      heard(X("01", "notice"), "What does 'far be it from me to complain' introduce?", ["A complaint, said politely", "A compliment", "A refusal to speak"], 0, "The speaker complains while pretending not to."),
      ch("'Come what may' means…", ["whatever happens", "if something comes", "maybe it will come"], 0, "A fixed subjunctive expression."),
      ch("'Suffice it to say, the trip was a disaster' means…", ["I won't give details, but it was a disaster.", "It was enough of a disaster.", "The trip was sufficient."], 0, "Suffice it to say = I'll only say this."),
    ],
    [
      ch("What does 'Be that as it may' do in an argument?", ["It accepts a point but continues anyway.", "It strongly agrees.", "It asks for proof."], 0, "= Even so / That may be true, but…"),
      ch("'Were it not for the bridge, the village would be cut off.' This means…", ["If the bridge didn't exist, the village would be isolated.", "The bridge cut the village off.", "The village built the bridge."], 0, "Were it not for = if it weren't for."),
      ctx("A manager writes: 'Far be it from me to tell you how to do your job, but the report is late.'", "The real message is…", ["The report is late, and I'm criticising you.", "I won't mention the report.", "You are doing a perfect job."], 0, "A polite frame for criticism."),
      ch("'We'll work through the night if need be.' means…", ["if it's necessary", "if we need a break", "because we need it"], 0, "If need be = if necessary."),
      ch("Why can't you say 'Comes what may'?", ["It's a fixed old subjunctive form that doesn't change.", "Because 'may' is past tense.", "Because it needs a question mark."], 0, "Fixed expressions keep their old grammar."),
    ],
    [
      gap("Were it not", "your help, I would never have finished.", ["for"], "Were it not for + noun."),
      gap("Suffice it", "say, she was not pleased.", ["to"], "Suffice it to say."),
      tr("Rewrite using the word given.", "If it weren't for the rain, we'd be at the beach.", ["Were it not for the rain we would be at the beach", "Were it not for the rain we'd be at the beach"], "Were it not for + noun.", "Were"),
      dict(X("01", "dict"), ["Be that as it may we still have to finish by Friday", "Be that as it may, we still have to finish by Friday."]),
      say("Come what may, we will finish this together.", "Pause after MAY; stress FINish and toGETHer."),
    ],
    [
      fix(["Comes", "what may,", "I'll be there."], 0, ["Come"], "Fixed form: Come what may."),
      fix(["Were it not", "of", "the scholarship, I couldn't study."], 1, ["for"], "Were it not for."),
      fix(["Far be it", "for", "me to interfere, but…"], 1, ["from"], "Far be it from me."),
      ch("Which is wrong?", ["Suffice to it say, it rained.", "Suffice it to say, it rained.", "Suffice it to say that it rained."], 0, "Word order: Suffice it to say."),
      ch("Which is wrong?", ["Be it that as may, we continue.", "Be that as it may, we continue.", "That may be true, but we continue."], 0, "Fixed order: Be that as it may."),
    ],
    [
      ch("Where does 'Come what may' fit best?", ["The final line of a graduation speech", "A text asking for the bus time", "A shopping list"], 0, "Rhetorical, memorable moments."),
      ch("Best reply in a formal debate after a good point from the other side?", ["Be that as it may, the costs remain too high.", "Whatever, it's too expensive.", "Yes but no."], 0, "Accepts, then moves on with style."),
      ctx("A student uses 'be that as it may', 'suffice it to say' and 'far be it from me' in one short email.", "The effect is…", ["overdone and slightly comic", "perfectly natural", "too informal"], 0, "One per text is elegant; three is a costume."),
      ch("Most natural in a polite complaint letter?", ["Far be it from me to criticise, but the service was unacceptable.", "Far be it from me to criticise, but your service sucks.", "Far from me be it criticising the service."], 0, "Formal frame + formal vocabulary."),
      say("Were it not for my teachers, I would not be here today.", "Stress TEACHers and HERE; pause after TEACHers."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write the end of a speech (80 words or more) for your school's graduation. Use at least two rare structures (Come what may, Be that as it may, Were it not for, Suffice it to say, Far be it from me, If need be)." },
      { universe: "arts", text: "Write a short theatre review (80 words or more) of a show that almost went wrong. Use at least two rare structures (Come what may, Be that as it may, Were it not for, Suffice it to say, Far be it from me)." },
      { universe: "futures", text: "Write a letter to yourself in ten years (80 words or more). Use at least two rare structures (Come what may, Be that as it may, Were it not for, Suffice it to say, If need be)." },
    ],
    minWords: 80,
    checks: [
      { label: "Two rare structures (Come what may, Be that as it may, Were it not for, Suffice it to say, Far be it from me, If need be)", pattern: "\\b(come what may|be that as it may|were it not for|suffice it to say|far be it from|if need be|as it were|so be it|had it not been for)\\b", min: 2 },
    ],
    rubric: ["Each rare structure is in its fixed form.", "I used them for effect, not in every sentence.", "The rest of my writing matches the same register."],
    model: "Six years ago, most of us were terrified of this building. Suffice it to say, we have changed. Were it not for our teachers, many of us would have given up long before today. Some of you will say that exams are not everything, and be that as it may, we passed them together. Tomorrow we go in different directions: to universities, jobs and places we cannot yet imagine. Come what may, we will remember who helped us get here.",
  },
};

const fronting: NodePractice = {
  nodeId: "c2.fronting-and-deliberate-rule-breaking-fo",
  explain: "Expert writers move words to the front of a sentence for focus, and sometimes break 'school rules' on purpose. Fronting puts the important part first: 'That I can believe' (object first), 'Strange it may seem, but…' (adjective first), 'Gone are the days when…' (participle + inversion), 'Especially worrying is the cost.' Deliberate rule-breaking includes starting a sentence with And or But, using a fragment (a sentence with no main verb) for rhythm: 'A camera. A bank. A diary.' and one-word sentences: 'Silence.' These work because the reader knows the rule and notices the break. The key is control: in a formal report, fragments look like mistakes; in a column, speech or story, they create voice and pace.",
  pattern: ["Object fronting: That I can believe. · This much we know.", "Adjective fronting: Strange it may seem, but … · Rare as it is, …", "Participle + inversion: Gone are the days when … · Especially worrying is …", "Fragments for rhythm: A camera. A bank. A diary.", "Starting with And / But for emphasis", "Use in columns, speeches, stories; avoid in formal reports"],
  steps: [
    [
      heard(X("02", "notice"), "How does the speaker describe the phone?", ["As many things at once, in short fragments", "As a simple device for calls", "As something people should avoid"], 0, "'A camera. A bank. A diary.'"),
      heard(X("02", "notice"), "What does nobody deny?", ["That phones have made life easier", "That phones make us happier", "That phones are cheap"], 0, "'That it has made life easier, nobody denies.'"),
      heard(X("02", "notice"), "'Gone are the days when a phone was just a phone' means…", ["Phones are no longer simple.", "Phones have disappeared.", "Phones will soon be simple again."], 0, "Gone are the days = that time is over."),
      ch("In 'That I can believe', what has moved to the front?", ["The object (that)", "The verb", "The subject"], 0, "Normal order: I can believe that."),
      ch("'A camera. A bank. A diary.' These are…", ["fragments used for rhythm", "grammar mistakes in any text", "questions"], 0, "No main verb, on purpose."),
    ],
    [
      ch("Why front the object in 'This much we know'?", ["To focus on what is certain", "Because questions need it", "To make it past tense"], 0, "Fronting = focus."),
      ch("'Strange it may seem, but I miss school.' The normal order would be…", ["It may seem strange, but I miss school.", "Strange may it seem, but I miss school.", "It strange may seem, but I miss school."], 0, "Adjective moved to the front."),
      ctx("A newspaper column ends: 'And that, in the end, is the point.'", "Why start with 'And'?", ["For a strong, conversational final punch", "Because the writer forgot the rule", "It's required at the end of columns"], 0, "Deliberate rule-breaking for effect."),
      ch("Where would fragments look like mistakes?", ["In a formal lab report", "In a personal blog", "In a short story"], 0, "Formal reports need full sentences."),
      ch("'Especially worrying is the cost.' Why is the verb before the subject?", ["The adjective phrase is fronted, so the subject moves to the end for focus.", "It is a question.", "It's informal speech."], 0, "Fronting + inversion puts the new information last."),
    ],
    [
      gap("Gone", "the days when we could play outside until dark.", ["are"], "Gone are the days when…"),
      gap("Strange", "may seem, I actually enjoy revising.", ["it", "as it"], "Strange it may seem / Strange as it may seem."),
      tr("Rewrite, putting the object first for emphasis.", "I will never forget that moment.", ["That moment I will never forget", "That moment, I will never forget"], "Object fronting: That moment I will never forget."),
      dict(X("02", "dict"), ["Gone are the days when we wrote letters by hand"]),
      say("Gone are the days when phones were just phones.", "Stress GONE and JUST; slow down on 'just phones'."),
    ],
    [
      fix(["Gone", "is", "the days of cheap tickets."], 1, ["are"], "'The days' is plural: Gone are the days."),
      fix(["Strange", "may it seem,", "I agree with him."], 1, ["it may seem", "as it may seem"], "Strange it may seem (no inversion here)."),
      ch("Which use of a fragment is a mistake rather than a choice?", ["The results of the experiment. Which were significant.", "Silence. Then a knock at the door.", "A camera. A bank. A diary."], 0, "In a report, a clause without a main sentence just looks broken."),
      ch("Which is wrong?", ["That I can't believe it.", "That I can't believe.", "This much we know."], 0, "When 'that' is fronted, don't repeat the object with 'it'."),
      fix(["Especially worrying", "the cost is", "of repairs."], 1, ["is the cost"], "Fronted adjective phrase + inversion: Especially worrying is the cost."),
    ],
    [
      ch("Best opening line for a personal opinion column?", ["Gone are the days when summer meant freedom.", "The days are gone, which were the days of freedom.", "Summer. Freedom. Gone. Days. When."], 0, "Fronting with control."),
      ch("Which belongs in a scientific abstract?", ["The results suggest a significant effect.", "The results. Significant. Surprising.", "And the results? Wow."], 0, "Formal writing: full, neutral sentences."),
      ctx("A story: 'She opened the box. Empty. Completely empty.'", "The fragments…", ["create shock and slow the reader down", "are errors the editor should fix", "make the text more academic"], 0, "Rhythm and surprise."),
      ch("Best ending for a persuasive speech?", ["And that is why we cannot wait.", "That is why, therefore, consequently, we cannot wait.", "Why we cannot wait, that is."], 0, "Short, strong, rule-breaking 'And'."),
      say("Strange as it may seem, I miss the exams.", "Stress STRANGE and MISS; smile on 'exams'."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write the opening of a magazine column (80 words or more) about something that has changed since you were a child. Use fronting at least twice (Gone are the days…, That I can believe, Strange it may seem…) and at least one deliberate fragment." },
      { universe: "screens", text: "Write a column (80 words or more) about how social media has changed friendship. Use fronting at least twice (Gone are the days…, That much we know, Strange it may seem…) and at least one deliberate fragment." },
      { universe: "words", text: "Write the first paragraph of a short story (80 words or more) with a tense moment. Use fronting at least twice and at least one deliberate fragment for rhythm." },
    ],
    minWords: 80,
    checks: [
      { label: "Two fronted structures (Gone are the days, Strange it may seem, That I can…, This much we…, Especially … is)", pattern: "\\b(gone are the days|(strange|odd|rare|hard|true|tired|difficult|easy) (as )?it (may|might|was|is)|(that|this|this much|that much|that moment) (i|we|you|they|she|he|nobody|no one) (can|will|could|would|know|knew|never|denies|deny)|especially \\w+ (is|are|was|were))\\b", min: 2 },
      { label: "A short fragment for rhythm (one to four words ending with a full stop)", pattern: "(^|[.!?]\\s+)([A-Z][a-z']*)(\\s+[a-z']+){0,3}\\.(?=\\s|$)", min: 1 },
    ],
    rubric: ["My fronting puts the focus on the most important idea.", "Each fragment is a choice, and there are not too many.", "The column has a clear point of view."],
    model: "Gone are the days when a Saturday meant football in the street until dark. Now it means screens. Group chats. Notifications. Strange it may seem, but I miss being bored, because boredom made us invent games, argue about rules and build things out of nothing. That much I know for sure. Whether my younger cousins will ever feel that kind of freedom, I cannot say. And that, perhaps, is the saddest part of growing up online, for them and for us.",
  },
};

const aspect: NodePractice = {
  nodeId: "c2.aspect-for-nuance",
  explain: "At C2 you choose continuous and perfect forms not only for time but for feeling. 'I've been meaning to call you' means I've intended to for a while and feel a bit guilty. 'I was wondering if…' and 'I was hoping you might…' are more polite than 'I wonder' or 'I hope' because the past continuous creates distance. 'She'll have been working all night' (future perfect continuous) can describe a future point or make a confident guess about now: 'He'll have arrived by now.' 'He's always borrowing my charger' (present continuous + always) shows irritation. 'I'm loving this song' is informal and emphatic. Choosing the aspect changes the speaker's attitude, not just the timeline.",
  pattern: ["I've been meaning to … = I intended to for a while (and haven't yet)", "I was wondering if / I was hoping you might … = extra polite", "will have been + -ing: By June I'll have been studying here for three years.", "will have + past participle for a guess about now: She'll have landed by now.", "always + present continuous = irritation: He's always interrupting.", "I'm loving it = informal, enthusiastic"],
  steps: [
    [
      heard(X("03", "notice"), "How long has the speaker wanted to write to Marta?", ["For weeks", "Since yesterday", "For a year"], 0, "'I've been meaning to write to you for weeks.'"),
      heard(X("03", "notice"), "How does the speaker ask about Saturday?", ["Politely: 'I was wondering whether you might…'", "Directly: 'Come for coffee.'", "By asking Marta's friend"], 0, "Past continuous for politeness."),
      heard(X("03", "notice"), "How long will the speaker have worked on the project by Saturday?", ["Six months", "Six weeks", "One year"], 0, "'I'll have been working on this project for six months.'"),
      ch("'I've been meaning to tidy my room' suggests…", ["I intended to for a while but haven't done it.", "I have just tidied my room.", "I never want to tidy my room."], 0, "Intention over time, plus a little guilt."),
      ch("'He's always leaving his socks on the floor' shows…", ["irritation", "admiration", "a plan for the future"], 0, "always + present continuous."),
    ],
    [
      ch("Why is 'I was wondering if you could help' more polite than 'Can you help?'", ["The past form creates distance, so the request feels softer.", "It is about the past.", "It sounds more confident."], 0, "Distance = politeness."),
      ch("'She'll have finished the exam by now.' The speaker is…", ["making a confident guess about the present", "talking about next year", "giving an order"], 0, "will have + past participle = deduction."),
      ctx("At 10 p.m. a mum says: 'Leave him alone. He'll have been studying all day.'", "She means…", ["I'm fairly sure he has studied all day, so he's tired.", "He will start studying tomorrow.", "He didn't study at all."], 0, "Future perfect continuous for a guess."),
      ch("Which shows more annoyance?", ["You're always checking your phone.", "You check your phone.", "You checked your phone."], 0, "always + continuous = complaint."),
      ch("'I'm loving this new album.' This is…", ["informal and enthusiastic", "grammatically impossible", "very formal"], 0, "State verbs in the continuous for emphasis, in casual speech."),
    ],
    [
      gap("By next June, I'll have been", "here for three years.", ["living", "studying", "working"], "will have been + -ing for duration up to a future point."),
      gap("I've been", "to ask you about the trip.", ["meaning"], "I've been meaning to…"),
      tr("Make the request more polite with the word given.", "Can you send me the notes?", ["I was wondering if you could send me the notes", "I was wondering whether you could send me the notes", "I was wondering if you might send me the notes", "I was wondering whether you might send me the notes"], "Past continuous of 'wonder' + if/whether + could/might.", "wondering"),
      dict(X("03", "dict"), ["I was hoping you might give me some advice"]),
      say("I've been meaning to thank you for your help.", "Stress MEANing and THANK."),
    ],
    [
      fix(["By the time you arrive,", "we will be", "waiting for two hours."], 1, ["we will have been", "we'll have been"], "Duration up to a future point: will have been waiting."),
      fix(["I meant", "to call you", "for weeks, sorry."], 0, ["I have been meaning", "I've been meaning"], "Ongoing intention up to now: I've been meaning to."),
      fix(["She", "will have landed", "tomorrow at six."], 1, ["will land", "lands", "is landing"], "A scheduled future event, not a deduction: will land."),
      ch("Which is wrong?", ["I am wondering if you could have helped yesterday.", "I was wondering if you could help.", "I was wondering whether you were free."], 0, "Mixed up: use 'I was wondering if you could help'."),
      ch("Which is the most natural complaint?", ["My brother is always taking my headphones!", "My brother always is taking my headphones!", "My brother has always took my headphones!"], 0, "always between auxiliary and -ing."),
    ],
    [
      ch("Best opening for an email to a teacher you don't know well?", ["I was wondering whether you might have time to look at my essay.", "Look at my essay.", "I'm loving your class, so check my essay."], 0, "Polite distance."),
      ch("Your friend hasn't answered for hours. Best guess?", ["She'll have fallen asleep.", "She falls asleep.", "She will fall asleep yesterday."], 0, "will have + past participle = deduction."),
      ctx("In a job interview you say: 'I'm loving the idea of working here.'", "This sounds…", ["too casual for the situation", "perfectly formal", "rude"], 0, "Better: I'm very excited about…"),
      ch("Most tactful message after forgetting a friend's birthday?", ["I've been meaning to message you all week. Happy belated birthday!", "I didn't message you. Happy birthday.", "I'm always forgetting birthdays, so whatever."], 0, "Shows intention and apology."),
      say("By Friday, I'll have been working on this for a month.", "Stress FRIday and MONTH."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a polite email (80 words or more) to someone you'd like to ask for a favour. Use 'I've been meaning to…', a polite past continuous request (I was wondering / I was hoping), and one future perfect form (will have / will have been)." },
      { universe: "science", text: "Write an email (80 words or more) to a scientist you admire asking for a short interview. Use 'I've been meaning to…', 'I was wondering / hoping…', and one future perfect form." },
      { universe: "screens", text: "Write a message (80 words or more) to a game studio asking for feedback on your fan project. Use 'I've been meaning to…', 'I was wondering / hoping…', and one future perfect form." },
    ],
    minWords: 80,
    checks: [
      { label: "I've been meaning to …", pattern: "\\b(i've|i have|we've|we have) been meaning to\\b", min: 1 },
      { label: "A polite past continuous (I was wondering / I was hoping)", pattern: "\\b(i|we) (was|were) (wondering|hoping)\\b", min: 1 },
      { label: "A future perfect (will have / will have been)", pattern: "\\b(will|'ll) have (been )?\\w+(ed|en|ing|t)?\\b", min: 1 },
    ],
    rubric: ["My requests sound polite but not grovelling.", "Each aspect choice adds a feeling (intention, politeness, duration).", "My email has a clear purpose and closing."],
    model: "Dear Ms Rojas, I've been meaning to write to you since your talk at our school in March. I was wondering whether you might have twenty minutes next month for a short interview for our school magazine. By then, our team will have been working on the issue for almost a year, and your experience would really help us. I was hoping we could meet online, at any time that suits you. Thank you so much for considering it. Best wishes, Daniela",
  },
};

const reporting: NodePractice = {
  nodeId: "c2.reporting-with-stance",
  explain: "Reporting verbs carry the writer's attitude. 'He said' is neutral. 'He claimed' suggests doubt. 'He admitted' or 'conceded' means he accepted something negative. 'He insisted' or 'maintained' means he kept saying it despite opposition. 'He acknowledged' is a fair, formal admission; 'he dismissed it' means he rejected it as unimportant; 'he alleged' is an accusation without proof. Passive reporting lets you report without taking responsibility: 'She is alleged to have lied', 'The painting is believed to have been stolen', 'It has been suggested that…' Adverbs add stance too: reportedly, allegedly, purportedly, admittedly. At C2 you choose the verb deliberately, because the reader reads your opinion in it.",
  pattern: ["Neutral: say, state, report, explain", "Doubt: claim, allege, purport", "Admission: admit, concede, acknowledge", "Persistence: insist, maintain", "Rejection: dismiss, deny, reject", "Passive distance: She is alleged / believed / said to have + past participle · It has been suggested that …", "Adverbs: reportedly, allegedly, admittedly"],
  steps: [
    [
      heard(X("04", "notice"), "What did the president admit?", ["That some receipts were missing", "That he had stolen money", "That the treasurer was right"], 0, "'he conceded that some receipts were missing'."),
      heard(X("04", "notice"), "What did the former treasurer say?", ["That the accounts had been changed", "That the money was spent properly", "That he would resign"], 0, "'claimed that the accounts had been changed'."),
      heard(X("04", "notice"), "How did the president react to the accusation?", ["He dismissed it as ridiculous.", "He accepted it.", "He didn't hear it."], 0, "'an accusation he dismissed as ridiculous'."),
      ch("Which verb suggests the writer doubts the statement?", ["claimed", "explained", "stated"], 0, "claim = not necessarily true."),
      ch("'She conceded that the plan was expensive' means…", ["She accepted a point against her.", "She refused to talk about the cost.", "She proved the plan was cheap."], 0, "concede = admit something unwelcome."),
    ],
    [
      ch("'He insisted that he was innocent' suggests…", ["he said it firmly, maybe more than once, despite doubts", "he wasn't sure", "he confessed"], 0, "insist = firm, repeated."),
      ch("Why might a journalist write 'The actor is alleged to have hit a photographer'?", ["To report an accusation without saying it is true", "Because it is proven", "Because it happened in the future"], 0, "Passive reporting = distance."),
      ctx("Two headlines: A) 'Minister explains delay.' B) 'Minister makes excuses for delay.'", "Which shows the writer's criticism?", ["B", "A", "Neither"], 0, "Word choice reveals stance."),
      ch("'Admittedly, the film is too long, but…' The writer…", ["accepts a weakness before arguing", "hates the film", "is quoting someone else"], 0, "admittedly = I accept this."),
      ch("Which verb shows the speaker rejected an idea as unimportant?", ["dismissed", "acknowledged", "maintained"], 0, "dismiss = treat as not worth considering."),
    ],
    [
      gap("The singer is said to", "written the song in one night.", ["have"], "be said to have + past participle for the past."),
      gap("The coach", "that the team had played badly, but blamed the referee too.", ["admitted", "conceded", "acknowledged"], "Accepting a negative point."),
      tr("Rewrite using the word given, starting with 'The painting'.", "People believe that someone stole the painting in 1990.", ["The painting is believed to have been stolen in 1990"], "be believed to have been + past participle.", "believed"),
      dict(X("04", "dict"), ["The minister is alleged to have ignored the report"]),
      say("He insisted that he had done nothing wrong.", "Stress inSISted and NOTHing."),
    ],
    [
      fix(["She is said", "to steal", "the money last year."], 1, ["to have stolen"], "Past action: to have + past participle."),
      fix(["The company denied", "to have", "broken the law."], 1, ["having"], "deny + -ing: denied having broken."),
      fix(["He insisted", "to be", "innocent."], 1, ["that he was", "on being"], "insist that + clause / insist on + -ing."),
      ch("Which is wrong?", ["It is alleged him to have lied.", "He is alleged to have lied.", "It is alleged that he lied."], 0, "Two patterns: He is alleged to… / It is alleged that…"),
      ch("Which is wrong?", ["She suggested me to apply.", "She suggested that I apply.", "She suggested applying."], 0, "suggest does not take object + to-infinitive."),
    ],
    [
      ch("You want to report a rumour fairly in a school newspaper. Best choice?", ["The principal is reported to be leaving next year.", "The principal is leaving next year, obviously.", "The principal admitted leaving next year."], 0, "Reporting without claiming it as fact."),
      ch("The scientist accepted one small error in her study. Best verb?", ["acknowledged", "claimed", "insisted"], 0, "acknowledge = fair, formal admission."),
      ctx("A review: 'The director claims this is his most personal film.'", "Compared to 'says', 'claims' adds…", ["a hint of doubt", "extra praise", "nothing"], 0, "claim implies the reader shouldn't simply believe it."),
      ch("Most neutral report of a disagreement?", ["The mayor said the park would stay open; residents said it would close.", "The mayor ridiculously claimed the park would stay open.", "Residents insisted, as usual, on complaining."], 0, "Neutral verbs for both sides."),
      say("Admittedly, the plan has weaknesses, but it is our best option.", "Pause after adMITtedly; stress WEAKnesses and BEST."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short news report (80 words or more) about an argument at your school or in your town. Use at least three different stance verbs (claimed, conceded, insisted, acknowledged, dismissed, denied) and one passive report (is said / alleged / believed to have)." },
      { universe: "science", text: "Report on a disagreement between two scientists (80 words or more). Use three stance verbs (claimed, conceded, insisted, acknowledged, dismissed) and one passive report (is said / believed to have)." },
      { universe: "past", text: "Report on a historical mystery (80 words or more). Use three stance verbs (claimed, conceded, insisted, acknowledged, dismissed) and one passive report (is said / believed to have)." },
    ],
    minWords: 80,
    checks: [
      { label: "Three stance verbs (claimed, conceded, insisted, acknowledged, dismissed, denied, admitted, maintained, alleged)", pattern: "\\b(claim|claimed|claims|concede|conceded|concedes|insist|insisted|insists|acknowledge|acknowledged|acknowledges|dismiss|dismissed|dismisses|deny|denied|denies|admit|admitted|admits|maintain|maintained|maintains|allege|alleged|alleges)\\b", min: 3 },
      { label: "A passive report (is said / alleged / believed / thought to have)", pattern: "\\b(is|are|was|were) (said|alleged|believed|thought|reported|rumoured|rumored|understood|known) to (have|be)\\b", min: 1 },
    ],
    rubric: ["My verbs show attitude on purpose.", "I separated facts from claims.", "Both sides are reported fairly."],
    model: "A row has broken out over the new canteen menu. Student leaders claimed that portions had become smaller since the new company took over. The head teacher acknowledged that prices had risen, but insisted that the food was healthier. The company is said to have cut costs by using cheaper suppliers, an allegation its manager dismissed as untrue. He conceded, however, that some dishes had not been popular. A meeting with parents and students is planned for next week to discuss the menu.",
  },
};

const implied: NodePractice = {
  nodeId: "c2.implied-and-mixed-conditionals-in-style",
  explain: "Conditions do not always need 'if'. 'Given more time, I'd have finished' (= if I'd had more time). 'Without her help, we'd still be lost.' 'But for the rain, the match would have gone ahead.' 'I'd have called, but my phone died' (the condition is in the second clause). 'Otherwise' carries a condition too: 'Hurry, otherwise we'll miss it.' Mixed conditionals connect different times: a past condition with a present result ('If I had taken that job, I'd be living in Lima now'), or a present condition with a past result ('If she weren't so careful, she would have failed'). These forms let writers compress ideas and sound natural rather than mechanical.",
  pattern: ["Given + noun, … would (have) …", "Without / But for + noun, … would (have) …", "would have + past participle, but … (implied condition)", "…, otherwise …", "Past → present: If I had …, I would be … now", "Present → past: If I weren't …, I would have …"],
  steps: [
    [
      heard(X("05", "notice"), "Why didn't they finish the mural?", ["They didn't have enough time.", "They ran out of paint.", "The neighbours stopped them."], 0, "'Given more time, we would have finished the mural.'"),
      heard(X("05", "notice"), "How did the neighbours affect the project?", ["Their help made it much faster.", "They complained about it.", "They painted a different wall."], 0, "'Without the neighbours' help, we'd still be painting the first wall.'"),
      heard(X("05", "notice"), "Why didn't the cousin help?", ["She was away.", "She wasn't asked.", "She was ill."], 0, "'I'd have asked my cousin to help, but she was away.'"),
      ch("'Given more time' means…", ["if we had had more time", "because we gave time", "after a long time"], 0, "Given + noun = implied condition."),
      ch("'If I had studied medicine, I'd be a doctor now.' The times are…", ["past condition, present result", "present condition, future result", "both in the past"], 0, "A mixed conditional."),
    ],
    [
      ch("'But for the goalkeeper, we would have lost.' means…", ["If it hadn't been for the goalkeeper, we'd have lost.", "Except the goalkeeper, everyone lost.", "The goalkeeper wanted us to lose."], 0, "But for = if it hadn't been for."),
      ch("Where is the condition in 'I'd have come, but nobody told me'?", ["Hidden in 'but nobody told me' (= if someone had told me)", "In 'I'd have come'", "There isn't one"], 0, "Implied condition."),
      ctx("'Take an umbrella, otherwise you'll get soaked.'", "'Otherwise' means…", ["if you don't", "however", "in addition"], 0, "otherwise = if not."),
      ch("'If he weren't so stubborn, he'd have accepted the offer.' This means…", ["He is stubborn (always), so he didn't accept.", "He was stubborn only yesterday.", "He will accept tomorrow."], 0, "Present state → past result."),
      ch("Which is the most concise version?", ["Without your advice, I'd have failed.", "If you had not given me your advice, then I would have failed.", "Your advice, if not given, would make failure."], 0, "Without + noun compresses the condition."),
    ],
    [
      gap("", "more practice, she would have won the final.", ["Given", "With"], "Given / With + noun = if she had had."),
      gap("If I had saved my money, I", "be travelling now.", ["would", "could", "might"], "Past condition → present result."),
      tr("Rewrite using the word given.", "If it hadn't been for the map, we would have got lost.", ["Without the map we would have got lost", "Without the map, we would have got lost", "Without the map we'd have got lost", "Without the map, we'd have got lost"], "Without + noun.", "Without"),
      dict(X("05", "dict"), ["Without her help we would still be lost", "Without her help, we would still be lost.", "Without her help we'd still be lost"]),
      say("Given more time, I would have done it differently.", "Pause after TIME; stress DIFferently."),
    ],
    [
      fix(["If I had taken the job,", "I would have lived", "in Lima now."], 1, ["I would be living", "I'd be living", "I would live", "I'd live"], "'now' → present result: I would be living."),
      fix(["Without", "to have", "your help, I'd have failed."], 1, ["having had"], "Without + noun or -ing: Without having had your help / Without your help."),
      fix(["If she wasn't so shy,", "she would speak", "at the meeting yesterday."], 1, ["she would have spoken", "she'd have spoken"], "Past result: would have spoken."),
      ch("Which is wrong?", ["Given more time, I would finish it yesterday.", "Given more time, I would have finished it.", "Given more time, I would finish it."], 0, "Yesterday → would have finished."),
      ch("Which is wrong?", ["But for you help, we would have lost.", "But for your help, we would have lost.", "But for you, we would have lost."], 0, "But for + noun/pronoun: your help / you."),
    ],
    [
      ch("Most natural apology for missing a party?", ["I'd have come, but I had a fever.", "If I wouldn't have a fever, I came.", "I came, but fever."], 0, "Implied condition, natural speech."),
      ch("Best line for a thank-you speech to a coach?", ["Without you, none of us would be standing here today.", "If you hadn't been there, we didn't stand here.", "Without you, we stand here."], 0, "Without + mixed result (past help → present)."),
      ctx("A history essay: 'Had the bridge not collapsed, the army would have reached the city.'", "This style is…", ["formal and suitable", "too informal", "grammatically wrong"], 0, "Inverted conditional fits academic writing."),
      ch("Which sounds least mechanical in a story?", ["But for the dog barking, nobody would have woken up.", "If the dog had not barked, then nobody would have woken up, so the dog barked.", "The dog barked if nobody woke up."], 0, "Compact and natural."),
      say("If I had listened to my parents, I wouldn't be in this mess now.", "Stress LIStened and NOW."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about a decision in your life (80 words or more) that changed things. Use one mixed conditional (If I had …, I would be … now) and two implied conditions (Given …, Without …, But for …, I'd have …, but …, otherwise)." },
      { universe: "past", text: "Write about a historical turning point (80 words or more). Use one mixed conditional and two implied conditions (Given …, Without …, But for …, otherwise)." },
      { universe: "futures", text: "Imagine you are 30 and looking back (80 words or more). Use one mixed conditional and two implied conditions (Given …, Without …, But for …, otherwise)." },
    ],
    minWords: 80,
    checks: [
      { label: "A mixed conditional (If … had …, … would/could be … now / today)", pattern: "\\bif\\b[^.!?]*\\bhad\\b[^.!?]*\\b(would|could|might|'d)\\b(?![^.!?]*\\bhave\\b)[^.!?]*", min: 1 },
      { label: "Two implied conditions (Given …, Without …, But for …, otherwise, I'd have … but)", pattern: "\\b(given (more|enough|the)|without (the|my|your|her|his|their|our|a|any)|but for|otherwise|(would|'d) have \\w+, but)\\b", min: 2 },
    ],
    rubric: ["My time references are logical (past cause, present result).", "Implied conditions make my writing more compact.", "The reader understands what really happened."],
    model: "Three years ago, I almost quit the school orchestra. If I had quit, I would be a very different person now. I'd have stopped, but my teacher convinced me to stay for one more concert. Without her patience, I would never have learnt the violin properly. Given more time back then, I might have practised harder, but I was busy with exams. Today I play in a youth orchestra, and I tell younger students to keep going, otherwise they may regret it.",
  },
};

const ellipsis: NodePractice = {
  nodeId: "c2.ellipsis-and-substitution-in-literary-styl",
  explain: "Literary and elegant writing leaves things out when the reader can recover them. Gapping removes a repeated verb: 'Ana chose the mountain path; her brother, the road' (= her brother chose the road). Contrast pairs balance two halves: 'Tired she may have been; defeated she was not.' 'Some walked, others ran.' 'Some did, others not.' Substitution replaces a clause with 'so' or 'not': 'Will it rain? I hope not.' 'Is she coming? I believe so.' 'If so, …' 'If not, …' The effect is speed, balance and confidence. The risk is confusion: only leave out what the reader already knows from the sentence before.",
  pattern: ["Gapping: Ana chose the path; her brother, the road.", "Balanced contrast: Tired she may have been; defeated she was not.", "Some …, others …: Some walked, others ran.", "so / not: I hope so. · I'm afraid not. · I believe so. · Certainly not.", "If so, … · If not, …", "Only leave out what the reader can recover"],
  steps: [
    [
      heard(X("06", "notice"), "How did the woman feel?", ["Tired but not defeated", "Defeated and tired", "Neither tired nor defeated"], 0, "'Tired she may have been; defeated she was not.'"),
      heard(X("06", "notice"), "Which route did her brother take?", ["The road", "The mountain path", "He didn't go"], 0, "'Ana chose the mountain path; her brother, the road.'"),
      heard(X("06", "notice"), "Did she hope to finish before dark?", ["Yes", "No", "She didn't care"], 0, "'Would she finish before dark? She hoped so.'"),
      ch("In 'Some walked, others ran', what is left out?", ["Nothing essential: two short balanced clauses", "The verb 'ran' in the first half", "The subject 'some' in the second half"], 0, "A balanced contrast pair."),
      ch("'I'm afraid not' replaces…", ["a whole negative clause", "a single noun", "a question word"], 0, "Substitution with 'not'."),
    ],
    [
      ch("'Ana chose the mountain path; her brother, the road.' What does the comma replace?", ["chose", "and", "the"], 0, "Gapping removes the repeated verb."),
      ch("Why write 'Tired she may have been; defeated she was not' instead of 'She was tired but not defeated'?", ["Balance and emphasis create a literary effect.", "It is shorter.", "It is less formal."], 0, "Fronting + contrast for style."),
      ctx("'Is the museum open on Mondays? If so, we'll go then.'", "'If so' means…", ["if it is open on Mondays", "if we want to", "if it is closed"], 0, "so = the previous clause."),
      ch("Which reply means 'I don't think it will rain'?", ["I hope not.", "I hope so.", "I don't hope so."], 0, "hope not = hope it won't."),
      ch("When is ellipsis a bad idea?", ["When the reader can't tell what is missing", "In a novel", "In a speech"], 0, "Only omit what is recoverable."),
    ],
    [
      gap("Will you be at the party? I'm afraid", ".", ["not"], "I'm afraid not."),
      gap("Is the test on Friday? I believe", ".", ["so"], "I believe so."),
      tr("Rewrite using gapping (remove the repeated verb).", "Lucas ordered pasta and Sofía ordered fish.", ["Lucas ordered pasta; Sofía, fish", "Lucas ordered pasta, Sofía, fish", "Lucas ordered pasta and Sofía fish", "Lucas ordered pasta; Sofía fish"], "Gapping: the second 'ordered' is understood."),
      dict(X("06", "dict"), ["Some stayed until the end; others left early", "Some stayed until the end, others left early"]),
      say("Tired she may have been; defeated she was not.", "Stress TIRED and deFEATed; pause at the semicolon."),
    ],
    [
      fix(["Will he call?", "I don't hope", "so."], 1, ["I hope not"], "With hope: I hope not (not 'I don't hope so')."),
      fix(["Is the shop open?", "If it,", "let's go now."], 1, ["If so,"], "If so = if it is open."),
      fix(["Some agreed,", "others not agreed."], 1, ["others did not", "others not", "others didn't"], "Either repeat the auxiliary (others did not) or omit the verb (others not)."),
      ch("Which is unclear because too much is missing?", ["She bought a car; he, the house; they, never.", "She bought a car; he, a bike.", "Some laughed; others cried."], 0, "'they, never' cannot be recovered."),
      ch("Which is wrong?", ["Do you think she'll win? I think it.", "Do you think she'll win? I think so.", "Do you think she'll win? I don't think so."], 0, "think so, not think it."),
    ],
    [
      ch("Best final line for a story about a runner?", ["Slow she may have been; finished she had.", "She was slow and she was finished, and she had finished.", "Slow. Finish. She."], 0, "Balanced contrast with control."),
      ch("Most elegant summary for a report?", ["Half the students preferred online classes; the rest, face-to-face lessons.", "Half the students preferred online classes; the rest preferred face-to-face lessons, they preferred.", "Half online, rest, the face."], 0, "Gapping keeps it concise and clear."),
      ctx("A teacher asks: 'Has everyone finished?' A student answers: 'Not quite.'", "This answer is…", ["natural, using ellipsis", "rude", "grammatically incomplete in a bad way"], 0, "Ellipsis is normal in speech."),
      ch("Which reply sounds most natural?", ["Are you coming tonight? I doubt it.", "Are you coming tonight? I doubt so.", "Are you coming tonight? I doubt not."], 0, "doubt it (not 'doubt so')."),
      say("Some stayed until the end; others left early.", "Balance the two halves; stress END and EARly."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short literary paragraph (80 words or more) about a race, a journey or a competition. Use one gapped sentence (A did X; B, Y), one balanced contrast (Tired she may have been; defeated she was not / Some …, others …) and one substitution with so or not." },
      { universe: "words", text: "Write the climax of a short story (80 words or more). Use one gapped sentence, one balanced contrast (Some …, others … / Tired she may have been…), and one substitution with so or not." },
      { universe: "arts", text: "Describe a concert or show from the audience (80 words or more). Use one gapped sentence, one balanced contrast (Some …, others …), and one substitution with so or not." },
    ],
    minWords: 80,
    checks: [
      { label: "A gapped or balanced sentence (A did X; B, Y / Some …, others …)", pattern: "(;\\s*(her|his|their|my|the|a|an)?\\s*\\w+,\\s|\\bsome\\b[^.!?]*\\bothers\\b)", min: 1 },
      { label: "A balanced contrast (adjective + subject + may have been / was …; … not)", pattern: "\\b\\w+ (he|she|they|we|i|it) (may|might) (have been|be)\\b", min: 1 },
      { label: "Substitution with so or not (I hope so, I'm afraid not, If so, If not, Certainly not)", pattern: "\\b((hope|think|believe|suppose|guess|expect|afraid|hoped|thought|believed) (so|not)|if (so|not)|certainly not|of course not|probably not)\\b", min: 1 },
    ],
    rubric: ["Every omitted word can be recovered by the reader.", "My balanced sentences have a clear rhythm.", "The paragraph has a strong emotional moment."],
    model: "The race began at dawn. Some runners sprinted ahead; others, wiser, saved their strength. Marisol kept a steady pace; her rival, a desperate one. At the last hill, her legs were burning. Exhausted she may have been; beaten she was not. Could she still win? She believed so. Would she stop to rest? Certainly not. When she crossed the line, the crowd went silent, then exploded. Her rival finished second; the favourite, fifth. Nobody had expected it, least of all Marisol.",
  },
};

export const C2_GRAMMAR: NodePractice[] = [rare, fronting, aspect, reporting, implied, ellipsis];
