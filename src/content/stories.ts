/**
 * Story Builder: short choose-your-own-adventure stories. At each step there are two good sentences
 * (each pushes the story a different way) and one trap with a mistake. The choices decide the ending.
 * Three tiers by level. Original texts for Bandwidth EFL. For teacher review.
 */
import type { BandId } from "./bands";

/** [what happens, choice A (bold), choice B (careful), trap with a mistake, why the trap is wrong] */
export type StoryStep = [string, string, string, string, string];
export type Story = { title: string; emoji: string; intro: string; steps: StoryStep[]; endBold: string; endCareful: string };

const A: Story[] = [
  { title: "The Lost Dog", emoji: "🐶", intro: "On your way to school, you see a small dog alone in the street. It has a red collar.",
    steps: [
      ["The dog looks at you and wags its tail.", "I pick up the dog and look at its collar.", "I call my mum and ask her what to do.", "I picks up the dog and look at its collar.", "With 'I', the verb has no -s: I pick."],
      ["The collar says 'Max' and there is a phone number.", "I phone the number right now.", "I take Max to the shop next door.", "I phone to the number right now.", "We say 'phone someone', with no 'to'."],
      ["A woman runs down the street. She is crying.", "I shout, 'Is this your dog?'", "I wait and watch her quietly.", "I shout, 'Is this you dog?'", "'your' shows possession; 'you' is the person."],
    ],
    endBold: "The woman hugs Max and you. She gives you a big cake to say thank you! You're late for school, but your teacher loves the story.",
    endCareful: "The woman sees Max and smiles. 'Thank you for keeping him safe!' Your mum is very proud of you." },
  { title: "The Birthday Surprise", emoji: "🎂", intro: "It's your best friend's birthday on Saturday. You want to plan a surprise.",
    steps: [
      ["You have 50,000 pesos and two days.", "I buy a big chocolate cake.", "I make a card with photos of us.", "I buys a big chocolate cake.", "With 'I', the verb has no -s: I buy."],
      ["You need help from other friends.", "I send a message to the whole class.", "I ask two good friends to help me.", "I send a message for the whole class.", "We send a message TO someone."],
      ["On Saturday, your friend arrives at the park.", "We jump out and shout 'Surprise!'", "We sing 'Happy Birthday' quietly.", "We jumps out and shout 'Surprise!'", "With 'we', the verb has no -s: we jump."],
    ],
    endBold: "Your friend screams, then laughs. Thirty classmates eat chocolate cake in the park. Best party ever!",
    endCareful: "Your friend reads the card and cries happy tears. 'This is the best present,' she says." },
  { title: "Rain at the Market", emoji: "🌧️", intro: "You're at the market with your grandma. Suddenly, it starts to rain.",
    steps: [
      ["Grandma has a big bag of fruit. It's heavy.", "I carry the bag and run to the bus stop.", "We stand under a shop roof and wait.", "I carries the bag and run to the bus stop.", "With 'I', no -s: I carry."],
      ["A man is selling umbrellas for 10,000 pesos.", "I buy an umbrella for Grandma.", "I give Grandma my jacket.", "I buy a umbrella for Grandma.", "Use 'an' before a vowel sound: an umbrella."],
      ["The rain stops. There's a rainbow over the mountains.", "I take a photo of the rainbow.", "I tell Grandma it's beautiful.", "I take a photo to the rainbow.", "We take a photo OF something."],
    ],
    endBold: "Your rainbow photo wins the school photography competition! Grandma puts it on her fridge.",
    endCareful: "Grandma holds your hand and tells you about the rains when she was a girl. It's a lovely afternoon." },
  { title: "The New Student", emoji: "🎒", intro: "A new student arrives in your class. He's from Brazil and doesn't speak much Spanish.",
    steps: [
      ["At break, he sits alone.", "I sit next to him and say hello.", "I ask my friends to come with me.", "I sit next to him and say hello to he.", "After 'to', use 'him', not 'he'."],
      ["His name is Lucas. He likes football.", "I invite him to play with us.", "I show him the school library.", "I invite him for play with us.", "We invite someone TO do something."],
      ["The next day, Lucas brings something for you.", "I open it immediately!", "I say thank you and open it at home.", "I opens it immediately!", "With 'I', no -s: I open."],
    ],
    endBold: "It's a Brazilian football shirt! On Friday, Lucas scores two goals for your team.",
    endCareful: "It's a bracelet with your name. Lucas says, 'You are my first friend here.'" },
  { title: "Lost in the Museum", emoji: "🦖", intro: "On a school trip to the dinosaur museum, you stop to look at a fossil. When you turn around, your class is gone!",
    steps: [
      ["The museum is very big and full of people.", "I run to find my class.", "I ask a guard for help.", "I ask at a guard for help.", "We ask someone for help, with no 'at'."],
      ["You find a door that says 'Staff only'.", "I open the door and look inside.", "I don't open it. I go back.", "I don't opens it. I go back.", "After 'don't', use the base verb: open."],
      ["You hear your teacher's voice!", "I shout, 'I'm here!'", "I walk to the voice slowly.", "I shout, 'I here!'", "We need the verb 'be': I'm here."],
    ],
    endBold: "Behind the door is a scientist cleaning a real T. rex tooth. She lets you hold it before you find your class!",
    endCareful: "Your teacher is happy to see you. 'Good idea to ask for help,' she says. You get to choose the next room!" },
  { title: "The Football Final", emoji: "⚽", intro: "It's the school football final. You're the goalkeeper, and there are five minutes left. The score is 1–1.",
    steps: [
      ["A player from the other team runs at you.", "I run out and take the ball.", "I stay on the line and wait.", "I run out and takes the ball.", "Both verbs go with 'I': I run… and take."],
      ["You have the ball. Your best friend is free on the left.", "I kick the ball to my friend.", "I throw the ball to the defender.", "I kick the ball at my friend.", "We pass TO a team-mate; 'at' sounds like you want to hit him."],
      ["Last minute! Penalty for your team. The coach looks at you.", "I say, 'I can take it!'", "I say, 'Sofía is better at penalties.'", "I say, 'I can to take it!'", "After 'can', no 'to': I can take it."],
    ],
    endBold: "You run up, kick… GOAL! The goalkeeper scores the winning goal. Everyone carries you around the field.",
    endCareful: "Sofía scores and your team wins! She says, 'Thanks for trusting me.' You're the team captain next year." },
  { title: "The Haunted House", emoji: "👻", intro: "There's an old house at the end of your street. People say a ghost lives there. Tonight, you and your cousin are going to visit it.",
    steps: [
      ["The front door is open. It's very dark inside.", "I go in first with my phone light.", "I knock and say, 'Hello?'", "I goes in first with my phone light.", "With 'I', the verb has no -s: I go."],
      ["You hear a noise upstairs. Something is moving.", "We go up the stairs quietly.", "We wait at the bottom of the stairs.", "We goes up the stairs quietly.", "With 'we', no -s: we go."],
      ["Two bright eyes look at you in the dark!", "I turn on the light.", "I say, 'Don't be afraid.'", "I turn on the ligth.", "Spelling: light."],
    ],
    endBold: "It's a family of cats! There are four kittens. You and your cousin find homes for all of them.",
    endCareful: "A small, scared cat comes out. You give it some milk. Now it lives with you, and you call it Ghost." },
];

const B: Story[] = [
  { title: "The Lost Phone", emoji: "📱", intro: "You find an expensive phone on a bench in the park. It's unlocked, and there are three missed calls from 'Mum'.",
    steps: [
      ["The phone starts ringing again.", "I answer it and explain that I've found it.", "I let it ring and take it to the police station.", "I answer it and explain that I've founded it.", "'Found' is the past participle of 'find'; 'founded' means started a company."],
      ["A girl says it's her phone and she's on the other side of the city.", "I offer to take it to her house.", "I suggest meeting at the station.", "I suggest to meet at the station.", "After 'suggest', use -ing or a that-clause: suggest meeting."],
      ["When you meet, she offers you a reward.", "I accept it, because I've spent two hours on this.", "I refuse politely, although it's very kind of her.", "I refuse politely, despite it's very kind of her.", "'Despite' needs a noun or -ing; before a clause, use 'although'."],
    ],
    endBold: "Her reward is two tickets to a sold-out concert. You've never had a better Saturday.",
    endCareful: "She insists on buying you lunch, and you become good friends. Months later, she still calls you 'my hero'." },
  { title: "The School Election", emoji: "🗳️", intro: "You've decided to run for student president. The election is in two weeks.",
    steps: [
      ["Your rival promises longer breaks.", "I promise to start a music club if I win.", "I focus on fixing the broken bathrooms.", "I promise to start a music club if I will win.", "In first conditionals, the if-clause uses the present: if I win."],
      ["A teacher says you need a clear campaign slogan.", "My slogan is 'Make some noise!'", "My slogan is 'Small changes, big difference.'", "My slogan is 'Make some noise' and is very good.", "Each clause needs a subject: 'and it's very good'."],
      ["On election day, you have to give a speech to the whole school.", "I tell a funny story about my first day at school.", "I explain my plan step by step.", "I explain my plan step for step.", "The fixed phrase is 'step by step'."],
    ],
    endBold: "The hall is full of laughter, and you win by forty votes. The music club meets every Friday now.",
    endCareful: "It's close, but you win. Three months later, the bathrooms have new doors, and everyone remembers who fixed them." },
  { title: "Stranded on the Mountain", emoji: "⛰️", intro: "You're hiking with two friends near Salento. The fog has come down, and you can't see the path any more.",
    steps: [
      ["It's getting cold, and your phone has 10% battery.", "We keep walking downhill until we find a road.", "We stay where we are and call for help.", "We keep walk downhill until we find a road.", "After 'keep', use -ing: keep walking."],
      ["You hear a dog barking somewhere below you.", "We follow the sound, even though it's off the path.", "We shout so that someone might hear us.", "We follow the sound, even it's off the path.", "We need 'even though' (or 'although') before a clause."],
      ["A farmer appears with a torch.", "I ask if we can stay the night at his farm.", "I ask him to show us the way to the town.", "I ask him show us the way to the town.", "We ask someone TO do something: ask him to show us."],
    ],
    endBold: "You spend the night at the farm, drinking hot chocolate by the fire and listening to the farmer's stories.",
    endCareful: "The farmer walks you to the town. You arrive tired but safe, and you'll never hike without a map again." },
  { title: "The Viral Video", emoji: "🎥", intro: "You posted a video of your little brother dancing. Overnight, it got two million views.",
    steps: [
      ["A brand sends you a message offering money for an advert.", "I reply that we're interested.", "I tell them I'll ask my parents first.", "I reply that we're interesting.", "'Interested' describes how you feel; 'interesting' describes the thing."],
      ["Some comments are unkind about your brother.", "I delete them and block the users.", "I turn off comments for a while.", "I delete them and block to the users.", "'Block' takes a direct object: block the users."],
      ["A TV show invites you both to appear.", "We accept and practise a new dance.", "We decline because my brother is too shy.", "We accept and practice a new dance.", "In British English, 'practise' is the verb and 'practice' the noun."],
    ],
    endBold: "Your brother dances live on TV, and the whole country falls in love with him. He now wants to be a famous dancer.",
    endCareful: "Your brother is relieved. The video slowly disappears from the trends, and life goes back to normal, which is exactly what he wanted." },
  { title: "The Exchange Trip", emoji: "✈️", intro: "You've arrived in Toronto for a three-week exchange. Your host family is waiting at the airport.",
    steps: [
      ["Your host brother asks what you'd like to do first.", "I say I'd love to see the CN Tower.", "I say I'd rather rest, because I'm exhausted.", "I say I'd rather to rest, because I'm exhausted.", "After 'would rather', use the base verb: I'd rather rest."],
      ["At dinner, they serve something you've never tried.", "I try it, although I'm not sure about it.", "I politely explain that I'm vegetarian.", "I try it, although I'm not sure of it what it is.", "Too many words: 'I'm not sure what it is' is enough."],
      ["On your last night, they ask about your favourite moment.", "I tell them it was the ice-hockey match.", "I tell them it was the quiet evenings with them.", "I say them it was the ice-hockey match.", "We 'tell someone' something, but 'say something to someone'."],
    ],
    endBold: "They give you a team jersey with your name on it. You promise to come back for the playoffs.",
    endCareful: "Your host mum cries a little. Six months later, your host brother visits you in Colombia." },
  { title: "The Science Fair", emoji: "🔬", intro: "The science fair is next week, and your partner has just told you that your experiment doesn't work.",
    steps: [
      ["You have five days left.", "We start a new experiment from scratch.", "We find out why the original one failed.", "We find out why did the original one fail.", "In indirect questions, use normal word order: why the original one failed."],
      ["You need a material you can't find in the shops.", "I order it online and pay for fast delivery.", "We use something cheaper instead.", "I order it online and pay fast delivery.", "We 'pay FOR' something."],
      ["The judges ask a difficult question.", "I admit I don't know, but I explain how we could find out.", "I let my partner answer, because she's better at physics.", "I admit I don't know, but explain how could we find out.", "Indirect question word order: how we could find out."],
    ],
    endBold: "The judges love your honesty and creativity. You come second, and a university professor asks to see your project.",
    endCareful: "Your partner's answer impresses everyone. You win 'Best Teamwork', which you both agree is the best prize." },
  { title: "Midnight at the Library", emoji: "📚", intro: "You fell asleep in the school library. When you wake up, it's dark and the doors are locked.",
    steps: [
      ["Your phone shows 11:52 p.m. Something is moving between the shelves.", "I grab a torch from the librarian's desk and investigate.", "I hide behind a sofa and stay completely still.", "I grab a torch from the librarian's desk and investigating.", "Both verbs need the same form: grab… and investigate."],
      ["A book falls off a shelf by itself and opens on a map.", "I follow the map to the basement.", "I take a photo of the map and send it to a friend.", "I follow the map until the basement.", "We go 'to' a place; 'until' is for time."],
      ["You find an old wooden box with your school's name on it.", "I open it, whatever might be inside.", "I wait until morning to open it with a teacher.", "I open it, whatever might being inside.", "After 'might', use the base form: might be."],
    ],
    endBold: "Inside are letters written by students in 1952, and one is addressed to you by name. The mystery is only beginning…",
    endCareful: "In the morning, the head teacher opens it with you. It's a time capsule, and you're asked to make the next one." },
];

const C: Story[] = [
  { title: "The Whistleblower", emoji: "📁", intro: "As an intern at a large company, you discover documents suggesting the company has been hiding pollution data.",
    steps: [
      ["Your manager asks why you were in the archive room.", "I tell her the truth, regardless of the consequences.", "I give a vague answer to buy myself some time.", "I tell her the truth, regardless the consequences.", "'Regardless' needs 'of' before a noun."],
      ["A journalist contacts you, having heard rumours.", "I agree to meet her, provided my name stays out of it.", "I decline until I've spoken to a lawyer.", "I agree to meet her, provided my name will stay out of it.", "After 'provided (that)', use the present for the future: provided it stays."],
      ["The company offers you a permanent job, on condition that you sign a confidentiality agreement.", "I refuse to sign, however attractive the offer is.", "I ask for time to consider the terms carefully.", "I refuse to sign, however the offer is attractive.", "The structure is 'however + adjective + subject + verb'."],
    ],
    endBold: "The story makes the front page. The company is fined, the river is cleaned up, and you've never been prouder of a decision.",
    endCareful: "Your lawyer helps you report the data to the environmental agency. The case takes months, but justice is done quietly." },
  { title: "The Expedition", emoji: "🧭", intro: "You're part of a research team in the Amazon. Your guide has fallen ill, and the boat won't return for four days.",
    steps: [
      ["The team must decide whether to wait or move on.", "I argue that we should press on to the next village.", "I suggest we stay put and ration our supplies.", "I suggest that we should to stay put and ration our supplies.", "After 'should', no 'to': we should stay."],
      ["You come across a tribe who have had little contact with outsiders.", "I attempt to communicate through gestures and drawings.", "I insist that we keep a respectful distance.", "I insist that we kept a respectful distance.", "After 'insist that', use the base form (or 'should keep')."],
      ["Your satellite phone finally gets a signal.", "I call for a helicopter, whatever it costs.", "I report our position and ask for advice.", "I call for a helicopter, whatever does it cost.", "No question order after 'whatever': whatever it costs."],
    ],
    endBold: "The helicopter arrives within hours, and your guide makes a full recovery. Your notes on the journey become a celebrated article.",
    endCareful: "Advice from the base leads you to a ranger station. Your careful approach is later cited as a model of ethical fieldwork." },
  { title: "The Debate Final", emoji: "🎙️", intro: "You're in the national debate final. The motion: 'This house would ban homework.' You've been assigned to oppose it.",
    steps: [
      ["Your opponent opens with a powerful emotional story.", "I acknowledge the story but challenge its relevance.", "I set the story aside and focus on the evidence.", "I acknowledge the story but challenge it's relevance.", "'Its' is possessive; 'it's' means 'it is'."],
      ["A judge interrupts with a tough question about stress.", "I concede the point, but argue that the solution is reform, not a ban.", "I cite a study showing moderate homework improves results.", "I concede the point, but argue that the solution is the reform, not the ban.", "General abstract nouns usually take no article here: reform, not a ban."],
      ["You have thirty seconds left for your conclusion.", "I end with a striking rhetorical question.", "I summarise my three arguments clearly.", "I end with a striking rhetoric question.", "The adjective is 'rhetorical'; 'rhetoric' is the noun."],
    ],
    endBold: "The room falls silent after your question, then erupts in applause. You win the final on a split decision.",
    endCareful: "The judges praise your structure as 'flawless'. You win, and your summary is used as an example in next year's training." },
  { title: "The Start-up", emoji: "🚀", intro: "Your app connecting farmers directly with restaurants has caught an investor's attention.",
    steps: [
      ["She offers a large sum in exchange for 40% of the company.", "I accept, on the grounds that rapid growth is essential.", "I negotiate, given that the farmers' trust is our real asset.", "I accept, on the grounds of rapid growth is essential.", "'On the grounds that' introduces a clause; 'on the grounds of' needs a noun."],
      ["A larger competitor launches an almost identical app.", "I focus on outpacing them with new features.", "I double down on our relationships with local farmers.", "I double up on our relationships with local farmers.", "The idiom is 'double down on'."],
      ["The competitor offers to buy you out.", "I turn the offer down, confident we can win.", "I hear them out before deciding anything.", "I turn down the offer it, confident we can win.", "Don't repeat the object: 'turn the offer down' or 'turn it down'."],
    ],
    endBold: "Your gamble pays off: within a year you've expanded to three countries, and the competitor's app has quietly closed.",
    endCareful: "Their offer turns out to include a guarantee for every farmer. You accept, and the network doubles in size overnight." },
  { title: "The Missing Painting", emoji: "🖼️", intro: "A priceless painting has vanished from the museum where you volunteer. The police have no leads.",
    steps: [
      ["You notice that one of the guards seems unusually nervous.", "I confront him directly about what he saw.", "I discreetly check the security logs instead.", "I confront him directly about what did he see.", "Embedded questions use statement order: what he saw."],
      ["The logs show the alarm was switched off for exactly four minutes.", "I tell the police immediately.", "I try to work out who had the access code.", "I tell to the police immediately.", "'Tell' takes a direct object: tell the police."],
      ["You trace the code to the museum's own director.", "I accuse her publicly at the press conference.", "I share the evidence privately with the investigating officer.", "I share the evidence privately with the investigating officer, who he thanks me.", "Don't repeat the subject after 'who'."],
    ],
    endBold: "Live on television, the director's story collapses. The painting is recovered from her country house that same evening.",
    endCareful: "The officer builds an airtight case. When the arrest comes, you're thanked in the official report, though few people ever know your name." },
  { title: "The Climate Summit", emoji: "🌍", intro: "You've been chosen as Colombia's youth delegate at an international climate summit.",
    steps: [
      ["A powerful minister dismisses young people as 'idealistic'.", "I respond that idealism is precisely what's been missing.", "I let the data speak for itself.", "I respond that idealism is precisely what has been missed.", "We mean something that has been absent: 'what's been missing'."],
      ["Two countries are deadlocked over a funding agreement.", "I propose a compromise that neither side has considered.", "I bring the two youth delegates together to find common ground.", "I propose a compromise that none side has considered.", "Use 'neither' for two sides: neither side."],
      ["You're given two minutes at the closing session.", "I speak without notes, straight from the heart.", "I read out messages from children in the Amazon.", "I speak without notes, straight from my heart's.", "The fixed phrase is 'from the heart'."],
    ],
    endBold: "Your words are quoted in headlines around the world, and the final agreement includes a new youth advisory council.",
    endCareful: "The children's messages move the room to silence. The funding deal is signed, with a clause named after the Amazon children." },
  { title: "The Last Manuscript", emoji: "📜", intro: "In your grandfather's attic, you find an unpublished novel by a famous Colombian writer, with a note saying it must never be read.",
    steps: [
      ["A publisher hears about it and offers a fortune.", "I'm tempted, given how important the book might be.", "I'm wary, mindful of the writer's final wish.", "I'm wary, mindful about the writer's final wish.", "The adjective 'mindful' takes 'of'."],
      ["You read the first chapter. It's about your grandfather.", "I keep reading, however painful it may be.", "I stop, and ask my grandmother about the past.", "I keep reading, however it may be painful.", "'However + adjective' comes first: however painful it may be."],
      ["You learn a family secret that changes everything.", "I decide the world deserves to read it.", "I decide some stories are better left untold.", "I decide some stories are better leaving untold.", "The fixed expression is 'better left untold'."],
    ],
    endBold: "The novel becomes a literary sensation. Your family's story, at last told in full, is met not with shame but with understanding.",
    endCareful: "You return the manuscript to the attic. Years later, you tell the story to your own children, in your own words." },
];

const TIER: Record<BandId, Story[]> = { "A1+": A, A2: A, "A2+": A, B1: B, "B1+": B, B2: B, "B2+": C, C1: C, C2: C };
export const storiesFor = (band: BandId) => TIER[band];
