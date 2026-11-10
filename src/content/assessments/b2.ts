/**
 * B2 Midpoint and Gate. Original texts written for Bandwidth EFL.
 * Listening audio: ElevenLabs AI voices, in the public `listening` bucket.
 * Choice options are written answer-first; the player shuffles them.
 */
import { ch, gap } from "../practice/helpers";
import type { BandAssessment } from "./types";

export const B2_ASSESSMENT_CLIPS: { file: string; voice: string; script: string }[] = [
  { file: "p/b2mid-l1.mp3", voice: "ideEOMYLgcyF9rr94ycz",
    script: "So, the beach clean-up. Honestly, I only signed up because my friend dragged me along. We started at six in the morning, which, admittedly, wasn't my favourite part. But by ten o'clock we'd filled over two hundred bags, mostly with plastic bottles and bottle caps. What surprised me most wasn't the rubbish, though. It was how many people stopped to ask what we were doing, and then just joined in. A fisherman even lent us his cart. Next month we're going back, and this time I'm the one dragging my friends." },
  { file: "p/b2mid-l2.mp3", voice: "MAy1fRIg5hTqbhiwOUyh",
    script: "Hi everyone, it's Coach Ramírez. Quick change for Saturday's tournament. The first match has been moved from nine to half past ten, because the other team's bus can't get there any earlier. That means we'll meet at the school at nine forty-five, not eight. Please bring your own water. The stadium has stopped selling plastic bottles. And if you haven't returned your permission form yet, I need it by Thursday at the latest, or I'm afraid you won't be able to play." },
  { file: "p/b2gate-l1.mp3", voice: "tPDVQaZ6fdDCUmYpHyYd",
    script: "Welcome to the farm. Before we start, a quick word about why our coffee tastes the way it does. We grow it on the side of the mountain, at around seventeen hundred metres. Up here, the cool nights slow the cherries down, so they ripen more gradually, and that tends to give the coffee a sweeter, more complex flavour. Everything is picked by hand. That might sound old-fashioned, but a machine can't tell a ripe cherry from a green one, and a single green cherry can spoil the taste of a whole batch. Now, some visitors ask whether climate change is a problem for us. The short answer is yes. The ideal growing zone is slowly moving uphill, and eventually, farms like ours may simply run out of mountain." },
  { file: "p/b2gate-l2.mp3", voice: "9hb1f7xQcMLB90qbYSY3",
    script: "The motion today is that schools should ban AI tools for homework. I'm speaking against it. Admittedly, there's a real risk that some students will let a chatbot do their thinking for them. Nobody on this side denies that. Even so, a ban seems to me both unrealistic and, frankly, a missed opportunity. Unrealistic, because the tools are on every phone in this room. A missed opportunity, because the skill that will actually matter is knowing when an answer is wrong. So rather than pretending these tools don't exist, schools could design homework that asks students to check, correct and improve what the AI produces. That, arguably, is harder than writing it from scratch." },
];

export const B2_MIDPOINT: BandAssessment = {
  band: "B2",
  kind: "midpoint",
  title: "B2 Midpoint",
  story: "Halfway through B2. One short check across all four skills, so any gaps show up now instead of at the Gate.",
  bar: 70,
  reading: [{
    id: "mid-r1",
    title: "Walls that talk",
    text:
`Twenty years ago, anyone painting on a wall in Bogotá risked a fine, or worse. Today, tourists pay to join graffiti tours, and some of the city's best-known murals appear on postcards. How did something once treated as vandalism become part of the city's identity?

Part of the answer is a tragedy. In 2011, a young graffiti artist was shot by a police officer while painting under a bridge. The public anger that followed pushed the city to rethink its approach, and new rules made it possible for artists to paint many walls legally, as long as the owner agreed.

Not everyone is convinced. Some shop owners complain that once one wall is painted, others are covered in tags: quick signatures that, unlike murals, rarely add anything to a street. Critics also point out that tours tend to take visitors to the same few blocks, while artists in poorer neighbourhoods see little of the money.

Supporters admit these problems are real. Nevertheless, they argue that the murals have given a voice to people who are rarely heard, telling stories about the armed conflict, indigenous history and the environment that you won't find in a museum. As one artist put it, "A museum waits for you to come in. A wall comes out to meet you."

Whether the city can keep that energy without losing control of its streets is still an open question. What seems clear is that, for many young people, the walls are where Bogotá talks back.`,
    items: [
      ch("What is the main idea of the article?", ["Street art in Bogotá has gone from being punished to being part of the city's identity, though not without problems.", "Graffiti tours are the best way to see Bogotá.", "The city should ban tags but keep murals."], 0, "The first and last paragraphs frame the whole change."),
      ch("What helped change the city's rules?", ["Public anger after a young artist was killed", "A rise in tourism", "Complaints from shop owners"], 0, "Paragraph 2: 'The public anger that followed pushed the city to rethink…'"),
      ch("Under the new rules, artists can paint a wall legally if…", ["the owner agrees", "they pay a fee", "it is in a poor neighbourhood"], 0, "'as long as the owner agreed'."),
      ch("What is the critics' point about the tours?", ["They don't share the benefits fairly.", "They are too expensive for tourists.", "They damage the murals."], 0, "Tours visit 'the same few blocks', while some artists 'see little of the money'."),
      ch("In paragraph 4, 'Supporters admit these problems are real. Nevertheless, …' The writer is…", ["presenting a concession, then the supporters' main argument", "changing the topic", "agreeing with the critics"], 0, "Concede, then counter."),
      gap("The artist compares a museum, which waits for you, with a wall, which comes out to", "you.", ["meet"], "Quoted in paragraph 4."),
    ],
  }],
  listening: [
    {
      id: "mid-l1", title: "The beach clean-up", audio: "p/b2mid-l1.mp3", speaker: "Speaker from Nigeria",
      items: [
        ch("Why did the speaker first take part?", ["A friend persuaded him to go.", "His school made it compulsory.", "He wanted to meet fishermen."], 0, "'my friend dragged me along'."),
        ch("What surprised him most?", ["How many passers-by joined in", "How much plastic there was", "How early they had to start"], 0, "'What surprised me most wasn't the rubbish… It was how many people… joined in.'"),
        ch("What does he plan to do next month?", ["Go back and bring his friends", "Organise a clean-up on another beach", "Stop volunteering"], 0, "'this time I'm the one dragging my friends'."),
      ],
    },
    {
      id: "mid-l2", title: "A message from the coach", audio: "p/b2mid-l2.mp3", speaker: "Speaker from Scotland",
      items: [
        ch("Why has the first match been moved?", ["The other team can't arrive earlier.", "The stadium is closed in the morning.", "The coach has another match."], 0, "'the other team's bus can't get there any earlier'."),
        gap("The team will meet at the school at", "on Saturday.", ["9:45", "nine forty-five", "9.45", "quarter to ten", "a quarter to ten"], "'we'll meet at the school at nine forty-five'."),
        ch("What happens if a player doesn't return the form by Thursday?", ["They won't be allowed to play.", "They will have to pay a fine.", "They must bring it on Saturday."], 0, "'or I'm afraid you won't be able to play'."),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Your school wants to replace one hour of PE a week with extra maths. Write a short opinion piece for the school website. Give your view, admit one point from the other side, then answer it." },
      { text: "Some parents pay their children for good grades. Is this a good idea? Write a short opinion piece. Give your view, admit one point from the other side, then answer it." },
    ],
    minWords: 120,
    checks: [
      { label: "Your opinion (In my view, I believe, Personally…)", pattern: "\\b(in my (view|opinion)|i (strongly )?(believe|think|feel)|personally|to my mind)\\b", min: 1 },
      { label: "A concession (Admittedly, Granted, While it's true that, Although…)", pattern: "\\b(admittedly|granted|while it'?s true|it'?s true that|although|even though|of course)\\b", min: 1 },
      { label: "A counter (However, Nevertheless, Even so, That said…)", pattern: "\\b(however|nevertheless|nonetheless|even so|that said|on the other hand|still,)", min: 1 },
      { label: "Two reasons or results (because, since, so, therefore, as a result…)", pattern: "\\b(because|since|so that|therefore|as a result|this means|which means|consequently)\\b", min: 2 },
    ],
    rubric: ["My opinion is clear from the start.", "I answered the other side's point, not just mentioned it.", "I checked tenses, articles and spelling."],
    model: "In my view, cutting PE to add more maths would be a mistake. Admittedly, many students struggle with maths, and an extra hour might help some of them pass. Even so, one more lesson at the end of a long day is unlikely to make a big difference, because tired students don't learn well. PE, on the other hand, gives us a break from sitting still, which means we often concentrate better in the lessons that follow. It also teaches teamwork and keeps us healthy, so it benefits our grades indirectly. A better solution would be to offer optional maths clinics at lunchtime for those who need them. That way, the students who need help get it, and nobody loses the one lesson where they can actually move.",
  },
  speaking: {
    prompts: [
      { text: "Talk for about a minute: what is one change you'd like to see in your school or town? Say why, and what someone might say against it." },
      { text: "Talk for about a minute: should teenagers have a part-time job while they study? Give your view, one argument against it, and your answer to that argument." },
    ],
    minWords: 70,
    seconds: 50,
    checks: [
      { label: "Your opinion (I think, In my opinion…)", pattern: "\\b(i (really )?(think|believe|feel)|in my (view|opinion)|personally)\\b", min: 1 },
      { label: "A reason (because, since, so…)", pattern: "\\b(because|since|so|that'?s why)\\b", min: 1 },
      { label: "The other side (but, although, however, even so…)", pattern: "\\b(but|although|however|even so|on the other hand|though)\\b", min: 1 },
      { label: "A suggestion (should, could, would…)", pattern: "\\b(should|could|would|ought to)\\b", min: 1 },
    ],
    rubric: ["I spoke for about a minute without reading.", "I gave at least one reason and one example.", "I answered the other side."],
    model: "I think my town should have more bike lanes, because at the moment it's really dangerous to cycle to school. A lot of people would cycle if they felt safe, so there would be less traffic and less pollution. Some people would probably say that bike lanes take space away from cars and make traffic worse. But I don't really agree, because in cities that have built them, more people leave the car at home. So I think the town could start with one lane between the schools and the centre and see what happens.",
  },
};

export const B2_GATE: BandAssessment = {
  band: "B2",
  kind: "gate",
  title: "B2 Gate",
  story: "The final check for B2. Pass it, your teacher confirms your writing and speaking, and B2+ opens.",
  bar: 75,
  reading: [
    {
      id: "gate-r1",
      title: "The real price of a cheap T-shirt",
      text:
`A T-shirt for the price of a sandwich sounds like a bargain. According to a growing number of researchers, however, it may be one of the most expensive things you ever buy: you simply don't pay for it at the till.

The fashion industry is often said to produce around a tenth of the world's carbon emissions, although estimates vary widely and some experts warn that the true figure is difficult to measure. What is less disputed is the waste. Clothes are worn fewer times than they were twenty years ago, and a large share of them end up in landfill or are burned within a year of being made.

The problem is not only environmental. The low prices that shoppers enjoy depend, to a large extent, on low wages in the factories where clothes are made. Campaigners argue that brands could pay workers more without raising prices significantly, since labour tends to make up only a small part of the final cost of a garment.

Brands insist they are changing. Many now offer recycling schemes or "conscious" collections. Critics, though, are not entirely convinced. A recycling bin in a shop, they point out, does little if the same shop releases hundreds of new designs every week.

So what can an ordinary teenager do? Buying nothing is unrealistic for most people. Buying less, and keeping clothes for longer, is not. Second-hand apps, clothing swaps and simple repairs are arguably more effective than any label promising that a product is "green".`,
      items: [
        ch("What does the writer mean in paragraph 1?", ["Cheap clothes have hidden costs that the buyer doesn't see.", "T-shirts are now more expensive than sandwiches.", "Shops charge extra at the till."], 0, "'you simply don't pay for it at the till'."),
        ch("How does the writer treat the figure for carbon emissions?", ["With caution: it is often quoted but hard to measure.", "As a proven fact.", "As obviously exaggerated."], 0, "'often said to… estimates vary widely… difficult to measure' = hedging."),
        ch("Why do campaigners think brands could pay workers more?", ["Labour is only a small part of a garment's final cost.", "Shoppers would happily pay more.", "Factories already earn high profits."], 0, "'labour tends to make up only a small part of the final cost'."),
        ch("'Critics, though, are not entirely convinced.' This suggests critics are…", ["quite doubtful", "completely satisfied", "slightly impressed"], 0, "'Not entirely convinced' is understatement for real doubt."),
        ch("What does the writer recommend?", ["Buying fewer clothes and making them last", "Only buying clothes labelled 'green'", "Never buying new clothes"], 0, "'Buying less, and keeping clothes for longer, is not [unrealistic].'"),
      ],
    },
    {
      id: "gate-r2",
      title: "Thirty days offline",
      text:
`Last month I deleted every social media app from my phone. Not for ever, I told myself: just for thirty days, to see what would happen. I'll be honest. The first week was not exactly relaxing.

On day two I reached for my phone forty-three times. I know because I counted. Each time, my thumb went to the place where the apps used to be, found nothing, and wandered off to check the weather instead. By the end of the week I knew the forecast for Medellín better than any meteorologist.

Then, somewhere in the second week, something shifted. I started finishing things: a book, a drawing, a conversation with my grandfather that went on for two hours. I'd assumed I would feel left out, and occasionally I did. My friends had organised a party in a group chat I couldn't see, and I only found out when it was over. That was, let's say, not my favourite evening.

What surprised me most was how little I actually missed. The news still reached me. My real friends still called. The things I'd been afraid of missing turned out, mostly, to be other people's holidays and arguments about football.

Would I recommend it? Not for everyone, and probably not for ever. I've reinstalled one app, with the notifications switched off. But I no longer reach for my phone forty-three times a day, and that, for me, is the point.`,
      items: [
        ch("'The first week was not exactly relaxing.' The writer means the first week was…", ["difficult", "boring", "very relaxing"], 0, "'Not exactly' + positive = understatement for a negative."),
        ch("Why does the writer mention the weather in Medellín?", ["To show, humorously, how often he checked his phone", "Because the weather was unusual", "Because he wanted to be a meteorologist"], 0, "His thumb 'wandered off to check the weather instead'."),
        ch("What changed in the second week?", ["He began to complete activities.", "He reinstalled the apps.", "He stopped talking to his friends."], 0, "'I started finishing things'."),
        ch("How did he feel about missing the party?", ["Upset, though he says it lightly", "Relieved", "He didn't care at all"], 0, "'not my favourite evening' = understatement."),
        ch("What is his final position?", ["A break helped him, but he doesn't think everyone needs to quit completely.", "Everyone should delete social media for ever.", "The experiment was a waste of time."], 0, "'Not for everyone, and probably not for ever… that, for me, is the point.'"),
      ],
    },
  ],
  listening: [
    {
      id: "gate-l1", title: "On a coffee farm", audio: "p/b2gate-l1.mp3", speaker: "A tour guide",
      items: [
        ch("According to the guide, why does altitude improve the coffee?", ["Cool nights make the cherries ripen more slowly.", "There are fewer insects up the mountain.", "It rains less at that height."], 0, "'the cool nights slow the cherries down… sweeter, more complex flavour'."),
        ch("Why is the coffee picked by hand?", ["Machines can't tell ripe from unripe cherries.", "It is cheaper than using machines.", "Tourists like to watch."], 0, "'a machine can't tell a ripe cherry from a green one'."),
        gap("A single green cherry can spoil the taste of a whole", ".", ["batch"], "'can spoil the taste of a whole batch'."),
        ch("What does the guide suggest about the future?", ["Farms like hers might eventually have nowhere higher to go.", "Climate change will improve the coffee.", "The farm will soon move to another country."], 0, "'farms like ours may simply run out of mountain'."),
      ],
    },
    {
      id: "gate-l2", title: "A debate speech", audio: "p/b2gate-l2.mp3", speaker: "Speaker from Canada",
      items: [
        ch("What is the speaker's position?", ["Against banning AI tools for homework", "For banning AI tools for homework", "Undecided"], 0, "'I'm speaking against it'."),
        ch("What does he concede?", ["Some students may let AI think for them.", "AI tools are always accurate.", "Homework is unnecessary."], 0, "'Admittedly, there's a real risk that some students will let a chatbot do their thinking'."),
        ch("Why does he call a ban 'unrealistic'?", ["The tools are on everyone's phone.", "Teachers can't agree on the rules.", "It would be too expensive."], 0, "'the tools are on every phone in this room'."),
        ch("What does he propose instead?", ["Homework that asks students to check and improve AI answers", "Letting AI write all homework", "Doing all homework in class"], 0, "'homework that asks students to check, correct and improve what the AI produces'."),
      ],
    },
  ],
  writing: {
    prompts: [
      { text: "Some people think young people should do a year of community service after finishing school. Write an essay of at least three paragraphs: discuss both sides and give your own opinion." },
      { text: "Tourism brings money to places like Cartagena, but it also causes problems. Write an essay of at least three paragraphs: discuss both sides and give your own opinion." },
    ],
    minWords: 180,
    checks: [
      { label: "At least three paragraphs (leave a blank line between them)", pattern: "\\n\\s*\\n", min: 2 },
      { label: "A concession (Admittedly, Granted, While it is true that, Although…)", pattern: "\\b(admittedly|granted|while it'?s true|while it is true|it is true that|although|even though)\\b", min: 1 },
      { label: "A counter (However, Nevertheless, Even so, On the other hand…)", pattern: "\\b(however|nevertheless|nonetheless|even so|that said|on the other hand)\\b", min: 1 },
      { label: "Two hedges (may, might, tend to, it seems, arguably, is likely to…)", pattern: "\\b(may|might|could|tends? to|it seems|seems to|arguably|is likely|are likely|to some extent|in many cases)\\b", min: 2 },
      { label: "An addition linker (Furthermore, Moreover, In addition, What is more)", pattern: "\\b(furthermore|moreover|in addition|what is more|what's more)\\b", min: 1 },
      { label: "A conclusion (In conclusion, To conclude, Overall, On balance…)", pattern: "\\b(in conclusion|to conclude|overall|on balance|all things considered|to sum up)\\b", min: 1 },
    ],
    rubric: ["My introduction says what the essay is about.", "Each paragraph has one main idea.", "My conclusion gives a clear opinion.", "I wrote in a formal style, without contractions or slang."],
    model: "Many countries are debating whether young people should spend a year doing community service before university or work. Supporters see it as a way to build responsibility, while critics worry that it would delay careers.\n\nAdmittedly, a compulsory year could be a burden for some families, particularly those who depend on a teenager's income. In addition, a service programme that is poorly organised may simply become a year of wasted time. These concerns are serious, and any scheme would need to address them, for example by paying participants a fair wage and letting them choose where they serve.\n\nNevertheless, the potential benefits are considerable. Young people who work in hospitals, schools or environmental projects tend to develop skills that classrooms rarely teach, such as teamwork and problem-solving. Furthermore, contact with people from different backgrounds might help reduce the divisions that exist in many societies.\n\nOn balance, I believe a year of service is a good idea, provided that it is paid and properly organised. A voluntary scheme with real support would arguably achieve most of the benefits without the disadvantages of forcing everyone to take part.",
  },
  speaking: {
    prompts: [
      { text: "Talk for about 90 seconds: your city is thinking of turning a busy street into a pedestrian zone. Give your opinion, deal with one argument against it, and say what should happen." },
      { text: "Talk for about 90 seconds: should students be allowed to choose all their own subjects at school? Give your opinion, deal with one argument against it, and suggest a compromise." },
    ],
    minWords: 110,
    seconds: 75,
    checks: [
      { label: "Your opinion (I think, In my view…)", pattern: "\\b(i (really |strongly )?(think|believe|feel)|in my (view|opinion)|personally)\\b", min: 1 },
      { label: "A concession (admittedly, of course, it's true that…)", pattern: "\\b(admittedly|of course|it'?s true|granted|i (can )?see why|i understand)\\b", min: 1 },
      { label: "A counter (but, however, even so, on the other hand…)", pattern: "\\b(but|however|even so|on the other hand|nevertheless|that said)\\b", min: 1 },
      { label: "A hedge (probably, might, tend to, I'd say…)", pattern: "\\b(probably|might|may|tends? to|i'?d say|it seems|perhaps|maybe)\\b", min: 1 },
      { label: "An example (for example, for instance, such as, like when…)", pattern: "\\b(for example|for instance|such as|like when|take)\\b", min: 1 },
    ],
    rubric: ["I spoke for about 90 seconds without reading.", "I dealt with the other side, not just mentioned it.", "I finished with a clear suggestion."],
    model: "Personally, I think turning the street into a pedestrian zone would be a great idea. At the moment it's full of traffic, it's noisy and, to be honest, it's not very safe for kids. If it were pedestrian, people would probably spend more time there, so the shops and cafés would get more customers. For example, when they closed a street near my aunt's house on Sundays, it was full of families and street musicians. Of course, some shop owners are worried that customers won't be able to park nearby, and I can see why. But in most cities that have tried it, business tends to go up, not down. So I'd say the city should test it for a few months, maybe just at weekends first, and then decide based on the results.",
  },
};
