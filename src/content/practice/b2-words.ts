/* B2 Words: six Bloom steps per skill. Written for Bandwidth EFL; for teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, ord, say, tr } from "./helpers";

const A = (n: string, k: "notice" | "dict") => `p/b2w-${n}-${k}.mp3`;

export const B2_WORDS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: A("01", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Over the last ten years, the number of students studying online has risen sharply. It soared during the pandemic and has levelled off since then. Meanwhile, interest in traditional degrees has declined slightly." },
  { file: A("01", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "The price of tickets has risen steadily since 2020." },
  { file: A("02", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "I was absolutely exhausted after the trip, and starving too. The hotel was tiny, but the view was breathtaking. My little brother was terrified of the lift, which made my mum furious." },
  { file: A("02", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "The exam was absolutely terrifying." },
  { file: A("03", "notice"), voice: "3f6pec3wODJsjTqtcNI2", script: "The report concludes that it is highly unlikely the river will recover soon. Scientists are deeply concerned, because pollution poses a serious threat to local wildlife. The campaign aims to raise awareness before the government reaches a final decision." },
  { file: A("03", "dict"), voice: "8DvnqWWA3WWXixOm7zQI", script: "Plastic waste poses a serious threat to the oceans." },
  { file: A("04", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "The police are looking into the incident, but they haven't ruled out an accident. Honestly, the new mall didn't live up to the hype. And I can't put up with the noise much longer." },
  { file: A("04", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "The school promised to look into the complaint." },
  { file: A("05", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "Honestly, I'm on the fence about the new uniform. Some people say it'll save families money, but I'd take that with a pinch of salt. And the twenty new trees the city planted? A drop in the ocean." },
  { file: A("05", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Fame can be a double-edged sword." },
];

const trends: NodePractice = {
  nodeId: "b2.society-ethics-science-careers-describin",
  explain: "At B2 you describe changes and issues precisely. Trend verbs: rise, increase, soar (fast, a lot), fall, drop, decline, plunge (fast, a lot), level off, fluctuate (go up and down), remain stable. Add an adverb: sharply, dramatically, steadily, gradually, slightly. Or use a noun: a sharp rise in…, a steady decline in…, a slight drop in… Issue words: inequality, privacy, consent, sustainability, a breakthrough, a career path.",
  pattern: ["verb + adverb: rose sharply, fell slightly, levelled off", "adjective + noun: a sharp rise in, a gradual decline in, a slight drop in", "Up: rise, increase, soar · Down: fall, drop, decline, plunge · Same: level off, remain stable", "Issues: inequality, privacy, consent, sustainability, breakthrough, career path"],
  steps: [
    [
      heard(A("01", "notice"), "What happened to the number of online students over ten years?", ["It rose sharply.", "It fell slightly.", "It stayed the same."], 0, "'Has risen sharply' = gone up a lot."),
      heard(A("01", "notice"), "What has happened since the pandemic?", ["The number has levelled off.", "It has soared again.", "It has plunged."], 0, "Level off = stop rising or falling and stay stable."),
      ch("Which verb means 'rise very fast, a lot'?", ["soar", "level off", "decline"], 0, "Soar = go up quickly and a lot, like a bird."),
      ch("Which adverb means 'a little'?", ["slightly", "dramatically", "sharply"], 0, "Slightly = a small amount."),
      ch("'Inequality' is about…", ["unfair differences between people or groups", "a scientific discovery", "a kind of job"], 0, "In-equal-ity: not equal."),
    ],
    [
      ctx("Prices fluctuated throughout the year.", "This means prices…", ["went up and down", "only went up", "didn't change"], 0, "Fluctuate = change up and down repeatedly."),
      ch("Which pair has the same meaning?", ["plunge / fall dramatically", "soar / fall slowly", "level off / increase"], 0, "Plunge = a sudden, big fall."),
      ctx("Scientists made a breakthrough in cancer research.", "This means…", ["they made an important discovery", "they failed completely", "they stopped the research"], 0, "A breakthrough = a big step forward."),
      ch("'Consent' means…", ["permission or agreement", "a disagreement", "a payment"], 0, "Consent = saying yes, giving permission."),
      ch("Which is a noun phrase for a trend?", ["a steady increase in", "increase steadily in", "steady increasing"], 0, "a / an + adjective + noun + in."),
    ],
    [
      gap("Unemployment fell", "last year, from 12% to 6%.", ["dramatically", "sharply", "significantly", "considerably"], "Halving is a big change → dramatically / sharply.", "a big change"),
      gap("There has been a", "in the number of young people who vote. (steady + rise)", ["steady rise"], "adjective + noun: a steady rise in."),
      tr("Rewrite using a noun. Start with 'There was'.", "Sales dropped slightly in March.", ["There was a slight drop in sales in March", "In March there was a slight drop in sales"], "dropped slightly → a slight drop in."),
      dict(A("01", "dict"), ["The price of tickets has risen steadily since 2020", "The price of tickets has risen steadily since twenty twenty"]),
      ord("Data privacy has become a major issue for teenagers.", "Subject (data privacy) + has become + a major issue."),
    ],
    [
      fix(["The number of tourists", "raised", "sharply in 2023."], 1, ["rose"], "Raise needs an object (raise prices). Rise has none: the number rose."),
      fix(["There was", "a sharp increase of", "the price of bread."], 1, ["a sharp increase in"], "An increase IN the thing; an increase OF the amount (an increase of 10%)."),
      fix(["Sales", "stayed stably", "for six months."], 1, ["remained stable", "stayed stable"], "Remain / stay + adjective: stable, not stably."),
      fix(["Prices", "dropped down dramatically", "after the crisis."], 1, ["dropped dramatically", "fell dramatically"], "Drop already means 'go down'. No 'down'."),
      fix(["Unemployment", "has descended", "slightly this year."], 1, ["has fallen", "has decreased", "has dropped", "has declined"], "Descend is for physical movement (descend the stairs). Numbers fall or decrease."),
    ],
    [
      ch("Sales go from 100 to 105. Best description?", ["Sales rose slightly.", "Sales soared.", "Sales plunged."], 0, "5% is a small change."),
      ch("Users go from 1,000 to 50,000 in one month. Best description?", ["Users increased a bit.", "The number of users soared.", "Users fluctuated."], 1, "Huge and fast → soar."),
      ch("Formal report. Best sentence?", ["The number of students went up a lot.", "There was a significant increase in the number of students.", "Students went way up."], 1, "Noun phrase + precise adjective sounds formal."),
      ch("Which is the most precise?", ["Things changed.", "Prices rose gradually over five years.", "Prices did stuff."], 1, "Verb + adverb + time = precise."),
      say("There has been a sharp rise in the cost of living.", "Stress: SHARP RISE, COST of LIVing."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe a trend you've noticed in your school, city or country over the last few years (phone use, prices, a sport). Use trend verbs, adverbs and nouns, and say why you think it's happening." },
      { universe: "science", text: "Describe a science or tech trend (AI tools, electric cars, space launches): what has risen, fallen or levelled off, and why." },
      { universe: "futures", text: "Describe how a career has changed in recent years (streamers, nurses, programmers): what has increased or declined, and why." },
      { universe: "screens", text: "Describe a trend in gaming or streaming (a game's player numbers, a platform's popularity): what rose, fell or levelled off, and why." },
    ],
    minWords: 70,
    checks: [
      { label: "Trend verbs (rise, fall, soar, decline, level off, fluctuate…), at least three", pattern: "\\b(ris(e|es|en|ing)|rose|f(a|e)ll(s|en|ing)?|soar\\w*|plung\\w*|declin\\w*|level(l)?ed off|level(l)?ing off|fluctuat\\w*|increas\\w*|decreas\\w*|drop(s|ped|ping)?|remain\\w* stable|grew|grow(s|n|ing)?)\\b", min: 3 },
      { label: "Adverbs of degree (sharply, steadily, slightly…), at least two", pattern: "\\b(sharply|steadily|slightly|dramatically|gradually|significantly|considerably|rapidly|slowly|steeply|marginally)\\b", min: 2 },
    ],
    rubric: ["I described at least three changes.", "I used precise verbs and adverbs, not just 'went up'.", "I gave a reason for the trend."],
    model: "Over the last five years, the number of students at my school who play chess has risen steadily. It soared after a famous series came out, and then it levelled off. At the same time, interest in football has declined slightly, probably because the pitch was closed for repairs.",
  },
};

const loseVery: NodePractice = {
  nodeId: "b2.precision-replacing-very-lose-the-very",
  explain: "'Very + adjective' isn't wrong, but strong speakers and writers choose one precise word instead: very tired → exhausted, very big → enormous, very sure → certain. Careful: extreme adjectives (exhausted, furious, freezing, enormous) can't take 'very'. Use 'absolutely' or 'really' instead: absolutely exhausted, not *very exhausted.",
  pattern: ["very tired → exhausted · very hungry → starving · very cold → freezing", "very angry → furious · very happy → delighted · very scared → terrified", "very big → enormous · very small → tiny · very good → excellent, superb", "Extreme adjectives take 'absolutely', not 'very': absolutely furious"],
  steps: [
    [
      heard(A("02", "notice"), "How did the speaker feel after the trip?", ["Very tired and very hungry", "A bit tired", "Happy and relaxed"], 0, "Exhausted = very tired. Starving = very hungry."),
      heard(A("02", "notice"), "How did the speaker's mum feel?", ["Very angry", "Very scared", "Very happy"], 0, "Furious = very angry."),
      ch("very cold →", ["freezing", "boiling", "chilly"], 0, "Freezing = extremely cold. Chilly is only a bit cold."),
      ch("very small →", ["tiny", "enormous", "huge"], 0, "Tiny = very small."),
      ch("Which is correct?", ["very exhausted", "absolutely exhausted", "very absolutely tired"], 1, "Extreme adjectives take 'absolutely'."),
    ],
    [
      ch("'Delighted' means…", ["very happy", "very sad", "very surprised"], 0, "Delighted = very pleased."),
      ch("Which is stronger?", ["chilly", "freezing"], 1, "Chilly = a little cold. Freezing = extremely cold."),
      ctx("The concert was superb.", "This means the concert was…", ["excellent", "okay", "bad"], 0, "Superb = excellent."),
      ch("Why is 'very enormous' wrong?", ["'Enormous' already means very big; use 'absolutely' or 'really'.", "'Enormous' is a noun.", "It's correct."], 0, "You can't make an extreme word 'more extreme' with very."),
      ch("Which word means 'very important'?", ["crucial", "trivial", "useful"], 0, "Crucial = extremely important. Trivial = not important."),
    ],
    [
      gap("After running 10 km, I was", "(very tired).", ["exhausted", "worn out", "shattered"], "very tired → exhausted."),
      gap("The new stadium is", "(very big).", ["enormous", "huge", "massive", "gigantic", "vast", "immense"], "very big → enormous / huge."),
      gap("She was", "(very angry) when someone deleted her save file.", ["furious", "livid"], "very angry → furious."),
      dict(A("02", "dict"), ["The exam was absolutely terrifying"], "absolutely + extreme adjective."),
      ord("I was absolutely starving after the match.", "absolutely + starving (extreme adjective)."),
    ],
    [
      fix(["I'm", "very starving,", "let's eat!"], 1, ["absolutely starving", "starving", "really starving"], "Starving is already extreme: no 'very'."),
      fix(["The ending", "was very excellent,", "I cried."], 1, ["was excellent", "was superb", "was brilliant", "was outstanding", "was absolutely excellent"], "Excellent is already extreme."),
      fix(["It's", "very freezing", "in here; close the window."], 1, ["absolutely freezing", "freezing", "really freezing"], "freezing → absolutely freezing."),
      fix(["My cat", "is very tiny,", "she weighs two kilos."], 1, ["is tiny", "is really tiny", "is very small"], "Tiny already means very small."),
      fix(["We were", "very terrified", "during the storm."], 1, ["terrified", "absolutely terrified", "really terrified"], "Terrified is extreme: no 'very'."),
    ],
    [
      ch("Formal email describing a serious problem. Best choice?", ["The delay is very bad.", "The delay is unacceptable.", "The delay is gross."], 1, "'Unacceptable' is precise and formal. 'Gross' is slang for disgusting."),
      ch("A friend shows you a sunset photo.", ["It's very beautiful.", "It's breathtaking!", "It's pretty okay."], 1, "Breathtaking = so beautiful it takes your breath away."),
      ch("Which sounds most natural?", ["I'm absolutely furious.", "I'm very furious.", "I'm absolutely angry."], 0, "absolutely + extreme adjective. 'Absolutely angry' sounds odd."),
      ch("Job interview: describing your team.", ["My team was very very good.", "My team was outstanding.", "My team was a big good."], 1, "One precise word beats 'very very'."),
      say("The view from the top was absolutely breathtaking.", "Stress: ABsolutely BREATHtaking."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short review of a trip, meal, concert or match. You can't use the word 'very' at all! Use at least five precise or extreme adjectives." },
      { universe: "screens", text: "Review a game or series. No 'very' allowed: use at least five precise adjectives (gripping, hilarious, stunning…)." },
      { universe: "arts", text: "Describe an artwork, film or performance without 'very': use at least five precise adjectives." },
      { universe: "words", text: "Describe a book you loved or hated without 'very': use at least five precise adjectives." },
    ],
    minWords: 60,
    checks: [
      { label: "No 'very' anywhere", pattern: "^(?![\\s\\S]*\\bvery\\b)", min: 1 },
      { label: "Precise or extreme adjectives (at least five)", pattern: "\\b(exhausted|exhausting|starving|freezing|boiling|furious|delighted|terrified|terrifying|enormous|huge|tiny|excellent|superb|brilliant|outstanding|awful|terrible|dreadful|stunning|breathtaking|gorgeous|hilarious|gripping|fascinating|thrilling|unacceptable|crucial|essential|filthy|spotless|ancient|exhilarating|astonishing|incredible|fantastic|magnificent|horrendous|disgusting|delicious|packed|overjoyed|devastated|ecstatic|petrified|gigantic|massive|immense|vast|flawless|unforgettable|spectacular|deafening|soaked|drenched|thrilled|boring|dull|tedious|heartbreaking|moving|unbearable|addictive|addicting)\\b", min: 5 },
    ],
    rubric: ["I didn't use 'very' once.", "I used at least five precise adjectives.", "I used 'absolutely' only with extreme adjectives."],
    model: "The trip to Tayrona was unforgettable. The beach was stunning and the water was crystal clear, but the walk there was exhausting and the sun was boiling. By lunchtime I was absolutely starving, and the fish was delicious.",
  },
};

const colloc: NodePractice = {
  nodeId: "b2.adverb-adjective-verb-noun",
  explain: "Collocations are words that naturally go together. Fluent speakers say 'highly unlikely', not 'strongly unlikely', and 'pose a threat', not 'make a threat' when they mean danger. Learn them as chunks. Adverb + adjective: highly unlikely, deeply concerned, bitterly disappointed, fully aware, widely known. Verb + noun: pose a threat, draw a conclusion, raise awareness, meet a deadline, reach an agreement, take responsibility.",
  pattern: ["highly + likely / unlikely / recommended / effective", "deeply + concerned / moved · bitterly + disappointed", "fully + aware · widely + known / used / believed", "pose a threat · draw a conclusion · raise awareness · meet a deadline · reach an agreement · take responsibility"],
  steps: [
    [
      heard(A("03", "notice"), "How do the scientists feel?", ["Deeply concerned", "Bitterly disappointed", "Fully aware but calm"], 0, "'Scientists are deeply concerned.'"),
      heard(A("03", "notice"), "What does the campaign want to do?", ["Raise awareness", "Draw a conclusion", "Meet a deadline"], 0, "'The campaign aims to raise awareness.'"),
      ch("Which collocation is natural?", ["highly unlikely", "strongly unlikely", "deeply unlikely"], 0, "highly + likely / unlikely."),
      ch("Which verb goes with 'a deadline'?", ["meet", "make", "do"], 0, "meet a deadline = finish on time."),
      ch("Which verb goes with 'a threat' (= be dangerous)?", ["pose", "put", "give"], 0, "pose a threat."),
    ],
    [
      ctx("We drew the conclusion that the plan wouldn't work.", "This means…", ["we decided, from the evidence, that it wouldn't work", "we painted a picture", "we ended the plan early"], 0, "Draw a conclusion = decide something from evidence."),
      ctx("I'm fully aware of the risks.", "This means…", ["I know the risks completely.", "I'm a little worried.", "I don't know the risks."], 0, "Fully aware = completely conscious of something."),
      ch("'Bitterly disappointed' means…", ["extremely disappointed", "slightly disappointed", "disappointed about food"], 0, "Bitterly = very strongly (for negative feelings)."),
      ch("Which is NOT a natural collocation?", ["make a decision", "do a decision", "reach a decision"], 1, "Make / reach a decision. Never 'do'."),
      ch("'Widely known' means…", ["known by many people", "known only by experts", "not known"], 0, "Widely = by many people, in many places."),
    ],
    [
      gap("This film is", "recommended for anyone who loves horror.", ["highly"], "highly recommended."),
      gap("The team worked all weekend to", "the deadline.", ["meet"], "meet a deadline."),
      gap("After hours of talks, the two sides finally", "an agreement.", ["reached", "came to"], "reach an agreement."),
      dict(A("03", "dict"), ["Plastic waste poses a serious threat to the oceans"]),
      gap("The singer used her concert to", "awareness about mental health.", ["raise"], "raise awareness (about / of)."),
    ],
    [
      fix(["It is", "strongly unlikely", "that it will rain."], 1, ["highly unlikely", "very unlikely", "extremely unlikely"], "highly unlikely."),
      fix(["You need to", "make responsibility", "for your actions."], 1, ["take responsibility"], "take responsibility for."),
      fix(["We can", "take a conclusion", "from these results."], 1, ["draw a conclusion", "reach a conclusion", "come to a conclusion"], "draw / reach a conclusion."),
      fix(["I'm", "deeply aware", "of the problem."], 1, ["fully aware", "well aware"], "fully / well aware. Deeply goes with feelings (deeply concerned)."),
      fix(["The fans were", "bitterly disappointing", "after the loss."], 1, ["bitterly disappointed"], "People feel disappointed (-ed). A result is disappointing (-ing)."),
    ],
    [
      ch("Formal essay. Best sentence?", ["Climate change is a really big danger.", "Climate change poses a serious threat to coastal cities.", "Climate change makes a big threat."], 1, "pose a threat = formal and precise."),
      ch("Texting a friend. Most natural?", ["It is highly unlikely that I shall attend.", "Nah, I probably won't make it.", "I am fully aware I cannot go."], 1, "Formal collocations sound strange in a casual text."),
      ch("Which sounds most fluent?", ["The method was effective a lot.", "The method proved highly effective.", "The method was strongly effective."], 1, "highly effective."),
      ch("Reporting a decision formally.", ["They did an agreement.", "They reached an agreement after three days of talks.", "They got agree."], 1, "reach an agreement."),
      say("It's highly unlikely that the match will be cancelled.", "Stress: HIGHly unLIKEly."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short formal paragraph about a problem in your community (rubbish, traffic, noise). Use at least four collocations from this skill." },
      { universe: "science", text: "Write a short formal paragraph about an environmental or health problem, using at least four collocations (poses a threat, raise awareness, highly likely…)." },
      { universe: "futures", text: "Write a short paragraph for a job or scholarship application about how you work, using collocations (meet deadlines, take responsibility, fully aware, highly motivated…)." },
    ],
    minWords: 60,
    checks: [
      { label: "Adverb + adjective (highly, deeply, fully, widely, bitterly…), at least two", pattern: "\\b(highly|deeply|fully|widely|bitterly|strongly|seriously|utterly|entirely|well) (un)?(likely|unlikely|recommended|effective|concerned|moved|aware|known|used|believed|disappointed|motivated|qualified|respected|regarded|rooted|committed|opposed|damaged|ill|injured|different|responsible|informed)\\b", min: 2 },
      { label: "Verb + noun (pose a threat, raise awareness, meet a deadline…), at least two", pattern: "\\b(pos(e|es|ed|ing) (a |an )?(\\w+ )?(threat|risk|challenge|problem|question)|rais(e|es|ed|ing) awareness|(meet|meets|met|meeting) (a |the |our |my |their |every )?deadlines?|(draw|draws|drew|drawn|drawing|reach|reaches|reached|reaching|come to|came to) (a |the |an )?(\\w+ )?(conclusion|agreement|decision)|(take|takes|took|taken|taking) (full )?responsibility|(make|makes|made|making) (a |the )?(\\w+ )?decision)\\b", min: 2 },
    ],
    rubric: ["I used at least four collocations.", "My paragraph sounds formal.", "I explained the problem and a possible solution."],
    model: "Litter in our neighbourhood poses a serious threat to local wildlife, and many residents are deeply concerned. It is highly unlikely that the situation will improve on its own, so the council needs to take responsibility and raise awareness through a clean-up campaign.",
  },
};

const phrasal: NodePractice = {
  nodeId: "b2.abstract-phrasal-verbs-for-argument",
  explain: "In discussions, many phrasal verbs have abstract meanings. Bring about = cause a change. Put up with = tolerate. Live up to = be as good as expected. Look into = investigate. Rule out = exclude a possibility. Stand out = be easy to notice, or better than others. Account for = explain, or form a part of. In very formal writing, a one-word verb often sounds better: bring about → cause, look into → investigate.",
  pattern: ["bring about = cause (a change)", "put up with = tolerate", "live up to = be as good as expected", "look into = investigate", "rule out = exclude a possibility", "stand out = be noticeable / better", "account for = explain; form a part of"],
  steps: [
    [
      heard(A("04", "notice"), "What are the police doing?", ["Investigating the incident", "Ignoring the incident", "Closing the case"], 0, "Look into = investigate."),
      heard(A("04", "notice"), "What does the speaker think of the new mall?", ["It wasn't as good as people said.", "It was better than expected.", "It was too small."], 0, "Didn't live up to the hype = wasn't as good as people said."),
      ch("'Rule out' means…", ["exclude a possibility", "make a rule", "go outside"], 0, "They haven't ruled out an accident = an accident is still possible."),
      ch("'Put up with' means…", ["tolerate", "build", "put something on a shelf"], 0, "I can't put up with the noise = I can't tolerate it."),
      ch("Which phrasal verb means 'cause a change'?", ["bring about", "stand out", "look into"], 0, "bring about change."),
    ],
    [
      ctx("Her design really stood out from the others.", "This means her design…", ["was noticeably different or better", "was outside the room", "was worse"], 0, "Stand out = be easy to notice."),
      ctx("Teenagers account for 40% of the app's users.", "This means teenagers…", ["make up 40% of users", "explain the app", "pay 40%"], 0, "Account for = form a part of."),
      ctx("How do you account for the drop in sales?", "This asks…", ["How do you explain it?", "How do you count it?", "How do you fix it?"], 0, "Account for = explain."),
      ch("The most formal equivalent of 'look into'?", ["investigate", "see", "watch"], 0, "look into → investigate."),
      ch("'The film lived up to my expectations' means…", ["it was as good as I expected", "it was worse than I expected", "I didn't expect anything"], 0, "Live up to = meet the standard expected."),
    ],
    [
      gap("The new law could", "real change for workers.", ["bring about"], "bring about change."),
      gap("I don't know how you", "with his jokes every day!", ["put up"], "put up with."),
      gap("Doctors have", "out a serious illness, so it's probably just stress.", ["ruled"], "rule out a possibility."),
      dict(A("04", "dict"), ["The school promised to look into the complaint"]),
      tr("Rewrite with a phrasal verb from this skill.", "Social media causes many changes in how we communicate.", ["Social media brings about many changes in how we communicate"], "cause → bring about."),
    ],
    [
      fix(["I can't", "put up", "his attitude anymore."], 1, ["put up with"], "put up WITH: the preposition is part of the verb."),
      fix(["The sequel", "didn't live up", "the original."], 1, ["didn't live up to", "did not live up to"], "live up TO."),
      fix(["Investigators", "are looking in", "the cause of the fire."], 1, ["are looking into"], "look into = investigate. Look in = visit briefly."),
      fix(["Her bright jacket", "stood up", "in the crowd."], 1, ["stood out"], "Stand up = get on your feet. Stand out = be noticeable."),
      fix(["Tourism", "accounts to", "half of the city's income."], 1, ["accounts for"], "account FOR."),
    ],
    [
      ch("Very formal report. Best verb?", ["The committee will look into the matter.", "The committee will investigate the matter.", "The committee will check out the matter."], 1, "In very formal writing, the one-word verb sounds best. 'Look into' is fine in neutral English."),
      ch("In a debate, you won't consider a possibility.", ["I'd rule that out completely.", "I'd put that up.", "I'd stand that out."], 0, "rule something out."),
      ch("Which sentence argues best?", ["Phones are bad.", "Banning phones won't bring about better grades on its own.", "Phones bring about."], 1, "A precise claim with a phrasal verb and a condition."),
      ch("Which is most natural in conversation?", ["I can't tolerate this heat.", "I can't put up with this heat."], 1, "Phrasal verbs are very common in everyday speech."),
      say("I don't think the new rules will bring about any real change.", "Link: bring-a-bout."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write your opinion for a class debate: should schools ban phones? Use at least four phrasal verbs from this skill (bring about, put up with, live up to, look into, rule out, stand out, account for)." },
      { universe: "screens", text: "Write a short post arguing whether a hyped game or series lived up to expectations. Use at least four phrasal verbs from this skill." },
      { universe: "science", text: "Write a short argument about a new technology: what it could bring about, what scientists should look into, what we can't rule out. Use at least four phrasal verbs from this skill." },
    ],
    minWords: 70,
    checks: [
      { label: "Phrasal verbs from this skill (at least four)", pattern: "\\b(bring(s|ing)? about|brought about|put(s|ting)? up with|live(s|d)? up to|living up to|look(s|ed|ing)? into|rul(e|es|ed|ing) (\\w+ )?out|stand(s|ing)? out|stood out|account(s|ed|ing)? for)\\b", min: 4 },
    ],
    rubric: ["I used at least four phrasal verbs correctly.", "I gave reasons and an example.", "My opinion is clear."],
    model: "Banning phones won't bring about better grades on its own. Teachers already put up with a lot, but a total ban doesn't live up to its promise in most studies. Schools should look into smarter rules instead, and we shouldn't rule out using phones for learning.",
  },
};

const idioms: NodePractice = {
  nodeId: "b2.idioms-for-opinion-and-debate",
  explain: "Idioms make opinions vivid. On the fence = undecided. A drop in the ocean = too small to make a difference. The tip of the iceberg = a small, visible part of a much bigger problem. Take it with a pinch of salt = don't completely believe it. Play devil's advocate = argue the other side to test an idea. A double-edged sword = something with good and bad sides. Use them in conversation, debates and informal writing, not in formal essays.",
  pattern: ["on the fence = undecided", "a drop in the ocean = too small to matter", "the tip of the iceberg = a small part of a bigger problem", "take it with a pinch of salt = don't fully believe it", "play devil's advocate = argue the other side", "a double-edged sword = good and bad at the same time"],
  steps: [
    [
      heard(A("05", "notice"), "What's the speaker's opinion of the new uniform?", ["Undecided", "Strongly for it", "Strongly against it"], 0, "On the fence = undecided."),
      heard(A("05", "notice"), "What does the speaker think about the twenty new trees?", ["Not nearly enough", "A great solution", "Too many"], 0, "A drop in the ocean = far too small to make a difference."),
      ch("'On the fence' means…", ["undecided", "angry", "outside"], 0, "Sitting on the fence: not on either side."),
      ch("'Take it with a pinch of salt' means…", ["don't completely believe it", "add flavour", "agree completely"], 0, "Be a little sceptical."),
      ch("'The tip of the iceberg' means…", ["a small part of a much bigger problem", "the best part", "the end of a problem"], 0, "Most of an iceberg is hidden under water."),
    ],
    [
      ctx("Social media is a double-edged sword.", "This means social media…", ["has both good and bad effects", "is very sharp", "is only dangerous"], 0, "A sword that cuts both ways."),
      ctx("Let me play devil's advocate for a moment.", "The speaker will…", ["argue the other side to test the idea", "agree with everyone", "tell a scary story"], 0, "They might not believe it; they're testing the argument."),
      ch("'Donating one euro to pay off the national debt is…'", ["a drop in the ocean", "on the fence", "a double-edged sword"], 0, "Far too small to matter."),
      ch("Where are idioms like these most appropriate?", ["Conversations, debates and informal writing", "Formal academic essays", "Legal contracts"], 0, "They sound too casual for formal writing."),
      ctx("The cheating scandal is just the tip of the iceberg.", "This suggests…", ["there are probably many more problems", "it's the most serious part", "it's over now"], 0, "What we see is only a small part."),
    ],
    [
      gap("I can't decide; I'm still on the", ".", ["fence"], "on the fence."),
      gap("Reviews on that site are often fake, so take them with a pinch of", ".", ["salt"], "a pinch of salt."),
      gap("Recycling one bottle is a drop in the", ", but it's a start.", ["ocean"], "a drop in the ocean."),
      dict(A("05", "dict"), ["Fame can be a double-edged sword", "Fame can be a double edged sword"]),
      ord("I'm going to play devil's advocate here.", "play devil's advocate (no 'the')."),
    ],
    [
      fix(["I'm", "on the wall", "about studying abroad."], 1, ["on the fence"], "on the fence."),
      fix(["Take his advice", "with a grain of sugar,", "he exaggerates."], 1, ["with a pinch of salt", "with a grain of salt"], "a pinch (UK) / grain (US) of salt."),
      fix(["These cases", "are only the top of the iceberg;", "there are many more."], 1, ["are only the tip of the iceberg"], "the TIP of the iceberg."),
      fix(["Our donation", "was a drop in the sea", "compared to what's needed."], 1, ["was a drop in the ocean"], "a drop in the OCEAN."),
      fix(["Let me", "play the devil's lawyer", "for a second."], 1, ["play devil's advocate", "play the devil's advocate"], "play devil's advocate."),
    ],
    [
      ch("Formal university essay. Best sentence?", ["Recycling is just a drop in the ocean, lol.", "Individual recycling has a limited impact on global emissions.", "Recycling is the tip of the iceberg of stuff."], 1, "Formal essays need plain, precise language, not idioms."),
      ch("In a class debate, you can't decide.", ["Honestly, I'm on the fence about this.", "I am the fence.", "I'm sitting on a fence about it."], 0, "Natural and correct."),
      ch("A friend believes a celebrity rumour. Best advice?", ["Take it with a pinch of salt.", "Take it with a drop in the ocean.", "Put it on the fence."], 0, "Don't believe it completely."),
      ch("AI in schools helps learning but makes cheating easier. Best idiom?", ["a double-edged sword", "the tip of the iceberg", "a pinch of salt"], 0, "Good and bad at once."),
      say("To be honest, I'm still on the fence about it.", "Stress: STILL on the FENCE."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short debate post on a topic you care about (school uniforms, AI homework help, a four-day school week). Use at least three idioms from this skill." },
      { universe: "screens", text: "Write a short post about whether social media or gaming is good for teenagers. Use at least three idioms from this skill." },
      { universe: "past", text: "Write a short opinion about a historical decision people still argue about. Use at least three idioms from this skill." },
    ],
    minWords: 60,
    checks: [
      { label: "Idioms from this skill (at least three)", pattern: "\\b(on the fence|drop in the ocean|tip of the iceberg|pinch of salt|grain of salt|devil'?s advocate|double-edged sword|double edged sword)\\b", min: 3 },
    ],
    rubric: ["I used at least three idioms correctly.", "My opinion and reasons are clear.", "It sounds like a debate post, not a formal essay."],
    model: "AI homework help is a double-edged sword. It explains things brilliantly, but students who copy answers are just the tip of the iceberg. I'd take claims that it 'ruins learning' with a pinch of salt, though. Honestly, I'm still on the fence.",
  },
};

export const B2_WORDS: NodePractice[] = [trends, loseVery, colloc, phrasal, idioms];
