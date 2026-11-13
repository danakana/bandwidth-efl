/* A1+ Communicate. Five steps per skill. Original content for Bandwidth EFL. For teacher review.
   Lowest band: short Spanish notes (es) and glosses shown only after a wrong answer. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, es, fix, gap, heard, ord, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/a1pc-${n}-${k}.mp3`;

export const A1P_COMMUNICATE_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "Hello! My name's Camila. I'm fourteen, and I'm from Manizales. I live with my mum and my two brothers. I'm in ninth grade. My email is camila dot ruiz at mail dot com. Nice to meet you!" },
  { file: X("01", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "I live with my mum and my two brothers." },
  { file: X("02", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "I love basketball, and I really like pizza. I don't like horror films. They're scary! I hate getting up early. My sister loves cats, but she doesn't like dogs. What about you? Do you like dogs?" },
  { file: X("02", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "I don't like horror films." },
  { file: X("03", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Hi. Can I have a ham sandwich, please? And could I have a glass of water? Thank you. Excuse me, can I have the bill, please? Thanks very much." },
  { file: X("03", "dict"), voice: "8DvnqWWA3WWXixOm7zQI", script: "Could I have a glass of water?" },
  { file: X("04", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Good morning, Mrs Torres. How are you? I'm very well, thank you. Hey, Nico! What's up? Not much! See you later. Goodbye, Mr Díaz. Have a good afternoon." },
  { file: X("04", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "Good morning, Mrs Torres. How are you?" },
  { file: X("05", "notice"), voice: "bIHbv24MWmeRgasZH58o", script: "Can I have a juice, please? Here you are. Thank you! Could you pass me the salt, please? Sure. Thanks a lot. Excuse me, is this seat free? Yes, it is. Thank you so much." },
  { file: X("05", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "Could you pass me the salt, please?" },
  { file: X("06", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "Excuse me, Ms López, can I ask a question? Of course. Sorry, Mr Gómez, I don't understand. Thank you, Miss. Good morning, sir. Good afternoon, Professor Ramírez." },
  { file: X("06", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "Excuse me, Ms López, can I ask a question?" },
];

const greet: NodePractice = {
  nodeId: "a1p.greet-introduce-give-personal-info",
  explain: "To introduce yourself, give your name, age, city and family: 'My name's Camila. I'm fourteen. I'm from Manizales. I live with my mum.' Ask: What's your name? How old are you? Where are you from? Where do you live? For emails, say @ as 'at' and . as 'dot'.",
  pattern: ["My name's … · I'm … (years old) · I'm from …", "I live in … / with …", "What's your name? Where are you from? How old are you?", "Email: name at mail dot com"],
  es: "Para la edad: I'm 14 (no 'I have 14'). Para decir un correo: @ = at, . = dot.",
  steps: [
    [
      heard(X("01", "notice"), "How old is Camila?", ["Fourteen", "Forty", "Thirteen"], 0, "'I'm fourteen.'"),
      heard(X("01", "notice"), "Where is Camila from?", ["Manizales", "Medellín", "Montería"], 0, "'I'm from Manizales.'"),
      heard(X("01", "notice"), "Who does she live with?", ["Her mum and two brothers", "Her dad and sister", "Her grandparents"], 0, "'My mum and my two brothers.'"),
      ch("'My name's Camila' means:", ["My name is Camila", "My names Camila", "My name has Camila"], 0, "name's = name is."),
      ch("How do you say '@' in an email?", ["at", "arroba", "a"], 0, "@ = at."),
    ],
    [
      ch("Which question asks for a city?", ["Where are you from?", "How are you?", "Who are you?"], 0, "where = place."),
      es(ch("Which is correct?", ["I'm fourteen years old.", "I have fourteen years.", "I'm fourteen years."], 0, "be + age (years old)."), "Edad = I'm 14 o I'm 14 years old."),
      ch("'What's your surname?' asks for:", ["your family name", "your first name", "your nickname"], 0, "surname = apellido."),
      ch("Choose the best answer to 'Where do you live?'", ["In Ibagué, near the centre.", "I'm fine, thanks. And you, Lucas?", "I'm thirteen. I'm in seventh grade."], 0, "A place."),
      ch("How do you say '.' in an email?", ["dot", "point", "punto"], 0, ". = dot."),
    ],
    [
      gap("Hi! My", "is Santiago.", ["name", "name's"], "My name is …"),
      gap("I'm", "Colombia.", ["from"], "I'm from + country."),
      tr("Write the question.", "(Ask someone's age.)", ["How old are you?", "How old are you"], "How old are you?"),
      dict(X("01", "dict"), ["I live with my mum and my two brothers"]),
      say("Hi! My name's Juan. I'm thirteen and I'm from Cali.", "Stress the information: JUAN, THIRteen, CAli."),
    ],
    [
      fix(["I", "have", "fourteen years old."], 1, ["am", "'m"], "Age → am."),
      fix(["I'm", "of", "Bucaramanga."], 1, ["from"], "I'm from."),
      fix(["Where", "you are", "from?"], 1, ["are you"], "Question: are you."),
      ch("Which is wrong?", ["My name are Pedro.", "My name is Pedro.", "I'm Pedro."], 0, "name → is."),
      ord("What's your email address?", "What's + your + email address?"),
    ],
    [
      ctx("A new classmate: 'Hi! What's your name?'", "Best answer:", ["I'm Ana. What's your name?", "Ana is my name. What your name?", "My name Ana. What is you name?"], 0, "Answer + ask back."),
      ctx("Online form: 'Age?'", "Best answer:", ["13", "13 years old have", "I have 13"], 0, "Just the number."),
      ctx("A visitor: 'Where are you from?'", "Best answer:", ["I'm from Colombia, from Bogotá.", "I am Colombia, from the capital.", "I'm of Bogotá, in Colombia."], 0, "I'm from …"),
      ch("Introduce yourself in a video call:", ["Hi everyone! I'm Sara, I'm twelve and I live in Neiva.", "Hi everyone! I Sara, twelve years and live in Neiva.", "Hi everyone! I have Sara, I have twelve, I live Neiva."], 0, "Full, clear sentences."),
      say("Nice to meet you! Where are you from?", "Friendly tone."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a profile for a pen pal (20 words or more): name, age, city, family and one more thing about you." },
      { universe: "screens", text: "Write your bio for a gaming or music app (20 words or more): name, age, city and what you like." },
    ],
    minWords: 20,
    checks: [
      { label: "Name (My name is / I'm …)", pattern: "\\b(my name is|my name's|i'm|i am)\\s+[A-Z]", min: 1 },
      { label: "Age with be", pattern: "\\b(i'm|i am)\\s+(\\d+|\\w+teen|twelve|eleven|ten)\\b", min: 1 },
      { label: "Place (I'm from / I live in)", pattern: "\\b(i'm from|i am from|i live in|i live with)\\b", min: 1 },
    ],
    rubric: ["I gave my name, age and city.", "I used I'm for age.", "I wrote about my family."],
    model: "Hi! My name's Mariana. I'm thirteen years old and I'm from Pasto. I live with my parents and my little sister. I'm in eighth grade. I love drawing and music.",
  },
};

const likes: NodePractice = {
  nodeId: "a1p.express-likes-and-dislikes",
  explain: "Say what you like with love, like, don't like, hate. After these verbs, use a noun or verb-ing: 'I love basketball.' 'I hate getting up early.' Make it stronger or softer: I really like, I quite like, I don't like … very much. Ask: Do you like …? What about you?",
  pattern: ["♥♥ I love … · ♥ I like … · ✗ I don't like … · ✗✗ I hate …", "+ noun: I like pizza.", "+ verb-ing: I love dancing.", "Ask: Do you like …? What about you?"],
  es: "«Me gusta» = I like (yo soy el sujeto). No digas 'Me like'. Y para la tercera persona: she likes.",
  steps: [
    [
      heard(X("02", "notice"), "What sport does the speaker love?", ["Basketball", "Football", "Tennis"], 0, "'I love basketball.'"),
      heard(X("02", "notice"), "Why doesn't the speaker like horror films?", ["They're scary", "They're boring", "They're long"], 0, "'They're scary!'"),
      heard(X("02", "notice"), "What does the sister love?", ["Cats", "Dogs", "Pizza"], 0, "'My sister loves cats.'"),
      ch("Which is the strongest?", ["I love it.", "I like it.", "I don't mind it."], 0, "love > like."),
      ch("I ___ swimming. It's great!", ["love", "hate", "don't like"], 0, "Positive → love."),
    ],
    [
      es(ch("«Me gusta el fútbol»:", ["I like football.", "Me like football.", "It likes me football."], 0, "I like."), "En inglés: I like football (yo + like)."),
      ch("Which is correct?", ["I like dancing.", "I like dance it.", "I like to dancing."], 0, "like + -ing."),
      ch("She ___ chocolate.", ["likes", "like", "liking"], 0, "she → likes."),
      ch("Which question is correct?", ["Do you like rap?", "Like you rap?", "You like rap?"], 0, "Do you like …?"),
      ch("'I don't like it very much' is:", ["a soft no", "a strong yes", "a question"], 0, "Soft negative."),
    ],
    [
      gap("I really", "pizza. It's my favourite!", ["like", "love"], "like / love."),
      gap("My brother doesn't", "vegetables.", ["like"], "doesn't + like."),
      tr("Make it negative.", "I like horror films.", ["I don't like horror films", "I do not like horror films"], "don't like."),
      dict(X("02", "dict"), ["I don't like horror films", "I do not like horror films"]),
      say("I love music, but I hate getting up early.", "Strong stress on LOVE and HATE."),
    ],
    [
      fix(["My mum", "like", "salsa music."], 1, ["likes"], "she → likes."),
      fix(["I love", "play", "video games."], 1, ["playing"], "love + -ing."),
      fix(["She", "don't like", "spiders."], 1, ["doesn't like", "does not like"], "she → doesn't."),
      ch("Which is wrong?", ["Do you likes pizza?", "Do you like pizza?", "Does she like pizza?"], 0, "Do you like."),
      ord("What kind of music do you like?", "What + kind of + noun + do you like?"),
    ],
    [
      ctx("Friend: 'Do you like reggaetón?'", "You do, a lot. Best answer:", ["Yes, I love it!", "Yes, I love.", "Yes, I like."], 0, "love it (needs it)."),
      ctx("Friend: 'I love cats. What about you?'", "Best answer:", ["I like them, but I prefer dogs.", "I like they, but I prefer the dogs.", "Me too like them, but I prefer dog."], 0, "Answer + reason."),
      ch("Describe your hobbies:", ["I love drawing and I really like skating.", "I love draw and I really like skate.", "I love to drawing."], 0, "love + -ing."),
      ctx("Your aunt offers you broccoli. You don't like it.", "Polite answer:", ["No, thank you. I don't really like broccoli.", "No, thanks. Broccoli is bad and I hate it.", "Puaj! No, I hate broccoli. Take it away."], 0, "Polite and soft."),
      say("Do you like football? Yes, I love it!", "love IT: don't forget it."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about things you love, like, don't like and hate (20 words or more). Use at least one verb-ing." },
      { universe: "arts", text: "Write about music, films and art: what do you love and hate? (20 words or more)" },
    ],
    minWords: 20,
    checks: [
      { label: "Positive (love, like)", pattern: "\\b(love|loves|like|likes|really like)\\b", min: 2 },
      { label: "Negative (don't like, hate)", pattern: "\\b(don't like|doesn't like|hate|hates)\\b", min: 1 },
      { label: "A verb-ing after like / love / hate", pattern: "\\b(love|loves|like|likes|hate|hates)\\s+\\w+ing\\b", min: 1 },
    ],
    rubric: ["I used love, like, don't like and hate.", "I used verb-ing after these verbs.", "I added a reason or detail."],
    model: "I love music and I really like dancing. I like pizza, but I don't like vegetables very much. I hate getting up early on Mondays. My best friend loves cats, but I prefer dogs.",
  },
};

const askPolitely: NodePractice = {
  nodeId: "a1p.ask-for-things-politely",
  explain: "To ask for things politely, use Can I have …, please? or Could I have …, please? (could is a little more polite). Answer with Here you are or Sure. Then say Thank you or Thanks. In a café or shop, don't say 'Give me'; it sounds rude in English.",
  pattern: ["Can I have a …, please?", "Could I have …, please? (more polite)", "Here you are. · Sure.", "Thank you. · Thanks very much."],
  es: "En inglés 'Give me…' suena brusco. Usa Can I have…, please? Es como «¿Me regala…?» o «¿Me da…, por favor?».",
  steps: [
    [
      heard(X("03", "notice"), "What sandwich does the speaker want?", ["Ham", "Cheese", "Chicken"], 0, "'A ham sandwich.'"),
      heard(X("03", "notice"), "What drink does the speaker ask for?", ["A glass of water", "A big glass of orange juice", "A cup of hot coffee with milk"], 0, "'A glass of water.'"),
      heard(X("03", "notice"), "What does the speaker ask for at the end?", ["The bill", "A menu", "More water"], 0, "'Can I have the bill, please?'"),
      ch("Which is polite?", ["Can I have a juice, please?", "Give me a juice now, OK?", "I want a juice. Bring it."], 0, "Can I have …, please?"),
      ch("The waiter gives you the food. He says:", ["Here you are.", "Here are you.", "Thank you."], 0, "Here you are."),
    ],
    [
      es(ch("«¿Me da un agua, por favor?»:", ["Could I have a water, please?", "Give me a water, please.", "Do you give me a water?"], 0, "Could I have …, please?"), "'Give me' suena grosero en inglés. Usa Could / Can I have."),
      ch("Which is the most polite?", ["Could I have the menu, please?", "Can I have the menu now?", "Give me the menu, OK?"], 0, "Could + please."),
      ch("Someone thanks you. You say:", ["You're welcome.", "Here you are.", "Please."], 0, "You're welcome."),
      ch("Can I ___ a pen, please?", ["borrow", "lend", "give"], 0, "borrow = use and give back."),
      ch("'The bill' in a restaurant is:", ["the paper to pay", "the menu", "the waiter"], 0, "bill = la cuenta."),
    ],
    [
      gap("Can I", "a cheese sandwich, please?", ["have"], "Can I have …?"),
      gap("Here", "are. — Thanks!", ["you"], "Here you are."),
      tr("Make it polite.", "Give me the salt.", ["Can I have the salt, please?", "Could I have the salt, please?", "Can you pass me the salt, please?", "Could you pass me the salt, please?", "Can I have the salt please?"], "Can I have …, please?"),
      dict(X("03", "dict"), ["Could I have a glass of water?", "Could I have a glass of water"]),
      say("Could I have an orange juice, please?", "please: soft, with a smile."),
    ],
    [
      fix(["Hello.", "Give me", "a coffee, please."], 1, ["Can I have", "Could I have"], "Polite: Can I have."),
      fix(["Can I", "has", "the bill, please?"], 1, ["have"], "Can I have."),
      fix(["'Thank you!' 'Here", "are you", "!'"], 1, ["you are"], "Here you are."),
      ch("Which is wrong?", ["I want the menu.", "Could I have the menu, please?", "Can I see the menu, please?"], 0, "'I want' sounds rude."),
      ord("Could I have some more water, please?", "Could I have + thing + please?"),
    ],
    [
      ctx("In a café. Waiter: 'What would you like?'", "Best answer:", ["Can I have a hot chocolate, please?", "Give me a hot chocolate now.", "I want a hot chocolate. Fast!"], 0, "Polite request."),
      ctx("At a friend's house, dinner.", "You want the bread:", ["Could you pass me the bread, please?", "Give me the bread, please. Now!", "Bread! Pass the bread to me now."], 0, "Could you pass me …?"),
      ctx("Shop assistant gives you the change.", "You say:", ["Thanks very much!", "You're welcome!", "Here you are!"], 0, "Thanks."),
      ch("At the end of a meal:", ["Excuse me, could I have the bill, please?", "Hey! Bill! Give me the bill now, OK?", "Bill, please! I want to pay quickly."], 0, "Polite."),
      say("Excuse me, can I have the bill, please?", "Rising on please."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a dialogue in a café (20 words or more). Ask for food and a drink, then the bill. Use Can I have / Could I have, please and thank you." },
      { universe: "futures", text: "Write a dialogue with a robot waiter in the future (20 words or more). Ask politely for three things." },
    ],
    minWords: 20,
    checks: [
      { label: "Can / Could I have …", pattern: "\\b(can|could) i have\\b", min: 2 },
      { label: "please", pattern: "\\bplease\\b", min: 2 },
      { label: "thank you / thanks", pattern: "\\b(thank you|thanks)\\b", min: 1 },
    ],
    rubric: ["I used Can / Could I have …?", "I used please and thank you.", "I didn't use 'Give me' or 'I want'."],
    model: "Waiter: Hello! What would you like? Me: Can I have a cheese arepa, please? And could I have a mango juice? Waiter: Here you are. Me: Thank you! Excuse me, can I have the bill, please?",
  },
};

const formalInformal: NodePractice = {
  nodeId: "a1p.formal-vs-informal-greetings",
  explain: "With friends (informal): Hi! Hey! What's up? See you! Bye! With teachers and adults you don't know well (formal): Good morning / afternoon / evening. How are you? Goodbye. Have a good day. Use Mr (man), Mrs (married woman), Ms (any woman) + surname: 'Good morning, Mrs Torres.' Good night is only for going to bed or leaving at night.",
  pattern: ["Friends: Hi! Hey! What's up? See you! Bye!", "Adults: Good morning / afternoon / evening.", "Mr / Mrs / Ms + surname: Mr Díaz", "Good night = at night, when you leave or go to bed"],
  es: "Good night no es «buenas noches» al llegar, solo al despedirse. Al llegar de noche se dice Good evening.",
  steps: [
    [
      heard(X("04", "notice"), "Who does the speaker greet first?", ["Mrs Torres", "Nico", "Mr Díaz"], 0, "'Good morning, Mrs Torres.'"),
      heard(X("04", "notice"), "Which greeting is informal?", ["What's up?", "Good morning", "Have a good afternoon"], 0, "What's up? = with friends."),
      heard(X("04", "notice"), "How does the speaker say goodbye to Mr Díaz?", ["Goodbye, Mr Díaz", "See you, Díaz", "Bye, man"], 0, "Formal goodbye."),
      ch("You arrive at school at 7 a.m. You say to the head teacher:", ["Good morning.", "Good night.", "What's up?"], 0, "Morning → good morning."),
      ch("To your best friend:", ["Hey! How's it going?", "Good afternoon, sir.", "Good evening, Mrs."], 0, "Informal."),
    ],
    [
      es(ch("You arrive at a party at 8 p.m. You say:", ["Good evening!", "Good night!", "Good morning!"], 0, "Arriving at night → good evening."), "Good night solo para despedirse. Al llegar: Good evening."),
      ch("Mr is for:", ["a man", "a married woman", "a girl"], 0, "Mr = señor."),
      ch("Which is formal?", ["Goodbye. Have a nice day.", "See ya later! Have a good one!", "Bye-bye! See you, my friend!"], 0, "Formal goodbye."),
      ch("'What's up?' means:", ["How are you? / What's new?", "What's the time, please?", "Look up at the sky!"], 0, "Informal hello."),
      ch("At 3 p.m. you meet your teacher:", ["Good afternoon, Ms Rojas.", "Good morning, Ms Rojas.", "Hey Rojas!"], 0, "Afternoon."),
    ],
    [
      gap("Good", ", Mr Gómez. (at 4 p.m.)", ["afternoon"], "Afternoon: 12–6 p.m."),
      gap("See you", "! Bye!", ["later", "tomorrow", "soon"], "See you later."),
      tr("Make it formal.", "Hey Mrs Torres!", ["Good morning, Mrs Torres", "Good morning, Mrs Torres.", "Good afternoon, Mrs Torres", "Hello, Mrs Torres", "Good evening, Mrs Torres"], "Good morning / afternoon + Mrs + surname."),
      dict(X("04", "dict"), ["Good morning, Mrs Torres. How are you?", "Good morning Mrs Torres how are you"]),
      say("Good afternoon, Mr Díaz. How are you?", "Clear and calm."),
    ],
    [
      fix(["Hey! What's up,", "Mrs Teacher", "?"], 1, ["Mrs Torres", "Miss", "Ms Torres"], "Use the surname."),
      fix(["I'm here at 8 p.m.!", "Good night,", "Grandma!"], 1, ["Good evening,", "Good evening"], "Arriving → good evening."),
      fix(["Good", "morning", ", Mr Díaz. (It's 3 p.m.)"], 1, ["afternoon"], "3 p.m. → afternoon."),
      ch("Which is wrong for the head teacher?", ["Yo, what's up?", "Good morning, Mrs Pérez.", "Hello, Mrs Pérez."], 0, "Too informal."),
      ord("Good evening, Mrs Ortiz. How are you?", "Greeting + title + surname."),
    ],
    [
      ctx("You see your classmate in the corridor.", "Best greeting:", ["Hi Nico! What's up?", "Good morning, Mr Nico.", "Good evening, sir."], 0, "Informal for friends."),
      ctx("You meet your friend's grandmother.", "Best greeting:", ["Good afternoon. Nice to meet you.", "Hey! What's up? How's it going?", "Yo! What's up, man? All good?"], 0, "Formal for adults."),
      ctx("You leave a friend's house at 10 p.m.", "You say:", ["Good night! See you tomorrow.", "Good evening! See you tomorrow.", "Good morning! See you tomorrow."], 0, "Leaving at night → good night."),
      ch("Email to a teacher starts:", ["Dear Mr Díaz,", "Hey Díaz!", "What's up teacher,"], 0, "Formal: Dear Mr …"),
      say("Hi! What's up? See you later!", "Relaxed, friendly tone."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write two short dialogues (20 words or more): one with a friend (informal) and one with a teacher (formal)." },
      { universe: "futures", text: "Write how you greet your boss on the first day of your dream job, and how you greet a friend after work (20 words or more)." },
    ],
    minWords: 20,
    checks: [
      { label: "Formal greeting (Good morning / afternoon / evening)", pattern: "\\bgood (morning|afternoon|evening)\\b", min: 1 },
      { label: "Title + name (Mr / Mrs / Ms)", pattern: "\\b(mr|mrs|ms|miss)\\.?\\s+[A-Z]", min: 1 },
      { label: "Informal greeting (Hi, Hey, What's up, See you)", pattern: "\\b(hi|hey|what's up|see you|bye)\\b", min: 1 },
    ],
    rubric: ["I used formal greetings with adults.", "I used Mr / Mrs / Ms + surname.", "I used informal greetings with friends."],
    model: "With my teacher: Good morning, Mrs Rojas. How are you? I'm very well, thank you. With my friend: Hey Leo! What's up? Not much! See you later! Bye!",
  },
};

const pleaseThanks: NodePractice = {
  nodeId: "a1p.do-say-please-and-thank-you-more-often-t",
  explain: "In English, people say please and thank you all the time, even for small things: when a friend passes a pen, when a waiter brings water, when a bus driver opens the door. Without please, a request can sound rude. Add please to requests and thanks / thank you when someone helps you, even family and friends.",
  pattern: ["Request + please: A juice, please.", "Small help → Thanks! · Thanks a lot!", "Big help → Thank you so much!", "Answer: You're welcome. · No problem."],
  es: "En inglés se dice please y thank you más que en español, incluso con la familia. Sin please, una petición puede sonar grosera.",
  steps: [
    [
      heard(X("05", "notice"), "What does the person ask for first?", ["A juice", "The salt", "A seat"], 0, "'Can I have a juice, please?'"),
      heard(X("05", "notice"), "How many times does the speaker say please?", ["Two times", "One time", "Never"], 0, "Juice, please · salt, please."),
      heard(X("05", "notice"), "What does the speaker ask about the seat?", ["Is it free?", "Is it new?", "Is it his?"], 0, "'Is this seat free?'"),
      ch("Your friend gives you a pencil. You say:", ["Thanks!", "Please!", "Sorry!"], 0, "Small help → thanks."),
      ch("Which sounds the most polite?", ["Water, please.", "Water.", "Water now."], 0, "please."),
    ],
    [
      es(ch("Your mum gives you dinner. In English it's normal to say:", ["Thanks, Mum!", "Nothing; it's family.", "Please, Mum!"], 0, "Thanks even with family."), "En inglés se agradece incluso en familia: Thanks, Mum!"),
      ch("Someone says 'Thank you!'. You can answer:", ["No problem!", "Please!", "Here you are!"], 0, "No problem / You're welcome."),
      ch("'Thanks a lot' means:", ["Thank you very much", "Too many things", "A lot of things, please"], 0, "Strong thanks."),
      ch("Which request is better?", ["Can you open the door, please?", "Open the door now. Quickly!", "Door! Open it for me, OK?"], 0, "Can you …, please?"),
      ch("When do you say please?", ["When you ask for something", "When you say goodbye", "When you are sorry"], 0, "Requests."),
    ],
    [
      gap("Two tickets,", ".", ["please"], "Request + please."),
      gap("Thanks a", "!", ["lot"], "Thanks a lot."),
      tr("Make it polite.", "Pass me the salt.", ["Pass me the salt, please", "Could you pass me the salt, please?", "Can you pass me the salt, please?", "Please pass me the salt", "Pass me the salt, please."], "Add please."),
      dict(X("05", "dict"), ["Could you pass me the salt, please?", "Could you pass me the salt please"]),
      say("Thank you so much! — You're welcome.", "so MUCH: strong."),
    ],
    [
      fix(["Mum, give me the remote", "now", "."], 1, ["please"], "Add please."),
      fix(["'Thank you!' 'You're", "welcomed", "!'"], 1, ["welcome"], "You're welcome."),
      fix(["Wow!", "Thank", "a lot for the gift!"], 1, ["Thanks"], "Thanks a lot."),
      ch("Which is wrong?", ["Thank you so many!", "Thank you so much!", "Thanks a lot!"], 0, "so much."),
      ord("Thank you for your help.", "Thank you for + noun."),
    ],
    [
      ctx("The bus driver tells you your stop.", "You say:", ["Thank you!", "Please!", "Nothing."], 0, "Thank the driver."),
      ctx("A classmate lends you a charger.", "Best thing to say:", ["Thanks a lot! I'll give it back soon.", "OK. Give me it. I need it now.", "Thanks. I keep it for a week, OK?"], 0, "Thanks + promise."),
      ctx("At the cinema counter.", "Best order:", ["Two popcorns and a soda, please.", "I want two popcorn and soda now.", "Give me two popcorns and a soda."], 0, "please."),
      ctx("Your friend says 'Thanks for helping me!'", "Best answer:", ["No problem! Any time.", "Please!", "You're welcomed!"], 0, "No problem."),
      say("Can I have two tickets, please? Thanks a lot!", "Smile in your voice."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write five short requests and thank-yous for one day: at home, at school and in a shop (20 words or more)." },
      { universe: "futures", text: "Write a polite conversation with a voice assistant (20 words or more). Use please and thank you." },
    ],
    minWords: 20,
    checks: [
      { label: "please", pattern: "\\bplease\\b", min: 3 },
      { label: "thank you / thanks", pattern: "\\b(thank you|thanks)\\b", min: 2 },
    ],
    rubric: ["I said please in every request.", "I said thank you or thanks.", "I answered thanks with You're welcome or No problem."],
    model: "At home: Can you pass me the bread, please, Dad? Thanks! At school: Can I borrow your ruler, please? Thank you! In a shop: A bottle of water, please. Thanks a lot!",
  },
};

const teacher: NodePractice = {
  nodeId: "a1p.don-t-call-a-teacher-teacher",
  explain: "In Spanish we say «profe» or «teacher», but in English it's strange to call a teacher 'Teacher'. Use the title and surname: Mr Gómez, Mrs Torres, Ms López. Miss (alone) is common in UK schools for women teachers, and Sir for men teachers. Don't use Mr / Mrs with a first name ('Mr Carlos' is wrong).",
  pattern: ["Mr + surname (man): Mr Gómez", "Mrs / Ms + surname (woman): Ms López", "In UK schools: Miss / Sir alone", "Not: 'Teacher!' · Not: 'Mr Carlos'"],
  es: "No digas 'Teacher, …'. Usa Mr / Ms + apellido: Mr Gómez, Ms López. Y nunca Mr + nombre de pila.",
  steps: [
    [
      heard(X("06", "notice"), "What does the speaker call Ms López?", ["Ms López", "Teacher", "Miss Ana"], 0, "'Excuse me, Ms López.'"),
      heard(X("06", "notice"), "What does the speaker say to Mr Gómez?", ["Sorry, I don't understand", "Thank you very much, sir", "Good afternoon, Mr Gómez"], 0, "'Sorry, Mr Gómez, I don't understand.'"),
      heard(X("06", "notice"), "Which words are used alone for teachers?", ["Miss and sir", "Teacher and profe", "Mr and Mrs"], 0, "'Thank you, Miss.' 'Good morning, sir.'"),
      ch("Your teacher is Carlos Gómez. You call him:", ["Mr Gómez", "Mr Carlos", "Teacher"], 0, "Mr + surname."),
      ch("Your teacher is Laura Pérez. You call her:", ["Ms Pérez", "Ms Laura", "Teacher Laura"], 0, "Ms + surname."),
    ],
    [
      es(ch("You want to ask a question. You say:", ["Excuse me, Mr Díaz?", "Teacher, teacher!", "Profe!"], 0, "Excuse me + Mr + surname."), "En inglés no se llama 'Teacher'. Di Mr / Ms + apellido."),
      ch("Mr is used with:", ["the surname", "the first name", "nothing"], 0, "Mr + surname."),
      ch("In a UK school, a student says to a woman teacher:", ["Miss, can I go out?", "Teacher, can I go out?", "Mrs, can I go out?"], 0, "Miss alone is OK."),
      ch("In a UK school, a student says to a man teacher:", ["Sir, I finished!", "Teacher, I finished!", "Mister, I finished!"], 0, "Sir alone is OK."),
      ch("Which is NOT a good way to call a teacher?", ["Teacher", "Mr Ruiz", "Miss"], 0, "Not 'Teacher'."),
    ],
    [
      gap("Good morning,", "Torres. (a woman teacher)", ["Ms", "Mrs", "Miss"], "Ms / Mrs + surname."),
      gap("Excuse me,", "Gómez, I don't understand. (a man)", ["Mr"], "Mr + surname."),
      tr("Make it correct.", "Teacher, can I go to the toilet?", ["Mr Díaz, can I go to the toilet?", "Miss, can I go to the toilet?", "Sir, can I go to the toilet?", "Ms López, can I go to the toilet?", "Excuse me, can I go to the toilet?", "Mrs Torres, can I go to the toilet?"], "Use a title, not 'Teacher'."),
      dict(X("06", "dict"), ["Excuse me, Ms López, can I ask a question?", "Excuse me Ms López can I ask a question"]),
      say("Excuse me, Mr Gómez, can you help me, please?", "Polite rising tone."),
    ],
    [
      fix(["Hello,", "Teacher,", "I have a question."], 1, ["Mr Díaz,", "Ms López,", "Miss,", "Sir,", "Mr Díaz", "Ms López", "Miss", "Sir"], "Use a title, not 'Teacher'."),
      fix(["Good morning,", "Mr Carlos", "!"], 1, ["Mr Gómez", "Mr Ruiz", "Mr Díaz", "Sir"], "Mr + surname."),
      fix(["Thank you,", "teacher", "! See you tomorrow."], 1, ["Miss", "Sir", "Mr Díaz", "Ms López"], "Not 'teacher'."),
      ch("Which is wrong?", ["Ms Ana, I finished!", "Ms Ríos, I finished!", "Miss, I finished!"], 0, "Ms + surname."),
      ord("Excuse me, Mrs Torres, can I open the window?", "Excuse me + title + surname."),
    ],
    [
      ctx("Your English teacher is Andrea Ruiz.", "You need help. Best:", ["Excuse me, Ms Ruiz, can you help me?", "Teacher! Teacher! Help me now!", "Ms Andrea Ruiz, you help me?"], 0, "Ms + surname."),
      ctx("You write an email to your science teacher, Pablo Díaz.", "Best start:", ["Dear Mr Díaz,", "Dear Teacher Pablo,", "Hi Profe,"], 0, "Dear Mr + surname."),
      ctx("Exchange student in London. Your teacher is a man.", "You finish the test. You say:", ["Sir, I've finished.", "Teacher, I've finished.", "Mister, I finished."], 0, "Sir alone."),
      ctx("New teacher: 'Hi, I'm Mr Pinto.'", "Next day you say:", ["Good morning, Mr Pinto!", "Good morning, Teacher!", "Good morning, Pinto!"], 0, "Mr Pinto."),
      say("Thank you, Ms Rojas. Have a good afternoon!", "Warm and polite."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short message to a teacher (20 words or more). Start with Dear Mr / Ms + surname, ask a question, and say thank you." },
      { universe: "words", text: "Write what you say to three teachers at school today (20 words or more). Use Mr, Ms, Miss or Sir correctly." },
    ],
    minWords: 20,
    checks: [
      { label: "Title + surname", pattern: "\\b(mr|mrs|ms)\\.?\\s+[A-Z][a-zá-ú]+", min: 1 },
      { label: "A question", pattern: "\\?", min: 1 },
      { label: "thank you / thanks", pattern: "\\b(thank you|thanks)\\b", min: 1 },
    ],
    rubric: ["I used Mr / Ms + surname.", "I didn't call the teacher 'Teacher'.", "I was polite."],
    model: "Dear Ms Ramírez, I'm in class 7B. I was sick on Monday. Can you tell me the homework for Friday, please? Thank you very much. Best wishes, Tomás.",
  },
};

export const A1P_COMMUNICATE: NodePractice[] = [greet, likes, askPolitely, formalInformal, pleaseThanks, teacher];
