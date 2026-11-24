/* Pre-A1 Words. Five steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, es, est, fix, gap, heard, ord, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/pa1w-${n}-${k}.mp3`;

export const PA1_WORDS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "Hello. My name is Kate. K, A, T, E. Kate. My friend is Ben. B, E, N. Ben. What's your name? How do you spell it?" },
  { file: X("01", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "My name is Ben. B, E, N." },
  { file: X("02", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "One, two, three, four, five. I am twelve. My brother is seven. Open your books at page fifteen. There are twenty students in my class." },
  { file: X("02", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "There are twenty students in my class." },
  { file: X("03", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "Look at the picture. There is a red circle and a blue square. The star is yellow. The triangle is green. My favourite colour is purple." },
  { file: X("03", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "The star is yellow." },
  { file: X("04", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "Good morning, class. Sit down, please. Open your books. Take a pencil and a ruler. Listen and repeat. Close your books. Stand up!" },
  { file: X("04", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "Take a pencil and a ruler." },
  { file: X("05", "notice"), voice: "bIHbv24MWmeRgasZH58o", script: "This is my mum and this is my dad. This is my grandpa. He has white hair and big ears. My baby sister has small hands." },
  { file: X("05", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "This is my mum and this is my dad." },
  { file: X("06", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "At the farm there is a horse, a cow and three chickens. The dog eats meat. The rabbit eats carrots. For lunch I have rice, chicken and an orange juice." },
  { file: X("06", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "The rabbit eats carrots." },
];

const alphabet: NodePractice = {
  nodeId: "pa1.the-alphabet-and-spelling",
  explain: "Learn the English letters. Then you can spell your name. Some letters are very different from Spanish: A (ei), E (ii), I (ai), J (yei), H (eich), Y (uai). Ask: How do you spell it?",
  pattern: ["A B C D E F G", "H I J K L M N", "O P Q R S T U", "V W X Y Z", "How do you spell it? K-A-T-E."],
  es: "Ojo: la A se dice /ei/, la E se dice /i/, la I se dice /ai/. Son diferentes al español.",
  steps: [
    [
      heard(X("01", "notice"), "What is the girl's name?", ["Kate", "Cate", "Kat"], 0, "'K, A, T, E. Kate.'"),
      heard(X("01", "notice"), "What is her friend's name?", ["Ben", "Ben's", "Pen"], 0, "'B, E, N. Ben.'"),
      ch("Which letter comes after A?", ["B", "C", "D"], 0, "A, B, C …"),
      ch("Which letter comes after X?", ["Y", "Z", "W"], 0, "… X, Y, Z."),
      est(ch("Which question is correct?", ["How do you spell it?", "How you spell it?", "What you spell it?"], 0, "How do you spell it?"), "¿Cómo preguntas por las letras de una palabra?"),
    ],
    [
      es(est(ch("E =", ["ii", "e", "ai"], 0, "E sounds like ii, as in see."), "¿Cómo suena la letra E en inglés?"), "La E en inglés suena como 'i'."),
      es(est(ch("I =", ["ai", "ii", "e"], 0, "I sounds like ai, as in my."), "¿Cómo suena la letra I en inglés?"), "La I en inglés suena como 'ai'."),
      es(est(ch("A =", ["ei", "a", "ii"], 0, "A sounds like ei, as in day."), "¿Cómo suena la letra A en inglés?"), "La A en inglés suena como 'ei'."),
      est(ch("How many letters? A to Z", ["26", "27", "24"], 0, "26 letters: no ñ."), "¿Cuántas letras tiene el alfabeto inglés?"),
      est(ch("A, E, I, ___, U", ["O", "P", "T"], 0, "A, E, I, O, U are vowels."), "Completa las vocales."),
    ],
    [
      gap("A, B, C, D,", ", F", ["E", "e"], "A B C D E F."),
      gap("X, Y,", "", ["Z", "z"], "X Y Z."),
      tr("Write the name.", "M-A-R-Y", ["Mary"], "M-A-R-Y = Mary."),
      dict(X("01", "dict"), ["My name is Ben. B, E, N", "My name is Ben B E N", "My name is Ben. BEN", "My name is Ben"]),
      say("My name is … (spell it)", "Say your name, then spell it."),
    ],
    [
      fix(["A, B, C,", "F,", "E"], 1, ["D,", "D"], "A, B, C, D, E."),
      fix(["How", "you", "spell it?"], 1, ["do you"], "How do you spell it?"),
      es(fix(["The alphabet has", "27", "letters."], 1, ["26"], "English has 26 letters (no ñ)."), "No hay ñ en inglés: 26 letras."),
      ord("How do you spell it?", "How + do + you + spell + it?"),
      ord("My name is Pablo.", "My name + is + Pablo."),
    ],
    [
      est(ctx("'How do you spell your name?' (Ana)", "Best answer:", ["A-N-A.", "Ana is.", "Yes, I do."], 0, "Say the letters: A-N-A."), "Te llamas Ana. La profesora pregunta cómo se escribe tu nombre."),
      est(ctx("A new word. How do you write it?", "Best question:", ["How do you spell it?", "What is it spell?", "How it spell you?"], 0, "How do you spell it?"), "No sabes cómo se escribe una palabra. Elige la mejor pregunta."),
      ch("Which name starts with J?", ["James", "Gina", "Henry"], 0, "J → James."),
      ch("Which name starts with G?", ["Grace", "James", "Kevin"], 0, "G → Grace."),
      say("A, E, I, O, U", "The five vowels in English."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write your name and a friend's name. Spell them (6 words or more). Example: My name is Kate: K-A-T-E." },
      { universe: "screens", text: "Write the names of two games or apps. Spell them (6 words or more)." },
    ],
    minWords: 6,
    checks: [
      { label: "A spelled word (K-A-T-E)", pattern: "\\b[A-Za-z](-[A-Za-z]){2,}\\b", min: 2 },
    ],
    rubric: ["I spelled my name letter by letter.", "I started names with a capital letter.", "I can say the letters out loud."],
    model: "My name is Kate: K-A-T-E. My friend is Ben: B-E-N. My teacher is Mr Lee: L-E-E.",
  },
};

const numbers: NodePractice = {
  nodeId: "pa1.numbers-1-to-20",
  explain: "Count from one to twenty. Use numbers for your age, page numbers and how many things you have: I'm eleven. Page twelve. Three pencils.",
  pattern: ["1 one · 2 two · 3 three · 4 four · 5 five", "6 six · 7 seven · 8 eight · 9 nine · 10 ten", "11 eleven · 12 twelve · 13 thirteen · 14 fourteen · 15 fifteen", "16 sixteen · 17 seventeen · 18 eighteen · 19 nineteen · 20 twenty"],
  es: "Los números del 13 al 19 terminan en -teen: thirteen, fourteen…",
  steps: [
    [
      heard(X("02", "notice"), "How old is the speaker?", ["12", "7", "15"], 0, "'I am twelve.'"),
      heard(X("02", "notice"), "How old is the brother?", ["7", "12", "17"], 0, "'My brother is seven.'"),
      heard(X("02", "notice"), "What page?", ["15", "50", "5"], 0, "'page fifteen'"),
      ch("3 =", ["three", "tree", "free"], 0, "3 = three."),
      ch("8 =", ["eight", "eigth", "ate"], 0, "8 = eight."),
    ],
    [
      ch("11 =", ["eleven", "twelve", "seven"], 0, "11 = eleven."),
      ch("20 =", ["twenty", "twelve", "two"], 0, "20 = twenty."),
      ch("five + five =", ["ten", "nine", "eleven"], 0, "5 + 5 = 10."),
      ch("Which is 13?", ["thirteen", "thirty", "three"], 0, "13 = thirteen."),
      ch("What comes after nine?", ["ten", "eight", "nineteen"], 0, "… nine, ten."),
    ],
    [
      gap("one, two,", ", four", ["three"], "1, 2, 3, 4."),
      gap("I am", "years old. (10)", ["ten"], "10 = ten."),
      tr("Write the number in words.", "14", ["fourteen"], "14 = fourteen."),
      dict(X("02", "dict"), ["There are twenty students in my class", "There are 20 students in my class"]),
      say("one, two, three, four, five", "Count clearly."),
    ],
    [
      fix(["I am", "twelf", "years old."], 1, ["twelve"], "12 = twelve."),
      fix(["one, two, three,", "for,", "five"], 1, ["four,", "four"], "4 = four (with a u)."),
      fix(["Page", "fiveteen,", "please."], 1, ["fifteen"], "15 = fifteen."),
      ord("I have three brothers.", "I have + three + brothers."),
      ord("Open your books at page ten.", "Open your books + at page + ten."),
    ],
    [
      est(ctx("'How old are you?' (11)", "Best answer:", ["I'm eleven.", "I have eleven.", "I'm eleven years."], 0, "I'm eleven (or I'm eleven years old)."), "Te preguntan tu edad. Tienes 11 años."),
      est(ctx("2 dogs + 1 cat", "How many pets?", ["three", "two", "four"], 0, "2 + 1 = 3."), "Tienes 2 perros y 1 gato. ¿Cuántas mascotas?"),
      ch("Which is correct?", ["two cats", "two cat", "twos cats"], 0, "two + cats."),
      ch("Which is 19?", ["nineteen", "nine", "ninety"], 0, "19 = nineteen."),
      say("I'm thirteen. My sister is sixteen.", "Stress the -teen: thir-TEEN."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write numbers about you (6 words or more): your age, your family, your pets." },
      { universe: "science", text: "Count things in your classroom. Write the numbers in words (6 words or more)." },
    ],
    minWords: 6,
    checks: [
      { label: "Numbers written in words", pattern: "\\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty)\\b", min: 3 },
    ],
    rubric: ["I wrote numbers in words.", "I wrote I'm + age (not I have).", "I added -s for two or more."],
    model: "I'm twelve. There are four people in my family. I have two cats and one dog.",
  },
};

const colours: NodePractice = {
  nodeId: "pa1.colours-and-shapes",
  explain: "Name colours and shapes. Colours: red, blue, yellow, green, orange, purple, pink, black, white, brown, grey. Shapes: circle, square, triangle, star, heart.",
  pattern: ["red · blue · yellow · green · orange · purple", "pink · black · white · brown · grey", "a circle · a square · a triangle · a star · a heart", "What colour is it? It's blue."],
  es: "What colour is it? = ¿De qué color es? El color va antes de la cosa: a red star.",
  steps: [
    [
      heard(X("03", "notice"), "What colour is the circle?", ["Red", "Blue", "Yellow"], 0, "'a red circle'"),
      heard(X("03", "notice"), "What colour is the star?", ["Yellow", "Green", "Purple"], 0, "'The star is yellow.'"),
      heard(X("03", "notice"), "What is the favourite colour?", ["Purple", "Blue", "Red"], 0, "'My favourite colour is purple.'"),
      ch("The sky is ___.", ["blue", "green", "black"], 0, "The sky is blue."),
      ch("Grass is ___.", ["green", "pink", "white"], 0, "Grass is green."),
    ],
    [
      ch("A banana is ___.", ["yellow", "red", "blue"], 0, "Bananas are yellow."),
      ch("Snow is ___.", ["white", "black", "orange"], 0, "Snow is white."),
      est(ch("3 sides =", ["a triangle", "a square", "a circle"], 0, "tri = three."), "¿Qué figura tiene 3 lados?"),
      est(ch("4 sides =", ["a square", "a triangle", "a star"], 0, "A square has four sides."), "¿Qué figura tiene 4 lados iguales?"),
      ch("A strawberry is ___.", ["red", "blue", "grey"], 0, "Strawberries are red."),
    ],
    [
      gap("What", "is it? It's green.", ["colour", "color"], "What colour is it?"),
      gap("A ball is a", ".", ["circle"], "A ball looks like a circle."),
      tr("Put the colour first.", "a star yellow", ["a yellow star"], "a + yellow + star."),
      dict(X("03", "dict"), ["The star is yellow"]),
      say("My favourite colour is blue.", "Say your favourite colour."),
    ],
    [
      fix(["The sky is", "green."], 1, ["blue"], "The sky is blue."),
      fix(["a", "square red"], 1, ["red square"], "Colour first: a red square."),
      fix(["Grass", "is", "blue."], 2, ["green.", "green"], "Grass is green."),
      ord("What colour is your bag?", "What colour + is + your bag?"),
      ord("I like the red heart.", "the + red + heart."),
    ],
    [
      est(ctx("'What colour is your bike?' (black)", "Best answer:", ["It's black.", "Is black.", "It black."], 0, "It's + colour."), "Te preguntan el color de tu bicicleta. Es negra."),
      est(ctx("Your friend's phone: what colour?", "Best question:", ["What colour is your phone?", "What is colour your phone?", "What colour your phone is?"], 0, "What colour is …?"), "Quieres saber el color del teléfono de tu amigo."),
      ch("Which is correct?", ["a blue circle", "a circle blue", "blue a circle"], 0, "Colour, then thing."),
      ch("Which is a shape?", ["triangle", "purple", "orange juice"], 0, "triangle is a shape."),
      say("It's a small purple star.", "Describe a shape."),
    ],
  ],
  create: {
    prompts: [
      { text: "Look at a flag or a picture. Write the colours and shapes (6 words or more)." },
      { universe: "arts", text: "Draw shapes and colours. Write what you draw (6 words or more)." },
    ],
    minWords: 6,
    checks: [
      { label: "Colour words", pattern: "\\b(red|blue|yellow|green|orange|purple|pink|black|white|brown|grey|gray)\\b", min: 3 },
      { label: "A shape", pattern: "\\b(circle|square|triangle|star|heart|rectangle)s?\\b", min: 1 },
    ],
    rubric: ["I used three colours.", "I used one shape.", "I put the colour before the thing."],
    model: "My picture has a big yellow sun, a red heart and three blue stars.",
  },
};

const classroom: NodePractice = {
  nodeId: "pa1.classroom-things-and-instructions",
  explain: "Know the things in your classroom (book, pencil, pen, ruler, eraser, bag, desk, chair, board) and what your teacher says: open, close, sit down, stand up, listen, look, write, read.",
  pattern: ["book · pencil · pen · ruler · eraser", "bag · desk · chair · board · window · door", "Open your book. Close your book.", "Sit down. Stand up. Listen. Look. Write."],
  es: "Las instrucciones empiezan con el verbo: Open your book = Abre tu libro.",
  steps: [
    [
      heard(X("04", "notice"), "What does the teacher say first?", ["Sit down", "Stand up", "Close your books"], 0, "'Sit down, please.'"),
      heard(X("04", "notice"), "Take a …", ["pencil and ruler", "pen and book", "bag and chair"], 0, "'Take a pencil and a ruler.'"),
      heard(X("04", "notice"), "What is the last instruction?", ["Stand up!", "Open your books.", "Listen and repeat."], 0, "'Stand up!'"),
      ch("You write with a ___.", ["pencil", "chair", "window"], 0, "You write with a pencil."),
      ch("You sit on a ___.", ["chair", "book", "ruler"], 0, "You sit on a chair."),
    ],
    [
      est(ch("open ↔ ___", ["close", "sit", "look"], 0, "open ↔ close."), "¿Cuál es lo contrario de open?"),
      est(ch("sit down ↔ ___", ["stand up", "look up", "close up"], 0, "sit down ↔ stand up."), "¿Cuál es lo contrario de sit down?"),
      es(est(ch("A mistake? Use an ___.", ["eraser", "ruler", "board"], 0, "An eraser removes pencil."), "Te equivocas con el lápiz. ¿Qué usas?"), "eraser = borrador."),
      ch("The teacher writes on the ___.", ["board", "door", "floor"], 0, "The teacher writes on the board."),
      est(ch("A straight line: use a ___.", ["ruler", "bag", "chair"], 0, "A ruler makes straight lines."), "¿Con qué haces una línea recta?"),
    ],
    [
      gap("", "your books, please.", ["Open", "Close"], "Open or close your books."),
      gap("Listen and", ".", ["repeat"], "Listen and repeat."),
      est(tr("Write the opposite.", "Stand up.", ["Sit down", "Sit down please"], "stand up ↔ sit down."), "Escribe lo contrario."),
      dict(X("04", "dict"), ["Take a pencil and a ruler"]),
      say("Open your books, please.", "Say it like a teacher."),
    ],
    [
      es(fix(["Sit", "up,", "please."], 1, ["down,", "down"], "Sit down."), "Sit down = siéntate."),
      fix(["Open", "you", "book."], 1, ["your"], "Open your book."),
      fix(["I", "write", "with a chair."], 2, ["with a pencil.", "with a pen.", "with a pencil", "with a pen"], "You write with a pencil or a pen."),
      ord("Close your books, please.", "Close + your books + please."),
      ord("I have a pen and a ruler.", "I have + a pen + and a ruler."),
    ],
    [
      est(ctx("The teacher points to the board.", "What does she say?", ["Look at the board.", "Look the board.", "See board."], 0, "Look at the board."), "La profesora quiere que mires el tablero. ¿Qué dice?"),
      est(ctx("Your friend needs a pencil.", "Best sentence:", ["Here's a pencil.", "Here pencil is.", "Pencil here have."], 0, "Here's a pencil."), "Tu amigo necesita un lápiz. Le das uno."),
      ch("Which is in a classroom?", ["a desk", "a bed", "a fridge"], 0, "A desk is in a classroom."),
      est(ch("The teacher says:", ["Stand up.", "A ruler.", "Blue."], 0, "Instructions start with a verb."), "¿Cuál es una instrucción de la profesora?"),
      say("Stand up. Sit down. Open your book.", "Do the actions as you say them."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write what is in your classroom (6 words or more)." },
      { universe: "screens", text: "You are the teacher in a game. Write three instructions (6 words or more)." },
    ],
    minWords: 6,
    checks: [
      { label: "Classroom words", pattern: "\\b(books?|pencils?|pens?|rulers?|erasers?|bags?|desks?|chairs?|board|window|door)\\b", min: 3 },
    ],
    rubric: ["I used three classroom words.", "I used a or an.", "I checked my spelling."],
    model: "In my classroom there is a big board. I have a desk, a chair, a book and two pencils.",
  },
};

const family: NodePractice = {
  nodeId: "pa1.family-and-the-body",
  explain: "Talk about your family (mum, dad, brother, sister, grandma, grandpa, baby) and your body (head, eyes, ears, nose, mouth, hair, hands, arms, legs, feet).",
  pattern: ["mum · dad · brother · sister · grandma · grandpa · baby", "head · eyes · ears · nose · mouth · hair", "hands · arms · legs · feet", "one foot → two feet"],
  es: "Ojo: hair (pelo) no lleva -s: She has long hair. Un pie = one foot, dos pies = two feet.",
  steps: [
    [
      heard(X("05", "notice"), "Who has white hair?", ["The grandpa", "The dad", "The baby"], 0, "'My grandpa. He has white hair.'"),
      heard(X("05", "notice"), "What does the grandpa have?", ["Big ears", "Small hands", "Big eyes"], 0, "'He has white hair and big ears.'"),
      heard(X("05", "notice"), "Who has small hands?", ["The baby sister", "The mum", "The grandpa"], 0, "'My baby sister has small hands.'"),
      est(ch("Mum's mum = ___", ["grandma", "sister", "aunt"], 0, "Your mum's mum = grandma."), "La mamá de tu mamá es tu…"),
      ch("You see with your ___.", ["eyes", "ears", "feet"], 0, "eyes → see."),
    ],
    [
      ch("You hear with your ___.", ["ears", "nose", "hands"], 0, "ears → hear."),
      ch("A boy in my family: my ___.", ["brother", "sister", "grandma"], 0, "A boy → brother."),
      es(ch("one foot, two ___", ["feet", "foots", "feets"], 0, "foot → feet."), "foot → feet (plural especial)."),
      es(ch("She has long ___.", ["hair", "hairs", "a hair"], 0, "hair has no -s."), "hair va sin -s."),
      ch("You walk with your ___.", ["legs", "ears", "eyes"], 0, "You walk with your legs."),
    ],
    [
      gap("My mum and my", "are my parents.", ["dad"], "mum + dad = parents."),
      gap("I have two eyes, two ears and one", ".", ["nose", "mouth", "head"], "One nose, one mouth, one head."),
      tr("Make it plural.", "one hand", ["two hands"], "hand → hands."),
      dict(X("05", "dict"), ["This is my mum and this is my dad"]),
      say("Touch your head. Touch your nose.", "Point to each part."),
    ],
    [
      fix(["My", "grandmum", "is seventy."], 1, ["grandma", "grandmother"], "grandma or grandmother."),
      es(fix(["He has", "black hairs."], 1, ["black hair."], "hair (no -s)."), "hair sin -s."),
      fix(["I have two", "foots."], 1, ["feet.", "feet"], "one foot, two feet."),
      ord("This is my baby sister.", "This is + my + baby sister."),
      ord("My grandpa has white hair.", "My grandpa + has + white hair."),
    ],
    [
      est(ctx("A photo of your mum's dad.", "Best sentence:", ["This is my grandpa.", "This is my brother.", "This is my uncle."], 0, "Mum's dad = grandpa."), "Muestras una foto del papá de tu mamá."),
      est(ctx("Her eyes are brown.", "Best sentence:", ["She has brown eyes.", "She has eyes brown.", "She is brown eyes."], 0, "has + brown + eyes."), "Tu amiga tiene ojos cafés. Elige la mejor frase."),
      ch("Which is a body word?", ["arm", "aunt", "apple"], 0, "arm is part of the body."),
      ch("Which is a family word?", ["sister", "nose", "ruler"], 0, "sister is family."),
      say("I have a mum and a dad.", "Say your own family."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about your family (6 words or more). Who is in it? Write about hair or eyes." },
      { universe: "arts", text: "Draw a monster. Write about its body (6 words or more): eyes, arms, legs." },
    ],
    minWords: 6,
    checks: [
      { label: "Family or body words", pattern: "\\b(mum|mom|dad|brother|sister|grandma|grandpa|baby|head|eyes?|ears?|nose|mouth|hair|hands?|arms?|legs?|feet|foot)\\b", min: 3 },
    ],
    rubric: ["I used three family or body words.", "I wrote hair without -s.", "I wrote feet, not foots."],
    model: "My family is small. I have a mum and a brother. My brother has black hair and brown eyes.",
  },
};

const animalsFood: NodePractice = {
  nodeId: "pa1.animals-and-food",
  explain: "Name animals (cat, dog, bird, fish, horse, cow, chicken, rabbit, lion, monkey) and food and drinks (apple, banana, rice, bread, chicken, egg, milk, water, juice).",
  pattern: ["cat · dog · bird · fish · horse · cow", "chicken · rabbit · lion · monkey · elephant", "apple · banana · orange · rice · bread · egg", "milk · water · juice"],
  es: "chicken = pollo (animal y comida). fish = pez y pescado. One fish, two fish (fish no cambia).",
  steps: [
    [
      heard(X("06", "notice"), "How many chickens are at the farm?", ["Three", "Two", "One"], 0, "'three chickens'"),
      heard(X("06", "notice"), "What does the rabbit eat?", ["Carrots", "Meat", "Rice"], 0, "'The rabbit eats carrots.'"),
      heard(X("06", "notice"), "What drink is for lunch?", ["Orange juice", "Milk", "Water"], 0, "'an orange juice'"),
      ch("Which animal can fly?", ["a bird", "a cow", "a fish"], 0, "Birds can fly."),
      ch("Which animal lives in water?", ["a fish", "a horse", "a lion"], 0, "Fish live in water."),
    ],
    [
      ch("Which is a drink?", ["milk", "bread", "rice"], 0, "milk is a drink."),
      ch("Which is a fruit?", ["banana", "egg", "rice"], 0, "A banana is a fruit."),
      ch("Which animal says 'moo'?", ["a cow", "a dog", "a cat"], 0, "Cows say moo."),
      es(ch("one fish, two ___", ["fish", "fishs", "fishes"], 0, "fish stays fish."), "fish no cambia en plural."),
      ch("Which animal is very big?", ["an elephant", "a rabbit", "a mouse"], 0, "Elephants are very big."),
    ],
    [
      gap("A monkey eats", ".", ["bananas", "a banana", "fruit"], "Monkeys eat bananas."),
      gap("I drink", "every day.", ["water", "milk", "juice"], "A drink fits."),
      tr("Make it plural.", "one horse", ["two horses"], "horse → horses."),
      dict(X("06", "dict"), ["The rabbit eats carrots"]),
      say("I like apples. I don't like eggs.", "Say what you like."),
    ],
    [
      fix(["A", "cow", "can fly."], 1, ["bird"], "Birds fly; cows don't."),
      es(fix(["I have three", "fishs."], 1, ["fish."], "fish stays fish."), "fish no cambia."),
      fix(["I drink", "bread", "for breakfast."], 1, ["milk", "juice", "water"], "You eat bread; you drink milk."),
      ord("The dog eats meat.", "The dog + eats + meat."),
      ord("I have rice and chicken for lunch.", "I have + rice and chicken + for lunch."),
    ],
    [
      est(ctx("You want a drink.", "Best sentence:", ["Water, please.", "Bread, please.", "A cat, please."], 0, "A drink → water."), "Tienes sed. Elige la mejor frase."),
      est(ctx("'What's your favourite animal?'", "Best answer:", ["I love lions.", "I lions love.", "Is the lion."], 0, "I love + animals."), "Te preguntan tu animal favorito. Elige la mejor respuesta."),
      est(ch("Which is an animal?", ["a horse", "an egg", "bread"], 0, "A horse is an animal."), "¿Cuál es un animal?"),
      ch("Which animal says 'woof'?", ["a dog", "a cat", "a bird"], 0, "Dogs say woof."),
      say("I like monkeys. They eat bananas.", "Say your favourite animal."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about animals and food you like (6 words or more)." },
      { universe: "science", text: "Choose two animals. Write what they eat (6 words or more)." },
    ],
    minWords: 6,
    checks: [
      { label: "Animal words", pattern: "\\b(cats?|dogs?|birds?|fish|horses?|cows?|chickens?|rabbits?|lions?|monkeys?|elephants?)\\b", min: 1 },
      { label: "Food or drink words", pattern: "\\b(apples?|bananas?|oranges?|rice|bread|eggs?|milk|water|juice|meat|carrots?|chicken|pizza)\\b", min: 2 },
    ],
    rubric: ["I used animal words.", "I used food words.", "I added -s for two or more (but fish stays fish)."],
    model: "My favourite animal is the monkey. Monkeys eat bananas. I like rice and chicken. I drink water.",
  },
};

export const PA1_WORDS: NodePractice[] = [alphabet, numbers, colours, classroom, family, animalsFood];
