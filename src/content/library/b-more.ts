/** More graded reading for B1 to B2+ (set 2). Original texts for Bandwidth EFL. For teacher review. */
import type { Story } from "./types";

export const B_MORE_STORIES: Story[] = [
  /* ---------------- B1 ---------------- */
  {
    id: "b1-paramo", band: "B1", universe: "science", kind: "article",
    title: "The water factory in the clouds", blurb: "Why Colombia's páramos matter to millions of people who have never seen one.",
    text: `High in the Andes, between about 3,000 and 4,500 metres above sea level, there is an unusual ecosystem called the páramo. It is cold, windy and often covered in fog. At first sight it doesn't look very special: just grass, small bushes and strange plants with thick, hairy leaves called frailejones.

But the páramo has an important job. Its plants and soil work like a giant sponge. They catch water from the fog and rain, store it, and then release it slowly into streams and rivers. Around 70% of Colombians, including most people in Bogotá, depend on water that comes from páramos.

Frailejones are the stars of this system. Their hairy leaves catch drops of water from the clouds, and they protect the plant from the intense sun and freezing nights. They grow extremely slowly, only about one centimetre a year, so a frailejón two metres tall may be nearly two hundred years old.

Unfortunately, páramos are under threat. Farming, cattle and mining have damaged large areas, and climate change is pushing warmer temperatures higher up the mountains. Because the plants grow so slowly, damage can take centuries to repair. That is why Colombia has made laws to protect them, and why many scientists say that looking after the páramo means looking after the country's water.`,
    gloss: [
      { word: "ecosystem", means: "all the plants and animals in an area and how they live together" },
      { word: "sponge", means: "something soft that holds a lot of water", es: "esponja" },
      { word: "release", means: "let something go" },
      { word: "under threat", means: "in danger" },
      { word: "cattle", means: "cows and bulls", es: "ganado" },
    ],
    questions: [
      { q: "How does the páramo work \"like a giant sponge\"?", options: ["It holds water and lets it out slowly.", "It produces fog for the cities below.", "It cleans the water from big rivers."], answer: 0, why: "It catches water, stores it, \"and then release[s] it slowly into streams and rivers.\"" },
      { q: "Why might a tall frailejón be very old?", options: ["It needs a lot of water to grow.", "It grows only a little each year.", "It lives in the highest places."], answer: 1, why: "They grow \"only about one centimetre a year\"." },
      { q: "What is the main idea of the last paragraph?", options: ["Farming in the mountains is now illegal everywhere in Colombia because of new laws.", "Climate change has already destroyed most páramos.", "Páramos are in danger and protecting them protects water."], answer: 2, why: "Páramos are \"under threat\" and \"looking after the páramo means looking after the country's water.\"" },
    ],
  },
  {
    id: "b1-exchange", band: "B1", universe: "words", kind: "story",
    title: "Three months in Montreal", blurb: "Lucía's blog from her school exchange in Canada.",
    text: `Week 1. I arrived in Montreal on a Sunday night. The airport was freezing, my suitcase was late, and I suddenly realised I would be here for three months without my family. My host family, the Tremblays, were waiting with a sign that said "Bienvenida Lucía!" with a small mistake in the spelling. I loved them immediately.

Week 3. School is harder than I expected. Not the subjects, but the language. My English is fine in class, but in the cafeteria everyone speaks fast and uses words I've never heard. Yesterday someone said a test was "a piece of cake" and I spent five minutes wondering what cake had to do with chemistry. I'm writing down every new expression in a notebook.

Week 7. Something changed this week. I made a joke in English and people actually laughed, not at my accent but at the joke! I've joined the school's debate club, which terrifies me, but I think it's helping. I also dream in English sometimes now, which is very strange.

Week 12. I leave in four days and I don't want to go. I miss arepas, my mum's voice and the warm weather, but I'll miss snow, the Tremblays and my friends here too. My notebook has 214 expressions in it. The most useful one? "Could you say that again, please?" It opened more conversations than any other.`,
    gloss: [
      { word: "host family", means: "a family who lets a visitor live in their home" },
      { word: "immediately", means: "at once, without waiting" },
      { word: "a piece of cake", means: "(idiom) very easy" },
      { word: "debate", means: "a formal discussion where people argue for and against an idea" },
    ],
    questions: [
      { q: "What was difficult for Lucía at school in week 3?", options: ["Informal English used outside lessons.", "The chemistry and maths classes.", "Understanding her teachers' accents."], answer: 0, why: "\"My English is fine in class, but in the cafeteria everyone speaks fast and uses words I've never heard.\"" },
      { q: "Why was week 7 important for Lucía?", options: ["She stopped writing in her notebook.", "She felt more confident using English.", "She won a debate competition at school."], answer: 1, why: "She made a joke that people laughed at, joined the debate club and even dreamed in English." },
      { q: "Why does Lucía say \"Could you say that again, please?\" was so useful?", options: ["It was the first expression she learnt in Canada.", "Her host family used it every day at dinner.", "It helped her start and continue conversations."], answer: 2, why: "\"It opened more conversations than any other.\"" },
    ],
  },
  {
    id: "b1-fast-fashion", band: "B1", universe: "futures", kind: "article",
    title: "The real price of a cheap T-shirt", blurb: "Fast fashion is cheap for us, but someone else pays.",
    text: `Ten years ago, many clothes shops changed their collections four times a year, once for each season. Today, some online brands add thousands of new items every week. This is called fast fashion: clothes that copy the latest trends, are produced very quickly and sell at very low prices.

For shoppers, it seems like a good deal. You can buy a T-shirt for less than the price of a sandwich. But the low price hides other costs. To make clothes so cheaply, many factories pay workers very little, and some have unsafe conditions. Producing cotton also uses huge amounts of water: making a single T-shirt can need more than 2,500 litres, about what one person drinks in two years.

The environmental cost continues after we buy. Because the clothes are cheap and quickly go out of style, people wear them only a few times before throwing them away. In the Atacama Desert in Chile, there are now enormous piles of unwanted clothes, many of them almost new.

So what can we do? Experts suggest some simple ideas: buy fewer clothes but of better quality, look after them so they last longer, swap clothes with friends and buy second-hand. Some young Colombians have started small businesses selling used clothes online. As one of them says, "The most sustainable T-shirt is the one you already have."`,
    gloss: [
      { word: "trends", means: "what is popular or fashionable at a particular time" },
      { word: "a good deal", means: "something you buy at a good price" },
      { word: "go out of style", means: "stop being fashionable" },
      { word: "swap", means: "give something and get something else in return", es: "intercambiar" },
      { word: "sustainable", means: "that does not damage the environment, so it can continue for a long time" },
    ],
    questions: [
      { q: "What does the writer compare the water for one T-shirt to?", options: ["The water in a desert in Chile.", "What a person drinks in two years.", "The water used for a sandwich."], answer: 1, why: "\"More than 2,500 litres, about what one person drinks in two years.\"" },
      { q: "Why do people throw fast-fashion clothes away so quickly?", options: ["They are cheap and soon stop being fashionable.", "Shops ask customers to return them for recycling.", "They are usually too big or too small."], answer: 0, why: "\"Because the clothes are cheap and quickly go out of style.\"" },
      { q: "What is the main purpose of the text?", options: ["To advertise a second-hand clothes business.", "To explain how cotton is grown and turned into clothes in Colombia.", "To show the hidden costs of cheap clothes and suggest changes."], answer: 2, why: "It describes the human and environmental costs, then suggests \"simple ideas\" to change." },
    ],
  },
  {
    id: "b1-grandpa-radio", band: "B1", universe: "past", kind: "story",
    title: "Grandpa's radio", blurb: "An old radio, a cassette and a voice from 1978.",
    text: `When my grandfather died last year, he left me his old radio. It was big and heavy, made of dark wood, and it hadn't worked for years. My mum wanted to give it away, but I asked to keep it. I'm not sure why. Maybe because I remembered him sitting next to it every Sunday, listening to football.

A few months later, I decided to repair it. I watched videos online and bought some parts from an electronics shop in the city centre. The owner, an old man called Don Hernando, became interested in my project. "They don't make them like that any more," he said, and he offered to help me on Saturday mornings.

It took us six weeks. When we finally switched it on and heard music, I almost cried. Then Don Hernando noticed something: a cassette was stuck inside the back of the radio. We managed to get it out carefully and play it on another machine.

It was my grandfather's voice. He was young, maybe twenty, and he was pretending to be a radio presenter, announcing a football match between his friends in the village. He was funny and full of energy, nothing like the quiet old man I knew. I've listened to that cassette more than fifty times now. I think I finally understand why I wanted to keep the radio.`,
    gloss: [
      { word: "give away", means: "give something to someone without asking for money" },
      { word: "parts", means: "pieces of a machine", es: "repuestos, piezas" },
      { word: "stuck", means: "not able to move or come out" },
      { word: "pretending", means: "acting as if something is true when it isn't" },
      { word: "presenter", means: "a person who introduces a radio or TV programme" },
    ],
    questions: [
      { q: "Why did the writer want to keep the radio?", options: ["It reminded them of their grandfather.", "Their mum asked them to repair it.", "It was worth a lot of money."], answer: 0, why: "\"Maybe because I remembered him sitting next to it every Sunday.\"" },
      { q: "How did Don Hernando help?", options: ["He sold the radio to the writer.", "He worked on the repair with the writer.", "He recorded the cassette for the family."], answer: 1, why: "\"He offered to help me on Saturday mornings.\"" },
      { q: "What surprised the writer about the voice on the cassette?", options: ["It was a famous radio presenter.", "It described a real professional match between famous teams.", "It showed a lively side of their grandfather."], answer: 2, why: "\"He was funny and full of energy, nothing like the quiet old man I knew.\"" },
    ],
  },

  /* ---------------- B1+ ---------------- */
  {
    id: "b1p-bilingual", band: "B1+", universe: "words", kind: "article",
    title: "Two languages, one brain", blurb: "What really happens in the mind of someone who speaks two languages?",
    text: `For much of the twentieth century, many parents and teachers believed that learning two languages at once would confuse children. Some families who moved to new countries were even advised to speak only the new language at home. Today, research suggests that this advice was not only unnecessary but probably harmful.

When bilingual people speak, both languages are active in the brain at the same time, even if they are only using one. The brain constantly has to choose one language and ignore the other. Some researchers believe that this daily practice strengthens skills like switching between tasks and focusing attention, although scientists still disagree about how big and lasting these effects are.

What is less controversial is the social and cultural value of being bilingual. Speaking a family's heritage language helps children stay connected to grandparents and to their culture. Research with immigrant families shows that children who keep their parents' language often have closer family relationships and a stronger sense of identity.

It's also never too late to start. While young children often develop a more native-like accent, teenagers and adults usually learn grammar and vocabulary faster, because they can use strategies and their knowledge of their first language. So if you're learning English as a teenager in Colombia, your Spanish isn't an obstacle. It's a resource: thousands of words, like "information" and "información", are almost identical.`,
    gloss: [
      { word: "harmful", means: "causing damage" },
      { word: "switching", means: "changing from one thing to another" },
      { word: "controversial", means: "causing a lot of disagreement" },
      { word: "heritage language", means: "the language of your family or your family's culture" },
      { word: "obstacle", means: "something that stops you or makes progress difficult" },
    ],
    questions: [
      { q: "What did many people believe in the twentieth century?", options: ["Two languages would confuse children.", "Children learn languages faster than adults.", "Families should speak two languages at home."], answer: 0, why: "They \"believed that learning two languages at once would confuse children.\"" },
      { q: "What does the text say about the mental benefits of bilingualism?", options: ["They have been proven to last for life.", "Scientists don't fully agree about them.", "They only appear in young children."], answer: 1, why: "\"Scientists still disagree about how big and lasting these effects are.\"" },
      { q: "What is the writer's message to Colombian teenagers?", options: ["They should stop using Spanish while learning English.", "They will never have a native-like accent, so grammar matters more.", "Their knowledge of Spanish can help them learn English."], answer: 2, why: "\"Your Spanish isn't an obstacle. It's a resource.\"" },
    ],
  },
  {
    id: "b1p-silla", band: "B1+", universe: "arts", kind: "story",
    title: "The chair that wasn't for sale", blurb: "A young carpenter learns what makes something valuable.",
    text: `Esteban was seventeen when he started working in his uncle's carpentry workshop in Villa de Leyva. He wanted to make money quickly, so he copied designs from the internet: simple tables and shelves that he could build in a day and sell to tourists.

His uncle Ramiro worked differently. He was making a single rocking chair, and he had been working on it for three weeks. He chose each piece of wood carefully, shaped the arms by hand and sanded the surfaces until they felt like glass. Esteban thought he was wasting his time. "You could make ten tables in the time it takes you to make that chair," he said.

One afternoon, a woman came into the workshop. She ignored Esteban's tables completely and went straight to the rocking chair. She sat in it for a long time without speaking. Then she asked the price. "It isn't for sale," said Ramiro. "It's for my granddaughter, who's born next month."

The woman offered a huge amount of money, more than Esteban made in three months. Ramiro politely refused. After she left, Esteban asked him why. Ramiro thought for a moment. "Because some things are worth more than you can sell them for," he said. The next day, Esteban asked his uncle to teach him how to make a chair. It took him two months, and it wasn't perfect. But he has never sold it.`,
    gloss: [
      { word: "carpentry", means: "the work of making things from wood", es: "carpintería" },
      { word: "rocking chair", means: "a chair that moves backwards and forwards", es: "mecedora" },
      { word: "sanded", means: "made smooth by rubbing with special rough paper" },
      { word: "refused", means: "said no" },
    ],
    questions: [
      { q: "Why did Esteban copy simple designs at first?", options: ["He wanted to earn money fast.", "His uncle told him to do it.", "Tourists asked him for them."], answer: 0, why: "\"He wanted to make money quickly, so he copied designs from the internet.\"" },
      { q: "Why didn't Ramiro sell the chair?", options: ["The woman didn't offer enough money.", "He had made it for a member of his family.", "It wasn't finished yet, and he didn't want to sell it unfinished."], answer: 1, why: "\"It's for my granddaughter, who's born next month.\"" },
      { q: "What does the ending suggest about Esteban?", options: ["He decided to leave the workshop.", "He became a better businessman than his uncle by selling more tables.", "He came to value the chair the way his uncle did."], answer: 2, why: "He learnt to make a chair and \"has never sold it\", like his uncle." },
    ],
  },
  {
    id: "b1p-misinfo", band: "B1+", universe: "screens", kind: "article",
    title: "Before you share it", blurb: "Four quick checks that stop false news spreading.",
    text: `A message arrives in your family group: a photo of a flooded street with the words "Bogotá right now!! Share before they delete it!" Your aunt has already forwarded it to three other groups. Is it true?

False or misleading information spreads quickly online because it's designed to make us feel something strongly: fear, anger or surprise. When we feel strong emotions, we're more likely to share without checking. Studies of social media have found that false news can travel further and faster than true news, partly because it's often more shocking.

Fortunately, checking takes less time than you might think. First, look at the source: who originally published this? A message with no clear author should make you suspicious. Second, search for the claim: if something dramatic really happened, news organisations will be reporting it. Third, check the image. A reverse image search can show if a photo is old or comes from a different place. The "Bogotá" flood photo might really be from another country, five years ago. Finally, notice your feelings. Messages that demand you share "urgently" are trying to stop you from thinking.

None of this means you should distrust everything. The goal is to pause for thirty seconds before you share. As fact-checkers often say, if you're not sure, don't share it. And if your aunt has already forwarded it? A polite message with a link to the real information can help the whole family.`,
    gloss: [
      { word: "forwarded", means: "sent a message you received to other people" },
      { word: "misleading", means: "making people believe something that isn't true" },
      { word: "suspicious", means: "feeling that something may be wrong or false" },
      { word: "reverse image search", means: "a search that uses a picture to find where else it appears online" },
      { word: "distrust", means: "not believe or trust" },
    ],
    questions: [
      { q: "According to the text, why do people share false information?", options: ["Strong emotions make them share without checking.", "They want to help news organisations.", "False news is usually shorter and easier to read than true news."], answer: 0, why: "\"When we feel strong emotions, we're more likely to share without checking.\"" },
      { q: "What can a reverse image search show?", options: ["Who sent you the message first.", "Whether a photo is old or from somewhere else.", "How many people have shared a photo in their family groups."], answer: 1, why: "\"A reverse image search can show if a photo is old or comes from a different place.\"" },
      { q: "What is the writer's main advice?", options: ["Never trust anything you see on social media.", "Leave family groups that share false news.", "Stop briefly and check before sharing."], answer: 2, why: "\"The goal is to pause for thirty seconds before you share.\"" },
    ],
  },
  {
    id: "b1p-cyclist", band: "B1+", universe: "past", kind: "article",
    title: "Kings of the mountains", blurb: "How Colombian cyclists conquered the hardest climbs in Europe.",
    text: `In 1984, a young cyclist from Boyacá called Luis \"Lucho\" Herrera won a mountain stage of the Tour de France, the most famous bike race in the world. He was the first Colombian, and the first amateur, to do it. Millions of people back home listened on the radio as he climbed the Alps, and he became a national hero almost overnight.

Why have Colombians been so successful in the mountains? Part of the answer is geography. Many grew up in towns more than 2,500 metres above sea level, where the air contains less oxygen. Their bodies adapted by producing more red blood cells, which carry oxygen to the muscles. When they race at lower altitudes, they have an advantage.

But geography is only part of the story. Many of these cyclists come from farming families and grew up riding heavy bikes up steep roads to school or to sell products at the market. They developed strength and determination long before they had professional coaches.

The tradition has continued. In 2019, Egan Bernal, who grew up in Zipaquirá, became the first Latin American to win the Tour de France overall. Today, on Sunday mornings, thousands of amateur cyclists ride up the mountain roads around Bogotá and Medellín, many of them hoping to follow in the tyre tracks of their heroes.`,
    gloss: [
      { word: "stage", means: "one part of a long race that lasts several days", es: "etapa" },
      { word: "amateur", means: "someone who does a sport without being paid" },
      { word: "adapted", means: "changed to suit new conditions" },
      { word: "altitudes", means: "heights above sea level" },
      { word: "determination", means: "a strong wish to do something even when it's difficult" },
    ],
    questions: [
      { q: "What was special about Lucho Herrera's win in 1984?", options: ["No Colombian or amateur had done it before.", "He won the whole Tour de France.", "It was the first race shown on Colombian TV."], answer: 0, why: "\"He was the first Colombian, and the first amateur, to do it.\"" },
      { q: "How does living at high altitude help cyclists?", options: ["The roads are better for training.", "Their bodies make more red blood cells.", "The weather is cooler for racing."], answer: 1, why: "\"Their bodies adapted by producing more red blood cells.\"" },
      { q: "What does the writer say besides geography?", options: ["Professional coaches started training them as children.", "Most of them used light, expensive bikes.", "Everyday life made them strong and determined."], answer: 2, why: "Riding heavy bikes up steep roads helped them develop \"strength and determination\"." },
    ],
  },

  /* ---------------- B2 ---------------- */
  {
    id: "b2-gig", band: "B2", universe: "futures", kind: "article",
    title: "Your boss is an app", blurb: "Delivery apps promise freedom. Their riders aren't so sure.",
    text: `Walk through any Colombian city at lunchtime and you'll see them: riders on motorbikes and bicycles with large square backpacks, weaving through traffic to deliver food. They are part of the so-called gig economy, in which people work short, individual jobs, or "gigs", usually arranged through an app rather than a traditional employer.

The companies behind these apps present the arrangement as a win for everyone. Customers get convenience, restaurants reach more people, and riders get flexibility: they can log in whenever they like, work as much or as little as they want and be, in the companies' words, "their own boss". For students or people who need extra income around other commitments, this freedom can be genuinely valuable.

Critics, however, argue that the freedom is partly an illusion. Riders are usually classified as independent contractors rather than employees, which means they often have no guaranteed minimum wage, no paid holidays and limited protection if they have an accident. And while no human manager tells them what to do, an algorithm does. It decides which orders they receive, can lower their ranking if they reject too many jobs and may reduce their access to work without a clear explanation.

Several countries are now debating new laws to give app workers more rights while preserving some flexibility. Finding that balance won't be easy. But the question at the heart of the debate is one that will affect many of today's teenagers: as more jobs are organised by apps, who should be responsible for the people doing the work?`,
    gloss: [
      { word: "weaving", means: "moving between things, changing direction often" },
      { word: "commitments", means: "things you have promised or need to do" },
      { word: "illusion", means: "something that seems true but isn't" },
      { word: "independent contractors", means: "people who work for themselves, not as employees" },
      { word: "algorithm", means: "a set of computer instructions that makes decisions automatically" },
    ],
    questions: [
      { q: "According to the companies, what is the main benefit for riders?", options: ["They can choose when and how much to work.", "They receive a guaranteed minimum wage for every hour they spend logged in.", "They get paid holidays every year."], answer: 0, why: "Riders \"can log in whenever they like, work as much or as little as they want\"." },
      { q: "What do critics mean when they say the freedom is \"partly an illusion\"?", options: ["Riders are not allowed to choose their working hours.", "Riders lack protections and are still controlled by an algorithm.", "Human managers secretly watch every delivery and decide which orders riders receive."], answer: 1, why: "They have \"no guaranteed minimum wage\" and \"an algorithm does\" tell them what to do." },
      { q: "How does the writer end the text?", options: ["By saying that gig work should be banned.", "By recommending delivery work to students who need extra income.", "By raising an open question about responsibility."], answer: 2, why: "It ends with \"who should be responsible for the people doing the work?\"" },
    ],
  },
  {
    id: "b2-placebo", band: "B2", universe: "science", kind: "article",
    title: "The pill that does nothing, and works", blurb: "The strange power of the placebo effect.",
    text: `In medical research, new drugs are usually tested against a placebo: a pill that looks identical to the real medicine but contains nothing active, often just sugar. Patients don't know which one they're taking. If the real drug works better than the sugar pill, researchers can be confident it's genuinely effective.

What surprises many people is how well the sugar pills often work. In studies of pain, depression and digestive problems, a significant number of patients taking placebos report feeling noticeably better. This isn't simply imagination. Brain scans have shown that when people expect pain relief, their brains can release natural painkillers, and some measurable changes occur in the body.

Details matter, too. Studies have suggested that capsules can seem more effective than tablets, that two pills can work better than one, and that more expensive "brands" can produce stronger effects than cheap ones, even when all of them contain nothing. The way a doctor speaks to a patient, with warmth and confidence, can also strengthen the response.

Perhaps strangest of all, some research suggests placebos can work even when patients know they're taking one. In several small studies, people with long-term conditions were given pills openly labelled "placebo" and still reported improvements. Researchers are cautious: placebos can't shrink tumours or cure infections. But the evidence suggests that expectation, ritual and the relationship between patient and doctor are a real part of healing, not just a distraction from it.`,
    gloss: [
      { word: "identical", means: "exactly the same" },
      { word: "significant", means: "large or important enough to notice" },
      { word: "measurable", means: "that can be measured" },
      { word: "openly labelled", means: "with a clear label that tells you what it is" },
      { word: "cautious", means: "careful to avoid risks or strong claims" },
    ],
    questions: [
      { q: "Why do researchers compare new drugs with placebos?", options: ["To check that the drug really has an effect.", "To make the new drug cheaper to produce.", "To help patients who don't like real medicine."], answer: 0, why: "\"If the real drug works better than the sugar pill, researchers can be confident it's genuinely effective.\"" },
      { q: "What does the third paragraph show?", options: ["Expensive drugs are always better than cheap ones.", "Small details can change how strong the effect is.", "Doctors should stop using tablets and give patients only capsules from now on."], answer: 1, why: "Capsules, the number of pills, price and the doctor's manner can all change the response." },
      { q: "What is the writer's conclusion?", options: ["Placebos can cure most serious diseases.", "Patients should always be told they're getting a placebo, because it works better that way.", "Expectations and care play a real role in healing, within limits."], answer: 2, why: "Placebos \"can't shrink tumours\", but expectation and the relationship \"are a real part of healing\"." },
    ],
  },
  {
    id: "b2-translator", band: "B2", universe: "words", kind: "story",
    title: "Lost in translation", blurb: "Mariana interprets for her father at the doctor's. Some words don't travel.",
    text: `I was eleven the first time I interpreted for my father. We had moved to Miami six months earlier, and my English had grown much faster than his. At the bank, at the landlord's office, on the phone with the electricity company, I became his voice. I was proud of it, mostly.

The appointment I remember best was at a clinic. My father had been having chest pains, and the doctor, a tired woman with kind eyes, asked him to describe them. "Es como un ardor," he said, pressing a hand to his chest. I froze. I knew "ardor" meant something like burning, but was it a sharp burning or a dull one? Was it like heartburn or something worse? I said "It burns," and the doctor nodded and wrote something down.

On the way home, my father asked me exactly what I'd told her. When I repeated it, he was quiet for a long time. "It's not exactly burning," he finally said. "It's heavier than that." I realised then that I had been translating words, not experiences, and that the difference might matter.

We went back the next week, and this time we asked for a professional interpreter. My father described the pain for nearly ten minutes, and the doctor ordered new tests. It turned out to be something treatable, caught early. I still interpret sometimes, but now I know when to say the most important sentence any translator can learn: "I'm not sure that's the right word. Let me ask again."`,
    gloss: [
      { word: "interpreted", means: "translated spoken words from one language to another" },
      { word: "landlord", means: "the person who owns the house you rent" },
      { word: "froze", means: "suddenly stopped moving or speaking because of fear or surprise" },
      { word: "dull", means: "(of pain) not sharp, but continuous" },
      { word: "treatable", means: "that doctors can treat or cure" },
    ],
    questions: [
      { q: "Why did Mariana interpret for her father?", options: ["Her English developed faster than his.", "She was studying to be an interpreter.", "The doctor asked her to help."], answer: 0, why: "\"My English had grown much faster than his.\"" },
      { q: "What did Mariana realise on the way home?", options: ["She had used completely the wrong word.", "Translating words isn't the same as translating experiences.", "Her father could speak English much better than she had thought, so he didn't need her."], answer: 1, why: "\"I had been translating words, not experiences.\"" },
      { q: "What does Mariana's final sentence show about her?", options: ["She has stopped interpreting for her family.", "She believes children shouldn't interpret.", "She now checks meaning when she's unsure."], answer: 2, why: "\"I'm not sure that's the right word. Let me ask again.\"" },
    ],
  },
  {
    id: "b2-cumbia", band: "B2", universe: "arts", kind: "article",
    title: "How cumbia conquered a continent", blurb: "From the Caribbean coast of Colombia to the world.",
    text: `Cumbia began on Colombia's Caribbean coast, probably in the area around the Magdalena River, as a blend of three traditions. From African communities came the drums and much of the rhythm; from Indigenous peoples, the gaita flutes and maracas; and from Spanish culture, elements of the melodies, the lyrics and the dress. For a long time it was mainly a dance performed at night, around candles, in rural communities.

In the mid-twentieth century, cumbia moved from villages to cities. Big bands in Barranquilla and Medellín added brass instruments and arrangements inspired by jazz orchestras, and radio stations carried the new sound across the country. Soon, record companies were exporting it to the rest of Latin America.

What happened next is unusual: instead of simply being copied, cumbia was reinvented almost everywhere it arrived. In Mexico it became slower and more romantic; in Peru, musicians mixed it with electric guitars and Andean melodies to create "chicha"; in Argentina, it developed into "cumbia villera", with lyrics about life in poor neighbourhoods. Each version reflects the place that adopted it.

Today, cumbia continues to evolve, combined with electronic music, hip-hop and reggaeton by producers from Bogotá to Buenos Aires to Los Angeles. Purists sometimes complain that these new styles have lost the spirit of the original. Others argue that constant change is the spirit of the original, since cumbia itself was born from mixing.`,
    gloss: [
      { word: "blend", means: "a mixture" },
      { word: "brass instruments", means: "metal instruments you blow, like the trumpet" },
      { word: "reinvented", means: "changed so much that it became something new" },
      { word: "adopted", means: "took something and made it its own" },
      { word: "purists", means: "people who want things to stay in their traditional form" },
    ],
    questions: [
      { q: "According to the text, where did the drums in cumbia come from?", options: ["African communities.", "Indigenous peoples.", "Spanish culture."], answer: 0, why: "\"From African communities came the drums and much of the rhythm.\"" },
      { q: "What is \"unusual\" about how cumbia spread?", options: ["It became popular only on the radio.", "Each country created its own version.", "It was exported before it was popular in Colombia."], answer: 1, why: "\"Cumbia was reinvented almost everywhere it arrived.\"" },
      { q: "What does the last sentence suggest?", options: ["The new styles have destroyed traditional cumbia.", "Only Colombians can play real cumbia.", "Mixing styles is true to cumbia's origins."], answer: 2, why: "\"Constant change is the spirit of the original, since cumbia itself was born from mixing.\"" },
    ],
  },

  /* ---------------- B2+ ---------------- */
  {
    id: "b2p-memory", band: "B2+", universe: "science", kind: "article",
    title: "Your memory is a storyteller, not a camera", blurb: "Why confident memories can still be wrong.",
    text: `Most of us think of memory as a kind of recording: something happens, the brain stores it, and later we press "play". It's a comforting idea, and it's largely mistaken. Decades of research suggest that remembering is less like replaying a video and more like rebuilding a story each time we tell it, using fragments, expectations and whatever information we've picked up since.

The psychologist Elizabeth Loftus demonstrated this in a series of famous experiments. In one, participants watched a film of a car accident and were then asked how fast the cars were going when they "smashed into" or "hit" each other. Those who heard "smashed" gave higher estimates, and a week later they were more likely to remember broken glass at the scene, even though there had been none. A single word had quietly rewritten the memory.

This has serious consequences beyond the laboratory. Eyewitness testimony is extremely persuasive in courtrooms, yet studies of wrongful convictions later overturned by DNA evidence have found that mistaken eyewitness identification was a factor in a large proportion of cases. The witnesses weren't lying; they genuinely believed what they remembered.

None of this means memory is useless; for most everyday purposes it works remarkably well. The flexibility that makes it unreliable also allows us to learn, generalise and imagine the future. The lesson, rather, is one of humility. Feeling certain about a memory tells us how vivid it is, not how accurate. And when two people remember the same event differently, the most honest answer may be that both are telling a version of the truth.`,
    gloss: [
      { word: "fragments", means: "small pieces of something" },
      { word: "estimates", means: "guesses about an amount or number" },
      { word: "testimony", means: "what a witness says in a court" },
      { word: "wrongful convictions", means: "cases where innocent people were found guilty" },
      { word: "humility", means: "the quality of not thinking you are always right" },
    ],
    questions: [
      { q: "What did the Loftus experiment show?", options: ["The wording of a question can change a memory.", "People forget accidents within a week.", "Drivers usually misjudge their own speed after an accident."], answer: 0, why: "\"A single word had quietly rewritten the memory.\"" },
      { q: "What does the writer say about eyewitnesses in wrongful convictions?", options: ["Most of them were deliberately lying.", "They sincerely believed their incorrect memories.", "They were usually ignored by the courts and the lawyers in those cases."], answer: 1, why: "\"The witnesses weren't lying; they genuinely believed what they remembered.\"" },
      { q: "Which statement best matches the writer's view?", options: ["Memory is too unreliable to be useful in daily life.", "Vivid memories are almost always accurate, even many years after the event.", "Certainty about a memory doesn't prove it's correct."], answer: 2, why: "\"Feeling certain about a memory tells us how vivid it is, not how accurate.\"" },
    ],
  },
  {
    id: "b2p-tourism", band: "B2+", universe: "futures", kind: "article",
    title: "Loved to death", blurb: "When a beautiful place becomes too popular, who pays the price?",
    text: `Not long ago, Caño Cristales, the river in the Sierra de la Macarena famous for turning red, yellow and green, was almost unknown outside Colombia. Then photographs began circulating on social media, travel magazines named it "the most beautiful river in the world", and visitor numbers rose sharply. The authorities responded by limiting daily visitors, banning sunscreen in the water and closing the river for part of the year to let it recover.

Caño Cristales is a relatively successful example of a global problem known as overtourism: the point at which visitors damage the very things that attracted them. In Venice, residents have been leaving the historic centre for decades as rents rise and apartments become holiday rentals. In parts of Thailand, beaches made famous by films have had to close completely after coral reefs were destroyed. Social media has intensified the problem by concentrating huge numbers of people on the same "Instagrammable" spots.

The dilemma is that tourism also brings real benefits. It creates jobs, supports local businesses and can give communities an economic reason to protect nature instead of exploiting it. In places like La Macarena, former coca-growing regions have found in eco-tourism an alternative, legal source of income. Banning tourists outright would hurt precisely the people it's supposed to protect.

Most experts therefore favour management rather than prohibition: limits on visitor numbers, higher fees that fund conservation, guides drawn from local communities and campaigns encouraging travellers to visit less famous places. Ultimately, though, some responsibility falls on travellers themselves. Visiting a place well, it turns out, may matter more than simply having been there.`,
    gloss: [
      { word: "circulating", means: "being passed from person to person" },
      { word: "intensified", means: "made stronger or more serious" },
      { word: "dilemma", means: "a situation where you must choose between two difficult options" },
      { word: "outright", means: "completely" },
      { word: "prohibition", means: "the act of officially not allowing something" },
    ],
    questions: [
      { q: "What is \"overtourism\", according to the text?", options: ["When visitors harm what made a place attractive.", "When a place is too expensive for tourists.", "When tourists only visit famous places."], answer: 0, why: "\"The point at which visitors damage the very things that attracted them.\"" },
      { q: "Why does the writer mention former coca-growing regions?", options: ["To show that tourism always destroys nature.", "To show that tourism can offer legal income.", "To explain why the river changes colour."], answer: 1, why: "They \"have found in eco-tourism an alternative, legal source of income.\"" },
      { q: "What does the final sentence imply?", options: ["People should stop travelling to famous places.", "Governments alone must solve the problem by closing the most popular places.", "How you visit a place is more important than visiting it."], answer: 2, why: "\"Visiting a place well… may matter more than simply having been there.\"" },
    ],
  },
  {
    id: "b2p-debate-club", band: "B2+", universe: "words", kind: "story",
    title: "Arguing the other side", blurb: "Camilo is told to defend an opinion he hates. He doesn't expect it to change him.",
    text: `Camilo had been in the debate club for a year before it happened. Mrs Ospina read out the motion for the regional competition, "This house would lower the voting age to sixteen", and then the sides. Camilo's team would argue against. He felt his face go hot. He was sixteen, he cared about politics more than most adults he knew, and he had spent months telling anyone who would listen that people his age deserved a vote.

"I can't argue that," he told her after class. "I don't believe it." Mrs Ospina smiled in a way that suggested she had expected this. "Good," she said. "Then you'll have to understand it properly before you can beat it."

The research was uncomfortable. Some of the arguments against were weak, and he dismissed them easily. Others were harder. Several studies suggested that turnout among the youngest voters tended to be low in some places, which might weaken the case that teenagers were demanding a voice. Some people worried that schools could become more politically pressured. He didn't agree with all of it, but he could no longer pretend that everyone on the other side was simply ignorant or afraid of young people.

His team lost the final by a narrow margin. On the bus home, Camilo realised that he still believed sixteen-year-olds should vote, perhaps even more firmly than before. But his reasons were different now: more precise, better tested, aware of the objections. He also noticed something else. The next time he argued about it with his uncle, he didn't raise his voice once. He didn't need to.`,
    gloss: [
      { word: "motion", means: "(in a debate) the statement that the teams argue about" },
      { word: "dismissed", means: "decided that something was not worth considering" },
      { word: "turnout", means: "the number of people who vote in an election" },
      { word: "narrow margin", means: "a very small difference" },
      { word: "objections", means: "reasons for disagreeing" },
    ],
    questions: [
      { q: "Why was Camilo upset about the motion?", options: ["He had to argue against something he believed in.", "He wasn't old enough to take part in the regional competition that year.", "Mrs Ospina chose another student as captain."], answer: 0, why: "His team would argue against the motion, and he believed people his age \"deserved a vote\"." },
      { q: "What changed during Camilo's research?", options: ["He decided that teenagers shouldn't vote.", "He began to respect some opposing arguments.", "He found that all the opposing arguments were weak."], answer: 1, why: "\"He could no longer pretend that everyone on the other side was simply ignorant.\"" },
      { q: "What does the ending suggest about Camilo?", options: ["He has lost interest in politics.", "He has stopped talking to his uncle about voting because they always argue.", "He now holds his view more thoughtfully and calmly."], answer: 2, why: "His reasons were \"more precise, better tested\" and he \"didn't raise his voice once\"." },
    ],
  },
  {
    id: "b2p-dark-sky", band: "B2+", universe: "science", kind: "article",
    title: "The disappearing night", blurb: "Light pollution is erasing the stars, and changing life on Earth.",
    text: `For almost all of human history, a clear night meant a sky crowded with stars, with the pale band of the Milky Way stretching from horizon to horizon. Today, it is estimated that around a third of humanity, and a large majority of people in Europe and North America, can no longer see the Milky Way from where they live. The cause isn't clouds or pollution in the usual sense, but light: the glow from streetlights, buildings, advertising screens and car parks, scattered through the atmosphere.

Losing the view of the stars might seem like a purely aesthetic or cultural loss, and it is a significant one; generations of navigators, poets and scientists were shaped by the night sky. But artificial light also has measurable effects on living things. Many insects are drawn to lamps, where they exhaust themselves or are eaten, which some scientists believe may be contributing to insect decline. Newly hatched sea turtles, which instinctively head towards the brighter horizon over the sea, can crawl inland towards roads instead. Migrating birds can become disoriented by illuminated buildings.

Humans are affected too. Exposure to light at night can disrupt the body's internal clock and the production of melatonin, and researchers are investigating links with poor sleep and other health problems, although many questions remain open.

Unlike many environmental problems, this one has relatively simple solutions. Shielded lamps that point light downwards, warmer colours instead of bright white and blue, and lights that switch off when they aren't needed can dramatically reduce the glow without making streets less safe. Some places, including areas of the Tatacoa Desert in Colombia, have begun promoting themselves as dark-sky destinations. The stars, it turns out, haven't gone anywhere. We've just been hiding them.`,
    gloss: [
      { word: "scattered", means: "spread in many directions" },
      { word: "aesthetic", means: "connected with beauty" },
      { word: "hatched", means: "(of a baby animal) came out of its egg" },
      { word: "disoriented", means: "confused about where you are or which direction to go" },
      { word: "shielded", means: "covered to stop light going in some directions" },
    ],
    questions: [
      { q: "What causes the stars to \"disappear\", according to the text?", options: ["Artificial light spreading through the sky.", "Clouds created by air pollution.", "Changes in the Milky Way itself over time."], answer: 0, why: "\"The cause isn't clouds… but light… scattered through the atmosphere.\"" },
      { q: "Why does the writer mention sea turtles?", options: ["To show how light can mislead animals.", "To explain how turtles use the stars.", "To describe an animal that likes cities."], answer: 0, why: "Turtles head \"towards the brighter horizon\" and \"can crawl inland towards roads instead.\"" },
      { q: "What is the writer's attitude towards solving light pollution?", options: ["It's impossible without making streets dangerous.", "Only scientists can find a solution.", "It can be reduced with fairly simple changes."], answer: 2, why: "\"This one has relatively simple solutions.\"" },
    ],
  },
];
