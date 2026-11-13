/**
 * A2 Midpoint and Gate. Original texts written for Bandwidth EFL.
 * Listening audio: ElevenLabs AI voices, in the public `listening` bucket.
 * Choice options are written answer-first; the player shuffles them.
 */
import { ch, gap } from "../practice/helpers";
import type { BandAssessment } from "./types";

export const A2_ASSESSMENT_CLIPS: { file: string; voice: string; script: string }[] = [
  { file: "p/a2mid-l1.mp3", voice: "QW1sSL71Pw5oHbFDen25",
    script: "Hi Tomás, it's Mum. I'm at the supermarket. Is there any milk at home? And how many eggs do we have? I'm going to make a cake tonight. Oh, and please do your homework before I get home. See you at six!" },
  { file: "p/a2mid-l2.mp3", voice: "ideEOMYLgcyF9rr94ycz",
    script: "Last Saturday, I went to the zoo with my class. We took the bus at eight o'clock. My favourite animal was the giraffe. It was taller than the trees! We had lunch in the park, and then we visited the reptile house. I didn't like the snakes." },
  { file: "p/a2gate-l1.mp3", voice: "tPDVQaZ6fdDCUmYpHyYd",
    script: "Hello, everyone. Welcome to the summer sports camp. Every day, we start at nine o'clock. In the morning, you can play football or basketball. In the afternoon, we go swimming. You have to bring a towel and a water bottle. You don't have to bring lunch; we give you lunch here. If you feel sick, please tell a teacher." },
  { file: "p/a2gate-l2.mp3", voice: "MAy1fRIg5hTqbhiwOUyh",
    script: "Excuse me, how do I get to the train station? Go straight on and turn left at the supermarket. Then walk for two minutes. The station is opposite the cinema. Is it far? No, it's about ten minutes on foot. Thank you very much! You're welcome." },
];

export const A2_MIDPOINT: BandAssessment = {
  band: "A2",
  kind: "midpoint",
  title: "A2 Midpoint",
  story: "Halfway through A2. A short check across all four skills, so any gaps show up now.",
  bar: 70,
  reading: [{
    id: "a2-mid-r1",
    title: "My best friend Isa",
    text:
`My best friend is called Isabel, but everyone calls her Isa. She is fourteen, one year older than me. We live on the same street in Manizales, so we walk to school together every morning.

Isa is taller than me and she has long, curly hair. She is very funny and she always helps people. She loves animals, and she has two cats and a rabbit. She wants to be a vet when she is older.

Last weekend, we went to a coffee farm with my family. We picked coffee beans and we drank hot chocolate. Isa took a lot of photos. Next Saturday, we are going to the cinema to see a new animated film.`,
    items: [
      ch("How old is Isa?", ["Fourteen", "Thirteen", "Fifteen"], 0, "Paragraph 1."),
      ch("How do they go to school?", ["They walk together.", "By bus", "Isa's dad drives them."], 0, "'we walk to school together'."),
      ch("What does Isa want to be?", ["A vet", "A photographer", "A teacher"], 0, "Paragraph 2."),
      ch("What did they do last weekend?", ["They visited a coffee farm.", "They went to the cinema together.", "They stayed at home with the cats."], 0, "Paragraph 3."),
      ch("What are they going to do next Saturday?", ["See a film at the cinema", "Visit a coffee farm with the family", "Take photos of animals at a farm"], 0, "Final sentence."),
      gap("Isa is", "than me. (tall)", ["taller"], "Comparative: taller."),
    ],
  }],
  listening: [
    {
      id: "a2-mid-l1", title: "A phone message", audio: "p/a2mid-l1.mp3", speaker: "A mother",
      items: [
        ch("Where is Mum?", ["At the supermarket", "At work until six", "At home, making a cake"], 0, "'I'm at the supermarket.'"),
        ch("What is she going to make tonight?", ["A cake", "Pizza", "Soup"], 0, "'I'm going to make a cake tonight.'"),
        ch("What should Tomás do before six?", ["His homework", "The shopping", "Make dinner"], 0, "'please do your homework'."),
      ],
    },
    {
      id: "a2-mid-l2", title: "A school trip", audio: "p/a2mid-l2.mp3", speaker: "A student",
      items: [
        ch("How did they go to the zoo?", ["By bus", "By car", "On foot"], 0, "'We took the bus'."),
        ch("What was the speaker's favourite animal?", ["The giraffe", "The snake", "The lion"], 0, "'My favourite animal was the giraffe.'"),
        ch("What didn't the speaker like?", ["The snakes", "The lunch", "The bus"], 0, "'I didn't like the snakes.'"),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write a message to a friend (50 words or more) about your last weekend. Say what you did, who you were with and what you are going to do next weekend." },
      { text: "Write a short description of your best friend (50 words or more): what they look like, what they are like and what you do together." },
    ],
    minWords: 50,
    checks: [
      { label: "Past simple verbs (went, played, visited…)", pattern: "\\b(\\w+ed|went|had|saw|ate|took|got|made|was|were|bought|met)\\b", min: 2 },
      { label: "A future or present plan (going to / will / am …ing)", pattern: "\\b(going to|will|'ll|am\\s+\\w+ing|are\\s+\\w+ing|'re\\s+\\w+ing|'m\\s+\\w+ing)\\b|\\b(always|usually|often|every)\\b", min: 1 },
      { label: "Linking words (and, but, because, so)", pattern: "\\b(and|but|because|so|then)\\b", min: 3 },
    ],
    rubric: ["I answered all parts of the task.", "I used the right tenses.", "I joined my ideas with and, but, because and so.", "I checked my spelling."],
    model: "Hi Sam! Last weekend was great. On Saturday, I went to the park with my cousins and we played football. Then we had ice cream because it was very hot. On Sunday, I stayed at home and watched a film with my dad. Next weekend, I'm going to visit my grandma in Chía. What did you do?",
  },
  speaking: {
    prompts: [
      { text: "Talk for about 30 seconds: describe your daily routine. Say what you usually do in the morning, after school and in the evening." },
      { text: "Talk for about 30 seconds: describe your last birthday. Say where you were, who was with you and what you did." },
    ],
    minWords: 35,
    seconds: 30,
    checks: [
      { label: "A clear start (I'm going to talk about, My…, Every day…)", pattern: "\\b(i'm going to talk about|i am going to talk about|i want to talk about|my|every day|on my)\\b", min: 1 },
      { label: "Time or sequence words (usually, then, after that, in the morning…)", pattern: "\\b(usually|always|then|after|in the morning|in the evening|first|later)\\b", min: 2 },
    ],
    rubric: ["I said clearly what I was talking about.", "I used time and sequence words.", "I spoke clearly, with small pauses."],
    model: "I'm going to talk about my routine. I usually get up at six. First, I take a shower and have breakfast. Then I go to school by bus. After school, I do my homework and play basketball. In the evening, I watch TV and go to bed at ten.",
  },
};

export const A2_GATE: BandAssessment = {
  band: "A2",
  kind: "gate",
  title: "A2 Gate",
  story: "The final check for A2. Pass it, your teacher confirms your writing and speaking, and A2+ opens.",
  bar: 75,
  reading: [
    {
      id: "a2-gate-r1",
      title: "Notice: The new school library",
      text:
`The new school library opens on Monday 3rd March!

Opening times: Monday to Friday, 7:00 a.m. to 4:00 p.m. The library is closed at weekends.

You can borrow three books for two weeks. If you need more time, you have to ask the librarian. You don't have to pay to use the computers, but you have to book them at the desk.

Please be quiet in the reading room. You can't eat or drink inside, but there is a small café next to the library.

We also have a reading club every Wednesday at 2:30 p.m. Everyone is welcome!`,
      items: [
        ch("When does the library open for the first time?", ["Monday 3rd March", "Wednesday at 2:30 p.m.", "Friday at 7:00 a.m."], 0, "First line."),
        ch("Can you visit the library on Saturday?", ["No, it's closed at weekends.", "Yes, from 7:00 a.m. to 4:00 p.m.", "Only in the morning, until 12."], 0, "Opening times."),
        ch("How many books can you borrow?", ["Three", "Two", "Ten"], 0, "Paragraph 3."),
        ch("What do you have to do to use a computer?", ["Book it at the desk", "Pay a small fee at the desk", "Join the reading club first"], 0, "Paragraph 3."),
        ch("Where can you eat?", ["In the café next to the library", "In the reading room, if you're quiet", "Nowhere: food isn't allowed at all"], 0, "Paragraph 4."),
      ],
    },
    {
      id: "a2-gate-r2",
      title: "Email from Lucas",
      text:
`Hi Marcela,

How's it going? I'm writing from my uncle's house in Santa Marta. We arrived on Tuesday. The journey was long: we took a bus for twelve hours, and it was really hot!

Yesterday we went to Tayrona Park. We walked for two hours through the forest, and then we swam in the sea. The water was warmer than in Cartagena. I saw a monkey in a tree, but I didn't take a photo because my phone battery died.

Tomorrow we're visiting a coffee farm in the mountains. I'm going to buy some coffee for your mum. When do you start school? See you soon!

Lucas`,
      items: [
        ch("Where is Lucas staying?", ["At his uncle's house", "In a hotel in Tayrona Park", "At a friend's house in Cartagena"], 0, "Paragraph 1."),
        ch("How did he travel to Santa Marta?", ["By bus", "By plane", "By car"], 0, "Paragraph 1."),
        ch("What did he do in Tayrona Park?", ["He walked and swam.", "He bought coffee.", "He took a lot of photos."], 0, "Paragraph 2."),
        ch("Why didn't he take a photo of the monkey?", ["His phone battery died.", "The monkey ran away into the forest.", "He was swimming in the sea then."], 0, "Paragraph 2."),
        ch("What is he going to buy for Marcela's mum?", ["Some coffee", "A photo of the monkey", "Some chocolate from the farm"], 0, "Paragraph 3."),
      ],
    },
  ],
  listening: [
    {
      id: "a2-gate-l1", title: "A sports camp", audio: "p/a2gate-l1.mp3", speaker: "A camp leader",
      items: [
        ch("What time does the camp start every day?", ["At nine", "At eight", "At ten"], 0, "'we start at nine o'clock'."),
        ch("What do they do in the afternoon?", ["Stop and drink some water", "Play football", "Have lunch"], 0, "'In the afternoon, we go swimming.'"),
        ch("What do campers have to bring?", ["A towel and a water bottle", "Their lunch and a water bottle", "A ball for football or basketball"], 0, "'You have to bring a towel and a water bottle.'"),
        ch("What should you do if you feel sick?", ["Tell a teacher", "Go home and call a parent", "Go swimming"], 0, "'please tell a teacher'."),
      ],
    },
    {
      id: "a2-gate-l2", title: "Directions", audio: "p/a2gate-l2.mp3", speaker: "A tourist and a local",
      items: [
        ch("Where does the tourist want to go?", ["The train station", "The supermarket on the corner", "The cinema in the centre"], 0, "'how do I get to the train station?'"),
        ch("Where should the tourist turn left?", ["At the supermarket", "At the cinema, after two minutes", "Opposite the train station"], 0, "'turn left at the supermarket'."),
        ch("Where is the station?", ["Opposite the cinema", "Next to the supermarket", "Behind the park"], 0, "'opposite the cinema'."),
        ch("How far is it on foot?", ["About ten minutes", "About two minutes", "About half an hour"], 0, "'about ten minutes on foot'."),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write an email to a friend (80 words or more) in at least two paragraphs about a trip or holiday. Say where you went, what you did and what you are going to do next. Use one comparative (bigger, hotter, more interesting…)." },
      { text: "Write a short article for your school magazine (80 words or more) in at least two paragraphs: 'My town'. Describe it, compare it with another place, and give advice to visitors with 'should'." },
    ],
    minWords: 80,
    checks: [
      { label: "At least two paragraphs (leave a blank line between them)", pattern: "\\n\\s*\\n", min: 1 },
      { label: "Verbs that fit your task (went, visited, is, should…)", pattern: "\\b(\\w+ed|went|had|saw|ate|took|got|made|was|were|bought|should|is|are)\\b", min: 3 },
      { label: "A comparative (…er than / more … than)", pattern: "\\b(\\w+er|more\\s+\\w+|better|worse)\\s+than\\b", min: 1 },
      { label: "Linking words (and, but, because, so, then)", pattern: "\\b(and|but|because|so|then)\\b", min: 4 },
    ],
    rubric: ["My paragraphs are clear.", "I used the right tenses.", "I used a comparative correctly.", "I joined my ideas with linking words."],
    model: "Hi Andrés,\n\nLast month, I went to Cartagena with my family. We stayed in a small hotel near the old city. The weather was hotter than in Bogotá, so we swam in the sea every day. We also visited the castle and ate a lot of fried fish. It was delicious!\n\nNext month, we are going to visit my cousins in Medellín. I think it will be fun because they have a big house and a dog. What are you going to do in the holidays? Write soon!\n\nCamila",
  },
  speaking: {
    prompts: [
      { text: "Talk for about 45 seconds: describe a place you visited. Say where it was, how you travelled, what you did and if you liked it." },
      { text: "Talk for about 45 seconds: describe your plans for the next holidays. Say where you are going, who with and what you are going to do." },
    ],
    minWords: 50,
    seconds: 45,
    checks: [
      { label: "A clear start (I'm going to talk about, Last…, Next…)", pattern: "\\b(i'm going to talk about|i am going to talk about|i want to talk about|last (year|summer|month|week|weekend)|next (year|summer|month|week|holidays))\\b", min: 1 },
      { label: "A reason (because, so)", pattern: "\\b(because|so)\\b", min: 1 },
      { label: "Sequence or linking words (first, then, after that, but, and)", pattern: "\\b(first|then|after that|finally|but|and)\\b", min: 3 },
    ],
    rubric: ["I spoke for about 45 seconds.", "My ideas were in a clear order.", "I gave a reason.", "I spoke clearly, with small pauses."],
    model: "I'm going to talk about my trip to Villavicencio last year. We went by car with my parents and my sister. First, we visited a big farm, and we rode horses. Then we went to a river and swam. The food was great, but it was very hot. I liked it a lot because I love animals.",
  },
};
