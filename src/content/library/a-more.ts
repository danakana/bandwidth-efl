/** More graded reading for A1+ to A2+ (set 2). Original texts for Bandwidth EFL. For teacher review. */
import type { Story } from "./types";

export const A_MORE_STORIES: Story[] = [
  /* ---------------- A1+ ---------------- */
  {
    id: "a1p-market", band: "A1+", universe: "past", kind: "story",
    title: "Saturday at the market", blurb: "Valeria helps her grandfather at his fruit stall.",
    text: `Every Saturday I go to the market with my grandfather. He sells fruit there. His stall is small, but it is very colourful.

We get up at five o'clock. It is dark and cold. My grandfather drinks a cup of hot chocolate, and I eat bread with cheese. Then we go to the market in his old truck.

At the stall, I put the mangoes, the oranges and the bananas on the table. My grandfather talks to the customers. He knows everybody's name!

At ten o'clock the market is very busy. I help with the money. One kilo of oranges is four thousand pesos. I count the change carefully.

At one o'clock we go home. I am tired, but I am happy. My grandfather gives me a big mango for my work.`,
    gloss: [
      { word: "stall", means: "a small table or shop in a market", es: "puesto" },
      { word: "customers", means: "people who buy things", es: "clientes" },
      { word: "busy", means: "with a lot of people", es: "concurrido, lleno" },
      { word: "change", means: "the money you give back when someone pays too much", es: "el cambio, las vueltas" },
    ],
    questions: [
      { q: "What does Valeria eat in the morning?", options: ["Bread with cheese.", "A big mango.", "Hot chocolate."], answer: 0, why: "\"I eat bread with cheese.\" Her grandfather drinks the hot chocolate." },
      { q: "What does Valeria do at ten o'clock?", options: ["She helps with the money.", "She talks to the customers.", "She puts the fruit on the table."], answer: 0, why: "\"At ten o'clock the market is very busy. I help with the money.\"" },
      { q: "How does Valeria feel at the end of the day?", options: ["Tired and a bit sad.", "Tired but happy.", "Cold and hungry."], answer: 1, why: "\"I am tired, but I am happy.\"" },
    ],
  },
  {
    id: "a1p-octopus", band: "A1+", universe: "science", kind: "article",
    title: "The clever octopus", blurb: "Three hearts, blue blood and a very big brain.",
    text: `The octopus lives in the sea. It has eight long arms and no bones. Because it has no bones, it can go into very small spaces.

An octopus has three hearts and blue blood. That is very strange! Our blood is red, and we have only one heart.

Octopuses are very intelligent. They can open boxes and bottles to get food. Some octopuses in aquariums can even escape from their tanks at night.

An octopus can change colour in less than one second. It changes colour to hide from big fish. It can look like a rock or like sand.

Most octopuses live for only one or two years. But in that short life, they learn a lot.`,
    gloss: [
      { word: "bones", means: "the hard white parts inside your body", es: "huesos" },
      { word: "intelligent", means: "clever, quick to learn", es: "inteligente" },
      { word: "escape", means: "get out of a place", es: "escaparse" },
      { word: "hide", means: "go where nobody can see you", es: "esconderse" },
    ],
    questions: [
      { q: "Why can an octopus go into very small spaces?", options: ["It has no bones.", "It has eight arms.", "It can change colour."], answer: 0, why: "\"Because it has no bones, it can go into very small spaces.\"" },
      { q: "Why does an octopus change colour?", options: ["To find food in boxes.", "To hide from big fish.", "To talk to other octopuses."], answer: 1, why: "\"It changes colour to hide from big fish.\"" },
      { q: "How long do most octopuses live?", options: ["One or two years.", "Less than one month.", "About ten years."], answer: 0, why: "\"Most octopuses live for only one or two years.\"" },
    ],
  },
  {
    id: "a1p-new-school", band: "A1+", universe: "words", kind: "story",
    title: "The new girl", blurb: "Sara's first day at a school in a new city.",
    text: `Hi! I'm Sara. I'm fourteen. Last month my family moved from Cali to Bogotá because my dad has a new job.

My first day at my new school was difficult. I didn't know anybody. In the morning, I sat alone in the classroom. At break, I ate my lunch alone too.

Then a girl came to my table. "Hi, I'm Juliana. Do you like football?" she asked. "Yes, I love it!" I said. "Great! We play every day at break. Come with us!"

Now I play football with Juliana and her friends every day. Bogotá is cold, and I miss the sun in Cali. But I'm happy at my new school.`,
    gloss: [
      { word: "moved", means: "went to live in a different place", es: "se mudó" },
      { word: "alone", means: "with nobody", es: "solo, sola" },
      { word: "break", means: "the free time between classes", es: "el descanso, el recreo" },
      { word: "miss", means: "feel sad because something is not with you now", es: "extrañar" },
    ],
    questions: [
      { q: "Why did Sara's family move to Bogotá?", options: ["Her dad has a new job there.", "Sara wanted a new school.", "They didn't like the sun in Cali."], answer: 0, why: "\"My family moved… because my dad has a new job.\"" },
      { q: "Who did Sara eat lunch with on her first day?", options: ["With Juliana.", "With nobody.", "With her football team."], answer: 1, why: "\"At break, I ate my lunch alone too.\"" },
      { q: "What does Sara miss about Cali?", options: ["Her old school.", "Playing football.", "The sun."], answer: 2, why: "\"Bogotá is cold, and I miss the sun in Cali.\"" },
    ],
  },
  {
    id: "a1p-gamer", band: "A1+", universe: "screens", kind: "story",
    title: "A message from a gamer", blurb: "Andrés writes to a new friend he met in an online game.",
    text: `Hi Kenji,

Thanks for your message! It was fun to play with you yesterday. You are very good at the game.

I'm Andrés and I live in Medellín, in Colombia. I'm fifteen. I have one brother, and he plays games too. We have a computer in our bedroom.

I usually play at the weekend. On school days I can't play, because I have a lot of homework. My mum says, "Homework first, games later!"

What time is it in Japan now? Here it is eight in the evening. Can you play on Saturday at ten in the morning? That is my time. Write back soon!

Your friend,
Andrés`,
    gloss: [
      { word: "usually", means: "most of the time", es: "normalmente" },
      { word: "weekend", means: "Saturday and Sunday", es: "fin de semana" },
      { word: "homework", means: "school work you do at home", es: "tarea" },
      { word: "write back", means: "answer a letter or message", es: "responder" },
    ],
    questions: [
      { q: "Where does Andrés play games?", options: ["At school.", "In his bedroom.", "At his friend's house."], answer: 1, why: "\"We have a computer in our bedroom.\"" },
      { q: "Why can't Andrés play on school days?", options: ["He has a lot of homework.", "His brother uses the computer.", "The internet is very slow."], answer: 0, why: "\"On school days I can't play, because I have a lot of homework.\"" },
      { q: "What does Andrés want to do?", options: ["Visit Kenji in Japan next summer.", "Play with Kenji on Saturday.", "Buy a new computer game."], answer: 1, why: "\"Can you play on Saturday at ten in the morning?\"" },
    ],
  },

  /* ---------------- A2 ---------------- */
  {
    id: "a2-tejo", band: "A2", universe: "past", kind: "article",
    title: "Tejo: a very loud sport", blurb: "Colombia's national sport mixes skill, clay and small explosions.",
    text: `Tejo is the national sport of Colombia. It is very old: people in the centre of the country played a similar game more than 500 years ago, long before the Spanish arrived.

The game is simple. Players stand about eighteen metres from a box of wet clay. In the middle of the box there is a metal ring. Players throw a heavy metal disc, the tejo, and try to get it close to the ring.

But there is a surprise. On the ring, there are small paper triangles full of gunpowder, called mechas. When a tejo hits a mecha, it explodes with a loud BANG! That gives the player extra points.

Today, people play tejo in special clubs all over Colombia, usually in the evening with friends. Some cities also have youth teams, and there is a national championship every year. If you visit Colombia, try it, but don't forget to cover your ears!`,
    gloss: [
      { word: "national", means: "of the whole country", es: "nacional" },
      { word: "clay", means: "soft, heavy earth that people use to make pots", es: "arcilla" },
      { word: "throw", means: "send something through the air with your hand", es: "lanzar" },
      { word: "gunpowder", means: "a black powder that explodes", es: "pólvora" },
      { word: "championship", means: "a competition to find the best team or player", es: "campeonato" },
    ],
    questions: [
      { q: "What does the text say about the history of tejo?", options: ["The Spanish brought it to Colombia from Europe.", "A similar game existed before the Spanish came.", "It started about fifty years ago in clubs."], answer: 1, why: "People played a similar game \"more than 500 years ago, long before the Spanish arrived.\"" },
      { q: "What happens when a tejo hits a mecha?", options: ["The player loses some points.", "The game stops for a few minutes.", "There is a loud explosion."], answer: 2, why: "\"When a tejo hits a mecha, it explodes with a loud BANG!\"" },
      { q: "What does the writer advise visitors to do?", options: ["Try tejo and protect their ears.", "Watch tejo but not play it.", "Join a youth team in a big city."], answer: 0, why: "\"Try it, but don't forget to cover your ears!\"" },
    ],
  },
  {
    id: "a2-lost-phone", band: "A2", universe: "screens", kind: "story",
    title: "The phone on the bus", blurb: "Mateo finds a phone. What should he do?",
    text: `Last Tuesday, I was on the bus on my way home from school. It was raining and the bus was full. When a woman got off at the hospital, I noticed a phone on her seat.

I picked it up and looked out of the window, but she was gone. The phone was new and expensive. For a moment, I thought, "Nobody will know if I keep it." But then I imagined losing my own phone, and I felt bad.

When I got home, the phone rang. The screen said "Mum". I answered and explained everything. The caller was the woman's mother. She was very happy and gave me her daughter's address.

The next day, my dad and I took the phone to the woman's house. She was a nurse, and she needed the phone for work. She thanked me again and again, and she gave me a box of chocolates. I shared them with my sister, of course!`,
    gloss: [
      { word: "noticed", means: "saw something, often by chance", es: "notó, se dio cuenta" },
      { word: "expensive", means: "costing a lot of money", es: "caro" },
      { word: "imagined", means: "made a picture of something in your mind", es: "imaginó" },
      { word: "nurse", means: "a person who looks after sick people in a hospital", es: "enfermera" },
    ],
    questions: [
      { q: "Where did the woman get off the bus?", options: ["At the school.", "At the hospital.", "Near Mateo's house."], answer: 1, why: "\"When a woman got off at the hospital, I noticed a phone on her seat.\"" },
      { q: "Why did Mateo decide not to keep the phone?", options: ["He thought about how he would feel if he lost his.", "His dad told him to give it to the police station.", "He saw the woman's name on the phone's screen."], answer: 0, why: "\"I imagined losing my own phone, and I felt bad.\"" },
      { q: "Who did Mateo speak to first?", options: ["The woman who lost the phone.", "The bus driver.", "The woman's mother."], answer: 2, why: "\"The caller was the woman's mother.\"" },
    ],
  },
  {
    id: "a2-hummingbird", band: "A2", universe: "science", kind: "article",
    title: "Tiny bird, giant heart", blurb: "Colombia has more kinds of hummingbird than almost any other country.",
    text: `Colombia has around 165 species of hummingbird, more than almost any other country in the world. You can see them in gardens, in forests and even in big cities like Bogotá.

Hummingbirds are very small. The smallest one weighs about two grams, less than a coin. But they are amazing flyers. They can fly forwards, backwards and even upside down. Their wings move up to eighty times every second, so fast that they make a humming sound. That is how they got their name.

Flying like this needs a lot of energy. A hummingbird's heart can beat more than 1,000 times a minute, and the bird must eat every ten or fifteen minutes. It drinks sweet nectar from flowers and also eats small insects.

At night, when they can't eat, hummingbirds save energy in a special way. Their body gets cold and their heart slows down, almost like a short winter sleep. In the morning, they warm up and start again.`,
    gloss: [
      { word: "species", means: "a type of animal or plant", es: "especie" },
      { word: "weighs", means: "is heavy: it weighs 2 grams = it is 2 grams heavy", es: "pesa" },
      { word: "beat", means: "(of a heart) move and make a sound", es: "latir" },
      { word: "nectar", means: "a sweet liquid inside flowers", es: "néctar" },
    ],
    questions: [
      { q: "Where did hummingbirds get their name?", options: ["From the sound of their wings.", "From the flowers they visit.", "From a city in Colombia."], answer: 0, why: "Their wings \"make a humming sound. That is how they got their name.\"" },
      { q: "Why must hummingbirds eat so often?", options: ["Their food has very little sugar.", "Flying uses a lot of energy.", "They sleep for many hours."], answer: 1, why: "\"Flying like this needs a lot of energy.\"" },
      { q: "What happens to a hummingbird at night?", options: ["It flies to warmer places lower down the mountain.", "It eats insects in the dark.", "Its body cools and its heart slows."], answer: 2, why: "\"Their body gets cold and their heart slows down.\"" },
    ],
  },
  {
    id: "a2-band-practice", band: "A2", universe: "arts", kind: "story",
    title: "Four people, one garage", blurb: "A school band gets ready for its first concert.",
    text: `My friends and I started a band in January. Camila sings, Felipe plays the guitar, Laura plays the drums and I play the bass. We practise in Felipe's garage every Wednesday and Friday after school.

At first, it was terrible. We didn't play together and the songs sounded awful. Felipe's neighbour knocked on the door and asked us to stop! But we didn't give up. We practised the same three songs again and again.

In May, our music teacher heard us and invited us to play at the school festival. We were excited but very nervous. We chose four songs: three in Spanish and one in English.

On the day of the festival, my hands were shaking. But when Laura started the first song, I forgot about my nerves. The students danced and sang with us. After the concert, the headteacher asked us to play again next year!`,
    gloss: [
      { word: "garage", means: "a room in a house where people keep a car", es: "garaje" },
      { word: "awful", means: "very bad", es: "horrible" },
      { word: "give up", means: "stop trying", es: "rendirse" },
      { word: "nervous", means: "a little afraid before something important", es: "nervioso" },
    ],
    questions: [
      { q: "What did the neighbour do at first?", options: ["Asked the band to stop playing.", "Offered to play the guitar.", "Invited them to the festival."], answer: 0, why: "\"Felipe's neighbour knocked on the door and asked us to stop!\"" },
      { q: "How did the band get better?", options: ["They took lessons from their music teacher every week.", "They practised the same songs many times.", "They found a new singer in May."], answer: 1, why: "\"We practised the same three songs again and again.\"" },
      { q: "How did the writer feel when the first song started?", options: ["Too nervous to play.", "Angry with Laura.", "No longer nervous."], answer: 2, why: "\"When Laura started the first song, I forgot about my nerves.\"" },
    ],
  },

  /* ---------------- A2+ ---------------- */
  {
    id: "a2p-sleep", band: "A2+", universe: "science", kind: "article",
    title: "Why teenagers can't get up", blurb: "It's not laziness: your body clock really does change.",
    text: `Many parents think teenagers are lazy because they go to bed late and find it hard to get up in the morning. But scientists say the real reason is biology.

Our bodies have an internal clock that tells us when to feel sleepy. In the evening, the brain produces a hormone called melatonin, which makes us tired. During the teenage years, this hormone starts to arrive about two hours later than in children or adults. So a fifteen-year-old who goes to bed at ten o'clock often just lies awake.

The problem is that school starts early. Teenagers need between eight and ten hours of sleep, but many get only six or seven. Without enough sleep, it is harder to concentrate, remember new information and control emotions.

Some schools in other countries have tried starting classes later, at around half past eight or nine. Students at these schools slept more, arrived late less often and got slightly better grades. Experts also recommend switching off screens an hour before bed, because the light from phones can delay melatonin even more.`,
    gloss: [
      { word: "lazy", means: "not wanting to work or do things", es: "perezoso" },
      { word: "internal", means: "inside", es: "interno" },
      { word: "hormone", means: "a chemical in your body that controls how it works", es: "hormona" },
      { word: "concentrate", means: "think carefully about one thing", es: "concentrarse" },
      { word: "delay", means: "make something happen later", es: "retrasar" },
    ],
    questions: [
      { q: "According to scientists, why do teenagers go to bed late?", options: ["They are lazier than children.", "Their body makes melatonin later.", "They have more homework at night."], answer: 1, why: "The hormone \"starts to arrive about two hours later\" in teenagers." },
      { q: "What happens when teenagers don't sleep enough?", options: ["Learning and controlling emotions are harder.", "They need less sleep the next night.", "Their body clock moves back to normal in a few days."], answer: 0, why: "\"It is harder to concentrate, remember new information and control emotions.\"" },
      { q: "What was one result of starting school later?", options: ["Students used their phones more.", "Students had to study on Saturdays.", "Students arrived late less often."], answer: 2, why: "Students \"arrived late less often and got slightly better grades.\"" },
    ],
  },
  {
    id: "a2p-cartagena", band: "A2+", universe: "past", kind: "story",
    title: "The guide's granddaughter", blurb: "Isabela learns her grandmother's job in the old city of Cartagena.",
    text: `My grandmother has been a tour guide in Cartagena for thirty years. She knows every street, every church and every story in the old city. This summer, she asked me to work with her during the school holidays.

On the first day, I just listened. My grandmother told the tourists about the walls, which the Spanish built to protect the city from pirates. She explained that it took almost two hundred years to finish them. The tourists asked lots of questions, and she answered all of them without looking at her notes.

On the third day, a group from Canada arrived and my grandmother said, "Today you start." I was terrified. My English isn't perfect, and I was afraid of making mistakes. But I remembered her advice: "Don't try to say everything. Tell them one good story."

So I told them about the Clock Tower, which used to be the main gate of the city. I made a few mistakes, but the tourists smiled and asked questions. At the end, one of them said, "You're a great guide. Just like your grandmother."`,
    gloss: [
      { word: "tour guide", means: "a person whose job is to show places to visitors", es: "guía turístico" },
      { word: "protect", means: "keep safe from danger", es: "proteger" },
      { word: "pirates", means: "people who attack ships to steal things", es: "piratas" },
      { word: "terrified", means: "very, very afraid", es: "aterrorizada" },
      { word: "gate", means: "a large door in a wall", es: "puerta (de una muralla)" },
    ],
    questions: [
      { q: "Why did the Spanish build the walls?", options: ["To keep pirates out of the city.", "To show tourists the old city.", "To mark the end of the city."], answer: 0, why: "The Spanish \"built [them] to protect the city from pirates.\"" },
      { q: "Why was Isabela afraid on the third day?", options: ["She didn't know the streets of the city well.", "She thought she would make mistakes in English.", "The group from Canada was very large and asked a lot of questions."], answer: 1, why: "\"My English isn't perfect, and I was afraid of making mistakes.\"" },
      { q: "What was her grandmother's advice?", options: ["Practise the whole tour in English first.", "Read your notes when you forget something.", "Focus on telling one good story."], answer: 2, why: "\"Don't try to say everything. Tell them one good story.\"" },
    ],
  },
  {
    id: "a2p-streamer", band: "A2+", universe: "screens", kind: "story",
    title: "Zero viewers", blurb: "Daniel wants to be a famous streamer. It's harder than he thought.",
    text: `When I was thirteen, I decided to become a famous streamer. I watched streamers every day and they looked so happy: they played games, chatted with fans and made money. How difficult could it be?

I started streaming every evening after school. For the first two weeks, I had zero viewers. Not one. I talked to an empty chat for two hours a night. Then my cousin started watching, but only because I asked him.

After three months, I had about fifteen regular viewers. I was proud, but I was also tired. My grades were getting worse, and I hardly saw my friends because I was always online. My mum was worried, and honestly, so was I.

So I changed my plan. Now I stream only on Saturdays, for two hours. I spend more time planning my streams and less time just playing. The funny thing is that I have more viewers now than before. I've learnt that being a streamer is real work, and I'm not sure it's the job for me. But I've learnt to talk to a camera, edit videos and speak more confidently, and those things will be useful whatever I do.`,
    gloss: [
      { word: "streamer", means: "a person who broadcasts live videos online, often of games", es: "streamer" },
      { word: "viewers", means: "people who watch", es: "espectadores" },
      { word: "regular", means: "happening often, again and again", es: "habitual" },
      { word: "hardly", means: "almost not", es: "casi no" },
      { word: "confidently", means: "feeling sure of yourself", es: "con confianza" },
    ],
    questions: [
      { q: "Why did Daniel's cousin start watching?", options: ["He liked the games Daniel played.", "Daniel asked him to watch.", "He wanted to become a streamer too."], answer: 1, why: "\"My cousin started watching, but only because I asked him.\"" },
      { q: "Why did Daniel change his plan?", options: ["Streaming was hurting his school work and social life.", "His viewers asked him to stream only on Saturdays, when they were free.", "His mum didn't let him use the computer."], answer: 0, why: "\"My grades were getting worse, and I hardly saw my friends.\"" },
      { q: "What does Daniel think now?", options: ["Streaming is easy if you play every day.", "Streaming is easy if you play every day and talk to your fans a lot.", "He gained useful skills, even if streaming isn't his future."], answer: 2, why: "\"I'm not sure it's the job for me. But… those things will be useful whatever I do.\"" },
    ],
  },
  {
    id: "a2p-murals", band: "A2+", universe: "arts", kind: "article",
    title: "Comuna 13: a neighbourhood that changed its story", blurb: "How art, music and a famous escalator transformed part of Medellín.",
    text: `For many years, Comuna 13 in Medellín was known as one of the most dangerous neighbourhoods in Colombia. Few visitors went there, and many young people grew up with violence around them.

Today, thousands of tourists visit Comuna 13 every week. What changed? Part of the answer is a set of outdoor electric escalators, opened in 2011. Before that, people had to climb steep streets and stairs for about thirty minutes to reach their homes. The escalators made the journey take just a few minutes and connected the neighbourhood with the rest of the city.

But the biggest change came from the people who live there. Local artists painted colourful murals on the walls. Many of the paintings tell the neighbourhood's history, its pain and its hopes. Young people started hip-hop groups and dance crews, and now they perform for visitors in the streets.

Some residents worry that tourism brings new problems, like higher prices. But many say that art gave the community something important: the chance to tell its own story, instead of letting others tell it.`,
    gloss: [
      { word: "neighbourhood", means: "an area of a city where people live", es: "barrio" },
      { word: "escalators", means: "moving stairs", es: "escaleras eléctricas" },
      { word: "steep", means: "going up very quickly, not flat", es: "empinado" },
      { word: "murals", means: "large paintings on walls", es: "murales" },
      { word: "residents", means: "people who live in a place", es: "residentes, habitantes" },
    ],
    questions: [
      { q: "How did the escalators help people in Comuna 13?", options: ["They made the trip home much shorter.", "They brought artists from other countries.", "They made the streets less steep."], answer: 0, why: "\"The escalators made the journey take just a few minutes.\"" },
      { q: "What do many of the murals show?", options: ["Famous tourists who visited.", "Paintings copied from museums.", "The neighbourhood's history and hopes."], answer: 2, why: "\"Many of the paintings tell the neighbourhood's history, its pain and its hopes.\"" },
      { q: "What do some residents worry about?", options: ["Tourism may cause problems such as higher prices.", "The escalators will stop working because too many visitors use them.", "Young people don't want to make art any more."], answer: 0, why: "\"Some residents worry that tourism brings new problems, like higher prices.\"" },
    ],
  },
];
