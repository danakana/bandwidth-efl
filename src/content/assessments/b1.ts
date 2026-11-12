/**
 * B1 Midpoint and Gate. Original texts written for Bandwidth EFL.
 * Listening audio: ElevenLabs AI voices, in the public `listening` bucket.
 * Choice options are written answer-first; the player shuffles them.
 */
import { ch, gap } from "../practice/helpers";
import type { BandAssessment } from "./types";

export const B1_ASSESSMENT_CLIPS: { file: string; voice: string; script: string }[] = [
  { file: "p/b1mid-l1.mp3", voice: "QW1sSL71Pw5oHbFDen25",
    script: "Hello, this is a message for Daniel Ríos. This is Carmen from the City Library. You asked about the summer reading club. I'm afraid the Tuesday group is full, but there are still places on Thursdays, from four to six. The club is free, but you need to bring a photo for your library card. If you'd like a place, please call us back before Friday. Thank you!" },
  { file: "p/b1mid-l2.mp3", voice: "ideEOMYLgcyF9rr94ycz",
    script: "So, how was your first week at the new school? It was good, thanks. The building is huge, and I got lost twice! The teachers are nice, although the maths teacher gives a lot of homework. I've made two friends already. They're in the basketball team, so I might join too. The only problem is the bus. It takes almost an hour." },
  { file: "p/b1gate-l1.mp3", voice: "tPDVQaZ6fdDCUmYpHyYd",
    script: "Last year, I spent two weeks with a host family in Toronto. Before I went, I was really nervous, because I had never travelled alone. The family was lovely, and they had a dog called Maple. The hardest thing was the food: dinner was at six o'clock, which is very early for me! At first I didn't understand the jokes, but by the end I was laughing all the time. If I hadn't gone, I would never have become so confident. I'm already saving money to go back." },
  { file: "p/b1gate-l2.mp3", voice: "3f6pec3wODJsjTqtcNI2",
    script: "Good morning, everyone. Before we start, I have some information about next week's science fair. It was going to be on Wednesday, but it has been moved to Friday, because the hall is being painted. Each group must bring their project at eight o'clock. Projects will be judged by three teachers and a scientist from the university. The winning team will visit a real laboratory. And please remember: if you need extra tables, ask Mr Gómez, not me!" },
];

export const B1_MIDPOINT: BandAssessment = {
  band: "B1",
  kind: "midpoint",
  title: "B1 Midpoint",
  story: "Halfway through B1. A short check across all four skills, so any gaps show up now.",
  bar: 70,
  reading: [{
    id: "b1-mid-r1",
    title: "The girl who builds robots",
    text:
`Valeria Torres is sixteen and lives in Pasto. She has been building robots since she was eleven, when her uncle gave her an old robot kit for her birthday. At first, she only followed the instructions. Then she started to change the designs and invent her own.

Last year, Valeria entered a national robotics competition. Her robot, which she called Chispa, could collect plastic bottles from a river and sort them for recycling. Although she was the youngest person in the final, she won second prize. "I was so nervous that I couldn't eat breakfast," she says. "But when Chispa worked, I forgot about everything else."

Valeria's school doesn't have a robotics club, so she works at home, in a corner of the kitchen. Her parents help her buy parts, but it isn't cheap. She also watches videos online to learn new skills. "If I had a real workshop, I would build bigger robots," she says.

Her advice for other young inventors is simple: "Don't be afraid of mistakes. Every robot I've made has failed at least ten times before it worked."`,
    items: [
      ch("How did Valeria start building robots?", ["Her uncle gave her an old robot kit.", "She joined a school club.", "She watched a film about robots."], 0, "Paragraph 1."),
      ch("What could Chispa do?", ["Collect and sort plastic bottles from a river", "Cook breakfast", "Clean the kitchen"], 0, "Paragraph 2."),
      ch("Why was her result surprising?", ["She was the youngest person in the final.", "She had never built a robot before.", "Her robot didn't work."], 0, "'Although she was the youngest…'"),
      ch("Where does Valeria build her robots now?", ["In a corner of the kitchen at home", "In a school workshop", "At her uncle's house"], 0, "Paragraph 3."),
      ch("What is her main advice?", ["Don't be afraid of mistakes.", "Buy expensive parts.", "Always follow the instructions."], 0, "Final paragraph."),
      gap("'If I had a real workshop, I", "build bigger robots.' (second conditional)", ["would", "'d"], "would + base verb."),
    ],
  }],
  listening: [
    {
      id: "b1-mid-l1", title: "A phone message", audio: "p/b1mid-l1.mp3", speaker: "A librarian",
      items: [
        ch("Why can't Daniel join the Tuesday group?", ["It's full.", "It's cancelled.", "It's too expensive."], 0, "'the Tuesday group is full'."),
        ch("What does he need to bring?", ["A photo", "Money", "A book"], 0, "'you need to bring a photo for your library card'."),
        ch("When should he call back?", ["Before Friday", "On Thursday", "Next week"], 0, "'please call us back before Friday'."),
      ],
    },
    {
      id: "b1-mid-l2", title: "A new school", audio: "p/b1mid-l2.mp3", speaker: "A student talking to a friend",
      items: [
        ch("What happened twice?", ["He got lost.", "He missed the bus.", "He forgot his homework."], 0, "'I got lost twice!'"),
        ch("What does he say about the maths teacher?", ["He gives a lot of homework.", "He is very strict.", "He is new."], 0, "'although the maths teacher gives a lot of homework'."),
        ch("What is the only problem?", ["The bus takes almost an hour.", "He has no friends.", "The building is small."], 0, "'The only problem is the bus.'"),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write a short article for your school magazine (90 words or more): 'Should every school have a robotics or technology club?' Give your opinion, at least two reasons, and a conclusion." },
      { text: "Write an email to a friend (90 words or more) about a club or activity you'd like to start at your school. Explain what it is, why it's a good idea, and how your friend could help." },
    ],
    minWords: 90,
    checks: [
      { label: "Your opinion (In my opinion, I think, I believe…)", pattern: "\\b(in my opinion|i think|i believe|personally|i feel)\\b", min: 1 },
      { label: "Two reasons (because, so, the main reason, another reason…)", pattern: "\\b(because|so|the main reason|another reason|for example|that's why)\\b", min: 2 },
      { label: "A contrast linker (although, however, but, despite…)", pattern: "\\b(although|however|but|despite|though)\\b", min: 1 },
      { label: "A conclusion (To sum up, In short, That's why, In conclusion…)", pattern: "\\b(to sum up|in short|that's why|in conclusion|all in all|basically)\\b", min: 1 },
    ],
    rubric: ["My opinion is clear from the start.", "I gave reasons and examples.", "I used linkers to connect my ideas.", "I checked my verbs and spelling."],
    model: "In my opinion, every school should have a robotics or technology club. The main reason is that technology is part of almost every job today. Another reason is that clubs help students who learn better by doing things with their hands. For example, my cousin was bad at maths, but he improved a lot when he started building robots. Although clubs need money for materials, parents and local companies could help. That's why I think it's a great investment. To sum up, a technology club would make school more fun and more useful.",
  },
  speaking: {
    prompts: [
      { text: "Talk for about 45 seconds: describe a hobby or activity you've been doing for a long time. Say how long you've been doing it, why you like it, and what you would do if you had more time for it." },
      { text: "Talk for about 45 seconds: describe a person you admire. Say who they are, what they have done, and why you admire them." },
    ],
    minWords: 55,
    seconds: 40,
    checks: [
      { label: "A clear start (I'd like to talk about, I'm going to talk about, I've been…)", pattern: "\\b(i'd like to talk about|i would like to talk about|i'm going to talk about|i am going to talk about|today i|i've been|i have been)\\b", min: 1 },
      { label: "A reason (because, so, that's why)", pattern: "\\b(because|so|that's why|the reason)\\b", min: 1 },
      { label: "A present perfect or conditional (have been, have done, would…)", pattern: "\\b(have|has|'ve|'s)\\s+(been|done|made|won|played|learned|learnt|helped)\\b|\\b(would|'d)\\s+\\w+", min: 1 },
    ],
    rubric: ["I started clearly and said what I was talking about.", "I gave reasons.", "I spoke clearly, with pauses between ideas."],
    model: "I'd like to talk about football. I've been playing football since I was seven, so that's almost ten years. I play for a local team on Saturdays. I love it because it helps me forget about school stress, and I've made great friends there. If I had more time, I would train every day and maybe try out for a bigger club. That's why football is so important to me.",
  },
};

export const B1_GATE: BandAssessment = {
  band: "B1",
  kind: "gate",
  title: "B1 Gate",
  story: "The final check for B1. Pass it, your teacher confirms your writing and speaking, and B1+ opens.",
  bar: 75,
  reading: [
    {
      id: "b1-gate-r1",
      title: "A week without screens",
      text:
`Last month, the students in Year 10 at a school in Medellín took part in an unusual experiment: one week without phones, tablets or video games. The idea came from a group of students, not the teachers, after they realised they had been spending more than six hours a day on screens.

The first two days were the hardest. "I kept reaching for my phone in my pocket, but it wasn't there," says Juan, fifteen. "I felt bored and a bit nervous." By Wednesday, however, things started to change. Students played football at break, read books in the library and talked more at lunch.

Not everyone enjoyed it. Some students said they missed listening to music, and a few parents complained that they couldn't contact their children. Despite these problems, most students said the experiment was worth it.`,
      items: [
        ch("Whose idea was the experiment?", ["A group of students", "The teachers", "The parents"], 0, "'The idea came from a group of students, not the teachers.'"),
        ch("Why did they decide to do it?", ["They realised they had been spending over six hours a day on screens.", "Their phones were broken.", "The school banned phones."], 0, "Paragraph 1."),
        ch("How did Juan feel at first?", ["Bored and a bit nervous", "Happy and relaxed", "Angry with his friends"], 0, "Paragraph 2."),
        ch("What changed by Wednesday?", ["Students played, read and talked more.", "Everyone used their phones again.", "The experiment stopped."], 0, "Paragraph 2."),
        ch("What problem did some parents mention?", ["They couldn't contact their children.", "Their children were too tired.", "The school was too noisy."], 0, "Paragraph 3."),
      ],
    },
    {
      id: "b1-gate-r2",
      title: "Review: The Last Lighthouse",
      text:
`The Last Lighthouse is a short adventure game that you can finish in about four hours. You play as Mara, a girl who lives alone in a lighthouse on a stormy island. One night, she finds a message in a bottle, and the adventure begins.

The best thing about the game is its atmosphere. The music, which was written by a Colombian composer, is beautiful, and the sound of the sea is so realistic that I wanted to wear a jacket. The puzzles are clever but not too difficult, so you rarely get stuck.

However, the game isn't perfect. The story is a bit predictable, and I guessed the ending halfway through. Also, it's quite expensive for such a short game. If it were cheaper, I would recommend it to everyone. Still, if you love calm, beautiful games, it's definitely worth playing.`,
      items: [
        ch("What starts the adventure?", ["Mara finds a message in a bottle.", "A storm destroys the lighthouse.", "Mara meets a stranger."], 0, "Paragraph 1."),
        ch("What does the reviewer like most?", ["The atmosphere: the music and the sound of the sea", "The difficult puzzles", "The long story"], 0, "Paragraph 2."),
        ch("Why does the reviewer say they wanted to wear a jacket?", ["The sea sounded so realistic.", "It was cold in their room.", "Mara wears a jacket."], 0, "A humorous way to praise the sound."),
        ch("What is one problem with the game?", ["The story is predictable.", "The puzzles are impossible.", "The music is boring."], 0, "Paragraph 3."),
        ch("'If it were cheaper, I would recommend it to everyone' means…", ["It's quite expensive, so the reviewer doesn't recommend it to everyone.", "It's cheap, so everyone should buy it.", "The reviewer won't recommend it at all."], 0, "Second conditional: unreal present."),
      ],
    },
  ],
  listening: [
    {
      id: "b1-gate-l1", title: "An exchange trip", audio: "p/b1gate-l1.mp3", speaker: "A student who studied in Canada",
      items: [
        ch("Why was the speaker nervous before the trip?", ["She had never travelled alone.", "She didn't speak any English.", "She was afraid of dogs."], 0, "'I had never travelled alone'."),
        ch("What was the hardest thing?", ["The food: dinner was very early.", "The weather", "The school"], 0, "'dinner was at six o'clock'."),
        ch("How did she feel about the jokes by the end?", ["She was laughing all the time.", "She still didn't understand them.", "She thought they were rude."], 0, "'by the end I was laughing all the time'."),
        ch("What did the trip change?", ["She became more confident.", "She decided to live in Canada.", "She got a dog."], 0, "'If I hadn't gone, I would never have become so confident.'"),
      ],
    },
    {
      id: "b1-gate-l2", title: "A school announcement", audio: "p/b1gate-l2.mp3", speaker: "A teacher",
      items: [
        ch("Why has the science fair been moved?", ["The hall is being painted.", "A teacher is ill.", "It's going to rain."], 0, "'because the hall is being painted'."),
        ch("When is the science fair now?", ["Friday", "Wednesday", "Monday"], 0, "'it has been moved to Friday'."),
        ch("Who will judge the projects?", ["Three teachers and a scientist", "The students", "Mr Gómez alone"], 0, "'three teachers and a scientist from the university'."),
        ch("Who should students ask for extra tables?", ["Mr Gómez", "The speaker", "The scientist"], 0, "'ask Mr Gómez, not me!'"),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write an article (130 words or more) in at least three paragraphs: 'Could you live for a week without your phone?' Give your opinion, reasons, the other side, and a conclusion. Use one second conditional (If I …, I would …)." },
      { text: "Write a review (130 words or more) in at least three paragraphs of a game, film, series or book you know well. Describe it, say what's good and bad, and give a recommendation. Use one second conditional (If it were …, I would …)." },
    ],
    minWords: 130,
    checks: [
      { label: "At least three paragraphs (leave a blank line between them)", pattern: "\\n\\s*\\n", min: 2 },
      { label: "Your opinion or recommendation (In my opinion, I think, I recommend…)", pattern: "\\b(in my opinion|i think|i believe|i recommend|i'd recommend|i would recommend|personally)\\b", min: 1 },
      { label: "The other side (However, On the other hand, Although, but…)", pattern: "\\b(however|on the other hand|although|despite|but)\\b", min: 1 },
      { label: "A second conditional (If I … , I would …)", pattern: "\\bif\\b[^.!?]*\\b(would|'d|could|might)\\s+(?!have\\b)\\w+", min: 1 },
      { label: "A conclusion (To sum up, In conclusion, That's why…)", pattern: "\\b(to sum up|in conclusion|that's why|all in all|in short|overall)\\b", min: 1 },
    ],
    rubric: ["My paragraphs each have one main idea.", "I gave reasons and considered the other side.", "My grammar (tenses, conditionals) is accurate.", "My conclusion is clear."],
    model: "Could I live for a week without my phone? Honestly, I'm not sure. I use it for music, homework and talking to my friends, so it would be very difficult at first.\n\nOn the other hand, I think a week without screens could be good for me. I've been sleeping badly recently, and I know it's because I watch videos late at night. If I didn't have my phone, I would read more and go to bed earlier. I would probably spend more time with my family too.\n\nHowever, there are some problems. My parents like to know where I am, and my school sends homework online. Despite this, I think it's possible with some planning.\n\nTo sum up, it would be hard, but I'd like to try it during the holidays. That's why I'm going to suggest it to my friends.",
  },
  speaking: {
    prompts: [
      { text: "Talk for about one minute: describe a trip or experience that changed you. Say what happened, how you felt, and what you learned. Use the past simple and the past perfect (I had never…)." },
      { text: "Talk for about one minute: describe a problem at your school or in your city and suggest a solution. Give reasons, and say what would happen if nobody did anything." },
    ],
    minWords: 80,
    seconds: 60,
    checks: [
      { label: "A clear start (I'd like to talk about, Last year, I'm going to talk about…)", pattern: "\\b(i'd like to talk about|i would like to talk about|i'm going to talk about|i am going to talk about|last (year|summer|month)|today i)\\b", min: 1 },
      { label: "A reason (because, so, that's why…)", pattern: "\\b(because|so|that's why|the main reason)\\b", min: 1 },
      { label: "A past perfect or conditional (had never…, would…, If…)", pattern: "\\b(had|'d)\\s+(never|already|just)?\\s*\\w+(ed|en|wn|t|ne)\\b|\\b(would|'d)\\s+\\w+|\\bif\\b", min: 1 },
      { label: "A conclusion (To sum up, That's why, In short…)", pattern: "\\b(to sum up|that's why|in short|all in all|so in the end|in conclusion)\\b", min: 1 },
    ],
    rubric: ["I spoke for about a minute with clear organisation.", "I used past tenses accurately.", "I gave reasons and a clear ending.", "I paused between ideas so the listener could follow."],
    model: "I'd like to talk about a camping trip I went on last year with my school. Before the trip, I had never slept outside, so I was really nervous. On the first night it rained a lot, and our tent started to leak. At first I was angry, but my friends started laughing, so I laughed too. We spent the night telling stories under a plastic sheet. I learned that problems are easier when you share them with friends. That's why it's one of my favourite memories, even though I was wet and cold all night.",
  },
};
