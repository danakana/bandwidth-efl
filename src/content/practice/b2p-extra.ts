/* B2+ added skills (map expanded to 24). Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, say, tr } from "./helpers";

const X = (n: string, k: "notice" | "dict") => `p/b2px-${n}-${k}.mp3`;

export const B2P_EXTRA_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "I was going to call you last night, honestly. I was just about to pick up the phone when my brother came in with some news. He was leaving for Canada the next week, and he would be away for two years." },
  { file: X("01", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "I was about to leave when it started to rain." },
  { file: X("02", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "My brother loves football, whereas I prefer music. Much as I enjoy a good match, I'd rather be at a concert. The tickets were expensive. Nonetheless, we went, and it was a short, albeit unforgettable, night." },
  { file: X("02", "dict"), voice: "9hb1f7xQcMLB90qbYSY3", script: "It was expensive. Nonetheless, we bought it." },
  { file: X("03", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "She's a well-known, hard-working scientist with a long-term plan. Her research is time-consuming, and some people misunderstand it, but she's never been overconfident. She simply rewrites the plan when she needs to." },
  { file: X("03", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "It was a time-consuming but well-paid job." },
  { file: X("04", "notice"), voice: "3f6pec3wODJsjTqtcNI2", script: "I love photography. I'm not a professional photographer, but my photographs are getting better, and my teacher says I have a photographic memory. Economy, economic, economical. Watch the stress move." },
  { file: X("04", "dict"), voice: "8DvnqWWA3WWXixOm7zQI", script: "She studies economics at university." },
  { file: X("05", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "My sister is interested in medicine, and she's really good at chemistry. Everything depends on her exam results. She's married to a doctor, so she's used to long hours, and she's responsible for organising the whole family." },
  { file: X("05", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "It depends on the weather." },
];

const futurePast: NodePractice = {
  nodeId: "b2p.future-in-the-past",
  explain: "Sometimes we tell a story about the past and talk about what was still in the future at that moment. Was/were going to: a plan, often one that didn't happen (I was going to call you, but…). Was/were about to: something very close in time (She was about to leave when…). Would: the future seen from the past (He said he would be away for two years). Past continuous for an arrangement (He was leaving the next week). These are essential for storytelling and for apologising for plans that changed.",
  pattern: ["was / were going to + verb: a past plan (often not done)", "was / were about to + verb: on the point of doing something", "would + verb: the future seen from the past (He said he would…)", "was / were + -ing: a past arrangement (She was flying the next day)"],
  steps: [
    [
      heard(X("01", "notice"), "Did the speaker call last night?", ["No, they planned to but didn't.", "Yes, for an hour.", "We don't know."], 0, "'I was going to call you' = plan that didn't happen."),
      heard(X("01", "notice"), "What interrupted them?", ["Their brother came in with news.", "The phone broke.", "They fell asleep."], 0, "'when my brother came in with some news'."),
      heard(X("01", "notice"), "How long would the brother be away?", ["Two years", "Two weeks", "One year"], 0, "'he would be away for two years'."),
      ch("'I was about to leave when you called.' This means…", ["I was on the point of leaving.", "I had already left.", "I didn't want to leave."], 0, "about to = very soon."),
      ch("'He said he would help.' 'Would' shows…", ["the future from a past point of view", "a habit", "a polite request"], 0, "will → would in reported speech and stories."),
    ],
    [
      ch("Which suggests the plan didn't happen?", ["We were going to visit, but the flight was cancelled.", "We visited last year.", "We will visit next year."], 0, "was going to + but."),
      ch("Which is closest in time to the event?", ["I was about to", "I was going to", "I would"], 0, "about to = immediately."),
      ctx("Your friend texts: 'Sorry, I was going to reply, but my phone died.'", "Your friend is…", ["apologising for a plan that didn't happen", "promising to reply tomorrow", "complaining about you"], 0, "A classic polite excuse."),
      ch("'They were moving to Cali the next month.' This describes…", ["an arrangement made in the past", "a habit", "something that happened every month"], 0, "Past continuous for a past arrangement."),
      ch("Why is this useful in storytelling?", ["It builds suspense: what was about to happen?", "It replaces the past simple", "It's only for formal writing"], 0, "She was about to open the door when…"),
    ],
    [
      gap("I", "going to text you, but I forgot.", ["was"], "was going to."),
      gap("We were just", "to start dinner when the lights went out.", ["about"], "about to."),
      tr("Rewrite with the words given.", "He said, 'I will be late.'", ["He said he would be late", "He said that he would be late"], "will → would.", "would"),
      dict(X("01", "dict"), ["I was about to leave when it started to rain"]),
      say("I was going to call you, but my brother came in.", "Stress GOing to and BUT."),
    ],
    [
      fix(["I", "was going to call", "you yesterday, so I did."], 2, ["you yesterday, but I didn't.", "you yesterday, but I forgot."], "was going to usually means the plan didn't happen."),
      fix(["She", "was about leaving", "when the phone rang."], 1, ["was about to leave"], "about to + base form."),
      fix(["He promised", "he will help", "us the next day."], 1, ["he would help"], "Future from a past point of view: would."),
      ch("Which is wrong?", ["I was about to leave tomorrow.", "I was about to leave when you arrived.", "I was going to leave tomorrow, but I changed my plan."], 0, "about to = immediately, not tomorrow."),
      ch("Spanish 'Iba a llamarte' is best translated as…", ["I was going to call you.", "I went to call you.", "I would call you yesterday."], 0, "iba a = was going to."),
    ],
    [
      ch("You forgot your friend's birthday. Best message?", ["I was going to send you something, and then the week got crazy. Sorry!", "I didn't remember.", "I will send it yesterday."], 0, "Honest and natural."),
      ch("Which opening is most dramatic for a story?", ["I was just about to give up when I saw the light.", "I gave up. Then I saw a light.", "There was a light."], 0, "about to + when = suspense."),
      ch("In a news report, which is best?", ["The minister said the new law would take effect in March.", "The minister said the law takes effect in March, kind of.", "The minister was about to say the law."], 0, "Clear reported future."),
      ch("When might 'I was going to…' sound like an excuse?", ["When you use it often for things you never do", "Never", "Only in writing"], 0, "Use it honestly."),
      say("She was about to leave when it started to rain.", "Stress aBOUT to LEAVE and RAIN."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short story (70 words or more) about a day when your plans changed. Use was/were going to, was/were about to and would at least once each." },
      { universe: "screens", text: "Write a short story (70 words or more) about a game, match or stream where everything changed at the last moment. Use was going to, was about to and would." },
      { universe: "past", text: "Write about a historical moment (70 words or more) from the point of view of someone living then, using was going to, was about to and would." },
    ],
    minWords: 70,
    checks: [
      { label: "was / were going to", pattern: "\\b(was|were) going to\\b", min: 1 },
      { label: "was / were about to", pattern: "\\b(was|were) (just )?about to\\b", min: 1 },
      { label: "would (future from the past)", pattern: "\\bwould\\b", min: 1 },
    ],
    rubric: ["My story has a clear moment when the plan changed.", "'About to' is for something that was going to happen immediately.", "I kept the story in the past."],
    model: "Last Saturday I was going to spend the whole day studying for my maths test. I had a plan: I would finish two chapters before lunch. I was just about to open my book when my cousin called. She was leaving for Medellín the next morning and wanted to say goodbye. Of course, I went to see her, and we talked for hours. The maths would have to wait until Sunday.",
  },
};

const contrast: NodePractice = {
  nodeId: "b2p.contrast-and-concession-linkers",
  explain: "At B2+ you need more than 'but' and 'although'. Whereas / while compare two different things (I like jazz, whereas my sister prefers rap). Nonetheless / nevertheless start a new sentence: something is true despite what came before. Albeit (formal) = although, followed by an adjective or phrase: a short, albeit useful, meeting. Much as + clause = although very much: Much as I like her, I can't agree. Even though is stronger than although. These help you build balanced, grown-up arguments.",
  pattern: ["whereas / while: compare two facts (A…, whereas B…)", "Nonetheless / Nevertheless,: new sentence, despite what came before", "albeit + adjective/phrase: a small, albeit important, change", "Much as + clause,: Much as I love it, …"],
  steps: [
    [
      heard(X("02", "notice"), "What does the speaker prefer?", ["Music", "Football", "Both equally"], 0, "'whereas I prefer music'."),
      heard(X("02", "notice"), "Did they go even though the tickets were expensive?", ["Yes", "No", "They don't say"], 0, "'Nonetheless, we went'."),
      heard(X("02", "notice"), "How does the speaker describe the night?", ["Short but unforgettable", "Long and boring", "Expensive and disappointing"], 0, "'short, albeit unforgettable'."),
      ch("'Whereas' is used to…", ["compare two different facts", "give a reason", "show time"], 0, "A, whereas B."),
      ch("'Much as I like her, I can't agree.' Meaning?", ["Although I like her a lot, I can't agree.", "Because I like her, I agree.", "I like her very much and agree."], 0, "Much as = although (strongly)."),
    ],
    [
      ch("Where does 'Nonetheless' usually go?", ["At the start of a new sentence, with a comma", "In the middle of a noun phrase", "At the end of a question"], 0, "It was hard. Nonetheless, we finished."),
      ch("'Albeit' is…", ["formal and followed by an adjective or short phrase", "informal slang", "a verb"], 0, "a slow, albeit steady, improvement."),
      ch("Which is strongest?", ["Even though it was raining, we played.", "Although it was raining, we played.", "It was raining, but we played."], 0, "even though adds emphasis."),
      ctx("A report says: 'Sales rose in the north, while they fell in the south.'", "'While' here means…", ["whereas (contrast)", "during", "because"], 0, "while for contrast."),
      ch("Why use varied linkers in essays?", ["They show precise relationships and sound more mature.", "They make sentences longer for no reason.", "Teachers like big words."], 0, "Precision."),
    ],
    [
      gap("I enjoy maths,", "my brother hates it.", ["whereas", "while"], "Contrast two facts."),
      gap("The plan was risky.", ", it worked.", ["Nonetheless", "Nevertheless"], "New sentence + comma."),
      gap("It was a small,", "important, step forward.", ["albeit"], "albeit + adjective."),
      dict(X("02", "dict"), ["It was expensive. Nonetheless, we bought it", "It was expensive. Nonetheless we bought it", "It was expensive, nonetheless we bought it"]),
      tr("Rewrite with the words given.", "Although I love this city, I can't afford to live here.", ["Much as I love this city, I can't afford to live here"], "Much as + clause.", "Much as"),
    ],
    [
      fix(["The test was hard,", "nonetheless", "we passed."], 1, ["but", "yet"], "Nonetheless normally starts a new sentence; use 'but' to join."),
      fix(["She is quiet,", "whereas her sister", "is quiet too."], 2, ["is very talkative.", "is talkative.", "is loud."], "Whereas needs a real contrast."),
      fix(["It was a", "albeit short", "meeting."], 1, ["short, albeit useful,", "short, albeit productive,"], "albeit links two ideas: short, albeit useful."),
      ch("Which is wrong?", ["Much as I like football I hate it.", "Much as I like football, I don't watch every match.", "Much as I admire him, I disagree."], 0, "The second part must contrast logically."),
      ch("Which is wrong?", ["Despite it was cold, we swam.", "Even though it was cold, we swam.", "It was cold. Nevertheless, we swam."], 0, "despite + noun; even though + clause."),
    ],
    [
      ch("Best sentence for a balanced essay?", ["Online classes are flexible, whereas classroom lessons offer more interaction.", "Online classes are good and bad and stuff.", "Online classes, albeit, flexible."], 0, "Clear comparison."),
      ch("Best for casual chat?", ["I like it, but it's pricey.", "Much as I appreciate it, it is, albeit, pricey.", "Nonetheless pricey."], 0, "Don't over-formalise chat."),
      ch("Which ending is most persuasive? 'Change is difficult. …'", ["Nonetheless, it is necessary.", "But whatever.", "Albeit."], 0, "Concede, then insist."),
      ch("How many advanced linkers per paragraph?", ["One or two, where they fit naturally", "One in every sentence", "None"], 0, "Variety without overload."),
      say("Much as I enjoy a good match, I'd rather be at a concert.", "Pause after MATCH."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a balanced paragraph (80 words or more) comparing two ways of studying (for example, alone and in a group). Use whereas or while, Nonetheless or Nevertheless, and one of albeit or Much as." },
      { universe: "futures", text: "Write a balanced paragraph (80 words or more) comparing life in a big city and a small town. Use whereas/while, Nonetheless/Nevertheless, and albeit or Much as." },
    ],
    minWords: 80,
    checks: [
      { label: "whereas or while (contrast)", pattern: "\\b(whereas|while)\\b", min: 1 },
      { label: "Nonetheless / Nevertheless", pattern: "\\b(nonetheless|nevertheless)\\b", min: 1 },
      { label: "albeit or Much as", pattern: "\\b(albeit|much as)\\b", min: 1 },
    ],
    rubric: ["Each linker shows the right relationship.", "My paragraph presents both sides fairly.", "I finished with my own view."],
    model: "Studying alone allows you to work at your own pace, whereas studying in a group means you can ask questions and share ideas. Group sessions can be distracting, especially when friends start chatting. Nonetheless, explaining a topic to someone else is one of the best ways to understand it. Much as I enjoy the quiet of my room, I learn more in a small group, albeit more slowly. For me, the best approach is a sensible mix of both styles.",
  },
};

const compounds: NodePractice = {
  nodeId: "b2p.compound-adjectives-and-prefixes",
  explain: "Compound adjectives join words with a hyphen to describe something precisely: well-known, long-term, time-consuming, hard-working, short-sighted, open-minded, five-minute (a five-minute walk: no -s!). Prefixes change meaning: over- (too much: overconfident), under- (not enough: underpaid), mis- (wrongly: misunderstand), re- (again: rewrite), co- (together: co-author). They make your writing more concise: 'a job that takes a lot of time' becomes 'a time-consuming job'.",
  pattern: ["well-known · long-term · hard-working · time-consuming · open-minded", "number + noun (no -s): a five-minute walk · a two-hour film", "over- (too much) · under- (not enough) · mis- (wrongly) · re- (again)", "Before a noun, use a hyphen: a well-known singer · The singer is well known."],
  steps: [
    [
      heard(X("03", "notice"), "How is the scientist described?", ["Well-known and hard-working", "Lazy and unknown", "Overconfident"], 0, "'a well-known, hard-working scientist'."),
      heard(X("03", "notice"), "What kind of plan does she have?", ["A long-term plan", "A short-term plan", "No plan"], 0, "'a long-term plan'."),
      heard(X("03", "notice"), "What does she do when she needs to?", ["Rewrites the plan", "Gives up", "Misunderstands it"], 0, "re- = again."),
      ch("'Time-consuming' means…", ["taking a lot of time", "saving time", "on time"], 0, "consume = use up."),
      ch("'Misunderstand' means…", ["understand wrongly", "understand again", "understand too much"], 0, "mis- = wrongly."),
    ],
    [
      ch("Which is correct?", ["a ten-minute break", "a ten-minutes break", "a ten minutes' break"], 0, "Number + singular noun as an adjective."),
      ch("'Overpaid' means…", ["paid too much", "paid again", "not paid enough"], 0, "over- = too much."),
      ch("'Open-minded' describes someone who…", ["is willing to consider new ideas", "always leaves doors open", "is very intelligent"], 0, "Positive personality adjective."),
      ctx("A coach says: 'We need a long-term strategy, not a quick fix.'", "'Long-term' means…", ["lasting a long time into the future", "very tiring", "about long journeys"], 0, "long-term ↔ short-term."),
      ch("Why use compound adjectives?", ["They make descriptions concise and precise.", "They're only for poetry.", "They're always informal."], 0, "a job that takes a lot of time → a time-consuming job."),
    ],
    [
      gap("It's a", "-known fact that sleep helps memory.", ["well"], "well-known."),
      gap("We had a", "-hour drive to the coast.", ["three", "two", "four", "five", "six"], "number + hour (no -s)."),
      gap("I think I", "-estimated how difficult the exam would be.", ["under"], "under- = not enough."),
      dict(X("03", "dict"), ["It was a time-consuming but well-paid job", "It was a time consuming but well paid job"]),
      tr("Rewrite with a compound adjective and the word given.", "She is a student who works very hard.", ["She is a hard-working student", "She's a hard-working student", "She is a hard working student"], "a student who works hard → a hard-working student.", "hard"),
    ],
    [
      fix(["We went for", "a two-hours walk", "along the river."], 1, ["a two-hour walk"], "No -s: a two-hour walk."),
      fix(["The teacher", "missunderstood", "my question."], 1, ["misunderstood"], "mis- + understood (one s)."),
      fix(["He's very", "open-mind", "about new ideas."], 1, ["open-minded"], "-ed: open-minded, narrow-minded."),
      ch("Which is wrong?", ["The film is a well-known.", "It's a well-known film.", "The film is well known."], 0, "well-known is an adjective; it needs a noun or comes after 'be'."),
      ch("Which is the best word for 'paid too little'?", ["underpaid", "overpaid", "repaid"], 0, "under- = not enough."),
    ],
    [
      ch("Best for a job advert?", ["We're looking for a hard-working, open-minded team player.", "We want someone who works a lot and thinks of things.", "We want a working-hard person."], 0, "Concise and positive."),
      ch("Best for a report?", ["The project was time-consuming but cost-effective.", "The project took ages but was cheap, sort of.", "The project was consuming-time."], 0, "Precise compounds."),
      ch("Which sounds most natural in speech?", ["It's a five-minute walk from here.", "It's a walk of five minutes of duration.", "It's five-minutes walk."], 0, "Natural and correct."),
      ch("When is a prefix better than a phrase?", ["When it makes the meaning clearer and shorter: 'reread' vs 'read again'", "Never", "Only in science"], 0, "Concision."),
      say("She's a well-known, hard-working scientist with a long-term plan.", "Stress the second part: well-KNOWN, hard-WORKing, long-TERM."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short profile (70 words or more) of someone you admire. Use at least four compound adjectives and two words with prefixes (over-, under-, mis-, re-, co-…)." },
      { universe: "arts", text: "Write a short profile (70 words or more) of an artist or musician you admire, with at least four compound adjectives and two prefixed words." },
    ],
    minWords: 70,
    checks: [
      { label: "Four compound adjectives (well-known, hard-working, long-term, two-hour…)", pattern: "\\b[a-z]+-(known|working|term|consuming|minded|paid|made|looking|going|hour|minute|day|week|year|old|sighted|based|friendly|haired|eyed|loved|time|class|famous|built)\\b", min: 4 },
      { label: "Two prefixed words (over-, under-, mis-, re-, co-, dis-…)", pattern: "\\b(over|under|mis|re|co|dis|un|out)(confident|estimated|estimate|paid|understood|understand|understanding|written|write|wrote|built|start|started|organised|founded|founder|author|worked|rated|taken|stood|played|looked|grown|come|came)\\b", min: 2 },
    ],
    rubric: ["Compound adjectives before a noun have a hyphen.", "Numbers in compounds have no -s (a two-hour show).", "My profile gives a clear picture of the person."],
    model: "My aunt Lucía is a well-known chef in Barranquilla. She is hard-working and open-minded, always trying new ingredients. She started with a tiny, family-run restaurant, but she never underestimated what she could achieve. Her long-term goal was to cook for the whole city, and now she co-owns three restaurants. Some critics misunderstood her style at first, but she rebuilt her menu and proved them wrong. Her cooking classes are three-hour adventures.",
  },
};

const stress: NodePractice = {
  nodeId: "b2p.word-stress-in-word-families",
  explain: "In English, the stress often moves when a word changes form: PHOtograph, phoTOGrapher, photoGRAPHic. ECOnomy, eCONomist, ecoNOMic. Suffixes like -ic, -ical, -ity, -tion pull the stress to the syllable just before them: eCOnomy → ecoNOMic, ABle → aBIlity, eDUcate → eduCAtion. Getting stress wrong can make you hard to understand, even when every sound is right. Spanish speakers often keep the stress where it is in the Spanish word (economía, fotografía).",
  pattern: ["PHOtograph · phoTOGrapher · photoGRAPHic", "Before -ic / -ical: ecoNOMic, poLItical", "Before -tion / -sion: eduCAtion, deCIsion", "Before -ity: aBIlity, possiBIlity · Compare: POlitics, poLItical, poliTIcian"],
  steps: [
    [
      heard(X("04", "notice"), "What does the speaker love?", ["Photography", "Economics", "Teaching"], 0, "'I love photography.'"),
      heard(X("04", "notice"), "What does the teacher say the speaker has?", ["A photographic memory", "A professional camera", "Bad photographs"], 0, "photoGRAPHic memory."),
      heard(X("04", "notice"), "What does the speaker tell you to watch?", ["The stress moving between word forms", "The spelling", "The vowels disappearing"], 0, "'Watch the stress move.'"),
      ch("Where is the stress in 'photography'?", ["pho-TOG-ra-phy", "PHO-to-gra-phy", "pho-to-gra-PHY"], 0, "phoTOGraphy."),
      ch("Where is the stress in 'economic'?", ["e-co-NOM-ic", "E-co-nom-ic", "e-CO-nom-ic"], 0, "-ic pulls the stress before it."),
    ],
    [
      ch("Why does stress matter?", ["Wrong stress can make words hard to recognise.", "It doesn't, if the sounds are right.", "It only matters in poems."], 0, "Listeners rely on stress patterns."),
      ch("Which suffix pulls stress to the syllable before it?", ["-tion", "-ness", "-ful"], 0, "eduCAtion, inforMAtion."),
      ch("Which pair shows stress moving?", ["POlitics → poLItical", "happy → happily", "teach → teacher"], 0, "-ical moves the stress."),
      ctx("A student says 'eco-no-MY' with stress at the end, like Spanish 'economía'.", "What's the fix?", ["Stress the second syllable: eCONomy", "Say it faster", "Drop the y"], 0, "Spanish stress patterns can transfer."),
      ch("Where is the stress in 'ability'?", ["a-BIL-i-ty", "A-bil-i-ty", "a-bil-I-ty"], 0, "-ity pulls stress before it."),
    ],
    [
      ch("Choose the correct stress for 'photographer'.", ["pho-TOG-ra-pher", "PHO-to-gra-pher", "pho-to-GRA-pher"], 0, "Same as phoTOGraphy."),
      ch("Choose the correct stress for 'education'.", ["e-du-CA-tion", "E-du-ca-tion", "e-DU-ca-tion"], 0, "-tion → stress before it."),
      dict(X("04", "dict"), ["She studies economics at university"]),
      say("Photograph, photographer, photographic.", "PHOtograph, phoTOGrapher, photoGRAPHic."),
      say("Economy, economist, economic.", "eCONomy, eCONomist, ecoNOMic."),
    ],
    [
      ch("A learner says 'po-li-TI-cal'. Correct it.", ["po-LI-ti-cal", "PO-li-ti-cal", "It's correct"], 0, "-ical → stress before it: poLItical."),
      ch("A learner says 'de-ci-SION'. Correct it.", ["de-CI-sion", "DE-ci-sion", "It's correct"], 0, "-sion → deCIsion."),
      ch("Which is stressed correctly?", ["poliTIcian", "POlitician", "politiCIAN"], 0, "-ian pulls stress before it."),
      ch("Why might 'COMfortable' be hard for Spanish speakers?", ["Spanish 'cómodo' doesn't help, and English squeezes the middle: COMF-ta-ble.", "It has no stress.", "It's spelled wrong."], 0, "Stress + reduced syllables."),
      ch("Which pair keeps the same stress?", ["HAPpy → HAPpiness", "eCONomy → ecoNOMic", "PHOtograph → phoTOGrapher"], 0, "-ness doesn't move stress."),
    ],
    [
      ch("You're presenting on climate. Which word must you stress clearly?", ["enviRONmental", "envi-ron-MEN-tal (Spanish style)", "Doesn't matter"], 0, "Key words need clear stress."),
      ch("Best way to learn word-family stress?", ["Learn families together and say them aloud: PHOtograph, phoTOGrapher…", "Learn only the spelling", "Ignore stress"], 0, "Families + speaking."),
      ch("In a job interview, which is clearer?", ["I'm interested in eCONomics and poLItics.", "I'm interested in econoMICS and poliTICS.", "No difference"], 0, "Correct stress = easier to understand."),
      ch("Should you mark stress in your vocabulary notebook?", ["Yes, underline or capitalise the stressed syllable.", "No.", "Only for short words."], 0, "Make stress visible."),
      say("My teacher says I have a photographic memory.", "photoGRAPHic."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write (or record) 50 words or more about your studies or future career. Use at least three word families (for example economy/economic, photograph/photographer, politics/political) and mark the stressed syllable in CAPITALS, like phoTOGrapher." },
      { universe: "science", text: "Write (or record) 50 words or more about a science subject you like, using at least three word families and marking the stress in CAPITALS." },
    ],
    minWords: 50,
    checks: [
      { label: "Three words with stress marked in CAPITALS (phoTOGrapher, ecoNOMic…)", pattern: "\\b[a-z]+[A-Z]{2,}[a-z]*\\b|\\b[A-Z]{2,}[a-z]{2,}\\b", min: 3 },
    ],
    rubric: ["I marked the stress correctly in each word.", "I used at least three word families.", "If I recorded it, the stress was clear."],
    model: "I want to study eCONomics at university. My uncle is an eCONomist, and he says ecoNOMic problems affect everyone. I'm also interested in POlitics, because poLItical decisions change the eCONomy. In my free time I love phoTOGraphy. My best PHOtographs are of street markets, and maybe one day I'll be a professional phoTOGrapher too.",
  },
};

const prepositions: NodePractice = {
  nodeId: "b2p.dependent-prepositions",
  explain: "Many adjectives, verbs and nouns are followed by a fixed preposition, and Spanish often uses a different one. interested in (not *on) · good at (not *in) · depend on (not *of) · married to (not *with) · responsible for · used to + -ing · different from · the reason for · an increase in · consist of · think about/of. There's no rule: learn each word with its preposition as one chunk.",
  pattern: ["interested IN · good AT · bad AT · keen ON · afraid OF", "depend ON · consist OF · rely ON · apologise FOR", "married TO · responsible FOR · different FROM/TO", "the reason FOR · an increase IN · a solution TO"],
  steps: [
    [
      heard(X("05", "notice"), "What is the sister interested in?", ["Medicine", "Chemistry teaching", "Sport"], 0, "'interested in medicine'."),
      heard(X("05", "notice"), "What does everything depend on?", ["Her exam results", "Her husband", "The family"], 0, "'depends on her exam results'."),
      heard(X("05", "notice"), "Who is she married to?", ["A doctor", "A teacher", "A chemist"], 0, "'married to a doctor'."),
      ch("Which is correct?", ["interested in", "interested on", "interested of"], 0, "interesado en → interested in."),
      ch("Which is correct?", ["depend on", "depend of", "depend from"], 0, "depender de → depend on."),
    ],
    [
      ch("Which is correct?", ["She's good at chemistry.", "She's good in chemistry.", "She's good on chemistry."], 0, "good at a subject or skill."),
      ch("Which is correct?", ["He's married to Ana.", "He's married with Ana.", "He's married of Ana."], 0, "casado con → married to."),
      ch("Why are these errors so common?", ["Spanish uses different prepositions.", "English has no rules at all.", "They're American English."], 0, "Translation transfers the Spanish preposition."),
      ctx("Your teacher writes: 'What's the reason of your absence?'", "Correct version?", ["the reason for", "the reason of", "the reason to"], 0, "reason for."),
      ch("'She's used to long hours' means…", ["She's accustomed to them.", "She used them in the past.", "She uses hours."], 0, "be used to + noun/-ing."),
    ],
    [
      gap("I'm really interested", "photography.", ["in"], "interested in."),
      gap("Our plans depend", "the weather.", ["on", "upon"], "depend on."),
      gap("Who is responsible", "this mess?", ["for"], "responsible for."),
      dict(X("05", "dict"), ["It depends on the weather"]),
      gap("There has been a big increase", "prices.", ["in"], "an increase in."),
    ],
    [
      fix(["My brother", "is interested on", "robotics."], 1, ["is interested in"], "interested in."),
      fix(["It all", "depends of", "the price."], 1, ["depends on"], "depend on."),
      fix(["She got", "married with", "her best friend."], 1, ["married to"], "married to."),
      ch("Which is wrong?", ["The team consists in eleven players.", "The team consists of eleven players.", "The team is made up of eleven players."], 0, "consist of (for parts)."),
      ch("Which is wrong?", ["She apologised of being late.", "She apologised for being late.", "She said sorry for being late."], 0, "apologise for (+ -ing)."),
    ],
    [
      ch("Best sentence for a job application?", ["I am particularly interested in marketing and good at teamwork.", "I am interested on marketing and good in teamwork.", "I like marketing and teams."], 0, "Correct and clear."),
      ch("Best way to learn dependent prepositions?", ["Learn word + preposition as one chunk and use it in sentences", "Translate from Spanish", "Guess each time"], 0, "Chunks."),
      ch("Which sentence is ready for an essay?", ["The reason for the decline is a lack of investment.", "The reason of the decline is lack of investment.", "The decline's reason is because investment."], 0, "reason for + a lack of."),
      ch("When you're unsure of a preposition, best strategy?", ["Check a dictionary example sentence", "Use 'of' for everything", "Avoid the word forever"], 0, "Examples show the chunk."),
      say("She's interested in medicine and good at chemistry.", "Link: interested_in, good_at."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about a family member or friend (70 words or more). Use at least five adjective/verb + preposition chunks correctly (interested in, good at, depend on, married to, responsible for, keen on, afraid of…)." },
      { universe: "screens", text: "Write about a streamer, gamer or creator you follow (70 words or more), using at least five chunks like interested in, good at, depend on, responsible for." },
    ],
    minWords: 70,
    checks: [
      { label: "Five correct chunks", pattern: "\\b(interested in|good at|bad at|keen on|afraid of|proud of|depends? on|depended on|relies? on|rely on|married to|responsible for|famous for|used to|different from|consists? of|apologi[sz]ed? for|reason for|increase in|worried about|excited about|tired of)\\b", min: 5 },
      { label: "No Spanish-style prepositions (interested on, depend of, married with, good in)", pattern: "^(?![\\s\\S]*\\b(interested on|depends? of|married with|good in (maths|math|english|science|sport|chemistry|music)|reason of)\\b)[\\s\\S]+$", min: 1 },
    ],
    rubric: ["Each preposition matches its word.", "I didn't translate prepositions from Spanish.", "My description is specific and personal."],
    model: "My cousin Mateo is interested in robotics, and he's incredibly good at maths. He's responsible for the school robotics club, so he's used to working late. He's a bit afraid of public speaking, but he's proud of what his team has built. Their success depends on teamwork, and he's famous for staying calm. He's also keen on cooking, which is very different from his engineering projects, and he's always excited about new recipes.",
  },
};

export const B2P_EXTRA_GRAMMAR: NodePractice[] = [futurePast, contrast];
export const B2P_EXTRA_WORDS: NodePractice[] = [compounds];
export const B2P_EXTRA_SOUNDS: NodePractice[] = [stress];
export const B2P_EXTRA_ERRORS: NodePractice[] = [prepositions];
