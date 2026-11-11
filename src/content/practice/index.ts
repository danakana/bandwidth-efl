import { B1P_GRAMMAR } from "./b1p-grammar";
import { B1P_WORDS } from "./b1p-words";
import { B1P_COMMUNICATE } from "./b1p-communicate";
import { B1P_ERRORS, B1P_SOUNDS } from "./b1p-sounds-errors";
import { B2_GRAMMAR } from "./b2-grammar";
import { B2_WORDS } from "./b2-words";
import { B2_COMMUNICATE } from "./b2-communicate";
import { B2_ERRORS, B2_SOUNDS } from "./b2-sounds-errors";
import { B2P_GRAMMAR } from "./b2p-grammar";
import { B2P_WORDS } from "./b2p-words";
import { B2P_COMMUNICATE } from "./b2p-communicate";
import { B2P_ERRORS, B2P_SOUNDS } from "./b2p-sounds-errors";
import { B2P_EXTRA_ERRORS, B2P_EXTRA_GRAMMAR, B2P_EXTRA_SOUNDS, B2P_EXTRA_WORDS } from "./b2p-extra";
import { C1_GRAMMAR } from "./c1-grammar";
import { C1_WORDS } from "./c1-words";
import { C1_COMMUNICATE } from "./c1-communicate";
import { C1_ERRORS, C1_SOUNDS } from "./c1-sounds-errors";
import { C2_GRAMMAR } from "./c2-grammar";
import { C2_WORDS } from "./c2-words";
import { C2_COMMUNICATE } from "./c2-communicate";
import { C2_ERRORS, C2_SOUNDS } from "./c2-sounds-errors";
import type { Item, NodePractice } from "./types";
import { shuffle } from "../../lib/answers";
import type { BandId } from "../bands";
import type { TreeId } from "../curriculum";

const ALL: NodePractice[] = [
  ...B1P_GRAMMAR, ...B1P_WORDS, ...B1P_COMMUNICATE, ...B1P_SOUNDS, ...B1P_ERRORS,
  ...B2_GRAMMAR, ...B2_WORDS, ...B2_COMMUNICATE, ...B2_SOUNDS, ...B2_ERRORS,
  ...B2P_GRAMMAR, ...B2P_WORDS, ...B2P_COMMUNICATE, ...B2P_SOUNDS, ...B2P_ERRORS,
  ...B2P_EXTRA_GRAMMAR, ...B2P_EXTRA_WORDS, ...B2P_EXTRA_SOUNDS, ...B2P_EXTRA_ERRORS,
  ...C1_GRAMMAR, ...C1_WORDS, ...C1_COMMUNICATE, ...C1_SOUNDS, ...C1_ERRORS,
  ...C2_GRAMMAR, ...C2_WORDS, ...C2_COMMUNICATE, ...C2_SOUNDS, ...C2_ERRORS,
];
export const PRACTICE: Record<string, NodePractice> = Object.fromEntries(ALL.map((p) => [p.nodeId, p]));
export const practiceFor = (nodeId: string): NodePractice | undefined => PRACTICE[nodeId];

/** A "boss" round after every few skills in a tree. Mixes items from those skills. */
export type Checkpoint = { id: string; band: BandId; tree: TreeId; title: string; story: string; nodeIds: string[]; afterIndex: number };

export const CHECKPOINTS: Checkpoint[] = [
  { id: "b1p-grammar-1", band: "B1+", tree: "grammar", title: "Boss 1: The Lost Phone", afterIndex: 2,
    story: "If you hadn't left your phone on the bus, none of this would have happened. Get it found, repaired and back.",
    nodeIds: ["b1p.third-conditional-introduction", "b1p.passive-with-modals-and-perfect-tenses", "b1p.have-get-something-done"] },
  { id: "b1p-grammar-2", band: "B1+", tree: "grammar", title: "Boss 2: The Exchange Student", afterIndex: 5,
    story: "A new student from Canada is getting used to your school. Pass on every message, and remember what to stop doing.",
    nodeIds: ["b1p.used-to-vs-be-get-used-to", "b1p.reported-requests-and-commands", "b1p.verbs-that-change-meaning-stop-remember"] },
  { id: "b1p-grammar-3", band: "B1+", tree: "grammar", title: "Boss 3: The Big Trip", afterIndex: 8,
    story: "This time next week you'll be flying. Ask the right questions politely, and plan a trip so good you'll talk about it for years.",
    nodeIds: ["b1p.indirect-questions", "b1p.future-continuous-and-future-perfect", "b1p.so-such-that-relative-whose"] },
  { id: "b1p-words-1", band: "B1+", tree: "words", title: "Boss 1: The School Paper", afterIndex: 2,
    story: "You're the new culture and science editor. Write the headlines, review the film and get every word form right.",
    nodeIds: ["b1p.news-and-media-environment-and-climate-t", "b1p.describing-art-film-and-books", "b1p.noun-and-adjective-suffixes"] },
  { id: "b1p-words-2", band: "B1+", tree: "words", title: "Boss 2: The Debate Club", afterIndex: 6,
    story: "Your first debate. Raise awareness, figure out the other side's argument and, as far as you're concerned, win.",
    nodeIds: ["b1p.issue-and-opinion-collocations", "b1p.phrasal-verbs-for-events-and-discovery", "b1p.everyday-idioms", "b1p.opinion-chunks"] },
  { id: "b1p-communicate-1", band: "B1+", tree: "communicate", title: "Boss 1: The Science Fair", afterIndex: 2,
    story: "Three minutes to present your project, compare it with last year's, and answer the judges' questions politely.",
    nodeIds: ["b1p.compare-and-contrast-describe-a-process", "b1p.give-a-short-presentation", "b1p.indirect-questions-as-politeness"] },
  { id: "b1p-communicate-2", band: "B1+", tree: "communicate", title: "Boss 2: The Group Project", afterIndex: 5,
    story: "Write the report, ask your teacher for more time, and keep the group discussion fair for everyone.",
    nodeIds: ["b1p.review-and-report-structure", "b1p.do-soften-requests-with-i-was-wondering", "b1p.do-take-turns-in-group-discussion"] },
  { id: "b1p-sounds-1", band: "B1+", tree: "sounds", title: "Boss: The Phone Call", afterIndex: 1,
    story: "The line is bad and everyone keeps getting the details wrong. Stress the right word, every time.",
    nodeIds: ["b1p.contrastive-stress", "b1p.stress-shift-in-word-families"] },
  { id: "b1p-errors-1", band: "B1+", tree: "errors", title: "Boss: The Email Check", afterIndex: 2,
    story: "Your email to an exchange family is full of little traps. Catch them before you press send.",
    nodeIds: ["b1p.be-used-to-base-verb", "b1p.word-order-in-indirect-questions", "b1p.say-vs-tell"] },
  { id: "b2-grammar-1", band: "B2", tree: "grammar", title: "Boss 1: The Time Machine", afterIndex: 2,
    story: "A broken time machine is mixing up past, present and regrets. Fix every sentence to get it home.",
    nodeIds: ["b2.mixed-conditionals", "b2.wish-if-only-present-past-would", "b2.past-modals-of-deduction-and-criticism"] },
  { id: "b2-grammar-2", band: "B2", tree: "grammar", title: "Boss 2: The Newsroom", afterIndex: 5,
    story: "Deadline in ten minutes. Rewrite the reports so they sound like real journalism.",
    nodeIds: ["b2.passive-with-reporting-verbs", "b2.participle-clauses", "b2.cleft-sentences-introduction"] },
  { id: "b2-grammar-3", band: "B2", tree: "grammar", title: "Boss 3: The Storyteller", afterIndex: 7,
    story: "The storyteller lost her notes. Rebuild the story, formal parts and all.",
    nodeIds: ["b2.relative-clauses-with-prepositions", "b2.narrative-tenses-combined"] },
  { id: "b2-words-1", band: "B2", tree: "words", title: "Boss 1: The Market Report", afterIndex: 2,
    story: "The newsroom's data desk is in chaos. Describe the trends precisely, lose every 'very', and make the report sound professional.",
    nodeIds: ["b2.society-ethics-science-careers-describin", "b2.precision-replacing-very-lose-the-very", "b2.adverb-adjective-verb-noun"] },
  { id: "b2-words-2", band: "B2", tree: "words", title: "Boss 2: The Debate Club", afterIndex: 4,
    story: "Final round of the debate championship. Argue, persuade and keep your cool.",
    nodeIds: ["b2.abstract-phrasal-verbs-for-argument", "b2.idioms-for-opinion-and-debate"] },
  { id: "b2-communicate-1", band: "B2", tree: "communicate", title: "Boss 1: The Town Hall", afterIndex: 2,
    story: "The mayor wants to close the youth centre. Argue your case, quote the report and keep it formal.",
    nodeIds: ["b2.argue-counter-argue-and-concede", "b2.summarise-and-paraphrase-sources", "b2.register-switch-informal-to-formal"] },
  { id: "b2-communicate-2", band: "B2", tree: "communicate", title: "Boss 2: The Diplomat", afterIndex: 5,
    story: "Two countries, one tense summit. Write the report, soften the blows and read between the lines.",
    nodeIds: ["b2.essay-conventions-nominalisation-introdu", "b2.do-hedge-claims", "b2.understatement"] },
  { id: "b2-sounds-1", band: "B2", tree: "sounds", title: "Boss: The Radio Booth", afterIndex: 1,
    story: "You're live on air. Every word links, and every line has an attitude.",
    nodeIds: ["b2.connected-speech-in-production", "b2.intonation-for-attitude"] },
  { id: "b2-errors-1", band: "B2", tree: "errors", title: "Boss: The Proofreader", afterIndex: 2,
    story: "A scholarship essay is full of Spanglish traps. Catch every one before the deadline.",
    nodeIds: ["b2.it-s-the-first-time-i-see", "b2.discuss-about-suggest-someone-to", "b2.despite-clause"] },
  { id: "b2p-grammar-1", band: "B2+", tree: "grammar", title: "Boss 1: The Award Ceremony", afterIndex: 2,
    story: "You're hosting the school awards. Every line needs drama, emphasis and zero repetition.",
    nodeIds: ["b2p.inversion-introduction", "b2p.cleft-sentences-for-emphasis", "b2p.ellipsis-and-substitution"] },
  { id: "b2p-grammar-2", band: "B2+", tree: "grammar", title: "Boss 2: The Student Council", afterIndex: 4,
    story: "The council needs a formal proposal by tonight, and someone keeps posting embarrassing photos.",
    nodeIds: ["b2p.unreal-past-it-s-time-would-rather", "b2p.subjunctive-formal"] },
  { id: "b2p-grammar-3", band: "B2+", tree: "grammar", title: "Boss 3: The Plot Twist", afterIndex: 6,
    story: "You're writing the last chapter of a thriller. Everyone was about to escape, whereas the villain had other plans.",
    nodeIds: ["b2p.future-in-the-past", "b2p.contrast-and-concession-linkers"] },
  { id: "b2p-words-1", band: "B2+", tree: "words", title: "Boss 1: The Science Fair", afterIndex: 2,
    story: "Judges are coming. Make your poster sound like real research, and choose every word carefully.",
    nodeIds: ["b2p.academic-vocabulary", "b2p.connotation", "b2p.academic-collocations"] },
  { id: "b2p-words-2", band: "B2+", tree: "words", title: "Boss 2: The Podcast", afterIndex: 5,
    story: "You're analysing the week's news on air. Read between the lines, describe it precisely and keep it sharp.",
    nodeIds: ["b2p.multi-meaning-and-abstract-phrasal-verbs", "b2p.idioms-for-analysis", "b2p.compound-adjectives-and-prefixes"] },
  { id: "b2p-communicate-1", band: "B2+", tree: "communicate", title: "Boss 1: The Debate Final", afterIndex: 2,
    story: "You're chairing and competing. Critique, persuade, keep the room in order, then write to the judges.",
    nodeIds: ["b2p.critique-and-persuade", "b2p.manage-a-discussion", "b2p.diplomatic-formal-email"] },
  { id: "b2p-communicate-2", band: "B2+", tree: "communicate", title: "Boss 2: The Group Chat", afterIndex: 5,
    story: "Blog posts, sarcasm and 'stuff like that'. Work out what everyone really means.",
    nodeIds: ["b2p.academic-tone-vs-blog-tone", "b2p.recognise-irony-and-sarcasm", "b2p.vague-language-in-conversation"] },
  { id: "b2p-sounds-1", band: "B2+", tree: "sounds", title: "Boss: The TED Talk", afterIndex: 1,
    story: "Three minutes on stage. Chunk it, pause it, and stress every key word in the right place.",
    nodeIds: ["b2p.chunking-and-pausing-in-presentations", "b2p.word-stress-in-word-families"] },
  { id: "b2p-errors-1", band: "B2+", tree: "errors", title: "Boss: The Editor", afterIndex: 2,
    story: "Your university application is due. Catch every phrase and preposition that came straight from Spanish.",
    nodeIds: ["b2p.fixed-phrases-translated-literally", "b2p.make-emphasis-give-importance", "b2p.dependent-prepositions"] },
  { id: "c1-grammar-1", band: "C1", tree: "grammar", title: "Boss 1: The Opening Speech", afterIndex: 2,
    story: "You're opening the international youth summit. Little do they know how good your speech will be: dramatic, precise and perfectly measured.",
    nodeIds: ["c1.full-inversion", "c1.complex-noun-phrases-and-nominalisation", "c1.modal-nuance"] },
  { id: "c1-grammar-2", band: "C1", tree: "grammar", title: "Boss 2: The Science Desk", afterIndex: 4,
    story: "A new study has just dropped. Report it carefully, claim nothing you can't prove, and pack every sentence tight.",
    nodeIds: ["c1.distancing-and-hedging-structures", "c1.participle-verbless-and-absolute-clauses"] },
  { id: "c1-grammar-3", band: "C1", tree: "grammar", title: "Boss 3: The Closing Argument", afterIndex: 6,
    story: "Final day in the mock trial. Had you not prepared, you'd lose. Make every point land with force.",
    nodeIds: ["c1.advanced-conditionals-and-alternatives", "c1.emphasis-with-auxiliaries-and-fronting"] },
  { id: "c1-words-1", band: "C1", tree: "words", title: "Boss 1: The Journal Review", afterIndex: 2,
    story: "You're reviewing articles for a student journal. Choose the exact word, the right term and the collocation an expert would use.",
    nodeIds: ["c1.shades-of-meaning", "c1.discipline-vocabulary-for-universes", "c1.strong-and-idiomatic-collocations"] },
  { id: "c1-words-2", band: "C1", tree: "words", title: "Boss 2: The Op-Ed", afterIndex: 5,
    story: "The newspaper gave you a column. Be that as it may, it's due tonight. Make it formal, sharp and precise.",
    nodeIds: ["c1.phrasal-nouns-and-formal-equivalents", "c1.sophisticated-idioms-and-linkers", "c1.word-formation-for-precision"] },
  { id: "c1-communicate-1", band: "C1", tree: "communicate", title: "Boss 1: The Model UN", afterIndex: 1,
    story: "Two delegations, one resolution. Build the case from the sources, then find a deal both sides can sign.",
    nodeIds: ["c1.build-an-extended-argument-synthesise-so", "c1.mediate-and-negotiate"] },
  { id: "c1-communicate-2", band: "C1", tree: "communicate", title: "Boss 2: The Embassy Party", afterIndex: 4,
    story: "Tweets, toasts and tense small talk. Change your style for every room, save everyone's face and hear what nobody says out loud.",
    nodeIds: ["c1.style-shifting-across-genres", "c1.face-saving-and-politeness-strategies", "c1.implicature-what-is-meant-not-said"] },
  { id: "c1-sounds-1", band: "C1", tree: "sounds", title: "Boss: The World Tour", afterIndex: 1,
    story: "Sydney, Lagos, Dublin, Glasgow. Catch every accent, and stress the word that changes the meaning.",
    nodeIds: ["c1.understanding-varieties-of-english", "c1.contrastive-stress-and-nuance"] },
  { id: "c1-errors-1", band: "C1", tree: "errors", title: "Boss: The Final Draft", afterIndex: 3,
    story: "Your scholarship essay is almost perfect. Cut the 'moreover's, fix the articles, split the long sentences and catch the false friends.",
    nodeIds: ["c1.mechanical-linking", "c1.articles-with-abstract-nouns", "c1.long-run-on-sentences-from-spanish-style", "c1.cognates-that-mislead-at-c1"] },
  { id: "c2-grammar-1", band: "C2", tree: "grammar", title: "Boss 1: The Opening Night", afterIndex: 1,
    story: "Come what may, the curtain rises at eight. Write the programme notes with style, and break the rules only on purpose.",
    nodeIds: ["c2.rare-structures-for-style", "c2.fronting-and-deliberate-rule-breaking-fo"] },
  { id: "c2-grammar-2", band: "C2", tree: "grammar", title: "Boss 2: The Scandal", afterIndex: 3,
    story: "A rumour is spreading fast. Ask politely for the facts, then report every claim with exactly the right stance.",
    nodeIds: ["c2.aspect-for-nuance", "c2.reporting-with-stance"] },
  { id: "c2-grammar-3", band: "C2", tree: "grammar", title: "Boss 3: The Final Chapter", afterIndex: 5,
    story: "Your novel needs an ending. Without it, there's no book. Tired you may be; finished you are not.",
    nodeIds: ["c2.implied-and-mixed-conditionals-in-style", "c2.ellipsis-and-substitution-in-literary-styl"] },
  { id: "c2-words-1", band: "C2", tree: "words", title: "Boss 1: The Comedy Club", afterIndex: 2,
    story: "Open-mic night. Old words, double meanings and fixed pairs: by and large, the crowd will laugh. Sooner or later.",
    nodeIds: ["c2.literary-and-archaic-vocabulary-in-conte", "c2.wordplay-puns-and-humour", "c2.binomials-and-fixed-pairs"] },
  { id: "c2-words-2", band: "C2", tree: "words", title: "Boss 2: The Front Page", afterIndex: 5,
    story: "The embattled editor needs a front page by midnight. Mull it over fast, avoid Pandora's box, and get the jargon right.",
    nodeIds: ["c2.idiomatic-and-colloquial-range", "c2.allusions-and-proverbs", "c2.register-specific-vocabulary"] },
  { id: "c2-communicate-1", band: "C2", tree: "communicate", title: "Boss 1: The Literary Festival", afterIndex: 2,
    story: "Review the headliner, parody the sponsor's speech and survive the British small talk. Not your finest hour? We'll see.",
    nodeIds: ["c2.write-with-voice-critique-sophisticated", "c2.full-spectrum-slang-to-academic-parody-a", "c2.cultural-references-and-understatement"] },
  { id: "c2-communicate-2", band: "C2", tree: "communicate", title: "Boss 2: The Boardroom", afterIndex: 5,
    story: "Sixty seconds to summarise the report, ten minutes to close the deal, and one email that must be firm but warm.",
    nodeIds: ["c2.summarise-complex-texts-concisely", "c2.negotiate-and-persuade-professionally", "c2.tone-control-in-writing"] },
  { id: "c2-sounds-1", band: "C2", tree: "sounds", title: "Boss: The Rally", afterIndex: 2,
    story: "A crowd of thousands, accents from everywhere, one microphone. Pause, persuade, and land every line.",
    nodeIds: ["c2.rhetorical-delivery", "c2.fast-natural-speech-and-accents", "c2.prosody-for-persuasion"] },
  { id: "c2-errors-1", band: "C2", tree: "errors", title: "Boss: The Last Proofread", afterIndex: 2,
    story: "The final draft of your scholarship essay. Not a single slip, collocation or Spanish-style sentence can survive.",
    nodeIds: ["c2.residual-slips", "c2.collocation-fine-tuning", "c2.over-long-over-formal-spanish-style-prose"] },
];

/** Mixed review items (Understand, Use, Fix it, Judge) from some skills. */
export function mixedItems(nodeIds: string[], count: number): Item[] {
  const pool = nodeIds.flatMap((id) => {
    const p = PRACTICE[id];
    return p ? p.steps.slice(1, 5).flat() : [];
  });
  const says = shuffle(pool.filter((i) => i.kind === "say")).slice(0, 1);
  const rest = shuffle(pool.filter((i) => i.kind !== "say")).slice(0, count - says.length);
  return shuffle([...rest, ...says]);
}
