/* A1 Communicate. Five steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, es, fix, gap, heard, ord, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/a1c-${n}-${k}.mp3`;

export const A1_COMMUNICATE_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "Welcome to the sports club! What's your name? Daniel Soto. How do you spell your surname? S, O, T, O. How old are you? I'm twelve. Where do you live? In Pine Street. What's your phone number? It's three one two, five five five, eight four." },
  { file: X("01", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Where do you live? In Pine Street." },
  { file: X("02", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "What's your favourite food? My favourite food is pasta. What about you? I love tacos. And what's your favourite singer? I really like Shakira. Me too!" },
  { file: X("02", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "My favourite food is pasta." },
  { file: X("03", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "Hi! Can I help you? Yes, can I have a cheese sandwich and an orange juice, please? Sure. Anything else? No, thank you. How much is it? It's five dollars. Here you are. Thank you!" },
  { file: X("03", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "How much is it? It's five dollars." },
];

const personalInfo: NodePractice = {
  nodeId: "a1.give-personal-information",
  explain: "Fill in forms and answer questions about you: What's your name? What's your surname? How do you spell it? How old are you? Where do you live? What's your phone number? What's your email address?",
  pattern: ["What's your surname? How do you spell it?", "Where do you live? I live in … / at …", "What's your phone number? It's …", "What's your email? It's ana at mail dot com."],
  es: "surname = apellido. Los números de teléfono se dicen uno por uno: three one two. @ = at, . = dot.",
  steps: [
    [
      heard(X("01", "notice"), "What is the boy's surname?", ["Soto", "Daniel", "Pine"], 0, "'Daniel Soto … S, O, T, O.'"),
      heard(X("01", "notice"), "How old is Daniel?", ["Twelve", "Twenty", "Two"], 0, "'I'm twelve.'"),
      heard(X("01", "notice"), "Where does he live?", ["In Pine Street", "In Soto Street", "At the sports club"], 0, "'In Pine Street.'"),
      ch("Your surname is your ___.", ["family name", "first name", "nickname"], 0, "surname = family name."),
      ch("What's your ___ number?", ["phone", "house", "age"], 0, "phone number."),
    ],
    [
      es(ch("'@' in an email address is …", ["at", "and", "a"], 0, "@ = at."), "@ se dice 'at'."),
      ch("'.' in an email address is …", ["dot", "point", "stop"], 0, ". = dot."),
      ch("Which question asks about your home?", ["Where do you live?", "What do you live?", "Where you live?"], 0, "Where do you live?"),
      ch("How do you say 555 in a phone number?", ["five five five", "five hundred fifty-five", "fives"], 0, "Say each number: five five five."),
      ch("Which is a correct answer to 'How old are you?'", ["I'm thirteen.", "I have thirteen.", "Thirteen years have."], 0, "I'm thirteen."),
    ],
    [
      gap("What's your", "? It's Ramírez.", ["surname", "family name", "last name"], "surname = family name."),
      gap("I live", "Bogotá.", ["in"], "live in + city."),
      tr("Write the email address.", "sam at mail dot com", ["sam@mail.com"], "at = @, dot = ."),
      dict(X("01", "dict"), ["Where do you live? In Pine Street"]),
      say("My name is … My surname is … I live in …", "Your own information."),
    ],
    [
      es(fix(["Where", "you live?"], 1, ["do you live?"], "Where do you live?"), "Pregunta con do: Where do you live?"),
      fix(["My email is ana", "arroba", "mail dot com."], 1, ["at"], "@ = at."),
      fix(["How do you", "write", "your surname? S-O-T-O."], 1, ["spell"], "How do you spell …?"),
      ord("What is your phone number?", "What is + your phone number?"),
      ord("I live in a small town.", "I live + in a small town."),
    ],
    [
      ctx("At a club, the receptionist asks: 'How do you spell your surname?' Your surname is Gil.", "Best answer:", ["G-I-L.", "Gil is.", "Yes, Gil."], 0, "Spell it with letters."),
      ctx("Someone asks your email. It's luis.p@mail.com.", "How do you say it?", ["luis dot p at mail dot com", "luis point p arroba mail point com", "luis p mail com"], 0, "dot and at."),
      ctx("You want to know where your new friend lives.", "Best question:", ["Where do you live?", "Where are you live?", "Where you live?"], 0, "Where do you live?"),
      ch("Which is personal information?", ["your address", "your favourite colour", "the weather"], 0, "Your address."),
      say("My phone number is three one two, five five five …", "Say a number one digit at a time."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short form about you (20 words or more): name, surname, age, where you live, school and an invented email." },
      { universe: "screens", text: "Create a player profile for a game (20 words or more): name, age, city, team and an invented email." },
    ],
    minWords: 20,
    checks: [
      { label: "Name or surname", pattern: "\\b(name|surname)\\b", min: 1 },
      { label: "Where you live (I live in …)", pattern: "\\blive\\s+(in|at|on)\\b", min: 1 },
    ],
    rubric: ["I wrote my name and surname.", "I wrote where I live (I live in …).", "I wrote my age with I'm."],
    model: "My name is Laura. My surname is Gómez: G-O-M-E-Z. I'm eleven. I live in Pereira. My school is Santa Ana School. My email is laura at mail dot com.",
  },
};

const favourites: NodePractice = {
  nodeId: "a1.talk-about-favourites",
  explain: "Ask and talk about favourite things: What's your favourite food? My favourite food is pasta. Who's your favourite singer? I really like … Agree: Me too! Disagree politely: Really? I prefer …",
  pattern: ["What's your favourite …?", "My favourite … is …", "Who's your favourite singer / player?", "I really like … · I love …", "Me too! · Really? I prefer …"],
  es: "favourite = favorito. Me too = yo también. I prefer = prefiero.",
  steps: [
    [
      heard(X("02", "notice"), "What is the first speaker's favourite food?", ["Pasta", "Tacos", "Pizza"], 0, "'My favourite food is pasta.'"),
      heard(X("02", "notice"), "What food does the second speaker love?", ["Tacos", "Pasta", "Rice"], 0, "'I love tacos.'"),
      heard(X("02", "notice"), "Who do they both like?", ["Shakira", "Karol G", "Bad Bunny"], 0, "'I really like Shakira. Me too!'"),
      ch("What's your ___ colour?", ["favourite", "favour", "like"], 0, "favourite colour."),
      ch("I like dogs. — ___! I like dogs too.", ["Me too", "Me neither", "I too"], 0, "Me too."),
    ],
    [
      ch("___'s your favourite singer?", ["Who", "What", "Where"], 0, "A person → Who's …?"),
      ch("___'s your favourite film?", ["What", "Who", "When"], 0, "A thing → What's …?"),
      es(ch("You don't agree, politely:", ["Really? I prefer cats.", "No! You're wrong.", "Cats! Bad dogs!"], 0, "Polite: Really? I prefer …"), "Para no estar de acuerdo con amabilidad: Really? I prefer …"),
      ch("Which is correct?", ["My favourite sport is football.", "My favourite sport football.", "Football is my favourite sports."], 0, "My favourite sport is …"),
      ch("'I love it!' means you …", ["like it very much", "don't like it", "don't know it"], 0, "love = like very much."),
    ],
    [
      gap("My favourite", "is green.", ["colour", "color"], "My favourite colour …"),
      gap("", "is your favourite player? Messi.", ["Who", "Who's"], "Who is your favourite player?"),
      tr("Write it with 'favourite'.", "I like summer the most.", ["My favourite season is summer"], "My favourite season is summer."),
      dict(X("02", "dict"), ["My favourite food is pasta", "My favorite food is pasta"]),
      say("What's your favourite game? Mine is Minecraft.", "Ask and answer."),
    ],
    [
      fix(["What is your", "favourites", "film?"], 1, ["favourite"], "favourite (no -s)."),
      es(fix(["What", "is your favourite singer?"], 0, ["Who"], "A person → who."), "Para personas: Who."),
      fix(["I like pizza. — Me", "also!"], 1, ["too!"], "Me too!"),
      ord("What is your favourite animal?", "What is + your favourite animal?"),
      ord("My favourite day is Saturday.", "My favourite day + is + Saturday."),
    ],
    [
      ctx("Your friend says: 'My favourite food is pizza.' You love pizza too.", "Best answer:", ["Me too!", "Me neither.", "Yes, it is."], 0, "Me too!"),
      ctx("Your friend says: 'I love winter.' You prefer summer.", "Best polite answer:", ["Really? I prefer summer.", "No, winter is terrible.", "Me too."], 0, "Really? I prefer …"),
      ctx("You want to know your friend's favourite YouTuber.", "Best question:", ["Who's your favourite YouTuber?", "What's your favourite YouTuber is?", "Who your favourite YouTuber?"], 0, "Who's your favourite …?"),
      ch("Which is correct?", ["My favourite subjects are art and music.", "My favourite subject are art and music.", "My favourites subject is art."], 0, "Two subjects → subjects are."),
      say("What's your favourite food? Really? Me too!", "A short chat."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about five of your favourite things (20 words or more): food, colour, singer, sport, day." },
      { universe: "screens", text: "Write a short chat with a friend about favourite games and series (20 words or more). Use Me too! or I prefer …" },
    ],
    minWords: 20,
    checks: [
      { label: "favourite", pattern: "\\bfavou?rite\\b", min: 3 },
    ],
    rubric: ["I used My favourite … is …", "I used Who for people and What for things.", "I wrote favourite without -s."],
    model: "My favourite food is arepas. My favourite colour is green. My favourite singer is Shakira. My favourite sport is volleyball and my favourite day is Friday.",
  },
};

const cafe: NodePractice = {
  nodeId: "a1.ordering-food-and-drink",
  explain: "In a café or shop: Can I have a sandwich, please? I'd like an orange juice, please. How much is it? It's five dollars. Here you are. Thank you! The person working may ask: Can I help you? Anything else?",
  pattern: ["Can I help you?", "Can I have …, please? · I'd like …, please.", "Anything else? No, thank you.", "How much is it? It's … dollars / pesos.", "Here you are. · Thank you!"],
  es: "I'd like = me gustaría (más educado que I want). How much is it? = ¿Cuánto cuesta?",
  steps: [
    [
      heard(X("03", "notice"), "What sandwich does the customer want?", ["Cheese", "Chicken", "Egg"], 0, "'a cheese sandwich'"),
      heard(X("03", "notice"), "What drink does the customer want?", ["Orange juice", "Water", "Milk"], 0, "'an orange juice'"),
      heard(X("03", "notice"), "How much is it?", ["Five dollars", "Fifteen dollars", "Fifty dollars"], 0, "'It's five dollars.'"),
      ch("Can I ___ a juice, please?", ["have", "has", "having"], 0, "Can I have …?"),
      ch("How ___ is it?", ["much", "many", "old"], 0, "How much is it?"),
    ],
    [
      es(ch("Which is more polite?", ["I'd like a water, please.", "I want water.", "Give me water."], 0, "I'd like … please."), "I'd like es más educado que I want."),
      ch("The waiter says 'Anything else?' You don't want more. You say:", ["No, thank you.", "Yes, please.", "Here you are."], 0, "No, thank you."),
      ch("You give money to the person. You say:", ["Here you are.", "How much is it?", "Can I help you?"], 0, "Here you are."),
      ch("'Can I help you?' is said by …", ["the person working in the shop", "the customer", "a friend at school"], 0, "The shop assistant."),
      ch("Which question asks the price?", ["How much is it?", "How many is it?", "What price you?"], 0, "How much is it?"),
    ],
    [
      gap("Can I have a sandwich,", "?", ["please"], "… please?"),
      gap("I'd", "a hot chocolate, please.", ["like"], "I'd like …"),
      tr("Make it polite.", "I want a cake.", ["I'd like a cake, please", "Can I have a cake, please?", "I would like a cake, please"], "I'd like … please."),
      dict(X("03", "dict"), ["How much is it? It's five dollars", "How much is it? It's 5 dollars", "How much is it? It is five dollars"]),
      say("Can I have a cheese sandwich and an orange juice, please?", "Polite and clear."),
    ],
    [
      fix(["How", "many", "is the pizza?"], 1, ["much"], "Price → how much."),
      es(fix(["Can I", "has", "a cookie, please?"], 1, ["have"], "Can I have …?"), "Can I have, no has."),
      fix(["I'd", "likes", "a juice, please."], 1, ["like"], "I'd like."),
      ord("Can I have a banana, please?", "Can I have + a banana + please?"),
      ord("How much is the water?", "How much + is + the water?"),
    ],
    [
      ctx("At the school café, you want an apple.", "Best sentence:", ["Can I have an apple, please?", "Give me apple.", "I want an apple now."], 0, "Can I have …, please?"),
      ctx("You don't know the price of the cake.", "Best question:", ["How much is the cake?", "How many is the cake?", "What cost cake?"], 0, "How much is …?"),
      ctx("The cashier gives you your change.", "Best sentence:", ["Thank you!", "Here you are.", "Can I help you?"], 0, "Thank you!"),
      ch("Which is a full, polite order?", ["Hi! I'd like a lemonade, please.", "Lemonade.", "You, lemonade."], 0, "Hi + I'd like … please."),
      say("Hi! I'd like a hot chocolate, please. How much is it?", "Order at a café."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a conversation in a café (20 words or more) between you and the person working there. Order two things and ask the price." },
      { universe: "screens", text: "Write a conversation in a game shop (20 words or more). Ask for two items and the price." },
    ],
    minWords: 20,
    checks: [
      { label: "A polite order (Can I have … / I'd like …)", pattern: "\\bcan I have\\b|\\bI'd like\\b|\\bI would like\\b", min: 1 },
      { label: "please", pattern: "\\bplease\\b", min: 1 },
      { label: "How much", pattern: "\\bhow much\\b", min: 1 },
    ],
    rubric: ["I ordered with Can I have or I'd like.", "I used please and thank you.", "I asked How much is it?"],
    model: "Hi! Can I help you? Yes, I'd like a chicken sandwich and a lemonade, please. Anything else? No, thank you. How much is it? It's six dollars. Here you are. Thanks!",
  },
};

export const A1_COMMUNICATE: NodePractice[] = [personalInfo, favourites, cafe];
