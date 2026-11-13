/** Graded reading for C1 and C2. Original texts for Bandwidth EFL. For teacher review. */
import type { Story } from "./types";

export const C_LEVEL_STORIES: Story[] = [
  {
    id: "c1-choice", band: "C1", universe: "science", kind: "article",
    title: "Can too much choice make us unhappy?", blurb: "A famous experiment with jam, and why the story turned out to be more complicated.",
    text: `In 2000, two psychologists published a study that would become one of the most quoted experiments in popular psychology. In a supermarket, they set up a tasting stand that offered shoppers either six varieties of jam or twenty-four. The larger display attracted more people, but those who saw only six options were far more likely to actually buy a jar. The conclusion seemed irresistible: beyond a certain point, more choice paralyses us.

The idea, later popularised as "the paradox of choice", resonated because it seemed to explain a familiar modern frustration. Faced with hundreds of streaming options, we scroll for half an hour and end up watching nothing. Confronted with dozens of university courses, students agonise over the decision and then wonder whether they chose wrongly. According to this view, abundant choice raises our expectations and makes every decision feel like a potential missed opportunity.

Yet as other researchers tried to reproduce the effect, the picture became considerably less tidy. A large review of dozens of studies found that, on average, the number of options had virtually no effect on people's satisfaction or willingness to choose. In some situations, more choice clearly helped; in others, it overwhelmed people. The effect, it emerged, depended on circumstances: how complex the options were, whether people already knew what they wanted, and how easy it was to compare alternatives.

This does not mean the original insight was worthless. Rather, it suggests that the problem is seldom choice itself, but the absence of a clear way to navigate it. Sorting options into categories, setting criteria in advance, or simply accepting a "good enough" option rather than searching for the perfect one all seem to reduce the burden. The lesson, perhaps, is less "fewer options" than "better ways of choosing".`,
    gloss: [
      { word: "irresistible", means: "so attractive or convincing that it's hard to reject" },
      { word: "paralyses", means: "makes someone unable to act" },
      { word: "resonated", means: "seemed meaningful because it connected with people's experience" },
      { word: "agonise over", means: "spend a long time worrying about a decision" },
      { word: "tidy", means: "(here) simple and neatly organised" },
    ],
    questions: [
      { q: "What did the original jam study appear to show?", options: ["People bought more jam when they had fewer options.", "People preferred the larger display and bought more.", "Choice made no difference."], answer: 0, why: "Shoppers who saw six options \"were far more likely to actually buy a jar\"." },
      { q: "What did a large review of later studies find?", options: ["The effect was even stronger than expected.", "On average, the number of options had virtually no effect, though it depended on circumstances.", "More choice always makes people happier."], answer: 1, why: "\"On average, the number of options had virtually no effect… The effect… depended on circumstances.\"" },
      { q: "What is the writer's conclusion?", options: ["Shops should always offer fewer products.", "The original study was worthless.", "The real issue is usually how we navigate choice, not choice itself."], answer: 2, why: "\"The problem is seldom choice itself, but the absence of a clear way to navigate it.\"" },
    ],
  },
  {
    id: "c1-melody", band: "C1", universe: "arts", kind: "article",
    title: "Who owns a melody?", blurb: "Music has always borrowed from itself. So where does inspiration end and copying begin?",
    text: `Every song is, to some extent, built from other songs. Western pop music relies on a limited set of chord progressions, many hits share the same four chords, and entire genres, from blues to reggaeton, are defined by recognisable rhythmic patterns. If musicians were forbidden from using anything that had been used before, very little new music could exist.

Copyright law attempts to draw a line through this shared territory. In principle, it protects specific, original expression, such as a distinctive melody or particular lyrics, while leaving general ideas, styles and common building blocks free for everyone. In practice, the line has proved remarkably hard to locate. Over the past decade, a series of high-profile lawsuits in the United States has seen artists accused of copying not a melody, but the overall "feel" of an earlier song: its groove, its instrumentation, its atmosphere.

Critics argued that such cases threatened to make genre itself ownable, and many musicians worried that any resemblance, however unintentional, might lead to a lawsuit. Some songwriters began to keep records of their creative process, ready to prove their independent authorship if challenged. Others pointed out an uncomfortable reality: with millions of songs released every year and only twelve notes in the Western scale, accidental similarity is not only possible but statistically inevitable.

Courts have since appeared more cautious, with several later decisions emphasising that basic musical elements cannot be monopolised. Nonetheless, the debate exposes a deeper tension. Copyright exists to reward creativity, yet creativity in music has always depended on imitation, quotation and reinvention. A legal system that protects too little leaves artists without income; one that protects too much risks silencing the very conversation between songs that makes music evolve.`,
    gloss: [
      { word: "chord progressions", means: "sequences of chords that form the harmony of a song" },
      { word: "high-profile", means: "receiving a lot of public attention" },
      { word: "authorship", means: "the fact of being the person who created something" },
      { word: "statistically inevitable", means: "certain to happen because of the large numbers involved" },
      { word: "monopolised", means: "controlled completely by one person or company" },
    ],
    questions: [
      { q: "What does copyright law aim to protect, in principle?", options: ["General styles and genres", "Specific original expression, such as a distinctive melody", "Every chord progression"], answer: 1, why: "\"It protects specific, original expression, such as a distinctive melody or particular lyrics, while leaving general ideas, styles… free.\"" },
      { q: "Why did some musicians start keeping records of their creative process?", options: ["To prove independent authorship if accused of copying", "To sell them to fans", "Because the law required it"], answer: 0, why: "They were \"ready to prove their independent authorship if challenged\"." },
      { q: "What tension does the writer identify at the end?", options: ["Between musicians and fans", "Between pop and classical music", "Between rewarding creativity and the imitation that creativity depends on"], answer: 2, why: "\"Copyright exists to reward creativity, yet creativity in music has always depended on imitation, quotation and reinvention.\"" },
    ],
  },
  {
    id: "c2-boredom", band: "C2", universe: "words", kind: "article",
    title: "In praise of boredom", blurb: "We've almost eliminated boredom from our lives. We may have lost something valuable in the process.",
    text: `There was a time, not so long ago, when boredom was an unavoidable feature of daily life. Queues, bus journeys and rainy afternoons offered long stretches of time with nothing to fill them. Today, such moments have all but vanished. The smartphone has made it possible never to be bored again, and most of us, given the choice, seize that possibility with both hands. A much-discussed experiment found that a significant proportion of participants preferred to give themselves a mild electric shock rather than sit alone with their thoughts for fifteen minutes.

It would be easy to dismiss this as a harmless victory of convenience over tedium. Yet a growing body of research suggests that boredom, for all its discomfort, may serve a purpose. Psychologists increasingly describe it not as an absence of feeling but as a signal: an uncomfortable nudge telling us that our current activity is not meaningful enough and that we should look for something better. Seen in this light, constantly silencing boredom is rather like switching off a smoke alarm because the noise is irritating.

Boredom has also been linked, albeit tentatively, to creativity. In one small study, participants who first completed a deliberately tedious task, copying numbers from a telephone directory, subsequently came up with more inventive ideas in a creative-thinking test than those who had not. The proposed explanation is that a mind deprived of stimulation turns inward and begins to wander, making unexpected connections it would not otherwise make. Many writers and scientists have reported that their best ideas arrived not at their desks but in the shower or on a long walk.

None of this amounts to an argument for cultivating misery. Chronic boredom, particularly when it stems from a lack of genuine opportunity, is corrosive rather than productive. But there may be something to be said for occasionally resisting the reflex to reach for a screen: for letting the mind idle long enough to discover what it does when left to its own devices.`,
    gloss: [
      { word: "all but vanished", means: "almost completely disappeared" },
      { word: "tedium", means: "the state of being boring and monotonous" },
      { word: "nudge", means: "a gentle push or encouragement" },
      { word: "tentatively", means: "in a cautious, not yet certain way" },
      { word: "corrosive", means: "gradually damaging or destructive" },
    ],
    questions: [
      { q: "Why does the writer compare silencing boredom to switching off a smoke alarm?", options: ["Boredom is dangerous.", "Boredom may be a useful warning signal that we ignore.", "Smoke alarms are boring."], answer: 1, why: "Boredom is described as \"a signal… telling us that our current activity is not meaningful enough\"; silencing it ignores the warning." },
      { q: "How does the writer present the link between boredom and creativity?", options: ["As proven beyond doubt", "As completely false", "As suggested by limited evidence"], answer: 2, why: "It has been linked \"albeit tentatively\", using \"one small study\"." },
      { q: "Which statement best matches the final paragraph?", options: ["Occasional boredom can be valuable, but chronic boredom is harmful.", "People should try to be bored as often as possible.", "Screens should be banned."], answer: 0, why: "\"None of this amounts to an argument for cultivating misery. Chronic boredom… is corrosive… But there may be something to be said for occasionally resisting the reflex.\"" },
    ],
  },
  {
    id: "c2-archive", band: "C2", universe: "futures", kind: "article",
    title: "The forgetful century", blurb: "We produce more information than ever. Paradoxically, future historians may know less about us than about the Romans.",
    text: `Historians of the distant future may face an unexpected problem when they come to study the early twenty-first century: not too little evidence, but evidence they can no longer read. We are producing data on an unprecedented scale, yet much of it is stored in formats and on platforms that are startlingly fragile. Clay tablets from ancient Mesopotamia remain legible after four thousand years; a document saved on a floppy disk in the 1990s may already be inaccessible without specialist equipment.

Computer scientists have a name for this prospect: a "digital dark age". The risk arises from several directions at once. Storage media degrade; hard drives fail and even optical discs eventually deteriorate. File formats become obsolete as the software needed to open them disappears. And a vast proportion of contemporary life now exists on commercial platforms whose continued existence depends on business decisions. When a popular service shuts down, years of photographs, conversations and creative work can vanish overnight, often with little more than a few weeks' notice.

Archivists are not standing idle. National libraries routinely capture copies of websites, and non-profit projects have preserved hundreds of billions of web pages. Some researchers advocate "emulation", recreating old software environments so that obsolete files can be opened as originally intended. Others are experimenting with unconventional media, such as encoding data in synthetic DNA, which could in theory survive for thousands of years in cool, dry conditions.

Yet technology alone cannot resolve the deeper question of selection. Previous generations preserved only a fraction of their output, and that scarcity forced difficult but deliberate choices about what mattered. We, by contrast, keep everything by default and curate almost nothing, trusting that the sheer volume will somehow look after itself. It may be that our most valuable legacy to future historians will be not the quantity of what we store, but whether we ever decide, consciously, what deserves to last.`,
    gloss: [
      { word: "unprecedented", means: "never having happened or existed before" },
      { word: "legible", means: "clear enough to be read" },
      { word: "obsolete", means: "no longer used because something newer exists" },
      { word: "emulation", means: "(computing) making one system behave like another, older one" },
      { word: "curate", means: "select, organise and look after a collection" },
    ],
    questions: [
      { q: "What is the paradox described in the first paragraph?", options: ["We produce huge amounts of data, but much of it may become unreadable.", "Ancient tablets are harder to read than digital files.", "Historians are not interested in our century."], answer: 0, why: "We produce data \"on an unprecedented scale\", yet it's stored in formats that are \"startlingly fragile\"." },
      { q: "Which risk is NOT mentioned in the second paragraph?", options: ["Storage media degrading", "File formats becoming obsolete", "Governments deliberately deleting data"], answer: 2, why: "The paragraph mentions degrading media, obsolete formats and platforms shutting down, but not government deletion." },
      { q: "What is the writer's main point in the final paragraph?", options: ["DNA storage will solve the problem.", "The key question is consciously deciding what deserves to be preserved.", "We should stop producing data."], answer: 1, why: "\"Technology alone cannot resolve the deeper question of selection… whether we ever decide, consciously, what deserves to last.\"" },
    ],
  },
];
