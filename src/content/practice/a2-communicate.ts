/* A2 Communicate. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review.
   Lower band: short Spanish notes (es) and glosses shown only after a wrong answer. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, es, fix, gap, heard, ord, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/a2c-${n}-${k}.mp3`;

export const A2_COMMUNICATE_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "Do you want to come to the cinema on Friday? I'd love to! What time? At seven. Great. Why don't we invite Marco too? Good idea! Oh, I'm sorry, I can't on Friday. I have a family dinner. How about Saturday?" },
  { file: X("01", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Do you want to come to the cinema?" },
  { file: X("02", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Excuse me, how do I get to the museum? Go straight on, then turn left at the bank. It's next to the park. Thank you! Later, at the café: Can I have a chicken sandwich and an orange juice, please?" },
  { file: X("02", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "Go straight on, then turn left." },
  { file: X("03", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "To a friend: Hi Juli! Thanks for the photos. See you soon! Love, Sara. To a company: Dear Sir or Madam, I am writing about my order. Yours faithfully, Sara Gómez." },
  { file: X("03", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "Dear Sir or Madam, I am writing about my order." },
  { file: X("04", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "Good afternoon. Can I have a lemonade, please? And could I have a cheese arepa? Sure. Anything else? No, thank you. Could I have the bill, please?" },
  { file: X("04", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "Can I have a lemonade, please?" },
  { file: X("05", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Do you want to play football after school? I'd love to, but I can't. I have a dentist appointment. Maybe next time? Sure! And can you come to my party on Sunday? Thanks for inviting me, but I'm visiting my grandma. Sorry!" },
  { file: X("05", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "I'd love to, but I can't." },
];

const invite: NodePractice = {
  nodeId: "a2.suggest-invite-accept-refuse",
  explain: "To invite: 'Do you want to …?' 'Would you like to …?' To suggest: 'Let's …', 'Why don't we …?', 'How about …?' To accept: 'I'd love to!', 'Sure!', 'Good idea!' To refuse politely: 'I'm sorry, I can't.' 'I'd love to, but …' Then give a reason or another day.",
  pattern: ["Invite: Do you want to …? · Would you like to …?", "Suggest: Let's … · Why don't we …? · How about + -ing / day?", "Accept: I'd love to! · Sure! · Good idea!", "Refuse: Sorry, I can't. · I'd love to, but …"],
  es: "'Would you like to…?' es más amable que 'Do you want to…?'. Después de 'Let's' va el verbo sin 'to': Let's go. Después de 'How about' va -ing o un día: How about going? How about Saturday?",
  steps: [
    [
      heard(X("01", "notice"), "Where is the invitation to?", ["The cinema", "A party", "The park"], 0, "'come to the cinema on Friday?'"),
      heard(X("01", "notice"), "Who do they want to invite?", ["Marco", "Sara", "A teacher"], 0, "'Why don't we invite Marco too?'"),
      heard(X("01", "notice"), "Why can't the last person go on Friday?", ["A family dinner", "Homework", "A football match"], 0, "'I have a family dinner.'"),
      ch("Which is an invitation?", ["Would you like to come?", "I'm sorry, I can't.", "Good idea!"], 0, "Would you like to …?"),
      ch("Which is a polite refusal?", ["I'm sorry, I can't.", "No.", "Never!"], 0, "Sorry + can't."),
    ],
    [
      ch("Which is a suggestion?", ["Why don't we go to the beach?", "I'd love to!", "Sorry, I can't."], 0, "Why don't we …?"),
      es(ch("'Let's ___ pizza tonight.'", ["have", "to have", "having"], 0, "Let's + base verb."), "Después de 'Let's', el verbo va sin 'to'."),
      ch("'How about ___ to the park?'", ["going", "go", "to go"], 0, "How about + -ing."),
      ctx("A friend: 'Would you like to come to my party?'", "Best acceptance:", ["I'd love to! Thanks!", "I'd love.", "Yes, I would like."], 0, "I'd love to!"),
      ch("Which is more polite?", ["Would you like to come?", "Come.", "You come?"], 0, "Would you like …?"),
    ],
    [
      gap("Why don't", "go to the cinema?", ["we"], "Why don't we …?"),
      gap("I'd love", ", but I'm busy.", ["to"], "I'd love to, but …"),
      ord("Would you like to come to my party", "Would you like to + verb …?"),
      dict(X("01", "dict"), ["Do you want to come to the cinema"]),
      say("Would you like to come to the cinema on Friday?", "Friendly rising tone."),
    ],
    [
      fix(["Let's", "to go", "to the beach!"], 1, ["go"], "Let's + base verb."),
      es(fix(["How about", "go", "to the park?"], 1, ["going"], "How about + -ing."), "'How about' + -ing: How about going?"),
      fix(["Would you like", "come", "to my party?"], 1, ["to come"], "would like + to + verb."),
      ch("Which is correct?", ["Why don't we play tennis?", "Why we don't play tennis?", "Why don't we to play tennis?"], 0, "Why don't we + verb?"),
      ch("Which is rude?", ["No. I don't want.", "Sorry, I can't. Maybe next time?", "I'd love to, but I'm busy."], 0, "Too direct."),
    ],
    [
      ch("You want to invite a new classmate politely. Best:", ["Would you like to have lunch with us?", "You eat with us.", "Lunch us?"], 0, "Would you like to …?"),
      ch("You can't go to a party. Best answer:", ["I'm sorry, I can't. I'm visiting my grandma. Have fun!", "No.", "I can't. Bye."], 0, "Sorry + reason + kind words."),
      ctx("Your friends can't decide what to do on Saturday.", "Best suggestion:", ["How about going to the park?", "How about go park?", "Park, let's to go."], 0, "How about + -ing."),
      ch("Which reply accepts happily?", ["Good idea! I'd love to.", "Maybe. I don't know.", "No, thanks."], 0, "Accept."),
      say("I'd love to, but I can't on Friday. How about Saturday?", "Refuse + new idea."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short chat (30 words or more): invite a friend to do something, they refuse politely with a reason, and you suggest another day." },
      { universe: "arts", text: "Write a chat inviting a friend to a concert or art show (30 words or more). Include an invitation, a refusal or acceptance, and a suggestion." },
      { universe: "screens", text: "Write a chat inviting a friend to play a game online (30 words or more). Include an invitation, a refusal with a reason, and a suggestion." },
    ],
    minWords: 30,
    checks: [
      { label: "An invitation (Do you want to / Would you like to)", pattern: "\\b(do you want to|would you like to|wanna)\\b", min: 1 },
      { label: "A suggestion (Let's / Why don't we / How about)", pattern: "\\b(let's|why don't we|how about)\\b", min: 1 },
      { label: "Accept or refuse (I'd love to / Sorry, I can't / Sure)", pattern: "\\b(i'd love to|sorry|i can't|sure|good idea|great idea)\\b", min: 1 },
    ],
    rubric: ["I invited someone politely.", "I refused or accepted naturally.", "I made a suggestion with Let's, Why don't we or How about."],
    model: "Tomás: Hi Ana! Would you like to go to the cinema on Friday? Ana: I'd love to, but I can't. I have a piano lesson. Tomás: Oh, OK. How about Saturday afternoon? Ana: Sure! Let's meet at three. Tomás: Great!",
  },
};

const pastDirectionsFood: NodePractice = {
  nodeId: "a2.talk-about-past-events-give-directions-o",
  explain: "Three everyday jobs. Past events: use the past simple and time words ('Last weekend I went …'). Directions: 'Go straight on', 'Turn left / right at …', 'It's next to / opposite / between …'. Ordering food: 'Can I have …, please?' 'I'd like …' 'Could I have the bill, please?'",
  pattern: ["Past: Last weekend, I went … / We visited …", "Go straight on · Turn left / right at the bank", "It's next to / opposite / between …", "Can I have … , please? · I'd like … · The bill, please."],
  es: "Direcciones: go straight on = siga derecho, turn left = gire a la izquierda, next to = al lado de, opposite = en frente de. Para pedir: 'Can I have…, please?'.",
  steps: [
    [
      heard(X("02", "notice"), "Where does the person want to go?", ["To the museum", "To the bank", "To the park"], 0, "'how do I get to the museum?'"),
      heard(X("02", "notice"), "Where should they turn left?", ["At the bank", "At the park", "At the café"], 0, "'turn left at the bank'."),
      heard(X("02", "notice"), "What do they order at the café?", ["A chicken sandwich and an orange juice", "A pizza and water", "A coffee"], 0, "'a chicken sandwich and an orange juice'."),
      ch("'Go straight on' means …", ["Don't turn; continue.", "Turn left.", "Go back."], 0, "straight on = derecho."),
      ch("Which phrase orders food?", ["Can I have a juice, please?", "Turn left at the bank.", "Last weekend I went …"], 0, "Can I have …?"),
    ],
    [
      es(ch("'The café is opposite the bank.' Where is it?", ["On the other side of the street, facing the bank", "Inside the bank", "Behind the bank"], 0, "opposite = facing."), "opposite = en frente de."),
      ch("'It's between the school and the park.' The place is …", ["in the middle of them", "next to the school only", "far away"], 0, "between = entre."),
      ch("To ask for the cost of your meal, say:", ["Could I have the bill, please?", "Give the money.", "How much bill?"], 0, "the bill = la cuenta."),
      ctx("A tourist asks: 'Where's the station?'", "Best start:", ["Go straight on and turn right at the church.", "Station is go.", "You turn."], 0, "Clear directions."),
      ch("Which sentence is about the past?", ["Last Sunday, we visited the zoo.", "Turn left at the zoo.", "Can I have a zoo?"], 0, "Last Sunday + past simple."),
    ],
    [
      gap("Turn", "at the traffic lights.", ["left", "right"], "Turn left / right."),
      gap("The bank is", "to the supermarket.", ["next"], "next to."),
      tr("Order politely.", "Give me a hot chocolate.", ["Can I have a hot chocolate, please", "Could I have a hot chocolate, please", "I'd like a hot chocolate, please", "Can I have a hot chocolate please"], "Can I have …, please?"),
      dict(X("02", "dict"), ["Go straight on, then turn left", "Go straight on then turn left"]),
      say("Go straight on, then turn left at the bank.", "Pause after each step."),
    ],
    [
      fix(["Turn", "to left", "at the corner."], 1, ["left"], "Turn left (no 'to')."),
      fix(["The park is", "next", "the school."], 1, ["next to"], "next to."),
      es(fix(["Hello.", "I want", "a sandwich, please."], 1, ["Can I have", "I'd like", "Could I have"], "Polite order."), "Para pedir, mejor 'Can I have…' o 'I'd like…' que 'I want…'."),
      ch("Which is correct?", ["Last weekend, I went to the beach.", "Last weekend, I go to the beach.", "Last weekend, I going to beach."], 0, "Past simple."),
      ch("Which is wrong?", ["Go straight and turn at left.", "Go straight on and turn left.", "Turn right at the bank."], 0, "Turn left."),
    ],
    [
      ch("A tourist is lost. Best directions:", ["Go straight on for two blocks. The museum is on your right.", "Museum right.", "You go and go."], 0, "Clear and complete."),
      ch("At a restaurant, best way to order:", ["Could I have the chicken soup, please?", "Chicken soup. Now.", "I want soup."], 0, "Polite order."),
      ctx("Your friend asks about your holiday.", "Best answer:", ["We went to Santa Marta and swam every day.", "We go to Santa Marta and swim every day.", "We going Santa Marta."], 0, "Past simple."),
      ch("At the end of the meal, you say:", ["Could I have the bill, please?", "Give me the paper.", "Finish."], 0, "the bill."),
      say("Could I have a chicken sandwich and an orange juice, please?", "Polite and clear."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short dialogue (30 words or more): a tourist asks you for directions to a café, then orders food there. Use directions and 'Can I have…?'" },
      { universe: "past", text: "Write about a day out in your city (30 words or more): where you went, how you got there and what you ordered. Use past simple, directions and food words." },
      { universe: "arts", text: "Write directions from your school to a museum or theatre (30 words or more), and what you ordered at the café there." },
    ],
    minWords: 30,
    checks: [
      { label: "Directions (turn left/right, straight on, next to, opposite…)", pattern: "\\b(turn left|turn right|straight on|go straight|next to|opposite|between|on the left|on the right|on your left|on your right)\\b", min: 2 },
      { label: "Polite order (Can I have / Could I have / I'd like)", pattern: "\\b(can i have|could i have|i'd like|i would like)\\b", min: 1 },
    ],
    rubric: ["My directions are clear.", "I ordered politely.", "I used the right tenses."],
    model: "Tourist: Excuse me, where's the Café Luna? Me: Go straight on and turn left at the bank. It's opposite the park. Tourist: Thanks! (At the café) Tourist: Hello. Can I have an empanada and a lemonade, please? Waiter: Of course!",
  },
};

const informalFormal: NodePractice = {
  nodeId: "a2.informal-message-vs-formal-email-opening",
  explain: "Messages to friends are informal: start with 'Hi …!' or 'Hey …!' and finish with 'See you soon!', 'Love,' or 'Bye!'. Emails to a company or someone you don't know are formal: start with 'Dear Sir or Madam,' or 'Dear Mr / Ms + surname,' and finish with 'Yours faithfully,' (unknown name) or 'Kind regards,' / 'Yours sincerely,' (known name). Formal writing uses full forms: 'I am writing', not 'I'm writing'.",
  pattern: ["Friend: Hi Juli! … See you soon! / Love, Sara", "Formal: Dear Sir or Madam, … Yours faithfully,", "Known name: Dear Ms Gómez, … Kind regards,", "Formal: I am writing about … (full forms)"],
  es: "Con amigos: Hi / Hey y See you! Con una empresa: Dear Sir or Madam y Yours faithfully. En los correos formales evita las contracciones: 'I am', no 'I'm'.",
  steps: [
    [
      heard(X("03", "notice"), "How does Sara start the message to her friend?", ["Hi Juli!", "Dear Juli,", "Hello Madam,"], 0, "'Hi Juli!'"),
      heard(X("03", "notice"), "How does Sara start the email to the company?", ["Dear Sir or Madam,", "Hi guys!", "Hey!"], 0, "'Dear Sir or Madam'."),
      heard(X("03", "notice"), "How does she finish the formal email?", ["Yours faithfully,", "Love,", "See you soon!"], 0, "'Yours faithfully, Sara Gómez.'"),
      ch("Which opening is formal?", ["Dear Sir or Madam,", "Hey!", "Hi Juli!"], 0, "Formal opening."),
      ch("Which closing is informal?", ["See you soon!", "Yours faithfully,", "Kind regards,"], 0, "Informal closing."),
    ],
    [
      es(ch("You write to a hotel. You don't know the person's name. Start with:", ["Dear Sir or Madam,", "Hi hotel!", "Dear friend,"], 0, "Unknown name."), "Si no sabes el nombre: 'Dear Sir or Madam'."),
      ch("With 'Dear Sir or Madam', finish with:", ["Yours faithfully,", "Love,", "Bye!"], 0, "Unknown name → Yours faithfully."),
      ch("Which is better in a formal email?", ["I am writing to ask …", "I'm writin' to ask …", "Hey, so like …"], 0, "Full forms."),
      ctx("You write to your cousin about a party.", "Best opening:", ["Hi Pablo!", "Dear Sir,", "Dear Mr Pablo,"], 0, "Informal."),
      ch("Which closing works with 'Dear Ms Rojas'?", ["Kind regards,", "Love,", "Yours faithfully, xoxo"], 0, "Known name → Kind regards."),
    ],
    [
      gap("", "Sir or Madam,", ["Dear"], "Dear Sir or Madam."),
      gap("Yours", ", Laura Pérez", ["faithfully", "sincerely"], "Formal closing."),
      tr("Make it formal.", "Hey! I'm writing about my order.", ["Dear Sir or Madam, I am writing about my order", "Dear Sir or Madam, I am writing about my order."], "Dear … + full forms."),
      dict(X("03", "dict"), ["Dear Sir or Madam, I am writing about my order", "Dear Sir or Madam I am writing about my order"]),
      say("Dear Sir or Madam, I am writing about my order.", "Clear and calm."),
    ],
    [
      fix(["Hey company!", "I am writing", "about my bill."], 0, ["Dear Sir or Madam,", "Dear Sir or Madam"], "Formal opening."),
      es(fix(["Dear Sir or Madam, … Thank you.", "Love,", "Sara Gómez"], 1, ["Yours faithfully,", "Yours faithfully"], "Formal closing."), "'Love' es solo para amigos y familia."),
      fix(["Hi Juli! Thanks for the photos.", "Yours faithfully,", "Sara"], 1, ["See you soon!", "Love,", "Bye!", "See you soon", "Love"], "Friends → informal closing."),
      ch("Which is correct for a formal email?", ["Dear Mr Díaz, I am writing to …", "Hey Mr Díaz, I'm writin' …", "Dear Díaz Mister, …"], 0, "Dear Mr + surname."),
      ch("Which is wrong in a formal email?", ["Thx 4 ur help!", "Thank you for your help.", "Kind regards,"], 0, "Text language."),
    ],
    [
      ch("You email a language school for information. Best opening:", ["Dear Sir or Madam, I am writing to ask about your courses.", "Hey! Courses?", "Hi friend, tell me courses."], 0, "Formal."),
      ch("You thank your aunt for a present. Best closing:", ["Love, Sofía", "Yours faithfully, Sofía", "Kind regards, Ms Sofía"], 0, "Family → informal."),
      ctx("You write to Ms Torres, the school director.", "Best closing:", ["Kind regards, Juan Pérez", "Love you, Juan", "Bye!!!"], 0, "Known name → Kind regards."),
      ch("Which message to a friend sounds natural?", ["Hi Leo! Are you free on Saturday? See you!", "Dear Sir Leo, I am writing to ask …", "Yours faithfully, are you free?"], 0, "Informal."),
      say("Hi Juli! Thanks for the photos. See you soon!", "Friendly and quick."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write two short texts (30 words or more in total): a message to a friend about a party, and the opening and closing of an email to a shop about a problem." },
      { universe: "screens", text: "Write a message to a friend about a new game, and the start and end of a formal email to the game company (30 words or more in total)." },
      { universe: "futures", text: "Write a message to a friend about a summer course, and the start and end of a formal email to the course school (30 words or more in total)." },
    ],
    minWords: 30,
    checks: [
      { label: "An informal opening (Hi / Hey)", pattern: "\\b(hi|hey|hello)\\s+\\w+", min: 1 },
      { label: "A formal opening (Dear Sir or Madam / Dear Mr / Ms)", pattern: "\\bdear\\s+(sir|madam|mr|ms|mrs)\\b", min: 1 },
      { label: "A formal closing (Yours faithfully / sincerely / Kind regards)", pattern: "\\b(yours faithfully|yours sincerely|kind regards|best regards)\\b", min: 1 },
    ],
    rubric: ["I used an informal opening and closing with a friend.", "I used a formal opening and closing with a company.", "I used full forms in the formal email."],
    model: "Hi Dani! My party is on Saturday at five. Can you come? Bring your guitar! See you soon, Mariana. Dear Sir or Madam, I am writing about the headphones I bought last week. They do not work. Yours faithfully, Mariana López",
  },
};

const notIWant: NodePractice = {
  nodeId: "a2.don-t-say-i-want-when-ordering-or-asking",
  explain: "In English, 'I want …' can sound rude or too direct when you order or ask for something, especially with adults or in shops. Use 'Can I have …, please?', 'Could I have …?' or 'I'd like …, please.' To ask someone to do something: 'Can you …?' or 'Could you …, please?' Always add 'please' and 'thank you'.",
  pattern: ["Not: I want a coffee.", "Can I have a coffee, please?", "Could I have … ? · I'd like …, please.", "Could you help me, please?"],
  es: "En español es normal decir «quiero un jugo», pero en inglés 'I want' suena brusco. Usa 'Can I have…?' o 'I'd like…'.",
  steps: [
    [
      heard(X("04", "notice"), "What drink does the customer order?", ["A lemonade", "A coffee", "Water"], 0, "'Can I have a lemonade, please?'"),
      heard(X("04", "notice"), "What food does the customer order?", ["A cheese arepa", "A sandwich", "Soup"], 0, "'could I have a cheese arepa?'"),
      heard(X("04", "notice"), "What does the customer ask for at the end?", ["The bill", "More juice", "A menu"], 0, "'Could I have the bill, please?'"),
      ch("Which is polite?", ["Can I have a lemonade, please?", "I want lemonade.", "Lemonade!"], 0, "Can I have …, please?"),
      ch("Which phrase is too direct in a shop?", ["I want this.", "I'd like this, please.", "Could I have this?"], 0, "I want = too direct."),
    ],
    [
      es(ch("Why is 'I want a water' not polite at a café?", ["It sounds like an order.", "It's in the past.", "'water' is wrong."], 0, "Use Can I have …?"), "Suena a orden. Mejor: 'Can I have some water, please?'"),
      ch("'I'd like' means …", ["I would like", "I did like", "I had like"], 0, "I'd = I would."),
      ch("Which is most polite?", ["Could I have the menu, please?", "Give me the menu.", "Menu."], 0, "Could I have …?"),
      ctx("You need help with your bag at the bus station.", "Best request:", ["Could you help me with my bag, please?", "I want help.", "Help bag."], 0, "Could you …, please?"),
      ch("What do you add to sound polite?", ["please", "now", "quick"], 0, "Always 'please'."),
    ],
    [
      gap("", "I have a cheese arepa, please?", ["Can", "Could"], "Can / Could I have …?"),
      gap("I'd", "a hot chocolate, please.", ["like"], "I'd like …"),
      tr("Make it polite.", "I want the bill.", ["Could I have the bill, please", "Can I have the bill, please", "Could I have the bill please", "Can I have the bill please"], "Could I have …, please?"),
      dict(X("04", "dict"), ["Can I have a lemonade, please", "Can I have a lemonade please"]),
      say("Could I have the bill, please?", "Polite rise."),
    ],
    [
      fix(["Hi there.", "I want", "a pizza, please."], 1, ["I'd like", "Can I have", "Could I have"], "More polite."),
      es(fix(["Can I", "to have", "a juice, please?"], 1, ["have"], "Can I + base verb."), "Después de 'can', sin 'to': Can I have…?"),
      fix(["I", "would like have", "the soup."], 1, ["would like", "'d like"], "would like + noun (no 'have')."),
      ch("Which is correct?", ["Could you pass the salt, please?", "Could you to pass the salt?", "You pass the salt."], 0, "Could you + verb."),
      ch("Which is NOT polite at a shop?", ["I want that one.", "Could I have that one, please?", "I'd like that one, please."], 0, "Too direct."),
    ],
    [
      ch("At a bakery. Best:", ["Good morning! Can I have two croissants, please?", "Two croissants. I want.", "Give croissants."], 0, "Greeting + polite request."),
      ch("At a ticket office. Best:", ["I'd like two tickets for the six o'clock film, please.", "I want tickets.", "Tickets six!"], 0, "I'd like …, please."),
      ctx("You want your friend's mum to repeat something.", "Best:", ["Could you say that again, please?", "Repeat.", "I want you repeat."], 0, "Polite request."),
      ch("Which full order sounds best?", ["Could I have a chicken salad and some water, please? Thank you!", "I want salad and water.", "Salad, water, now."], 0, "Polite and complete."),
      say("Good afternoon. Could I have a cheese arepa, please?", "Friendly tone."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a dialogue at a café (30 words or more). Order a drink and food, and ask for the bill. Use Can I have, Could I have or I'd like, and please and thank you." },
      { universe: "arts", text: "Write a dialogue at a cinema or theatre ticket office (30 words or more). Use Can I have, Could I have or I'd like, and please and thank you." },
      { universe: "science", text: "Write a dialogue at a shop where you buy things for a science project (30 words or more). Use polite requests." },
    ],
    minWords: 30,
    checks: [
      { label: "Two polite requests (Can I have / Could I have / I'd like / Could you)", pattern: "\\b(can i have|could i have|i'd like|i would like|could you|can you)\\b", min: 2 },
      { label: "please and thank you", pattern: "\\b(please|thank you|thanks)\\b", min: 2 },
    ],
    rubric: ["I didn't use 'I want' to order.", "I used Can I have / Could I have / I'd like.", "I said please and thank you."],
    model: "Waiter: Good afternoon! What would you like? Me: Could I have a mango juice, please? And I'd like a cheese empanada. Waiter: Sure. Anything else? Me: No, thank you. (Later) Me: Could I have the bill, please? Waiter: Here you are. Me: Thanks!",
  },
};

const softenRefusal: NodePractice = {
  nodeId: "a2.do-soften-a-refusal-with-a-reason",
  explain: "When you say no to an invitation, be kind. First, say something positive ('Thanks for inviting me', 'I'd love to'), then say no ('but I can't'), then give a short reason ('I have a dentist appointment'). You can finish with an idea for another time ('Maybe next time?'). A plain 'No' sounds rude.",
  pattern: ["Thanks for inviting me, but …", "I'd love to, but I can't. + reason", "Sorry, I'm visiting my grandma.", "Maybe next time? · How about Sunday?"],
  es: "Decir solo 'No' suena grosero. Usa: «gracias + pero no puedo + razón + otra idea». Ejemplo: 'Thanks, but I can't. I have a test. Maybe next time?'",
  steps: [
    [
      heard(X("05", "notice"), "Why can't the speaker play football?", ["A dentist appointment", "Homework", "Rain"], 0, "'I have a dentist appointment.'"),
      heard(X("05", "notice"), "What does the speaker suggest?", ["Maybe next time", "Tomorrow morning", "Never"], 0, "'Maybe next time?'"),
      heard(X("05", "notice"), "Why can't they go to the party on Sunday?", ["They're visiting their grandma.", "They're ill.", "They have a match."], 0, "'I'm visiting my grandma.'"),
      ch("Which refusal is softest?", ["I'd love to, but I can't. I have a test.", "No.", "I don't want."], 0, "Positive + reason."),
      ch("What comes after 'but'?", ["The refusal or reason", "A greeting", "A thank you"], 0, "I'd love to, but …"),
    ],
    [
      ch("Why give a reason?", ["So the other person doesn't feel bad", "To be rude", "Because it's a rule"], 0, "Reasons soften the no."),
      es(ch("'Maybe next time?' shows that …", ["you still want to go another day", "you never want to go", "you are angry"], 0, "Friendly ending."), "= quizás la próxima vez."),
      ctx("A friend invites you to the beach, but you have to study.", "Best answer:", ["Thanks, but I can't. I have an exam on Monday. Maybe next weekend?", "No. Study.", "Beach no."], 0, "Thanks + reason + idea."),
      ch("Which phrase thanks the person?", ["Thanks for inviting me.", "Maybe next time.", "I can't."], 0, "Thanks for inviting me."),
      ch("Which is NOT a good reason?", ["Because no.", "I have a family dinner.", "I'm visiting my cousins."], 0, "No real reason."),
    ],
    [
      gap("Thanks for", "me, but I can't come.", ["inviting"], "Thanks for inviting me."),
      gap("I'd love to,", "I'm busy on Saturday.", ["but"], "I'd love to, but …"),
      tr("Make it kinder.", "No, I can't go.", ["I'd love to, but I can't go", "Thanks, but I can't go", "Sorry, I can't go", "Thanks for inviting me, but I can't go"], "Add a positive start."),
      dict(X("05", "dict"), ["I'd love to, but I can't", "I'd love to but I can't", "I would love to, but I can't"]),
      say("Thanks for inviting me, but I'm visiting my grandma. Maybe next time?", "Warm tone."),
    ],
    [
      fix(["Thanks for", "invite", "me, but I can't."], 1, ["inviting"], "Thanks for + -ing."),
      es(fix(["I'd love", "but", "I can't. I have a test."], 1, ["to, but"], "I'd love to, but …"), "Falta 'to': I'd love to, but…"),
      fix(["A: Come to my party! B:", "No. I don't want.", "Bye."], 1, ["Sorry, I can't.", "Thanks, but I can't.", "Sorry, I can't"], "Soften it."),
      ch("Which is correct?", ["Sorry, I can't. I'm busy.", "Sorry, I not can. I busy.", "Sorry, I can't to go."], 0, "can't + base verb."),
      ch("Which is rude?", ["I don't want to go with you.", "I'd love to, but I'm busy.", "Thanks, but I can't. Maybe next time?"], 0, "No softening."),
    ],
    [
      ch("Your classmate invites you to his birthday, but you're travelling. Best:", ["Thanks for inviting me! I'm sorry, I'm travelling that weekend. Have a great party!", "No.", "I'm travelling. Bye."], 0, "Thanks + reason + good wish."),
      ch("Your friend wants to play video games, but you're tired. Best:", ["I'd love to, but I'm really tired. How about tomorrow?", "No, boring.", "I don't want."], 0, "Reason + new idea."),
      ctx("Your aunt invites you to lunch, but you have a match.", "Best:", ["Thank you, Auntie! I'm sorry, I have a football match. Can I come next Sunday?", "No, match.", "I can't. Bye."], 0, "Kind and clear."),
      ch("Which ending is the friendliest?", ["Maybe next time?", "Never again.", "Don't ask me."], 0, "Leave the door open."),
      say("I'd love to, but I have a dentist appointment. Maybe next time?", "Soft 'but'."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write two short replies (30 words or more in total) to invitations you can't accept. Each reply needs thanks, a refusal, a reason and an idea for another time." },
      { universe: "screens", text: "Write a reply to a friend who invites you to a gaming night you can't go to (30 words or more). Thanks, refusal, reason, another idea." },
      { universe: "arts", text: "Write a reply to an invitation to a concert you can't go to (30 words or more). Thanks, refusal, reason, another idea." },
    ],
    minWords: 30,
    checks: [
      { label: "A positive start (Thanks / I'd love to)", pattern: "\\b(thanks|thank you|i'd love to|i would love to)\\b", min: 1 },
      { label: "A refusal (but I can't / sorry)", pattern: "\\b(can't|cannot|sorry)\\b", min: 1 },
      { label: "A reason (I have / I'm + -ing / because)", pattern: "\\b(i have|i've got|i'm\\s+\\w+ing|because|i am\\s+\\w+ing)\\b", min: 1 },
      { label: "Another idea (Maybe next time / How about)", pattern: "\\b(maybe next|next time|how about|another day|next week|can i come)\\b", min: 1 },
    ],
    rubric: ["I started with thanks or I'd love to.", "I gave a short reason.", "I suggested another time."],
    model: "Hi Camilo! Thanks for inviting me to the cinema. I'd love to, but I can't on Friday because I'm visiting my grandparents in Tunja. How about next Saturday? I'm free all day! Hi Vale, thank you! Sorry, I have a test on Monday. Maybe next time?",
  },
};

export const A2_COMMUNICATE: NodePractice[] = [invite, pastDirectionsFood, informalFormal, notIWant, softenRefusal];
