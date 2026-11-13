/* C2 Sounds and Error Clinic. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, say, tr } from "./helpers";

const S = (n: string, k: string) => `p/c2s-${n}-${k}.mp3`;
const E = (n: string, k: string) => `p/c2e-${n}-${k}.mp3`;

export const C2_SOUNDS_ERRORS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: S("01", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Friends... we were told it couldn't be done. We were told it was too expensive, too difficult, too late. And yet, here we are. So I ask you: if not us, who? If not now... when?" },
  { file: S("01", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "If not us, who? If not now, when?" },
  { file: S("02", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Aye, I dunno what you're gonna do about it, but I'm no wanting to wait around all day. D'you fancy grabbing a bite first? We could head over to the wee cafe by the station. It's no bad, honestly." },
  { file: S("02", "aussie"), voice: "QW1sSL71Pw5oHbFDen25", script: "No worries, mate, I reckon we'll get there in a tick. Whaddaya want for brekkie? There's a servo just up the road, and they do a decent coffee, believe it or not." },
  { file: S("02", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "I don't know what you're going to do about it." },
  { file: S("03", "notice"), voice: "3f6pec3wODJsjTqtcNI2", script: "This is not a small problem. It is not a problem for tomorrow. It is a problem... for today. And if we act now, together, we will solve it. I am certain of that." },
  { file: S("03", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "It is not a problem for tomorrow; it is a problem for today." },
  { file: E("01", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "I've always been interested in architecture, and I'm especially keen on old buildings. I'm good at drawing, but I'm not very good at maths, which depends on the project. My sister, who's married to an engineer, is responsible for all the calculations." },
  { file: E("01", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "She is responsible for the whole project." },
  { file: E("02", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "The man who committed the crime made a grave error: he left his phone at the scene. Despite the heavy rain, the police paid close attention to every detail. The storm did serious damage to the town, but the detective made every effort to solve the case quickly." },
  { file: E("02", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "The storm did serious damage to the town." },
  { file: E("03", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "Before: It is important to mention that the implementation of the improvement of the recycling system was carried out by the school. After: The school improved its recycling system. Shorter, clearer, and the reader knows who did what." },
  { file: E("03", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "The school improved its recycling system." },
];

const rhetorical: NodePractice = {
  nodeId: "c2.rhetorical-delivery",
  explain: "Great speakers don't just say good words; they deliver them. Rhetorical delivery uses pace (slow down for key ideas, speed up for lists), pauses (before the most important word, and after a big question, so it lands), emphasis (stress the words that carry meaning) and structure you can hear. The rule of three ('too expensive, too difficult, too late') gives rhythm. Rhetorical questions ('If not us, who?') invite the audience to answer in their heads. Repetition ('We were told… We were told…') builds momentum. Your accent doesn't matter; intelligibility and effect do. Practise by marking your script: / for a short pause, // for a long pause, and capital letters for stressed words.",
  pattern: ["Pause / before the key word, // after a big question", "Slow down for the main idea; speed up for lists", "Rule of three: too expensive, too difficult, too late", "Rhetorical questions: If not us, who?", "Repetition: We were told … We were told …", "Mark your script: / short pause · // long pause · CAPITALS for stress"],
  steps: [
    [
      heard(S("01", "notice"), "What three things were they told?", ["Too expensive, too difficult, too late", "Too small, too slow, too old", "Too early, too loud, too much"], 0, "The rule of three."),
      heard(S("01", "notice"), "Where does the speaker pause longest?", ["Before 'when?' at the end", "After 'Friends' only", "Nowhere"], 0, "A long pause before the final word makes it land."),
      heard(S("01", "notice"), "What kind of questions end the speech?", ["Rhetorical questions", "Real questions for the audience to answer aloud", "Quiz questions"], 0, "'If not us, who? If not now, when?'"),
      ch("The rule of three is…", ["grouping ideas in threes for rhythm", "speaking for three minutes exactly", "pausing three times"], 0, "Three items feel complete."),
      ch("A rhetorical question…", ["makes the audience think, without expecting a spoken answer", "needs an answer from the audience", "is always a mistake"], 0, "Definition."),
    ],
    [
      ch("Why pause before the most important word?", ["It builds tension so the word has more impact.", "To breathe before you continue speaking.", "Because you forgot the word."], 0, "A pause is a spotlight."),
      ch("When should you slow down?", ["For the main idea", "For a list of minor details", "At the start of every word"], 0, "Slow = important."),
      ctx("A speaker repeats 'We were told…' at the start of two sentences.", "The effect is…", ["building momentum and emphasis", "boring the audience", "a mistake to correct"], 0, "Anaphora: deliberate repetition."),
      ch("In a speech, what matters most?", ["Being clear and creating an effect", "Having a perfect British accent", "Speaking as fast as possible"], 0, "Intelligibility, not accent."),
      ch("In a script, '//' usually means…", ["a long pause", "speak faster", "a question"], 0, "Marking delivery."),
    ],
    [
      gap("We were told it was too expensive, too difficult, too", ".", ["late"], "Rule of three."),
      gap("If not us, who? If not now,", "?", ["when"], "Paired rhetorical questions."),
      tr("Add the rule of three to this line.", "Our school needs a library.", ["Our school needs a library: a place to read, a place to think and a place to grow", "Our school needs a library: a place to read, to think and to grow", "Our school needs a library, a place to read, to think and to grow", "Our school needs a library: a place to read, a place to think, a place to grow"], "Three parallel items create rhythm."),
      dict(S("01", "dict"), ["If not us, who? If not now, when?", "If not us who If not now when"]),
      say("We were told it was too expensive, too difficult, too late.", "Speed up slightly on the list, then slow down on LATE."),
    ],
    [
      fix(["If not us,", "who?", "If not now, when it is?"], 2, ["If not now, when?"], "Keep the rhetorical pair short and parallel."),
      fix(["It was too expensive,", "very difficult,", "too late."], 1, ["too difficult,"], "Keep the three items parallel: too…, too…, too…"),
      ch("A speaker reads her speech at the same fast speed with no pauses. The main problem is…", ["Nothing stands out, so the key ideas get lost.", "Her accent is too strong to understand.", "Her grammar is wrong."], 0, "Delivery creates emphasis."),
      ch("Which pause placement is weakest?", ["We will / win this / match together.", "We will win this match... // together.", "We will win / this match / together."], 0, "Pauses in the middle of meaning units break the idea."),
      ch("Which stress pattern carries the meaning best? 'This is OUR moment.'", ["Stress OUR (it belongs to us)", "Stress IS only", "Stress no word at all"], 0, "Stress the contrast word."),
    ],
    [
      ch("Best way to end a persuasive speech?", ["Slow down, pause, and finish with a short, strong line.", "Speed up and stop suddenly.", "Read the last line quietly with your head down."], 0, "End strong."),
      ch("Best way to deliver a list of statistics?", ["Steady pace, brief pauses between numbers, slow down on the most shocking one.", "As fast as possible, to save time for questions.", "In a whisper, to sound serious."], 0, "Control pace for effect."),
      ctx("A student uses five rhetorical questions in a row.", "The effect is likely…", ["tiring; one or two is stronger", "very powerful and convincing", "perfectly normal"], 0, "Overuse weakens the device."),
      ch("Which is more persuasive?", ["We can do this. // Together.", "Together we can do this, I think, maybe.", "We can do this together and so on."], 0, "Pause + short punch."),
      say("If not us, who? If not now, when?", "Pause after each question; fall on WHO and WHEN."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write and record a 45-second persuasive speech (80 words or more) for a cause you care about. Use the rule of three, one rhetorical question, and one repeated phrase. Mark at least two pauses with / or //." },
      { universe: "futures", text: "Write and record a 45-second speech (80 words or more) about the future of your city. Use the rule of three, one rhetorical question, one repeated phrase, and mark at least two pauses with / or //." },
      { universe: "science", text: "Write and record a 45-second speech (80 words or more) about a scientific issue (climate, health, space). Use the rule of three, one rhetorical question, one repeated phrase, and mark two pauses with / or //." },
    ],
    minWords: 80,
    checks: [
      { label: "A rhetorical question", pattern: "\\?", min: 1 },
      { label: "Pause marks (/ or //)", pattern: "\\s//?\\s", min: 2 },
      { label: "Rule of three (A, B and C / too…, too…, too…)", pattern: "\\b(\\w+), (\\w+ ){0,3}\\w+,? (and|or) \\w+|\\btoo \\w+, too \\w+, too \\w+", min: 1 },
    ],
    rubric: ["I paused before my most important words.", "I slowed down for the main idea.", "My devices (three, question, repetition) are used once each, not overused."],
    model: "Friends, / every day our river gets dirtier. We were told it was too big, too expensive, too complicated to clean. We were told to wait. We were told someone else would fix it. // But who? Our parents swam in that river. Our grandparents fished in it. And we cannot even touch it. So today I am asking you for three things: your time, your voice and your ideas. If we start now, / together, / this river can be clean again. // Let's begin.",
  },
};

const fast: NodePractice = {
  nodeId: "c2.fast-natural-speech-and-accents",
  explain: "Films, podcasts and real conversations are fast, and words change shape. 'Going to' becomes 'gonna', 'want to' → 'wanna', 'I don't know' → 'dunno', 'do you' → 'd'you', 'what do you' → 'whaddaya'. Sounds disappear (elision: 'next day' → nex day) and join (linking: 'grab a bite' → gra-ba-bite). Accents add more variety. Scottish English: 'aye' (yes), 'wee' (small), 'no' for not ('I'm no wanting'). Australian English: 'reckon' (think), 'arvo' (afternoon), 'brekkie' (breakfast), 'servo' (petrol station), 'no worries'. Nigerian English: 'how far?' (how are you?), 'now now' (right now). To follow fast speech, listen for stressed content words, don't panic about the small ones, and use context. You don't have to speak like this, but you need to understand it.",
  pattern: ["gonna (going to) · wanna (want to) · dunno (don't know) · d'you (do you) · whaddaya (what do you)", "Elision: nex(t) day · las(t) week · I don(t) know", "Linking: grab a bite → gra-ba-bite", "Scottish: aye (yes) · wee (small) · no (not)", "Australian: reckon · arvo · brekkie · servo · no worries", "Strategy: catch the stressed words, use context"],
  steps: [
    [
      heard(S("02", "notice"), "What does the Scottish speaker suggest?", ["Getting something to eat first", "Going home right now", "Waiting there all day"], 0, "'D'you fancy grabbing a bite first?'"),
      heard(S("02", "notice"), "How big is the cafe?", ["Small", "Huge", "Not mentioned"], 0, "wee = small."),
      heard(S("02", "aussie"), "What does the Australian speaker ask about?", ["What you want for breakfast", "Where the station is", "What time it is"], 0, "brekkie = breakfast."),
      ch("'Dunno' means…", ["I don't know", "done now", "down now"], 0, "Reduced form."),
      ch("'Servo' in Australian English is…", ["a petrol station", "a waiter", "a server computer"], 0, "Service station."),
    ],
    [
      ch("'I'm no wanting to wait' (Scottish) means…", ["I don't want to wait.", "I want to wait.", "I'm not waiting now."], 0, "Scottish 'no' = not."),
      ch("'I reckon we'll get there' means…", ["I think we'll get there.", "I count the way there.", "I recognise the place."], 0, "reckon = think."),
      ctx("In a Nigerian film, someone says: 'How far?'", "This usually means…", ["How are you? / What's up?", "What's the distance?", "Are we late?"], 0, "Common greeting."),
      ch("The best strategy for fast speech is…", ["focus on stressed content words and use context", "try to hear every single sound clearly", "stop listening if you miss a word"], 0, "Meaning first."),
      ch("'Whaddaya want?' is…", ["What do you want?", "Why do you want?", "When do you want?"], 0, "Reduced: what do you → whaddaya."),
    ],
    [
      gap("I", "know what you're gonna do.", ["dunno", "don't"], "dunno = don't know."),
      gap("Are you", "to eat now, or later?", ["gonna", "going"], "gonna = going to."),
      tr("Write the full, standard form.", "Whaddaya wanna do this arvo?", ["What do you want to do this afternoon?", "What do you want to do this afternoon"], "whaddaya = what do you; wanna = want to; arvo = afternoon."),
      dict(S("02", "dict"), ["I don't know what you're going to do about it", "I don't know what you are going to do about it"]),
      say("I dunno what you're gonna do about it.", "Fast and relaxed: dunno and gonna are unstressed."),
    ],
    [
      fix(["In my essay I wrote:", "I'm gonna", "argue that homework is useful."], 1, ["I am going to", "I will"], "Reduced forms like 'gonna' don't belong in formal writing."),
      fix(["'No worries'", "in Australia means", "'I'm very worried'."], 2, ["'it's fine'.", "'it's fine'", "'no problem'.", "'no problem'"], "No worries = no problem."),
      fix(["'Wee'", "in Scotland means", "'very big'."], 2, ["'small'.", "'small'", "'little'.", "'little'"], "wee = small."),
      ch("A learner hears 'nex day' and writes 'nex day' in an essay. What happened?", ["Elision in speech: the written form is 'next day'.", "Scottish spelling of the word 'next'", "A new slang word for tomorrow"], 0, "Sounds disappear in speech, not in writing."),
      ch("Which transcription of fast speech is correct?", ["D'you fancy a coffee? = Do you fancy a coffee?", "D'you fancy a coffee? = Did you fancy a coffee yesterday?", "D'you fancy a coffee? = Don't you have coffee?"], 0, "d'you = do you."),
    ],
    [
      ch("You're watching a fast Scottish film and miss some words. Best move?", ["Follow the stressed words and the situation; turn on English subtitles if needed.", "Stop watching and choose another film with easier English.", "Translate every word with a dictionary."], 0, "Strategy."),
      ch("Should you speak with 'gonna' and 'wanna'?", ["In casual speech it's fine; in formal writing, use full forms.", "Never, in any situation at all, written or spoken.", "Always, even in formal essays."], 0, "Register."),
      ctx("An Australian colleague says: 'Let's catch up this arvo.'", "You reply…", ["Sure, what time this afternoon?", "Sorry, I don't have an arvo.", "Tomorrow morning is better for arvo."], 0, "arvo = afternoon."),
      ch("Which listening habit helps most with accents?", ["Regular exposure to many accents (podcasts, films, interviews)", "Only listening to one teacher every day", "Reading transcripts without audio"], 0, "Variety builds flexibility."),
      say("D'you fancy grabbing a bite first?", "Link it: d'you-FANcy-GRABbing-a-BITE."),
    ],
  ],
  create: {
    prompts: [
      { text: "Watch or listen to 2 to 3 minutes of a film, podcast or video with a strong regional accent. Write a summary (80 words or more): what happened, three reduced forms or accent features you noticed (with their standard forms), and one strategy that helped you." },
      { universe: "screens", text: "Choose a short clip from a series or streamer with fast speech or a regional accent. Write a summary (80 words or more): what happened, three reduced forms or accent features you noticed (with standard forms), and one strategy that helped you." },
      { universe: "words", text: "Listen to a song or podcast with fast speech. Write a summary (80 words or more): what it was about, three reduced forms or accent features (with standard forms), and one listening strategy that helped." },
    ],
    minWords: 80,
    checks: [
      { label: "Three reduced forms or accent words (gonna, wanna, dunno, d'you, whaddaya, gotta, kinda, aye, wee, reckon, arvo, mate…)", pattern: "\\b(gonna|wanna|dunno|d'you|whaddaya|gotta|kinda|sorta|lemme|gimme|innit|aye|wee|reckon|arvo|brekkie|servo|mate|y'all|ain't|cuppa|how far|now now)\\b", min: 3 },
      { label: "Their standard forms (going to, want to, don't know, do you, afternoon, think, small, yes)", pattern: "\\b(going to|want to|don't know|do not know|do you|what do you|got to|kind of|afternoon|breakfast|think|small|yes|isn't it)\\b", min: 2 },
    ],
    rubric: ["My summary explains what happened.", "I matched each reduced form to its standard form.", "My strategy is specific and useful."],
    model: "I watched a three-minute scene from a Scottish comedy. Two friends argue about whether to go to a party, and in the end they stay home and watch football. I noticed 'aye', which means yes, and 'wee', meaning small. One character said 'I'm gonna leave', which is 'I'm going to leave', and another said 'dunno' for 'don't know'. At first I missed a lot, but focusing on the stressed words and the actors' faces helped me follow the story without catching every word.",
  },
};

const prosody: NodePractice = {
  nodeId: "c2.prosody-for-persuasion",
  explain: "Prosody is the music of speech: pitch (high and low), pace, volume and pause. It changes how persuasive you sound. A falling tone at the end of a statement sounds certain ('I am certain of that.↘'); a rising tone sounds unsure or like a question. Contrastive stress highlights what matters: 'It is not a problem for TOMORROW. It is a problem for TODAY.' Lowering your pitch and slowing down for your key claim makes it sound serious; a short pause before it builds anticipation. Volume is less important than control: a quieter, slower line can be the most powerful one. Persuasive speakers also vary their pattern, because a steady, flat voice loses the audience within a minute.",
  pattern: ["Falling tone ↘ = certainty: I am certain of that.↘", "Rising tone ↗ = doubt or a question", "Contrastive stress: not TOMORROW, but TODAY", "Lower pitch + slower pace = seriousness", "Pause before the key claim", "Vary pitch and pace; avoid a flat voice"],
  steps: [
    [
      heard(S("03", "notice"), "When does the speaker say the problem is?", ["Today", "Tomorrow", "Next year"], 0, "'It is a problem... for today.'"),
      heard(S("03", "notice"), "Which words does the speaker stress to make the contrast?", ["Tomorrow and today", "Is and not", "This and a"], 0, "Contrastive stress."),
      heard(S("03", "notice"), "How does the speaker sound at the end?", ["Certain, with a falling tone", "Unsure, with a rising tone", "Angry and shouting"], 0, "'I am certain of that.' ↘"),
      ch("Prosody means…", ["the pitch, pace, volume and rhythm of speech", "the vocabulary used in a speech", "writing poetry"], 0, "The music of speech."),
      ch("A falling tone at the end of a statement usually sounds…", ["certain", "unsure", "like a question"], 0, "↘ = certainty."),
    ],
    [
      ch("Why might a speaker lower their voice for the key claim?", ["It sounds serious and makes people listen more closely.", "Because they're tired after talking a lot.", "To hide the claim."], 0, "Quiet can be powerful."),
      ch("'It is not a problem for TOMORROW. It is a problem for TODAY.' The stress shows…", ["a contrast between two times", "the speaker is angry", "the speaker is asking a question"], 0, "Contrastive stress."),
      ctx("A student ends every sentence with a rising tone in a persuasive speech.", "The audience will probably think…", ["she isn't sure of her arguments", "she's very confident", "she's angry"], 0, "Rising = uncertainty."),
      ch("What loses an audience fastest?", ["A flat voice at the same speed and pitch", "A short pause before a key word", "One rhetorical question"], 0, "Monotony."),
      ch("Where should the pause go? 'And the winner is… Ana.'", ["Before 'Ana'", "After 'And'", "No pause"], 0, "Pause before the key word."),
    ],
    [
      gap("It is not a problem for tomorrow; it is a problem for", ".", ["today"], "Contrast pair."),
      gap("A falling tone sounds certain; a", "tone can sound unsure.", ["rising"], "Rising tone."),
      tr("Rewrite to create a contrast that can be stressed (use 'not … but …').", "We need action now.", ["We need action not tomorrow but today", "We need action not next year but now", "We need not promises but action", "We need not words but action", "We need not talk but action"], "not X but Y creates contrastive stress."),
      dict(S("03", "dict"), ["It is not a problem for tomorrow; it is a problem for today", "It is not a problem for tomorrow, it is a problem for today", "It's not a problem for tomorrow; it's a problem for today"]),
      say("I am certain of that.", "Low pitch, slow pace, falling tone on THAT."),
    ],
    [
      fix(["We need", "words, not action;", "we need action now."], 1, ["action, not words;"], "The contrast should put the stressed idea (action) first."),
      fix(["I am", "quite sure, I think,", "that we can win."], 1, ["certain", "sure", "confident"], "Hedges undermine a persuasive claim; say it with certainty."),
      ch("Which delivery undermines 'I'm sure this plan will work'?", ["A rising tone and fast pace", "A falling tone and steady pace", "A short pause before 'work'"], 0, "Rising tone sounds uncertain."),
      ch("Which delivery sounds most persuasive for a serious warning?", ["Lower pitch, slower pace, clear pauses", "Very high pitch and fast pace", "Whispering the whole time"], 0, "Control signals seriousness."),
      ch("A speaker stresses every word equally. The problem is…", ["Nothing stands out, so the audience can't tell what matters.", "The speech is too short.", "The grammar is wrong."], 0, "Stress must be selective."),
    ],
    [
      ch("Best delivery for your closing line?", ["Slow down, lower your pitch, pause, then finish with a falling tone.", "Speed up and rise at the end, like a question.", "Mumble quickly and sit down."], 0, "End with certainty."),
      ch("You want to sound open to discussion in a meeting. Best choice?", ["A slight rising tone: 'Could we look at this again?'", "A heavy falling tone on every single word", "Shouting the question loudly"], 0, "Rising = openness."),
      ctx("Two speakers say the same words. One varies pitch and pace; the other is flat.", "Who will persuade more?", ["The one who varies pitch and pace", "The flat, steady speaker", "No difference between them"], 0, "Variety holds attention."),
      ch("Which sentence is easiest to stress for contrast?", ["We don't need more promises; we need more action.", "We need some things that are useful in general.", "Things are needed by us."], 0, "Clear contrast pair."),
      say("We don't need more promises; we need more action.", "Stress PROMises and ACTion; fall on ACTION."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write and record a 30 to 45 second appeal (70 words or more) to your school or town about a problem that needs action now. Include one 'not … but …' or 'not X; Y' contrast, mark stressed words in CAPITALS (at least three), and end with a short certain statement." },
      { universe: "science", text: "Write and record a 30 to 45 second appeal (70 words or more) about a scientific problem that needs action now. Include one 'not … but …' contrast, mark at least three stressed words in CAPITALS, and end with a short certain statement." },
      { universe: "arts", text: "Write and record a 30 to 45 second appeal (70 words or more) to save an arts programme. Include one 'not … but …' contrast, mark at least three stressed words in CAPITALS, and end with a short certain statement." },
    ],
    minWords: 70,
    checks: [
      { label: "A contrast (not … but … / not X; Y / don't … ; … )", pattern: "\\bnot\\b[^.!?]*\\b(but|;)|n't\\b[^.!?;]*;", min: 1 },
      { label: "At least three stressed words in CAPITALS", pattern: "\\b[A-Z]{3,}\\b", min: 3 },
    ],
    rubric: ["I stressed only the words that matter.", "My voice falls at the end of my key claims.", "I varied pitch and pace and paused before my main point."],
    model: "Every year, our school throws away more than two thousand plastic bottles. This is not a problem for the government. It is not a problem for the next generation. It is OUR problem, and it is a problem for TODAY. We don't need more posters; we need water fountains in every corridor. If each of us brings ONE bottle and refills it, we can cut that waste in half by June. I know we can do this. I am CERTAIN of it.",
  },
};

const residual: NodePractice = {
  nodeId: "c2.residual-slips",
  explain: "Even very advanced Spanish speakers keep a few small slips, usually prepositions after adjectives and verbs, because Spanish uses different ones. 'Interesado en' becomes 'interested in' (not 'on'), but 'bueno en' becomes 'good at', 'casado con' is 'married to', 'depender de' is 'depend on', 'responsable de' is 'responsible for', 'enamorado de' is 'in love with', 'soñar con' is 'dream of/about', 'consistir en' is 'consist of', 'pensar en' is 'think about/of', 'keen on', 'afraid of', 'proud of', 'aware of', 'capable of'. Other residual slips: 'explain me' (explain to me), 'the people is' (people are), 'an advice' (some advice). At C2 these slips are noticeable precisely because everything else is good, so a final proofread for them is worth it.",
  pattern: ["interested in · keen on · good at · bad at · afraid of · proud of · aware of · capable of", "married to · in love with · responsible for · depend on · consist of · dream of/about · think about/of", "explain something to someone (not explain me)", "people are · advice / information / news are uncountable", "Proofread specifically for these at the end"],
  steps: [
    [
      heard(E("01", "notice"), "What is the speaker especially keen on?", ["Old buildings", "Maths", "Engineering"], 0, "'keen on old buildings'."),
      heard(E("01", "notice"), "What is the speaker good at?", ["Drawing", "Maths", "Calculations"], 0, "'I'm good at drawing'."),
      heard(E("01", "notice"), "Who is the sister married to?", ["An engineer", "An architect", "A teacher"], 0, "'married to an engineer'."),
      ch("Correct: 'I'm interested ___ architecture.'", ["in", "on", "about"], 0, "interested in."),
      ch("Correct: 'She's responsible ___ the calculations.'", ["for", "of", "about"], 0, "responsible for."),
    ],
    [
      ch("Why do Spanish speakers often say 'married with'?", ["Spanish uses 'casado con'.", "English allows both.", "It's British English."], 0, "Transfer from Spanish."),
      ch("Correct: 'It depends ___ the weather.'", ["on", "of", "from"], 0, "depend on."),
      ctx("A C2 student's essay is excellent but contains 'I'm very good in tennis'.", "The slip is…", ["the preposition: good at", "the adjective: well", "nothing; it's correct"], 0, "good at."),
      ch("Which is correct?", ["Can you explain the problem to me?", "Can you explain me the problem?", "Can you explain to me about the problem me?"], 0, "explain something to someone."),
      ch("Which is correct?", ["The people are friendly.", "The people is friendly.", "The peoples is friendly."], 0, "people = plural."),
    ],
    [
      gap("I've always dreamed", "living by the sea.", ["of", "about"], "dream of/about."),
      gap("The exam consists", "three parts.", ["of"], "consist of."),
      tr("Correct the sentence.", "She is very proud for her brother and in love of her job.", ["She is very proud of her brother and in love with her job"], "proud of; in love with."),
      dict(E("01", "dict"), ["She is responsible for the whole project", "She's responsible for the whole project"]),
      say("I'm keen on art, good at drawing and interested in design.", "Link the prepositions: KEEN-on, GOOD-at, INterested-in."),
    ],
    [
      fix(["I'm really", "interested on", "climate science."], 1, ["interested in"], "interested in."),
      fix(["My cousin", "is married with", "a doctor from Cali."], 1, ["is married to"], "married to."),
      fix(["Could you", "explain me", "how this works?"], 1, ["explain to me"], "explain to me."),
      fix(["She gave me", "an advice", "about university."], 1, ["some advice", "a piece of advice", "advice"], "advice is uncountable."),
      fix(["Success", "depends of", "hard work."], 1, ["depends on"], "depend on."),
    ],
    [
      ch("Most effective final proofread for a C2 essay?", ["Search specifically for prepositions after adjectives and verbs.", "Read it once quickly from start to finish.", "Only check the spelling of long words."], 0, "Targeted proofreading."),
      ch("Which sentence is error-free?", ["I'm aware of the risks and capable of handling them.", "I'm aware about the risks and capable to handle them.", "I'm aware of the risks and capable to handling them."], 0, "aware of; capable of + -ing."),
      ctx("In a job interview, you say 'I'm very good in teamwork'.", "Best correction?", ["I'm very good at teamwork.", "I'm very well in teamwork.", "I'm very good on teamwork."], 0, "good at."),
      ch("Which is most natural?", ["I've been thinking about your offer.", "I've been thinking in your offer.", "I've been thinking on your offer, me."], 0, "think about."),
      say("I've always been afraid of heights but proud of trying.", "Stress aFRAID, HEIGHTS, PROUD and TRYing."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a personal statement paragraph (80 words or more) for a university or scholarship application. Use at least five adjective or verb + preposition combinations correctly (interested in, keen on, good at, proud of, responsible for, depend on, capable of, aware of…)." },
      { universe: "science", text: "Write a short profile of yourself (80 words or more) as a future scientist. Use at least five adjective or verb + preposition combinations correctly (interested in, keen on, good at, proud of, responsible for, depend on, capable of, aware of)." },
      { universe: "arts", text: "Write a short artist's bio (80 words or more). Use at least five adjective or verb + preposition combinations correctly (interested in, keen on, good at, proud of, inspired by, responsible for, dream of)." },
    ],
    minWords: 80,
    checks: [
      { label: "Five correct adjective/verb + preposition pairs", pattern: "\\b(interested in|keen on|good at|bad at|afraid of|proud of|aware of|capable of|married to|in love with|responsible for|depends? on|depended on|consists? of|dream(ed|t|s)? (of|about)|think(ing)? (about|of)|inspired by|passionate about|fond of|skilled at|excited about|focused on|involved in)\\b", min: 5 },
    ],
    rubric: ["Every preposition after an adjective or verb is correct.", "I avoided 'explain me', 'an advice' and 'the people is'.", "My paragraph reads naturally."],
    model: "I have always been interested in how cities work, and I'm particularly keen on sustainable architecture. At school, I was responsible for our environmental club, which made me aware of how much energy old buildings waste. I'm good at design, and I'm proud of a solar shelter our team built last year. I know success depends on teamwork as much as talent. I dream of designing schools that are capable of producing their own energy, and I believe your programme would help me get there.",
  },
};

const collocation: NodePractice = {
  nodeId: "c2.collocation-fine-tuning",
  explain: "At C2, most errors are not grammar but collocation: words that are understandable together but not what a native speaker would choose. Spanish speakers often say 'make a crime' (hacer un crimen) instead of 'commit a crime', 'strong rain' instead of 'heavy rain', 'make damage' instead of 'do damage', 'put attention' instead of 'pay attention', 'take a coffee' (fine in some varieties, but 'have a coffee' is more common), 'make a party' instead of 'have/throw a party', 'say a lie' instead of 'tell a lie'. Some collocations change the level of seriousness: a 'big mistake' is neutral, a 'grave error' is formal and serious, a 'slip' is small. A learner's dictionary or a corpus search ('heavy rain' vs 'strong rain') shows you what natives really say.",
  pattern: ["commit a crime · tell a lie · pay attention · do damage · make an effort", "heavy rain / traffic / smoker · strong wind / coffee / accent", "have / throw a party · have a coffee · take a photo · make a decision", "Seriousness: a slip < a mistake < a serious mistake < a grave error", "Check: learner's dictionary or corpus search"],
  steps: [
    [
      heard(E("02", "notice"), "What grave error did the criminal make?", ["He left his phone at the scene.", "He told the police.", "He came back the next day."], 0, "'made a grave error: he left his phone at the scene'."),
      heard(E("02", "notice"), "What was the weather like?", ["Heavy rain", "Strong sun", "Light snow"], 0, "'Despite the heavy rain'."),
      heard(E("02", "notice"), "What did the storm do?", ["Serious damage to the town", "Nothing", "It helped the police"], 0, "'did serious damage'."),
      ch("Which is the natural collocation?", ["commit a crime", "make a crime", "do a crime"], 0, "commit a crime."),
      ch("Which is the natural collocation?", ["pay attention", "put attention", "make attention"], 0, "pay attention."),
    ],
    [
      ch("Why is 'strong rain' a common learner error?", ["Spanish 'lluvia fuerte' suggests 'strong', but English uses 'heavy'.", "Rain is never described as strong in any context.", "It's an American English form."], 0, "Transfer from Spanish."),
      ch("Which is most formal and serious?", ["a grave error", "a slip", "a mistake"], 0, "grave error = serious, formal."),
      ctx("A student writes: 'The hurricane made a lot of damages.'", "How many collocation problems are there?", ["Two: 'did' and uncountable 'damage'", "None; the sentence is correct", "One: the word 'hurricane'"], 0, "did a lot of damage."),
      ch("Which is natural?", ["We're throwing a party on Saturday.", "We're making a party on Saturday.", "We're doing a party on Saturday."], 0, "throw/have a party."),
      ch("Best way to check a collocation?", ["Search both versions in a learner's dictionary or corpus.", "Translate it directly from Spanish to English.", "Guess which one sounds better."], 0, "Evidence-based."),
    ],
    [
      gap("Please pay", "to the instructions.", ["attention"], "pay attention."),
      gap("The police believe he", "the crime alone.", ["committed"], "commit a crime."),
      tr("Correct the collocations.", "There was strong traffic and the storm made a lot of damage.", ["There was heavy traffic and the storm did a lot of damage"], "heavy traffic; do damage."),
      dict(E("02", "dict"), ["The storm did serious damage to the town"]),
      say("Despite the heavy rain, she made every effort to be on time.", "Stress HEAVy RAIN and EFFort."),
    ],
    [
      fix(["He", "said a lie", "to the teacher."], 1, ["told a lie"], "tell a lie."),
      fix(["They", "made a party", "for her birthday."], 1, ["threw a party", "had a party", "gave a party"], "throw / have a party."),
      fix(["There was", "strong rain", "all night."], 1, ["heavy rain"], "heavy rain."),
      fix(["She drinks", "heavy coffee", "every morning."], 1, ["strong coffee"], "strong coffee (heavy rain, heavy traffic, but strong coffee)."),
      fix(["The minister made", "a little slip", "that caused a national scandal."], 1, ["a grave error", "a serious mistake"], "A national scandal needs a serious collocation."),
    ],
    [
      ch("Best phrase for a formal report on a serious failure?", ["The committee made a grave error of judgement.", "The committee did a big oops, honestly.", "The committee made a little slip."], 0, "Formal, serious."),
      ch("Most natural invitation?", ["Do you fancy having a coffee after class?", "Do you want to make a coffee party after class?", "Do you want to take a coffee party after class?"], 0, "have a coffee."),
      ctx("Your essay says 'The pandemic made big damage to the economy'.", "Best revision?", ["The pandemic did serious damage to the economy.", "The pandemic made strong damages to the economy.", "The pandemic created a big damage to the economy."], 0, "do serious damage."),
      ch("Which collocation is natural for a weather warning?", ["Strong winds and heavy rain are expected.", "Heavy winds and strong rain are expected.", "Big winds and fat rain are expected."], 0, "strong winds; heavy rain."),
      say("Please pay close attention and make every effort to finish.", "Stress CLOSE atTENtion and EFFort."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short crime or mystery story (80 words or more) using at least five correct collocations (commit a crime, tell a lie, pay attention, do damage, make an effort, heavy rain, strong wind, make a decision, a grave error)." },
      { universe: "science", text: "Write a news report about a natural disaster (80 words or more) using at least five correct collocations (heavy rain, strong winds, do damage, pay attention, make an effort, make a decision, a grave error)." },
      { universe: "past", text: "Write about a historical mistake (80 words or more) using at least five correct collocations (make a decision, a grave error, commit a crime, tell a lie, pay attention, do damage, make an effort)." },
    ],
    minWords: 80,
    checks: [
      { label: "Five correct collocations", pattern: "\\b(commit(ted|s|ting)? (a |the )?crimes?|t(old|ell|ells|elling) (a |the )?lies?|pa(y|id|ys|ying) (close )?attention|(do|did|does|done|doing) (serious |a lot of |considerable |great |severe )?damage|ma(de|ke|kes|king) (an |every |a great )?efforts?|heavy (rain|traffic|snow)|strong winds?|ma(de|ke|kes|king) (a |the )?decisions?|grave error|serious mistake|throw a party|threw a party|have a coffee|had a coffee)\\b", min: 5 },
    ],
    rubric: ["My collocations are what a native speaker would say.", "The seriousness of my words matches the situation.", "I checked doubtful pairs in a dictionary."],
    model: "It was a night of heavy rain and strong winds when someone committed the crime. The thief broke into the museum and did serious damage to two paintings. At first, the guard told a lie about where he had been. Detective Molina paid close attention to his story and noticed that his shoes were dry. She made every effort to find the truth, and soon she made a decision: the guard had let the thief in. It was a grave error, and it cost him his job.",
  },
};

const prose: NodePractice = {
  nodeId: "c2.over-long-over-formal-spanish-style-prose",
  explain: "Academic Spanish values long sentences, abstract nouns and impersonal phrases. Translated into English, this style sounds heavy and unclear: 'It is important to mention that the implementation of the improvement of the recycling system was carried out by the school.' Clear English prefers: 'The school improved its recycling system.' Common problems: nominal chains (the implementation of the improvement of), stacked passives (was carried out by), empty openers (It is important to mention that…, It should be noted that…, In the actual world…), and sentences of 50+ words joined with commas. Fixes: find the real actor and the real action, use an active verb, cut empty openers, and split long sentences. Formal does not mean complicated.",
  pattern: ["Find the actor + action: The school improved …", "Cut nominal chains: the implementation of the improvement of → improved", "Cut empty openers: It is important to mention that … · It should be noted that …", "Prefer active verbs to stacked passives", "Split sentences over 30 words", "Formal ≠ complicated"],
  steps: [
    [
      heard(E("03", "notice"), "What is wrong with the 'before' sentence?", ["It's long and heavy with abstract nouns.", "It has spelling mistakes in it.", "It's too informal for an essay."], 0, "Nominal chain + passive + empty opener."),
      heard(E("03", "notice"), "What is the 'after' sentence?", ["The school improved its recycling system.", "It is important to mention the school.", "Recycling was carried out."], 0, "Actor + action."),
      heard(E("03", "notice"), "What advantage of the short version does the speaker mention?", ["The reader knows who did what.", "It sounds more academic.", "It uses more nouns."], 0, "Clarity."),
      ch("'It is important to mention that…' is…", ["an empty opener you can usually cut", "required in formal English", "a strong argument in itself"], 0, "Just mention it."),
      ch("'The implementation of the improvement of' is…", ["a nominal chain", "an idiom", "a phrasal verb"], 0, "Nouns stacked with 'of'."),
    ],
    [
      ch("Why does this style appear in Spanish speakers' English?", ["It reflects academic Spanish conventions.", "English teachers recommend it to students.", "It's American English."], 0, "Transfer of style."),
      ch("Which is clearest?", ["The government cut taxes.", "A reduction of taxes was carried out by the government.", "It should be noted that the carrying out of tax reductions occurred."], 0, "Actor + active verb."),
      ctx("A 60-word sentence joined with commas and 'which'.", "Best fix?", ["Split it into two or three sentences.", "Add more commas to it so it flows.", "Make it even longer."], 0, "Readability."),
      ch("Does formal writing need long sentences?", ["No: formal means precise and appropriate, not complicated.", "Yes, always, in every formal text.", "Only in English, not in Spanish."], 0, "Formal ≠ complicated."),
      ch("'In the actual world' is a false friend for…", ["in today's world / nowadays", "in the real world / in reality", "actually / in fact"], 0, "actual = real in English."),
    ],
    [
      gap("Rewrite 'The approval of the proposal was given by the committee': The committee", "the proposal.", ["approved"], "Turn the noun back into a verb."),
      gap("Rewrite 'The completion of the survey was carried out by students': Students", "the survey.", ["completed"], "Actor + active verb."),
      tr("Rewrite clearly and concisely.", "It is important to mention that the realisation of the analysis of the data was carried out by our team.", ["Our team analysed the data", "Our team analyzed the data"], "Cut the opener, the nominal chain and the passive."),
      dict(E("03", "dict"), ["The school improved its recycling system"]),
      say("Formal does not mean complicated.", "Stress FORmal and COMplicated."),
    ],
    [
      fix(["It is important to mention that", "the club won", "the final."], 0, ["Notably,", "Remarkably,"], "Cut or replace the empty opener."),
      fix(["The decision", "was taken by the school of the cancellation of", "the trip."], 1, ["to cancel"], "The school decided to cancel the trip, or: The decision to cancel the trip."),
      fix(["In the actual world,", "technology", "changes quickly."], 0, ["Today,", "Nowadays,", "In today's world,"], "actual = real, not current."),
      ch("Which has a stacked passive?", ["It was decided that the report would be written by a team that was chosen by the director.", "The director chose a team to write the report.", "A team wrote the report for the director."], 0, "Three passives in one sentence."),
      ch("Which is the best revision of 'The carrying out of the experiment was done in May'?", ["We carried out the experiment in May.", "The experiment's carrying out was in May.", "In May, the doing of the experiment happened."], 0, "Actor + verb."),
    ],
    [
      ch("Best opening for an academic essay?", ["Social media has transformed how teenagers communicate.", "It is important to mention that, in the actual world, the transformation of communication by social media is a reality that should be noted.", "Social media. Communication. Teens."], 0, "Clear and formal."),
      ch("Which sentence would an editor at an English journal prefer?", ["We found that sleep improves memory.", "It was found by us that an improvement of memory is produced by sleep.", "The finding of the production of memory improvement by sleep was made."], 0, "Concise and active (common in modern academic English)."),
      ctx("Your supervisor writes: 'Too wordy. Who did what?'", "You should…", ["rewrite with clear actors and active verbs", "add more nouns to make it formal", "make it longer and more formal"], 0, "Actor + action."),
      ch("Which is NOT a good fix for over-long prose?", ["Adding 'It should be noted that' to each paragraph", "Splitting long sentences into shorter ones", "Replacing nominal chains with verbs"], 0, "That adds empty words."),
      say("Our team analysed the data and found three clear patterns.", "Clear and confident; stress THREE and PATterns."),
    ],
  ],
  create: {
    prompts: [
      { text: "Here is a heavy paragraph: 'It is important to mention that the realisation of the organisation of the event was carried out by the student council, and it should be noted that the participation of the students was high, which was considered a success by the teachers, who expressed their satisfaction.' Rewrite it clearly (at least 50 words), then write a second paragraph (at least 30 words) explaining three changes you made." },
      { universe: "science", text: "Write a short abstract (80 words or more) about a school science project in clear English: actors and active verbs, no empty openers, no sentence over 30 words. Then explain in two sentences how you avoided Spanish-style heaviness." },
      { universe: "futures", text: "Write a clear, formal proposal (80 words or more) for a change at your school. Use actors and active verbs, no empty openers, no sentence over 30 words. Then explain in two sentences how you avoided Spanish-style heaviness." },
    ],
    minWords: 80,
    checks: [
      { label: "Explain your changes (I removed / replaced / split / cut / used / avoided)", pattern: "\\bi (removed|replaced|split|cut|used|avoided|changed|turned|deleted)\\b", min: 1 },
      { label: "Active verbs with clear actors (we / the council / students + past verb)", pattern: "\\b(we|they|the (student )?council|students|teachers|the school|our team|i)\\s+\\w+ed\\b", min: 2 },
    ],
    rubric: ["Every sentence has a clear actor and action.", "I cut empty openers and nominal chains.", "No sentence is longer than about 30 words."],
    model: "The student council organised the event, and many students took part. Teachers called it a success and said they were very pleased. Next year, the council wants to invite families too. In my rewrite, I made three changes. First, I removed the empty openers, such as 'It is important to mention that'. Second, I replaced nominal chains like 'the realisation of the organisation of' with the active verb 'organised'. Third, I split one long sentence into three short ones, so readers know who did what.",
  },
};

export const C2_SOUNDS: NodePractice[] = [rhetorical, fast, prosody];
export const C2_ERRORS: NodePractice[] = [residual, collocation, prose];
