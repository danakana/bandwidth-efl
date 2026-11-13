/* B2+ Communicate. Six Bloom steps per skill. Original content for Bandwidth EFL. For teacher review. */
import type { NodePractice } from "./types";
import { ch, ctx, dict, fix, gap, heard, say, tr } from "./helpers";

const C = (n: string, k: "notice" | "dict") => `p/b2pc-${n}-${k}.mp3`;

export const B2P_COMMUNICATE_CLIPS: { file: string; script: string; voice: string }[] = [
  { file: C("01", "notice"), voice: "3f6pec3wODJsjTqtcNI2", script: "The article argues that homework should be banned. However, the argument fails to consider students who have no quiet place to study at home. Surely we must ask what would replace it, before we throw it away." },
  { file: C("01", "dict"), voice: "8DvnqWWA3WWXixOm7zQI", script: "The argument fails to consider the cost." },
  { file: C("02", "notice"), voice: "tPDVQaZ6fdDCUmYpHyYd", script: "OK, that's a really interesting point, Tomás, but let's get back to the main question. Could we hear from someone who hasn't spoken yet? Sofía, what do you think? And just to sum up so far, most of us agree that the trip should be in May." },
  { file: C("02", "dict"), voice: "MAy1fRIg5hTqbhiwOUyh", script: "Could we hear from someone else?" },
  { file: C("03", "notice"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "Dear Ms Rojas, thank you for your application. I'm afraid we are unable to offer you a place on this year's programme. We would appreciate it if you could keep us in mind for future opportunities." },
  { file: C("03", "dict"), voice: "bIHbv24MWmeRgasZH58o", script: "I'm afraid we are unable to help." },
  { file: C("04", "notice"), voice: "9hb1f7xQcMLB90qbYSY3", script: "Here's the academic version. Research suggests that regular exercise may improve memory. And here's the blog version. Honestly, this blew my mind. Go for a run and you'll remember stuff way better. Same idea, very different voice." },
  { file: C("04", "dict"), voice: "QW1sSL71Pw5oHbFDen25", script: "Research suggests that sleep may improve memory." },
  { file: C("05", "notice"), voice: "cgSgspJ2msm6clMCkdW9", script: "[sarcastic] Oh great, another Monday. [flat] I just love it when the bus is forty minutes late. [sarcastic] And of course it starts raining the moment I forget my umbrella. [laughs] Perfect." },
  { file: C("05", "dict"), voice: "ideEOMYLgcyF9rr94ycz", script: "[sarcastic] Oh, that's just perfect." },
  { file: C("06", "notice"), voice: "bIHbv24MWmeRgasZH58o", script: "So we went to this sort of festival thing in the park, and there were, like, food stalls and music and stuff like that. It was kind of crowded, but it was fun. We got back at around eleven or something." },
  { file: C("06", "dict"), voice: "63T2Z5X6a8FKjTpmpqjH", script: "There was music and food and stuff like that." },
];

const critique: NodePractice = {
  nodeId: "b2p.critique-and-persuade",
  explain: "At B2 you argued and conceded. At B2+ you critique other people's arguments and persuade with force but fairness. Critique: The argument fails to consider…, This overlooks the fact that…, The evidence for this is limited…, This assumes that… Persuade: Surely we must…, There is a strong case for…, It is hard to deny that…, Consider what would happen if… Attack the argument, never the person.",
  pattern: ["Critique: The argument fails to consider… · This overlooks… · This assumes that…", "Weak evidence: The evidence for this is limited / anecdotal…", "Persuade: Surely we must… · There is a strong case for… · It is hard to deny that…", "Imagine: Consider what would happen if… · What if…?"],
  steps: [
    [
      heard(C("01", "notice"), "What does the article argue?", ["Homework should be banned.", "Homework should increase.", "Students need quiet rooms."], 0, "'The article argues that homework should be banned.'"),
      heard(C("01", "notice"), "What does the speaker say the argument fails to consider?", ["Students with no quiet place to study at home", "Teachers' salaries and how much they work", "Homework that students get at weekends"], 0, "'fails to consider students who have no quiet place…'"),
      ch("'The argument fails to consider…' is used to…", ["point out a weakness in an argument", "agree strongly with the other speaker", "change the subject to something new"], 0, "A classic critique phrase."),
      ch("'Surely we must…' is used to…", ["persuade, suggesting something is obvious", "ask a real question that needs an answer", "show doubt about the speaker's own idea"], 0, "Surely = this should be obvious."),
      ch("Which critiques the argument, not the person?", ["This overlooks the cost.", "The writer is clearly an idiot.", "Nobody likes him."], 0, "Fair critique."),
    ],
    [
      ch("'This assumes that all students have internet.' The speaker thinks the argument…", ["relies on something that may not be true", "is perfect for every student in the class", "is about how fast the internet is"], 0, "Identify hidden assumptions."),
      ch("'The evidence for this is largely anecdotal.' Meaning?", ["It's based on personal stories, not research.", "It's very strong, scientific and widely tested.", "It comes from a famous study."], 0, "anecdotal = based on anecdotes."),
      ch("'It is hard to deny that…' introduces…", ["a point the speaker presents as almost certainly true", "a doubt the speaker has about their own point", "a joke to relax the audience"], 0, "Persuasive framing."),
      ch("'Consider what would happen if every school did this.' The technique is…", ["asking the audience to imagine consequences", "giving the audience exact statistics", "insulting the people on the other side"], 0, "Imagined consequences persuade."),
      ctx("A debater says: 'My opponent's plan sounds attractive. However, it overlooks one crucial detail: who pays?'", "The debater…", ["concedes, then critiques", "agrees completely", "attacks the opponent personally"], 0, "Fair and strong."),
    ],
    [
      gap("The argument fails to", "the needs of rural students.", ["consider", "take into account", "address"], "fails to consider."),
      gap("", "we must act before it is too late.", ["Surely"], "Surely + we must…"),
      gap("This", "the fact that many families cannot afford laptops.", ["overlooks", "ignores"], "This overlooks the fact that…"),
      dict(C("01", "dict"), ["The argument fails to consider the cost"]),
      tr("Make it a fair critique with the words given.", "Your idea is stupid because it costs too much.", ["The argument fails to consider the cost", "This idea fails to consider the cost", "The proposal fails to consider the cost"], "Critique the idea, not the person.", "fails to consider"),
    ],
    [
      fix(["The argument", "fails considering", "the risks."], 1, ["fails to consider"], "fail + to-infinitive."),
      fix(["This", "overlooks that", "most students work after school."], 1, ["overlooks the fact that", "ignores the fact that"], "overlook + noun, or overlook the fact that."),
      fix(["Sure", "we must", "protect the river."], 0, ["Surely"], "Surely (adverb), not Sure."),
      ch("Which critique is unfair?", ["She's only saying that because she's young.", "Her argument assumes everyone has a car.", "Her evidence comes from one small study."], 0, "Attacks the person (ad hominem)."),
      ch("Which is the weakest persuasion?", ["Everyone knows I'm right.", "There is a strong case for change: three studies show…", "Consider what would happen if we did nothing."], 0, "No reason or evidence."),
    ],
    [
      ch("Which is best in an opinion article?", ["While the proposal has merits, it fails to consider who would pay for it.", "The proposal is rubbish and whoever wrote it should feel embarrassed.", "I don't like it, sorry. It's just not for me, and that's my opinion."], 0, "Balanced critique."),
      ch("Which persuasive ending is strongest?", ["Surely, if we care about our future, we must act now.", "So, yeah, maybe we should do something about it at some point.", "That's all I have to say, thanks for listening, bye."], 0, "Clear, confident call to action."),
      ch("In a friendly chat, which is most natural?", ["Yeah, but what about the cost?", "The argument fails to consider the financial implications.", "Surely we must examine the fiscal dimension."], 0, "Match the register."),
      ch("What makes persuasion fair?", ["Strong reasons and evidence, and respect for the other side", "Shouting louder and longer than the other side", "Insulting the opponent personally"], 0, "Persuade the mind, don't attack the person."),
      say("Surely we must ask what would replace it before we throw it away.", "Stress SURELY and REPLACE."),
    ],
  ],
  create: {
    prompts: [
      { text: "Someone argues that school uniforms should be banned. Write a reply (80 words or more) that critiques their argument and persuades readers of your view. Use at least two critique phrases and one persuasive phrase." },
      { universe: "screens", text: "Someone argues that video games make teenagers violent. Write a reply (80 words or more) that critiques the argument and persuades readers. Use at least two critique phrases and one persuasive phrase." },
      { universe: "futures", text: "Someone argues that cars should be banned from city centres. Write a reply (80 words or more) with at least two critique phrases and one persuasive phrase." },
    ],
    minWords: 80,
    checks: [
      { label: "Two critique phrases (fails to consider, overlooks, assumes that, the evidence… is limited/anecdotal, ignores the fact)", pattern: "\\b(fails? to (consider|take into account|address|explain)|overlook(s|ed)?|assumes? that|(evidence|data)[^.!?]{0,25}(limited|anecdotal|weak|unclear)|ignores? the fact)\\b", min: 2 },
      { label: "A persuasive phrase (Surely, There is a strong case, It is hard to deny, Consider what would happen…)", pattern: "\\b(surely|there is a strong case|it is hard to deny|it'?s hard to deny|consider what would happen|imagine (if|what))\\b", min: 1 },
    ],
    rubric: ["I critiqued the argument, not the person.", "I gave at least one reason or example.", "My last sentence persuades."],
    model: "The writer argues that uniforms should be banned because they limit self-expression. However, this argument fails to consider families who cannot afford fashionable clothes. Without uniforms, students would be judged by brands, not ideas. The article also assumes that clothes are the main way teenagers express themselves, yet we do so through music, art and what we say. Surely we must protect students from extra pressure. There is a strong case for keeping uniforms, perhaps with more flexible rules for older students.",
  },
};

const discussion: NodePractice = {
  nodeId: "b2p.manage-a-discussion",
  explain: "Managing a discussion means guiding it, not dominating it. Bring it back: Let's get back to… / Coming back to the main point… Invite others: Could we hear from…? / What do you think, Sofía? Interrupt politely: Sorry to interrupt, but… / Can I just come in here? Hold your turn: If I could just finish… Summarise: So, to sum up so far… / It sounds like most of us agree that… These phrases are gold in group work, debates and speaking exams.",
  pattern: ["Refocus: Let's get back to… · Coming back to the main question…", "Invite: Could we hear from…? · What's your view, …?", "Interrupt / hold: Sorry to interrupt, but… · Can I just come in here? · If I could just finish…", "Summarise: So, to sum up so far… · It sounds like most of us agree that…"],
  steps: [
    [
      heard(C("02", "notice"), "Why does the speaker interrupt Tomás's topic?", ["To get back to the main question", "Because Tomás is being very rude", "To end the meeting early"], 0, "'let's get back to the main question'."),
      heard(C("02", "notice"), "Who does she invite to speak?", ["Sofía, who hasn't spoken yet", "Tomás again, to finish his point", "The teacher, to decide"], 0, "'Could we hear from someone who hasn't spoken yet? Sofía…'"),
      heard(C("02", "notice"), "What do most people agree on so far?", ["The trip should be in May.", "The trip should be cancelled.", "The trip should be in June."], 0, "'most of us agree that the trip should be in May'."),
      ch("'Could we hear from someone else?' is used to…", ["invite quieter people to speak", "end the discussion politely", "disagree with the last speaker"], 0, "Inviting."),
      ch("'Sorry to interrupt, but…' is…", ["a polite way to take the floor", "rude in most situations", "a way to summarise the discussion"], 0, "Polite interruption."),
    ],
    [
      ch("Why summarise during a discussion?", ["To check agreement and keep the group focused", "To end the discussion quickly and go home", "To show off what you know"], 0, "Summaries keep everyone on track."),
      ch("'If I could just finish my point…' is used when…", ["someone interrupts you", "you want to stop", "you agree"], 0, "Holding your turn politely."),
      ctx("Two classmates keep talking about football during a project meeting.", "Best phrase?", ["That's interesting, but let's get back to the project.", "Stop talking about football, it's not the project!", "Football is boring. Talk about the project now."], 0, "Firm but friendly."),
      ch("'Can I just come in here?' means…", ["Can I add something now?", "Can I enter the room?", "Can I leave?"], 0, "Asking to join the conversation."),
      ch("A good discussion manager…", ["guides and includes everyone", "talks the most in the group", "decides everything alone"], 0, "Lead, don't dominate."),
    ],
    [
      gap("That's a great point, but let's get", "to the budget.", ["back"], "get back to."),
      gap("Could we", "from Camila? She hasn't said anything yet.", ["hear"], "Could we hear from…?"),
      gap("So, to sum", "so far, we agree on the date.", ["up"], "to sum up."),
      dict(C("02", "dict"), ["Could we hear from someone else"]),
      say("Sorry to interrupt, but can I just come in here?", "Friendly tone, slight rise on HERE."),
    ],
    [
      fix(["Let's", "return back", "to the main question."], 1, ["get back", "return", "go back", "come back"], "return back repeats itself."),
      fix(["Sorry for interrupt,", "but", "I disagree."], 0, ["Sorry to interrupt,"], "Sorry to interrupt."),
      fix(["To", "resume,", "we all agree on May."], 1, ["sum up,", "summarise,", "summarize,"], "Spanish 'resumir' = summarise ('resume' = continue)."),
      ch("Which is too rude for a group discussion?", ["Be quiet, it's my turn.", "If I could just finish my point…", "Sorry, could I just add something?"], 0, "Direct commands sound aggressive."),
      ch("Which invitation is most inclusive?", ["Sofía, we haven't heard from you yet. What do you think?", "Does anybody else want to talk, or no? Nobody? OK.", "OK, nobody is talking, so I'll decide everything myself."], 0, "Name + open question."),
    ],
    [
      ch("You're chairing a debate and time is nearly up. Best?", ["We've got two minutes left, so let's sum up the main points.", "Time's up. Bye, everyone. We didn't finish, but that's OK.", "Keep talking, it's fine, we have lots of time."], 0, "Signal and summarise."),
      ch("A classmate is dominating the discussion. Best?", ["Thanks, Diego. Let's hear some other views. Ana?", "Diego, stop talking, please. You talk too much.", "Say nothing and let Diego continue."], 0, "Thank, then redirect."),
      ch("In a speaking exam with a partner, which shows strong interaction?", ["What's your view on that? I'd say…", "Talking for three minutes without pausing", "Just agreeing with everything"], 0, "Invite and respond."),
      ch("Which summary is most useful?", ["So far, most of us agree on May, but we still need to decide the budget.", "OK, cool. Lots of good stuff today, I think, and some bad stuff too.", "Lots of ideas were said by lots of people."], 0, "Agreement + what's left."),
      say("Thanks, Tomás. Let's get back to the main question.", "Warm, then firm."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write the script of a short group discussion (80 words or more) where you are the leader. Use at least one phrase to refocus, one to invite someone, and one to summarise." },
      { universe: "arts", text: "Write the script of a group planning a school art show (80 words or more), where you lead. Refocus, invite someone and summarise." },
    ],
    minWords: 80,
    checks: [
      { label: "Refocus (let's get back to, coming back to, back to the main…)", pattern: "\\b(let'?s get back to|coming back to|back to the (main|question|point|topic)|let'?s focus on)\\b", min: 1 },
      { label: "Invite (could we hear from, what do you think, what's your view…)", pattern: "\\b(could we hear from|what do you think|what'?s your (view|opinion)|we haven'?t heard from|would you like to add)\\b", min: 1 },
      { label: "Summarise (to sum up, so far, it sounds like most of us agree…)", pattern: "\\b(to sum up|so far|it sounds like (most of )?(us|we)|in summary|to summari[sz]e)\\b", min: 1 },
    ],
    rubric: ["As leader, I included everyone.", "I interrupted politely, not rudely.", "My summary says what's decided and what's left."],
    model: "Me: OK, the question is where to go for our class trip.\nDiego: The beach! Also, did you see the match last night?\nMe: Ha, great match, but let's get back to the trip. Valentina, we haven't heard from you. What do you think?\nValentina: I'd prefer a museum, because it's cheaper.\nDiego: Sorry to interrupt, but the beach is more fun.\nMe: Fair point. So far, it sounds like most of us want something cheap and fun. Let's compare prices tomorrow and vote.",
  },
};

const email: NodePractice = {
  nodeId: "b2p.diplomatic-formal-email",
  explain: "Diplomatic emails deliver difficult messages politely: refusals, complaints, requests. Soften bad news: I'm afraid we are unable to… / Unfortunately, it will not be possible to… Make requests indirect: We would appreciate it if you could… / I was wondering whether… Complain without attacking: I was disappointed to find that… / I would be grateful if this could be resolved. Close warmly: Thank you for your understanding. / I look forward to hearing from you.",
  pattern: ["Bad news: I'm afraid we are unable to… · Unfortunately, it will not be possible to…", "Requests: We would appreciate it if you could… · I was wondering whether…", "Complaints: I was disappointed to find that… · I would be grateful if…", "Close: Thank you for your understanding. · I look forward to hearing from you."],
  steps: [
    [
      heard(C("03", "notice"), "What is the email's main message?", ["The applicant hasn't got a place this year.", "The applicant has a place starting this year.", "The programme has been cancelled this year."], 0, "'I'm afraid we are unable to offer you a place'."),
      heard(C("03", "notice"), "What does the writer ask?", ["That she keep them in mind for the future", "That she apply again tomorrow with a new form", "That she pay a fee to apply"], 0, "'We would appreciate it if you could keep us in mind…'"),
      ch("'I'm afraid we are unable to…' is used to…", ["give bad news politely", "say you are scared", "make a promise"], 0, "I'm afraid = polite regret."),
      ch("'We would appreciate it if you could reply by Friday' is…", ["a polite request", "a threat", "a thank-you"], 0, "Indirect request."),
      ch("Which closing is diplomatic?", ["Thank you for your understanding.", "Whatever, it doesn't matter.", "Bye!! Talk soon!!"], 0, "Warm and formal."),
    ],
    [
      ch("Why say 'I was disappointed to find that…' instead of 'You ruined my order'?", ["It complains without attacking.", "It's more aggressive and direct.", "It's shorter and simpler."], 0, "Focus on the situation."),
      ch("'I was wondering whether you might be able to help.' This is…", ["a very polite request", "a question about the past", "a complaint"], 0, "Past continuous softens."),
      ch("Which is more diplomatic?", ["Unfortunately, it will not be possible to refund the ticket.", "No refunds. Sorry about that, those are the rules.", "We won't refund you the ticket."], 0, "Impersonal + unfortunately."),
      ctx("A teacher writes: 'I'd be grateful if you could double-check your references.'", "The teacher means…", ["Please check your references; there may be mistakes.", "Your references are perfect, well done.", "Thank you for the long list of references."], 0, "Polite, but clearly a request."),
      ch("Formal emails usually avoid…", ["contractions, slang and emojis", "full sentences and paragraphs", "greetings at the start"], 0, "I am, not I'm (in very formal emails)."),
    ],
    [
      gap("I'm", "we are unable to accept late submissions.", ["afraid"], "I'm afraid…"),
      gap("We would", "it if you could confirm by Monday.", ["appreciate"], "We would appreciate it if…"),
      gap("I look forward to", "from you.", ["hearing"], "look forward to + -ing."),
      dict(C("03", "dict"), ["I'm afraid we are unable to help", "I am afraid we are unable to help"]),
      tr("Make it diplomatic with the words given.", "Send me the documents by Friday.", ["I would be grateful if you could send me the documents by Friday", "I'd be grateful if you could send me the documents by Friday"], "I would be grateful if you could…", "grateful"),
    ],
    [
      fix(["I look forward", "to hear", "from you."], 1, ["to hearing"], "look forward to + -ing."),
      fix(["We would appreciate", "if you could", "reply soon."], 0, ["We would appreciate it"], "appreciate it if…"),
      fix(["I am writing", "for complain", "about my order."], 1, ["to complain"], "I am writing to + verb."),
      ch("Which is too direct for a formal complaint?", ["Your service is terrible and you should be ashamed.", "I was disappointed to find that the item was damaged.", "I would be grateful if this could be resolved."], 0, "Attacking tone."),
      ch("Which is wrong?", ["Thank you in advance for your comprehension.", "Thank you for your understanding.", "Thank you in advance for your help."], 0, "comprensión = understanding."),
    ],
    [
      ch("You must decline a club invitation from a teacher. Best?", ["Thank you so much for thinking of me. Unfortunately, I won't be able to join this term.", "No thanks, I don't want to join the club this term. Maybe another time, I don't know.", "I'm too busy, sorry, bye."], 0, "Thank, decline, soften."),
      ch("Your order arrived broken. Best first line?", ["I am writing regarding order 4471, which arrived damaged.", "YOUR COMPANY IS A JOKE. MY ORDER IS BROKEN AGAIN.", "Hi, so, bad news lol, my order came broken."], 0, "Clear and calm."),
      ch("Which email to your teacher about a late grade is best?", ["I was wondering whether you have had a chance to look at my essay.", "Where is my grade? I sent the essay two weeks ago, you know.", "You forgot my essay again. Please mark it now."], 0, "Polite nudge."),
      ch("When might 'I'm afraid…' be too formal?", ["Texting a close friend", "Writing to a university", "Replying to a customer"], 0, "Context matters."),
      say("I'm afraid we are unable to offer you a place this year.", "Calm, warm tone; stress UNable and PLACE."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a diplomatic email (90 words or more) to a company: your concert tickets were cancelled and you want a refund. Use a formal greeting, a soft complaint, a polite request and a warm close." },
      { text: "Write a diplomatic email (90 words or more) declining an invitation to speak at a school event, and suggesting someone else. Use soft refusal language, a polite request and a warm close." },
    ],
    minWords: 90,
    checks: [
      { label: "Formal greeting (Dear…)", pattern: "\\bdear\\b", min: 1 },
      { label: "Softened bad news or complaint (I'm afraid, unfortunately, I was disappointed…)", pattern: "\\b(i'?m afraid|i am afraid|unfortunately|i was disappointed|regrettably)\\b", min: 1 },
      { label: "Polite request (I would be grateful if, We would appreciate it if, I was wondering whether/if, Could you possibly…)", pattern: "\\b(would be grateful if|appreciate it if|i was wondering (whether|if)|could you possibly|would it be possible)\\b", min: 1 },
      { label: "Warm close (Thank you for your understanding, I look forward to hearing…, Kind regards…)", pattern: "\\b(thank you for your (understanding|help|time|patience)|i look forward to hearing|kind regards|yours sincerely|best regards)\\b", min: 1 },
    ],
    rubric: ["My email is calm and polite, even if I'm unhappy.", "I explained the situation clearly.", "I didn't use slang, emojis or capital letters for anger."],
    model: "Dear Customer Service Team,\n\nI am writing regarding my booking for the concert on 12 March (reference 88213). Unfortunately, I received an email yesterday saying that the event has been cancelled. I was disappointed to find that the email did not explain how to request a refund.\n\nI would be grateful if you could refund the full amount of 180,000 pesos to my original payment method. I was also wondering whether you could confirm when I should expect the money.\n\nThank you for your understanding. I look forward to hearing from you.\n\nKind regards,\nValentina Ruiz",
  },
};

const tone: NodePractice = {
  nodeId: "b2p.academic-tone-vs-blog-tone",
  explain: "The same idea can be written in an academic voice or a blog voice. Academic: impersonal (Research suggests…), cautious (may, appears to), precise vocabulary, no contractions, evidence-based. Blog: personal (I, you), emotional (Honestly, this blew my mind), contractions, questions to the reader, informal words (stuff, way better). Neither is better: the skill is choosing the right one and staying consistent.",
  pattern: ["Academic: Research suggests… · may / appears to · no contractions · precise words", "Blog: I / you · Honestly… · contractions · questions to the reader · stuff, way better", "Academic avoids: exclamation marks, slang, personal feelings", "Blog avoids: dense jargon, long passive sentences"],
  steps: [
    [
      heard(C("04", "notice"), "Which version says 'Research suggests'?", ["The academic version", "The blog version", "Both"], 0, "Impersonal and cautious."),
      heard(C("04", "notice"), "Which phrase is from the blog version?", ["this blew my mind", "may improve memory", "regular exercise"], 0, "Emotional, informal."),
      ch("Which is academic?", ["The findings indicate a possible link.", "OMG, there's totally a link here, guys!", "You won't believe this link!"], 0, "Cautious and impersonal."),
      ch("Which is blog style?", ["Ever wondered why you can't sleep? Same.", "Sleep disruption is associated with screen use.", "The data were analysed."], 0, "Question to reader + 'Same.'"),
      ch("Academic writing usually avoids…", ["contractions and slang", "evidence and references", "full, complete sentences"], 0, "do not, not don't."),
    ],
    [
      ch("Why does academic writing say 'may improve' instead of 'improves'?", ["Research rarely proves things completely; it's cautious.", "To sound unsure about the grammar of the verb.", "It's just a rule for some verbs."], 0, "Hedging."),
      ch("Why do blogs use 'you'?", ["To speak directly to the reader and build connection", "Because blogs are academic texts with references.", "To avoid giving any evidence."], 0, "Personal voice."),
      ch("Which mixes tones badly?", ["The data indicate a significant correlation, which is literally insane.", "The data indicate a significant correlation between the two.", "This is wild: the numbers really line up!"], 0, "Academic + 'literally insane' = clash."),
      ctx("A school website publishes: 'Students are kindly reminded that phones must be switched off.'", "This tone is…", ["formal and impersonal", "blog-like", "academic research"], 0, "Formal notice."),
      ch("Where does a blog tone fit best?", ["A personal post about your first month at a new school", "A science lab report for your biology class at school", "A university application essay"], 0, "Personal, informal context."),
    ],
    [
      tr("Rewrite in academic tone with the words given.", "Honestly, exercise makes you remember stuff way better!", ["Research suggests that exercise may improve memory", "Research suggests exercise may improve memory"], "Impersonal, cautious, precise.", "Research suggests"),
      tr("Rewrite in blog tone with the word given.", "It has been observed that many adolescents experience sleep deprivation.", ["Honestly, loads of teens don't get enough sleep", "Honestly, lots of teens don't get enough sleep", "Honestly, so many teens don't get enough sleep"], "Personal, informal.", "Honestly"),
      gap("The results", "to suggest a link between diet and mood.", ["appear", "seem"], "appear/seem to = cautious."),
      dict(C("04", "dict"), ["Research suggests that sleep may improve memory"]),
      gap("Studies", "that teenagers need about nine hours of sleep.", ["suggest", "indicate", "show"], "Academic reporting verb."),
    ],
    [
      fix(["The study", "proves 100%", "that sugar is bad."], 1, ["suggests", "indicates"], "Academic: cautious verbs, no '100%'."),
      fix(["The data", "are super interesting", "for this research."], 1, ["are highly relevant", "are of considerable interest", "are particularly relevant", "are highly significant"], "No 'super' in academic writing."),
      fix(["Researchers found", "a ton of", "evidence for this."], 1, ["substantial", "considerable", "a great deal of", "strong"], "Precise academic wording."),
      ch("Which sentence is wrong for an academic essay?", ["I personally think social media is super bad!!", "This essay will examine the effects of social media.", "Social media appears to affect sleep."], 0, "Personal, informal, exclamation marks."),
      ch("Which is wrong for a fun travel blog?", ["The present author conducted an observational visit to the beach.", "We finally made it to the beach, and wow, what a view.", "Here's what nobody tells you about Cartagena."], 0, "Too stiff for a blog."),
    ],
    [
      ch("You're writing a report for biology class. Best opening?", ["This report examines the effect of light on plant growth.", "So I grew some plants and here's the tea on what happened.", "Plants are cool, right? Let's talk about light."], 0, "Academic."),
      ch("You're writing an Instagram caption about the same experiment. Best?", ["Day 10 of my plant experiment: the ones by the window are winning!", "The present study examined phototropism in common plants.", "Results are statistically significant (p < 0.05)."], 0, "Blog/social tone."),
      ch("What's the most important tone skill?", ["Choosing the right voice for the reader and staying consistent", "Always being formal, whatever the situation or reader", "Always being casual and friendly"], 0, "Audience first."),
      ch("Which blog line still respects the facts?", ["Scientists think exercise might boost memory, which is pretty cool.", "Science says exercise makes you a genius, guaranteed!", "Exercise = instant A grades for every student."], 0, "Informal but accurate."),
      say("Research suggests that regular exercise may improve memory.", "Calm, clear academic delivery."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write the same idea twice (90 words or more in total): first as an academic paragraph, then as a blog post. Topic: the effect of phones on sleep." },
      { universe: "science", text: "Write about a science finding twice (90 words or more in total): once in academic tone, once as a blog post." },
      { universe: "past", text: "Write about a historical event twice (90 words or more in total): once in academic tone, once as a blog post." },
    ],
    minWords: 90,
    checks: [
      { label: "Academic markers (research suggests, may, appears to, studies indicate, it is…)", pattern: "\\b(research suggests|studies (suggest|indicate|show)|evidence (suggests|indicates)|appears? to|may (be|have|improve|affect|reduce|increase|cause)|is associated with|it is (likely|possible))\\b", min: 2 },
      { label: "Blog markers (honestly, you, I, contractions, a question to the reader)", pattern: "\\b(honestly|seriously|let'?s be real|you know|right\\?|i'?m|you'?re|don'?t|isn'?t|can'?t|it'?s)\\b|\\?", min: 3 },
    ],
    rubric: ["My academic version has no contractions or slang.", "My blog version sounds like a real person.", "Both say the same core idea accurately."],
    model: "Academic: Research suggests that using phones late at night may reduce sleep quality among adolescents. Studies indicate that light from screens appears to delay the release of melatonin, and that notifications are associated with interrupted sleep.\n\nBlog: Honestly, how many times have you said 'just one more video' at midnight? I'm guilty too. It turns out your phone isn't just keeping you entertained: it's tricking your brain into thinking it's daytime. So here's my challenge for you: phone in another room, lights out by eleven. Can you do it for a week?",
  },
};

const irony: NodePractice = {
  nodeId: "b2p.recognise-irony-and-sarcasm",
  explain: "Sarcasm says the opposite of what you mean, usually to criticise or joke: 'Oh great, another Monday' (= Mondays are terrible). Clues: a positive word in a negative situation, flat or exaggerated intonation, and words like 'just', 'of course', 'love it when'. Irony is broader: a situation turning out the opposite of what's expected (a fire station burning down). In writing, sarcasm is easy to misread, so avoid it in emails and formal texts.",
  pattern: ["Sarcasm = saying the opposite to criticise or joke: Oh great. Just perfect.", "Clues: positive word + bad situation · flat or exaggerated tone · 'I just love it when…'", "Situational irony: the opposite of what's expected happens", "In writing: easy to misread; avoid in formal or important messages"],
  steps: [
    [
      heard(C("05", "notice"), "How does the speaker really feel about Mondays?", ["She dislikes them.", "She loves them.", "She has no opinion."], 0, "'Oh great, another Monday' = sarcasm."),
      heard(C("05", "notice"), "'I just love it when the bus is forty minutes late.' She means…", ["She hates it when the bus is late.", "She enjoys waiting at the bus stop.", "The bus is usually early."], 0, "Positive words + negative situation."),
      heard(C("05", "notice"), "What happened to her umbrella?", ["She forgot it, and then it rained.", "It broke in the strong wind.", "She lost it on the bus."], 0, "'the moment I forget my umbrella'."),
      ch("Which is most likely sarcastic?", ["You failed the test? Well done, genius.", "You passed the test? Well done!", "Well done on your test."], 0, "Praise + failure."),
      ch("A fire station burns down. This is an example of…", ["situational irony", "sarcasm", "a metaphor"], 0, "The opposite of what you'd expect."),
    ],
    [
      ch("What's the main clue for sarcasm in speech?", ["Tone of voice that doesn't match the words", "Speaking fast without stopping to breathe", "Using long, difficult words"], 0, "Flat or exaggerated delivery."),
      ch("Why is sarcasm risky in text messages?", ["The reader can't hear your tone and may take it literally.", "It's always rude in any situation, with anyone.", "It's grammatically wrong in writing."], 0, "Tone is lost in writing."),
      ctx("Your friend arrives an hour late. You say: 'Thanks for being so punctual.'", "This is…", ["sarcasm", "a sincere compliment", "situational irony"], 0, "Opposite meaning."),
      ch("'Oh, that's just perfect.' Usually means…", ["Something has gone wrong.", "Everything is perfect.", "A question."], 0, "Common sarcastic phrase."),
      ch("Which is NOT a sarcasm clue?", ["A clear explanation with evidence", "A positive word in a bad situation", "Exaggerated praise"], 0, "Sarcasm is indirect."),
    ],
    [
      gap("It rained all weekend at the beach. 'Oh, fantastic weather,' she said", ".", ["sarcastically"], "Adverb: sarcastically."),
      gap("The traffic safety expert crashed his car: how", "!", ["ironic"], "Situational irony."),
      dict(C("05", "dict"), ["Oh, that's just perfect", "Oh that's just perfect", "Oh, that is just perfect"]),
      tr("Say it sincerely, without sarcasm, with the words given.", "Oh great, another test.", ["I'm not looking forward to another test", "I am not looking forward to another test"], "Direct and clear.", "looking forward"),
      say("Oh great, another Monday.", "Flat or exaggerated tone shows the sarcasm."),
    ],
    [
      fix(["It's ironic", "that it rained", "because the forecast said rain."], 2, ["because the forecast said sunshine.", "because the forecast said it would be sunny.", "although the forecast said sunshine."], "Irony = the opposite of what was expected."),
      fix(["She said", "'Great!' sincerely", "when her phone broke."], 1, ["'Great!' sarcastically"], "Positive word + bad event = sarcasm."),
      ch("Which is a misunderstanding of sarcasm?", ["Thinking 'Thanks a lot' after someone ruined your work is real thanks", "Hearing a flat tone and noticing the opposite meaning in the words", "Asking 'Are you being sarcastic?' when you're unsure"], 0, "Context reveals the opposite."),
      ch("Which email line could be misread?", ["Wow, thanks for the super early reply.", "Thank you for your quick reply.", "Thank you for your reply."], 0, "Could sound sarcastic if the reply was late."),
      ch("Is 'ironic' just another word for 'bad luck'?", ["No: irony means the opposite of what you'd expect.", "Yes, it just means bad luck or a sad coincidence.", "Only in songs and films."], 0, "Rain on your wedding day is bad luck, not necessarily irony."),
    ],
    [
      ch("You're not sure if a classmate is being sarcastic. Best?", ["Wait, are you being serious?", "Ignore them.", "Get angry immediately."], 0, "Check politely."),
      ch("Where is sarcasm most acceptable?", ["Joking with close friends who know you", "A job interview with a manager", "An email to a teacher"], 0, "Know your audience."),
      ch("A review says: 'The waiter was so attentive he only forgot us twice.' The reviewer…", ["is criticising the service with sarcasm", "loved the waiter and the service", "is confused about the order"], 0, "Exaggerated praise + negative fact."),
      ch("Why should you learn to recognise sarcasm even if you don't use it?", ["Native speakers use it a lot; missing it causes misunderstandings.", "It's in every English exam, so you'll lose points.", "It's a very polite way to speak."], 0, "Comprehension matters."),
      say("Oh, that's just perfect. I forgot my umbrella.", "Exaggerate PERfect, then flat."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write a short scene (80 words or more) where something goes wrong and one character reacts sarcastically. Then explain, in one or two sentences, what the character really means." },
      { universe: "screens", text: "Write a short gaming scene (80 words or more) where a character reacts sarcastically to losing. Then explain what they really mean." },
    ],
    minWords: 80,
    checks: [
      { label: "Sarcastic phrases (Oh great, just perfect, I just love it when, thanks a lot, well done, fantastic…)", pattern: "\\b(oh,? great|just (perfect|great|brilliant|fantastic)|i (just )?love it when|thanks a lot|well done|fantastic|wonderful|brilliant|how lovely)\\b", min: 2 },
      { label: "An explanation (really means, what she means, actually means, in other words…)", pattern: "\\b(really means?|actually means?|what (she|he|they|i) (really )?means?|in other words|is being sarcastic|was being sarcastic)\\b", min: 1 },
    ],
    rubric: ["The situation clearly goes wrong.", "The sarcastic lines use positive words for something bad.", "My explanation makes the real meaning clear."],
    model: "Camila had studied all week for the history exam. On the morning of the test, her alarm didn't go off, the bus broke down, and she arrived just as everyone was leaving. Her teacher smiled and said, 'The exam was moved to tomorrow, didn't you see the email?' Camila laughed. 'Oh great. Just perfect. I just love it when I run across the city for nothing.'\n\nIn other words, Camila was being sarcastic: she was frustrated, but also relieved.",
  },
};

const vague: NodePractice = {
  nodeId: "b2p.vague-language-in-conversation",
  explain: "Real conversation is full of vague language: sort of, kind of, and stuff (like that), or something, things like that, around eleven, -ish (sevenish), a bunch of. It makes speech relaxed, avoids sounding too precise or pushy, and fills gaps when you can't find a word. Use it in conversation, not in essays. Too much sounds unsure; none at all can sound robotic.",
  pattern: ["Softening: sort of · kind of · a bit", "Lists: and stuff (like that) · and things · or something", "Numbers and times: around eleven · sevenish · thirty-odd · a bunch of", "Use in speech; avoid in formal writing"],
  steps: [
    [
      heard(C("06", "notice"), "Where did the speaker go?", ["A kind of festival in the park", "A party at the speaker's school", "A concert in a big hall"], 0, "'this sort of festival thing in the park'."),
      heard(C("06", "notice"), "What time did they get back?", ["Around eleven", "Exactly eleven", "Around seven"], 0, "'at around eleven or something'."),
      ch("Why does the speaker say 'sort of festival thing'?", ["It wasn't exactly a festival, or they're not sure what to call it.", "They're being sarcastic about the whole festival.", "They're lying about where they went."], 0, "Vague = approximate."),
      ch("'Food stalls and music and stuff like that' means…", ["food stalls, music and other similar things", "only food and music, nothing else at all", "a list of rules for the festival"], 0, "and stuff like that = etc."),
      ch("Is vague language a sign of bad English?", ["No, it's normal and natural in conversation.", "Yes, always; avoid it completely when you speak.", "Only native speakers can use it."], 0, "It's a real skill."),
    ],
    [
      ch("'Let's meet at sevenish.' When?", ["About seven, not exactly", "Exactly at seven o'clock", "Seven days later"], 0, "-ish = approximately."),
      ch("'It was kind of boring.' Compared with 'It was boring', it's…", ["softer", "stronger", "more formal"], 0, "kind of softens."),
      ctx("In a job interview, a candidate says 'I did, like, marketing and stuff.'", "The problem is…", ["it's too vague for a formal context", "it's grammatically wrong", "there's nothing wrong with it"], 0, "Register."),
      ch("'There were thirty-odd people.' How many?", ["Around thirty, maybe a few more", "Exactly thirty strange people", "Thirteen"], 0, "-odd with numbers = approximately."),
      ch("Why might a speaker use vague language when giving an opinion?", ["To sound less pushy or too certain", "To confuse the other people", "Because it's very formal"], 0, "Softening."),
    ],
    [
      gap("I'll be there at about eight", ", maybe a bit later.", ["ish"], "eight-ish / eightish."),
      gap("We watched films, ate popcorn and", "like that.", ["stuff", "things"], "and stuff/things like that."),
      dict(C("06", "dict"), ["There was music and food and stuff like that"]),
      gap("He's a teacher or a coach or", ". I'm not sure.", ["something"], "or something."),
      say("It was kind of crowded, but it was fun.", "Relaxed: KIND of CROWDed."),
    ],
    [
      fix(["The essay", "talks about pollution and stuff", "in big cities."], 1, ["discusses pollution and related problems", "discusses pollution and other environmental problems", "discusses pollution"], "No vague language in essays."),
      fix(["The meeting", "starts at nine-ish", "according to the official schedule."], 1, ["starts at nine", "starts at nine o'clock"], "An official schedule needs a precise time."),
      fix(["I'm", "kind of sure", "that I'll pass."], 1, ["pretty sure", "fairly sure", "quite sure"], "'Kind of sure' sounds odd; use pretty / fairly sure."),
      ch("Which overuses vague language?", ["It was, like, kind of a sort of party thing or whatever, and stuff.", "It was a sort of party, I think, at a friend's house.", "It was a party, I think."], 0, "Too much sounds unsure."),
      ch("Which is best in a formal report?", ["Approximately 300 students attended.", "Like 300-ish students came or something.", "A bunch of students came."], 0, "Formal = precise."),
    ],
    [
      ch("Your friend asks what you did last night. Most natural?", ["Not much, just watched some series and stuff.", "I engaged in audiovisual entertainment.", "I watched exactly two episodes of a series from 9:04 to 10:31."], 0, "Relaxed and natural."),
      ch("Your teacher asks when you'll finish your project. Best?", ["By Friday.", "Fridayish or something.", "At some point, maybe."], 0, "Commitments need precision."),
      ch("You can't remember a word in a conversation. Best?", ["It's a sort of tool for opening bottles.", "Stop talking and wait for help.", "Switch to Spanish for that word."], 0, "Vague language helps you keep going."),
      ch("How much vague language sounds natural?", ["A little, here and there", "In every sentence", "None at all"], 0, "Balance."),
      say("We got back at around eleven or something.", "Relaxed rhythm, slight fall at the end."),
    ],
  ],
  create: {
    prompts: [
      { text: "Write what you'd say to a friend about your weekend (60 words or more), naturally, using at least three vague expressions (sort of, kind of, and stuff, or something, around…, -ish, a bunch of)." },
      { universe: "screens", text: "Write what you'd say to a friend about a game, show or video you watched (60 words or more), using at least three vague expressions." },
    ],
    minWords: 60,
    checks: [
      { label: "Three vague expressions", pattern: "\\b(sort of|kind of|and stuff|and things|or something|or whatever|stuff like that|things like that|around (ten|eleven|twelve|one|two|three|four|five|six|seven|eight|nine|\\d+)|[a-z]+ish|a bunch of|thirty-odd|twenty-odd|loads of)\\b", min: 3 },
    ],
    rubric: ["It sounds like real speech, not an essay.", "I didn't overdo it.", "My friend would understand what happened."],
    model: "My weekend was kind of chill, actually. On Saturday I went to my cousin's house around four, and we played video games and stuff like that. Then a bunch of her friends came over and we ordered pizza or something. On Sunday I just sort of stayed in bed until elevenish and watched a series. Pretty lazy, but really fun.",
  },
};

export const B2P_COMMUNICATE: NodePractice[] = [critique, discussion, email, tone, irony, vague];
