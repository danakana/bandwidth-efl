/* C2 Words. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/c2w-${n}-${k}.mp3`;

export const C2_WORDS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "3f6pec3wODJsjTqtcNI2", script: "In the play, Juliet cries, 'Wherefore art thou Romeo?' Many people think she's asking where he is. She isn't. 'Wherefore' means why. She's asking why he has to be a Montague, the son of her family's enemy. Later, a messenger is told to 'hie thee hence', which simply means go away, quickly." },
  { file: X("01", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Wherefore means why, not where." },
  { file: X("02", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "Did you hear about the guy who stole a calendar? He got twelve months. And I told my friend she drew her eyebrows too high. She looked surprised. My favourite headline last week: 'Bakery owner rises to the occasion.' Honestly, it was the yeast they could do." },
  { file: X("02", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "The joke works because the word has two meanings." },
  { file: X("03", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "By and large, the trip went well. There were a few odds and ends to sort out, and sooner or later someone always gets lost. We weighed up the pros and cons of camping, and in the end we decided to rough it. It was touch and go with the weather, but we made it back safe and sound." },
  { file: X("03", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Sooner or later, we have to make a decision." },
  { file: X("04", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "I've been mulling over your idea all week. At the meeting, Sam chimed in with a few suggestions, but the boss just glossed over the budget problem. Then Leo egged everyone on to vote immediately. Honestly, I think we should sleep on it and touch base again on Monday." },
  { file: X("04", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "Let me mull it over and get back to you." },
  { file: X("05", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Our striker is fast and brilliant, but his Achilles' heel is his temper. Last season, giving him the captaincy opened a Pandora's box of arguments. We won the cup, but it was a Pyrrhic victory: three players injured. And now we're in a catch-22. We need experience to win, but we can't get experience without winning." },
  { file: X("05", "dict"), voice: "8DvnqWWA3WWXixOm7zQI", script: "It was a Pyrrhic victory for the whole team." },
  { file: X("06", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "The embattled company was slammed by critics after the report. Its lawyers say it is not liable for the damage and refuse to waive the fee. Meanwhile, doctors confirmed that the patient's tumour was benign, although she suffers from a chronic back condition. The full findings will be published next month." },
  { file: X("06", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "The doctor said the tumour was benign." },
];

const literary: NodePractice = {
  nodeId: "c2.literary-and-archaic-vocabulary-in-conte",
  explain: "Classic literature, poems, songs, religious texts and fantasy films use older English. You don't need to use it, but you need to understand it. 'Thou' and 'thee' are old forms of 'you' (thou = subject, thee = object), 'thy' and 'thine' mean 'your' and 'yours', and 'art' means 'are' with thou. 'Wherefore' means why, not where. 'Hither' means here, 'thither' there, 'hence' from here or therefore. 'Ere' means before, 'oft' often, 'nay' no, 'aye' yes, 'whilst' while. Writers also use literary words in modern texts for effect: 'behold', 'steed', 'foe', 'slumber', 'the morrow'. Use them in creative writing or for humour, never in an ordinary email.",
  pattern: ["thou (you, subject) · thee (you, object) · thy / thine (your / yours) · art (are)", "wherefore = why · hither = here · thither = there · hence = from here / therefore", "ere = before · oft = often · nay = no · aye = yes · whilst = while", "Literary: foe (enemy) · steed (horse) · slumber (sleep) · behold (look) · the morrow (tomorrow)", "Use: creative writing, humour, understanding classics"],
  steps: [
    [
      heard(X("01", "notice"), "What is Juliet really asking?", ["Why Romeo has to be a Montague", "Where Romeo is at that moment", "When Romeo will come back"], 0, "'Wherefore' means why."),
      heard(X("01", "notice"), "What does the speaker say many people get wrong?", ["They think 'wherefore' means where.", "They think Juliet is a Montague.", "They think the play is modern."], 0, "A common misunderstanding."),
      heard(X("01", "notice"), "'Hie thee hence' means…", ["Go away, quickly.", "Come here, slowly.", "Stay with me."], 0, "hence = from here."),
      ch("'Thou art my friend' in modern English is…", ["You are my friend.", "Thou are my friend.", "You were my friend."], 0, "thou art = you are."),
      ch("'Ere' means…", ["before", "after", "here"], 0, "ere = before."),
    ],
    [
      ch("Which is the object form?", ["thee", "thou", "thy"], 0, "I love thee = I love you."),
      ch("'Thy kingdom come' uses 'thy' to mean…", ["your", "the", "their"], 0, "thy = your."),
      ctx("A fantasy novel: 'The knight mounted his steed and rode to meet his foe.'", "In modern English…", ["The knight got on his horse and rode to meet his enemy.", "The knight climbed a tree and ran from his friend.", "The knight bought a car and met his family."], 0, "steed = horse; foe = enemy."),
      ch("'Hence' in modern academic English often means…", ["therefore", "here", "never"], 0, "The results were unclear; hence, more research is needed."),
      ch("Why might a modern writer use 'behold' in an advert?", ["For humour or drama", "Because it's the normal word", "To sound informal"], 0, "Literary words create a playful epic tone."),
    ],
    [
      gap("Wherefore art", "Romeo?", ["thou"], "Wherefore art thou = why are you."),
      gap("Nay, I shall not go, for I have work to do", "the morrow.", ["on"], "on the morrow = tomorrow."),
      tr("Rewrite in modern English.", "Whilst thou slumbered, thy foe fled.", ["While you slept, your enemy ran away", "While you were sleeping, your enemy ran away", "While you slept, your enemy escaped", "While you were sleeping, your enemy escaped", "While you slept, your enemy fled", "While you were sleeping, your enemy fled"], "whilst = while; thou = you; slumbered = slept; thy = your; foe = enemy."),
      dict(X("01", "dict"), ["Wherefore means why, not where", "Wherefore means why not where"]),
      say("Wherefore art thou Romeo?", "Stress WHEREfore and ROmeo; it's a question of 'why'."),
    ],
    [
      fix(["I give", "thou", "my word."], 1, ["thee", "you"], "Object form: thee."),
      fix(["Wherefore are you?", "means", "where are you?"], 2, ["why are you?", "why are you"], "Wherefore = why."),
      fix(["Hast thou", "saw", "the castle?"], 1, ["seen"], "Hast thou seen (past participle)."),
      ch("Which is wrong?", ["Thee art welcome here.", "Thou art welcome here.", "You are welcome here."], 0, "Subject form is thou."),
      ch("Which is a modern misuse?", ["Dear Sir, I hope thou art well. Please send the invoice.", "Hence, the results are significant.", "Behold! The new pizza menu!"], 0, "Archaic forms don't belong in a business email."),
    ],
    [
      ch("Where does 'thou' belong in your writing?", ["A fantasy story or a parody", "A job application", "A science report"], 0, "Creative contexts only."),
      ch("Best use of 'hence' today?", ["The data was incomplete; hence, we repeated the test.", "Hence, my friend, come to my party on Saturday!", "I'll be hence at six o'clock."], 0, "Formal 'therefore'."),
      ctx("Your friend writes on a birthday card: 'Many happy returns, and may thy cake be mighty.'", "The tone is…", ["playful and affectionate", "rude and insulting", "a mistake by the writer"], 0, "Archaic words for humour."),
      ch("Which is best for a historical novel set in 1600?", ["'Nay, good sir, I shall return ere nightfall.'", "'Nope, mate, I'll be back before dark, don't worry.'", "'Negative, sir, I'll return pre-night, as planned.'"], 0, "Consistent period voice."),
      say("Whilst thou slumbered, thy foe fled into the night.", "Read it like an actor: slow, clear, with pauses."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short scene (80 words or more) for a fantasy story or a school play, using at least four archaic or literary words (thou, thee, thy, art, wherefore, hence, ere, nay, aye, foe, steed, whilst, behold). Then add one modern sentence that explains what happened." },
      { universe: "screens", text: "Rewrite a modern video-game scene (80 words or more) as if it were written in the 1600s, using at least four archaic or literary words (thou, thee, thy, art, wherefore, hence, ere, nay, foe, steed, behold)." },
      { universe: "words", text: "Write a mock-epic poem or prose piece (80 words or more) about something ordinary, like losing your phone. Use at least four archaic or literary words (thou, thee, thy, art, wherefore, ere, nay, foe, behold)." },
    ],
    minWords: 80,
    checks: [
      { label: "Four archaic or literary words (thou, thee, thy, thine, art, wherefore, hence, ere, nay, aye, foe, steed, whilst, behold, morrow, oft, hither)", pattern: "\\b(thou|thee|thy|thine|art|wherefore|hence|ere|nay|aye|foe|foes|steed|whilst|behold|morrow|oft|hither|thither|hast|doth|slumber|slumbered)\\b", min: 4 },
    ],
    rubric: ["thou / thee / thy are in the right places.", "The archaic voice is consistent.", "A modern reader can still follow the story."],
    model: "Behold the tragedy of the lost phone! Ere the bus reached the school, Leo reached into his pocket and found nothing. 'Wherefore hast thou abandoned me?' he cried. His friend Ana laughed. 'Nay, foolish one, thy phone lies upon thy seat.' Leo searched, but the seat was empty. A foe had taken it whilst he slept. Or so he thought. In modern words: Leo panicked because he couldn't find his phone, but it had simply fallen into his bag.",
  },
};

const wordplay: NodePractice = {
  nodeId: "c2.wordplay-puns-and-humour",
  explain: "English humour loves double meanings. A pun uses a word with two meanings (or two words that sound alike) so both make sense at once: 'The guy who stole a calendar got twelve months' (twelve months in prison / a year of calendar pages). Headlines do it constantly: 'Bakery owner rises to the occasion' (yeast makes bread rise). Other tools: homophones (yeast / least), idioms taken literally ('She drew her eyebrows too high; she looked surprised'), and understatement. To understand a joke, look for the word that could mean two things, then hold both meanings in your head. To write one, start with a word that has two meanings and build a short setup that makes both true.",
  pattern: ["Pun = one word, two meanings: got twelve months (prison / calendar)", "Homophone pun: the yeast they could do (the least)", "Literal idiom: rise to the occasion (bread rises)", "Headline puns: short, punchy, a double meaning in the last word", "Explaining a joke: find the double meaning, then both readings"],
  steps: [
    [
      heard(X("02", "notice"), "Why is 'he got twelve months' funny?", ["It means a prison sentence and a year of calendar pages.", "Calendars are very expensive in prison.", "He stole twelve calendars."], 0, "Two meanings at once."),
      heard(X("02", "notice"), "Why did the friend look surprised?", ["Her eyebrows were drawn high, the way surprise looks.", "She heard some bad news on the phone.", "Someone shouted at her."], 0, "A physical joke on 'surprised'."),
      heard(X("02", "notice"), "'It was the yeast they could do' plays on…", ["'the least they could do', and yeast makes bread rise", "a famous bread recipe from a TV chef", "a popular TV show"], 0, "Homophone pun: yeast / least."),
      ch("A pun is…", ["a joke using a word with two meanings or sounds", "a long story with a sad ending", "an insult to someone"], 0, "Definition."),
      ch("'Rises to the occasion' normally means…", ["performs well when it matters", "stands up from a chair", "gets angry quickly"], 0, "Here it also means bread rising."),
    ],
    [
      ch("Headline: 'Police find ruler missing.' What are the two meanings?", ["A king/queen / a measuring stick", "A police officer / a criminal", "Time / money"], 0, "ruler = leader / measuring tool."),
      ch("Why do newspapers love puns in headlines?", ["They are short, memorable and catch attention.", "They are required by law in every newspaper.", "They make the news more serious."], 0, "Attention."),
      ctx("'I used to be a banker, but I lost interest.'", "The joke is that 'interest' means…", ["money from a bank, and feeling curious", "a hobby and a job", "a mistake and a correction"], 0, "Double meaning."),
      ch("Which is NOT a pun?", ["It rained a lot yesterday.", "Time flies like an arrow; fruit flies like a banana.", "I'm reading a book about anti-gravity. I can't put it down."], 0, "No double meaning."),
      ch("Why can puns be hard to translate into Spanish?", ["The double meaning usually exists in only one language.", "Spanish has no humour of this kind.", "Puns are always rude."], 0, "Wordplay is language-specific."),
    ],
    [
      gap("I'm reading a book about anti-gravity. I can't put it", ".", ["down"], "can't put it down = it's exciting / it floats."),
      gap("I used to be a banker, but I lost", ".", ["interest"], "interest = money / curiosity."),
      tr("Explain the pun in one sentence beginning 'The joke is that'.", "The math book looked sad because it had too many problems.", ["The joke is that problems means maths exercises and personal difficulties", "The joke is that problems means math exercises and personal difficulties", "The joke is that problems can mean maths exercises and personal difficulties", "The joke is that problems can mean math exercises and personal difficulties"], "problems = exercises / troubles."),
      dict(X("02", "dict"), ["The joke works because the word has two meanings"]),
      say("I used to be a banker, but I lost interest.", "Pause before the last word; that's where the joke lands."),
    ],
    [
      fix(["I'm reading a book on anti-gravity.", "I can't put it", "away."], 2, ["down.", "down"], "The pun needs 'put it down' (stop reading / it floats)."),
      fix(["The thief stole a calendar", "and got", "twelve days."], 2, ["twelve months.", "twelve months"], "The pun needs 'twelve months' (a sentence / the pages)."),
      ch("Which version kills the joke?", ["I used to be a banker, but I became bored with the job.", "I used to be a banker, but I lost interest.", "Bankers? I lost interest."], 0, "No double meaning left."),
      ch("Which headline pun is weakest?", ["Local bakery opens.", "Bakery owner rises to the occasion.", "Baker's new bread is a loaf-ly surprise."], 0, "No wordplay at all."),
      ch("A classmate explains a pun by giving only one meaning. What's missing?", ["The second meaning that makes it funny", "A picture to explain it", "A longer setup before it"], 0, "Puns need both readings."),
    ],
    [
      ch("Best headline for a story about a cheese shop winning a prize?", ["Grate expectations: local cheese shop wins top award", "Cheese shop wins award", "Award given to a shop that sells cheese products"], 0, "Pun on great / grate."),
      ch("When can a pun misfire?", ["In a message about a serious, sad event", "In a school magazine", "On a birthday card"], 0, "Read the room."),
      ctx("Your teacher writes on your essay: 'Your conclusion is a bit of a cliffhanger.'", "She probably means…", ["Your conclusion doesn't really finish the argument.", "Your essay is about mountains and climbing.", "She loved the drama in it."], 0, "Playful criticism."),
      ch("Best caption for a photo of a cat asleep on a laptop?", ["Working from home, purr-fectly.", "Cat on laptop.", "A cat is sleeping on a computer."], 0, "Playful pun on perfectly / purr."),
      say("Time flies like an arrow; fruit flies like a banana.", "Pause at the semicolon; stress FRUIT flies and BAnana."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write three pun headlines for a school newspaper and explain each one (80 words or more in total). Use 'The joke is that…' or 'because … means … and …' at least twice." },
      { universe: "science", text: "Write three science puns (80 words or more in total) and explain the double meaning in each. Use 'The joke is that…' or '… means … and …' at least twice." },
      { universe: "arts", text: "Invent three pun titles for an art exhibition or a band's album (80 words or more in total), and explain the double meaning in each. Use 'The joke is that…' or '… means … and …' at least twice." },
    ],
    minWords: 80,
    checks: [
      { label: "Explain the double meaning at least twice (The joke is that… / … means … and …)", pattern: "(the joke is that|\\bmeans?\\b[^.!?]*\\band\\b|double meaning|two meanings|sounds like)", min: 2 },
      { label: "Quote at least two headlines or jokes", pattern: "[\"'“‘][A-Z][^\"'”’]{5,}[\"'”’]", min: 2 },
    ],
    rubric: ["Each pun has a real double meaning.", "My explanations show both meanings.", "The jokes fit the audience and topic."],
    model: "Headline one: 'Grate expectations for local cheese festival.' The joke is that grate sounds like great, and you grate cheese. Headline two: 'Maths teacher has too many problems.' The joke is that problems means exercises and personal difficulties. Headline three: 'School baker rises to the occasion.' Here rise means to do well when it matters, and bread rises in the oven, so the headline has two meanings at once. Puns work best when both readings are true and the headline stays short.",
  },
};

const binomials: NodePractice = {
  nodeId: "c2.binomials-and-fixed-pairs",
  explain: "Binomials are pairs of words joined by 'and' or 'or' in a fixed order: 'pros and cons', not 'cons and pros'. Native speakers notice immediately when the order is wrong. Some are literal (salt and pepper, black and white), many are idiomatic: 'by and large' (generally), 'odds and ends' (small various things), 'touch and go' (uncertain, risky), 'sick and tired' (completely fed up), 'safe and sound' (safe, unharmed), 'sooner or later' (eventually), 'give or take' (approximately), 'few and far between' (rare), 'rough and ready' (simple but effective), 'peace and quiet'. Some repeat a word: 'over and over', 'little by little', 'face to face'. They make speech sound natural and writing fluent, but too many in formal writing sound informal.",
  pattern: ["Fixed order: pros and cons · odds and ends · ladies and gentlemen", "by and large = generally · touch and go = uncertain · give or take = approximately", "sick and tired = fed up · safe and sound = unharmed · few and far between = rare", "sooner or later = eventually · rough and ready = basic but works", "Repetition: over and over · little by little · face to face · step by step"],
  steps: [
    [
      heard(X("03", "notice"), "How did the trip go, generally?", ["Well", "Badly", "It was cancelled"], 0, "'By and large, the trip went well.'"),
      heard(X("03", "notice"), "What was 'touch and go'?", ["The weather", "The food", "The bus"], 0, "'It was touch and go with the weather' = uncertain."),
      heard(X("03", "notice"), "How did they get back?", ["Safe and sound", "Late and tired", "Lost and angry"], 0, "'we made it back safe and sound'."),
      ch("'Odds and ends' are…", ["various small things", "numbers and letters", "the end of a story"], 0, "Small miscellaneous items or tasks."),
      ch("'By and large' means…", ["generally", "very big", "nearby"], 0, "On the whole."),
    ],
    [
      ch("'Good teachers are few and far between' means…", ["Good teachers are rare.", "Good teachers live far away.", "There are few teachers in the city."], 0, "few and far between = rare."),
      ch("'The repair was rough and ready' means…", ["It was basic, but it worked.", "It was perfect in every way.", "It was violent and rough."], 0, "Not elegant, but functional."),
      ctx("'The bus takes an hour, give or take ten minutes.'", "This means…", ["approximately an hour", "exactly an hour", "more than two hours"], 0, "give or take = approximately."),
      ch("Why does 'cons and pros' sound wrong?", ["Binomials have a fixed order.", "It's grammatically impossible.", "'Pros' is plural."], 0, "Order is fixed by usage."),
      ch("Which is most informal?", ["I'm sick and tired of this homework.", "I am weary of these tasks.", "These assignments are excessive."], 0, "sick and tired = conversational."),
    ],
    [
      gap("Sooner or", ", you'll have to tell her the truth.", ["later"], "sooner or later."),
      gap("Little by", ", my English improved.", ["little"], "little by little."),
      tr("Rewrite using a binomial with the word given.", "We considered the advantages and disadvantages.", ["We weighed up the pros and cons", "We considered the pros and cons", "We weighed the pros and cons"], "pros and cons.", "pros"),
      dict(X("03", "dict"), ["Sooner or later we have to make a decision", "Sooner or later, we have to make a decision."]),
      say("By and large, the results were good, give or take a few problems.", "Link 'by and large' as one word: bya'large."),
    ],
    [
      fix(["We discussed", "the cons and pros", "for an hour."], 1, ["the pros and cons"], "Fixed order: pros and cons."),
      fix(["After the storm,", "everyone was sound and safe,", "thank goodness."], 1, ["everyone was safe and sound,", "everyone was safe and sound"], "Fixed order: safe and sound."),
      fix(["I'm tired and sick", "of", "waiting for the bus."], 0, ["I'm sick and tired"], "Fixed order: sick and tired."),
      ch("Which is wrong?", ["Large and by, it worked.", "By and large, it worked.", "On the whole, it worked."], 0, "Fixed order: by and large."),
      ch("Which is wrong?", ["It took an hour, take or give.", "It took an hour, give or take.", "It took about an hour."], 0, "Fixed order: give or take."),
    ],
    [
      ch("Best phrase for a formal academic conclusion?", ["Overall, the results support the hypothesis.", "By and large, the results were sick and tired.", "The results were touch and go, sort of."], 0, "Too many binomials sound informal in academic writing."),
      ch("Best way to tell a friend the exam was risky?", ["It was touch and go, but I passed!", "It was few and far between, but I passed!", "It was odds and ends, but I passed!"], 0, "touch and go = uncertain."),
      ctx("A parent texts after a long trip: 'Home safe and sound!'", "This message is…", ["natural and reassuring", "too formal", "grammatically wrong"], 0, "Typical use."),
      ch("Most natural description of a quiet weekend?", ["I just wanted some peace and quiet.", "I just wanted some quiet and peace.", "I just wanted peace or quiet."], 0, "Fixed: peace and quiet."),
      say("I'm sick and tired of saying the same thing over and over.", "Stress SICK, TIRED and OVer."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a story or anecdote (80 words or more) about a trip or event that nearly went wrong. Use at least four binomials (by and large, touch and go, safe and sound, sooner or later, odds and ends, pros and cons, give or take, sick and tired, little by little, peace and quiet)." },
      { universe: "futures", text: "Write advice for a friend choosing a university (80 words or more). Use at least four binomials (pros and cons, by and large, sooner or later, give or take, few and far between, step by step, touch and go)." },
      { universe: "screens", text: "Write a review of a game, series or app (80 words or more). Use at least four binomials (by and large, rough and ready, few and far between, over and over, sick and tired, odds and ends, pros and cons)." },
    ],
    minWords: 80,
    checks: [
      { label: "Four binomials", pattern: "\\b(by and large|touch and go|safe and sound|sooner or later|odds and ends|pros and cons|give or take|sick and tired|little by little|peace and quiet|few and far between|rough and ready|over and over|step by step|face to face|black and white|ups and downs|first and foremost|now and then|again and again|bits and pieces|loud and clear|short and sweet)\\b", min: 4 },
    ],
    rubric: ["Every binomial is in its fixed order.", "Each one fits the meaning of the sentence.", "My text is natural, not a list of phrases."],
    model: "Last summer our family drove to the coast. By and large, it was a good trip, but at one point it was touch and go. Halfway there, the car started making a strange noise. My dad said, 'Sooner or later, this car will die.' We stopped in a tiny village, where mechanics were few and far between, and waited three hours, give or take. The repair was rough and ready, but it worked. We arrived safe and sound, sick and tired of the car, but happy.",
  },
};

const colloquial: NodePractice = {
  nodeId: "c2.idiomatic-and-colloquial-range",
  explain: "C2 speakers use a wide range of informal, idiomatic verbs that make speech precise and natural. 'Mull over' = think carefully about something for a while. 'Chime in' = join a conversation with a comment. 'Egg on' = encourage someone to do something, often something silly. 'Gloss over' = treat a problem as unimportant so people don't notice it. 'Sleep on it' = wait until tomorrow to decide. 'Touch base' = make contact briefly. 'Rope in' = persuade someone to help. 'Fob off' = give someone a weak excuse. 'Run it by' = tell someone an idea to get their opinion. 'Brush up on' = improve a skill you've let slip. These are informal to neutral: great in conversation, emails to people you know and journalism, but replace them in formal essays (consider, encourage, ignore, contact).",
  pattern: ["mull over (consider) · sleep on it (wait to decide)", "chime in (add a comment) · run something by someone (ask their opinion)", "egg on (encourage, often badly) · rope in (persuade to help)", "gloss over (hide a problem) · fob off (give a weak excuse)", "touch base (contact briefly) · brush up on (improve again)", "Formal equivalents: consider, encourage, ignore, contact, revise"],
  steps: [
    [
      heard(X("04", "notice"), "What has the speaker been doing with the idea?", ["Thinking about it carefully", "Ignoring it", "Telling everyone about it"], 0, "'mulling over your idea'."),
      heard(X("04", "notice"), "How did the boss deal with the budget problem?", ["He treated it as unimportant.", "He solved it.", "He asked Sam about it."], 0, "'glossed over the budget problem'."),
      heard(X("04", "notice"), "What did Leo do?", ["Encouraged everyone to vote immediately", "Refused to vote at all", "Left the meeting early"], 0, "'egged everyone on to vote'."),
      ch("'Chime in' means…", ["add your comment to a conversation", "ring a bell loudly", "arrive late"], 0, "Sam chimed in with suggestions."),
      ch("'Let's sleep on it' means…", ["Let's decide tomorrow.", "Let's go to bed.", "Let's forget it."], 0, "Wait before deciding."),
    ],
    [
      ch("Which is closest to 'gloss over'?", ["deliberately not deal with", "polish something carefully", "explain something in detail"], 0, "Treat a problem superficially."),
      ch("'His friends egged him on' suggests…", ["they encouraged him to do something unwise", "they stopped him from doing it", "they gave him some food"], 0, "egg on = encourage, often badly."),
      ctx("Email: 'Could I run a few ideas by you before Friday?'", "The writer wants to…", ["get your opinion on some ideas", "run with you in the park", "send you a bill"], 0, "run something by someone."),
      ch("'They fobbed me off with an excuse' means…", ["They gave me a weak excuse instead of helping.", "They helped me very quickly and kindly.", "They argued with me."], 0, "fob off = dismiss with excuses."),
      ch("Which is the most formal equivalent of 'mull over'?", ["consider", "chew", "sleep on"], 0, "Use consider in essays."),
    ],
    [
      gap("I need to brush", "on my French before the trip.", ["up"], "brush up on."),
      gap("Can I rope you", "to help with the bake sale?", ["in"], "rope someone in."),
      tr("Rewrite using an informal phrasal verb with the word given.", "The report ignored the most serious problem.", ["The report glossed over the most serious problem"], "gloss over = ignore (deliberately).", "glossed"),
      dict(X("04", "dict"), ["Let me mull it over and get back to you"]),
      say("Let me mull it over and get back to you tomorrow.", "Link 'mull it over' smoothly: mu-li-tover."),
    ],
    [
      fix(["We should", "sleep about it", "before deciding."], 1, ["sleep on it"], "sleep on it."),
      fix(["She chimed", "on", "with a great idea."], 1, ["in"], "chime in."),
      fix(["Don't", "egg him up", "to jump off the wall!"], 1, ["egg him on"], "egg someone on."),
      ch("Which is wrong?", ["I'll touch base on you next week.", "I'll touch base with you next week.", "Let's touch base on Monday."], 0, "touch base with someone."),
      ch("Which is wrong?", ["He glossed the problem over in detail.", "He glossed over the problem.", "He glossed over it quickly."], 0, "Glossing over is not detailed, by definition."),
    ],
    [
      ch("Best phrase in an essay?", ["The government failed to address the issue.", "The government glossed over the issue, lol.", "The government fobbed us off big time."], 0, "Formal register in essays."),
      ch("Best message to a classmate about a group project?", ["Can I run my slides by you before we present?", "I require your evaluation of my slides.", "Slides. You. Check."], 0, "Friendly and natural."),
      ctx("In a job interview: 'I'd like to mull it over and get back to you.'", "This reply is…", ["acceptable: polite and natural", "very rude and aggressive", "grammatically wrong"], 0, "Neutral enough for most professional contexts."),
      ch("Your friend is pushing your brother to do a dangerous trick. You say…", ["Stop egging him on!", "Stop roping him in!", "Stop touching base with him!"], 0, "egg on = encourage something unwise."),
      say("Don't let them fob you off with another excuse.", "Stress FOB and EXcuse."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write an informal email (80 words or more) to a friend about a group decision that went badly. Use at least four colloquial verbs (mull over, chime in, egg on, gloss over, sleep on it, touch base, rope in, fob off, run by, brush up on)." },
      { universe: "screens", text: "Write a group-chat style story (80 words or more) about planning a gaming tournament. Use at least four colloquial verbs (mull over, chime in, egg on, gloss over, touch base, rope in, fob off, run by)." },
      { universe: "futures", text: "Write a message (80 words or more) to a mentor about a big decision. Use at least four colloquial verbs (mull over, sleep on it, run by, touch base, brush up on, chime in, gloss over)." },
    ],
    minWords: 80,
    checks: [
      { label: "Four colloquial verbs", pattern: "\\b(mull(ed|ing|s)? (it |this |that |them )?over|chim(e|ed|es|ing) in|egg(ed|ing|s)? \\w+ on|gloss(ed|es|ing)? over|sleep on it|slept on it|touch(ed|ing)? base|rop(e|ed|es|ing) \\w+ in|fob(bed|bing|s)? \\w+ off|run \\w+ by|ran \\w+ by|brush(ed|ing)? up on)\\b", min: 4 },
    ],
    rubric: ["Each verb is used with its correct particle.", "My tone is informal but clear.", "The reader understands what happened."],
    model: "Hey Sara, I've been mulling over what happened at the planning meeting. Tomas roped me in to organise the trip, and I ran my ideas by everyone. Then Marco chimed in with his crazy plan to go camping in the rain, and the others egged him on. Nobody wanted to talk about the cost, so we just glossed over it. Now we have no money and no tents. Can we touch base tomorrow? I need to sleep on it before I say anything.",
  },
};

const allusions: NodePractice = {
  nodeId: "c2.allusions-and-proverbs",
  explain: "An allusion is a short reference to a story, myth, book or historical event that everyone is expected to know. 'Achilles' heel' (from Greek myth) is a single weak point in someone strong. 'Opening Pandora's box' means starting something that causes many unexpected problems. A 'Pyrrhic victory' is a win that costs so much it feels like a loss. A 'catch-22' (from Joseph Heller's novel) is a situation where you can't win because of contradictory rules. Others: 'a Trojan horse', 'meet your Waterloo', 'the Midas touch', 'crossing the Rubicon', 'a David and Goliath battle'. Proverbs are traditional sayings with advice: 'Don't count your chickens before they hatch', 'The pen is mightier than the sword', 'Every cloud has a silver lining'. Native speakers often say only half: 'Well, when in Rome…'",
  pattern: ["Achilles' heel = a single weakness", "Pandora's box = a source of many problems", "Pyrrhic victory = a win that costs too much", "catch-22 = an impossible situation with contradictory rules", "Trojan horse · the Midas touch · cross the Rubicon · meet your Waterloo · David and Goliath", "Half proverbs: When in Rome… · Speak of the devil… · Every cloud…"],
  steps: [
    [
      heard(X("05", "notice"), "What is the striker's weakness?", ["His temper", "His speed", "His age"], 0, "'his Achilles' heel is his temper'."),
      heard(X("05", "notice"), "What happened when he became captain?", ["Many arguments started.", "The team won every game.", "He left the club."], 0, "'opened a Pandora's box of arguments'."),
      heard(X("05", "notice"), "Why was winning the cup a Pyrrhic victory?", ["Three players were injured.", "The prize money was small.", "The fans were angry."], 0, "A win at too high a cost."),
      ch("A 'catch-22' is…", ["an impossible situation with contradictory conditions", "a good catch in a football match", "a lucky number"], 0, "Need experience to get a job; need a job to get experience."),
      ch("'Achilles' heel' comes from…", ["Greek mythology", "a football rule", "a shoe brand"], 0, "Achilles was weak only in his heel."),
    ],
    [
      ch("'The new app is a Trojan horse' suggests…", ["it looks harmless but hides something dangerous", "it's about ancient history", "it's very fast"], 0, "Trojan horse = hidden threat."),
      ch("'She has the Midas touch' means…", ["Everything she does becomes successful.", "She touches a lot of gold every day.", "She is very greedy."], 0, "King Midas turned everything to gold."),
      ctx("'Once we sent the email to the whole school, we had crossed the Rubicon.'", "This means…", ["There was no going back.", "We crossed a river.", "We made a small mistake."], 0, "Julius Caesar's point of no return."),
      ch("A small school beating the national champions is…", ["a David and Goliath story", "a Pyrrhic victory for the school", "a catch-22 for the champions"], 0, "The small one beats the giant."),
      ch("'Speak of the devil' is said when…", ["the person you were talking about appears", "someone is evil or dangerous", "you're scared of something"], 0, "Half of 'Speak of the devil and he shall appear'."),
    ],
    [
      gap("Asking about his ex-girlfriend opened a", "box of problems.", ["Pandora's"], "Pandora's box."),
      gap("Maths is my", "heel; I'm good at everything else.", ["Achilles'", "Achilles"], "Achilles' heel."),
      tr("Rewrite using an allusion with the word given.", "We won the election, but we lost so many friends that it wasn't worth it.", ["It was a Pyrrhic victory", "We won the election, but it was a Pyrrhic victory", "Winning the election was a Pyrrhic victory"], "Pyrrhic victory = a costly win.", "Pyrrhic"),
      dict(X("05", "dict"), ["It was a Pyrrhic victory for the whole team"]),
      say("We're in a real catch-22: no experience, no job; no job, no experience.", "Stress CATCH, and pause at each semicolon."),
    ],
    [
      fix(["Spelling is", "my Achilles' foot,", "I'm afraid."], 1, ["my Achilles' heel,", "my Achilles heel,", "my Achilles' heel", "my Achilles heel"], "It's always heel."),
      fix(["Changing the rules", "opened a Pandora's door", "of complaints."], 1, ["opened a Pandora's box", "opened Pandora's box"], "Pandora's box."),
      fix(["It's a", "catch-21:", "you need a visa to get a job and a job to get a visa."], 1, ["catch-22:", "catch-22"], "catch-22."),
      ch("Which use is wrong?", ["We won easily, a real Pyrrhic victory with no cost at all.", "It was a Pyrrhic victory: we won but lost three players.", "Their win was Pyrrhic; the club went bankrupt."], 0, "A Pyrrhic victory always has a high cost."),
      ch("Which use of Midas is wrong?", ["He has the Midas touch: every business he starts fails.", "She has the Midas touch: every song becomes a hit.", "The Midas touch made him rich."], 0, "Midas touch = success, not failure."),
    ],
    [
      ch("Best opening line for an essay on social media?", ["Social media has opened a Pandora's box of problems for teenagers.", "Social media is Pandora's Achilles' box for teenagers.", "Social media is a catch-22 Pyrrhic Midas for teenagers."], 0, "One clear allusion, used correctly."),
      ch("When might an allusion confuse your reader?", ["When the audience doesn't know the story", "When it's in a novel", "When it's short"], 0, "Know your audience."),
      ctx("Your friend says: 'Well, when in Rome…' as you all try insects at a market in Mexico.", "She means…", ["We should do what the locals do.", "We are in Italy now.", "We should leave now."], 0, "When in Rome, do as the Romans do."),
      ch("Your team beat a much bigger school. Best headline?", ["David slays Goliath in school final", "Midas crosses the Rubicon in school final", "Catch-22 for the champions in final"], 0, "Fits the story."),
      say("Don't count your chickens before they hatch.", "Stress COUNT, CHICKens and HATCH."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short opinion piece (80 words or more) about a sports team, a school, or a company. Use at least three allusions (Achilles' heel, Pandora's box, Pyrrhic victory, catch-22, Trojan horse, Midas touch, cross the Rubicon, David and Goliath) and one proverb." },
      { universe: "past", text: "Write about a historical event (80 words or more) using at least three allusions (Achilles' heel, Pandora's box, Pyrrhic victory, Trojan horse, cross the Rubicon, meet your Waterloo, David and Goliath) and one proverb." },
      { universe: "screens", text: "Write a review of a film, series or game (80 words or more) using at least three allusions (Achilles' heel, Pandora's box, Pyrrhic victory, catch-22, Trojan horse, Midas touch) and one proverb." },
    ],
    minWords: 80,
    checks: [
      { label: "Three allusions", pattern: "\\b(achilles'? heel|pandora'?s box|pyrrhic|catch-22|trojan horse|midas touch|rubicon|waterloo|david and goliath|goliath)\\b", min: 3 },
      { label: "A proverb (don't count your chickens, every cloud, the pen is mightier, when in Rome, actions speak louder, practice makes perfect, better late than never, the early bird…)", pattern: "\\b(count your chickens|every cloud|pen is mightier|when in rome|actions speak louder|practice makes perfect|better late than never|early bird|too many cooks|don't judge a book|where there's a will|rome wasn't built|the grass is always greener|two wrongs)\\b", min: 1 },
    ],
    rubric: ["Each allusion fits the situation exactly.", "I didn't use so many that the text feels forced.", "My reader can follow even without knowing every myth."],
    model: "Our school robotics team is talented, but its Achilles' heel has always been organisation. Last year, letting every member design their own robot opened a Pandora's box of arguments. We still reached the final, a real David and Goliath battle against the national champions. We won, but it was a Pyrrhic victory: half the team quit afterwards from exhaustion. This year we need to plan better. After all, Rome wasn't built in a day, and neither is a great team.",
  },
};

const register: NodePractice = {
  nodeId: "c2.register-specific-vocabulary",
  explain: "Every field has its own words, and C2 readers understand them in context. Legal English: 'liable' (legally responsible), 'waive' (give up a right or fee), 'plaintiff' and 'defendant', 'breach' (breaking a rule or contract), 'null and void' (no longer valid). Medical English: 'chronic' (long-lasting), 'acute' (sudden and severe), 'benign' (not dangerous, especially of a tumour), 'malignant' (dangerous), 'symptoms', 'diagnosis'. Journalism uses short, dramatic words: 'embattled' (facing many problems), 'slammed' (strongly criticised), 'axed' (cancelled or fired), 'probe' (investigation), 'row' (argument), 'vow' (promise). Recognising these words lets you read the news, a contract or a medical letter accurately, and choose the right word for your audience.",
  pattern: ["Legal: liable · waive · breach · plaintiff / defendant · null and void", "Medical: chronic (long-term) · acute (sudden, severe) · benign / malignant · diagnosis", "Journalistic: embattled · slammed · axed · probe · row · vow · bid", "Everyday equivalents: responsible, give up, long-term, criticised, investigation"],
  steps: [
    [
      heard(X("06", "notice"), "What does 'embattled company' mean?", ["A company facing many problems", "A company that makes weapons", "A very successful company"], 0, "embattled = under pressure from many sides."),
      heard(X("06", "notice"), "What do the lawyers say?", ["The company is not legally responsible for the damage.", "The company will pay for everything, including damage.", "The company has closed down."], 0, "'not liable for the damage'."),
      heard(X("06", "notice"), "Is the patient's tumour dangerous?", ["No, it is benign.", "Yes, it is malignant.", "The doctors don't know."], 0, "benign = not cancerous."),
      ch("'Chronic' pain is…", ["long-lasting", "sudden and short", "imaginary"], 0, "chronic = long-term."),
      ch("'Slammed by critics' means…", ["strongly criticised", "strongly praised", "ignored completely"], 0, "Journalistic for criticised."),
    ],
    [
      ch("'The school agreed to waive the fee' means…", ["The school won't charge the fee.", "The school doubled the fee.", "The school waved at the fee."], 0, "waive = give up the right to something."),
      ch("Opposite of 'chronic' in medicine?", ["acute", "benign", "liable"], 0, "acute = sudden and severe."),
      ctx("Headline: 'Minister axed after probe into expenses row.'", "In plain English…", ["The minister was fired after an investigation into an argument about expenses.", "The minister cut down a tree after a long walk in the park.", "The minister was promoted after a party with expensive guests."], 0, "axed = fired; probe = investigation; row = argument."),
      ch("Which word belongs in a contract?", ["breach", "slammed", "chronic"], 0, "breach of contract."),
      ch("Why do newspapers use 'row' instead of 'disagreement'?", ["It's shorter and more dramatic.", "It's more formal than 'disagreement'.", "It's a legal term."], 0, "Headline language."),
    ],
    [
      gap("If you damage the phone, you will be", "for the cost of repairs.", ["liable"], "liable for."),
      gap("Her asthma is", "; she's had it since childhood.", ["chronic"], "chronic = long-term."),
      tr("Rewrite the headline in plain English.", "Embattled coach vows to fight on after fans slam team.", ["The coach, who has many problems, promises to continue after fans strongly criticised the team", "The coach, who is facing many problems, promises to continue after fans strongly criticised the team", "The coach, who has many problems, promises to keep going after fans strongly criticised the team", "The coach, who is facing many problems, promises to keep going after fans strongly criticised the team"], "embattled = facing problems; vow = promise; slam = criticise strongly."),
      dict(X("06", "dict"), ["The doctor said the tumour was benign", "The doctor said the tumor was benign"]),
      say("The company was found liable for breach of contract.", "Stress LIable and BREACH."),
    ],
    [
      fix(["The patient's", "benign", "tumour needed urgent surgery to stop it spreading."], 1, ["malignant"], "A spreading, urgent tumour is malignant."),
      fix(["The company is", "liable of", "the damage."], 1, ["liable for"], "liable for."),
      fix(["The hotel agreed to", "wave", "the cancellation fee."], 1, ["waive"], "waive (give up), not wave (move your hand)."),
      ch("Which is wrong?", ["She has acute back pain that has lasted ten years.", "She has chronic back pain that has lasted ten years.", "She had acute pain after the fall."], 0, "Ten years = chronic."),
      ch("Which belongs in a medical letter, not a tabloid?", ["The patient was diagnosed with a chronic condition.", "Star slammed in health row!", "Doctors axe treatment in shock probe."], 0, "Professional register."),
    ],
    [
      ch("Best word for a formal report to the school board?", ["The investigation found that rules had been broken.", "The probe found the rules were slammed by staff.", "Rules were axed in a row, probe finds."], 0, "Formal report: neutral vocabulary."),
      ch("Explaining a diagnosis to a worried 12-year-old, which is best?", ["It's not dangerous, and doctors can treat it.", "The lesion is benign with no malignancy.", "It's a chronic acute benign thing."], 0, "Plain language for the audience."),
      ctx("A contract says: 'Any breach of these terms renders the agreement null and void.'", "This means…", ["If anyone breaks the terms, the agreement is cancelled.", "The agreement is empty and useless.", "The terms are optional."], 0, "null and void = no longer valid."),
      ch("Best headline for a school newspaper story about cancelled exams?", ["Exams axed as heatwave hits", "Examinations have been cancelled because of the hot weather conditions", "Exams waived, liable and chronic"], 0, "Short, dramatic headline style."),
      say("The embattled minister vowed to resign if the probe found any wrongdoing.", "Stress emBATtled, VOWED and WRONGdoing."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short news story (80 words or more) in journalistic style about a problem at a school or club, then add one sentence explaining it in plain English. Use at least two journalistic words (embattled, slammed, axed, probe, row, vow, bid) and one legal or medical word (liable, waive, breach, chronic, acute, benign)." },
      { universe: "science", text: "Write a news story (80 words or more) about a new medical discovery, then explain it in plain English. Use at least two journalistic words (slammed, probe, row, vow, bid, embattled) and one medical word (chronic, acute, benign, malignant, diagnosis)." },
      { universe: "screens", text: "Write a news story (80 words or more) about a game company in trouble, then explain it in plain English. Use at least two journalistic words (embattled, slammed, axed, probe, row, vow) and one legal word (liable, waive, breach, null and void)." },
    ],
    minWords: 80,
    checks: [
      { label: "Two journalistic words (embattled, slammed, axed, probe, row, vow, bid)", pattern: "\\b(embattled|slam|slammed|slams|axe|axed|axes|probe|probes|row|rows|vow|vowed|vows|bid|bids)\\b", min: 2 },
      { label: "A legal or medical word (liable, waive, breach, null and void, chronic, acute, benign, malignant, diagnosis)", pattern: "\\b(liable|liability|waive|waived|breach|breached|null and void|plaintiff|defendant|chronic|acute|benign|malignant|diagnosis|diagnosed)\\b", min: 1 },
    ],
    rubric: ["My journalistic words are used correctly.", "The plain-English sentence explains the story clearly.", "My register is consistent in each part."],
    model: "The embattled football club was slammed by parents this week after its summer camp was axed without warning. A probe has been launched into how the club spent the fees. The club's director vowed to return every payment, but insisted that the club was not liable for travel costs already paid by families. A row over refunds is expected at Friday's meeting. In plain English: the club cancelled the camp, people are angry, and it will give back the money but not travel costs.",
  },
};

export const C2_WORDS: NodePractice[] = [literary, wordplay, binomials, colloquial, allusions, register];
