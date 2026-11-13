/* B1 Communicate. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/b1c-${n}-${k}.mp3`;

export const B1_COMMUNICATE_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "3f6pec3wODJsjTqtcNI2", script: "In my opinion, school should start later. The main reason is that teenagers need more sleep. Another reason is that we learn better in the afternoon. Why are so many students tired in the morning? It might be because they use their phones late at night." },
  { file: X("01", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "The main reason is that teenagers need more sleep." },
  { file: X("02", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Hello, I bought these headphones last week. I'm afraid there's a problem with them: the left side doesn't work. Could you change them, please? Thank you. In short, the shop gave me new ones, and now they work perfectly." },
  { file: X("02", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "I'm afraid there's a problem with my order." },
  { file: X("03", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "When you write to a friend, you say: I got your message, and I need some help. When you write to a company, you say: I received your email, and I would like to request some assistance. Same meaning, different style." },
  { file: X("03", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "I received your email yesterday." },
  { file: X("04", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Dear Sir or Madam, I am writing to complain about the bicycle I purchased from your website. When it arrived, the front wheel was damaged. I would be grateful if you could send a replacement. I look forward to hearing from you. Yours faithfully, Andrés Pérez." },
  { file: X("04", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "I would be grateful if you could reply soon." },
  { file: X("05", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "I see your point, but I think the trip is too expensive. That's true, although we could save money first. Maybe you're right, but I'm not sure everyone can come. I partly agree. Let's think about it again." },
  { file: X("05", "dict"), voice: "8DvnqWWA3WWXixOm7zQI", script: "I see your point, but I don't agree." },
  { file: X("06", "notice"), voice: "bIHbv24MWmeRgasZH58o", script: "Your drawing is amazing! Oh, thanks, that's kind of you. I really like your shoes. Thank you! I got them last week. You played really well today. Thanks, I'm glad you enjoyed the match." },
  { file: X("06", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Thanks, that's really kind of you." },
];

const opinions: NodePractice = {
  nodeId: "b1.explain-and-justify-opinions-speculate",
  explain: "A good opinion has a reason. Give your view (In my opinion…, I think…, I believe…), then justify it (The main reason is that…, Another reason is…, For example…). When you're not sure why something happens, speculate with might, could or may: 'It might be because…', 'Maybe it's because…', 'Perhaps…'. Finish by repeating your view: 'That's why I think…'. This simple pattern works in conversations, essays and speaking exams.",
  pattern: ["Opinion: In my opinion… · I think… · I believe…", "Reason: The main reason is that… · Another reason is… · For example,…", "Speculate: It might be because… · Maybe… · Perhaps… · It could be that…", "Conclude: That's why I think…"],
  steps: [
    [
      heard(X("01", "notice"), "What is the speaker's opinion?", ["School should start later.", "School should be shorter.", "Students should use phones less."], 0, "'In my opinion, school should start later.'"),
      heard(X("01", "notice"), "What is the main reason?", ["Teenagers need more sleep.", "Teachers are tired.", "Buses are late."], 0, "'The main reason is that teenagers need more sleep.'"),
      heard(X("01", "notice"), "Why might students be tired in the morning?", ["They use their phones late at night.", "They eat too much sugar at breakfast.", "They walk a long way to school."], 0, "'It might be because they use their phones late at night.'"),
      ch("'The main reason is that…' introduces…", ["a justification", "a question", "a conclusion"], 0, "Reason."),
      ch("'It might be because…' shows the speaker is…", ["not completely sure", "completely sure about it", "angry about the situation"], 0, "Speculation."),
    ],
    [
      ch("What makes an opinion stronger?", ["A reason or example", "Saying it louder", "Repeating it five times"], 0, "Justify."),
      ch("Which phrase is used to speculate?", ["Perhaps it's because…", "In conclusion…", "First of all…"], 0, "Perhaps / maybe / might."),
      ctx("'I think homework is useful. For example, it helps me remember new words.'", "What is 'For example' doing?", ["Supporting the opinion", "Changing the topic", "Disagreeing"], 0, "Example = support."),
      ch("Which is the best final sentence?", ["That's why I think homework is useful.", "Homework. That's all I wanted to say.", "Anyway, by the way, also homework."], 0, "Conclude by repeating the view."),
      ch("Which is a full opinion with a reason?", ["I believe cycling is great because it's healthy and cheap.", "Cycling is great, healthy and cheap, I believe.", "I believe. Cycling. Healthy and cheap."], 0, "View + reason."),
    ],
    [
      gap("In my", ", students should wear uniforms.", ["opinion"], "In my opinion."),
      gap("The main reason", "that it saves time.", ["is"], "The main reason is that…"),
      tr("Add a speculation with 'might'.", "My plant is dying. I don't know why.", ["It might be because it needs more water", "It might be because it doesn't get enough light", "It might be because it needs more light", "It might be because I don't water it enough"], "It might be because…"),
      dict(X("01", "dict"), ["The main reason is that teenagers need more sleep"]),
      say("In my opinion, phones should be allowed at lunch. The main reason is that we need a break.", "Pause after opINion and REAson."),
    ],
    [
      fix(["In my", "opinon,", "school is too long."], 1, ["opinion,"], "Spelling: opinion."),
      fix(["The main reason", "are", "that it's cheaper."], 1, ["is"], "The main reason is…"),
      fix(["It might", "because", "the shop is closed."], 1, ["be because"], "It might be because…"),
      ch("Which is correct?", ["I think so because it's healthy.", "I think so because is healthy.", "I think so because healthy."], 0, "because + subject + verb."),
      ch("Which is wrong?", ["According to me, the film was boring.", "In my opinion, the film was boring.", "I think the film was boring."], 0, "'According to me' sounds unnatural in English."),
    ],
    [
      ch("In a speaking exam, the examiner asks: 'Do you like social media?' Best answer?", ["Yes, I do. The main reason is that I can talk to my cousins abroad.", "Yes. Social media. I like it, yes, and also no, sometimes, it depends.", "Social media, yes, no, maybe."], 0, "Opinion + reason."),
      ch("Your friend asks why the bus is late. You don't know. Best answer?", ["It might be because of the traffic.", "It is because of the traffic, 100%.", "Bus. Late. No."], 0, "Speculate politely."),
      ctx("Writing a short opinion paragraph for class.", "Best structure?", ["Opinion → two reasons with examples → conclusion", "Conclusion → nothing in the middle → opinion", "Only examples, with no opinion at all"], 0, "Clear structure."),
      ch("Which sounds most balanced and natural?", ["I believe video games can be useful, for example for learning English.", "Video games are always perfect and everyone agrees with me.", "Video games, opinion, mine, good, for example English."], 0, "Opinion with an example."),
      say("Perhaps it's because people are too busy.", "Stress perHAPS, PEOple and BUSy."),
    ],
  ],
  create: {
    prompts: [
      { text: "Answer this question (45 words or more): 'Should students have homework every day?' Give your opinion, two reasons, one example and one speculation (might / maybe / perhaps)." },
      { universe: "screens", text: "Answer (45 words or more): 'Are video games good for teenagers?' Give your opinion, two reasons, one example and one speculation (might / maybe / perhaps)." },
      { universe: "futures", text: "Answer (45 words or more): 'Will people still go to offices in 2040?' Give your opinion, two reasons and one speculation (might / maybe / perhaps)." },
    ],
    minWords: 45,
    checks: [
      { label: "An opinion phrase (In my opinion, I think, I believe)", pattern: "\\b(in my opinion|i think|i believe|i feel|personally)\\b", min: 1 },
      { label: "A reason phrase (The main reason, because, Another reason, For example)", pattern: "\\b(the main reason|another reason|because|for example|for instance)\\b", min: 2 },
      { label: "A speculation (might, may, could, maybe, perhaps)", pattern: "\\b(might|may|could|maybe|perhaps)\\b", min: 1 },
    ],
    rubric: ["My opinion is clear from the first sentence.", "Each reason is supported.", "I finished by repeating my view."],
    model: "In my opinion, students shouldn't have homework every day. The main reason is that we need time to rest and do sports. Another reason is that some students have to help at home. For example, my cousin looks after her little brother. Maybe teachers give homework because classes are short. That's why I think two days a week is enough.",
  },
};

const problems: NodePractice = {
  nodeId: "b1.deal-with-problems-give-advice-summarise",
  explain: "Three everyday skills. To report a problem politely: 'I'm afraid there's a problem with…', 'It doesn't work.', 'Could you…, please?' To give advice: 'You should…', 'Why don't you…?', 'If I were you, I'd…', 'It might be a good idea to…'. To summarise: 'In short,…', 'Basically,…', 'To sum up,…' followed by one or two sentences with only the main idea.",
  pattern: ["Problem: I'm afraid there's a problem with… · It doesn't work. · Could you…, please?", "Advice: You should… · Why don't you…? · If I were you, I'd… · It might be a good idea to…", "Summary: In short,… · Basically,… · To sum up,…"],
  steps: [
    [
      heard(X("02", "notice"), "What's wrong with the headphones?", ["The left side doesn't work.", "They're too big.", "They're the wrong colour."], 0, "'the left side doesn't work'."),
      heard(X("02", "notice"), "What does the customer ask for?", ["To change them", "Her money back", "A discount"], 0, "'Could you change them, please?'"),
      heard(X("02", "notice"), "What happened in the end?", ["The shop gave her new ones.", "The shop refused.", "She bought another brand."], 0, "'In short, the shop gave me new ones'."),
      ch("'I'm afraid there's a problem' is…", ["a polite way to start a complaint", "a way of saying you're scared", "a question about the problem"], 0, "Polite opener."),
      ch("'In short' introduces…", ["a summary", "a new problem", "advice"], 0, "Summary."),
    ],
    [
      ch("Which is advice?", ["Why don't you talk to your teacher?", "I'm afraid there's a problem.", "In short, it was good."], 0, "Why don't you…?"),
      ch("Which complaint is most polite?", ["Excuse me, I'm afraid my soup is cold.", "This soup is cold. It's bad. Bring another.", "Cold soup! Change it now, please!"], 0, "Polite and clear."),
      ctx("Your friend says: 'I always feel tired at school.'", "Best advice?", ["Maybe you should go to bed earlier.", "In short, you're tired.", "I'm afraid there's a problem."], 0, "Advice."),
      ch("What should a summary include?", ["Only the main idea", "Every small detail", "New information"], 0, "Short and clear."),
      ch("'If I were you, I'd…' is used to…", ["give advice", "make a complaint", "summarise"], 0, "Advice."),
    ],
    [
      gap("I'm", "there's a problem with my order.", ["afraid"], "I'm afraid there's a problem…"),
      gap("Why", "you ask the teacher for help?", ["don't"], "Why don't you…?"),
      tr("Give advice using 'should'.", "My friend wants to improve her English but doesn't practise.", ["She should practise every day", "She should practise more", "You should practise every day", "You should practise more", "She should practice every day", "She should practice more"], "should + base verb."),
      dict(X("02", "dict"), ["I'm afraid there's a problem with my order", "I am afraid there is a problem with my order"]),
      say("Could you change it, please? It doesn't work.", "Polite rising tone on PLEASE."),
    ],
    [
      fix(["You should", "to talk", "to your parents."], 1, ["talk"], "should + base verb, no 'to'."),
      fix(["Why", "you don't", "try the new café?"], 1, ["don't you"], "Why don't you…?"),
      fix(["I'm afraid", "there are a problem", "with my laptop."], 1, ["there's a problem", "there is a problem"], "there is + a problem."),
      ch("Which is correct?", ["If I were you, I'd apologise.", "If I was you, I will apologise.", "If I were you, I apologise."], 0, "If I were you, I'd…"),
      ch("Which is the best short summary of a long story about a lost dog that was found?", ["In short, the dog got lost but we found it the next day.", "In short, first we woke up, then we had breakfast, then…", "In short, dogs."], 0, "Main idea only."),
    ],
    [
      ch("Your hotel room is noisy. Best thing to say at reception?", ["Excuse me, I'm afraid my room is very noisy. Could I change rooms, please?", "My room is very noisy. Fix it now or give me another room.", "Noisy! Noisy room! I want to change rooms now!"], 0, "Polite problem + request."),
      ch("Your friend has an argument with her sister. Best advice?", ["It might be a good idea to talk to her when you're both calm.", "You must never talk to her again, she's horrible.", "In short, sisters are like that. Forget it."], 0, "Kind, useful advice."),
      ctx("Your teacher asks you to summarise a two-hour film in one sentence.", "Best answer?", ["Basically, it's about a girl who saves her town from a flood.", "It's long and there are many people and they do things.", "Film. A girl. A town. A flood. Water."], 0, "Main idea only."),
      ch("Which sounds most natural when your food order is wrong?", ["Sorry, I think there's a mistake. I ordered the chicken.", "You made it wrong! I said chicken, not this!", "I'm afraid, chicken, no. This is not mine."], 0, "Polite and clear."),
      say("If I were you, I'd talk to the teacher.", "Stress WERE, YOU and TEACHer."),
    ],
  ],
  create: {
    prompts: [
      { text: "A friend writes: 'My new phone stopped working after one week, and I don't know what to do.' Write a reply (45 words or more) with two pieces of advice, then summarise your advice in one sentence starting 'In short,' or 'Basically,'." },
      { universe: "screens", text: "A friend's game account was hacked. Write a reply (45 words or more) with two pieces of advice, then summarise with 'In short,' or 'Basically,'." },
      { universe: "futures", text: "A friend can't choose between two jobs. Write a reply (45 words or more) with two pieces of advice, then summarise with 'In short,' or 'Basically,'." },
    ],
    minWords: 45,
    checks: [
      { label: "Two pieces of advice (should, why don't you, if I were you, it might be a good idea)", pattern: "\\b(should|why don't you|if i were you|it might be a good idea|you could|try to)\\b", min: 2 },
      { label: "A summary (In short, Basically, To sum up)", pattern: "\\b(in short|basically|to sum up|in summary)\\b", min: 1 },
    ],
    rubric: ["My advice is clear and kind.", "I used should + base verb correctly.", "My summary gives only the main idea."],
    model: "Oh no, that's so annoying! First, you should go back to the shop with the receipt. Say: 'I'm afraid there's a problem with this phone.' They should change it, because it's only one week old. If I were you, I'd also check the warranty online. In short, take it back to the shop and ask for a new one.",
  },
};

const pairs: NodePractice = {
  nodeId: "b1.neutral-vs-formal-vocabulary-pairs",
  explain: "English often has two words for the same thing: a neutral one for friends and a formal one for emails to companies, teachers you don't know or official forms. get → receive. ask for → request. buy → purchase. help → assist. need → require. tell → inform. start → begin / commence. a lot of → many / a large number of. Formal words often come from Latin, so they look like Spanish: purchase is not 'perseguir', but assist and inform are close to asistir (help) and informar.",
  pattern: ["get → receive · ask for → request · buy → purchase", "help → assist · need → require · tell → inform", "start → begin · a lot of → many", "Neutral: friends, family · Formal: companies, official emails"],
  steps: [
    [
      heard(X("03", "notice"), "What does 'I got your message' become in the formal version?", ["I received your email", "I bought your message", "I asked your email"], 0, "get → receive."),
      heard(X("03", "notice"), "What is the formal version of 'I need some help'?", ["I would like to request some assistance", "I would like to purchase some help", "Help me now, it's urgent"], 0, "help → assistance."),
      heard(X("03", "notice"), "What changes between the two versions?", ["The style, not the meaning", "The meaning, not the style", "Nothing"], 0, "'Same meaning, different style.'"),
      ch("Formal for 'buy' is…", ["purchase", "receive", "request"], 0, "buy → purchase."),
      ch("Formal for 'ask for' is…", ["request", "require", "assist"], 0, "ask for → request."),
    ],
    [
      ch("When should you use 'purchase' instead of 'buy'?", ["In a formal email to a company", "When you are texting a friend", "Never; it's too old-fashioned"], 0, "Formal register."),
      ch("Neutral for 'require' is…", ["need", "help", "tell"], 0, "require → need."),
      ctx("A company email says: 'We will inform you when your order is ready.'", "In neutral English…", ["We'll tell you when your order is ready.", "We'll buy your order when it's ready.", "We'll help your order when it's ready."], 0, "inform → tell."),
      ch("Which sounds strange in a text to a friend?", ["I purchased a pizza lol", "I bought a pizza lol", "I got a pizza lol"], 0, "Too formal for a casual message."),
      ch("Which is the formal word for 'help'?", ["assist", "receive", "begin"], 0, "help → assist."),
    ],
    [
      gap("I", "your letter on Monday. (formal for 'got')", ["received"], "get → receive."),
      gap("I would like to", "more information. (formal for 'ask for')", ["request"], "ask for → request."),
      tr("Make it formal.", "I need some help with my booking.", ["I require some assistance with my booking", "I require assistance with my booking", "I would like to request some assistance with my booking", "I would like some assistance with my booking"], "need → require; help → assistance."),
      dict(X("03", "dict"), ["I received your email yesterday"]),
      say("I would like to request some information about the course.", "Formal, calm tone; stress reQUEST and COURSE."),
    ],
    [
      fix(["Dear Sir, I want to", "buy", "two tickets for the concert."], 1, ["purchase"], "Formal email: purchase."),
      fix(["hey bro, I just", "purchased", "new trainers lol"], 1, ["bought", "got"], "Casual text: bought."),
      fix(["Could you please", "tell", "me of any changes? (formal letter)"], 1, ["inform"], "Formal: inform someone of something."),
      ch("Which formal email sentence is correct?", ["I am writing to request information about your summer course.", "I am writing to ask information your summer course.", "I am writing for require information."], 0, "request + information."),
      ch("Which is wrong?", ["We will assist you with your order.", "We will help you with your order.", "We will assist to you with your order."], 0, "assist someone (no 'to')."),
    ],
    [
      ch("Writing to a university. Best sentence?", ["I would like to request an application form.", "Can you send me the form, thanks bro.", "Give me form."], 0, "Formal register."),
      ch("Texting your mum. Best sentence?", ["I got your message. I'll be home at 6.", "I received your correspondence. I shall arrive at 18:00.", "Message received, require dinner."], 0, "Neutral register."),
      ctx("A hotel website: 'Guests are required to check out by 11 a.m.'", "In neutral English…", ["You need to leave your room by 11.", "You can stay in your room all day.", "You must buy the room before 11."], 0, "required to = need to."),
      ch("Which mix of formal and neutral is best for an email to a teacher you don't know?", ["I would like to ask for some help with the homework.", "I wanna get help, ok?", "I require assistance immediately, teacher."], 0, "Polite, not too stiff."),
      say("Thank you for your help. I received the documents.", "Polite tone; stress HELP and reCEIVED."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write the same message twice (60 words or more in total): first to a friend, then to a company. Topic: you bought a jacket online and it's the wrong size. Use at least three formal words in the second version (receive, purchase, request, assist, require, inform)." },
      { universe: "screens", text: "Write the same message twice (60 words or more in total): to a friend, then to a game company. Topic: you bought a game and it won't download. Use at least three formal words in the second version (receive, purchase, request, assist, require, inform)." },
      { universe: "arts", text: "Write the same message twice (60 words or more in total): to a friend, then to a theatre. Topic: you need to change your concert tickets. Use at least three formal words in the second version." },
    ],
    minWords: 60,
    checks: [
      { label: "Three formal words (receive, purchase, request, assist, require, inform, commence)", pattern: "\\b(receiv(e|ed|ing)|purchas(e|ed|ing)|request(ed|ing)?|assist(ance|ed)?|requir(e|ed|es)|inform(ed)?|commenc(e|ed))\\b", min: 3 },
      { label: "Neutral words in the friend version (got, bought, need, help, ask)", pattern: "\\b(got|get|bought|buy|need|help|ask(ed)?|tell)\\b", min: 2 },
    ],
    rubric: ["My two versions have the same meaning.", "The friend version is relaxed; the company version is formal.", "I didn't mix registers in one message."],
    model: "To a friend: Hey Leo! I bought a jacket online, but it's too small. I need to change it. Can you help me with the website? To the company: Dear Sir or Madam, I recently purchased a jacket from your website, but I received the wrong size. I would like to request an exchange. Please inform me how to return it. Yours faithfully, Ana Gómez",
  },
};

const formalEmail: NodePractice = {
  nodeId: "b1.formal-email-complaint-or-application",
  explain: "Formal emails follow a clear pattern. Start: 'Dear Sir or Madam,' (unknown name) or 'Dear Mr / Ms + surname,'. First line: say why you are writing: 'I am writing to complain about…' or 'I am writing to apply for…'. Body: give details in short paragraphs. Request: 'I would be grateful if you could…'. End: 'I look forward to hearing from you.' Sign off: 'Yours faithfully,' (Dear Sir or Madam) or 'Yours sincerely,' (Dear Mr Pérez). No contractions, no emojis, no slang.",
  pattern: ["Dear Sir or Madam, → Yours faithfully,", "Dear Ms Rojas, → Yours sincerely,", "I am writing to complain about / apply for…", "I would be grateful if you could…", "I look forward to hearing from you.", "No contractions, emojis or slang"],
  steps: [
    [
      heard(X("04", "notice"), "Why is Andrés writing?", ["To complain about a bicycle", "To apply for a job in the shop", "To thank the shop for the bike"], 0, "'I am writing to complain about the bicycle…'"),
      heard(X("04", "notice"), "What was wrong?", ["The front wheel was damaged.", "It was the wrong colour.", "It arrived late."], 0, "'the front wheel was damaged'."),
      heard(X("04", "notice"), "What does he ask for?", ["A replacement", "His money back", "A discount"], 0, "'I would be grateful if you could send a replacement.'"),
      ch("'Dear Sir or Madam' ends with…", ["Yours faithfully", "Yours sincerely", "Love"], 0, "Unknown name → faithfully."),
      ch("'I look forward to hearing from you' goes…", ["at the end", "at the start", "in the subject"], 0, "Closing line."),
    ],
    [
      ch("Why say 'I am writing' and not 'I'm writing'?", ["Formal emails avoid contractions.", "It's shorter and easier to read.", "Both forms are informal in emails."], 0, "No contractions."),
      ch("Which opening fits a job application?", ["I am writing to apply for the position of…", "Hey! I want the job!", "I am writing to complain about the job."], 0, "apply for."),
      ctx("You know the manager is called Laura Ruiz.", "Best greeting?", ["Dear Ms Ruiz,", "Dear Laura Ruiz Sir,", "Hi Laura!!"], 0, "Dear Ms + surname."),
      ch("'I would be grateful if you could…' is…", ["a polite request", "a complaint", "a goodbye"], 0, "Polite request."),
      ch("Which ending goes with 'Dear Mr Pérez'?", ["Yours sincerely", "Yours faithfully", "Cheers"], 0, "Name known → sincerely."),
    ],
    [
      gap("I am writing to", "about the service in your restaurant.", ["complain"], "complain about."),
      gap("I would be", "if you could send me a refund.", ["grateful"], "I would be grateful if…"),
      tr("Make it formal.", "Hi! Please answer soon, OK? Bye!", ["I look forward to hearing from you", "I look forward to your reply", "I would be grateful if you could reply soon"], "Formal closing."),
      dict(X("04", "dict"), ["I would be grateful if you could reply soon"]),
      say("I am writing to apply for the summer job.", "Formal, clear: stress apPLY and SUMmer JOB."),
    ],
    [
      fix(["Dear Sir or Madam,", "…", "Yours sincerely,"], 2, ["Yours faithfully,"], "Dear Sir or Madam → Yours faithfully."),
      fix(["I look forward to", "hear", "from you."], 1, ["hearing"], "look forward to + -ing."),
      fix(["I'm writing to complain", "because the pizza was horrible lol.", "Yours faithfully, Ana"], 1, ["because the pizza was cold when it arrived.", "about the pizza, which was cold when it arrived."], "No slang; give a clear detail."),
      ch("Which is correct?", ["I would be grateful if you could call me.", "I would be grateful if you can calling me.", "I am grateful if you call me now."], 0, "would be grateful if you could + verb."),
      ch("Which line does NOT belong in a formal email?", ["Thx for ur help :)", "Thank you for your help.", "I look forward to hearing from you."], 0, "No abbreviations or emojis."),
    ],
    [
      ch("Best first sentence for a complaint?", ["I am writing to complain about the late delivery of my order.", "You are the worst company ever and I hate your delivery service.", "Hi, so, about my thing that didn't come…"], 0, "Clear purpose."),
      ch("Best request in an application?", ["I would be grateful if you could consider my application.", "Give me the job, please, I really want it and I need the money.", "Consider me for the job, OK? Thanks."], 0, "Polite request."),
      ctx("Applying for a volunteer job at an animal shelter.", "Best paragraph start?", ["I have experience with animals, as I have two dogs and volunteer at a vet.", "I like dogs a lot lol, they're my favourite animal in the whole world.", "Dogs are good. I have two. Give me the job."], 0, "Relevant experience, formal style."),
      ch("Best full closing?", ["I look forward to hearing from you. Yours faithfully, Ana Gómez", "Bye bye! Write back soon, lots of love from Ana Gómez xx", "Answer fast, please. Ana Gómez"], 0, "Formal closing."),
      say("I look forward to hearing from you.", "Calm, polite: stress FORward and HEARing."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a formal email of complaint (70 words or more) to an online shop. Something you bought arrived damaged or late. Use the full structure: greeting, purpose, details, request (I would be grateful if…), closing and sign-off." },
      { universe: "arts", text: "Write a formal email of application (70 words or more) to join a youth orchestra, theatre or art workshop. Use the full structure: greeting, purpose, experience, request, closing and sign-off." },
      { universe: "screens", text: "Write a formal email of complaint (70 words or more) to a streaming or game company about a problem with your account. Use the full structure." },
    ],
    minWords: 70,
    checks: [
      { label: "A formal greeting (Dear Sir or Madam / Dear Mr / Ms …)", pattern: "\\bdear\\s+(sir|madam|mr|ms|mrs|dr)\\b", min: 1 },
      { label: "A purpose line (I am writing to…)", pattern: "\\bi am writing to\\b", min: 1 },
      { label: "A polite request (I would be grateful if…)", pattern: "\\bi would be grateful if\\b", min: 1 },
      { label: "A formal closing (I look forward to…, Yours faithfully / sincerely)", pattern: "\\b(i look forward to|yours faithfully|yours sincerely)\\b", min: 2 },
    ],
    rubric: ["My email follows the formal structure.", "I gave clear details without slang or contractions.", "My greeting and sign-off match."],
    model: "Dear Sir or Madam, I am writing to complain about the headphones I purchased from your website on 2 March. When they arrived, the box was open and the left side did not work. I have attached a photo of the damage and a copy of my receipt. I would be grateful if you could send a replacement as soon as possible. I look forward to hearing from you. Yours faithfully, Andrés Pérez",
  },
};

const disagree: NodePractice = {
  nodeId: "b1.do-soften-disagreement",
  explain: "In English, direct disagreement ('No, you're wrong') can sound rude. Most people soften it. Show you listened: 'I see your point, but…', 'That's true, although…', 'You might be right, but…'. Use 'I'm not sure' instead of 'No': 'I'm not sure that's a good idea.' You can also partly agree: 'I partly agree.' Then explain your view politely. This keeps discussions friendly, in class, in group projects and in speaking exams.",
  pattern: ["I see your point, but… · That's true, although…", "You might be right, but… · Maybe, but…", "I'm not sure (that's a good idea).", "I partly agree. · I agree up to a point.", "Avoid: No, you're wrong. · That's stupid."],
  steps: [
    [
      heard(X("05", "notice"), "Why does the speaker think the trip is a problem?", ["It's too expensive.", "It's too far.", "It's too short."], 0, "'I think the trip is too expensive.'"),
      heard(X("05", "notice"), "What solution is mentioned?", ["Saving money first", "Going alone", "Cancelling the trip"], 0, "'we could save money first'."),
      heard(X("05", "notice"), "How does the speaker finish?", ["'I partly agree. Let's think about it again.'", "'No, you're wrong. Let's not talk about it.'", "'Fine, whatever. Do what you want.'"], 0, "Soft, open ending."),
      ch("'I see your point, but…' shows…", ["you listened before disagreeing", "you agree with them completely", "you're angry with the other person"], 0, "Softener."),
      ch("'I'm not sure that's a good idea' really means…", ["I don't think it's a good idea.", "I'm confused by the idea.", "It's a great idea, really."], 0, "Polite disagreement."),
    ],
    [
      ch("Which is the softest disagreement?", ["That's true, although it might be expensive.", "No. It's expensive. Forget it.", "You're wrong, obviously, it's expensive."], 0, "Acknowledge + reason."),
      ch("Why soften disagreement?", ["To keep the conversation friendly", "To hide your real opinion", "Because it's a grammar rule"], 0, "Politeness."),
      ctx("In a group project, Sara wants to present on Friday, but you think Monday is better.", "Best reply?", ["I see your point, but Monday gives us more time to practise.", "No, Friday is a bad day. Monday is much better for everyone.", "Friday is stupid. Everyone knows that."], 0, "Softened with a reason."),
      ch("'I partly agree' means…", ["I agree with some of it.", "I agree completely.", "I disagree completely."], 0, "Partial agreement."),
      ch("Which sounds rude in English?", ["You're wrong.", "I'm not sure I agree.", "You might be right, but…"], 0, "Too direct."),
    ],
    [
      gap("I see your", ", but I think it's too late.", ["point"], "I see your point."),
      gap("That's true,", "we could take the bus instead.", ["although", "but"], "That's true, although…"),
      tr("Make it softer.", "No. That idea is bad.", ["I'm not sure that's a good idea", "I'm not sure that idea is a good one", "I see your point, but I'm not sure that's a good idea"], "Use 'I'm not sure'."),
      dict(X("05", "dict"), ["I see your point, but I don't agree", "I see your point but I don't agree"]),
      say("You might be right, but I'm not sure.", "Soft, friendly tone; small rise on SURE."),
    ],
    [
      fix(["I see your", "points, but", "I prefer the museum."], 1, ["point, but"], "Fixed phrase: I see your point."),
      fix(["You are wrong,", "I think the beach is better."], 0, ["I'm not sure,", "That's true, but", "I see your point, but"], "Soften the start."),
      fix(["I", "am agree", "with you partly."], 1, ["agree", "partly agree"], "agree is a verb: I agree (not 'am agree')."),
      ch("Which is correct?", ["I partly agree, but I think it's expensive.", "I am partly agree, but it's expensive.", "I partly agreeing, but expensive."], 0, "I partly agree."),
      ch("Which reply would most likely start an argument?", ["That's a stupid idea.", "I see your point, but…", "Maybe, but what about the cost?"], 0, "Insulting the idea."),
    ],
    [
      ch("A classmate says homework should be banned. You disagree. Best?", ["That's true for some students, although homework helps me remember things.", "No. Wrong. Homework is good and you are bad for saying that.", "Homework good, you bad. I don't agree with you at all."], 0, "Softened with a reason."),
      ch("In a speaking exam, the examiner's partner disagrees with you. Best reply?", ["I see your point, but I still think cities are better for teenagers.", "Whatever. I don't care what you think about cities or the country.", "You don't understand. Cities are obviously better."], 0, "Polite and confident."),
      ctx("Your friend wants pizza for the fifth time this week.", "Friendly way to disagree?", ["Maybe, but why don't we try something different tonight?", "No more pizza ever! I hate it so much, I'm never eating it.", "Pizza is horrible. I'm not eating it."], 0, "Soft + alternative."),
      ch("Which shows partial agreement?", ["I agree up to a point.", "Absolutely, 100%.", "Never."], 0, "Up to a point."),
      say("I see your point, but I think we need more time.", "Stress POINT and TIME; calm tone."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short dialogue (45 words or more) where two students disagree politely about a class trip. Use at least three softening phrases (I see your point, That's true, although, You might be right, I'm not sure, I partly agree)." },
      { universe: "screens", text: "Write a short dialogue (45 words or more) where two friends disagree politely about which game or series is best. Use at least three softening phrases." },
      { universe: "futures", text: "Write a short dialogue (45 words or more) where two students disagree politely about phones in schools. Use at least three softening phrases." },
    ],
    minWords: 45,
    checks: [
      { label: "Three softening phrases", pattern: "\\b(i see your point|that's true|although|you might be right|i'm not sure|i am not sure|i partly agree|up to a point|maybe,? but)\\b", min: 3 },
    ],
    rubric: ["Each disagreement is polite but clear.", "Each speaker gives a reason.", "The dialogue ends in a friendly way."],
    model: "Ana: I think we should go to the beach for the class trip. Leo: I see your point, but it's very expensive. Ana: That's true, although we could stay in a cheap hostel. Leo: You might be right, but some parents won't agree. Ana: OK, I partly agree. What about a lake near Bogotá? Leo: Good idea!",
  },
};

const compliments: NodePractice = {
  nodeId: "b1.do-accept-compliments-simply",
  explain: "When someone gives you a compliment in English, the usual response is simple: say thank you, maybe add a short comment. 'Thanks, that's kind of you.' 'Thank you! I got them last week.' 'Thanks, I'm glad you liked it.' Many Spanish speakers reject compliments to be modest ('No, it's horrible, it's old'). In English this can sound strange, or like you think the other person is wrong. You can also return the compliment: 'Thanks! I love your jacket too.'",
  pattern: ["Thanks, that's kind of you.", "Thank you! I got it in Medellín. (short comment)", "Thanks, I'm glad you liked it / enjoyed it.", "Return it: Thanks! Yours is great too.", "Avoid: rejecting it (No, it's horrible…)"],
  steps: [
    [
      heard(X("06", "notice"), "How does the person respond to 'Your drawing is amazing'?", ["'Oh, thanks, that's kind of you.'", "'No, it's terrible, really.'", "'I know. I'm very good.'"], 0, "Simple thanks."),
      heard(X("06", "notice"), "What extra comment follows 'I really like your shoes'?", ["'I got them last week.'", "'They're very old.'", "'They were expensive.'"], 0, "Short, neutral comment."),
      heard(X("06", "notice"), "What does the player say after the compliment about the match?", ["'I'm glad you enjoyed the match.'", "'Thanks, but I played really badly.'", "'Thanks, I'm the best player here.'"], 0, "Glad + thanks."),
      ch("The basic response to a compliment is…", ["Thank you", "No, no, no", "Silence"], 0, "Accept it."),
      ch("'That's kind of you' means…", ["You're nice to say that.", "You're a kind of person.", "I don't agree."], 0, "Polite thanks."),
    ],
    [
      ch("Why can rejecting a compliment sound strange in English?", ["It can seem like you're saying the other person is wrong.", "It's grammatically wrong to say 'no' to a compliment in English.", "It sounds much too formal."], 0, "Cultural difference."),
      ch("Which response sounds most natural?", ["Thanks! I'm glad you like it.", "No, it's ugly and cheap.", "Yes, I know I'm amazing."], 0, "Simple and warm."),
      ctx("A teacher says: 'Great presentation today!'", "Best reply?", ["Thank you! I worked hard on it.", "No, it was terrible, really.", "OK. Whatever you say."], 0, "Thanks + short comment."),
      ch("How can you return a compliment?", ["Thanks! Your hair looks great too.", "Thanks, but yours is worse.", "Thanks, bye."], 0, "Return it warmly."),
      ch("Which reply sounds arrogant?", ["I know. Everyone says that.", "Thanks, that's kind of you.", "Thank you so much!"], 0, "Too proud."),
    ],
    [
      gap("Thanks, that's", "of you.", ["kind", "nice", "sweet"], "That's kind of you."),
      gap("Thanks, I'm", "you enjoyed it.", ["glad", "happy"], "I'm glad you enjoyed it."),
      tr("Give a natural English reply.", "Compliment: 'Your English is really good!' Spanish-style reply: 'No, no, it's very bad.'", ["Thanks, that's kind of you", "Thank you, I've been practising a lot", "Thanks! I've been practising a lot", "Thank you, that's kind of you"], "Accept it simply."),
      dict(X("06", "dict"), ["Thanks, that's really kind of you", "Thanks that's really kind of you"]),
      say("Thank you! I'm glad you liked it.", "Warm tone; stress THANK and LIKED."),
    ],
    [
      fix(["Compliment: 'Nice jacket!'", "Reply: 'No, it's old and ugly.'"], 1, ["Reply: 'Thanks, I got it last year.'", "Reply: 'Thanks!'", "Reply: 'Thank you!'"], "Accept the compliment."),
      fix(["Thanks, that's kind", "for", "you."], 1, ["of"], "kind of you."),
      fix(["I'm glad you", "enjoy", "the concert last night."], 1, ["enjoyed"], "Past: enjoyed."),
      ch("Which is correct?", ["Thanks, I'm glad you liked it.", "Thanks, I'm glad you like it yesterday.", "Thanks, I glad you liked."], 0, "I'm glad you liked it."),
      ch("Which reply could make the other person uncomfortable?", ["Really? No, you're wrong, it's terrible.", "Thanks so much, I'm happy you liked it!", "Thank you, that's really sweet of you."], 0, "Telling them they're wrong."),
    ],
    [
      ch("Someone says: 'You sing really well!' Best answer?", ["Thank you! I've been taking lessons.", "No, I sing horribly, really.", "Yes, I know. I'm the best singer."], 0, "Thanks + short comment."),
      ch("Your host family says: 'Your room is so tidy!' Best answer?", ["Thanks! I try to keep it clean.", "No, it's very dirty, really.", "OK. I know it's tidy."], 0, "Simple and natural."),
      ctx("After a football match, a coach from another school says: 'You played brilliantly.'", "Best reply?", ["Thank you, that's kind of you. Your team was really strong too.", "I know. I'm the best player on the team, everybody says so.", "No, I was bad. We were lucky to win."], 0, "Thanks + return the compliment."),
      ch("A classmate likes your drawing. Best reply?", ["Thanks! I'm glad you like it.", "It's nothing. It's horrible.", "Of course you like it."], 0, "Accept warmly."),
      say("Thanks, that's really kind of you.", "Warm, smiling tone; stress REALly and KIND."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write three short exchanges (45 words or more in total). In each, someone gives a compliment and the other person accepts it naturally (Thanks, that's kind of you / I'm glad you liked it / I got it in…)." },
      { universe: "arts", text: "Write three short exchanges after a school art show or concert (45 words or more in total). In each, someone gives a compliment and the other accepts it naturally." },
      { universe: "screens", text: "Write three short exchanges in a gaming or streaming chat (45 words or more in total). In each, someone gives a compliment and the other accepts it naturally." },
    ],
    minWords: 45,
    checks: [
      { label: "Three thank-you responses (Thanks / Thank you)", pattern: "\\b(thanks|thank you)\\b", min: 3 },
      { label: "A warm extra phrase (that's kind of you, I'm glad, too, I got it…)", pattern: "\\b(kind of you|nice of you|sweet of you|i'm glad|i am glad|too|i got (it|them))\\b", min: 2 },
    ],
    rubric: ["Each reply accepts the compliment.", "Some replies add a short comment or return the compliment.", "Nobody rejects the compliment."],
    model: "1. Sara: Your drawing is amazing! Leo: Thanks, that's really kind of you. 2. Teacher: Great presentation today. Ana: Thank you! I'm glad you enjoyed it. I practised a lot. 3. Tom: I love your new trainers. Mia: Thanks! I got them in Medellín. Your jacket is really cool too.",
  },
};

export const B1_COMMUNICATE: NodePractice[] = [opinions, problems, pairs, formalEmail, disagree, compliments];
