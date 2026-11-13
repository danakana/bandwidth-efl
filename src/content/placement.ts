/**
 * Placement test content. Written for Bandwidth EFL; for teacher review.
 * Band indexes: 0 A1+, 1 A2, 2 A2+, 3 B1, 4 B1+, 5 B2, 6 B2+, 7 C1, 8 C2.
 */
export const BAND_IDS = ["A1+", "A2", "A2+", "B1", "B1+", "B2", "B2+", "C1", "C2"] as const;
export type BandIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type ChoiceItem = {
  id: string;
  band: BandIndex;
  focus: "grammar" | "vocabulary" | "reading";
  passage?: string;
  stem: string;
  options: string[];
  answer: number;
};

export type ListeningItem = ChoiceItem & {
  /** What the voice says. Shown as a transcript after answering. */
  script: string;
  /** Accent label shown to the student, e.g. "Speaker from Australia". */
  speaker: string;
  /** Public audio file, generated with ElevenLabs. */
  audio: string;
};

/** Reading and language: three items per band. */
export const READING_ITEMS: ChoiceItem[] = [
  // A1+
  { id: "r01", band: 0, focus: "grammar", stem: "Hi! I'm Tomás. I ___ 14 years old.", options: ["am", "have", "is"], answer: 0 },
  { id: "r02", band: 0, focus: "reading", passage: "Sara gets up at 6:30. She has breakfast and walks to school. Classes start at 7:15.", stem: "How does Sara go to school?", options: ["By bus", "On foot", "By car"], answer: 1 },
  { id: "r03", band: 0, focus: "grammar", stem: "There ___ two cats in my house.", options: ["is", "are", "be"], answer: 1 },
  // A2
  { id: "r04", band: 1, focus: "grammar", stem: "Last weekend we ___ to the beach.", options: ["go", "went", "gone"], answer: 1 },
  { id: "r05", band: 1, focus: "reading", passage: "Hey Leo! The match is at 4, not 3. Meet me at the gate 15 minutes before. Juan", stem: "What time should Leo arrive at the gate?", options: ["3:45", "2:45", "4:15"], answer: 0 },
  { id: "r06", band: 1, focus: "grammar", stem: "This phone is ___ than my old one.", options: ["more cheap", "cheaper", "cheapest"], answer: 1 },
  // A2+
  { id: "r07", band: 2, focus: "grammar", stem: "I've ___ seen that film. Let's watch something else.", options: ["already", "yet", "still"], answer: 0 },
  { id: "r08", band: 2, focus: "reading", passage: "Mia used to hate reading. Then her cousin lent her a graphic novel, and she finished it in one night. Now she borrows two books a week from the library.", stem: "What changed?", options: ["Mia started to enjoy reading", "Mia stopped going to the library", "Mia's cousin started reading"], answer: 0 },
  { id: "r09", band: 2, focus: "grammar", stem: "If it rains tomorrow, we ___ the game.", options: ["cancel", "will cancel", "would cancel"], answer: 1 },
  // B1
  { id: "r10", band: 3, focus: "grammar", stem: "When I got to the cinema, the film ___ already started.", options: ["has", "had", "was"], answer: 1 },
  { id: "r11", band: 3, focus: "reading", passage: "The game looks amazing and the soundtrack is great. However, after ten hours I was still doing the same missions, and the story never really goes anywhere.", stem: "What is the reviewer's overall opinion?", options: ["Very positive", "Mixed", "Very negative"], answer: 1 },
  { id: "r12", band: 3, focus: "grammar", stem: "I'm really looking forward to ___ you next week.", options: ["see", "seeing", "saw"], answer: 1 },
  // B1+
  { id: "r13", band: 4, focus: "grammar", stem: "I wish I ___ more time to practise the guitar.", options: ["have", "had", "will have"], answer: 1 },
  { id: "r14", band: 4, focus: "grammar", stem: "Excuse me, could you tell me where ___?", options: ["is the station", "the station is", "does the station be"], answer: 1 },
  { id: "r15", band: 4, focus: "vocabulary", passage: "Despite the heavy rain, thousands of fans waited outside the stadium for hours, and not one of them seemed to mind.", stem: "In this text, \"mind\" means:", options: ["think", "be bothered", "remember"], answer: 1 },
  // B2
  { id: "r16", band: 5, focus: "grammar", stem: "The lights are off and nobody's answering. They ___ gone out.", options: ["must have", "can't have", "should have"], answer: 0 },
  { id: "r17", band: 5, focus: "reading", passage: "City officials insist the new bike lanes are a success. Yet the figures they cite cover only the summer months, when cycling naturally peaks.", stem: "What does the writer suggest?", options: ["The bike lanes have clearly been a failure", "The officials' evidence may be misleading", "More people cycle in winter than in summer"], answer: 1 },
  { id: "r18", band: 5, focus: "vocabulary", stem: "The new law ___ a serious threat to small businesses.", options: ["makes", "poses", "does"], answer: 1 },
  // B2+
  { id: "r19", band: 6, focus: "grammar", stem: "Not only ___ the exam, but she also got the highest mark in the class.", options: ["she passed", "did she pass", "she did pass"], answer: 1 },
  { id: "r20", band: 6, focus: "reading", passage: "\"Oh, fantastic,\" muttered Leo as the bus drove past without stopping. \"Exactly what I needed today.\"", stem: "How does Leo feel?", options: ["Happy", "Annoyed", "Surprised but pleased"], answer: 1 },
  { id: "r21", band: 6, focus: "vocabulary", stem: "The plan sounded good on paper, but it ___ because nobody wanted to pay for it.", options: ["fell through", "fell out", "fell behind"], answer: 0 },
  // C1
  { id: "r22", band: 7, focus: "grammar", stem: "___ I known about the strike, I would have left earlier.", options: ["If", "Had", "Should"], answer: 1 },
  { id: "r23", band: 7, focus: "reading", passage: "The author's enthusiasm for the technology is evident; her account of its drawbacks, by contrast, occupies a single, rather hurried paragraph.", stem: "What is implied about the author?", options: ["She leaves the drawbacks out of her account completely", "She gives the drawbacks less attention than they deserve", "She is more critical of the technology than she admits"], answer: 1 },
  { id: "r24", band: 7, focus: "vocabulary", stem: "The latest data ___ suggests that the policy had little effect.", options: ["strongly", "hugely", "deeply"], answer: 0 },
  // C2
  { id: "r25", band: 8, focus: "reading", passage: "To call the minister's reply evasive would be generous; it was less an answer than an elegant change of subject.", stem: "The writer thinks the reply was:", options: ["a little unclear", "worse than evasive", "brief but honest"], answer: 1 },
  { id: "r26", band: 8, focus: "vocabulary", stem: "Her criticism was ___: polite on the surface, but clearly intended to wound.", options: ["veiled", "blunt", "candid"], answer: 0 },
  { id: "r27", band: 8, focus: "vocabulary", stem: "The report ___ over the most serious problems, mentioning them only in a footnote.", options: ["glossed", "looked", "passed"], answer: 0 },
];

/** Listening: two clips at five levels. Audio generated with ElevenLabs (AI voices). */
export const LISTENING_ITEMS: ListeningItem[] = [
  { id: "l01", band: 0, focus: "reading", speaker: "Speaker from the USA", audio: "l01.mp3",
    script: "Hi, it's Ana! My birthday party is on Saturday at five o'clock, at my house. Bring your swimsuit! Bye!",
    stem: "When is the party?", options: ["Saturday at 5", "Sunday at 5", "Saturday at 9"], answer: 0 },
  { id: "l02", band: 0, focus: "reading", speaker: "Speaker from England", audio: "l02.mp3",
    script: "Good morning, everyone. Today's maths class is in room twelve, not room twenty. Room twelve. Thank you.",
    stem: "Where is the maths class today?", options: ["Room 20", "Room 12", "Room 2"], answer: 1 },
  { id: "l03", band: 1, focus: "reading", speaker: "Speaker from Australia", audio: "l03.mp3",
    script: "I wanted to buy the blue jacket, but they only had it in small, so I got the black one instead. It was a bit more expensive, but it fits perfectly.",
    stem: "Why didn't she buy the blue jacket?", options: ["It was too expensive", "They didn't have her size", "She didn't like the colour"], answer: 1 },
  { id: "l04", band: 1, focus: "reading", speaker: "Speaker from Nigeria", audio: "l04.mp3",
    script: "Sorry, I can't come to football practice tonight. My grandmother is visiting and my mum wants me home for dinner. I'll be there on Thursday, though.",
    stem: "When will he go to practice?", options: ["Tonight", "On Thursday", "Not this week"], answer: 1 },
  { id: "l05", band: 3, focus: "reading", speaker: "Speaker from Ireland", audio: "l05.mp3",
    script: "Honestly, I thought the film would be terrible, because the trailer was so boring. But the acting was brilliant, and the ending really surprised me. I'd definitely watch it again.",
    stem: "What was the film like for the speaker?", options: ["Worse than expected", "Better than expected", "Exactly as expected"], answer: 1 },
  { id: "l06", band: 3, focus: "reading", speaker: "Speaker from India", audio: "l06.mp3",
    script: "If you're coming to the museum by bus, get off at the stop after the bridge, not at the main square. The square is closed this week because of the festival.",
    stem: "Where should you get off the bus?", options: ["At the main square, near the festival", "At the stop after the bridge", "At the stop just before the bridge"], answer: 1 },
  { id: "l07", band: 5, focus: "reading", speaker: "Speaker from Scotland", audio: "l07.mp3",
    script: "People assume that learning a language is mostly about memorising words. In my experience, though, the students who make the fastest progress are the ones who aren't afraid of making mistakes when they speak.",
    stem: "What is the speaker's main point?", options: ["Memorising lots of words is the key to progress", "Being willing to make mistakes helps progress", "The fastest learners rarely make mistakes"], answer: 1 },
  { id: "l08", band: 5, focus: "reading", speaker: "Speaker from Canada", audio: "l08.mp3",
    script: "We've had a lot of complaints about the new timetable, and, to be fair, some of them are justified. That said, going back to the old system isn't an option, so we'll be making a few adjustments instead.",
    stem: "What will happen to the timetable?", options: ["They will go back to the old timetable", "They will ignore most of the complaints", "They will change parts of the new one"], answer: 2 },
  { id: "l09", band: 7, focus: "reading", speaker: "Speaker from England", audio: "l09.mp3",
    script: "It's tempting to see the decline of local newspapers as simply a story about technology. But that misses the point. What we've really lost is a shared space where a town could argue with itself.",
    stem: "What does the speaker suggest?", options: ["Technology is the whole explanation for the decline", "The main loss is a place for local debate", "Local newspapers are slowly starting to recover"], answer: 1 },
  { id: "l10", band: 7, focus: "reading", speaker: "Speaker from the USA", audio: "l10.mp3",
    script: "I wouldn't say the experiment failed, exactly. It's more that it answered a question nobody had thought to ask.",
    stem: "What is the speaker's attitude to the experiment?", options: ["It was a complete failure and a waste of money", "The result was unexpected but still valuable", "The researchers made serious mistakes in their method"], answer: 1 },
];

export type ProductionPrompt = { minBand: BandIndex; maxBand: BandIndex; text: string; hint: string; minWords?: number; maxSeconds?: number };

export const WRITING_PROMPTS: ProductionPrompt[] = [
  { minBand: 0, maxBand: 1, minWords: 30, hint: "40 to 60 words",
    text: "Write a message to a new friend. Say who you are, what you like doing and what you did last weekend." },
  { minBand: 2, maxBand: 3, minWords: 60, hint: "80 to 100 words",
    text: "Write a short review of a film, series or game you like. Say what it's about, what's good about it, and who should try it." },
  { minBand: 4, maxBand: 5, minWords: 100, hint: "120 to 150 words",
    text: "Some people say teenagers should not have phones at school. Write a paragraph giving your opinion, with reasons and an example." },
  { minBand: 6, maxBand: 8, minWords: 150, hint: "180 to 220 words",
    text: "\"Social media makes us more connected but less close.\" Discuss this idea, considering more than one point of view." },
];

export const SPEAKING_PROMPTS: ProductionPrompt[] = [
  { minBand: 0, maxBand: 2, maxSeconds: 60, hint: "Speak for about 30 seconds",
    text: "Talk about your favourite place in your town. Where is it? What can you do there? Why do you like it?" },
  { minBand: 3, maxBand: 5, maxSeconds: 120, hint: "Speak for about 1 minute",
    text: "Describe something you learned recently outside school. How did you learn it, and why was it interesting?" },
  { minBand: 6, maxBand: 8, maxSeconds: 150, hint: "Speak for 1 to 2 minutes",
    text: "Should schools teach more about money and personal finance? Give your opinion and respond to one argument against it." },
];

export const promptFor = (list: ProductionPrompt[], band: BandIndex) =>
  list.find((p) => band >= p.minBand && band <= p.maxBand) ?? list[0];
