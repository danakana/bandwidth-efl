/**
 * C1 Midpoint and Gate. Original texts written for Bandwidth EFL.
 * Listening audio: ElevenLabs AI voices, in the public `listening` bucket.
 */
import { ch, gap } from "../practice/helpers";
import type { BandAssessment } from "./types";

export const C1_ASSESSMENT_CLIPS: { file: string; voice: string; script: string }[] = [
  { file: "p/c1mid-l1.mp3", voice: "8DvnqWWA3WWXixOm7zQI",
    script: "Today on the programme, we're asking whether cities should charge drivers to enter the centre. Supporters point to London and Stockholm, where traffic fell noticeably after charges were introduced. Critics, however, contend that the charge hits low-income workers hardest, since wealthier drivers simply pay and carry on. Taken together, the evidence suggests that the scheme works, but only if the money raised is spent on better buses. Without that, it would appear to be little more than a tax on people who have no alternative." },
  { file: "p/c1mid-l2.mp3", voice: "63T2Z5X6a8FKjTpmpqjH",
    script: "Hiya, it's Niamh. Look, I know you were hoping to present on Friday, and I did try to keep the slot for you. Unfortunately the head of department has moved the whole session to Monday. You needn't have rushed the slides, then, sorry about that. Should you want to rehearse over the weekend, I'm around on Saturday. Oh, and the projector in room twelve is, well, let's say it's seen better days, so bring a laptop just in case." },
  { file: "p/c1gate-l1.mp3", voice: "9hb1f7xQcMLB90qbYSY3",
    script: "So rarely do we stop to ask where our clothes come from that the question can feel almost rude. Yet fast fashion is thought to account for a significant share of global emissions, and its environmental impact is, arguably, still underestimated. Having said that, it would be a mistake to blame shoppers alone. Were it not for constant advertising and incredibly low prices, few people would buy a new outfit every week. The real challenge, then, is to strike a balance: to make sustainable clothing affordable without simply shifting the cost onto workers in other countries." },
  { file: "p/c1gate-l2.mp3", voice: "ideEOMYLgcyF9rr94ycz",
    script: "OK, if I understand everyone correctly, the science club wants the lab on Thursdays, and the robotics team needs it for their competition. What you both seem to want is guaranteed time before the regional finals. Would you be open to sharing it, provided that robotics has priority for the next three weeks? After that, the science club gets Thursdays back. Is it just me, or does that sound fair? So, are we agreed?" },
];

export const C1_MIDPOINT: BandAssessment = {
  band: "C1",
  kind: "midpoint",
  title: "C1 Midpoint",
  story: "Halfway through C1. A four-skill check on precision, nuance and building a real argument.",
  bar: 70,
  reading: [{
    id: "c1-mid-r1",
    title: "The language of the algorithm",
    text:
`Not long ago, the idea that a computer could recommend your next favourite song would have sounded like science fiction. Today, it is so ordinary that we barely notice it. Streaming platforms, video apps and online shops all rely on recommendation algorithms, and their influence on what we watch, hear and buy is difficult to overstate.

The basic principle is simple. The system collects data on what you click, skip, like and replay, compares your behaviour with that of millions of other users, and predicts what you are most likely to enjoy. The more you use it, the more accurate it appears to become. For many users, this is precisely the appeal: less time searching, more time enjoying.

Critics, however, argue that the convenience comes at a price. If a system only offers what resembles your past choices, it may gradually narrow your tastes, creating what some researchers call a "filter bubble". The evidence for this is mixed. Some studies suggest that recommendation systems do reduce diversity over time; others find that users who actively explore still encounter a wide range of content. It would appear, then, that the effect depends at least partly on how people use the technology.

A more serious concern is transparency. Most users have little idea why a particular video appears at the top of their feed, and companies are reluctant to explain their algorithms in detail, claiming that the information is commercially sensitive. Be that as it may, a growing number of governments are now demanding greater openness, particularly where recommendations might influence elections or young people's mental health.

None of this means that algorithms are inherently harmful. Used well, they can introduce us to music and ideas we would never otherwise have found. What matters is that we remain aware of their influence and occasionally make the effort to step outside the bubble.`,
    items: [
      ch("What is the writer's overall position on recommendation algorithms?", ["They can be useful, but users should stay aware of their influence.", "They are dangerous and should be banned.", "They have no real influence on users."], 0, "Final paragraph: 'None of this means… What matters is that we remain aware.'"),
      ch("According to paragraph 2, why do many users like recommendations?", ["They save time searching.", "They are always accurate.", "They are free."], 0, "'less time searching, more time enjoying'."),
      ch("How does the writer present the evidence on 'filter bubbles'?", ["As mixed: the effect seems to depend on how people use the technology.", "As conclusive proof that algorithms narrow tastes.", "As completely invented."], 0, "'The evidence for this is mixed… It would appear, then…'"),
      ch("Why do companies refuse to explain their algorithms?", ["They say the information is commercially sensitive.", "They don't understand them.", "Governments forbid it."], 0, "'claiming that the information is commercially sensitive'."),
      ch("'Be that as it may' (paragraph 4) is used to…", ["acknowledge the companies' point before introducing a counterpoint", "agree completely with the companies", "give an example"], 0, "Concession + contrast."),
      gap("'Their influence… is difficult to", ".' (= it is very great)", ["overstate"], "difficult to overstate = extremely important."),
    ],
  }],
  listening: [
    {
      id: "c1-mid-l1", title: "A radio discussion", audio: "p/c1mid-l1.mp3", speaker: "Speaker from India",
      items: [
        ch("What happened in London and Stockholm?", ["Traffic fell after charges were introduced.", "The charges were cancelled.", "Bus use fell."], 0, "'traffic fell noticeably after charges were introduced'."),
        ch("What do critics contend?", ["The charge hits low-income workers hardest.", "The charge is too low.", "Wealthy drivers stop driving."], 0, "'hits low-income workers hardest'."),
        ch("According to the speaker, when does the scheme work?", ["Only if the money is spent on better buses", "Always", "Only in small towns"], 0, "'but only if the money raised is spent on better buses'."),
      ],
    },
    {
      id: "c1-mid-l2", title: "A voice message", audio: "p/c1mid-l2.mp3", speaker: "A voice message from a classmate in Ireland",
      items: [
        ch("Why has the presentation moved?", ["The head of department moved the session to Monday.", "Niamh is ill.", "The projector is broken."], 0, "'the head of department has moved the whole session to Monday'."),
        ch("'You needn't have rushed the slides' means…", ["You rushed, but it wasn't necessary.", "You didn't rush, and that was right.", "You must rush now."], 0, "needn't have + past participle."),
        ch("What does Niamh imply about the projector?", ["It's old and unreliable.", "It's brand new.", "It's in another room."], 0, "'it's seen better days' = understatement for old/unreliable."),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write an article for a school magazine (170 words or more) on 'Are algorithms choosing our tastes?' Synthesise at least two points of view, evaluate the evidence, and give your own position." },
      { text: "Write an article for a local website (170 words or more) on 'Should cities charge drivers to enter the centre?' Synthesise at least two points of view, evaluate the evidence, and give your own position." },
    ],
    minWords: 170,
    checks: [
      { label: "Synthesis of views (Both… suggest, Whereas… argue, Taken together, echoed by)", pattern: "\\bboth\\b[^.]{0,60}\\b(suggest|show|indicate|agree|argue|point)\\w*\\b|\\btaken together\\b|\\b(echoed|supported|shared) by\\b|\\b(whereas|while)\\b[^.]{0,80}\\b(argu|contend|claim|suggest|believ|insist)\\w*\\b", min: 1 },
      { label: "Two hedging or distancing structures (It would appear, is thought to, arguably, to some extent…)", pattern: "\\bit (would|may|might) (appear|seem)\\b|\\b(is|are|was|were) (said|thought|believed|reported|considered) to\\b|\\barguably\\b|\\bto (some|a certain) extent\\b|\\btends? to\\b|\\bapparently\\b|\\bseemingly\\b", min: 2 },
      { label: "Two nominalisations or strong collocations (the growth of, a reduction in, raise awareness, strike a balance…)", pattern: "\\bthe (rapid |growing |gradual )?(growth|rise|decline|lack|introduction|expansion|reduction|impact) (of|in|on)\\b|\\brais(e|es|ed|ing) awareness\\b|\\bstr(ike|uck|ikes) a balance\\b|\\bpos(e|es|ed) a (serious )?(threat|risk|challenge)\\b|\\bhighly (unlikely|likely)\\b|\\bdeeply concerned\\b|\\bwidely (accepted|regarded)\\b", min: 2 },
      { label: "An advanced linker or idiom (Be that as it may, On balance, a double-edged sword, notwithstanding…)", pattern: "\\bbe that as it may\\b|\\bon balance\\b|\\bby the same token\\b|\\bnotwithstanding\\b|\\binsofar as\\b|\\bdouble-edged sword\\b|\\btip of the iceberg\\b|\\bgr[ae]y area\\b|\\bvicious (circle|cycle)\\b", min: 1 },
    ],
    rubric: ["I connected the views rather than listing them.", "My hedges match the evidence.", "My own position is clear by the end.", "I used precise vocabulary, not just 'very' and 'good'."],
    model: "Few of us choose our playlists alone any more. Recommendation algorithms decide much of what we hear and watch, and the question of whether they shape our tastes is increasingly urgent.\n\nBoth technology companies and many users suggest that algorithms simply help us find what we already like. Whereas supporters argue that this saves time and introduces us to new artists, critics contend that it traps us in a filter bubble. Taken together, these views show that the technology is a double-edged sword.\n\nThe evidence, however, is far from conclusive. It would appear that the impact on diversity depends on how actively people explore, and users who search widely tend to encounter a broad range of content. To some extent, then, the responsibility is ours.\n\nOn balance, I believe algorithms are not the enemy. Nevertheless, the lack of transparency is worrying, and schools should raise awareness of how these systems work. If we understand them, we can enjoy their many benefits while occasionally choosing to step outside the bubble on purpose.",
  },
  speaking: {
    prompts: [
      { text: "Talk for about 90 seconds: two friends disagree about whether to spend the holidays working or travelling. Mediate: summarise both views, find common ground and propose a compromise with a condition." },
      { text: "Talk for about 90 seconds: your class can't agree on whether the end-of-year trip should be cheap and local or expensive and far away. Mediate: summarise both views, find common ground and propose a compromise." },
    ],
    minWords: 110,
    seconds: 75,
    checks: [
      { label: "Check understanding (If I understand…, So what you're saying is…)", pattern: "\\bif i understand\\b|\\bwhat you('re| are) saying\\b|\\bif i've got this right\\b|\\bso you('re| are) saying\\b", min: 1 },
      { label: "Common ground (both seem to want, we all agree…)", pattern: "\\bboth (seem to )?(want|agree|need|care)\\b|\\bwe all (agree|want)\\b|\\bcommon ground\\b|\\bwhat you both\\b", min: 1 },
      { label: "A conditional proposal (provided that, as long as, would you be open to…)", pattern: "\\bprovid(ed|ing)\\b|\\bas long as\\b|\\bwould you be open to\\b|\\bon condition that\\b|\\bmeet halfway\\b", min: 1 },
      { label: "A polite softener (I wonder if, I'm not sure I'd…, You might want to…)", pattern: "\\bi (wonder|wondered|was wondering)\\b|\\bi('m| am) not sure\\b|\\byou might want to\\b|\\bit might be worth\\b|\\bthat's one way\\b|\\bi see your point\\b", min: 1 },
    ],
    rubric: ["I summarised both sides fairly.", "I stayed neutral before proposing.", "My proposal had a clear condition and I confirmed the agreement."],
    model: "OK, so if I understand you both correctly, Camila wants to work in the holidays to save money for a laptop, and Diego thinks it's the only chance this year to travel together. I see your point, Diego, and I'm not sure I'd say Camila is being boring. What you both seem to want is a holiday that feels worthwhile. So would you be open to a compromise? Camila could work for the first three weeks, provided that we plan a cheap trip to the coast for the last week. You might want to look at bus tickets now, because they're cheaper in advance. I wonder if that would work for everyone. So, are we agreed?",
  },
};

export const C1_GATE: BandAssessment = {
  band: "C1",
  kind: "gate",
  title: "C1 Gate",
  story: "The final check for C1. Pass it, your teacher confirms your writing and speaking, and C2 opens.",
  bar: 75,
  reading: [
    {
      id: "c1-gate-r1",
      title: "The return of the repair shop",
      text:
`For most of the twentieth century, repairing things was simply what people did. Shoes were resoled, radios were rewired and torn clothes were patched. By the early twenty-first century, however, the habit had all but disappeared in many countries. Products became cheaper to replace than to fix, and the skills needed to repair them faded with each generation.

Now, quietly, the tide appears to be turning. So-called repair cafés, where volunteers help people fix broken items for free, have spread to thousands of towns. Several governments have introduced "right to repair" laws, which require manufacturers to make spare parts and manuals available. Were it not for growing public anger about waste, such laws would arguably never have been passed.

The manufacturers' response has been mixed. Some have embraced repair as a way of building customer loyalty. Others contend that allowing amateurs to open complex devices poses a serious risk to safety and to the security of personal data. These concerns are not entirely without foundation, but critics point out that the same companies earn considerable profits from selling replacements, which may explain some of their reluctance.

Having said that, repair is not a complete solution. Many products are designed in ways that make fixing them difficult or expensive, and a law cannot easily change a design that is already in millions of homes. Moreover, the economics remain challenging: a skilled repairer's time is often worth more than the item itself.

What the repair movement does offer is a shift in attitude. Fixing something, rather than throwing it away, forces us to consider how it was made and how long it should last. Small as that change may seem, it could prove to be one of the more significant cultural developments of the decade.`,
      items: [
        ch("Why did repairing things become less common?", ["Replacing products became cheaper than fixing them, and skills were lost.", "Repair shops were banned.", "Products stopped breaking."], 0, "Paragraph 1."),
        ch("What does 'Were it not for growing public anger…' suggest?", ["Public anger was a key reason the laws were passed.", "The public didn't care.", "Governments ignored the public."], 0, "Were it not for = without."),
        ch("How does the writer treat the manufacturers' safety concerns?", ["As partly valid, but possibly influenced by profit", "As completely false", "As the only real issue"], 0, "'not entirely without foundation, but…'"),
        ch("What limitation of repair does paragraph 4 describe?", ["Some products are designed in ways that make repair difficult or expensive.", "Repair cafés charge too much.", "Nobody wants to learn repair skills."], 0, "Paragraph 4."),
        ch("'Small as that change may seem' means…", ["Although that change may seem small", "Because that change is small", "As small as possible"], 0, "Adjective + as = although."),
      ],
    },
    {
      id: "c1-gate-r2",
      title: "Well, it was certainly an experience",
      text:
`When a friend describes her holiday as "certainly an experience", most English speakers would conclude that it did not go well. She has not said anything negative. She has not mentioned the cancelled flight, the hotel without hot water or the three days of rain. Yet the message is perfectly clear.

This is implicature: meaning that is communicated without being stated. Linguists have long been fascinated by it, because it seems to rely on an unspoken agreement between speakers. We assume that people are trying to be relevant and informative. So when someone answers a direct question with something apparently off-topic or oddly limited, we search for the hidden reason. Asked whether a new colleague is good at his job, a manager who replies "He's always very punctual" has, in effect, said a great deal.

Implicature is not unique to English, but the forms it takes vary from one culture to another. Speakers from cultures that value directness may find English understatement confusing, or even dishonest. Conversely, learners who translate their own polite indirectness word for word may be misunderstood. A Colombian student who says "I'll try to come" may mean "no", but an Australian listener might simply expect to see them later.

For language learners, this presents a genuine challenge. Grammar books rarely explain what people mean when they say less than they mean. The best strategy, perhaps, is to notice: to pay attention to what is missing from an answer, and to ask, gently, when the meaning is unclear. Misunderstandings are inevitable. They are also, arguably, one of the most interesting parts of learning a language.`,
      items: [
        ch("What does the friend mean by 'certainly an experience'?", ["The holiday didn't go well.", "The holiday was wonderful.", "She doesn't remember the holiday."], 0, "Paragraph 1: implied meaning."),
        ch("According to linguists, why do we search for hidden meaning?", ["We assume speakers are trying to be relevant and informative.", "People always lie.", "Grammar is unclear."], 0, "'We assume that people are trying to be relevant and informative.'"),
        ch("What does the manager's reply 'He's always very punctual' imply?", ["He has few other strengths as a worker.", "He is an excellent worker.", "He is often late."], 0, "Faint praise."),
        ch("What is the point of the Colombian student example?", ["Polite indirectness can be misunderstood across cultures.", "Colombians are always late.", "Australians are rude."], 0, "Paragraph 3."),
        ch("What strategy does the writer recommend?", ["Notice what is missing and ask gently when unsure", "Always speak very directly", "Avoid conversations"], 0, "Paragraph 4."),
      ],
    },
  ],
  listening: [
    {
      id: "c1-gate-l1", title: "A podcast on fast fashion", audio: "p/c1gate-l1.mp3", speaker: "Speaker from Canada",
      items: [
        ch("What does the speaker say about fast fashion's environmental impact?", ["It is arguably still underestimated.", "It has been exaggerated.", "It has been solved."], 0, "'arguably, still underestimated'."),
        ch("Who does the speaker say shouldn't be blamed alone?", ["Shoppers", "Factories", "Governments"], 0, "'it would be a mistake to blame shoppers alone'."),
        ch("'Were it not for constant advertising…' means…", ["Without constant advertising, few people would buy so much.", "Advertising doesn't affect shopping.", "People want more advertising."], 0, "Inverted conditional."),
        ch("What is 'the real challenge'?", ["Making sustainable clothing affordable without shifting costs onto workers", "Stopping all clothes shopping", "Making clothes cheaper"], 0, "'strike a balance…'"),
      ],
    },
    {
      id: "c1-gate-l2", title: "A mediation", audio: "p/c1gate-l2.mp3", speaker: "A student mediator from Nigeria",
      items: [
        ch("What do both groups want?", ["Guaranteed lab time before the regional finals", "A new lab", "To cancel the competition"], 0, "'What you both seem to want is…'"),
        ch("What is the condition in the proposal?", ["Robotics has priority for the next three weeks", "The science club pays", "Both groups meet on Thursdays"], 0, "'provided that robotics has priority…'"),
        ch("What happens after three weeks?", ["The science club gets Thursdays back.", "Robotics keeps the lab forever.", "The lab closes."], 0, "'After that, the science club gets Thursdays back.'"),
        ch("'Is it just me, or does that sound fair?' The mediator is…", ["inviting agreement politely", "complaining", "asking about the weather"], 0, "Indirect, face-saving question."),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write an essay (250 words or more), in at least four paragraphs: 'Should products be designed to last longer, even if they cost more?' Synthesise at least two points of view, evaluate the evidence, consider a counter-argument and give a clear conclusion." },
      { text: "Write an essay (250 words or more), in at least four paragraphs: 'Should schools teach students how to disagree politely?' Synthesise at least two points of view, evaluate the evidence, consider a counter-argument and give a clear conclusion." },
    ],
    minWords: 250,
    checks: [
      { label: "At least four paragraphs (blank line between them)", pattern: "\\n\\s*\\n", min: 3 },
      { label: "Synthesis of views (Both… suggest, Whereas… argue, Taken together, echoed by)", pattern: "\\bboth\\b[^.]{0,60}\\b(suggest|show|indicate|agree|argue|point)\\w*\\b|\\btaken together\\b|\\b(echoed|supported|shared) by\\b|\\b(whereas|while)\\b[^.]{0,80}\\b(argu|contend|claim|suggest|believ|insist)\\w*\\b", min: 1 },
      { label: "An inverted or advanced conditional (Had…, Were it not for, Should…, But for)", pattern: "\\bwere it not for\\b|\\bbut for\\b|\\bhad (we|they|people|manufacturers|i|the|schools|students)\\b[^.]{0,20}\\b(known|been|designed|built|taught|learned|learnt|realised|realized)\\b|\\bshould (you|we|they|students|people|anyone) (need|want|wish|decide|find)\\b|\\bwere (we|they|schools|people) to\\b", min: 1 },
      { label: "Two hedging or distancing structures", pattern: "\\bit (would|may|might) (appear|seem)\\b|\\b(is|are|was|were) (said|thought|believed|reported|considered) to\\b|\\barguably\\b|\\bto (some|a certain) extent\\b|\\btends? to\\b|\\bapparently\\b|\\bseemingly\\b", min: 2 },
      { label: "An emphasis structure (Adjective as/though…, emphatic do, inversion: So… that, Rarely do…)", pattern: "\\b\\w+ (as|though) (it|they|he|she|this|that|the \\w+)( may| might| is| was| are| were| seems| sounds)\\b|\\b(we|they|people|i|it|this|schools|companies) (do|does|did) (need|matter|help|make|work|believe|understand|care|change|offer|cost)\\b|\\bso \\w+ (is|was|are|were) (the|a|an|it|this)\\b|\\b(rarely|seldom|never|not only) (do|does|did|is|are|have|has|can|will)\\b", min: 1 },
      { label: "A conclusion (On balance, All things considered, In conclusion…)", pattern: "\\b(in conclusion|on balance|overall|all things considered|to conclude|taken as a whole)\\b", min: 1 },
    ],
    rubric: ["My paragraphs build one connected argument.", "I evaluated evidence and a counter-argument fairly.", "My language is precise and natural, not mechanical.", "My conclusion gives a clear, justified view."],
    model: "Most of us have experienced the frustration of a phone that slows down after two years or a printer that breaks the week after its warranty ends. Such experiences raise an important question: should products be designed to last longer, even if they cost more?\n\nBoth environmental groups and many consumers suggest that they should. Whereas cheap products appear to save money, campaigners argue that frequent replacement costs more over time and generates enormous waste. This view is echoed by a growing body of research on electronic waste, which is thought to be one of the fastest-growing waste streams in the world.\n\nManufacturers, however, contend that durable products would be unaffordable for many families. To some extent, this concern is valid: not everyone can pay more upfront, even if they would save later. Expensive as they may be at first, though, durable goods are not out of reach. The manufacturers' argument overlooks the fact that repair and second-hand markets tend to make them accessible over time. Were it not for designs that deliberately prevent repair, many cheaper products could also last much longer.\n\nOn balance, I believe that durability should become the norm. Governments could require spare parts and clear repair manuals, which would arguably cost manufacturers little. Durable design does matter, not only for the planet, but also for the families who are currently forced to replace what they cannot fix. A phone that lasts ten years instead of three is not a luxury; it is simply good design, and we should expect nothing less.",
  },
  speaking: {
    prompts: [
      { text: "Talk for about two minutes, like a short presentation: 'Fast fashion: who is really responsible?' Use a hook, hedge your claims, consider two points of view, use contrastive stress for at least one key contrast, and finish with a clear conclusion." },
      { text: "Talk for about two minutes, like a short presentation: 'Are we losing the ability to be bored?' Use a hook, hedge your claims, consider two points of view, and finish with a clear conclusion." },
    ],
    minWords: 160,
    seconds: 100,
    checks: [
      { label: "A hook (a question, Imagine…, Let me ask you…)", pattern: "\\?|\\b(imagine|picture this|let me ask|did you know)\\b", min: 1 },
      { label: "A hedge (arguably, it seems, to some extent, tend to, is thought to…)", pattern: "\\barguably\\b|\\bit (would )?(seems?|appears?)\\b|\\bto (some|a certain) extent\\b|\\btends? to\\b|\\b(is|are) (thought|said|believed) to\\b|\\bapparently\\b", min: 1 },
      { label: "Two points of view (some people…, others…, whereas, on the other hand)", pattern: "\\b(some people|others|whereas|on the other hand|critics|supporters)\\b", min: 2 },
      { label: "A clear conclusion (On balance, So I'd say, All things considered…)", pattern: "\\b(on balance|so i'?d say|all things considered|in conclusion|overall|that'?s why)\\b", min: 1 },
    ],
    rubric: ["I spoke for about two minutes, chunking ideas and pausing before key points.", "My claims were hedged where the evidence was uncertain.", "I used stress to highlight contrasts.", "My conclusion was clear and justified."],
    model: "Let me ask you something. How many of the clothes you're wearing right now will you still have in five years? For most of us, the honest answer is: not many. Fast fashion is thought to be one of the biggest polluting industries in the world, and it's arguably getting worse. So who is really responsible? Some people say it's the shoppers. We're the ones buying a new T-shirt every week, after all. Others argue that the companies are to blame, because they spend millions on advertising to make us feel that last month's clothes are out of date. To some extent, I think both views are right. But I'd put the emphasis on the companies, not because shoppers are innocent, but because companies have the power to change the system. Whereas one shopper can change one wardrobe, one company can change millions. So on balance, I'd say we need clear laws on durability and recycling, and we should buy less but better. Small as that change might seem, it could make a real difference.",
  },
};
