/**
 * A2+ Midpoint and Gate. Original texts written for Bandwidth EFL.
 * Listening audio: ElevenLabs AI voices, in the public `listening` bucket.
 * Choice options are written answer-first; the player shuffles them.
 */
import { ch, gap } from "../practice/helpers";
import type { BandAssessment } from "./types";

export const A2P_ASSESSMENT_CLIPS: { file: string; voice: string; script: string }[] = [
  { file: "p/a2pmid-l1.mp3", voice: "cgSgspJ2msm6clMCkdW9",
    script: "Hi Marta, it's Lucas. I'm calling about Saturday. The football match starts at ten, not at nine. We're meeting at the park gate at half past nine. Please bring some water, because it might be very hot. And if it rains, we'll play on Sunday instead. See you!" },
  { file: "p/a2pmid-l2.mp3", voice: "MAy1fRIg5hTqbhiwOUyh",
    script: "When I was little, I used to live on a farm. We had cows, chickens and a very old horse. Every morning, I used to help my grandfather with the animals. Now I live in the city, in a small apartment. I've never had a pet here, but I'd love a cat." },
  { file: "p/a2pgate-l1.mp3", voice: "tPDVQaZ6fdDCUmYpHyYd",
    script: "Last Saturday was my sister's birthday. First, we went to a big park near our house. While we were having a picnic, a dog ran over and took my sister's sandwich! Everybody laughed, even my sister. After that, we went to a pizza restaurant. The pizza was delicious, but it was too expensive, so my dad wasn't very happy. Finally, we went home and watched a film. It was a really fun day." },
  { file: "p/a2pgate-l2.mp3", voice: "3f6pec3wODJsjTqtcNI2",
    script: "Good morning, students. I have some news about the school trip to the science museum. The bus will leave at eight o'clock, so please arrive at quarter to eight. Bring a packed lunch and a notebook. You can't take photos inside the museum, but you can buy postcards in the shop. If you haven't paid for the trip yet, please give the money to Ms Rojas by Wednesday. Thank you." },
];

export const A2P_MIDPOINT: BandAssessment = {
  band: "A2+",
  kind: "midpoint",
  title: "A2+ Midpoint",
  story: "Halfway through A2+. A short check across all four skills, so any gaps show up now.",
  bar: 70,
  reading: [{
    id: "a2p-mid-r1",
    title: "My new school",
    text:
`My name is Tomás and I'm thirteen. Last year, my family moved from a small town to Bogotá, because my mum got a new job. I've been at my new school for eight months now.

At first, it was very difficult. The school is much bigger than my old one, and I didn't know anyone. In the first week, I got lost three times! But then I met Andrés, a boy who sits next to me in science. He showed me the library, the gym and the best place to buy empanadas.

Now I have a few good friends, and I've joined the school band. I play the drums. I've never played in a concert, but we have one in December. If I practise every day, I'll be ready.

I still miss my old town sometimes, but I'm happy here.`,
    items: [
      ch("Why did Tomás's family move?", ["His mum got a new job.", "His dad wanted a bigger house.", "His old school closed."], 0, "Paragraph 1."),
      ch("How long has Tomás been at the new school?", ["Eight months", "Since last week", "About two years"], 0, "'I've been at my new school for eight months now.'"),
      ch("What was difficult at first?", ["The school was big and he didn't know anyone.", "The lessons were much harder than in his old town.", "He had to play the drums in a concert."], 0, "Paragraph 2."),
      ch("Who is Andrés?", ["A boy who sits next to Tomás in science", "Tomás's older brother, who also plays the drums", "The teacher who runs the school band"], 0, "'a boy who sits next to me in science'."),
      ch("What will happen in December?", ["The band has a concert.", "Tomás will move again.", "Tomás will visit his old town."], 0, "Paragraph 3."),
      gap("'If I practise every day, I", "be ready.' (first conditional)", ["will", "'ll"], "will + base verb."),
    ],
  }],
  listening: [
    {
      id: "a2p-mid-l1", title: "A phone message", audio: "p/a2pmid-l1.mp3", speaker: "A friend",
      items: [
        ch("What time does the match start?", ["At ten", "At nine", "At half past nine"], 0, "'The football match starts at ten, not at nine.'"),
        ch("What should Marta bring?", ["Some water", "A ball for the match", "Food for a picnic"], 0, "'Please bring some water'."),
        ch("What will happen if it rains?", ["They'll play on Sunday.", "They'll play inside.", "They'll go to the cinema."], 0, "'if it rains, we'll play on Sunday instead'."),
      ],
    },
    {
      id: "a2p-mid-l2", title: "Life on a farm", audio: "p/a2pmid-l2.mp3", speaker: "A teenager talking about childhood",
      items: [
        ch("Where did the speaker use to live?", ["On a farm", "In a big city", "Near the sea"], 0, "'I used to live on a farm.'"),
        ch("Who did the speaker help every morning?", ["Their grandfather", "Their mother and father", "Their teacher"], 0, "'help my grandfather with the animals'."),
        ch("What pet would the speaker like now?", ["A cat", "A horse", "A dog"], 0, "'I'd love a cat.'"),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write an email to a new friend (60 words or more). Tell them about your school: how long you've been there, what you like, and what you did last week. Use the present perfect once and the past simple once." },
      { text: "Write a short text for your class blog (60 words or more): 'My town now and when I was little'. Use 'used to' once, and the present perfect or past simple." },
    ],
    minWords: 60,
    checks: [
      { label: "A present perfect or 'used to' (have been, have lived, used to…)", pattern: "\\b(have|has|'ve|'s)\\s+(been|lived|had|made|played|known|studied|visited|seen)\\b|\\bused\\s+to\\b", min: 1 },
      { label: "A past simple with a time (last week, yesterday, in 20…, ago)", pattern: "\\b(yesterday|last\\s+\\w+|\\w+\\s+ago|in\\s+(19|20)\\d\\d|when\\s+i\\s+was)\\b", min: 1 },
      { label: "A reason or linker (because, but, so, and then)", pattern: "\\b(because|but|so|then)\\b", min: 2 },
    ],
    rubric: ["I answered all parts of the task.", "I used the right tenses with time words.", "I joined my ideas with because, but and so.", "I checked my spelling."],
    model: "Hi Sam! I've been at my school for three years. It's quite big, and I really like the art room because it's very bright. My favourite teacher is Ms Gómez. She's funny and kind. Last week we went on a trip to a museum, and we saw some old maps. It was interesting, but I was tired at the end. What's your school like?",
  },
  speaking: {
    prompts: [
      { text: "Talk for about 30 seconds: describe a person who is important to you. Say who they are, what they are like, and something you did together." },
      { text: "Talk for about 30 seconds: describe your weekend plans. Say what you will do if the weather is good and what you will do if it rains." },
    ],
    minWords: 40,
    seconds: 30,
    checks: [
      { label: "A clear start (I'm going to talk about, I want to talk about, My…)", pattern: "\\b(i'm going to talk about|i am going to talk about|i want to talk about|i'd like to talk about|this weekend|my)\\b", min: 1 },
      { label: "A reason (because, so)", pattern: "\\b(because|so)\\b", min: 1 },
      { label: "A past or future verb (went, was, will, 'll…)", pattern: "\\b(went|was|were|did|had|played|will|won't|'ll)\\b", min: 1 },
    ],
    rubric: ["I said clearly what I was talking about.", "I gave a reason.", "I spoke clearly, with small pauses."],
    model: "I want to talk about my grandmother. She's seventy, and she's very funny and kind. She lives near my house, so I visit her every Sunday. Last month, we made a big chocolate cake together. It was delicious! I love her because she always listens to me.",
  },
};

export const A2P_GATE: BandAssessment = {
  band: "A2+",
  kind: "gate",
  title: "A2+ Gate",
  story: "The final check for A2+. Pass it, your teacher confirms your writing and speaking, and B1 opens.",
  bar: 75,
  reading: [
    {
      id: "a2p-gate-r1",
      title: "The beach clean-up",
      text:
`Every year, students from a school in Santa Marta organise a beach clean-up. This year, more than eighty students joined. They started at seven in the morning, when it wasn't too hot.

The students worked in small groups. Each group had a few big bags and a little water. In four hours, they collected more than two hundred kilos of rubbish. Most of it was plastic: bottles, bags and straws. "I was really surprised," says Daniela, fourteen. "I've been to this beach many times, but I've never noticed so much plastic."

After the clean-up, a local scientist talked to the students about pollution in the sea. She explained that some plastic stays in the ocean for hundreds of years. Many students said they will use fewer plastic bags from now on.`,
      items: [
        ch("Why did they start at seven in the morning?", ["It wasn't too hot.", "The beach was empty.", "The bus arrived early."], 0, "Paragraph 1."),
        ch("How much rubbish did they collect?", ["More than two hundred kilos", "About eighty bags of plastic", "Four big bags for each group"], 0, "Paragraph 2."),
        ch("Why was Daniela surprised?", ["She had never noticed so much plastic.", "The beach was much cleaner than before.", "So many students came to help that day."], 0, "'I've never noticed so much plastic.'"),
        ch("Who talked to the students after the clean-up?", ["A local scientist", "The head teacher of the school", "A local fisherman"], 0, "Paragraph 3."),
        ch("What will many students do now?", ["Use fewer plastic bags", "Visit the beach every day", "Become scientists"], 0, "Final sentence."),
      ],
    },
    {
      id: "a2p-gate-r2",
      title: "Message from Ms Rojas",
      text:
`Dear parents and students,

I'm writing to tell you about the English Day on Friday 14th. Students can come to school in their own clothes, but they must pay 2,000 pesos. The money will help to buy new books for the library.

In the morning, each class will present a short play in English. In the afternoon, there will be games and a food fair with dishes from different countries. If you'd like to bring some food, please tell your class teacher by Tuesday.

Could you also remind students to bring a water bottle? It might be very hot.

Thank you for your help.
Best wishes,
Ms Rojas`,
      items: [
        ch("What can students wear on English Day?", ["Their own clothes", "Their school uniform only", "Costumes from other countries"], 0, "Paragraph 1."),
        ch("What will the 2,000 pesos pay for?", ["New books for the library", "Dishes for the international food fair", "A school trip to the beach"], 0, "Paragraph 1."),
        ch("What will happen in the morning?", ["Each class will present a short play.", "There will be games for all the classes.", "There will be a food fair with dishes."], 0, "Paragraph 2."),
        ch("What should you do if you want to bring food?", ["Tell your class teacher by Tuesday.", "Bring it to the school office on Friday.", "Pay an extra 2,000 pesos to Ms Rojas."], 0, "Paragraph 2."),
        ch("Why should students bring a water bottle?", ["It might be very hot.", "There's no water at school.", "It's a rule for plays."], 0, "'It might be very hot.'"),
      ],
    },
  ],
  listening: [
    {
      id: "a2p-gate-l1", title: "A birthday story", audio: "p/a2pgate-l1.mp3", speaker: "A teenager",
      items: [
        ch("What happened during the picnic?", ["A dog took a sandwich.", "It started to rain.", "Someone fell in the lake."], 0, "'a dog ran over and took my sister's sandwich!'"),
        ch("How did the sister react?", ["She laughed.", "She cried.", "She was angry."], 0, "'Everybody laughed, even my sister.'"),
        ch("Why wasn't the dad very happy?", ["The pizza was too expensive.", "A dog took his sandwich in the park.", "The pizza was cold when it arrived."], 0, "'it was too expensive'."),
        ch("What did they do at the end of the day?", ["Watched a film at home", "Went to the park again", "Played football"], 0, "'we went home and watched a film'."),
      ],
    },
    {
      id: "a2p-gate-l2", title: "A school announcement", audio: "p/a2pgate-l2.mp3", speaker: "A teacher",
      items: [
        ch("What time should students arrive?", ["At quarter to eight", "At eight", "At half past eight"], 0, "'please arrive at quarter to eight'."),
        ch("What should students bring?", ["A packed lunch and a notebook", "A camera to take photos inside", "Money to buy lunch and postcards"], 0, "'Bring a packed lunch and a notebook.'"),
        ch("What can't students do in the museum?", ["Take photos", "Buy postcards", "Eat lunch"], 0, "'You can't take photos inside the museum'."),
        ch("Who should get the money for the trip?", ["Ms Rojas", "The bus driver", "The museum"], 0, "'give the money to Ms Rojas by Wednesday'."),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write a story (90 words or more) in at least two paragraphs about a day that didn't go as planned. Use First, Then, Finally, and one past continuous with 'when' or 'while' (I was walking when…)." },
      { text: "Write an email to your teacher (90 words or more) in at least two paragraphs. Say you were absent, explain why, and ask about the homework. Use Dear, I'm writing to, Could you, and a polite ending." },
    ],
    minWords: 90,
    checks: [
      { label: "At least two paragraphs (leave a blank line between them)", pattern: "\\n\\s*\\n", min: 1 },
      { label: "Sequence words or a polite request (First, Then, Finally, Could you…)", pattern: "\\b(first|then|after that|finally|could you|i'm writing to|i am writing to)\\b", min: 2 },
      { label: "A past tense with a time (yesterday, last…, when I was…, while…)", pattern: "\\b(yesterday|last\\s+\\w+|\\w+\\s+ago|when|while)\\b", min: 1 },
      { label: "A linker (because, but, so)", pattern: "\\b(because|but|so)\\b", min: 2 },
    ],
    rubric: ["My paragraphs are clear and in order.", "I used past tenses correctly.", "I joined my ideas with linkers.", "I checked my spelling and punctuation."],
    model: "Last Saturday, I wanted to have a perfect day at the beach with my cousins. First, we got up early and took the bus. Then, while we were walking to the beach, it started to rain! We didn't have umbrellas, so we ran to a small café.\n\nAfter that, we had hot chocolate and played cards for two hours. The owner of the café was very kind, and he told us funny stories about the town. Finally, the sun came out, but it was too late to swim. It wasn't the day we planned, but it was really fun.",
  },
  speaking: {
    prompts: [
      { text: "Talk for about 45 seconds: describe a trip or a special day. Say where you went, what happened, and how you felt. Use First, Then and Finally." },
      { text: "Talk for about 45 seconds: give your opinion. Should students use phones at school? Give two reasons, and say what you think about the other side." },
    ],
    minWords: 55,
    seconds: 45,
    checks: [
      { label: "A clear start (I'm going to talk about, I think, In my opinion, Last…)", pattern: "\\b(i'm going to talk about|i am going to talk about|i want to talk about|i think|in my opinion|last (year|summer|month|week|saturday|sunday))\\b", min: 1 },
      { label: "A reason (because, so)", pattern: "\\b(because|so)\\b", min: 1 },
      { label: "Sequence or linking words (first, then, finally, but, also)", pattern: "\\b(first|then|after that|finally|but|also)\\b", min: 2 },
    ],
    rubric: ["I spoke for about 45 seconds.", "My ideas were in a clear order.", "I gave reasons.", "I spoke clearly, with small pauses."],
    model: "I want to talk about my trip to Villa de Leyva last December. First, we drove there with my family. It took about four hours. Then, we walked around the big square and ate ice cream. It was very sunny, but it was cold at night. Finally, we visited a dinosaur museum, and I saw a huge fossil. I felt really happy because I love history.",
  },
};
