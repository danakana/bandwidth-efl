/** Graded reading for Pre-A1 and A1. Original texts for Bandwidth EFL. For teacher review. */
import type { Story } from "./types";

export const BEGINNER_STORIES: Story[] = [
  // ---------------- Pre-A1 ----------------
  {
    id: "pa1-my-cat", band: "Pre-A1", universe: "science", kind: "story",
    title: "My cat Luna", blurb: "Meet Luna. She is small and black.",
    text: `This is my cat. Her name is Luna. She is small and black. She has green eyes.

Luna likes milk. She likes fish too. She doesn't like water!

Luna sleeps on my bed. She is my friend.`,
    gloss: [
      { word: "eyes", means: "you see with them", es: "ojos" },
      { word: "sleeps", means: "rests at night with closed eyes", es: "duerme" },
      { word: "friend", means: "a person or animal you like a lot", es: "amigo, amiga" },
    ],
    questions: [
      { q: "What colour is Luna?", options: ["Black", "Green", "White"], answer: 0, why: "\"She is small and black.\"" },
      { q: "What doesn't Luna like?", options: ["Fish", "Water", "Milk"], answer: 1, why: "\"She doesn't like water!\"" },
      { q: "Where does Luna sleep?", options: ["In a box", "On the floor", "On my bed"], answer: 2, why: "\"Luna sleeps on my bed.\"" },
    ],
  },
  {
    id: "pa1-my-bag", band: "Pre-A1", universe: "words", kind: "story",
    title: "What's in my bag?", blurb: "Tom opens his school bag.",
    text: `Hi! I'm Tom. I am nine. I live in London.

This is my school bag. It is blue. What is in my bag? A book, two pencils and a ruler. There is an apple too. It's for lunch.

Oh no! Where is my pen? It isn't in my bag. It's under my bed!`,
    gloss: [
      { word: "bag", means: "you carry things in it", es: "mochila, bolso" },
      { word: "lunch", means: "the meal in the middle of the day", es: "almuerzo" },
      { word: "under", means: "below", es: "debajo de" },
    ],
    questions: [
      { q: "How old is Tom?", options: ["Nine", "Ten", "Two"], answer: 0, why: "\"I am nine.\"" },
      { q: "How many pencils are in the bag?", options: ["One", "Two", "Three"], answer: 1, why: "\"two pencils\"" },
      { q: "Where is the pen?", options: ["In the bag", "On the desk", "Under the bed"], answer: 2, why: "\"It's under my bed!\"" },
    ],
  },
  {
    id: "pa1-colours-park", band: "Pre-A1", universe: "arts", kind: "story",
    title: "Colours in the park", blurb: "Amina counts colours in a park in Nairobi.",
    text: `I'm Amina. I live in Nairobi, in Kenya. Today I am in the park with my mum.

I can see a lot of colours! The trees are green. The sky is blue. There are three red flowers and a yellow bird.

My favourite colour is purple. Is there a purple thing in the park? Yes! My mum's dress is purple!`,
    gloss: [
      { word: "park", means: "a green place with trees in a city", es: "parque" },
      { word: "flowers", means: "the colourful parts of a plant", es: "flores" },
      { word: "favourite", means: "the one you like best", es: "favorito" },
    ],
    questions: [
      { q: "Where does Amina live?", options: ["In Kenya", "In London", "In Colombia"], answer: 0, why: "\"I live in Nairobi, in Kenya.\"" },
      { q: "What colour is the bird?", options: ["Purple", "Yellow", "Red"], answer: 1, why: "\"a yellow bird\"" },
      { q: "What is purple in the park?", options: ["A flower", "A tree", "Mum's dress"], answer: 2, why: "\"My mum's dress is purple!\"" },
    ],
  },
  {
    id: "pa1-farm", band: "Pre-A1", universe: "science", kind: "story",
    title: "At the farm", blurb: "Sofía visits her grandpa's farm in Boyacá.",
    text: `My grandpa has a farm in Boyacá. I go to the farm on Saturdays.

There are a lot of animals. There are two horses, five cows and ten chickens. There is a big brown dog. His name is Toto.

I like the horses. They are very big. I don't like the chickens. They are noisy!`,
    gloss: [
      { word: "farm", means: "land with animals and plants", es: "finca, granja" },
      { word: "horses", means: "big animals people ride", es: "caballos" },
      { word: "noisy", means: "making a lot of sound", es: "ruidoso" },
    ],
    questions: [
      { q: "When does Sofía go to the farm?", options: ["On Saturdays", "On Mondays", "Every day"], answer: 0, why: "\"I go to the farm on Saturdays.\"" },
      { q: "How many cows are there?", options: ["Ten", "Five", "Two"], answer: 1, why: "\"five cows\"" },
      { q: "Why doesn't Sofía like the chickens?", options: ["They are big", "They are brown", "They are noisy"], answer: 2, why: "\"They are noisy!\"" },
    ],
  },
  {
    id: "pa1-robot", band: "Pre-A1", universe: "futures", kind: "story",
    title: "My robot", blurb: "Kenji draws a robot friend.",
    text: `I'm Kenji. I am ten. I live in Tokyo, in Japan.

This is my robot. I draw him in art class. His name is Bip. He is grey and orange. He has a big square head and two small eyes. He has four arms!

Bip can dance and sing. He can't swim. He is my robot friend.`,
    gloss: [
      { word: "draw", means: "make a picture with a pencil", es: "dibujar" },
      { word: "square", means: "a shape with four sides the same", es: "cuadrado" },
      { word: "swim", means: "move in water", es: "nadar" },
    ],
    questions: [
      { q: "Where does Kenji live?", options: ["In Japan", "In Kenya", "In England"], answer: 0, why: "\"I live in Tokyo, in Japan.\"" },
      { q: "How many arms has Bip got?", options: ["Two", "Four", "Ten"], answer: 1, why: "\"He has four arms!\"" },
      { q: "What can't Bip do?", options: ["Dance", "Sing", "Swim"], answer: 2, why: "\"He can't swim.\"" },
    ],
  },
  {
    id: "pa1-birthday", band: "Pre-A1", universe: "screens", kind: "story",
    title: "Happy birthday, Leo!", blurb: "A birthday message from a friend.",
    text: `Hi Leo!

Happy birthday! You are eleven today! Here is your present. It's a ball. It's red and white. Do you like it?

See you at your party at four o'clock. I have a cake for you. It's a chocolate cake!

Your friend,
Max`,
    gloss: [
      { word: "birthday", means: "the day you were born, every year", es: "cumpleaños" },
      { word: "present", means: "something you give to a person", es: "regalo" },
      { word: "party", means: "a time with friends, music and food", es: "fiesta" },
    ],
    questions: [
      { q: "How old is Leo today?", options: ["Eleven", "Four", "Ten"], answer: 0, why: "\"You are eleven today!\"" },
      { q: "What is the present?", options: ["A cake", "A ball", "A book"], answer: 1, why: "\"Here is your present. It's a ball.\"" },
      { q: "When is the party?", options: ["At eleven o'clock", "At two o'clock", "At four o'clock"], answer: 2, why: "\"See you at your party at four o'clock.\"" },
    ],
  },
  // ---------------- A1 ----------------
  {
    id: "a1-new-friend", band: "A1", universe: "words", kind: "story",
    title: "A message from Canada", blurb: "Emma writes to her new pen pal.",
    text: `Hi Camila,

My name is Emma and I'm twelve. I live in Toronto, in Canada. I have one brother. His name is Noah and he's nine. We have a dog called Max.

I go to Maple Street School. My favourite subject is science. I don't like maths very much! After school I play hockey with my friends. It's very cold here in winter, so we play on ice.

Where do you live? What do you do after school? Please write soon!

Emma`,
    gloss: [
      { word: "hockey", means: "a sport you play on ice with sticks", es: "hockey" },
      { word: "winter", means: "the cold time of the year", es: "invierno" },
      { word: "ice", means: "frozen water", es: "hielo" },
    ],
    questions: [
      { q: "Who is Noah?", options: ["Emma's brother", "Emma's dog", "Emma's friend"], answer: 0, why: "\"I have one brother. His name is Noah.\"" },
      { q: "Which subject doesn't Emma like very much?", options: ["Science", "Maths", "English"], answer: 1, why: "\"I don't like maths very much!\"" },
      { q: "Why do they play hockey on ice?", options: ["Because there is no school", "Because they like the park", "Because it's very cold in winter"], answer: 2, why: "\"It's very cold here in winter, so we play on ice.\"" },
    ],
  },
  {
    id: "a1-busy-saturday", band: "A1", universe: "past", kind: "story",
    title: "A busy Saturday", blurb: "Daniel has a full day in Medellín.",
    text: `I'm Daniel and I live in Medellín. On Saturdays I don't go to school, but I'm always busy!

I get up at seven o'clock and I have breakfast with my family: arepas, eggs and hot chocolate. At nine o'clock I go to my football practice. My team is very good.

At one o'clock we have lunch at my grandma's house. She cooks rice, beans and chicken. In the afternoon I play video games with my cousin. In the evening we watch a film. I go to bed at ten. I'm very tired!`,
    gloss: [
      { word: "busy", means: "with a lot of things to do", es: "ocupado" },
      { word: "practice", means: "time when you train for a sport", es: "entrenamiento, práctica" },
      { word: "tired", means: "needing to rest or sleep", es: "cansado" },
    ],
    questions: [
      { q: "What does Daniel do at nine o'clock?", options: ["He goes to football practice", "He has breakfast with his family", "He plays video games"], answer: 0, why: "\"At nine o'clock I go to my football practice.\"" },
      { q: "Where does he have lunch?", options: ["At his school with friends", "At his grandma's house", "At a café in the city"], answer: 1, why: "\"we have lunch at my grandma's house\"" },
      { q: "How does Daniel feel at the end of the day?", options: ["Hungry", "Bored", "Very tired"], answer: 2, why: "\"I'm very tired!\"" },
    ],
  },
  {
    id: "a1-penguins", band: "A1", universe: "science", kind: "article",
    title: "Penguins in Africa", blurb: "Not all penguins live in the ice.",
    text: `Do you think penguins only live in cold places? Some penguins live in Africa!

African penguins live near the sea in South Africa and Namibia. They are black and white, and they have a pink spot over their eyes. They are about sixty centimetres tall.

Penguins can't fly, but they can swim very fast. They eat small fish. On Boulders Beach, near Cape Town, you can see hundreds of penguins. They walk on the sand next to the people!

Today there aren't many African penguins, so people help them.`,
    gloss: [
      { word: "spot", means: "a small round mark", es: "mancha" },
      { word: "sand", means: "the small yellow grains on a beach", es: "arena" },
      { word: "hundreds", means: "many groups of 100", es: "cientos" },
    ],
    questions: [
      { q: "Where do African penguins live?", options: ["Near the sea in southern Africa", "In the ice and snow of the south", "In the big forests of Kenya"], answer: 0, why: "\"near the sea in South Africa and Namibia\"" },
      { q: "What can penguins do?", options: ["Fly", "Swim very fast", "Climb trees"], answer: 1, why: "\"They can swim very fast.\"" },
      { q: "Why do people help African penguins?", options: ["Because they are hungry and thirsty", "Because they can't swim in the sea", "Because there aren't many of them"], answer: 2, why: "\"Today there aren't many African penguins, so people help them.\"" },
    ],
  },
  {
    id: "a1-my-room", band: "A1", universe: "arts", kind: "story",
    title: "My favourite room", blurb: "Lena shows you her bedroom in Berlin.",
    text: `Hello! I'm Lena and I'm eleven. I live in a flat in Berlin, in Germany.

My favourite room is my bedroom. It isn't very big, but it's beautiful. The walls are light green. There's a bed next to the window and a desk with a lamp. On the wall there are posters of my favourite singers.

I have a lot of books. They're on a shelf over my bed. I also have a guitar. I play it every evening. My cat sleeps on my bed when I'm at school!`,
    gloss: [
      { word: "flat", means: "a home in a big building", es: "apartamento" },
      { word: "posters", means: "big pictures on a wall", es: "afiches" },
      { word: "shelf", means: "a long flat board on a wall for books", es: "repisa, estante" },
    ],
    questions: [
      { q: "What colour are the walls?", options: ["Light green", "Light blue", "White"], answer: 0, why: "\"The walls are light green.\"" },
      { q: "Where are the books?", options: ["Under the bed in a big box", "On a shelf over the bed", "On the desk next to the lamp"], answer: 1, why: "\"They're on a shelf over my bed.\"" },
      { q: "When does Lena play the guitar?", options: ["At school", "In the morning", "Every evening"], answer: 2, why: "\"I play it every evening.\"" },
    ],
  },
  {
    id: "a1-cafe", band: "A1", universe: "screens", kind: "story",
    title: "At the café", blurb: "Mateo and his dad stop for a snack in New York.",
    text: `Mateo is on holiday in New York with his dad. They are hungry, so they go to a small café.

"Hi! Can I help you?" says the waiter.
"Yes, please. Can I have a cheese sandwich and an apple juice?" says Mateo.
"And I'd like a coffee and a muffin, please," says his dad.
"Anything else?"
"No, thank you. How much is it?"
"It's fourteen dollars."

Mateo's dad gives the waiter fifteen dollars. "Keep the change," he says. Mateo eats his sandwich. It's delicious!`,
    gloss: [
      { word: "holiday", means: "time when you don't go to school or work", es: "vacaciones" },
      { word: "waiter", means: "a person who brings food in a café", es: "mesero" },
      { word: "change", means: "money you get back when you pay too much", es: "cambio, vueltas" },
    ],
    questions: [
      { q: "What does Mateo order?", options: ["A sandwich and a juice", "A coffee and a muffin", "Only a muffin"], answer: 0, why: "\"Can I have a cheese sandwich and an apple juice?\"" },
      { q: "How much is it?", options: ["Fifteen dollars", "Fourteen dollars", "Forty dollars"], answer: 1, why: "\"It's fourteen dollars.\"" },
      { q: "What does 'Keep the change' mean here?", options: ["Give me the money back", "I don't want the food", "You can have the extra dollar"], answer: 2, why: "He paid 15 for 14, so the waiter can keep 1 dollar." },
    ],
  },
  {
    id: "a1-sports-day", band: "A1", universe: "futures", kind: "story",
    title: "Sports day", blurb: "Priya's school in Mumbai has a special day.",
    text: `Today is sports day at Priya's school in Mumbai, India. There are no lessons! All the students wear white T-shirts and trainers.

In the morning there are races. Priya can run very fast. She is second in the girls' race. Her friend Ravi can jump very high, and he wins the high jump.

In the afternoon the teams play cricket and basketball. Priya doesn't like cricket, but she loves basketball. Her team wins! At the end of the day the head teacher gives prizes. Priya is very happy.`,
    gloss: [
      { word: "races", means: "competitions to see who is the fastest", es: "carreras" },
      { word: "cricket", means: "a sport with a bat and a ball, popular in India", es: "críquet" },
      { word: "prizes", means: "things you get when you win", es: "premios" },
    ],
    questions: [
      { q: "What do all the students wear?", options: ["White T-shirts and trainers", "Their normal school uniform", "Red sports clothes and caps"], answer: 0, why: "\"All the students wear white T-shirts and trainers.\"" },
      { q: "Who wins the high jump?", options: ["Priya", "Ravi", "The head teacher"], answer: 1, why: "\"he wins the high jump\"" },
      { q: "Which sport does Priya love?", options: ["Cricket", "Running", "Basketball"], answer: 2, why: "\"she loves basketball\"" },
    ],
  },
];
