/* B1 Words. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, say, tr } from "./helpers";

const X = (n: string, k: string) => `p/b1w-${n}-${k}.mp3`;

export const B1_WORDS_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: X("01", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "I get along really well with my sister, but we sometimes argue about clothes. I'm trying to have a healthier lifestyle: a balanced diet and more exercise. Last summer we flew to Spain, and I had terrible jet lag for three days!" },
  { file: X("01", "dict"), voice: "3f6pec3wODJsjTqtcNI2", script: "I get along well with my sister." },
  { file: X("02", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "In science class we did an experiment with a new device that measures air quality. Then we went to an art exhibition in the city centre. My cousin has a job interview on Monday. She hopes the salary is good!" },
  { file: X("02", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "She has a job interview on Monday." },
  { file: X("03", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "The new app is really useful, but the old one was useless. It was unfair that we lost the game. My brother is so careless; he always loses his keys. Our teacher wants more creativity and less disagreement in class." },
  { file: X("03", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "The old app was useless, but the new one is useful." },
  { file: X("04", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "This year I've made a lot of progress in English. I took part in the school debate, and I paid attention in every class. My goal was to get a B1 certificate, and I reached my goal in June. Now I'm doing research for my next project." },
  { file: X("04", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "I took part in the school debate." },
  { file: X("05", "notice"), voice: "QW1sSL71Pw5oHbFDen25", script: "I keep putting off my homework. Yesterday my friend came up with a great idea for our project. It took me a week to get over my cold. The party turned out to be really fun, and I'm already looking forward to the next one." },
  { file: X("05", "dict"), voice: "8DvnqWWA3WWXixOm7zQI", script: "I'm looking forward to the weekend." },
  { file: X("06", "notice"), voice: "ideEOMYLgcyF9rr94ycz", script: "Horror films are not my cup of tea. I was a bit under the weather yesterday, so I stayed home. We only go to the beach once in a blue moon. Exams are next week, so it's time to hit the books." },
  { file: X("06", "dict"), voice: "cgSgspJ2msm6clMCkdW9", script: "Horror films are not my cup of tea." },
  { file: X("07", "notice"), voice: "bIHbv24MWmeRgasZH58o", script: "So, should we go to the beach or the mountains? The thing is, the beach is expensive. Actually, on second thoughts, the mountains are cheaper. To be honest, I don't mind. Anyway, let's decide tonight." },
  { file: X("07", "dict"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "To be honest, I don't mind." },
];

const lifestyle: NodePractice = {
  nodeId: "b1.relationships-lifestyle-and-health-trave",
  explain: "These topics come up all the time in conversation and exams. Relationships: get along (well) with, argue (about something), make up (become friends again), fall out (stop being friends), trust, support. Lifestyle and health: a balanced diet, stay fit, get enough sleep, stress, an injury, recover. Travel experiences: jet lag (tiredness after a long flight), a delayed flight, go sightseeing, a souvenir, book a hotel, a guided tour. Learn them in phrases, not alone.",
  pattern: ["get along with · argue about · fall out with · make up", "a balanced diet · stay fit · get enough sleep · recover from", "jet lag · a delayed flight · go sightseeing · a souvenir · book a hotel", "Learn words in phrases"],
  steps: [
    [
      heard(X("01", "notice"), "How does the speaker get on with her sister?", ["Really well, but they sometimes argue", "Badly", "They never talk"], 0, "'I get along really well with my sister, but we sometimes argue'."),
      heard(X("01", "notice"), "What are they arguing about?", ["Clothes", "Music", "Homework"], 0, "'argue about clothes'."),
      heard(X("01", "notice"), "What problem did the speaker have in Spain?", ["Jet lag for three days", "A lost suitcase", "A delayed flight"], 0, "'I had terrible jet lag for three days!'"),
      ch("'Jet lag' is…", ["tiredness after a long flight", "a broken plane", "a type of bag"], 0, "Definition."),
      ch("'A balanced diet' means…", ["eating different kinds of healthy food", "eating only fruit", "not eating"], 0, "Variety and health."),
    ],
    [
      ch("Two friends had a fight, then became friends again. They…", ["made up", "fell out", "got along"], 0, "make up = become friends again."),
      ch("Which is a health phrase?", ["stay fit", "book a hotel", "go sightseeing"], 0, "Fitness."),
      ctx("'Our flight was delayed for five hours.'", "This means…", ["The flight left five hours late.", "The flight was cancelled.", "The flight was early."], 0, "delayed = late."),
      ch("'I fell out with my best friend' means…", ["We stopped being friends.", "We fell on the floor.", "We went outside."], 0, "fall out = argue and stop being friends."),
      ch("What do you buy to remember a trip?", ["a souvenir", "a ticket", "a passport"], 0, "souvenir."),
    ],
    [
      gap("I get along", "with my classmates.", ["well"], "get along well with."),
      gap("It took him two months to recover", "his injury.", ["from"], "recover from."),
      tr("Rewrite using 'argue'.", "My brother and I often have fights about the TV.", ["My brother and I often argue about the TV"], "argue about something."),
      dict(X("01", "dict"), ["I get along well with my sister"]),
      say("When we travel, we always go sightseeing on the first day.", "Stress TRAVel, SIGHTseeing and FIRST."),
    ],
    [
      fix(["I get along", "good", "with my cousins."], 1, ["well"], "get along well (adverb)."),
      fix(["We argued", "for", "money."], 1, ["about"], "argue about something."),
      fix(["I need to", "do", "a hotel for our trip."], 1, ["book"], "book a hotel."),
      ch("Which is correct?", ["I'm trying to eat a balanced diet.", "I'm trying to eat a balance diet.", "I'm trying to eat a balancing diet."], 0, "balanced diet."),
      ch("Which is wrong?", ["I had jet leg after the trip.", "I had jet lag after the trip.", "The jet lag was terrible."], 0, "Spelling: jet lag."),
    ],
    [
      ch("A friend is always tired and stressed. Best advice?", ["You should get enough sleep and stay fit.", "You should book a souvenir.", "You should fall out."], 0, "Health phrases."),
      ch("Best way to describe your relationship with your parents?", ["I get along well with them, but we sometimes argue about my phone.", "I get along good them, but argue for phone.", "I fall out with them every day, it's fine."], 0, "Natural and accurate."),
      ctx("Writing a postcard from a holiday.", "Best sentence?", ["We went sightseeing and bought lots of souvenirs.", "We did sightseeing and made souvenirs.", "We sightsaw and souvenired."], 0, "Correct collocations."),
      ch("Your friends had a fight and are friends again. You say:", ["I'm glad you made up!", "I'm glad you fell out!", "I'm glad you got jet lag!"], 0, "make up."),
      say("I had terrible jet lag after the flight.", "Stress TERrible, JET LAG and FLIGHT."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about a trip you took (45 words or more). Use at least four words or phrases from this topic (jet lag, delayed, go sightseeing, souvenir, book a hotel, get along with, argue, stay fit…)." },
      { universe: "futures", text: "Write about your plan for a healthier, happier year (45 words or more). Use at least four words or phrases from this topic (balanced diet, stay fit, get enough sleep, get along with, stress…)." },
      { universe: "screens", text: "Describe the relationships between characters in a series or game (45 words or more). Use at least four phrases (get along with, argue about, fall out, make up, trust, support…)." },
    ],
    minWords: 45,
    checks: [
      { label: "Four topic words or phrases", pattern: "\\b(get(s|ting)? along|got along|argue(d|s)?|fell out|fall(s)? out|made up|make up|trust|support(ed|s)?|balanced diet|stay(ed)? fit|enough sleep|stress(ed|ful)?|injur(y|ed)|recover(ed)?|jet lag|delayed|sightseeing|souvenirs?|book(ed)? a hotel|guided tour)\\b", min: 4 },
    ],
    rubric: ["I used the phrases with the right words around them.", "My writing has a clear story or plan.", "I checked spelling (jet lag, souvenir)."],
    model: "Last December my family went to Cartagena. Our flight was delayed for two hours, and my little brother was very bored. We booked a hotel near the old city, and we went sightseeing every morning. I bought souvenirs for my friends. My sister and I get along well, but we argued about the beach!",
  },
};

const scienceArtsWork: NodePractice = {
  nodeId: "b1.science-and-tech-the-arts-money-and-work",
  explain: "More topic vocabulary in useful phrases. Science and technology: an experiment, a result, a device (a small machine like a phone), research, invent, develop. The arts: an exhibition (a show of art), a gallery, a performance, an audience, a sculpture. Money and work: a salary (money you get from a job), a job interview, apply for a job, earn money, save money, a career (the jobs you do in your life). Remember: you 'do an experiment', 'go to an exhibition', and 'apply for a job'.",
  pattern: ["do an experiment · get a result · a device · do research · invent · develop", "an exhibition · a gallery · a performance · an audience · a sculpture", "a salary · a job interview · apply for a job · earn / save money · a career"],
  steps: [
    [
      heard(X("02", "notice"), "What did the device measure?", ["Air quality", "Temperature", "Noise"], 0, "'a new device that measures air quality'."),
      heard(X("02", "notice"), "Where did they go after science class?", ["An art exhibition", "A concert", "A museum shop"], 0, "'we went to an art exhibition'."),
      heard(X("02", "notice"), "What does the cousin have on Monday?", ["A job interview", "An exam", "A performance"], 0, "'a job interview on Monday'."),
      ch("A 'salary' is…", ["money you get for your job", "a type of salad", "a job interview"], 0, "Definition."),
      ch("An 'exhibition' is…", ["a show of art or objects", "a science test", "a sports match"], 0, "Definition."),
    ],
    [
      ch("Which verb goes with 'an experiment'?", ["do", "make", "play"], 0, "do an experiment."),
      ch("The people who watch a show are the…", ["audience", "salary", "device"], 0, "audience."),
      ctx("'She applied for a job at a design company.'", "This means…", ["She asked to be considered for the job.", "She got the job.", "She left the job."], 0, "apply for = ask formally."),
      ch("'A career' is…", ["the jobs you do over your working life", "a university degree", "a car race"], 0, "False friend: career ≠ carrera (degree)."),
      ch("Which is a device?", ["a smartwatch", "an audience", "a salary"], 0, "A small machine."),
    ],
    [
      gap("I want to", "money for a new laptop.", ["save", "earn"], "save / earn money."),
      gap("We did an", "to see how plants grow in the dark.", ["experiment"], "do an experiment."),
      tr("Rewrite using 'apply'.", "My brother sent his CV to ask for a job at the bank.", ["My brother applied for a job at the bank"], "apply for a job."),
      dict(X("02", "dict"), ["She has a job interview on Monday"]),
      say("The audience loved the performance.", "Stress AUdience, LOVED and perFORMance."),
    ],
    [
      fix(["We", "made", "an experiment in chemistry class."], 1, ["did"], "do an experiment."),
      fix(["She applied", "to", "a job at a hospital."], 1, ["for"], "apply for a job."),
      fix(["The", "public", "clapped at the end of the show."], 1, ["audience"], "People watching a show = audience."),
      ch("Which is correct?", ["He earns a good salary.", "He wins a good salary.", "He gains a good salary."], 0, "earn a salary."),
      ch("Which is wrong?", ["I'm studying a career in medicine.", "I'm studying medicine.", "I want a career in medicine."], 0, "career ≠ degree; say 'studying medicine'."),
    ],
    [
      ch("Best sentence for a job application?", ["I would like to apply for the position of assistant.", "I want the job, give it.", "I apply the job, thank."], 0, "Formal and correct."),
      ch("Best description of a school science project?", ["We did research and developed a device to save water.", "We made research and invented a water.", "We did a device of research."], 0, "Correct collocations."),
      ctx("Describing a visit to a museum.", "Best sentence?", ["The exhibition had sculptures by Colombian artists.", "The exhibition had salaries by Colombian artists.", "The audience had sculptures of the exhibition."], 0, "Accurate vocabulary."),
      ch("Your cousin wants to work with computers all her life. She wants…", ["a career in technology", "a salary in technology", "an exhibition in technology"], 0, "career."),
      say("I'm saving money to buy a new device.", "Stress SAVing, MONey and deVICE."),
    ],
  ],
  create: {
    prompts: [
      { text: "Describe your dream job (45 words or more). Use at least four words from this topic (career, salary, apply for, job interview, earn, research, experiment, device, exhibition, audience…)." },
      { universe: "science", text: "Describe a science project or invention you'd like to make (45 words or more). Use at least four words (experiment, result, device, research, develop, invent, career…)." },
      { universe: "arts", text: "Describe an exhibition, concert or performance you saw or would like to see (45 words or more). Use at least four words (exhibition, gallery, performance, audience, sculpture, artist…)." },
    ],
    minWords: 45,
    checks: [
      { label: "Four topic words", pattern: "\\b(experiments?|results?|devices?|research|invent(ed|ion)?|develop(ed|ment)?|exhibitions?|galler(y|ies)|performances?|audience|sculptures?|salary|salaries|interviews?|appl(y|ied) for|earn(ed|s)?|sav(e|ed|ing) money|careers?)\\b", min: 4 },
    ],
    rubric: ["I used the words in correct phrases (do an experiment, apply for a job).", "My writing is clear and organised.", "I avoided 'career' when I meant a university degree."],
    model: "My dream career is in video game design. First, I want to study computer science at university. Then I'll apply for a job at a big company. In the job interview, I'll show them a device I invented: a controller for people with disabilities. The salary is good, but I mainly want to create games people love.",
  },
};

const affixes: NodePractice = {
  nodeId: "b1.common-prefixes-and-suffixes",
  explain: "Prefixes and suffixes help you build new words and guess meanings. Suffixes for nouns: -tion (inform → information), -ment (agree → agreement), -ity (creative → creativity). Suffixes for adjectives: -ful (with: useful), -less (without: useless), -ous (danger → dangerous), -able (enjoy → enjoyable). Negative prefixes: un- (unfair), dis- (disagree), im- (impossible, before m and p), in- (incorrect), ir- (irregular). If you know 'care', you can understand careful, careless and carefully.",
  pattern: ["Nouns: -tion (information) · -ment (agreement) · -ity (creativity) · -ness (happiness)", "Adjectives: -ful (useful) · -less (useless) · -ous (dangerous) · -able (enjoyable)", "Negative prefixes: un- (unfair) · dis- (disagree) · im- (impossible) · in- (incorrect) · ir- (irregular)", "care → careful → careless → carefully"],
  steps: [
    [
      heard(X("03", "notice"), "What does the speaker say about the old app?", ["It was useless.", "It was useful.", "It was free."], 0, "'the old one was useless'."),
      heard(X("03", "notice"), "Why is the brother careless?", ["He always loses his keys.", "He drives fast.", "He breaks his phone."], 0, "'he always loses his keys'."),
      heard(X("03", "notice"), "What does the teacher want more of?", ["Creativity", "Disagreement", "Homework"], 0, "'more creativity and less disagreement'."),
      ch("'Useless' means…", ["not useful at all", "very useful", "used before"], 0, "-less = without."),
      ch("Which prefix makes 'fair' negative?", ["un-", "dis-", "im-"], 0, "unfair."),
    ],
    [
      ch("What does '-ful' usually mean?", ["full of / with", "without", "again"], 0, "useful, careful."),
      ch("Which is a noun?", ["agreement", "agree", "agreeable"], 0, "-ment makes a noun."),
      ctx("'It's impossible to finish in one hour.'", "Why 'im-' and not 'un-'?", ["im- comes before words starting with p or m", "un- is always wrong", "It's a spelling mistake"], 0, "impossible, impatient, immature."),
      ch("The opposite of 'agree' is…", ["disagree", "unagree", "inagree"], 0, "dis- with verbs."),
      ch("Which word means 'full of danger'?", ["dangerous", "dangerless", "dangerful"], 0, "-ous."),
    ],
    [
      gap("Thanks for the", "about the trip. (inform)", ["information"], "inform → information."),
      gap("Be", "with that knife! (care)", ["careful"], "care → careful."),
      tr("Rewrite using a negative prefix.", "This answer is not correct.", ["This answer is incorrect"], "in- + correct."),
      dict(X("03", "dict"), ["The old app was useless, but the new one is useful", "The old app was useless but the new one is useful"]),
      say("It's impossible, unfair and completely useless!", "Stress imPOSSible, unFAIR and USEless."),
    ],
    [
      fix(["That's", "unpossible!"], 1, ["impossible!"], "im- before p."),
      fix(["I", "unagree", "with your idea."], 1, ["disagree"], "dis- with agree."),
      fix(["Thanks for the", "informations", "about the bus."], 1, ["information"], "information is uncountable."),
      ch("Which is correct?", ["Our teacher wants more creativity.", "Our teacher wants more creativeness.", "Our teacher wants more creation."], 0, "creative → creativity."),
      ch("Which is wrong?", ["He's very carefull.", "He's very careful.", "He works carefully."], 0, "-ful has one l."),
    ],
    [
      ch("Best way to describe a broken charger?", ["It's useless now.", "It's useful now.", "It's uncharger now."], 0, "-less = without use."),
      ch("Best word for a fun trip?", ["enjoyable", "enjoyful", "unenjoy"], 0, "-able."),
      ctx("You think a rule at school isn't fair.", "Best sentence?", ["I think this rule is unfair.", "I think this rule is disfair.", "I think this rule is imfair."], 0, "un- + fair."),
      ch("Which sentence has the correct word forms?", ["Thanks for your kindness and patience.", "Thanks for your kindful and patiency.", "Thanks for your kindless and patients."], 0, "kindness, patience."),
      say("Be careful! The road is dangerous.", "Stress CAREful and DANGerous."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a review of a product or app (45 words or more). Use at least four words with prefixes or suffixes (useful, useless, careful, unfair, disagree, impossible, information, enjoyable…)." },
      { universe: "screens", text: "Write a review of a video game (45 words or more). Use at least four words with prefixes or suffixes (enjoyable, useless, impossible, unfair, creativity, dangerous…)." },
      { universe: "science", text: "Describe a new invention (45 words or more). Use at least four words with prefixes or suffixes (useful, invention, information, impossible, careful, development…)." },
    ],
    minWords: 45,
    checks: [
      { label: "Four words with prefixes or suffixes", pattern: "\\b(un\\w{3,}|dis\\w{3,}|im(possible|patient|mature|polite|perfect|portant)|in(correct|complete|formal|dependent)|ir\\w{4,}|\\w{3,}(tion|ment|ity|ness|ful|less|ous|able))\\b", min: 4 },
    ],
    rubric: ["I chose the right prefix (un-, dis-, im-, in-).", "I spelled the suffixes correctly (-ful with one l).", "My review gives a clear opinion."],
    model: "I downloaded a new fitness app last month. At first, it was really useful, because it gave me lots of information about my health. However, the newest version is almost useless. It's impossible to save your progress, and I think the price is unfair. My friends disagree, but I find the old version more enjoyable.",
  },
};

const studyWork: NodePractice = {
  nodeId: "b1.verb-noun-for-study-and-work",
  explain: "Some verbs and nouns always go together (collocations). For study and work: make progress, make a mistake, make an effort, make a decision; take part in, take notes, take an exam; pay attention; do homework, do research, do your best; reach a goal; get a grade. In Spanish we often use 'hacer' for many of these, but English uses different verbs. Learn each phrase as one unit.",
  pattern: ["make: progress · a mistake · an effort · a decision", "take: part in · notes · an exam · a break", "do: homework · research · your best", "pay attention · reach / achieve a goal · get a good grade"],
  steps: [
    [
      heard(X("04", "notice"), "What has the speaker made this year?", ["A lot of progress in English", "A lot of mistakes", "A new friend"], 0, "'I've made a lot of progress in English.'"),
      heard(X("04", "notice"), "What did the speaker take part in?", ["The school debate", "A football match", "A concert"], 0, "'I took part in the school debate'."),
      heard(X("04", "notice"), "When did they reach their goal?", ["In June", "In March", "Last week"], 0, "'I reached my goal in June.'"),
      ch("Which verb goes with 'progress'?", ["make", "do", "take"], 0, "make progress."),
      ch("Which verb goes with 'attention'?", ["pay", "make", "do"], 0, "pay attention."),
    ],
    [
      ch("'Take part in' means…", ["participate in", "break into pieces", "take a photo"], 0, "Participate."),
      ch("Which is correct?", ["do research", "make research", "take research"], 0, "do research."),
      ctx("Your teacher says: 'Please take notes during the video.'", "You should…", ["write down important information", "take the video home", "stop listening"], 0, "take notes = write."),
      ch("Which is a common learner mistake?", ["make homework", "do homework", "do your best"], 0, "Say do homework."),
      ch("'I reached my goal' means…", ["I achieved what I wanted.", "I touched a football goal.", "I started a goal."], 0, "reach = achieve."),
    ],
    [
      gap("Don't worry if you make a", "; we all learn from them.", ["mistake"], "make a mistake."),
      gap("I always pay", "in maths class.", ["attention"], "pay attention."),
      tr("Rewrite using 'take part'.", "I participated in a robotics competition.", ["I took part in a robotics competition"], "take part in."),
      dict(X("04", "dict"), ["I took part in the school debate"]),
      say("I'm making a lot of progress, and I'm doing my best.", "Stress PROGress and BEST."),
    ],
    [
      fix(["I need to", "make", "my homework now."], 1, ["do"], "do homework."),
      fix(["Please", "put", "attention to the instructions."], 1, ["pay"], "pay attention."),
      fix(["She", "did", "a big mistake in the test."], 1, ["made"], "make a mistake."),
      ch("Which is correct?", ["We have to make a decision today.", "We have to do a decision today.", "We have to put a decision today."], 0, "make a decision."),
      ch("Which is wrong?", ["I participated of the project.", "I took part in the project.", "I participated in the project."], 0, "participate in / take part in."),
    ],
    [
      ch("Best sentence for a school report?", ["Sofía has made great progress and always pays attention.", "Sofía has done great progress and always makes attention.", "Sofía progressed attentions."], 0, "Correct collocations."),
      ch("Best New Year's resolution?", ["I'm going to make more effort in English and reach my goals.", "I'm going to do more effort and arrive my goals.", "I'm going to take effort to goals."], 0, "make an effort; reach goals."),
      ctx("Writing a CV or application.", "Best sentence?", ["I have taken part in several science fairs.", "I have made part in several science fairs.", "I have done part in several science fairs."], 0, "take part in."),
      ch("Your friend failed an exam. Kind thing to say?", ["Don't worry, you did your best.", "Don't worry, you made your best.", "Don't worry, you took your best."], 0, "do your best."),
      say("Pay attention, take notes and do your best.", "Three clear chunks: pause after ATTENTION and NOTES."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about your goals for this school year (45 words or more). Use at least four verb + noun collocations (make progress, do research, take part in, pay attention, reach a goal, make a mistake…)." },
      { universe: "futures", text: "Write about your plan to get a job you want (45 words or more). Use at least four verb + noun collocations (make an effort, take part in, reach a goal, do research…)." },
      { universe: "science", text: "Write about a science project you did or want to do (45 words or more). Use at least four verb + noun collocations (do research, make a mistake, take notes, reach a goal…)." },
    ],
    minWords: 45,
    checks: [
      { label: "Four verb + noun collocations", pattern: "\\b(ma(de|ke|kes|king)\\s+(a\\s+lot\\s+of\\s+|great\\s+|good\\s+|more\\s+|an?\\s+|every\\s+)?(progress|mistakes?|efforts?|decisions?)|t(ake|akes|ook|aking|aken)\\s+(part\\s+in|notes|an?\\s+exam|exams|a\\s+break)|pa(y|id|ys|ying)\\s+(more\\s+|close\\s+)?attention|(do|did|does|doing|done)\\s+(my\\s+|your\\s+|our\\s+|some\\s+|more\\s+)?(homework|research|best)|(reach|reached|achieve|achieved)\\s+(my\\s+|our\\s+|a\\s+|the\\s+)?goals?|g(e|o)t\\s+(a\\s+)?(good\\s+|better\\s+)?grades?)\\b", min: 4 },
    ],
    rubric: ["I used make, do, take and pay with the right nouns.", "My goals are clear and realistic.", "I avoided 'make homework' and 'put attention'."],
    model: "This year I want to make a lot of progress in English. I'm going to pay attention in every class and take notes. I also want to take part in the science fair, so I'll do research about solar energy. I know I'll make mistakes, but that's OK. My goal is to get a good grade in June.",
  },
};

const phrasal: NodePractice = {
  nodeId: "b1.abstract-phrasal-verbs",
  explain: "Many common phrasal verbs have meanings you can't guess from the separate words. put off = delay (I keep putting off my homework). come up with = think of (an idea). get over = recover from (a cold, a bad experience). turn out = happen in the end (It turned out to be fun). bring up = mention (a topic), or raise (a child). carry on = continue. work out = find the answer, or do exercise. look forward to = feel happy about something in the future, + noun or -ing (I'm looking forward to seeing you).",
  pattern: ["put off = delay · come up with = think of", "get over = recover from · turn out = happen in the end", "bring up = mention · carry on = continue", "work out = solve / exercise", "look forward to + noun / -ing"],
  steps: [
    [
      heard(X("05", "notice"), "What does the speaker keep putting off?", ["Homework", "Going to the gym", "Calling a friend"], 0, "'I keep putting off my homework.'"),
      heard(X("05", "notice"), "What did the friend come up with?", ["A great idea for their project", "A new game", "A song"], 0, "'came up with a great idea for our project'."),
      heard(X("05", "notice"), "How was the party in the end?", ["Really fun", "Boring", "Cancelled"], 0, "'The party turned out to be really fun'."),
      ch("'Put off' means…", ["delay", "turn off", "put on clothes"], 0, "Postpone."),
      ch("'Get over a cold' means…", ["recover from it", "catch it", "jump over it"], 0, "Recover."),
    ],
    [
      ch("'It turned out to be easy' means…", ["In the end, it was easy.", "It turned around.", "It started easy."], 0, "turn out = the final result."),
      ch("What comes after 'look forward to'?", ["a noun or -ing", "a base verb", "nothing"], 0, "look forward to seeing you."),
      ctx("At dinner, your dad said: 'Don't bring up politics with Grandma.'", "He means…", ["Don't mention politics.", "Don't carry politics upstairs.", "Don't grow politics."], 0, "bring up = mention."),
      ch("'Carry on' means…", ["continue", "carry a bag", "stop"], 0, "Carry on talking."),
      ch("'I can't work out this maths problem' means…", ["I can't solve it.", "I can't exercise.", "I can't leave."], 0, "work out = solve."),
    ],
    [
      gap("We need to come up", "a name for our band.", ["with"], "come up with."),
      gap("I'm looking forward to", "you next week.", ["seeing", "meeting", "visiting"], "look forward to + -ing."),
      tr("Rewrite using a phrasal verb with 'off'.", "They delayed the match because of the rain.", ["They put off the match because of the rain", "They put the match off because of the rain"], "put off = delay."),
      dict(X("05", "dict"), ["I'm looking forward to the weekend", "I am looking forward to the weekend"]),
      say("It turned out to be the best day ever.", "Link TURNED-OUT; stress BEST."),
    ],
    [
      fix(["I'm looking forward to", "see", "you."], 1, ["seeing"], "look forward to + -ing."),
      fix(["She came up", "to", "a brilliant idea."], 1, ["with"], "come up with."),
      fix(["It took weeks to", "get on", "the bad news."], 1, ["get over"], "get over = recover from."),
      ch("Which is correct?", ["Stop putting off your homework!", "Stop putting out your homework!", "Stop putting off of your homework!"], 0, "put off."),
      ch("Which is wrong?", ["The film turned on to be boring.", "The film turned out to be boring.", "It turned out that the film was boring."], 0, "turn out."),
    ],
    [
      ch("Best ending for an email to a pen pal?", ["I'm looking forward to hearing from you.", "I'm looking forward to hear from you.", "I look forward hearing you."], 0, "Classic, correct ending."),
      ch("Your friend is sad after a breakup. Kind message?", ["You'll get over it soon. I'm here for you.", "You'll get on it soon.", "You'll put it off soon."], 0, "get over."),
      ctx("Your team needs an idea for a project.", "Best thing to say?", ["Let's come up with three ideas and vote.", "Let's come with up three ideas.", "Let's bring up three ideas off."], 0, "come up with."),
      ch("Your teacher sees you stop talking during a presentation. She says…", ["Please carry on.", "Please carry off.", "Please put on."], 0, "carry on = continue."),
      say("I keep putting off my homework.", "Stress KEEP, PUTting OFF and HOMEwork."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write about a project or plan that turned out differently from what you expected (45 words or more). Use at least four phrasal verbs (put off, come up with, get over, turn out, bring up, carry on, work out, look forward to)." },
      { universe: "screens", text: "Tell the story of a game, film or series you watched (45 words or more). Use at least four phrasal verbs (turn out, come up with, get over, carry on, work out, put off…)." },
      { universe: "futures", text: "Write a message to a friend about plans for the holidays (45 words or more). Use at least four phrasal verbs (look forward to, come up with, put off, work out, carry on…)." },
    ],
    minWords: 45,
    checks: [
      { label: "Four phrasal verbs", pattern: "\\b(put(s|ting)?\\s+(\\w+\\s+)?off|c(ame|ome|omes|oming)\\s+up\\s+with|g(et|ot|ets|etting)\\s+over|turn(ed|s|ing)?\\s+out|br(ing|ought|ings|inging)\\s+(\\w+\\s+)?up|carr(y|ied|ies|ying)\\s+on|work(ed|s|ing)?\\s+(\\w+\\s+)?out|look(ing|ed)?\\s+forward\\s+to)\\b", min: 4 },
    ],
    rubric: ["Each phrasal verb has the right particle.", "After 'look forward to' I used a noun or -ing.", "My story is easy to follow."],
    model: "Last month my friends and I had to make a video for history class. We kept putting it off until the last weekend. Then Juan came up with a great idea: a fake news show about the 1800s. It turned out to be really funny. We carried on filming until midnight. Now I'm looking forward to the next project!",
  },
};

const idioms: NodePractice = {
  nodeId: "b1.common-idioms-in-context",
  explain: "Idioms are fixed expressions with a meaning that isn't literal. They make your English sound natural, but use them in informal situations. not my cup of tea = not something I like. under the weather = a little ill. once in a blue moon = very rarely. hit the books = study hard. a piece of cake = very easy. break the ice = start a conversation with new people. cost an arm and a leg = be very expensive. Don't change the words: it's 'a piece of cake', not 'a piece of bread'.",
  pattern: ["not my cup of tea = I don't like it", "under the weather = a bit ill", "once in a blue moon = very rarely", "hit the books = study hard", "a piece of cake = very easy · break the ice = start talking", "Fixed words: don't change them"],
  steps: [
    [
      heard(X("06", "notice"), "What does the speaker think of horror films?", ["They don't like them.", "They love them.", "They make them."], 0, "'not my cup of tea'."),
      heard(X("06", "notice"), "Why did the speaker stay home yesterday?", ["They felt a bit ill.", "It was raining.", "They had homework."], 0, "'under the weather'."),
      heard(X("06", "notice"), "How often do they go to the beach?", ["Very rarely", "Every weekend", "Every summer"], 0, "'once in a blue moon'."),
      ch("'Hit the books' means…", ["study hard", "throw books", "buy books"], 0, "Study."),
      ch("'Not my cup of tea' means…", ["I don't really like it.", "I prefer coffee.", "It's too hot."], 0, "Preference."),
    ],
    [
      ch("'The test was a piece of cake' means…", ["It was very easy.", "There was cake.", "It was very hard."], 0, "Easy."),
      ch("When should you use idioms?", ["In informal conversation and messages", "In every formal essay", "Never"], 0, "Mostly informal."),
      ctx("At a party, someone tells a joke to start a conversation with strangers.", "They are…", ["breaking the ice", "hitting the books", "under the weather"], 0, "break the ice."),
      ch("'Those trainers cost an arm and a leg' means…", ["They were very expensive.", "They hurt my legs.", "They were cheap."], 0, "Expensive."),
      ch("Why can't you say 'a piece of bread' for 'very easy'?", ["Idioms have fixed words.", "Bread is harder.", "It's American English."], 0, "Fixed expressions."),
    ],
    [
      gap("I'm feeling a bit under the", "today.", ["weather"], "under the weather."),
      gap("We only eat out once in a blue", ".", ["moon"], "once in a blue moon."),
      tr("Rewrite using an idiom with 'cake'.", "The exam was very easy.", ["The exam was a piece of cake"], "a piece of cake."),
      dict(X("06", "dict"), ["Horror films are not my cup of tea"]),
      say("Reggaeton isn't really my cup of tea.", "Stress REALly and CUP of TEA."),
    ],
    [
      fix(["The test was", "a piece of bread,", "so I finished early."], 1, ["a piece of cake,"], "Fixed idiom: a piece of cake."),
      fix(["I can't come; I'm", "under the rain", "today."], 1, ["under the weather"], "under the weather = a bit ill."),
      fix(["We see my cousins", "once in a red moon."], 1, ["once in a blue moon."], "Fixed idiom."),
      ch("Which is correct?", ["It's time to hit the books.", "It's time to hit the notebooks.", "It's time to punch the books."], 0, "Fixed: hit the books."),
      ch("Which use is wrong?", ["Dear Professor, the exam was a piece of cake.", "The quiz was a piece of cake, haha.", "Honestly, that level was a piece of cake."], 0, "Too informal for a formal email."),
    ],
    [
      ch("Your friend invites you to a heavy metal concert, which you don't like. Polite reply?", ["Thanks, but metal isn't really my cup of tea.", "Metal is horrible and you're horrible.", "Metal is my cup of coffee."], 0, "Polite refusal."),
      ch("Best message to your teacher if you're ill?", ["I'm sorry, I'm not feeling well today.", "I'm under the weather, mate!", "I'm a piece of cake today."], 0, "Formal context: avoid idioms."),
      ctx("First day at a new school, nobody is talking.", "Best way to break the ice?", ["Hi! I'm new. What's the best thing about this school?", "Silence.", "I'm under the weather."], 0, "Start a friendly conversation."),
      ch("Which idiom fits? 'Exams start Monday, so this weekend I'll…'", ["hit the books", "break the ice", "cost an arm and a leg"], 0, "Study hard."),
      say("That phone costs an arm and a leg!", "Stress COSTS, ARM and LEG."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write an informal message to a friend about your week (45 words or more). Use at least three idioms correctly (not my cup of tea, under the weather, once in a blue moon, hit the books, a piece of cake, break the ice, cost an arm and a leg)." },
      { universe: "screens", text: "Write an informal review of a game or series for friends (45 words or more). Use at least three idioms correctly." },
      { universe: "arts", text: "Write an informal message about a concert or show you went to (45 words or more). Use at least three idioms correctly." },
    ],
    minWords: 45,
    checks: [
      { label: "Three idioms", pattern: "\\b(cup of tea|under the weather|once in a blue moon|hit(ting)? the books|piece of cake|br(eak|oke|eaking) the ice|(cost|costs|costing) an arm and a leg)\\b", min: 3 },
    ],
    rubric: ["I used each idiom with its fixed words.", "My message is informal, where idioms fit.", "The meaning of each idiom fits the situation."],
    model: "Hey Luisa! What a week. On Monday I was a bit under the weather, so I stayed in bed. Then I had to hit the books for the chemistry test, which was actually a piece of cake. On Saturday I went to a jazz concert with my dad. Jazz isn't really my cup of tea, but the food was amazing!",
  },
};

const discourse: NodePractice = {
  nodeId: "b1.discourse-chunks",
  explain: "Discourse chunks are short phrases that help you organise what you say, especially in conversation. 'The thing is…' introduces a problem. 'Actually…' corrects or adds surprising information. 'On second thoughts…' means you've changed your mind. 'To be honest…' introduces a sincere opinion. 'Anyway…' changes topic or returns to the main point. 'By the way…' adds something new. 'I mean…' explains more clearly. They make you sound fluent and give you time to think.",
  pattern: ["The thing is… = here's the problem", "Actually… = in fact / to correct", "On second thoughts… = I've changed my mind", "To be honest… = my real opinion", "Anyway… = back to the point / new topic", "By the way… · I mean…"],
  steps: [
    [
      heard(X("07", "notice"), "What's the problem with the beach?", ["It's expensive.", "It's too far.", "It's raining."], 0, "'The thing is, the beach is expensive.'"),
      heard(X("07", "notice"), "Why does the speaker change their mind?", ["The mountains are cheaper.", "The beach is closed.", "Their friend wants the mountains."], 0, "'Actually, on second thoughts, the mountains are cheaper.'"),
      heard(X("07", "notice"), "When will they decide?", ["Tonight", "Tomorrow", "Next week"], 0, "'let's decide tonight'."),
      ch("'On second thoughts' means…", ["I've changed my mind.", "I'm thinking twice as fast.", "This is my second idea."], 0, "Change of mind."),
      ch("'To be honest' introduces…", ["a sincere opinion", "a lie", "a question"], 0, "Honest opinion."),
    ],
    [
      ch("Which chunk introduces a problem?", ["The thing is…", "By the way…", "Anyway…"], 0, "The thing is, I'm busy."),
      ch("'Anyway' is often used to…", ["go back to the main topic", "start a story", "say thank you"], 0, "Topic shift."),
      ctx("'I'd love to come. The thing is, I have an exam the next day.'", "The speaker is…", ["politely explaining why they can't come", "saying yes", "asking a question"], 0, "Soft refusal."),
      ch("Which adds a new, unrelated point?", ["By the way, I saw Ana yesterday.", "Anyway, as I was saying…", "To be honest, I agree."], 0, "By the way."),
      ch("Why are these chunks useful?", ["They organise your speech and give you time to think.", "They make sentences longer for no reason.", "They are only for exams."], 0, "Fluency."),
    ],
    [
      gap("I wanted to go out.", ", I'm too tired. (I've changed my mind)", ["On second thoughts", "Actually"], "Change of mind."),
      gap("To be", ", I didn't like the film.", ["honest"], "To be honest."),
      tr("Make it softer with 'The thing is'.", "I can't come to your party because I have a test.", ["The thing is, I have a test, so I can't come to your party", "I'd love to come, but the thing is, I have a test", "The thing is, I have a test"], "Introduce the problem gently."),
      dict(X("07", "dict"), ["To be honest, I don't mind", "To be honest I don't mind"]),
      say("Actually, on second thoughts, let's stay home.", "Small pause after ACtually and THOUGHTS."),
    ],
    [
      fix(["To be", "honestly,", "I prefer the blue one."], 1, ["honest,"], "Fixed: to be honest."),
      fix(["On second", "thinks,", "let's go by bus."], 1, ["thoughts,"], "On second thoughts."),
      fix(["The thing are,", "I don't have any money."], 0, ["The thing is,"], "Fixed: The thing is."),
      ch("Which is used correctly?", ["By the way, have you seen my keys?", "By the way, so the end.", "By the way to be honest anyway."], 0, "Adds a new point."),
      ch("Which sounds wrong?", ["Anyway, I think yes, on second thoughts by the way.", "Anyway, let's get back to the plan.", "Anyway, what time is the match?"], 0, "Too many chunks together."),
    ],
    [
      ch("Your friend asks to borrow money and you can't. Best answer?", ["I'd like to help. The thing is, I'm saving for a trip.", "No.", "Money? Anyway. By the way."], 0, "Soft and clear."),
      ch("Best way to give an honest opinion about a friend's new haircut you don't love?", ["To be honest, I preferred it longer, but it looks fresh.", "It's horrible.", "Anyway, haircut."], 0, "Honest but kind."),
      ctx("In a group chat, the conversation went off topic.", "Best way to return to the plan?", ["Anyway, what time are we meeting?", "Actually by the way…", "The thing is, anyway."], 0, "Anyway = back to the point."),
      ch("You were going to order pizza but decide on tacos. You say:", ["Actually, on second thoughts, I'll have the tacos.", "To be honest, pizza tacos.", "By the way, tacos."], 0, "Change of mind."),
      say("The thing is, I don't have time this week.", "Stress THING and TIME."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a chat conversation (45 words or more) between two friends planning a weekend. Use at least four discourse chunks (The thing is, Actually, On second thoughts, To be honest, Anyway, By the way, I mean)." },
      { universe: "screens", text: "Write a chat between two friends deciding which film or series to watch (45 words or more). Use at least four discourse chunks." },
      { universe: "futures", text: "Write a conversation about choosing a university or career (45 words or more). Use at least four discourse chunks." },
    ],
    minWords: 45,
    checks: [
      { label: "Four discourse chunks", pattern: "\\b(the thing is|actually|on second thoughts?|to be honest|anyway|by the way|i mean)\\b", min: 4 },
    ],
    rubric: ["Each chunk does its job (problem, correction, opinion, topic change).", "My conversation sounds natural.", "I didn't use all the chunks in one sentence."],
    model: "Ana: Do you want to go to the cinema on Saturday? Leo: I'd love to. The thing is, I don't have much money. Ana: Actually, it's half price on Saturdays! Leo: Oh, great. To be honest, I really want to see the new Marvel film. Ana: Me too. By the way, can your brother drive us? Leo: Maybe. Anyway, let's meet at six.",
  },
};

export const B1_WORDS: NodePractice[] = [lifestyle, scienceArtsWork, affixes, studyWork, phrasal, idioms, discourse];
