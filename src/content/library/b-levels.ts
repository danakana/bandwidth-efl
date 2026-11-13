/** Graded reading for B1 to B2+. Original texts for Bandwidth EFL. For teacher review. */
import type { Story } from "./types";

export const B_LEVEL_STORIES: Story[] = [
  {
    id: "b1-kitchen-robots", band: "B1", universe: "futures", kind: "article",
    title: "Would you let a robot cook for you?", blurb: "Robot kitchens already exist. But are they the future of food?",
    text: `In some cities, you can already order a burger that no human hands have touched. In these restaurants, robotic arms cook the meat, slice the tomatoes and put everything together in less than five minutes. The companies behind them say robots are faster, cleaner and never have a bad day.

Supporters believe robot kitchens could solve real problems. Restaurants in many countries struggle to find staff, especially for long shifts in hot kitchens. Robots can also measure ingredients exactly, which means less food is wasted. Some engineers even imagine robot cooks in hospitals, preparing meals for patients with special diets.

However, not everyone is convinced. Several robot restaurants have closed after only a few years, because the machines were expensive to buy and repair. Chefs also point out that cooking is not only about following a recipe. A good cook tastes the food, adjusts the salt and changes a dish depending on the season. For now, robots are good at repeating the same task thousands of times, but much less good at improvising.

There is also the question of jobs. For many young people, a job in a kitchen is their first step into work. If robots take over, where will they learn?

Perhaps the most likely future is a mix: machines doing the repetitive, dangerous jobs, like frying, while people do the creative work and talk to customers. After all, for most of us, a meal is not just food. It's an experience.`,
    gloss: [
      { word: "struggle", means: "find it very difficult", es: "tener dificultades" },
      { word: "staff", means: "the people who work for an organisation" },
      { word: "convinced", means: "completely sure that something is true or good" },
      { word: "improvising", means: "doing something without a plan, deciding as you go" },
      { word: "repetitive", means: "doing the same thing again and again" },
    ],
    questions: [
      { q: "According to supporters, how could robot kitchens help?", options: ["By making food more creative", "By solving staff shortages and reducing food waste", "By giving young people jobs"], answer: 1, why: "Restaurants \"struggle to find staff\" and robots \"measure ingredients exactly, which means less food is wasted\"." },
      { q: "Why have some robot restaurants closed?", options: ["Customers didn't like the food.", "The robots were too slow.", "The machines were expensive to buy and repair."], answer: 2, why: "\"The machines were expensive to buy and repair.\"" },
      { q: "What does the writer think is most likely?", options: ["Robots will replace all cooks.", "A mix of robots doing repetitive work and people doing creative work", "Robot kitchens will disappear."], answer: 1, why: "\"Perhaps the most likely future is a mix.\"" },
    ],
  },
  {
    id: "b1-stories", band: "B1", universe: "words", kind: "article",
    title: "Why do we love stories?", blurb: "From cave paintings to TikTok, humans have always told stories. Science is starting to understand why.",
    text: `Think about the last time you couldn't stop watching a series, or stayed up late to finish a book. Why do stories have so much power over us?

One reason is that stories help us remember. Our brains are not very good at remembering lists of facts, but they are excellent at remembering events that happen to people. That's why many teachers start a lesson with a story, and why advertisers rarely just tell you the price of a product. They show you a family, a problem and a happy ending.

Stories also change what happens in our bodies. Researchers have found that when we watch an emotional story, our brains release a chemical connected to trust and empathy. In one experiment, people who watched a sad but hopeful story about a father and his sick son were more likely to give money to charity afterwards.

But the most important reason may be social. For thousands of years, before writing existed, stories were how humans passed on knowledge: where to find water, which plants were dangerous, how to behave in a group. People who listened carefully to stories had a better chance of surviving.

So next time someone tells you that reading novels or watching films is a waste of time, you can tell them it's actually one of the oldest learning tools we have.`,
    gloss: [
      { word: "rarely", means: "not often" },
      { word: "release", means: "let something go out, produce it" },
      { word: "empathy", means: "the ability to understand how another person feels", es: "empatía" },
      { word: "charity", means: "an organisation that helps people in need", es: "beneficencia, fundación" },
      { word: "passed on", means: "gave knowledge to the next people or generation" },
    ],
    questions: [
      { q: "Why do teachers often start lessons with a story, according to the text?", options: ["Stories are shorter than lists.", "Our brains remember events that happen to people better than facts.", "Students prefer films."], answer: 1, why: "\"Our brains are not very good at remembering lists of facts, but they are excellent at remembering events that happen to people.\"" },
      { q: "What happened in the experiment?", options: ["People who watched an emotional story gave more money to charity.", "People forgot the story quickly.", "People stopped trusting each other."], answer: 0, why: "They \"were more likely to give money to charity afterwards\"." },
      { q: "What is the main social reason for stories, according to the writer?", options: ["To entertain children", "To sell products", "To pass on knowledge that helped people survive"], answer: 2, why: "\"Stories were how humans passed on knowledge… People who listened carefully had a better chance of surviving.\"" },
    ],
  },
  {
    id: "b1p-biblioburro", band: "B1+", universe: "past", kind: "story",
    title: "The library on four legs", blurb: "A teacher in northern Colombia found an unusual way to bring books to children.",
    text: `In the late 1990s, a primary school teacher named Luis Soriano noticed something worrying in the rural area where he lived, in the north of Colombia. Many children in the small villages around his town had never owned a book. The nearest library was hours away, the roads were often just dirt tracks, and few families could afford to buy books.

So he came up with an idea that sounded almost like a joke: a library that travelled by donkey. He started with around seventy books, loaded them onto two donkeys and set off on weekends to visit remote villages. When he arrived, children would gather under a tree, and he would read stories aloud, help them with homework and lend them books until his next visit.

The project, which became known as the Biblioburro, was not easy. The journeys could take many hours in the heat, and over the years he faced accidents and even danger on the roads. But the children's enthusiasm kept him going. Some of the first children he read to went on to finish secondary school, something that had been rare in their communities.

As news of the Biblioburro spread, people around the world started sending books, and journalists came to film him. Donations eventually helped him build a small library in his town.

Soriano's story is now told in documentaries and children's books. But perhaps its real lesson is simpler: big changes in education don't always need big budgets. Sometimes they need one person who refuses to accept that some children are too far away to learn.`,
    gloss: [
      { word: "rural", means: "in the countryside, not in a town or city", es: "rural" },
      { word: "afford", means: "have enough money to pay for something" },
      { word: "remote", means: "far away from towns and other people", es: "apartado" },
      { word: "enthusiasm", means: "a feeling of strong interest and excitement" },
      { word: "donations", means: "money or things given to help" },
    ],
    questions: [
      { q: "What problem did Luis Soriano notice?", options: ["Children in rural villages had very little access to books.", "The school had no teachers.", "Children didn't want to read."], answer: 0, why: "\"Many children… had never owned a book. The nearest library was hours away.\"" },
      { q: "What kept Soriano going despite the difficulties?", options: ["The money he earned", "The children's enthusiasm", "The journalists"], answer: 1, why: "\"But the children's enthusiasm kept him going.\"" },
      { q: "What is the writer's main message at the end?", options: ["Donkeys are the best way to travel.", "Education always needs big budgets.", "One determined person can make a big difference in education."], answer: 2, why: "\"Big changes in education don't always need big budgets. Sometimes they need one person who refuses…\"" },
    ],
  },
  {
    id: "b1p-music-brain", band: "B1+", universe: "arts", kind: "article",
    title: "What music does to your brain", blurb: "Why a song can give you goosebumps, and why it might help you study (or not).",
    text: `Have you ever felt a shiver down your spine when the chorus of your favourite song begins? You're not alone. Scientists have found that intense pleasure from music is linked to dopamine, the same chemical released when we eat something delicious. Interestingly, the brain often releases it slightly before the best moment of a song, as if it is getting ready for the reward.

Music also affects our mood in ways that we can measure. Fast songs in a major key tend to make people feel energetic and happy, while slow songs in a minor key often feel sad. Hospitals in several countries now use music to help patients relax before operations, and some studies suggest it can reduce the amount of pain medicine they need.

But what about studying with music? Here the research is more complicated. For simple, repetitive tasks, background music can improve concentration by making the work less boring. For tasks that need a lot of thinking, like reading a difficult text or solving maths problems, music with lyrics usually makes things worse, because the brain tries to process the words of the song and the words on the page at the same time.

So if you like music while you study, the advice is simple: choose songs without lyrics for difficult work, and keep your favourite playlist as a reward for when you finish.`,
    gloss: [
      { word: "shiver", means: "a quick shaking movement of the body, from cold or emotion", es: "escalofrío" },
      { word: "spine", means: "the line of bones down the middle of your back", es: "columna" },
      { word: "major key / minor key", means: "two types of musical scale; major often sounds bright, minor often sounds sad" },
      { word: "lyrics", means: "the words of a song", es: "letra (de una canción)" },
      { word: "process", means: "deal with information and understand it" },
    ],
    questions: [
      { q: "When does the brain often release dopamine during a song?", options: ["Just before the best moment", "Only at the end", "When the song is sad"], answer: 0, why: "\"The brain often releases it slightly before the best moment of a song.\"" },
      { q: "How do some hospitals use music?", options: ["To wake patients up", "To help patients relax before operations", "To replace all pain medicine"], answer: 1, why: "\"Hospitals… use music to help patients relax before operations.\" It may reduce, not replace, medicine." },
      { q: "Why can music with lyrics make difficult studying harder?", options: ["It's too loud.", "It makes people sleepy.", "The brain tries to process the song's words and the text at the same time."], answer: 2, why: "\"The brain tries to process the words of the song and the words on the page at the same time.\"" },
    ],
  },
  {
    id: "b2-attention", band: "B2", universe: "screens", kind: "article",
    title: "If it's free, you're the product", blurb: "How social media apps are designed to keep you scrolling, and what you can do about it.",
    text: `There's a well-known saying in the technology world: if you're not paying for the product, you are the product. Most social media apps don't charge their users a cent, yet some of the companies behind them are among the most valuable in the world. Their real business is selling advertising, and the more time you spend in the app, the more adverts they can show you. Your attention, in other words, is what's being sold.

To capture as much of it as possible, apps rely on design techniques borrowed partly from psychology and partly from casinos. The infinite scroll means there's never a natural place to stop. Notifications arrive at unpredictable moments, which, according to researchers, makes us check our phones more often than regular, predictable rewards would. Even the small red circle on an app icon was chosen because red attracts the eye and creates a mild sense of urgency.

None of this means that social media is simply bad. It allows people to stay in touch with distant friends, find communities that share their interests and learn skills from tutorials. The problem is that the apps are optimised for time spent, not for how we feel afterwards.

The good news is that small changes can shift the balance back. Turning off non-essential notifications removes many of the triggers that pull us back in. Setting the screen to greyscale makes apps noticeably less attractive. And moving social apps off the home screen adds just enough friction to turn an automatic habit into a conscious choice. The aim isn't to quit, but to make sure you're the one deciding.`,
    gloss: [
      { word: "capture", means: "catch and keep" },
      { word: "unpredictable", means: "impossible to know in advance" },
      { word: "optimised for", means: "designed to get the best possible result in one particular thing" },
      { word: "triggers", means: "things that cause a reaction or a habit to start" },
      { word: "friction", means: "(here) a small difficulty that slows you down" },
    ],
    questions: [
      { q: "What does \"you are the product\" mean in the text?", options: ["Users design the apps.", "Companies sell users' attention to advertisers.", "Users pay a monthly fee."], answer: 1, why: "\"Their real business is selling advertising… Your attention… is what's being sold.\"" },
      { q: "Why do unpredictable notifications matter, according to researchers?", options: ["They make us check our phones more often.", "They are easier to ignore.", "They use less battery."], answer: 0, why: "They make us check \"more often than regular, predictable rewards would\"." },
      { q: "What is the writer's attitude to social media?", options: ["It should be banned for teenagers.", "It has no real benefits.", "It has benefits, but users should take control of how they use it."], answer: 2, why: "\"None of this means that social media is simply bad… The aim isn't to quit, but to make sure you're the one deciding.\"" },
    ],
  },
  {
    id: "b2-car-free", band: "B2", universe: "futures", kind: "article",
    title: "Can a city live without cars?", blurb: "Some cities are pushing cars out of their centres. Residents don't always agree on the results.",
    text: `When the Spanish city of Pontevedra closed most of its centre to private cars in the late 1990s, many shop owners predicted disaster. Customers, they argued, would simply go to shopping centres on the outskirts where parking was easy. More than two decades later, the opposite seems to have happened: the centre is full of pedestrians, children play in streets that once carried traffic, and many small businesses report doing better than before.

Pontevedra is often held up as an example, but it is not alone. Cities from Oslo to Bogotá have experimented with reducing car traffic, through measures such as car-free days, wider pavements, protected bike lanes and charges for driving into the centre. Supporters point to clear benefits: cleaner air, fewer traffic deaths and more space for people rather than vehicles.

Critics, however, raise important objections. Not everyone can easily walk or cycle, particularly older people, people with disabilities and families who live far from public transport. In some cities, restrictions have pushed traffic into surrounding neighbourhoods, which are often poorer, simply moving the problem elsewhere. And in places where buses are unreliable, telling people to leave their cars at home can feel like a privilege of those who live centrally.

What the most successful projects seem to have in common is that they don't just take something away. They offer alternatives first: frequent public transport, safe routes for bikes and spaces that make walking pleasant. A car-free centre works best, it seems, when people no longer feel they need a car to get there.`,
    gloss: [
      { word: "outskirts", means: "the areas at the edge of a town or city", es: "afueras" },
      { word: "held up as an example", means: "presented as a model for others to copy" },
      { word: "measures", means: "actions taken to solve a problem" },
      { word: "objections", means: "reasons for disagreeing" },
      { word: "privilege", means: "an advantage that only some people have" },
    ],
    questions: [
      { q: "What did shop owners in Pontevedra fear?", options: ["That customers would go to shopping centres on the outskirts", "That tourists would stop coming", "That pollution would increase"], answer: 0, why: "\"Customers, they argued, would simply go to shopping centres on the outskirts.\"" },
      { q: "Which criticism is mentioned?", options: ["Bike lanes are too expensive.", "Restrictions can push traffic into poorer neighbourhoods.", "Pedestrians cause accidents."], answer: 1, why: "\"Restrictions have pushed traffic into surrounding neighbourhoods, which are often poorer.\"" },
      { q: "According to the writer, what do successful projects have in common?", options: ["They ban cars quickly and completely.", "They charge drivers high fees.", "They offer good alternatives before restricting cars."], answer: 2, why: "\"They offer alternatives first: frequent public transport, safe routes for bikes…\"" },
    ],
  },
  {
    id: "b2p-palenque", band: "B2+", universe: "words", kind: "article",
    title: "The language that refused to disappear", blurb: "In a small town near Cartagena, a language born from resistance is being taught to a new generation.",
    text: `About an hour from Cartagena lies San Basilio de Palenque, a town founded centuries ago by Africans who escaped slavery and built a free community in the hills. Among the things they preserved was a way of speaking: Palenquero, a creole language that combines elements of Spanish with features of Bantu languages from Central Africa. It is often described as the only Spanish-based creole language in Latin America.

For much of the twentieth century, Palenquero was in decline. Young people who moved to the cities for work were sometimes mocked for their accent, and many parents chose to raise their children in Spanish, hoping it would give them better opportunities. By the end of the century, linguists feared that the language might not survive another generation.

The turning point came from within the community. Teachers and elders began to argue that losing the language would mean losing part of their history and identity. Palenquero was introduced into local schools, alongside the music, dances and funeral traditions that are closely tied to it. International recognition also helped: in 2005, UNESCO recognised Palenque's cultural space as a Masterpiece of the Oral and Intangible Heritage of Humanity, drawing visitors and researchers to the town.

Today, many children in Palenque learn the language at school, and young musicians use it in songs that mix traditional rhythms with hip hop and champeta. Whether it will become an everyday language again remains uncertain; Spanish still dominates most conversations. But the story of Palenquero shows that a language's future depends less on numbers than on whether its speakers decide it is worth keeping.`,
    gloss: [
      { word: "preserved", means: "kept something safe so it continues to exist" },
      { word: "creole language", means: "a full language that develops from the mixing of two or more languages" },
      { word: "in decline", means: "becoming weaker or less common" },
      { word: "mocked", means: "laughed at in an unkind way" },
      { word: "intangible heritage", means: "traditions, knowledge and practices passed down, not physical objects" },
    ],
    questions: [
      { q: "Why did many parents raise their children in Spanish?", options: ["They had forgotten Palenquero.", "They hoped it would give their children better opportunities.", "Schools didn't allow Palenquero."], answer: 1, why: "Parents chose Spanish \"hoping it would give them better opportunities\"." },
      { q: "Where did the turning point come from, according to the text?", options: ["From the community's teachers and elders", "From the national government", "From tourists"], answer: 0, why: "\"The turning point came from within the community. Teachers and elders began to argue…\"" },
      { q: "What is the writer's view about the language's future?", options: ["It will certainly replace Spanish.", "It will disappear soon.", "It's uncertain, but it depends mainly on speakers' decision to keep it."], answer: 2, why: "\"Whether it will become an everyday language again remains uncertain… depends less on numbers than on whether its speakers decide it is worth keeping.\"" },
    ],
  },
  {
    id: "b2p-deep-sea", band: "B2+", universe: "science", kind: "article",
    title: "Life where the sun never shines", blurb: "We know more about the surface of the Moon than the bottom of our own oceans.",
    text: `It's often said that humans have mapped the surface of the Moon in more detail than the floor of our own oceans, and the claim is not far from the truth. Most of the deep sea, which begins around 200 metres below the surface, remains unexplored, largely because of the extreme conditions down there.

Below about 1,000 metres, no sunlight reaches the water at all. Temperatures hover just above freezing, and the pressure is crushing: at the bottom of the Mariana Trench, almost 11 kilometres down, it is more than a thousand times greater than at sea level. For a long time, scientists assumed that very little could survive in such an environment.

They were wrong. Deep-sea expeditions have revealed an astonishing variety of life, much of it adapted in ways that seem almost alien. Many creatures produce their own light, a phenomenon called bioluminescence, which they use to find mates, confuse predators or attract prey. The anglerfish, for instance, dangles a glowing lure in front of its mouth to tempt smaller fish. Around hydrothermal vents, where hot, mineral-rich water bursts from the sea floor, entire ecosystems survive without any energy from the sun, relying instead on bacteria that turn chemicals into food.

These discoveries matter far beyond curiosity. Some deep-sea organisms have provided compounds that are being studied for new medicines, and vent ecosystems have changed scientists' ideas about where life might exist on other planets. Yet the deep sea is also under growing pressure from deep-sea mining for metals used in batteries. Many scientists argue that we should understand these ecosystems better before we risk destroying them.`,
    gloss: [
      { word: "hover", means: "(here) stay at about the same level" },
      { word: "crushing", means: "so strong that it could press something flat" },
      { word: "astonishing", means: "extremely surprising" },
      { word: "lure", means: "something used to attract an animal so it can be caught" },
      { word: "compounds", means: "chemical substances made of two or more elements" },
    ],
    questions: [
      { q: "Why does most of the deep sea remain unexplored?", options: ["Because of extreme conditions such as darkness, cold and pressure", "Because nothing lives there", "Because it is too close to the Moon"], answer: 0, why: "\"Largely because of the extreme conditions down there\": no light, near-freezing water and crushing pressure." },
      { q: "What is special about ecosystems around hydrothermal vents?", options: ["They are very cold.", "They survive without energy from the sun.", "They are full of plants."], answer: 1, why: "\"Entire ecosystems survive without any energy from the sun, relying instead on bacteria that turn chemicals into food.\"" },
      { q: "What do many scientists argue at the end?", options: ["Mining should start as soon as possible.", "Deep-sea creatures are dangerous.", "We should understand deep-sea ecosystems before risking their destruction."], answer: 2, why: "\"We should understand these ecosystems better before we risk destroying them.\"" },
    ],
  },
];
