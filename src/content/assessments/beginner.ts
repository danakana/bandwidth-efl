/**
 * Pre-A1 and A1 Midpoints and Gates. Original texts written for Bandwidth EFL. For teacher review.
 * Listening: scripts are read by the device voice until ElevenLabs recordings are uploaded.
 * Choice options are written answer-first; the player shuffles them.
 * First bands: very short texts, slow audio, a few sentences of writing.
 */
import { ch, gap } from "../practice/helpers";
import type { BandAssessment } from "./types";

export const BEGINNER_ASSESSMENT_CLIPS: { file: string; voice: string; script: string }[] = [
  { file: "p/pa1mid-l1.mp3", voice: "cgSgspJ2msm6clMCkdW9",
    script: "Hello! My name is Rosa. R, O, S, A. I am ten. I have a brother and a sister. I have a dog. His name is Coco. He is brown and white." },
  { file: "p/pa1mid-l2.mp3", voice: "9hb1f7xQcMLB90qbYSY3",
    script: "Good morning, children. Sit down, please. Open your books. Take a red pencil. Now draw a big circle and a small star." },
  { file: "p/pa1gate-l1.mp3", voice: "QW1sSL71Pw5oHbFDen25",
    script: "Look at my picture! There is a big yellow sun. There are three birds in the sky. There is a tree and a small house. The cat is under the tree." },
  { file: "p/pa1gate-l2.mp3", voice: "MAy1fRIg5hTqbhiwOUyh",
    script: "Hi, Ben! How are you? I'm fine, thanks. Do you like apples? Yes, I do. I like apples and bananas. I don't like milk. Me too! Bye, Ben! See you tomorrow!" },
  { file: "p/a1mid-l1.mp3", voice: "tPDVQaZ6fdDCUmYpHyYd",
    script: "Hi, I'm Oscar. I'm from Lima, in Peru, and I'm eleven. I live in a flat with my mum and my grandma. I have a sister. Her name is Ana and she's fourteen. I can play the guitar, but I can't swim." },
  { file: "p/a1mid-l2.mp3", voice: "8DvnqWWA3WWXixOm7zQI",
    script: "Hello, everyone. Today is Wednesday. We have maths at eight o'clock, then English at nine. Break is at half past ten. After break we have PE, so please wear your trainers." },
  { file: "p/a1gate-l1.mp3", voice: "ideEOMYLgcyF9rr94ycz",
    script: "Hi, Mum! I'm at Sara's house. We're doing our homework. It's raining a lot, so can you come by car? Her house is next to the big supermarket. Come at six o'clock, please. Thanks, Mum!" },
  { file: "p/a1gate-l2.mp3", voice: "3f6pec3wODJsjTqtcNI2",
    script: "Hi! Can I help you? Yes, please. Can I have a chicken sandwich and a lemonade? Sure. Anything else? A banana, please. That's seven dollars. Here you are. Thank you!" },
];

export const PA1_MIDPOINT: BandAssessment = {
  band: "Pre-A1",
  kind: "midpoint",
  title: "Pre-A1 Midpoint",
  story: "Halfway through Pre-A1. A short, friendly check: read, listen, write a few words and say a few words.",
  bar: 70,
  reading: [{
    id: "pa1-mid-r1",
    title: "This is me",
    text:
`Hi! I'm Pablo. I am nine. I live in Cali.

I have a big family. I have two sisters and one brother. I have a cat. Her name is Mimi. She is white.

I like football. I like pizza. I don't like rice.`,
    items: [
      ch("How old is Pablo?", ["Nine", "Two", "Ten"], 0, "'I am nine.'"),
      ch("How many sisters has Pablo got?", ["Two", "One", "Three"], 0, "'two sisters'"),
      ch("What colour is Mimi?", ["White", "Black", "Brown"], 0, "'She is white.'"),
      ch("What doesn't Pablo like?", ["Rice", "Pizza", "Football"], 0, "'I don't like rice.'"),
      gap("Pablo", "in Cali.", ["lives"], "He lives in Cali."),
    ],
  }],
  listening: [
    {
      id: "pa1-mid-l1", title: "Meet Rosa", audio: "p/pa1mid-l1.mp3", speaker: "A girl",
      items: [
        ch("How old is Rosa?", ["Ten", "Two", "Twelve"], 0, "'I am ten.'"),
        ch("What pet has Rosa got?", ["A dog", "A cat", "A bird"], 0, "'I have a dog.'"),
        ch("What colour is Coco?", ["Brown and white", "Black and white", "All brown"], 0, "'He is brown and white.'"),
      ],
    },
    {
      id: "pa1-mid-l2", title: "In class", audio: "p/pa1mid-l2.mp3", speaker: "A teacher",
      items: [
        ch("What colour is the pencil?", ["Red", "Blue", "Green"], 0, "'Take a red pencil.'"),
        ch("What do the children draw first?", ["A big circle", "A small star", "A red house"], 0, "'draw a big circle'"),
        ch("What does the teacher say first?", ["Sit down", "Stand up", "Close your books"], 0, "'Sit down, please.'"),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write about you (15 words or more): your name, your age, your family and one thing you like." },
      { text: "Write about your bag (15 words or more): what is in it and what colour things are." },
    ],
    minWords: 15,
    checks: [
      { label: "I am or I'm", pattern: "\\bI am\\b|\\bI'm\\b", min: 1 },
      { label: "I have or I like", pattern: "\\bI (have|like|don't like)\\b", min: 1 },
    ],
    rubric: ["I wrote about me.", "I used I am, I have and I like.", "I wrote I with a capital letter."],
    model: "My name is Juana. I am ten. I have a mum, a dad and a brother. I like dogs and I like ice cream.",
  },
  speaking: {
    prompts: [
      { text: "Talk for about 15 seconds: say hello, your name, your age and one thing you like." },
      { text: "Talk for about 15 seconds: say what is in your classroom." },
    ],
    minWords: 12,
    seconds: 15,
    checks: [
      { label: "I'm or My name is", pattern: "\\b(i'm|i am|my name is|this is|there is|there are)\\b", min: 1 },
    ],
    rubric: ["I said hello.", "I spoke slowly and clearly.", "I used I'm or There is."],
    model: "Hello! My name is Carlos. I'm eleven. I like football and I like my dog.",
  },
};

export const PA1_GATE: BandAssessment = {
  band: "Pre-A1",
  kind: "gate",
  title: "Pre-A1 Gate",
  story: "The final check for Pre-A1. Pass it, your teacher confirms your writing and speaking, and A1 opens.",
  bar: 75,
  reading: [
    {
      id: "pa1-gate-r1",
      title: "My room",
      text:
`This is my room. It is small and blue. There is a bed and a desk. There are two chairs.

My bag is on the chair. My books are on the desk. My ball is under the bed.

I like my room. It is my favourite room!`,
      items: [
        ch("What colour is the room?", ["Blue", "Green", "White"], 0, "'It is small and blue.'"),
        ch("How many chairs are there?", ["Two", "One", "Three"], 0, "'There are two chairs.'"),
        ch("Where is the bag?", ["On the chair", "On the desk", "Under the bed"], 0, "'My bag is on the chair.'"),
        ch("Where is the ball?", ["Under the bed", "On the chair", "In the bag"], 0, "'My ball is under the bed.'"),
      ],
    },
    {
      id: "pa1-gate-r2",
      title: "A card",
      text:
`Dear Grandma,

Happy birthday! You are seventy today!

Here is a present for you. It's a red and yellow flower. I like flowers. Do you like flowers too?

I love you!
Ana`,
      items: [
        ch("Who is the card for?", ["Grandma", "Ana", "Mum"], 0, "'Dear Grandma'"),
        ch("How old is Grandma?", ["Seventy", "Seventeen", "Seven"], 0, "'You are seventy today!'"),
        ch("What is the present?", ["A flower", "A cake", "A card"], 0, "'It's a red and yellow flower.'"),
        ch("What colours is the present?", ["Red and yellow", "Red and blue", "Yellow and green"], 0, "'a red and yellow flower'"),
      ],
    },
  ],
  listening: [
    {
      id: "pa1-gate-l1", title: "My picture", audio: "p/pa1gate-l1.mp3", speaker: "A child",
      items: [
        ch("What colour is the sun?", ["Yellow", "Orange", "Red"], 0, "'a big yellow sun'"),
        ch("How many birds are there?", ["Three", "Two", "Four"], 0, "'three birds in the sky'"),
        ch("Where is the cat?", ["Under the tree", "In the house", "On the house"], 0, "'The cat is under the tree.'"),
      ],
    },
    {
      id: "pa1-gate-l2", title: "Two friends", audio: "p/pa1gate-l2.mp3", speaker: "Two friends",
      items: [
        ch("How is Ben?", ["Fine", "Tired", "Sad"], 0, "'I'm fine, thanks.'"),
        ch("What fruit does Ben like?", ["Apples and bananas", "Only apples", "Oranges"], 0, "'I like apples and bananas.'"),
        ch("What doesn't Ben like?", ["Milk", "Bananas", "Water"], 0, "'I don't like milk.'"),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write about your family (25 words or more). Who is in it? How old are they? What do they like?" },
      { text: "Write about your favourite animal (25 words or more). What colour is it? Is it big or small? What does it eat?" },
    ],
    minWords: 25,
    checks: [
      { label: "am, is or are", pattern: "\\b(am|is|are)\\b|\\w'(m|s|re)\\b", min: 2 },
      { label: "have, like or don't like", pattern: "\\b(have|has|like|likes|don't like)\\b", min: 1 },
      { label: "and or but", pattern: "\\b(and|but)\\b", min: 1 },
    ],
    rubric: ["I answered the task.", "I used am, is and are.", "I put colours before things.", "I used capital letters and full stops."],
    model: "I have a small family. My mum is thirty-five and my dad is forty. I have a sister. She is six. She likes cats, but I like dogs. We have a big brown dog.",
  },
  speaking: {
    prompts: [
      { text: "Talk for about 20 seconds: say hello, your name, your age, your family and two things you like." },
      { text: "Talk for about 20 seconds: describe your room. What is in it? What colour is it?" },
    ],
    minWords: 18,
    seconds: 20,
    checks: [
      { label: "A clear start (Hello, My name is, This is …)", pattern: "\\b(hello|hi|my name is|i'm|this is)\\b", min: 1 },
      { label: "and or but", pattern: "\\b(and|but)\\b", min: 1 },
    ],
    rubric: ["I spoke for about 20 seconds.", "I used and.", "I spoke slowly and clearly."],
    model: "Hello! My name is Valeria and I'm ten. I have a mum, a dad and a little brother. I like dancing and I like pizza.",
  },
};

export const A1_MIDPOINT: BandAssessment = {
  band: "A1",
  kind: "midpoint",
  title: "A1 Midpoint",
  story: "Halfway through A1. A short, friendly check across all four skills, so any gaps show up now.",
  bar: 70,
  reading: [{
    id: "a1-mid-r1",
    title: "My best friend",
    text:
`My best friend is Tomás. He is twelve and he lives near my house in Bucaramanga. He has short black hair and brown eyes.

Tomás is very funny. He can play the drums and he can draw very well. He has a cat called Pepe. We play video games together on Saturdays.

Tomás doesn't like vegetables, but he loves pizza and ice cream. His birthday is in October.`,
    items: [
      ch("Where does Tomás live?", ["Near the writer's house", "In another city far away", "Next to the school"], 0, "Paragraph 1."),
      ch("What colour is his hair?", ["Black", "Brown", "Blond"], 0, "Paragraph 1."),
      ch("What can Tomás do?", ["Play the drums", "Play the guitar", "Swim very fast"], 0, "Paragraph 2."),
      ch("When do they play video games?", ["On Saturdays", "Every day", "In October"], 0, "Paragraph 2."),
      ch("What doesn't Tomás like?", ["Vegetables", "Pizza", "Ice cream"], 0, "Paragraph 3."),
      gap("Tomás", "a cat called Pepe. (have)", ["has"], "he → has."),
    ],
  }],
  listening: [
    {
      id: "a1-mid-l1", title: "Meet Oscar", audio: "p/a1mid-l1.mp3", speaker: "A boy",
      items: [
        ch("Where is Oscar from?", ["Peru", "Chile", "Panama"], 0, "'I'm from Lima, in Peru.'"),
        ch("Who does Oscar live with?", ["His mum and his grandma", "His dad and his sister", "His mum and his dad"], 0, "'with my mum and my grandma'"),
        ch("What can't Oscar do?", ["Swim", "Play the guitar", "Speak English"], 0, "'I can't swim.'"),
      ],
    },
    {
      id: "a1-mid-l2", title: "The school day", audio: "p/a1mid-l2.mp3", speaker: "A teacher",
      items: [
        ch("What day is it?", ["Wednesday", "Monday", "Friday"], 0, "'Today is Wednesday.'"),
        ch("What time is break?", ["10:30", "10:00", "9:30"], 0, "'half past ten'"),
        ch("Why do students need trainers?", ["They have PE", "It's raining", "They have a test"], 0, "'we have PE, so please wear your trainers'"),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write about your best friend (30 words or more): name, age, what he or she looks like, can do and likes." },
      { text: "Write about your house (30 words or more): the rooms, your bedroom and what is in it." },
    ],
    minWords: 30,
    checks: [
      { label: "Forms of be (am, is, are)", pattern: "\\b(am|is|are)\\b|\\w'(m|s|re)\\b", min: 2 },
      { label: "have / has / can / there is", pattern: "\\b(have|has|can|can't|there is|there are|there's)\\b", min: 2 },
      { label: "Linking words (and, but)", pattern: "\\b(and|but)\\b", min: 2 },
    ],
    rubric: ["I answered the task.", "I used he / she and his / her correctly.", "I joined ideas with and and but.", "I checked my capital letters."],
    model: "My best friend is Laura. She is eleven and she lives in my street. She has long brown hair. She can dance very well, but she can't swim. She likes music and cats.",
  },
  speaking: {
    prompts: [
      { text: "Talk for about 20 seconds: introduce yourself. Say your name, age, city, family and one thing you can do." },
      { text: "Talk for about 20 seconds: describe your school day. Say your subjects and your favourite one." },
    ],
    minWords: 22,
    seconds: 20,
    checks: [
      { label: "A clear start (My name is, I'm, My school…)", pattern: "\\b(my name is|i'm|i am|my school|this is)\\b", min: 1 },
      { label: "Linking words (and, but)", pattern: "\\b(and|but)\\b", min: 2 },
    ],
    rubric: ["I said clearly what I'm talking about.", "I used and and but.", "I spoke slowly and clearly."],
    model: "Hi! My name is Sergio and I'm twelve. I live in Neiva with my mum and my brother. I can play basketball, but I can't sing. I love video games.",
  },
};

export const A1_GATE: BandAssessment = {
  band: "A1",
  kind: "gate",
  title: "A1 Gate",
  story: "The final check for A1. Pass it, your teacher confirms your writing and speaking, and A1+ opens.",
  bar: 75,
  reading: [
    {
      id: "a1-gate-r1",
      title: "Notice: Art Club",
      text:
`NEW! ART CLUB

When: every Tuesday and Thursday, 2:30 to 4:00
Where: Room 12, next to the library
Who: students from 10 to 14 years old

What can you do? Draw, paint and make things with paper.

Please bring a pencil and an old T-shirt. Paint is free! The teacher is Mr Díaz. There are only twenty places, so ask in the office today.`,
      items: [
        ch("On which days is Art Club?", ["Tuesday and Thursday", "Tuesday and Friday", "Monday and Thursday"], 0, "'every Tuesday and Thursday'"),
        ch("Where is Room 12?", ["Next to the library", "Next to the office", "Next to the gym"], 0, "'next to the library'"),
        ch("What do students need to bring?", ["A pencil and an old T-shirt", "Paint, paper and scissors", "Money for the paint and paper"], 0, "'Please bring a pencil and an old T-shirt.'"),
        ch("How many places are there?", ["Twenty", "Twelve", "Fourteen"], 0, "'only twenty places'"),
        ch("What should students do today?", ["Ask in the office", "Go to Room 12", "Talk to Mr Díaz"], 0, "'ask in the office today'"),
      ],
    },
    {
      id: "a1-gate-r2",
      title: "A message from Lisbon",
      text:
`Hi Carla,

I'm on holiday in Lisbon, in Portugal, with my family. Our hotel is small, but it's near the sea. The weather is great. It's sunny and hot every day.

In the morning we visit the old streets and the castle. In the afternoon we go to the beach. My brother swims every day, but I don't like the water. It's very cold! I read my book on the sand.

The food is delicious. I love the fish and the little cakes. See you next week!

Marta`,
      items: [
        ch("Where is Marta?", ["In Portugal", "In Spain", "In Italy"], 0, "Paragraph 1."),
        ch("What is the hotel like?", ["Small, but near the sea", "Big and near the castle", "Small and far from the sea"], 0, "Paragraph 1."),
        ch("What do they do in the morning?", ["Visit the old streets and the castle", "Go to the beach and swim", "Read books on the sand at the beach"], 0, "Paragraph 2."),
        ch("Why doesn't Marta swim?", ["The water is very cold.", "She can't swim.", "The beach is closed."], 0, "Paragraph 2."),
        ch("What food does Marta love?", ["The fish and the little cakes", "The pizza and the pasta", "The ice cream at the beach"], 0, "Paragraph 3."),
      ],
    },
  ],
  listening: [
    {
      id: "a1-gate-l1", title: "A phone message", audio: "p/a1gate-l1.mp3", speaker: "A girl",
      items: [
        ch("Where is the girl?", ["At Sara's house", "At the supermarket", "At school"], 0, "'I'm at Sara's house.'"),
        ch("What's the weather like?", ["It's raining", "It's sunny", "It's windy"], 0, "'It's raining a lot'"),
        ch("Where is Sara's house?", ["Next to the supermarket", "Next to the school", "Near the park"], 0, "'next to the big supermarket'"),
        ch("What time should Mum come?", ["At six o'clock", "At seven o'clock", "At five o'clock"], 0, "'Come at six o'clock, please.'"),
      ],
    },
    {
      id: "a1-gate-l2", title: "At a café", audio: "p/a1gate-l2.mp3", speaker: "A customer and a waiter",
      items: [
        ch("What sandwich does the customer want?", ["Chicken", "Cheese", "Egg"], 0, "'a chicken sandwich'"),
        ch("What drink does the customer order?", ["Lemonade", "Water", "Orange juice"], 0, "'and a lemonade'"),
        ch("What else does the customer want?", ["A banana", "An apple", "A cake"], 0, "'A banana, please.'"),
        ch("How much is it?", ["Seven dollars", "Seventeen dollars", "Six dollars"], 0, "'That's seven dollars.'"),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write a message to a new pen pal (40 words or more). Say who you are, describe your family and your day, and say what you can do." },
      { text: "Write about your weekend (40 words or more). Say what you do on Saturday and Sunday, who with, and what you like." },
    ],
    minWords: 40,
    checks: [
      { label: "Forms of be (am, is, are)", pattern: "\\b(am|is|are)\\b|\\w'(m|s|re)\\b", min: 2 },
      { label: "Present simple (I play, I go, we have …)", pattern: "\\b(I|we|they)\\s+(play|go|have|get|watch|walk|live|like|love|do|eat|read)\\b", min: 2 },
      { label: "can or can't", pattern: "\\b(can|can't)\\b", min: 1 },
      { label: "Linking words (and, but, because, so)", pattern: "\\b(and|but|because|so)\\b", min: 2 },
    ],
    rubric: ["I answered all parts of the task.", "I used be, have and the present simple correctly.", "I used he / she and his / her correctly.", "I joined my ideas with linking words."],
    model: "Hi Leo! My name is Andrea and I'm twelve. I live in Pasto with my mum, my dad and my brother. My brother is eight. I get up at six and I walk to school. I can play the piano, but I can't swim. I love music and drawing.",
  },
  speaking: {
    prompts: [
      { text: "Talk for about 30 seconds: describe your normal day, from the morning to the evening." },
      { text: "Talk for about 30 seconds: describe a person in your family. Say what he or she looks like, likes and can do." },
    ],
    minWords: 30,
    seconds: 30,
    checks: [
      { label: "A clear start (My …, Every day …, This is …)", pattern: "\\b(my|every day|this is|i'm going to talk about)\\b", min: 1 },
      { label: "Time words (in the morning, then, after school, at … o'clock)", pattern: "\\b(in the morning|in the evening|in the afternoon|then|after school|at \\w+ o'clock|first)\\b", min: 1 },
      { label: "Linking words (and, but)", pattern: "\\b(and|but)\\b", min: 2 },
    ],
    rubric: ["I spoke for about 30 seconds.", "My ideas were in order.", "I used time words.", "I spoke slowly and clearly."],
    model: "Every day I get up at six o'clock. In the morning I have breakfast and then I go to school by bus. After school I do my homework and I play football. In the evening I watch TV with my family and I go to bed at nine.",
  },
};
