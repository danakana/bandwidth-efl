/* B2+ Sounds and Error Clinic. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, say, tr } from "./helpers";

const S = (n: string, k: "notice" | "dict") => `p/b2ps-${n}-${k}.mp3`;
const E = (n: string, k: "notice" | "dict") => `p/b2pe-${n}-${k}.mp3`;

export const B2P_SOUNDS_ERRORS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: S("01", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "Good morning, everyone. Today... I want to talk about one thing... sleep. Most of us... get less than seven hours a night. And that... I'm going to argue... is a problem we can fix." },
  { file: S("01", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "Today, I want to talk about one thing: sleep." },
  { file: E("01", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "On the one hand, the city needs more buses. On the other hand, they're expensive. According to the report, the new routes will start next year. In my opinion, it's worth the money, at least in theory." },
  { file: E("01", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "On the other hand, it is very expensive." },
  { file: E("02", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Our school places great emphasis on reading. We attach a lot of importance to kindness, too. And this year, the head teacher wants to put more emphasis on sport." },
  { file: E("02", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "We place great emphasis on teamwork." },
];

const chunking: NodePractice = {
  nodeId: "b2p.chunking-and-pausing-in-presentations",
  explain: "In presentations, listeners understand you through chunks: groups of words that form one idea (a thought unit), each with one main stress. Pause between chunks, not inside them: 'Most of us | get less than seven hours | a night.' Pause before a key word to build suspense: 'I want to talk about one thing: | sleep.' Pause after an important point to let it land. Spanish speakers often speak in long, unbroken lines in English; chunking makes you sound confident and easy to follow.",
  pattern: ["Chunk = a thought unit: Most of us | get less than seven hours | a night.", "One main stress per chunk: most of US | SEVen hours | a NIGHT", "Pause BEFORE a key word for suspense: one thing: | sleep.", "Pause AFTER a key point to let it land · Never pause inside a chunk: the | problem"],
  steps: [
    [
      heard(S("01", "notice"), "What is the talk about?", ["Sleep", "School timetables", "Exercise"], 0, "'I want to talk about one thing: sleep.'"),
      heard(S("01", "notice"), "Where does the speaker pause longest?", ["Just before the word 'sleep'", "In the middle of 'everyone'", "Nowhere"], 0, "A pause before the key word builds suspense."),
      ch("Which shows good chunking?", ["Most of us | get less than seven hours | a night.", "Most | of us get | less than | seven hours a | night.", "Most of us get less than seven hours a night (no pauses)."], 0, "Pause between thought units."),
      ch("A 'chunk' in speech is…", ["a group of words that forms one idea", "a single syllable in a word", "a whole paragraph"], 0, "Thought unit."),
      ch("Why pause before a key word?", ["To build suspense and make it stand out", "To breathe and nothing else", "Because you forgot the word"], 0, "The silence spotlights the word."),
    ],
    [
      ch("Each chunk usually has…", ["one main stressed word", "no stress", "every word stressed"], 0, "most of US | SEVen hours."),
      ch("Where should you NOT pause?", ["Between 'the' and its noun: the | problem", "After a full idea has finished", "Before a key word"], 0, "Don't break a chunk."),
      ch("Why does chunking help listeners?", ["They process one idea at a time.", "It makes the talk longer.", "It hides mistakes."], 0, "Clear structure."),
      ctx("A student reads a 3-minute presentation fast without stopping.", "The audience probably feels…", ["lost and tired", "excited", "it was very clear"], 0, "No chunks = hard to follow."),
      ch("What's a good reason to pause AFTER a point?", ["To let an important idea sink in", "To look at your phone quickly", "To show you're nervous"], 0, "Silence = emphasis."),
    ],
    [
      ch("Choose the best chunking.", ["In my opinion, | schools should start | at nine.", "In my | opinion schools | should start at | nine.", "In | my | opinion | schools | should | start | at | nine."], 0, "Three thought units."),
      ch("Where's the best place for a suspense pause? 'The answer is ___ simple.'", ["After 'is': The answer is | simple.", "After 'The': The | answer is simple.", "No pause at all"], 0, "Pause before the key word."),
      dict(S("01", "dict"), ["Today, I want to talk about one thing: sleep", "Today I want to talk about one thing: sleep", "Today, I want to talk about one thing, sleep", "Today I want to talk about one thing sleep"]),
      say("Most of us | get less than seven hours | a night.", "Pause at each line; stress US, SEVen, NIGHT."),
      say("I want to talk about one thing: | sleep.", "Pause before SLEEP."),
    ],
    [
      ch("A presenter says: 'The main | problem is | that we don't | sleep enough.' What's wrong?", ["The pauses break chunks in the wrong places.", "Nothing is wrong with it at all.", "It has too few words."], 0, "Better: The main problem is | that we don't sleep enough."),
      ch("A presenter stresses every word equally. Effect?", ["The key ideas don't stand out.", "It sounds very clear and strong.", "It's more polite."], 0, "Stress only what matters."),
      ch("Which is the best fix for speaking too fast?", ["Slow down by pausing between chunks, not by stretching every word.", "Speak louder, but keep the same fast speed.", "Read everything from the slide."], 0, "Pauses control speed."),
      ch("'Um' and 'eh' instead of silent pauses usually sound…", ["less confident", "more professional", "funnier"], 0, "Silence is stronger than fillers."),
      ch("A Spanish speaker adds 'eh' between every chunk. Best advice?", ["Replace 'eh' with a short silent pause.", "Talk faster so there's no time for 'eh'.", "Add more 'eh' to sound natural."], 0, "Silent pauses sound confident."),
    ],
    [
      ch("Your presentation slide says '73% of students sleep less than seven hours.' How do you say it?", ["Seventy-three percent | of students | sleep less than seven hours. | (pause)", "Read it as fast as possible to save time for questions.", "Skip it; the slide is enough."], 0, "Chunk it, then pause to let it land."),
      ch("Which opening sounds most confident?", ["Good morning. | (pause) | Let me ask you a question.", "Um, so, yeah, hi, um, my presentation is about…", "Hellomynameisanaandtodayi'mtalkingaboutsleep."], 0, "Calm, chunked, a pause."),
      ch("How long should a suspense pause be?", ["About one or two seconds", "About ten seconds", "No pause at all"], 0, "Short but noticeable."),
      ch("What's the best way to practise chunking?", ["Mark your script with | and record yourself", "Memorise every word without breathing", "Only read silently"], 0, "Mark, record, listen."),
      say("And that, | I'm going to argue, | is a problem | we can fix.", "Pause at each |; stress ARgue, PROBlem, FIX."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write the opening of a one-minute presentation (60 words or more) on a topic you care about. Mark your chunks with | and put a pause before one key word. If you can, record it too." },
      { universe: "science", text: "Write the opening of a one-minute science presentation (60 words or more). Mark your chunks with | and include a suspense pause before a key word." },
      { universe: "futures", text: "Write the opening of a one-minute presentation about the future of your city (60 words or more). Mark chunks with | and add a suspense pause." },
    ],
    minWords: 60,
    checks: [
      { label: "Chunks marked with | (at least eight)", pattern: "\\|", min: 8 },
      { label: "A question or a hook for the audience", pattern: "\\?|\\b(imagine|picture this|let me ask|did you know)\\b", min: 1 },
    ],
    rubric: ["Each chunk is one complete thought unit.", "I never split 'the' or 'a' from its noun.", "I put one pause before a key word for suspense."],
    model: "Good morning, everyone. | Let me ask you a question: | how many hours | did you sleep last night? | For most of us, | the answer is | not enough. | Today | I want to talk about | one simple habit | that could change that: | (pause) | putting your phone | in another room. | It sounds small, | but the evidence | suggests | it makes a real difference | to how we feel.",
  },
};

const literal: NodePractice = {
  nodeId: "b2p.fixed-phrases-translated-literally",
  explain: "Fixed phrases can't be translated word by word. Spanish speakers often say: *In other hand (✓ On the other hand) · *according with (✓ according to) · *in my opinion I think (✓ choose one) · *in theory / in practice ✓ (these are fine) · *at the end (when you mean 'finally' ✓ in the end) · *in the other side (✓ on the other side) · *since a long time (✓ for a long time). Learn the whole chunk, with its preposition.",
  pattern: ["On the one hand… On the other hand… (not *In other hand)", "according to (not *according with)", "In the end = finally · At the end (of something) = at the final point", "In my opinion… OR I think… (not both) · for a long time (not *since a long time)"],
  steps: [
    [
      heard(E("01", "notice"), "Which phrase introduces the opposite point?", ["On the other hand", "In my opinion", "According to"], 0, "On the one hand… On the other hand…"),
      heard(E("01", "notice"), "Where does the information about new routes come from?", ["The report", "The speaker's friend", "A bus driver"], 0, "'According to the report…'"),
      ch("Which is correct?", ["On the other hand", "In other hand", "In the other hand"], 0, "Always 'on'."),
      ch("Which is correct?", ["according to the report", "according with the report", "according the report"], 0, "according to."),
      ch("'In the end, we took a taxi.' In the end means…", ["finally, after other things", "at the end of a film", "in a corner"], 0, "In the end = finalmente."),
    ],
    [
      ch("What's the difference? 'At the end of the film' vs 'In the end, we left.'", ["At the end = the final point of something; In the end = finally", "There's no difference in meaning between them.", "'In the end' is always wrong."], 0, "Two different phrases."),
      ch("Why is 'In my opinion, I think…' a problem?", ["It says the same thing twice.", "It's rude to the reader.", "It's wrong grammar."], 0, "Choose one."),
      ch("Spanish 'desde hace mucho tiempo' → English…", ["for a long time", "since a long time", "from a long time"], 0, "for + period of time."),
      ctx("A student writes: 'In other hand, cars are fast.'", "What's the fix?", ["On the other hand", "On other hand", "In another hand"], 0, "On the other hand."),
      ch("Why do these errors happen?", ["Word-by-word translation from Spanish", "Bad spelling of common words", "They're American English forms"], 0, "Learn chunks, not single words."),
    ],
    [
      gap("On the one hand, it's cheap.", "the other hand, it's slow.", ["On"], "On the other hand."),
      gap("According", "the news, it will rain.", ["to"], "according to."),
      gap("We waited for an hour, and", "the end, the concert was cancelled.", ["in"], "In the end = finally."),
      dict(E("01", "dict"), ["On the other hand, it is very expensive", "On the other hand it is very expensive", "On the other hand, it's very expensive"]),
      tr("Correct the sentence with the words given.", "I have lived here since a long time.", ["I have lived here for a long time", "I've lived here for a long time"], "for + period.", "for"),
    ],
    [
      fix(["In other hand,", "the train", "is more comfortable."], 0, ["On the other hand,"], "On the other hand."),
      fix(["According with", "the teacher,", "the test is easy."], 0, ["According to"], "according to."),
      fix(["We have known each other", "since a long time,", "since primary school."], 1, ["for a long time,", "for a long time"], "for + a period; since + a starting point."),
      ch("Which is wrong?", ["At the end, we decided to stay home.", "In the end, we decided to stay home.", "At the end of the day, we stayed home."], 0, "Finally = In the end."),
      ch("Which is wrong?", ["She has studied English since a long time.", "She has studied English for a long time.", "She has studied English since 2020."], 0, "since + point; for + period."),
    ],
    [
      ch("Best for an essay?", ["On the one hand, tourism creates jobs. On the other hand, it raises prices.", "In one hand tourism creates jobs, in other hand it raises prices.", "One hand, jobs. Other hand, prices. Tourism is both."], 0, "Correct paired phrases."),
      ch("Which sounds most natural when reporting a source?", ["According to a recent survey, most students…", "According with a recent survey, most students…", "According a recent survey, most students…"], 0, "according to."),
      ch("Best way to avoid literal-translation errors?", ["Learn and practise fixed phrases as whole chunks", "Translate every word carefully from Spanish", "Avoid using fixed phrases completely"], 0, "Chunks."),
      ch("A friend's essay says 'In other hand' three times. Best feedback?", ["It's 'On the other hand', with 'on'. Easy fix!", "Your English is bad. You should study more.", "Delete the whole paragraph and start again."], 0, "Kind and specific."),
      say("On the one hand, it's cheap. On the other hand, it's slow.", "Balance the two halves with a pause."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short balanced paragraph (70 words or more) about online classes. Use On the one hand… On the other hand…, according to, and In the end, all correctly." },
      { universe: "futures", text: "Write a short balanced paragraph (70 words or more) about electric cars. Use On the one hand… On the other hand…, according to, and In the end, all correctly." },
    ],
    minWords: 70,
    checks: [
      { label: "On the one hand… On the other hand…", pattern: "\\bon the (one|other) hand\\b", min: 2 },
      { label: "according to", pattern: "\\baccording to\\b", min: 1 },
      { label: "In the end (meaning finally)", pattern: "\\bin the end\\b", min: 1 },
      { label: "No literal-translation errors (in other hand, according with, since a long time)", pattern: "^(?![\\s\\S]*\\b(in (the )?other hand|according with|since a long time)\\b)[\\s\\S]+$", min: 1 },
    ],
    rubric: ["Each fixed phrase has the right preposition.", "I didn't double 'In my opinion, I think'.", "My paragraph shows both sides before deciding."],
    model: "On the one hand, online classes are flexible. Students can learn from home, save time on transport and watch recordings again. On the other hand, many students feel isolated and find it hard to concentrate. According to a survey at my school, most students preferred a mix of both. In the end, I think the best option is to keep classes in person and use online lessons only when necessary.",
  },
};

const emphasis: NodePractice = {
  nodeId: "b2p.make-emphasis-give-importance",
  explain: "Spanish 'hacer énfasis' and 'dar importancia' don't translate word for word. English says: place / put / lay emphasis on (not *make emphasis); emphasise something (no 'on' after the verb: emphasise the point); attach importance to / consider something important / place importance on (not *give importance). Also: pay attention to (not *put attention), take into account (not *have in account). These verb + noun partners are fixed.",
  pattern: ["place / put / lay emphasis ON something (not *make emphasis)", "emphasise something (not *emphasise on)", "attach importance TO · place importance ON (not *give importance)", "pay attention to (not *put attention) · take into account (not *have in account)"],
  steps: [
    [
      heard(E("02", "notice"), "What does the school place great emphasis on?", ["Reading", "Sport", "Exams"], 0, "'places great emphasis on reading'."),
      heard(E("02", "notice"), "What does the school attach importance to?", ["Kindness", "Uniforms", "Homework"], 0, "'attach a lot of importance to kindness'."),
      ch("Which is correct?", ["place emphasis on", "make emphasis in", "do emphasis to"], 0, "place / put emphasis on."),
      ch("Which is correct?", ["attach importance to", "give importance to", "make importance to"], 0, "attach importance to."),
      ch("Which is correct?", ["The teacher emphasised the rules.", "The teacher emphasised on the rules.", "The teacher made emphasis on the rules."], 0, "emphasise + object."),
    ],
    [
      ch("Why do Spanish speakers say 'make emphasis'?", ["Literal translation of 'hacer énfasis'", "It's correct British English, used in formal writing", "It's a common English idiom"], 0, "hacer ≠ always make."),
      ch("'Pay attention' vs 'put attention'?", ["pay attention is correct", "put attention is correct", "both are fine"], 0, "pay attention to."),
      ch("'Take into account' means…", ["consider", "count money", "open an account"], 0, "tener en cuenta = take into account."),
      ctx("A report says: 'The study places little importance on cost.'", "This means the study…", ["doesn't consider cost very important", "is very expensive to carry out", "ignores the other study"], 0, "place importance on."),
      ch("Which noun goes with 'lay'?", ["emphasis (lay emphasis on)", "importance (lay importance on)", "attention (lay attention on)"], 0, "lay emphasis on = formal."),
    ],
    [
      gap("Our coach puts a lot of", "on teamwork.", ["emphasis"], "put emphasis on."),
      gap("My parents attach great importance", "education.", ["to"], "attach importance to."),
      gap("Please pay", "to the instructions.", ["attention"], "pay attention to."),
      dict(E("02", "dict"), ["We place great emphasis on teamwork"]),
      tr("Correct the sentence with the word given.", "The report makes emphasis on safety.", ["The report places emphasis on safety", "The report emphasises safety", "The report puts emphasis on safety", "The report emphasizes safety"], "place emphasis on / emphasise.", "emphasis"),
    ],
    [
      fix(["The speaker", "made emphasis on", "climate change."], 1, ["placed emphasis on", "put emphasis on", "emphasised", "emphasized", "laid emphasis on"], "place/put emphasis on, or emphasise."),
      fix(["My school", "gives a lot of importance to", "sport."], 1, ["attaches a lot of importance to", "places a lot of importance on", "attaches great importance to"], "attach importance to."),
      fix(["You have to", "have in account", "the weather."], 1, ["take into account"], "take into account."),
      ch("Which is wrong?", ["She emphasised on the deadline.", "She emphasised the deadline.", "She put emphasis on the deadline."], 0, "No 'on' after the verb emphasise."),
      ch("Which is wrong?", ["Please put attention.", "Please pay attention.", "Please pay close attention."], 0, "pay attention."),
    ],
    [
      ch("Best for a formal report?", ["The policy places particular emphasis on safety.", "The policy makes a lot of emphasis in safety.", "The policy is very safety."], 0, "Formal and correct."),
      ch("Best in casual speech?", ["She really stressed how important it was.", "She laid considerable emphasis upon its importance.", "She made emphasis."], 0, "Natural, informal alternative."),
      ch("Your teacher writes 'give importance' in red on your essay. Best correction?", ["attach importance to / consider important", "give more importance to / give importance", "make importance to / do importance"], 0, "Fixed partners."),
      ch("Which sentence shows the strongest emphasis?", ["The school places great emphasis on respect.", "The school says respect is OK, I think.", "Respect exists at the school."], 0, "great emphasis."),
      say("Our school places great emphasis on reading.", "Stress GREAT EMphasis and READing."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe what your school or family values most (70 words or more). Use place/put emphasis on, attach importance to, and pay attention to, all correctly." },
      { universe: "arts", text: "Describe what a good art or music teacher values most (70 words or more), using place/put emphasis on, attach importance to and pay attention to." },
    ],
    minWords: 70,
    checks: [
      { label: "place / put / lay emphasis on, or emphasise", pattern: "\\b((place|places|placed|put|puts|lay|lays|laid) (great |a lot of |particular |more |little )?emphasis on|emphasi[sz](e|es|ed|ing))\\b", min: 1 },
      { label: "attach (great) importance to / place importance on", pattern: "\\b(attach(es|ed)?|place(s|d)?) (great |a lot of |particular |little |more )?importance (to|on)\\b", min: 1 },
      { label: "pay attention to", pattern: "\\b(pay|pays|paid|paying) (close |more |special )?attention to\\b", min: 1 },
      { label: "No literal errors (make emphasis, give importance, put attention)", pattern: "^(?![\\s\\S]*\\b(make|makes|made) emphasis|[\\s\\S]*\\b(give|gives|gave) (a lot of |great |much )?importance|[\\s\\S]*\\bput(s)? attention)[\\s\\S]+$", min: 1 },
    ],
    rubric: ["I used the right verb with emphasis and importance.", "I didn't add 'on' after 'emphasise'.", "My description is specific, with an example."],
    model: "My family places great emphasis on spending time together. Every Sunday we have lunch with my grandparents, and nobody is allowed to look at their phone. My parents also attach a lot of importance to education: they always pay attention to my grades and ask what I learned. My grandmother emphasises kindness more than anything. She says that being clever is useful, but being kind is absolutely essential in life.",
  },
};

export const B2P_SOUNDS: NodePractice[] = [chunking];
export const B2P_ERRORS: NodePractice[] = [literal, emphasis];
