/* B1+ Words. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/b1pw-${n}-${k}.mp3`;

export const B1P_WORDS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "3f6pec3wODJsjTqtcNI2", script: "Today's top headline: a long drought in the north has destroyed half of the coffee harvest. Scientists say rising emissions are making droughts more common. And in tech news, a new algorithm can predict floods using satellite data. But be careful: always check the source of a story before you share it." },
  { file: X("01", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "Always check the source before you share a story." },
  { file: X("02", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "I loved this film. The plot twist in the middle surprised everyone. The main character has a great arc: she starts shy and ends up brave. The soundtrack is beautiful, and the photography looks like a painting, with soft colours and bold brushstrokes of light." },
  { file: X("02", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "The plot twist surprised everyone in the cinema." },
  { file: X("03", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "Our art club is very creative, and creativity is what we celebrate. Kindness is important too, so the club is a safe place. Last year we painted a huge mural. It was a dangerous job on a tall ladder, but the result was impressive, and the whole neighbourhood was proud of it." },
  { file: X("03", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "Creativity and kindness are important in our club." },
  { file: X("04", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Our class wanted to raise awareness about plastic waste. First, we did some research. Then we made a decision: no more plastic bottles at school. I strongly believe that small changes make a big difference, and many students now take part in the project." },
  { file: X("04", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "We want to raise awareness about plastic waste." },
  { file: X("05", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "Last weekend I came across an old box in my grandma's house. Inside, there were letters from 1970. It took me an hour to figure out who wrote them. In the end, it was my grandpa! Grandma pointed out that he used to write to her every week. We ended up reading them all night." },
  { file: X("05", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "We ended up reading the letters all night." },
  { file: X("06", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Learning to skate cost me an arm and a leg, because I broke two boards in a week. When I fell for the tenth time, that was the last straw. But my friend said: don't give up, you'll get the hang of it. And she was right. In the long run, practice always pays off." },
  { file: X("06", "dict"), voice: "8DvnqWWA3WWXixOm7zQI", script: "Don't worry, you'll get the hang of it soon." },
  { file: X("07", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "As far as I'm concerned, school should start later. It goes without saying that teenagers need more sleep. To be honest, I find it hard to concentrate at seven in the morning. On the other hand, I can see why parents prefer early classes. All in all, I think a later start would help everyone." },
  { file: X("07", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "As far as I'm concerned, school should start later." },
];

const topics: NodePractice = {
  nodeId: "b1p.news-and-media-environment-and-climate-t",
  explain: "These words help you read the news and talk about big topics. News and media: headline (the title of a news story), source (where the information comes from), bias (when a story favours one side), fake news, article, journalist. Environment and climate: emissions (gases from cars and factories), drought (a long time without rain), flood, renewable energy, recycle, pollution. Technology and AI: algorithm (a set of rules a computer follows), data, app, privacy, artificial intelligence (AI), update. Learn them in groups so you can use them together.",
  pattern: ["News: headline · source · bias · article · journalist · fake news", "Climate: emissions · drought · flood · renewable energy · pollution", "Tech: algorithm · data · privacy · AI · update · download", "Check the source · reduce emissions · protect your data"],
  steps: [
    [
      heard(X("01", "notice"), "What has destroyed half of the coffee harvest?", ["A long drought", "A flood", "A computer error"], 0, "'a long drought in the north'."),
      heard(X("01", "notice"), "What do scientists say makes droughts more common?", ["Rising emissions", "More rain", "Old algorithms"], 0, "'rising emissions are making droughts more common'."),
      heard(X("01", "notice"), "What can the new algorithm do?", ["Predict floods using satellite data", "Make coffee for the scientists", "Write headlines for the news"], 0, "'predict floods using satellite data'."),
      ch("A 'headline' is…", ["the title of a news story", "a pain in your head", "a long article"], 0, "Definition."),
      ch("A 'drought' is…", ["a long time without rain", "a very big storm with rain", "a type of renewable energy"], 0, "Definition."),
    ],
    [
      ch("What is 'bias' in a news story?", ["It favours one side unfairly.", "It's very short and simple.", "It has many pictures in it."], 0, "Definition."),
      ch("Which is renewable energy?", ["Solar power", "Coal", "Oil"], 0, "From the sun, won't run out."),
      ctx("Your friend shares a shocking story from a website you've never heard of.", "What should you check first?", ["The source", "The headline font", "The number of emojis"], 0, "Check the source."),
      ch("An 'algorithm' is…", ["a set of rules a computer follows", "a type of electronic music", "a weather report on TV"], 0, "Definition."),
      ch("Which word is about personal information online?", ["privacy", "drought", "headline"], 0, "Protect your privacy."),
    ],
    [
      gap("Cars and factories produce", "that warm the planet.", ["emissions"], "emissions."),
      gap("Social media apps collect a lot of", "about us.", ["data", "information"], "data (uncountable)."),
      tr("Rewrite using the word given.", "The story only shows one side and isn't fair.", ["The story is biased", "The story has a bias", "The story shows bias"], "bias / biased.", "bias"),
      dict(X("01", "dict"), ["Always check the source before you share a story"]),
      say("Always check the source before you share a story.", "Stress SOURCE and SHARE."),
    ],
    [
      fix(["Too much rain caused", "a drought", "in the town."], 1, ["a flood"], "Too much rain = a flood; no rain = a drought."),
      fix(["The", "head line", "of the article was very dramatic."], 1, ["headline"], "One word: headline."),
      fix(["We should use more", "renewable energy like coal", "to protect the planet."], 1, ["renewable energy like solar power", "renewable energy like wind power", "renewable energy like solar", "renewable energy like wind"], "Coal is not renewable."),
      ch("Which is wrong?", ["The app collects many datas.", "The app collects a lot of data.", "The app collects personal data."], 0, "data is uncountable here."),
      ch("Which sentence uses 'source' correctly?", ["The journalist didn't name her source.", "The source of the weather was cold.", "I sourced a sandwich."], 0, "Where information comes from."),
    ],
    [
      ch("Best title for a school presentation on climate?", ["How to reduce emissions at our school", "Drought algorithm headline at our school", "Data of the floods and privacy at school"], 0, "Clear and correct."),
      ch("Best advice about fake news?", ["Check the source and look for the same story on other websites.", "Share it quickly before it disappears from the internet.", "Only read the headline; the rest isn't important."], 0, "Good media literacy."),
      ctx("A teen asks: 'Is it safe to give an app my location?'", "Best answer?", ["Think about your privacy and check what data the app collects.", "Yes, always, all apps are safe to download, so don't worry.", "Data is a drought. Download it now."], 0, "Uses the topic words well."),
      ch("Which headline is most neutral (no bias)?", ["City council approves new bike lanes", "Crazy council destroys roads with silly bike lanes", "Heroes of the council save the city"], 0, "Neutral language."),
      say("Renewable energy can help reduce emissions.", "Stress reNEWable and eMISsions."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short news report (50 words or more) about a climate or technology story. Use at least five topic words (headline, source, bias, emissions, drought, flood, renewable, algorithm, data, privacy, AI)." },
      { universe: "science", text: "Write a short article (50 words or more) about how AI or technology can help the environment. Use at least five topic words (emissions, drought, flood, renewable, algorithm, data, AI, source)." },
      { universe: "screens", text: "Write a post (50 words or more) giving tips to spot fake news on social media. Use at least five topic words (headline, source, bias, fake news, algorithm, data, privacy)." },
    ],
    minWords: 50,
    checks: [
      { label: "Five topic words", pattern: "\\b(headlines?|sources?|bias|biased|articles?|journalists?|fake news|emissions?|droughts?|floods?|renewable|pollution|recycl\\w*|algorithms?|data|privacy|ai|artificial intelligence|updates?|climate)\\b", min: 5 },
    ],
    rubric: ["Each topic word is used with the right meaning.", "My report is clear and organised.", "I mention where the information comes from."],
    model: "Headline: New app helps farmers in a drought. A Colombian team has created an app that uses an algorithm to predict when rain will come. The app collects data from satellites and local weather stations. Farmers say it helps them save water. The team also wants to reduce emissions by using renewable energy. Source: Radio Nacional, June 2026.",
  },
};

const art: NodePractice = {
  nodeId: "b1p.describing-art-film-and-books",
  explain: "To talk about films, books and art, you need special words. Film and books: plot (the story), plot twist (a big surprise in the story), main character, character arc (how a character changes), setting (where and when the story happens), soundtrack (the music), ending, scene, chapter. Art: brushstroke (a mark made by a brush), colours (bright, soft, bold), portrait (a picture of a person), landscape (a picture of nature), sculpture, exhibition. Use adjectives to give opinions: gripping (very exciting), moving (makes you feel emotion), predictable (you know what will happen), dull (boring).",
  pattern: ["Story: plot · plot twist · main character · character arc · setting · ending", "Film: scene · soundtrack · director · cast", "Art: brushstroke · portrait · landscape · sculpture · exhibition", "Opinions: gripping · moving · predictable · dull · stunning"],
  steps: [
    [
      heard(X("02", "notice"), "What surprised everyone?", ["The plot twist", "The soundtrack", "The ending"], 0, "'The plot twist in the middle surprised everyone.'"),
      heard(X("02", "notice"), "How does the main character change?", ["She starts shy and ends up brave.", "She starts brave and ends up shy.", "She doesn't change."], 0, "Her character arc."),
      heard(X("02", "notice"), "What does the photography look like?", ["A painting", "A cartoon", "A video game"], 0, "'the photography looks like a painting'."),
      ch("A 'plot twist' is…", ["a big surprise in the story", "the music at the end of a film", "a type of dance in a film"], 0, "Definition."),
      ch("A 'soundtrack' is…", ["the music in a film", "the sound of footsteps", "a road"], 0, "Definition."),
    ],
    [
      ch("A 'character arc' describes…", ["how a character changes", "what a character wears", "where the character lives"], 0, "Definition."),
      ch("'The setting' of a story is…", ["where and when it happens", "the music", "the price of the book"], 0, "Definition."),
      ctx("Review: 'The ending was so predictable.'", "The reviewer thinks…", ["You could guess what would happen.", "The ending was really surprising.", "The ending was beautiful and sad."], 0, "predictable = no surprise."),
      ch("A painting of mountains and rivers is a…", ["landscape", "portrait", "sculpture"], 0, "Definition."),
      ch("'A gripping book' is…", ["very exciting", "very boring", "very heavy"], 0, "gripping = holds your attention."),
    ],
    [
      gap("The main", "is a fifteen-year-old detective.", ["character"], "main character."),
      gap("I couldn't stop reading. The book was really", ".", ["gripping", "exciting"], "gripping."),
      tr("Rewrite using 'moving'.", "The film made me feel very emotional.", ["The film was very moving", "The film was really moving", "It was a very moving film"], "moving = makes you feel emotion."),
      dict(X("02", "dict"), ["The plot twist surprised everyone in the cinema"]),
      say("The soundtrack was beautiful and the ending was very moving.", "Stress SOUNDtrack and MOVing."),
    ],
    [
      fix(["The", "plot twist", "was predictable; everyone guessed it from the start."], 1, ["ending"], "A plot twist is a surprise, so it can't be guessed; the ending was predictable."),
      fix(["A painting of a person is called", "a landscape,", "and it's my favourite type of art."], 1, ["a portrait,"], "A picture of a person = portrait."),
      fix(["The film was so", "gripping", "that I fell asleep after ten minutes."], 1, ["dull", "boring"], "Falling asleep = dull / boring."),
      ch("Which is wrong?", ["The setting of the film is its music.", "The setting of the film is Bogotá in 1950.", "The soundtrack of the film is its music."], 0, "Setting = place and time."),
      ch("Which review sentence makes sense?", ["Her character arc is powerful: she learns to trust people.", "Her character arc is red and blue in colour.", "Her character arc is the cinema where she works."], 0, "Arc = change."),
    ],
    [
      ch("Best opening for a film review?", ["This gripping thriller has one of the best plot twists of the year.", "Film good. Plot twist. Best of the year, I think so.", "The film is a film with a plot and some characters."], 0, "Specific vocabulary."),
      ch("Best way to describe a painting in an art class?", ["The artist uses bold brushstrokes and bright colours to show energy.", "It's nice. I like it. The colours are nice too, and big.", "The painting is a plot twist with brushstrokes."], 0, "Art vocabulary."),
      ctx("You want to recommend a sad but beautiful book to a friend.", "Best sentence?", ["It's really moving, but the ending is hopeful.", "It's really dull, predictable and boring.", "It's a landscape with mountains in it."], 0, "Accurate opinion words."),
      ch("Which sounds like a professional review?", ["The setting, a rainy Medellín, matches the dark mood of the story.", "The film happens somewhere, I think, maybe a big city, in the rain.", "Good place, good story, good film. Rainy."], 0, "Connects setting and mood."),
      say("It's a gripping story with a brilliant plot twist.", "Stress GRIPping and TWIST."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short review (50 words or more) of a film, series or book. Use at least five words from this skill (plot, plot twist, main character, character arc, setting, soundtrack, ending, gripping, moving, predictable, dull)." },
      { universe: "arts", text: "Describe a painting, photo or sculpture you like (50 words or more). Use at least five words from this skill (brushstroke, colours, portrait, landscape, exhibition, stunning, moving)." },
      { universe: "words", text: "Write a short review of a novel or comic (50 words or more). Use at least five words from this skill (plot, plot twist, main character, character arc, setting, chapter, ending, gripping, predictable)." },
    ],
    minWords: 50,
    checks: [
      { label: "Five words for films, books or art", pattern: "\\b(plot|plot twists?|twists?|main characters?|characters?|character arc|arc|setting|soundtrack|ending|scenes?|chapters?|director|cast|brushstrokes?|portraits?|landscapes?|sculptures?|exhibitions?|gripping|moving|predictable|dull|stunning)\\b", min: 5 },
    ],
    rubric: ["I used specific words, not only 'good' and 'bad'.", "I gave my opinion with a reason.", "A reader can decide if they want to see or read it."],
    model: "I recently watched a Mexican series called Blue Coast. The setting is a small fishing town, and the soundtrack uses traditional music. The main character, Lucía, has a great character arc: she starts as a shy student and becomes the leader of her community. There is a big plot twist in episode five. The ending is very moving. I really recommend it!",
  },
};

const suffixes: NodePractice = {
  nodeId: "b1p.noun-and-adjective-suffixes",
  explain: "Suffixes are endings that change a word's type. To make nouns from adjectives: -ity (creative → creativity, possible → possibility), -ness (kind → kindness, happy → happiness). To make adjectives from nouns or verbs: -ous (danger → dangerous, fame → famous), -al (nature → natural, culture → cultural), -ive (create → creative, attract → attractive), -ful (help → helpful), -less (use → useless). Knowing suffixes helps you guess new words and build your vocabulary quickly. Watch the spelling: happy → happiness (y → i), fame → famous (drop the e).",
  pattern: ["Adjective → noun: -ity (creative → creativity) · -ness (kind → kindness)", "Noun/verb → adjective: -ous (danger → dangerous) · -al (nature → natural) · -ive (create → creative)", "-ful (= with): helpful · -less (= without): useless", "Spelling: happy → happiness · fame → famous"],
  steps: [
    [
      heard(X("03", "notice"), "What does the art club celebrate?", ["Creativity", "Danger", "Fame"], 0, "'creativity is what we celebrate'."),
      heard(X("03", "notice"), "Why was painting the mural dangerous?", ["They worked on a tall ladder.", "The paint they used was toxic.", "They worked late at night."], 0, "'a dangerous job on a tall ladder'."),
      heard(X("03", "notice"), "How did the neighbourhood feel?", ["Proud", "Angry", "Bored"], 0, "'the whole neighbourhood was proud of it'."),
      ch("'Creativity' is a…", ["noun", "adjective", "verb"], 0, "-ity makes a noun."),
      ch("'Dangerous' comes from the noun…", ["danger", "dang", "dangerously"], 0, "danger + -ous."),
    ],
    [
      ch("Which suffix makes a noun from 'kind'?", ["-ness", "-ous", "-al"], 0, "kindness."),
      ch("Which suffix means 'without'?", ["-less", "-ful", "-ity"], 0, "useless = without use."),
      ctx("A teacher writes: 'Your answer shows real originality.'", "'Originality' is…", ["a noun from 'original'", "a verb from 'original'", "an adverb from 'original'"], 0, "original + -ity."),
      ch("What's the adjective from 'nature'?", ["natural", "natureful", "naturous"], 0, "nature + -al."),
      ch("Why is it 'happiness', not 'happyness'?", ["The y changes to i before -ness.", "It's an old word from French.", "Both spellings are correct."], 0, "Spelling rule."),
    ],
    [
      gap("She's very kind. Her", "is famous in our school.", ["kindness"], "kind + -ness."),
      gap("The museum has a big", "event every month: dance, music and food.", ["cultural"], "culture + -al."),
      tr("Rewrite using an adjective with a suffix.", "This app has no use.", ["This app is useless"], "use + -less."),
      dict(X("03", "dict"), ["Creativity and kindness are important in our club"]),
      say("Creativity and kindness are important in our club.", "Stress creaTIVity and KINDness."),
    ],
    [
      fix(["Climbing without a rope is very", "danger."], 1, ["dangerous."], "Adjective: dangerous."),
      fix(["Shakira is a very", "fameous", "singer."], 1, ["famous"], "Spelling: fame → famous (drop the e)."),
      fix(["Thank you for being so", "helpless!", "The project is finished thanks to you."], 1, ["helpful!"], "helpful = with help; helpless = can't help yourself."),
      ch("Which is wrong?", ["Her happyness is important to me.", "Her happiness is important to me.", "She is very happy."], 0, "happiness."),
      ch("Which is wrong?", ["He's a very create person.", "He's a very creative person.", "His creativity is amazing."], 0, "Adjective: creative."),
    ],
    [
      ch("Best sentence for a job application?", ["I'm creative, reliable and helpful.", "I'm create, rely and help.", "I'm creativity and helpness."], 0, "Correct adjectives."),
      ch("Best sentence for a speech about a teacher?", ["Her kindness and patience changed my life.", "Her kind and patient changed my life.", "Her kindful changed my life."], 0, "Nouns after 'her'."),
      ctx("You see the word 'responsibility' for the first time.", "What can you guess?", ["It's a noun from 'responsible'.", "It's a verb.", "It means 'not responsible'."], 0, "-ity = noun."),
      ch("Which sounds best in a review of a park?", ["It's a peaceful, natural place.", "It's a peace, nature place.", "It's a peaceness, naturity place."], 0, "Correct adjectives."),
      say("The result was impressive and the whole team felt proud.", "Stress imPRESSive and PROUD."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe a person you admire (50 words or more). Use at least five words with suffixes (-ity, -ness, -ous, -al, -ive, -ful, -less)." },
      { universe: "arts", text: "Describe an artist or a piece of art (50 words or more). Use at least five words with suffixes (creativity, originality, beautiful, colourful, impressive, famous, emotional)." },
      { universe: "science", text: "Describe a scientist or an invention (50 words or more). Use at least five words with suffixes (curiosity, creativity, useful, dangerous, successful, impressive, possibility)." },
    ],
    minWords: 50,
    checks: [
      { label: "Five words with suffixes (-ity, -ness, -ous, -al, -ive, -ful, -less)", pattern: "\\b\\w{3,}(ity|ness|ous|al|ive|ful|less)\\b", min: 5 },
    ],
    rubric: ["Each word is the right type (noun or adjective) for the sentence.", "My spelling is correct (happiness, famous).", "My description is clear and personal."],
    model: "The person I admire most is my aunt Rosa. She's a nurse, and her kindness is famous in our family. She's very creative too: she paints colourful pictures in her free time. Her job is sometimes dangerous, but she is always calm and helpful. I think her honesty and her happiness make everyone around her feel better.",
  },
};

const collocations: NodePractice = {
  nodeId: "b1p.issue-and-opinion-collocations",
  explain: "Collocations are words that naturally go together. When we talk about issues and opinions, some verbs are fixed: raise awareness (make people know about a problem), make a decision, do research, take part in, take action, have an impact on, solve a problem, face a challenge. For opinions, use adverb + verb: strongly believe, firmly believe, totally agree, completely disagree. Spanish speakers often say 'make research' or 'take a decision'; in English we say do research and make a decision.",
  pattern: ["raise awareness · take action · take part in · make a difference", "make a decision · do research · solve a problem · face a challenge", "have an impact on · play a role in", "strongly / firmly believe · totally agree · completely disagree"],
  steps: [
    [
      heard(X("04", "notice"), "What did the class want to raise awareness about?", ["Plastic waste", "Homework", "Sports"], 0, "'raise awareness about plastic waste'."),
      heard(X("04", "notice"), "What did they do first?", ["Some research", "A party", "A test"], 0, "'First, we did some research.'"),
      heard(X("04", "notice"), "What decision did they make?", ["No more plastic bottles at school", "A new school uniform", "Longer breaks between lessons"], 0, "'no more plastic bottles at school'."),
      ch("Which is correct?", ["do research", "make research", "take research"], 0, "do research."),
      ch("Which is correct?", ["make a decision", "do a decision", "put a decision"], 0, "make a decision."),
    ],
    [
      ch("'Raise awareness' means…", ["help people know about a problem", "wake people up early in the morning", "raise your hand to speak"], 0, "Definition."),
      ch("'Take part in' means…", ["participate in", "break into pieces", "take a piece"], 0, "Definition."),
      ctx("'I strongly believe that school uniforms are a good idea.'", "The speaker's opinion is…", ["very firm", "weak", "neutral"], 0, "strongly believe = very sure."),
      ch("Which phrase means 'start doing something to solve a problem'?", ["take action", "make action", "do action"], 0, "take action."),
      ch("'Social media has a big impact on teenagers' means…", ["Social media affects teenagers a lot.", "Social media hits teenagers.", "Teenagers don't use social media."], 0, "have an impact on = affect."),
    ],
    [
      gap("We need to", "action now to protect the forest.", ["take"], "take action."),
      gap("I totally", "with you. It's a great idea.", ["agree"], "totally agree."),
      tr("Rewrite using 'make a difference'.", "Small changes can change things a lot.", ["Small changes can make a big difference", "Small changes can make a difference"], "make a (big) difference."),
      dict(X("04", "dict"), ["We want to raise awareness about plastic waste"]),
      say("I strongly believe that small changes make a big difference.", "Stress STRONGly, SMALL and BIG."),
    ],
    [
      fix(["For my project, I", "made research", "about bees."], 1, ["did research", "did some research"], "do research."),
      fix(["We have to", "take a decision", "before Friday, so let's vote."], 1, ["make a decision"], "make a decision (more common)."),
      fix(["Many students", "took part of", "the clean-up day."], 1, ["took part in"], "take part in."),
      ch("Which is wrong?", ["I strongly agree you.", "I totally agree with you.", "I strongly believe you're right."], 0, "agree with someone."),
      ch("Which is wrong?", ["We need to make awareness.", "We need to raise awareness.", "We need to take action."], 0, "raise awareness."),
    ],
    [
      ch("Best opening for a speech about climate?", ["Today I want to raise awareness about a problem we all face.", "Today I make awareness about a problem we all face.", "Problem. Climate. Awareness. We all face it today."], 0, "Natural collocation."),
      ch("Best sentence for a project report?", ["First, we did research online; then we made a decision as a group.", "First, we made research online; then we did a decision as a group.", "Research done online, decision taken as a group, yes."], 0, "Correct collocations."),
      ctx("In a debate, you completely disagree but want to be polite.", "Best sentence?", ["I see your point, but I completely disagree.", "You're wrong totally, I don't agree.", "I strongly disagree you about this."], 0, "Polite and correct."),
      ch("Which slogan sounds best for a school campaign?", ["Take part and make a difference!", "Make part and do a difference!", "Take a difference!"], 0, "Correct collocations."),
      say("Everyone can take part and make a difference.", "Stress TAKE PART and DIFference."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short post (50 words or more) for a school campaign about an issue you care about. Use at least five collocations (raise awareness, take action, take part in, make a difference, make a decision, do research, strongly believe, have an impact on)." },
      { universe: "futures", text: "Write about a problem in your city and how young people can help (50 words or more). Use at least five collocations (raise awareness, take action, take part in, make a difference, have an impact on, solve a problem, strongly believe)." },
      { universe: "screens", text: "Write about the impact of social media on teenagers (50 words or more). Use at least five collocations (have an impact on, do research, make a decision, raise awareness, strongly believe, totally agree, take action)." },
    ],
    minWords: 50,
    checks: [
      { label: "Five issue and opinion collocations", pattern: "\\b(rais(e|ed|es|ing) awareness|t(ake|ook|akes|aking) (action|part)|ma(ke|de|kes|king) (a |the )?(big )?(difference|decision)|d(o|id|oes|oing) (some )?research|(have|has|had) (a |an )?(big |huge |positive |negative )?impact|solv(e|ed|ing) (a |the )?problem|fac(e|ed|ing) (a |the )?challenge|(strongly|firmly) believe|(totally|completely) (agree|disagree)|pla(y|ys|yed) a role)\\b", min: 5 },
    ],
    rubric: ["Each collocation is correct (do research, make a decision).", "My opinion is clear.", "I explain what people can do."],
    model: "Our school uses too much paper, and I strongly believe we can change that. Last month, my class did research and found that we throw away thousands of sheets every week. We want to raise awareness with posters and a short video. We have made a decision: all homework will be online from March. If everyone takes part, we can make a big difference.",
  },
};

const phrasal: NodePractice = {
  nodeId: "b1p.phrasal-verbs-for-events-and-discovery",
  explain: "These phrasal verbs help you tell stories about events and discoveries. Come across = find by chance (I came across an old box). Figure out = understand or solve after thinking (I figured out the password). Point out = show or tell someone something important (She pointed out my mistake). End up = finally be in a situation you didn't plan (We ended up dancing all night). Run into = meet someone by chance (I ran into my teacher at the mall). Turn down = refuse (He turned down the job). Keep up with = stay at the same level (I can't keep up with the news).",
  pattern: ["come across = find by chance", "figure out = understand / solve", "point out = show / mention something important", "end up + -ing / place = finally be (without planning)", "run into = meet by chance · turn down = refuse · keep up with = stay level with"],
  steps: [
    [
      heard(X("05", "notice"), "What did the speaker come across?", ["An old box in Grandma's house", "A new phone on the bus", "A lost cat in the garden"], 0, "'I came across an old box'."),
      heard(X("05", "notice"), "What did it take an hour to figure out?", ["Who wrote the letters", "How to open the box", "Where Grandma was"], 0, "'It took me an hour to figure out who wrote them.'"),
      heard(X("05", "notice"), "What did they end up doing?", ["Reading the letters all night", "Throwing the old box away", "Going to bed early that night"], 0, "'We ended up reading them all night.'"),
      ch("'Come across' means…", ["find by chance", "cross the road", "come to a party"], 0, "Definition."),
      ch("'Point out' means…", ["show or mention something important", "point at the sky with your finger", "go outside for a walk"], 0, "Definition."),
    ],
    [
      ch("'I ran into my old teacher at the supermarket' means…", ["I met her by chance.", "I hit her with a trolley.", "I ran away from her."], 0, "run into = meet by chance."),
      ch("'She turned down the offer' means…", ["She refused it.", "She accepted it.", "She made it quieter."], 0, "turn down = refuse."),
      ctx("'We wanted to go to the beach, but we ended up staying home.'", "What happened?", ["They stayed home, which wasn't the plan.", "They went to the beach as planned.", "They planned to stay home all along."], 0, "end up = unplanned result."),
      ch("'I can't keep up with my classmates in maths' means…", ["They're faster than me.", "I'm faster than them.", "I don't like maths."], 0, "keep up with = stay at the same level."),
      ch("'Can you figure out this puzzle?' means…", ["Can you solve it?", "Can you draw it?", "Can you buy it?"], 0, "figure out = solve."),
    ],
    [
      gap("I came", "a great video about space yesterday.", ["across"], "come across."),
      gap("After two hours, we finally figured", "how to fix the bike.", ["out"], "figure out."),
      tr("Rewrite using 'run into'.", "I met my cousin by chance at the concert.", ["I ran into my cousin at the concert"], "run into = meet by chance."),
      dict(X("05", "dict"), ["We ended up reading the letters all night"]),
      say("I came across an old photo of my grandparents.", "Link 'came across': kay-macross."),
    ],
    [
      fix(["My teacher", "pointed in", "a mistake in my essay."], 1, ["pointed out"], "point out."),
      fix(["He was offered the job, but he", "turned it up."], 1, ["turned it down."], "turn down = refuse."),
      fix(["We", "ended up to stay", "at the airport all night."], 1, ["ended up staying"], "end up + -ing."),
      ch("Which is wrong?", ["I ran into him on the street yesterday.", "I ran him into on the street yesterday.", "I met him by chance yesterday."], 0, "run into someone (not separated)."),
      ch("Which is wrong?", ["It's hard to keep up the news.", "It's hard to keep up with the news.", "It's hard to follow the news."], 0, "keep up with."),
    ],
    [
      ch("Best way to start a story?", ["Last summer, I came across a strange map in a second-hand book.", "Last summer, I came up a strange map in a second-hand book.", "Last summer, a map, across, second-hand book, strange."], 0, "Natural phrasal verb."),
      ch("Your friend doesn't understand the homework. You say…", ["Don't worry, we'll figure it out together.", "Don't worry, we'll figure together it.", "Don't worry, we'll point it out."], 0, "figure it out."),
      ctx("A friend offers you a ticket, but you're busy.", "Most polite?", ["Thanks so much, but I'll have to turn it down this time.", "No. I turn down. Thanks anyway, maybe next time.", "Thanks, but I'll run into it this time."], 0, "Polite refusal."),
      ch("Which sentence fits a funny story about a party?", ["We went for one drink and ended up dancing until two.", "We went for one drink and ended up to dance.", "We ended dancing up."], 0, "end up + -ing."),
      say("We wanted to stay home, but we ended up going to the party.", "Stress ENDed UP and PARty."),
    ],
  ],
  create: {
    prompts: [
      { text: "Tell a short story (50 words or more) about a surprising discovery or a lucky day. Use at least four phrasal verbs (come across, figure out, point out, end up, run into, turn down, keep up with)." },
      { universe: "past", text: "Imagine you discovered something old in your town (50 words or more). Use at least four phrasal verbs (come across, figure out, point out, end up, run into, turn down)." },
      { universe: "screens", text: "Tell the story of a game or episode where something unexpected happened (50 words or more). Use at least four phrasal verbs (come across, figure out, point out, end up, run into, keep up with)." },
    ],
    minWords: 50,
    checks: [
      { label: "Four phrasal verbs (come across, figure out, point out, end up, run into, turn down, keep up with)", pattern: "\\b(c(ame|ome|omes|oming) across|figur(e|ed|es|ing) (\\w+ )?out|point(ed|s|ing)? (\\w+ )?out|end(ed|s|ing)? up|r(an|un|uns|unning) into|turn(ed|s|ing)? (\\w+ )?down|k(eep|ept|eeps|eeping) up with)\\b", min: 4 },
    ],
    rubric: ["Each phrasal verb has the right particle.", "My story has a clear beginning, middle and end.", "The meaning of each phrasal verb is clear from the context."],
    model: "Last Sunday, I came across an old camera in a second-hand shop. The owner pointed out that it still had a film inside. I bought it, and it took me two days to figure out how to open it. A photographer friend developed the photos. They showed my street in 1985! I ran into my neighbour later, and we ended up talking about the old photos for hours.",
  },
};

const idioms: NodePractice = {
  nodeId: "b1p.everyday-idioms",
  explain: "Idioms are expressions where the meaning is different from the individual words. Cost an arm and a leg = be very expensive. The last straw = the final problem that makes you lose patience. Get the hang of it = learn how to do something. In the long run = after a long time, in the future. Break the ice = start a conversation in a new group. Piece of cake = very easy. Under the weather = a bit ill. Once in a blue moon = very rarely. Use idioms in conversation and informal writing, not in formal essays.",
  pattern: ["cost an arm and a leg = very expensive", "the last straw = the final problem", "get the hang of it = learn to do it", "in the long run = in the future, after time", "break the ice · a piece of cake · under the weather · once in a blue moon", "Informal: good in speech and messages"],
  steps: [
    [
      heard(X("06", "notice"), "Why did learning to skate cost an arm and a leg?", ["The speaker broke two boards in a week.", "The lessons were free, but the boards weren't.", "Skates are cheap to buy."], 0, "Very expensive."),
      heard(X("06", "notice"), "What was 'the last straw'?", ["Falling for the tenth time", "Buying a new board", "Meeting a friend at the park"], 0, "The final problem."),
      heard(X("06", "notice"), "What did the friend say?", ["You'll get the hang of it.", "Give up now.", "Buy a bike instead."], 0, "'don't give up, you'll get the hang of it'."),
      ch("'It cost an arm and a leg' means…", ["It was very expensive.", "Someone was injured.", "It was free."], 0, "Idiom."),
      ch("'In the long run' means…", ["in the future, over time", "during a long race", "very quickly"], 0, "Idiom."),
    ],
    [
      ch("'The test was a piece of cake' means…", ["It was very easy.", "There was cake in the test.", "It was very hard."], 0, "Idiom."),
      ch("'I'm feeling a bit under the weather' means…", ["I feel a little ill.", "It's raining.", "I'm very happy."], 0, "Idiom."),
      ctx("At a party, someone tells a joke to break the ice.", "Why?", ["To help people start talking and relax", "To break a glass at the party for fun", "To make the room colder"], 0, "Idiom."),
      ch("'I go to the cinema once in a blue moon' means…", ["very rarely", "every night", "only when the moon is blue"], 0, "Idiom."),
      ch("Where are idioms most natural?", ["In conversation and informal messages", "In scientific reports and lab notes", "In legal documents"], 0, "Register."),
    ],
    [
      gap("Don't worry about the guitar. You'll get the", "of it.", ["hang"], "get the hang of it."),
      gap("Those trainers cost an arm and a", "!", ["leg"], "cost an arm and a leg."),
      tr("Rewrite with an idiom.", "The exam was very easy.", ["The exam was a piece of cake"], "a piece of cake."),
      dict(X("06", "dict"), ["Don't worry, you'll get the hang of it soon"]),
      say("Don't worry, you'll get the hang of it soon.", "Stress HANG and SOON."),
    ],
    [
      fix(["The new phone", "cost an arm and a foot,", "so I can't buy it."], 1, ["cost an arm and a leg,"], "The idiom is 'an arm and a leg'."),
      fix(["Studying every day is hard, but", "in the short run", "it really helps."], 1, ["in the long run"], "Over time = in the long run."),
      fix(["The exam was", "a piece of bread."], 1, ["a piece of cake."], "The idiom is 'a piece of cake'."),
      ch("Which use is wrong?", ["The test was a piece of cake, so everyone failed.", "The test was a piece of cake, so I finished early.", "The test was really hard, so I'm tired."], 0, "Easy test → people pass."),
      ch("Which use is wrong?", ["I go to the gym once in a blue moon: every day!", "I eat sushi once in a blue moon.", "We see our cousins once in a blue moon."], 0, "Once in a blue moon = rarely, not every day."),
    ],
    [
      ch("Best message to a friend learning to drive?", ["It's hard now, but you'll get the hang of it.", "It's a piece of cake for you, failure!", "Under the weather, drive!"], 0, "Encouraging idiom."),
      ch("Where should you NOT use 'cost an arm and a leg'?", ["In a formal economics essay", "In a chat with friends", "In a funny Instagram post"], 0, "Too informal."),
      ctx("A new classmate is shy on the first day.", "Best way to break the ice?", ["Ask them about their favourite music.", "Ignore them.", "Tell them they look under the weather."], 0, "Start a friendly conversation."),
      ch("Your brother ate your last cookie after taking your charger and your headphones. You say…", ["That's the last straw!", "That's a piece of cake!", "Once in a blue moon!"], 0, "Final problem."),
      say("That was the last straw, so I gave up.", "Stress LAST STRAW and GAVE UP."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a message to a friend (50 words or more) about learning something new: a sport, an instrument, a language. Use at least four idioms (cost an arm and a leg, the last straw, get the hang of it, in the long run, break the ice, a piece of cake, under the weather, once in a blue moon)." },
      { universe: "screens", text: "Write a funny post (50 words or more) about learning a new game. Use at least four idioms (cost an arm and a leg, the last straw, get the hang of it, in the long run, a piece of cake, once in a blue moon)." },
      { universe: "futures", text: "Write advice for a student starting a new school (50 words or more). Use at least four idioms (break the ice, get the hang of it, in the long run, a piece of cake, the last straw, under the weather)." },
    ],
    minWords: 50,
    checks: [
      { label: "Four everyday idioms", pattern: "\\b(cost(s)? an arm and a leg|the last straw|get(ting)? the hang of|got the hang of|in the long run|br(eak|oke|eaking) the ice|(a )?piece of cake|under the weather|once in a blue moon)\\b", min: 4 },
    ],
    rubric: ["Each idiom is complete and correct.", "Each idiom fits the meaning of the sentence.", "My message sounds friendly and natural."],
    model: "Hi Sofi! Guess what? I started guitar lessons. The guitar cost an arm and a leg, but I love it. The first week was terrible, and when my teacher laughed at my singing, that was the last straw. I almost quit! But now I'm getting the hang of it. My teacher says that in the long run, practising twenty minutes a day is better than three hours once in a blue moon.",
  },
};

const chunks: NodePractice = {
  nodeId: "b1p.opinion-chunks",
  explain: "Opinion chunks are ready-made phrases that make your speaking and writing sound fluent. To give your opinion: As far as I'm concerned… · In my view… · To be honest… · Personally, I think… To say something is obvious: It goes without saying that… To show the other side: On the other hand… · Having said that… To finish: All in all… · On the whole… Learn each chunk as one block, with its exact words: 'As far as I'm concerned' (not 'As far as I concern').",
  pattern: ["Opinion: As far as I'm concerned · In my view · Personally, I think · To be honest", "Obvious: It goes without saying that …", "Other side: On the other hand · Having said that", "Conclusion: All in all · On the whole", "Learn the chunk exactly: As far as I'm concerned ✓"],
  steps: [
    [
      heard(X("07", "notice"), "What is the speaker's opinion?", ["School should start later.", "School should start earlier.", "School should be online."], 0, "'As far as I'm concerned, school should start later.'"),
      heard(X("07", "notice"), "What does the speaker say is obvious?", ["Teenagers need more sleep.", "Parents like late classes.", "Teachers are tired."], 0, "'It goes without saying that teenagers need more sleep.'"),
      heard(X("07", "notice"), "What does the speaker understand about parents?", ["Why they prefer early classes", "Why they want later classes", "Nothing"], 0, "'On the other hand, I can see why parents prefer early classes.'"),
      ch("'As far as I'm concerned' means…", ["in my opinion", "I'm worried", "far away"], 0, "Opinion chunk."),
      ch("'All in all' is used…", ["to give a final summary", "to start a story", "to disagree"], 0, "Conclusion."),
    ],
    [
      ch("'It goes without saying that…' means…", ["It's obvious that…", "Nobody says that…", "It's a secret that…"], 0, "Obvious."),
      ch("Which chunk introduces the other side?", ["On the other hand", "All in all", "To be honest"], 0, "Contrast."),
      ctx("'To be honest, I didn't like the film.'", "'To be honest' shows…", ["the speaker is sharing a real, maybe surprising, opinion", "the speaker is lying to you about their opinion", "a conclusion at the end of an essay"], 0, "Honest opinion."),
      ch("Which is a good way to end a short essay?", ["All in all, I think the plan is a good idea.", "On the other hand, the plan is a plan.", "It goes without saying, the end."], 0, "Conclusion chunk."),
      ch("'Having said that…' means…", ["but / however (after a point)", "because (giving a reason)", "for example"], 0, "Contrast after a point."),
    ],
    [
      gap("As far as I'm", ", homework should be optional.", ["concerned"], "As far as I'm concerned."),
      gap("It goes without", "that exercise is good for you.", ["saying"], "It goes without saying."),
      tr("Rewrite starting 'All in all'.", "So, to sum up, I think the trip was great.", ["All in all, I think the trip was great", "All in all I think the trip was great", "All in all, the trip was great"], "Conclusion chunk."),
      dict(X("07", "dict"), ["As far as I'm concerned, school should start later", "As far as I am concerned, school should start later"]),
      say("As far as I'm concerned, school should start later.", "Say the chunk smoothly, as one word: asfarasI'mconcerned."),
    ],
    [
      fix(["As far as", "I concern,", "uniforms are unnecessary."], 1, ["I'm concerned,", "I am concerned,"], "Fixed chunk: As far as I'm concerned."),
      fix(["It goes", "without to say", "that we need more parks."], 1, ["without saying"], "Fixed chunk: It goes without saying."),
      fix(["In the other hand,", "phones can be", "useful in class."], 0, ["On the other hand,"], "On the other hand."),
      ch("Which is wrong?", ["In my opinion, I think that, personally, it's good.", "In my opinion, it's a good idea.", "Personally, I think it's a good idea."], 0, "Too many opinion markers together."),
      ch("Which is wrong?", ["All in all, the concert were amazing.", "All in all, the concert was amazing.", "On the whole, the concert was amazing."], 0, "Grammar: the concert was."),
    ],
    [
      ch("Best opening for a debate speech?", ["As far as I'm concerned, our school needs more green spaces.", "As far I concern, our school needs more green.", "Me, I think, my opinion, maybe more green spaces."], 0, "Clear and fluent."),
      ch("Best conclusion for an opinion essay?", ["All in all, the benefits are greater than the problems.", "On the other hand, the end. That's my essay.", "It goes without saying, bye. Thank you."], 0, "Clear conclusion."),
      ctx("Your friend gives a good point you didn't expect.", "Best response?", ["That's true. Having said that, I still think it's too expensive.", "No. It's expensive. I don't agree with you at all.", "It goes without saying no. Too expensive."], 0, "Accept + contrast."),
      ch("Which is best for a casual chat?", ["To be honest, I didn't really enjoy it.", "It is my considered view that I did not enjoy it.", "As far as I'm concerned, notwithstanding, no."], 0, "Natural in conversation."),
      say("To be honest, I think it's a great idea.", "Stress HONest and GREAT."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short opinion paragraph (60 words or more): Should students have homework every day? Use at least four opinion chunks (As far as I'm concerned, In my view, To be honest, It goes without saying that, On the other hand, Having said that, All in all)." },
      { universe: "screens", text: "Write a short opinion paragraph (60 words or more): Should video games be taught at school? Use at least four opinion chunks (As far as I'm concerned, It goes without saying that, On the other hand, Having said that, All in all)." },
      { universe: "futures", text: "Write a short opinion paragraph (60 words or more): Will robots do most jobs in the future? Use at least four opinion chunks (In my view, To be honest, It goes without saying that, On the other hand, All in all)." },
    ],
    minWords: 60,
    checks: [
      { label: "Four opinion chunks", pattern: "\\b(as far as i'?m concerned|as far as i am concerned|in my view|in my opinion|personally|to be honest|it goes without saying|on the other hand|having said that|all in all|on the whole)\\b", min: 4 },
    ],
    rubric: ["Each chunk is in its exact form.", "I gave my opinion, the other side and a conclusion.", "My paragraph is easy to follow."],
    model: "As far as I'm concerned, students shouldn't have homework every day. It goes without saying that practice is important, but we also need time to rest, do sports and see our families. On the other hand, a little homework can help us remember what we learned. Having said that, two or three times a week is enough. All in all, I think less homework would make us happier and better students.",
  },
};

export const B1P_WORDS: NodePractice[] = [topics, art, suffixes, collocations, phrasal, idioms, chunks];
