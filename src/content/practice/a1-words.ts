/* A1 Words. Five steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, es, fix, gap, heard, ord, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/a1w-${n}-${k}.mp3`;

export const A1_WORDS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "What time is it? It's eight o'clock. The bus is at half past eight. Lunch is at twelve thirty. My phone number is three one five, four two six, seven nine eight zero." },
  { file: X("01", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "The bus is at half past eight." },
  { file: X("02", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Today is Monday, the third of March. It's sunny and hot. My birthday is in July. On Saturdays it's often rainy and cold, so we stay at home." },
  { file: X("02", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "My birthday is in July." },
  { file: X("03", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "Welcome to my house. This is the living room. There's a sofa and a TV. The kitchen is next to the living room. Upstairs there are two bedrooms and a bathroom." },
  { file: X("03", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "The kitchen is next to the living room." },
  { file: X("04", "notice"), voice: "bIHbv24MWmeRgasZH58o", script: "On Mondays I have maths, English and science. My favourite subject is art. We have PE on Wednesdays. I don't like history. School finishes at two o'clock." },
  { file: X("04", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "My favourite subject is art." },
  { file: X("05", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Today I'm wearing jeans, a blue T-shirt and white trainers. It's cold, so I have a jacket too. My sister is wearing a dress and a hat." },
  { file: X("05", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "My sister is wearing a dress and a hat." },
  { file: X("06", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "I play basketball on Tuesdays and I go swimming on Saturdays. My brother plays the guitar. In my free time I read comics and I draw. Do you like sport?" },
  { file: X("06", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "I go swimming on Saturdays." },
];

const numbersTime: NodePractice = {
  nodeId: "a1.numbers-to-100-and-the-time",
  explain: "Count to 100: twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety, a hundred. Say the time: It's eight o'clock. It's half past eight (8:30). It's quarter past nine (9:15). It's twelve thirty (12:30).",
  pattern: ["20 twenty · 30 thirty · 40 forty · 50 fifty", "60 sixty · 70 seventy · 80 eighty · 90 ninety · 100 a hundred", "21 twenty-one · 35 thirty-five", "What time is it? It's eight o'clock. · half past eight · quarter past nine"],
  es: "Ojo: forty no lleva u (no 'fourty'). Half past eight = ocho y media.",
  steps: [
    [
      heard(X("01", "notice"), "What time is it now?", ["8:00", "8:30", "12:30"], 0, "'It's eight o'clock.'"),
      heard(X("01", "notice"), "When is the bus?", ["8:30", "8:00", "12:30"], 0, "'half past eight'"),
      heard(X("01", "notice"), "When is lunch?", ["12:30", "2:30", "8:30"], 0, "'twelve thirty'"),
      ch("40 =", ["forty", "fourty", "fourteen"], 0, "40 = forty (no u)."),
      ch("90 =", ["ninety", "nineteen", "ninty"], 0, "90 = ninety."),
    ],
    [
      ch("7:30 =", ["half past seven", "half past six", "seven past half"], 0, "7:30 = half past seven."),
      ch("3:15 =", ["quarter past three", "quarter to three", "three past quarter"], 0, "3:15 = quarter past three."),
      es(ch("15 or 50? 'fifty' =", ["50", "15", "5"], 0, "fifty = 50, fifteen = 15."), "fifteen = 15, fifty = 50."),
      ch("25 =", ["twenty-five", "twenty five-teen", "two-five"], 0, "25 = twenty-five."),
      ch("Which question asks the time?", ["What time is it?", "How time is it?", "What hour it is?"], 0, "What time is it?"),
    ],
    [
      gap("It's ten", ". (10:00)", ["o'clock"], "10:00 = ten o'clock."),
      gap("It's half", "four. (4:30)", ["past"], "4:30 = half past four."),
      tr("Write the number in words.", "68", ["sixty-eight", "sixty eight"], "68 = sixty-eight."),
      dict(X("01", "dict"), ["The bus is at half past eight", "The bus is at 8:30"]),
      say("It's half past seven. School starts at eight o'clock.", "Say times clearly."),
    ],
    [
      es(fix(["I'm", "fourty", "years old, said my mum."], 1, ["forty"], "40 = forty."), "forty sin u."),
      fix(["It's", "eight hours.", "Time for school!"], 1, ["eight o'clock."], "8:00 = eight o'clock."),
      fix(["It's half", "of", "nine."], 1, ["past"], "half past nine."),
      ord("What time is it?", "What time + is it?"),
      ord("The film starts at nine o'clock.", "The film starts + at nine o'clock."),
    ],
    [
      ctx("A tourist asks: 'What time is it, please?' It's 2:30.", "Best answer:", ["It's half past two.", "It's two and half.", "Are two thirty."], 0, "half past two (or two thirty)."),
      ctx("You tell a friend the match is at 4:15.", "Best sentence:", ["The match is at quarter past four.", "The match is in quarter four.", "The match is at four and quarter."], 0, "quarter past four."),
      ch("Your grandma is 80. She is ___.", ["eighty", "eighteen", "eigthy"], 0, "80 = eighty."),
      ch("Which is correct?", ["at seven o'clock", "in seven o'clock", "on seven o'clock"], 0, "at + time."),
      say("My phone number is three one five, four two six …", "Say a number one digit at a time."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write your school timetable for one day with times (20 words or more): School starts at …, Break is at …" },
      { universe: "science", text: "Write five facts with big numbers (20 words or more): how many days, legs, students, kilometres …" },
    ],
    minWords: 20,
    checks: [
      { label: "Times (o'clock, half past, quarter past, at 7:30)", pattern: "o'clock|half past|quarter (past|to)|\\bat\\s+\\d{1,2}(:\\d{2})?", min: 2 },
    ],
    rubric: ["I wrote times with at.", "I used o'clock or half past.", "I spelled forty without u."],
    model: "School starts at seven o'clock. Break is at half past nine. Lunch is at twelve thirty. School finishes at two o'clock. I get home at quarter past two.",
  },
};

const daysWeather: NodePractice = {
  nodeId: "a1.days-months-and-weather",
  explain: "Days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. Months: January to December. Use on with days (on Monday) and in with months (in July). Weather: It's sunny, rainy, cloudy, windy, hot, cold.",
  pattern: ["Monday · Tuesday · Wednesday · Thursday · Friday · Saturday · Sunday", "January … December", "on Monday · in July", "It's sunny · rainy · cloudy · windy · hot · cold"],
  es: "Días y meses van con mayúscula: Monday, July. on + día, in + mes.",
  steps: [
    [
      heard(X("02", "notice"), "What day is it today?", ["Monday", "Saturday", "Sunday"], 0, "'Today is Monday.'"),
      heard(X("02", "notice"), "What's the weather like today?", ["Sunny and hot", "Rainy and cold", "Windy"], 0, "'It's sunny and hot.'"),
      heard(X("02", "notice"), "When is the birthday?", ["In July", "In March", "On Saturday"], 0, "'My birthday is in July.'"),
      ch("The day after Monday is ___.", ["Tuesday", "Thursday", "Sunday"], 0, "Monday, Tuesday."),
      ch("The month after March is ___.", ["April", "May", "February"], 0, "March, April."),
    ],
    [
      es(ch("Which is correct?", ["on Friday", "in Friday", "at Friday"], 0, "on + day."), "Con días: on Friday."),
      es(ch("Which is correct?", ["in December", "on December", "at December"], 0, "in + month."), "Con meses: in December."),
      ch("There is water from the sky. It's ___.", ["rainy", "sunny", "windy"], 0, "Rain → rainy."),
      ch("Which is the weekend?", ["Saturday and Sunday", "Friday and Monday", "Sunday and Monday"], 0, "The weekend = Saturday and Sunday."),
      ch("Which is spelled correctly?", ["Wednesday", "Wensday", "Wednsday"], 0, "Wednesday (silent d)."),
    ],
    [
      gap("I play football", "Saturdays.", ["on"], "on + day."),
      gap("It's very", "today. Take a jacket!", ["cold", "windy", "rainy", "cloudy"], "Jacket → cold weather."),
      tr("Write the month after this one.", "October", ["November"], "October → November."),
      dict(X("02", "dict"), ["My birthday is in July"]),
      say("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.", "Wednesday: WENZ-day."),
    ],
    [
      fix(["My birthday is", "on", "May."], 1, ["in"], "in + month."),
      es(fix(["See you", "in", "Tuesday!"], 1, ["on"], "on + day."), "on Tuesday."),
      fix(["It's", "rain", "today. Take an umbrella."], 1, ["rainy", "raining"], "It's rainy (or It's raining)."),
      ord("We don't go to school on Sundays.", "We don't go to school + on Sundays."),
      ord("What's the weather like today?", "What's the weather like + today?"),
    ],
    [
      ctx("A friend asks: 'When is your birthday?' It's the 10th of August.", "Best answer:", ["It's in August.", "It's on August.", "It's at August."], 0, "in August."),
      ctx("It is hot and there are no clouds.", "Best sentence:", ["It's sunny.", "It's cloudy.", "It's snowy."], 0, "No clouds, hot → sunny."),
      ctx("You want to know about the weather.", "Best question:", ["What's the weather like?", "How is the weather like?", "What weather is?"], 0, "What's the weather like?"),
      ch("Which is correct?", ["See you on Friday!", "See you in Friday!", "See you friday!"], 0, "on Friday (capital F)."),
      say("Today is Thursday. It's cloudy and windy.", "Say today's day and weather."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write your week (20 words or more): what do you do on Monday, Wednesday and Saturday? What's the weather like?" },
      { universe: "science", text: "Write a weather report for three days (20 words or more): On Monday it's sunny …" },
    ],
    minWords: 20,
    checks: [
      { label: "Days with on", pattern: "\\bon (monday|tuesday|wednesday|thursday|friday|saturday|sunday)s?\\b", min: 2 },
      { label: "Weather words", pattern: "\\b(sunny|rainy|cloudy|windy|hot|cold|warm|snowy|raining)\\b", min: 1 },
    ],
    rubric: ["I used on with days.", "I started days and months with a capital.", "I used weather words."],
    model: "On Monday I go to school. It's sunny and hot. On Wednesday I have football practice. On Saturday it's often rainy, so I stay at home and play games.",
  },
};

const house: NodePractice = {
  nodeId: "a1.house-and-rooms",
  explain: "Rooms: living room, kitchen, bedroom, bathroom, dining room, garden. Things: sofa, bed, table, chair, TV, fridge, shower, lamp. Places: upstairs, downstairs, next to, between.",
  pattern: ["living room · kitchen · bedroom · bathroom · garden", "sofa · bed · table · fridge · shower · lamp", "upstairs · downstairs", "next to · between · in front of"],
  es: "living room = sala, kitchen = cocina, upstairs = arriba, downstairs = abajo.",
  steps: [
    [
      heard(X("03", "notice"), "What is in the living room?", ["A sofa and a TV", "A bed and a lamp", "A fridge"], 0, "'There's a sofa and a TV.'"),
      heard(X("03", "notice"), "Where is the kitchen?", ["Next to the living room", "Upstairs", "In the garden"], 0, "'The kitchen is next to the living room.'"),
      heard(X("03", "notice"), "How many bedrooms are upstairs?", ["Two", "One", "Three"], 0, "'two bedrooms and a bathroom'"),
      ch("You cook in the ___.", ["kitchen", "bedroom", "bathroom"], 0, "Cook → kitchen."),
      ch("You sleep in the ___.", ["bedroom", "kitchen", "garden"], 0, "Sleep → bedroom."),
    ],
    [
      ch("The milk is in the ___.", ["fridge", "shower", "sofa"], 0, "Cold food → fridge."),
      ch("You have a shower in the ___.", ["bathroom", "living room", "dining room"], 0, "shower → bathroom."),
      es(ch("Your bedroom is on the second floor. It's ___.", ["upstairs", "downstairs", "outside"], 0, "Higher floor → upstairs."), "upstairs = arriba."),
      ch("You watch TV on the ___.", ["sofa", "fridge", "shower"], 0, "Sit on the sofa."),
      ch("Flowers and trees are in the ___.", ["garden", "kitchen", "bathroom"], 0, "garden."),
    ],
    [
      gap("We eat dinner in the", "room.", ["dining", "living"], "dining room (or living room)."),
      gap("The lamp is", "the bed and the desk.", ["between"], "between = in the middle of two things."),
      tr("Write the opposite.", "upstairs", ["downstairs"], "up ↔ down."),
      dict(X("03", "dict"), ["The kitchen is next to the living room"]),
      say("My bedroom is upstairs, next to the bathroom.", "Describe your house."),
    ],
    [
      fix(["I sleep in the", "kitchen."], 1, ["bedroom."], "Sleep → bedroom."),
      fix(["The sofa is", "next", "the window."], 1, ["next to"], "next to."),
      es(fix(["The TV is in the", "living."], 1, ["living room."], "living room (two words)."), "Sala = living room."),
      ord("There are three bedrooms upstairs.", "There are + three bedrooms + upstairs."),
      ord("The bathroom is next to my bedroom.", "The bathroom + is next to + my bedroom."),
    ],
    [
      ctx("A visitor asks: 'Where's the bathroom, please?'", "Best answer:", ["It's upstairs, next to my bedroom.", "It's a bathroom.", "Yes, it is."], 0, "Give the place."),
      ctx("You describe your favourite room. You read and sleep there.", "Best sentence:", ["My favourite room is my bedroom.", "My favourite room is the kitchen.", "My favourite room is the fridge."], 0, "Read and sleep → bedroom."),
      ch("Which is NOT a room?", ["sofa", "kitchen", "bathroom"], 0, "A sofa is furniture."),
      ch("Which is correct?", ["between the bed and the desk", "between of the bed and the desk", "between the bed or the desk"], 0, "between A and B."),
      say("In my house there's a small kitchen and a big living room.", "Describe your house."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe your house or flat (20 words or more). What rooms are there? What's in your bedroom?" },
      { universe: "arts", text: "Design your dream house (20 words or more). What rooms and things are there?" },
    ],
    minWords: 20,
    checks: [
      { label: "Rooms", pattern: "\\b(living room|kitchen|bedrooms?|bathrooms?|dining room|garden)\\b", min: 3 },
      { label: "Place words (next to, between, upstairs …)", pattern: "\\b(next to|between|upstairs|downstairs|in front of|behind)\\b", min: 1 },
    ],
    rubric: ["I named three rooms.", "I used next to, between, upstairs or downstairs.", "I used there is and there are."],
    model: "My house has a kitchen, a living room and two bedrooms. My bedroom is upstairs, next to the bathroom. There's a bed, a desk and a lamp in my bedroom.",
  },
};

const school: NodePractice = {
  nodeId: "a1.school-subjects-and-the-school-day",
  explain: "School subjects: maths, English, science, history, geography, art, music, PE (sport), IT (computers). Talk about your day: I have maths on Mondays. My favourite subject is art. School starts at seven.",
  pattern: ["maths · English · science · history · geography", "art · music · PE · IT", "I have maths on Mondays.", "My favourite subject is …"],
  es: "PE = educación física. Los idiomas llevan mayúscula: English, Spanish.",
  steps: [
    [
      heard(X("04", "notice"), "What subjects are on Mondays?", ["Maths, English and science", "Art and music", "PE and history"], 0, "'On Mondays I have maths, English and science.'"),
      heard(X("04", "notice"), "What is the favourite subject?", ["Art", "History", "Science"], 0, "'My favourite subject is art.'"),
      heard(X("04", "notice"), "When do they have PE?", ["On Wednesdays", "On Mondays", "Every day"], 0, "'We have PE on Wednesdays.'"),
      ch("You learn about numbers in ___.", ["maths", "art", "history"], 0, "Numbers → maths."),
      ch("You play sport in ___.", ["PE", "IT", "geography"], 0, "Sport → PE."),
    ],
    [
      ch("You learn about the past in ___.", ["history", "music", "science"], 0, "The past → history."),
      ch("You learn about countries and maps in ___.", ["geography", "maths", "music"], 0, "Maps → geography."),
      es(ch("Which is correct?", ["I like English.", "I like english.", "I like the English."], 0, "English has a capital, no 'the'."), "English con mayúscula y sin 'the'."),
      ch("You use computers in ___.", ["IT", "PE", "art"], 0, "Computers → IT."),
      ch("Which question is correct?", ["What's your favourite subject?", "Which is you favourite subject?", "What your favourite subject?"], 0, "What's your favourite subject?"),
    ],
    [
      gap("My favourite", "is music.", ["subject"], "My favourite subject is …"),
      gap("We have science", "Thursdays.", ["on"], "on + day."),
      tr("Write it with 'favourite'.", "I like art the most.", ["My favourite subject is art"], "My favourite subject is art."),
      dict(X("04", "dict"), ["My favourite subject is art"]),
      say("I have maths, English and PE on Mondays.", "Your own Monday."),
    ],
    [
      fix(["I", "have", "the maths on Monday."], 2, ["maths on Monday."], "No the before subjects."),
      es(fix(["We learn about maps in", "music."], 1, ["geography."], "Maps → geography."), "Mapas y países = geography."),
      fix(["We have", "Educación Física", "on Fridays."], 1, ["PE"], "PE in English."),
      ord("School starts at seven o'clock.", "School starts + at seven o'clock."),
      ord("I don't like history.", "I + don't like + history."),
    ],
    [
      ctx("A new student asks: 'What's your favourite subject?'", "Best answer:", ["My favourite subject is science.", "My favourite is the science subject.", "Yes, science."], 0, "My favourite subject is …"),
      ctx("You have music twice a week, on Tuesday and Thursday.", "Best sentence:", ["I have music on Tuesdays and Thursdays.", "I have music in Tuesday and Thursday.", "I have the music on Tuesday."], 0, "on Tuesdays and Thursdays."),
      ch("Which is a subject?", ["geography", "breakfast", "garden"], 0, "geography."),
      ch("Which is correct?", ["We don't have school on Sundays.", "We don't have the school in Sundays.", "We not have school on Sundays."], 0, "don't have + on Sundays."),
      say("I love PE, but I don't like maths.", "Your favourite and least favourite."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about your school week (20 words or more): your subjects, your favourite and why." },
      { universe: "futures", text: "Invent a new school subject (20 words or more). What is it? When do you have it? Why is it good?" },
    ],
    minWords: 20,
    checks: [
      { label: "Subjects", pattern: "\\b(maths|math|English|science|history|geography|art|music|PE|IT|Spanish)\\b", min: 3 },
      { label: "favourite", pattern: "\\bfavou?rite\\b", min: 1 },
    ],
    rubric: ["I named three subjects.", "I wrote my favourite subject.", "I used on with days."],
    model: "I have maths, English and science on Mondays. On Wednesdays we have PE and music. My favourite subject is music because I love singing.",
  },
};

const clothes: NodePractice = {
  nodeId: "a1.clothes",
  explain: "Clothes: T-shirt, shirt, jumper, jacket, jeans, trousers, shorts, skirt, dress, shoes, trainers, socks, hat, cap. Say what you're wearing now: I'm wearing jeans and a T-shirt.",
  pattern: ["T-shirt · shirt · jumper · jacket · dress · skirt", "jeans · trousers · shorts (always plural)", "shoes · trainers · socks · hat · cap", "I'm wearing …"],
  es: "jeans, trousers, shorts siempre van en plural: My jeans are blue.",
  steps: [
    [
      heard(X("05", "notice"), "What colour is the T-shirt?", ["Blue", "White", "Black"], 0, "'a blue T-shirt'"),
      heard(X("05", "notice"), "Why does the speaker have a jacket?", ["It's cold", "It's rainy", "It's a party"], 0, "'It's cold, so I have a jacket too.'"),
      heard(X("05", "notice"), "What is the sister wearing?", ["A dress and a hat", "Jeans and trainers", "A jacket"], 0, "'a dress and a hat'"),
      ch("You wear ___ on your feet.", ["shoes", "a hat", "a jumper"], 0, "Feet → shoes."),
      ch("You wear a ___ on your head.", ["cap", "sock", "skirt"], 0, "Head → cap or hat."),
    ],
    [
      es(ch("Which is correct?", ["My jeans are new.", "My jeans is new.", "My jean is new."], 0, "jeans is plural."), "jeans es plural: are."),
      ch("It's hot. You wear ___.", ["shorts and a T-shirt", "a jacket and a jumper", "a hat and a coat"], 0, "Hot → shorts and a T-shirt."),
      ch("It's cold. You wear a ___.", ["jumper", "pair of shorts", "swimsuit"], 0, "Cold → jumper."),
      ch("Which is correct?", ["I'm wearing a red cap.", "I'm wearing a cap red.", "I wear now a red cap."], 0, "I'm wearing + a red cap."),
      ch("Which do you wear for sport?", ["trainers", "a dress", "a shirt and tie"], 0, "Trainers for sport."),
    ],
    [
      gap("Today I'm", "jeans and a jumper.", ["wearing"], "I'm wearing …"),
      gap("My", "are black. (for your legs, made of denim)", ["jeans"], "jeans."),
      tr("Make it plural.", "a sock", ["two socks", "socks"], "sock → socks."),
      dict(X("05", "dict"), ["My sister is wearing a dress and a hat"]),
      say("Today I'm wearing a blue T-shirt and black jeans.", "Say what you're wearing."),
    ],
    [
      es(fix(["My trousers", "is", "grey."], 1, ["are"], "trousers is plural."), "trousers es plural: are."),
      fix(["I'm", "wear", "a jacket."], 1, ["wearing"], "I'm wearing."),
      fix(["I wear my", "hat", "on my feet."], 1, ["shoes", "socks", "trainers"], "Feet → shoes, socks or trainers."),
      ord("I'm wearing a white shirt.", "I'm wearing + a white shirt."),
      ord("My new trainers are green.", "My new trainers + are + green."),
    ],
    [
      ctx("Your friend asks about your school uniform. It's a white shirt and grey trousers.", "Best answer:", ["I wear a white shirt and grey trousers.", "I wear a shirt white and trousers grey.", "I wear white shirt and grey trouser."], 0, "Colour first; trousers is plural."),
      ctx("It's raining and cold.", "Best advice:", ["Wear a jacket!", "Wear shorts!", "Wear a swimsuit!"], 0, "Cold and rain → jacket."),
      ch("Which is correct?", ["These shoes are nice.", "This shoes is nice.", "These shoe are nice."], 0, "shoes → these … are."),
      ch("Which is NOT clothes?", ["a sofa", "a skirt", "a jumper"], 0, "A sofa is furniture."),
      say("What are you wearing today?", "Ask a friend."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write what you and two friends are wearing today (20 words or more)." },
      { universe: "arts", text: "Design clothes for a game character (20 words or more). What are they wearing? What colours?" },
    ],
    minWords: 20,
    checks: [
      { label: "Clothes words", pattern: "\\b(t-shirts?|shirts?|jumpers?|jackets?|jeans|trousers|shorts|skirts?|dress(es)?|shoes|trainers|socks|hats?|caps?|coats?|uniform)\\b", min: 3 },
      { label: "wearing", pattern: "\\bwearing\\b", min: 1 },
    ],
    rubric: ["I named three clothes.", "I wrote jeans and trousers as plural.", "I put the colour before the thing."],
    model: "Today I'm wearing black jeans, a red T-shirt and white trainers. My friend Sara is wearing a yellow dress and a hat. Tom is wearing shorts and a cap.",
  },
};

const sports: NodePractice = {
  nodeId: "a1.sports-and-hobbies",
  explain: "Sports and hobbies: play football, basketball, tennis, video games, the guitar; go swimming, go cycling; do karate; read comics, draw, dance, sing. Say how often: on Saturdays, every day, after school.",
  pattern: ["play football · basketball · tennis · video games", "play the guitar · the piano", "go swimming · go cycling · go skating", "do karate · do gymnastics", "read · draw · dance · sing"],
  es: "play para deportes con pelota y juegos; go + -ing para swimming, cycling; do para karate. Instrumentos: play the guitar.",
  steps: [
    [
      heard(X("06", "notice"), "When does the speaker play basketball?", ["On Tuesdays", "On Saturdays", "Every day"], 0, "'I play basketball on Tuesdays.'"),
      heard(X("06", "notice"), "What does the speaker do on Saturdays?", ["Goes swimming", "Plays the guitar", "Draws"], 0, "'I go swimming on Saturdays.'"),
      heard(X("06", "notice"), "What does the brother play?", ["The guitar", "Basketball", "Video games"], 0, "'My brother plays the guitar.'"),
      ch("I ___ football.", ["play", "go", "do"], 0, "play + ball sports."),
      ch("I ___ swimming.", ["go", "play", "do"], 0, "go + swimming."),
    ],
    [
      ch("She ___ karate.", ["does", "plays", "goes"], 0, "do karate."),
      es(ch("Which is correct?", ["I play the piano.", "I play piano the.", "I touch the piano."], 0, "play the + instrument."), "Tocar un instrumento = play the …"),
      ch("Which is correct?", ["We go cycling on Sundays.", "We play cycling on Sundays.", "We do cycle on Sundays."], 0, "go cycling."),
      ch("Which hobby is quiet?", ["reading", "playing drums", "football"], 0, "Reading is quiet."),
      ch("Do you like sport? Yes, I ___.", ["do", "like", "am"], 0, "Yes, I do."),
    ],
    [
      gap("I", "video games after school.", ["play"], "play video games."),
      gap("We go", "in the sea in summer.", ["swimming"], "go swimming."),
      tr("Use 'go'.", "I swim on Saturdays.", ["I go swimming on Saturdays"], "go swimming."),
      dict(X("06", "dict"), ["I go swimming on Saturdays"]),
      say("I play football and I go swimming.", "Your own sports."),
    ],
    [
      fix(["I", "do", "football every day."], 1, ["play"], "play football."),
      es(fix(["My sister plays", "guitar", "very well."], 1, ["the guitar"], "play the guitar."), "Con instrumentos: the guitar."),
      fix(["We", "play", "swimming on Mondays."], 1, ["go"], "go swimming."),
      ord("Do you play any sports?", "Do you play + any sports?"),
      ord("In my free time I draw and read.", "In my free time + I draw + and read."),
    ],
    [
      ctx("A friend asks: 'What do you do in your free time?'", "Best answer:", ["I play basketball and I read comics.", "I am free time.", "Yes, I do free time."], 0, "Say your hobbies."),
      ctx("You want to invite a friend to the pool.", "Best sentence:", ["Do you want to go swimming?", "Do you want to play swimming?", "Do you want to do swimming?"], 0, "go swimming."),
      ch("Which is correct?", ["He does karate.", "He plays karate.", "He goes karate."], 0, "do karate."),
      ch("Which is correct?", ["They play video games.", "They do video games.", "They go video games."], 0, "play video games."),
      say("What do you do in your free time?", "Ask a friend."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about your sports and hobbies (20 words or more). Use play, go and do, and say when." },
      { universe: "screens", text: "Write about your free time online and offline (20 words or more). Use play, go and do." },
    ],
    minWords: 20,
    checks: [
      { label: "play + sport, game or instrument", pattern: "\\bplay(s|ing)?\\s+(the\\s+)?\\w+", min: 1 },
      { label: "go + -ing", pattern: "\\bgo(es)?\\s+\\w+ing\\b", min: 1 },
    ],
    rubric: ["I used play, go and do correctly.", "I said when (on Saturdays, after school).", "I wrote the before instruments."],
    model: "I play football on Tuesdays and I go swimming on Saturdays. I do karate after school. In my free time I play the guitar and I draw.",
  },
};

export const A1_WORDS: NodePractice[] = [numbersTime, daysWeather, house, school, clothes, sports];
