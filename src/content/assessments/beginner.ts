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
    script: "Hello! I am Rosa. I am ten. I have a dog. His name is Coco. He is brown and white." },
  { file: "p/pa1mid-l2.mp3", voice: "9hb1f7xQcMLB90qbYSY3",
    script: "Good morning! Sit down, please. Open your books. Take a red pencil. Draw a big circle." },
  { file: "p/pa1gate-l1.mp3", voice: "QW1sSL71Pw5oHbFDen25",
    script: "Look at my picture! The sun is yellow. I can see three birds. This is a tree. The cat is under the tree." },
  { file: "p/pa1gate-l2.mp3", voice: "MAy1fRIg5hTqbhiwOUyh",
    script: "Hi, Ben! How are you? I'm fine, thanks. Do you like apples? Yes, I do. I like bananas too. I don't like milk. Bye!" },
  { file: "p/a1mid-l1.mp3", voice: "tPDVQaZ6fdDCUmYpHyYd",
    script: "Hi, I'm Oscar. I'm from Peru and I'm eleven. I live with my mum and my grandma. I have a sister. Her name is Ana. I can play the guitar, but I can't swim." },
  { file: "p/a1mid-l2.mp3", voice: "8DvnqWWA3WWXixOm7zQI",
    script: "Hello, everyone. Today is Wednesday. We have maths at eight o'clock. We have English at nine. Break is at half past ten. After break we have PE. Wear your trainers, please!" },
  { file: "p/a1gate-l1.mp3", voice: "ideEOMYLgcyF9rr94ycz",
    script: "Hi, Mum! I'm at Sara's house. It's raining. Can you come by car, please? Her house is next to the supermarket. Come at six o'clock. Thanks, Mum!" },
  { file: "p/a1gate-l2.mp3", voice: "3f6pec3wODJsjTqtcNI2",
    script: "Hi! Can I help you? A chicken sandwich and a lemonade, please. Anything else? A banana, please. That's seven dollars. Here you are. Thank you!" },
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
`I am Pablo. I am nine.

I have two sisters. I have a cat. Her name is Mimi. She is white.

I like football. I like pizza. I don't like rice.`,
    items: [
      ch("How old is Pablo?", ["Nine", "Two", "Ten"], 0, "'I am nine.'"),
      ch("How many sisters?", ["Two", "One", "Three"], 0, "'I have two sisters.'"),
      ch("What colour is Mimi?", ["White", "Black", "Brown"], 0, "'She is white.'"),
      ch("What doesn't Pablo like?", ["Rice", "Pizza", "Football"], 0, "'I don't like rice.'"),
      gap("Pablo likes", ".", ["football", "pizza"], "He likes football and pizza."),
    ],
  }],
  listening: [
    {
      id: "pa1-mid-l1", title: "Meet Rosa", audio: "p/pa1mid-l1.mp3", speaker: "A girl",
      items: [
        ch("How old is Rosa?", ["Ten", "Two", "Twelve"], 0, "'I am ten.'"),
        ch("What is Coco?", ["A dog", "A cat", "A bird"], 0, "'I have a dog. His name is Coco.'"),
        ch("What colour is Coco?", ["Brown and white", "Black and white", "Red and blue"], 0, "'He is brown and white.'"),
      ],
    },
    {
      id: "pa1-mid-l2", title: "In class", audio: "p/pa1mid-l2.mp3", speaker: "A teacher",
      items: [
        ch("What colour is the pencil?", ["Red", "Blue", "Green"], 0, "'Take a red pencil.'"),
        ch("What do they draw?", ["A circle", "A star", "A house"], 0, "'Draw a big circle.'"),
        ch("What does the teacher say first?", ["Sit down", "Stand up", "Go home"], 0, "'Sit down, please.'"),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write about you (12 words or more): your name, your age and one thing you like." },
      { text: "Write about your bag (12 words or more): what is in it and what colour things are." },
    ],
    minWords: 12,
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
`This is my room. It is small. It is blue.

I have a bed and a desk. My bag is on the chair. My ball is under the bed.

I like my room!`,
      items: [
        ch("What colour is the room?", ["Blue", "Green", "White"], 0, "'It is blue.'"),
        ch("Is the room big?", ["No, it is small.", "Yes, it is big.", "Yes, it is long."], 0, "'It is small.'"),
        ch("Where is the bag?", ["On the chair", "On the desk", "Under the bed"], 0, "'My bag is on the chair.'"),
        ch("Where is the ball?", ["Under the bed", "On the chair", "In the bag"], 0, "'My ball is under the bed.'"),
      ],
    },
    {
      id: "pa1-gate-r2",
      title: "A card",
      text:
`Dear Grandma,

Happy birthday! You are seventy!

This is for you. It's a flower. It's red and yellow.

I love you!
Ana`,
      items: [
        ch("Who is the card for?", ["Grandma", "Ana", "Mum"], 0, "'Dear Grandma'"),
        ch("How old is Grandma?", ["Seventy", "Seventeen", "Seven"], 0, "'You are seventy today!'"),
        ch("What is the present?", ["A flower", "A cake", "A ball"], 0, "'It's a flower.'"),
        ch("What colours is the flower?", ["Red and yellow", "Red and blue", "Pink and green"], 0, "'It's red and yellow.'"),
      ],
    },
  ],
  listening: [
    {
      id: "pa1-gate-l1", title: "My picture", audio: "p/pa1gate-l1.mp3", speaker: "A child",
      items: [
        ch("What colour is the sun?", ["Yellow", "Orange", "Red"], 0, "'The sun is yellow.'"),
        ch("How many birds?", ["Three", "Two", "Four"], 0, "'I can see three birds.'"),
        ch("Where is the cat?", ["Under the tree", "In the house", "On the bed"], 0, "'The cat is under the tree.'"),
      ],
    },
    {
      id: "pa1-gate-l2", title: "Two friends", audio: "p/pa1gate-l2.mp3", speaker: "Two friends",
      items: [
        ch("How is Ben?", ["Fine", "Tired", "Sad"], 0, "'I'm fine, thanks.'"),
        ch("What fruit does Ben like?", ["Apples and bananas", "Oranges and apples", "Only oranges"], 0, "'Yes, I do. I like bananas too.'"),
        ch("What doesn't Ben like?", ["Milk", "Bananas", "Water"], 0, "'I don't like milk.'"),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write about your family (20 words or more). Who is in it? How old are they? What do they like?" },
      { text: "Write about your favourite animal (20 words or more). What colour is it? Is it big or small?" },
    ],
    minWords: 20,
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
`My best friend is Tomás. He is twelve. He lives near my house. He has short black hair.

Tomás is very funny. He can play the drums. He has a cat. Her name is Pepa. We play video games on Saturdays.

Tomás doesn't like vegetables, but he loves pizza.`,
    items: [
      ch("Where does Tomás live?", ["Near my house", "Far away", "At school"], 0, "'He lives near my house.'"),
      ch("What colour is his hair?", ["Black", "Brown", "Blond"], 0, "'He has short black hair.'"),
      ch("What can Tomás do?", ["Play the drums", "Play the piano", "Swim fast"], 0, "'He can play the drums.'"),
      ch("When do they play video games?", ["On Saturdays", "Every day", "On Mondays"], 0, "'We play video games on Saturdays.'"),
      ch("What doesn't Tomás like?", ["Vegetables", "Pizza", "Video games"], 0, "'Tomás doesn't like vegetables.'"),
      gap("Tomás", "a cat. (have)", ["has"], "he → has."),
    ],
  }],
  listening: [
    {
      id: "a1-mid-l1", title: "Meet Oscar", audio: "p/a1mid-l1.mp3", speaker: "A boy",
      items: [
        ch("Where is Oscar from?", ["Peru", "Chile", "Panama"], 0, "'I'm from Lima, in Peru.'"),
        ch("Who does Oscar live with?", ["Mum and grandma", "Dad and sister", "Mum and dad"], 0, "'I live with my mum and my grandma.'"),
        ch("What can't Oscar do?", ["Swim", "Play the guitar", "Speak English"], 0, "'I can't swim.'"),
      ],
    },
    {
      id: "a1-mid-l2", title: "The school day", audio: "p/a1mid-l2.mp3", speaker: "A teacher",
      items: [
        ch("What day is it?", ["Wednesday", "Monday", "Friday"], 0, "'Today is Wednesday.'"),
        ch("What time is break?", ["10:30", "10:00", "9:30"], 0, "'half past ten'"),
        ch("What do they have after break?", ["PE", "Maths", "English"], 0, "'After break we have PE.'"),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write about your best friend (25 words or more): name, age, what he or she looks like, can do and likes." },
      { text: "Write about your house (25 words or more): the rooms, your bedroom and what is in it." },
    ],
    minWords: 25,
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
`ART CLUB

Days: Tuesday and Thursday
Time: 2:30 to 4:00
Place: Room 12, next to the library
Teacher: Mr Díaz

You can draw and paint.
Bring a pencil and an old T-shirt.
Ask in the office today!`,
      items: [
        ch("When is Art Club?", ["Tuesday and Thursday", "Tuesday and Friday", "Monday and Thursday"], 0, "'Days: Tuesday and Thursday'"),
        ch("Where is Room 12?", ["Next to the library", "Next to the office", "Next to the gym"], 0, "'next to the library'"),
        ch("What do students bring?", ["A pencil and a T-shirt", "Paint and paper", "A book and a pen"], 0, "'Bring a pencil and an old T-shirt.'"),
        ch("Who is the teacher?", ["Mr Díaz", "Mrs Room", "Mr Library"], 0, "'Teacher: Mr Díaz'"),
      ],
    },
    {
      id: "a1-gate-r2",
      title: "A message from Lisbon",
      text:
`Hi Carla,

I'm on holiday in Portugal with my family. Our hotel is small, but it's near the sea. It's sunny and hot.

In the afternoon we go to the beach. My brother swims every day. I don't swim. The water is very cold! I read my book.

I love the food here. See you next week!

Marta`,
      items: [
        ch("Where is Marta?", ["In Portugal", "In Spain", "In Italy"], 0, "'I'm on holiday in Portugal.'"),
        ch("What is the weather like?", ["Sunny and hot", "Rainy and cold", "Cloudy"], 0, "'It's sunny and hot.'"),
        ch("Who swims every day?", ["Her brother", "Marta", "Carla"], 0, "'My brother swims every day.'"),
        ch("Why doesn't Marta swim?", ["The water is cold.", "She can't swim.", "The beach is closed."], 0, "'The water is very cold!'"),
        ch("What does Marta do at the beach?", ["She reads", "She sleeps", "She plays"], 0, "'I read my book.'"),
      ],
    },
  ],
  listening: [
    {
      id: "a1-gate-l1", title: "A phone message", audio: "p/a1gate-l1.mp3", speaker: "A girl",
      items: [
        ch("Where is the girl?", ["At Sara's house", "At the supermarket", "At school"], 0, "'I'm at Sara's house.'"),
        ch("What's the weather like?", ["It's raining", "It's sunny", "It's windy"], 0, "'It's raining.'"),
        ch("Where is Sara's house?", ["Next to the supermarket", "Next to the school", "Near the park"], 0, "'next to the supermarket'"),
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
      { text: "Write a message to a new pen pal (35 words or more). Say who you are, describe your family and your day, and say what you can do." },
      { text: "Write about your weekend (35 words or more). Say what you do on Saturday and Sunday, who with, and what you like." },
    ],
    minWords: 35,
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
