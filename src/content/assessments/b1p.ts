/**
 * B1+ Midpoint and Gate. Original texts written for Bandwidth EFL.
 * Listening audio: ElevenLabs AI voices, in the public `listening` bucket.
 * Choice options are written answer-first; the player shuffles them.
 */
import { ch, gap } from "../practice/helpers";
import type { BandAssessment } from "./types";

export const B1P_ASSESSMENT_CLIPS: { file: string; voice: string; script: string }[] = [
  { file: "p/b1pmid-l1.mp3", voice: "cgSgspJ2msm6clMCkdW9",
    script: "Hi, it's Valentina. Quick message about Saturday. The volunteer day at the animal shelter has been moved to Sunday, because it's going to rain on Saturday. We're meeting at the main gate at nine, not ten. Please bring old clothes, because the dogs get very excited! Oh, and could you tell Mateo? I don't have his number. Thanks!" },
  { file: "p/b1pmid-l2.mp3", voice: "3f6pec3wODJsjTqtcNI2",
    script: "Today I'm going to talk about how a smartphone is recycled. First, the battery is removed, because it can be dangerous. Then the phone is broken into small pieces. Once that's done, the metals are separated. Gold, copper and silver can be used again in new phones. Finally, the plastic is melted and made into other products. So, if you have an old phone at home, don't throw it away." },
  { file: "p/b1pgate-l1.mp3", voice: "ideEOMYLgcyF9rr94ycz",
    script: "When I was fifteen, I used to spend six hours a day on my phone. I didn't think it was a problem. But my grades went down, and I was always tired. Then my teacher pointed out that I never had time to read. So I tried an experiment. I stopped using my phone after nine p.m. At first it was hard, but I got used to it. If I hadn't tried, I would never have discovered how much I love books." },
  { file: "p/b1pgate-l2.mp3", voice: "63T2Z5X6a8FKjTpmpqjH",
    script: "OK, everyone, let's decide on the class trip. Sofía, what do you think? I think the museum is a great idea, and maybe we could also visit the botanical garden, because it's next door. Sorry, Andrés, go ahead. You were saying? Right, the bus is cheaper than the train. So, the museum and the garden, by bus. Does everyone agree? Great, let's vote." },
];

export const B1P_MIDPOINT: BandAssessment = {
  band: "B1+",
  kind: "midpoint",
  title: "B1+ Midpoint",
  story: "Halfway through B1+. A short check across all four skills, so any gaps show up now.",
  bar: 70,
  reading: [{
    id: "b1p-mid-r1",
    title: "The app that saves food",
    text:
`Every year, restaurants and bakeries throw away tonnes of food that is still good to eat. A few years ago, two university students in Bogotá decided to do something about it. They created an app that connects shops with people who want to buy their extra food at a lower price.

The idea is simple. At the end of the day, a bakery posts a "surprise bag" on the app. Users pay about a third of the normal price and collect the bag before the shop closes. Nobody knows exactly what will be inside, which is part of the fun.

The app has been downloaded more than two hundred thousand times. As far as the founders are concerned, the most important result is not the money but the food: they say over a million meals have been saved so far.

Of course, the app is not perfect. Some users complain that the bags are sometimes too small, and others say that popular shops sell out in minutes. Having said that, most users are happy. One student told us: "I used to spend a lot on lunch. Now I'm used to getting my surprise bag every Friday, and I've discovered bakeries I never knew existed."`,
    items: [
      ch("What problem does the app try to solve?", ["Shops throwing away good food", "Students not having time to cook", "Bakeries closing early"], 0, "Paragraph 1."),
      ch("How much do users pay for a surprise bag?", ["About a third of the normal price", "The normal price", "Nothing"], 0, "'about a third of the normal price'."),
      ch("According to the founders, what is the most important result?", ["The food that has been saved", "The money they've made", "The number of downloads"], 0, "'not the money but the food'."),
      ch("What is one complaint about the app?", ["Popular shops sell out very quickly.", "The food is old.", "It's too expensive."], 0, "'popular shops sell out in minutes'."),
      ch("What does the student mean by 'Now I'm used to getting my surprise bag every Friday'?", ["It has become a normal habit for her.", "She used to do it in the past.", "She doesn't like it."], 0, "be used to + -ing."),
      gap("The app has", "downloaded more than two hundred thousand times.", ["been"], "Present perfect passive."),
    ],
  }],
  listening: [
    {
      id: "b1p-mid-l1", title: "A voice message", audio: "p/b1pmid-l1.mp3", speaker: "A voice message from a friend",
      items: [
        ch("Why has the volunteer day been moved?", ["Because it's going to rain on Saturday", "Because the shelter is closed", "Because Valentina is busy"], 0, "'because it's going to rain on Saturday'."),
        ch("What time are they meeting?", ["At nine", "At ten", "At eleven"], 0, "'at nine, not ten'."),
        ch("What does Valentina ask?", ["To tell Mateo about the change", "To bring food for the dogs", "To call her back"], 0, "'could you tell Mateo?'"),
      ],
    },
    {
      id: "b1p-mid-l2", title: "A short presentation", audio: "p/b1pmid-l2.mp3", speaker: "A student presentation",
      items: [
        ch("What happens first when a phone is recycled?", ["The battery is removed.", "The phone is melted.", "The metals are separated."], 0, "'First, the battery is removed'."),
        ch("Which metals can be used again?", ["Gold, copper and silver", "Iron and steel", "Aluminium only"], 0, "'Gold, copper and silver can be used again'."),
        ch("What is the speaker's final advice?", ["Don't throw old phones away.", "Buy a new phone every year.", "Keep the battery."], 0, "'don't throw it away'."),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write a short article for your school website (100 words or more): 'Should schools have a food-saving app?' Give your opinion, at least one reason, the other side, and a conclusion." },
      { text: "Write a short review (100 words or more) of an app, game or website you use. Describe it, say what you like and don't like, and give a recommendation." },
    ],
    minWords: 100,
    checks: [
      { label: "Your opinion (In my opinion, As far as I'm concerned, I think…)", pattern: "\\b(in my (view|opinion)|as far as i'?m concerned|i (strongly )?(think|believe)|personally|to be honest)\\b", min: 1 },
      { label: "A reason (because, since, so…)", pattern: "\\b(because|since|so|that'?s why)\\b", min: 1 },
      { label: "The other side (On the other hand, Having said that, However, but…)", pattern: "\\b(on the other hand|having said that|however|but|although|whereas)\\b", min: 1 },
      { label: "A conclusion or recommendation (All in all, To sum up, I recommend…)", pattern: "\\b(all in all|to sum up|in conclusion|overall|on the whole|i (would )?recommend)\\b", min: 1 },
    ],
    rubric: ["My opinion is clear.", "I gave reasons and the other side.", "I checked verb forms and spelling."],
    model: "As far as I'm concerned, every school should have a food-saving app. Our canteen throws away a lot of food every day, and it's a waste of money and resources. With an app, students could buy extra sandwiches and fruit at a lower price after lunch, so less food would end up in the bin. It would also raise awareness about food waste. On the other hand, some people think it would be difficult to organise, because someone has to post the food every day. Having said that, student volunteers could take turns. All in all, I strongly believe it would make a big difference.",
  },
  speaking: {
    prompts: [
      { text: "Talk for about 45 seconds: describe a habit you used to have and a new habit you're getting used to. Explain why you changed." },
      { text: "Talk for about 45 seconds: give a short presentation about your favourite place in your city. Use an introduction, two points and a conclusion." },
    ],
    minWords: 60,
    seconds: 45,
    checks: [
      { label: "A clear start (Today I'm going to talk about / I'd like to talk about / I used to…)", pattern: "\\b(today i'?m going to talk|i'?d like to talk|i'?m going to talk|i used to|when i was)\\b", min: 1 },
      { label: "A reason (because, so, that's why)", pattern: "\\b(because|so|that'?s why|since)\\b", min: 1 },
      { label: "A sequence or signpost (First, Then, Also, Finally…)", pattern: "\\b(first|then|also|finally|another|now|at first)\\b", min: 1 },
      { label: "An ending (To sum up, All in all, That's why…)", pattern: "\\b(to sum up|all in all|that'?s why|in the end|so now|thank you)\\b", min: 1 },
    ],
    rubric: ["I spoke for about 45 seconds without reading.", "I gave a reason and an example.", "My ending was clear."],
    model: "When I was younger, I used to eat a lot of sweets after school. My mum always pointed out that it wasn't healthy, but I didn't listen. Then my dentist told me I had three cavities! So I decided to change. Now I'm getting used to eating fruit instead. At first it was hard, but now I actually like mangoes more than chocolate. All in all, I feel better and my teeth are happier.",
  },
};

export const B1P_GATE: BandAssessment = {
  band: "B1+",
  kind: "gate",
  title: "B1+ Gate",
  story: "The final check for B1+. Pass it, your teacher confirms your writing and speaking, and B2 opens.",
  bar: 75,
  reading: [
    {
      id: "b1p-gate-r1",
      title: "Learning to fail",
      text:
`Most of us are taught that failing is bad. At school, a low grade can feel like the end of the world. But many successful people say that their failures taught them more than their successes.

Take the inventor of a famous vacuum cleaner. He made more than five thousand prototypes before one finally worked. If he had given up after the first hundred, his company would never have existed. Or think of the writer whose first book was turned down by twelve publishers. She kept going, and it ended up becoming one of the best-selling series in history.

Psychologists say that people who see mistakes as information, not as proof that they are "bad" at something, learn faster. They call this a growth mindset. Instead of thinking "I can't do maths", they think "I can't do maths yet."

Of course, this doesn't mean that failing feels good. It doesn't. But if we stop being so afraid of mistakes, we might try more things, and in the long run, we might discover what we are really good at.`,
      items: [
        ch("What is the main idea of the text?", ["Failure can help us learn and succeed.", "Failure should be avoided at all costs.", "Only inventors fail."], 0, "Main idea."),
        ch("What does the inventor example show?", ["Persistence after many failures can lead to success.", "Vacuum cleaners are easy to make.", "He failed only once."], 0, "Over five thousand prototypes."),
        ch("What happened to the writer's first book?", ["It was turned down by twelve publishers, but it ended up very successful.", "It was published immediately.", "She never published it."], 0, "turned down … ended up."),
        ch("What is a 'growth mindset'?", ["Seeing mistakes as information to learn from", "Believing you're bad at things", "Never making mistakes"], 0, "Paragraph 3."),
        ch("What does the writer admit in the last paragraph?", ["Failing doesn't feel good.", "Failing is always fun.", "Mistakes are not important."], 0, "'It doesn't.'"),
      ],
    },
    {
      id: "b1p-gate-r2",
      title: "Review: The Floating Market",
      text:
`If you're looking for something different to do this weekend, the new Floating Market in Guatapé is ideal for families and groups of friends.

The market is set on wooden boats on the lake, and you move from boat to boat on small bridges. Food: there are more than twenty stalls, from fresh fruit juice to grilled fish. The empanadas were so good that we went back for more. Prices: most dishes cost between eight and fifteen thousand pesos, which is reasonable for a tourist area. Atmosphere: there is live music every afternoon, and the views of the lake are stunning.

On the other hand, there are a few problems. It gets very crowded at weekends, so arrive before eleven if you can. Also, there isn't much shade, so bring a hat and sun cream. Finally, people in wheelchairs may find the bridges difficult.

All in all, the Floating Market is a fun and tasty day out. I would recommend it to anyone who loves food and doesn't mind crowds.`,
      items: [
        ch("Who is the market ideal for, according to the review?", ["Families and groups of friends", "People who hate crowds", "Only tourists from abroad"], 0, "First paragraph."),
        ch("What did the writer think of the empanadas?", ["They were so good that they went back for more.", "They were too expensive.", "They were cold."], 0, "so … that."),
        ch("What advice does the writer give about crowds?", ["Arrive before eleven.", "Go at night.", "Go on a weekday only."], 0, "'arrive before eleven if you can'."),
        ch("Which problem is mentioned?", ["There isn't much shade.", "There is no music.", "The food is bad."], 0, "Paragraph 3."),
        ch("How is the review organised?", ["Introduction, sections (food, prices, atmosphere), problems, recommendation", "Only a list of prices", "A story with no opinions"], 0, "Review structure."),
      ],
    },
  ],
  listening: [
    {
      id: "b1p-gate-l1", title: "A personal story", audio: "p/b1pgate-l1.mp3", speaker: "A student talking about a change",
      items: [
        ch("How much time did the speaker use to spend on their phone?", ["Six hours a day", "Two hours a day", "Six hours a week"], 0, "'I used to spend six hours a day'."),
        ch("Who pointed out the problem?", ["A teacher", "A parent", "A friend"], 0, "'my teacher pointed out…'"),
        ch("What experiment did the speaker try?", ["Not using the phone after nine p.m.", "Deleting all apps", "Giving the phone away"], 0, "'I stopped using my phone after nine p.m.'"),
        ch("What did the speaker discover?", ["How much they love books", "A new app", "That they need more sleep"], 0, "'If I hadn't tried, I would never have discovered how much I love books.'"),
      ],
    },
    {
      id: "b1p-gate-l2", title: "A group discussion", audio: "p/b1pgate-l2.mp3", speaker: "A student leading a discussion",
      items: [
        ch("What is the group deciding?", ["The class trip", "A project topic", "A party date"], 0, "'let's decide on the class trip'."),
        ch("Why does Sofía suggest the botanical garden?", ["It's next to the museum.", "It's free.", "It's her favourite place."], 0, "'because it's next door'."),
        ch("What does the leader say to Andrés?", ["Sorry, go ahead. You were saying?", "Please be quiet.", "You're wrong."], 0, "Giving the turn back."),
        ch("How will they travel?", ["By bus", "By train", "On foot"], 0, "'the bus is cheaper than the train'."),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Write an article (150 words or more), in at least three paragraphs: 'Is failure a good teacher?' Give your opinion, an example from your life or someone you know, the other side, and a conclusion." },
      { text: "Write a review (150 words or more), in at least three paragraphs, of a place you know well (a restaurant, park, museum or shop). Use headings or clear sections, mention good and bad points, and give a recommendation." },
    ],
    minWords: 150,
    checks: [
      { label: "At least three paragraphs (leave a blank line between them)", pattern: "\\n\\s*\\n", min: 2 },
      { label: "Your opinion or a recommendation (In my opinion, As far as I'm concerned, I recommend…)", pattern: "\\b(in my (view|opinion)|as far as i'?m concerned|i (strongly )?(think|believe)|personally|i (would )?recommend)\\b", min: 1 },
      { label: "The other side (On the other hand, Having said that, However, Whereas…)", pattern: "\\b(on the other hand|having said that|however|whereas|although)\\b", min: 1 },
      { label: "A third conditional or past regret (If I had …, I would have …)", pattern: "\\bif\\b[^.!?]*\\b(had|'d)\\b[^.!?]*\\b(would|wouldn't|could|might)\\s+(not\\s+)?have\\b|\\b(would|wouldn't)\\s+(not\\s+)?have\\b[^.!?]*\\bif\\b", min: 1 },
      { label: "A conclusion (All in all, To sum up, In conclusion…)", pattern: "\\b(all in all|to sum up|in conclusion|overall|on the whole)\\b", min: 1 },
    ],
    rubric: ["My text has a clear structure with paragraphs.", "I gave examples and the other side.", "My grammar is varied (conditionals, passives, used to).", "My conclusion is clear."],
    model: "Most people think that failing is a disaster. As far as I'm concerned, failure is one of the best teachers we have, because it shows us exactly what we need to improve.\n\nLast year, I failed my first piano exam. I was so nervous that I forgot half of the piece. If I had practised in front of people, I wouldn't have panicked. After that, I started playing for my family every Sunday, and I got used to performing. Six months later, I passed the exam with a high grade.\n\nOn the other hand, failure can be very painful, especially when other people see it. Some students stop trying because they are afraid of looking stupid. Having said that, everyone fails sometimes, even famous inventors and writers.\n\nAll in all, I strongly believe that failure is a good teacher, as long as we learn from it, ask for help and keep going.",
  },
  speaking: {
    prompts: [
      { text: "Talk for about a minute: tell the story of a mistake or failure that taught you something. What happened? What would you do differently? What did you learn?" },
      { text: "Talk for about a minute: compare two places to spend a weekend in your region, and recommend one. Give reasons." },
    ],
    minWords: 90,
    seconds: 65,
    checks: [
      { label: "A clear start (Today I'm going to talk about / I'd like to tell you about / Last year…)", pattern: "\\b(today i'?m going to talk|i'?d like to (tell|talk)|i'?m going to talk|last (year|month|week|summer)|when i was)\\b", min: 1 },
      { label: "A reason (because, so, that's why…)", pattern: "\\b(because|so|that'?s why|since)\\b", min: 1 },
      { label: "A comparison or the other side (whereas, on the other hand, but, however…)", pattern: "\\b(whereas|on the other hand|but|however|while|having said that)\\b", min: 1 },
      { label: "A past regret or lesson (If I had…, I would have… / I learned that…)", pattern: "\\bif i (had|'d)\\b|\\bwould have\\b|\\bi learn(ed|t) that\\b|\\bi recommend\\b", min: 1 },
      { label: "A conclusion (All in all, To sum up, That's why…)", pattern: "\\b(all in all|to sum up|that'?s why|in the end|so now)\\b", min: 1 },
    ],
    rubric: ["I spoke for about a minute with a clear beginning, middle and end.", "I used reasons and examples.", "I stressed important words and paused between ideas."],
    model: "I'd like to tell you about a mistake I made last year. I was the captain of my volleyball team, and before the final I didn't listen to anyone. I decided everything myself, because I thought I knew best. We lost the match badly. Afterwards, one of my teammates told me that nobody felt part of the team. If I had asked for their ideas, we would have played better together. Having said that, it was a really useful lesson. Now I always ask, 'What do you think?' before I make a decision. All in all, I learned that a good leader listens first.",
  },
};
