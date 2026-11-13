/* C1 Sounds and Error Clinic. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, say, tr } from "./helpers";

const S = (n: string, k: string) => `p/c1s-${n}-${k}.mp3`;
const E = (n: string, k: "notice" | "dict") => `p/c1e-${n}-${k}.mp3`;

export const C1_SOUNDS_ERRORS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: S("01", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "G'day! I reckon we should head to the beach this arvo. It's going to be heaps hot. Bring your sunnies and a few snags for the barbie. No worries if you can't make it, though." },
  { file: S("01", "naija"), voice: "ideEOMYLgcyF9rr94ycz", script: "Good morning, how far? I'm coming now now, just wait for me small. The traffic on the expressway was something else this morning, but I go reach there before ten." },
  { file: S("01", "irish"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Ah, you're grand, sure it's no bother at all. Come in out of the rain. I'll put the kettle on, and we'll have a bit of craic while we wait for the lads." },
  { file: S("01", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "It's a wee bit cold outside, so take a jacket." },
  { file: S("02", "notice"), voice: "3f6pec3wODJsjTqtcNI2", script: "I didn't say she STOLE the money. I said she BORROWED it. And I didn't say SHE took it. I said her BROTHER did. So please, get the story right." },
  { file: S("02", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "I asked for a large coffee, not a small one." },
  { file: E("01", "notice"), voice: "bIHbv24MWmeRgasZH58o", script: "Firstly, homework is useful. Moreover, it helps memory. Furthermore, it builds discipline. In addition, parents can see progress. Moreover, it prepares students for university. In conclusion, homework is good." },
  { file: E("01", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "This approach has one clear advantage." },
  { file: E("02", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "Education is the key to a better future. Life in big cities can be stressful, and nature offers a break from it. The education I received at my village school, though, taught me more about the nature of friendship than any book." },
  { file: E("02", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Happiness is more important than money." },
  { file: E("03", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Many students work part-time. This gives them experience, but it also leaves less time for study. Some manage both well; others struggle. Schools could help by offering flexible timetables." },
  { file: E("03", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "Some manage both well; others struggle." },
  { file: E("04", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "I actually live in Bogotá, but I'll eventually move to the coast. Last week I attended a conference, where I assisted a famous scientist with her slides. I intend to study medicine, and I've realised it's a sensible choice for me." },
  { file: E("04", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "Eventually, after years of practice, she became a doctor." },
];

const varieties: NodePractice = {
  nodeId: "c1.understanding-varieties-of-english",
  explain: "English is spoken by over a billion people, with many accents and local words. At C1 the goal is understanding, not imitation: you keep your own accent, but you follow Australians, Scots, Nigerians, Irish, Indians, Americans and Canadians without panic. Listen for: vowel changes (Australian 'day' can sound like 'die'), dropped or tapped sounds, rhythm, and local words. Australia: arvo (afternoon), reckon (think), heaps (very / a lot). Scotland: wee (small), aye (yes). Ireland: grand (fine), craic (fun, chat). Nigeria: how far? (how are you?), now now (right now). Context almost always helps.",
  pattern: ["Australia: arvo = afternoon · heaps = very / a lot · sunnies = sunglasses · no worries", "Scotland: wee = small · aye = yes · ken = know", "Ireland: grand = fine · craic = fun · the lads = the guys", "Nigeria: how far? = how are you? · now now = right now · small = a little"],
  steps: [
    [
      heard(S("01", "notice"), "When does the Australian speaker want to go to the beach?", ["This afternoon", "Tomorrow morning", "Tonight"], 0, "arvo = afternoon."),
      heard(S("01", "notice"), "What should the listener bring?", ["Sunglasses and sausages for a barbecue", "Sandwiches and a ball for the park", "A jacket and an umbrella"], 0, "sunnies, snags, barbie."),
      heard(S("01", "naija"), "The Nigerian speaker says 'I'm coming now now'. When are they arriving?", ["Very soon", "Next week", "They're not coming"], 0, "now now = right away."),
      heard(S("01", "irish"), "What does the Irish speaker mean by 'you're grand'?", ["You're fine, no problem.", "You're very big.", "You're a grandparent."], 0, "grand = fine."),
      ch("What is the goal for C1 learners?", ["Understanding many accents, not copying them", "Sounding exactly British in every word", "Avoiding all accents"], 0, "Understanding, not imitation."),
    ],
    [
      ch("'I reckon it'll rain' (Australian/British) means…", ["I think it'll rain.", "I counted the rain.", "I recommend rain."], 0, "reckon = think."),
      ch("'It's heaps good!' means…", ["It's really good.", "It's a pile.", "It's not good."], 0, "heaps = very."),
      ch("A Scottish speaker says 'Aye, that's a wee problem.' Meaning?", ["Yes, that's a small problem.", "No, that's a big problem.", "I don't know."], 0, "aye = yes, wee = small."),
      ctx("A Nigerian friend greets you: 'How far?'", "Best reply?", ["'I'm fine, and you?'", "'About ten kilometres.'", "'I'm not going far.'"], 0, "How far? = How are you?"),
      ch("What helps most with unfamiliar accents?", ["Context and focusing on key stressed words", "Understanding every single sound", "Giving up and asking for subtitles"], 0, "Big picture first."),
    ],
    [
      heard(S("01", "irish"), "What will the Irish speaker do while they wait?", ["Make tea and chat", "Go out in the rain", "Call the lads"], 0, "kettle on, a bit of craic."),
      heard(S("01", "naija"), "What was the traffic like?", ["Very bad: 'something else'", "Empty: there were no cars", "Normal for a weekday"], 0, "'something else' = extraordinary."),
      dict(S("01", "dict"), ["It's a wee bit cold outside, so take a jacket", "It's a wee bit cold outside so take a jacket", "It is a wee bit cold outside, so take a jacket"]),
      gap("Let's meet this", "(Australian: afternoon).", ["arvo"], "arvo."),
      gap("We had great", "at the party (Irish: fun).", ["craic"], "craic."),
    ],
    [
      ch("A student hears 'G'day, mate!' and thinks it's 'Good die'. What helped confuse them?", ["Australian 'ay' can sound like 'eye'", "The speaker was angry with them", "It's a different language"], 0, "Vowel shift."),
      ch("Which strategy is unhelpful with a strong accent?", ["Pretending to understand everything", "Asking 'Sorry, could you say that again?'", "Using context"], 0, "Asking is normal and polite."),
      ch("Which statement is wrong?", ["Only British and American English are correct.", "Many varieties of English are equally valid.", "Accents change by region and country."], 0, "All varieties are real English."),
      ch("'Just wait for me small' (Nigerian English) means…", ["Wait for me a little.", "Wait for a small person.", "Don't wait."], 0, "small = a little."),
      ch("In a video call, you can't understand an Indian colleague's word. Best?", ["'Sorry, I didn't catch that. Could you spell it?'", "Say nothing and hope it's not important.", "'Your English is wrong, I can't understand.'"], 0, "Polite repair."),
    ],
    [
      ch("Should you change your Colombian accent to sound Australian?", ["No: be clear and understandable; your accent is fine.", "Yes, always, to sound more natural and native.", "Only if you live in Australia."], 0, "Intelligibility, not imitation."),
      ch("Best way to improve your understanding of accents?", ["Listen to podcasts, series and creators from many countries", "Only watch American films and series with subtitles", "Read more books in English"], 0, "Variety of input."),
      ch("An Australian says 'No worries!' after you thank them. They mean…", ["You're welcome.", "Don't worry about the test.", "There's a problem."], 0, "No worries = no problem."),
      ch("Which is the most respectful attitude?", ["Curious and open to different Englishes", "Laughing at accents", "Correcting native speakers' local words"], 0, "Respect for varieties."),
      say("Sorry, I didn't quite catch that. Could you say it again?", "Polite repair: stress CATCH and aGAIN."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write 70 words or more about a time you met or listened to someone with a different English accent (in person, online, or in a series). What was hard to understand? Which words or sounds surprised you? Use at least two local words from this skill and explain them." },
      { universe: "screens", text: "Write 70 words or more about a creator, streamer or series character with a different English accent. What helps you understand them? Use and explain at least two local words." },
    ],
    minWords: 70,
    checks: [
      { label: "Two local words (arvo, reckon, heaps, sunnies, wee, aye, grand, craic, how far, now now…)", pattern: "\\b(arvo|reckon|heaps|sunnies|snags|barbie|no worries|g'day|wee|aye|ken|grand|craic|lads|how far|now now|mate|y'all|eh|brekkie|cheers)\\b", min: 2 },
      { label: "An explanation (means, = , I learned that…)", pattern: "\\bmeans?\\b|=|\\bmeaning\\b|\\bi (learned|learnt|found out|realised|realized)\\b", min: 1 },
    ],
    rubric: ["I described the accent with respect.", "I explained what the local words mean.", "I mentioned a strategy that helped me understand."],
    model: "Last year I played an online game with a team of Australians. At first I understood almost nothing! One player kept saying 'heaps', which means 'very' or 'a lot', and he always said 'I reckon' instead of 'I think'. Their vowels sounded different too: 'mate' sounded like 'might'. What helped was focusing on the stressed words and asking them to repeat things. After a few weeks, I could follow almost everything.",
  },
};

const contrastive: NodePractice = {
  nodeId: "c1.contrastive-stress-and-nuance",
  explain: "In English, moving the stress changes the meaning of the same sentence. 'I didn't say she STOLE the money' (I said she borrowed it). 'I didn't say SHE stole it' (someone else did). 'I didn't SAY she stole it' (maybe I implied it). We use contrastive stress to correct, contrast and add nuance: 'I asked for a LARGE coffee, not a small one.' Spanish uses word order more often (No fue ella quien…), so learners sometimes miss this. Listen for the loudest, longest, highest word: that's the focus.",
  pattern: ["Stress the word that contrasts with something: I wanted the BLUE one (not the red).", "Correct someone: It's on TUESday, not Thursday.", "Same words, new meaning: I didn't say SHE did it. / I didn't say she DID it.", "Stressed word = louder + longer + higher pitch"],
  steps: [
    [
      heard(S("02", "notice"), "According to the speaker, what did she do with the money?", ["She borrowed it.", "She stole it.", "She lost it."], 0, "Stress on BORROWED contrasts with STOLE."),
      heard(S("02", "notice"), "Who took the money?", ["Her brother", "She did", "The speaker"], 0, "'I said her BROTHER did'."),
      heard(S("02", "notice"), "Why does the speaker stress certain words?", ["To correct the story", "To ask a question", "Because they're long words"], 0, "Contrastive stress = correction."),
      ch("'I wanted the BLUE shirt.' The speaker probably received…", ["a shirt in another colour", "a blue shirt, as ordered", "no shirt at all"], 0, "Contrast with another colour."),
      ch("How do you hear the stressed word?", ["It's louder, longer and higher.", "It's quieter than the others.", "It's always the first word."], 0, "Pitch, length, volume."),
    ],
    [
      ch("'I didn't say SHE stole it.' Meaning?", ["Someone else stole it, not her.", "She borrowed it.", "I wrote it, I didn't say it."], 0, "Focus on SHE."),
      ch("'I didn't SAY she stole it.' Meaning?", ["I suggested it, but didn't say it directly.", "Someone else stole it.", "She didn't steal it."], 0, "Focus on SAY."),
      ch("Where does the stress go? 'The meeting is on Tuesday, not Thursday.'", ["TUESday and THURSday", "meeting (the meeting is)", "is (the meeting IS)"], 0, "Stress the contrasting words."),
      ctx("A waiter brings tea. You say: 'Sorry, I ordered COFFEE.'", "Why stress COFFEE?", ["To correct the mistake politely", "To shout at the waiter angrily", "Because it's a noun"], 0, "Correction."),
      ch("Why might Spanish speakers miss contrastive stress?", ["Spanish often uses word order or extra words for focus instead", "Spanish has no stress at all, in any word", "It doesn't exist in English"], 0, "Different focus strategies."),
    ],
    [
      dict(S("02", "dict"), ["I asked for a large coffee, not a small one", "I asked for a large coffee not a small one"]),
      say("I asked for a LARGE coffee, not a SMALL one.", "Stress LARGE and SMALL."),
      say("It's on TUESday, not THURSday.", "Stress the days."),
      ch("Which word should you stress? 'Your brother broke it, not you.' → 'YOUR ___ broke it.'", ["BROTHER", "broke", "it"], 0, "Brother contrasts with you."),
      ch("Which word to stress? 'I like the film; I just don't LOVE it.'", ["LOVE", "film", "just"], 0, "Contrast like/love."),
    ],
    [
      ctx("Your friend says 'You hate maths!' You reply: 'I don't HATE it. I just find it HARD.'", "What are you correcting?", ["The word 'hate'", "The word 'maths'", "Who hates maths"], 0, "Stress on the corrected word."),
      ch("A learner says 'I didn't take your phone' with flat stress, meaning 'I took someone else's'. What's missing?", ["Stress on YOUR", "Stress on DIDN'T", "Nothing"], 0, "I didn't take YOUR phone."),
      ch("Which stress pattern sounds rude in a correction?", ["Stressing every word loudly", "Stressing only the corrected word", "Using a soft 'Actually,…' first"], 0, "Over-stressing sounds aggressive."),
      ch("'She's not a GOOD singer; she's a GREAT singer.' Meaning?", ["She's even better than good.", "She's a bad singer, really.", "She's not really a singer."], 0, "Contrastive stress adds nuance."),
      ch("What's the softest way to correct a teacher's mistake?", ["'Sorry, I think it's actually on THURSday.'", "'NO! It's THURSDAY! You're wrong!'", "'Wrong. Thursday.'"], 0, "Softener + stress."),
    ],
    [
      ch("Someone thanks you for a gift you didn't buy. Best?", ["'Oh, it was actually from my SISter.'", "'I didn't buy it. It wasn't me.'", "'NOT ME. Somebody else.'"], 0, "Gentle correction with stress."),
      ch("Best way to practise contrastive stress?", ["Say one sentence several times, stressing a different word each time", "Read the sentence silently many times", "Learn the spelling rules"], 0, "Change stress, change meaning."),
      ch("In a debate, how can stress help?", ["It highlights the exact point you disagree with.", "It makes you louder than the others in the room.", "It doesn't help in a debate."], 0, "Precision."),
      ch("In a presentation, which words should get contrastive stress?", ["The contrasting key ideas: 'Not FASTer, but SMARTer'", "Every article and preposition in the sentence", "None of the words"], 0, "Rhetorical contrast."),
      say("I didn't say she STOLE the money. I said she BORROWED it.", "Stress STOLE and BORROWED."),
    ],
  ],
  create: {
    prompts: [
      { text: "Take the sentence 'I didn't say he broke the window.' Write it four times (60 words or more in total), each time with a different word in CAPITALS, and explain what each version means. Then record yourself if you can." },
      { universe: "words", text: "Write a short dialogue (60 words or more) where one person corrects another three times using contrastive stress. Put the stressed words in CAPITALS." },
    ],
    minWords: 60,
    checks: [
      { label: "Four stressed words in CAPITALS", pattern: "\\b[A-Z]{2,}\\b", min: 4 },
      { label: "Explanations (means, meaning, so…)", pattern: "\\bmeans?\\b|\\bmeaning\\b|\\bsomeone else\\b|\\bnot\\b", min: 2 },
    ],
    rubric: ["Each stressed word changes the meaning.", "My explanations match the stress.", "If I recorded it, the stressed word was clearly louder and longer."],
    model: "I didn't say HE broke the window. This means someone else broke it, maybe his sister.\nI didn't say he BROKE the window. This means he did something else, for example he only cracked it.\nI didn't say he broke the WINDOW. This means he broke something different, like the door.\nI didn't SAY he broke the window. This means I didn't say it directly, but maybe I suggested it.",
  },
};

const mechanical: NodePractice = {
  nodeId: "c1.mechanical-linking",
  explain: "Many students learn a list of linkers (Firstly, Moreover, Furthermore, In addition, In conclusion) and put one at the start of every sentence. This 'mechanical linking' sounds robotic and often gives the wrong logic. C1 writers link ideas in subtler ways: reference words (This, Such an approach, These problems), repeated or related key nouns, relative clauses and participles, and linkers only where the logic truly needs them. Also: 'On the other hand' needs a first hand; 'Moreover' adds a STRONGER point, not just any point; and 'In conclusion' shouldn't appear in every paragraph.",
  pattern: ["Overuse: Moreover, … Furthermore, … In addition, … (every sentence)", "Better: reference words: This means… · Such a change… · These figures…", "Better: key noun chains: … a new law. The law… · … teenagers. This age group…", "Linkers only where the logic needs one, and the right one."],
  steps: [
    [
      heard(E("01", "notice"), "How many linkers start the sentences?", ["Almost every sentence", "None", "Only the last one"], 0, "Firstly, Moreover, Furthermore, In addition, Moreover, In conclusion."),
      heard(E("01", "notice"), "Which linker is repeated?", ["Moreover", "However", "Therefore"], 0, "Moreover appears twice."),
      heard(E("01", "notice"), "How does the paragraph sound?", ["Robotic and list-like", "Natural and flowing", "Very informal"], 0, "Mechanical linking."),
      ch("What is 'mechanical linking'?", ["Using linkers automatically at the start of every sentence", "Linking two machines together with a cable", "Never using any linkers at all"], 0, "Linkers as decoration."),
      ch("Which links ideas without a linker word?", ["This approach also saves time.", "Moreover, it saves time.", "Furthermore, time is saved."], 0, "Reference word: This approach."),
    ],
    [
      ch("When is 'Moreover' correct?", ["When adding a point that strengthens the argument", "At the start of every paragraph in the essay", "To contrast two different ideas"], 0, "Moreover = and, even more importantly."),
      ch("'On the other hand' needs…", ["a contrasting point after a first point ('On the one hand' or similar)", "a list of reasons after it, separated by commas", "a question to the reader"], 0, "Two hands = two sides."),
      ch("Why are reference words (This, These, Such) useful?", ["They connect sentences smoothly without a list of linkers.", "They make the writing longer and more formal.", "They are informal words."], 0, "Cohesion."),
      ctx("A teacher writes: 'Too many linkers. Try using 'this' + noun.'", "Which revision follows the advice?", ["Uniforms reduce bullying. This benefit alone justifies them.", "Moreover, uniforms reduce bullying. Furthermore, they're good.", "Uniforms. Bullying. Good."], 0, "This + noun."),
      ch("Which is a natural link?", ["Prices rose sharply. As a result, sales fell.", "Prices rose sharply. In addition, sales fell.", "Prices rose sharply. Moreover, sales fell."], 0, "Cause → result, not addition."),
    ],
    [
      gap("Many teenagers sleep less than eight hours.", "lack of sleep affects their concentration.", ["This"], "This + noun as a link."),
      gap("The council introduced a new recycling law.", "law requires every home to separate waste.", ["The", "This"], "Repeat the key noun."),
      tr("Join without using Moreover / Furthermore / In addition, using the word given.", "Cycling is cheap. Moreover, cycling is healthy.", ["Cycling is cheap and healthy", "Cycling is not only cheap but also healthy", "Cycling is both cheap and healthy", "Not only is cycling cheap, but it is also healthy", "Not only is cycling cheap but it is also healthy"], "Combine the ideas in one sentence.", "and"),
      dict(E("01", "dict"), ["This approach has one clear advantage"]),
      tr("Rewrite the second sentence with a reference phrase, using the word given.", "Some cities have banned cars. Moreover, banning cars has reduced pollution.", ["Some cities have banned cars. Such bans have reduced pollution", "Some cities have banned cars, and such bans have reduced pollution", "Some cities have banned cars. Such a ban has reduced pollution"], "Such + noun refers back.", "Such"),
    ],
    [
      fix(["Prices went up.", "Moreover,", "fewer people bought tickets."], 1, ["As a result,", "Consequently,", "As a consequence,", "Therefore,"], "This is a result, not an extra point."),
      fix(["I love the city.", "On the other hand,", "the beach is great too."], 1, ["Equally,", "At the same time,", "Also,", "What's more,"], "No contrast here, so no 'on the other hand'."),
      fix(["Online classes are flexible.", "Furthermore,", "they can be isolating."], 1, ["However,", "On the other hand,", "That said,"], "This is a contrast, not an addition."),
      ch("Which paragraph is mechanically linked?", ["Firstly, X. Secondly, Y. Moreover, Z. Furthermore, W. In conclusion, V.", "X matters because Y. This means Z, although W.", "X is a problem. These problems, however, have solutions."], 0, "A linker in every sentence."),
      ch("Which is wrong?", ["In conclusion, … (at the end of every paragraph)", "In conclusion, … (once, at the end of the essay)", "Overall, … (in the final paragraph)"], 0, "Conclude once."),
    ],
    [
      ch("Best revision of 'Moreover, social media spreads news. Furthermore, it spreads lies.'?", ["Social media spreads news quickly, but the same speed allows lies to travel.", "Moreover and furthermore, social media spreads news and lies.", "In addition, social media spreads lies too, moreover."], 0, "Real logic: contrast and link."),
      ch("Best opening for a body paragraph?", ["The most serious problem, however, is cost.", "Moreover, the cost, which is a problem.", "Furthermore, secondly, the cost."], 0, "Natural signposting."),
      ch("Best way to check your linking?", ["Read it aloud: if every sentence starts with a linker, rewrite some.", "Add more linkers to every sentence to make it flow", "Remove all the linkers you used"], 0, "Ears catch robotic writing."),
      ch("How many sentence-starting linkers in a 100-word paragraph?", ["Usually two or three at most", "One at the start of every sentence", "About ten in the paragraph"], 0, "Balance."),
      say("Prices rose sharply. As a result, sales fell.", "Pause after SHARPly; stress RESULT and FELL."),
    ],
  ],
  create: {
    prompts: [
      { text: "Rewrite this mechanically linked paragraph so it flows naturally (80 words or more): 'Firstly, homework is useful. Moreover, it helps memory. Furthermore, it builds discipline. In addition, parents can see progress. Moreover, it prepares students for university. In conclusion, homework is good.' Use at most two linkers at the start of sentences and at least two reference words (This, These, Such…)." },
      { universe: "futures", text: "Write a paragraph (80 words or more) on whether everyone should learn to code. Use at most two sentence-starting linkers and at least two reference phrases (This skill…, Such knowledge…, These jobs…)." },
    ],
    minWords: 80,
    checks: [
      { label: "Two reference words (This / These / Such / That + noun)", pattern: "\\b(this|these|such|that|those) (\\w+ )?(habit|skill|approach|routine|practice|work|knowledge|change|benefit|problem|discipline|progress|idea|jobs?|tasks?|reasons?|advantages?|methods?|subjects?|students?|exercises?|homework|kind|a)\\b", min: 2 },
      { label: "No more than two of Moreover / Furthermore / In addition / Firstly", pattern: "^(?![\\s\\S]*\\b(moreover|furthermore|in addition|firstly)\\b[\\s\\S]*\\b(moreover|furthermore|in addition|firstly)\\b[\\s\\S]*\\b(moreover|furthermore|in addition|firstly)\\b)[\\s\\S]+$", min: 1 },
    ],
    rubric: ["My sentences connect through ideas, not just linker words.", "Each linker I kept shows the right logic.", "Read aloud, it doesn't sound like a list."],
    model: "Homework, when it is well designed, does much more than simply fill students' evenings. Reviewing lessons at home strengthens memory, and this regular practice builds discipline over time. These habits matter far beyond school: university students who never learned to study alone often struggle in their first year. Homework also lets parents see how their children are progressing, which allows them to help early. For these reasons, I believe a moderate amount of homework, set carefully and checked by teachers, is genuinely valuable.",
  },
};

const articles: NodePractice = {
  nodeId: "c1.articles-with-abstract-nouns",
  explain: "Spanish uses 'el / la' with abstract and general nouns: La vida es dura. La educación es importante. La sociedad cambia. English does NOT when the meaning is general: Life is hard. Education is important. Society is changing. People need nature. But when the noun is specific (limited by a phrase or the context), English uses 'the': The education I received was excellent. The life of a student is busy. The nature of the problem is complex. This is one of the most persistent errors at C1, even in otherwise excellent essays.",
  pattern: ["General → no article: Life · Education · Society · Nature · Happiness · People · Technology", "Specific → the: the education I received · the society we live in · the nature of the problem", "Plural general → no article: Teenagers need sleep. (Not *The teenagers need sleep.)", "Test: 'in general' or 'a particular one'? General = no article."],
  steps: [
    [
      heard(E("02", "notice"), "Does the speaker say 'the education' in the first sentence?", ["No: 'Education is the key…'", "Yes", "They don't mention education"], 0, "General meaning: no article."),
      heard(E("02", "notice"), "How does the speaker refer to nature in general?", ["'nature offers a break'", "'the nature offers a break'", "'a nature offers a break'"], 0, "General: no article."),
      heard(E("02", "notice"), "When does the speaker use 'the education'?", ["When talking about the education they personally received", "Never, in any part of the talk", "At the beginning, for all education in general"], 0, "Specific: the education I received."),
      ch("Which is correct?", ["Life is beautiful.", "The life is beautiful.", "A life is beautiful."], 0, "General abstract noun."),
      ch("Which is correct?", ["The nature of the problem is complex.", "Nature of the problem is complex.", "A nature of the problem is complex."], 0, "Specific (of the problem)."),
    ],
    [
      ch("Why do Spanish speakers often add 'the'?", ["Spanish uses el/la with general nouns.", "English always needs an article.", "It sounds more formal."], 0, "La vida → Life."),
      ch("Which is general?", ["Technology changes quickly.", "The technology in this lab is old.", "The technology we use at school is cheap."], 0, "No limiting phrase."),
      ch("Which needs 'the'?", ["___ society we live in is unequal.", "___ society is changing quickly.", "___ society needs rules to work."], 0, "the society we live in = specific."),
      ctx("An essay begins: 'The happiness is more important than the money.'", "What's the problem?", ["General abstract nouns shouldn't have 'the'.", "Happiness is countable here, so it needs 'the'.", "Nothing; it's correct."], 0, "Happiness is more important than money."),
      ch("Which is correct?", ["Teenagers need more sleep.", "The teenagers need more sleep.", "The teenager need more sleep."], 0, "General plural: no article."),
    ],
    [
      ch("Choose the correct sentence.", ["Education should be free for everyone.", "The education should be free for everyone.", "An education should be free for everyone."], 0, "General → no article."),
      gap("Children learn best when they spend time in", ".", ["nature"], "General nature."),
      gap("", "people I met in Leticia were very kind.", ["The"], "Specific: the people I met."),
      dict(E("02", "dict"), ["Happiness is more important than money"]),
      tr("Correct the sentence.", "The life in the big cities is stressful.", ["Life in big cities is stressful", "Life in the big cities is stressful", "Life in a big city is stressful"], "General: Life in big cities."),
    ],
    [
      fix(["The society", "must protect the most vulnerable."], 0, ["Society"], "General society."),
      fix(["We are destroying", "the nature", "faster than ever."], 1, ["nature"], "General nature."),
      fix(["The technology", "has changed how we communicate."], 0, ["Technology"], "General technology."),
      ch("Which is wrong?", ["The love is the most powerful force.", "Love is the most powerful force.", "The love she felt for her son was enormous."], 0, "General love: no article."),
      ch("Which is wrong?", ["The education is a right.", "Education is a right.", "The education my parents gave me was priceless."], 0, "General education: no article."),
    ],
    [
      ch("Best opening for an essay on climate change?", ["Climate change is the defining challenge of our time.", "The climate change is the defining challenge of our time.", "A climate change is the defining challenge."], 0, "General: no article."),
      ch("Best sentence about your own school?", ["The education I received there changed my life.", "Education I received there changed my life.", "An education I received there changed my life."], 0, "Specific: the."),
      ch("Best way to catch this error?", ["Check every abstract noun at the start of a sentence: general or specific?", "Add 'the' everywhere to be safe, just in case", "Never use abstract nouns at the start"], 0, "Targeted proofreading."),
      ch("'The poverty' or 'Poverty'? '___ affects millions of children.'", ["Poverty", "The poverty", "A poverty"], 0, "General."),
      say("Education is the key to a better future, and nature offers a break from stress.", "No 'the' before education and nature."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a paragraph (80 words or more) giving your opinion on a big topic (education, happiness, technology, society, nature). Use at least four abstract nouns in a general sense with no article, and one with 'the' in a specific sense (the education I received…)." },
      { universe: "futures", text: "Write a paragraph (80 words or more) about the future of society. Use at least four general abstract nouns without 'the' and one specific use with 'the'." },
    ],
    minWords: 80,
    checks: [
      { label: "Four general abstract nouns starting a sentence or clause without 'the'", pattern: "(^|[.!?;]\\s+|\\b(that|because|and|but|believe|think) )(education|life|society|nature|happiness|technology|money|love|freedom|health|poverty|success|friendship|knowledge|music|art|science|time|people)\\b", min: 4 },
      { label: "No Spanish-style 'The life / The society / The nature is…'", pattern: "^(?![\\s\\S]*(^|[.!?]\\s+)the (life|society|nature|happiness|technology|education|love|money|freedom|poverty) (is|are|has|was|can|should|will|must|makes|gives|needs)\\b)[\\s\\S]+$", min: 1 },
    ],
    rubric: ["General abstract nouns have no article.", "I used 'the' only for a specific case.", "My opinion is clear and supported."],
    model: "Education is the most powerful tool any country has for its future. People who can read and think critically are harder to manipulate, and society as a whole becomes fairer. Technology can help, but money alone is not enough: teachers need respect and time. I think happiness also depends on education, because knowledge opens doors. The education I received at my small public school was simple, but it gave me curiosity and confidence, and that has shaped my whole life since then.",
  },
};

const runOn: NodePractice = {
  nodeId: "c1.long-run-on-sentences-from-spanish-style",
  explain: "Spanish academic style often accepts very long sentences joined by commas, 'y', 'que' and 'lo cual'. In English, this creates run-on sentences and comma splices (two full sentences joined only by a comma: *It was late, we went home). English readers prefer shorter units: full stops, semicolons for closely related ideas, and clear connectors. A good C1 sentence usually has one main idea and maybe one or two supporting clauses. If you need to breathe twice while reading it, split it.",
  pattern: ["Comma splice ✗: It was late, we went home.", "Fix: full stop · semicolon · connector: It was late, so we went home. / It was late; we went home.", "Chain of 'and… and… which… which…' → split into 2–3 sentences", "Rule of thumb: one main idea per sentence; 15–25 words is a good average."],
  steps: [
    [
      heard(E("03", "notice"), "How long are most of the speaker's sentences?", ["Short and clear", "Very long and complicated", "One word"], 0, "Each sentence has one main idea."),
      heard(E("03", "notice"), "Which punctuation joins 'Some manage both well' and 'others struggle'?", ["A semicolon", "A comma only", "Nothing"], 0, "Semicolon for closely related ideas."),
      heard(E("03", "notice"), "What solution does the speaker suggest?", ["Flexible timetables", "Banning part-time work", "More homework"], 0, "'Schools could help by offering flexible timetables'."),
      ch("What is a comma splice?", ["Two full sentences joined only by a comma", "A comma before 'and' in a list", "A list with commas between items"], 0, "*It was late, we went home."),
      ch("Why do Spanish speakers often write run-on sentences?", ["Long, comma-joined sentences are more accepted in Spanish academic style", "English has no full stops in academic essays", "Because of slang in English"], 0, "Style transfer."),
    ],
    [
      ch("Which is a comma splice?", ["The film was long, I fell asleep.", "The film was long, so I fell asleep.", "The film was long; I fell asleep."], 0, "Needs a connector or stronger punctuation."),
      ch("When is a semicolon useful?", ["To join two closely related full sentences", "Before every 'and' in a long sentence", "After a greeting in an email"], 0, "Some passed; others didn't."),
      ch("Which is easiest to read?", ["The project failed. The budget was too small, and nobody planned the schedule.", "The project failed, the budget was too small, nobody planned the schedule, which was a problem, and so on.", "Project failed budget small schedule."], 0, "Clear units."),
      ctx("Your teacher writes 'RO' next to a sentence in your essay.", "'RO' probably means…", ["run-on sentence: split it", "really original: well done", "rewrite your opinion"], 0, "Common correction code."),
      ch("What's a good average sentence length in an English essay?", ["About 15–25 words", "About 60 words", "3 words"], 0, "Variety around a readable average."),
    ],
    [
      tr("Fix the comma splice using a connector, with the word given.", "It was raining, we stayed at home.", ["It was raining, so we stayed at home", "It was raining so we stayed at home"], "Add a connector: so.", "so"),
      ch("Which fixes the comma splice 'Some students love maths, others hate it'?", ["Some students love maths; others hate it.", "Some students love maths, others, hate it.", "Some students, love maths others hate it."], 0, "Semicolon for two related full sentences."),
      gap("Many students work part-time.", "gives them experience.", ["This", "It"], "New sentence with a reference word."),
      dict(E("03", "dict"), ["Some manage both well; others struggle", "Some manage both well, others struggle", "Some manage both well. Others struggle"]),
      tr("Split into two sentences, starting the second with the word given.", "The town has grown a lot in recent years which has caused traffic problems which the council has not solved.", ["The town has grown a lot in recent years. This has caused traffic problems, which the council has not solved", "The town has grown a lot in recent years. This has caused traffic problems that the council has not solved", "The town has grown a lot in recent years. This growth has caused traffic problems, which the council has not solved"], "Break the chain of 'which'.", "This"),
    ],
    [
      fix(["I love my city,", "it has", "beautiful parks."], 1, ["because it has", "as it has", "since it has"], "Comma splice: add a connector."),
      fix(["The exam was difficult,", "many students", "failed."], 1, ["and many students", "so many students"], "Comma splice: add a connector."),
      fix(["She studied hard,", "however she", "failed the test."], 1, ["but she", "but she still"], "'however' can't join sentences with a comma; use 'but', or a full stop/semicolon before it."),
      ch("Which is NOT a run-on?", ["Although the bus was late, we arrived on time.", "The bus was late, we arrived on time.", "The bus was late we arrived on time."], 0, "Subordinate clause + main clause = correct."),
      ch("Which revision is best?", ["Unemployment is rising. As a result, many young people are moving abroad.", "Unemployment is rising, many young people are moving abroad, which is sad, and the government...", "Unemployment rising, moving abroad."], 0, "Two clear sentences."),
    ],
    [
      ch("Best way to revise a 70-word sentence?", ["Find the main ideas and give each one its own sentence", "Add more commas so it's easier to read aloud", "Leave it: long sentences sound academic"], 0, "One idea per sentence."),
      ch("Which writing sounds most like C1 English?", ["Varied sentences: some short, some longer, all clear", "Every sentence over 50 words long, with commas", "Every sentence under five words"], 0, "Variety + clarity."),
      ch("Best opening for a report?", ["Youth unemployment has doubled since 2020. This report examines why.", "Youth unemployment has doubled since 2020, which is a problem that this report, which was written by students, examines.", "Unemployment, youth, double, report."], 0, "Short, direct."),
      ch("How can you test a sentence for length?", ["Read it aloud: if you need two breaths, split it.", "Count the commas in it, then add more.", "Translate it into Spanish."], 0, "The breath test."),
      say("Some manage both well; others struggle.", "Short pause at the semicolon."),
    ],
  ],
  create: {
    prompts: [
      { text: "Rewrite this run-on paragraph in clear English (70 words or more): 'Young people today use social media a lot, which has many advantages, for example they can communicate with friends, but it also has disadvantages, they can become addicted, which affects their studies and their sleep, and parents are worried, they don't know what to do.' Use at least five sentences and one semicolon." },
      { universe: "screens", text: "Write a paragraph (70 words or more) about gaming and school. Use at least five sentences, one semicolon, and no comma splices." },
    ],
    minWords: 70,
    checks: [
      { label: "At least five sentences", pattern: "[.!?](\\s|$)", min: 5 },
      { label: "One semicolon", pattern: ";", min: 1 },
    ],
    rubric: ["Each sentence has one main idea.", "I have no comma splices.", "My semicolon joins two closely related full sentences."],
    model: "Young people today use social media a lot. It has clear advantages; for example, they can stay in touch with friends easily. However, it also has disadvantages. Some teenagers become addicted, and this affects both their studies and their sleep. Many parents are worried about the problem. Unfortunately, they often don't know what to do. Schools could help by teaching families how to set healthy limits at home, especially at night.",
  },
};

const cognates: NodePractice = {
  nodeId: "c1.cognates-that-mislead-at-c1",
  explain: "Some English words look like Spanish ones but mean something different. Even C1 writers fall into these traps. actually = in fact (not actualmente → currently). eventually = finally, after a long time (not eventualmente → possibly). assist = help (not asistir → attend). attend = go to (a class, a meeting). pretend = act as if (not pretender → intend / aim). realise = understand suddenly (realizar → carry out / do). sensible = reasonable (sensible → sensitive). career = profession (carrera → degree). compromise = agreement where both give something (compromiso → commitment).",
  pattern: ["actually = in fact · currently = actualmente · eventually = finally · possibly = eventualmente", "attend (a class) = asistir · assist = help · intend = pretender · pretend = fingir", "carry out = realizar · realise = darse cuenta", "sensible = sensato · sensitive = sensible · degree = carrera · commitment = compromiso"],
  steps: [
    [
      heard(E("04", "notice"), "Where does the speaker live now?", ["In Bogotá ('actually' = in fact)", "On the coast, near the sea", "They don't say where"], 0, "'I actually live in Bogotá'."),
      heard(E("04", "notice"), "Will they move to the coast?", ["Yes, finally, in the future ('eventually')", "Maybe, possibly, they're not sure", "No, they've decided to stay"], 0, "eventually = finally."),
      heard(E("04", "notice"), "What did the speaker do at the conference?", ["Attended it and helped a scientist", "Gave a talk at the conference", "Missed it because they were ill"], 0, "attended (went to) + assisted (helped)."),
      ch("'I intend to study medicine' means…", ["I plan to study medicine.", "I pretend to study medicine.", "I'm studying medicine now."], 0, "intend = pretender."),
      ch("'A sensible choice' is…", ["a reasonable choice", "an emotional choice", "a sensitive choice"], 0, "sensible = sensato."),
    ],
    [
      ch("How do you say 'Actualmente vivo en Cali'?", ["Currently, I live in Cali.", "Actually, I live in Cali.", "Eventually, I live in Cali."], 0, "actualmente = currently."),
      ch("How do you say 'Asistí a la reunión'?", ["I attended the meeting.", "I assisted the meeting.", "I assisted to the meeting."], 0, "asistir = attend."),
      ch("How do you say 'Pretendo terminar en junio'?", ["I intend to finish in June.", "I pretend to finish in June.", "I realise to finish in June."], 0, "pretender = intend / aim."),
      ctx("Your friend writes: 'We realised a survey of 100 students.'", "What did they mean?", ["We carried out a survey.", "We understood a survey.", "We imagined a survey."], 0, "realizar = carry out / conduct."),
      ch("'He's very sensitive' means…", ["His feelings are easily hurt.", "He's very reasonable and calm.", "He's very sensible."], 0, "sensitive = sensible (Spanish)."),
    ],
    [
      gap("I", "a course on design last summer.", ["attended", "took", "did"], "asistir a un curso = attend a course."),
      gap("We", "out an experiment with plants.", ["carried"], "realizar un experimento = carry out."),
      gap("", ", I'm studying law at the national university.", ["Currently", "At the moment", "Right now", "At present"], "actualmente = currently."),
      dict(E("04", "dict"), ["Eventually, after years of practice, she became a doctor", "Eventually after years of practice she became a doctor"]),
      tr("Translate into natural English, using the word given.", "Mi compromiso con el equipo es total.", ["My commitment to the team is total", "I am totally committed to the team", "I'm totally committed to the team", "My commitment to the team is complete"], "compromiso = commitment.", "commit"),
    ],
    [
      fix(["Actually,", "I'm studying engineering in my second year."], 0, ["Currently,", "At the moment,", "Right now,"], "actualmente = currently (unless you mean 'in fact')."),
      fix(["I", "assisted to", "every class this semester."], 1, ["attended", "went to"], "asistir a clase = attend class."),
      fix(["I", "pretend to", "become a lawyer."], 1, ["intend to", "plan to", "hope to", "aim to"], "pretender = intend."),
      ch("Which is wrong?", ["I'm studying my career in economics.", "I'm doing a degree in economics.", "I want a career in economics."], 0, "carrera (studies) = degree."),
      ch("Which is wrong?", ["We realised an interview with the mayor.", "We conducted an interview with the mayor.", "We carried out an interview with the mayor."], 0, "realizar = carry out / conduct."),
    ],
    [
      ch("Best sentence for a CV?", ["I am currently in the third year of my degree in biology.", "I am actually in the third year of my career in biology.", "Actually I study my career."], 0, "currently + degree."),
      ch("Best sentence for a cover letter?", ["I intend to pursue a career in international relations.", "I pretend to pursue a career in international relations.", "I pretend a career."], 0, "intend + pursue a career."),
      ch("Best for a lab report?", ["We carried out three experiments.", "We realised three experiments.", "We made realisation of three experiments."], 0, "carry out."),
      ch("Best way to avoid these traps?", ["Keep a personal 'false friends' list and check it when proofreading", "Translate word by word from Spanish, then check", "Avoid all long words"], 0, "Personal error list."),
      say("I'm currently studying medicine, and I intend to specialise in paediatrics.", "Stress CURrently and inTEND."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short personal statement (90 words or more) for a university or scholarship application. Use correctly at least five of: currently, actually (= in fact), eventually, attend, assist, intend, carry out, realise, sensible, sensitive, degree, career, commitment." },
      { universe: "science", text: "Write a short statement (90 words or more) about a science project you did. Use correctly at least five of: currently, actually, eventually, attend, assist, intend, carry out, realise, sensible, degree, commitment." },
    ],
    minWords: 90,
    checks: [
      { label: "Five target words used", pattern: "\\b(currently|actually|eventually|attend(ed|ing|s)?|assist(ed|ing|s)?|intend(ed|ing|s)?|carr(y|ied|ying) out|realis(e|ed|ing)|realiz(e|ed|ing)|sensible|sensitive|degree|career|commitment|committed)\\b", min: 5 },
      { label: "No false-friend uses (assisted to, pretend to become, realised a survey, my career in [subject] at university)", pattern: "^(?![\\s\\S]*\\b(assist(ed)? to (the |a |every )?(class|meeting|course|conference|school)|pretend to (study|become|be a|work|apply)|reali[sz]ed? (a|an|the) (survey|experiment|interview|project|study))\\b)[\\s\\S]+$", min: 1 },
    ],
    rubric: ["Each false friend is used with its English meaning.", "I proofread with my personal list.", "My statement sounds professional."],
    model: "I am currently in my final year of secondary school in Medellín, and I intend to apply for a degree in environmental engineering. Last year I attended a science fair in Bogotá, where I assisted a university researcher who was carrying out water tests in local rivers. I realised then that this was the career I wanted. Many people think it is not a sensible choice, but I have a strong commitment to protecting the environment. Eventually, I hope to lead my own research team and work with rural communities.",
  },
};

export const C1_SOUNDS: NodePractice[] = [varieties, contrastive];
export const C1_ERRORS: NodePractice[] = [mechanical, articles, runOn, cognates];
