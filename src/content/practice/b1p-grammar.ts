/* B1+ Grammar. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/b1pg-${n}-${k}.mp3`;

export const B1P_GRAMMAR_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "Yesterday was a disaster. I woke up late, so I missed the bus. If I had left earlier, I wouldn't have missed it. And if I hadn't missed the bus, I wouldn't have been late for my exam. Next time, I'm setting two alarms." },
  { file: X("01", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "If I had studied more, I would have passed." },
  { file: X("02", "notice"), voice: "3f6pec3wODJsjTqtcNI2", script: "Big news for gamers. The new app can be downloaded for free from today. It has been updated with fifty new levels, and more levels will be added next month. All your progress has been saved, so you can start where you stopped." },
  { file: X("02", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "The app has been updated with new levels." },
  { file: X("03", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "This week is busy! On Monday I'm getting my phone repaired, because the screen is broken. On Wednesday I'm having my hair cut. And on Friday my parents are having the kitchen painted, so we're eating pizza on the sofa." },
  { file: X("03", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "I'm getting my phone repaired tomorrow." },
  { file: X("04", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "When I was a child, I used to live in a small town. It was very quiet. Now I live in Bogotá, and at first the noise was terrible. But I'm getting used to it. Now I'm used to the traffic, and I'm even used to waking up at five." },
  { file: X("04", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "I'm getting used to the noise in the city." },
  { file: X("05", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "On the school trip, the guide gave us lots of instructions. She told us to stay together. She asked us not to touch the paintings. And she told my friend Leo to put his phone away, because he was filming everything." },
  { file: X("05", "dict"), voice: "8DvnqWWA3WWXixOm7zQI", script: "She told us not to touch the paintings." },
  { file: X("06", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Last year I stopped buying energy drinks, because they were bad for my sleep. Yesterday, on my run, I stopped to buy water. I remember running my first race when I was ten. And today I must remember to send my coach the photos." },
  { file: X("06", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "I stopped to buy water on the way home." },
  { file: X("07", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "Excuse me, could you tell me where the library is? And do you know if it's open on Saturdays? I was also wondering whether students can borrow laptops there. Sorry, I'm new here." },
  { file: X("07", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "Could you tell me where the library is?" },
  { file: X("08", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "This time tomorrow, I'll be flying to Cartagena for the summer camp. By Friday, I'll have met everyone in my group. And by the end of July, I'll have finished my first diving course. I can't wait." },
  { file: X("08", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "By June, I'll have finished all my exams." },
  { file: X("09", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "It was such a good film that I watched it twice. The ending was so sad that my sister cried. The director, whose first film won an award, is only twenty-five. I think everyone should see it." },
  { file: X("09", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "It was such a good film that I watched it twice." },
];

const third: NodePractice = {
  nodeId: "b1p.third-conditional-introduction",
  explain: "Use the third conditional to imagine a different past: something that did not happen, and its result. If + had + past participle, would have + past participle. 'If I had left earlier, I wouldn't have missed the bus' means I didn't leave early, so I missed the bus. We often use it for regrets and for explaining what went wrong. You can also put the result first: 'I would have helped you if you had asked.' In speech, 'had' and 'would' are often short: If I'd known, I'd have come.",
  pattern: ["If + had + past participle, would have + past participle", "If I had left earlier, I wouldn't have missed the bus.", "Result first: I would have helped if you had asked.", "Short forms: If I'd known, I'd have come.", "Meaning: the past was different from this"],
  steps: [
    [
      heard(X("01", "notice"), "Why did the speaker miss the bus?", ["They woke up late.", "The bus was early.", "They forgot the exam."], 0, "'I woke up late, so I missed the bus.'"),
      heard(X("01", "notice"), "What happened because they missed the bus?", ["They were late for their exam.", "They walked to the beach.", "They stayed at home."], 0, "'I wouldn't have been late for my exam.'"),
      heard(X("01", "notice"), "What will they do next time?", ["Set two alarms", "Take a taxi", "Sleep at school"], 0, "'Next time, I'm setting two alarms.'"),
      ch("'If I had left earlier, I wouldn't have missed the bus.' Did the speaker leave early?", ["No", "Yes", "We don't know"], 0, "Third conditional = the opposite of what happened."),
      ch("Which form is the third conditional?", ["If I had known, I would have come.", "If I know, I will come to the party.", "If I knew, I would come."], 0, "had + past participle, would have + past participle."),
    ],
    [
      ch("When do we use the third conditional?", ["To imagine a different past", "To talk about future plans", "To give instructions"], 0, "Unreal past situations."),
      ch("'If she had asked me, I would have helped.' What really happened?", ["She didn't ask, so I didn't help.", "She asked, and I helped her.", "She will ask me tomorrow."], 0, "Opposite of reality."),
      ctx("Your friend says: 'If I'd seen the message, I'd have replied.'", "What does 'I'd' mean in each part?", ["I had … I would", "I would … I had", "I did … I do"], 0, "If I had seen…, I would have replied."),
      ch("Which sentence is a regret?", ["If I had studied, I would have passed.", "If I study, I will pass.", "I study every day after school."], 0, "Regret about the past."),
      ch("Which order is also correct?", ["I would have come if you had invited me.", "I had come if you would invite me.", "I come if you had invited me."], 0, "Result first, no comma."),
    ],
    [
      gap("If we had left earlier, we", "missed the train.", ["wouldn't have", "would not have"], "would not have + past participle."),
      gap("If you had told me, I would have", "you.", ["helped"], "would have + past participle."),
      tr("Write a third conditional sentence.", "I didn't know about the party, so I didn't go.", ["If I had known about the party, I would have gone", "If I'd known about the party, I'd have gone", "If I had known about the party I would have gone"], "If + had known, would have gone."),
      dict(X("01", "dict"), ["If I had studied more, I would have passed", "If I'd studied more, I'd have passed"]),
      say("If I had known, I would have come.", "Short form is natural: If I'd known, I'd have come."),
    ],
    [
      fix(["If I would have known,", "I would have", "called you."], 0, ["If I had known,", "If I'd known,"], "In the if-part, use had + past participle, not would have."),
      fix(["If she had studied,", "she would pass", "the exam last week."], 1, ["she would have passed"], "Past result: would have passed."),
      fix(["If we", "had took", "a map, we wouldn't have got lost."], 1, ["had taken"], "Past participle: taken."),
      ch("Which is correct?", ["If they had arrived on time, they would have seen the start.", "If they arrived on time, they would have seen the start.", "If they had arrived on time, they would see the start yesterday."], 0, "had arrived … would have seen."),
      ch("Which is wrong?", ["If I would have seen you, I would have said hello.", "If I had seen you, I would have said hello.", "I would have said hello if I had seen you."], 0, "No 'would' in the if-part."),
    ],
    [
      ch("Your friend failed a test because she didn't study. What can you say kindly?", ["If you'd had more time, you would have done better.", "If you study, you pass. You didn't study, so you failed.", "You didn't study. Bad. Next time, study more."], 0, "Third conditional for a kind comment on the past."),
      ch("Best apology for missing a friend's party?", ["If I'd known it was so important, I would have come.", "If I know it's important, I come next time.", "I didn't come because no. Sorry about that."], 0, "Explains and apologises."),
      ctx("You're writing a story about a lucky escape.", "Best final sentence?", ["If we had taken that road, we would never have come home.", "If we take that road, we never come home again.", "We took a different road, so yes, we came home."], 0, "Dramatic third conditional."),
      ch("Which sounds most natural in conversation?", ["If I'd known, I'd have brought snacks.", "If I had had knowledge, I would have had the snacks brought.", "Had I knowledge, snacks."], 0, "Short forms in speech."),
      say("If I'd left earlier, I wouldn't have missed the bus.", "Stress LEFT, EARlier and MISSED."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about a day when something went wrong (50 words or more). Use at least two third conditional sentences (If I had …, I would have …)." },
      { universe: "screens", text: "Write about a game, match or series episode that ended badly (50 words or more). Use at least two third conditional sentences (If they had …, they would have …)." },
      { universe: "past", text: "Choose a moment in history and imagine it differently (50 words or more). Use at least two third conditional sentences (If … had …, … would have …)." },
    ],
    minWords: 50,
    checks: [
      { label: "Two third conditionals (If … had + past participle, … would have …)", pattern: "\\bif\\b[^.!?]*\\b(had|'d)\\b[^.!?]*\\b(would|wouldn't|could|might|'d)\\s+(not\\s+)?have\\b|\\b(would|wouldn't|could|might)\\s+(not\\s+)?have\\b[^.!?]*\\bif\\b[^.!?]*\\bhad\\b", min: 2 },
    ],
    rubric: ["Each if-part uses had + past participle.", "Each result uses would have + past participle.", "My story is clear and easy to follow."],
    model: "Last Saturday was terrible. I forgot to charge my phone, so my alarm didn't ring. If I had charged it, I would have woken up on time. I arrived late to the football match, and the coach didn't let me play. If I had arrived on time, I would have played the whole game. Our team lost two to one. Maybe we would have won if I had been there!",
  },
};

const passive: NodePractice = {
  nodeId: "b1p.passive-with-modals-and-perfect-tenses",
  explain: "Use the passive when the action is more important than the person who does it. With modals: modal + be + past participle (The app can be downloaded. Phones must be switched off.). With the present perfect: have/has + been + past participle (The app has been updated. Your progress has been saved.). With the future: will be + past participle (More levels will be added.). Add 'by' only if the person is important: 'The song was written by my cousin.'",
  pattern: ["can / must / should / might + be + past participle: It can be downloaded.", "has / have been + past participle: It has been updated.", "will be + past participle: More levels will be added.", "by + person, only when important", "Focus on the action, not the person"],
  steps: [
    [
      heard(X("02", "notice"), "How much does the app cost?", ["It's free.", "Five dollars", "It's not said."], 0, "'can be downloaded for free'."),
      heard(X("02", "notice"), "What has happened to the app?", ["It has been updated with fifty new levels.", "It has been deleted from the store.", "It has been sold to a new company."], 0, "'It has been updated with fifty new levels.'"),
      heard(X("02", "notice"), "What will happen next month?", ["More levels will be added.", "The app will close.", "Progress will be deleted."], 0, "'more levels will be added next month'."),
      ch("'It can be downloaded' is…", ["passive with a modal", "active future", "past simple"], 0, "modal + be + past participle."),
      ch("'Your progress has been saved' is…", ["present perfect passive", "future simple passive", "an active sentence"], 0, "has been + past participle."),
    ],
    [
      ch("Why use the passive in 'Phones must be switched off'?", ["The action is important, not who does it.", "Because phones are people too, in the sentence.", "Because it's in the past."], 0, "Focus on the action."),
      ch("Which is passive?", ["The results have been published.", "They have published the results.", "They publish the results."], 0, "have been + past participle."),
      ctx("A sign in a museum: 'Photos may not be taken.'", "This means…", ["You can't take photos.", "You must take photos.", "Photos are free."], 0, "may not be + past participle = not allowed."),
      ch("When do we add 'by' + person?", ["When the person is important or interesting", "Always, in every passive sentence you write", "Never; it's not correct English"], 0, "The song was written by my cousin."),
      ch("'More levels will be added' means…", ["Someone will add more levels.", "More levels added themselves.", "Levels were added yesterday."], 0, "Future passive."),
    ],
    [
      gap("The tickets can", "bought online.", ["be"], "modal + be + past participle."),
      gap("The bridge has", "closed because of the storm.", ["been"], "has been + past participle."),
      tr("Rewrite in the passive.", "You must wear a helmet.", ["A helmet must be worn", "Helmets must be worn"], "must be + past participle."),
      dict(X("02", "dict"), ["The app has been updated with new levels"]),
      say("All your progress has been saved.", "Link 'has been': haz-bin."),
    ],
    [
      fix(["The app can", "download", "for free."], 1, ["be downloaded"], "Passive: can be downloaded."),
      fix(["The homework", "has be", "checked by the teacher."], 1, ["has been"], "has been + past participle."),
      fix(["New songs", "will added", "next week."], 1, ["will be added"], "will be + past participle."),
      ch("Which is wrong?", ["The room should cleaned every day.", "The room should be cleaned every day.", "Someone should clean the room every day."], 0, "should be cleaned."),
      ch("Which is wrong?", ["The cake has been eated.", "The cake has been eaten.", "Someone has eaten the cake."], 0, "Past participle: eaten."),
    ],
    [
      ch("Best sentence for a school notice?", ["Bags must be left outside the exam room.", "You leave your bags outside the exam room, OK?", "Bags leaving outside the exam room, please."], 0, "Formal notices often use the passive."),
      ch("Best news headline sentence?", ["A new park will be opened next month.", "Someone will open a park next month, maybe.", "Park open next month will."], 0, "Passive, clear."),
      ctx("Your friend asks who painted the mural. You know: it was a famous artist.", "Best answer?", ["It was painted by Ana Ríos.", "It was painted.", "It has painted Ana Ríos."], 0, "Add 'by' when the person matters."),
      ch("In a recipe, which sounds most natural?", ["The onions should be cooked slowly.", "The onions should cook by you slowly.", "Onions cooked should be."], 0, "Passive with should."),
      say("Phones must be switched off during the exam.", "Stress PHONES, SWITCHED and EXam."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short announcement for your school (50 words or more) about a change. Use at least three passives with modals or the present perfect (can be, must be, has been, will be)." },
      { universe: "screens", text: "Write the update notes for a game or app (50 words or more). Use at least three passives (has been fixed, can be downloaded, will be added, must be updated)." },
      { universe: "science", text: "Describe a simple experiment or a new invention (50 words or more). Use at least three passives (can be used, has been tested, should be kept, will be sold)." },
    ],
    minWords: 50,
    checks: [
      { label: "Three passives (can/must/should/will be + past participle, has/have been + past participle)", pattern: "\\b(can|could|must|should|will|may|might|has|have|had)\\s+(not\\s+)?(be|been)\\s+\\w+(ed|en|t|wn|ne)\\b", min: 3 },
    ],
    rubric: ["Each passive has be/been + past participle.", "I used 'by' only when the person matters.", "My announcement is clear."],
    model: "Important news for all students! The school library has been redecorated, and it will be opened again on Monday. New computers have been installed, and they can be used during lunch. Books can be borrowed for two weeks. Food must not be eaten inside the library. The new reading room was designed by our art teacher, Mr Gómez.",
  },
};

const causative: NodePractice = {
  nodeId: "b1p.have-get-something-done",
  explain: "Use have or get + object + past participle when someone else does a job for you. 'I'm getting my phone repaired' means a technician repairs it, not me. 'I had my hair cut' means a hairdresser cut it. 'Get' is a little more informal than 'have'. You can use any tense: I'm having my room painted. I had my eyes tested. I need to get my bike fixed. Be careful with the word order: have + THING + past participle (not 'have repaired my phone', which means I did it myself).",
  pattern: ["have / get + object + past participle", "I'm getting my phone repaired. (someone repairs it for me)", "I had my hair cut. · We're having the kitchen painted.", "Word order: have + THING + past participle", "Compare: I repaired my phone. (I did it myself)"],
  steps: [
    [
      heard(X("03", "notice"), "Who will repair the phone?", ["Someone else, a repair person", "The speaker, at home tonight", "The speaker's parents"], 0, "'I'm getting my phone repaired.'"),
      heard(X("03", "notice"), "What is happening on Wednesday?", ["A haircut", "A party", "A test"], 0, "'I'm having my hair cut.'"),
      heard(X("03", "notice"), "Why are they eating pizza on the sofa on Friday?", ["The kitchen is being painted.", "It's a birthday party for the family.", "The phone is broken, so they can't order."], 0, "'my parents are having the kitchen painted'."),
      ch("'I had my hair cut.' Who cut the hair?", ["A hairdresser", "Me", "My friend, maybe me"], 0, "have something done = someone else does it."),
      ch("Which sentence means you did it yourself?", ["I painted my room.", "I had my room painted.", "I got my room painted."], 0, "No have/get + past participle."),
    ],
    [
      ch("What's the difference between 'have' and 'get' here?", ["'Get' is a bit more informal.", "'Get' is only for the past.", "There is no difference in form."], 0, "Same meaning; get = informal."),
      ch("'We need to get the car washed.' This means…", ["Someone needs to wash it for us.", "We need to wash it ourselves.", "The car is clean."], 0, "Service by someone else."),
      ctx("Mum says: 'I'm having my eyes tested tomorrow.'", "Where is she going?", ["To an optician", "To school", "To the gym"], 0, "Someone tests her eyes."),
      ch("Which word order is correct?", ["I had my bike fixed.", "I had fixed my bike.", "I fixed had my bike."], 0, "have + object + past participle."),
      ch("'I had fixed my bike' means…", ["I fixed it myself (past perfect).", "Someone else fixed it for me.", "I will fix it tomorrow."], 0, "Word order changes the meaning."),
    ],
    [
      gap("I'm getting my laptop", "this week. The screen is broken.", ["repaired", "fixed"], "get + object + past participle."),
      gap("She had her photo", "for her passport.", ["taken"], "past participle: taken."),
      tr("Rewrite: someone else does it.", "A mechanic is checking our car.", ["We are having our car checked", "We're having our car checked", "We are getting our car checked", "We're getting our car checked"], "have/get + car + checked."),
      dict(X("03", "dict"), ["I'm getting my phone repaired tomorrow", "I am getting my phone repaired tomorrow"]),
      say("I'm having my hair cut on Saturday.", "Stress HAIR and SATurday."),
    ],
    [
      fix(["I had", "cut my hair", "at the new salon."], 1, ["my hair cut"], "have + object + past participle."),
      fix(["We're getting", "our house paint", "next month."], 1, ["our house painted"], "Past participle: painted."),
      fix(["He", "repaired his car", "at the garage because he can't fix cars."], 1, ["had his car repaired", "got his car repaired"], "Someone else did it: had his car repaired."),
      ch("Which is wrong?", ["I need to get cut my hair.", "I need to get my hair cut.", "I need to have my hair cut."], 0, "get + object + past participle."),
      ch("Which is wrong?", ["She's having her nails do.", "She's having her nails done.", "She's getting her nails done."], 0, "Past participle: done."),
    ],
    [
      ch("Your phone screen is broken. What do you tell your friend?", ["I'm getting it fixed tomorrow.", "I'm fixing it tomorrow (but I can't fix phones).", "I'm fixed it tomorrow."], 0, "Someone else will fix it."),
      ch("Best sentence for a story about getting ready for a party?", ["She had her hair done and her nails painted.", "She did her hair done and her nails painted.", "She had done her hair painted and her nails."], 0, "Natural causative."),
      ctx("Your friend proudly says: 'I painted my room myself!'", "Why not 'I had my room painted'?", ["Because she did it herself", "Because it's the past", "Both mean the same"], 0, "Causative = someone else did it."),
      ch("Most natural way to explain why you're late?", ["Sorry, I was getting my glasses fixed.", "Sorry, I was fixing my glasses by an optician.", "Sorry, my glasses got fix."], 0, "Natural causative."),
      say("We're having the kitchen painted this week.", "Stress KITchen and PAINTed."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about a busy week (50 words or more) when you or your family had things done by other people. Use have or get + object + past participle at least three times." },
      { universe: "screens", text: "Imagine you're a famous streamer getting ready for a big event (50 words or more). Use have or get + object + past participle at least three times (I'm having my setup checked…)." },
      { universe: "arts", text: "Describe how a singer or actor gets ready for a show (50 words or more). Use have or get + object + past participle at least three times." },
    ],
    minWords: 50,
    checks: [
      { label: "Three causatives (have / get + object + past participle)", pattern: "\\b(have|has|had|having|get|gets|got|getting)\\s+(my|his|her|their|our|the|a|an|your|its)\\s+(\\w+\\s+){0,2}\\w+(ed|en|t|ne|wn)\\b", min: 3 },
    ],
    rubric: ["Each causative has have/get + object + past participle.", "It's clear that someone else did the job.", "My text is easy to follow."],
    model: "Next week is my sister's wedding, so my family is very busy. On Monday, my dad is getting the car washed. On Tuesday, my mum is having her dress shortened, because it's too long. I'm getting my hair cut on Thursday. My sister is having her nails painted on Friday, and on Saturday we're having photos taken in the park.",
  },
};

const usedTo: NodePractice = {
  nodeId: "b1p.used-to-vs-be-get-used-to",
  explain: "These look similar but mean different things. 'Used to + base verb' is for past habits that are not true now: I used to live in a small town. 'Be used to + -ing or noun' means something is normal for you now: I'm used to waking up early. I'm used to the noise. 'Get used to + -ing or noun' means it is becoming normal, the change is happening: I'm getting used to the traffic. Remember: after be/get used to, use -ing or a noun, never the base verb.",
  pattern: ["used to + base verb = past habit: I used to live in a village.", "be used to + -ing / noun = normal for me now: I'm used to waking up early.", "get used to + -ing / noun = becoming normal: I'm getting used to the noise.", "Negative: I didn't use to like coffee.", "Never: I'm used to wake up ✗"],
  steps: [
    [
      heard(X("04", "notice"), "Where did the speaker live as a child?", ["In a small town", "In Bogotá", "In another country"], 0, "'I used to live in a small town.'"),
      heard(X("04", "notice"), "How did they feel about the noise at first?", ["It was terrible.", "They loved it.", "They didn't notice it."], 0, "'at first the noise was terrible'."),
      heard(X("04", "notice"), "What is normal for them now?", ["The traffic and waking up at five", "Living in a small, quiet town", "Quiet nights with no traffic"], 0, "'I'm used to the traffic… used to waking up at five'."),
      ch("'I used to live in a small town.' Do they live there now?", ["No", "Yes", "Maybe"], 0, "Past habit, not true now."),
      ch("'I'm getting used to the noise' means…", ["It's becoming normal for me.", "It's always been normal.", "I used to like the noise."], 0, "get used to = process."),
    ],
    [
      ch("Which talks about a past habit?", ["I used to play the piano.", "I'm used to playing the piano.", "I'm getting used to playing the piano."], 0, "used to + base verb."),
      ch("After 'be used to', we use…", ["-ing or a noun", "the base verb", "the past simple"], 0, "I'm used to cooking / the cold."),
      ctx("A new student says: 'I'm not used to the food here yet.'", "This means…", ["The food still feels strange to her.", "She used to eat this food as a child.", "She hates all the food in the country."], 0, "not used to = not normal yet."),
      ch("'I didn't use to like coffee' means…", ["In the past, I didn't like coffee (now I do).", "I never like coffee, in the past or now.", "I'm getting used to coffee these days."], 0, "Negative: didn't use to."),
      ch("Which shows a change happening now?", ["I'm getting used to my new school.", "I used to go to a different school.", "I'm used to my school."], 0, "get used to = change in progress."),
    ],
    [
      gap("When I was little, I", "to be afraid of dogs.", ["used"], "used to + base verb."),
      gap("She's used to", "early because she works in a bakery.", ["getting up", "waking up"], "be used to + -ing."),
      tr("Rewrite with 'used to'.", "I played football every Saturday when I was a child, but I don't now.", ["I used to play football every Saturday when I was a child", "When I was a child, I used to play football every Saturday", "When I was a child I used to play football every Saturday"], "used to + base verb."),
      dict(X("04", "dict"), ["I'm getting used to the noise in the city", "I am getting used to the noise in the city"]),
      say("I'm not used to waking up so early.", "Link 'used to': YOOS-tuh."),
    ],
    [
      fix(["I'm used to", "wake up", "at six every day."], 1, ["waking up"], "be used to + -ing."),
      fix(["When I was a kid,", "I was used to play", "video games all day."], 1, ["I used to play"], "Past habit: used to + base verb."),
      fix(["She", "is getting use to", "her new job."], 1, ["is getting used to"], "get used to (with -d)."),
      ch("Which is wrong?", ["I didn't used to like vegetables.", "I didn't use to like vegetables.", "I never used to like vegetables."], 0, "After didn't: use to (no -d)."),
      ch("Which is wrong?", ["I'm used to drive on the left.", "I'm used to driving on the left.", "I used to drive on the left."], 0, "be used to + -ing."),
    ],
    [
      ch("You moved to a cold city a month ago. Best sentence?", ["I'm slowly getting used to the cold.", "I used to the cold now, after a month.", "I'm used to be cold in this city."], 0, "Change in progress."),
      ch("Best sentence in a story about your childhood?", ["We used to climb the mango tree behind our house.", "We are used to climb the tree.", "We get used to climbing the tree yesterday."], 0, "Past habit."),
      ctx("Your friend complains about early classes. You've had them for years.", "What do you say?", ["Don't worry, I'm used to it now.", "I used to it.", "I'm getting used to early classes since ten years."], 0, "Normal for you now."),
      ch("Which is a natural question?", ["Did you use to have long hair?", "Did you used to having long hair?", "Were you used to have long hair?"], 0, "Did … use to + base verb?"),
      say("I used to hate vegetables, but now I'm used to eating them.", "Contrast USED to HATE with now I'm USED to EATing."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about a big change in your life (50 words or more): a new school, city or routine. Use 'used to' for the past, 'be used to' for what's normal now, and 'get used to' for something that's still changing." },
      { universe: "screens", text: "Write about how you used to play games or watch series as a child and what's different now (50 words or more). Use 'used to', 'be used to' and 'get used to'." },
      { universe: "futures", text: "Imagine you've just moved to another country (50 words or more). Use 'used to', 'be used to' and 'get used to' to describe your old life and your new one." },
    ],
    minWords: 50,
    checks: [
      { label: "used to + base verb (past habit)", pattern: "\\b(used to|didn't use to|did not use to)\\s+(be|have|live|play|go|like|eat|watch|get|walk|take|think|love|hate|spend|wake|sleep|study|visit|do|make|ride|drink|listen|read|see|work|speak|stay|feel|want)\\b", min: 1 },
      { label: "be used to + -ing or noun", pattern: "\\b(am|'m|is|'s|are|'re|was|were|not)\\s+used to\\s+(\\w+ing|the|my|a|it|this|that|being)\\b", min: 1 },
      { label: "get used to", pattern: "\\b(get|getting|got|gets)\\s+used to\\b", min: 1 },
    ],
    rubric: ["used to is followed by a base verb.", "be/get used to is followed by -ing or a noun.", "My past and present are clearly different."],
    model: "Two years ago, I moved from Pasto to Medellín. In Pasto, I used to walk to school with my cousins. It was cold, so I used to wear a jacket every day. Now I'm used to the warm weather, and I never wear a jacket. But I'm still getting used to the metro, because it's always full in the morning.",
  },
};

const reported: NodePractice = {
  nodeId: "b1p.reported-requests-and-commands",
  explain: "When you report what someone told or asked another person to do, use tell or ask + person + to + base verb. 'Stay together!' → She told us to stay together. 'Please wait.' → He asked me to wait. For negative commands, put 'not' before 'to': 'Don't touch the paintings.' → She asked us not to touch the paintings. Don't use 'that' or the past tense here: She told us to wait (not 'She told us that we wait').",
  pattern: ["tell + person + to + base verb: She told us to stay together.", "ask + person + to + base verb: He asked me to wait.", "Negative: told / asked + person + not to + base verb", "'Don't film!' → He told me not to film.", "Other verbs: remind, warn, advise + person + (not) to"],
  steps: [
    [
      heard(X("05", "notice"), "What did the guide tell the students to do?", ["Stay together", "Take photos", "Go home"], 0, "'She told us to stay together.'"),
      heard(X("05", "notice"), "What did she ask them not to do?", ["Touch the paintings", "Talk during the tour", "Eat in the museum"], 0, "'She asked us not to touch the paintings.'"),
      heard(X("05", "notice"), "Why did she speak to Leo?", ["He was filming everything.", "He was lost in the museum.", "He was hungry and eating."], 0, "'she told my friend Leo to put his phone away'."),
      ch("'Please close the door,' she said. → She asked me…", ["to close the door.", "close the door.", "that I closed the door."], 0, "ask + person + to + verb."),
      ch("'Don't run!' → He told us…", ["not to run.", "to not running.", "don't run."], 0, "not to + base verb."),
    ],
    [
      ch("Which is the difference between 'tell' and 'ask' here?", ["'Tell' is an order; 'ask' is a polite request.", "They mean exactly the same thing here.", "'Ask' is only used for questions."], 0, "Order vs request."),
      ch("Where does 'not' go in a negative reported command?", ["Before 'to'", "After 'to'", "At the end"], 0, "told me not to go."),
      ctx("Teacher: 'Remember to bring your books!'", "Reported:", ["She reminded us to bring our books.", "She reminded us bring our books.", "She reminded that we bring our books."], 0, "remind + person + to."),
      ch("'Be careful!' → My mum…", ["told me to be careful.", "told to me be careful.", "said me to be careful."], 0, "tell + person + to."),
      ch("Which verb needs a person after it?", ["tell", "say", "both"], 0, "tell someone; say something."),
    ],
    [
      gap("The coach told us", "warm up before the match.", ["to"], "tell + person + to."),
      gap("My dad asked me", "to use my phone at dinner.", ["not"], "ask + person + not to."),
      tr("Report the command.", "'Turn off your cameras,' the teacher said to us.", ["The teacher told us to turn off our cameras"], "told + us + to + verb (pronoun changes: your → our)."),
      dict(X("05", "dict"), ["She told us not to touch the paintings"]),
      say("She asked us not to take photos.", "Stress NOT and PHOtos."),
    ],
    [
      fix(["She told", "us wait", "outside the room."], 1, ["us to wait"], "tell + person + to + verb."),
      fix(["He asked me", "to not", "be late."], 1, ["not to"], "not before to: not to be late."),
      fix(["The doctor said", "me to rest", "for a few days."], 0, ["The doctor told"], "say doesn't take a person + to; use told."),
      ch("Which is wrong?", ["She told that we should hurry.", "She told us to hurry.", "She said that we should hurry."], 0, "tell needs a person: told us."),
      ch("Which is wrong?", ["He asked me don't tell anyone.", "He asked me not to tell anyone.", "He told me not to tell anyone."], 0, "not to + base verb."),
    ],
    [
      ch("Your friend missed the meeting. How do you report the coach's message?", ["The coach told us to arrive at seven.", "The coach told arrive seven.", "The coach said us arriving at seven."], 0, "Clear reported command."),
      ch("Most polite way to report a request from your teacher?", ["She asked us to hand in the essays on Friday.", "She ordered us hand in the essays on Friday.", "She told that essays are on Friday."], 0, "ask = polite request."),
      ctx("Your little brother says: 'Mum told me not to eat the cake.'", "What did Mum say?", ["'Don't eat the cake.'", "'Eat the cake.'", "'Did you eat the cake?'"], 0, "Negative command."),
      ch("Which sentence reports a warning?", ["The guide warned us not to swim there.", "The guide warned us swimming there.", "The guide warned to swim there."], 0, "warn + person + not to."),
      say("The guide told us to stay together.", "Stress GUIDE, STAY and toGETHer."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about a trip or event where someone gave you instructions (50 words or more). Report at least three commands or requests with told/asked + person + (not) to." },
      { universe: "screens", text: "Report the instructions a team captain gave in an online game (50 words or more). Use told/asked + person + (not) to at least three times." },
      { universe: "science", text: "Report the safety instructions your teacher gave in a science lab (50 words or more). Use told/asked/warned + person + (not) to at least three times." },
    ],
    minWords: 50,
    checks: [
      { label: "Three reported commands (told / asked / reminded / warned + person + (not) to)", pattern: "\\b(told|asked|reminded|warned|advised|ordered)\\s+(me|us|him|her|them|you|everyone|my \\w+|the \\w+|\\w+)\\s+(not\\s+)?to\\s+\\w+", min: 3 },
      { label: "At least one negative (not to)", pattern: "\\bnot to\\b", min: 1 },
    ],
    rubric: ["Each command uses a person + (not) to + verb.", "I changed pronouns correctly (your → our).", "My report is clear and complete."],
    model: "Last month we visited a chocolate factory. Before we went in, the guide told us to wash our hands. She asked us not to touch the machines, and she warned us not to go near the hot ovens. At the end, she told everyone to take a free chocolate. My friend asked her to give him two, but she said no!",
  },
};

const changeMeaning: NodePractice = {
  nodeId: "b1p.verbs-that-change-meaning-stop-remember",
  explain: "Some verbs change meaning when you use -ing or to + verb after them. Stop + -ing = finish an activity: I stopped buying energy drinks. Stop + to = stop one thing in order to do another: I stopped to buy water. Remember + -ing = remember something you did before: I remember running my first race. Remember + to = don't forget a task: Remember to send the photos. Forget works the same way: I'll never forget meeting her / Don't forget to call. Try + -ing = do something as an experiment: Try drinking more water. Try + to = make an effort, often difficult: I tried to open the jar, but I couldn't.",
  pattern: ["stop + -ing = finish doing: I stopped buying energy drinks.", "stop + to = stop in order to: I stopped to buy water.", "remember / forget + -ing = a memory of the past", "remember / forget + to = a task (not forget)", "try + -ing = an experiment · try + to = make an effort"],
  steps: [
    [
      heard(X("06", "notice"), "What did the speaker stop doing last year?", ["Buying energy drinks", "Running in the mornings", "Sleeping late on Saturdays"], 0, "'I stopped buying energy drinks'."),
      heard(X("06", "notice"), "Why did they stop on their run yesterday?", ["To buy water", "Because they were tired", "To call the coach"], 0, "'I stopped to buy water'."),
      heard(X("06", "notice"), "What must they remember to do today?", ["Send the coach the photos", "Run a race in the park", "Buy some water for the team"], 0, "'I must remember to send my coach the photos.'"),
      ch("'I stopped to buy water' means…", ["I stopped running in order to buy water.", "I don't buy water any more, I stopped.", "I forgot to buy water."], 0, "stop + to = purpose."),
      ch("'I remember running my first race' is about…", ["a memory from the past", "a task for today", "a future plan"], 0, "remember + -ing = memory."),
    ],
    [
      ch("'I stopped eating meat' means…", ["I don't eat meat any more.", "I stopped in order to eat meat.", "I'm eating meat now."], 0, "stop + -ing = finish a habit."),
      ch("'Remember to lock the door' is…", ["a reminder about a task", "a memory from the past", "a question about the door"], 0, "remember + to = don't forget."),
      ctx("Your friend says: 'I'll never forget seeing the ocean for the first time.'", "This is about…", ["a special memory", "a task he must do", "something he wants to try"], 0, "forget + -ing = memory."),
      ch("'Try turning it off and on again' means…", ["Do this as an experiment to see if it works.", "Make a really big effort with the phone.", "Stop doing it completely."], 0, "try + -ing = experiment."),
      ch("'I tried to lift the box, but it was too heavy' means…", ["I made an effort but failed.", "I lifted it as an experiment.", "I didn't want to lift it."], 0, "try + to = effort."),
    ],
    [
      gap("Don't forget", "your passport!", ["to bring", "to take"], "forget + to = a task."),
      gap("On the way home, we stopped", "some bread.", ["to buy", "to get"], "stop + to = in order to."),
      tr("Rewrite using 'stop'.", "I don't drink fizzy drinks any more.", ["I stopped drinking fizzy drinks", "I have stopped drinking fizzy drinks", "I've stopped drinking fizzy drinks"], "stop + -ing = finish a habit."),
      dict(X("06", "dict"), ["I stopped to buy water on the way home"]),
      say("Remember to send me the photos!", "Stress reMEMber, SEND and PHOtos."),
    ],
    [
      fix(["I need to", "stop to eat", "so much sugar. It's bad for me."], 1, ["stop eating"], "Finish a habit: stop eating."),
      fix(["Did you", "remember locking", "the door before we left? I'm worried."], 1, ["remember to lock"], "A task: remember to lock."),
      fix(["I'll never", "forget to meet", "my favourite singer last year."], 1, ["forget meeting"], "A memory: forget meeting."),
      ch("Which is wrong (the speaker means 'make an effort')?", ["I tried opening the jar, but it was impossible, so I gave up.", "I tried to open the jar, but it was impossible.", "I tried hard to open the jar."], 0, "Effort that fails = try to."),
      ch("Which means 'in order to'?", ["We stopped to look at the view.", "We stopped looking at the view.", "We stop looking the view."], 0, "stop + to = purpose."),
    ],
    [
      ch("You can't sleep. Your friend gives advice. Best sentence?", ["Try reading a book before bed.", "Try to reading a book before bed.", "Stop to read a book before bed."], 0, "try + -ing = suggestion to experiment."),
      ch("Best note to your brother?", ["Remember to feed the cat!", "Remember feeding the cat!", "Remember fed the cat!"], 0, "A task."),
      ctx("In a story: 'Halfway up the mountain, we stopped to rest.'", "This means…", ["We paused in order to rest.", "We never rested again.", "We forgot to rest."], 0, "stop + to."),
      ch("Most natural sentence for a birthday card to your grandma?", ["I'll never forget baking cookies with you.", "I'll never forget to bake cookies with you.", "I never forget bake cookies with you."], 0, "A happy memory."),
      say("I stopped buying energy drinks last year.", "Stress STOPPED, BUYing and LAST year."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about a habit you changed and some special memories (50 words or more). Use at least three of: stop + -ing, stop + to, remember + -ing, remember + to, forget + -ing/to, try + -ing/to." },
      { universe: "screens", text: "Write advice for a friend who plays games too late at night (50 words or more). Use at least three of: stop + -ing, stop + to, remember + to, try + -ing, try + to." },
      { universe: "futures", text: "Write a letter to your future self (50 words or more). Use at least three of: stop + -ing, remember + -ing, remember + to, never forget + -ing, try + to." },
    ],
    minWords: 50,
    checks: [
      { label: "Three patterns (stop / remember / forget / try + -ing or to)", pattern: "\\b(stop|stopped|stopping|stops|remember|remembered|forget|forgot|forgotten|try|tried|trying)\\s+(to\\s+\\w+|\\w+ing)\\b", min: 3 },
    ],
    rubric: ["Each verb has the right form (-ing or to) for my meaning.", "The meanings are clear from the context.", "My text is natural and personal."],
    model: "Last year, I stopped drinking soda because it made me tired. At first it was hard, so I tried drinking water with lemon, and it worked! I also remember feeling much happier after one month. Now, when I go running, I always stop to buy a bottle of water. My mum always tells me: remember to drink more water!",
  },
};

const indirect: NodePractice = {
  nodeId: "b1p.indirect-questions",
  explain: "Indirect questions are more polite than direct questions. They start with a phrase like 'Could you tell me…', 'Do you know…' or 'I was wondering…'. The important rule: after this phrase, the word order is like a normal sentence, not a question. 'Where is the library?' → Could you tell me where the library is? 'What time does it open?' → Do you know what time it opens? (no 'does'). For yes/no questions, use if or whether: 'Is it open?' → Do you know if it's open?",
  pattern: ["Could you tell me / Do you know / I was wondering + question word + subject + verb", "Where is the library? → Could you tell me where the library is?", "What time does it open? → Do you know what time it opens?", "Yes/no: Is it open? → Do you know if / whether it's open?", "No do / does / did after the question word"],
  steps: [
    [
      heard(X("07", "notice"), "What is the speaker looking for?", ["The library", "The bus station", "A café"], 0, "'could you tell me where the library is?'"),
      heard(X("07", "notice"), "What does the speaker want to know about Saturdays?", ["If it's open", "If it's free", "If it's busy"], 0, "'do you know if it's open on Saturdays?'"),
      heard(X("07", "notice"), "What else are they wondering?", ["Whether students can borrow laptops", "Where to buy the course books", "When the classes start next term"], 0, "'I was also wondering whether students can borrow laptops there.'"),
      ch("Which is an indirect question?", ["Could you tell me where the station is?", "Where is the station, please, can you tell me?", "Where the station is, please?"], 0, "Polite phrase + statement word order."),
      ch("In 'Do you know if it's open?', 'if' is used because…", ["the original is a yes/no question", "it's a condition, like 'if it rains'", "the question is about the past"], 0, "Is it open? → if it's open."),
    ],
    [
      ch("Why use indirect questions?", ["They are more polite.", "They are shorter.", "They are only for writing."], 0, "Politeness."),
      ch("'What time does the film start?' → Do you know what time the film…", ["starts?", "does start?", "does it start?"], 0, "No 'does' in indirect questions."),
      ctx("In a shop: 'Excuse me, could you tell me how much this costs?'", "This sounds…", ["polite and natural", "rude", "grammatically wrong"], 0, "Polite indirect question."),
      ch("Which word can replace 'if' in 'Do you know if she's coming?'", ["whether", "that", "what"], 0, "if / whether."),
      ch("'Where did she go?' → I wonder…", ["where she went.", "where did she go.", "where she did go."], 0, "Past: went (no did)."),
    ],
    [
      gap("Could you tell me where the toilets", "?", ["are"], "Statement order: the toilets are."),
      gap("Do you know", "the bus stops here?", ["if", "whether"], "Yes/no question → if / whether."),
      tr("Make it an indirect question starting 'Could you tell me…'.", "When does the museum close?", ["Could you tell me when the museum closes?", "Could you tell me when the museum closes"], "No 'does'; closes."),
      dict(X("07", "dict"), ["Could you tell me where the library is?", "Could you tell me where the library is"]),
      say("Do you know if the shop is open on Sundays?", "Rising intonation at the end."),
    ],
    [
      fix(["Can you tell me", "where is the nearest bank?"], 1, ["where the nearest bank is?", "where the nearest bank is"], "Statement order: where the nearest bank is."),
      fix(["Do you know", "what time does the class start?"], 1, ["what time the class starts?", "what time the class starts"], "No 'does': what time the class starts."),
      fix(["I was wondering", "that", "you could help me."], 1, ["if", "whether"], "Yes/no → if / whether."),
      ch("Which is correct?", ["Do you know where she lives?", "Do you know where does she live?", "Do you know where lives she?"], 0, "Statement order."),
      ch("Which is wrong?", ["Could you tell me what is your name?", "Could you tell me what your name is?", "What's your name?"], 0, "Indirect: what your name is."),
    ],
    [
      ch("You're asking a stranger for directions. Best question?", ["Excuse me, do you know where the metro station is?", "Excuse me, where is it the metro station?", "Tell me where is the metro, please."], 0, "Polite and correct."),
      ch("Most polite email to a teacher?", ["I was wondering if you could explain the homework again.", "Explain the homework again to me, please, I didn't get it.", "What is the homework? Explain it again."], 0, "Indirect = polite."),
      ctx("At a hotel reception, you want to know the Wi-Fi password.", "Best question?", ["Could you tell me what the Wi-Fi password is?", "Could you tell me what is the Wi-Fi password is?", "Wi-Fi password, what is?"], 0, "Correct indirect question."),
      ch("Which is best for a quick question to a close friend?", ["Where's the party?", "I was wondering whether you might possibly know where the party might be?", "Could you kindly inform me of the party's location?"], 0, "Direct is fine with friends."),
      say("Could you tell me how much this jacket costs?", "Polite tone, rising at the end."),
    ],
  ],
  create: {
    prompts: [
      { text: "You've just arrived at a new school or city. Write a polite message (50 words or more) to someone who can help you, with at least three indirect questions (Could you tell me…, Do you know if…, I was wondering whether…)." },
      { universe: "screens", text: "Write a polite message (50 words or more) to a game support team about a problem. Use at least three indirect questions (Could you tell me…, Do you know if…, I was wondering whether…)." },
      { universe: "arts", text: "Write a polite email (50 words or more) to a museum or theatre. Use at least three indirect questions (Could you tell me…, Do you know if…, I was wondering whether…)." },
    ],
    minWords: 50,
    checks: [
      { label: "Three indirect questions (Could you tell me…, Do you know if…, I was wondering…)", pattern: "\\b(could you tell me|can you tell me|do you know|would you know|i was wondering|i wonder|i'd like to know|could you let me know)\\b", min: 3 },
    ],
    rubric: ["After the polite phrase, I used statement word order.", "I used if/whether for yes/no questions.", "My message is polite and clear."],
    model: "Hello! I'm a new student, and I have a few questions. Could you tell me where the computer room is? Do you know if students can use it after school? I was also wondering whether there is a basketball team, because I love basketball. Finally, could you tell me what time the canteen opens? Thank you very much for your help!",
  },
};

const future: NodePractice = {
  nodeId: "b1p.future-continuous-and-future-perfect",
  explain: "The future continuous (will be + -ing) describes an action in progress at a time in the future: This time tomorrow, I'll be flying to Cartagena. The future perfect (will have + past participle) describes something that will be finished before a time in the future: By Friday, I'll have met everyone. 'By' means 'not later than'. These tenses help you plan and imagine: At eight, I'll be studying. By ten, I'll have finished.",
  pattern: ["will be + -ing = in progress at a future time: This time tomorrow I'll be flying.", "will have + past participle = finished before a future time: By June I'll have finished.", "Time phrases: this time tomorrow, at 8 p.m. on Friday · by Friday, by the end of the year", "Negative: I won't be working. · I won't have finished."],
  steps: [
    [
      heard(X("08", "notice"), "What will the speaker be doing this time tomorrow?", ["Flying to Cartagena", "Diving off the coast near Cartagena", "Studying for the exam at home"], 0, "'This time tomorrow, I'll be flying to Cartagena.'"),
      heard(X("08", "notice"), "What will they have done by Friday?", ["Met everyone in their group", "Finished the whole course", "Flown home to their family"], 0, "'By Friday, I'll have met everyone in my group.'"),
      heard(X("08", "notice"), "What will they have finished by the end of July?", ["A diving course", "Their exams", "A book"], 0, "'I'll have finished my first diving course.'"),
      ch("'I'll be flying' is…", ["future continuous", "future perfect", "present continuous"], 0, "will be + -ing."),
      ch("'By June, I'll have finished' means…", ["It will be finished before or in June.", "I'll start working on it in June.", "I finished it last June."], 0, "by = not later than."),
    ],
    [
      ch("Which describes an action in progress at a future time?", ["At 9 p.m. I'll be watching the match.", "By 9 p.m. I'll have watched the match.", "I watched the match at 9 p.m."], 0, "will be + -ing."),
      ch("What does 'by' mean in 'by Friday'?", ["not later than Friday", "near Friday", "because of Friday"], 0, "Deadline."),
      ctx("'Don't call me at eight. I'll be having dinner.'", "Why the future continuous?", ["Dinner will be in progress at eight.", "Dinner will be finished by eight.", "It's a habit from the past."], 0, "In progress at that time."),
      ch("'By the time you arrive, we'll have eaten.' When do we eat?", ["Before you arrive", "After you arrive", "When you arrive"], 0, "Finished before."),
      ch("Which is the negative future perfect?", ["I won't have finished by Monday.", "I won't be finish by Monday.", "I haven't finish by Monday."], 0, "won't have + past participle."),
    ],
    [
      gap("This time next week, we'll be", "on the beach.", ["lying", "relaxing", "sitting", "swimming", "playing"], "will be + -ing."),
      gap("By the end of the year, I'll have", "ten books.", ["read"], "will have + past participle."),
      tr("Rewrite with 'by' and the future perfect.", "I will finish my project before Friday.", ["I will have finished my project by Friday", "I'll have finished my project by Friday", "By Friday I will have finished my project", "By Friday, I'll have finished my project", "By Friday I'll have finished my project"], "will have + past participle + by."),
      dict(X("08", "dict"), ["By June, I'll have finished all my exams", "By June I will have finished all my exams", "By June, I will have finished all my exams"]),
      say("This time tomorrow, I'll be flying to Cartagena.", "Link 'I'll be': ail-bee."),
    ],
    [
      fix(["By next month,", "I will finish", "all my exams, so I'll be free."], 1, ["I will have finished", "I'll have finished"], "With 'by' + a future time: will have finished."),
      fix(["Don't call at nine.", "I'll study", "then."], 1, ["I'll be studying", "I will be studying"], "In progress at nine: will be studying."),
      fix(["By 2030,", "scientists will have find", "a cure."], 1, ["scientists will have found"], "Past participle: found."),
      ch("Which is wrong?", ["This time tomorrow I'll have flying to Lima.", "This time tomorrow I'll be flying to Lima.", "By tomorrow night I'll have arrived in Lima."], 0, "In progress: will be flying."),
      ch("Which is wrong?", ["I'll be finished my homework by six.", "I'll have finished my homework by six.", "My homework will be finished by six."], 0, "will have finished."),
    ],
    [
      ch("Your friend wants to call you during your exam tomorrow at ten. You say…", ["I'll be doing my exam then.", "I'll have done my exam then.", "I do my exam then."], 0, "In progress."),
      ch("Best sentence for a goal-setting post?", ["By December, I'll have saved enough for a new bike.", "By December, I'll be save enough for a new bike.", "December, I save money and buy bike."], 0, "Future perfect for goals."),
      ctx("You're writing a postcard about your plans.", "Best sentence?", ["When you read this, I'll be swimming in the Caribbean!", "When you read this, I swim in the Caribbean yesterday!", "When you read this, I'll have swim."], 0, "Future continuous for an imagined moment."),
      ch("Which sounds most natural in a plan?", ["By the time the party starts, we'll have decorated everything.", "By the time the party starts, we'll be decorated everything.", "The party starts, we decorated."], 0, "Finished before."),
      say("By Friday, I'll have met everyone in my group.", "Stress FRIday, MET and GROUP."),
    ],
  ],
  create: {
    prompts: [
      { text: "Imagine your life in five years (50 words or more). Use the future continuous at least once (I'll be living…) and the future perfect at least twice (I'll have finished…, by then I'll have…)." },
      { universe: "science", text: "Imagine a space mission in 2040 (50 words or more). Use the future continuous at least once and the future perfect at least twice (By 2040, astronauts will have…)." },
      { universe: "futures", text: "Write about your plans for next summer (50 words or more). Use the future continuous at least once and the future perfect at least twice." },
    ],
    minWords: 50,
    checks: [
      { label: "Future continuous (will be + -ing)", pattern: "\\b(will|'ll|won't)\\s+(not\\s+)?be\\s+\\w+ing\\b", min: 1 },
      { label: "Two future perfects (will have + past participle)", pattern: "\\b(will|'ll|won't)\\s+(not\\s+)?have\\s+\\w+(ed|en|t|wn|ne|un|ught|id|de)\\b", min: 2 },
    ],
    rubric: ["will be + -ing describes something in progress.", "will have + past participle describes something finished before a time.", "My plans are clear and believable."],
    model: "In five years, I'll be living in Bogotá and studying engineering at university. By then, I'll have finished school, and I'll have travelled to at least two countries. I hope I'll have learned to drive too. On weekends, I'll be working in a café to save money. By the time I'm twenty-two, I'll have saved enough for my own apartment.",
  },
};

const soSuch: NodePractice = {
  nodeId: "b1p.so-such-that-relative-whose",
  explain: "Use so and such to show a strong result. So + adjective or adverb + that: The ending was so sad that my sister cried. Such + (a/an) + adjective + noun + that: It was such a good film that I watched it twice. With plural or uncountable nouns, there is no 'a': They were such nice people. It was such bad weather. Use the relative pronoun whose to show possession (= his, her, their): The director, whose first film won an award, is only twenty-five. I have a friend whose brother is a pilot.",
  pattern: ["so + adjective + that: It was so cold that we stayed inside.", "such + a/an + adjective + noun + that: It was such a long day that I fell asleep.", "such + adjective + plural/uncountable noun: such nice people · such bad weather", "whose + noun = his / her / their: a friend whose brother is a pilot", "Use whose for people (and sometimes things): a city whose streets are famous"],
  steps: [
    [
      heard(X("09", "notice"), "Why did the speaker watch the film twice?", ["It was such a good film.", "They missed the ending.", "Their sister asked them to."], 0, "'It was such a good film that I watched it twice.'"),
      heard(X("09", "notice"), "Why did the sister cry?", ["The ending was so sad.", "The film was too long.", "She lost her ticket."], 0, "'The ending was so sad that my sister cried.'"),
      heard(X("09", "notice"), "What do we learn about the director?", ["Their first film won an award.", "They are very old.", "They are the speaker's brother."], 0, "'The director, whose first film won an award…'"),
      ch("'such a good film' uses such because…", ["it's followed by a/an + adjective + noun", "it's followed only by an adjective", "it's a question"], 0, "such + a + adjective + noun."),
      ch("'whose' shows…", ["possession (his/her/their)", "a place, like 'where'", "a time, like 'when'"], 0, "whose = possession."),
    ],
    [
      ch("Which is correct?", ["It was so cold that we stayed home.", "It was such cold that we stayed home.", "It was so a cold day that we stayed home."], 0, "so + adjective."),
      ch("Which is correct?", ["They were such kind people.", "They were such a kind people.", "They were so kind people."], 0, "such + adjective + plural noun (no a)."),
      ctx("'I have a friend whose mum is a pilot.'", "Who is the pilot?", ["My friend's mum", "My friend", "My mum"], 0, "whose mum = my friend's mum."),
      ch("'so' or 'such': '___ a long journey'", ["such", "so", "either"], 0, "such + a + adjective + noun."),
      ch("What does 'that' introduce in 'so tired that I fell asleep'?", ["the result", "the reason", "a question"], 0, "so … that = result."),
    ],
    [
      gap("The test was", "difficult that nobody finished it.", ["so"], "so + adjective + that."),
      gap("It was", "a funny video that I sent it to everyone.", ["such"], "such + a + adjective + noun."),
      tr("Join the sentences with 'whose'.", "I met a girl. Her father is a famous chef.", ["I met a girl whose father is a famous chef"], "whose father = her father."),
      dict(X("09", "dict"), ["It was such a good film that I watched it twice"]),
      say("The concert was so loud that my ears hurt.", "Stress SO, LOUD and HURT."),
    ],
    [
      fix(["It was", "so a good game", "that we played all night."], 1, ["such a good game"], "such + a + adjective + noun."),
      fix(["The weather was", "such hot", "that we went to the river."], 1, ["so hot"], "so + adjective."),
      fix(["That's the singer", "who's", "songs are on every playlist."], 1, ["whose"], "Possession: whose (who's = who is)."),
      ch("Which is wrong?", ["They're such a nice neighbours.", "They're such nice neighbours.", "They're so nice."], 0, "No 'a' with plural nouns."),
      ch("Which is wrong?", ["I know a boy who his sister is a singer.", "I know a boy whose sister is a singer.", "I know a boy. His sister is a singer."], 0, "Use whose, not who his."),
    ],
    [
      ch("Best sentence for a film review?", ["The story was so exciting that I forgot to eat my popcorn.", "The story was such exciting that I forgot to eat my popcorn.", "Story was so exciting so I forgot eating my popcorn."], 0, "so + adjective + that."),
      ch("Best sentence to describe a great trip?", ["We had such a great time that we didn't want to leave.", "We had so a great time that we didn't leave.", "We had such great time leave."], 0, "such + a + adjective + noun."),
      ctx("You're introducing a classmate in a presentation.", "Best sentence?", ["This is Camila, whose drawings won the school prize.", "This is Camila, who her drawings won the school prize.", "This is Camila, which drawings won the school prize."], 0, "whose for possession."),
      ch("Which is most natural in a story?", ["It was such a dark night that we couldn't see the path.", "It was so a dark night that we couldn't see.", "The night was such dark."], 0, "such a dark night."),
      say("It was such a good film that I watched it twice.", "Stress SUCH, GOOD and TWICE."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short review (50 words or more) of a film, book or concert. Use so … that once, such … that once, and whose at least once." },
      { universe: "screens", text: "Write about a series or game you loved (50 words or more). Use so … that once, such … that once, and whose at least once." },
      { universe: "past", text: "Write about a famous person from history (50 words or more). Use so … that once, such … that once, and whose at least once." },
    ],
    minWords: 50,
    checks: [
      { label: "so + adjective + that", pattern: "\\bso\\s+\\w+\\s+that\\b", min: 1 },
      { label: "such + (a) + adjective + noun + that", pattern: "\\bsuch\\s+(a\\s+|an\\s+)?\\w+\\s+\\w+(\\s+\\w+)?\\s+that\\b", min: 1 },
      { label: "whose + noun", pattern: "\\bwhose\\s+\\w+", min: 1 },
    ],
    rubric: ["so goes with an adjective; such goes with a noun.", "whose shows possession.", "My review gives a clear opinion."],
    model: "Last weekend I watched a Colombian film called Rainy Days. It was such a beautiful film that I want to see it again. The main character is a young girl whose father works on a boat. The story was so moving that half the cinema was crying at the end. The music was amazing too. I really recommend it.",
  },
};

export const B1P_GRAMMAR: NodePractice[] = [third, passive, causative, usedTo, reported, changeMeaning, indirect, future, soSuch];
