/* Pre-A1 Communicate. Five steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, es, est, fix, gap, heard, ord, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/pa1c-${n}-${k}.mp3`;

export const PA1_COMMUNICATE_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "Hi! I'm Mia. What's your name? I'm Sam. Nice to meet you, Sam. Nice to meet you too. Bye, Mia! Goodbye! See you tomorrow." },
  { file: X("01", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "Nice to meet you." },
  { file: X("02", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Good morning, Mr Brown. Good morning, Leo. How are you? I'm fine, thank you. And you? I'm very well. Hi, Ana! How are you? I'm tired." },
  { file: X("02", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "I'm fine, thank you. And you?" },
  { file: X("03", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "Miss, can I go to the bathroom, please? Yes, you can. Miss, can you repeat, please? Yes. How do you say lápiz in English? Pencil." },
  { file: X("03", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Can you repeat, please?" },
];

const hello: NodePractice = {
  nodeId: "pa1.hello-goodbye-and-my-name",
  explain: "Say hello: Hi! / Hello! Say your name: I'm Mia. / My name is Mia. Ask: What's your name? When you meet someone new: Nice to meet you. Say goodbye: Bye! / Goodbye! / See you tomorrow!",
  pattern: ["Hi! · Hello!", "I'm Mia. · My name is Mia.", "What's your name?", "Nice to meet you. · Nice to meet you too.", "Bye! · Goodbye! · See you tomorrow!"],
  es: "Nice to meet you = mucho gusto. See you tomorrow = nos vemos mañana.",
  steps: [
    [
      heard(X("01", "notice"), "What is the girl's name?", ["Mia", "Sam", "Ana"], 0, "'Hi! I'm Mia.'"),
      heard(X("01", "notice"), "What is the boy's name?", ["Sam", "Mia", "Tom"], 0, "'I'm Sam.'"),
      heard(X("01", "notice"), "When do they meet again?", ["Tomorrow", "Today", "On Friday"], 0, "'See you tomorrow.'"),
      ch("A word for 'hello':", ["Hi!", "Bye!", "Thanks!"], 0, "Hi = hello."),
      ch("A word for 'goodbye':", ["Bye!", "Hi!", "Please!"], 0, "Bye = goodbye."),
    ],
    [
      ch("'What's your name?' means:", ["¿Cómo te llamas?", "¿Cómo estás?", "¿Cuántos años tienes?"], 0, "What's your name? = ¿Cómo te llamas?"),
      es(est(ch("A new person. You say:", ["Nice to meet you.", "Good night, Mum.", "See you on Monday."], 0, "First time → Nice to meet you."), "Conoces a una persona nueva. ¿Qué dices?"), "Nice to meet you = mucho gusto."),
      est(ch("'Nice to meet you.' You say:", ["Nice to meet you too.", "Yes, I am too.", "Good night to you too."], 0, "Nice to meet you too."), "Alguien te dice mucho gusto. ¿Qué respondes?"),
      ch("Which is correct?", ["My name is Leo.", "My name Leo.", "Me name is Leo."], 0, "My name is …"),
      est(ch("You go home. You say:", ["See you tomorrow!", "Nice to meet you!", "Good morning!"], 0, "Leaving → See you tomorrow!"), "Sales del colegio. ¿Qué dices?"),
    ],
    [
      gap("What's your", "?", ["name"], "What's your name?"),
      gap("Nice to", "you.", ["meet"], "Nice to meet you."),
      est(tr("Write it short.", "My name is Sam.", ["I'm Sam", "I am Sam"], "My name is Sam = I'm Sam."), "Escríbelo de otra forma, más corta."),
      dict(X("01", "dict"), ["Nice to meet you"]),
      say("Hi! I'm … What's your name?", "Say your own name."),
    ],
    [
      es(fix(["Hi! I", "Leo."], 1, ["I'm Leo.", "I am Leo."], "I'm + name."), "Falta am: I'm Leo."),
      fix(["What", "is you", "name?"], 1, ["is your", "'s your"], "What's your name?"),
      fix(["Nice to meet you", "to."], 1, ["too."], "too = también."),
      ord("What is your name?", "What + is + your + name?"),
      ord("Nice to meet you too.", "Nice to meet you + too."),
    ],
    [
      est(ctx("A new student.", "Best first sentence:", ["Hi! I'm Lucas.", "Bye! I'm Lucas.", "Good night, Lucas."], 0, "Hello + your name."), "Llega un estudiante nuevo. Elige la mejor primera frase."),
      est(ctx("'Hi! I'm Eva. Nice to meet you.'", "Best answer:", ["Nice to meet you too.", "Yes, I'm Eva too.", "Goodbye, see you."], 0, "Nice to meet you too."), "Eva te saluda. Elige la mejor respuesta."),
      est(ctx("School ends.", "Best sentence:", ["Bye! See you!", "Hello! Nice to meet you!", "Good morning!"], 0, "Leaving → Bye!"), "Termina el colegio. Te vas a casa."),
      est(ch("Which is NOT hello?", ["Thank you.", "Hello.", "Good morning."], 0, "Thank you is not a greeting."), "¿Cuál NO es un saludo?"),
      say("Hi! I'm Lucas. Nice to meet you.", "Smile and say it."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short chat with a new friend (6 words or more). Say hello and your name." },
      { universe: "screens", text: "Write a message to a new player in a game (6 words or more). Say hello and your name." },
    ],
    minWords: 6,
    checks: [
      { label: "A greeting (hi, hello)", pattern: "\\b(hi|hello|good morning|good afternoon)\\b", min: 1 },
      { label: "Your name (I'm …, my name is …)", pattern: "\\bI'm\\b|\\bI am\\b|\\bmy name is\\b", min: 1 },
    ],
    rubric: ["I said hello.", "I said my name.", "I asked a question or said goodbye."],
    model: "Hi! I'm Pedro. What's your name? I'm Lucy. Nice to meet you, Lucy! Nice to meet you too. Bye!",
  },
};

const howAreYou: NodePractice = {
  nodeId: "pa1.how-are-you",
  explain: "Ask 'How are you?' Answer: I'm fine, thanks. I'm very well. I'm OK. I'm tired. I'm happy. I'm sad. Then ask back: And you? Say good morning, good afternoon or good evening at different times.",
  pattern: ["How are you?", "I'm fine, thank you. · I'm OK. · I'm great!", "I'm tired. · I'm sad. · I'm happy.", "And you?", "Good morning · Good afternoon · Good evening"],
  es: "How are you? = ¿Cómo estás? Es normal preguntar también: And you? (¿Y tú?).",
  steps: [
    [
      heard(X("02", "notice"), "Who is Mr Brown talking to?", ["Leo", "Ana", "Sam"], 0, "'Good morning, Leo.'"),
      heard(X("02", "notice"), "How is Mr Brown?", ["Very well", "Tired", "Sad"], 0, "'I'm very well, thanks.'"),
      heard(X("02", "notice"), "How is Ana?", ["Tired", "Very well", "Happy"], 0, "'I'm tired.'"),
      ch("How ___ you?", ["are", "is", "am"], 0, "How are you?"),
      ch("I'm fine, ___.", ["thanks", "please", "sorry"], 0, "I'm fine, thanks."),
    ],
    [
      ch("8:00 a.m.", ["Good morning.", "Good evening.", "Good night."], 0, "Morning → before 12."),
      ch("3:00 p.m.", ["Good afternoon.", "Good morning.", "Good night."], 0, "After 12 → good afternoon."),
      es(est(ch("Good night!", ["bed", "school", "lunch"], 0, "Good night = when you go to bed or leave at night."), "¿Cuándo dices Good night?"), "Good night se usa para despedirse en la noche."),
      est(ch("'How are you?'", ["I'm fine, thanks.", "Yes, I am.", "I'm twelve years old."], 0, "Answer with how you feel."), "Te preguntan cómo estás. Elige la mejor respuesta."),
      est(ch("Sleep! I'm ___.", ["tired", "happy", "fine"], 0, "tired = cansado."), "Quieres dormir. ¿Cómo estás?"),
    ],
    [
      gap("How", "you?", ["are"], "How are you?"),
      gap("I'm fine, thank you. And", "?", ["you"], "And you?"),
      tr("Make it a question.", "You are fine.", ["Are you fine?"], "Are + you …?"),
      dict(X("02", "dict"), ["I'm fine, thank you. And you?", "I am fine, thank you. And you?", "I'm fine thank you and you"]),
      say("Good morning! How are you?", "Friendly voice, up at the end."),
    ],
    [
      fix(["How", "is", "you?"], 1, ["are"], "How are you?"),
      es(fix(["I", "fine,", "thanks."], 1, ["am fine,", "'m fine,"], "I'm fine."), "Falta am: I'm fine."),
      fix(["Good", "night!", "See you at school!"], 1, ["morning!", "morning"], "In the morning: Good morning."),
      ord("How are you today?", "How + are + you + today?"),
      ord("I am very well, thanks.", "I am + very well + thanks."),
    ],
    [
      est(ctx("'Good morning! How are you?'", "Best answer:", ["I'm fine, thank you.", "Good night! I'm fine.", "Yes, I am good."], 0, "Answer how you are."), "Tu profesora te saluda en la mañana. Elige la mejor respuesta."),
      est(ctx("Your friend is sad.", "Best question:", ["Are you OK?", "Are you twelve?", "What's this?"], 0, "Are you OK?"), "Tu amigo está triste. Elige la mejor pregunta."),
      est(ctx("Bed time.", "You say:", ["Good night!", "Good afternoon!", "Good morning!"], 0, "Bed → good night."), "Te vas a dormir. ¿Qué le dices a tu familia?"),
      est(ch("Which is friendly?", ["Great! And you?", "Fine. Go away.", "Why? What is it?"], 0, "Answer and ask back."), "¿Cuál respuesta es amable?"),
      say("I'm OK, thanks. And you?", "Ask back with a smile."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short chat with your teacher (6 words or more). Use good morning and how are you." },
      { universe: "arts", text: "Write how two people in a picture feel (6 words or more): happy, sad, tired, fine." },
    ],
    minWords: 6,
    checks: [
      { label: "How are you", pattern: "\\bhow are you\\b", min: 1 },
      { label: "A feeling (fine, OK, happy, tired …)", pattern: "\\b(fine|ok|okay|well|great|happy|sad|tired|good)\\b", min: 1 },
    ],
    rubric: ["I asked How are you?", "I answered with a feeling.", "I asked back: And you?"],
    model: "Good morning, Miss Lopez! How are you? I'm fine, thank you. And you? I'm happy today!",
  },
};

const classroom: NodePractice = {
  nodeId: "pa1.classroom-language",
  explain: "Ask for help in English class: Can I go to the bathroom, please? I don't understand. Can you repeat, please? How do you say lápiz in English? Can I have a pen, please?",
  pattern: ["Can I go to the bathroom, please?", "I don't understand.", "Can you repeat, please?", "How do you say … in English?", "What does … mean?"],
  es: "Estas frases te ayudan en todas tus clases de inglés. Usa please (por favor) y thank you (gracias).",
  steps: [
    [
      heard(X("03", "notice"), "Where does the student want to go?", ["To the bathroom", "Home", "To the board"], 0, "'Can I go to the bathroom, please?'"),
      heard(X("03", "notice"), "Can you ___, please?", ["repeat", "write", "sit down"], 0, "'Can you repeat, please?'"),
      heard(X("03", "notice"), "'Lápiz' in English is …", ["pencil", "pen", "paper"], 0, "'Pencil.'"),
      est(ch("A new word? You say:", ["I don't understand.", "I'm fine.", "Nice to meet you too."], 0, "I don't understand."), "No entiendes una palabra. ¿Qué dices?"),
      est(ch("Can I go, ___?", ["please", "goodbye", "hello"], 0, "please = por favor."), "Completa la frase con la palabra amable."),
    ],
    [
      ch("'Can you repeat, please?' means:", ["¿Puede repetir, por favor?", "¿Puedo ir al baño, por favor?", "No entiendo."], 0, "repeat = repetir."),
      est(ch("Ventana in English?", ["How do you say ventana?", "What is your ventana?", "Can I ventana, please?"], 0, "How do you say … in English?"), "Quieres saber cómo se dice ventana en inglés. ¿Qué preguntas?"),
      est(ch("Ruler? You ask:", ["What does ruler mean?", "How are you, ruler?", "Ruler is what?"], 0, "What does … mean?"), "No sabes qué significa ruler. ¿Qué preguntas?"),
      es(est(ch("Which is polite?", ["A pen, please.", "Give me a pen now.", "Pen now!"], 0, "Ask with please."), "¿Cuál es amable?"), "Pide con please."),
      est(ch("Here's a pencil. You say:", ["Thank you!", "Please!", "I'm sorry!"], 0, "Thank you."), "La profesora te da un lápiz. ¿Qué dices?"),
    ],
    [
      gap("Can I go to the bathroom,", "?", ["please"], "… please?"),
      gap("I don't", ".", ["understand"], "I don't understand."),
      tr("Make it polite.", "Repeat!", ["Can you repeat, please?", "Can you repeat please?", "Repeat, please"], "Can you repeat, please?"),
      dict(X("03", "dict"), ["Can you repeat, please?", "Can you repeat please"]),
      say("Can I go to the bathroom, please?", "Polite and clear."),
    ],
    [
      es(fix(["I", "no", "understand."], 1, ["don't"], "I don't understand."), "No entiendo = I don't understand."),
      fix(["How", "you say", "'mesa' in English?"], 1, ["do you say"], "How do you say …?"),
      fix(["Can I", "going", "to the bathroom?"], 1, ["go"], "Can I go …?"),
      ord("Can you repeat, please?", "Can you + repeat + please?"),
      ord("How do you say 'casa' in English?", "How do you say + 'casa' + in English?"),
    ],
    [
      est(ctx("The teacher is very fast.", "Best sentence:", ["Can you repeat, please?", "Bye, teacher.", "I'm fine, thanks. And you?"], 0, "Ask politely to repeat."), "La profesora habla muy rápido. No entiendes."),
      est(ctx("You need a pencil.", "Best sentence:", ["A pencil, please.", "I want pencil now.", "Pencil me now."], 0, "Ask with please."), "Necesitas un lápiz. Elige la mejor frase."),
      est(ctx("Perro in English?", "Best question:", ["How do you say perro?", "What is perro you?", "Perro is what in English?"], 0, "How do you say … in English?"), "Quieres saber cómo se dice perro en inglés."),
      est(ch("Which is polite?", ["Excuse me, Miss.", "Hey you!", "Miss, answer me!"], 0, "Excuse me = polite."), "¿Cuál es la forma amable de llamar a la profesora?"),
      say("Can you repeat, please?", "Use this in every class."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write two questions for your English class (6 words or more). Use please." },
      { universe: "screens", text: "Write to a game helper. You don't understand. Ask with please (6 words or more)." },
    ],
    minWords: 6,
    checks: [
      { label: "please", pattern: "\\bplease\\b", min: 1 },
      { label: "A classroom question (Can I …? Can you …? How do you say …?)", pattern: "\\bcan (I|you)\\b|\\bhow do you say\\b|\\bwhat does\\b", min: 2 },
    ],
    rubric: ["I used please.", "I wrote questions with a question mark.", "I used Can I or Can you."],
    model: "Can I go to the bathroom, please? Can you repeat, please? How do you say 'lápiz' in English?",
  },
};

export const PA1_COMMUNICATE: NodePractice[] = [hello, howAreYou, classroom];
