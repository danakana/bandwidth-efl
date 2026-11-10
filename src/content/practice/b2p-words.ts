/* B2+ Words. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, say, tr } from "./helpers";

const W = (n: string, k: "notice" | "dict") => `p/b2pw-${n}-${k}.mp3`;

export const B2P_WORDS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: W("01", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "In this study, we analyse data from three hundred schools. The evidence suggests a significant link between sleep and exam results. However, our approach has limits, so the findings should be treated with caution." },
  { file: W("01", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "The evidence suggests a significant link." },
  { file: W("02", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "My grandmother calls my cousin determined. My uncle calls him stubborn. It's the same boy, who simply never gives up. And when I ask questions, my teacher says I'm curious, but my sister says I'm nosy." },
  { file: W("02", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "She's not stubborn, she's determined." },
  { file: W("03", "notice"), voice: "8DvnqWWA3WWXixOm7zQI", script: "Researchers conducted a study in five countries. There is a growing body of evidence that green spaces reduce stress, and it is now widely accepted that cities need more parks. The results raise important questions for planners." },
  { file: W("03", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "It is widely accepted that exercise helps." },
  { file: W("04", "notice"), voice: "bIHbv24MWmeRgasZH58o", script: "I picked up some Portuguese on holiday, and my grades have really picked up this term. Sadly, our trip to Brazil fell through, so the teacher played down the problem. In the end, it all comes down to money." },
  { file: W("04", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "In the end, it all comes down to money." },
  { file: W("05", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "Social media is a double-edged sword. It connects us, but it also makes us compare ourselves with everyone. And the elephant in the room is that the companies earn more when we feel worse. You have to read between the lines." },
  { file: W("05", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "You have to read between the lines." },
];

const academic: NodePractice = {
  nodeId: "b2p.academic-vocabulary",
  explain: "Academic vocabulary is the set of words that appear across all subjects in reports, essays and articles: analyse, significant, approach, evidence, framework, factor, indicate, impact, assess, issue, data, concept. Many come from Latin, so Spanish speakers often recognise them (analizar, significativo, evidencia). Watch the false friends: 'evidence' is proof, not 'obvious'; 'actual' means real, not current; 'eventually' means in the end, not maybe.",
  pattern: ["Nouns: evidence, approach, framework, factor, impact, issue, concept", "Verbs: analyse, assess, indicate, identify, interpret, establish", "Adjectives: significant, relevant, consistent, crucial", "False friends: actual ≠ actual (current) · eventually ≠ eventualmente · evidence ≠ evidente"],
  steps: [
    [
      heard(W("01", "notice"), "How many schools did the study use?", ["300", "30", "3,000"], 0, "'three hundred schools'."),
      heard(W("01", "notice"), "What does the evidence suggest?", ["A significant link between sleep and exam results", "That sleep doesn't matter", "That schools should close"], 0, "'a significant link between sleep and exam results'."),
      ch("In 'a significant link', significant means…", ["important or large enough to matter", "secret", "meaningful only for one person"], 0, "In research, significant = real and important."),
      ch("'Our approach has limits.' Approach means…", ["way of doing something", "arrival", "closeness"], 0, "approach = method."),
      ch("Which word means 'proof that something is true'?", ["evidence", "evident", "eventually"], 0, "evidence (noun) = pruebas."),
    ],
    [
      ch("'Actually' in English means…", ["in fact / really", "currently", "nowadays"], 0, "False friend: actualmente = currently."),
      ch("'Eventually they agreed.' They agreed…", ["in the end, after some time", "maybe", "immediately"], 0, "eventually = finalmente."),
      ch("Which sentence is more academic?", ["The data indicate a clear trend.", "The numbers kind of show stuff going up.", "It's obvs going up."], 0, "indicate, data, trend."),
      ch("'Assess' means…", ["judge or evaluate", "help", "attend"], 0, "assess = evaluar."),
      ctx("A report says: 'Several factors contributed to the decline.'", "Factors are…", ["things that cause or influence a result", "people who work in factories", "numbers"], 0, "factor = element that influences."),
    ],
    [
      gap("Scientists need to", "the data before drawing conclusions.", ["analyse", "analyze"], "analyse (UK) / analyze (US)."),
      gap("There is no", "that the medicine works.", ["evidence"], "evidence = proof (uncountable)."),
      gap("Sleep is a", "factor in how well teenagers learn.", ["significant", "crucial", "key", "major"], "significant / crucial factor."),
      dict(W("01", "dict"), ["The evidence suggests a significant link"]),
      tr("Make it more academic with the word given.", "The study looked closely at the results.", ["The study analysed the results", "The study analyzed the results"], "looked closely at → analysed.", "analysed"),
    ],
    [
      fix(["There are", "many evidences", "that exercise helps."], 1, ["a lot of evidence", "much evidence", "plenty of evidence", "strong evidence"], "Evidence is uncountable: much / a lot of evidence."),
      fix(["Actually,", "the population of Bogotá", "is about eight million."], 0, ["Currently,", "At present,", "Today,", "Nowadays,"], "Actualmente = currently (actually = in fact)."),
      fix(["The results", "are evident", "that sleep matters."], 1, ["show", "indicate", "suggest", "demonstrate"], "The results show/indicate that…"),
      ch("Which is wrong?", ["The data shows the problem is eventually serious.", "The data show a serious problem.", "Eventually, the problem was solved."], 0, "Eventually ≠ possibly."),
      ch("Which is the best academic choice?", ["This approach has a significant impact.", "This way has a big effect, like, a lot.", "This approach affects super much."], 0, "Formal and precise."),
    ],
    [
      ch("Which is best in a science report?", ["The evidence indicates that the theory is correct.", "It's super obvious the theory is right.", "Everybody knows the theory's right."], 0, "Academic + careful."),
      ch("Which is best in a chat with friends?", ["The test was really hard.", "The assessment presented significant challenges.", "The evaluation was of considerable difficulty."], 0, "Don't sound like a textbook with friends."),
      ch("Which word best replaces 'thing' in 'Cost is an important thing'?", ["factor", "stuff", "object"], 0, "Cost is an important factor."),
      ch("Which opening fits an essay?", ["This essay will analyse three approaches to the issue.", "So basically I'm gonna talk about stuff.", "Hello! Today, essay."], 0, "Clear academic signposting."),
      say("The evidence suggests a significant link between sleep and results.", "Stress EVidence, sigNIFicant, RESults."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short academic paragraph (70 words or more) about a problem in your school or city. Use at least five academic words (analyse, significant, approach, evidence, factor, impact, indicate, issue, assess, data…)." },
      { universe: "science", text: "Write a short academic paragraph (70 words or more) about a scientific question that interests you, using at least five academic words." },
    ],
    minWords: 70,
    checks: [
      { label: "Five academic words (analyse, significant, approach, evidence, factor, impact, indicate, issue, assess, data, concept, framework, establish, relevant, crucial…)", pattern: "\\b(analy[sz]e[sd]?|analysis|significant(ly)?|approach(es)?|evidence|factors?|impacts?|indicates?|indicated|issues?|assess(es|ed|ment)?|data|concepts?|framework|establish(ed)?|relevant|crucial|consistent|identif(y|ied|ies)|interpret(ed)?|research)\\b", min: 5 },
      { label: "No casual words (stuff, thing, kind of, super, gonna)", pattern: "^(?![\\s\\S]*\\b(stuff|things?|kind of|super|gonna|wanna|lol)\\b)[\\s\\S]+$", min: 1 },
    ],
    rubric: ["I used academic words correctly, not just to sound clever.", "I avoided false friends (actually, eventually).", "My paragraph has a clear point."],
    model: "Traffic is a significant issue in Bogotá. Recent data indicate that the average commute takes more than an hour, which has a clear impact on students' sleep and energy. Several factors contribute to the problem, including the number of cars and the limited metro network. To assess possible solutions, the city should analyse evidence from other large cities. One promising approach is to expand cycle lanes and bus routes across the whole city.",
  },
};

const connotation: NodePractice = {
  nodeId: "b2p.connotation",
  explain: "Words with similar meanings can carry different feelings. Connotation is that feeling: positive, neutral or negative. Slim (positive) / thin (neutral) / skinny (often negative). Determined (positive) / stubborn (negative). Curious (positive) / nosy (negative). Confident / arrogant. Thrifty / stingy. Choosing the right connotation lets you praise, criticise or stay neutral without saying so directly, which matters in reviews, persuasive writing and polite conversation.",
  pattern: ["Positive · neutral · negative: slim · thin · skinny", "determined (+) vs stubborn (−) · curious (+) vs nosy (−)", "confident (+) vs arrogant (−) · thrifty (+) vs stingy (−)", "Same fact, different attitude: the writer's word choice shows their opinion"],
  steps: [
    [
      heard(W("02", "notice"), "How does the grandmother see the cousin?", ["Positively: determined", "Negatively: stubborn", "She doesn't know him"], 0, "'My grandmother calls my cousin determined.'"),
      heard(W("02", "notice"), "Who sees the speaker's questions negatively?", ["Their sister", "Their teacher", "Their grandmother"], 0, "'my sister says I'm nosy'."),
      ch("Which word is most positive?", ["slim", "thin", "skinny"], 0, "slim = attractive; skinny can sound unhealthy."),
      ch("Determined and stubborn describe the same behaviour. The difference is…", ["the speaker's attitude", "the person's age", "the grammar"], 0, "Connotation = feeling."),
      ch("'Nosy' means curious in a…", ["negative way: too interested in other people's business", "positive way", "scientific way"], 0, "nosy = metiche."),
    ],
    [
      ch("Which pair is positive vs negative?", ["confident / arrogant", "happy / glad", "big / large"], 0, "Same confidence, different judgement."),
      ch("A review says the hotel was 'cosy'. An unhappy guest might call it…", ["cramped", "spacious", "luxurious"], 0, "cosy (+) vs cramped (−): small."),
      ch("'Thrifty' and 'stingy' both mean someone doesn't spend much. Which is a compliment?", ["thrifty", "stingy", "both"], 0, "thrifty = careful with money."),
      ctx("A politician is described as 'outspoken' by fans and '…' by critics.", "Most likely word?", ["rude", "polite", "quiet"], 0, "Same directness, different judgement."),
      ch("Why does connotation matter in persuasive writing?", ["Word choice can make readers feel positive or negative without saying it directly.", "It doesn't.", "It's only about spelling."], 0, "It's a quiet persuasion tool."),
    ],
    [
      gap("She never gives up on her goals; she's really", ".", ["determined", "persistent", "ambitious"], "Positive."),
      gap("He keeps reading my messages over my shoulder. He's so", "!", ["nosy"], "Negative curiosity."),
      tr("Rewrite more politely with the word given.", "Your brother is really skinny.", ["Your brother is really slim", "Your brother is very slim"], "skinny → slim.", "slim"),
      dict(W("02", "dict"), ["She's not stubborn, she's determined", "She is not stubborn, she is determined"]),
      gap("The flat is small but warm and", ": perfect for one person.", ["cosy", "cozy"], "Estate agents love 'cosy'."),
    ],
    [
      fix(["My grandfather", "is very cheap", "and buys me lots of presents."], 1, ["is very generous", "is so generous", "is really generous"], "'Cheap' (stingy) contradicts buying lots of presents."),
      fix(["The hotel room was", "cramped and", "perfect for our family of five."], 1, ["spacious and", "big and", "roomy and"], "A negative word doesn't fit a positive review."),
      fix(["Her speech was", "arrogant and", "inspiring."], 1, ["confident and", "bold and", "powerful and"], "Arrogant clashes with inspiring."),
      ch("Which sentence sends mixed messages?", ["He's a stubborn leader who listens to everyone.", "He's a determined leader who never gives up.", "He's a flexible leader who listens."], 0, "Stubborn usually means not listening."),
      ch("In a job reference, which word helps the candidate?", ["assertive", "pushy", "bossy"], 0, "assertive (+), pushy and bossy (−)."),
    ],
    [
      ch("You're writing a positive review of a small café. Best?", ["intimate and cosy", "tiny and cramped", "small and crowded"], 0, "Positive connotation."),
      ch("You want to criticise a film gently. Best?", ["It's a little slow in places.", "It's boring rubbish.", "It's a masterpiece."], 0, "Gentle, honest criticism."),
      ch("Your friend asks how you'd describe their new haircut, which you don't love. Most tactful?", ["It's definitely bold!", "It's ugly.", "It's skinny."], 0, "'Bold' is honest but kind."),
      ch("A news article calls protesters 'activists'; another calls them 'agitators'. What does this show?", ["The writers' attitudes are different.", "They're different people.", "Nothing."], 0, "Connotation reveals bias. Read critically."),
      say("She's not stubborn, she's determined.", "Contrast: stress NOT STUBborn and deTERmined."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe the same person twice (70 words or more in total): once as a fan would, once as a critic would. Use at least two positive/negative word pairs (determined/stubborn, confident/arrogant, curious/nosy, thrifty/stingy…)." },
      { universe: "screens", text: "Write two short reviews of the same game or series (70 words or more in total): one from a fan, one from a critic. Use contrasting words with different connotations." },
    ],
    minWords: 70,
    checks: [
      { label: "Positive words (determined, confident, curious, thrifty, slim, cosy, bold, assertive, generous…), at least two", pattern: "\\b(determined|confident|curious|thrifty|slim|cosy|cozy|bold|assertive|generous|ambitious|outspoken|spacious|persistent|passionate)\\b", min: 2 },
      { label: "Negative words (stubborn, arrogant, nosy, stingy, skinny, cramped, pushy, bossy…), at least two", pattern: "\\b(stubborn|arrogant|nosy|stingy|skinny|cramped|pushy|bossy|reckless|rude|cheap|obsessive|aggressive|cocky)\\b", min: 2 },
    ],
    rubric: ["Both descriptions are about the same facts.", "Each version uses words with a clear feeling.", "A reader could tell which version is the fan's."],
    model: "The fan: Our captain is determined and confident. She never gives up, even when we're losing, and she's outspoken because she cares about the team. She's also thrifty with her energy, saving it for the last minutes.\n\nThe critic: The captain is stubborn and arrogant. She refuses to change tactics, and she's pushy with younger players. Honestly, she's rude to referees and acts as if the team belongs to her.",
  },
};

const collocations: NodePractice = {
  nodeId: "b2p.academic-collocations",
  explain: "Academic writing is full of fixed word partners. You conduct or carry out research (not 'make research'). There is a growing body of evidence. Something is widely accepted, widely believed or highly significant. Studies raise questions, draw conclusions, play a role and pose a threat. Spanish speakers often translate 'hacer' as 'make' (make research, make an analysis): learn the partner as one chunk.",
  pattern: ["conduct / carry out research (not make research)", "a growing body of evidence · draw a conclusion · raise a question", "widely accepted / believed · highly significant / unlikely", "play a key role · pose a threat · reach a consensus"],
  steps: [
    [
      heard(W("03", "notice"), "Where was the study done?", ["In five countries", "In one city", "Online only"], 0, "'conducted a study in five countries'."),
      heard(W("03", "notice"), "What is now widely accepted?", ["That cities need more parks", "That parks increase stress", "That planners agree on everything"], 0, "'it is now widely accepted that cities need more parks'."),
      ch("Which verb goes with 'research'?", ["conduct", "make", "do a"], 0, "conduct / carry out / do research."),
      ch("'A growing body of evidence' means…", ["more and more evidence", "evidence about bodies", "evidence that is getting old"], 0, "body = large amount."),
      ch("Which is a natural collocation?", ["draw a conclusion", "make a conclusion", "take a conclusion"], 0, "draw a conclusion = sacar una conclusión."),
    ],
    [
      ch("'Widely accepted' means…", ["accepted by many people", "accepted in a wide place", "barely accepted"], 0, "widely = by many."),
      ch("'Pollution poses a threat to health.' Poses means…", ["presents / creates", "takes a photo", "removes"], 0, "pose a threat / risk / challenge."),
      ch("'Teachers play a key role.' This means teachers…", ["are very important in the process", "act in plays", "make keys"], 0, "play a role = cumplir un papel."),
      ch("Which sounds most academic?", ["The study raises important questions.", "The study makes some big questions.", "The study does questions."], 0, "raise a question."),
      ch("'Highly unlikely' means…", ["very improbable", "unlikely and tall", "slightly likely"], 0, "highly + adjective (likely, significant, effective)."),
    ],
    [
      gap("The university is", "research into climate change.", ["conducting", "carrying out", "doing"], "conduct / carry out research."),
      gap("It is too early to", "any firm conclusions.", ["draw", "reach"], "draw / reach a conclusion."),
      gap("Social media plays an important", "in teenagers' lives.", ["role", "part"], "play a role / part."),
      dict(W("03", "dict"), ["It is widely accepted that exercise helps", "It's widely accepted that exercise helps"]),
      tr("Rewrite with a more academic collocation and the word given.", "Lots of people believe that breakfast is important.", ["It is widely believed that breakfast is important", "It's widely believed that breakfast is important"], "It is widely believed that…", "widely"),
    ],
    [
      fix(["The students", "made a research", "about recycling."], 1, ["conducted research", "carried out research", "did research", "conducted some research", "did some research"], "Research is uncountable; use conduct / carry out / do."),
      fix(["We can", "take the conclusion", "that sleep matters."], 1, ["draw the conclusion", "reach the conclusion"], "draw / reach a conclusion."),
      fix(["The results", "make a big question", "about safety."], 1, ["raise a big question", "raise an important question", "raise serious questions"], "raise a question."),
      ch("Which is wrong?", ["Plastic does a threat to the oceans.", "Plastic poses a threat to the oceans.", "Plastic is a threat to the oceans."], 0, "pose a threat."),
      ch("Which is wrong?", ["It is largely accepted by most people.", "It is widely accepted.", "It is generally accepted."], 0, "Use widely or generally accepted."),
    ],
    [
      ch("Which sentence fits a research summary best?", ["A growing body of evidence suggests that exercise improves memory.", "Loads of proof says exercise is great for your brain.", "Exercise is good, everyone knows."], 0, "Academic collocations + hedging."),
      ch("Which is best for a casual chat?", ["Apparently exercise helps your memory.", "A growing body of evidence suggests…", "It is widely accepted that…"], 0, "Match the register."),
      ch("Which conclusion sentence is strongest?", ["Further research should be conducted before firm conclusions are drawn.", "We need to do more research stuff.", "So yeah, more research."], 0, "Formal, precise, cautious."),
      ch("Why learn collocations as chunks?", ["The words go together naturally; translating word by word gives errors like 'make research'.", "Because grammar rules don't apply.", "They're only for exams."], 0, "Chunks = fluency."),
      say("A growing body of evidence suggests that green spaces reduce stress.", "Group it: a growing body of evidence | suggests | that green spaces reduce stress."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short research summary (70 words or more) about a topic you care about. Use at least four academic collocations (conduct research, a growing body of evidence, widely accepted, draw conclusions, play a role, raise questions, pose a threat…)." },
      { universe: "science", text: "Summarise a real or imaginary study about teenagers (70 words or more) using at least four academic collocations." },
      { universe: "futures", text: "Summarise the evidence about one environmental problem (70 words or more) using at least four academic collocations." },
    ],
    minWords: 70,
    checks: [
      { label: "Four academic collocations", pattern: "\\b((conduct|conducted|conducting|carry out|carried out|carrying out) (a |some )?(study|studies|research|survey)|(growing|large|substantial) body of evidence|widely (accepted|believed|recognised|recognized|used)|(draw|drew|drawn|reach|reached) (a |any |firm |the )?conclusions?|play(s|ed)? (a|an) (key |important |major |significant )?(role|part)|raise(s|d)? (important |serious |new )?questions?|pose(s|d)? (a|an) (serious |real )?(threat|risk|challenge)|highly (significant|unlikely|likely|effective))\\b", min: 4 },
    ],
    rubric: ["I used the right verb partners (conduct research, draw a conclusion).", "My summary sounds like a report, not a chat.", "I was careful not to overclaim."],
    model: "Researchers have conducted several studies on how screens affect sleep. A growing body of evidence suggests that using phones late at night delays sleep, and it is widely accepted that blue light plays a role. However, the studies raise questions about other factors, such as stress and noise. Most experts agree that it is too early to draw firm conclusions, but poor sleep clearly poses a threat to students' health.",
  },
};

const phrasal: NodePractice = {
  nodeId: "b2p.multi-meaning-and-abstract-phrasal-verbs",
  explain: "Many phrasal verbs have several meanings, and the abstract ones are common in news and discussion. Pick up: learn informally (I picked up some Portuguese), improve (Sales picked up), collect (pick me up at six). Come down to: be decided by (It comes down to money). Fall through: fail to happen (Our plans fell through). Phase out: remove gradually (plastic bags are being phased out). Play down: make something seem less important. Context tells you which meaning is meant.",
  pattern: ["pick up = learn informally · improve · collect", "come down to = depend on / be decided by", "fall through = fail to happen", "phase out = remove gradually · play down = minimise (↔ play up)"],
  steps: [
    [
      heard(W("04", "notice"), "'I picked up some Portuguese.' The speaker…", ["learned some informally", "collected a Portuguese friend", "dropped it"], 0, "pick up = learn without formal study."),
      heard(W("04", "notice"), "What happened to the trip to Brazil?", ["It fell through: it didn't happen", "It was amazing", "It was moved to next week"], 0, "fall through = fail to happen."),
      heard(W("04", "notice"), "According to the speaker, it all comes down to…", ["money", "the teacher", "Portuguese"], 0, "comes down to = depends on."),
      ch("'My grades have picked up.' Meaning?", ["They have improved.", "They have been collected.", "They have fallen."], 0, "pick up = improve."),
      ch("'The teacher played down the problem.' The teacher…", ["made it seem less serious", "made it seem worse", "solved it"], 0, "play down = minimise."),
    ],
    [
      ch("'Plastic straws are being phased out.' This means they are…", ["being removed gradually", "becoming more popular", "being recycled"], 0, "phase out = gradually stop."),
      ch("Which 'pick up' means collect?", ["Can you pick me up at six?", "I picked up some French.", "Business picked up in May."], 0, "Collect someone by car."),
      ctx("A coach says: 'Tonight's match comes down to who wants it more.'", "The coach means…", ["the result depends on motivation", "the match is cancelled", "the team will lose"], 0, "comes down to = depends on."),
      ch("The opposite of 'play down' is…", ["play up", "play out", "play back"], 0, "play up = exaggerate the importance."),
      ch("Why are these verbs called 'abstract'?", ["They describe ideas and situations, not physical movement.", "They're very formal.", "They're old-fashioned."], 0, "No literal 'picking' or 'falling'."),
    ],
    [
      gap("The deal", "through at the last minute.", ["fell"], "fall through (past: fell)."),
      gap("The company plans to", "out petrol cars by 2035.", ["phase"], "phase out."),
      dict(W("04", "dict"), ["In the end, it all comes down to money", "In the end it all comes down to money"]),
      tr("Rewrite with a phrasal verb and the word given.", "I learned a bit of Italian while I was in Rome.", ["I picked up a bit of Italian while I was in Rome", "I picked up some Italian while I was in Rome"], "learn informally → pick up.", "picked"),
      tr("Rewrite with a phrasal verb and the word given.", "The minister tried to make the crisis seem less serious.", ["The minister tried to play down the crisis", "The minister tried to play the crisis down"], "play down.", "play"),
    ],
    [
      fix(["Our holiday", "fell down", "because the airline went bankrupt."], 1, ["fell through"], "fall through = fail to happen."),
      fix(["The government is", "phasing off", "old buses."], 1, ["phasing out"], "phase out."),
      fix(["In the end,", "it comes up to", "how much you practise."], 1, ["it comes down to", "it all comes down to"], "come down to."),
      ch("Which use of 'pick up' is wrong?", ["I picked up my exam because I passed it.", "I picked up some Korean from K-dramas.", "The economy is picking up."], 0, "It doesn't mean pass an exam."),
      ch("'The president played up the success.' Correct meaning?", ["He exaggerated how important it was.", "He minimised it.", "He played a game."], 0, "play up = emphasise."),
    ],
    [
      ch("Which is best in a formal report?", ["The policy will be gradually withdrawn.", "The policy will be phased out, like, slowly.", "They're gonna get rid of it."], 0, "In very formal writing, a single verb can be better."),
      ch("Which is natural in a news podcast?", ["The plan fell through after funding was cut.", "The plan did fall through, eventually maybe.", "The plan fell down."], 0, "Phrasal verbs are normal in spoken news."),
      ch("A classmate says 'I picked up' and stops. What do you need?", ["More context: picked up what, or picked up who?", "Nothing, it's clear.", "A dictionary of slang."], 0, "Multi-meaning verbs need context."),
      ch("Your friend wants to minimise a mistake to their parents. They might…", ["play it down", "play it up", "phase it out"], 0, "play down."),
      say("Our plans fell through, but things picked up later.", "Stress FELL THROUGH and PICKED UP."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short story about a plan that didn't work out (70 words or more). Use at least four of: pick up, come down to, fall through, phase out, play down, play up." },
      { universe: "futures", text: "Write a short news report about a city changing its transport (70 words or more), using at least four of these phrasal verbs." },
    ],
    minWords: 70,
    checks: [
      { label: "Four abstract phrasal verbs (pick up, come down to, fall through, phase out, play down/up)", pattern: "\\b(pick(s|ed|ing)? (it |them |some |a bit of |up )?up|pick(s|ed|ing)? up|come(s)? down to|came down to|coming down to|f[ae]ll(s|en|ing)? through|phas(e|es|ed|ing) (it |them )?out|play(s|ed|ing)? (it |them |the [a-z]+ )?(down|up))\\b", min: 4 },
    ],
    rubric: ["Each phrasal verb has the right meaning for the context.", "I used past forms correctly (fell through, picked up).", "My story is clear."],
    model: "Last year our class planned a trip to the coast, but it fell through when the bus company cancelled. Our teacher tried to play down the disappointment, but we were upset. In the end, it came down to money: a new company was too expensive. Things picked up when we organised a cheaper trip to a nature reserve instead, and I even picked up some birdwatching skills from our guide along the way.",
  },
};

const idioms: NodePractice = {
  nodeId: "b2p.idioms-for-analysis",
  explain: "Some idioms help you analyse situations, especially in discussions and opinion writing. Read between the lines: understand the hidden meaning. A double-edged sword: something with good and bad effects. The elephant in the room: an obvious problem nobody mentions. Move the goalposts: change the rules unfairly once something has started. The tip of the iceberg: a small visible part of a bigger problem. Use one or two well; too many sounds like a cliché.",
  pattern: ["read between the lines = see the hidden message", "a double-edged sword = has good and bad sides", "the elephant in the room = obvious problem nobody discusses", "move the goalposts = change the rules unfairly · the tip of the iceberg = small part of a big problem"],
  steps: [
    [
      heard(W("05", "notice"), "Why is social media 'a double-edged sword'?", ["It connects us but also makes us compare ourselves.", "It's dangerous like a sword.", "It has two apps."], 0, "Good and bad effects."),
      heard(W("05", "notice"), "What is 'the elephant in the room'?", ["Companies earn more when we feel worse.", "Social media is free.", "People like animals."], 0, "The obvious problem nobody mentions."),
      ch("'Read between the lines' means…", ["understand what is meant but not said", "read very carefully, line by line", "skip lines"], 0, "Find the hidden message."),
      ch("'They keep moving the goalposts.' The speaker feels…", ["the rules keep changing unfairly", "the football pitch is being repaired", "everything is fair"], 0, "Frustration at changing conditions."),
      ch("'This is just the tip of the iceberg.' The problem is…", ["much bigger than it looks", "very small", "solved"], 0, "Most of an iceberg is hidden."),
    ],
    [
      ch("Fame can be a double-edged sword because…", ["it brings money and attention but also loss of privacy", "it's always good", "it's always bad"], 0, "Two sides."),
      ctx("At a family dinner, everyone talks about the weather while Dad's job loss goes unmentioned.", "Dad's job loss is…", ["the elephant in the room", "a double-edged sword", "the tip of the iceberg"], 0, "Obvious, but avoided."),
      ch("A teacher changes the grading criteria after you submit. You could say she…", ["moved the goalposts", "read between the lines", "played it down"], 0, "Changing rules mid-game."),
      ch("Which idiom fits careful reading of a politician's speech?", ["read between the lines", "the elephant in the room", "move the goalposts"], 0, "Find what's not said directly."),
      ch("Why use these idioms in analysis?", ["They express complex ideas briefly and vividly.", "They make writing more formal.", "They replace evidence."], 0, "Vivid, but they're not evidence."),
    ],
    [
      gap("Technology is a", "sword: it saves time but steals our attention.", ["double-edged"], "a double-edged sword."),
      gap("The ten complaints we received are only the tip of the", ".", ["iceberg"], "Many more problems are hidden."),
      dict(W("05", "dict"), ["You have to read between the lines"]),
      gap("Let's talk about the elephant in the", ": the budget.", ["room"], "the elephant in the room."),
      tr("Rewrite with an idiom and the word given.", "Every time we finish, the boss changes what she wants.", ["Every time we finish, the boss moves the goalposts", "The boss keeps moving the goalposts", "Every time we finish the boss moves the goalposts"], "move the goalposts.", "goalposts"),
    ],
    [
      fix(["Social media is", "a double-sided sword", "for young people."], 1, ["a double-edged sword"], "edged, not sided."),
      fix(["Nobody mentioned", "the elephant of the room:", "the cost."], 1, ["the elephant in the room:", "the elephant in the room"], "in the room."),
      fix(["You need to", "read between the letters", "to understand her email."], 1, ["read between the lines"], "lines."),
      ch("Which use is wrong?", ["The new park is a double-edged sword: everyone loves it and nobody complains.", "Homework is a double-edged sword: it helps but causes stress.", "Fame is a double-edged sword."], 0, "Needs both good and bad sides."),
      ch("Which use is wrong?", ["The tip of the iceberg was the whole problem.", "These cases are just the tip of the iceberg.", "What we see is only the tip of the iceberg."], 0, "The tip is the small part, not the whole."),
    ],
    [
      ch("Which is best in an opinion essay?", ["Admittedly, social media is a double-edged sword, but the evidence suggests the harms are growing.", "Social media is a double-edged sword and the elephant in the room and the tip of the iceberg.", "Social media is bad, period."], 0, "One idiom, used to frame an argument."),
      ch("Which is best in a formal scientific report?", ["The data reveal both benefits and risks.", "The data are a double-edged sword, lol.", "The data move the goalposts."], 0, "Idioms are usually too informal for scientific reports."),
      ch("In a class debate, how do you raise an issue nobody wants to discuss?", ["Can we address the elephant in the room?", "Let's read between the goalposts.", "This is a double-edged iceberg."], 0, "Polite and direct."),
      ch("How many idioms in a 200-word opinion piece?", ["One or two, where they really help", "As many as possible", "Never any"], 0, "Avoid clichés."),
      say("Can we talk about the elephant in the room?", "Stress ELephant and ROOM."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short opinion piece (80 words or more) about technology in schools. Use at least two idioms for analysis (double-edged sword, read between the lines, the elephant in the room, move the goalposts, the tip of the iceberg)." },
      { universe: "screens", text: "Write a short opinion piece (80 words or more) about video game companies and their players, using at least two idioms for analysis." },
      { universe: "words", text: "Analyse what an advert or speech is really saying (80 words or more), using at least two idioms for analysis." },
    ],
    minWords: 80,
    checks: [
      { label: "Two idioms for analysis", pattern: "\\b(double-edged sword|between the lines|elephant in the room|mov(e|es|ed|ing) the goalposts|tip of the iceberg)\\b", min: 2 },
      { label: "Your opinion (In my view, I believe, I think…)", pattern: "\\b(in my (view|opinion)|i (strongly )?(believe|think|feel)|personally)\\b", min: 1 },
    ],
    rubric: ["Each idiom fits the situation exactly.", "I didn't overuse idioms.", "My opinion is clear and supported."],
    model: "In my view, tablets in classrooms are a double-edged sword. They make research faster and lessons far more interactive, but they also make it very easy to get distracted. The elephant in the room is that most students use them for games when the teacher isn't looking. Schools often celebrate how many devices they have bought, but the distraction problem may be just the tip of the iceberg. We need clear rules, and honest conversations, before buying any more screens.",
  },
};

export const B2P_WORDS: NodePractice[] = [academic, connotation, collocations, phrasal, idioms];
