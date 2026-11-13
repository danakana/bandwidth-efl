/* A2+ Communicate. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review.
   Lower band: short Spanish notes (es) and glosses shown only after a wrong answer. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, es, fix, gap, heard, ord, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/a2pc-${n}-${k}.mp3`;

export const A2P_COMMUNICATE_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "bIHbv24MWmeRgasZH58o", script: "I think school uniforms are a good idea. They're cheap and easy. Do you agree? Hmm, I'm not sure. I agree that they're easy, but I think we should choose our clothes. That's true. Maybe we can wear our own clothes on Fridays." },
  { file: X("01", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "I agree with you, but I'm not sure." },
  { file: X("02", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "First, we got on the bus to the zoo. Then, a monkey took my hat! After that, everyone laughed. Finally, a zookeeper got it back for me. Sorry, what did you say? The monkey took your hat? Yes!" },
  { file: X("02", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Sorry, could you say that again, please?" },
  { file: X("03", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Dear Ms Torres, I'm writing to ask about the science project. Could you tell me the date for the presentation, please? I was absent on Monday because I was ill. Thank you for your help. Best wishes, Camila." },
  { file: X("03", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "I'm writing to ask about the project." },
  { file: X("04", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "Excuse me, could you tell me where the library is, please? Of course, it's on the second floor. Thank you. And could you open the door for me? My hands are full. Sure, no problem." },
  { file: X("04", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "Could you open the door, please?" },
  { file: X("05", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "So the game starts at four, and then we… Sorry to interrupt, but what time do we meet? At three thirty. Can I just say something? I can bring the ball. Great, thanks!" },
  { file: X("05", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "Sorry to interrupt, but what time do we meet?" },
];

const opinions: NodePractice = {
  nodeId: "a2p.give-opinions-agree-and-disagree",
  explain: "To give an opinion, start with 'I think …', 'In my opinion, …' or 'For me, …'. Give a reason with 'because'. To agree: 'I agree', 'That's true', 'Me too'. To disagree politely: 'I'm not sure', 'I see what you mean, but …', 'I don't really agree'. Avoid a strong 'No, you're wrong.'",
  pattern: ["I think … because … · In my opinion, …", "Agree: I agree. · That's true. · Me too. / Me neither.", "Disagree politely: I'm not sure. · I see what you mean, but …", "Ask: What do you think? · Do you agree?"],
  es: "En inglés se dice 'I agree' (estoy de acuerdo), no 'I am agree'. Para no sonar grosero, usa 'I'm not sure' o 'I see what you mean, but…' en lugar de 'No, you're wrong'.",
  steps: [
    [
      heard(X("01", "notice"), "What does the first speaker think of school uniforms?", ["They're a good idea.", "They're expensive.", "They're ugly."], 0, "'I think school uniforms are a good idea.'"),
      heard(X("01", "notice"), "What does the second speaker agree with?", ["Uniforms are easy.", "Uniforms are cheap.", "Uniforms are beautiful."], 0, "'I agree that they're easy'."),
      heard(X("01", "notice"), "What do they suggest at the end?", ["Own clothes on Fridays", "No uniforms at all", "New uniforms"], 0, "'wear our own clothes on Fridays'."),
      ch("Which phrase gives an opinion?", ["I think …", "I agree.", "Me too."], 0, "I think = opinion."),
      ch("Which phrase disagrees politely?", ["I'm not sure.", "You're wrong!", "That's stupid."], 0, "Soft disagreement."),
    ],
    [
      ch("'That's true.' Does the speaker agree?", ["Yes", "No", "Not sure"], 0, "That's true = I agree."),
      ch("A: I don't like horror films. B: ___", ["Me neither.", "Me too.", "I agree not."], 0, "Agree with a negative → Me neither."),
      ctx("A: Pizza is the best food! B: I see what you mean, but I prefer arepas.", "Does B agree?", ["No, politely", "Yes, completely", "B is angry"], 0, "I see what you mean, but … = polite disagreement."),
      es(ch("Which word gives a reason?", ["because", "but", "and"], 0, "I think … because …"), "because = porque."),
      ch("Which question asks for an opinion?", ["What do you think?", "What time is it?", "Where do you live?"], 0, "Ask for opinions."),
    ],
    [
      gap("In my", ", homework is important.", ["opinion"], "In my opinion, …"),
      gap("I think football is fun", "you play with friends.", ["because"], "because + reason."),
      tr("Disagree politely.", "No, you're wrong. Cats are better.", ["I see what you mean, but I think cats are better", "I'm not sure. I think cats are better", "I see what you mean, but cats are better", "I don't really agree. I think cats are better"], "Soften it."),
      dict(X("01", "dict"), ["I agree with you, but I'm not sure", "I agree with you but I'm not sure"]),
      say("I see what you mean, but I don't really agree.", "Soft and friendly."),
    ],
    [
      es(fix(["Yes,", "I am agree", "with you."], 1, ["I agree"], "agree is a verb: I agree."), "En inglés es 'I agree', sin 'am'."),
      fix(["In my", "opinión,", "it's a good idea."], 1, ["opinion,", "opinion"], "English spelling: opinion (no accent)."),
      fix(["A: I don't like rain.", "B: Me too.", "It's horrible."], 1, ["B: Me neither.", "Me neither.", "B: Me neither", "Me neither"], "Agree with a negative → Me neither."),
      ch("Which is correct?", ["I think it's a good idea.", "I am think it's a good idea.", "I thinking it's a good idea."], 0, "I think …"),
      ch("Which is rude?", ["You're totally wrong.", "I'm not sure about that.", "I see your point, but …"], 0, "Too strong."),
    ],
    [
      ch("Your teacher asks your opinion about a new rule. Best answer:", ["I think it's a good idea because it's fairer.", "Good. I am agree because it's more fair.", "I am agree with it because is fairer."], 0, "Opinion + reason."),
      ch("Your friend says: 'Maths is boring.' You disagree. Best reply:", ["Really? I think it's quite interesting.", "No! That's stupid. Maths is the best.", "I agree not. I think it's interesting."], 0, "Polite disagreement."),
      ctx("A: We should have more breaks. B: ___", "Best agreement:", ["That's true! We get really tired.", "I am agree! We get really tired.", "Me neither! We get really tired."], 0, "Agree + reason."),
      ch("In a class debate, which is best?", ["I see what you mean, but I don't agree because …", "No, no, no. You're completely wrong because …", "Whatever. I don't care about it."], 0, "Polite + reason."),
      say("In my opinion, uniforms are a good idea because they're cheap.", "Opinion + reason."),
    ],
  ],
  create: {
    prompts: [
      { text: "Should students have homework every day? Write your opinion (35 words or more). Give two reasons, and answer one idea you don't agree with politely." },
      { universe: "screens", text: "Are video games good for teenagers? Write your opinion (35 words or more). Give two reasons, and answer one idea you don't agree with politely." },
      { universe: "science", text: "Should cars be banned in the city centre? Write your opinion (35 words or more). Give two reasons, and answer one idea you don't agree with politely." },
    ],
    minWords: 35,
    checks: [
      { label: "An opinion phrase", pattern: "\\b(i think|in my opinion|for me|i believe)\\b", min: 1 },
      { label: "A reason with 'because'", pattern: "\\bbecause\\b", min: 1 },
      { label: "Polite agree or disagree", pattern: "\\b(i agree|that's true|i'm not sure|i see what you mean|i don't really agree|me too|me neither)\\b", min: 1 },
    ],
    rubric: ["I gave my opinion with I think / In my opinion.", "I gave reasons with because.", "I disagreed politely."],
    model: "In my opinion, homework every day is too much. I think students need time to rest because we study all day at school. Some people say homework helps us learn. I see what you mean, but I think two or three times a week is enough.",
  },
};

const story: NodePractice = {
  nodeId: "a2p.tell-a-story-in-sequence-ask-for-clarifi",
  explain: "Tell a story in order with sequence words: First, … Then, … After that, … Finally, … Use the past simple. When you don't understand, ask for clarification politely: 'Sorry, what did you say?', 'Could you say that again, please?', 'What do you mean?', 'Do you mean …?'",
  pattern: ["First, … · Then, … · After that, … · Finally, …", "Past simple for the events: we got on the bus, a monkey took my hat", "Sorry, what did you say? · Could you repeat that, please?", "What do you mean? · Do you mean …?"],
  es: "First = primero, then = luego, after that = después de eso, finally = al final. Si no entiendes, di 'Sorry, could you say that again?' en vez de solo 'What?'.",
  steps: [
    [
      heard(X("02", "notice"), "Where did they go?", ["To the zoo", "To the beach", "To school"], 0, "'we got on the bus to the zoo'."),
      heard(X("02", "notice"), "What did the monkey take?", ["A hat", "A phone", "A sandwich"], 0, "'a monkey took my hat!'"),
      heard(X("02", "notice"), "Who got the hat back?", ["A zookeeper", "The teacher", "A friend"], 0, "'a zookeeper got it back for me'."),
      ch("Which word comes last in a story?", ["Finally", "First", "Then"], 0, "Finally = the end."),
      ch("Which phrase asks someone to repeat?", ["Sorry, what did you say?", "That's true, I think so too.", "Me too, I said the same."], 0, "Ask for clarification."),
    ],
    [
      ch("Put in order: Then · First · Finally", ["First, Then, Finally", "Then, First, Finally", "Finally, Then, First"], 0, "First → Then → Finally."),
      ch("Which tense do we use to tell a past story?", ["Past simple", "Present continuous", "Future"], 0, "we went, it took …"),
      ctx("Your friend speaks very fast and you miss the name of a place.", "Best question:", ["Sorry, where did you go?", "What?! I don't understand you.", "I agree, that's a good place."], 0, "Polite clarification."),
      es(ch("'Do you mean the big monkey?' What is the speaker doing?", ["Checking they understood", "Telling a new story", "Disagreeing"], 0, "Do you mean …? = check meaning."), "Do you mean…? = ¿Quieres decir…?"),
      ch("Which is the most polite?", ["Could you say that again, please?", "Repeat that again for me, I didn't hear.", "What? Say it again, OK?"], 0, "Could you … please?"),
    ],
    [
      gap("", ", we arrived at the zoo.", ["First"], "Start with First."),
      gap("After", ", we ate lunch.", ["that"], "After that, …"),
      ord("Could you repeat that please", "Could you + verb + please."),
      dict(X("02", "dict"), ["Sorry, could you say that again, please", "Sorry could you say that again please", "Sorry, could you say that again please"]),
      say("First we went to the zoo. Then a monkey took my hat!", "Pause after each sequence word."),
    ],
    [
      fix(["First, we", "go", "to the museum yesterday."], 1, ["went"], "Past story → went."),
      fix(["It was late.", "Final,", "we went home."], 1, ["Finally,", "Finally"], "The adverb is Finally."),
      fix(["Sorry,", "what you said?", "I didn't hear."], 1, ["what did you say?", "what did you say"], "Question → what did you say?"),
      ch("Which is correct?", ["After that, we had lunch.", "After, that we had lunch.", "After that we have lunch yesterday."], 0, "After that + past simple."),
      ch("Which is wrong?", ["Then we buyed ice cream.", "Then we bought ice cream.", "Then we had ice cream."], 0, "buy → bought."),
    ],
    [
      ch("Your teacher asks about your weekend. Best start:", ["First, I went to my grandma's house.", "First, I go to my grandma's house tomorrow.", "Finally, first, I went."], 0, "Sequence + past simple."),
      ch("You didn't hear the homework page. You say:", ["Sorry, could you repeat the page, please?", "What page?! Tell me again now, quickly.", "Me too, I didn't hear it."], 0, "Polite clarification."),
      ctx("Your friend says 'It was a disaster.' You're not sure what happened.", "Best question:", ["What do you mean?", "That's true.", "Finally."], 0, "Ask for meaning."),
      ch("Which story ending is best?", ["Finally, we got home at nine, tired but happy.", "Finally, first we went, then we got home.", "Finally, we get home tomorrow at nine."], 0, "Clear ending."),
      say("Sorry, what did you say?", "Rising, friendly tone."),
    ],
  ],
  create: {
    prompts: [
      { text: "Tell the story of a funny or surprising day (35 words or more). Use First, Then, After that and Finally, and the past simple." },
      { universe: "past", text: "Tell the story of a family celebration (35 words or more). Use First, Then, After that and Finally, and the past simple." },
      { universe: "futures", text: "Tell the story of a school trip that went wrong (35 words or more). Use First, Then, After that and Finally." },
    ],
    minWords: 35,
    checks: [
      { label: "Three sequence words", pattern: "\\b(first|then|after that|finally|next|later)\\b", min: 3 },
      { label: "Past simple verbs", pattern: "\\b(went|got|took|was|were|had|saw|ate|made|came|bought|found|lost|played|watched|arrived|laughed|walked|visited|started|decided|ran|fell)\\b", min: 3 },
    ],
    rubric: ["I used sequence words in order.", "I used the past simple.", "My story has a clear end."],
    model: "Last Sunday was crazy. First, we went to the river with my cousins. Then, my little brother fell into the water! After that, we all laughed and he was very wet. Finally, my uncle made a fire and we ate sausages. It was a great day.",
  },
};

const semiFormal: NodePractice = {
  nodeId: "a2p.semi-formal-email-to-a-teacher-or-school",
  explain: "When you write to a teacher or school, be polite and clear. Start with 'Dear Mr / Ms + surname'. Say why you're writing: 'I'm writing to ask about …'. Ask politely with 'Could you …, please?'. Finish with 'Thank you for your help' and 'Best wishes' or 'Kind regards', then your name. Don't use 'Hey', emojis or text language like 'u' or 'pls'.",
  pattern: ["Dear Ms Torres, / Dear Mr Díaz,", "I'm writing to ask about …", "Could you tell me …, please?", "Thank you for your help.", "Best wishes, / Kind regards, + name"],
  es: "Con profesores no uses 'Hey teacher!'. Escribe 'Dear Ms + apellido'. 'Ms' es para mujeres y 'Mr' para hombres.",
  steps: [
    [
      heard(X("03", "notice"), "Who is Camila writing to?", ["Ms Torres", "Her friend", "The school director"], 0, "'Dear Ms Torres'."),
      heard(X("03", "notice"), "What does Camila ask?", ["The date of the presentation", "The answers to the homework", "An idea for a new project"], 0, "'Could you tell me the date for the presentation, please?'"),
      heard(X("03", "notice"), "Why was Camila absent?", ["She was ill.", "She was on holiday.", "She missed the bus."], 0, "'I was absent on Monday because I was ill.'"),
      ch("Which is a good way to start?", ["Dear Ms Torres,", "Hey teacher!!", "Yo Ms T"], 0, "Dear + title + surname."),
      ch("Which is a good way to finish?", ["Best wishes, Camila", "Bye bye xoxo", "See ya"], 0, "Polite close."),
    ],
    [
      ch("Which sentence says why you're writing?", ["I'm writing to ask about the trip.", "Thank you very much for your help.", "Best wishes from all the family."], 0, "Purpose sentence."),
      es(ch("Why is 'Hey teacher, send me the homework' not good?", ["It's too informal and not polite.", "It's much too long for an email.", "It's written in the past tense."], 0, "Use Dear … and Could you …, please?"), "Es demasiado informal para un profesor."),
      ch("Which request is polite?", ["Could you send me the homework, please?", "Send me the homework now, please.", "Homework pls, send it quickly."], 0, "Could you …, please?"),
      ctx("You write to Mr Díaz.", "Which greeting?", ["Dear Mr Díaz,", "Dear Ms Díaz,", "Dear Teacher Díaz,"], 0, "Mr for a man."),
      ch("Which closing line is good?", ["Thank you for your help.", "Answer my email quickly, please!", "OK bye, see you in class."], 0, "Say thank you."),
    ],
    [
      gap("Dear Ms Pérez, I'm writing to", "about the exam.", ["ask"], "I'm writing to ask about …"),
      gap("", "you tell me the date, please?", ["Could"], "Could you …?"),
      tr("Make it polite for a teacher.", "Send me the worksheet.", ["Could you send me the worksheet, please", "Could you please send me the worksheet", "Could you send me the worksheet please"], "Could you …, please?"),
      dict(X("03", "dict"), ["I'm writing to ask about the project", "I am writing to ask about the project"]),
      say("Could you tell me the date, please?", "Polite rise on 'please'."),
    ],
    [
      fix(["Hey Ms Torres!!", "I'm writing to ask", "about the project."], 0, ["Dear Ms Torres,", "Dear Ms Torres"], "Use Dear + title + surname."),
      fix(["Could you send me the homework,", "pls", "?"], 1, ["please"], "No text language."),
      es(fix(["Dear", "Teacher Ruiz,", "I have a question."], 1, ["Mr Ruiz,", "Ms Ruiz,", "Mr Ruiz", "Ms Ruiz"], "Use Mr or Ms + surname."), "En inglés no se dice 'Teacher + apellido'; usa Mr o Ms."),
      ch("Which is correct?", ["Thank you for your help. Best wishes, Ana", "Thank you for you help. Best wish, Ana", "Thanks u. Ana"], 0, "Correct phrases."),
      ch("Which is NOT good in an email to a teacher?", ["Emojis and 'u'", "Dear Ms …", "Thank you for your help."], 0, "Too informal."),
    ],
    [
      ch("You need to miss class for a doctor's appointment. Best first line:", ["I'm writing to tell you that I can't come to class on Friday.", "Hey! No class for me on Friday lol, doctor stuff.", "Friday no class. Doctor. I tell you now."], 0, "Clear and polite."),
      ch("Best request:", ["Could you tell me what homework I missed, please?", "Tell me the homework I missed now, OK?", "Homework?? What did I miss? Tell me."], 0, "Polite request."),
      ctx("You write to the school office about a lost jacket.", "Best greeting:", ["Dear Sir or Madam,", "Hi guys at the office,", "Yo office people!"], 0, "Unknown person → Dear Sir or Madam."),
      ch("Which email ending is best?", ["Thank you for your help. Kind regards, Tomás", "Bye!!! Answer me soon, please, love Tomás", "Answer fast, please, Tomás"], 0, "Thanks + polite close."),
      say("Thank you for your help. Best wishes, Camila.", "Calm and polite."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write an email to your teacher (35 words or more). You were absent yesterday. Ask what homework you missed. Use Dear, I'm writing to, Could you, and a polite ending." },
      { universe: "arts", text: "Write an email to the school music teacher (35 words or more) to ask about joining the band. Use Dear, I'm writing to, Could you, and a polite ending." },
      { universe: "science", text: "Write an email to your science teacher (35 words or more) to ask about the science fair. Use Dear, I'm writing to, Could you, and a polite ending." },
    ],
    minWords: 35,
    checks: [
      { label: "Dear + Mr / Ms / Sir", pattern: "\\bdear\\s+(mr|ms|mrs|miss|sir|teacher)", min: 1 },
      { label: "I'm writing to …", pattern: "\\b(i'm|i am)\\s+writing\\s+to\\b", min: 1 },
      { label: "Could you …", pattern: "\\bcould\\s+you\\b", min: 1 },
      { label: "Polite ending", pattern: "\\b(best wishes|kind regards|thank you for your help|thanks for your help|yours sincerely)\\b", min: 1 },
    ],
    rubric: ["I started with Dear Mr / Ms + surname.", "I said why I'm writing and asked with Could you …?", "I finished politely, with no emojis or text language."],
    model: "Dear Mr Díaz, I'm writing to ask about the homework. I was absent yesterday because I had a doctor's appointment. Could you tell me which pages I need to do, please? Thank you for your help. Best wishes, Sara",
  },
};

const couldYou: NodePractice = {
  nodeId: "a2p.do-use-could-you-with-adults-and-strange",
  explain: "With friends, 'Can you …?' is fine. With adults you don't know well, teachers and strangers, 'Could you …, please?' is more polite. Start with 'Excuse me' to get attention. Say 'Thank you' or 'Thanks a lot' after. Avoid commands like 'Give me …' or 'Tell me …' with strangers.",
  pattern: ["Excuse me, could you …, please?", "Could you tell me where the library is?", "Friends: Can you pass the salt?", "Not: Give me … / Tell me … (too direct)", "Thank you. · Thanks a lot."],
  es: "En español a veces decimos «me regala…» o «dame…». En inglés, con adultos y desconocidos, usa 'Could you…, please?'.",
  steps: [
    [
      heard(X("04", "notice"), "What does the speaker ask first?", ["Where the library is", "What time it is", "Where the bathroom is"], 0, "'could you tell me where the library is, please?'"),
      heard(X("04", "notice"), "Where is the library?", ["On the second floor", "On the first floor", "Next to the café"], 0, "'it's on the second floor'."),
      heard(X("04", "notice"), "Why does the speaker ask for help with the door?", ["Their hands are full.", "The door is broken.", "It's locked."], 0, "'My hands are full.'"),
      ch("Which word gets a stranger's attention politely?", ["Excuse me", "Hey you", "Listen"], 0, "Excuse me, …"),
      ch("Which is more polite with an adult you don't know?", ["Could you help me, please?", "Help me now, please.", "You help me, yes?"], 0, "Could you …, please?"),
    ],
    [
      ch("Which is fine with your best friend?", ["Can you pass me the chips?", "Could you possibly pass me the chips, sir?", "Give chips."], 0, "Can you … is fine with friends."),
      es(ch("'Give me a coffee.' Why might a waiter not like it?", ["It sounds like an order, not a request.", "It's much too long to say in a busy café.", "Coffee is the wrong word here."], 0, "Use Could I have …? / Could you …?"), "Suena a orden. Mejor: 'Could I have a coffee, please?'"),
      ctx("You're lost in a shopping centre.", "Best question to a stranger:", ["Excuse me, could you tell me where the exit is?", "Where's the exit? Tell me now, please.", "Exit? Where is it? I need it."], 0, "Excuse me + Could you …?"),
      ch("What do you say after someone helps you?", ["Thank you so much.", "OK, that's fine.", "Finally, you did it."], 0, "Always thank them."),
      ch("Which is the most polite?", ["Excuse me, could you open the window, please?", "Open the window now, it's hot in here.", "Can open window? Is very hot here."], 0, "Excuse me + could + please."),
    ],
    [
      gap("Excuse me,", "you tell me the time, please?", ["could"], "Could you …?"),
      gap("", "me, where is the bus stop?", ["Excuse"], "Excuse me."),
      tr("Make it polite for a stranger.", "Tell me where the bank is.", ["Excuse me, could you tell me where the bank is, please", "Could you tell me where the bank is, please", "Excuse me, could you tell me where the bank is"], "Could you tell me …?"),
      dict(X("04", "dict"), ["Could you open the door, please", "Could you open the door please"]),
      say("Excuse me, could you help me, please?", "Gentle rise at the end."),
    ],
    [
      fix(["Excuse me,", "you can tell me", "the way to the station?"], 1, ["could you tell me", "can you tell me"], "Question order: could you + verb."),
      fix(["Could you", "to help", "me, please?"], 1, ["help"], "Could you + base verb."),
      fix(["Excuse me.", "Give me", "a ticket, please."], 1, ["Could I have", "Can I have"], "Ask, don't order."),
      ch("Which is correct?", ["Could you show me, please?", "Could you showing me, please?", "Could you to show me, please?"], 0, "could + base verb."),
      ch("Which is too direct with a stranger?", ["Tell me the price.", "Could you tell me the price, please?", "Excuse me, how much is this?"], 0, "Sounds like an order."),
    ],
    [
      ch("You need directions from an old man in the street. Best:", ["Excuse me, could you tell me where the park is?", "Hey! Old man! Where is the park? Tell me.", "Tell me where the park is, quickly."], 0, "Polite request."),
      ch("At a restaurant, best way to order:", ["Could I have a lemonade, please?", "Give me a lemonade now, OK?", "Lemonade. Bring it to me now."], 0, "Could I have …?"),
      ctx("Your friend's mum is driving you home.", "Best request:", ["Could you stop here, please? Thank you!", "Stop here now! Quickly, stop the car!", "Stop the car here. I go now."], 0, "Polite with adults."),
      ch("Which sounds most polite?", ["Excuse me, could you help me with my bag, please?", "Help my bag! It's very heavy, you carry it.", "You carry my bag for me, yes? It's heavy."], 0, "Excuse me + could + please."),
      say("Excuse me, could you tell me where the library is, please?", "Friendly and clear."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short dialogue (35 words or more): you are lost in a new city and ask an adult for help. Use Excuse me, Could you …?, please and thank you." },
      { universe: "arts", text: "Write a dialogue at a museum (35 words or more): ask a guard for help. Use Excuse me, Could you …?, please and thank you." },
      { universe: "science", text: "Write a dialogue at a pharmacy or shop (35 words or more). Use Excuse me, Could you …?, please and thank you." },
    ],
    minWords: 35,
    checks: [
      { label: "Excuse me", pattern: "\\bexcuse\\s+me\\b", min: 1 },
      { label: "Two 'Could you / Could I'", pattern: "\\bcould\\s+(you|i)\\b", min: 2 },
      { label: "please and thank you", pattern: "\\b(please|thank you|thanks)\\b", min: 2 },
    ],
    rubric: ["I started with Excuse me.", "I asked with Could you …? or Could I …?", "I said please and thank you."],
    model: "Me: Excuse me, could you help me, please? I'm lost. Man: Of course. Me: Could you tell me where the bus station is? Man: It's on the next street, on the left. Me: Thank you so much! Man: You're welcome.",
  },
};

const interrupt: NodePractice = {
  nodeId: "a2p.do-interrupt-politely",
  explain: "Sometimes you need to interrupt. Do it politely with a short phrase: 'Sorry to interrupt, but …', 'Excuse me, can I ask something?', 'Can I just say something?'. Wait for a small pause if you can. To continue after an interruption, say 'Anyway, …' or 'As I was saying, …'.",
  pattern: ["Sorry to interrupt, but …", "Excuse me, can I ask something?", "Can I just say something?", "Back to your point: Anyway, … · As I was saying, …"],
  es: "Interrumpir no es malo si lo haces con cortesía. 'Sorry to interrupt, but…' = «perdón que interrumpa, pero…».",
  steps: [
    [
      heard(X("05", "notice"), "What time does the game start?", ["At four", "At three thirty", "At five"], 0, "'the game starts at four'."),
      heard(X("05", "notice"), "What does the second speaker want to know?", ["What time they meet", "Where the game is", "Who is playing"], 0, "'what time do we meet?'"),
      heard(X("05", "notice"), "What can the speaker bring?", ["The ball", "Snacks", "Water"], 0, "'I can bring the ball.'"),
      ch("Which phrase interrupts politely?", ["Sorry to interrupt, but …", "Stop talking, please!", "Be quiet, it's my turn."], 0, "Polite interruption."),
      ch("Which phrase asks to speak?", ["Can I just say something?", "I'm talking now, OK?", "Listen to me, everyone!"], 0, "Can I just say …?"),
    ],
    [
      ch("Why say 'Sorry to interrupt'?", ["To be polite when you stop someone talking", "To end the conversation quickly and leave", "To say goodbye to the person"], 0, "It softens the interruption."),
      es(ch("'Anyway, as I was saying …' What is the speaker doing?", ["Going back to their topic", "Asking the others a question", "Saying sorry for interrupting"], 0, "Return to the topic."), "Anyway = bueno / en fin."),
      ctx("Your teacher is explaining, and you don't understand a word.", "Best way to interrupt:", ["Excuse me, can I ask something?", "WHAT? I want to ask now!", "Stop, stop! My question!"], 0, "Polite question."),
      ch("When is the best moment to interrupt?", ["At a small pause", "In the middle of a word", "Never"], 0, "Wait for a pause."),
      ch("Which is the most polite?", ["Sorry to interrupt, but the bus is here.", "Shh! Stop talking! The bus is here!", "Bus! Now! Everybody go!"], 0, "Sorry to interrupt, but …"),
    ],
    [
      gap("Sorry to", ", but I have a question.", ["interrupt"], "Sorry to interrupt, but …"),
      gap("Can I just", "something?", ["say"], "Can I just say something?"),
      ord("Sorry to interrupt but what time is it", "Sorry to interrupt, but + question."),
      dict(X("05", "dict"), ["Sorry to interrupt, but what time do we meet", "Sorry to interrupt but what time do we meet"]),
      say("Sorry to interrupt, but can I ask something?", "Soft voice, small smile."),
    ],
    [
      fix(["Sorry for", "interrupt,", "but I have an idea."], 1, ["interrupting,", "interrupting"], "Sorry for interrupting / Sorry to interrupt."),
      fix(["Excuse me,", "I can ask", "something?"], 1, ["can I ask"], "Question order: can I ask."),
      fix(["Hey,", "shut up,", "I have a question."], 1, ["Sorry to interrupt,", "Excuse me,", "Sorry to interrupt", "Excuse me"], "Too rude. Interrupt politely."),
      ch("Which is correct?", ["Can I just say something?", "Can I just saying something?", "I can just say something?"], 0, "Can I + base verb?"),
      ch("Which is rude?", ["Be quiet, it's my turn.", "Sorry, can I add something?", "Excuse me, can I ask something?"], 0, "Too direct."),
    ],
    [
      ch("Your group is talking and you have an important idea. Best:", ["Sorry to interrupt, but I have an idea.", "Stop! My idea is better, listen to me.", "You're wrong. Listen to my idea now."], 0, "Polite interruption."),
      ch("Your friend interrupted you. Now you want to continue. Best:", ["Anyway, as I was saying …", "Don't interrupt me again!", "Finally."], 0, "Return politely."),
      ctx("Your mum is on the phone, and there's someone at the door.", "Best:", ["Sorry to interrupt, Mum, but someone's at the door.", "MUM! DOOR! Someone's at the door! Hang up now!", "Hang up now, Mum, the door is ringing."], 0, "Polite and clear."),
      ch("In a class debate, which is best?", ["Can I just add something?", "No, it's my turn now!", "Stop talking, it's me now."], 0, "Polite."),
      say("Can I just say something?", "Rising tone, friendly."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short group conversation about planning a party (35 words or more). One person interrupts politely, then someone goes back to the topic." },
      { universe: "screens", text: "Write a conversation where friends plan a gaming session (35 words or more). One person interrupts politely, then someone goes back to the topic." },
      { universe: "arts", text: "Write a conversation where a band plans a concert (35 words or more). One person interrupts politely, then someone goes back to the topic." },
    ],
    minWords: 35,
    checks: [
      { label: "A polite interruption", pattern: "\\b(sorry to interrupt|sorry for interrupting|excuse me|can i just|can i ask|can i add)\\b", min: 1 },
      { label: "Back to the topic", pattern: "\\b(anyway|as i was saying)\\b", min: 1 },
    ],
    rubric: ["Someone interrupted politely.", "Someone went back to the topic with Anyway or As I was saying.", "The conversation is natural."],
    model: "Lina: So the party is on Saturday, and we need food and music. Pablo: Sorry to interrupt, but what time does it start? Lina: At five. Pablo: Thanks! Lina: Anyway, as I was saying, I can bring the music. Who can bring food?",
  },
};

export const A2P_COMMUNICATE: NodePractice[] = [opinions, story, semiFormal, couldYou, interrupt];
