/** More graded reading for B2+ (set 3). Original texts for Bandwidth EFL. For teacher review. */
import type { Story } from "./types";

export const B2P_EXTRA: Story[] = [
  {
    id: "b2p-flying-rivers", band: "B2+", universe: "science", kind: "article",
    title: "Rivers in the sky", blurb: "The Amazon doesn't just hold water. It moves it across a continent.",
    text: `When we picture a river, we imagine water flowing across land. But some of the most important rivers in South America flow through the air. Scientists call them "flying rivers": enormous streams of water vapour that rise from the Amazon rainforest and travel thousands of kilometres, bringing rain to places that would otherwise be far drier.

The mechanism begins with the trees themselves. A large Amazonian tree can draw hundreds of litres of water from the soil in a single day and release it through its leaves, a process known as transpiration. Multiplied across billions of trees, this creates a vast quantity of moisture. Some estimates suggest that the forest releases more water into the atmosphere each day than the Amazon River carries into the Atlantic Ocean.

Winds blowing from the Atlantic push this moisture westward until it meets the wall of the Andes. Unable to cross the mountains, the air turns south, carrying rain towards Bolivia, Paraguay, southern Brazil and northern Argentina. Researchers believe that a significant proportion of the rainfall in these agricultural regions, and in some of the continent's largest cities, originates in the Amazon.

This is why deforestation is not merely a local problem. As forest is cleared for cattle and crops, less water is recycled into the air. Some scientists warn of a "tipping point": if enough of the forest is lost, parts of the Amazon could shift irreversibly towards a drier, savanna-like ecosystem, weakening the flying rivers. Ironically, the farms that replaced the forest could then suffer from the very droughts that the forest once prevented.

The flying rivers offer a powerful reminder that ecosystems are connected in ways that political borders ignore. A tree cut down in Colombia or Brazil may, in a sense, take rain away from a farmer in Argentina.`,
    gloss: [
      { word: "water vapour", means: "water in the form of a gas" },
      { word: "transpiration", means: "the process by which plants release water through their leaves" },
      { word: "tipping point", means: "the moment when a small change causes a large, often permanent change" },
      { word: "irreversibly", means: "in a way that cannot be changed back" },
      { word: "savanna", means: "a large flat area of grassland with few trees" },
    ],
    questions: [
      { q: "Why does the moisture turn south, according to the text?", options: ["The Andes block it from continuing west.", "Winds from the Pacific push it back.", "It falls as rain before reaching the mountains."], answer: 0, why: "\"Unable to cross the mountains, the air turns south.\"" },
      { q: "What is ironic about the possible effects of deforestation?", options: ["Cities would end up receiving more rain than the farms around them.", "Cleared farmland could suffer droughts caused by the clearing.", "Savannas need more water than rainforests."], answer: 1, why: "\"The farms that replaced the forest could then suffer from the very droughts that the forest once prevented.\"" },
      { q: "What is the main point of the final paragraph?", options: ["Colombia should control Argentina's water supply.", "Each country should manage only its own forests.", "Environmental effects cross national borders."], answer: 2, why: "\"Ecosystems are connected in ways that political borders ignore.\"" },
    ],
  },
  {
    id: "b2p-memory-clinic", band: "B2+", universe: "futures", kind: "story",
    title: "The edit", blurb: "In 2061, you can remove a painful memory. Sara has an appointment.",
    text: `The clinic looked nothing like Sara had expected. There were no machines, no white coats, only a soft grey room with a single armchair and a window overlooking the city. "Most people imagine something frightening," the counsellor said, smiling. "In fact, the procedure takes forty minutes. You won't feel a thing."

Sara had booked the appointment three months earlier, after the accident. She had been driving; her best friend, Lucía, had been in the passenger seat. Lucía had recovered completely, physically at least, but Sara couldn't sleep. Every night, the moment replayed itself: the wet road, the lights, the sound. The new treatment, approved only two years before, promised to weaken the emotional charge of a specific memory without erasing the event itself. "You'll still know what happened," the counsellor explained. "It just won't hurt in the same way."

Before the procedure, there was a final interview. "Tell me what you'd lose," the counsellor said. Sara frowned. She hadn't expected the question. She thought about it for a long time. She would lose the panic, certainly. But she would also lose the moment afterwards, in the hospital, when Lucía had squeezed her hand and said, "We're still here." She would lose the way she now drove, carefully and slowly. She would lose, perhaps, part of the reason she had started calling her mother every Sunday.

"Pain isn't only damage," the counsellor said gently. "Sometimes it's also information. I'm not telling you not to go ahead. Many people do, and they're glad. I just want you to decide with your eyes open."

Sara left the clinic without the procedure. She didn't know whether she had made the right decision. That night she couldn't sleep again, so she called Lucía, and they talked until three in the morning, about the accident for the first time. When she finally slept, she didn't dream at all.`,
    gloss: [
      { word: "counsellor", means: "a person trained to give advice and support with personal problems" },
      { word: "emotional charge", means: "the strength of the feelings connected to something" },
      { word: "squeezed", means: "pressed firmly with the hand" },
      { word: "with your eyes open", means: "fully aware of the possible consequences" },
    ],
    questions: [
      { q: "What would the treatment do to Sara's memory?", options: ["Reduce the pain while keeping the knowledge of the event.", "Erase the accident from her mind completely.", "Replace the accident with a happier memory of her and Lucía."], answer: 0, why: "\"You'll still know what happened. It just won't hurt in the same way.\"" },
      { q: "Why did the counsellor's question make Sara hesitate?", options: ["She realised the treatment would be more painful than she had thought.", "The painful memory was linked to meaningful changes in her life.", "She remembered that Lucía had not forgiven her."], answer: 1, why: "She would lose the hospital moment, her careful driving and the Sunday calls to her mother." },
      { q: "What does the ending suggest?", options: ["Sara immediately regretted not having the procedure that day.", "The treatment would have been useless.", "Facing the memory with a friend began to help her heal."], answer: 2, why: "They talked \"about the accident for the first time\", and afterwards she slept without dreams." },
    ],
  },
  {
    id: "b2p-coffee-history", band: "B2+", universe: "past", kind: "article",
    title: "How coffee shaped a country", blurb: "Colombian coffee wasn't always famous. Its rise changed the nation.",
    text: `It is difficult to imagine Colombia without coffee, yet for much of the nineteenth century the crop played only a minor role in the country's economy. Coffee plants, originally from Ethiopia, had arrived in the region during the colonial period, probably brought by Jesuit missionaries, but large-scale cultivation only began in the late 1800s, first in Santander and later, more decisively, in the mountains of Antioquia, Caldas and the surrounding areas.

What made Colombian coffee distinctive was not only geography, although the combination of altitude, volcanic soils and two harvests a year in some regions certainly helped. It was also the structure of production. While coffee in Brazil was dominated by enormous plantations, much of Colombia's crop came from small and medium-sized family farms, many established by settlers who moved into the forested slopes of the central mountains during what historians call the "Antioqueño colonisation".

By the early twentieth century, coffee had become the country's main export, and in 1927 growers founded the National Federation of Coffee Growers. The Federation became one of the most powerful institutions in the country, building roads, schools and health centres in coffee regions and investing in agricultural research. In 1958, it created the fictional farmer Juan Valdez, with his mule, Conchita, to promote "100% Colombian coffee" abroad, an early and remarkably successful example of country branding.

Coffee also shaped Colombian society and culture. The money it generated helped finance railways and industry, while the coffee region developed a distinctive architecture, music and way of life, now recognised by UNESCO as a World Heritage cultural landscape.

Today, the industry faces serious challenges: volatile global prices, climate change that is pushing suitable growing areas higher up the mountains, and a generation of young people who see little future in farming. Coffee's history is therefore not only a story of past success; it is also a question about the future of rural Colombia.`,
    gloss: [
      { word: "missionaries", means: "people sent to another country to spread their religion" },
      { word: "decisively", means: "in a way that has a very clear and important result" },
      { word: "settlers", means: "people who move to a new area to live and farm there" },
      { word: "country branding", means: "promoting a country's image to sell its products or attract visitors" },
      { word: "volatile", means: "likely to change suddenly and unpredictably" },
    ],
    questions: [
      { q: "How did Colombian coffee production differ from Brazil's?", options: ["It relied more on small and medium family farms.", "It used only volcanic soils.", "It was controlled by Jesuit missionaries until the twentieth century."], answer: 0, why: "\"While coffee in Brazil was dominated by enormous plantations, much of Colombia's crop came from small and medium-sized family farms.\"" },
      { q: "Why does the writer mention Juan Valdez?", options: ["To describe a real farmer who founded the Federation.", "As an early example of successful international marketing.", "To show that coffee farming is a traditional job."], answer: 1, why: "He was created \"to promote '100% Colombian coffee' abroad, an early and remarkably successful example of country branding.\"" },
      { q: "Which challenge is mentioned in the final paragraph?", options: ["Coffee is no longer a Colombian export.", "UNESCO has restricted coffee farming in the cultural landscape regions.", "Warming is pushing suitable land higher up the mountains."], answer: 2, why: "\"Climate change… is pushing suitable growing areas higher up the mountains.\"" },
    ],
  },
  {
    id: "b2p-influencer", band: "B2+", universe: "screens", kind: "story",
    title: "Log out", blurb: "Valeria had 800,000 followers. Then she posted one last video.",
    text: `The last video Valeria posted was eleven seconds long. She was sitting on the floor of her bedroom, without make-up, without the ring light, without the carefully chosen background of plants and books. "I'm taking a break," she said. "I don't know for how long. Thank you for everything." Then she switched off her phone and, for the first time in four years, didn't check the comments.

It had started almost by accident. At sixteen, she had posted a video explaining a maths problem in a funny way, and it had gone viral. Within months she was making three videos a week, then one a day. Brands contacted her. She earned more in a month than her mother earned in a year. Her teachers were proud; her classmates were envious; strangers recognised her in shopping centres.

What nobody saw was the arithmetic behind the success. Every video was followed by hours of watching the numbers: views, likes, shares, the percentage of people who watched until the end. If a video performed badly, she felt physically sick. She began planning her life around what would make good content. A birthday dinner was not just a dinner; it was material. Even her sadness, she realised one night, had become something she considered posting.

The decision to stop was not dramatic. It was the accumulation of small moments: forgetting what her own laugh sounded like when no one was filming, a friend saying, "You're different when the camera's off," a panic attack before a sponsored live stream.

Six months later, Valeria is studying engineering. She still uses social media, but differently: a private account, a few friends. Sometimes she misses the attention, and she is honest enough to admit it. But she has discovered something she had almost forgotten: the strange, quiet pleasure of doing something well when nobody is watching.`,
    gloss: [
      { word: "ring light", means: "a circular lamp used to light faces for videos" },
      { word: "gone viral", means: "spread very quickly to many people online" },
      { word: "envious", means: "wanting what someone else has" },
      { word: "accumulation", means: "a gradual increase as small things are added together" },
    ],
    questions: [
      { q: "What does 'the arithmetic behind the success' refer to?", options: ["Valeria's obsessive checking of her videos' statistics.", "The maths problems she explained in her videos.", "The money she had to pay to the brands that sponsored her."], answer: 0, why: "\"Every video was followed by hours of watching the numbers: views, likes, shares.\"" },
      { q: "How did Valeria's decision to quit come about?", options: ["After a single dramatic event online.", "Gradually, through a series of small experiences.", "Because her followers and her mother asked her to stop."], answer: 1, why: "\"The decision to stop was not dramatic. It was the accumulation of small moments.\"" },
      { q: "What has Valeria rediscovered?", options: ["The pleasure of being recognised by strangers.", "That she prefers studying engineering to explaining maths online.", "The satisfaction of doing things without an audience."], answer: 2, why: "\"The strange, quiet pleasure of doing something well when nobody is watching.\"" },
    ],
  },
  {
    id: "b2p-colour-words", band: "B2+", universe: "words", kind: "article",
    title: "Do words change what we see?", blurb: "Russian speakers have two 'blues'. Does that change their eyes?",
    text: `In English, "blue" covers a wide range of shades, from the pale colour of a winter sky to the deep colour of the ocean at night. In Russian, however, there is no single everyday word for blue. Lighter blues are "goluboy" and darker blues are "siniy", and Russian speakers treat them as two separate colours, much as English speakers treat red and pink. This raises a fascinating question: does the language we speak influence how we actually perceive the world?

The idea that language shapes thought is often associated with the linguist Benjamin Lee Whorf, who argued in the 1930s and 40s that speakers of different languages think in fundamentally different ways. In its strongest form, sometimes called "linguistic determinism", this claim suggests that we cannot think about things for which we have no words. Most researchers today reject that strong version: people can obviously perceive and think about colours, emotions or ideas that their language has no single word for.

However, a weaker version of the hypothesis, often called "linguistic relativity", has found some experimental support. In one well-known study, Russian and English speakers were shown three blue squares and asked which two were identical. Russian speakers were slightly faster when the two different shades crossed the goluboy–siniy boundary than when they did not. English speakers showed no such difference. Interestingly, the advantage disappeared when participants were asked to perform a verbal task at the same time, suggesting that language was actively involved in the judgement.

The effect is small, measured in fractions of a second, and some researchers question how much it really matters. Nevertheless, similar studies on how languages describe time, space and direction suggest that language does not imprison our thinking, but it may gently guide where we direct our attention.

Perhaps the most practical lesson for language learners is this: learning a new language is not only learning new labels for the same world. It can also mean learning to notice differences you had overlooked.`,
    gloss: [
      { word: "shades", means: "different types of the same colour" },
      { word: "perceive", means: "notice or become aware of something through the senses" },
      { word: "determinism", means: "the belief that something is completely decided by a particular cause" },
      { word: "imprison", means: "keep someone locked in a place they cannot leave" },
    ],
    questions: [
      { q: "What is the writer's view of 'linguistic determinism'?", options: ["Most researchers consider it too extreme.", "It is strongly supported by colour experiments.", "It explains why Russian has two words for blue."], answer: 0, why: "\"Most researchers today reject that strong version.\"" },
      { q: "What does the result of the verbal task suggest?", options: ["English speakers have weaker colour vision.", "Language helped create the Russian speakers' advantage.", "The original experiment was poorly designed and should be repeated."], answer: 1, why: "\"The advantage disappeared… suggesting that language was actively involved in the judgement.\"" },
      { q: "What lesson does the writer offer language learners?", options: ["They should learn Russian colour vocabulary first.", "Different languages describe exactly the same world in different words.", "A new language may train them to notice new distinctions."], answer: 2, why: "\"It can also mean learning to notice differences you had overlooked.\"" },
    ],
  },
  {
    id: "b2p-understudy", band: "B2+", universe: "arts", kind: "story",
    title: "The understudy", blurb: "For a year, Mateo learnt every line. He never expected to say them.",
    text: `Being an understudy, Mateo often thought, was like being a spare tyre: essential in theory, invisible in practice. For eleven months he had attended every rehearsal of the theatre company's production of a famous Colombian play, learnt every line of the lead role, every movement, every pause. Then, every night, he had sat in the dressing room, listening to the performance through a small speaker, while Julián, the star, received the applause.

He had stopped resenting it. Julián was genuinely brilliant, and Mateo learnt something new from him every night: how he let a silence grow until the audience leaned forward, how he played anger not by shouting but by becoming terrifyingly calm. Mateo assumed he would never use any of it.

Then, at six o'clock on a Saturday, with the theatre sold out, the director phoned. Julián had food poisoning. "You're on," she said. "Are you ready?" Mateo said yes, because there was no other possible answer, and then went to the bathroom and was sick.

The first ten minutes were a blur. He could hear his own voice as if it belonged to someone else. Then, in the second scene, something unexpected happened. Instead of imitating Julián's famous calm, he found himself playing the anger differently: hurt rather than cold, closer to tears than to violence. It wasn't planned. It simply felt true.

At the end, the applause was polite, then warm, then, to his astonishment, enthusiastic. Afterwards, the director found him. "It wasn't Julián's performance," she said. "I was worried for a moment. But it was yours." The next week, Julián returned, and Mateo went back to the dressing room. But something had changed. He no longer felt like a spare tyre. He felt like an actor who was waiting, and that, he discovered, was a completely different thing.`,
    gloss: [
      { word: "understudy", means: "an actor who learns another actor's part in order to replace them if necessary" },
      { word: "resenting", means: "feeling angry because something seems unfair" },
      { word: "a blur", means: "something you cannot remember or see clearly" },
      { word: "astonishment", means: "very great surprise" },
    ],
    questions: [
      { q: "Why does Mateo compare himself to a spare tyre?", options: ["He is essential in theory but rarely used or even noticed.", "He often feels tired and bored after long rehearsals.", "He replaces Julián every weekend."], answer: 0, why: "\"Essential in theory, invisible in practice.\"" },
      { q: "What was different about Mateo's performance?", options: ["He copied Julián's famous calm style as exactly as he could.", "He played the character's anger as hurt rather than cold.", "He forgot many of his lines."], answer: 1, why: "\"Instead of imitating Julián's famous calm… hurt rather than cold.\"" },
      { q: "How has Mateo's view of himself changed by the end?", options: ["He believes he is better than Julián.", "He has decided to leave the company and look for leading roles.", "He now sees himself as a real actor waiting for his moment."], answer: 2, why: "\"He felt like an actor who was waiting, and that… was a completely different thing.\"" },
    ],
  },
  {
    id: "b2p-basic-income", band: "B2+", universe: "futures", kind: "article",
    title: "Free money for everyone?", blurb: "What happened when Finland gave people money with no conditions.",
    text: `The idea sounds almost utopian: the state pays every adult a regular sum of money, with no conditions attached. You don't have to prove you are poor, look for work or fill in endless forms. This is "universal basic income", or UBI, and it has moved from the margins of political debate to the centre, partly because of fears that automation and artificial intelligence could eliminate many jobs.

Supporters argue that UBI would reduce poverty and insecurity, simplify complicated welfare systems and give people the freedom to retrain, care for relatives, start businesses or refuse exploitative work. Critics respond that it would be enormously expensive, that giving money to wealthy people is wasteful, and that unconditional payments might discourage people from working.

Because a fully universal scheme has never been implemented at national level, researchers have relied on experiments. One of the most cited took place in Finland in 2017 and 2018. Two thousand unemployed people, chosen at random, received 560 euros a month without conditions, and continued to receive it even if they found a job. Their outcomes were then compared with a control group in the normal unemployment system.

The results were nuanced. In terms of employment, the effect was small: recipients worked only slightly more days than the control group. This disappointed those who hoped UBI would boost employment, but it also contradicted the fear that people would simply stop working. The clearest differences were in well-being. Recipients reported less stress, better mental health, greater trust in institutions and more confidence in their own future.

Experiments in other countries, from Kenya to the United States, have produced varied results, and critics point out that a temporary, small-scale trial cannot show how a permanent national scheme would affect prices, taxes or behaviour. The debate is far from settled. But the Finnish experiment shifted the question slightly: perhaps the main value of basic income is not whether it makes people work more, but whether it lets them live with less fear.`,
    gloss: [
      { word: "utopian", means: "imagining a perfect but probably unrealistic society" },
      { word: "exploitative", means: "treating people unfairly to get advantage from them" },
      { word: "control group", means: "people in an experiment who do not receive the treatment, used for comparison" },
      { word: "nuanced", means: "having small but important differences; not simple" },
    ],
    questions: [
      { q: "What did the Finnish experiment show about employment?", options: ["The effect was small, and people did not stop working.", "Most recipients found full-time jobs much more quickly than others.", "Recipients worked much less than the control group."], answer: 0, why: "\"The effect was small… it also contradicted the fear that people would simply stop working.\"" },
      { q: "Why do critics say trials cannot settle the debate?", options: ["The trials were too expensive to repeat.", "Short trials can't show the effects of a permanent national scheme.", "The results from Kenya and the United States contradicted those from Finland."], answer: 1, why: "\"A temporary, small-scale trial cannot show how a permanent national scheme would affect prices, taxes or behaviour.\"" },
      { q: "How does the writer suggest the question has 'shifted'?", options: ["From whether UBI is affordable to whether it is popular.", "From whether UBI reduces poverty to whether it increases taxes for everyone.", "From whether UBI increases work to whether it reduces people's insecurity and fear."], answer: 2, why: "\"Perhaps the main value… is not whether it makes people work more, but whether it lets them live with less fear.\"" },
    ],
  },
  {
    id: "b2p-cartographer", band: "B2+", universe: "past", kind: "story",
    title: "The cartographer's mistake", blurb: "In 1789, a young mapmaker invents an island. Nobody checks.",
    text: `In the archive where I work, there is a map from 1789 with an island on it that does not exist. It sits off the Caribbean coast, small and neatly drawn, with a name in elegant handwriting: Isla de Santa Inés. For two centuries, it appeared on other maps, copied from one to the next. Sailors searched for it; at least one ship's captain claimed to have seen it. It was only removed from official charts in the twentieth century.

For years, historians assumed it was an honest mistake: perhaps a sailor had confused a bank of clouds or a floating mass of vegetation with land. But last year, while cataloguing a box of unsorted letters, I found something else. The letters were written by the map's author, a young cartographer named Tomás Arrieta, to his sister in Cartagena.

In one letter, Tomás confesses that he invented the island. He had been sent to map the coast but, delayed by storms and illness, he had not finished. Fearing he would lose his position, he completed the map from imagination. He added the island, he wrote, "so that anyone who copies my work without permission will be discovered". It was a trap, a signature hidden in the sea.

What fascinated me was what happened next. Other mapmakers did copy his work, and the island spread, but nobody was ever caught, because nobody knew it was a trap. Instead, the invented island acquired a life of its own. Sailors reported seeing it because they expected to see it.

I have thought a great deal about Tomás. His small lie was meant to protect the truth of his work, yet it became one of the most persistent errors in the history of the region. I sometimes wonder how many of the "facts" we repeat today began as someone's convenient invention, copied faithfully until no one remembered to ask where they came from.`,
    gloss: [
      { word: "archive", means: "a collection of historical documents, or the place where they are kept" },
      { word: "cataloguing", means: "making a list of items in an organised way" },
      { word: "confesses", means: "admits that he did something wrong" },
      { word: "persistent", means: "continuing to exist for a long time" },
    ],
    questions: [
      { q: "Why did Tomás add the island to his map?", options: ["To catch people who copied his map without his permission.", "Because a sailor told him he had seen it near Cartagena.", "To make the map look more complete for his sister."], answer: 0, why: "\"So that anyone who copies my work without permission will be discovered.\"" },
      { q: "Why did the 'trap' fail?", options: ["Tomás's map was never copied.", "Nobody knew the island was invented, so no copier was caught.", "The island was removed from the map as soon as other mapmakers saw it."], answer: 1, why: "\"Nobody was ever caught, because nobody knew it was a trap.\"" },
      { q: "What broader point does the narrator make at the end?", options: ["Old maps are more accurate than modern ones.", "Cartographers in the eighteenth century were often dishonest about their work.", "Unchecked information can be copied until people accept it as fact."], answer: 2, why: "\"Copied faithfully until no one remembered to ask where they came from.\"" },
    ],
  },
  {
    id: "b2p-why-dream", band: "B2+", universe: "science", kind: "article",
    title: "Why do we dream?", blurb: "Scientists still disagree. Here are the leading theories.",
    text: `Every night, most of us spend around two hours dreaming, much of it during the stage of sleep known as REM, for "rapid eye movement". Over a lifetime, that adds up to several years spent in worlds that do not exist. Yet despite more than a century of research, scientists still do not agree on why we dream, or even whether dreams have a function at all.

For Sigmund Freud, writing at the beginning of the twentieth century, dreams were the "royal road to the unconscious": disguised expressions of hidden desires. Few neuroscientists today accept Freud's detailed interpretations, which are difficult to test scientifically. However, his basic intuition, that dreams are connected to our emotional concerns, has received some support.

One influential modern theory proposes that dreaming helps consolidate memories. During sleep, the brain appears to replay and reorganise recent experiences, strengthening some connections and weakening others. Studies show that people who sleep after learning a task often perform better than those who stay awake, and that dreaming about a task may be associated with improved performance.

Another theory focuses on emotion. According to this view, dreaming acts as a kind of overnight therapy, allowing us to process difficult experiences in a state where stress-related chemicals in the brain are reduced. This might explain why a problem that seemed overwhelming in the evening can feel more manageable in the morning.

A third, more controversial, theory suggests that dreams are a form of threat simulation: a safe space in which the brain rehearses responses to danger. This could explain why so many dreams involve being chased, falling or failing an exam.

Finally, some scientists argue that dreams themselves may have no purpose; they could be a by-product of brain processes that are useful for other reasons. The truth may involve several of these explanations at once. What is clear is that sleep, and probably dreaming, is not wasted time, but an active and essential part of how the brain works.`,
    gloss: [
      { word: "unconscious", means: "the part of the mind with thoughts and feelings you are not aware of" },
      { word: "consolidate", means: "make something stronger or more stable" },
      { word: "simulation", means: "a situation created to imitate a real one, often for practice" },
      { word: "by-product", means: "something produced by accident while making something else" },
    ],
    questions: [
      { q: "What does the writer say about Freud's ideas?", options: ["His link between dreams and emotions has some support; his details are hard to test.", "Modern neuroscience has fully confirmed his detailed interpretations of dreams.", "His ideas have been completely abandoned by all scientists, including the link to emotions."], answer: 0, why: "\"Few neuroscientists today accept Freud's detailed interpretations… However, his basic intuition… has received some support.\"" },
      { q: "Which theory might explain why problems feel smaller in the morning?", options: ["Memory consolidation during REM sleep.", "Emotional processing during dreams.", "Threat simulation in frightening dreams."], answer: 1, why: "Dreaming \"acts as a kind of overnight therapy… This might explain why a problem… can feel more manageable in the morning.\"" },
      { q: "What is the writer's overall conclusion?", options: ["The threat simulation theory is the most convincing.", "Dreams are definitely a meaningless by-product of other brain processes.", "Several explanations may be true, and sleep is clearly important."], answer: 2, why: "\"The truth may involve several of these explanations at once.\"" },
    ],
  },
  {
    id: "b2p-translating-grandmother", band: "B2+", universe: "words", kind: "story",
    title: "Untranslatable", blurb: "Andrea tries to translate her grandmother's favourite poem into English.",
    text: `My grandmother has recited the same poem every evening for as long as I can remember. It is a short poem by a Colombian poet, about a house in the mountains and the sound of rain on a tin roof. She learnt it at school seventy years ago and has never forgotten a word. When my English teacher asked us to translate a poem that mattered to us, I knew immediately which one I would choose. I thought it would take an afternoon. It took a month.

The first problem was the rain. In Spanish, the poet describes it with a verb that imitates its sound, a word full of soft consonants that seem to tap against the roof. The literal English translation was accurate but dead. I tried "drumming", which was too loud, and "pattering", which was closer but sounded, my teacher said, slightly old-fashioned and English, like rain in a Victorian novel rather than in the Andes.

The second problem was rhythm. The original has a gentle, regular music that my grandmother's voice makes even more beautiful. Every time I kept the meaning, I lost the music; every time I kept the music, I betrayed the meaning. I started to understand why people say that translation is not about finding equivalent words, but about making choices, and accepting losses.

The third problem was the most difficult: the word "tierrita". Literally, it means "a little land", but the diminutive carries tenderness, nostalgia, the feeling of a place that belongs to you. No English word did all of that. In the end, I left it in Spanish and wrote a footnote.

When I read my translation to my grandmother, she listened carefully, although she understands very little English. Then she asked me to read it again. "It's not my poem," she said finally. "But it's a good poem. And I can hear that you love it." I think that was the best review a translator could ever receive.`,
    gloss: [
      { word: "recited", means: "said a poem or text aloud from memory" },
      { word: "betrayed", means: "was not loyal to; did not stay true to" },
      { word: "diminutive", means: "a form of a word that shows something is small, or expresses affection" },
      { word: "nostalgia", means: "a happy but sad feeling when you think about the past" },
      { word: "footnote", means: "a note at the bottom of a page that explains something" },
    ],
    questions: [
      { q: "Why did Andrea reject the word 'pattering'?", options: ["It suggested a different place and period.", "It was too loud and strong for the gentle rain in the poem.", "It was grammatically incorrect."], answer: 0, why: "It sounded \"like rain in a Victorian novel rather than in the Andes.\"" },
      { q: "What did Andrea learn about translation?", options: ["Every word has a perfect equivalent in another language if you search.", "It involves making choices and accepting that something will always be lost.", "Rhythm is less important than meaning."], answer: 1, why: "\"Translation is not about finding equivalent words, but about making choices, and accepting losses.\"" },
      { q: "What does the grandmother's comment suggest?", options: ["She thought the translation was a failure.", "She could fully understand the English version without help.", "She recognised it as a new poem made with love."], answer: 2, why: "\"It's not my poem… But it's a good poem. And I can hear that you love it.\"" },
    ],
  },
  {
    id: "b2p-dark-patterns", band: "B2+", universe: "screens", kind: "article",
    title: "Designed to trick you", blurb: "Why is it so easy to subscribe and so hard to cancel?",
    text: `You sign up for a free trial with a single click. Weeks later, you try to cancel and find yourself lost in a maze of menus, warnings and questions. "Are you sure? You'll lose all your benefits." The cancel button is grey and small; the "Stay subscribed" button is large and brightly coloured. If this sounds familiar, you have encountered what designers call a "dark pattern".

The term was coined in 2010 by the user-experience designer Harry Brignull to describe interface designs that deliberately manipulate users into doing things they might not otherwise do. Unlike simply bad design, dark patterns work exactly as intended, just not in the user's interest.

There are many varieties. "Confirmshaming" uses guilt to discourage you from declining an offer: "No thanks, I don't like saving money." "Roach motels" make it easy to get into a situation, such as a subscription, but difficult to get out. "Sneak into basket" adds extra items, like insurance, to your online purchase unless you notice and remove them. Some apps use false urgency, such as countdown timers that restart every time you reload the page, or messages claiming that "14 other people are looking at this hotel right now".

Dark patterns are effective because they exploit predictable features of human psychology: our tendency to accept default options, our fear of missing out and our limited attention. They are particularly powerful on mobile phones, where screens are small and we often act quickly.

Regulators are beginning to respond. The European Union's Digital Services Act and consumer protection rules prohibit certain manipulative designs, and authorities in the United States have taken action against companies that made cancellation deliberately difficult. Nevertheless, enforcement is challenging, and new patterns appear constantly.

The best defence remains awareness. Once you learn to recognise dark patterns, you start to see them everywhere, and they lose much of their power. A useful habit is to pause whenever an app makes one choice very easy and another very hard, and to ask: who benefits from this design?`,
    gloss: [
      { word: "coined", means: "invented a new word or expression" },
      { word: "interface", means: "the parts of an app or website that users see and interact with" },
      { word: "exploit", means: "use something unfairly for your own advantage" },
      { word: "enforcement", means: "making sure that people obey a law or rule" },
    ],
    questions: [
      { q: "How are dark patterns different from simply bad design?", options: ["They work as intended, but against the user's interest.", "They are only found in apps on small mobile phone screens.", "They are always illegal."], answer: 0, why: "\"Unlike simply bad design, dark patterns work exactly as intended, just not in the user's interest.\"" },
      { q: "A website shows: 'No thanks, I prefer to pay full price.' Which dark pattern is this?", options: ["Roach motel.", "Confirmshaming.", "Sneak into basket."], answer: 1, why: "Confirmshaming \"uses guilt to discourage you from declining an offer.\"" },
      { q: "According to the writer, what is the most effective protection?", options: ["Avoiding all subscriptions and free trials.", "Waiting for governments to ban dark patterns in every country.", "Learning to recognise these designs and questioning them."], answer: 2, why: "\"The best defence remains awareness.\"" },
    ],
  },
  {
    id: "b2p-observatory", band: "B2+", universe: "science", kind: "story",
    title: "Night shift", blurb: "Paula spends the night at an observatory, looking for something nobody has seen.",
    text: `The observatory sits at almost three thousand metres above sea level, far enough from any city that the sky at night is not black but crowded, almost noisy with stars. Paula, a second-year physics student from Pasto, arrived for a two-week internship expecting to look through a telescope. On her first night, she discovered that nobody looks through the telescope anymore.

Instead, she sat in a warm control room with three screens and a cup of coffee, while the telescope above her moved silently, photographing the same patch of sky every few minutes. Her job was to help monitor the images for changes: a star that suddenly brightened, an object that moved. Most of the work was done by software. Her role was to check the cases the software couldn't decide.

It was, at first, profoundly boring. Hour after hour, the program flagged changes that turned out to be nothing: a satellite crossing the frame, a cosmic ray hitting the camera, a flaw in the image. The senior astronomer, Dr Villamil, told her that this was what science mostly looked like. "Ninety-nine percent of discovery," she said, "is the patience to look at ninety-nine things that aren't discoveries."

On the ninth night, at around 3 a.m., the software flagged a faint point of light in a distant galaxy that hadn't been there the previous week. Paula almost dismissed it. Something made her check the earlier images again, compare the brightness, look at the shape. She called Dr Villamil, who looked at the screen for a long time without speaking.

It turned out to be a supernova, the explosion of a dying star, so far away that the light had been travelling for millions of years before reaching the camera. It was not a major discovery; supernovae are detected regularly. But Paula's name appeared in the report. Driving down the mountain at the end of her internship, she realised that what she would remember was not the moment of discovery, but the eight boring nights that had made her ready for it.`,
    gloss: [
      { word: "internship", means: "a short period of work to get experience, often for students" },
      { word: "flagged", means: "marked something so people notice it" },
      { word: "cosmic ray", means: "a high-energy particle that travels through space" },
      { word: "supernova", means: "the huge explosion of a star" },
    ],
    questions: [
      { q: "What was Paula's actual job at the observatory?", options: ["Checking image changes that the software could not classify.", "Looking at stars through the telescope all night and drawing them.", "Repairing the camera when it failed."], answer: 0, why: "\"Her role was to check the cases the software couldn't decide.\"" },
      { q: "What did Dr Villamil mean by her comment about discovery?", options: ["Discoveries are mostly made by computers.", "Discovery depends on patiently checking a great many false alarms.", "Only one percent of astronomers ever make a real discovery."], answer: 1, why: "\"The patience to look at ninety-nine things that aren't discoveries.\"" },
      { q: "What does Paula value most when she leaves?", options: ["The fame of having her name in an official scientific report.", "The beauty of the sky at high altitude.", "The routine work that prepared her for the discovery."], answer: 2, why: "\"What she would remember was… the eight boring nights that had made her ready for it.\"" },
    ],
  },
  {
    id: "b2p-streaming-money", band: "B2+", universe: "arts", kind: "article",
    title: "Who gets paid when you press play?", blurb: "Streaming saved the music industry. Did it save musicians?",
    text: `At the beginning of the twenty-first century, the music industry was in crisis. Piracy had become widespread, CD sales were collapsing and many experts predicted that recorded music would never again be a profitable business. Two decades later, streaming has reversed that decline. Global recorded music revenues have grown for years, and most of that growth comes from subscriptions and advertising on streaming platforms. For listeners, the deal is extraordinary: almost the entire history of recorded music for roughly the price of one album a month.

But the question of who benefits is more complicated. Most major streaming services do not pay artists a fixed amount per stream. Instead, they typically put the money from subscriptions and advertising into a large pool, take their own share, and divide the rest according to each rights holder's share of total streams. Payments then pass through record labels, distributors and publishers before reaching artists and songwriters, each taking a portion according to their contracts.

The result is that an individual stream is worth only a fraction of a cent to the artist, often much less than many listeners imagine. For global superstars with billions of streams, this adds up to large sums. For most independent and mid-level musicians, it does not. Critics argue that the "pro-rata" model also has a hidden unfairness: your subscription money is not distributed according to what you listen to, but according to what everyone listens to. If you only listen to a small local jazz band, much of your money may still end up with the world's most-streamed pop stars.

Some alternatives have been proposed, such as a "user-centric" model in which each subscriber's money goes only to the artists they actually play. Some platforms have also introduced minimum thresholds and other rule changes, which have been controversial in their own right.

Meanwhile, many musicians depend on other sources of income: concerts, merchandise, licensing songs for films and advertising, and direct support from fans. Streaming, it seems, has saved the music industry, but it has not, by itself, solved the problem of making a living from music.`,
    gloss: [
      { word: "piracy", means: "illegally copying and sharing music, films or software" },
      { word: "revenues", means: "money that a business or industry receives" },
      { word: "rights holder", means: "a person or company that legally owns a creative work" },
      { word: "pro-rata", means: "divided according to each person's share" },
      { word: "merchandise", means: "products such as T-shirts sold to promote an artist" },
    ],
    questions: [
      { q: "How do most major services calculate payments, according to the text?", options: ["Money is pooled and shared by each rights holder's share of streams.", "Each artist receives the same fixed amount every time a song is played.", "Listeners choose how much to pay each artist."], answer: 0, why: "\"They typically put the money… into a large pool… and divide the rest according to each rights holder's share of total streams.\"" },
      { q: "What 'hidden unfairness' do critics identify in the pro-rata model?", options: ["Superstars receive less than independent musicians.", "A subscriber's money may go to artists they never listen to.", "Record labels are not paid anything for streams of their artists."], answer: 1, why: "\"Your subscription money is not distributed according to what you listen to, but according to what everyone listens to.\"" },
      { q: "What is the writer's conclusion?", options: ["Streaming has ruined the music industry.", "The user-centric model has already solved the problem for most musicians.", "It has helped the industry, but musicians still need other income."], answer: 2, why: "\"Streaming… has saved the music industry, but it has not, by itself, solved the problem of making a living from music.\"" },
    ],
  },
  {
    id: "b2p-proctored-exam", band: "B2+", universe: "futures", kind: "story",
    title: "The watched room", blurb: "An AI system watches Diego's online exam. It doesn't like what it sees.",
    text: `The message appeared halfway through Diego's university entrance exam: "Unusual behaviour detected. Please keep your eyes on the screen." He froze. He had only looked away for a second, to think, the way he always did, staring at a corner of the ceiling while he worked out the answer to a difficult question.

The exam was online, taken at home, and monitored by an automated proctoring system. Before starting, he had been asked to show the room with his webcam, keep his face centred in the frame and stay silent. The software tracked his eye movements, the sounds in the room and even the rhythm of his typing, looking for signs of cheating. Diego shared a small flat with his parents and two younger brothers. He had asked them to stay quiet, but halfway through the exam the baby started crying in the next room. A second warning appeared.

For the rest of the exam, Diego was barely able to concentrate. He kept his eyes fixed on the screen, afraid to blink, and found himself thinking more about the camera than about the questions. When he finished, he was certain he had failed, not because he didn't know the answers, but because he had spent the exam performing innocence.

A week later, he received an email: his exam had been "flagged for review". Eventually, a human examiner watched the recording and cleared him. His score was good, but lower than his practice results.

When Diego later researched the topic for a school project, he discovered that his experience was far from unique. Students around the world have complained that such systems can misinterpret ordinary behaviour, from looking away to think to having a noisy home, and some studies have raised concerns about whether facial detection works equally well for all skin tones. Universities face a real dilemma: how do you ensure fairness in online exams without treating every student as a suspect? Diego's project ended with a question rather than an answer: "What does it do to people to be watched while they think?"`,
    gloss: [
      { word: "proctoring", means: "watching students during an exam to prevent cheating" },
      { word: "performing innocence", means: "acting in a way that shows you are not guilty" },
      { word: "cleared", means: "officially decided that someone is not guilty" },
      { word: "dilemma", means: "a situation where you must choose between two difficult options" },
    ],
    questions: [
      { q: "Why did the system first warn Diego?", options: ["He looked away from the screen for a second while thinking.", "He was talking to his brothers in the next room.", "He opened another website."], answer: 0, why: "\"He had only looked away for a second, to think.\"" },
      { q: "Why does Diego believe the monitoring affected his result?", options: ["The software changed some of his answers.", "He focused on looking innocent, not on the questions.", "The exam was shorter because the warnings took up his time."], answer: 1, why: "\"He had spent the exam performing innocence\"; his score was lower than his practice results." },
      { q: "What 'dilemma' do universities face, according to the story?", options: ["Whether to hire more human examiners to watch every recording live.", "Whether exams should be online or on paper.", "How to keep online exams fair without treating students as suspects."], answer: 2, why: "\"How do you ensure fairness in online exams without treating every student as a suspect?\"" },
    ],
  },
];
