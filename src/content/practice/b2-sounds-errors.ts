/* B2 Sounds and Error Clinic. Six Bloom steps per skill. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, say, tr } from "./helpers";

const S = (n: string, k: "notice" | "dict") => `p/b2s-${n}-${k}.mp3`;
const E = (n: string, k: "notice" | "dict") => `p/b2e-${n}-${k}.mp3`;

export const B2_SOUNDS_ERRORS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: S("01", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "I met my next-door neighbour last night. We had a cup of tea and talked for ages. Then I turned it off and went to bed." },
  { file: S("01", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "I'll tell you about it next time." },
  { file: S("02", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "[surprised, delighted] Really? You got the scholarship? [sarcastic, flat] Oh, great. Another exam on Monday. [doubtful, hesitant] Well... maybe. [warm, interested] Oh, and how was your trip?" },
  { file: S("02", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "[excited] Oh, really? That's amazing news!" },
  { file: E("01", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "Wow, it's the first time I've seen the sea! And honestly, this is the best ceviche I've ever eaten. Last year was the first time my brother had travelled outside Colombia." },
  { file: E("01", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "It's the first time I've tried sushi." },
  { file: E("02", "notice"), voice: "3f6pec3wODJsjTqtcNI2", script: "In the meeting we discussed the new timetable. Mateo suggested starting at nine, and the director suggested that we should try it for a month. Could you explain it to me again later?" },
  { file: E("02", "dict"), voice: "8DvnqWWA3WWXixOm7zQI", script: "Could you explain it to me again?" },
  { file: E("03", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Despite the rain, the concert went ahead. Although the stage was wet, the band played for two hours, and in spite of feeling ill, the singer didn't miss a single note." },
  { file: E("03", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "Despite the traffic, we arrived on time." },
];

const connected: NodePractice = {
  nodeId: "b2.connected-speech-in-production",
  explain: "In natural speech, words join together. Elision: sounds disappear (next door → nex' door; last night → las' night). Assimilation: sounds change to match their neighbours (handbag → 'hambag'; ten people → 'tem people'). Linking: a consonant joins the next vowel (turn_it_off → tur-ni-toff). Weak forms: to → /tə/, and → /ən/, of → /əv/. Using these makes you sound fluent and helps you follow fast English. Spanish speakers often add an 'e' before s + consonant (e-school, es-tudent): drop it.",
  pattern: ["Elision: next door → nex' door · last night → las' night", "Assimilation: handbag → ham-bag · ten people → tem people", "Linking: turn it off → tur-ni-toff · an apple → a-napple", "Weak forms: to → tə · and → ən · of → əv"],
  steps: [
    [
      heard(S("01", "notice"), "Who did the speaker meet?", ["Their next-door neighbour", "Their teacher", "A stranger"], 0, "Listen for 'nex' door' with no /t/."),
      heard(S("01", "notice"), "What did they drink?", ["A cup of tea", "Coffee", "Nothing"], 0, "'A cup of tea' sounds like 'a cuppa tea'."),
      ch("In 'next door', which sound usually disappears in fast speech?", ["the /t/ in next", "the /d/ in door", "nothing"], 0, "Elision: three consonants together, the middle one drops."),
      ch("'Handbag' in natural speech often sounds like…", ["hambag", "handibag", "hand… bag (with a pause)"], 0, "Assimilation: /nd/ + /b/ → /mb/."),
      ch("How is 'a cup of tea' usually said?", ["a cuppa tea", "a cup off tea", "a coop of tea"], 0, "'of' becomes a weak /ə/."),
    ],
    [
      ch("What is linking?", ["Joining a final consonant to the next vowel: turn_it_off", "Stopping between every word", "Spelling words aloud"], 0, "tur-ni-toff."),
      ch("Why learn connected speech?", ["To understand fast, natural English and sound fluent", "Because it's more correct in writing", "It's only for actors"], 0, "Native speakers do it all the time."),
      ch("In 'fish and chips', 'and' usually sounds like…", ["'n", "AND (stressed)", "and-a"], 0, "fish 'n' chips."),
      ch("Which pair shows assimilation?", ["ten people → tem people", "cat → cats", "walk → walked"], 0, "/n/ becomes /m/ before /p/."),
      ch("Should you write 'nex door' in an essay?", ["No. These are for speech; write the full words.", "Yes.", "Only in formal essays."], 0, "Spelling never changes."),
    ],
    [
      dict(S("01", "dict"), ["I'll tell you about it next time", "I will tell you about it next time"], "In fast speech: tell-ya-bou-tit nex' time."),
      ch("Which shows the linking in 'Turn it off'?", ["tur-ni-toff", "turn / it / off", "tu-rnit-off"], 0, "Each consonant joins the next vowel."),
      ch("Which sound disappears in 'last night'?", ["the /t/ in last", "the /n/ in night", "the /s/ in last"], 0, "las' night."),
      say("Turn it off and go to bed.", "Link it: tur-ni-toff."),
      say("I met my next-door neighbour last night.", "Drop the /t/s: nex' door, las' night."),
    ],
    [
      ch("A learner says 'next-a door', adding a vowel. What's the fix?", ["Drop the /t/ and link: nex' door", "Say every letter louder", "Add more vowels"], 0, "No extra vowels between consonants."),
      ch("A Spanish speaker says 'es-tudent'. What's happening?", ["They're adding a vowel before s + consonant.", "That's the correct pronunciation.", "That's linking."], 0, "Start straight with /s/: student, school, Spain."),
      ch("'Good boy' often sounds like 'goob boy'. Why?", ["The /d/ changes to /b/ before /b/ (assimilation).", "It's a mistake.", "It's slang."], 0, "Sounds copy their neighbours."),
      ch("Which matches fast speech for 'What do you want?'", ["Whaddaya want?", "What do you want? (every word separate)", "Wot doo yoo wont"], 0, "do you → d'ya."),
      heard(S("01", "notice"), "Listen again. How did the speaker say 'turned it off'?", ["Linked: tur-ni-toff", "With pauses between every word", "They didn't say it"], 0, "Consonant + vowel linking."),
    ],
    [
      ch("In a job interview, how much connected speech should you use?", ["Natural linking is fine; just speak clearly.", "None: pause after every word.", "As much slang as possible."], 0, "Clear, but natural."),
      ch("Where are 'gonna' and 'wanna' fine?", ["In speech and casual texts", "In a formal essay", "In a university application"], 0, "Never in formal writing."),
      ch("Your listener looks confused. Best strategy?", ["Slow down slightly and stress the key words.", "Speak much louder.", "Spell every word."], 0, "Clarity beats volume."),
      ch("Which is clearer for a listener: 'I'mgonnagonow' or 'I'm gonna go now' with stress on GO and NOW?", ["The second", "The first"], 0, "Linking + stress on key words = fluent and clear."),
      say("I'll tell you about it next time.", "tell-ya-bou-tit nex' time."),
    ],
  ],
  create: {
    prompts: [
      { text: "Record (or write) a short story about what you did last night, 40 words or more. Use natural phrases that link in speech: last night, next door, a cup of, turned it off, kind of, lots of." },
      { universe: "screens", text: "Record (or write) what happened in the last episode or game you played, 40 words or more, using natural linking phrases." },
    ],
    minWords: 40,
    checks: [
      { label: "Phrases that link in speech (last night, next door, a cup of, turned it off, kind of…), at least two", pattern: "\\b(last night|next door|cup of|turn(ed)? it (off|on)|kind of|lots of|a lot of|want to|going to|got to|pick(ed)? it up|get up|got up|wake up|woke up|went out|as well|sort of)\\b", min: 2 },
    ],
    rubric: ["If I recorded it, I linked words naturally.", "I didn't add extra vowels (e-school, nex-a).", "My story is clear and in order."],
    model: "Last night I went out with my cousin. We had a cup of tea at a café next door to my school, and then we picked up some food. When I got home, I turned off my phone and went to bed.",
  },
};

const intonation: NodePractice = {
  nodeId: "b2.intonation-for-attitude",
  explain: "The same words can mean different things depending on your tune. A high start and big fall shows surprise or enthusiasm (REALly?!). Low and flat sounds bored or sarcastic (Great. Just great.). A fall-rise shows doubt or a hidden 'but' (Well… maybe). A lively rise sounds politely interested (Oh, how was it?). Spanish speakers sometimes sound bored or rude in English without meaning to, because English uses a wider pitch range.",
  pattern: ["Surprise / enthusiasm: high start, big fall: REALly?!", "Sarcasm / boredom: low and flat: great.", "Doubt: fall-rise: maybe…", "Polite interest: lively rise: Oh, how was it?"],
  steps: [
    [
      heard(S("02", "notice"), "In the first line, the speaker sounds…", ["surprised and happy", "bored", "angry"], 0, "High start, big fall."),
      heard(S("02", "notice"), "'Oh, great. Another exam on Monday.' The speaker really thinks it's…", ["bad news (sarcasm)", "great news", "no news"], 0, "Low and flat = sarcasm."),
      heard(S("02", "notice"), "'Well... maybe.' The speaker is…", ["doubtful", "excited", "certain"], 0, "Fall-rise = doubt."),
      ch("Flat, low intonation on 'That's great' often signals…", ["sarcasm or boredom", "real excitement", "a question"], 0, "Real enthusiasm moves up and down."),
      ch("A fall-rise on 'maybe…' usually means…", ["doubt, or a 'but' is coming", "yes, definitely", "no, never"], 0, "The rise at the end leaves it open."),
    ],
    [
      ch("Why can a Spanish speaker sound rude in English without meaning to?", ["Flat intonation can sound bored or unfriendly in English.", "English has no intonation.", "Spanish words are rude."], 0, "English uses a wider range of pitch."),
      ctx("Your friend says 'Thanks a lot' in a low, flat voice after you broke their phone.", "They are…", ["being sarcastic", "grateful", "asking a question"], 0, "Tone + context = sarcasm."),
      ch("Which intonation shows polite interest in 'How was your weekend?'", ["Lively, with a rise", "Flat and low", "Whispered"], 0, "Show you care about the answer."),
      ch("'Really' with a high start and big fall shows…", ["surprise or enthusiasm", "boredom", "only anger"], 0, "The bigger the fall, the stronger the feeling."),
      ch("Can you always tell sarcasm from the words alone in writing?", ["Often not; tone and context carry it.", "Always.", "Never, in English."], 0, "Careful with sarcasm in texts."),
    ],
    [
      dict(S("02", "dict"), ["Oh, really? That's amazing news!", "Oh really that's amazing news", "Oh, really? That is amazing news!"], "Hear the excitement in the pitch."),
      say("Really? That's amazing!", "Start high, big fall on REALly and aMAZing."),
      say("Oh, how was your trip?", "Rise at the end and sound interested."),
      ch("Your friend asks 'Coming to the party?' You're not sure. How do you say 'Well... maybe'?", ["With a fall-rise on 'maybe'", "With a sharp, high fall", "Fast and flat"], 0, "Fall-rise = doubt or a hidden 'but'."),
      ch("To sound sincerely grateful, say 'Thank you so much' with…", ["a lively, high start and a clear fall", "a flat, low voice", "no stress at all"], 0, "Gratitude needs energy."),
    ],
    [
      ch("A student says 'Nice to meet you' flat and low. How might it sound?", ["Bored or unfriendly", "Very enthusiastic", "Confused"], 0, "Lift the pitch on NICE."),
      heard(S("02", "notice"), "Listen again. Which line was sarcastic?", ["Oh, great. Another exam on Monday.", "Really? You got the scholarship?", "Oh, and how was your trip?"], 0, "Low, flat 'great'."),
      ch("'I like the design, but…' with a fall-rise on 'design'. The speaker…", ["has a criticism coming", "loves everything", "is asking a question"], 0, "Fall-rise = there's more."),
      ch("Which situation needs clear, falling intonation?", ["Giving instructions in an emergency", "Showing polite interest", "Expressing doubt"], 0, "Falls sound certain."),
      ch("Your teacher says 'Interesting…' with a fall-rise after your idea. Likely meaning?", ["They have doubts.", "They love it.", "They didn't hear."], 0, "Decode the tune, not just the word."),
    ],
    [
      ch("Customer service. Best way to say 'Can I help you?'", ["Warm, rising", "Flat and fast", "Low and slow"], 0, "Friendly and open."),
      ch("You genuinely love your friend's new haircut. Say 'Wow!' with…", ["a big, high fall", "a flat, low voice", "a whisper"], 0, "Big feelings, big pitch."),
      ch("When is sarcasm risky?", ["In writing, or with people who don't know you well", "With close friends who share the joke", "Never"], 0, "It's easily misread."),
      ch("You're unsure about a plan in a meeting. Most polite?", ["'Hmm, maybe…' with a fall-rise, then explain", "'No.' flat", "Silence"], 0, "Soft doubt + reason."),
      say("Oh wow, congratulations! That's fantastic news!", "Let your voice go high on WOW and FANtastic."),
    ],
  ],
  create: {
    prompts: [
      { text: "Record (or write as a script) a short dialogue, 40 words or more, where someone reacts to news with surprise, sarcasm, doubt and polite interest. If you write it, add the attitude in brackets, like [surprised]." },
      { universe: "screens", text: "Record (or script) a short dialogue between two friends reacting to news about a game or series: surprise, sarcasm, doubt and interest." },
    ],
    minWords: 40,
    checks: [
      { label: "Reactions (Really, Wow, Oh, Great, Maybe, No way…), at least three", pattern: "\\b(really|wow|oh|great|maybe|seriously|no way|amazing|interesting|fantastic|congratulations|well)\\b", min: 3 },
      { label: "At least one question showing interest", pattern: "\\?|\\b(how was|what was|how did|what did|did you|was it)\\b", min: 1 },
    ],
    rubric: ["The four attitudes are clear.", "If I recorded it, my pitch moves up and down.", "My questions sound genuinely interested."],
    model: "A: I got the scholarship! B: [surprised] Really? No way! That's amazing! A: And we have an exam on Monday. B: [sarcastic] Oh, great. Just what I wanted. A: Want to celebrate on Saturday? B: [doubtful] Well... maybe. A: How was your trip, by the way? B: [interested] Oh, it was lovely, thanks!",
  },
};

const firstTime: NodePractice = {
  nodeId: "b2.it-s-the-first-time-i-see",
  explain: "In Spanish we say 'Es la primera vez que veo…' (present). In English, after 'It's the first / second / best… time', use the present perfect: It's the first time I've seen snow. For a past story, use the past perfect: It was the first time I had flown. The same goes for superlatives: This is the best film I've ever seen.",
  pattern: ["It's the first time + present perfect: It's the first time I've been here.", "It was the first time + past perfect: It was the first time she had travelled alone.", "the best / worst … I've ever + participle"],
  steps: [
    [
      heard(E("01", "notice"), "What is the speaker seeing for the first time?", ["The sea", "Snow", "A museum"], 0, "'It's the first time I've seen the sea!'"),
      heard(E("01", "notice"), "What had the brother done for the first time last year?", ["Travelled outside Colombia", "Eaten ceviche", "Seen the sea"], 0, "'…the first time my brother had travelled outside Colombia.'"),
      ch("Which is correct?", ["It's the first time I see this film.", "It's the first time I've seen this film.", "It's the first time I saw this film."], 1, "It's the first time + present perfect."),
      ch("After 'It was the first time…', use…", ["the past perfect", "the present simple", "the future"], 0, "It was the first time I had…"),
      ch("'This is the best pizza I've ever eaten.' Which tense?", ["present perfect", "past simple", "present simple"], 0, "superlative + I've ever + participle."),
    ],
    [
      ch("Why do Spanish speakers say 'It's the first time I see'?", ["Spanish uses the present here (es la primera vez que veo).", "English uses the present here too.", "It's a typo."], 0, "Translation transfer."),
      ctx("It was the first time I had flown.", "When did the flying happen?", ["In the past", "Now", "In the future"], 0, "Past story → past perfect."),
      ch("Which is correct?", ["It's the second time I've failed this test.", "It's the second time I fail this test.", "It's the second time I'm failing this test."], 0, "Works for second, third… too."),
      ch("'Ever' in 'the best I've ever seen' means…", ["at any time in my life", "only yesterday", "never"], 0, "In all my experience."),
      ch("Which time expression goes with the past simple, not the present perfect?", ["last summer", "ever", "so far"], 0, "Finished time → past simple."),
    ],
    [
      gap("It's the first time I", "(be) to Cartagena.", ["'ve been", "have been"], "present perfect: have been."),
      gap("It was the first time she", "(drive) on a motorway.", ["had driven", "'d driven"], "past perfect: had driven."),
      gap("That's the funniest video I've ever", "(watch).", ["watched"], "I've ever + participle."),
      dict(E("01", "dict"), ["It's the first time I've tried sushi", "It is the first time I have tried sushi", "It's the first time I have tried sushi"]),
      tr("Rewrite starting with 'It's the first time'.", "I have never ridden a horse before.", ["It's the first time I've ridden a horse", "It is the first time I have ridden a horse", "It's the first time I have ridden a horse"], "never before → it's the first time + present perfect."),
    ],
    [
      fix(["It's the first time", "I visit", "this museum."], 1, ["I've visited", "I have visited"], "present perfect."),
      fix(["It was the first time", "I have seen", "real snow."], 1, ["I had seen", "I'd seen"], "Past story → past perfect."),
      fix(["This is", "the best book I read", "in my life."], 1, ["the best book I've read", "the best book I have read", "the best book I've ever read", "the best book I have ever read"], "superlative + present perfect."),
      fix(["It's the third time", "you are late", "this week!"], 1, ["you've been late", "you have been late"], "It's the third time + present perfect."),
      fix(["It's the first time", "I am eating", "arepas de huevo."], 1, ["I've eaten", "I have eaten", "I've had", "I have had"], "Not present continuous: present perfect."),
    ],
    [
      ch("Message to a host family on your first day abroad.", ["It's the first time I've been abroad, so I'm a bit nervous!", "It's the first time I am abroad.", "Is first time abroad."], 0, "Natural and correct."),
      ch("Telling a story about the past.", ["It was the first time I had performed on stage.", "It was the first time I perform on stage.", "It's the first time I performed on stage."], 0, "was + past perfect."),
      ch("Trying a new food right now. Most natural?", ["Mmm, this is the best thing I've ever tasted!", "This is the best thing I ever taste!", "This was the best thing I taste!"], 0, "superlative + I've ever."),
      ch("Exam writing. Which is correct?", ["It was the first time the town had experienced such a storm.", "It was the first time the town experiences such a storm.", "It's the first time the town had experienced such a storm."], 0, "Tenses must match: was … had."),
      say("It's the first time I've ever seen the sea.", "Contract: I've."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about three 'firsts': one happening now ('It's the first time I've…'), one from the past ('It was the first time I had…') and one 'the best… I've ever…'." },
      { universe: "futures", text: "Write about three 'firsts' related to your future plans: something you're doing for the first time now, a first from the past, and the best advice you've ever received." },
    ],
    minWords: 50,
    checks: [
      { label: "It's the first / second… time + present perfect", pattern: "\\bit('s| is) the (first|second|third|\\w+est) time (i|you|we|they|he|she|my \\w+)( have|'ve| has|'s) \\w+", min: 1 },
      { label: "It was the first… time + past perfect", pattern: "\\bit was the (first|second|third|\\w+est) time (i|you|we|they|he|she|my \\w+)( had|'d) \\w+", min: 1 },
      { label: "the best / worst … I've ever…", pattern: "\\b(\\w+est|best|worst|most \\w+) [^.?!]{0,30}(i|we|you)( have|'ve) ever \\w+", min: 1 },
    ],
    rubric: ["I used present perfect after 'It's the first time'.", "I used past perfect after 'It was the first time'.", "Each 'first' has a detail or feeling."],
    model: "It's the first time I've studied English online, and I love it. It was the first time I had travelled alone when I visited my aunt in Medellín last year. And the bandeja paisa she made was the best meal I've ever eaten.",
  },
};

const discuss: NodePractice = {
  nodeId: "b2.discuss-about-suggest-someone-to",
  explain: "Some English verbs don't take the preposition Spanish uses. Discuss something (not 'discuss about'): We discussed the problem. Also: explain something to someone (not 'explain me'), enter a room (not 'enter in'), marry someone (not 'marry with'). 'Suggest' never takes 'someone to': use suggest + -ing (I suggest leaving early) or suggest (that) + subject + verb (I suggest (that) you leave / you should leave).",
  pattern: ["discuss the plan (no 'about'), but talk about the plan", "explain it to me (not 'explain me')", "suggest + -ing: I suggest leaving early", "suggest (that) + clause: I suggest (that) you leave / you should leave", "NOT: suggest you to leave"],
  steps: [
    [
      heard(E("02", "notice"), "What did they discuss?", ["The new timetable", "A trip", "The budget"], 0, "'We discussed the new timetable.'"),
      heard(E("02", "notice"), "What did Mateo suggest?", ["Starting at nine", "Finishing at nine", "Cancelling the meeting"], 0, "'suggested starting at nine' = suggest + -ing."),
      ch("Which is correct?", ["We discussed the problem.", "We discussed about the problem."], 0, "discuss + object."),
      ch("Which is correct?", ["She suggested me to rest.", "She suggested that I rest."], 1, "suggest (that) + clause."),
      ch("Which is correct?", ["Can you explain me this?", "Can you explain this to me?"], 1, "explain something to someone."),
    ],
    [
      ch("Why do Spanish speakers say 'discuss about'?", ["Spanish uses 'discutir sobre' / 'hablar de'.", "English always needs 'about'.", "It's British English."], 0, "Translation transfer."),
      ch("Which verb DOES take 'about'?", ["talk", "discuss", "mention"], 0, "talk about, but discuss / mention + object."),
      ctx("I suggest going by bus.", "Who will go?", ["It's a general suggestion: probably the speaker and the listener.", "Only the speaker's dog.", "Nobody."], 0, "suggest + -ing is general."),
      ch("Which is correct?", ["He entered the room.", "He entered in the room."], 0, "enter + place (no 'in')."),
      ch("Which is correct?", ["She married with a musician.", "She married a musician."], 1, "marry someone (casarse con)."),
    ],
    [
      tr("Correct the sentence.", "We need to discuss about the budget.", ["We need to discuss the budget"], "Remove 'about'."),
      tr("Rewrite with 'I suggest' + -ing.", "Let's leave early.", ["I suggest leaving early"], "suggest + -ing."),
      tr("Rewrite with 'suggested that'.", "The doctor told him to rest more.", ["The doctor suggested that he rest more", "The doctor suggested that he should rest more", "The doctor suggested that he rested more", "The doctor suggested he rest more", "The doctor suggested he should rest more"], "suggested (that) he (should) rest."),
      dict(E("02", "dict"), ["Could you explain it to me again"]),
      gap("Let's", "the problem tomorrow. (no preposition)", ["discuss"], "discuss + object."),
    ],
    [
      fix(["We", "discussed about", "the new project."], 1, ["discussed"], "discuss + object."),
      fix(["My friend", "suggested me to", "apply."], 1, ["suggested that I", "suggested I", "suggested I should", "suggested that I should"], "suggest (that) + subject + verb."),
      fix(["Can you", "explain me", "the homework?"], 1, ["explain", "explain to me"], "explain the homework (to me)."),
      fix(["She", "entered in", "the classroom."], 1, ["entered", "went into", "came into"], "enter + place."),
      fix(["They", "married with", "each other in 2010."], 1, ["married", "got married to"], "marry someone."),
    ],
    [
      ch("Formal email. Best sentence?", ["I would like to discuss the proposal with you.", "I would like to discuss about the proposal.", "I wanna talk the proposal."], 0, "discuss + object, formal."),
      ch("Giving advice politely.", ["I'd suggest talking to your teacher.", "I suggest you to talk to your teacher.", "Suggest talk teacher."], 0, "I'd suggest + -ing is soft and correct."),
      ch("In a meeting, which is natural?", ["Let's talk about it later.", "Let's discuss about it later.", "Let's discuss it about later."], 0, "talk about it / discuss it."),
      ch("Which is correct and formal?", ["The committee suggested that the plan be postponed.", "The committee suggested the plan to be postponed.", "The committee suggested to postpone about the plan."], 0, "suggested that + subject + base verb (formal)."),
      say("I'd suggest discussing it with your team first.", "Stress: sugGEST, DIScussing."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short message to a classmate about a group project. Suggest at least two things and say what you need to discuss." },
      { universe: "futures", text: "Write a short message to a friend who is choosing a career. Suggest at least two things and mention what they should discuss with their family." },
    ],
    minWords: 50,
    checks: [
      { label: "discuss + object (no 'about')", pattern: "\\bdiscuss(ed|ing)? (?!about)\\w+", min: 1 },
      { label: "suggest + -ing or suggest (that) + clause, at least two", pattern: "\\bsuggest(s|ed|ing)? (that )?(\\w+ing\\b|(you|we|he|she|they|i|the \\w+) \\w+)", min: 2 },
      { label: "No 'discuss about' or 'suggest someone to'", pattern: "^(?![\\s\\S]*(\\bdiscuss(ed|ing)? about\\b|\\bsuggest(s|ed|ing)? (me|you|him|her|us|them) to\\b))", min: 1 },
    ],
    rubric: ["I used 'discuss' without 'about'.", "My suggestions use suggest + -ing or suggest (that) + clause.", "My message is friendly and clear."],
    model: "Hi Sofi! We need to discuss the presentation before Friday. I suggest meeting in the library on Wednesday. I also suggest that we divide the slides: you could do the research and I could design them. Can you explain the last part of the task to me? See you!",
  },
};

const despite: NodePractice = {
  nodeId: "b2.despite-clause",
  explain: "'Despite' and 'in spite of' are followed by a noun or an -ing form, never a full clause: Despite the rain, we played. Despite being tired, she finished. With a clause (subject + verb), use although / even though: Although it was raining, we played. Or: Despite the fact that it was raining… Spanish speakers often write 'Despite it was raining' (from 'a pesar de que llovía'), and 'despite of' (from 'a pesar de').",
  pattern: ["Despite / In spite of + noun: despite the rain", "Despite / In spite of + -ing: despite being tired", "Although / Even though + clause: although it was raining", "Despite the fact that + clause", "NOT: despite of · despite it was"],
  steps: [
    [
      heard(E("03", "notice"), "What happened despite the rain?", ["The concert went ahead.", "The concert was cancelled.", "The band left early."], 0, "'Despite the rain, the concert went ahead.'"),
      heard(E("03", "notice"), "What was the singer's problem?", ["She felt ill.", "She forgot the words.", "She arrived late."], 0, "'in spite of feeling ill' = in spite of + -ing."),
      ch("Which is correct?", ["Despite it was raining, we played.", "Despite the rain, we played."], 1, "despite + noun."),
      ch("Which is correct?", ["Although being tired, she won.", "Despite being tired, she won."], 1, "despite + -ing."),
      ch("What follows 'although'?", ["a clause (subject + verb)", "only a noun", "only -ing"], 0, "although it was…"),
    ],
    [
      ch("Why do Spanish speakers write 'Despite it was…'?", ["From 'a pesar de que' + verb", "English allows it", "It's American English"], 0, "Translation transfer."),
      ch("Which two mean the same?", ["despite / in spite of", "despite / because of", "although / so"], 0, "Both show contrast."),
      ctx("In spite of studying hard, he failed.", "This means…", ["he studied hard, but failed anyway", "he failed because he studied", "he didn't study"], 0, "Contrast, not cause."),
      ch("Which is correct?", ["Despite of the cost, we bought it.", "Despite the cost, we bought it.", "In spite the cost, we bought it."], 1, "despite (no 'of'); in spite OF."),
      ch("How can you use 'despite' with a full clause?", ["Despite the fact that + clause", "Despite + clause", "You never can"], 0, "despite the fact that it was raining."),
    ],
    [
      tr("Rewrite with 'Despite' + noun.", "Although it was cold, we went swimming.", ["Despite the cold, we went swimming", "Despite the cold weather, we went swimming"], "cold (adj) → the cold (noun)."),
      tr("Rewrite with 'Although'.", "Despite being nervous, she gave a great speech.", ["Although she was nervous, she gave a great speech", "Although she felt nervous, she gave a great speech"], "Although + subject + verb."),
      gap("", "having little money, they travelled around Europe.", ["Despite", "In spite of"], "+ -ing → despite / in spite of."),
      dict(E("03", "dict"), ["Despite the traffic, we arrived on time"]),
      gap("", "it was late, we kept talking.", ["Although", "Even though", "Though"], "+ clause → although."),
    ],
    [
      fix(["Despite", "it was expensive,", "I bought the jacket."], 1, ["the price", "the cost", "the high price", "its price"], "despite + noun."),
      fix(["In spite", "the noise,", "I fell asleep."], 0, ["In spite of", "Despite"], "in spite OF."),
      fix(["Although", "the rain,", "the match continued."], 0, ["Despite", "In spite of"], "Although needs a clause; with a noun use despite."),
      fix(["Despite of", "his injury,", "he kept playing."], 0, ["Despite", "In spite of"], "No 'of' after despite."),
      fix(["Even though", "being tired,", "she finished the race."], 1, ["she was tired", "she felt tired"], "Even though + clause."),
    ],
    [
      ch("Formal essay. Best sentence?", ["Despite the fact that the policy was popular, it failed.", "Despite the policy was popular, it failed.", "Despite of popular, failed."], 0, "Correct and formal."),
      ch("Most natural in conversation?", ["Even though it was raining, we had a great time.", "Despite the fact that it was raining, we had a great time.", "In spite of it rained, we had fun."], 0, "'Despite the fact that' is correct but heavy in speech."),
      ch("Most concise correct version?", ["Despite the rain, we went.", "Despite the fact that it was raining, we went anyway, though.", "Despite it rained, we went."], 0, "Short and correct."),
      ch("Which uses the right linker for contrast?", ["Despite the delay, the plane landed safely.", "Because of the delay, the plane landed safely.", "Despite the delay, so the plane landed."], 0, "Contrast, not cause."),
      say("Despite the rain, we had an amazing time.", "Pause after 'rain'."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about a time you did something difficult. Use despite / in spite of (with a noun or -ing) at least twice, and although / even though at least once." },
      { universe: "past", text: "Write about a historical figure who succeeded against the odds. Use despite / in spite of at least twice, and although / even though at least once." },
      { universe: "screens", text: "Write about a game or film character who won against the odds. Use despite / in spite of at least twice, and although / even though at least once." },
    ],
    minWords: 60,
    checks: [
      { label: "Despite / in spite of + noun or -ing, at least two", pattern: "\\b(despite|in spite of) (the fact that |(the|a|an|my|his|her|their|our|its|all|this|that|some|many) |\\w+ing\\b)", min: 2 },
      { label: "Although / even though + clause", pattern: "\\b(although|even though|though) (i|you|he|she|it|we|they|the|my|his|her|our|their|there)\\b", min: 1 },
      { label: "No 'despite of' or 'despite + subject + verb'", pattern: "^(?![\\s\\S]*\\b(despite of|despite (i|you|he|she|it|we|they) (was|were|am|is|are|had|have|did|\\w+ed)\\b))", min: 1 },
    ],
    rubric: ["despite / in spite of + noun or -ing.", "although / even though + subject + verb.", "My story shows a real contrast."],
    model: "Last year I ran my first 10K. Despite the heat, I kept a steady pace, and in spite of having a terrible cramp at kilometre seven, I didn't stop. Although I finished near the back, I felt like a champion. Despite being exhausted, I signed up for the next race the same day.",
  },
};

export const B2_SOUNDS: NodePractice[] = [connected, intonation];
export const B2_ERRORS: NodePractice[] = [firstTime, discuss, despite];
