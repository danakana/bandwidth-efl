/** More graded reading for C1 and C2 (set 2). Original texts for Bandwidth EFL. For teacher review. */
import type { Story } from "./types";

export const C_MORE_STORIES: Story[] = [
  /* ---------------- C1 ---------------- */
  {
    id: "c1-garcia-marquez", band: "C1", universe: "words", kind: "article",
    title: "The journalist who invented Macondo", blurb: "How newspaper work shaped the most famous Colombian novelist.",
    text: `Gabriel García Márquez is remembered above all as the author of One Hundred Years of Solitude, a novel so closely associated with "magical realism" that the label has followed Latin American fiction ever since. It is easy to forget that for much of his early life he thought of himself primarily as a journalist, and that he continued to describe journalism as "the best job in the world" long after winning the Nobel Prize in 1982.

His newspaper years, first in Cartagena and Barranquilla and later in Bogotá and abroad, shaped his fiction in ways that are not always obvious. Reporting taught him to anchor the extraordinary in precise, concrete detail, a technique that lies at the heart of his novels. When a character ascends to heaven while folding sheets in the garden, the effect depends on the sheets, the wind and the ordinary reactions of the people watching. García Márquez often claimed that the secret of his style was simply telling incredible things with the calm, matter-of-fact tone his grandmother used.

Journalism also gave him a lifelong interest in the documentary novel. The Story of a Shipwrecked Sailor, first published as a series of newspaper articles in 1955, reconstructed the ordeal of a navy sailor who survived ten days adrift at sea. Its revelation that the disaster had been caused partly by contraband cargo embarrassed the government, and the episode contributed to García Márquez spending years abroad. Decades later, Chronicle of a Death Foretold and News of a Kidnapping would return to the same territory between reportage and fiction.

Critics have sometimes treated his journalism as an apprenticeship for the "real" work. A more persuasive reading might be that the two were never separate. The reporter's insistence on verifiable detail and the novelist's appetite for the improbable were, in his hands, two halves of a single way of looking at the world.`,
    gloss: [
      { word: "anchor", means: "(here) make something feel grounded and believable" },
      { word: "matter-of-fact", means: "calm and practical, without showing emotion" },
      { word: "ordeal", means: "a very difficult or painful experience" },
      { word: "adrift", means: "floating without control" },
      { word: "contraband", means: "goods brought into or out of a country illegally" },
      { word: "apprenticeship", means: "a period of learning a skill before becoming an expert" },
    ],
    questions: [
      { q: "What does the writer suggest about García Márquez's view of journalism?", options: ["He valued it highly throughout his life.", "He abandoned it after winning the Nobel Prize.", "He saw it mainly as a way to earn money."], answer: 0, why: "He \"continued to describe journalism as 'the best job in the world' long after winning the Nobel Prize\"." },
      { q: "According to the second paragraph, what made his magical scenes convincing?", options: ["Exaggerated, poetic descriptions of characters' emotions.", "Ordinary, specific details told in a calm tone.", "Stories he had heard from famous journalists."], answer: 1, why: "Reporting taught him \"to anchor the extraordinary in precise, concrete detail\" told in a \"matter-of-fact tone\"." },
      { q: "What is the writer's main argument in the final paragraph?", options: ["His journalism was simply practice for his novels.", "Critics have overestimated the quality of his journalism.", "His journalism and fiction were deeply connected."], answer: 2, why: "\"A more persuasive reading might be that the two were never separate.\"" },
    ],
  },
  {
    id: "c1-ai-art", band: "C1", universe: "arts", kind: "article",
    title: "Who is the artist?", blurb: "Generative AI forces old questions about creativity back into the open.",
    text: `When photography appeared in the nineteenth century, some critics predicted the death of painting. Why would anyone spend weeks on a portrait when a machine could produce a more accurate likeness in minutes? The poet Charles Baudelaire dismissed photography as "art's most mortal enemy". Painting, of course, survived. Freed from the obligation to record reality, it moved towards impressionism, abstraction and expression, arguably entering one of its most inventive periods.

Supporters of generative AI tools often invoke this history. They argue that image generators are simply the latest instrument, comparable to the camera or the synthesiser, and that the creativity lies in the person who conceives the idea, refines the prompt and selects among the results. Many artists have embraced the tools for sketching, experimentation and tasks they find tedious.

The analogy is imperfect, however. A camera does not learn from millions of existing photographs; many generative models were trained on vast collections of images and texts, much of it produced by working artists who were neither asked nor paid. For illustrators whose recognisable styles can now be imitated in seconds, the issue is not abstract. Several lawsuits are testing whether such training counts as fair use or as infringement, and the outcomes are likely to differ between countries.

Beneath the legal arguments lies an older philosophical question: is art defined by its result or by its making? If an image moves us, does it matter whether it emerged from years of practice or from a few seconds of computation? Some argue that our response to art has always depended partly on our sense of a human intention behind it, a mind trying to communicate with ours. Others reply that audiences rarely know how a work was made anyway. Whichever view prevails, the debate is forcing a clearer articulation of what we actually value when we value art.`,
    gloss: [
      { word: "likeness", means: "a picture that looks like a particular person" },
      { word: "invoke", means: "mention something to support an argument" },
      { word: "tedious", means: "boring and long" },
      { word: "infringement", means: "breaking a law or someone's legal rights" },
      { word: "articulation", means: "clear expression of an idea in words" },
    ],
    questions: [
      { q: "Why does the writer mention the history of photography?", options: ["To show that a feared technology led painting in new directions.", "To prove that photography is more creative than painting.", "To explain how AI image generators were invented by photographers and painters."], answer: 0, why: "Painting \"survived\" and, freed from recording reality, entered \"one of its most inventive periods\"." },
      { q: "Why does the writer call the camera analogy \"imperfect\"?", options: ["Cameras are more expensive and harder to learn than AI tools.", "AI models learned from other people's work, often without permission.", "Photographers never use AI tools."], answer: 1, why: "Models were trained on work by artists \"who were neither asked nor paid\"." },
      { q: "How does the writer present the philosophical question?", options: ["As already settled in favour of AI art.", "As irrelevant compared with the legal issues.", "As open, with arguments on both sides."], answer: 2, why: "\"Some argue… Others reply… Whichever view prevails…\"" },
    ],
  },
  {
    id: "c1-glacier", band: "C1", universe: "futures", kind: "article",
    title: "Farewell to the ice", blurb: "Colombia's glaciers are vanishing. What does a country lose with them?",
    text: `Over roughly the last century and a half, Colombia has gone from around fourteen glaciated mountains to just six that retain any permanent ice, and scientists at IDEAM, the national environmental institute, have warned that several may lose theirs within a few decades. On Santa Isabel, in the Los Nevados National Park, guides who once led groups across continuous ice now describe scattered patches, a sign of how quickly the glacier has shrunk.

Tropical glaciers are especially sensitive to warming. Unlike glaciers in polar regions, which can rely on long, cold winters to rebuild, those near the equator exist in a narrow band of conditions. A small rise in average temperature pushes the line at which snow turns to rain further up the mountain, so the glacier receives less new snow while losing more ice to melting.

Their disappearance is often framed in terms of water supply, but for Colombia the hydrological impact is, in most places, smaller than people assume: the páramos below the ice play a far greater role in regulating rivers. The deeper losses may be scientific and cultural. Glacial ice preserves a record of past climates, trapped in layers like the pages of a book, and once it melts that archive is gone. For Indigenous communities such as the Arhuaco, Kogui and Wiwa of the Sierra Nevada de Santa Marta, the snow-capped peaks are sacred, and their retreat is experienced as a spiritual and not merely an environmental crisis.

Some researchers now speak of "glacier funerals", ceremonies held in countries such as Iceland and Mexico to mark the official death of a glacier. The ritual might seem symbolic, even sentimental. Its purpose, however, is precisely to make an abstract process visible, to insist that something irreplaceable is ending, and that its loss deserves to be witnessed.`,
    gloss: [
      { word: "glaciated", means: "covered by glaciers (large masses of ice)" },
      { word: "scattered", means: "spread over an area in small, separate pieces" },
      { word: "hydrological", means: "connected with water and how it moves" },
      { word: "archive", means: "a collection of historical records" },
      { word: "sentimental", means: "showing emotion in a way that may seem excessive" },
    ],
    questions: [
      { q: "Why are tropical glaciers especially vulnerable?", options: ["They exist only within a narrow range of conditions.", "They receive more snow than polar glaciers.", "They are smaller and thinner than all the other glaciers in the world."], answer: 0, why: "Those near the equator \"exist in a narrow band of conditions\"." },
      { q: "What does the writer suggest about the impact on water supply?", options: ["It is the most serious consequence for Colombia.", "It is often overestimated compared with other losses.", "It will affect only Indigenous communities in the Sierra Nevada de Santa Marta."], answer: 1, why: "\"The hydrological impact is, in most places, smaller than people assume.\"" },
      { q: "What is the purpose of \"glacier funerals\", according to the writer?", options: ["To raise money for scientific research.", "To show that glaciers can be saved.", "To make people notice and recognise the loss."], answer: 2, why: "\"To make an abstract process visible… and that its loss deserves to be witnessed.\"" },
    ],
  },
  {
    id: "c1-stoics", band: "C1", universe: "past", kind: "article",
    title: "An emperor's notebook", blurb: "Why a 2,000-year-old private diary is popular on social media.",
    text: `Some time in the second century, while campaigning on the cold northern frontier of the Roman Empire, the emperor Marcus Aurelius kept a notebook. He never intended it for publication. Written in Greek and addressed to himself, it is a series of reminders, admonitions and fragments of philosophy, the private effort of a powerful man to remain decent. We know it as the Meditations, and nearly two thousand years later it regularly appears in bestseller lists and on social media.

Marcus was a follower of Stoicism, a school of philosophy founded in Athens around 300 BC. Its central idea is deceptively simple: we cannot control what happens to us, only how we respond. Wealth, reputation, health and even other people's opinions are "externals"; what matters is our own judgement and character. "You have power over your mind, not outside events," runs one popular paraphrase. "Realise this, and you will find strength."

The revival of Stoicism owes much to its practicality. Its exercises, such as imagining losses in advance to appreciate what we have, or asking whether a problem is within our control, overlap noticeably with modern cognitive behavioural therapy, whose founders acknowledged the influence. For anxious, overstimulated readers, a philosophy of calm self-command has obvious appeal.

Yet the popular version is sometimes a narrow one. Online, Stoicism is occasionally presented as a recipe for emotional toughness and personal success, a way to suppress feelings and maximise productivity. Marcus's notebook suggests something gentler. He reminds himself repeatedly that he is mortal, that his anger is usually misplaced, and that other people's faults are best met with patience. His Stoicism was less about winning than about duty and kindness towards others, a reminder, perhaps, that ancient wisdom can be misread when it is reduced to motivational quotes.`,
    gloss: [
      { word: "frontier", means: "the border of a country or empire" },
      { word: "admonitions", means: "warnings or firm advice" },
      { word: "deceptively", means: "in a way that seems different from how it really is" },
      { word: "overstimulated", means: "receiving too much information or excitement" },
      { word: "mortal", means: "certain to die" },
    ],
    questions: [
      { q: "What was unusual about the Meditations?", options: ["Marcus Aurelius wrote it only for himself.", "It was written in Latin for Roman soldiers.", "It was published while Marcus was alive."], answer: 0, why: "\"He never intended it for publication… addressed to himself.\"" },
      { q: "Why does the writer mention cognitive behavioural therapy?", options: ["To criticise modern psychology for copying ancient philosophers without credit.", "To show Stoicism's practical methods resemble modern therapy.", "To explain why Stoicism became unpopular."], answer: 1, why: "Its exercises \"overlap noticeably with modern cognitive behavioural therapy\"." },
      { q: "What is the writer's criticism of popular online Stoicism?", options: ["It is too difficult and old-fashioned for most modern readers to understand.", "It focuses too much on duty to others.", "It can turn a gentle philosophy into a tool for toughness and success."], answer: 2, why: "It is \"presented as a recipe for emotional toughness and personal success\", while Marcus \"suggests something gentler\"." },
    ],
  },

  /* ---------------- C2 ---------------- */
  {
    id: "c2-nostalgia", band: "C2", universe: "past", kind: "article",
    title: "A disease called nostalgia", blurb: "How homesickness went from a fatal illness to a marketing strategy.",
    text: `In 1688, a Swiss medical student named Johannes Hofer coined a new term for a condition he had observed among soldiers and students living far from home: nostalgia, from the Greek nostos, homecoming, and algos, pain. Its symptoms, he reported, included persistent melancholy, loss of appetite, fever and, in severe cases, death. For the next two centuries, nostalgia was treated as a genuine and potentially fatal disease. Swiss mercenaries were reportedly forbidden from singing certain Alpine songs for fear that the melodies would trigger it, and doctors proposed remedies ranging from leeches to the threat of being buried alive.

By the late nineteenth century, the medical consensus had shifted. Nostalgia was gradually reclassified as a psychological state rather than a physical illness, and later as a form of depression associated with immigrants and displaced people. Throughout the twentieth century it carried a faintly pathological air: to be nostalgic was to be stuck, unable to accept the present.

The rehabilitation came, surprisingly, from experimental psychology. Since the early 2000s, researchers have found that nostalgia, far from being merely a symptom of unhappiness, can function as a resource. It tends to arise when people feel lonely, anxious or lacking in meaning, and it often counteracts those very states, increasing feelings of social connection, continuity of identity and even optimism about the future. In this account, nostalgia is less a refusal of the present than a means of drawing on the past to cope with it.

Its very effectiveness, however, has made it commercially irresistible. Reboots, remakes and products designed to evoke a childhood that consumers barely remember now fill streaming catalogues and supermarket shelves. Critics argue that an economy saturated with manufactured nostalgia offers comfort at the expense of imagination, endlessly recycling familiar forms instead of risking new ones. It is a curious trajectory for an emotion once thought capable of killing: from pathology to therapy to product, it has remained, throughout, a reliable index of what each age most feared about change.`,
    gloss: [
      { word: "coined", means: "invented a new word or phrase" },
      { word: "mercenaries", means: "soldiers paid to fight for a foreign country" },
      { word: "pathological", means: "connected with disease; extreme and unhealthy" },
      { word: "rehabilitation", means: "the process of restoring someone's or something's good reputation" },
      { word: "saturated", means: "so full that no more can be added" },
      { word: "trajectory", means: "the path or development of something over time" },
    ],
    questions: [
      { q: "How was nostalgia viewed in the seventeenth and eighteenth centuries?", options: ["As a serious, possibly deadly, physical illness.", "As a pleasant feeling associated with music.", "As a sign of weakness in soldiers."], answer: 0, why: "It \"was treated as a genuine and potentially fatal disease.\"" },
      { q: "According to recent research, what role can nostalgia play?", options: ["It mainly makes lonely people feel worse.", "It can help people cope with negative feelings.", "It prevents people from accepting change."], answer: 1, why: "It \"often counteracts those very states, increasing feelings of social connection… and even optimism\"." },
      { q: "What does the writer imply in the final sentence?", options: ["Nostalgia has become less powerful over time.", "Commercial nostalgia is more harmful than the original disease.", "Attitudes to nostalgia reveal each era's anxieties about change."], answer: 2, why: "It has remained \"a reliable index of what each age most feared about change.\"" },
    ],
  },
  {
    id: "c2-translation-ethics", band: "C2", universe: "words", kind: "article",
    title: "The translator's invisible hand", blurb: "Every translation is an interpretation. Should readers be told?",
    text: `There is an old Italian pun, traduttore, traditore, "translator, traitor", which captures a suspicion as old as translation itself: that whoever carries a text from one language into another inevitably distorts it. The suspicion is, in a sense, perfectly justified. No two languages divide up the world in quite the same way. Spanish distinguishes between ser and estar; English must choose between "you" singular and "you" plural only through context; Japanese encodes degrees of politeness that English can render only through laborious paraphrase. Every translation therefore involves a cascade of decisions, each of which forecloses alternatives the reader will never see.

For much of the twentieth century, the dominant ideal in English-language publishing was what the theorist Lawrence Venuti called "fluency": a translation should read as though it had been originally written in English, its foreignness smoothed away. The translator's highest achievement, on this view, was invisibility. Venuti argued that this ideal, however well-intentioned, had troubling consequences. It domesticated other cultures, making them palatable by making them familiar, and it rendered the translator's labour, and authority, invisible to readers who assumed they were simply reading the author.

The debate came into sharp focus with the 2017 publication of Emily Wilson's translation of the Odyssey, the first into English by a woman. Wilson drew attention to choices that previous translators had made without comment. Where earlier versions rendered a particular Greek word as "maid" or "girl", she pointed out, it more literally denoted a slave, and translating it otherwise had quietly softened the brutality of the scene in which these women are killed. Her own version was not neutral, as she readily acknowledged; no translation can be. Her point was that the decisions should be visible and owned.

None of this implies that fluency is a vice or that translations should be deliberately awkward. Readers are entitled to prose that lives on the page. But it does suggest that the most honest translations may be those that acknowledge their own status as interpretations, inviting readers to remember that behind every foreign book they love stands another writer, making choices on their behalf.`,
    gloss: [
      { word: "pun", means: "a joke using a word with two meanings or two similar-sounding words" },
      { word: "laborious", means: "needing a lot of effort" },
      { word: "forecloses", means: "prevents something from being possible" },
      { word: "domesticated", means: "(here) made foreign things seem local and familiar" },
      { word: "palatable", means: "acceptable or pleasant" },
    ],
    questions: [
      { q: "Why does the writer say the suspicion behind \"translator, traitor\" is justified?", options: ["Languages organise meaning differently, so translation always involves choices.", "Most translators deliberately change the original meaning.", "Italian puns and jokes are harder to translate than almost any other kind of language."], answer: 0, why: "\"No two languages divide up the world in quite the same way… Every translation therefore involves a cascade of decisions.\"" },
      { q: "What was Venuti's criticism of \"fluency\"?", options: ["It made translations too difficult and strange for ordinary readers to enjoy.", "It hid both other cultures' differences and the translator's role.", "It encouraged translators to add their own opinions."], answer: 1, why: "It \"domesticated other cultures\" and \"rendered the translator's labour… invisible\"." },
      { q: "What was Emily Wilson's main point, as presented here?", options: ["Her translation was the first truly neutral one.", "Earlier translators had made deliberate mistakes to hide the original story.", "Translators' choices should be transparent and acknowledged."], answer: 2, why: "\"Her point was that the decisions should be visible and owned.\"" },
    ],
  },
  {
    id: "c2-quiet-quitting", band: "C2", universe: "futures", kind: "article",
    title: "The myth of the dream job", blurb: "Why a generation is rethinking the idea that work should be a passion.",
    text: `"Do what you love and you'll never work a day in your life." The maxim, variously and dubiously attributed to Confucius and Mark Twain, became something close to an article of faith for a generation raised on commencement speeches and start-up mythology. Work was no longer to be merely a means of earning a living; it was to be a vocation, an expression of identity, a source of meaning. Employers were quick to adopt the language. Job advertisements began seeking "passionate" candidates, and offices were redesigned to resemble homes, complete with free meals, games rooms and the implicit expectation that one might never wish to leave.

The backlash, when it came, took a characteristically understated form. Around 2022, the term "quiet quitting" spread rapidly on social media. Despite its name, it did not usually describe resignation, but rather a refusal to go beyond the formal requirements of a job: no unpaid overtime, no emails at midnight, no pretending that one's employer was one's family. Commentators were divided. Some saw it as a symptom of declining work ethic; others as a belated and entirely reasonable correction to a culture of chronic overwork.

The writer Miya Tokumitsu had anticipated much of this in a widely read critique of the "do what you love" ethos. Her argument was that the slogan, far from liberating workers, served to disguise exploitation. If work is a labour of love, then complaints about pay or hours appear ungrateful, and those whose jobs are not lovable, such as cleaners, care workers and delivery drivers, are tacitly relegated to a lower moral category. The ideology, she suggested, flattered a privileged minority while devaluing the work on which everyone depends.

None of this need mean abandoning the hope of meaningful work. But it may mean decoupling meaning from employment: recognising that a decent job is a fair exchange of time and skill for money, and that passion, purpose and identity can legitimately be found elsewhere, in relationships, communities, art or rest. For teenagers now facing questions about their own futures, that may be a more humane, if less glamorous, inheritance than the dream job.`,
    gloss: [
      { word: "maxim", means: "a short statement of a general truth or rule" },
      { word: "commencement speeches", means: "speeches at university graduation ceremonies" },
      { word: "backlash", means: "a strong negative reaction against something" },
      { word: "belated", means: "happening later than it should have" },
      { word: "tacitly relegated", means: "quietly, without saying it, moved to a lower position" },
      { word: "decoupling", means: "separating two things that were connected" },
    ],
    questions: [
      { q: "How did employers respond to the \"do what you love\" ideal?", options: ["They used its language and blurred work with personal life.", "They rejected it as unrealistic and kept work and home life completely separate.", "They began paying passionate workers more."], answer: 0, why: "Adverts sought \"passionate\" candidates, and offices were \"redesigned to resemble homes\"." },
      { q: "What did \"quiet quitting\" usually describe?", options: ["Leaving a job without telling the employer.", "Doing only what the job formally requires.", "Working extra hours without complaining."], answer: 1, why: "\"A refusal to go beyond the formal requirements of a job.\"" },
      { q: "According to Tokumitsu, what is one effect of the slogan?", options: ["It encourages workers to demand better pay.", "It makes all jobs equally respected, including cleaning and care work.", "It makes complaints seem ungrateful and devalues unloved jobs."], answer: 2, why: "\"Complaints about pay or hours appear ungrateful\" and some workers are \"relegated to a lower moral category\"." },
    ],
  },
  {
    id: "c2-chess-machine", band: "C2", universe: "screens", kind: "story",
    title: "The last move", blurb: "A chess teacher, a gifted student and a machine that sees everything.",
    text: `Don Aurelio had taught chess in the same cramped room above a bakery in Tunja for thirty-one years, and for most of them he had been, by a comfortable margin, the strongest player any of his students had ever met. The smell of bread rose through the floorboards; the clocks ticked on scarred wooden tables; and he would lean over a board, tap a knight with one yellowed fingernail and ask, "Why?" It was the only question he ever really taught.

Valentina arrived at twelve, already dangerous, already impatient. By fourteen she was beating him in one game out of three. By fifteen she had stopped coming to the club in the afternoons and was training instead with an engine on her laptop, a program that could calculate millions of positions per second and evaluate them with a precision no human had ever approached. When he asked her why a move was good, she would turn the screen towards him and point at the number. "Plus one point two," she would say, with the faint pity of the young for the obsolete.

He did not argue. He was old enough to know that the machine was right, and wise enough to suspect that being right was not the whole of it. Instead, he waited.

It happened at the national junior championship, in the final round. Valentina reached a position she had studied with the engine, a line it judged to be winning, and played the recommended move instantly. Her opponent, a boy from Pasto who had never touched an engine in his life, thought for twenty minutes and found a reply that was objectively inferior and completely unexpected. The engine would have refuted it in a second. Valentina, without the engine, had no idea why it was bad. She had memorised the verdict and never learnt the reasons.

She lost. The following Tuesday, Don Aurelio heard footsteps on the stairs and the scrape of a chair at his table. He did not look up. He set up the position from the final round, tapped the boy's knight with his fingernail and waited. After a long moment, Valentina answered the only question he had ever really taught.`,
    gloss: [
      { word: "cramped", means: "small and uncomfortable, with too little space" },
      { word: "engine", means: "(in chess) a computer program that analyses positions" },
      { word: "obsolete", means: "no longer useful because something newer exists" },
      { word: "refuted", means: "proved to be wrong" },
      { word: "verdict", means: "a judgement or decision" },
    ],
    questions: [
      { q: "What was Don Aurelio's main teaching method?", options: ["Asking students to explain the reasons for moves.", "Making students memorise opening lines.", "Using computers to analyse positions."], answer: 0, why: "He would tap a piece and ask \"Why?\". \"It was the only question he ever really taught.\"" },
      { q: "Why did Valentina lose in the final round?", options: ["Her opponent had secretly trained with a stronger engine than hers.", "She knew the machine's judgement but not the reasoning behind it.", "She took too long to choose her moves."], answer: 1, why: "\"She had memorised the verdict and never learnt the reasons.\"" },
      { q: "What does the ending suggest?", options: ["Valentina decided to give up chess.", "Don Aurelio refused to teach Valentina again because she had left the club.", "Valentina returned to learn understanding, not just answers."], answer: 2, why: "She came back and \"answered the only question he had ever really taught\": why." },
    ],
  },
];
