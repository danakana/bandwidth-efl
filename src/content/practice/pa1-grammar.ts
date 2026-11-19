/* Pre-A1 Grammar. Five steps per skill. Original content for Bandwidth EFL. For teacher review.
   First band: very short sentences, lots of listening, Spanish notes (es) after a wrong answer. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, es, fix, gap, heard, ord, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/pa1g-${n}-${k}.mp3`;

export const PA1_GRAMMAR_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "Hello! I am Lucy. I am eleven. This is Tom. He is my brother. He is eight. This is Kiki. She is my cat. You are my new friend!" },
  { file: X("01", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "He is my brother." },
  { file: X("02", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "What is this? It is a pencil. And what is this? It is an eraser. This is my bag. It is blue. What is that? It is my ball!" },
  { file: X("02", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "What is this? It is a pencil." },
  { file: X("03", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "I have a dog and an egg. No! I have a dog and two cats. I have an apple and three bananas. I have one book and four pens." },
  { file: X("03", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "I have an apple and three bananas." },
  { file: X("04", "notice"), voice: "3f6pec3wODJsjTqtcNI2", script: "Look! A big dog. It is a brown dog. And look, a small cat. It is a black cat. I have a red bike and a green ball." },
  { file: X("04", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "I have a red bike." },
  { file: X("05", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "I like pizza. I like bananas. I don't like milk. I like football, but I don't like tennis. Do you like pizza?" },
  { file: X("05", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "I don't like milk." },
  { file: X("06", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "I have a big family. I have one brother and two sisters. I have a grandma. I have a cat, but I don't have a dog." },
  { file: X("06", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "I have one brother and two sisters." },
  { file: X("07", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Where is my ball? Is it in the box? No. Is it on the bed? No. Oh, it is under the bed! And my cat is in the box." },
  { file: X("07", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "It is under the bed." },
];

const be: NodePractice = {
  nodeId: "pa1.i-am-you-are-he-she-it-is",
  explain: "Say who you are with be. I am (I'm). You are (you're). He is (he's) for a boy or a man. She is (she's) for a girl or a woman. It is (it's) for a thing or an animal.",
  pattern: ["I am · I'm", "You are · you're", "He is · he's (a boy)", "She is · she's (a girl)", "It is · it's (a thing)"],
  es: "I am = yo soy / yo estoy. He = él, she = ella, it = para cosas y animales.",
  steps: [
    [
      heard(X("01", "notice"), "What is her name?", ["Lucy", "Tom", "Kiki"], 0, "'Hello! I am Lucy.'"),
      heard(X("01", "notice"), "Who is Tom?", ["Her brother", "Her cat", "Her friend"], 0, "'This is Tom. He is my brother.'"),
      heard(X("01", "notice"), "What is Kiki?", ["A cat", "A dog", "A girl"], 0, "'This is Kiki. She is my cat.'"),
      ch("I ___ Ana.", ["am", "is", "are"], 0, "I → am."),
      ch("You ___ my friend.", ["are", "am", "is"], 0, "you → are."),
    ],
    [
      es(ch("Tom is a boy. ___ is ten.", ["He", "She", "It"], 0, "A boy → he."), "Para un niño: he."),
      es(ch("Sara is a girl. ___ is nine.", ["She", "He", "It"], 0, "A girl → she."), "Para una niña: she."),
      ch("This is my pencil. ___ is red.", ["It", "He", "She"], 0, "A thing → it."),
      ch("What is the short form of 'I am'?", ["I'm", "Im", "I'am"], 0, "I am → I'm."),
      ch("What is the short form of 'she is'?", ["she's", "shes", "she'is"], 0, "she is → she's."),
    ],
    [
      gap("I", "twelve.", ["am", "'m"], "I → am."),
      gap("She", "my sister.", ["is", "'s"], "she → is."),
      gap("You", "my teacher.", ["are", "'re"], "you → are."),
      dict(X("01", "dict"), ["He is my brother", "He's my brother"]),
      say("I'm Lucy. I'm eleven.", "Short forms sound natural: I'm."),
    ],
    [
      fix(["I", "is", "Pedro."], 1, ["am"], "I → am."),
      fix(["She", "are", "my mum."], 1, ["is"], "she → is."),
      es(fix(["My dad", "she", "is tall."], 1, ["he"], "A man → he."), "Papá es él: he."),
      ord("He is my brother.", "He + is + …"),
      ord("I am ten.", "I + am + age."),
    ],
    [
      ctx("A new friend asks: 'What's your name?'", "Best answer:", ["I'm Leo.", "I Leo.", "Is Leo."], 0, "I'm + your name."),
      ctx("You show a photo of your sister.", "Best sentence:", ["She is my sister.", "He is my sister.", "It is my sister."], 0, "A sister → she."),
      ctx("You show your dog.", "Best sentence:", ["It is my dog.", "She my dog.", "I am my dog."], 0, "An animal → it."),
      ch("Which is correct?", ["You are nice.", "You is nice.", "You am nice."], 0, "you → are."),
      say("This is my friend. She is ten.", "Point and say it."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about you and one person in your family (8 words or more). Use I am and he is or she is." },
      { universe: "screens", text: "Write about you and your favourite game character (8 words or more). Use I am and he is, she is or it is." },
    ],
    minWords: 8,
    checks: [
      { label: "I am or I'm", pattern: "\\bI am\\b|\\bI'm\\b", min: 1 },
      { label: "He is, she is or it is", pattern: "\\b(he|she|it) is\\b|\\b(he|she|it)'s\\b", min: 1 },
    ],
    rubric: ["I wrote I am.", "I used he for a boy and she for a girl.", "My sentences start with a capital letter."],
    model: "I am Sofía. I am ten. This is my brother. He is six. He is funny.",
  },
};

const thisIs: NodePractice = {
  nodeId: "pa1.this-is-what-is-this",
  explain: "Point at a thing and ask 'What is this?' (What's this?). Answer 'It is a pencil' (It's a pencil). Use 'this' for a thing near you and 'that' for a thing far away.",
  pattern: ["What is this? · What's this?", "It is a … · It's a …", "This is my bag.", "What is that? (far away)"],
  es: "What is this? = ¿Qué es esto? It's a pen = Es un bolígrafo. En inglés siempre decimos It: It's a pen (no solo 'Is a pen').",
  steps: [
    [
      heard(X("02", "notice"), "What is the first thing?", ["A pencil", "A ball", "A book"], 0, "'It is a pencil.'"),
      heard(X("02", "notice"), "What colour is the bag?", ["Blue", "Red", "Green"], 0, "'This is my bag. It is blue.'"),
      heard(X("02", "notice"), "What is 'that'?", ["A ball", "A pencil", "An eraser"], 0, "'What is that? It is my ball!'"),
      ch("What ___ this?", ["is", "are", "am"], 0, "What is this?"),
      ch("It ___ a book.", ["is", "am", "are"], 0, "It is."),
    ],
    [
      ch("What is the short form of 'what is'?", ["what's", "whats", "what'is"], 0, "what is → what's."),
      es(ch("Which answer is correct?", ["It's a pen.", "Is a pen.", "A pen is."], 0, "Say 'It's a …'."), "No olvides It: It's a pen."),
      ch("The ball is far away. You ask:", ["What is that?", "What is this?", "What this is?"], 0, "Far away → that."),
      ch("The pencil is in your hand. You say:", ["This is my pencil.", "That is my pencil.", "It my pencil."], 0, "Near you → this."),
      ch("Which question is correct?", ["What's this?", "What this?", "This is what?"], 0, "What's this?"),
    ],
    [
      gap("What", "this?", ["is", "'s"], "What is this?"),
      gap("", "a chair.", ["It's", "It is"], "It's a chair."),
      tr("Write it with a short form.", "It is a book.", ["It's a book"], "it is → it's."),
      dict(X("02", "dict"), ["What is this? It is a pencil", "What's this? It's a pencil", "What is this? It's a pencil"]),
      say("What's this? It's a pen.", "Up at the end of the question, down at the end of the answer."),
    ],
    [
      es(fix(["Is", "a", "ruler."], 0, ["It's", "It is"], "Say It's (It is)."), "Falta It: It's a ruler."),
      fix(["What", "are", "this?"], 1, ["is"], "What is this?"),
      fix(["This", "are", "my bag."], 1, ["is"], "This is …"),
      ord("What is this?", "What + is + this?"),
      ord("It is my book.", "It + is + my + book."),
    ],
    [
      ctx("Your friend shows you a new thing and asks: 'What's this?'", "Best answer:", ["It's a phone.", "Is phone.", "Phone is."], 0, "It's a + thing."),
      ctx("You see something far away.", "Best question:", ["What's that?", "What's this?", "What that?"], 0, "Far → that."),
      ctx("You show your bag to a new friend.", "Best sentence:", ["This is my bag.", "Is my bag.", "This my bag is."], 0, "This is + my + thing."),
      ch("Which is correct?", ["It's an apple.", "It's a apple.", "Is an apple."], 0, "It's an apple."),
      say("This is my bag. It's blue.", "Show your bag and say it."),
    ],
  ],
  create: {
    prompts: [
      { text: "Look at your desk. Write about three things (8 words or more). Use This is … and It's …" },
      { universe: "arts", text: "Draw three things, then write about them (8 words or more). Use This is … and It's …" },
    ],
    minWords: 8,
    checks: [
      { label: "This is …", pattern: "\\bthis is\\b", min: 1 },
      { label: "It is or It's", pattern: "\\bit is\\b|\\bit's\\b", min: 1 },
    ],
    rubric: ["I wrote This is …", "I wrote It's …", "I used a or an."],
    model: "This is my desk. This is my pen. It's black. This is my book. It's big.",
  },
};

const aAn: NodePractice = {
  nodeId: "pa1.a-an-and-plurals",
  explain: "Use 'a' before most words: a cat, a dog. Use 'an' before a, e, i, o, u sounds: an apple, an egg. For two or more, add -s: one cat, two cats.",
  pattern: ["a cat · a book · a pen", "an apple · an egg · an orange", "one cat → two cats", "one box → two boxes"],
  es: "a / an = un / una. An va antes de sonido de vocal: an apple. Para el plural agrega -s: two dogs.",
  steps: [
    [
      heard(X("03", "notice"), "How many cats?", ["Two", "One", "Three"], 0, "'I have a dog and two cats.'"),
      heard(X("03", "notice"), "How many bananas?", ["Three", "Two", "Four"], 0, "'three bananas'"),
      heard(X("03", "notice"), "How many pens?", ["Four", "One", "Three"], 0, "'four pens'"),
      ch("___ apple", ["an", "a", "two"], 0, "apple starts with a vowel → an."),
      ch("___ dog", ["a", "an", "two"], 0, "dog → a."),
    ],
    [
      ch("___ egg", ["an", "a", "two"], 0, "egg → an."),
      ch("one cat, two ___", ["cats", "cat", "cates"], 0, "cat → cats."),
      ch("one book, three ___", ["books", "book", "bookes"], 0, "book → books."),
      ch("___ orange", ["an", "a", "three"], 0, "orange → an."),
      ch("one box, two ___", ["boxes", "boxs", "box"], 0, "box → boxes."),
    ],
    [
      gap("I have", "umbrella.", ["an"], "umbrella → an."),
      gap("She has", "bike.", ["a"], "bike → a."),
      tr("Make it two.", "one pen", ["two pens"], "pen → pens."),
      dict(X("03", "dict"), ["I have an apple and three bananas"]),
      say("a cat, an apple, two dogs", "Hear the -s at the end of dogs."),
    ],
    [
      es(fix(["I have", "a", "apple."], 1, ["an"], "apple → an."), "Antes de vocal: an apple."),
      fix(["two", "dog", "and a cat"], 1, ["dogs"], "two → dogs."),
      fix(["It's", "an", "pen."], 1, ["a"], "pen → a."),
      ord("I have an egg.", "an before egg."),
      ord("I have two cats.", "two + cats."),
    ],
    [
      ctx("You have one banana.", "Best sentence:", ["I have a banana.", "I have an banana.", "I have bananas."], 0, "One → a banana."),
      ctx("You have five pencils.", "Best sentence:", ["I have five pencils.", "I have five pencil.", "I have a pencils."], 0, "five → pencils."),
      ch("Which is correct?", ["an elephant", "a elephant", "two elephant"], 0, "elephant → an."),
      ch("Which is correct?", ["three books", "three book", "a books"], 0, "three → books."),
      say("I have an apple and two oranges.", "an apple, two oranges."),
    ],
  ],
  create: {
    prompts: [
      { text: "What is in your bag? Write a list (8 words or more). Use a, an and some plurals." },
      { universe: "science", text: "Count animals in a picture or outside. Write what you see (8 words or more). Use a, an and plurals." },
    ],
    minWords: 8,
    checks: [
      { label: "a or an", pattern: "\\b(a|an)\\b", min: 2 },
      { label: "A plural (two cats, three pens …)", pattern: "\\b(two|three|four|five|six|seven|eight|nine|ten|\\d+)\\s+\\w+s\\b", min: 1 },
    ],
    rubric: ["I used an before a vowel (an apple).", "I added -s for two or more.", "I checked my spelling."],
    model: "In my bag I have a book, an apple, two pencils and three pens.",
  },
};

const adjective: NodePractice = {
  nodeId: "pa1.adjective-before-noun",
  explain: "In English, colour and size words go before the thing: a red car, a big dog. Not 'a car red'. The colour word never changes: red cars (not 'reds cars').",
  pattern: ["a + colour + thing: a red car", "a + size + thing: a big house", "It is red. (colour after is)", "two red cars (red never gets -s)"],
  es: "En español decimos 'un carro rojo'. En inglés el color va primero: a red car.",
  steps: [
    [
      heard(X("04", "notice"), "What colour is the dog?", ["Brown", "Black", "Red"], 0, "'It is a brown dog.'"),
      heard(X("04", "notice"), "The cat is …", ["small", "big", "red"], 0, "'a small cat'"),
      heard(X("04", "notice"), "What colour is the bike?", ["Red", "Green", "Brown"], 0, "'I have a red bike.'"),
      es(ch("Which is correct?", ["a big dog", "a dog big", "big a dog"], 0, "big goes before dog."), "El tamaño va antes: a big dog."),
      ch("Which is correct?", ["a green ball", "a ball green", "green a ball"], 0, "green goes before ball."),
    ],
    [
      ch("Which is correct?", ["a small cat", "a cat small", "small cat a"], 0, "a + small + cat."),
      ch("Which is correct?", ["two red cars", "two reds cars", "two cars reds"], 0, "Colours never get -s."),
      ch("The car is ___.", ["red", "a red", "reds"], 0, "After is: The car is red."),
      ch("Which is correct?", ["a yellow sun", "a sun yellow", "yellow a sun"], 0, "a + yellow + sun."),
      ch("Which is correct?", ["blue eyes", "eyes blue", "blues eyes"], 0, "blue + eyes."),
    ],
    [
      tr("Put the colour first.", "a house white", ["a white house"], "a + white + house."),
      tr("Put the size first.", "a dog small", ["a small dog"], "a + small + dog."),
      gap("I have a", "bag.", ["black", "blue", "red", "green", "pink", "yellow", "white", "brown", "orange", "purple", "big", "small"], "Any colour or size word fits."),
      dict(X("04", "dict"), ["I have a red bike"]),
      say("a big brown dog", "Size, colour, thing."),
    ],
    [
      es(fix(["I have", "a cat black."], 1, ["a black cat"], "a + black + cat."), "Color primero: a black cat."),
      es(fix(["two", "greens", "apples"], 1, ["green"], "No -s on colours."), "Los colores no llevan -s."),
      fix(["It's", "a ball big."], 1, ["a big ball"], "a + big + ball."),
      ord("I have a red pen.", "a + red + pen."),
      ord("She has a small dog.", "a + small + dog."),
    ],
    [
      ctx("You describe your new bike. It is blue.", "Best sentence:", ["I have a blue bike.", "I have a bike blue.", "I have a blues bike."], 0, "a + blue + bike."),
      ctx("Your friend has two black shoes.", "Best sentence:", ["She has two black shoes.", "She has two blacks shoes.", "She has two shoes black."], 0, "black never changes."),
      ch("Which is correct?", ["The sky is blue.", "The sky blue is.", "The sky is a blue."], 0, "The sky is blue."),
      ch("Which is correct?", ["a big red ball", "a ball big red", "a red ball big"], 0, "Size and colour go before ball."),
      say("I have a big green bag.", "Describe your bag."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe three things in your room (8 words or more). Put a colour or size word before each thing." },
      { universe: "arts", text: "Describe a picture you like (8 words or more). Use colour words before the things." },
    ],
    minWords: 8,
    checks: [
      { label: "A colour or size word before a thing", pattern: "\\b(a|an|my|two|three)\\s+(big|small|red|blue|green|yellow|black|white|brown|pink|orange|purple|grey|gray)\\s+\\w+", min: 2 },
    ],
    rubric: ["I put the colour before the thing (a red car).", "I didn't add -s to colours.", "I used a or an."],
    model: "In my room I have a big bed, a small desk and two green chairs.",
  },
};

const like: NodePractice = {
  nodeId: "pa1.i-like-i-don-t-like",
  explain: "Say what you like with 'I like …' and what you don't like with 'I don't like …'. Ask 'Do you like …?' Answer 'Yes, I do' or 'No, I don't'.",
  pattern: ["I like pizza.", "I don't like milk.", "Do you like dogs?", "Yes, I do. / No, I don't."],
  es: "I like = me gusta. I don't like = no me gusta. En inglés empezamos con I: I like dogs (no 'Like dogs').",
  steps: [
    [
      heard(X("05", "notice"), "What food does the speaker like?", ["Pizza", "Milk", "Tennis"], 0, "'I like pizza.'"),
      heard(X("05", "notice"), "What doesn't the speaker like to drink?", ["Milk", "Juice", "Water"], 0, "'I don't like milk.'"),
      heard(X("05", "notice"), "Which sport doesn't the speaker like?", ["Tennis", "Football", "Swimming"], 0, "'I don't like tennis.'"),
      ch("I ___ bananas.", ["like", "likes", "am like"], 0, "I like."),
      ch("I ___ like fish.", ["don't", "no", "not"], 0, "I don't like."),
    ],
    [
      es(ch("Which is correct?", ["I don't like cats.", "I no like cats.", "I not like cats."], 0, "Use don't."), "No me gusta = I don't like (no 'I no like')."),
      ch("___ you like ice cream?", ["Do", "Are", "Is"], 0, "Do you like …?"),
      ch("Do you like dogs? Yes, I ___.", ["do", "like", "am"], 0, "Yes, I do."),
      ch("Do you like cats? No, I ___.", ["don't", "not", "no"], 0, "No, I don't."),
      es(ch("Which is correct?", ["I like dogs.", "Like dogs.", "Me like dogs."], 0, "Start with I."), "Empieza con I: I like dogs."),
    ],
    [
      gap("I", "chocolate.", ["like"], "I like."),
      gap("I", "like rain.", ["don't", "do not"], "I don't like."),
      tr("Make it a question.", "You like football.", ["Do you like football?"], "Do + you + like …?"),
      dict(X("05", "dict"), ["I don't like milk", "I do not like milk"]),
      say("I like pizza, but I don't like milk.", "Stress like and don't."),
    ],
    [
      es(fix(["I", "no", "like eggs."], 1, ["don't"], "I don't like."), "Usa don't, no 'no'."),
      fix(["I", "likes", "music."], 1, ["like"], "I like (no -s)."),
      es(fix(["Like", "football."], 0, ["I like"], "Start with I."), "Falta I: I like football."),
      ord("Do you like apples?", "Do + you + like + …?"),
      ord("I don't like spiders.", "I + don't + like + …"),
    ],
    [
      ctx("Your friend asks: 'Do you like music?' You love music.", "Best answer:", ["Yes, I do!", "Yes, I like.", "Yes, I am."], 0, "Yes, I do."),
      ctx("You don't like cold water.", "Best sentence:", ["I don't like cold water.", "I no like cold water.", "I not like cold water."], 0, "I don't like …"),
      ctx("You want to know about your friend's pet.", "Best question:", ["Do you like cats?", "You like cats?", "Like you cats?"], 0, "Do you like …?"),
      ch("Which is correct?", ["No, I don't.", "No, I not.", "No, I no."], 0, "No, I don't."),
      say("Do you like football? Yes, I do!", "Ask and answer."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write three things you like and two things you don't like (8 words or more)." },
      { universe: "screens", text: "Write about games, videos and music: what you like and what you don't like (8 words or more)." },
    ],
    minWords: 8,
    checks: [
      { label: "I like", pattern: "\\bI like\\b", min: 2 },
      { label: "I don't like", pattern: "\\bI (don't|do not) like\\b", min: 1 },
    ],
    rubric: ["I started with I.", "I wrote I don't like (not I no like).", "I wrote like without -s."],
    model: "I like dogs. I like pizza. I like football. I don't like rain. I don't like spiders.",
  },
};

const have: NodePractice = {
  nodeId: "pa1.i-have-a",
  explain: "Say what you have with 'I have …': I have a cat. I have two brothers. Say what you don't have with 'I don't have …'.",
  pattern: ["I have a dog.", "I have two sisters.", "I don't have a cat.", "Do you have a pet?"],
  es: "I have = yo tengo. I don't have = no tengo.",
  steps: [
    [
      heard(X("06", "notice"), "How many brothers?", ["One", "Two", "Three"], 0, "'one brother'"),
      heard(X("06", "notice"), "How many sisters?", ["Two", "One", "Three"], 0, "'two sisters'"),
      heard(X("06", "notice"), "Which pet does the speaker have?", ["A cat", "A dog", "A bird"], 0, "'I have a cat, but I don't have a dog.'"),
      ch("I ___ a bike.", ["have", "am", "is"], 0, "I have."),
      ch("I ___ have a dog.", ["don't", "no", "not"], 0, "I don't have."),
    ],
    [
      ch("Which is correct?", ["I have two brothers.", "I am two brothers.", "I have two brother."], 0, "I have + two + brothers."),
      es(ch("Which is correct?", ["I don't have a phone.", "I no have a phone.", "I not have a phone."], 0, "I don't have."), "No tengo = I don't have."),
      ch("___ you have a pet?", ["Do", "Are", "Have"], 0, "Do you have …?"),
      ch("Do you have a pet? Yes, I ___.", ["do", "have", "am"], 0, "Yes, I do."),
      ch("Which is correct?", ["I have a red pen.", "I have a pen red.", "I red have a pen."], 0, "a + red + pen."),
    ],
    [
      gap("I", "a grandma.", ["have"], "I have."),
      gap("I don't", "a dog.", ["have"], "I don't have."),
      tr("Make it negative.", "I have a cat.", ["I don't have a cat", "I do not have a cat"], "I don't have …"),
      dict(X("06", "dict"), ["I have one brother and two sisters", "I have 1 brother and 2 sisters"]),
      say("I have one brother and two sisters.", "Say your own family."),
    ],
    [
      es(fix(["I", "no", "have a pen."], 1, ["don't"], "I don't have."), "Usa don't: I don't have."),
      fix(["I", "am", "a dog."], 1, ["have"], "You have a dog. You are not a dog!"),
      fix(["I have two", "sister."], 1, ["sisters"], "two → sisters."),
      ord("I have a big family.", "I + have + a + big + family."),
      ord("Do you have a bike?", "Do + you + have + …?"),
    ],
    [
      ctx("Your new friend asks: 'Do you have brothers?' You have one.", "Best answer:", ["Yes, I have one brother.", "Yes, I am one brother.", "Yes, I have one brothers."], 0, "I have one brother."),
      ctx("You don't have a phone.", "Best sentence:", ["I don't have a phone.", "I no have phone.", "I haven't phone."], 0, "I don't have a phone."),
      ch("Which question is correct?", ["Do you have a pet?", "You have a pet?", "Have you a pet?"], 0, "Do you have …?"),
      ch("Which is correct?", ["I have three cats.", "I have three cat.", "I have a three cats."], 0, "three → cats."),
      say("Do you have a pet? Yes, I do. I have a dog.", "Ask and answer."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about your family and pets (8 words or more). Use I have and I don't have." },
      { universe: "screens", text: "Write about the things you have for games and school (8 words or more). Use I have and I don't have." },
    ],
    minWords: 8,
    checks: [
      { label: "I have", pattern: "\\bI have\\b", min: 1 },
      { label: "I don't have", pattern: "\\bI (don't|do not) have\\b", min: 1 },
    ],
    rubric: ["I used I have.", "I used I don't have.", "I added -s for two or more."],
    model: "I have a small family. I have one sister. I have a cat. I don't have a dog.",
  },
};

const place: NodePractice = {
  nodeId: "pa1.in-on-under",
  explain: "Ask 'Where is it?' Answer with in, on or under. In = inside (in the box). On = on top (on the table). Under = below (under the bed).",
  pattern: ["Where is the ball?", "It's in the box.", "It's on the table.", "It's under the bed."],
  es: "in = dentro de, on = encima de, under = debajo de. En español 'en' puede ser in u on.",
  steps: [
    [
      heard(X("07", "notice"), "Where is the ball?", ["Under the bed", "In the box", "On the bed"], 0, "'It is under the bed!'"),
      heard(X("07", "notice"), "Where is the cat?", ["In the box", "Under the bed", "On the table"], 0, "'My cat is in the box.'"),
      heard(X("07", "notice"), "What is the speaker looking for?", ["A ball", "A cat", "A box"], 0, "'Where is my ball?'"),
      ch("The pen is ___ the table. (on top)", ["on", "in", "under"], 0, "On top → on."),
      ch("The shoes are ___ the bed. (below)", ["under", "on", "in"], 0, "Below → under."),
    ],
    [
      ch("The milk is ___ the fridge. (inside)", ["in", "on", "under"], 0, "Inside → in."),
      ch("___ is my bag? It's on the chair.", ["Where", "What", "Who"], 0, "Where for place."),
      es(ch("The book is on the desk. Where is the book?", ["On top of the desk", "Inside the desk", "Below the desk"], 0, "on = on top."), "on = encima."),
      ch("The cat is under the table. Where is the cat?", ["Below the table", "On the table", "In the table"], 0, "under = below."),
      ch("Which is correct?", ["Where is my phone?", "Where my phone is?", "Where is phone my?"], 0, "Where is + my + thing?"),
    ],
    [
      gap("The apple is", "the bag.", ["in"], "Inside → in."),
      gap("My hat is", "my head.", ["on"], "On top → on."),
      gap("The dog is", "the table.", ["under"], "Below → under."),
      dict(X("07", "dict"), ["It is under the bed", "It's under the bed"]),
      say("Where is my bag? It's under the chair.", "Ask and answer."),
    ],
    [
      fix(["The fish is", "on", "the water."], 1, ["in"], "Fish are inside the water → in."),
      fix(["My shoes are", "in", "my feet."], 1, ["on"], "Shoes go on your feet."),
      fix(["What", "is my ball?", "It's in the box."], 0, ["Where"], "Place → where."),
      ord("The book is on the desk.", "The book + is + on + the desk."),
      ord("Where is the cat?", "Where + is + the cat?"),
    ],
    [
      ctx("Mum asks: 'Where is your pencil?' It is inside your bag.", "Best answer:", ["It's in my bag.", "It's on my bag.", "It's under my bag."], 0, "Inside → in."),
      ctx("Your friend can't find the ball. It is below the car.", "Best answer:", ["It's under the car.", "It's in the car.", "It's on the car."], 0, "Below → under."),
      ctx("You put your book on top of the desk.", "Best sentence:", ["My book is on the desk.", "My book is in the desk.", "My book is under the desk."], 0, "On top → on."),
      ch("Which question is correct?", ["Where are my shoes?", "Where is my shoes?", "Where my shoes?"], 0, "shoes (plural) → are."),
      say("The cat is under the bed.", "Say it clearly: un-der."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write where four things are in your room (8 words or more). Use in, on and under." },
      { universe: "screens", text: "Hide a treasure in a game level. Write where things are (8 words or more). Use in, on and under." },
    ],
    minWords: 8,
    checks: [
      { label: "in, on or under", pattern: "\\b(in|on|under)\\s+(the|my|a)\\b", min: 3 },
    ],
    rubric: ["I used in, on and under.", "I wrote is for one thing and are for two.", "I used the or my."],
    model: "My bag is on the chair. My shoes are under the bed. My books are in the box.",
  },
};

export const PA1_GRAMMAR: NodePractice[] = [be, thisIs, aAn, adjective, like, have, place];
