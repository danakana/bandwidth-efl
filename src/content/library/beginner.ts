/**
 * Graded reading for Pre-A1 and A1. Original texts for Bandwidth EFL. For teacher review.
 * Pre-A1: 20-35 words, sentences of 3-6 words, be / have / like / can only, one-word answers.
 * A1: 45-70 words, sentences up to about 10 words joined with and / but, present simple, can, there is.
 */
import type { Story } from "./types";

export const BEGINNER_STORIES: Story[] = [
  // ---------------- Pre-A1 ----------------
  {
    id: "pa1-my-cat", band: "Pre-A1", universe: "science", kind: "story",
    title: "My cat", blurb: "This is Luna. She is a cat.",
    text: `This is my cat. Her name is Luna.

Luna is small. She is black. She has green eyes.

Luna likes milk. She likes my bed!`,
    gloss: [
      { word: "small", means: "not big", es: "pequeño" },
      { word: "eyes", means: "you see with them", es: "ojos" },
      { word: "milk", means: "a white drink", es: "leche" },
    ],
    questions: [
      { q: "What colour is Luna?", options: ["Black", "Green", "White"], answer: 0, why: "\"She is black.\"" },
      { q: "What colour are her eyes?", options: ["Brown", "Green", "Blue"], answer: 1, why: "\"She has green eyes.\"" },
      { q: "What does Luna like?", options: ["Water", "Fish", "Milk"], answer: 2, why: "\"Luna likes milk.\"" },
    ],
  },
  {
    id: "pa1-my-bag", band: "Pre-A1", universe: "words", kind: "story",
    title: "My bag", blurb: "What is in Tom's bag?",
    text: `I am Tom. I am nine.

This is my bag. It is blue.

In my bag: a book, two pencils, an apple.

Where is my pen? It is under my bed!`,
    gloss: [
      { word: "bag", means: "you carry things in it", es: "mochila" },
      { word: "pencils", means: "you write with them", es: "lápices" },
      { word: "under", means: "below", es: "debajo de" },
    ],
    questions: [
      { q: "How old is Tom?", options: ["Nine", "Two", "Ten"], answer: 0, why: "\"I am nine.\"" },
      { q: "How many pencils?", options: ["One", "Two", "Three"], answer: 1, why: "\"two pencils\"" },
      { q: "Where is the pen?", options: ["In the bag", "On the desk", "Under the bed"], answer: 2, why: "\"It is under my bed!\"" },
    ],
  },
  {
    id: "pa1-colours-park", band: "Pre-A1", universe: "arts", kind: "story",
    title: "Colours", blurb: "Amina looks at colours in the park.",
    text: `I am Amina. I am from Kenya.

I am in the park. The trees are green. The sky is blue. I can see a yellow bird.

I like purple. My dress is purple!`,
    gloss: [
      { word: "park", means: "a place with trees and grass", es: "parque" },
      { word: "bird", means: "an animal that can fly", es: "pájaro" },
      { word: "dress", means: "clothes for a girl", es: "vestido" },
    ],
    questions: [
      { q: "Where is Amina from?", options: ["Kenya", "Spain", "China"], answer: 0, why: "\"I am from Kenya.\"" },
      { q: "What colour is the bird?", options: ["Blue", "Yellow", "Green"], answer: 1, why: "\"a yellow bird\"" },
      { q: "What colour is her dress?", options: ["Red", "Pink", "Purple"], answer: 2, why: "\"My dress is purple!\"" },
    ],
  },
  {
    id: "pa1-farm", band: "Pre-A1", universe: "science", kind: "story",
    title: "The farm", blurb: "Sofía visits her grandpa's farm.",
    text: `My grandpa has a farm.

He has two horses. He has five cows. He has a big dog. The dog is brown.

I like the horses. They are big!`,
    gloss: [
      { word: "farm", means: "a place with animals", es: "finca, granja" },
      { word: "horses", means: "big animals people ride", es: "caballos" },
      { word: "cows", means: "farm animals that give milk", es: "vacas" },
    ],
    questions: [
      { q: "How many horses?", options: ["Two", "Five", "One"], answer: 0, why: "\"He has two horses.\"" },
      { q: "What colour is the dog?", options: ["Black", "Brown", "White"], answer: 1, why: "\"The dog is brown.\"" },
      { q: "What does Sofía like?", options: ["The cows", "The dog", "The horses"], answer: 2, why: "\"I like the horses.\"" },
    ],
  },
  {
    id: "pa1-robot", band: "Pre-A1", universe: "futures", kind: "story",
    title: "My robot", blurb: "Kenji draws a robot.",
    text: `I am Kenji. I am from Japan.

This is my robot. His name is Bip. He is grey and orange. He has four arms!

Bip can dance. He can't swim.`,
    gloss: [
      { word: "robot", means: "a machine that moves like a person", es: "robot" },
      { word: "arms", means: "parts of your body; you have two", es: "brazos" },
      { word: "dance", means: "move to music", es: "bailar" },
    ],
    questions: [
      { q: "What is the robot's name?", options: ["Bip", "Kenji", "Bob"], answer: 0, why: "\"His name is Bip.\"" },
      { q: "How many arms?", options: ["Two", "Four", "Six"], answer: 1, why: "\"He has four arms!\"" },
      { q: "What can't Bip do?", options: ["Dance", "Sing", "Swim"], answer: 2, why: "\"He can't swim.\"" },
    ],
  },
  {
    id: "pa1-birthday", band: "Pre-A1", universe: "screens", kind: "story",
    title: "Happy birthday!", blurb: "A card for Leo.",
    text: `Happy birthday, Leo!

You are ten today!

This is for you. It's a ball. It's red and white.

Your friend,
Max`,
    gloss: [
      { word: "birthday", means: "your special day every year", es: "cumpleaños" },
      { word: "ball", means: "a round toy", es: "pelota, balón" },
      { word: "friend", means: "a person you like", es: "amigo" },
    ],
    questions: [
      { q: "How old is Leo today?", options: ["Ten", "Nine", "Two"], answer: 0, why: "\"You are ten today!\"" },
      { q: "What is the present?", options: ["A cake", "A ball", "A book"], answer: 1, why: "\"It's a ball.\"" },
      { q: "Who is the card from?", options: ["Mum", "Leo", "Max"], answer: 2, why: "\"Your friend, Max\"" },
    ],
  },
  // ---------------- A1 ----------------
  {
    id: "a1-new-friend", band: "A1", universe: "words", kind: "story",
    title: "A message from Canada", blurb: "Emma writes to a new friend.",
    text: `Hi Camila,

I'm Emma. I'm twelve and I live in Canada. I have a brother. His name is Noah. We have a dog.

My favourite subject is science. I don't like maths! After school I play hockey with my friends.

Where do you live? Write soon!

Emma`,
    gloss: [
      { word: "subject", means: "something you study at school, like art or maths", es: "materia, asignatura" },
      { word: "hockey", means: "a sport with sticks, often on ice", es: "hockey" },
      { word: "soon", means: "in a short time", es: "pronto" },
    ],
    questions: [
      { q: "Who is Noah?", options: ["Her brother", "Her dog", "Her friend"], answer: 0, why: "\"I have a brother. His name is Noah.\"" },
      { q: "Which subject does Emma like?", options: ["Maths", "Science", "English"], answer: 1, why: "\"My favourite subject is science.\"" },
      { q: "What does Emma do after school?", options: ["She reads", "She swims", "She plays hockey"], answer: 2, why: "\"After school I play hockey with my friends.\"" },
    ],
  },
  {
    id: "a1-busy-saturday", band: "A1", universe: "past", kind: "story",
    title: "My Saturday", blurb: "Daniel's Saturday in Medellín.",
    text: `I'm Daniel and I live in Medellín. I don't go to school on Saturdays.

I get up at eight. I have arepas and hot chocolate for breakfast. At ten I play football with my team.

We have lunch at my grandma's house. In the evening I watch a film with my family. I go to bed at ten.`,
    gloss: [
      { word: "get up", means: "leave your bed in the morning", es: "levantarse" },
      { word: "breakfast", means: "the first meal of the day", es: "desayuno" },
      { word: "film", means: "a movie", es: "película" },
    ],
    questions: [
      { q: "What time does Daniel get up?", options: ["At eight", "At ten", "At seven"], answer: 0, why: "\"I get up at eight.\"" },
      { q: "Where does he have lunch?", options: ["At school", "At his grandma's", "At a café"], answer: 1, why: "\"We have lunch at my grandma's house.\"" },
      { q: "What does he do in the evening?", options: ["He plays football", "He reads a book", "He watches a film"], answer: 2, why: "\"In the evening I watch a film with my family.\"" },
    ],
  },
  {
    id: "a1-penguins", band: "A1", universe: "science", kind: "article",
    title: "Penguins in Africa", blurb: "Some penguins live in a hot country.",
    text: `Penguins live in cold places, right? Not all penguins! Some penguins live in South Africa.

These penguins are black and white. They are small. They can't fly, but they can swim very fast. They eat fish.

You can see them on a beach near Cape Town. They walk on the sand next to people!`,
    gloss: [
      { word: "fly", means: "move in the air, like a bird", es: "volar" },
      { word: "beach", means: "the sand next to the sea", es: "playa" },
      { word: "sand", means: "the yellow ground on a beach", es: "arena" },
    ],
    questions: [
      { q: "Where do these penguins live?", options: ["In South Africa", "In Canada", "In Colombia"], answer: 0, why: "\"Some penguins live in South Africa.\"" },
      { q: "What can penguins do?", options: ["Fly", "Swim fast", "Climb trees"], answer: 1, why: "\"they can swim very fast\"" },
      { q: "What do they eat?", options: ["Grass", "Fruit", "Fish"], answer: 2, why: "\"They eat fish.\"" },
    ],
  },
  {
    id: "a1-my-room", band: "A1", universe: "arts", kind: "story",
    title: "My room", blurb: "Lena's bedroom in Berlin.",
    text: `I'm Lena. I live in a flat in Berlin, in Germany.

This is my bedroom. It isn't big, but I love it. The walls are green. There is a bed and a desk. There are posters on the wall.

I have a guitar. I play it every evening. My cat sleeps on my bed!`,
    gloss: [
      { word: "flat", means: "a home in a big building", es: "apartamento" },
      { word: "walls", means: "the sides of a room", es: "paredes" },
      { word: "posters", means: "big pictures on a wall", es: "afiches" },
    ],
    questions: [
      { q: "What colour are the walls?", options: ["Green", "Blue", "White"], answer: 0, why: "\"The walls are green.\"" },
      { q: "What is on the wall?", options: ["A guitar", "Posters", "A clock"], answer: 1, why: "\"There are posters on the wall.\"" },
      { q: "Where does the cat sleep?", options: ["On the desk", "In the garden", "On the bed"], answer: 2, why: "\"My cat sleeps on my bed!\"" },
    ],
  },
  {
    id: "a1-cafe", band: "A1", universe: "screens", kind: "story",
    title: "At the café", blurb: "Mateo orders food in New York.",
    text: `Mateo is in New York with his dad. They go to a café.

"Hi! Can I help you?"
"A cheese sandwich and an apple juice, please," says Mateo.
"And a coffee, please," says his dad.
"That's ten dollars."
"Here you are. Thank you!"

The sandwich is very good!`,
    gloss: [
      { word: "juice", means: "a drink made from fruit", es: "jugo" },
      { word: "sandwich", means: "two pieces of bread with food in the middle", es: "sándwich" },
      { word: "dollars", means: "money in the USA", es: "dólares" },
    ],
    questions: [
      { q: "Who is Mateo with?", options: ["His dad", "His mum", "His friend"], answer: 0, why: "\"Mateo is in New York with his dad.\"" },
      { q: "What drink does Mateo want?", options: ["A coffee", "An apple juice", "Some water"], answer: 1, why: "\"an apple juice\"" },
      { q: "How much is it?", options: ["Five dollars", "Two dollars", "Ten dollars"], answer: 2, why: "\"That's ten dollars.\"" },
    ],
  },
  {
    id: "a1-sports-day", band: "A1", universe: "futures", kind: "story",
    title: "Sports day", blurb: "A fun day at Priya's school in India.",
    text: `Today is sports day at Priya's school in India. There are no classes!

All the students wear white T-shirts. In the morning there are races. Priya can run very fast. Her friend Ravi can jump very high.

In the afternoon they play basketball. Priya loves basketball. Her team wins!`,
    gloss: [
      { word: "races", means: "competitions to see who is the fastest", es: "carreras" },
      { word: "jump", means: "go up in the air with your legs", es: "saltar" },
      { word: "wins", means: "is the best in a game", es: "gana" },
    ],
    questions: [
      { q: "What do the students wear?", options: ["White T-shirts", "Red T-shirts", "Their uniform"], answer: 0, why: "\"All the students wear white T-shirts.\"" },
      { q: "What can Ravi do?", options: ["Run fast", "Jump high", "Swim well"], answer: 1, why: "\"Ravi can jump very high.\"" },
      { q: "What do they play in the afternoon?", options: ["Football", "Tennis", "Basketball"], answer: 2, why: "\"In the afternoon they play basketball.\"" },
    ],
  },
];
