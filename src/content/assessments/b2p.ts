/**
 * B2+ Midpoint and Gate. Original texts written for Bandwidth EFL.
 * Listening audio: ElevenLabs AI voices, in the public `listening` bucket.
 */
import { ch, gap } from "../practice/helpers";
import type { BandAssessment } from "./types";

export const B2P_ASSESSMENT_CLIPS: { file: string; voice: string; script: string }[] = [
  { file: "p/b2pmid-l1.mp3", voice: "63T2Z5X6a8FKjTpmpqjH",
    script: "Welcome back to the show. Today's question: should schools teach students how to spot fake news? Our guest, a secondary school librarian, thinks the answer is obvious. But she also admits it's not that simple. Students, she says, are actually quite good at spotting obvious fakes. What they struggle with is information that's partly true. A real photo with a false caption, for instance. Or a genuine statistic taken out of context. So her advice isn't to distrust everything. It's to ask one question every time: who benefits if I believe this?" },
  { file: "p/b2pmid-l2.mp3", voice: "bIHbv24MWmeRgasZH58o",
    script: "Hey, it's Andrés. So, about Saturday's cleanup. Bit of a change of plan, I'm afraid. The council has asked us to move to the river path instead of the park, because the park's being used for a market. Same time, around nine-ish. Oh, and they'll provide gloves and bags this time, so you don't need to bring your own. If you can't make it, no worries, just let me know by Thursday so I can sort out the numbers. Cheers." },
  { file: "p/b2pgate-l1.mp3", voice: "3f6pec3wODJsjTqtcNI2",
    script: "Not only is the four-day working week popular with employees, but early trials suggest productivity doesn't necessarily fall. In one widely reported trial, most companies chose to keep the shorter week once it ended. That said, we should be careful. The companies that volunteered were, arguably, the ones most likely to succeed. What we don't yet know is whether the model works in hospitals, schools or factories, where you can't simply finish your tasks faster. So the honest answer is: promising, but it's too early to draw firm conclusions." },
  { file: "p/b2pgate-l2.mp3", voice: "tPDVQaZ6fdDCUmYpHyYd",
    script: "Right, let's get back to the main question, which is whether the festival should move to the stadium. Could we hear from someone who hasn't spoken yet? Lucía? ... Thanks. So, to sum up so far: most of you seem to think the stadium is safer, but you're worried about the atmosphere. I'm afraid we can't keep the old venue, because the council has closed it. What we can do, though, is put more emphasis on local bands, so it still feels like our festival. Shall we vote?" },
];

export const B2P_MIDPOINT: BandAssessment = {
  band: "B2+",
  kind: "midpoint",
  title: "B2+ Midpoint",
  story: "Halfway through B2+. A four-skill check on emphasis, register and reading between the lines.",
  bar: 70,
  reading: [{
    id: "b2p-mid-r1",
    title: "The myth of multitasking",
    text:
`Ask a group of teenagers whether they can study with their phone nearby, and most will say yes. Some will even claim they work better that way. What research suggests, however, is rather less flattering.

When we think we are multitasking, the brain is usually switching rapidly between tasks. Each switch has a small cost: a moment to remember where we were and what we were doing. On its own, the cost is tiny. Repeated dozens of times an hour, it adds up. Several studies have found that students who check messages while studying take longer to finish and remember less of what they have read, even when they believe they are performing well.

Not everyone accepts this picture. Some researchers point out that many of these studies were carried out in laboratories, under conditions that bear little resemblance to a real bedroom with music playing. Others argue that young people who have grown up with phones may simply be better at switching. The evidence for that second claim, though, is limited.

What is harder to deny is that phones are designed to capture attention. Notifications, endless feeds and small rewards are not accidents; they are the result of careful design. It is hardly surprising, then, that a phone face up on a desk tends to win the battle with a history textbook.

The practical advice is not especially exciting. Put the phone in another room, or at least out of sight, for a fixed period. Then reward yourself with a short break. It sounds almost too simple to work. Rarely, though, does a simple habit make such a measurable difference.`,
    items: [
      ch("What is the writer's main argument?", ["Multitasking with a phone usually harms studying, despite what students believe.", "Teenagers are better at multitasking than adults.", "Phones should be banned from schools."], 0, "Paragraphs 2, 4 and 5 support this."),
      ch("Why does switching between tasks cause problems?", ["Each switch costs a little time and focus, and these costs add up.", "The brain can only do one task per day.", "Phones make students tired."], 0, "'Each switch has a small cost… it adds up.'"),
      ch("What is the critics' point about the laboratory studies?", ["Labs are very different from real study conditions.", "Labs are too expensive.", "The studies used adults only."], 0, "'conditions that bear little resemblance to a real bedroom'."),
      ch("How does the writer treat the claim that young people are better at switching?", ["Cautiously: the evidence for it is limited.", "As proven.", "As obviously false."], 0, "'The evidence for that second claim, though, is limited.'"),
      ch("'It is hardly surprising' (paragraph 4) suggests the writer thinks the result is…", ["exactly what you would expect", "shocking", "impossible to explain"], 0, "Hardly surprising = not surprising at all."),
      gap("The final sentence uses inversion: 'Rarely, though,", "a simple habit make such a measurable difference.'", ["does"], "Rarely + does + subject."),
    ],
  }],
  listening: [
    {
      id: "b2p-mid-l1", title: "A radio interview", audio: "p/b2pmid-l1.mp3", speaker: "Speaker from Ireland",
      items: [
        ch("According to the librarian, what do students find hardest to spot?", ["Information that is partly true", "Completely invented stories", "Adverts"], 0, "'What they struggle with is information that's partly true.'"),
        ch("Which example does she give?", ["A real photo with a false caption", "A fake celebrity account", "A video game"], 0, "'A real photo with a false caption'."),
        ch("What does she recommend?", ["Asking who benefits if you believe something", "Distrusting everything you read", "Only reading printed newspapers"], 0, "'who benefits if I believe this?'"),
      ],
    },
    {
      id: "b2p-mid-l2", title: "A voice message", audio: "p/b2pmid-l2.mp3", speaker: "A voice message from a friend",
      items: [
        ch("Why has the cleanup moved?", ["The park is being used for a market.", "It's going to rain.", "The river path is cleaner."], 0, "'because the park's being used for a market'."),
        ch("'Around nine-ish' means the start time is…", ["approximately nine", "exactly nine", "after ten"], 0, "Vague language: -ish."),
        ch("What should people do if they can't come?", ["Tell Andrés by Thursday", "Bring their own gloves", "Go to the park instead"], 0, "'just let me know by Thursday'."),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "A blogger argues that teenagers should be free to use phones in class. Write a reply for your school magazine (150 words or more): critique the argument, then persuade readers of your view." },
      { text: "A city councillor argues that young people don't care about politics. Write a reply for a local website (150 words or more): critique the argument, then persuade readers of your view." },
    ],
    minWords: 150,
    checks: [
      { label: "Two critique phrases (fails to consider, overlooks, assumes that, the evidence… is limited)", pattern: "\\b(fails? to (consider|take into account|address|explain)|overlook(s|ed)?|assumes? that|(evidence|data)[^.!?]{0,25}(limited|anecdotal|weak|unclear)|ignores? the fact)\\b", min: 2 },
      { label: "A persuasive phrase (Surely, There is a strong case, It is hard to deny…)", pattern: "\\b(surely|there is a strong case|it is hard to deny|it'?s hard to deny|consider what would happen|imagine (if|what))\\b", min: 1 },
      { label: "An emphasis structure (inversion or cleft: Not only…, Never…, What… is, It is… that)", pattern: "\\b(not only (do|does|did|is|are|was|were|have|has|can|will)|never (have|has|had|do|does|did)|rarely (do|does|did|is|are)|what [a-z]+ (is|was)|it is [a-z ]{1,30} that|it was [a-z ]{1,30} that)\\b", min: 1 },
      { label: "Two hedges (may, might, tend to, arguably, it seems…)", pattern: "\\b(may|might|tends? to|arguably|it seems|seems to|is likely|are likely|to some extent)\\b", min: 2 },
    ],
    rubric: ["I critiqued the argument, not the person.", "My tone fits a school magazine: confident but respectful.", "My final paragraph persuades."],
    model: "The blogger argues that phones in class would help students learn, because information is always at their fingertips. However, this argument fails to consider how easily phones distract us. Not only do notifications interrupt our concentration, but they also make it harder to remember what we have just read. The blogger also assumes that students would use phones for research, yet anyone who has sat at the back of a classroom knows that this is optimistic.\n\nAdmittedly, phones may be useful for specific tasks, such as quick searches or recording experiments. What matters, though, is control. Teachers could allow phones for particular activities and ask students to put them away at other times.\n\nSurely the goal is better learning, not more screen time. There is a strong case for clear rules that tend to protect our attention, rather than a free-for-all that might quietly damage it. Let us choose focus first, and screens second.",
  },
  speaking: {
    prompts: [
      { text: "Talk for about 75 seconds: what's one rule at your school or home you'd change? Critique the current rule, deal with an argument against your change, and finish persuasively." },
      { text: "Talk for about 75 seconds: should social media apps be banned for under-16s? Give your view, critique the other side, and finish persuasively." },
    ],
    minWords: 90,
    seconds: 60,
    checks: [
      { label: "Your opinion (I think, In my view, Personally…)", pattern: "\\b(i (really |strongly )?(think|believe|feel)|in my (view|opinion)|personally)\\b", min: 1 },
      { label: "A critique (doesn't take into account, overlooks, the problem with that is, fails to…)", pattern: "\\b(doesn'?t (take into account|consider)|overlook(s|ed)?|the problem with (that|this)|fails? to|ignores?|assumes?)\\b", min: 1 },
      { label: "A concession (admittedly, of course, I can see why, it's true that…)", pattern: "\\b(admittedly|of course|i can see why|i understand|it'?s true|granted)\\b", min: 1 },
      { label: "A persuasive finish (surely, so I'd say, that's why, we should…)", pattern: "\\b(surely|so i'?d say|that'?s why|we should|we need to|it'?s time)\\b", min: 1 },
    ],
    rubric: ["I spoke for about 75 seconds without reading.", "I chunked my ideas and paused before key points.", "My ending was clear and persuasive."],
    model: "I think the rule at my school that says we can't leave the building at lunch should change. The problem with that rule is that it assumes all students would behave badly outside, and it doesn't take into account that the canteen is tiny and really crowded. Of course, I can see why teachers worry about safety, especially for the younger students. But we're sixteen, and most of us take buses across the city on our own every day. So I'd say older students should be allowed out for lunch, maybe with a simple sign-out system. Surely that's a fair compromise.",
  },
};

export const B2P_GATE: BandAssessment = {
  band: "B2+",
  kind: "gate",
  title: "B2+ Gate",
  story: "The final check for B2+. Pass it, your teacher confirms your writing and speaking, and C1 opens.",
  bar: 75,
  reading: [
    {
      id: "b2p-gate-r1",
      title: "Who owns a city's walls?",
      text:
`It was only when a famous mural in Medellín was painted over by mistake that many residents realised how much it meant to them. Overnight, a wall that had been part of the neighbourhood for a decade became a plain grey rectangle, and the protests that followed surprised even the city council.

The incident raised a question that cities around the world are struggling to answer: who owns public art? The building's owner, who has a legal right to decide what happens to the wall? The artist, whose work it is? Or the community, who see it every day and may have helped shape its story?

Legal systems tend to favour owners. In most countries, unless a specific agreement exists, an owner can remove a mural without asking anyone. Some places have introduced protection for artworks of recognised value, but deciding what counts as "recognised" is itself controversial. A mural that tourists photograph may be protected, while one that matters deeply to a few streets is not.

Supporters of stronger protection argue that murals are a form of shared memory. Critics reply that this could freeze cities in time, making owners reluctant to allow any art at all. It is a classic double-edged sword: protect murals too strongly, and you may end up with fewer of them.

Perhaps the most promising approach is also the least dramatic: written agreements, signed before the first spray can is opened, that say how long a work will stay and what happens when it goes. They are hardly the stuff of headlines. But they may prevent the next grey rectangle.`,
      items: [
        ch("What does the first paragraph suggest?", ["Residents didn't realise how much the mural mattered until it was gone.", "Residents had always hated the mural.", "The council painted it over deliberately."], 0, "'It was only when… that many residents realised…'"),
        ch("What question does the incident raise?", ["Who has the right to decide what happens to public art", "How to paint better murals", "Why councils are unpopular"], 0, "'who owns public art?'"),
        ch("What is the problem with protecting works of 'recognised value'?", ["Deciding what counts as recognised is controversial.", "There are no valuable murals.", "Tourists don't like murals."], 0, "'deciding what counts as \"recognised\" is itself controversial'."),
        ch("Why does the writer call protection 'a double-edged sword'?", ["Strong protection could lead to fewer murals being allowed.", "Murals can be dangerous.", "It helps both owners and artists equally."], 0, "'protect murals too strongly, and you may end up with fewer of them'."),
        ch("'They are hardly the stuff of headlines.' The writer means agreements are…", ["not exciting, but useful", "very newsworthy", "illegal"], 0, "Hardly = not really; understatement."),
      ],
    },
    {
      id: "b2p-gate-r2",
      title: "In praise of being bored",
      text:
`Oh, the joys of a long bus journey with a dead phone battery. Most of us would describe the experience as something close to torture. Yet a growing body of research suggests that boredom, far from being a waste of time, may play a useful role in how we think.

When the mind has nothing to hold its attention, it tends to wander. This "mind-wandering" has a bad reputation, and it is true that it can lower performance on tasks that require focus. However, several studies have found that people who were given a dull task beforehand, such as copying numbers from a phone book, later came up with more creative ideas than those who went straight to the creative task.

The researchers are careful not to overstate their findings. The effects are modest, the tasks were artificial, and not every study has been able to repeat the results. It would be a mistake, then, to conclude that the path to genius lies in staring at a wall.

What the research does seem to indicate is that constant stimulation comes at a cost. If every spare moment is filled with a feed, a game or a video, the mind rarely gets the chance to make the unexpected connections that boredom can encourage.

So next time your battery dies on a long journey, you could, of course, spend the time feeling sorry for yourself. Alternatively, you might just let your mind wander and see where it goes.`,
      items: [
        ch("'Oh, the joys of a long bus journey with a dead phone battery.' The tone is…", ["sarcastic", "sincere", "angry"], 0, "Positive words for an unpleasant situation."),
        ch("What did the studies find?", ["People given a dull task first were later more creative.", "Boredom always improves focus.", "Creative people are never bored."], 0, "Paragraph 2."),
        ch("How do the researchers present their results?", ["Cautiously: the effects are modest and not always repeated.", "As a guaranteed path to genius.", "As completely wrong."], 0, "'careful not to overstate their findings'."),
        ch("According to the writer, what is the cost of constant stimulation?", ["The mind rarely gets a chance to make unexpected connections.", "It is very expensive.", "It damages eyesight."], 0, "Paragraph 4."),
        ch("Which phrase from the text is an academic collocation?", ["a growing body of research", "dead phone battery", "staring at a wall"], 0, "a growing body of research / evidence."),
      ],
    },
  ],
  listening: [
    {
      id: "b2p-gate-l1", title: "A podcast on the four-day week", audio: "p/b2pgate-l1.mp3", speaker: "Speaker from England",
      items: [
        ch("What did most companies do when the trial ended?", ["Kept the shorter week", "Went back to five days", "Closed down"], 0, "'most companies chose to keep the shorter week'."),
        ch("Why does the speaker say 'we should be careful'?", ["The companies that volunteered were probably the most likely to succeed.", "The trial was too short.", "Workers didn't like it."], 0, "Selection: 'the ones most likely to succeed'."),
        ch("Which workplaces does the speaker say we don't know about?", ["Hospitals, schools and factories", "Banks and shops", "Tech companies"], 0, "'hospitals, schools or factories'."),
        ch("The speaker's overall view is…", ["promising, but too early to draw firm conclusions", "a complete success", "a failure"], 0, "Final sentence."),
      ],
    },
    {
      id: "b2p-gate-l2", title: "A planning meeting", audio: "p/b2pgate-l2.mp3", speaker: "A meeting chair",
      items: [
        ch("What is the main question of the meeting?", ["Whether the festival should move to the stadium", "Which bands to book", "How much tickets should cost"], 0, "'whether the festival should move to the stadium'."),
        ch("What are people worried about?", ["Losing the atmosphere", "Safety at the stadium", "The weather"], 0, "'you're worried about the atmosphere'."),
        ch("Why can't they keep the old venue?", ["The council has closed it.", "It's too expensive.", "It's too small."], 0, "'the council has closed it'."),
        ch("What does the chair suggest to keep the festival's identity?", ["Putting more emphasis on local bands", "Moving it to another city", "Making it free"], 0, "'put more emphasis on local bands'."),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write an article for a youth website (220 words or more), in at least four paragraphs: 'Should cities protect street art by law?' Discuss both sides, critique at least one argument, and give your own view." },
      { text: "Write an article for a youth website (220 words or more), in at least four paragraphs: 'Is boredom good for young people?' Discuss both sides, critique at least one argument, and give your own view." },
    ],
    minWords: 220,
    checks: [
      { label: "At least four paragraphs (blank line between them)", pattern: "\\n\\s*\\n", min: 3 },
      { label: "A critique (fails to consider, overlooks, assumes that, the evidence… is limited)", pattern: "\\b(fails? to (consider|take into account|address|explain)|overlook(s|ed)?|assumes? that|(evidence|data)[^.!?]{0,25}(limited|anecdotal|weak|unclear)|ignores? the fact)\\b", min: 1 },
      { label: "Two emphasis structures (inversion or cleft)", pattern: "\\b(not only (do|does|did|is|are|was|were|have|has|can|will)|never (have|has|had|do|does|did)|rarely (do|does|did|is|are)|seldom (do|does|did)|only (then|when)[^.!?]{0,30}(do|does|did|is|are|was|were|have|has)|what [a-z]+ (is|was)|it is [a-z ]{1,30} that|it was [a-z ]{1,30} that|all [a-z]+ [a-z]+ (is|was))\\b", min: 2 },
      { label: "Two academic collocations (a growing body of evidence, widely accepted, draw conclusions, play a role, raise questions…)", pattern: "\\b((growing|large) body of (evidence|research)|widely (accepted|believed|recognised|recognized)|(draw|drew|drawn|reach|reached) (a |any |firm |the )?conclusions?|play(s|ed)? (a|an) (key |important |major |significant |useful )?(role|part)|raise(s|d)? (important |serious |difficult )?questions?|pose(s|d)? (a|an) (serious |real )?(threat|risk|challenge)|(conduct|conducted|carry out|carried out) (research|studies|a study))\\b", min: 2 },
      { label: "Two hedges (may, might, tend to, arguably, appears to…)", pattern: "\\b(may|might|tends? to|arguably|appears? to|seems? to|is likely|are likely|to some extent)\\b", min: 2 },
      { label: "A conclusion (In conclusion, On balance, Overall, All things considered)", pattern: "\\b(in conclusion|on balance|overall|all things considered|to conclude)\\b", min: 1 },
    ],
    rubric: ["My title and introduction make readers want to continue.", "Each paragraph has one clear purpose.", "My tone is engaging but not too casual.", "My conclusion gives a clear, justified view."],
    model: "It was only when my favourite mural disappeared under grey paint that I started to wonder who street art really belongs to. The question raises difficult issues about property, memory and community.\n\nOn the one hand, owners have a clear legal right to decide what happens to their walls. It is widely accepted that people should control their own property, and forcing owners to keep a mural they dislike might discourage them from allowing art in the first place.\n\nOn the other hand, the argument that murals are simply private property fails to consider what they mean to the people who live around them. Not only do murals tell local stories, but they often play an important role in making neighbourhoods feel safer and more welcoming. A growing body of evidence suggests that public art can strengthen community pride, and it may even reduce vandalism, because people tend to protect what they feel belongs to them. Removing a mural without warning, then, is not just a private decision.\n\nAll things considered, I do not believe cities should freeze every mural in place. What we need is a middle way: simple written agreements between owners, artists and communities that say how long a work will stay. Such agreements would arguably cost very little, yet they could prevent painful surprises like the one I experienced. On balance, this seems the fairest way to protect both property and memory.",
  },
  speaking: {
    prompts: [
      { text: "Talk for about two minutes, like the start of a presentation: should schools give students one afternoon a week with no screens at all? Use a hook, chunk your ideas, critique one argument and finish persuasively." },
      { text: "Talk for about two minutes, like the start of a presentation: should young people have a say in how their city spends money? Use a hook, chunk your ideas, critique one argument and finish persuasively." },
    ],
    minWords: 150,
    seconds: 100,
    checks: [
      { label: "A hook (a question, Imagine…, Let me ask you…)", pattern: "\\?|\\b(imagine|picture this|let me ask|did you know)\\b", min: 1 },
      { label: "Your opinion (I think, I believe, In my view…)", pattern: "\\b(i (really |strongly )?(think|believe|feel)|in my (view|opinion)|personally)\\b", min: 1 },
      { label: "A critique (doesn't take into account, overlooks, the problem with that…)", pattern: "\\b(doesn'?t (take into account|consider)|overlook(s|ed)?|the problem with (that|this)|fails? to|ignores?|assumes?)\\b", min: 1 },
      { label: "An emphasis structure (What I…, It's… that, Not only…)", pattern: "\\b(what (i|we|you) [a-z]+ (is|was)|it'?s [a-z ]{1,25} that|not only|never (have|has|had))\\b", min: 1 },
      { label: "A persuasive finish (surely, so I'd say, that's why, we should…)", pattern: "\\b(surely|so i'?d say|that'?s why|we should|we need to|it'?s time)\\b", min: 1 },
    ],
    rubric: ["I spoke for about two minutes, chunking ideas and pausing before key points.", "I dealt fairly with the other side.", "My ending was clear and persuasive."],
    model: "Let me ask you a question. When did you last spend a whole afternoon without looking at a screen? For most of us, the honest answer is: I can't remember. That's why I think schools should give students one afternoon a week with no screens at all. Not only would it give our eyes a rest, but it would also give us time for things we rarely do anymore, like sports, art or just talking. Of course, some people say screens are essential for learning, and I can see why. But the problem with that argument is that it assumes we only learn through screens. What I'm suggesting isn't a ban on technology. It's one afternoon. And it's not a punishment. It's a chance to notice what we've been missing. So I'd say, let's try it for a term, measure how people feel, and see what happens. Surely that's worth an experiment.",
  },
};
