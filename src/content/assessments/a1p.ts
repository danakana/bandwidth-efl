/**
 * A1+ Midpoint and Gate. Original texts written for Bandwidth EFL.
 * Listening audio: ElevenLabs AI voices, in the public `listening` bucket.
 * Choice options are written answer-first; the player shuffles them.
 * Lowest band: short texts, slow and clear audio, one-paragraph writing.
 */
import { ch, gap } from "../practice/helpers";
import type { BandAssessment } from "./types";

export const A1P_ASSESSMENT_CLIPS: { file: string; voice: string; script: string }[] = [
  { file: "p/a1pmid-l1.mp3", voice: "cgSgspJ2msm6clMCkdW9",
    script: "Hi! I'm Valentina. I'm twelve years old and I'm from Tunja. I have one brother. His name is Andrés and he is nine. I love music and I can play the piano. I don't like football. My favourite food is pizza." },
  { file: "p/a1pmid-l2.mp3", voice: "9hb1f7xQcMLB90qbYSY3",
    script: "Good morning, class. Today is Tuesday. Please open your books at page twenty. Look at the picture. There is a big house, and there are three children in the garden. They are playing with a dog. Now, work in pairs, please." },
  { file: "p/a1pgate-l1.mp3", voice: "QW1sSL71Pw5oHbFDen25",
    script: "Hello, Grandma! It's Lucía. I'm at the park with my friends. We're having a picnic. It's sunny and warm today. Mum is coming to the park at five o'clock. Can you come too? We have cake and orange juice. See you later!" },
  { file: "p/a1pgate-l2.mp3", voice: "MAy1fRIg5hTqbhiwOUyh",
    script: "Can I have a cheese sandwich, please? Of course. Anything to drink? A bottle of water, please. Here you are. How much is it? It's six dollars. Here you are. Thank you! You're welcome. Have a nice day!" },
];

export const A1P_MIDPOINT: BandAssessment = {
  band: "A1+",
  kind: "midpoint",
  title: "A1+ Midpoint",
  story: "Halfway through A1+. A short, friendly check across all four skills, so any gaps show up now.",
  bar: 70,
  reading: [{
    id: "a1p-mid-r1",
    title: "My new school",
    text:
`Hello! My name is Samuel. I am thirteen years old. I live in Armenia with my mum, my dad and my sister, Luna.

I have a new school. It is big and very nice. There are thirty students in my class. My teacher is Ms Rojas. She is kind and funny.

I go to school by bus. School starts at seven o'clock. My favourite subject is art, because I love drawing. I don't like maths. After school, I play basketball with my friends.`,
    items: [
      ch("How old is Samuel?", ["Thirteen", "Twelve", "Thirty"], 0, "Paragraph 1."),
      ch("Who is Luna?", ["His sister", "His teacher", "His mum"], 0, "Paragraph 1."),
      ch("How many students are in his class?", ["Thirty", "Thirteen", "Three"], 0, "Paragraph 2."),
      ch("How does Samuel go to school?", ["By bus", "On foot", "By car"], 0, "Paragraph 3."),
      ch("Why is art his favourite subject?", ["He loves drawing.", "Ms Rojas teaches it.", "It's easy."], 0, "Paragraph 3."),
      gap("Samuel", "basketball after school. (play)", ["plays"], "he → plays."),
    ],
  }],
  listening: [
    {
      id: "a1p-mid-l1", title: "Meet Valentina", audio: "p/a1pmid-l1.mp3", speaker: "A student",
      items: [
        ch("Where is Valentina from?", ["Tunja", "Tuluá", "Tumaco"], 0, "'I'm from Tunja.'"),
        ch("How old is her brother?", ["Nine", "Twelve", "Five"], 0, "'He is nine.'"),
        ch("What can Valentina play?", ["The piano", "Football", "The guitar"], 0, "'I can play the piano.'"),
      ],
    },
    {
      id: "a1p-mid-l2", title: "In class", audio: "p/a1pmid-l2.mp3", speaker: "A teacher",
      items: [
        ch("What page do they open?", ["Twenty", "Twelve", "Two"], 0, "'page twenty'."),
        ch("How many children are in the picture?", ["Three", "Two", "Four"], 0, "'three children in the garden'."),
        ch("What are the children doing?", ["Playing with a dog", "Eating cake in the garden", "Working in pairs"], 0, "'They are playing with a dog.'"),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write about yourself (30 words or more): your name, age, city, family and what you like and don't like." },
      { text: "Describe your bedroom (30 words or more). Say what there is, what colour things are and what you do there." },
    ],
    minWords: 30,
    checks: [
      { label: "Forms of be (am, is, are)", pattern: "\\b(am|is|are)\\b|\\w'(m|s|re)\\b", min: 2 },
      { label: "Present simple or there is / are", pattern: "\\b(like|likes|love|loves|have|has|live|lives|play|plays|there is|there are|there's)\\b", min: 2 },
      { label: "Linking words (and, but, because)", pattern: "\\b(and|but|because)\\b", min: 2 },
    ],
    rubric: ["I answered the task.", "I used am, is and are correctly.", "I joined ideas with and, but and because.", "I checked my capital letters and full stops."],
    model: "Hi! My name is Daniela and I'm twelve years old. I live in Cúcuta with my parents and my brother. I love music and dancing, but I don't like vegetables. My best friend is Sara. She is very funny.",
  },
  speaking: {
    prompts: [
      { text: "Talk for about 20 seconds: introduce yourself. Say your name, age, city and one thing you like." },
      { text: "Talk for about 20 seconds: describe your best friend. Say what they look like and what they like." },
    ],
    minWords: 25,
    seconds: 20,
    checks: [
      { label: "A clear start (My name is, I'm, This is, My best friend…)", pattern: "\\b(my name is|my name's|i'm|i am|this is|my best friend)\\b", min: 1 },
      { label: "Linking words (and, but)", pattern: "\\b(and|but)\\b", min: 2 },
    ],
    rubric: ["I said clearly who or what I'm talking about.", "I used and and but.", "I spoke slowly and clearly."],
    model: "Hi! My name is Juan and I'm thirteen years old. I'm from Montería. I live with my mum and my two sisters. I love football and I play every day, but I don't like swimming.",
  },
};

export const A1P_GATE: BandAssessment = {
  band: "A1+",
  kind: "gate",
  title: "A1+ Gate",
  story: "The final check for A1+. Pass it, your teacher confirms your writing and speaking, and A2 opens.",
  bar: 75,
  reading: [
    {
      id: "a1p-gate-r1",
      title: "Notice: Sports Day",
      text:
`SPORTS DAY is on Friday, 15th November!

Time: 8:00 a.m. to 1:00 p.m.
Place: the school sports field. If it rains, we are in the gym.

Please bring:
- a water bottle
- a cap (it's usually hot!)
- your PE uniform

There are races, football and volleyball. Parents can come and watch. Don't bring your phone. There is free fruit and juice for everyone at 10:30.`,
      items: [
        ch("When is Sports Day?", ["Friday, 15th November", "Friday, 5th November", "Monday, 15th November"], 0, "First line."),
        ch("Where is Sports Day if it rains?", ["In the gym", "In the classroom", "There's no Sports Day"], 0, "'If it rains, we are in the gym.'"),
        ch("Why do students need a cap?", ["It's usually hot.", "It's part of the uniform.", "For the races."], 0, "'it's usually hot'."),
        ch("Which thing is NOT allowed?", ["A phone", "A water bottle", "A cap"], 0, "'Don't bring your phone.'"),
        ch("What happens at 10:30?", ["Free fruit and juice", "The races and football start", "Everyone goes into the gym"], 0, "Last line."),
      ],
    },
    {
      id: "a1p-gate-r2",
      title: "A message from Martín",
      text:
`Hi Pablo,

How are you? I'm at my grandparents' house in Villa de Leyva. It's a small town and it's very beautiful. The houses are white and the streets are old.

My grandpa is seventy and he can ride a horse! My grandma makes great soup. Every morning, we walk to the bakery and buy bread.

Today it's cold and windy, so I'm wearing my big jacket. Tomorrow we're going to visit the dinosaur museum. There is a very big fossil there!

See you on Monday,
Martín`,
      items: [
        ch("Where is Martín?", ["At his grandparents' house", "At the dinosaur museum", "At a hotel in Villa de Leyva"], 0, "Paragraph 1."),
        ch("What are the houses like?", ["White", "New", "Big and red"], 0, "Paragraph 1."),
        ch("What can his grandpa do?", ["Ride a horse", "Make soup", "Play the guitar"], 0, "Paragraph 2."),
        ch("What do they buy every morning?", ["Bread", "Soup", "Fruit"], 0, "Paragraph 2."),
        ch("Why is Martín wearing his big jacket?", ["It's cold and windy.", "He is going to ride a horse.", "The museum is cold inside."], 0, "Paragraph 3."),
      ],
    },
  ],
  listening: [
    {
      id: "a1p-gate-l1", title: "A phone message", audio: "p/a1pgate-l1.mp3", speaker: "A girl",
      items: [
        ch("Who is Lucía calling?", ["Her grandma", "Her mum", "Her friends at the park"], 0, "'Hello, Grandma!'"),
        ch("Where is Lucía?", ["At the park", "At her grandma's house", "At school"], 0, "'I'm at the park'."),
        ch("What's the weather like?", ["Sunny and warm", "Cold and rainy", "Windy"], 0, "'It's sunny and warm today.'"),
        ch("What time is Mum coming?", ["At five o'clock", "At four o'clock", "At nine o'clock"], 0, "'at five o'clock'."),
      ],
    },
    {
      id: "a1p-gate-l2", title: "At a café", audio: "p/a1pgate-l2.mp3", speaker: "A customer and a waiter",
      items: [
        ch("What sandwich does the customer want?", ["Cheese", "Ham", "Chicken"], 0, "'a cheese sandwich'."),
        ch("What does the customer drink?", ["Water", "Juice", "Coffee"], 0, "'A bottle of water, please.'"),
        ch("How much is it?", ["Six dollars", "Sixteen dollars", "Seven dollars"], 0, "'It's six dollars.'"),
        ch("What does the waiter say at the end?", ["Have a nice day!", "See you tomorrow!", "Good night!"], 0, "Last line."),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write a message to a new pen pal (50 words or more). Say who you are, describe your family and your day, and say what you like and what you can do." },
      { text: "Write about your town (50 words or more). Say what there is, what the weather is like, and what people do there. Use there is / there are." },
    ],
    minWords: 50,
    checks: [
      { label: "Forms of be (am, is, are)", pattern: "\\b(am|is|are)\\b|\\w'(m|s|re)\\b", min: 3 },
      { label: "A verb with -s for he / she / it", pattern: "\\b(he|she|it|my \\w+)\\s+(\\w+s)\\b", min: 1 },
      { label: "can / there is / there are", pattern: "\\b(can|can't|there is|there are|there's)\\b", min: 1 },
      { label: "Linking words (and, but, because, so)", pattern: "\\b(and|but|because|so)\\b", min: 3 },
    ],
    rubric: ["I answered all parts of the task.", "I used be and the present simple correctly.", "I added -s for he / she / it.", "I joined my ideas with linking words."],
    model: "Hi Emma! My name is Felipe and I'm thirteen. I live in Popayán with my mum, my dad and my little sister. My sister is six and she loves cats. I get up at six and I go to school by bus. I love football and I can play the guitar, but I can't swim. What do you like?",
  },
  speaking: {
    prompts: [
      { text: "Talk for about 30 seconds: describe your normal day. Say what you do in the morning, at school and in the evening." },
      { text: "Talk for about 30 seconds: describe a person in your family. Say who they are, what they look like and what they do." },
    ],
    minWords: 35,
    seconds: 30,
    checks: [
      { label: "A clear start (I'm going to talk about, My…, Every day…)", pattern: "\\b(i'm going to talk about|i want to talk about|my|every day|this is)\\b", min: 1 },
      { label: "Time words (in the morning, then, after school, at … o'clock)", pattern: "\\b(in the morning|in the evening|in the afternoon|then|after school|after that|at \\w+ o'clock|first)\\b", min: 2 },
      { label: "Linking words (and, but, because)", pattern: "\\b(and|but|because)\\b", min: 2 },
    ],
    rubric: ["I spoke for about 30 seconds.", "My ideas were in order.", "I used time words.", "I spoke slowly and clearly."],
    model: "I'm going to talk about my day. In the morning, I get up at six and I have breakfast with my family. Then I go to school by bus. I love art, but I don't like maths. After school, I do my homework and I play with my dog. I go to bed at nine o'clock.",
  },
};
