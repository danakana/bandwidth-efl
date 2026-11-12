/* B1 Sounds and Error Clinic. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, say, tr } from "./helpers";

const S = (n: string, k: string) => `p/b1s-${n}-${k}.mp3`;
const E = (n: string, k: string) => `p/b1e-${n}-${k}.mp3`;

export const B1_SOUNDS_ERRORS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: S("01", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "Where do you live? Do you like it there? What time does the bus come? Is it usually late? It's a nice day, isn't it? You're coming tomorrow, aren't you?" },
  { file: S("01", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "You're coming tomorrow, aren't you?" },
  { file: S("02", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "What are you gonna do this weekend? I wanna go to the beach. Didja see the match last night? I ate an apple and an orange. Let's go out at eight." },
  { file: S("02", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "What are you going to do this weekend?" },
  { file: E("01", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "If I had more money, I would buy a new bike. If I knew the answer, I would tell you. If it rains tomorrow, we will stay at home. If I had studied, I would have passed." },
  { file: E("01", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "If I knew the answer, I would tell you." },
  { file: E("02", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Despite the rain, we played the match. Despite feeling tired, I finished my homework. I'm really looking forward to seeing you next week. We're looking forward to the holidays." },
  { file: E("02", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "I'm looking forward to seeing you next week." },
  { file: E("03", "notice"), voice: "bIHbv24MWmeRgasZH58o", script: "On holiday I took a lot of photos. I made a few mistakes in my English test, but I did my best. Can you do me a favour? Let's take a break and make a plan." },
  { file: E("03", "dict"), voice: "8DvnqWWA3WWXixOm7zQI", script: "I took a lot of photos on holiday." },
  { file: E("04", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "My cousin works at a hospital. She assists the doctors, but she doesn't attend every meeting. She's a very sensible person: she always makes good decisions. She's had a long career in medicine, and she studied nursing at university." },
  { file: E("04", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "She's a very sensible person." },
];

const intonation: NodePractice = {
  nodeId: "b1.intonation-of-questions-and-question-tag",
  explain: "The music of your voice changes the meaning of a question. Wh- questions (where, what, when, why, how) usually fall at the end: 'Where do you live? ↘'. Yes/no questions usually rise: 'Do you like it there? ↗'. Question tags can do both: falling ('It's a nice day, isn't it? ↘') means you're sure and want agreement; rising ('You're coming tomorrow, aren't you? ↗') means you're really asking. Getting this right makes you sound friendly and natural.",
  pattern: ["Wh- questions fall ↘: Where do you live?", "Yes/no questions rise ↗: Do you like it?", "Tag falling ↘ = I'm sure, please agree: It's nice, isn't it?", "Tag rising ↗ = I'm really asking: You're coming, aren't you?"],
  steps: [
    [
      heard(S("01", "notice"), "'Where do you live?' Does the voice go up or down at the end?", ["Down", "Up", "It stays flat"], 0, "Wh- questions usually fall."),
      heard(S("01", "notice"), "'Do you like it there?' Does the voice go up or down at the end?", ["Up", "Down", "It stays flat"], 0, "Yes/no questions usually rise."),
      heard(S("01", "notice"), "'It's a nice day, isn't it?' The speaker is…", ["sure and wants agreement", "really asking", "angry"], 0, "Falling tag."),
      ch("Which type of question usually rises?", ["Yes/no questions", "Wh- questions", "None"], 0, "Do you…? Are you…? ↗"),
      ch("Which question usually falls?", ["What time is it?", "Is it late?", "Are you ready?"], 0, "Wh- question."),
    ],
    [
      ch("A rising tag ('You're coming, aren't you? ↗') means…", ["I'm not sure, so I'm asking.", "I'm sure.", "I'm angry."], 0, "Real question."),
      ch("Why does intonation matter?", ["It changes how polite or sure you sound.", "It doesn't matter in English.", "It's only for singers."], 0, "Meaning and attitude."),
      ctx("Looking at a blue sky, you say: 'It's a beautiful day, isn't it?'", "Your voice should probably…", ["fall: you're sure", "rise: you're not sure", "stay flat"], 0, "Inviting agreement."),
      ch("'What's your name?' said with a strong rise can sound…", ["surprised, like you didn't hear", "normal and neutral", "very formal"], 0, "Rising wh- = surprise or checking."),
      ch("Which is a yes/no question?", ["Is the bus usually late?", "When does the bus come?", "Why is it late?"], 0, "Starts with is/do/can…"),
    ],
    [
      gap("Where", "you live? (falls)", ["do"], "Wh- question: where do you…?"),
      gap("It's cold today,", "it? (falls: you want agreement)", ["isn't"], "Positive → negative tag."),
      tr("Make it a yes/no question (it will rise).", "You like pizza.", ["Do you like pizza?", "Do you like pizza"], "Do + subject + verb."),
      dict(S("01", "dict"), ["You're coming tomorrow, aren't you?", "You are coming tomorrow, aren't you"]),
      say("Where do you live? Do you like it there?", "Fall on LIVE ↘, rise on THERE ↗."),
    ],
    [
      ch("A student asks 'Do you like music?' with a strong falling voice. It might sound…", ["less friendly, like an order", "more friendly", "exactly right"], 0, "Yes/no questions usually rise."),
      ch("Which intonation is wrong for checking a fact you're sure about?", ["Rising tag: 'It's Monday, isn't it? ↗' (when you're sure)", "Falling tag: 'It's Monday, isn't it? ↘'", "Statement: 'It's Monday.'"], 0, "If you're sure, the tag falls."),
      fix(["Where", "you live?"], 1, ["do you live?"], "Wh- questions need do/does."),
      fix(["It's late,", "is it?"], 1, ["isn't it?"], "Positive sentence → negative tag."),
      ch("Which question is correct?", ["What time does the bus come?", "What time the bus comes?", "What time does the bus comes?"], 0, "does + base verb."),
    ],
    [
      ch("Small talk with a neighbour about the weather. Best?", ["Lovely weather, isn't it? ↘", "Is the weather lovely? ↗↗↗", "Weather. Lovely."], 0, "Falling tag invites agreement."),
      ch("You really don't know if your friend is coming. Best?", ["You're coming tonight, aren't you? ↗", "You're coming tonight, aren't you? ↘", "You come tonight."], 0, "Rising tag = real question."),
      ctx("In a job interview, you ask: 'What are the working hours?'", "Best intonation?", ["Falling at the end, clear and polite", "Rising very high", "Whispering"], 0, "Wh- question falls."),
      ch("Which sounds most friendly when meeting someone new?", ["Where are you from? ↘ (with a smile)", "WHERE are you FROM? (very loud)", "From where? ↗↗"], 0, "Natural fall, friendly tone."),
      say("It's a nice day, isn't it?", "Fall on ISN'T it: you expect agreement."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write and record a short conversation with a new classmate (45 words or more). Include at least two wh- questions, two yes/no questions and one question tag. Mark the tag ↗ or ↘." },
      { universe: "screens", text: "Write and record a short interview with a streamer or gamer (45 words or more). Include at least two wh- questions, two yes/no questions and one question tag." },
      { universe: "futures", text: "Write and record a short interview with someone about their job (45 words or more). Include at least two wh- questions, two yes/no questions and one question tag." },
    ],
    minWords: 45,
    checks: [
      { label: "Two wh- questions (where, what, when, why, how, who)", pattern: "\\b(where|what|when|why|how|who|which)\\b[^?]*\\?", min: 2 },
      { label: "Two yes/no questions (Do / Are / Is / Can / Have … ?)", pattern: "(^|[.!?]\\s+|\\w+:\\s*)(do|does|did|are|is|can|have|has|was|were|will|would)\\s+\\w+[^?]*\\?", min: 2 },
      { label: "A question tag (…, isn't it? / …, do you?)", pattern: ",\\s*(is|isn't|are|aren't|was|wasn't|do|don't|does|doesn't|did|didn't|can|can't|have|haven't|will|won't)\\s+(i|you|he|she|it|we|they)\\s*\\?", min: 1 },
    ],
    rubric: ["My wh- questions fall and my yes/no questions rise.", "My tag matches what I mean (sure or really asking).", "My conversation sounds friendly."],
    model: "Ana: Hi! What's your name? Leo: I'm Leo. Ana: Where are you from? Leo: Pasto. Ana: Do you like Bogotá? Leo: Yes, but it's cold! Ana: Are you in Mr Díaz's class? Leo: Yes, I am. Ana: He's really nice, isn't he? ↘ Leo: He is. Can you show me the library?",
  },
};

const connected: NodePractice = {
  nodeId: "b1.connected-speech-linking-and-reductions",
  explain: "In real, fast English, words join together and some sounds change. This is why films can be hard to understand. Linking: a word ending in a consonant joins the next vowel: 'an apple' sounds like 'a-napple', 'out at eight' like 'ou-ta-teight'. Reductions: 'going to' → 'gonna', 'want to' → 'wanna', 'did you' → 'didja', 'got to' → 'gotta'. You don't have to say these yourself, but you need to recognise them. In writing, always use the full forms.",
  pattern: ["Linking: an apple → a-napple · out at eight → ou-ta-teight", "gonna = going to · wanna = want to · gotta = got to", "didja = did you · whatcha = what are you", "Recognise them in speech; write the full forms"],
  steps: [
    [
      heard(S("02", "notice"), "What does 'gonna' mean in the first question?", ["going to", "gone", "go"], 0, "'What are you gonna do?'"),
      heard(S("02", "notice"), "Where does the speaker want to go?", ["The beach", "The cinema", "The match"], 0, "'I wanna go to the beach.'"),
      heard(S("02", "notice"), "What did the speaker eat?", ["An apple and an orange", "A banana", "An egg"], 0, "'an apple' sounds like 'a-napple'."),
      ch("'Wanna' means…", ["want to", "wanted", "won't"], 0, "Reduction."),
      ch("'Didja' means…", ["did you", "did yesterday", "do you"], 0, "Reduction."),
    ],
    [
      ch("Why do 'an apple' and 'a napple' sound the same?", ["The n links to the next vowel.", "There's a new word 'napple'.", "It's a mistake."], 0, "Linking."),
      ch("Should you write 'gonna' in an essay?", ["No, write 'going to'.", "Yes, always.", "Only in exams."], 0, "Full forms in writing."),
      ctx("In a film, someone says: 'I gotta go.'", "This means…", ["I have to go.", "I got a goal.", "I've gone."], 0, "gotta = got to / have to."),
      ch("Why is fast English hard to understand?", ["Words link and some sounds disappear or change.", "People speak a different language.", "It has no grammar."], 0, "Connected speech."),
      ch("Best strategy for understanding fast speech?", ["Listen for the stressed words and use context.", "Try to hear every sound perfectly.", "Stop listening when you miss a word."], 0, "Focus on meaning."),
    ],
    [
      gap("'Whatcha doing?' = What", "you doing?", ["are"], "whatcha = what are you."),
      gap("'I wanna leave.' = I", "to leave.", ["want"], "wanna = want to."),
      tr("Write the full form.", "Didja see the match? I'm gonna watch it again.", ["Did you see the match? I'm going to watch it again", "Did you see the match? I am going to watch it again"], "didja = did you; gonna = going to."),
      dict(S("02", "dict"), ["What are you going to do this weekend?", "What are you going to do this weekend"]),
      say("Let's go out at eight.", "Link it: let's-go-ou-ta-teight."),
    ],
    [
      fix(["In my essay:", "I wanna study medicine", "because I like helping people."], 1, ["I want to study medicine"], "In writing, use the full form."),
      fix(["I ate", "a apple", "for breakfast."], 1, ["an apple"], "an before a vowel sound, and it links: a-napple."),
      fix(["Formal email: 'Dear Sir,", "I'm gonna", "visit your office on Monday.'"], 1, ["I am going to", "I will"], "No reductions in formal writing."),
      ch("Which full form is correct for 'Whatcha gonna do?'", ["What are you going to do?", "What you want do?", "What did you go?"], 0, "whatcha gonna = what are you going to."),
      ch("Which is a correct transcription of 'gotta'?", ["got to / have to", "go to", "got a"], 0, "I gotta go = I have to go."),
    ],
    [
      ch("You hear 'Didja finish?' in a film. What do you understand?", ["Did you finish?", "Do you finish?", "Did I finish?"], 0, "Recognise the reduction."),
      ch("Texting a close friend, which is fine?", ["Wanna come over later?", "Do you desire to visit me later?", "I request your presence."], 0, "Informal is fine with friends."),
      ctx("You're watching a series without subtitles and miss a few words.", "Best move?", ["Follow the stressed words and the situation, then rewatch if needed.", "Turn it off.", "Translate every word."], 0, "Meaning first."),
      ch("Which is best for an exam essay?", ["I am going to explain three reasons.", "I'm gonna explain three reasons.", "I wanna explain three reasons."], 0, "Full forms in formal writing."),
      say("What are you gonna do this weekend?", "Relaxed and fast: whaddaya-GONna-DO."),
    ],
  ],
  create: {
    prompts: [
      { text: "Watch or listen to one minute of a video, song or series in English. Write (45 words or more) three reduced forms or linked phrases you heard and their full forms, and what the speakers were talking about." },
      { universe: "screens", text: "Watch one minute of a streamer, YouTuber or series in English. Write (45 words or more) three reduced forms or linked phrases you heard, with their full forms, and what was happening." },
      { universe: "arts", text: "Listen to a song in English. Write (45 words or more) three reduced forms or linked phrases you heard, with their full forms, and what the song is about." },
    ],
    minWords: 45,
    checks: [
      { label: "Three reduced forms (gonna, wanna, gotta, didja, whatcha, kinda, lemme, gimme)", pattern: "\\b(gonna|wanna|gotta|didja|whatcha|kinda|lemme|gimme|dunno|ya)\\b", min: 3 },
      { label: "Their full forms (going to, want to, got to, did you, what are you…)", pattern: "\\b(going to|want to|got to|have to|did you|what are you|kind of|let me|give me|don't know|you)\\b", min: 3 },
    ],
    rubric: ["I matched each reduced form with its full form.", "I explained what the speakers were talking about.", "I used full forms in my own sentences."],
    model: "I watched one minute of a cooking video. The chef was making pancakes for her kids. She said 'I'm gonna show you', which means 'I'm going to show you'. Her son asked 'Can I help? I wanna try!', so 'wanna' means 'want to'. Later she said 'We gotta wait', which means 'We have got to wait'.",
  },
};

const wouldIf: NodePractice = {
  nodeId: "b1.would-in-the-if-clause",
  explain: "A very common mistake: putting 'would' in the if-part of a conditional. In Spanish we sometimes say 'si tuviera' or 'si hubiera', and learners translate it with 'would'. In English, 'would' goes in the result part, not after 'if'. Second conditional: If + past simple, would + verb ('If I had money, I would buy a bike'). Third conditional: If + had + past participle, would have + past participle ('If I had studied, I would have passed'). First conditional: If + present, will ('If it rains, we will stay home').",
  pattern: ["✗ If I would have money… → ✓ If I had money, I would…", "✗ If I would have known… → ✓ If I had known, I would have…", "✗ If it will rain… → ✓ If it rains, we will…", "would / will go in the result, not after 'if'"],
  steps: [
    [
      heard(E("01", "notice"), "What would the speaker do with more money?", ["Buy a new bike", "Travel", "Save it"], 0, "'If I had more money, I would buy a new bike.'"),
      heard(E("01", "notice"), "Which verb follows 'If I…' in the first sentence?", ["had", "would have", "will have"], 0, "If + past simple."),
      heard(E("01", "notice"), "What will they do if it rains?", ["Stay at home", "Go out", "Play football"], 0, "'If it rains tomorrow, we will stay at home.'"),
      ch("Where does 'would' go in a conditional?", ["In the result part", "After 'if'", "At the start"], 0, "Not after 'if'."),
      ch("Which is correct?", ["If I knew, I would tell you.", "If I would know, I would tell you.", "If I would knew, I tell you."], 0, "If + past, would + verb."),
    ],
    [
      ch("Why do Spanish speakers often say 'If I would have…'?", ["They translate 'si tuviera / si hubiera' word for word.", "It's correct in British English.", "It's more polite."], 0, "Transfer."),
      ch("Which is correct for the first conditional?", ["If it rains, we will stay home.", "If it will rain, we will stay home.", "If it would rain, we stay home."], 0, "If + present, will."),
      ctx("'If I had studied, I would have passed.'", "Where is 'would'?", ["Only in the result part", "In both parts", "Only after 'if'"], 0, "Correct third conditional."),
      ch("Which sentence has the mistake?", ["If I would be rich, I'd travel.", "If I were rich, I'd travel.", "I'd travel if I were rich."], 0, "No would after if."),
      ch("Choose: 'If she ___ the bus, she would arrive on time.'", ["took", "would take", "will take"], 0, "If + past simple."),
    ],
    [
      gap("If I", "you, I would apologise.", ["were", "was"], "If + were."),
      gap("If we", "known, we would have come.", ["had"], "If + had + past participle."),
      tr("Correct the sentence.", "If I would have time, I would help you.", ["If I had time, I would help you", "If I had time, I'd help you"], "If + had, would + help."),
      dict(E("01", "dict"), ["If I knew the answer, I would tell you", "If I knew the answer, I'd tell you"]),
      say("If I had more time, I'd learn the piano.", "No 'would' after IF; stress TIME and PIano."),
    ],
    [
      fix(["If I", "would have", "a car, I would drive to the coast."], 1, ["had"], "If + past simple."),
      fix(["If she", "would have studied,", "she would have passed."], 1, ["had studied,"], "If + had + past participle."),
      fix(["If it", "will be", "sunny tomorrow, we'll go to the park."], 1, ["is"], "First conditional: If + present."),
      fix(["If we", "would win", "the match, we would celebrate."], 1, ["won"], "If + past simple."),
      ch("Which is wrong?", ["If you would call me, I would answer.", "If you called me, I would answer.", "If you call me, I'll answer."], 0, "No would after if."),
    ],
    [
      ch("Best sentence for a story about a regret?", ["If I had left earlier, I wouldn't have missed the bus.", "If I would have left earlier, I wouldn't have missed the bus.", "If I would leave earlier, I wouldn't miss."], 0, "Correct third conditional."),
      ch("Best advice to a friend?", ["If I were you, I'd talk to her.", "If I would be you, I'd talk to her.", "If I will be you, I talk to her."], 0, "If I were you."),
      ctx("Your essay says: 'If governments would invest more, schools would improve.'", "Best correction?", ["If governments invested more, schools would improve.", "If governments will invest more, schools would improve.", "No change needed."], 0, "If + past simple."),
      ch("Which one is correct?", ["If I won the lottery, I would buy a house.", "If I would win the lottery, I would buy a house.", "If I will win the lottery, I would buy a house."], 0, "won … would."),
      say("If I had known, I would have come.", "Short form: If I'd known, I'd have come."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about three 'what ifs' in your life (45 words or more): one first conditional, one second and one third. Make sure 'would' or 'will' never comes after 'if'." },
      { universe: "screens", text: "Write three 'what ifs' about a game, film or series (45 words or more): first, second and third conditional. 'would' or 'will' never after 'if'." },
      { universe: "past", text: "Write three 'what ifs' about history (45 words or more): first, second and third conditional. 'would' or 'will' never after 'if'." },
    ],
    minWords: 45,
    checks: [
      { label: "Three if-sentences", pattern: "\\bif\\b", min: 3 },
      { label: "A result with would or will", pattern: "\\b(would|will|'d|'ll|won't|wouldn't)\\b", min: 3 },
    ],
    rubric: ["'would' and 'will' are only in the result part.", "Each conditional uses the right tense after 'if'.", "My 'what ifs' are clear and interesting."],
    model: "If it rains this weekend, I will stay home and watch films. If I had a dog, I would take it to the park every day. If I had studied harder last year, I would have passed my maths exam the first time. Next year, if I pass all my subjects, my parents will buy me a bike.",
  },
};

const despiteForward: NodePractice = {
  nodeId: "b1.despite-of-look-forward-to-verb",
  explain: "Two very common slips. First: 'despite' never takes 'of'. Say 'despite the rain', not 'despite of the rain' (in Spanish we say 'a pesar de'). You can also say 'in spite of', which does have 'of'. After despite, use a noun or -ing: 'despite feeling tired'. Second: in 'look forward to', 'to' is a preposition, not part of an infinitive, so it takes a noun or -ing: 'I'm looking forward to seeing you', not 'to see you'.",
  pattern: ["✗ despite of the rain → ✓ despite the rain / in spite of the rain", "despite + noun / -ing: despite feeling tired", "✗ look forward to see → ✓ look forward to seeing", "look forward to + noun: I'm looking forward to the holidays."],
  steps: [
    [
      heard(E("02", "notice"), "What did they do despite the rain?", ["Played the match", "Stayed home", "Went swimming"], 0, "'Despite the rain, we played the match.'"),
      heard(E("02", "notice"), "What form follows 'despite' in 'despite feeling tired'?", ["-ing", "to + verb", "of"], 0, "despite + -ing."),
      heard(E("02", "notice"), "What is the speaker looking forward to?", ["Seeing you next week", "The exam", "The rain"], 0, "'looking forward to seeing you next week'."),
      ch("Which is correct?", ["despite the rain", "despite of the rain", "despite to the rain"], 0, "No 'of'."),
      ch("Which is correct?", ["I'm looking forward to seeing you.", "I'm looking forward to see you.", "I'm looking forward see you."], 0, "to + -ing."),
    ],
    [
      ch("Why do Spanish speakers say 'despite of'?", ["They translate 'a pesar de'.", "It's correct in the US.", "It's more formal."], 0, "Transfer."),
      ch("Which phrase does take 'of'?", ["in spite of", "despite", "although"], 0, "in spite of the rain."),
      ch("'to' in 'look forward to' is…", ["a preposition, so it takes -ing or a noun", "part of the infinitive", "not necessary"], 0, "Preposition + -ing."),
      ch("Which is correct?", ["We're looking forward to the holidays.", "We're looking forward the holidays.", "We're looking forward for the holidays."], 0, "to + noun."),
      ch("Which is correct?", ["Despite being late, she smiled.", "Despite to be late, she smiled.", "Despite of being late, she smiled."], 0, "despite + -ing."),
    ],
    [
      gap("Despite", "tired, she finished the race. (feel)", ["feeling"], "despite + -ing."),
      gap("I look forward to", "from you. (hear)", ["hearing"], "to + -ing."),
      tr("Correct the sentence.", "Despite of the noise, I slept well.", ["Despite the noise, I slept well", "In spite of the noise, I slept well"], "Remove 'of' or use 'in spite of'."),
      dict(E("02", "dict"), ["I'm looking forward to seeing you next week", "I am looking forward to seeing you next week"]),
      say("Despite the rain, we're looking forward to the trip.", "Stress deSPITE, RAIN and TRIP."),
    ],
    [
      fix(["Despite of", "the traffic, we arrived on time."], 0, ["Despite", "In spite of"], "No 'of' after despite."),
      fix(["I'm looking forward", "to meet", "your family."], 1, ["to meeting"], "look forward to + -ing."),
      fix(["She passed", "despite to study", "very little."], 1, ["despite studying"], "despite + -ing."),
      fix(["We look forward", "to receive", "your reply."], 1, ["to receiving"], "look forward to + -ing."),
      ch("Which is wrong?", ["In spite the rain, we went out.", "In spite of the rain, we went out.", "Despite the rain, we went out."], 0, "in spite OF."),
    ],
    [
      ch("Best ending for a formal email?", ["I look forward to hearing from you.", "I look forward to hear from you.", "I look forward hear you."], 0, "Classic, correct."),
      ch("Best sentence for a match report?", ["Despite the heat, both teams played well.", "Despite of the heat, both teams played well.", "Despite to the heat, both teams played well."], 0, "No 'of'."),
      ctx("Texting a friend before the holidays.", "Best message?", ["Can't wait! Really looking forward to seeing you!", "Looking forward to see you!", "Looking forward for see you!"], 0, "to + -ing."),
      ch("Which sentence is completely correct?", ["Despite feeling nervous, I'm looking forward to performing.", "Despite of feeling nervous, I'm looking forward to perform.", "Despite feel nervous, I look forward perform."], 0, "Both patterns correct."),
      say("I look forward to hearing from you.", "Polite: stress FORward and HEARing."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short email to a friend you'll visit soon (45 words or more). Use 'despite' at least once (no 'of'!) and 'look forward to' + -ing at least once." },
      { universe: "screens", text: "Write a short post about a game or series you're waiting for (45 words or more). Use 'despite' once (no 'of') and 'look forward to' + -ing once." },
      { universe: "futures", text: "Write about a future event you're excited about (45 words or more). Use 'despite' once (no 'of') and 'look forward to' + -ing once." },
    ],
    minWords: 45,
    checks: [
      { label: "despite (or in spite of) used correctly", pattern: "\\b(despite\\s+(?!of\\b)\\w+|in spite of)\\b", min: 1 },
      { label: "look forward to + -ing or a noun", pattern: "\\blook(ing|s)?\\s+forward\\s+to\\s+(\\w+ing|the|my|your|our|this|next|it)\\b", min: 1 },
    ],
    rubric: ["I didn't write 'despite of'.", "After 'look forward to' I used -ing or a noun.", "My email sounds friendly and natural."],
    model: "Hi Carla! I'm really looking forward to visiting you in Medellín next month. Despite the long bus journey, I'm so excited. I'm also looking forward to trying your mum's arepas! Despite feeling a bit nervous about meeting your family, I know it'll be great. See you soon! Laura",
  },
};

const makeDo: NodePractice = {
  nodeId: "b1.make-vs-do-take",
  explain: "In Spanish, 'hacer' covers many actions, but English uses different verbs. 'take' a photo, a shower, a break, an exam. 'make' a mistake, a plan, a decision, a cake, noise, friends. 'do' homework, your best, exercise, the dishes, a favour. A useful (not perfect) rule: 'make' often means create something, 'do' often means activities and jobs. The best way is to learn each one as a chunk: 'take a photo', not 'make a photo'.",
  pattern: ["take: a photo · a shower · a break · an exam · a bus", "make: a mistake · a plan · a decision · a cake · noise · friends", "do: homework · your best · exercise · the dishes · a favour", "Learn each one as a chunk"],
  steps: [
    [
      heard(E("03", "notice"), "What did the speaker do a lot of on holiday?", ["Took photos", "Made cakes", "Did exercise"], 0, "'I took a lot of photos.'"),
      heard(E("03", "notice"), "What did the speaker make in the test?", ["A few mistakes", "A plan", "A decision"], 0, "'I made a few mistakes'."),
      heard(E("03", "notice"), "What do they suggest at the end?", ["Taking a break and making a plan", "Doing homework", "Making photos"], 0, "'Let's take a break and make a plan.'"),
      ch("Which is correct?", ["take a photo", "make a photo", "do a photo"], 0, "take a photo."),
      ch("Which is correct?", ["make a mistake", "do a mistake", "take a mistake"], 0, "make a mistake."),
    ],
    [
      ch("Which verb goes with 'homework'?", ["do", "make", "take"], 0, "do homework."),
      ch("Which verb goes with 'a decision'?", ["make", "do", "take (also British)"], 0, "make a decision."),
      ctx("'Can you do me a favour?'", "This means…", ["Can you help me with something?", "Can you make me a present?", "Can you take my photo?"], 0, "do a favour."),
      ch("Why is 'make a photo' a common mistake?", ["Spanish 'hacer una foto' uses one verb for many actions.", "It's correct in the UK.", "Photos are made in factories."], 0, "Transfer."),
      ch("Which is correct?", ["take a shower", "make a shower", "do a shower"], 0, "take a shower."),
    ],
    [
      gap("I need to", "my homework before dinner.", ["do", "finish"], "do homework."),
      gap("Let's", "a break. We've been studying for hours.", ["take", "have"], "take a break."),
      tr("Correct the sentence.", "I made a lot of photos and did a big mistake.", ["I took a lot of photos and made a big mistake"], "take photos; make a mistake."),
      dict(E("03", "dict"), ["I took a lot of photos on holiday"]),
      say("I did my best, but I made a few mistakes.", "Stress DID, BEST, MADE and MIStakes."),
    ],
    [
      fix(["Can I", "make", "a photo of you?"], 1, ["take"], "take a photo."),
      fix(["She", "did", "a terrible mistake."], 1, ["made"], "make a mistake."),
      fix(["I have to", "make", "the dishes tonight."], 1, ["do", "wash"], "do the dishes."),
      fix(["Please don't", "do", "so much noise."], 1, ["make"], "make noise."),
      ch("Which is wrong?", ["I make exercise every morning.", "I do exercise every morning.", "I exercise every morning."], 0, "do exercise."),
    ],
    [
      ch("Best sentence for a travel blog?", ["We took hundreds of photos and made lots of new friends.", "We made hundreds of photos and did lots of new friends.", "We did photos and took friends."], 0, "take photos; make friends."),
      ch("Best way to ask for help?", ["Could you do me a favour?", "Could you make me a favour?", "Could you take me a favour?"], 0, "do a favour."),
      ctx("Your teacher says you need to decide your project topic.", "Best reply?", ["OK, I'll make a decision by Friday.", "OK, I'll do a decision by Friday.", "OK, I'll take a decide by Friday."], 0, "make a decision."),
      ch("Which sentence is completely correct?", ["After I did my homework, I took a shower.", "After I made my homework, I made a shower.", "After I did my homework, I did a shower."], 0, "do homework; take a shower."),
      say("Let's take a break and make a plan.", "Stress BREAK and PLAN."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe a busy day (45 words or more). Use make, do and take with at least five different nouns correctly (take a photo, make a mistake, do homework, take a break, make a plan, do exercise…)." },
      { universe: "screens", text: "Describe a day making a video or stream (45 words or more). Use make, do and take with at least five nouns correctly (take photos, make a plan, make mistakes, take a break, do your best…)." },
      { universe: "arts", text: "Describe a day preparing for a show or exhibition (45 words or more). Use make, do and take with at least five nouns correctly." },
    ],
    minWords: 45,
    checks: [
      { label: "Five make / do / take collocations", pattern: "\\b(t(ake|ook|akes|aking|aken)\\s+(a\\s+|lots\\s+of\\s+|many\\s+|some\\s+|hundreds\\s+of\\s+)?(photos?|pictures?|shower|break|exam|bus|taxi)|ma(de|ke|kes|king)\\s+(a\\s+|lots\\s+of\\s+|some\\s+|a\\s+few\\s+|new\\s+|many\\s+)?(mistakes?|plans?|decisions?|cakes?|noise|friends|breakfast|dinner|lunch)|(do|did|does|doing|done)\\s+(my\\s+|your\\s+|our\\s+|the\\s+|some\\s+|a\\s+)?(homework|best|exercise|dishes|favour|favor|shopping))\\b", min: 5 },
    ],
    rubric: ["I used take, make and do with the right nouns.", "I didn't write 'make a photo' or 'do a mistake'.", "My day is easy to follow."],
    model: "Saturday was busy! In the morning I did some exercise and took a shower. Then I made breakfast for my family. After that, I did my homework, but I made a few mistakes in maths. In the afternoon we took a break and made a plan for the weekend. In the evening I took lots of photos of the sunset.",
  },
};

const falseFriends: NodePractice = {
  nodeId: "b1.false-friends-set-2",
  explain: "False friends look like Spanish words but mean something different. assist = help (not 'asistir' = attend). attend = go to (a class, a meeting). sensible = practical, with good judgement (not 'sensible' = sensitive). sensitive = easily hurt, or reacting to things. career = the jobs in your working life (not 'carrera' = degree). degree = what you study at university. realise = understand suddenly (not 'realizar' = do / carry out). carry out = do (a project, research).",
  pattern: ["assist = help · attend = asistir (go to)", "sensible = practical · sensitive = sensible (Spanish)", "career = working life · degree = carrera (Spanish)", "realise = darse cuenta · carry out = realizar"],
  steps: [
    [
      heard(E("04", "notice"), "What does the cousin do at the hospital?", ["She helps the doctors.", "She goes to every meeting.", "She studies medicine."], 0, "'She assists the doctors' = helps."),
      heard(E("04", "notice"), "Does she go to every meeting?", ["No", "Yes", "Only on Mondays"], 0, "'she doesn't attend every meeting'."),
      heard(E("04", "notice"), "What does 'sensible' mean in the clip?", ["She makes good, practical decisions.", "She cries easily.", "She is very sensitive."], 0, "'she always makes good decisions'."),
      ch("'Assist' means…", ["help", "attend", "watch"], 0, "False friend: not 'asistir'."),
      ch("'Attend a class' means…", ["go to a class", "help in a class", "pay attention"], 0, "attend = asistir."),
    ],
    [
      ch("Spanish 'Es muy sensible' (easily hurt) is…", ["She's very sensitive.", "She's very sensible.", "She's very sensational."], 0, "sensitive."),
      ch("Spanish 'Estudio una carrera de derecho' is…", ["I'm studying for a law degree.", "I'm studying a law career.", "I'm doing a law race."], 0, "degree."),
      ctx("'She has had a long career in teaching.'", "This means…", ["She has worked as a teacher for many years.", "She studied teaching for many years.", "She ran a long race."], 0, "career = working life."),
      ch("'I suddenly realised I'd lost my keys' means…", ["I suddenly understood.", "I suddenly did it.", "I suddenly bought them."], 0, "realise = darse cuenta."),
      ch("Spanish 'realizar un proyecto' is…", ["carry out a project", "realise a project", "attend a project"], 0, "carry out."),
    ],
    [
      gap("I", "all my classes last week. (go to)", ["attended"], "attend = go to."),
      gap("She's very", "; she cries at sad films. (easily affected)", ["sensitive"], "sensitive."),
      tr("Translate correctly.", "Estoy estudiando la carrera de medicina.", ["I'm studying medicine", "I am studying medicine", "I'm doing a degree in medicine", "I am doing a degree in medicine", "I'm studying for a medicine degree", "I'm studying for a degree in medicine"], "carrera (university) = degree, or just 'studying medicine'."),
      dict(E("04", "dict"), ["She's a very sensible person", "She is a very sensible person"]),
      say("I attended the meeting and assisted the teacher.", "Stress atTENDed and asSISTed."),
    ],
    [
      fix(["I always", "assist", "to my English class."], 1, ["attend", "go"], "attend / go to a class."),
      fix(["My little brother is very", "sensible;", "he gets upset easily."], 1, ["sensitive;"], "Easily upset = sensitive."),
      fix(["I'm in the third year of my", "career", "at university."], 1, ["degree"], "University course = degree."),
      fix(["We", "realised", "an experiment in class."], 1, ["carried out", "did"], "realizar = carry out / do."),
      ch("Which is correct?", ["I suddenly realised it was Sunday.", "I suddenly realized to do it was Sunday.", "I suddenly carried out it was Sunday."], 0, "realise = understand."),
    ],
    [
      ch("Best sentence for a university application?", ["I am in my second year of an engineering degree.", "I am in my second year of an engineering career.", "I am realising an engineering race."], 0, "degree."),
      ch("Best way to describe a calm, practical friend?", ["She's very sensible.", "She's very sensitive.", "She's very sensational."], 0, "sensible = practical."),
      ctx("Writing a CV: you helped at a summer camp.", "Best sentence?", ["I assisted the camp leaders with activities.", "I attended the camp leaders.", "I realised the activities."], 0, "assist = help."),
      ch("Which sentence is completely correct?", ["I attended the course and realised I wanted a career in design.", "I assisted the course and realised a career.", "I attended the career and realised a degree."], 0, "attend; realise; career."),
      say("I realised I wanted a career in science.", "Stress REalised, caREER and SCIence."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about someone in your family and their job (45 words or more). Use at least four of these words correctly: assist, attend, sensible, sensitive, career, degree, realise, carry out." },
      { universe: "futures", text: "Write about your future studies and career (45 words or more). Use at least four of these words correctly: assist, attend, sensible, sensitive, career, degree, realise, carry out." },
      { universe: "science", text: "Write about a scientist or a science project (45 words or more). Use at least four: assist, attend, sensible, sensitive, career, degree, realise, carry out." },
    ],
    minWords: 45,
    checks: [
      { label: "Four of the target words", pattern: "\\b(assist(s|ed|ing)?|attend(s|ed|ing)?|sensible|sensitive|careers?|degrees?|reali[sz](e|ed|es|ing)|carr(y|ied|ies|ying)\\s+out)\\b", min: 4 },
    ],
    rubric: ["I used each word with its English meaning, not the Spanish one.", "'degree' is for university and 'career' is for working life.", "My writing is clear."],
    model: "My aunt has had a long career as a vet. She did her degree in Bogotá, and she still attends conferences every year. Two students assist her at the clinic. She's a very sensible person, but she's also sensitive: she cries when an animal is sick. Last year she carried out research on street dogs.",
  },
};

export const B1_SOUNDS: NodePractice[] = [intonation, connected];
export const B1_ERRORS: NodePractice[] = [wouldIf, despiteForward, makeDo, falseFriends];
