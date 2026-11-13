/* B2+ Grammar. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, say, tr } from "./helpers";

const A = (n: string, k: "notice" | "dict") => `p/b2pg-${n}-${k}.mp3`;

export const B2P_GRAMMAR_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: A("01", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Never have I seen a crowd like that. Not only did the band play for three hours, but they also came back for two encores. And rarely does a drummer get a standing ovation, but this one did." },
  { file: A("01", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "Not only did she win, but she also broke the record." },
  { file: A("02", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "It was only when I got home that I realised I'd lost my keys. What I needed was a spare set, and the person who had one was my neighbour. All I wanted, at that point, was to sit down." },
  { file: A("02", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "What I need is a long holiday." },
  { file: A("03", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Are you coming to the match on Saturday? I hope so. Mateo is, and so is his sister. If not, we'll save you a seat anyway. I'd love to see you there." },
  { file: A("03", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "I think so, but if not, I'll call you." },
  { file: A("04", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "It's half past eleven. It's time we left, honestly. And I'd rather you didn't post that photo of me, if you don't mind. It's high time we all got some sleep." },
  { file: A("04", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "I'd rather you didn't tell anyone." },
  { file: A("05", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "The committee recommends that every student be given a laptop. It is essential that the scheme start before January, and the head teacher has insisted that no student be left out." },
  { file: A("05", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "It is essential that everyone be informed." },
];

const inversion: NodePractice = {
  nodeId: "b2p.inversion-introduction",
  explain: "After some negative or limiting words at the start of a sentence, English swaps the subject and auxiliary, like a question: Never have I seen… Not only did she win… Rarely does it snow here. Only then did I understand. Use it for drama and emphasis, mostly in speeches, stories and formal writing. If there's no auxiliary, add do/does/did: She won → Not only did she win. Don't use it in casual chat: it sounds theatrical.",
  pattern: ["Never / Rarely / Seldom + auxiliary + subject: Never have I seen…", "Not only + auxiliary + subject…, but … also: Not only did she win, but she also…", "Only then / Only when… + auxiliary + subject: Only then did I realise…", "No auxiliary? Add do/does/did: She left → Hardly had she left / Not only did she leave"],
  steps: [
    [
      heard(A("01", "notice"), "How does the speaker feel about the concert?", ["Amazed: it was exceptional", "Bored", "Disappointed by the drummer"], 0, "'Never have I seen a crowd like that' = emphasis."),
      heard(A("01", "notice"), "'Rarely does a drummer get a standing ovation.' This means…", ["It almost never happens.", "It happens every concert.", "Drummers don't like ovations."], 0, "Rarely = almost never."),
      ch("Which sentence uses inversion correctly?", ["Never have I tasted anything so good.", "Never I have tasted anything so good.", "Never I tasted anything so good."], 0, "Auxiliary (have) before subject (I)."),
      ch("'Not only did she win…' Why 'did'?", ["The verb 'won' has no auxiliary, so we add did, like a question.", "It's a past perfect form, like 'had won'.", "It's a mistake; it should be 'won'."], 0, "She won → did she win."),
      ch("Where are you most likely to hear inversion?", ["A speech, story or formal report", "A quick text message to a friend", "Ordering food in a café"], 0, "It's dramatic and formal."),
    ],
    [
      ch("'Rarely do we see such talent.' What's the normal word order version?", ["We rarely see such talent.", "We see rarely such talent.", "Rarely we see such talent."], 0, "Without inversion, rarely goes before the main verb."),
      ch("Why might a speaker choose inversion?", ["For emphasis and drama", "Because it's more polite", "To ask a question"], 0, "It makes the negative idea stand out."),
      ch("'Only when I got home did I notice.' When did they notice?", ["When they got home, not before", "Before they got home", "Never; they didn't notice"], 0, "Only when… = not until."),
      ch("Is 'Never have I seen' a question?", ["No. It looks like question order but it's a statement.", "Yes, it's a question about what you've seen.", "Only if it has a question mark."], 0, "No question mark."),
      ctx("A friend texts: 'Never have I been so hungry lol'.", "The effect is…", ["playfully dramatic", "very formal", "a mistake"], 0, "Inversion in casual chat = jokey drama."),
    ],
    [
      tr("Rewrite starting with the word given.", "I have never seen such a mess.", ["Never have I seen such a mess"], "Never + have + I.", "Never"),
      tr("Rewrite starting with the words given.", "She won the race and she also broke the record.", ["Not only did she win the race, but she also broke the record", "Not only did she win the race but she also broke the record", "Not only did she win the race, she also broke the record"], "Not only + did + subject…, but … also.", "Not only"),
      tr("Rewrite starting with the word given.", "We rarely get snow in Bogotá.", ["Rarely do we get snow in Bogotá", "Rarely do we get snow in Bogota"], "Rarely + do + we.", "Rarely"),
      dict(A("01", "dict"), ["Not only did she win, but she also broke the record", "Not only did she win but she also broke the record"]),
      say("Never have I seen a crowd like that.", "Stress NEVer and CROWD."),
    ],
    [
      fix(["Never", "I have", "felt so nervous."], 1, ["have I"], "Inversion: auxiliary before subject."),
      fix(["Not only", "she sang,", "but she also played guitar."], 1, ["did she sing,", "did she sing"], "Add did and use the base form: did she sing."),
      fix(["Rarely", "we see", "such kindness."], 1, ["do we see"], "Rarely + do + we + see."),
      ch("Which is wrong?", ["Only then I understood.", "Only then did I understand.", "I only understood then."], 0, "Only then + did + I."),
      ch("'Hardly had I arrived when it started to rain.' Is this correct?", ["Yes: Hardly + had + subject… when", "No, it should be 'Hardly I had arrived'", "No, 'hardly' can't start a sentence"], 0, "Hardly / No sooner + past perfect inversion."),
    ],
    [
      ch("Which opening is best for a dramatic school speech?", ["Never before have we faced a challenge like this.", "We never faced a challenge like this before, kind of.", "Never we have faced a challenge."], 0, "Correct and powerful."),
      ch("Your friend asks 'Did you like the film?' Best reply?", ["Yeah, I loved it!", "Never have I enjoyed a film more, my friend.", "Not only did I like it, but…"], 0, "Inversion in casual chat sounds odd, unless you're joking."),
      ch("Which sentence is most emphatic?", ["Not only did they lose, but they also forgot the trophy.", "They lost the match and also forgot the trophy.", "They lost. Also, the trophy was forgotten."], 0, "Not only… but also stresses both."),
      ch("How many inversions should a 200-word essay have?", ["One or two, at key moments", "One in every sentence", "None, ever"], 0, "Overuse kills the effect."),
      say("Not only did she win, but she also broke the record.", "Rise on WIN, fall on RECord."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write the opening of a speech about an event you'll never forget (60 words or more). Use at least two inversions (Never have I…, Not only did…, Rarely…, Only then…)." },
      { universe: "screens", text: "Write a dramatic review of a game or series (60 words or more) using at least two inversions." },
      { universe: "past", text: "Write a dramatic paragraph about a historical moment (60 words or more) using at least two inversions." },
    ],
    minWords: 60,
    checks: [
      { label: "Two inversions (Never have…, Not only did…, Rarely do…, Only then did…, Hardly had…)", pattern: "\\b(never|rarely|seldom|hardly|not only|only then|only when|little|no sooner|under no circumstances)\\b[^.!?]{0,30}?\\b(have|has|had|do|does|did|was|were|is|are|will|would|can|could)\\s+(i|you|he|she|it|we|they|the|my|our|this|anyone|no one)\\b", min: 2 },
    ],
    rubric: ["Each inversion has the auxiliary before the subject.", "I used inversion only where I wanted emphasis.", "My paragraph reads like a speech, not a list."],
    model: "Never have I felt as proud as I did on the night of our final concert. Not only did we play every song without a mistake, but the whole school also stood up and sang with us. Rarely does a room full of teenagers go completely silent, yet it did when our singer started the last song. Only then did I realise how much we had grown.",
  },
};

const cleft: NodePractice = {
  nodeId: "b2p.cleft-sentences-for-emphasis",
  explain: "A cleft sentence splits one idea into two parts to put the spotlight on one element. It + be + focus + that/who: It was only later that I realised. What-clefts: What I need is a holiday. All-clefts: All I want is some sleep (= only this). The reason why… is that…, The person who… was… You built basic clefts at B2; here you use them to control emphasis and contrast in speaking and writing.",
  pattern: ["It + be + focus + that…: It was Ana who solved it.", "What + subject + verb + is/was…: What I need is time.", "All + subject + verb + is…: All I want is to sleep.", "The thing / reason / person… + is…: The reason I left is that…"],
  steps: [
    [
      heard(A("02", "notice"), "When did the speaker realise they had lost their keys?", ["Only when they got home", "At school", "The next morning"], 0, "'It was only when I got home that I realised…'"),
      heard(A("02", "notice"), "Who had a spare set?", ["The neighbour", "The speaker's mum", "Nobody"], 0, "'the person who had one was my neighbour'."),
      ch("Which is a cleft sentence?", ["It was Mateo who broke the window.", "Mateo broke the window yesterday.", "The window broke in the storm."], 0, "It + was + focus + who."),
      ch("'What I need is a holiday.' What is emphasised?", ["a holiday", "I", "need"], 0, "The new information comes after 'is'."),
      ch("'All I want is some sleep' means…", ["I want only sleep, nothing more.", "I want everything, including sleep.", "I want to sleep all day."], 0, "All = the only thing."),
    ],
    [
      ch("'It was Ana, not Luis, who scored.' The sentence corrects…", ["who scored", "when they scored", "what they scored"], 0, "Clefts are great for contrast."),
      ch("Which is more emphatic?", ["What annoys me is the noise.", "The noise really annoys me."], 0, "The what-cleft builds up to 'the noise'."),
      ch("'It wasn't until midnight that they arrived.' They arrived…", ["at midnight, later than expected", "before midnight, earlier than expected", "they didn't arrive at all"], 0, "It wasn't until = only at that time."),
      ch("In 'The reason I left is that I was tired', what follows 'is'?", ["a that-clause with the reason", "a question about the reason", "an -ing form of the verb"], 0, "The reason… is that…"),
      ctx("A teacher says: 'It's not the grade that worries me, it's your attitude.'", "The teacher's main concern is…", ["your attitude", "your grade", "both equally"], 0, "Contrast: not X… it's Y."),
    ],
    [
      tr("Rewrite starting with the words given.", "I only realised later.", ["It was only later that I realised"], "It + was + only later + that.", "It was"),
      tr("Rewrite starting with the word given.", "I need a long holiday.", ["What I need is a long holiday"], "What + I + need + is.", "What"),
      tr("Rewrite starting with the word given.", "I just want to go home.", ["All I want is to go home", "All I want to do is go home", "All I want to do is to go home"], "All + I + want + is.", "All"),
      dict(A("02", "dict"), ["What I need is a long holiday"]),
      gap("It was my grandmother", "taught me to cook.", ["who", "that"], "It + was + person + who/that."),
    ],
    [
      fix(["What I need", "it is", "more time."], 1, ["is"], "What-cleft: What I need is… (no 'it')."),
      fix(["It was", "Carla which", "found the answer."], 1, ["Carla who", "Carla that"], "For people, use who or that."),
      fix(["All what I want", "is", "a quiet weekend."], 0, ["All I want"], "All I want (no 'what')."),
      ch("Which is wrong?", ["The reason is because I was ill.", "The reason is that I was ill.", "The reason I left is that I was ill."], 0, "The reason is that… ('because' repeats the idea)."),
      ch("Which is correct?", ["It was in 2019 that we moved.", "It was in 2019 when that we moved.", "It was 2019 that in we moved."], 0, "It + was + time phrase + that."),
    ],
    [
      ch("You want to correct a rumour that YOU ate the cake. Best?", ["It wasn't me who ate the cake; it was my brother.", "I didn't eat the cake, really, I promise.", "The cake was eaten by someone."], 0, "The cleft makes the contrast clear."),
      ch("Which opening makes a stronger presentation hook?", ["What surprised me most was how quickly it spread.", "It spread quickly, which surprised me.", "Quickly it spread."], 0, "The what-cleft creates suspense."),
      ch("Which is most natural in a quick chat?", ["I just need a nap.", "What it is that I need is a nap.", "It is a nap that is what I need."], 0, "Don't stack clefts."),
      ch("When are clefts most useful?", ["To emphasise, contrast or correct information", "In every sentence you write or say", "Only in questions"], 0, "Use them when something needs the spotlight."),
      say("It was only later that I realised what had happened.", "Stress ONly LATer."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about a moment when you misunderstood something (60 words or more). Use at least two cleft sentences (It was… that, What I…, All I…)." },
      { universe: "science", text: "Explain a common myth about science and correct it (60 words or more) using at least two cleft sentences." },
      { universe: "arts", text: "Describe what makes your favourite song or artwork special (60 words or more) using at least two cleft sentences." },
    ],
    minWords: 60,
    checks: [
      { label: "Two cleft sentences (It was… that/who, What I… is/was, All I… is/was, The reason… is that)", pattern: "\\b(it (was|is|wasn'?t|isn'?t)[^.!?]{1,40}\\b(that|who)\\b|what (i|we|you|he|she|they|surprised|annoys|matters|worries)[^.!?]{0,30}\\b(is|was)\\b|all (i|we|you|he|she|they) [a-z]+[^.!?]{0,15}\\b(is|was)\\b|the reason[^.!?]{0,30}\\b(is|was) that)", min: 2 },
    ],
    rubric: ["Each cleft puts the spotlight on one idea.", "I used who for people and that for things.", "I didn't use a cleft in every sentence."],
    model: "For years I thought my brother didn't like me. It was only when I found an old notebook that I understood the truth. What he had written in it was a list of things he wanted to teach me: how to ride a bike, how to swim, how to make arepas. All I could do was laugh, then call him.",
  },
};

const ellipsis: NodePractice = {
  nodeId: "b2p.ellipsis-and-substitution",
  explain: "Fluent speakers avoid repeating words. Substitution replaces them: so / not (I hope so. I'm afraid not.), one / ones (the red one), do / does / did (She plays, and so do I). Ellipsis leaves them out: I'd love to (come). If not, … (If you aren't coming). So / Neither + auxiliary + subject agrees: So do I. Neither can she. This is what makes speech and writing sound natural rather than robotic.",
  pattern: ["I hope so / I think so · I hope not / I'm afraid not", "So + aux + subject (agree with +): So do I · So is his sister", "Neither / Nor + aux + subject (agree with −): Neither can I", "I'd love to · If so, … / If not, … · the blue one / the new ones"],
  steps: [
    [
      heard(A("03", "notice"), "'I hope so.' What does the speaker hope?", ["That the listener is coming to the match", "That it won't rain later in the afternoon", "That Mateo will win the race"], 0, "so = that you're coming."),
      heard(A("03", "notice"), "'Mateo is, and so is his sister.' His sister is…", ["also coming to the match", "not coming", "playing in the match"], 0, "So is his sister = his sister is coming too."),
      ch("'I'd love to.' What has been left out?", ["the verb from the invitation (e.g. come)", "nothing; the sentence is complete", "the subject of the sentence"], 0, "Ellipsis after 'to'."),
      ch("'Is it going to rain?' 'I'm afraid not.' Meaning?", ["I'm afraid it isn't going to rain.", "I'm scared of the rain and the thunder.", "Yes, it's going to rain."], 0, "not replaces a negative clause."),
      ch("'Which jacket? The blue one.' 'One' replaces…", ["jacket", "blue", "which"], 0, "one = a countable noun already mentioned."),
    ],
    [
      ch("'I can't swim.' Agreeing reply?", ["Neither can I.", "So can I.", "Neither I can."], 0, "Negative → Neither + aux + I."),
      ch("'I love mango.' Agreeing reply?", ["So do I.", "So I do.", "Neither do I."], 0, "Present simple → do."),
      ch("'She's been to Cartagena.' 'So have I.' The speaker…", ["has also been to Cartagena", "hasn't been there yet", "wants to go there one day"], 0, "So + have + I."),
      ch("'If so, we'll leave early.' 'If so' means…", ["if that is true", "if that isn't true", "so that it happens"], 0, "so replaces the earlier clause."),
      ch("Why do we use ellipsis and substitution?", ["To avoid repetition and sound natural", "To be more formal", "Because it's required in questions"], 0, "Repeating everything sounds robotic."),
    ],
    [
      gap("'Will it be sunny tomorrow?' 'I hope", ".'", ["so"], "I hope so."),
      gap("'I didn't understand the homework.' 'Neither", "I.'", ["did"], "Past simple → did."),
      gap("'Do you want the big pizza or the small", "?'", ["one"], "one = pizza."),
      dict(A("03", "dict"), ["I think so, but if not, I'll call you", "I think so but if not I'll call you", "I think so, but if not, I will call you"]),
      say("So do I. Neither can she. I'd love to.", "Short and natural."),
    ],
    [
      fix(["'I'm tired.'", "'So I am.'"], 1, ["'So am I.'", "So am I."], "So + auxiliary + subject."),
      fix(["'I don't like horror films.'", "'Me neither do I.'"], 1, ["'Neither do I.'", "Neither do I.", "'Me neither.'", "Me neither."], "Neither do I, or just Me neither."),
      fix(["'Are you coming?'", "'I think yes.'"], 1, ["'I think so.'", "I think so."], "Spanish 'creo que sí' → I think so."),
      ch("'Is he coming?' Which reply is wrong?", ["I don't hope.", "I hope not.", "I don't think so."], 0, "I hope not (not 'I don't hope')."),
      ch("'Do you want to come?' Which reply is wrong?", ["I'd love.", "I'd love to.", "I'd love to come."], 0, "Keep 'to': I'd love to."),
    ],
    [
      ch("In a debate, someone says 'We should ban phones.' You disagree politely. Best?", ["I'm not sure I'd agree. If we did, students would just hide them.", "I'm not sure I'd agree that we should ban phones because if we banned phones…", "No."], 0, "Ellipsis keeps it crisp."),
      ch("Which reply sounds most natural?", ["'Coming tonight?' 'I'd love to!'", "'Coming tonight?' 'I would love to come tonight to the party.'", "'Coming tonight?' 'Love.'"], 0, "Natural, not robotic, not too short."),
      ch("In a formal report, which is best?", ["Some students passed; others did not.", "Some students passed; others didn't pass the exam.", "Some passed, others nah."], 0, "Ellipsis works in formal writing too."),
      ctx("Your friend: 'I'm so done with exams.'", "Which reply shows you feel the same?", ["So am I!", "So do I!", "Neither am I!"], 0, "be → am."),
      say("I hope so. If not, we'll save you a seat.", "Stress HOPE and SEAT."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short chat between two friends making weekend plans (60 words or more). Use at least three of: I hope so/not, I think so/not, So do I / Neither can I, I'd love to, If so / If not, the … one." },
      { universe: "screens", text: "Write a short chat between two gamers deciding what to play (60 words or more), using at least three substitution or ellipsis phrases." },
    ],
    minWords: 60,
    checks: [
      { label: "Three substitution or ellipsis phrases (I hope so, I think not, So do I, Neither can I, I'd love to, If so, If not, the red one…)", pattern: "\\b(i (hope|think|guess|suppose|believe) (so|not)|i'?m afraid (so|not)|(so|neither|nor) (do|does|did|am|is|are|was|were|have|has|had|can|could|will|would) (i|you|he|she|we|they|mine)|i'?d (love|like) to[.!,?]|if (so|not),|(the|a) [a-z]+ ones?\\b|me (too|neither))", min: 3 },
    ],
    rubric: ["My chat sounds natural, not robotic.", "So/Neither replies use the right auxiliary.", "I used 'I think so', not 'I think yes'."],
    model: "Ana: Are you free on Saturday?\nTomás: I think so. Why?\nAna: There's a free concert in the park. I'm going with Lucía.\nTomás: I'd love to! Is it in the big park or the small one?\nAna: The big one. I can't stay late, though.\nTomás: Neither can I. If it rains, are we still going?\nAna: I hope not! If not, let's get pizza instead.",
  },
};

const unreal: NodePractice = {
  nodeId: "b2p.unreal-past-it-s-time-would-rather",
  explain: "Some expressions use a past form to talk about the present or future, because the situation is not real yet. It's (high/about) time + subject + past simple: It's time we left (= we should leave now, and we're late). Would rather + subject + past simple: I'd rather you didn't post that (= please don't). With the same subject, use the infinitive: I'd rather stay home. It's time to go. Spanish uses the subjunctive here (Es hora de que nos vayamos; Preferiría que no lo publicaras): English uses the past.",
  pattern: ["It's time / high time / about time + subject + past: It's time we went.", "It's time + to-infinitive (no subject): It's time to go.", "Would rather + other subject + past: I'd rather you didn't.", "Would rather + base form (same subject): I'd rather stay."],
  steps: [
    [
      heard(A("04", "notice"), "What does the speaker think they should do?", ["Leave now", "Stay longer", "Post a photo"], 0, "'It's time we left.'"),
      heard(A("04", "notice"), "What does the speaker ask the listener not to do?", ["Post a photo of them", "Leave early", "Turn off the music"], 0, "'I'd rather you didn't post that photo.'"),
      ch("'It's time we left.' When should they leave?", ["Now", "Yesterday", "Never"], 0, "Past form, present meaning."),
      ch("'I'd rather you didn't tell anyone.' This is…", ["a polite request not to tell anyone", "a story about something in the past", "a question about a secret"], 0, "Would rather + you + past = polite request."),
      ch("'It's high time you cleaned your room.' The speaker feels…", ["you're late doing it; you should have done it already", "it's a good time to clean, but there's no hurry", "you already cleaned it"], 0, "High time / about time = criticism."),
    ],
    [
      ch("Why the past form in 'It's time we went'?", ["It shows an unreal or not-yet situation, not past time.", "It happened yesterday, in the past.", "It's a mistake; it should be 'go'."], 0, "Like 'If I were you…'"),
      ch("'I'd rather stay home.' Who will stay home?", ["The speaker", "Someone else", "Nobody"], 0, "Same subject → base form."),
      ch("'I'd rather you stayed home.' Who will stay home?", ["The listener", "The speaker", "Both"], 0, "Other subject → past."),
      ch("Which is more polite?", ["I'd rather you didn't smoke here.", "Don't smoke here, please, it's bad.", "You can't smoke here."], 0, "Would rather softens a request."),
      ch("'It's about time!' when a bus finally arrives means…", ["It's late; finally!", "It's early.", "What time is it?"], 0, "About time = impatience."),
    ],
    [
      tr("Rewrite with the words given.", "We should go home now. It's late.", ["It's time we went home", "It is time we went home", "It's time we went home now"], "It's time + we + past.", "It's time"),
      tr("Rewrite with the words given.", "Please don't post that photo.", ["I'd rather you didn't post that photo", "I would rather you didn't post that photo", "I would rather you did not post that photo"], "Would rather + you + didn't.", "I'd rather you"),
      gap("It's high time the government", "something about pollution.", ["did"], "High time + subject + past."),
      dict(A("04", "dict"), ["I'd rather you didn't tell anyone", "I would rather you didn't tell anyone"]),
      gap("I'd rather", "at home tonight, if you don't mind.", ["stay", "eat"], "Same subject → base form."),
    ],
    [
      fix(["It's time", "we go", "to bed."], 1, ["we went"], "It's time + subject + past simple."),
      fix(["I'd rather", "you don't", "call me after ten."], 1, ["you didn't"], "Would rather + other subject + past."),
      fix(["I'd rather", "to walk", "than take the bus."], 1, ["walk"], "Would rather + base form (no 'to')."),
      ch("Which is wrong?", ["It's time that we leave.", "It's time we left.", "It's time to leave."], 0, "Past form after It's time + subject."),
      ch("Spanish: 'Preferiría que vinieras mañana.' Best English?", ["I'd rather you came tomorrow.", "I'd rather you come tomorrow.", "I'd prefer you would come tomorrow."], 0, "Subjunctive in Spanish → past in English."),
    ],
    [
      ch("Your little brother has been on his phone for five hours. Best?", ["It's high time you put that phone down.", "It's time you put down maybe the phone, sort of.", "Put the phone."], 0, "High time = firm criticism."),
      ch("A classmate wants to share your essay with others. You'd prefer they didn't. Most polite?", ["I'd rather you didn't share it, if that's OK.", "Don't share my essay with anyone, OK?", "I'd rather not you share it, if that's OK."], 0, "Soft but clear."),
      ch("Which is most natural when you're happy to leave?", ["Right, time to go!", "It's high time we went, which is a criticism.", "I would rather that we left."], 0, "Simple and friendly."),
      ctx("Your teacher says: 'It's about time someone asked that question.'", "The teacher thinks the question is…", ["important and overdue", "silly and not important", "too early to discuss"], 0, "About time = finally."),
      say("It's time we left. I'd rather you didn't post that.", "Stress TIME and DIDn't."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a message to your family or flatmates about something that needs to change at home (60 words or more). Use It's (high/about) time + past at least once and would rather at least once." },
      { universe: "futures", text: "Write a short opinion post: what should your city change now? (60 words or more). Use It's (high) time + past and would rather." },
    ],
    minWords: 60,
    checks: [
      { label: "It's (high / about) time + subject + past", pattern: "\\bit'?s (high |about )?time (we|you|they|he|she|i|the|people|someone|everyone|our)\\b", min: 1 },
      { label: "would rather / 'd rather", pattern: "\\b(would rather|'d rather)\\b", min: 1 },
    ],
    rubric: ["After 'It's time + subject' I used the past.", "After 'I'd rather' + same subject, I used the base form.", "My message is firm but polite."],
    model: "Hi everyone! I think it's high time we organised the kitchen. Every morning I spend ten minutes looking for a clean cup. I'd rather we made a simple plan than argued about it again. Maybe each of us could take one day a week? Also, Dad, I'd rather you didn't leave your shoes in the hall. It's time we all helped a bit more.",
  },
};

const subjunctive: NodePractice = {
  nodeId: "b2p.subjunctive-formal",
  explain: "In formal English, after verbs like recommend, suggest, insist, demand, propose and expressions like It is essential / vital / important that…, we use the base form of the verb for every subject: The committee recommends that every student be given a laptop. It is essential that she attend. Negative: that he not be late. It looks wrong to many learners ('she attend'?) but it's correct and common in official writing. In everyday British English, should + base form is also fine: It is essential that she should attend.",
  pattern: ["recommend / suggest / insist / demand / propose + that + subject + base form", "It is essential / vital / important / crucial + that + subject + base form", "Every subject the same: that he be, that she attend, that they go", "Negative: that he not be late · Informal alternative: that he should attend"],
  steps: [
    [
      heard(A("05", "notice"), "What does the committee recommend?", ["That every student be given a laptop", "That students buy their own laptops", "That laptops be banned"], 0, "'recommends that every student be given a laptop'."),
      heard(A("05", "notice"), "When must the scheme start?", ["Before January", "In January", "Next year"], 0, "'essential that the scheme start before January'."),
      ch("'It is essential that he attend.' Is 'attend' (not 'attends') correct?", ["Yes, it's the formal subjunctive.", "No, it should be 'attends'.", "Only in questions."], 0, "Base form for every subject."),
      ch("Where are you most likely to see the subjunctive?", ["Official letters, reports, rules", "Text messages to friends and family", "Song lyrics"], 0, "It's formal."),
      ch("'The teacher insisted that he be on time.' Meaning?", ["She strongly demanded he be punctual.", "He was always on time for class.", "She asked if he was on time."], 0, "insist that + base form."),
    ],
    [
      ch("Which verbs often trigger the subjunctive?", ["recommend, suggest, insist, demand", "like, love, hate, enjoy", "go, come, leave, arrive"], 0, "Verbs of advice and demand."),
      ch("'It's vital that she not miss the deadline.' Where does 'not' go?", ["Before the base verb: not miss", "After the verb: miss not", "With do: doesn't miss"], 0, "that she not miss."),
      ch("Which is the informal British alternative?", ["It's essential that she should attend.", "It's essential that she attended.", "It's essential that she will attend."], 0, "should + base form."),
      ch("Why does Spanish help here?", ["Spanish also uses a special form: Es esencial que asista.", "Spanish has no subjunctive at all, so it can't help.", "It doesn't help at all."], 0, "Same idea, simpler form in English."),
      ch("'We propose that the meeting be postponed.' The meeting…", ["should happen later", "already happened", "was cancelled"], 0, "be postponed = passive subjunctive."),
    ],
    [
      gap("The doctor recommended that he", "more water.", ["drink"], "Base form, not 'drinks'."),
      gap("It is essential that every student", "informed before Friday.", ["be"], "be, not 'is'."),
      tr("Rewrite in formal style with the words given.", "The coach said: 'You must all arrive by eight.'", ["The coach insisted that we all arrive by eight", "The coach insisted that they all arrive by eight", "The coach insisted that everyone arrive by eight"], "insisted that + subject + base form.", "insisted that"),
      dict(A("05", "dict"), ["It is essential that everyone be informed", "It's essential that everyone be informed"]),
      gap("We propose that the meeting", "postponed until Monday.", ["be"], "Passive subjunctive: that the meeting be postponed."),
    ],
    [
      fix(["It is essential", "that she attends", "every session."], 1, ["that she attend", "that she should attend"], "Base form after 'essential that'."),
      fix(["The manager demanded", "that he is", "present."], 1, ["that he be", "that he should be"], "Subjunctive: be."),
      fix(["They recommended", "him to take", "a break."], 1, ["that he take", "that he should take"], "Recommend that + subject + base form (not recommend + object + to)."),
      ch("Which is wrong?", ["I suggest you to apply early.", "I suggest that you apply early.", "I suggest applying early."], 0, "Suggest + that-clause or -ing, not + object + to."),
      ch("Which is correct and formal?", ["It is vital that the report be finished today.", "It is vital that the report is being finished today.", "It is vital the report to be finished."], 0, "that + subject + be."),
    ],
    [
      ch("You're writing a formal proposal to your head teacher. Best?", ["We recommend that the library be open until six.", "We think the library should be open till six, yeah.", "Library open till six pls."], 0, "Formal register."),
      ch("You're texting a friend. Best?", ["You should really come early.", "It is essential that you be early.", "We insist that you arrive."], 0, "The subjunctive sounds stiff in casual chat."),
      ch("Which is most suitable for school rules?", ["It is essential that all students wear a helmet.", "Wear a helmet, guys!", "It's essential that all students wears a helmet."], 0, "Formal and correct."),
      ch("A friend writes 'I suggest that he goes'. Is it OK in everyday English?", ["It's common in everyday British English, but formal writing prefers 'that he go'.", "It's always wrong, in any kind of English, formal or informal.", "It's the only correct form."], 0, "Register matters."),
      say("The committee recommends that every student be given a laptop.", "Formal and clear; stress EVery and LAPtop."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short formal proposal to your school about one change (70 words or more). Use the subjunctive at least twice (recommend / suggest / insist / propose that…, It is essential / vital that…)." },
      { universe: "science", text: "Write formal safety rules for a school science lab (70 words or more), using the subjunctive at least twice." },
      { universe: "futures", text: "Write a formal proposal to your city council about the environment (70 words or more), using the subjunctive at least twice." },
    ],
    minWords: 70,
    checks: [
      { label: "Two subjunctive structures (recommend/suggest/insist/propose/demand that…, It is essential/vital/important that…)", pattern: "\\b(recommend|recommends|recommended|suggest|suggests|suggested|insist|insists|insisted|propose|proposes|proposed|demand|demands|demanded|essential|vital|important|crucial|necessary) that\\b", min: 2 },
      { label: "A formal opening (We are writing / I am writing / This proposal…)", pattern: "\\b(we are writing|i am writing|this proposal|the purpose of|we would like to propose)\\b", min: 1 },
    ],
    rubric: ["After 'that' I used the base form (be, attend, have).", "No contractions or slang.", "My proposal gives at least one reason."],
    model: "We are writing to propose a change to the school timetable. At present, students have only ten minutes for lunch, which is not enough time to eat properly. We recommend that the lunch break be extended to forty minutes. It is also essential that students have access to clean drinking water during this time. Finally, we suggest that the new timetable start next term, so that families have time to prepare.",
  },
};

export const B2P_GRAMMAR: NodePractice[] = [inversion, cleft, ellipsis, unreal, subjunctive];
