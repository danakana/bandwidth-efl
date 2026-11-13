/* B1 Grammar. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/b1g-${n}-${k}.mp3`;

export const B1_GRAMMAR_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "Hi! I'm Laura. I've been learning English for five years, and I've been playing the guitar since I was ten. This month I've been practising every day, because my band has a concert soon. I'm tired, because I've been studying all morning!" },
  { file: X("01", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "I've been learning English for five years." },
  { file: X("02", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "When I arrived at the cinema, the film had already started. My friends had bought popcorn, but they had eaten it all! I had forgotten my phone at home, so I couldn't call them. What a night." },
  { file: X("02", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "When I arrived, the film had already started." },
  { file: X("03", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "If I had a million followers, I would make videos about science. If I lived by the sea, I'd go surfing every weekend. And if I could meet anyone, I'd meet the first woman in space." },
  { file: X("03", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "If I had more time, I would learn to cook." },
  { file: X("04", "notice"), voice: "3f6pec3wODJsjTqtcNI2", script: "This game was released in 2017. It was made by a small team in Canada. Today it is played by millions of people, and it is sold in more than fifty countries." },
  { file: X("04", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "The game was released in 2017." },
  { file: X("05", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "I met a new student today. She said she was from Medellín. She said she liked basketball. Then she asked me where I lived, and she asked if I wanted to play after school." },
  { file: X("05", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "She asked me where I lived." },
  { file: X("06", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Look, the lights are on in Pablo's house. He must be at home. His car isn't there, though, so his parents might be out. And that can't be his dog; Pablo doesn't have a dog!" },
  { file: X("06", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "He must be at home. That can't be true." },
  { file: X("07", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "My cousin, who lives in Cali, is a DJ. The club where he works is very popular. The songs that he plays are mostly salsa and reggaeton. His sister, who is a doctor, never goes to his shows!" },
  { file: X("07", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "My cousin, who lives in Cali, is a DJ." },
  { file: X("08", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "It's late, isn't it? I wish I had more time for my homework. You finished yours, didn't you? I wish I was as organised as you. You can help me, can't you?" },
  { file: X("08", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "I wish I had more time. It's late, isn't it?" },
  { file: X("09", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Although it was raining, we went to the park. However, we didn't stay long, because of the cold. Despite the weather, we had fun. It started to get dark, so we went home." },
  { file: X("09", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "Although it was raining, we went to the park." },
];

const ppc: NodePractice = {
  nodeId: "b1.present-perfect-continuous",
  explain: "Use the present perfect continuous for an activity that started in the past and is still happening now, or has just stopped. It focuses on the activity and how long. Form: have / has + been + -ing. 'I've been learning English for five years' (I still am). 'I'm tired because I've been running' (I just stopped). Use 'for' with a length of time (for two hours) and 'since' with a starting point (since 2020, since I was ten). Ask with 'How long have you been …?'",
  pattern: ["have / has + been + verb-ing", "I've been learning English for five years.", "She's been playing since she was ten.", "for + length of time · since + starting point", "How long have you been waiting?"],
  steps: [
    [
      heard(X("01", "notice"), "How long has Laura been learning English?", ["For five years", "Since she was ten", "For one month"], 0, "'I've been learning English for five years.'"),
      heard(X("01", "notice"), "Since when has she played the guitar?", ["Since she was ten", "For five years", "Since last month"], 0, "'since I was ten'."),
      heard(X("01", "notice"), "Why is she tired?", ["She has been studying all morning.", "She played a long concert last night.", "She didn't sleep at all last night."], 0, "'I've been studying all morning!'"),
      ch("'I've been learning English for five years.' Is she still learning?", ["Yes", "No", "We don't know"], 0, "The activity continues now."),
      ch("Which is the present perfect continuous?", ["She has been working.", "She is working.", "She worked."], 0, "has + been + -ing."),
    ],
    [
      ch("'for' or 'since'? ___ 2019", ["since", "for"], 0, "since + a starting point."),
      ch("'for' or 'since'? ___ three hours", ["for", "since"], 0, "for + a length of time."),
      ctx("Your mum sees your red eyes and you say: 'I've been watching videos.'", "What does this explain?", ["Why your eyes look tired now", "What you will do later", "A video from last year"], 0, "A recent activity with a result now."),
      ch("Which question asks about duration?", ["How long have you been waiting?", "When did you start to wait?", "Do you wait here every day?"], 0, "How long have you been + -ing?"),
      ch("Why 'I've been running' and not 'I run'?", ["It explains why I'm hot and tired right now.", "It's a habit I do every day after school.", "It's an action in the future."], 0, "Recent activity, visible result."),
    ],
    [
      gap("We have", "waiting for the bus for twenty minutes.", ["been"], "have been + -ing."),
      gap("She's been playing tennis", "she was eight.", ["since"], "since + starting point."),
      tr("Join the sentences with the present perfect continuous.", "I started reading this book three days ago. I'm still reading it.", ["I've been reading this book for three days", "I have been reading this book for three days"], "have been + reading + for three days."),
      dict(X("01", "dict"), ["I've been learning English for five years", "I have been learning English for five years"]),
      say("I've been waiting for twenty minutes.", "Link it: I've-been-WAITing."),
    ],
    [
      fix(["I", "am learning", "English since 2020."], 1, ["have been learning", "'ve been learning"], "With 'since', use the present perfect continuous."),
      fix(["She's been working here", "since", "five years."], 1, ["for"], "for + length of time."),
      fix(["How long", "are you waiting", "for the bus?"], 1, ["have you been waiting"], "How long have you been + -ing?"),
      ch("Which is correct?", ["They have been playing for two hours.", "They have playing for two hours.", "They been playing for two hours."], 0, "have + been + -ing."),
      ch("Which is wrong?", ["I have been knowing him for years.", "I have known him for years.", "I've been living here for years."], 0, "'know' is a state verb: use have known."),
    ],
    [
      ch("Your friend is very late. What do you text?", ["I've been waiting for half an hour!", "I wait for half an hour!", "I waited half an hour tomorrow!"], 0, "Duration up to now."),
      ch("Best answer to 'Why are your hands dirty?'", ["I've been fixing my bike.", "I fix my bike every year.", "I will fix my bike."], 0, "Recent activity, visible result."),
      ctx("A new classmate asks: 'How long have you been studying here?'", "Best answer?", ["For three years. Since sixth grade.", "Three years ago. In sixth grade.", "I study here tomorrow, since three years."], 0, "for / since answer."),
      ch("Which sentence is about a finished action, not an ongoing one?", ["I finished the book yesterday.", "I've been reading for an hour.", "She's been playing since nine."], 0, "Past simple for finished time."),
      say("How long have you been playing the guitar?", "Rising-falling question: How LONG have you been PLAYing?"),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short profile of yourself for a new class (45 words or more). Use the present perfect continuous at least twice, with 'for' and 'since'." },
      { universe: "screens", text: "Write about a game, series or creator you've been following (45 words or more). Use the present perfect continuous at least twice, with 'for' and 'since'." },
      { universe: "arts", text: "Write about a hobby like music, drawing or dance (45 words or more). Use the present perfect continuous at least twice, with 'for' and 'since'." },
    ],
    minWords: 45,
    checks: [
      { label: "Two present perfect continuous verbs (have / has been + -ing)", pattern: "\\b(have|has|'ve|'s)\\s+been\\s+\\w+ing\\b", min: 2 },
      { label: "'for' or 'since' with time", pattern: "\\b(for|since)\\s+(\\w+\\s+)?(years?|months?|weeks?|days?|hours?|minutes?|i\\s+was|\\d+|last|january|february|march|april|may|june|july|august|september|october|november|december|primary|sixth|seventh|ages)\\b", min: 1 },
    ],
    rubric: ["I used have/has + been + -ing correctly.", "I used 'for' with a length of time and 'since' with a start.", "My profile is clear and personal."],
    model: "Hi, I'm Mateo. I've been living in Bogotá since I was six, and I've been studying at this school for three years. I've been playing the drums since 2022, and right now I've been practising a lot because my band has a concert. I've also been learning to cook, but my family says I need more practice!",
  },
};

const pastPerfect: NodePractice = {
  nodeId: "b1.past-perfect",
  explain: "Use the past perfect to show that one past action happened before another past action. Form: had + past participle. 'When I arrived, the film had started' means the film started first, then I arrived. Compare: 'When I arrived, the film started' means they happened at the same time. Words like already, just, before, by the time and after often go with it. You don't need it when the order is already clear with 'before' or 'after', but it makes stories clearer.",
  pattern: ["had + past participle", "When I arrived, the film had already started. (film first)", "By the time we got there, everyone had left.", "I had never seen snow before that trip.", "Short form: I'd forgotten my phone."],
  steps: [
    [
      heard(X("02", "notice"), "What happened before the speaker arrived?", ["The film started.", "The cinema closed.", "Their friends left."], 0, "'the film had already started'."),
      heard(X("02", "notice"), "What happened to the popcorn?", ["The friends had eaten it all.", "The speaker dropped it.", "It was too expensive."], 0, "'they had eaten it all!'"),
      heard(X("02", "notice"), "Why couldn't the speaker call the friends?", ["They had forgotten their phone at home.", "There was no signal in the mountains.", "The friends didn't answer the phone."], 0, "'I had forgotten my phone at home'."),
      ch("'When I arrived, the film had started.' What happened first?", ["The film started.", "I arrived.", "Both at the same time."], 0, "Past perfect = earlier."),
      ch("Which is the past perfect?", ["had eaten", "has eaten", "was eating"], 0, "had + past participle."),
    ],
    [
      ch("Why use the past perfect in a story?", ["To show which past action happened first", "To talk about plans in the future", "To make a question in the past"], 0, "Order of past events."),
      ch("'When we got to the station, the train had left.' Did they catch it?", ["No", "Yes", "Maybe"], 0, "It left before they arrived."),
      ctx("Two sentences: A) 'When I got home, my brother cooked dinner.' B) 'When I got home, my brother had cooked dinner.'", "In which one was dinner ready when I arrived?", ["B", "A", "Both"], 0, "had cooked = finished before."),
      ch("'I had never seen the sea before that trip.' This means…", ["The trip was the first time I saw the sea.", "I saw the sea many times before the trip.", "I will see the sea on the next trip."], 0, "Experience before a past moment."),
      ch("Which word often goes with the past perfect?", ["already", "tomorrow", "now"], 0, "had already started."),
    ],
    [
      gap("By the time we arrived, the concert had", ".", ["finished", "ended", "started"], "had + past participle."),
      gap("She was sad because she", "lost her keys.", ["had"], "had + lost."),
      tr("Join the sentences using the past perfect and 'when'.", "The bus left. Then I got to the bus stop.", ["When I got to the bus stop, the bus had left", "When I got to the bus stop the bus had already left", "When I got to the bus stop, the bus had already left"], "The earlier action uses had left."),
      dict(X("02", "dict"), ["When I arrived, the film had already started", "When I arrived the film had already started"]),
      say("By the time we got there, everyone had left.", "Stress GOT, EVeryone and LEFT."),
    ],
    [
      fix(["When I arrived,", "the film has started", "already."], 1, ["the film had started"], "Past before past: had started."),
      fix(["She told me", "she had saw", "the video."], 1, ["she had seen"], "Past participle: seen."),
      fix(["I was hungry because", "I didn't ate", "breakfast."], 1, ["I hadn't eaten", "I had not eaten"], "Earlier past: hadn't eaten."),
      ch("Which is correct?", ["They had already gone when we called.", "They had already went when we called.", "They have already gone when we called."], 0, "had gone."),
      ch("Which is wrong?", ["I had visit Cartagena before.", "I had visited Cartagena before.", "I'd visited Cartagena before."], 0, "had + visited."),
    ],
    [
      ch("Best sentence to start a mystery story?", ["When the police arrived, the thief had already escaped.", "When the police arrive, the thief escapes from the house.", "The police arrived. The thief escaped. OK, the end."], 0, "Clear order, more drama."),
      ch("Your friend asks why you missed the bus. Best answer?", ["It had left when I got there.", "It leaves when I get there.", "It has left when I got there."], 0, "Past perfect for the earlier event."),
      ctx("You're telling a story about your first concert.", "Which sentence sounds most natural?", ["I had never been to a concert before, so I was nervous.", "I never have been to a concert before, so I am nervous.", "I had never be to a concert."], 0, "Experience before a past moment."),
      ch("When is the past perfect not necessary?", ["When 'before' or 'after' already shows the order", "Never; it's always necessary in English stories.", "In every sentence about the past"], 0, "'I ate after I arrived' is clear without it."),
      say("I'd forgotten my phone, so I couldn't call you.", "Short form: I'd forGOTten."),
    ],
  ],
  create: {
    prompts: [
      { text: "Tell a short story about a day when everything went wrong (45 words or more). Use the past perfect at least twice to show what had happened before." },
      { universe: "screens", text: "Tell the story of a game or episode with a surprise (45 words or more). Use the past perfect at least twice (had + past participle)." },
      { universe: "past", text: "Tell a short story about a famous discovery or event (45 words or more). Use the past perfect at least twice (had + past participle)." },
    ],
    minWords: 45,
    checks: [
      { label: "Two past perfect verbs (had + past participle)", pattern: "\\b(had|'d)\\s+(already\\s+|never\\s+|just\\s+|not\\s+)?\\w+(ed|en|t|wn|ne|ung|ought|aught|ft|lt|pt|de)\\b", min: 2 },
    ],
    rubric: ["The past perfect shows what happened first.", "I used had + past participle correctly.", "My story is easy to follow."],
    model: "Last Friday was a disaster. When I woke up, my alarm hadn't rung, because I had forgotten to charge my phone. I ran to the bus stop, but the bus had already left. When I finally got to school, the test had started. My teacher was kind, but I had never felt so stressed!",
  },
};

const second: NodePractice = {
  nodeId: "b1.second-conditional",
  explain: "Use the second conditional to imagine a situation that is not real now, or is very unlikely in the future. Form: If + past simple, would + base verb. 'If I had a million followers, I'd make science videos' (I don't have them). The past form does not mean past time here; it means 'not real'. With 'be', we often use 'were' for all people, especially in advice: 'If I were you, I'd study more.' Compare with the first conditional for real possibilities: 'If it rains, I'll stay home.'",
  pattern: ["If + past simple, would + base verb", "If I had more time, I'd learn to cook.", "If I were you, I'd talk to her. (advice)", "Result first: I'd travel if I had money.", "First conditional (real): If it rains, I'll stay home."],
  steps: [
    [
      heard(X("03", "notice"), "What would the speaker do with a million followers?", ["Make videos about science", "Buy a big house for the family", "Travel around the world for a year"], 0, "'I would make videos about science.'"),
      heard(X("03", "notice"), "Where would the speaker go surfing?", ["If they lived by the sea", "In Bogotá", "On holiday next year"], 0, "'If I lived by the sea, I'd go surfing.'"),
      heard(X("03", "notice"), "Who would the speaker meet?", ["The first woman in space", "A famous footballer", "Their favourite singer"], 0, "'I'd meet the first woman in space.'"),
      ch("'If I had a million followers…' Does the speaker have them?", ["No", "Yes", "Next week"], 0, "Second conditional = not real now."),
      ch("Which is the second conditional?", ["If I had time, I would help.", "If I have time, I will help.", "If I had had time, I would have helped."], 0, "past simple + would."),
    ],
    [
      ch("In 'If I lived in Paris…', the verb 'lived' talks about…", ["an imaginary present", "the past", "the future plan"], 0, "Past form, unreal meaning."),
      ch("Which gives advice?", ["If I were you, I'd apologise.", "If I was there, I'd apologise yesterday.", "I apologise if I'm you."], 0, "If I were you, I'd…"),
      ctx("A) 'If it rains, I'll stay home.' B) 'If it snowed in Cartagena, I'd be shocked.'", "Which one is unlikely?", ["B", "A", "Both are equally likely"], 0, "Second conditional for unlikely situations."),
      ch("What does 'I'd' mean in 'I'd buy a car'?", ["I would", "I had", "I did"], 0, "I'd + base verb = I would."),
      ch("Which order is also correct?", ["I would travel more if I had money.", "I travelled more if I would have money.", "I travel if I would have money."], 0, "Result first, no comma."),
    ],
    [
      gap("If I", "more money, I would buy a new phone.", ["had"], "If + past simple."),
      gap("If I were you, I", "talk to the teacher.", ["would", "'d"], "would + base verb."),
      tr("Write a second conditional sentence.", "I don't have a dog because I live in a small flat.", ["If I didn't live in a small flat, I would have a dog", "If I didn't live in a small flat, I'd have a dog", "I would have a dog if I didn't live in a small flat", "If I lived in a big house, I would have a dog", "If I lived in a big house, I'd have a dog"], "Imagine the opposite of the present."),
      dict(X("03", "dict"), ["If I had more time, I would learn to cook", "If I had more time, I'd learn to cook"]),
      say("If I were you, I'd ask for help.", "Stress WERE, YOU and HELP."),
    ],
    [
      fix(["If I", "would have", "a million dollars, I'd buy an island."], 1, ["had"], "No 'would' in the if-part."),
      fix(["If she lived closer,", "she will visit", "us more often."], 1, ["she would visit", "she'd visit"], "Second conditional result: would + base verb."),
      fix(["If I", "am", "you, I'd study tonight."], 1, ["were", "was"], "If I were you (unreal)."),
      ch("Which is correct?", ["If we had a car, we would drive to the beach.", "If we have a car, we would drive to the beach.", "If we had a car, we drive to the beach."], 0, "had … would drive."),
      ch("Which is wrong?", ["If I would know the answer, I would tell you.", "If I knew the answer, I would tell you.", "I'd tell you if I knew the answer."], 0, "No 'would' in the if-part."),
    ],
    [
      ch("Your friend can't decide whether to tell the truth. Best advice?", ["If I were you, I'd tell the truth.", "If I am you, I tell the truth.", "Tell the truth or no."], 0, "Polite advice."),
      ch("Best answer to 'What would you do if you won the lottery?'", ["I'd travel around South America.", "I travel around South America.", "I will travel yesterday."], 0, "would + base verb."),
      ctx("You're writing a social media post about dreams.", "Best caption?", ["If I could live anywhere, I'd choose Japan.", "If I can live anywhere, I chose Japan.", "Japan if live."], 0, "Second conditional for dreams."),
      ch("Which is a real plan (first conditional), not a dream?", ["If I finish early, I'll call you.", "If I were a bird, I'd fly home.", "If I had wings, I'd fly."], 0, "Real possibility."),
      say("If I could meet anyone, I'd meet my favourite writer.", "Stress COULD, ANYone and WRITer."),
    ],
  ],
  create: {
    prompts: [
      { text: "Answer this question (45 words or more): 'What would you do if you had one free year?' Use the second conditional at least three times." },
      { universe: "futures", text: "Imagine you were the president of your country for a day (45 words or more). Use the second conditional at least three times." },
      { universe: "science", text: "Imagine you could travel to any planet (45 words or more). Use the second conditional at least three times." },
    ],
    minWords: 45,
    checks: [
      { label: "Three second conditionals (If + past, would / 'd + verb)", pattern: "\\b(would|'d|could|might)\\s+(not\\s+)?(?!have\\b)\\w+\\b", min: 3 },
      { label: "An if-clause with a past verb", pattern: "\\bif\\s+(i|you|we|they|he|she|it|my|the)\\s+(\\w+\\s+)?(had|were|was|could|lived|won|went|did|didn't|knew|\\w+ed)\\b", min: 1 },
    ],
    rubric: ["The if-part uses the past simple (or were).", "The result uses would + base verb.", "My ideas are imaginative and clear."],
    model: "If I had one free year, I would travel around South America. First, I'd go to Peru, because I would love to see Machu Picchu. If I had enough money, I'd also visit Patagonia. I would take a lot of photos and I'd write a blog. If I were braver, I would even try skydiving!",
  },
};

const passive: NodePractice = {
  nodeId: "b1.passive-present-and-past",
  explain: "Use the passive when the action is more important than the person who did it, or when we don't know who did it. Form: be + past participle. Present: 'Millions of games are sold every year.' Past: 'The game was released in 2017.' If you want to say who did it, use 'by': 'It was made by a small team.' News, history and science texts use the passive a lot.",
  pattern: ["Present passive: am / is / are + past participle", "Past passive: was / were + past participle", "The game was released in 2017.", "It is played by millions of people.", "by + the person or thing that did it"],
  steps: [
    [
      heard(X("04", "notice"), "When was the game released?", ["In 2017", "In 2007", "Last year"], 0, "'This game was released in 2017.'"),
      heard(X("04", "notice"), "Who made the game?", ["A small team in Canada", "A big company in Japan", "One student"], 0, "'It was made by a small team in Canada.'"),
      heard(X("04", "notice"), "How many countries is it sold in?", ["More than fifty", "About five", "About fifteen"], 0, "'sold in more than fifty countries'."),
      ch("'The game was released in 2017.' This sentence is…", ["passive", "active", "a question"], 0, "was + past participle."),
      ch("Which is present passive?", ["It is played by millions.", "Millions play it.", "It was played by millions."], 0, "is + past participle."),
    ],
    [
      ch("Why use the passive in 'My bike was stolen'?", ["We don't know who did it.", "It's in the future.", "The bike did something."], 0, "Unknown person."),
      ch("In 'It was made by a small team', 'by' shows…", ["who did the action", "where it happened", "when it happened"], 0, "by + agent."),
      ctx("A history text says: 'The city was founded in 1538.'", "Why passive here?", ["The action and date matter more than the people", "Because the sentence is a question about the date", "Because the city founded itself"], 0, "Focus on the event."),
      ch("Which sentence is active?", ["A small team made the game.", "The game was made by a small team.", "The game is made in Canada."], 0, "Subject does the action."),
      ch("Which is past passive?", ["were built", "are built", "built"], 0, "were + past participle."),
    ],
    [
      gap("Spanish", "spoken in more than twenty countries.", ["is"], "Present passive: is + spoken."),
      gap("The first iPhone was", "in 2007.", ["released", "launched", "sold", "made"], "was + past participle."),
      tr("Make it passive.", "Someone stole my phone yesterday.", ["My phone was stolen yesterday"], "was + stolen; no need to say 'by someone'."),
      dict(X("04", "dict"), ["The game was released in 2017"]),
      say("Coffee is grown in many parts of Colombia.", "Stress COFfee, GROWN and COLombia."),
    ],
    [
      fix(["The bridge", "was build", "in 1950."], 1, ["was built"], "Past participle: built."),
      fix(["These phones", "is made", "in Korea."], 1, ["are made"], "Plural: are made."),
      fix(["The song was written", "from", "a famous singer."], 1, ["by"], "Agent: by."),
      ch("Which is correct?", ["The windows were broken in the storm.", "The windows was broken in the storm.", "The windows were broke in the storm."], 0, "were + broken."),
      ch("Which is wrong?", ["The cake was ate by my brother.", "The cake was eaten by my brother.", "My brother ate the cake."], 0, "eaten, not ate."),
    ],
    [
      ch("Best sentence for a news headline?", ["New park opened in city centre", "Someone opened a new park, I think", "The city opens park we"], 0, "Headlines often use passive."),
      ch("Your project is about chocolate. Best sentence?", ["Chocolate is made from cocoa beans.", "People make chocolate from cocoa beans, they do.", "Chocolate makes cocoa beans."], 0, "Process: present passive."),
      ctx("You tell a friend: 'My bag was stolen by someone.'", "How could you improve it?", ["Remove 'by someone': it adds nothing.", "Add 'by a person'.", "Make it active: 'Someone's bag stole me.'"], 0, "Leave out obvious or unknown agents."),
      ch("Which sentence sounds most natural?", ["This painting was painted by Botero.", "Botero was painted by this painting.", "This painting painted Botero."], 0, "Correct agent."),
      say("The game was made by a small team in Canada.", "Stress MADE, SMALL TEAM and CANada."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short fact file (45 words or more) about something made or grown in Colombia (coffee, flowers, emeralds…). Use the passive at least three times." },
      { universe: "screens", text: "Write a fact file about a famous game, app or film (45 words or more). Use the passive at least three times (was made, is played, were sold…)." },
      { universe: "past", text: "Write a fact file about a famous building or place (45 words or more). Use the passive at least three times (was built, is visited…)." },
    ],
    minWords: 45,
    checks: [
      { label: "Three passive verbs (is / are / was / were + past participle)", pattern: "\\b(is|are|was|were|isn't|aren't|wasn't|weren't)\\s+(also\\s+|still\\s+|now\\s+|often\\s+)?\\w+(ed|en|wn|t|ung|ne|de|ld|ght)\\b", min: 3 },
    ],
    rubric: ["I used be + past participle correctly.", "I used 'by' only when the person matters.", "My facts are clear and well organised."],
    model: "Colombian coffee is famous around the world. It is grown in the mountains, where the weather is perfect. The beans are picked by hand, and then they are dried in the sun. Coffee was first planted in Colombia in the 1700s. Today, it is sold in more than eighty countries.",
  },
};

const reported: NodePractice = {
  nodeId: "b1.reported-speech-statements-and-questions",
  explain: "Use reported speech to say what someone else said. The verb usually moves one step back in time: 'I'm tired' → She said she was tired. 'I live in Cali' → He said he lived in Cali. Pronouns and time words change too (I → she, today → that day). For questions, use 'asked' and normal word order, with no question mark: 'Where do you live?' → She asked me where I lived. For yes/no questions, use 'if' or 'whether': 'Do you like football?' → He asked if I liked football.",
  pattern: ["said (that) + subject + verb one step back", "'I am tired.' → She said she was tired.", "Wh- questions: asked + question word + subject + verb", "'Where do you live?' → She asked where I lived.", "Yes/no: asked if / whether: He asked if I liked football.", "say something · tell someone something"],
  steps: [
    [
      heard(X("05", "notice"), "Where did the new student say she was from?", ["Medellín", "Cali", "Bogotá"], 0, "'She said she was from Medellín.'"),
      heard(X("05", "notice"), "What did she say she liked?", ["Basketball", "Football", "Music"], 0, "'She said she liked basketball.'"),
      heard(X("05", "notice"), "What did she ask?", ["Where the speaker lived and if they wanted to play", "What time the class started that day at school", "If the speaker had a dog at home"], 0, "'she asked me where I lived, and she asked if I wanted to play'."),
      ch("'I'm tired,' said Ana. In reported speech:", ["Ana said she was tired.", "Ana said I'm tired.", "Ana said she is tire."], 0, "am → was; I → she."),
      ch("Which is a reported question?", ["He asked where I lived.", "He asked where do I live?", "Where do you live?"], 0, "Normal word order, no question mark."),
    ],
    [
      ch("Why does 'like' change to 'liked' in reported speech?", ["The verb moves one step back in time.", "Because the sentence is a question.", "Because the subject is 'she'."], 0, "Backshift."),
      ch("'Do you play the piano?' → He asked…", ["if I played the piano.", "do I play the piano.", "that I played the piano?"], 0, "Yes/no question → if."),
      ctx("Your teacher said: 'The test is on Friday.'", "How do you tell your friend?", ["She said the test was on Friday.", "She said the test is Friday?", "She told the test was on Friday."], 0, "said + was."),
      ch("Which is correct?", ["She told me she was busy.", "She said me she was busy.", "She told she was busy."], 0, "tell + person; say + no person."),
      ch("'Where is the station?' → She asked me…", ["where the station was.", "where was the station.", "where is the station?"], 0, "Subject before verb."),
    ],
    [
      gap("'I like pizza.' → He said he", "pizza.", ["liked"], "like → liked."),
      gap("'Are you ready?' → She asked", "I was ready.", ["if", "whether"], "Yes/no question → if / whether."),
      tr("Report the question.", "'What time does the film start?' Laura asked me.", ["Laura asked me what time the film started"], "asked + what time + the film started."),
      dict(X("05", "dict"), ["She asked me where I lived"]),
      say("He said he was from Cali and asked if I liked salsa.", "Stress SAID, CALI, ASKED and SALsa."),
    ],
    [
      fix(["She asked me", "where did I live."], 1, ["where I lived."], "Reported question: normal word order."),
      fix(["He", "said me", "that he was hungry."], 1, ["said", "told me", "said to me"], "say + (to someone): He said (to me) that… / He told me that…"),
      fix(["Tom asked", "do I like", "video games."], 1, ["if I liked", "whether I liked"], "Yes/no question → if + backshift."),
      ch("Which is correct?", ["She said that she had a new phone.", "She said that she has new phone.", "She said me that she had a new phone."], 0, "said that + had."),
      ch("Which is wrong?", ["He asked me what was my name.", "He asked me what my name was.", "He asked my name."], 0, "Subject before verb: what my name was."),
    ],
    [
      ch("Your friend missed the class. Best message?", ["The teacher said we had a test on Friday.", "The teacher said we have test Friday?", "The teacher told that test Friday."], 0, "Clear reported speech."),
      ch("Your mum asks what the doctor said. Best answer?", ["She said I needed to rest.", "She said I need rest?", "She told I need rest."], 0, "said + needed."),
      ctx("Telling a story about meeting a new friend.", "Which sounds most natural?", ["She asked me if I wanted to come to her party.", "She asked me do I want come to her party?", "She asked if I want to come her party."], 0, "if + backshift."),
      ch("Which is the most natural way to report 'Can you help me?'", ["He asked if I could help him.", "He asked can I help him.", "He said can you help me."], 0, "can → could; me → him."),
      say("She told me she was moving to Spain.", "Stress TOLD, MOVing and SPAIN."),
    ],
  ],
  create: {
    prompts: [
      { text: "Report a short conversation you had with someone new (45 words or more). Use 'said' or 'told' at least twice and 'asked' at least once." },
      { universe: "screens", text: "Report an interview with a streamer or actor you watched (45 words or more). Use 'said' or 'told' twice and 'asked' at least once." },
      { universe: "futures", text: "Report a conversation with a person about their job (45 words or more). Use 'said' or 'told' twice and 'asked' at least once." },
    ],
    minWords: 45,
    checks: [
      { label: "Two reported statements (said / told)", pattern: "\\b(said|told)\\b", min: 2 },
      { label: "A reported question (asked + if / where / what / how / when / why / who)", pattern: "\\basked\\s+(\\w+\\s+)?(if|whether|where|what|how|when|why|who|which)\\b", min: 1 },
    ],
    rubric: ["The verbs moved one step back where needed.", "My reported questions have normal word order.", "I used 'tell' with a person and 'say' without one."],
    model: "Yesterday I met a new girl at the gym. She said her name was Camila and told me she was from Pasto. She asked me how long I had been training there, and I said it was my first week. Then she asked if I wanted to join her running group. I said I would think about it.",
  },
};

const deduction: NodePractice = {
  nodeId: "b1.modals-of-deduction",
  explain: "Use modals of deduction to say how sure you are about something now. 'must' = I'm almost sure it's true: 'The lights are on. He must be at home.' 'can't' = I'm almost sure it's not true: 'That can't be his dog; he doesn't have one.' 'might', 'may' or 'could' = it's possible: 'His parents might be out.' Use the base verb after the modal, or 'be + -ing' for actions in progress: 'She must be sleeping.' Don't use 'mustn't' for deduction; it means 'it's not allowed'.",
  pattern: ["must + base verb = almost sure it's true", "can't + base verb = almost sure it's not true", "might / may / could = possible", "He must be at home. That can't be true. She might be busy.", "Action now: She must be sleeping.", "Not: mustn't (= not allowed)"],
  steps: [
    [
      heard(X("06", "notice"), "Why does the speaker think Pablo is at home?", ["The lights are on.", "His car is there.", "His dog is barking."], 0, "'the lights are on… He must be at home.'"),
      heard(X("06", "notice"), "What does the speaker think about Pablo's parents?", ["They might be out.", "They must be at home.", "They can't be out."], 0, "'his parents might be out'."),
      heard(X("06", "notice"), "Why can't it be Pablo's dog?", ["Pablo doesn't have a dog.", "The dog is too big.", "The dog is asleep."], 0, "'Pablo doesn't have a dog!'"),
      ch("'He must be at home' means the speaker is…", ["almost sure", "not sure at all", "sure it's false"], 0, "must = strong deduction."),
      ch("'That can't be true' means…", ["I'm almost sure it's false.", "It's not allowed to happen.", "It might be true, maybe."], 0, "can't = strong negative deduction."),
    ],
    [
      ch("Which shows the least certainty?", ["She might be at the gym.", "She must be at the gym.", "She can't be at the gym."], 0, "might = possible."),
      ch("Your friend hasn't eaten all day. You say:", ["You must be hungry!", "You can't be hungry!", "You mustn't be hungry!"], 0, "Logical conclusion: must."),
      ctx("Someone says: 'That's Lionel Messi at the bus stop in Tunja!'", "Best reaction?", ["It can't be him!", "It must be him!", "It mustn't be him!"], 0, "Very unlikely → can't."),
      ch("Why is 'He mustn't be at home' wrong for deduction?", ["mustn't means 'not allowed'", "mustn't is always correct", "It's a question"], 0, "Use can't for negative deduction."),
      ch("'She must be sleeping.' This is about…", ["an action happening now", "a habit she has every day", "an action in the past"], 0, "must be + -ing."),
    ],
    [
      gap("He's been running for an hour. He", "be tired.", ["must"], "Logical conclusion."),
      gap("She's only twelve. She", "be at university.", ["can't", "cannot"], "Impossible → can't."),
      tr("Rewrite with 'might'.", "Maybe Ana is at the library.", ["Ana might be at the library"], "Maybe … is → might be."),
      dict(X("06", "dict"), ["He must be at home. That can't be true", "He must be at home that can't be true"]),
      say("You must be joking!", "Stress MUST and JOKing; surprised tone."),
    ],
    [
      fix(["The phone is ringing.", "It must to be", "my mum."], 1, ["It must be"], "No 'to' after must."),
      fix(["He doesn't have a car,", "so that mustn't be", "his car."], 1, ["so that can't be"], "Negative deduction: can't."),
      fix(["I'm not sure.", "She must be", "at home or at school."], 1, ["She might be", "She may be", "She could be"], "Not sure → might / may / could."),
      ch("Which is correct?", ["They might be watching a film.", "They might watching a film.", "They might to be watching a film."], 0, "might + be + -ing."),
      ch("Which is wrong?", ["She can't to be serious.", "She can't be serious.", "She must be serious."], 0, "No 'to' after can't."),
    ],
    [
      ch("Your friend's light is off and she isn't answering. Best guess?", ["She might be asleep.", "She must asleep.", "She can be asleep yesterday."], 0, "Possible, not certain."),
      ch("Your classmate says he got 100% without studying. You say:", ["That can't be true!", "That mustn't be true!", "That might true!"], 0, "Disbelief: can't."),
      ctx("You find a wet umbrella by the door.", "Best deduction?", ["It must be raining outside.", "It can't be raining outside.", "It might raining outside."], 0, "Evidence → must."),
      ch("Best reply to 'I've been working for twelve hours'?", ["You must be exhausted!", "You can't be exhausted!", "You might exhausted!"], 0, "Logical conclusion."),
      say("It can't be him. He's in Spain.", "Stress CAN'T and SPAIN."),
    ],
  ],
  create: {
    prompts: [
      { text: "Look around your room or street and write about a mystery (45 words or more): a noise, an object, a person. Use must, can't and might at least once each." },
      { universe: "screens", text: "Write a detective note about a mystery in a game or series (45 words or more). Use must, can't and might at least once each." },
      { universe: "science", text: "Look at a strange photo from space or nature and guess what it is (45 words or more). Use must, can't and might at least once each." },
    ],
    minWords: 45,
    checks: [
      { label: "must + verb", pattern: "\\bmust\\s+(be|have|\\w+)\\b", min: 1 },
      { label: "can't + verb", pattern: "\\b(can't|cannot|can not)\\s+\\w+", min: 1 },
      { label: "might / may / could + verb", pattern: "\\b(might|may|could)\\s+\\w+", min: 1 },
    ],
    rubric: ["must, can't and might show different levels of certainty.", "There is no 'to' after the modals.", "My guesses use evidence."],
    model: "There's a strange noise in the kitchen. It can't be my mum, because she's at work. It might be my brother, but he usually sleeps until noon. There's a smell of toast, so someone must be making breakfast. Wait! The cat is on the table. It must be the cat!",
  },
};

const relatives: NodePractice = {
  nodeId: "b1.defining-vs-non-defining-relative-clause",
  explain: "Relative clauses give more information about a noun. Defining clauses tell us which person or thing we mean, and they have no commas: 'The songs that he plays are salsa.' Non-defining clauses add extra information about someone we already know, and they need commas: 'My cousin, who lives in Cali, is a DJ.' Use who for people, which for things, where for places, and whose for possession. In defining clauses you can use 'that' instead of who or which; in non-defining clauses you can't.",
  pattern: ["Defining (no commas): The club where he works is popular.", "Non-defining (commas): My cousin, who lives in Cali, is a DJ.", "who = people · which = things · where = places · whose = possession", "'that' only in defining clauses", "No 'that' after a comma"],
  steps: [
    [
      heard(X("07", "notice"), "Where does the cousin live?", ["In Cali", "In Medellín", "In Bogotá"], 0, "'My cousin, who lives in Cali, is a DJ.'"),
      heard(X("07", "notice"), "What kind of songs does he play?", ["Mostly salsa and reggaeton", "Mostly rock and pop songs", "Classical music and jazz"], 0, "'The songs that he plays are mostly salsa and reggaeton.'"),
      heard(X("07", "notice"), "What does his sister do?", ["She's a doctor.", "She's a DJ.", "She's a teacher."], 0, "'His sister, who is a doctor…'"),
      ch("'My cousin, who lives in Cali, is a DJ.' The part between commas is…", ["extra information", "information to say which cousin", "a question"], 0, "Non-defining = extra."),
      ch("Which word do we use for places?", ["where", "who", "which"], 0, "The club where he works."),
    ],
    [
      ch("'The students who passed got a prize.' Did all students get a prize?", ["No, only those who passed", "Yes, all of the students", "We don't know from the sentence"], 0, "Defining clause identifies which students."),
      ch("Which can use 'that'?", ["The phone that I bought is great.", "My phone, that I bought last year, is great.", "Both"], 0, "No 'that' in non-defining clauses."),
      ctx("A) 'My brother who lives in Spain is a chef.' B) 'My brother, who lives in Spain, is a chef.'", "Which suggests you have only one brother?", ["B", "A", "Both"], 0, "Commas = extra info about the only brother."),
      ch("Which word shows possession?", ["whose", "who", "which"], 0, "The girl whose phone broke."),
      ch("Choose the correct word: 'Bogotá, ___ is the capital, is very big.'", ["which", "where", "who"], 0, "Thing as subject → which."),
    ],
    [
      gap("That's the girl", "brother plays for Millonarios.", ["whose"], "Possession: whose."),
      gap("The café", "we met is closed now.", ["where"], "Place: where."),
      tr("Join the sentences with a non-defining relative clause.", "My sister is a doctor. She lives in Pasto.", ["My sister, who lives in Pasto, is a doctor", "My sister, who is a doctor, lives in Pasto"], "Use commas and who."),
      dict(X("07", "dict"), ["My cousin, who lives in Cali, is a DJ", "My cousin who lives in Cali is a DJ"]),
      say("The book that I'm reading is about space.", "No pauses: it's a defining clause."),
    ],
    [
      fix(["My mother,", "that", "is a nurse, works at night."], 1, ["who"], "Non-defining: who, not that."),
      fix(["This is the park", "which", "we play football."], 1, ["where", "in which"], "Place: where."),
      fix(["The man", "who his car", "was stolen called the police."], 1, ["whose car"], "Possession: whose."),
      ch("Which is correct?", ["Medellín, which is called the city of eternal spring, is beautiful.", "Medellín, that is called the city of eternal spring, is beautiful.", "Medellín which is called the city of eternal spring, is beautiful."], 0, "Commas + which."),
      ch("Which is wrong?", ["The film who I saw was great.", "The film that I saw was great.", "The film I saw was great."], 0, "who is for people."),
    ],
    [
      ch("Best sentence for a travel blog?", ["Cartagena, which is on the Caribbean coast, is full of colour.", "Cartagena that is on the Caribbean coast is full of colour, which.", "Cartagena, where is on the coast, colourful."], 0, "Extra info with commas."),
      ch("Best way to say which teacher you mean?", ["The teacher who gave us the test is ill.", "The teacher, who gave us the test, is ill.", "The teacher which gave us the test is ill."], 0, "Defining: no commas, who."),
      ctx("You're describing your favourite singer to a friend.", "Which sounds most natural?", ["Karol G, who is from Medellín, is my favourite singer.", "Karol G, that is from Medellín, is my favourite singer.", "Karol G which from Medellín is my favourite."], 0, "Non-defining with who."),
      ch("Which sentence gives extra, non-essential information?", ["My dog, which is ten, still loves running.", "The dog that bit me was huge.", "The dogs that live here are friendly."], 0, "Commas = extra."),
      say("That's the girl whose sister is a famous singer.", "Stress GIRL, SISter and FAMous."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe your family or friends (45 words or more). Use at least one defining clause (no commas) and one non-defining clause (with commas), and use who, which, where or whose." },
      { universe: "screens", text: "Describe characters from a series or game (45 words or more). Use one defining clause and one non-defining clause (with commas), with who, which, where or whose." },
      { universe: "past", text: "Describe a famous place in Colombia (45 words or more). Use one defining clause and one non-defining clause (with commas), with who, which, where or whose." },
    ],
    minWords: 45,
    checks: [
      { label: "A non-defining clause with commas (, who / , which / , where / , whose)", pattern: ",\\s*(who|which|where|whose)\\b", min: 1 },
      { label: "Two relative clauses in total (who, which, where, whose, that)", pattern: "\\b(who|which|where|whose)\\b|\\b\\w+\\s+that\\s+(i|you|we|they|he|she|my|is|are|was|were|has|have)\\b", min: 2 },
    ],
    rubric: ["Extra information has commas; identifying information doesn't.", "I chose who, which, where and whose correctly.", "My description is clear and interesting."],
    model: "My grandmother, who is seventy-five, lives in a small town where everyone knows everyone. She has a garden that is full of roses. Her neighbour, whose son is a famous cyclist, visits her every afternoon. The thing that I love most about her house is the smell of fresh bread in the morning.",
  },
};

const wishTags: NodePractice = {
  nodeId: "b1.wish-past-question-tags",
  explain: "Two useful patterns. First, 'wish + past simple' talks about a present situation you'd like to be different: 'I wish I had more time' (I don't have enough). With 'be', 'were' is more correct, but 'was' is common in speech: 'I wish I were taller.' Second, question tags are short questions at the end of a sentence. Positive sentence → negative tag: 'It's late, isn't it?' Negative sentence → positive tag: 'You don't like coffee, do you?' Use the same auxiliary as the sentence (be, do, can, have…). With a falling voice, you're checking; with a rising voice, you're really asking.",
  pattern: ["wish + past simple = I want the present to be different", "I wish I had more time. I wish I lived by the sea.", "I wish I were / was taller.", "Positive → negative tag: It's late, isn't it?", "Negative → positive tag: You can't swim, can you?", "Past simple: You finished it, didn't you?"],
  steps: [
    [
      heard(X("08", "notice"), "What does the speaker wish?", ["To have more time for homework", "To be taller than his brother", "To live by the sea one day"], 0, "'I wish I had more time for my homework.'"),
      heard(X("08", "notice"), "Who is more organised?", ["The friend", "The speaker", "Nobody"], 0, "'I wish I was as organised as you.'"),
      heard(X("08", "notice"), "What does the speaker want from the friend?", ["Help", "Money", "A game"], 0, "'You can help me, can't you?'"),
      ch("'I wish I had more time.' Does the speaker have enough time?", ["No", "Yes", "Tomorrow"], 0, "wish + past = the opposite of now."),
      ch("'It's late, isn't it?' The tag is…", ["isn't it?", "It's late", "late"], 0, "Question tag."),
    ],
    [
      ch("'I wish I lived by the sea.' The verb 'lived' refers to…", ["now (imaginary)", "the past", "the future"], 0, "Past form, present meaning."),
      ch("Which tag is correct? 'You like pizza, ___?'", ["don't you", "do you", "isn't it"], 0, "Positive → negative; do."),
      ctx("'You haven't finished, have you?'", "Is the sentence positive or negative?", ["Negative, so the tag is positive", "Positive, so the tag is negative", "It's a statement only"], 0, "Negative → positive tag."),
      ch("When the voice falls on the tag, the speaker…", ["is checking something they believe", "really doesn't know the answer", "is angry with the listener"], 0, "Falling = checking."),
      ch("Which tag fits? 'She can swim, ___?'", ["can't she", "doesn't she", "isn't she"], 0, "Same auxiliary: can."),
    ],
    [
      gap("I wish I", "speak French.", ["could"], "wish + could for abilities."),
      gap("You went to the party, didn't", "?", ["you"], "Past simple → didn't you?"),
      tr("Rewrite with 'I wish'.", "I don't have a dog, and I'm sad about it.", ["I wish I had a dog"], "wish + past simple."),
      dict(X("08", "dict"), ["I wish I had more time. It's late, isn't it?", "I wish I had more time it's late isn't it"]),
      say("It's a beautiful day, isn't it?", "Fall on ISN'T it: you're checking, not asking."),
    ],
    [
      fix(["I wish I", "have", "a bigger room."], 1, ["had"], "wish + past simple."),
      fix(["You're from Cali,", "aren't it?"], 1, ["aren't you?"], "Same subject: you."),
      fix(["He doesn't play tennis,", "doesn't he?"], 1, ["does he?"], "Negative → positive tag."),
      ch("Which is correct?", ["They've seen it, haven't they?", "They've seen it, didn't they?", "They've seen it, haven't it?"], 0, "Same auxiliary: have."),
      ch("Which is wrong?", ["I wish I can fly.", "I wish I could fly.", "I wish I were a bird."], 0, "wish + could."),
    ],
    [
      ch("You want your friend to agree that the film was great. Best?", ["That film was amazing, wasn't it?", "That film was amazing, was it?", "That film is amazing, isn't he?"], 0, "Positive → negative tag."),
      ch("Your friend wants to be better at maths. What does she say?", ["I wish I were better at maths.", "I wish I am better at maths.", "I wish I will be better at maths."], 0, "wish + were."),
      ctx("Meeting someone new at a party.", "Friendly way to start a chat?", ["Great music, isn't it?", "The music is great, is it?", "Music great, no?"], 0, "Tags help small talk."),
      ch("Which sounds most natural?", ["You don't know where my keys are, do you?", "You don't know where my keys are, don't you?", "You know not my keys, do you?"], 0, "Negative → positive."),
      say("I wish I lived closer to the beach.", "Stress WISH, LIVED and BEACH."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short message to a friend about your week (45 words or more). Use 'I wish' at least twice and at least two question tags." },
      { universe: "screens", text: "Write a short chat between two fans after a big match or episode (45 words or more). Use 'I wish' at least twice and two question tags." },
      { universe: "futures", text: "Write about your dreams for the future (45 words or more). Use 'I wish' at least twice and two question tags." },
    ],
    minWords: 45,
    checks: [
      { label: "Two wishes (I wish + past)", pattern: "\\bwish\\s+(i|we|you|he|she|they|my|it)\\s+(\\w+\\s+)?(had|were|was|could|lived|knew|didn't|did|\\w+ed)\\b", min: 2 },
      { label: "Two question tags (…, isn't it? / …, do you?)", pattern: ",\\s*(is|isn't|are|aren't|was|wasn't|were|weren't|do|don't|does|doesn't|did|didn't|can|can't|have|haven't|has|hasn't|will|won't|would|wouldn't)\\s+(i|you|he|she|it|we|they|there)\\s*\\?", min: 2 },
    ],
    rubric: ["My wishes use the past simple (or could / were).", "My tags use the same auxiliary and the opposite form.", "My message sounds friendly and natural."],
    model: "Hi Sara! This week was crazy, wasn't it? We had three exams. I wish I had more free time, because I miss my guitar. I also wish I lived closer to school, so I could sleep more. You're coming to the concert on Saturday, aren't you? I wish I could buy a new jacket for it!",
  },
};

const linkers: NodePractice = {
  nodeId: "b1.linkers-of-contrast-and-reason",
  explain: "Linkers connect ideas. For contrast: 'although' + a full sentence ('Although it was raining, we went out'), 'however' to start a new sentence ('However, we didn't stay long'), and 'despite' + a noun or -ing ('Despite the rain', 'Despite feeling tired'). For reason: 'because' + a full sentence ('because it was cold') and 'because of' + a noun ('because of the cold'). For result: 'so' ('It got dark, so we went home'). Never say 'despite of'.",
  pattern: ["Contrast: although + sentence · however, + new sentence · despite + noun / -ing", "Although it was raining, we went to the park.", "Despite the weather, we had fun.", "Reason: because + sentence · because of + noun", "Result: so", "Not: despite of"],
  steps: [
    [
      heard(X("09", "notice"), "What did they do although it was raining?", ["They went to the park.", "They stayed home.", "They went to the cinema."], 0, "'Although it was raining, we went to the park.'"),
      heard(X("09", "notice"), "Why didn't they stay long?", ["Because of the cold", "Because of the rain", "Because they were hungry"], 0, "'because of the cold'."),
      heard(X("09", "notice"), "Why did they go home?", ["It started to get dark.", "It was raining.", "They were bored."], 0, "'It started to get dark, so we went home.'"),
      ch("'Although' shows…", ["contrast", "reason", "time"], 0, "Two ideas that are surprising together."),
      ch("'because of' is followed by…", ["a noun", "a full sentence", "a verb"], 0, "because of the cold."),
    ],
    [
      ch("Which linker starts a new sentence with a comma after it?", ["However,", "Although", "Despite"], 0, "However, we didn't stay long."),
      ch("Which is correct?", ["Despite the rain, we played.", "Despite of the rain, we played.", "Despite it rained, we played."], 0, "despite + noun."),
      ctx("'I was tired, so I went to bed early.'", "What does 'so' show?", ["The result", "The reason", "A contrast"], 0, "so = result."),
      ch("Which one means the same as 'Although it was cold, we swam'?", ["Despite the cold, we swam.", "Because of the cold, we swam.", "It was cold, so we swam."], 0, "despite = although (+ noun)."),
      ch("'because' or 'because of'? ___ the traffic", ["because of", "because"], 0, "Noun → because of."),
    ],
    [
      gap("", "it was expensive, I bought the ticket.", ["Although", "Though", "Even though"], "Contrast + full sentence."),
      gap("We stayed inside because", "the storm.", ["of"], "because of + noun."),
      tr("Rewrite using 'despite'.", "Although she was ill, she went to school.", ["Despite being ill, she went to school", "Despite her illness, she went to school", "Despite feeling ill, she went to school"], "despite + -ing or noun."),
      dict(X("09", "dict"), ["Although it was raining, we went to the park", "Although it was raining we went to the park"]),
      say("Although it was late, we kept talking.", "Small pause after LATE."),
    ],
    [
      fix(["Despite of", "the rain, the match continued."], 0, ["Despite"], "No 'of' after despite."),
      fix(["I stayed home", "because", "the rain."], 1, ["because of"], "because of + noun."),
      fix(["The film was long.", "Although,", "it was really good."], 1, ["However,"], "New sentence + comma → However,"),
      ch("Which is correct?", ["Although he studied, he failed.", "Although he studied, but he failed.", "Despite he studied, he failed."], 0, "Don't use although + but."),
      ch("Which is wrong?", ["Despite to be tired, she ran.", "Despite being tired, she ran.", "Although she was tired, she ran."], 0, "despite + -ing, not 'to be'."),
    ],
    [
      ch("Best sentence for an opinion paragraph?", ["Although phones are useful, they can be distracting.", "Phones useful, distracting, so although.", "Phones are useful because of distracting."], 0, "Clear contrast."),
      ch("Best way to explain why the trip was cancelled?", ["The trip was cancelled because of the bad weather.", "The trip was cancelled despite the bad weather.", "The trip was cancelled although the weather."], 0, "Reason."),
      ctx("You're writing a review of a restaurant.", "Best sentence?", ["The food was delicious. However, the service was slow.", "The food was delicious, however the service slow.", "However the food, slow service."], 0, "However starts a new sentence."),
      ch("Which sentence shows a result?", ["It was sunny, so we went to the beach.", "Although it was sunny, we stayed in.", "Despite the sun, we stayed in."], 0, "so = result."),
      say("Despite the rain, we had a great time.", "Stress deSPITE, RAIN and GREAT."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short review of a trip, party or event (45 words or more). Use at least three different linkers: although, however, despite, because (of), so." },
      { universe: "screens", text: "Write a short review of a film, game or series (45 words or more). Use at least three different linkers: although, however, despite, because (of), so." },
      { universe: "science", text: "Write about a science experiment or class project (45 words or more). Use at least three different linkers: although, however, despite, because (of), so." },
    ],
    minWords: 45,
    checks: [
      { label: "Three different linkers (although, however, despite, because, so)", pattern: "\\b(although|though|however|despite|because|so)\\b", min: 3 },
      { label: "A contrast linker (although, however, despite)", pattern: "\\b(although|though|however|despite)\\b", min: 1 },
    ],
    rubric: ["Contrast linkers show surprising ideas together.", "despite has no 'of'; because of has a noun after it.", "My review gives a clear opinion."],
    model: "Last weekend we went to a music festival in the park. Although the tickets were expensive, it was worth it. The bands were amazing. However, the queues for food were very long. Despite the heat, everyone was dancing. We left early because of the traffic, so we missed the last band.",
  },
};

export const B1_GRAMMAR: NodePractice[] = [ppc, pastPerfect, second, passive, reported, deduction, relatives, wishTags, linkers];
