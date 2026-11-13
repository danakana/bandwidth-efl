/**
 * C2 Midpoint and Gate. Original texts written for Bandwidth EFL.
 * Listening audio: ElevenLabs AI voices, in the public `listening` bucket.
 */
import { ch, gap } from "../practice/helpers";
import type { BandAssessment } from "./types";

export const C2_ASSESSMENT_CLIPS: { file: string; voice: string; script: string }[] = [
  { file: "p/c2mid-l1.mp3", voice: "3f6pec3wODJsjTqtcNI2",
    script: "Good evening. Tonight's lecture is about a word we all think we understand: nostalgia. It was coined in 1688 by a Swiss medical student, who regarded it as a disease, a dangerous homesickness suffered by soldiers far from home. For centuries, doctors treated it accordingly. Today, by contrast, psychologists tend to see nostalgia as broadly healthy. Studies suggest that recalling fond memories can reduce loneliness and give people a sense that their lives have meaning. Having said that, nostalgia is not without its risks. Taken too far, it can turn the past into a fantasy, and a fantasy, however comforting, is a poor guide to the future." },
  { file: "p/c2mid-l2.mp3", voice: "QW1sSL71Pw5oHbFDen25",
    script: "Hey, it's Jess. So, the camping trip. Not exactly our finest weekend, was it? I reckon the tent's had it, to be honest. Anyway, I've been meaning to ask: are you still keen on the music festival in March? Tickets go on sale this arvo, and they'll be gone in a tick. If you could sort the tickets, I'd be happy to drive. Let me know, yeah? No worries if not." },
  { file: "p/c2gate-l1.mp3", voice: "MAy1fRIg5hTqbhiwOUyh",
    script: "Friends, we were told the old cinema was too old, too expensive and too far gone to save. We were told no one would come. We were told to let it go. And yet, last Saturday, four hundred people queued around the block to watch a film in a building that was meant to be demolished. So I ask you: is this a problem for the council, or is it an opportunity? It is not a building we are fighting for. It is a community. And communities, unlike buildings, are not so easily knocked down." },
  { file: "p/c2gate-l2.mp3", voice: "tPDVQaZ6fdDCUmYpHyYd",
    script: "And now the rest of the day's news. The embattled owner of a chain of fitness centres has vowed to fight on, after a probe into unpaid wages. Former staff claim they were owed months of pay; the company insists that all payments were made on time, although it concedes that some records are incomplete. The owner is alleged to have moved money abroad, a claim his lawyers dismissed as absurd. Meanwhile, the city council has been slammed for axing its youth music programme, a decision it describes, somewhat optimistically, as temporary." },
];

export const C2_MIDPOINT: BandAssessment = {
  band: "C2",
  kind: "midpoint",
  title: "C2 Midpoint",
  story: "Halfway through C2. A four-skill check on voice, style and reading between the lines.",
  bar: 70,
  reading: [{
    id: "c2-mid-r1",
    title: "In defence of the unfinished",
    text:
`There is a peculiar pleasure in an unfinished thing. A half-built cathedral, a novel abandoned at chapter nine, a sketch in which the artist never got round to the hands: each invites us to imagine what might have been. And imagine we do, often with more affection than we would feel for the completed work.

The cult of completion is, by contrast, a relatively modern invention. Our schools reward the finished essay, not the brilliant opening that collapsed; our workplaces measure projects delivered, not ideas explored. Small wonder, then, that so many of us feel a vague guilt about the language course we dropped, the guitar gathering dust, the blog that stopped after three posts. Be that as it may, I would suggest that this guilt is not only unnecessary but, in some cases, positively harmful.

Consider the alternative. A person who believes that nothing is worth starting unless it will be finished will, logically, start very little. Experiment becomes expensive; curiosity, a risk. Were it not for the willingness to begin things we may never complete, few of us would discover what we genuinely love. The abandoned guitar taught its owner that she preferred singing; the dropped course revealed that what she really wanted was to travel, not to study grammar.

None of this is an argument for giving up at the first sign of difficulty. Persistence matters, and some things (a degree, a promise, a bridge) are worth very little half-done. The point, rather, is that we might judge our unfinished projects less harshly. Not every beginning is a commitment. Some are simply questions, and a question that has been answered, even with "no, not this", has done its job.

Tired of starting things, you may be. Defeated by them, I hope not.`,
    items: [
      ch("What is the writer's main argument?", ["We shouldn't feel guilty about every unfinished project, because starting things has value in itself.", "We should always finish what we start, because unfinished projects make us feel guilty and unproductive.", "Schools should stop giving grades, because grades make students afraid of starting new projects."], 0, "Paragraphs 2–4."),
      ch("What does 'the cult of completion' refer to?", ["A modern belief that only finished things count", "A group of people who never give up on projects", "A popular method for finishing projects quickly"], 0, "Schools and workplaces reward only finished work."),
      ch("What is the function of 'Be that as it may' in paragraph 2?", ["It accepts that guilt is common before arguing it is harmful.", "It agrees that unfinished projects are usually a bad sign.", "It introduces an example that supports the previous sentence."], 0, "Concession, then the writer's counter-claim."),
      ch("How does the writer limit the argument in paragraph 4?", ["Some things, like degrees and promises, really do need to be finished.", "Most projects should be abandoned as soon as they become difficult or boring.", "People who persist with every project tend to be less happy than others."], 0, "'None of this is an argument for giving up…'"),
      ch("The final line uses…", ["fronting and ellipsis for a memorable, balanced ending", "a rhetorical question that invites the reader to decide", "a quotation from an expert to support the argument"], 0, "'Tired… you may be. Defeated…, I hope not.'"),
      gap("'Were it not", "the willingness to begin things…' (= if it weren't for)", ["for"], "Were it not for."),
    ],
  }],
  listening: [
    {
      id: "c2-mid-l1", title: "A public lecture", audio: "p/c2mid-l1.mp3", speaker: "A lecturer from England",
      items: [
        ch("How was nostalgia first understood?", ["As a disease, a dangerous homesickness", "As a type of poetry about lost homes", "As a pleasant, harmless kind of memory"], 0, "'who regarded it as a disease'."),
        ch("How do psychologists see nostalgia today?", ["As broadly healthy", "As a serious illness", "As a myth"], 0, "'psychologists tend to see nostalgia as broadly healthy'."),
        ch("What risk does the lecturer describe?", ["Taken too far, it turns the past into a fantasy.", "It makes people forget what really happened in the past.", "It can still cause serious physical illness today."], 0, "'a fantasy… is a poor guide to the future'."),
      ],
    },
    {
      id: "c2-mid-l2", title: "A voice message", audio: "p/c2mid-l2.mp3", speaker: "A voice message from a friend in Australia",
      items: [
        ch("How did the camping trip go?", ["Badly", "Brilliantly", "It was cancelled"], 0, "'Not exactly our finest weekend' = understatement."),
        ch("When do festival tickets go on sale?", ["This afternoon", "Next March", "Tomorrow morning"], 0, "arvo = afternoon."),
        ch("What does Jess offer?", ["To drive, if you buy the tickets", "To buy the tickets, if you drive", "To lend you her new tent"], 0, "'If you could sort the tickets, I'd be happy to drive.'"),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write a review for a cultural magazine (200 words or more) of a book, film, series or album you know well. Name techniques and their effects, give a balanced judgement, and let your own voice come through." },
      { text: "Write a critical response (200 words or more) to the article 'In defence of the unfinished'. Evaluate how the writer persuades (techniques and their effects), say where you agree and disagree, and let your own voice come through." },
    ],
    minWords: 200,
    checks: [
      { label: "Two effect verbs (creates, builds, undermines, reinforces, exposes, sustains, evokes…)", pattern: "\\b(creates?|builds?|undermines?|reinforces?|emphasi[sz]es?|exposes?|sustains?|heightens?|intensifies|rewards?|conveys?|evokes?)\\b", min: 2 },
      { label: "A balanced judgement (and yet, however, although, whereas)", pattern: "\\b(and yet|however|although|whereas|nevertheless|even so)\\b", min: 1 },
      { label: "A stylistic structure (fronting, inversion, Be that as it may, Were it not for, rare structures)", pattern: "\\b(be that as it may|were it not for|suffice it to say|come what may|gone are the days|rarely (do|does|did|have|has)|seldom (do|does|did|have|has)|never (have|has|had|did)|not only (do|does|did|is|was))\\b|\\b\\w+ (as|though) (it|they|he|she|this|that) (may|might)\\b", min: 1 },
      { label: "A personal voice marker (I suspect, Frankly, To my mind, I would argue)", pattern: "\\b(i suspect|frankly|to my mind|i would argue|i'd argue|for my part|admittedly)\\b", min: 1 },
    ],
    rubric: ["I analysed techniques, not just the story.", "My judgement is balanced and supported.", "My voice is confident and the style is varied.", "Every paragraph moves the argument forward."],
    model: "Rarely does an essay about failure feel so encouraging. 'In defence of the unfinished' argues that our abandoned projects deserve less guilt, and for the most part it succeeds.\n\nThe writer's greatest strength is her choice of examples. The half-built cathedral and the dusty guitar evoke a familiar, gentle regret, and they build trust before the real argument begins. Her use of concession is equally skilful: 'Be that as it may' acknowledges the reader's guilt rather than dismissing it, which makes her counter-claim easier to accept. The balanced final line, 'Tired of starting things, you may be. Defeated by them, I hope not', creates an ending that lingers.\n\nAnd yet I am not entirely convinced. Frankly, the essay underestimates how often 'exploring' becomes an excuse. The guitar may have taught its owner that she preferred singing; it may equally have taught her to quit whenever things became hard. The writer does limit her argument in the fourth paragraph, but the limit feels like an afterthought.\n\nTo my mind, the essay is wise, warm and slightly too forgiving. It is still well worth reading, especially for anyone with an unfinished novel in a drawer or a half-learnt language on their conscience.",
  },
  speaking: {
    prompts: [
      { text: "Talk for about 90 seconds: you are asking a local café to host a monthly open-mic night for students. Anchor your request, offer something in return (If you could…, we'd be prepared to…), add a condition, and close with a win-win line." },
      { text: "Talk for about 90 seconds: you are negotiating with your school's head for a later start time on Fridays. Anchor your request, offer something in return (If you could…, we'd be prepared to…), add a condition, and close with a win-win line." },
    ],
    minWords: 120,
    seconds: 80,
    checks: [
      { label: "A trade (If you could …, we'd / we would be prepared / willing / happy to …)", pattern: "\\bif you could\\b[^.!?]*\\b(we'd|we would|i'd|i would) be (prepared|willing|happy|glad)\\b", min: 1 },
      { label: "A condition (provided that, as long as, on condition that)", pattern: "\\b(provided|providing|as long as|on condition that)\\b", min: 1 },
      { label: "A win-win line (suits us both, mutually beneficial, works for everyone)", pattern: "\\b(suits us both|suit us both|suits everyone|mutually beneficial|both sides|works for (everyone|both of us|us both)|win-win)\\b", min: 1 },
      { label: "A polite softener or anchor (I was wondering, we're looking for, I'm afraid)", pattern: "\\b(i was wondering|we were wondering|we're looking for|we are looking for|i'm afraid|would you be open to)\\b", min: 1 },
    ],
    rubric: ["My request was clear and confident.", "I traded rather than begged.", "My tone was warm, firm and professional.", "I closed the deal clearly."],
    model: "Good afternoon, and thanks for seeing me. We're looking for a venue for a monthly open-mic night for students, on the last Friday of each month. I was wondering whether your café might be the right place. If you could give us the back room from seven to nine, we'd be prepared to promote your café on all our social media and on the school noticeboard. We'd also bring at least thirty people, who'd buy drinks and snacks. Provided that we leave the room exactly as we found it, would you be open to a three-month trial? I'm confident this would be mutually beneficial: you get new customers, and we get a stage. So, shall we start in March, and see how it goes?",
  },
};

export const C2_GATE: BandAssessment = {
  band: "C2",
  kind: "gate",
  title: "C2 Gate",
  story: "The final check of Bandwidth. Pass it, your teacher confirms your writing and speaking, and you've completed every band.",
  bar: 75,
  reading: [
    {
      id: "c2-gate-r1",
      title: "The tyranny of the summary",
      text:
`We live, it is often said, in an age of information overload. Less often noticed is the industry that has grown up to rescue us from it: the summary. Apps condense books into fifteen-minute digests; newsletters reduce the week's events to five bullet points; students, pressed for time, read the summary of the summary. The promise is seductive. Why spend ten hours on a book when its ideas can be absorbed over breakfast?

The answer, I would argue, is that a book is not merely a container for ideas. Its argument unfolds; it hesitates, contradicts itself, returns to an earlier point with new force. The reader who follows that movement is not simply collecting conclusions but learning how a mind arrives at them. Strip the argument down to its claims and you keep the destination while discarding the journey, which was, in many cases, the point.

Admittedly, this objection can sound like snobbery. Not everyone has ten spare hours, and a good summary can open a door that would otherwise stay shut. Many readers, having sampled a digest, go on to read the original. Suffice it to say that summaries are not the enemy of reading; used well, they may even be its ally.

The danger lies elsewhere. It is that the summary becomes the standard by which we judge everything else. Once we are used to receiving ideas pre-digested, a difficult text begins to feel not challenging but badly designed. Why, we ask, does this writer take forty pages to say what could be said in four? And the honest answer, that some ideas cannot survive being shortened, becomes harder and harder to hear.`,
      items: [
        ch("What is the 'seductive promise' of summaries?", ["Getting a book's ideas without spending hours reading it", "Making long books cheaper and easier for everyone to buy", "Replacing human writers with apps that write books instead"], 0, "Paragraph 1."),
        ch("Why, according to the writer, is a book more than a container for ideas?", ["Following its argument teaches us how a mind reaches its conclusions.", "A book contains far more facts and examples than any summary can.", "Books are always more accurate, because summaries contain mistakes."], 0, "'learning how a mind arrives at them'."),
        ch("What is the purpose of paragraph 3?", ["To concede that summaries have real value before narrowing the criticism", "To attack readers who rely on summaries instead of reading whole books", "To summarise the argument of the essay before reaching a conclusion"], 0, "'Admittedly…' signals a concession."),
        ch("What, finally, is 'the danger'?", ["That summaries make us judge difficult texts as badly designed", "That summaries often contain errors that readers never notice", "That people will eventually stop reading books altogether"], 0, "Paragraph 4."),
        ch("'keep the destination while discarding the journey' is…", ["a metaphor for keeping conclusions but losing the reasoning", "a literal description of how the writer prefers to travel", "a criticism of tourists who only visit famous places"], 0, "Figurative language."),
      ],
    },
    {
      id: "c2-gate-r2",
      title: "Mind your language (and your hedges)",
      text:
`Few things reveal a non-native writer faster than an excess of certainty. A Spanish-speaking student might write, perfectly correctly, "This proves that social media causes depression", where an experienced English academic would write "This suggests that social media may contribute to low mood in some groups." The difference is not grammar but stance: the second sentence knows precisely how much it knows.

English academic writing has developed an elaborate toolkit for this kind of precision. Verbs such as suggest, indicate and appear to; adverbs such as arguably, largely and possibly; and phrases such as to some extent and in certain contexts all allow writers to calibrate their claims. Used well, these hedges are not a sign of weakness. Quite the opposite: they signal that the writer has weighed the evidence and is unwilling to overstate it.

Hedging can, of course, be overdone. A text in which every claim is softened ("It could perhaps be suggested that this might possibly indicate…") is as unconvincing as one in which nothing is. The skill lies in matching the strength of the language to the strength of the evidence. Where the data is overwhelming, say so plainly. Where it is suggestive, say that.

For learners, the lesson is liberating. Precision is not about knowing more words; it is about choosing, among the words you already know, the ones that tell the reader exactly how confident you are, and why.`,
      items: [
        ch("Why is 'This proves that social media causes depression' a problem?", ["It claims more certainty than the evidence allows.", "It contains a grammar mistake in the verb.", "It's too informal for an academic essay."], 0, "Stance, not grammar."),
        ch("According to the writer, what do hedges signal when used well?", ["That the writer has weighed the evidence", "That the writer is unsure of their English", "That the writer is hiding something"], 0, "'they signal that the writer has weighed the evidence'."),
        ch("What is the problem with 'It could perhaps be suggested that this might possibly indicate…'?", ["It's over-hedged, so it's unconvincing.", "It's far too direct and certain.", "It sounds too informal and chatty."], 0, "Hedging can be overdone."),
        ch("What is 'the skill', according to paragraph 3?", ["Matching the strength of the language to the strength of the evidence", "Using as many hedges as possible so that no claim can be challenged", "Never hedging, because confident writing is always more persuasive"], 0, "Calibration."),
        ch("Why does the writer call the lesson 'liberating'?", ["Precision depends on choosing well, not on knowing more words.", "Learners no longer need to study new vocabulary at all.", "Grammar matters much less than most teachers believe."], 0, "Final paragraph."),
      ],
    },
  ],
  listening: [
    {
      id: "c2-gate-l1", title: "A campaign speech", audio: "p/c2gate-l1.mp3", speaker: "A campaigner from Scotland",
      items: [
        ch("What three things were they told about the cinema?", ["Too old, too expensive and too far gone to save", "Too small, too quiet and too far from the centre", "Too modern, too plain and too unpopular to keep"], 0, "Rule of three."),
        ch("What happened last Saturday?", ["Four hundred people queued to watch a film there.", "Workers began demolishing part of the cinema.", "The council voted to save the cinema at last."], 0, "'four hundred people queued around the block'."),
        ch("What does the speaker say they are really fighting for?", ["A community", "An old building", "Cheaper films"], 0, "'It is not a building we are fighting for. It is a community.'"),
        ch("Which device does 'We were told… We were told… We were told…' use?", ["Repetition to build momentum", "Understatement for irony", "A pun on the word 'told'"], 0, "Anaphora."),
      ],
    },
    {
      id: "c2-gate-l2", title: "A news bulletin", audio: "p/c2gate-l2.mp3", speaker: "A newsreader",
      items: [
        ch("What has the fitness-centre owner promised?", ["To keep fighting", "To resign", "To pay everyone double"], 0, "'vowed to fight on'."),
        ch("What does the company concede?", ["Some records are incomplete.", "Some wages were paid late.", "Money was moved abroad legally."], 0, "'it concedes that some records are incomplete'."),
        ch("How did the owner's lawyers react to the allegation?", ["They dismissed it as absurd.", "They accepted it and apologised.", "They refused to comment on it."], 0, "'a claim his lawyers dismissed as absurd'."),
        ch("What does 'somewhat optimistically' suggest about the council's description?", ["The newsreader doubts the cut is really temporary.", "The newsreader agrees that it will be short.", "The programme is expected to return very soon."], 0, "Stance through an adverb."),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write a magazine column (280 words or more), in at least four paragraphs: 'Do summaries make us smarter or lazier?' Write with a clear voice, synthesise at least two points of view, use hedging that matches your evidence, and end with a memorable, justified conclusion." },
      { text: "Write a magazine column (280 words or more), in at least four paragraphs: 'Should we save old buildings or build new ones?' Write with a clear voice, synthesise at least two points of view, use hedging that matches your evidence, and end with a memorable, justified conclusion." },
    ],
    minWords: 280,
    checks: [
      { label: "At least four paragraphs (blank line between them)", pattern: "\\n\\s*\\n", min: 3 },
      { label: "Stance verbs (argue, claim, concede, insist, acknowledge, dismiss, contend)", pattern: "\\b(argues?|argued|claims?|claimed|concedes?|conceded|insists?|insisted|acknowledges?|acknowledged|dismiss(es|ed)?|contends?|contended|maintains?|maintained)\\b", min: 2 },
      { label: "Two hedges (suggest, appear to, arguably, to some extent, largely, may, tends to)", pattern: "\\b(suggests?|appears? to|arguably|to (some|a certain) extent|largely|tends? to|in (certain|some) contexts|it (would|may|might) (seem|appear))\\b", min: 2 },
      { label: "A stylistic structure (fronting, inversion, rare structures, balanced contrast)", pattern: "\\b(be that as it may|were it not for|suffice it to say|come what may|gone are the days|rarely (do|does|did|have|has)|seldom (do|does|did|have|has)|never (have|has|had|did)|not only (do|does|did|is|was)|little did)\\b|\\b\\w+ (as|though) (it|they|he|she|this|that|we) (may|might)\\b", min: 1 },
      { label: "An idiom, allusion or binomial (Achilles' heel, double-edged sword, by and large, pros and cons…)", pattern: "\\b(achilles'? heel|pandora'?s box|pyrrhic|catch-22|trojan horse|double-edged sword|by and large|pros and cons|sooner or later|odds and ends|tip of the iceberg|few and far between|give or take|step by step)\\b", min: 1 },
      { label: "A conclusion (On balance, All things considered, Ultimately, In the end)", pattern: "\\b(on balance|all things considered|ultimately|in the end|in conclusion|taken as a whole)\\b", min: 1 },
    ],
    rubric: ["My column has a distinctive, controlled voice.", "I connected the views and judged the evidence fairly.", "My hedging matches the evidence: no more, no less.", "The ending is memorable and justified."],
    model: "Gone are the days when finishing a book was a badge of honour. Today, a fifteen-minute summary promises to deliver the same ideas over breakfast, and millions of us accept the offer. The question is whether we are becoming smarter, or simply busier.\n\nSupporters of summaries argue that they democratise knowledge. A student with two jobs cannot read every set text, and a good digest may open a door that would otherwise stay shut. Critics, by contrast, contend that a summary keeps the conclusions while discarding the reasoning, which is, arguably, the most valuable part. Both sides, it would appear, are partly right.\n\nThe evidence is by and large encouraging. Surveys suggest that many readers who sample a summary go on to read the original, at least occasionally. To some extent, then, summaries act as trailers rather than replacements. And yet the risk is real. Once we grow used to receiving ideas pre-digested, a difficult text may start to feel not challenging but badly designed, and that is a double-edged sword for anyone who wants to think deeply.\n\nI suspect the answer lies not in the tool but in the habit. Used as a map, a summary tells you where to go. Used as a substitute for the journey, it tells you that you have arrived when you have not. The difference is not in the app on your phone but in the reader holding it, and in whether that reader is still willing to be patient, confused and, occasionally, bored.\n\nOn balance, summaries make us neither smarter nor lazier; they make us more efficient at whatever we were already doing. Read the summary, by all means. Then, every so often, read the book.",
  },
  speaking: {
    prompts: [
      { text: "Give a two-minute persuasive speech to save something in your community (a park, a library, a cinema, a festival). Use the rule of three, a rhetorical question, a 'not … but …' contrast, and finish with a short, certain closing line." },
      { text: "Give a two-minute persuasive speech: 'Every student should learn a musical instrument.' Use the rule of three, a rhetorical question, a 'not … but …' contrast, and finish with a short, certain closing line." },
    ],
    minWords: 180,
    seconds: 110,
    checks: [
      { label: "A rhetorical question", pattern: "\\?", min: 1 },
      { label: "Rule of three (A, B and C / too…, too…, too…)", pattern: "\\b(\\w+), (\\w+ ){0,3}\\w+,? (and|or) \\w+|\\btoo \\w+, too \\w+,? (and )?too \\w+", min: 1 },
      { label: "A contrast (not … but … / It is not … It is …)", pattern: "\\bnot\\b[^.!?]*\\bbut\\b|\\bit is not\\b[^.!?]*[.!?]\\s*it is\\b|\\bit's not\\b[^.!?]*[.!?]\\s*it's\\b|n't\\b[^.!?;]*;", min: 1 },
      { label: "Repetition for effect (the same opening phrase at least twice)", pattern: "\\b(we were told|we need|we can|imagine|this is|it is)\\b", min: 3 },
    ],
    rubric: ["I paused before my key points and slowed down for my main claim.", "I used rhetorical devices once each, not too often.", "My voice fell with certainty at the end.", "My speech had a clear structure from hook to close."],
    model: "Friends, imagine this town without its library. Imagine Saturday mornings with nowhere to go. Imagine a child with no quiet place to do her homework. We were told the library was too old, too expensive and too empty to keep open. We were told that everything is online now. We were told that nobody reads any more. And yet, last month, more than two thousand people walked through those doors. They came to study, to borrow, to learn and to meet each other. So I ask you: who exactly is the library too expensive for? It is not a building we are trying to save. It is a public living room, a place where anyone, rich or poor, young or old, is welcome. The council says it needs to save money. I understand that. But closing the library would not save money; it would simply move the cost onto the families who can least afford it. We can find another way. We can share the building with a café, we can open it in the evenings, and we can ask local businesses to help. This library is not the past. It is the future. Let's keep it open.",
  },
};
