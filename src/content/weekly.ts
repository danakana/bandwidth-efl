/**
 * Weekly writing and speaking: one of each per week, at the student's band, marked by the teacher.
 * Six weeks per band, the same cycle as the level check, moving through the text types the CEFR expects at that level.
 * Original prompts for Bandwidth EFL. For teacher review.
 */
import type { BandId } from "./bands";
import type { ProductionTask } from "./assessments/types";

type Genre = "message" | "email" | "description" | "story" | "opinion" | "review" | "essay" | "report" | "proposal" | "article" | "talk" | "narrate" | "argue" | "explain" | "persuade";

/** What a good piece of each type does: the student ticks these before sending; the teacher sees the same list. */
const CHECKS: Record<Genre, string[]> = {
  message: ["I answered every question in the task", "I used a greeting and a sign-off", "I checked my capital letters and full stops"],
  email: ["I said why I'm writing in the first lines", "I covered every point in the task", "I used a friendly or polite tone that fits the reader", "I finished with a clear sign-off"],
  description: ["I described at least three different things", "I used adjectives and 'there is / there are'", "I joined ideas with and, but, because"],
  story: ["My story has a beginning, a middle and an end", "I used past tenses correctly", "I used time words: first, then, after that, finally"],
  opinion: ["I gave my opinion clearly at the start", "I gave at least two reasons with examples", "I used linking words: because, also, however"],
  review: ["I said what I'm reviewing and gave the key facts", "I described the best and the worst parts", "I gave a clear recommendation and who it's for"],
  essay: ["My introduction states my position", "Each paragraph has one main idea with support", "I dealt with the other side of the argument", "My conclusion answers the question"],
  report: ["I used headings or a clear structure", "I presented facts before my recommendations", "I used a neutral, formal tone", "My recommendations follow from the facts"],
  proposal: ["I explained the problem clearly", "I proposed specific, realistic actions", "I persuaded the reader with benefits and evidence", "I used a formal register"],
  article: ["My title and first line make people want to read", "I spoke directly to the reader", "I used varied, precise vocabulary", "I ended with a strong final thought"],
  talk: ["I spoke for the whole time", "I answered every part of the task", "I spoke clearly enough to be understood"],
  narrate: ["I told events in order", "I used past tenses", "I said how I felt and why"],
  argue: ["I gave my view and at least two reasons", "I used an example for each reason", "I mentioned the opposite view"],
  explain: ["I explained step by step", "I used sequencing words", "I checked the listener could follow, with examples"],
  persuade: ["I opened with something that grabs attention", "I used evidence or examples, not just feelings", "I finished with a clear call to action"],
};

type Spec = [Genre, string, string];
type Band = { minWords: number; seconds: number; writing: Spec[]; speaking: Spec[] };

const B: Record<BandId, Band> = {
  "A1+": { minWords: 30, seconds: 30,
    writing: [
      ["message", "Write a message to a new friend. Say your name, age, where you live and what you like.", "Write a message to a new classmate. Tell them about your family and your pets."],
      ["description", "Describe your bedroom. What's in it? What colour is it? What do you like about it?", "Describe your favourite place in your town or city."],
      ["message", "Write to a friend about your weekend plans. Say where, when and who with.", "Invite a friend to your birthday party. Give the day, time and place."],
      ["description", "Describe a person in your family: what they look like and what they like doing.", "Describe your best friend: how they look and why you like them."],
      ["story", "Write about your day yesterday. What did you do in the morning, afternoon and evening?", "Write about your last birthday. Where were you and what did you do?"],
      ["message", "Write a short note to your teacher. Say why you were absent and what you will do.", "Write to a friend. Tell them about a new game, series or song you like."],
    ],
    speaking: [
      ["talk", "Introduce yourself: your name, age, family and three things you like.", "Talk about your school: what it's like and your favourite subject."],
      ["talk", "Describe a normal day for you, from morning to night.", "Talk about your favourite food and when you eat it."],
      ["talk", "Talk about your house or flat. How many rooms? Which room do you like most?", "Talk about your town: what you can do there."],
      ["narrate", "Tell me what you did last weekend.", "Tell me about a nice day you remember."],
      ["talk", "Talk about a person you admire. Who are they and why?", "Talk about your favourite animal and why you like it."],
      ["talk", "What do you want to do next year? Talk about your plans.", "Talk about your hobbies: what, when, who with."],
    ] },
  A2: { minWords: 50, seconds: 45,
    writing: [
      ["email", "Write an email to a friend about a trip you took. Where did you go, what did you do, how was it?", "Email a friend about a concert, match or event you went to."],
      ["message", "Your friend wants to visit your city. Write a message with three things to do and where to eat.", "Write a message to a friend who is new at your school, with tips for the first week."],
      ["story", "Write about a day when something went wrong. What happened and what did you do?", "Write about the first time you did something (cooked, travelled alone, played a match)."],
      ["description", "Describe your favourite series or film. Who's in it and what happens?", "Describe a video game you love: the world, the characters and what you do."],
      ["email", "Write to a shop. Something you bought is broken. Say what, when and what you want.", "Write to a sports club. Ask about times, prices and what to bring."],
      ["opinion", "Is it better to live in a city or in the countryside? Give your opinion and two reasons.", "Should students have homework at weekends? Say what you think and why."],
    ],
    speaking: [
      ["narrate", "Tell me about your last holiday. Where did you go and what did you do?", "Tell me about a funny thing that happened at school."],
      ["talk", "Compare your life now with your life five years ago.", "Compare two places you know. Which do you prefer?"],
      ["explain", "Explain how to make a simple food or drink you like.", "Explain how to get from your home to your school."],
      ["talk", "Talk about your plans for the next holidays.", "Talk about something you're saving money for."],
      ["talk", "Describe a photo or picture that is special to you.", "Describe your favourite celebration in Colombia."],
      ["argue", "Phones at school: good or bad? Give your opinion.", "Is it better to study alone or with friends? Say why."],
    ] },
  "A2+": { minWords: 70, seconds: 60,
    writing: [
      ["story", "Write a story that begins: 'When I opened the door, I couldn't believe my eyes.'", "Write a story that ends: '…and that's why I never go there without my phone.'"],
      ["email", "Write to an English-speaking family you will stay with. Introduce yourself and ask three questions.", "Write to a pen pal about how you celebrate a holiday in Colombia."],
      ["review", "Write a short review of a restaurant, café or street-food stall you know.", "Write a short review of an app you use every day."],
      ["opinion", "Some people say teenagers spend too much time online. Do you agree?", "Should all students learn to cook at school? Give your opinion."],
      ["description", "Describe a festival or event in your region for a visitor who has never been.", "Describe the most interesting place you have ever visited."],
      ["email", "You lost something important on a bus. Write to the bus company to describe it and ask for help.", "Write to your teacher to ask for more time for a project. Explain why."],
    ],
    speaking: [
      ["narrate", "Tell me about a time you helped someone, or someone helped you.", "Tell me about a mistake you made and what you learnt."],
      ["argue", "Should young people work part-time while they study? Give your view.", "Is it important to learn a second language? Why?"],
      ["talk", "Describe your ideal job. What would you do and why?", "Describe your perfect weekend."],
      ["explain", "Explain the rules of a game or sport you know.", "Explain how to stay safe online."],
      ["talk", "Talk about a series, film or book that you'd recommend. Why?", "Talk about a musician or artist you like and their work."],
      ["persuade", "Persuade your class to join a club you like.", "Persuade a friend to try a food from your region."],
    ] },
  B1: { minWords: 100, seconds: 75,
    writing: [
      ["story", "Write a story called 'The wrong message'. Something goes wrong after a message is sent to the wrong person.", "Write a story in which a character finds something unusual on the way to school."],
      ["opinion", "'Social media does more harm than good to teenagers.' Do you agree? Give reasons and examples.", "Should video games be considered a sport? Give your opinion with examples."],
      ["review", "Write a review of a series or film for a student website. Would you recommend it?", "Write a review of a book or graphic novel for your school magazine."],
      ["email", "Write a formal email applying to be a volunteer at a summer camp. Explain why you're a good choice.", "Write to your school director suggesting one change that would improve student life."],
      ["article", "Write an article for a school magazine: 'The best place in my region that tourists don't know'.", "Write an article: 'Three habits that changed my life'."],
      ["essay", "Write an essay: should school start later for teenagers? Use reasons from both sides.", "Write an essay: is it better to study at university or to start working at 18?"],
    ],
    speaking: [
      ["narrate", "Tell me about an experience that changed your opinion about something.", "Tell me about a challenge you faced and how you dealt with it."],
      ["argue", "Some people think homework should be banned. What do you think?", "Should Colombia invest more in public transport or in roads? Give your view."],
      ["explain", "Explain a hobby or skill you have to someone who knows nothing about it.", "Explain how a game, app or tool you use works."],
      ["persuade", "Persuade your school to organise a trip to a place you choose.", "Persuade your friends to reduce their plastic use."],
      ["talk", "Talk about a person from history or today who you think is inspiring.", "Talk about a tradition in your family and what it means to you."],
      ["argue", "Is it better to have a few close friends or many friends? Discuss.", "Are influencers good role models? Give your opinion."],
    ] },
  "B1+": { minWords: 130, seconds: 90,
    writing: [
      ["essay", "'Every teenager should have a part-time job.' Discuss advantages and disadvantages and give your view.", "'Exams are the best way to measure what students know.' Discuss."],
      ["review", "Review a video game for a gaming blog: story, gameplay, design and value.", "Review a museum, park or tourist attraction for a travel website."],
      ["report", "Your school wants to improve its cafeteria. Write a short report on what students think and recommend changes.", "Write a report on how students in your class use their free time, with recommendations."],
      ["story", "Write a story that includes a secret, a storm and a decision.", "Write a story told by an object (a phone, a backpack, a football)."],
      ["email", "Write a formal complaint about a service (internet, delivery, bus). Describe the problem and ask for a solution.", "Write to a company asking for information about an internship."],
      ["article", "Write an article: 'What my grandparents' generation got right'.", "Write an article: 'How to survive your first week at a new school'."],
    ],
    speaking: [
      ["argue", "Should zoos exist? Give your view and answer an obvious counter-argument.", "Is it fair for famous athletes to earn so much? Discuss."],
      ["narrate", "Describe a moment when you felt really proud of yourself.", "Tell the story of a trip that didn't go as planned."],
      ["explain", "Explain the causes of a problem in your city and one possible solution.", "Explain why a historical event you studied was important."],
      ["persuade", "Pitch an app idea that would help students. Convince investors.", "Convince your city to create a free activity for young people."],
      ["talk", "Compare studying online and studying in a classroom.", "Compare life for teenagers today with life 30 years ago."],
      ["argue", "Should voting be allowed from age 16? Discuss.", "Should schools teach financial skills? Discuss."],
    ] },
  B2: { minWords: 170, seconds: 105,
    writing: [
      ["essay", "'Artificial intelligence will do more to help students than to harm them.' To what extent do you agree?", "'Tourism brings more problems than benefits to local communities.' Discuss with examples from Colombia."],
      ["report", "Write a report for your school on how to reduce waste, based on a survey of students.", "Write a report evaluating a club or activity at your school, with recommendations."],
      ["review", "Write a review comparing two films, series or games in the same genre.", "Review a book that you think every teenager should read."],
      ["proposal", "Propose a project to improve a public space near your school. Explain the benefits and costs.", "Propose an exchange programme between your school and a school abroad."],
      ["article", "Write an article for an international teen magazine about a social issue in your country.", "Write an article: 'The skill no school teaches, but everyone needs'."],
      ["email", "Write a formal letter to a newspaper responding to an article that criticised teenagers.", "Write a cover letter for a summer job at an international company."],
    ],
    speaking: [
      ["argue", "Some say social media has made us more connected but lonelier. Discuss both sides.", "Should university be free for everyone? Discuss."],
      ["explain", "Explain a concept from a subject you like (science, history, art) to a younger student.", "Explain how fake news spreads and how people can protect themselves."],
      ["persuade", "Persuade a panel to fund a youth project in your community.", "Convince a company to hire young people with no experience."],
      ["narrate", "Talk about a decision that shaped who you are today.", "Describe a time you had to adapt to a completely new situation."],
      ["argue", "Is it ethical to keep animals for entertainment? Discuss.", "Should celebrities use their fame to talk about politics? Discuss."],
      ["talk", "Choose a photo of a city and speculate about life there.", "Talk about how your generation will change the world of work."],
    ] },
  "B2+": { minWords: 200, seconds: 120,
    writing: [
      ["essay", "'Privacy is the price we pay for free online services.' Discuss, considering different points of view.", "'Cities should ban private cars from their centres.' To what extent do you agree?"],
      ["proposal", "Write a proposal to the town council for a festival that celebrates local culture.", "Propose a mental-health support programme for students at your school."],
      ["article", "Write a feature article on a Colombian innovation or invention the world should know about.", "Write an opinion column: 'Why my generation reads more than you think'."],
      ["report", "Report on the advantages and disadvantages of introducing a four-day school week.", "Report on how students use AI tools, with recommendations for teachers."],
      ["review", "Write a critical review of a documentary, analysing its message and techniques.", "Review an exhibition or performance you attended, evaluating it for a cultural magazine."],
      ["essay", "'Success depends more on luck than on hard work.' Discuss.", "'Globalisation threatens local cultures.' Discuss with examples."],
    ],
    speaking: [
      ["argue", "Should governments limit how much time young people spend on social media?", "Is space exploration worth the money while problems remain on Earth?"],
      ["explain", "Explain a complex process (how vaccines work, how elections work, how a game is made).", "Explain the history behind a tradition or place in your region."],
      ["persuade", "Give a two-minute speech to persuade your school to go plastic-free.", "Persuade a sceptical audience that video games can be art."],
      ["talk", "Compare two different solutions to a problem in your city and recommend one.", "Talk about a book, film or work of art that challenged your thinking."],
      ["argue", "Should schools grade students on effort as well as results?", "Is it better to specialise early or to keep options open?"],
      ["narrate", "Tell the story of someone who changed their community, and what we can learn from them.", "Describe a turning point in your life and reflect on it."],
    ] },
  C1: { minWords: 230, seconds: 150,
    writing: [
      ["essay", "'The education system prepares students for a world that no longer exists.' Critically discuss.", "'Economic growth and environmental protection are incompatible.' Discuss."],
      ["report", "Write a report for an NGO assessing the impact of a youth programme, with evidence-based recommendations.", "Write a report on digital inequality among students in your region."],
      ["proposal", "Write a funding proposal for a research project you would like to carry out.", "Propose a policy to reduce food waste in your city, anticipating objections."],
      ["review", "Write a critical review of a novel or film, discussing themes, technique and impact.", "Write a review essay comparing how two works treat the same theme."],
      ["article", "Write a long-form article exploring a scientific idea for a general audience.", "Write a reflective essay on what a classic text still says about today."],
      ["essay", "'Freedom of speech should have no limits.' Discuss, considering ethical and legal perspectives.", "'Technology has made us more productive but less thoughtful.' Discuss."],
    ],
    speaking: [
      ["argue", "Discuss whether universal basic income is a realistic solution to automation.", "Discuss the role of museums in returning cultural objects to their countries of origin."],
      ["explain", "Give a short lecture on a topic you know well, as if to university students.", "Explain the main arguments in a debate you've followed recently."],
      ["persuade", "Deliver a persuasive speech on a cause you care about, using rhetorical techniques.", "Pitch a social enterprise to a panel of investors."],
      ["talk", "Analyse a piece of art, music or literature and what it means to you.", "Evaluate the pros and cons of a recent technology."],
      ["argue", "Is it ethical to use genetic editing on humans?", "Should historical figures be judged by today's values?"],
      ["narrate", "Reflect on how your thinking about an important issue has changed over time.", "Tell a story about a failure that taught you more than a success."],
    ] },
  C2: { minWords: 260, seconds: 180,
    writing: [
      ["essay", "'What cannot be measured cannot be managed.' Critically evaluate this claim in relation to education or health.", "'Every generation believes it is living through unprecedented change.' Discuss."],
      ["article", "Write a feature for a quality magazine on a neglected chapter of Colombian history.", "Write a column that takes an unpopular but defensible position on a current issue."],
      ["proposal", "Draft a policy proposal for national education reform, anticipating counter-arguments.", "Propose an ethical framework for the use of AI in schools."],
      ["review", "Write a critical essay on how a contemporary poet or essayist uses language.", "Review a translation of a literary work, discussing what is gained and lost."],
      ["report", "Write an executive summary of a complex issue for decision-makers, with options and risks.", "Write a briefing on misinformation for a newsroom, with recommendations."],
      ["essay", "'Language shapes thought.' Discuss with reference to bilingual experience.", "'The arts are a luxury in times of crisis.' Discuss."],
    ],
    speaking: [
      ["argue", "Debate whether national identity still matters in a globalised world.", "Discuss whether progress is an illusion."],
      ["explain", "Explain a difficult idea from philosophy, science or economics to a non-specialist.", "Present and critique a research finding you find surprising."],
      ["persuade", "Give a keynote-style talk on the future of your profession or field.", "Deliver a speech that could change your listeners' minds on a contested issue."],
      ["talk", "Analyse the rhetoric of a famous speech and why it works.", "Compare two cultural perspectives on the same value (time, family, success)."],
      ["argue", "Is meritocracy fair?", "Should there be limits on scientific research?"],
      ["narrate", "Reflect on a text, place or person that has profoundly shaped your thinking.", "Tell a personal story that illustrates a universal truth."],
    ] },
};

/** Weeks start on Monday, Bogotá time. Week numbers count from a fixed Monday, so the cycle is the same for everyone. */
export function weekKey(d = new Date()): { key: string; index: number } {
  const bog = new Date(d.toLocaleString("en-US", { timeZone: "America/Bogota" }));
  const monday = new Date(bog.getFullYear(), bog.getMonth(), bog.getDate() - ((bog.getDay() + 6) % 7));
  const epoch = new Date(2026, 0, 5); // a Monday
  const index = Math.round((monday.getTime() - epoch.getTime()) / (7 * 86_400_000));
  const key = `${monday.getFullYear()}-${String(monday.getMonth() + 1).padStart(2, "0")}-${String(monday.getDate()).padStart(2, "0")}`;
  return { key, index };
}

export type WeeklyTask = { genre: Genre; task: ProductionTask };

/** This week's writing and speaking for a band. */
export function weeklyFor(band: BandId, index = weekKey().index): { writing: WeeklyTask; speaking: WeeklyTask } {
  const b = B[band];
  const i = ((index % 6) + 6) % 6;
  const make = ([genre, p1, p2]: Spec, speak: boolean): WeeklyTask => ({
    genre,
    task: {
      prompts: [{ text: p1 }, { text: p2 }],
      minWords: speak ? Math.round(b.seconds * 0.9) : b.minWords,
      seconds: speak ? b.seconds : undefined,
      checks: [],
      rubric: CHECKS[genre],
      model: "",
    },
  });
  return { writing: make(b.writing[i], false), speaking: make(b.speaking[i], true) };
}

export const GENRE_NAME: Record<Genre, string> = {
  message: "Message", email: "Email", description: "Description", story: "Story", opinion: "Opinion", review: "Review", essay: "Essay",
  report: "Report", proposal: "Proposal", article: "Article", talk: "Talk", narrate: "Story", argue: "Discussion", explain: "Explanation", persuade: "Persuasive talk",
};

/** The teacher's rubric: four CEFR criteria per skill, each marked against the student's band. */
export const RUBRIC = {
  writing: [
    { id: "task", name: "Task", hint: "Did it do everything the task asked, for the right reader?" },
    { id: "organisation", name: "Organisation", hint: "Paragraphs, linking, a clear order." },
    { id: "range", name: "Range", hint: "Variety of vocabulary and grammar for this band." },
    { id: "accuracy", name: "Accuracy", hint: "Mistakes that confuse the reader, or ones that don't." },
  ],
  speaking: [
    { id: "task", name: "Task", hint: "Did it answer every part, for the whole time?" },
    { id: "fluency", name: "Fluency", hint: "Keeps going, links ideas, few long pauses." },
    { id: "range", name: "Range", hint: "Variety of vocabulary and grammar for this band." },
    { id: "accuracy", name: "Accuracy and sounds", hint: "Grammar and pronunciation the listener can follow." },
  ],
} as const;

export const MARKS = [
  { v: -1, label: "Below band" },
  { v: 0, label: "At band" },
  { v: 1, label: "Above band" },
] as const;
