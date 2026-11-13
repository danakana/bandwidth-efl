/* A1+ Words. Five steps per skill. Original content for Bandwidth EFL. For teacher review.
   Lowest band: short Spanish notes (es) and glosses shown only after a wrong answer. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, es, fix, gap, heard, ord, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/a1pw-${n}-${k}.mp3`;

export const A1P_WORDS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "My phone number is three one five, two four eight, nine nine zero six. My birthday is on the twenty-third of October. The bus leaves at a quarter past seven. This T-shirt costs fifteen dollars." },
  { file: X("01", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "The bus leaves at a quarter past seven." },
  { file: X("02", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "This is my uncle Jorge. He's my mum's brother. He's tall and thin, and he has short black hair and brown eyes. His wife is my aunt Clara. She has long curly hair. Their son is my cousin." },
  { file: X("02", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "She has long curly hair." },
  { file: X("03", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "In my house, there's a kitchen, a living room, two bedrooms and a bathroom. At school, my favourite subject is science. I don't like maths. In my backpack, I have a ruler, a calculator and a dictionary." },
  { file: X("03", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "My favourite subject is science." },
  { file: X("04", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "I wake up at six. I brush my teeth and have a shower. For breakfast, I have arepas, eggs and hot chocolate. At lunch, I eat rice, chicken and salad. In the evening, I do my homework and go to bed at ten." },
  { file: X("04", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "I brush my teeth and have a shower." },
  { file: X("05", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Today it's cloudy and windy, so I'm wearing jeans, a grey hoodie and white trainers. First, I go to the bakery. Then I go to the pharmacy next to the bank. The library is opposite the museum." },
  { file: X("05", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "Today it's cloudy and windy." },
  { file: X("06", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "Every morning I take a shower and have breakfast. At school we do exercises and take photos for our project. After school I do my homework and play games. My mum makes dinner, and I wash the dishes." },
  { file: X("06", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "After school I do my homework." },
  { file: X("07", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Good morning! Stand up, everyone. Now, sit down, please. Take out your notebooks. Put your bags under the desk. Pick up the paper on the floor. And please, turn off your phones." },
  { file: X("07", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "Pick up the paper on the floor." },
  { file: X("08", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Hi! How are you? I'm fine, thanks. And you? Not bad! Nice to meet you. See you later! Have a nice day! Excuse me, sorry, can you repeat that, please? Thank you so much! You're welcome." },
  { file: X("08", "dict"), voice: "8DvnqWWA3WWXixOm7zQI", script: "Nice to meet you. See you later!" },
];

const numbers: NodePractice = {
  nodeId: "a1p.numbers-dates-times-prices",
  explain: "Numbers: 13 thirteen, 30 thirty (listen to the stress: thirTEEN, THIRty). Dates use ordinal numbers: first, second, third, fourth, twenty-first: 'on the twenty-third of October'. Times: seven o'clock, half past seven (7:30), a quarter past seven (7:15), a quarter to eight (7:45). Prices: 'It costs fifteen dollars.' 'How much is it?'",
  pattern: ["13 thirTEEN vs 30 THIRty · 15 fifTEEN vs 50 FIFty", "Dates: the first (1st), second (2nd), third (3rd), fourth (4th)…", "Times: 7:00 seven o'clock · 7:30 half past seven · 7:15 a quarter past seven", "Prices: How much is it? It's fifteen dollars."],
  es: "Half past seven = 7:30 (no 'half past eight'). Para fechas: the first, the second… y se dice 'on the 5th of June'.",
  steps: [
    [
      heard(X("01", "notice"), "When is the birthday?", ["The 23rd of October", "The 3rd of October", "The 23rd of November"], 0, "'The twenty-third of October.'"),
      heard(X("01", "notice"), "When does the bus leave?", ["7:15", "7:45", "7:30"], 0, "'A quarter past seven' = 7:15."),
      heard(X("01", "notice"), "How much is the T-shirt?", ["15 dollars", "50 dollars", "5 dollars"], 0, "'Fifteen dollars.'"),
      ch("How do you say 40?", ["forty", "fourty", "fourteen"], 0, "40 = forty (no u)."),
      ch("What comes after 'first, second …'?", ["third", "three", "thirth"], 0, "1st, 2nd, 3rd = third."),
    ],
    [
      es(ch("7:30 is:", ["half past seven", "half past eight", "seven and half"], 0, "half past seven."), "Ojo: half past seven = 7:30, no 8:30."),
      ch("8:45 is:", ["a quarter to nine", "a quarter past eight", "a quarter to eight"], 0, "15 minutes before nine."),
      ch("How do you ask for a price?", ["How much is it?", "How many is it?", "What cost?"], 0, "How much …?"),
      ch("Which date is correct?", ["the twelfth of May", "the twelve of May", "the twelveth of May"], 0, "12th = twelfth."),
      ch("Which is bigger?", ["ninety", "nineteen", "nine"], 0, "90 > 19 > 9."),
    ],
    [
      gap("My birthday is on the", "of March. (1st)", ["first"], "1st = first."),
      gap("It's half", "three. (3:30)", ["past"], "half past three."),
      tr("Write the time in words.", "6:00", ["six o'clock", "It's six o'clock"], "o'clock for exact hours."),
      dict(X("01", "dict"), ["The bus leaves at a quarter past seven"]),
      say("thirteen, thirty; fifteen, fifty", "thirTEEN (end) · THIRty (start)."),
    ],
    [
      fix(["My cousin is", "fourty", "years old."], 1, ["forty"], "40 = forty."),
      fix(["It's 8:30, so it's", "half past seven", "now."], 1, ["half past eight"], "8:30 = half past eight."),
      fix(["Today is the", "two", "of April."], 1, ["second"], "Dates: second."),
      ch("Which is wrong?", ["How many is this bag?", "How much is this bag?", "It's twenty dollars."], 0, "Price → How much."),
      ord("What time does the film start?", "What time + does …?"),
    ],
    [
      ctx("In a shop: 'How much are these socks?'", "Best answer:", ["They're eight thousand pesos.", "They're eight thousand pesos old.", "It's eight o'clock."], 0, "Price."),
      ctx("Friend: 'When's your birthday?'", "Best answer:", ["It's on the fourth of July.", "It's on July four, in summer.", "It's four July of, my birthday."], 0, "on the fourth of July."),
      ctx("Someone asks: 'What time is it?' It's 9:15.", "Best answer:", ["It's a quarter past nine.", "It's a quarter to nine.", "It's nine and fifteen minutes past."], 0, "9:15 = a quarter past nine."),
      ch("Give your phone number:", ["It's three one five, two four eight…", "It's three hundred fifteen million…", "Is number three."], 0, "Say each digit."),
      say("My birthday is on the twenty-first of December.", "twenty-FIRST."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about your week (20 words or more). Give your birthday date, the time school starts and the price of something you like." },
      { universe: "screens", text: "Write a message about a concert (20 words or more): the date, the time and the ticket price." },
    ],
    minWords: 20,
    checks: [
      { label: "A date with an ordinal (first, second, tenth…)", pattern: "\\b(first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth|\\w+teenth|twentieth|thirtieth|twenty-\\w+|thirty-first|\\d+(st|nd|rd|th))\\b", min: 1 },
      { label: "A time (o'clock, half past, quarter…)", pattern: "\\b(o'clock|half past|quarter (past|to)|\\d{1,2}:\\d\\d)\\b", min: 1 },
      { label: "A price (dollars, pesos, euros…)", pattern: "\\b(dollars?|pesos?|euros?|pounds?|costs?|how much)\\b", min: 1 },
    ],
    rubric: ["I wrote a date with first / second / third…", "I wrote a time.", "I wrote a price."],
    model: "My birthday is on the ninth of August. School starts at seven o'clock and finishes at half past one. I want new trainers. They cost ninety dollars, so I'm saving money.",
  },
};

const family: NodePractice = {
  nodeId: "a1p.family-people-physical-description",
  explain: "Family words: mother (mum), father (dad), parents, brother, sister, grandmother, grandfather, uncle, aunt, cousin, son, daughter, wife, husband. To describe people: tall / short, thin / slim, long / short hair, curly / straight hair, blond / dark / black hair, blue / brown / green eyes. Use has for hair and eyes: 'She has long hair.' Use is for height: 'He is tall.'",
  pattern: ["Family: parents · uncle · aunt · cousin · grandparents", "He is tall / short / thin.", "She has long / short / curly / straight hair.", "Order: long black hair · big brown eyes"],
  es: "Parents = papá y mamá (no «parientes»; parientes = relatives). Para pelo y ojos usa has: She has long hair.",
  steps: [
    [
      heard(X("02", "notice"), "Who is Jorge?", ["The speaker's uncle", "The speaker's cousin", "The speaker's dad"], 0, "'This is my uncle Jorge.'"),
      heard(X("02", "notice"), "What hair does Jorge have?", ["Short black hair", "Long curly hair", "Short blond hair"], 0, "'Short black hair.'"),
      heard(X("02", "notice"), "What is Clara's hair like?", ["Long and curly", "Short and straight", "Black and short"], 0, "'She has long curly hair.'"),
      ch("Your mum's sister is your:", ["aunt", "uncle", "cousin"], 0, "mum's sister = aunt."),
      ch("Your uncle's son is your:", ["cousin", "nephew", "brother"], 0, "uncle's son = cousin."),
    ],
    [
      es(ch("'My parents' means:", ["my mum and dad", "all my family", "my relatives"], 0, "parents = mum + dad."), "Parents = papá y mamá, no «parientes»."),
      ch("Which is correct?", ["She has long hair.", "She is long hair.", "She has hair long."], 0, "has + adjective + hair."),
      ch("The opposite of 'tall' is:", ["short", "small hair", "thin"], 0, "tall ↔ short."),
      ch("Choose the right order:", ["big brown eyes", "brown big eyes", "eyes big brown"], 0, "size + colour + noun."),
      ch("Your father's father is your:", ["grandfather", "great father", "old father"], 0, "grandfather."),
    ],
    [
      gap("My brother", "very tall.", ["is", "'s"], "Height → is."),
      gap("My grandma has short white", ".", ["hair"], "hair (no s)."),
      tr("Write it in a different way.", "my mum and my dad", ["my parents", "My parents"], "mum + dad = parents."),
      dict(X("02", "dict"), ["She has long curly hair"]),
      say("He's tall and thin, with short black hair.", "short black hair: stress 'hair'."),
    ],
    [
      fix(["My sister", "is", "green eyes."], 1, ["has"], "Eyes → has."),
      es(fix(["She has long blond", "hairs", "and blue eyes."], 1, ["hair"], "hair has no s."), "Hair va sin s cuando es todo el pelo."),
      fix(["She has", "blue big", "eyes."], 1, ["big blue"], "size, then colour."),
      ch("Which is wrong?", ["My brother has twelve years.", "My brother is twelve.", "My brother is tall."], 0, "Age → is."),
      ord("My cousin has curly brown hair.", "curly (type) + brown (colour) + hair."),
    ],
    [
      ctx("Friend: 'What does your sister look like?'", "Best answer:", ["She's short and has long dark hair.", "She likes music and dancing a lot.", "She is very kind person with long hair."], 0, "look like = appearance."),
      ch("Describe your favourite footballer:", ["He's tall and has short dark hair.", "He's tall and he has hair short.", "He is short hairs."], 0, "has short dark hair."),
      ctx("New friend: 'Have you got any cousins?'", "Best answer:", ["Yes, I have five cousins.", "Yes, I have five parents.", "Yes, I'm five cousins."], 0, "cousins."),
      ch("Introduce your family:", ["There are four people: my parents, my sister and me.", "There are four parents and me.", "There are four relatives: my parents and me."], 0, "parents = 2 people."),
      say("My aunt has long straight hair and green eyes.", "Say 'aunt' clearly."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe two people in your family (20 words or more). Say who they are and what they look like." },
      { universe: "arts", text: "Describe a person in a painting or a photo you like (20 words or more). Use is and has." },
    ],
    minWords: 20,
    checks: [
      { label: "Family words", pattern: "\\b(mum|mom|mother|dad|father|parents|brother|sister|grandma|grandpa|grandmother|grandfather|uncle|aunt|cousin)\\b", min: 2 },
      { label: "Has + hair / eyes", pattern: "\\bhas\\s+(\\w+\\s+){0,3}(hair|eyes)\\b", min: 1 },
      { label: "Is + tall / short / thin…", pattern: "\\b(is|'s)\\s+(very\\s+)?(tall|short|thin|slim|strong|small|big)\\b", min: 1 },
    ],
    rubric: ["I used family words.", "I used has for hair and eyes.", "I used is for height."],
    model: "My dad is tall and strong. He has short black hair and brown eyes. My sister is short and thin. She has long curly hair and big green eyes. She looks like my mum.",
  },
};

const homeSchool: NodePractice = {
  nodeId: "a1p.home-and-rooms-school-subjects-and-objec",
  explain: "Rooms: kitchen, living room, bedroom, bathroom, dining room, garden. School subjects: maths, science, history, geography, English, Spanish, art, music, PE (sports). School objects: ruler, rubber (eraser), pencil case, notebook, calculator, dictionary, board, backpack.",
  pattern: ["Rooms: kitchen · bedroom · bathroom · living room", "Subjects: maths · science · history · PE · art", "Objects: ruler · eraser · notebook · calculator", "I cook in the kitchen. · I sleep in my bedroom."],
  es: "Ojo con los falsos amigos: carpet = alfombra (no «carpeta»; carpeta = folder). Library = biblioteca (no «librería»; librería = bookshop).",
  steps: [
    [
      heard(X("03", "notice"), "How many bedrooms are in the house?", ["Two", "One", "Three"], 0, "'Two bedrooms.'"),
      heard(X("03", "notice"), "What is the favourite subject?", ["Science", "Maths", "English"], 0, "'My favourite subject is science.'"),
      heard(X("03", "notice"), "Which object is in the backpack?", ["A calculator", "A laptop", "A phone"], 0, "'A ruler, a calculator and a dictionary.'"),
      ch("Where do you cook?", ["In the kitchen", "In the bathroom", "In the bedroom"], 0, "kitchen = cook."),
      ch("Which is a school subject?", ["geography", "ruler", "board"], 0, "geography = subject."),
    ],
    [
      es(ch("«Necesito una carpeta para mis hojas»:", ["I need a folder for my papers.", "I need a carpet for my papers.", "I need a library for my papers."], 0, "carpeta = folder."), "Carpet = alfombra. Carpeta = folder."),
      ch("You draw straight lines with a:", ["ruler", "rubber", "notebook"], 0, "ruler = regla."),
      ch("PE is:", ["sports at school", "a science", "a language"], 0, "PE = Physical Education."),
      ch("Where do you take a shower?", ["In the bathroom", "In the living room", "In the garden"], 0, "bathroom."),
      ch("Where do you borrow books at school?", ["In the library", "In the bookshop", "In the kitchen"], 0, "library = biblioteca."),
    ],
    [
      gap("We watch TV in the living", ".", ["room"], "living room."),
      gap("I use a", "to check new English words.", ["dictionary"], "dictionary."),
      tr("Write the subject.", "You study numbers, sums and shapes.", ["maths", "Maths", "math", "Math"], "numbers → maths."),
      dict(X("03", "dict"), ["My favourite subject is science"]),
      say("I love art and music, but I don't like history.", "Stress: ART, MUsic, HIStory."),
    ],
    [
      es(fix(["I study in the", "bookshop", "at school after class."], 1, ["library"], "school books → library."), "Library = biblioteca. Bookshop = librería (tienda)."),
      fix(["We have", "a maths", "on Monday and Wednesday."], 1, ["maths"], "Subjects have no a."),
      fix(["I sleep in the", "kitchen", "of my house. My bed is there."], 1, ["bedroom"], "Sleep → bedroom."),
      ch("Which is wrong?", ["There's a carpet for my papers.", "There's a folder for my papers.", "There's a carpet on the floor."], 0, "papers → folder."),
      ord("Can I borrow your ruler, please?", "Can I borrow + object?"),
    ],
    [
      ctx("A classmate: 'What's your favourite subject?'", "Best answer:", ["Science. I love experiments!", "My ruler. I love my ruler!", "The kitchen. I love cooking!"], 0, "A subject."),
      ch("Describe your house:", ["It has three bedrooms, a big kitchen and a small garden.", "It has three beds-rooms, a big kitchen and a small garden.", "It has three bedrooms, a big cook room and a small garden."], 0, "bedrooms · kitchen."),
      ctx("You forgot your eraser.", "Ask a friend:", ["Can I borrow your rubber, please?", "Can I borrow your eraser of pencil?", "Give me goma."], 0, "rubber = eraser."),
      ch("Tell your timetable:", ["On Monday I have English, maths and PE.", "On Monday I have the English, the maths.", "On Monday I have a English."], 0, "No article with subjects."),
      say("Where's my pencil case? It's in my backpack.", "PENcil case."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe your house and your school day (20 words or more). Name rooms, subjects and objects." },
      { universe: "science", text: "Describe your dream school (20 words or more): its rooms, its subjects and what students have in their bags." },
    ],
    minWords: 20,
    checks: [
      { label: "Rooms", pattern: "\\b(kitchen|bedroom|bathroom|living room|dining room|garden|classroom|library)\\b", min: 2 },
      { label: "School subjects", pattern: "\\b(maths?|science|history|geography|english|spanish|art|music|pe|biology|physics|chemistry|technology)\\b", min: 2 },
    ],
    rubric: ["I named rooms.", "I named school subjects (no a / the).", "I named school objects."],
    model: "My house has a small kitchen, a living room and two bedrooms. At school, I love art and science, but I don't like maths. In my bag I have a notebook, a ruler and a calculator.",
  },
};

const foodRoutine: NodePractice = {
  nodeId: "a1p.food-and-drinks-daily-routine-verbs",
  explain: "Food and drinks: bread, eggs, rice, chicken, fish, fruit, vegetables, salad, cheese, juice, milk, water, hot chocolate. Meals: breakfast, lunch, dinner. Routine verbs: wake up, get up, have a shower, brush my teeth, get dressed, have breakfast, go to school, do homework, go to bed.",
  pattern: ["Meals: have breakfast / lunch / dinner", "Morning: wake up · get up · have a shower · get dressed", "Evening: do homework · have dinner · go to bed", "Food: rice · chicken · eggs · fruit · juice"],
  es: "Para comidas se usa have: have breakfast (no 'take breakfast'). «Ducharse» = have / take a shower.",
  steps: [
    [
      heard(X("04", "notice"), "What time does the speaker wake up?", ["At six", "At seven", "At ten"], 0, "'I wake up at six.'"),
      heard(X("04", "notice"), "What does the speaker drink for breakfast?", ["Hot chocolate", "Coffee", "Juice"], 0, "'Arepas, eggs and hot chocolate.'"),
      heard(X("04", "notice"), "What is for lunch?", ["Rice, chicken and salad", "Arepas with eggs and cheese", "Fish and chips with salad"], 0, "'Rice, chicken and salad.'"),
      ch("The first meal of the day is:", ["breakfast", "lunch", "dinner"], 0, "breakfast."),
      ch("Before school, I ___ my teeth.", ["brush", "wash up", "make"], 0, "brush your teeth."),
    ],
    [
      es(ch("Which is correct?", ["I have breakfast at seven.", "I take breakfast at seven.", "I eat the breakfast at seven."], 0, "have breakfast."), "Con comidas se usa have: have breakfast, have lunch."),
      ch("Which is a drink?", ["juice", "cheese", "bread"], 0, "juice."),
      ch("Put on your clothes =", ["get dressed", "get up", "wake up"], 0, "get dressed."),
      ch("Which is a vegetable?", ["carrot", "apple", "chicken"], 0, "carrot."),
      ch("Which comes first?", ["wake up", "go to bed", "have dinner"], 0, "Morning first."),
    ],
    [
      gap("I", "a shower every morning.", ["have", "take"], "have / take a shower."),
      gap("I go to", "at ten o'clock.", ["bed"], "go to bed (no the)."),
      tr("Write the meal.", "the meal in the evening", ["dinner", "Dinner"], "evening → dinner."),
      dict(X("04", "dict"), ["I brush my teeth and have a shower"]),
      say("I get up, have a shower and get dressed.", "Join the words: get-up, get-dressed."),
    ],
    [
      fix(["I", "take", "lunch at school at twelve."], 1, ["have"], "have lunch."),
      fix(["I go to", "the bed", "at ten."], 1, ["bed"], "go to bed (no the)."),
      fix(["I", "make", "my homework after school."], 1, ["do"], "do homework."),
      ch("Which is wrong?", ["I wash my teeth.", "I brush my teeth.", "I wash my face."], 0, "brush teeth."),
      ord("What do you have for breakfast?", "have + for breakfast."),
    ],
    [
      ctx("Friend: 'What do you have for breakfast?'", "Best answer:", ["Usually eggs, bread and juice.", "Usually I take breakfast.", "At seven o'clock."], 0, "Food answer."),
      ch("Describe your morning:", ["I wake up at six, have a shower and have breakfast.", "I wake me up at six, have a shower and have breakfast.", "I wake up at six, take a shower and take a breakfast."], 0, "wake up · have breakfast."),
      ctx("In a café: 'What would you like?'", "Best answer:", ["A chicken sandwich and an orange juice, please.", "Give me a chicken sandwich and orange juice.", "I want a chicken and an orange juice, please."], 0, "Polite order."),
      ch("Talk about a healthy diet:", ["I eat a lot of fruit and vegetables.", "I eat much fruits and vegetable.", "I eat a lot of fruit and vegetable."], 0, "fruit (no s) · vegetables (s)."),
      say("I have rice, chicken and salad for lunch.", "Lists: up, up, down at the end."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe your day from morning to night (20 words or more). Use routine verbs and three foods." },
      { universe: "science", text: "Describe a healthy day for a teenager (20 words or more): what to eat and when." },
    ],
    minWords: 20,
    checks: [
      { label: "Routine verbs", pattern: "\\b(wake up|get up|have a shower|take a shower|brush|get dressed|go to school|do (my )?homework|go to bed)\\b", min: 2 },
      { label: "Meals and food", pattern: "\\b(breakfast|lunch|dinner|bread|eggs?|rice|chicken|fish|fruit|vegetables|salad|cheese|juice|milk|water|arepas?|soup|meat|beans)\\b", min: 3 },
    ],
    rubric: ["I used routine verbs.", "I used have breakfast / lunch / dinner.", "I named foods and drinks."],
    model: "I get up at six and have a shower. I have breakfast with my family: bread, eggs and juice. At lunch I have rice and chicken. After school I do my homework and I go to bed at ten.",
  },
};

const cityWeather: NodePractice = {
  nodeId: "a1p.city-places-weather-clothes-and-colours",
  explain: "City places: bank, bakery, pharmacy, supermarket, hospital, library, museum, park, station, cinema. Weather: sunny, cloudy, rainy, windy, hot, cold, warm. 'It's sunny.' Clothes: jeans, T-shirt, hoodie, jacket, trainers (sneakers), shoes, skirt, dress, cap. Colours go before the noun: a red cap, white trainers.",
  pattern: ["Places: bank · bakery · pharmacy · library · station", "Weather: It's sunny / cloudy / rainy / windy / hot / cold.", "Clothes: jeans · hoodie · jacket · trainers · cap", "Colour before noun: a black jacket"],
  es: "El color va antes: a red cap (no 'a cap red'). Para el clima: It's sunny (no 'Is sunny' ni 'It does sun').",
  steps: [
    [
      heard(X("05", "notice"), "What is the weather like?", ["Cloudy and windy", "Sunny and hot", "Rainy and cold"], 0, "'It's cloudy and windy.'"),
      heard(X("05", "notice"), "What colour is the hoodie?", ["Grey", "White", "Black"], 0, "'A grey hoodie.'"),
      heard(X("05", "notice"), "Where is the pharmacy?", ["Next to the bank", "Opposite the museum", "Next to the bakery"], 0, "'The pharmacy next to the bank.'"),
      ch("You buy bread at the:", ["bakery", "pharmacy", "bank"], 0, "bakery = panadería."),
      ch("You buy medicine at the:", ["pharmacy", "bakery", "library"], 0, "pharmacy."),
    ],
    [
      es(ch("Which is correct?", ["I have a red cap.", "I have a cap red.", "I have a red caps."], 0, "Colour before noun."), "El color va antes del sustantivo: a red cap."),
      ch("Which is correct?", ["It's rainy today.", "Is rainy today.", "It does rain today."], 0, "It's + weather."),
      ch("When it's cold, you wear a:", ["jacket", "T-shirt", "cap"], 0, "jacket for cold."),
      ch("You take a train at the:", ["station", "museum", "park"], 0, "station."),
      ch("Trainers are:", ["sports shoes", "teachers", "trains"], 0, "trainers = sneakers."),
    ],
    [
      gap("It's very", "today. Let's go to the beach! (sun)", ["sunny", "hot"], "sun → sunny."),
      gap("I'm wearing blue", "and a white T-shirt.", ["jeans"], "jeans (always plural)."),
      tr("Put the words in the right order.", "a jacket black", ["a black jacket"], "colour + noun."),
      dict(X("05", "dict"), ["Today it's cloudy and windy", "Today it is cloudy and windy"]),
      say("It's cold, so I'm wearing a jacket and a scarf.", "Join: It's-cold."),
    ],
    [
      fix(["I'm wearing a", "T-shirt green", "today."], 1, ["green T-shirt"], "Colour before noun."),
      fix(["In Cartagena", "is", "very hot."], 1, ["it's", "it is"], "It's + weather."),
      fix(["I need money. Let's go to the", "bakery", "first."], 1, ["bank"], "money → bank."),
      ch("Which is wrong?", ["She has shoes blacks.", "She has black shoes.", "She has a black dress."], 0, "black shoes (adjectives have no s)."),
      ord("The museum is opposite the park.", "opposite = in front, across the street."),
    ],
    [
      ctx("Friend: 'What's the weather like in Bogotá today?'", "Best answer:", ["It's cloudy and a bit cold.", "Is cloudy.", "The weather is cloud."], 0, "It's + adjective."),
      ctx("A tourist: 'Where can I buy medicine?'", "Best answer:", ["There's a pharmacy next to the bank.", "There's a bakery next to the bank.", "In the library."], 0, "medicine → pharmacy."),
      ch("Describe your clothes for a party:", ["I'm wearing a blue dress and white trainers.", "I'm wearing a dress blue and white trainers.", "I'm wearing a blue dress and whites trainers."], 0, "Colour before noun."),
      ch("Plan a sunny day:", ["It's sunny! Let's go to the park.", "It's sun! Let's go to the park.", "Is sunny! Let's go at the park."], 0, "It's sunny · Let's go."),
      say("It's rainy, so take an umbrella.", "an umbrella: link the n."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe your town and today's weather, and say what you're wearing (20 words or more)." },
      { universe: "arts", text: "Design a school uniform (20 words or more). Name the clothes and colours, and the weather it's good for." },
    ],
    minWords: 20,
    checks: [
      { label: "Weather (It's sunny / cold…)", pattern: "\\b(sunny|cloudy|rainy|windy|hot|cold|warm|snowy)\\b", min: 1 },
      { label: "Colour + clothes", pattern: "\\b(red|blue|green|yellow|black|white|grey|gray|pink|purple|orange|brown)\\s+(jeans|t-shirt|hoodie|jacket|trainers|sneakers|shoes|skirt|dress|cap|shirt|socks|trousers|scarf|uniform)\\b", min: 2 },
      { label: "City places", pattern: "\\b(bank|bakery|pharmacy|supermarket|hospital|library|museum|park|station|cinema|school|church|square|mall)\\b", min: 1 },
    ],
    rubric: ["I described the weather with It's.", "I put the colour before the clothes.", "I named places in my town."],
    model: "In my town there is a big park, a library and a bakery. Today it's sunny and hot. I'm wearing black shorts, a white T-shirt and blue trainers. I'm going to the park with my friends.",
  },
};

const verbNoun: NodePractice = {
  nodeId: "a1p.high-frequency-verb-noun",
  explain: "Some verbs and nouns always go together. Learn them as one chunk. have: have breakfast, have a shower, have fun. do: do homework, do exercise, do the dishes. make: make dinner, make a cake, make friends, make a mistake. take: take a photo, take the bus. play: play football, play games, play the guitar.",
  pattern: ["have breakfast / a shower / fun", "do homework / exercise / the dishes", "make dinner / a cake / friends / a mistake", "take a photo / the bus · play football / games"],
  es: "En español decimos «hacer» para todo, pero en inglés do homework y make a cake. Y «tomar una foto» = take a photo.",
  steps: [
    [
      heard(X("06", "notice"), "What does the speaker do every morning?", ["Take a shower and have breakfast", "Do some exercise in the park", "Make dinner for the family"], 0, "'I take a shower and have breakfast.'"),
      heard(X("06", "notice"), "What do they take for the project?", ["Photos", "The bus", "Exercise"], 0, "'Take photos for our project.'"),
      heard(X("06", "notice"), "Who makes dinner?", ["The mum", "The speaker", "The teacher"], 0, "'My mum makes dinner.'"),
      ch("I ___ my homework after school.", ["do", "make", "take"], 0, "do homework."),
      ch("Let's ___ a photo!", ["take", "do", "make"], 0, "take a photo."),
    ],
    [
      es(ch("«Hacer un pastel»:", ["make a cake", "do a cake", "take a cake"], 0, "make a cake."), "Para crear cosas (comida, pasteles) se usa make."),
      ch("We ___ fun at the party.", ["had", "made", "did"], 0, "have fun."),
      ch("I ___ a mistake in the test.", ["made", "did", "had"], 0, "make a mistake."),
      ch("He ___ the guitar in a band.", ["plays", "does", "makes"], 0, "play the guitar."),
      ch("I ___ the bus to school.", ["take", "make", "do"], 0, "take the bus."),
    ],
    [
      gap("I", "exercise three times a week.", ["do"], "do exercise."),
      gap("It's easy to", "friends at a new school.", ["make"], "make friends."),
      tr("Use 'make' or 'do'.", "I ___ the dishes after dinner.", ["I do the dishes after dinner", "I do the dishes after dinner."], "do the dishes."),
      dict(X("06", "dict"), ["After school I do my homework"]),
      say("I do my homework, then I play games.", "do my: quick and smooth."),
    ],
    [
      fix(["I always", "make", "my homework at night."], 1, ["do"], "do homework."),
      es(fix(["We", "took", "a cake for her birthday."], 1, ["made"], "make a cake."), "Make = crear o preparar algo."),
      fix(["Can you", "do", "a photo of us?"], 1, ["take"], "take a photo."),
      ch("Which is wrong?", ["I do a mistake.", "I make a mistake.", "I make friends."], 0, "make a mistake."),
      ord("Do you play any sports?", "play + sports."),
    ],
    [
      ctx("Friend: 'What do you do after school?'", "Best answer:", ["I do my homework and play football.", "I make my homework and play football.", "I do my homework and take football."], 0, "do homework · play football."),
      ch("At a party:", ["We're having so much fun!", "We're making so much fun!", "We're doing so much fun!"], 0, "have fun."),
      ch("Explain a mistake:", ["Sorry, I made a mistake.", "Sorry, I did a mistake.", "Sorry, I had a mistake."], 0, "make a mistake."),
      ch("Help at home:", ["I make my bed and do the dishes.", "I do my bed and make the dishes.", "I take my bed."], 0, "make the bed · do the dishes."),
      say("Let's take a photo! Say cheese!", "Let's TAKE a PHOto."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about your week (20 words or more). Use do, make, have, take and play with the right nouns." },
      { universe: "screens", text: "Write about a vlog idea (20 words or more): what do you do, make, take and play in it?" },
    ],
    minWords: 20,
    checks: [
      { label: "do + homework / exercise / the dishes", pattern: "\\b(do|does|did|doing)\\s+(my\\s+|the\\s+|some\\s+)?(homework|exercise|dishes|housework)\\b", min: 1 },
      { label: "make + noun", pattern: "\\b(make|makes|made|making)\\s+(a\\s+|my\\s+|the\\s+|new\\s+)?(cake|dinner|lunch|breakfast|friends|mistake|bed|video|pizza|plan)s?\\b", min: 1 },
      { label: "take / have / play + noun", pattern: "\\b(take|takes|took|have|has|had|play|plays|played)\\s+(a\\s+|the\\s+|some\\s+)?(photos?|bus|shower|fun|breakfast|lunch|football|games|guitar|basketball|piano)\\b", min: 2 },
    ],
    rubric: ["I used do for homework and exercise.", "I used make for food and friends.", "I used take, have and play correctly."],
    model: "On Monday I do my homework and I play football. On Wednesday I make dinner with my dad. On Saturday I take the bus to the park and take photos. We always have fun.",
  },
};

const literalPhrasal: NodePractice = {
  nodeId: "a1p.literal-physical-phrasal-verbs",
  explain: "Some verbs use a small word (up, down, in, out, on, off) to show movement. They're easy because the meaning is clear: stand up, sit down, come in, go out, get up, put on (clothes), take off (clothes), turn on / turn off (lights, TV), pick up (from the floor), take out (from a bag).",
  pattern: ["stand up ↑ · sit down ↓", "come in · go out", "put on / take off (clothes)", "turn on / turn off (TV, lights) · pick up · take out"],
  es: "Turn on = encender, turn off = apagar. Put on = ponerse (ropa), take off = quitarse.",
  steps: [
    [
      heard(X("07", "notice"), "What should everyone do first?", ["Stand up", "Sit down", "Go out"], 0, "'Stand up, everyone.'"),
      heard(X("07", "notice"), "What should they take out?", ["Their notebooks", "Their phones", "Their bags"], 0, "'Take out your notebooks.'"),
      heard(X("07", "notice"), "What should they do with their phones?", ["Turn them off", "Turn them on", "Pick them up"], 0, "'Turn off your phones.'"),
      ch("It's cold. ___ your jacket.", ["Put on", "Take off", "Turn on"], 0, "put on = wear."),
      ch("It's dark. Please ___ the light.", ["turn on", "turn off", "put on"], 0, "turn on = start."),
    ],
    [
      es(ch("«Apaga la televisión»:", ["Turn off the TV.", "Turn on the TV.", "Take off the TV."], 0, "apagar = turn off."), "Turn off = apagar · turn on = encender."),
      ch("The opposite of 'stand up' is:", ["sit down", "get up", "come in"], 0, "stand up ↔ sit down."),
      ch("You're hot. ___ your hoodie.", ["Take off", "Put on", "Pick up"], 0, "take off = remove."),
      ch("Someone knocks. You say:", ["Come in!", "Go out!", "Get up!"], 0, "come in = enter."),
      ch("Your pen is on the floor. ___ it ___.", ["Pick … up", "Take … off", "Turn … on"], 0, "pick up."),
    ],
    [
      gap("Please sit", ".", ["down"], "sit down."),
      gap("I get", "at six every morning.", ["up"], "get up."),
      tr("Write the opposite.", "Turn on the computer.", ["Turn off the computer", "Turn off the computer."], "on ↔ off."),
      dict(X("07", "dict"), ["Pick up the paper on the floor"]),
      say("Stand up, then sit down.", "Stress the small word: stand UP, sit DOWN."),
    ],
    [
      fix(["It's hot. I'm going to", "put on", "my jacket."], 1, ["take off"], "Hot → take off."),
      fix(["Please", "turn on", "your phones in the exam."], 1, ["turn off"], "Exam → turn off."),
      fix(["The teacher is here. Please", "stand down", "now."], 1, ["stand up"], "stand up."),
      ch("Which is wrong?", ["Open the light, please.", "Turn on the light, please.", "Switch on the light, please."], 0, "turn on the light."),
      ord("Take out your books, please.", "take out + thing."),
    ],
    [
      ctx("You go into a cold house.", "Your mum says:", ["Put on a sweater.", "Take off a sweater.", "Turn off a sweater."], 0, "Cold → put on."),
      ctx("Visitors arrive at your door.", "Best thing to say:", ["Hi! Come in, please.", "Hi! Go out, please.", "Hi! Get in out."], 0, "come in."),
      ch("Leaving the classroom, the teacher says:", ["Turn off the lights, please.", "Open off the lights, please.", "Close the lights, please."], 0, "turn off."),
      ch("Your little brother's toys are on the floor:", ["Pick up your toys, please.", "Pick your toys up the floor.", "Take on your toys."], 0, "pick up."),
      say("Please take off your shoes and come in.", "take OFF, come IN."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe your morning with movement verbs (20 words or more): get up, put on, turn off, go out…" },
      { universe: "science", text: "Write five instructions for a science lab (20 words or more). Use put on, take off, turn on, turn off, pick up." },
    ],
    minWords: 20,
    checks: [
      { label: "Phrasal verbs (up, down, on, off, in, out)", pattern: "\\b(stand|sit|get|put|take|turn|pick|come|go|switch)s?\\s+(\\w+\\s+)?(up|down|on|off|in|out)\\b", min: 3 },
    ],
    rubric: ["I used verbs with up, down, on, off, in, out.", "I used them for real movement.", "I used turn on / off for machines."],
    model: "I get up at six and turn off my alarm. I put on my uniform and go out at half past six. At school we sit down, take out our books and turn off our phones.",
  },
};

const chunks: NodePractice = {
  nodeId: "a1p.everyday-social-chunks",
  explain: "Learn these short phrases as one piece. Greetings: Hi! How are you? I'm fine, thanks. And you? Not bad. Meeting: Nice to meet you. Leaving: See you later! Have a nice day! Bye! Polite: Excuse me. Sorry. Can you repeat that, please? Thank you so much. You're welcome.",
  pattern: ["How are you? → Fine, thanks. And you?", "Nice to meet you. → Nice to meet you too.", "Thank you. → You're welcome.", "Excuse me (to ask) · Sorry (a mistake)"],
  es: "Excuse me = disculpe (para pedir algo). Sorry = perdón (por un error). Y «de nada» = You're welcome.",
  steps: [
    [
      heard(X("08", "notice"), "What is the answer to 'How are you?'", ["I'm fine, thanks", "Nice to meet you", "You're welcome"], 0, "'I'm fine, thanks.'"),
      heard(X("08", "notice"), "What is the answer to 'Thank you so much'?", ["You're welcome", "See you later", "Not bad"], 0, "'You're welcome.'"),
      heard(X("08", "notice"), "Which phrase asks someone to say it again?", ["Can you repeat that, please?", "Have a nice day, everyone!", "Excuse me, where is it?"], 0, "repeat = say again."),
      ch("You meet someone new. You say:", ["Nice to meet you.", "See you later.", "You're welcome."], 0, "First meeting."),
      ch("You leave school. You say to a friend:", ["See you tomorrow!", "Nice to meet you!", "Excuse me!"], 0, "Leaving."),
    ],
    [
      es(ch("«De nada»:", ["You're welcome.", "Of nothing.", "For nothing."], 0, "de nada = you're welcome."), "«De nada» = You're welcome, no 'of nothing'."),
      ch("You want to ask a stranger a question. Start with:", ["Excuse me, …", "Sorry, …", "Bye, …"], 0, "excuse me = to get attention."),
      ch("You step on someone's foot. You say:", ["Sorry!", "Excuse me?", "Welcome!"], 0, "A mistake → sorry."),
      ch("'How are you?' — 'Not bad, ___?'", ["and you", "and your", "you too"], 0, "And you?"),
      ch("'Nice to meet you.' — 'Nice to meet you ___.'", ["too", "also", "to"], 0, "too."),
    ],
    [
      gap("Thank you", "much!", ["so", "very"], "Thank you so much."),
      gap("Have a nice", "!", ["day", "weekend"], "Have a nice day!"),
      tr("Make it more polite.", "Repeat.", ["Can you repeat that, please?", "Can you repeat, please?", "Could you repeat that, please?", "Can you repeat that please?"], "Can you …, please?"),
      dict(X("08", "dict"), ["Nice to meet you. See you later!", "Nice to meet you see you later"]),
      say("Hi! How are you? I'm fine, thanks. And you?", "Friendly rising tone on 'And you?'"),
    ],
    [
      fix(["'Thank you!' 'You", "are welcomed", "!'"], 1, ["'re welcome", "are welcome"], "You're welcome."),
      fix(["Nice to", "know", "you!"], 1, ["meet"], "Nice to meet you."),
      fix(["Hello!", "Sorry,", "where is the bank?"], 1, ["Excuse me,", "Excuse me"], "To ask → excuse me."),
      ch("Which is wrong?", ["I'm fine, thanks. And your?", "I'm fine, thanks. And you?", "Not bad, thanks."], 0, "And you?"),
      ord("Can you speak more slowly, please?", "Can you + verb …, please?"),
    ],
    [
      ctx("A new classmate: 'Hi, I'm Valeria.'", "Best answer:", ["Hi, Valeria! I'm Juan. Nice to meet you.", "Hi, Valeria! I'm Juan. You're welcome.", "Hi, Valeria! I'm Juan. See you later."], 0, "Introduce + nice to meet you."),
      ctx("The teacher speaks very fast.", "Best thing to say:", ["Sorry, can you repeat that, please?", "What?! I don't understand you!", "Repeat! Say it again, now!"], 0, "Polite request."),
      ctx("A friend helps you with homework.", "You say:", ["Thanks so much!", "You're welcome!", "Excuse me!"], 0, "Thanks."),
      ctx("Friday afternoon, you leave a shop.", "The shop assistant says 'Have a nice weekend!'. You answer:", ["Thanks, you too!", "You're welcome!", "Nice to meet you!"], 0, "You too."),
      say("Excuse me, can you help me, please?", "Polite and soft."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short dialogue (20 words or more): you meet a new student, say hello, ask how they are, and say goodbye." },
      { universe: "screens", text: "Write a short dialogue in a shop (20 words or more). Use excuse me, please, thank you and you're welcome." },
    ],
    minWords: 20,
    checks: [
      { label: "Social phrases", pattern: "\\b(how are you|fine, thanks|not bad|nice to meet you|see you|have a nice|excuse me|sorry|thank you|thanks|you're welcome|bye)\\b", min: 4 },
    ],
    rubric: ["I greeted and said goodbye.", "I used polite phrases (please, thank you, excuse me).", "I answered 'How are you?' and asked back."],
    model: "A: Hi! I'm Laura. B: Hi, Laura! I'm Sam. Nice to meet you. A: Nice to meet you too. How are you? B: I'm fine, thanks. And you? A: Not bad! See you later! B: Bye!",
  },
};

export const A1P_WORDS: NodePractice[] = [numbers, family, homeSchool, foodRoutine, cityWeather, verbNoun, literalPhrasal, chunks];
