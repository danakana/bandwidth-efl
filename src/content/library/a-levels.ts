/** Graded reading for A1+ to A2+. Original texts for Bandwidth EFL. For teacher review. */
import type { Story } from "./types";

export const A_LEVEL_STORIES: Story[] = [
  {
    id: "a1p-new-phone", band: "A1+", universe: "screens", kind: "story",
    title: "My new phone", blurb: "Tomás gets a phone for his birthday. Is it a good present?",
    text: `My name is Tomás. I am thirteen years old and I live in Pasto with my mum and my sister.

Last week was my birthday. My mum gave me a new phone as a present. It is black and it has a big screen. I was very happy!

Now I take photos of my dog, Lucas, every day. I send messages to my friends after school. I also listen to music on the bus.

But there is a problem. My sister wants my phone all the time. She is eight, and she loves games. Every evening she asks, "Can I play, please?"

So now we have a rule. She can play for twenty minutes after dinner. Then the phone goes on the table, and we read a book together.`,
    gloss: [
      { word: "present", means: "something you give someone, for example on their birthday", es: "regalo" },
      { word: "screen", means: "the part of a phone or computer where you see pictures", es: "pantalla" },
      { word: "every day", means: "on all days: Monday, Tuesday, Wednesday…", es: "todos los días" },
      { word: "rule", means: "something you must do or must not do", es: "regla" },
    ],
    questions: [
      { q: "Why did Tomás get a phone?", options: ["It was his birthday.", "He found it on the bus.", "His sister gave it to him."], answer: 0, why: "\"Last week was my birthday. My mum gave me a new phone.\"" },
      { q: "What does Tomás do on the bus?", options: ["He plays games.", "He listens to music.", "He takes photos of his dog."], answer: 1, why: "\"I also listen to music on the bus.\"" },
      { q: "What is the new rule?", options: ["His sister can't use the phone on school days at all.", "His sister can play for twenty minutes after dinner.", "Tomás and his sister can play games for an hour."], answer: 1, why: "\"She can play for twenty minutes after dinner.\"" },
    ],
  },
  {
    id: "a1p-giraffes", band: "A1+", universe: "science", kind: "article",
    title: "The tallest animal", blurb: "Five surprising facts about giraffes.",
    text: `Giraffes are the tallest animals in the world. An adult giraffe is about five metres tall. That is taller than a bus!

Giraffes live in Africa. They eat leaves from tall trees. Their long necks help them to get the leaves at the top. A giraffe eats for about sixteen hours every day.

Giraffes don't sleep very much. They sleep for only thirty minutes to two hours a day, and they often sleep standing up.

A baby giraffe is very big too. When it is born, it is about two metres tall. It can walk after only one hour.

Every giraffe has a different pattern of spots, like a human fingerprint. No two giraffes are the same.`,
    gloss: [
      { word: "tallest", means: "more tall than all the others", es: "el más alto" },
      { word: "neck", means: "the part of the body between the head and the shoulders", es: "cuello" },
      { word: "leaves", means: "the green parts of a tree (one leaf, two leaves)", es: "hojas" },
      { word: "spots", means: "small round marks of colour", es: "manchas" },
      { word: "born", means: "when a baby comes into the world", es: "nacer" },
    ],
    questions: [
      { q: "How tall is an adult giraffe?", options: ["About two metres", "About five metres", "About sixteen metres"], answer: 1, why: "\"An adult giraffe is about five metres tall.\"" },
      { q: "How do giraffes often sleep?", options: ["Standing up", "In trees", "For sixteen hours"], answer: 0, why: "\"They often sleep standing up.\" Sixteen hours is how long they eat." },
      { q: "What is special about a giraffe's spots?", options: ["They are all brown with black lines.", "They change colour when the giraffe grows.", "Every giraffe has a different pattern."], answer: 2, why: "\"Every giraffe has a different pattern of spots, like a human fingerprint.\"" },
    ],
  },
  {
    id: "a2-walls", band: "A2", universe: "arts", kind: "story",
    title: "The girl who painted walls", blurb: "In Medellín, a teenager uses colour to change her neighbourhood.",
    text: `Valeria grew up in Comuna 13, a neighbourhood on a hill in Medellín. When she was a child, many people were afraid to visit it. The streets were grey and some of the houses were broken.

When Valeria was fourteen, a group of young artists started painting the walls of the neighbourhood. They painted big, colourful pictures of birds, faces and flowers. Valeria watched them every afternoon after school. One day, an artist gave her a can of paint and said, "Do you want to try?"

At first, her pictures were not very good. But she practised every weekend, and slowly she got better. She painted her grandmother's face on the wall of a shop, with a big smile and yellow butterflies.

Today, thousands of tourists visit Comuna 13 every year to see the street art. Valeria is twenty now, and she works as a guide. She tells visitors the story of her neighbourhood. "The walls are not just pretty," she says. "They show our history and our hope."`,
    gloss: [
      { word: "neighbourhood", means: "the area of a town where people live", es: "barrio" },
      { word: "afraid", means: "feeling that something bad can happen", es: "con miedo" },
      { word: "practised", means: "did something many times to get better", es: "practicó" },
      { word: "guide", means: "a person who shows tourists a place and explains it", es: "guía" },
      { word: "hope", means: "the feeling that good things can happen", es: "esperanza" },
    ],
    questions: [
      { q: "What was Comuna 13 like when Valeria was a child?", options: ["Full of tourists who came to see the art", "Grey, and many people were afraid to go there", "Full of colourful walls and street art"], answer: 1, why: "\"Many people were afraid to visit it. The streets were grey.\"" },
      { q: "How did Valeria start painting?", options: ["An artist gave her paint and asked her to try.", "She studied art at a university in Medellín.", "Her grandmother taught her to paint faces."], answer: 0, why: "\"An artist gave her a can of paint and said, 'Do you want to try?'\"" },
      { q: "What does Valeria do now?", options: ["She sells paint to young artists.", "She works in a shop in the neighbourhood.", "She is a guide for tourists."], answer: 2, why: "\"She works as a guide.\"" },
    ],
  },
  {
    id: "a2-school-1960", band: "A2", universe: "past", kind: "story",
    title: "School in 1960", blurb: "Grandpa Jorge remembers his school days. Things were very different.",
    text: `Last Sunday I asked my grandpa Jorge about his school days. He went to school in a small village near Tunja in the 1960s.

"Every morning I walked for an hour to get to school," he said. "There was no bus. When it rained, I arrived wet, and my shoes were full of water."

His school had only one room. Children of all ages studied together, from six to twelve years old, with one teacher. "We didn't have notebooks for every subject," he told me. "We wrote on small blackboards, and then we cleaned them."

I asked him if the teacher was strict. He laughed. "Very! If you arrived late, you stood at the back of the room for the whole lesson."

But he also had good memories. At lunchtime, the children played football with a ball made of old socks. "It was the best ball in the world," he said with a smile.`,
    gloss: [
      { word: "village", means: "a very small town in the countryside", es: "pueblo, vereda" },
      { word: "wet", means: "covered in water", es: "mojado" },
      { word: "blackboards", means: "dark boards you write on with chalk", es: "pizarras" },
      { word: "strict", means: "making people follow rules carefully", es: "estricto" },
      { word: "memories", means: "things you remember from the past", es: "recuerdos" },
    ],
    questions: [
      { q: "How did Jorge get to school?", options: ["He took a bus with other children.", "He walked for an hour.", "His father drove him in the car."], answer: 1, why: "\"Every morning I walked for an hour to get to school. There was no bus.\"" },
      { q: "What was different about his school?", options: ["All the children studied in one room.", "It had a different teacher for each subject.", "The children wrote in notebooks for every subject."], answer: 0, why: "\"His school had only one room. Children of all ages studied together.\"" },
      { q: "What happened if a child arrived late?", options: ["They had to go back home for the day.", "They cleaned all the blackboards after class.", "They stood at the back of the room."], answer: 2, why: "\"If you arrived late, you stood at the back of the room for the whole lesson.\"" },
    ],
  },
  {
    id: "a2p-steps", band: "A2+", universe: "science", kind: "article",
    title: "Do you really need 10,000 steps?", blurb: "Everyone talks about 10,000 steps a day. Where does the number come from?",
    text: `Many phones and watches count your steps, and they often tell you to walk 10,000 steps a day. But where does this number come from? Is it based on science?

Surprisingly, the answer is no. In the 1960s, a Japanese company sold a step counter called "manpo-kei", which means "10,000-step meter". The name was easy to remember, and the idea became popular all over the world. Nobody had done a scientific study to choose that number.

In recent years, scientists have studied thousands of people to find out how many steps are really good for our health. Their results are good news for people who don't like walking. Health benefits start much earlier: people who walk around 7,000 steps a day have a lower risk of heart problems than people who walk only 2,000 or 3,000.

So should you stop at 7,000? Not necessarily. More steps usually bring more benefits, but the difference becomes smaller after about 8,000 to 10,000. The most important thing, scientists say, is to move a bit more than you do now. If you walk 3,000 steps today, try 4,000 next week.`,
    gloss: [
      { word: "based on", means: "coming from; using something as a reason", es: "basado en" },
      { word: "surprisingly", means: "in a way you don't expect", es: "sorprendentemente" },
      { word: "benefits", means: "good results, advantages", es: "beneficios" },
      { word: "risk", means: "the chance that something bad will happen", es: "riesgo" },
      { word: "not necessarily", means: "not always; maybe not", es: "no necesariamente" },
    ],
    questions: [
      { q: "Where did the idea of 10,000 steps come from?", options: ["A large scientific study of walkers in Japan", "The name of a step counter sold in Japan", "Advice from a famous doctor in the United States"], answer: 1, why: "It came from the name of a Japanese step counter. \"Nobody had done a scientific study.\"" },
      { q: "What did recent studies find?", options: ["Health benefits start at around 7,000 steps.", "You need at least 15,000 steps for any benefit.", "Walking more than 3,000 steps doesn't help your heart."], answer: 0, why: "\"People who walk around 7,000 steps a day have a lower risk of heart problems.\"" },
      { q: "What do scientists say is most important?", options: ["To walk exactly 10,000 steps every single day", "To stop walking when you reach 7,000 steps", "To move a little more than you do now"], answer: 2, why: "\"The most important thing… is to move a bit more than you do now.\"" },
    ],
  },
  {
    id: "a2p-coach", band: "A2+", universe: "screens", kind: "story",
    title: "From player to coach", blurb: "Andrés played video games all day. Then he found a way to make it useful.",
    text: `When Andrés was fifteen, he played video games for six or seven hours a day. His parents were worried. His grades were falling, and he didn't see his friends outside very often.

"They thought I was wasting my life," he remembers. "And to be honest, they were partly right."

Things changed when his school started an e-sports club. The teacher in charge, Ms. Ramírez, had one rule: to join the team, students had to keep their grades above a certain level. Andrés really wanted to play in the school tournament, so he started doing his homework before turning on his console.

Something else surprised him. In the club, he had to talk to his teammates, plan strategies and help younger players who were making mistakes. He discovered that he was good at explaining things.

Now Andrés is nineteen and studies to become a PE teacher. On Saturdays he coaches a team of twelve-year-olds. "I teach them to win," he says, "but I also teach them to take breaks, drink water and go outside. Nobody plays well when they're tired."`,
    gloss: [
      { word: "worried", means: "thinking that something bad might happen", es: "preocupados" },
      { word: "wasting", means: "using something badly so it's lost", es: "desperdiciando" },
      { word: "partly", means: "not completely; a little", es: "en parte" },
      { word: "tournament", means: "a competition with many games", es: "torneo" },
      { word: "coaches", means: "trains a team or a player", es: "entrena" },
    ],
    questions: [
      { q: "Why were Andrés's parents worried?", options: ["He played games for many hours and his grades were falling.", "He wanted to leave school and become a professional gamer.", "He spent all his time with friends and never stayed at home."], answer: 0, why: "\"He played video games for six or seven hours a day… His grades were falling.\"" },
      { q: "Why did Andrés start doing his homework first?", options: ["His parents took his console away until he finished it.", "He needed good grades to play in the tournament.", "His friends in the club told him it would help him win."], answer: 1, why: "To join the team, students had to keep their grades up, and he wanted to play in the tournament." },
      { q: "What does Andrés teach the young players besides winning?", options: ["To practise for longer every single day", "To buy better consoles and fast internet", "To take breaks and look after themselves"], answer: 2, why: "\"I also teach them to take breaks, drink water and go outside.\"" },
    ],
  },
];
