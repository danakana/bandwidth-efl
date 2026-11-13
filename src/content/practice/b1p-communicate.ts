/* B1+ Communicate. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, ord, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/b1pc-${n}-${k}.mp3`;

export const B1P_COMMUNICATE_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "Cats and dogs make very different pets. Whereas dogs need a walk every day, cats are happy indoors. Dogs are usually more social; cats, on the other hand, are more independent. To make a cat happy, first, give it a quiet place to sleep. Once that's done, add a scratching post. Finally, play with it every evening." },
  { file: X("01", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "Whereas dogs need a walk every day, cats are happy indoors." },
  { file: X("02", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Good morning, everyone. Today I'm going to talk about my favourite hobby: rock climbing. First, I'll explain how I started. Then I'll show you some equipment. Finally, I'll give you some tips. So, let's begin. To sum up, climbing is hard, but it's the best way to feel free. Thank you for listening. Are there any questions?" },
  { file: X("02", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "Today I'm going to talk about my favourite hobby." },
  { file: X("03", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "Hi, sorry to bother you. Do you know if this bus goes to the city centre? And could you tell me how long the journey takes? Oh, and I was wondering whether I can pay with my card. Thanks so much!" },
  { file: X("03", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Do you know if this bus goes to the city centre?" },
  { file: X("04", "notice"), voice: "3f6pec3wODJsjTqtcNI2", script: "A good report has a clear structure. Start with a title. In the introduction, say what the report is about. Then use sections with headings, like Food, Prices and Service. At the end, give a recommendation: what should the reader do? For example: I recommend this café for students on a budget." },
  { file: X("04", "dict"), voice: "8DvnqWWA3WWXixOm7zQI", script: "I recommend this café for students on a budget." },
  { file: X("05", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Hello, Professor Ruiz. I was wondering if I could hand in my essay tomorrow instead of today. My grandmother was in hospital this week. Would it be possible to have one more day? I'd really appreciate it. Thank you for understanding." },
  { file: X("05", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "I was wondering if I could hand it in tomorrow." },
  { file: X("06", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "OK, so we need to choose a topic for the project. Ana, what do you think? That's a great idea. Can I add something? Maybe we could also make a video. Sorry, Tomás, go ahead, you were saying? Right, so let's vote. Does everyone agree?" },
  { file: X("06", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "What do you think, Sara? Can I add something?" },
];

const compare: NodePractice = {
  nodeId: "b1p.compare-and-contrast-describe-a-process",
  explain: "To compare and contrast, use whereas, while, on the other hand, both … and, neither … nor, and comparatives. 'Whereas dogs need a walk, cats are happy indoors.' 'Both are good pets.' To describe a process (how to do something), use sequence words: First, … Then / Next, … Once that's done, … After that, … Finally, … The passive is useful in processes too: The paper is cut, then it's folded. Keep each step short and clear.",
  pattern: ["Contrast: whereas / while · on the other hand · however · unlike", "Similarity: both … and · neither … nor · similarly", "Process: First, … Then / Next, … Once that's done, … After that, … Finally, …", "Process passive: The water is boiled. Then the tea is added."],
  steps: [
    [
      heard(X("01", "notice"), "What is the main difference between dogs and cats?", ["Dogs need a daily walk; cats are happy indoors.", "Cats need a daily walk; dogs are happy indoors.", "There is no real difference between the two pets."], 0, "'Whereas dogs need a walk every day, cats are happy indoors.'"),
      heard(X("01", "notice"), "How are cats described?", ["More independent", "More social", "More noisy"], 0, "'cats, on the other hand, are more independent'."),
      heard(X("01", "notice"), "What is the last step to make a cat happy?", ["Play with it every evening", "Add a scratching post", "Give it a quiet place"], 0, "'Finally, play with it every evening.'"),
      ch("'Whereas' is used to…", ["show a contrast", "give a reason", "add an example"], 0, "Contrast."),
      ch("Which word shows the last step?", ["Finally", "First", "Then"], 0, "Sequence."),
    ],
    [
      ch("Which sentence shows a similarity?", ["Both cities are near the sea.", "Whereas Lima is dry, Bogotá is rainy.", "Unlike Lima, Bogotá is cold."], 0, "both … and = similarity."),
      ch("'Once that's done' means…", ["after you finish that step", "only one time, not again", "when it's broken or finished"], 0, "Sequence."),
      ctx("A recipe: 'First, boil the water. Then add the pasta. Once it's soft, drain it.'", "When do you drain the pasta?", ["When it's soft", "Before you boil the water", "First"], 0, "Process order."),
      ch("Which sentence is a contrast?", ["My brother loves football, while I prefer basketball.", "My brother and I both love football and basketball.", "First, my brother plays football, then basketball."], 0, "while = contrast."),
      ch("'Neither cats nor dogs like loud noises' means…", ["Cats don't like them, and dogs don't like them.", "Only dogs like loud noises, not cats.", "Both cats and dogs love loud noises."], 0, "neither … nor = not either."),
    ],
    [
      gap("", "I love the beach, my sister prefers the mountains.", ["Whereas", "While"], "Contrast at the start."),
      gap("First, cut the vegetables.", "that's done, put them in the pan.", ["Once"], "Once that's done."),
      tr("Join with 'whereas'.", "Buses are cheap. Taxis are expensive.", ["Buses are cheap, whereas taxis are expensive", "Whereas buses are cheap, taxis are expensive"], "whereas + contrast."),
      dict(X("01", "dict"), ["Whereas dogs need a walk every day, cats are happy indoors", "Whereas dogs need a walk every day cats are happy indoors"]),
      say("First, boil the water. Then add the tea. Finally, wait three minutes.", "Pause after each sequence word."),
    ],
    [
      fix(["Whereas Bogotá is cold,", "Cartagena is cold too."], 1, ["Cartagena is hot."], "Whereas needs a contrast, not a similarity."),
      fix(["Both", "my sister or I", "like reggaeton."], 1, ["my sister and I"], "both … and."),
      fix(["Finally, wash your hands.", "Then,", "start cooking."], 0, ["First, wash your hands."], "The first step needs 'First', not 'Finally'."),
      ch("Which is wrong?", ["Neither my mum nor my dad don't like coffee.", "Neither my mum nor my dad likes coffee.", "My mum and my dad don't like coffee."], 0, "No double negative after neither … nor."),
      ch("Which process is in a logical order?", ["First, plant the seed. Then water it. Finally, wait for it to grow.", "Finally, plant the seed. First, wait for it to grow. Then water it.", "Then plant the seed. Finally, water it. First, wait for it to grow."], 0, "Logical sequence."),
    ],
    [
      ch("Best opening for a comparison essay?", ["Living in a city and living in the country are very different experiences.", "City and country. Very different. Experiences are different too.", "Whereas finally, both the city and the country are different."], 0, "Clear topic sentence."),
      ch("Best way to explain how to make arepas to a friend?", ["First, mix the flour with water and salt. Then make small balls. Finally, cook them in a pan.", "Arepas, you make them with flour, then cook, then balls, finally water, then eat them all.", "Finally, cook them. First, make balls. Then mix the flour with nothing."], 0, "Clear process."),
      ctx("You're writing about two phones for a tech blog.", "Best sentence?", ["While the first phone has a better camera, the second one has a longer battery.", "The first phone is good and the second one is also good for many things.", "Phones are phones, and both of them have a camera and a battery."], 0, "Clear contrast."),
      ch("Which sentence is easiest to follow in a process?", ["Once the paint is dry, add a second layer.", "The paint, when it, dry, then second.", "Add layer paint dry once."], 0, "Clear sequence."),
      say("Whereas dogs are social, cats are more independent.", "Stress DOGS, SOcial, CATS and indePENdent."),
    ],
  ],
  create: {
    prompts: [
      { text: "Compare two places you know (60 words or more), then explain how to do one simple thing there. Use at least two contrast words (whereas, while, on the other hand, both … and) and at least three sequence words (First, Then, Once that's done, After that, Finally)." },
      { universe: "screens", text: "Compare two games or apps (60 words or more), then explain how to start one of them. Use two contrast words (whereas, while, on the other hand, both … and) and three sequence words (First, Then, Once that's done, Finally)." },
      { universe: "science", text: "Compare two animals or plants (60 words or more), then describe a simple process (like how a seed grows). Use two contrast words and three sequence words (First, Then, Once that's done, Finally)." },
    ],
    minWords: 60,
    checks: [
      { label: "Two contrast or comparison words (whereas, while, on the other hand, both, neither, unlike, however)", pattern: "\\b(whereas|while|on the other hand|both|neither|unlike|however|similarly)\\b", min: 2 },
      { label: "Three sequence words (First, Then, Next, Once, After that, Finally)", pattern: "\\b(first|firstly|then|next|once|after that|afterwards|finally|lastly)\\b", min: 3 },
    ],
    rubric: ["My comparison shows clear differences and similarities.", "My process steps are in a logical order.", "Each step is short and clear."],
    model: "Medellín and Cartagena are both popular with tourists. Whereas Medellín is in the mountains and has spring weather all year, Cartagena is on the coast and is very hot. Medellín is famous for its metro; Cartagena, on the other hand, is famous for its old city. If you visit Cartagena, try a boat trip. First, buy a ticket at the port. Then find your boat. Once that's done, relax and enjoy the islands. Finally, don't forget sun cream!",
  },
};

const presentation: NodePractice = {
  nodeId: "b1p.give-a-short-presentation",
  explain: "A good short presentation has three parts. Introduction: greet the audience and say your topic and plan: 'Today I'm going to talk about… First, I'll… Then I'll… Finally, I'll…' Body: use signposts so people can follow you: 'Let's start with…', 'Moving on to…', 'Another important point is…', 'For example…'. Conclusion: summarise and thank the audience: 'To sum up…', 'Thank you for listening. Are there any questions?' Speak slowly, look at your audience, and pause between sections.",
  pattern: ["Start: Good morning, everyone. Today I'm going to talk about …", "Plan: First, I'll … Then I'll … Finally, I'll …", "Signposts: Let's start with … · Moving on to … · Another important point is …", "End: To sum up, … · Thank you for listening. Are there any questions?"],
  steps: [
    [
      heard(X("02", "notice"), "What is the topic of the presentation?", ["Rock climbing", "Swimming", "Cooking"], 0, "'Today I'm going to talk about my favourite hobby: rock climbing.'"),
      heard(X("02", "notice"), "What will the speaker do second?", ["Show some equipment", "Give tips", "Explain how they started"], 0, "'Then I'll show you some equipment.'"),
      heard(X("02", "notice"), "How does the speaker end?", ["Thanks the audience and asks for questions", "Says goodbye quickly and leaves the room", "Shows a short video about the topic"], 0, "'Thank you for listening. Are there any questions?'"),
      ch("'Today I'm going to talk about…' is used in…", ["the introduction", "the conclusion", "the middle"], 0, "Introduction."),
      ch("'To sum up' introduces…", ["a summary at the end", "the first point", "a question"], 0, "Conclusion."),
    ],
    [
      ch("Why give your plan at the start (First, Then, Finally)?", ["So the audience knows what to expect", "To make the presentation longer", "To show the audience you're nervous"], 0, "Helps the audience follow."),
      ch("Which phrase moves to a new section?", ["Moving on to…", "Thank you for listening.", "Good morning, everyone."], 0, "Signpost."),
      ctx("A student speaks very fast with no pauses and never looks up.", "What's the main problem?", ["The audience can't follow easily.", "The topic is wrong for the class.", "The grammar has a lot of mistakes."], 0, "Delivery matters."),
      ch("Which is a good way to give an example?", ["For example, last year I climbed in Suesca.", "To sum up, climbing is a good sport.", "Good morning, here is an example."], 0, "Signpost for examples."),
      ch("What should you do at the very end?", ["Thank the audience and invite questions", "Start a completely new topic", "Read your first slide again slowly"], 0, "Conclusion."),
    ],
    [
      gap("Today I'm going", "talk about my favourite band.", ["to"], "I'm going to talk about…"),
      gap("To sum", ", music helps me relax and feel happy.", ["up"], "To sum up."),
      ord("Thank you for listening. Are there any questions?", "Standard ending.", "Put the words in order to end a presentation."),
      dict(X("02", "dict"), ["Today I'm going to talk about my favourite hobby", "Today I am going to talk about my favourite hobby", "Today I'm going to talk about my favorite hobby"]),
      say("Good morning, everyone. Today I'm going to talk about my favourite hobby.", "Smile, slow down, and stress TOday and HOBby."),
    ],
    [
      fix(["Good morning, everyone.", "Today I go to talk", "about volcanoes."], 1, ["Today I'm going to talk", "Today I am going to talk"], "I'm going to talk."),
      fix(["To sum up,", "let's start with", "my first point."], 0, ["First,", "To begin,"], "'To sum up' is for the end, not the start."),
      fix(["Thank you for", "listen.", "Any questions?"], 1, ["listening."], "Thank you for + -ing."),
      ch("Which introduction is weakest?", ["Hi. Volcanoes. OK.", "Good morning. Today I'm going to talk about volcanoes.", "Hello, everyone. My presentation is about volcanoes."], 0, "No clear greeting or plan."),
      ch("Which is the best signpost to move on?", ["Moving on to my second point…", "To sum up, now my first point…", "Thank you, bye."], 0, "Clear transition."),
    ],
    [
      ch("Best opening for a class presentation?", ["Good morning, everyone. Today I'm going to talk about Colombian coffee. First, I'll explain its history.", "Coffee. OK, let's go. History first, then other things, I don't know, then the end, and questions.", "Um… so… coffee, I guess? It's from Colombia and it's, like, history."], 0, "Greeting + topic + plan."),
      ch("Best way to end?", ["To sum up, coffee is part of our culture. Thank you for listening. Any questions?", "That's it, bye. Coffee is good. I'm finished now, no questions.", "The end. Sit down, everyone. Coffee is culture, that's all."], 0, "Summary + thanks + questions."),
      ctx("You forget what to say in the middle of your presentation.", "Best move?", ["Pause, look at your notes, and say 'Moving on to…'", "Run out of the room and come back later.", "Start the whole talk again from the beginning."], 0, "Signposts help you recover."),
      ch("Which is most helpful for the audience?", ["Speaking slowly and pausing between sections", "Reading every word from the slides very fast", "Never looking at the audience"], 0, "Clear delivery."),
      say("To sum up, climbing is hard, but it's the best way to feel free.", "Slow down for the last sentence; stress HARD and FREE."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write and record a one-minute presentation (70 words or more) about a hobby or interest. Include an introduction with a plan, at least two signposts (Let's start with, Moving on to, Another important point is, For example), and a conclusion with To sum up and Thank you for listening." },
      { universe: "science", text: "Write and record a one-minute presentation (70 words or more) about an animal or a planet. Include an introduction with a plan, two signposts, and a conclusion with To sum up and Thank you for listening." },
      { universe: "arts", text: "Write and record a one-minute presentation (70 words or more) about an artist or a band. Include an introduction with a plan, two signposts, and a conclusion with To sum up and Thank you for listening." },
    ],
    minWords: 70,
    checks: [
      { label: "An introduction (Today I'm going to talk about / I'd like to talk about)", pattern: "\\b(today i'?m going to talk about|i'?m going to talk about|i'?d like to talk about|my presentation is about|today i am going to talk about)\\b", min: 1 },
      { label: "Two signposts (Let's start with, Moving on to, Another important point, For example, First, Then, Finally)", pattern: "\\b(let'?s start with|moving on to|another important point|for example|first|then|finally|next)\\b", min: 2 },
      { label: "A conclusion (To sum up / In conclusion + Thank you for listening)", pattern: "\\b(to sum up|in conclusion|thank you for listening|any questions)\\b", min: 2 },
    ],
    rubric: ["My audience knows my plan from the start.", "I used signposts between sections.", "I spoke slowly and ended clearly."],
    model: "Good morning, everyone. Today I'm going to talk about skateboarding. First, I'll explain how I started. Then I'll talk about the equipment. Finally, I'll give you some tips. Let's start with my story: I got my first board when I was twelve. Moving on to equipment, you need a good board, a helmet and knee pads. Another important point is practice: try twenty minutes a day. To sum up, skateboarding is fun and keeps you fit. Thank you for listening. Are there any questions?",
  },
};

const politeQ: NodePractice = {
  nodeId: "b1p.indirect-questions-as-politeness",
  explain: "When you talk to strangers, teachers or people in shops and offices, indirect questions sound more polite than direct ones. Compare: 'Where's the toilet?' (OK with friends) and 'Do you know where the toilet is?' (more polite). Useful openers: Do you know if / whether…? Could you tell me…? I was wondering if / whether… Would you mind telling me…? Start with a softener like 'Excuse me' or 'Sorry to bother you', and finish with 'Thanks so much'. Remember: after the opener, use statement word order.",
  pattern: ["Softener: Excuse me · Sorry to bother you", "Do you know if / whether …? · Could you tell me …?", "I was wondering if / whether … · Would you mind telling me …?", "Statement order: where the toilet is · if it's open", "Close: Thanks so much · I really appreciate it"],
  steps: [
    [
      heard(X("03", "notice"), "Where does the speaker want to go?", ["The city centre", "The airport", "The beach"], 0, "'Do you know if this bus goes to the city centre?'"),
      heard(X("03", "notice"), "What else do they ask?", ["How long the journey takes", "How much the bus costs", "Where to sit"], 0, "'could you tell me how long the journey takes?'"),
      heard(X("03", "notice"), "What are they wondering about?", ["Whether they can pay by card", "Whether the bus has Wi-Fi", "Whether the driver is friendly"], 0, "'I was wondering whether I can pay with my card.'"),
      ch("'Sorry to bother you' is…", ["a polite way to start", "an apology for a mistake", "a goodbye"], 0, "Softener."),
      ch("Which is more polite?", ["Do you know what time it is?", "What time is it now?", "Time? Tell me the time."], 0, "Indirect question."),
    ],
    [
      ch("When are indirect questions most useful?", ["With strangers, teachers and staff", "With your best friend", "In text messages to your sister"], 0, "Formal or new relationships."),
      ch("'Would you mind telling me…' is…", ["very polite", "rude", "only for friends"], 0, "Very polite."),
      ctx("At the cinema, you ask a staff member: 'Do you know if there are any seats left?'", "This is…", ["polite and natural", "too informal", "grammatically wrong"], 0, "Natural polite question."),
      ch("Which word order is correct?", ["Could you tell me where the station is?", "Could you tell me where is the station?", "Could you tell me the station where is?"], 0, "Statement order."),
      ch("Why might 'Where's the exit?' sound rude to a stranger?", ["It's very direct with no softener.", "It's grammatically wrong English.", "It's much too long for a question."], 0, "Directness."),
    ],
    [
      gap("Excuse me, do you know", "this shop accepts cards?", ["if", "whether"], "Yes/no → if / whether."),
      gap("Sorry to", "you, but could you help me?", ["bother", "trouble", "disturb"], "Sorry to bother you."),
      tr("Make it more polite, starting 'Could you tell me…'.", "How much is this jacket?", ["Could you tell me how much this jacket is?", "Could you tell me how much this jacket costs?"], "Statement order."),
      dict(X("03", "dict"), ["Do you know if this bus goes to the city centre?", "Do you know if this bus goes to the city centre", "Do you know if this bus goes to the city center?"]),
      say("Excuse me, do you know if this bus goes to the airport?", "Polite tone; rise at the end."),
    ],
    [
      fix(["Excuse me,", "do you know where is the bus stop?"], 1, ["do you know where the bus stop is?", "do you know where the bus stop is"], "Statement order: where the bus stop is."),
      fix(["I was wondering", "do you have", "any free tables."], 1, ["if you have", "whether you have"], "I was wondering if/whether + statement."),
      fix(["Would you mind", "to tell me", "your name?"], 1, ["telling me"], "Would you mind + -ing."),
      ch("Which is wrong?", ["Could you tell me what time does the museum open?", "Could you tell me what time the museum opens?", "What time does the museum open?"], 0, "Indirect: no 'does'."),
      ch("Which sounds most polite?", ["Sorry to bother you, but could you tell me where the toilets are?", "Toilets where? I need the toilets now, please, tell me.", "Tell me where the toilets are, quickly, it's urgent."], 0, "Softener + indirect question."),
    ],
    [
      ch("You're lost in a new city. Best question to a stranger?", ["Excuse me, could you tell me how to get to the main square?", "Main square, now! How do I get there? Tell me the way.", "Where is it the square? I'm lost, tell me how to go."], 0, "Polite and clear."),
      ch("Best way to ask a teacher about your grade?", ["I was wondering if you could explain my grade.", "Explain my grade to me now, please, I don't understand.", "Why my grade is bad? Explain it."], 0, "Polite."),
      ctx("Your best friend asks: 'Do you know whether you might possibly be free on Saturday?'", "This sounds…", ["a bit too formal for a best friend", "perfect for any situation with anyone", "rude and too direct"], 0, "Direct is fine with friends."),
      ch("Best question on the phone to a hotel?", ["Could you tell me if breakfast is included?", "Is breakfast included or not? Tell me.", "Breakfast? Included? Yes or no?"], 0, "Polite service language."),
      say("Sorry to bother you, but could you tell me where the library is?", "Warm tone; pause after BOTHer you."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short dialogue (60 words or more) where you ask a stranger for help in a new city. Use a softener (Excuse me / Sorry to bother you) and at least three indirect questions (Do you know if…, Could you tell me…, I was wondering whether…)." },
      { universe: "screens", text: "Write a polite chat message (60 words or more) to the support team of a streaming service. Use a softener and at least three indirect questions (Do you know if…, Could you tell me…, I was wondering whether…)." },
      { universe: "arts", text: "Write a polite email (60 words or more) to a theatre about tickets for a show. Use a softener and at least three indirect questions (Could you tell me…, Do you know if…, I was wondering whether…)." },
    ],
    minWords: 60,
    checks: [
      { label: "A softener (Excuse me, Sorry to bother you, I hope you're well)", pattern: "\\b(excuse me|sorry to bother you|sorry to trouble you|i hope you'?re well|hello|hi)\\b", min: 1 },
      { label: "Three indirect questions", pattern: "\\b(do you know|could you tell me|can you tell me|i was wondering|would you mind telling me|i'd like to know|would you know)\\b", min: 3 },
    ],
    rubric: ["Each question uses statement word order after the opener.", "I started and finished politely.", "My questions are clear."],
    model: "Tourist: Excuse me, sorry to bother you. Do you know if there's a pharmacy near here? Local: Yes, there's one on the next street. Tourist: Great! Could you tell me what time it closes? Local: I think it closes at eight. Tourist: Perfect. I was also wondering whether there's a good restaurant around here. Local: Try La Casa, it's delicious. Tourist: Do you know if they take cards? Local: Yes, they do. Tourist: Thanks so much!",
  },
};

const report: NodePractice = {
  nodeId: "b1p.review-and-report-structure",
  explain: "Reviews and reports have a clear structure so readers can find information fast. A report: a title, an introduction (the purpose: 'The aim of this report is to…'), sections with headings (Food, Prices, Service), and a recommendation at the end ('I recommend…', 'I would suggest…'). A review: a catchy title, a short introduction (what you're reviewing), your opinion of different parts, and a recommendation (who should see it, read it or go there). Use neutral language in reports and more personal language in reviews.",
  pattern: ["Report: Title · Introduction (The aim of this report is to …) · Sections with headings · Recommendation", "Review: Catchy title · What it is · Opinion of parts · Recommendation", "Recommend: I recommend … for … · I would suggest … · It's ideal for …", "Report = neutral · Review = personal"],
  steps: [
    [
      heard(X("04", "notice"), "What should the introduction of a report say?", ["What the report is about", "A joke", "The recommendation"], 0, "'In the introduction, say what the report is about.'"),
      heard(X("04", "notice"), "What examples of headings are given?", ["Food, Prices and Service", "Hello, Goodbye and Thanks", "Monday, Tuesday and Wednesday"], 0, "Section headings."),
      heard(X("04", "notice"), "What comes at the end?", ["A recommendation", "A new topic", "A question for the reader"], 0, "'At the end, give a recommendation.'"),
      ch("Why use headings in a report?", ["To help readers find information fast", "To make the report longer and more serious", "Because it's a kind of story"], 0, "Structure."),
      ch("'I recommend this café for students on a budget' is a…", ["recommendation", "introduction", "heading"], 0, "End of a report or review."),
    ],
    [
      ch("Which is a good report introduction?", ["The aim of this report is to compare three cafés near our school.", "OMG I love cafés so much, this report is about my favourites.", "Coffee is a drink that many people in Colombia enjoy."], 0, "States the purpose."),
      ch("What's the main difference between a report and a review?", ["A report is more neutral; a review is more personal.", "A review has no opinions in it, only facts.", "A report is always funny and informal."], 0, "Register."),
      ctx("A school magazine asks for a review of a new restaurant.", "What should it include?", ["What it is, your opinion of food and service, and a recommendation", "Only the address, the opening times and the phone number", "Only a list of prices for each dish"], 0, "Review structure."),
      ch("Which is a good catchy title for a review?", ["Tacos that are worth the queue", "Report number 3: tacos", "Introduction to the café"], 0, "Catchy title."),
      ch("Where does 'I would suggest…' usually go?", ["In the recommendation at the end", "In the title of the review", "In the very first sentence"], 0, "Recommendation."),
    ],
    [
      gap("The", "of this report is to evaluate the school canteen.", ["aim", "purpose"], "The aim of this report is to…"),
      gap("I would", "this museum to anyone who loves history.", ["recommend"], "recommend."),
      ord("I recommend this café for students on a budget", "Recommendation sentence."),
      dict(X("04", "dict"), ["I recommend this café for students on a budget", "I recommend this cafe for students on a budget"]),
      say("The aim of this report is to compare three cafés near our school.", "Neutral, clear tone."),
    ],
    [
      fix(["The aim of this report is", "for compare", "two gyms."], 1, ["to compare"], "The aim … is to + verb."),
      fix(["I recommend", "to go", "to this restaurant."], 1, ["going"], "recommend + -ing (or recommend that you go)."),
      fix(["Introduction:", "I recommend this café to everyone.", "Food: The food is good."], 1, ["This report compares three cafés near our school."], "The recommendation belongs at the end, not the introduction."),
      ch("Which report heading is weakest?", ["Stuff", "Prices", "Service"], 0, "Too vague."),
      ch("Which sentence is too personal for a formal report?", ["OMG the pizza was literally the best thing ever!!!", "The pizza was of good quality overall, and well priced.", "Most students rated the pizza highly."], 0, "Report = neutral."),
    ],
    [
      ch("Best end for a café report?", ["Overall, I recommend Café Sol, as it offers the best prices and service.", "Bye. That's the end of the report about the cafés near school.", "Café Sol is a café near our school with tables."], 0, "Clear recommendation with a reason."),
      ch("Best introduction for a film review?", ["Rainy Days, the new Colombian drama, is a beautiful film about family.", "Introduction: this is a film and I will talk about it.", "This report will evaluate the film Rainy Days."], 0, "Review style."),
      ctx("Your teacher asks for a report on after-school clubs.", "Which structure is best?", ["Title, introduction, headings for each club, recommendation", "One long paragraph with no breaks or headings at all", "A poem about each club, with no headings"], 0, "Report structure."),
      ch("Which recommendation is most helpful?", ["It's ideal for families with young children, but not for people looking for a quiet evening.", "It's good. Everybody should go there at some point, I think, if they want, maybe.", "Go if you want, or don't. It depends on you, really."], 0, "Specific and balanced."),
      say("Overall, I would recommend this place to students on a budget.", "Stress reCOMmend and BUDget."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short report (70 words or more) comparing two places to eat near your school or home. Include a title, an introduction (The aim of this report is to…), at least two headings, and a recommendation (I recommend… / I would suggest…)." },
      { universe: "screens", text: "Write a short review (70 words or more) of a game, app or series. Include a catchy title, what it is, your opinion of at least two parts, and a recommendation (I recommend… for…)." },
      { universe: "arts", text: "Write a short review (70 words or more) of a museum, concert or exhibition. Include a catchy title, what it is, your opinion of at least two parts, and a recommendation (I recommend… for…)." },
    ],
    minWords: 70,
    checks: [
      { label: "A purpose or introduction sentence (The aim of this report is to / This review / This report)", pattern: "\\b(the aim of this report|the purpose of this report|this report|this review|in this review)\\b|\\bis (a|an|the) (new )?\\w+ (game|app|series|film|museum|concert|café|cafe|restaurant)\\b", min: 1 },
      { label: "Headings or section labels (a short word followed by a colon)", pattern: "(^|\\n|\\.\\s)[A-Z][A-Za-z ]{2,20}:", min: 2 },
      { label: "A recommendation (I recommend / I would suggest / ideal for)", pattern: "\\b(i (would )?recommend|i'?d recommend|i would suggest|i suggest|ideal for|perfect for)\\b", min: 1 },
    ],
    rubric: ["My text has a clear structure with headings.", "My language matches the type (neutral report / personal review).", "My recommendation has a reason."],
    model: "Report: Two cafés near our school. Introduction: The aim of this report is to compare Café Sol and Café Luna for students. Food: Café Sol has fresh sandwiches and fruit. Café Luna has more cakes but fewer healthy options. Prices: Café Sol is cheaper, with lunch for less than ten thousand pesos. Service: Both cafés are friendly, but Café Luna is slower. Recommendation: I recommend Café Sol for students on a budget.",
  },
};

const wondering: NodePractice = {
  nodeId: "b1p.do-soften-requests-with-i-was-wondering",
  explain: "When you ask for something important (an extension, a favour, permission), soften the request. 'I was wondering if I could hand it in tomorrow' sounds much more polite than 'I want to hand it in tomorrow'. Useful patterns: I was wondering if I could + verb… Would it be possible to + verb…? Would you mind if I + past simple…? Give a short reason and say thank you: I'd really appreciate it. Thank you for understanding. Don't over-apologise; one 'sorry' is enough.",
  pattern: ["I was wondering if I could + verb …", "Would it be possible to + verb …?", "Would you mind if I + past simple …?", "Give a short reason: My grandmother was in hospital.", "Close: I'd really appreciate it. · Thank you for understanding."],
  steps: [
    [
      heard(X("05", "notice"), "What does the student want?", ["To hand in the essay tomorrow", "A better grade for the essay", "A new topic for the essay"], 0, "'I was wondering if I could hand in my essay tomorrow.'"),
      heard(X("05", "notice"), "What reason does she give?", ["Her grandmother was in hospital.", "She was on holiday with her family.", "She forgot about the deadline."], 0, "A short, clear reason."),
      heard(X("05", "notice"), "How does she finish?", ["She thanks the teacher for understanding.", "She demands an answer by tomorrow.", "She says nothing and just signs her name."], 0, "'Thank you for understanding.'"),
      ch("'I was wondering if I could…' is used to…", ["make a polite request", "tell a story about the past", "complain about something"], 0, "Softener."),
      ch("Which is more polite?", ["Would it be possible to change my seat?", "Change my seat now, please, I don't like it.", "I want a different seat, OK?"], 0, "Softened request."),
    ],
    [
      ch("Why give a short reason?", ["It helps the other person understand and say yes.", "To make the email much longer and more serious.", "It's not necessary to give one."], 0, "Reasons help."),
      ch("'Would you mind if I opened the window?' The verb is in the past because…", ["it makes the request more polite", "it happened yesterday, in the past", "it's a mistake; it should be 'open'"], 0, "Past = distance = politeness."),
      ctx("An email: 'Sorry, sorry, I'm so so sorry, I'm terrible, sorry…'", "The problem is…", ["too much apologising", "not enough apologising", "it's too formal"], 0, "One sorry is enough."),
      ch("'I'd really appreciate it' means…", ["I'd be very grateful.", "I'd be surprised.", "I'd pay for it."], 0, "Thanks in advance."),
      ch("Which request fits a close friend?", ["Can I borrow your charger?", "I was wondering whether it might be possible to borrow your charger, if it's not too much trouble?", "Would you mind if I possibly borrowed it, perhaps?"], 0, "Friends: direct is fine."),
    ],
    [
      gap("I was wondering if I", "leave ten minutes early today.", ["could"], "I was wondering if I could…"),
      gap("Would it be", "to change the date of the meeting?", ["possible"], "Would it be possible to…"),
      tr("Make it more polite, starting 'I was wondering if'.", "I want to borrow your notes.", ["I was wondering if I could borrow your notes"], "I was wondering if I could + verb."),
      dict(X("05", "dict"), ["I was wondering if I could hand it in tomorrow"]),
      say("I was wondering if I could hand it in tomorrow.", "Soft, polite tone; rising slightly at the end."),
    ],
    [
      fix(["I was wondering", "if I can", "borrow your bike this weekend."], 1, ["if I could"], "Past for politeness: could."),
      fix(["Would you mind", "if I open", "the window?"], 1, ["if I opened"], "Would you mind if I + past simple."),
      fix(["Would it be possible", "changing", "my exam date?"], 1, ["to change"], "Would it be possible to + verb."),
      ch("Which is too direct for an email to a teacher?", ["I need an extension. Give me one more day.", "I was wondering if I could have one more day.", "Would it be possible to have an extension?"], 0, "Commands sound rude."),
      ch("Which is best?", ["I was wondering if I could leave early. My dentist appointment is at four. Thank you!", "I leave early today. Dentist at four. Bye, see you tomorrow, OK, thanks a lot!", "Sorry sorry sorry, can I maybe possibly perhaps leave early?"], 0, "Soft request + reason + thanks."),
    ],
    [
      ch("You need to miss football practice for a family event. Best message to your coach?", ["Hi Coach, I was wondering if I could miss Saturday's practice. It's my cousin's wedding. Thanks!", "Not coming Saturday, Coach. Wedding. See you next week, OK? Don't be angry with me.", "I can't come on Saturday, deal with it. It's a wedding."], 0, "Polite request + reason + thanks."),
      ch("Best way to ask your host family about the Wi-Fi?", ["Would you mind if I used the Wi-Fi for my homework?", "Give me the Wi-Fi password for my homework, please.", "Wi-Fi now. I need it for my homework."], 0, "Polite."),
      ctx("You ask a classmate for a pen.", "Which is most natural?", ["Can I borrow a pen?", "I was wondering whether it might be possible to borrow a pen, if it's no trouble?", "Pen. Give."], 0, "Small favour = simple request."),
      ch("Best final line in a request email?", ["Thank you for understanding. I'd really appreciate it.", "Answer quickly.", "Whatever you decide is fine, I don't care."], 0, "Polite close."),
      say("Would it be possible to have one more day?", "Rising intonation; stress POSsible and MORE."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a polite email (60 words or more) to a teacher asking for an extension or to change a date. Use 'I was wondering if I could…', one more soft request (Would it be possible to… / Would you mind if I…), a short reason, and a polite close." },
      { universe: "screens", text: "Write a polite message (60 words or more) to your parents asking for more screen time this weekend. Use 'I was wondering if I could…', one more soft request, a reason, and a polite close." },
      { universe: "futures", text: "Write a polite email (60 words or more) to a company asking to visit for a day to learn about a job. Use 'I was wondering if I could…', one more soft request, a reason, and a polite close." },
    ],
    minWords: 60,
    checks: [
      { label: "I was wondering if I could …", pattern: "\\bi was wondering (if|whether) (i|we) could\\b", min: 1 },
      { label: "Another soft request (Would it be possible to / Would you mind if I)", pattern: "\\b(would it be possible|would you mind if|would you mind|could i possibly)\\b", min: 1 },
      { label: "A polite close (I'd really appreciate it / Thank you for understanding / Thanks in advance)", pattern: "\\b(i'?d (really )?appreciate|i would (really )?appreciate|thank you for (understanding|your time|considering)|thanks in advance|thank you so much)\\b", min: 1 },
    ],
    rubric: ["My request is soft but clear.", "I gave a short, honest reason.", "I didn't apologise too much."],
    model: "Dear Ms Torres, I hope you're well. I was wondering if I could hand in my history project next Monday instead of this Friday. My family has to travel to Cali for my grandfather's birthday. Would it be possible to send it by email on Sunday night instead? I'd really appreciate it. Thank you for understanding. Best wishes, Mateo Ríos",
  },
};

const turns: NodePractice = {
  nodeId: "b1p.do-take-turns-in-group-discussion",
  explain: "In a group discussion, good speakers share the conversation. Invite others: 'What do you think, Sara?' 'Ana, do you agree?' Ask to speak politely: 'Can I add something?' 'Sorry to interrupt, but…' Give the turn back if you interrupt by accident: 'Sorry, go ahead.' 'You were saying?' Build on ideas: 'That's a great idea, and maybe we could also…' Finish: 'So, let's vote.' 'Does everyone agree?' Don't speak for too long, and don't stay silent the whole time.",
  pattern: ["Invite: What do you think, Sara? · Do you agree, Tomás?", "Ask to speak: Can I add something? · Sorry to interrupt, but …", "Give back: Sorry, go ahead. · You were saying?", "Build: That's a great idea, and maybe we could also …", "Decide: Let's vote. · Does everyone agree?"],
  steps: [
    [
      heard(X("06", "notice"), "What is the group choosing?", ["A topic for the project", "A place for lunch", "A team captain"], 0, "'we need to choose a topic for the project'."),
      heard(X("06", "notice"), "What does the speaker want to add?", ["Making a video", "A new topic", "More time"], 0, "'Maybe we could also make a video.'"),
      heard(X("06", "notice"), "What does the speaker say to Tomás?", ["Sorry, go ahead, you were saying?", "Be quiet, it's my turn now.", "You're wrong, Tomás, listen."], 0, "Giving the turn back."),
      ch("'What do you think, Ana?' is used to…", ["invite someone to speak", "end the discussion", "disagree"], 0, "Inviting."),
      ch("'Can I add something?' is used to…", ["ask politely to speak", "add numbers in maths class", "finish the discussion"], 0, "Asking for a turn."),
    ],
    [
      ch("Why invite quiet people to speak?", ["So everyone can share ideas", "To embarrass them in front of others", "To end the discussion faster"], 0, "Good teamwork."),
      ch("'Sorry, go ahead' means…", ["Please continue, I interrupted you.", "Go away, I'm talking now.", "Go to the front of the class."], 0, "Giving the turn back."),
      ctx("Two people start speaking at the same time.", "Best response?", ["Sorry, you go first.", "Keep talking louder.", "Stop the discussion."], 0, "Polite turn-taking."),
      ch("Which phrase builds on someone's idea?", ["That's a great idea, and maybe we could also…", "No, that's wrong. My idea is better.", "Let's vote now and finish."], 0, "Building."),
      ch("Which phrase helps the group decide?", ["Does everyone agree?", "What do you think, Sara?", "Can I add something?"], 0, "Decision."),
    ],
    [
      gap("What do you", ", Sara? Do you agree?", ["think"], "What do you think?"),
      gap("Sorry to", ", but I have a quick question.", ["interrupt"], "Sorry to interrupt."),
      ord("That's a great idea and maybe we could also make a poster", "Building on an idea."),
      dict(X("06", "dict"), ["What do you think, Sara? Can I add something?", "What do you think Sara? Can I add something?"]),
      say("Sorry, go ahead. You were saying?", "Warm tone; rise on SAYing."),
    ],
    [
      fix(["Can I", "add some thing?"], 1, ["add something?"], "One word: something."),
      fix(["Sorry,", "go ahead you.", "You were saying?"], 1, ["go ahead."], "Sorry, go ahead."),
      fix(["That's a great idea, and", "maybe we could also to make", "a poster."], 1, ["maybe we could also make"], "could + base verb."),
      ch("Which behaviour is NOT good turn-taking?", ["Talking for five minutes without letting anyone speak", "Inviting a quiet classmate to speak", "Saying 'Sorry, go ahead' after interrupting"], 0, "Share the conversation."),
      ch("Which phrase is rude in a group discussion?", ["Be quiet, my idea is better.", "Can I add something to that?", "What do you think, Mateo?"], 0, "Rude."),
    ],
    [
      ch("Your group is silent. Best way to start?", ["OK, so what topic should we choose? Mateo, what do you think?", "Nobody talks. Fine. I'll just do the whole project alone, then.", "I'll decide everything. We're doing a video. No discussion."], 0, "Start and invite."),
      ch("You interrupt someone by accident. Best response?", ["Oh, sorry! Go ahead.", "Anyway, as I was saying…", "Keep talking."], 0, "Give the turn back."),
      ctx("Laura has a good idea, and you want to develop it.", "Best sentence?", ["I love Laura's idea. Maybe we could also add some music.", "Laura's idea is bad. We should do something else instead.", "My idea is better than Laura's. Let's do my idea."], 0, "Build on ideas."),
      ch("Best way to end the discussion?", ["So, let's vote. Does everyone agree with the video?", "That's it, bye. I'm going home now, see you tomorrow.", "I decided, the end. We're doing the video. No vote."], 0, "Clear decision."),
      say("That's a great idea. Can I add something?", "Friendly tone; stress GREAT and ADD."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short group discussion (70 words or more) between three or four students planning a class party. Include at least one invitation (What do you think, …?), one request to speak (Can I add something? / Sorry to interrupt), one phrase building on an idea, and one decision phrase (Let's vote / Does everyone agree?)." },
      { universe: "screens", text: "Write a short group discussion (70 words or more) between friends choosing a game to play together. Include an invitation, a request to speak, building on an idea, and a decision phrase." },
      { universe: "science", text: "Write a short group discussion (70 words or more) between students planning a science fair project. Include an invitation, a request to speak, building on an idea, and a decision phrase." },
    ],
    minWords: 70,
    checks: [
      { label: "An invitation (What do you think…? / Do you agree…?)", pattern: "\\b(what do you think|do you agree|what about you|any ideas)\\b", min: 1 },
      { label: "Asking to speak or giving the turn (Can I add something? / Sorry to interrupt / Go ahead)", pattern: "\\b(can i add|could i add|sorry to interrupt|go ahead|you were saying)\\b", min: 1 },
      { label: "A decision phrase (Let's vote / Does everyone agree? / So, we agree)", pattern: "\\b(let'?s vote|does everyone agree|are we all agreed|so we agree|let'?s decide|is everyone happy)\\b", min: 1 },
    ],
    rubric: ["Everyone in my dialogue gets a turn.", "Speakers build on each other's ideas.", "The group reaches a decision."],
    model: "Ana: OK, we need to plan the party. Tomás, what do you think? Tomás: Maybe a movie afternoon? Laura: That's a great idea, and maybe we could also bring popcorn. Sam: Sorry to interrupt, but can I add something? We could choose the film by voting online. Ana: Love it! Sorry, Tomás, go ahead. Tomás: I can bring a speaker. Ana: Perfect, thanks. So, does everyone agree? Let's vote now!",
  },
};

export const B1P_COMMUNICATE: NodePractice[] = [compare, presentation, politeQ, report, wondering, turns];
