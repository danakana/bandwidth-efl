/** More graded reading for B1+ (set 3). Original texts for Bandwidth EFL. For teacher review. */
import type { Story } from "./types";

export const B1P_EXTRA: Story[] = [
  {
    id: "b1p-sleep-memory", band: "B1+", universe: "science", kind: "article",
    title: "Study, then sleep on it", blurb: "Your brain keeps working on what you learnt while you sleep.",
    text: `Many students believe that the best way to prepare for an exam is to stay up all night studying. Research suggests that this is one of the worst things you can do, and the reason has to do with what happens in your brain while you sleep.

During the day, new information is stored temporarily in a part of the brain called the hippocampus. You can think of it as a kind of inbox: useful, but limited. At night, especially during deep sleep, the brain seems to replay the day's experiences and transfer important information to longer-term storage in other areas. Scientists call this process memory consolidation. Without enough sleep, much of what you studied may never be properly saved.

Sleep doesn't only protect memories; it seems to help us understand them too. In one well-known experiment, people were given a number puzzle that had a hidden shortcut. Those who slept between two attempts were much more likely to discover the shortcut than those who stayed awake for the same amount of time. Sleep appears to help the brain find patterns and connections.

There's also a problem with studying while tired. Lack of sleep reduces attention and makes it harder to take in new information the next day. In other words, an all-nighter damages both what you learnt yesterday and what you could learn today.

So what should you do? Experts suggest spreading your studying over several days, reviewing the most important material in the evening and getting a full night's sleep before the exam. It might feel like you're wasting time in bed, but your brain is still working for you.`,
    gloss: [
      { word: "temporarily", means: "for a short time only" },
      { word: "consolidation", means: "the process of making something stronger or more permanent" },
      { word: "shortcut", means: "a quicker way of doing something" },
      { word: "all-nighter", means: "a night when you stay awake to study or work" },
    ],
    questions: [
      { q: "What happens to new information during deep sleep, according to the text?", options: ["It is moved to longer-term storage in the brain.", "It stays in the hippocampus permanently.", "It is deleted to make space for the next day's new memories."], answer: 0, why: "The brain transfers \"important information to longer-term storage in other areas.\"" },
      { q: "What did the number puzzle experiment show?", options: ["Tired people solved puzzles faster.", "Sleeping between attempts helped people find a hidden pattern.", "People who stayed awake remembered the numbers much better."], answer: 1, why: "\"Those who slept… were much more likely to discover the shortcut.\"" },
      { q: "Why is an all-nighter doubly harmful?", options: ["It makes the next day's exams longer and more difficult.", "It uses up the brain's inbox too quickly, so it can't save anything.", "It weakens old memories and the ability to learn new things."], answer: 2, why: "\"It damages both what you learnt yesterday and what you could learn today.\"" },
    ],
  },
  {
    id: "b1p-wall-letter", band: "B1+", universe: "past", kind: "story",
    title: "The letter in the wall", blurb: "Renovating an old house in Edinburgh, Ellie finds a letter from 1952.",
    text: `When my parents bought an old house in the centre of Edinburgh, everyone said they were mad. The walls were cracked, the roof leaked and the kitchen hadn't been changed since the 1950s. My dad, who is an architect, said it had "character". I said it had insects.

In July, the builders started removing an old wall between the kitchen and the dining room. In the middle of the morning, one of them called my dad. Between the bricks, there was a small metal box, rusty and covered in dust. Inside was an envelope, yellow with age. On it, someone had written in careful handwriting: "For whoever lives here in the future."

We opened it at dinner. The letter was dated 4 March 1952 and signed by a woman called Margaret. She explained that her family had built the house and that she was writing on the day her first son was born. She described the street, the price of bread and the sound of church bells in the morning. At the end, she wrote: "I hope the people who find this are happy here. A house is only walls until someone fills it with life."

My dad wanted to find Margaret's family, so we started searching. The city archive had the property records, and after weeks of emails and phone calls, we found her granddaughter, who now lives in Canada. She flew over to visit in December. When she read the letter, she cried. "That son was my father," she said.

Before the builders closed the new wall, we put the box back, with Margaret's letter and a new one from us.`,
    gloss: [
      { word: "rusty", means: "covered in the red-brown substance that forms on old metal" },
      { word: "archive", means: "a place where old official documents are kept" },
      { word: "property records", means: "official documents showing who owned a building or land" },
    ],
    questions: [
      { q: "Where was the box found?", options: ["Between the bricks of a wall being removed.", "Under the wooden floor of the old dining room.", "In the old kitchen cupboards."], answer: 0, why: "\"Between the bricks, there was a small metal box.\"" },
      { q: "How did the family find Margaret's granddaughter?", options: ["She saw a news story about the letter on television and called them.", "They searched the city archive and made many phone calls.", "The builders knew her family."], answer: 1, why: "\"The city archive had the property records, and after weeks of emails and phone calls, we found her granddaughter.\"" },
      { q: "Why did the family put the box back in the wall?", options: ["The granddaughter didn't want to keep the letter herself.", "The builders asked them to.", "To continue the tradition for future owners."], answer: 2, why: "They added \"a new one from us\", repeating what Margaret had done." },
    ],
  },
  {
    id: "b1p-electric-buses", band: "B1+", universe: "futures", kind: "article",
    title: "The quiet bus", blurb: "One Chinese city changed every one of its buses to electric. Others are following.",
    text: `If you ride a bus in Shenzhen, in southern China, you may notice something strange: silence. No roar of a diesel engine, no black smoke at the traffic lights. In 2017, Shenzhen became the first big city in the world where every public bus was electric: more than sixteen thousand of them.

The reasons are clear. Transport is one of the main sources of air pollution in big cities, and old diesel buses are among the worst offenders. They release tiny particles that damage people's lungs, especially children's and older people's. Electric buses produce no exhaust fumes at all. They also usually produce less carbon dioxide over their lifetime than diesel buses, although the exact benefit depends on how the electricity is produced.

Of course, the change hasn't been simple. Electric buses cost more to buy, although they are cheaper to run and maintain. Cities need large charging stations, usually in the bus depots, and drivers and mechanics need training. Some critics also point out that new buses don't solve every problem: traffic jams, long journeys and overcrowding remain serious issues.

Still, cities on every continent are following. London, Santiago de Chile and Bogotá have all built large electric fleets, and many more are planning to. For passengers, the most obvious change may be the simplest one. "The first time I took an electric bus," one student said, "I could actually hear my music without turning it up."`,
    gloss: [
      { word: "fleets", means: "groups of vehicles owned by the same company or city" },
      { word: "offenders", means: "(here) things that cause a problem" },
      { word: "exhaust fumes", means: "gas that comes out of a vehicle's engine" },
      { word: "depots", means: "places where buses are kept and repaired" },
    ],
    questions: [
      { q: "Why are diesel buses a health problem?", options: ["They release tiny particles that harm people's lungs.", "They are much too loud for passengers and drivers.", "They use electricity from dams."], answer: 0, why: "\"They release tiny particles that damage people's lungs.\"" },
      { q: "What is one disadvantage of electric buses mentioned in the text?", options: ["They produce more carbon dioxide.", "They cost more to buy at first.", "They need more drivers."], answer: 1, why: "\"Electric buses cost more to buy, although they are cheaper to run.\"" },
      { q: "What do critics point out?", options: ["Electric buses are less safe.", "Other cities in the world have better and cheaper buses.", "New buses don't fix all transport problems."], answer: 2, why: "\"New buses don't solve every problem: traffic jams, long journeys and overcrowding remain.\"" },
    ],
  },
  {
    id: "b1p-deepfake", band: "B1+", universe: "screens", kind: "story",
    title: "It wasn't me", blurb: "A fake video of Natalia starts spreading round her school.",
    text: `On Monday morning, Natalia walked into school and noticed that people were looking at her and laughing. Her friend Camila pulled her into the bathroom and showed her a video on her phone. In it, Natalia was standing in front of the school saying terrible things about her classmates. It was her face. It was her voice. But she had never said those words.

"It's a deepfake," Camila said quietly. Someone had used an app to create a fake video from photos and voice clips taken from Natalia's social media.

Natalia felt sick. The video had already been shared in at least five groups. Some people believed it; others weren't sure. She wanted to go home and never come back. Instead, Camila convinced her to go straight to the school psychologist, Doctor Peña.

Doctor Peña took it seriously from the first minute. She helped Natalia save evidence: screenshots, links and the names of the groups. The school contacted Natalia's parents and reported the video to the platforms, which removed it within a day. With her parents, Natalia also reported it to the authorities, because creating and sharing fake sexual or humiliating content about someone can be a crime.

The hardest part was facing her class. On Wednesday, Doctor Peña organised a session about deepfakes. She showed examples and explained how easy they are to make. At the end, a boy at the back put up his hand. "I shared it," he said. "I'm sorry. I thought it was real."

Natalia didn't forgive everyone that day. But she learnt something important: telling an adult quickly made the difference.`,
    gloss: [
      { word: "deepfake", means: "a video or audio made with technology to look like a real person saying or doing something they didn't" },
      { word: "evidence", means: "information that shows something is true" },
      { word: "authorities", means: "official organisations such as the police" },
      { word: "humiliating", means: "making someone feel very ashamed or embarrassed" },
    ],
    questions: [
      { q: "How was the fake video made?", options: ["With photos and voice clips from Natalia's social media.", "By a classmate who recorded Natalia secretly.", "By a television company that wanted a funny story about her."], answer: 0, why: "\"From photos and voice clips taken from Natalia's social media.\"" },
      { q: "What did Doctor Peña help Natalia do first?", options: ["Delete her social media accounts.", "Save evidence of the video and where it was shared.", "Find the person who made it and post their name online."], answer: 1, why: "\"She helped Natalia save evidence: screenshots, links and the names of the groups.\"" },
      { q: "What is the main message of the story?", options: ["Deepfakes are impossible to remove once they are online.", "Students should never use social media until they are adults.", "Getting help from a trusted adult quickly can limit the damage."], answer: 2, why: "\"Telling an adult quickly made the difference.\"" },
    ],
  },
  {
    id: "b1p-botero", band: "B1+", universe: "arts", kind: "article",
    title: "Big is beautiful", blurb: "Fernando Botero's round figures made him one of Latin America's best-known artists.",
    text: `Even people who know nothing about art often recognise a painting by Fernando Botero. His people, animals and even fruit are round, full and enormous, as if they had been inflated. Botero, who was born in Medellín in 1932 and died in 2023, became one of the most famous Latin American artists of the twentieth century.

Many people think Botero simply painted fat people, but he always rejected that idea. For him, the round shapes were about volume: a way of making forms feel solid, sensual and full of life. He said he had discovered his style almost by accident in the 1950s, while drawing a mandolin. When he made the hole in the middle of the instrument very small, the mandolin suddenly looked enormous and generous. From then on, he applied this idea to everything he painted.

His work often has a sense of humour. He painted presidents, bishops, generals and wealthy families with tiny eyes and serious faces, which some critics see as gentle criticism of power. But he also dealt with painful subjects, including violence in Colombia and, later, the abuse of prisoners in the Iraq war.

Botero was also generous with his own country. In the year 2000, he donated a large collection of his works, and paintings by famous European artists from his private collection, to museums in Bogotá and Medellín. Today, anyone can visit the Botero Museum in Bogotá for free. In Medellín, his huge bronze sculptures fill a public square, where children climb on them and tourists take photos every day. For Botero, that was the point: art should be part of everyday life.`,
    gloss: [
      { word: "inflated", means: "filled with air so that it becomes bigger" },
      { word: "volume", means: "(in art) the sense that a shape is solid and takes up space" },
      { word: "donated", means: "gave something for free to help others" },
      { word: "bronze", means: "a brown metal used to make statues" },
    ],
    questions: [
      { q: "How did Botero explain his round figures?", options: ["As a way of showing volume and life.", "As a way of making fun of fat people.", "As a copy of European paintings."], answer: 0, why: "\"For him, the round shapes were about volume.\"" },
      { q: "What happened when Botero drew a mandolin?", options: ["He decided to become a musician and learn to play the mandolin.", "A small hole made the instrument look huge, inspiring his style.", "He sold the drawing of the mandolin for a lot of money."], answer: 1, why: "\"When he made the hole… very small, the mandolin suddenly looked enormous.\"" },
      { q: "What did Botero believe about art, according to the last paragraph?", options: ["It should only be shown in private collections.", "It should be expensive to see.", "It should be part of people's daily lives."], answer: 2, why: "\"For Botero, that was the point: art should be part of everyday life.\"" },
    ],
  },
  {
    id: "b1p-spelling-bee", band: "B1+", universe: "words", kind: "story",
    title: "One letter", blurb: "In the final round of the national spelling bee, Marcus has to spell a word he's never heard.",
    text: `There were only two of us left on the stage: me and a girl from Ohio called Priya. It was the final of the Scripps National Spelling Bee, near Washington, D.C., and the room was so quiet I could hear the air conditioning.

I had prepared for months. Every night after dinner, my older sister read words to me from a list of three thousand. I learnt that English words often carry their history with them. Words from Greek, like "rhythm" and "psychology", have strange letters like "rh" and "ps". Words from French often end in "-ique" or "-eau". If you know where a word comes from, you can sometimes guess how to spell it.

Priya spelled "conscientious" perfectly. Then it was my turn. The judge said: "Your word is 'sesquipedalian'." I had never heard it. My mind went blank. I asked for the definition: "using long words." I asked for the language of origin: "Latin." I took a deep breath and broke it into pieces, the way my sister had taught me. Sesqui, like a word meaning "one and a half". Ped, like "pedal", connected to the foot. Ian, a common ending.

I spelled it slowly. When I finished, the judge paused. "That is correct."

But in the next round, I missed the word "liaison" by one letter. I forgot the second "i". Priya spelled it correctly and won. I was disappointed, of course. But afterwards, she came over and said, "How did you get sesquipedalian? I didn't know it either." We spent the evening talking about words. We still message each other a "word of the day".`,
    gloss: [
      { word: "spelling bee", means: "a contest where people spell words correctly, letter by letter" },
      { word: "my mind went blank", means: "I suddenly couldn't think of anything" },
      { word: "origin", means: "the place or language something comes from" },
      { word: "disappointed", means: "sad because something didn't happen as you hoped" },
    ],
    questions: [
      { q: "How did Marcus prepare for the competition?", options: ["His sister read him words from a long list every night.", "He studied Greek and Latin at school with a special teacher.", "He practised with Priya online."], answer: 0, why: "\"Every night after dinner, my older sister read words to me from a list of three thousand.\"" },
      { q: "How did Marcus spell a word he didn't know?", options: ["He guessed and was lucky.", "He divided it into parts and used their origins.", "He asked the judge to say it more slowly."], answer: 1, why: "\"I… broke it into pieces, the way my sister had taught me.\"" },
      { q: "What does the ending show?", options: ["Marcus was too upset to talk to Priya.", "Priya won because the judges preferred her to Marcus.", "Losing led to a new friendship based on a shared interest."], answer: 2, why: "They \"still message each other a 'word of the day'\"." },
    ],
  },
  {
    id: "b1p-bees", band: "B1+", universe: "science", kind: "article",
    title: "The bees without a sting", blurb: "Colombia's native stingless bees are small, quiet and very important.",
    text: `When most people think of bees, they imagine the honeybee: striped, buzzing and ready to sting. But honeybees are not originally from the Americas; they were brought from Europe and Africa. Long before they arrived, the forests of Colombia were full of other bees: stingless bees, also known as meliponas, small insects that cannot sting at all.

There are hundreds of species of stingless bees in tropical regions around the world, and Colombia has a large number of them. Some are smaller than a grain of rice. They live in colonies inside hollow trees, walls or even old pots, and they defend their nests by biting or by blocking the entrance with resin, rather than stinging.

Stingless bees are important pollinators. As they move from flower to flower collecting nectar, they carry pollen that plants need to produce fruit and seeds. Many wild plants, and crops such as coffee, avocado and some fruits, benefit from their visits. Their honey is produced in much smaller quantities than honeybee honey, but it has been valued for centuries by Indigenous communities, who have used it as food and medicine.

Unfortunately, these bees face serious threats. Forests are cut down, which destroys the trees where they nest. Pesticides used on farms can kill them, and many people destroy their nests because they don't know they are harmless. In recent years, some Colombian farmers have started keeping stingless bees in wooden boxes, a practice called meliponiculture. It helps protect the bees, produces honey to sell and improves the harvest of nearby crops. For a bee that can't sting, it's a good deal.`,
    gloss: [
      { word: "sting", means: "hurt someone with a sharp part of the body, as bees and wasps do" },
      { word: "colonies", means: "groups of the same insects living together" },
      { word: "pollinators", means: "animals that carry pollen between flowers so plants can produce fruit and seeds" },
      { word: "harmless", means: "not dangerous" },
    ],
    questions: [
      { q: "How do stingless bees protect their nests?", options: ["By biting or blocking the entrance.", "By stinging very quickly.", "By moving the nest to a new tree every day."], answer: 0, why: "\"They defend their nests by biting or by blocking the entrance with resin.\"" },
      { q: "Why are stingless bees important for farmers?", options: ["They produce more honey than honeybees do in the same time.", "They help pollinate crops such as coffee and avocado.", "They eat other insects that damage crops on farms."], answer: 1, why: "\"Crops such as coffee, avocado and some fruits benefit from their visits.\"" },
      { q: "What does the writer mean by 'it's a good deal' for the bees?", options: ["Their honey sells for a very high price in big cities.", "Farmers have to pay to keep them.", "It helps both the bees and the farmers."], answer: 2, why: "It \"helps protect the bees, produces honey to sell and improves the harvest.\"" },
    ],
  },
  {
    id: "b1p-mars-school", band: "B1+", universe: "futures", kind: "story",
    title: "School on Mars", blurb: "In 2071, Ana goes to school in the first settlement on Mars.",
    text: `My alarm goes off at 7:00, Mars time. A day here is about forty minutes longer than on Earth, so our clocks have extra minutes after midnight that nobody on Earth would understand. I was born here, in Settlement One, fourteen years ago. I'm one of only twenty-three children who have never breathed open air.

School starts at 8:30. There are nine of us in my class, aged twelve to fifteen. Our teacher, Mr Okafor, is the only person in the settlement with a teaching degree, so he teaches everything except medicine, which Doctor Lindqvist teaches on Thursdays. Some lessons come from Earth by video, but messages take between five and twenty minutes to arrive, so we can't have live conversations with teachers there. We send questions and get answers the next morning.

Our subjects are different from Earth schools. Everyone studies hydroponics, because we grow almost all our food in water tanks. We learn how to repair air filters, because if they stop working, we have hours, not days. But we also study history, literature and music. Mr Okafor says that if we only learn how to survive, we'll forget why we came.

My favourite part of the day is 4 p.m., when we go up to the dome for "sky time". Through the thick glass, the sky is pink in the day and blue at sunset, the opposite of Earth. Sometimes you can see Earth itself, a tiny bright point.

My grandmother asks me if I'm lonely. I tell her the truth: sometimes. But when I look at that tiny point, I think about how far people can go when they work together.`,
    gloss: [
      { word: "settlement", means: "a place where people come to live and build homes" },
      { word: "hydroponics", means: "growing plants in water with nutrients, without soil" },
      { word: "filters", means: "devices that clean air or water by removing dirt" },
      { word: "dome", means: "a round roof shaped like half a ball" },
    ],
    questions: [
      { q: "Why can't students have live lessons with teachers on Earth?", options: ["Messages take several minutes to travel between the planets.", "Teachers on Earth don't speak the children's language.", "The settlement has no video equipment."], answer: 0, why: "\"Messages take between five and twenty minutes to arrive.\"" },
      { q: "Why do students still study history, literature and music?", options: ["Earth schools require it.", "Mr Okafor believes they need to remember why they came.", "They need it to repair the air filters in the settlement."], answer: 1, why: "\"If we only learn how to survive, we'll forget why we came.\"" },
      { q: "How does Ana feel about life on Mars?", options: ["She wants to return to Earth immediately.", "She never feels lonely there because she has many friends.", "She sometimes feels lonely, but finds meaning in it."], answer: 2, why: "\"Sometimes\" lonely, but she thinks \"about how far people can go when they work together.\"" },
    ],
  },
  {
    id: "b1p-panama", band: "B1+", universe: "past", kind: "article",
    title: "When Panama was Colombia", blurb: "How a canal changed the map of Latin America.",
    text: `Look at a map of Colombia from the nineteenth century and you'll see something surprising: Panama is part of it. For most of the 1800s, the narrow strip of land between the Caribbean Sea and the Pacific Ocean was a department of Colombia. In 1903, that changed, and the reason was a canal.

For centuries, people had dreamed of cutting a waterway through the isthmus of Panama. Ships travelling between the Atlantic and Pacific oceans had to sail all the way around the southern tip of South America, a journey of thousands of extra kilometres. A French company started building a canal in the 1880s, but the project failed. Thousands of workers died from diseases such as yellow fever and malaria, and the company went bankrupt.

The United States then wanted to build the canal itself, and in 1903 it negotiated a treaty with Colombia. But the Colombian Senate rejected the agreement, partly because many senators felt the terms were unfair to Colombia. Shortly afterwards, a group in Panama declared independence. The United States quickly recognised the new country and sent warships to prevent Colombian troops from arriving. Days later, the new Panamanian government signed a treaty giving the United States control of a zone around the canal.

The canal opened in 1914 and transformed world trade. For Colombia, the loss of Panama was a national trauma, and relations with the United States were tense for years. In 1921, the United States paid Colombia compensation. Since 1999, the canal has been fully controlled by Panama, which today earns billions of dollars a year from it.`,
    gloss: [
      { word: "isthmus", means: "a narrow strip of land with sea on both sides, joining two larger areas" },
      { word: "bankrupt", means: "without enough money to pay debts, so a company must close" },
      { word: "treaty", means: "a formal written agreement between countries" },
      { word: "compensation", means: "money paid to someone because of a loss or damage" },
    ],
    questions: [
      { q: "Why did the French canal project fail?", options: ["Many workers died of disease and the money ran out.", "Colombia refused to allow a French company to build it.", "The United States stopped it."], answer: 0, why: "\"Thousands of workers died… and the company went bankrupt.\"" },
      { q: "What did the Colombian Senate do in 1903?", options: ["It declared Panama independent.", "It rejected the canal treaty with the United States.", "It sent warships to Panama to stop the independence movement."], answer: 1, why: "\"The Colombian Senate rejected the agreement.\"" },
      { q: "Who controls the canal today?", options: ["The United States.", "Colombia and Panama together.", "Panama."], answer: 2, why: "\"Since 1999, the canal has been fully controlled by Panama.\"" },
    ],
  },
  {
    id: "b1p-opening-night", band: "B1+", universe: "arts", kind: "story",
    title: "Opening night", blurb: "In the middle of the school play, Simón forgets every word.",
    text: `For six weeks, the drama club had rehearsed the play every Tuesday and Thursday. I had the second biggest part: a nervous detective who solves a mystery in a hotel. I knew all my lines. I said them in the shower, on the bus, even in my sleep, according to my brother.

On opening night, the school hall was full. Parents, teachers, younger students and, in the second row, my grandmother, who had travelled from Tunja to see me. The first scene went perfectly. People laughed in the right places. I started to relax.

Then, in the middle of the most important scene, it happened. I opened my mouth and nothing came out. My mind was completely empty. I could see Laura, who played the hotel owner, waiting for my line. The silence lasted maybe four seconds, but it felt like four years.

Then Laura did something brilliant. Still in character, she said: "Detective, you look like you've seen a ghost. Is it about the key you found in the kitchen?" The key! Suddenly, I remembered everything. "Yes," I said. "The key. It changes everything." The audience had no idea anything had gone wrong.

After the show, I thanked Laura about ten times. She laughed. "Our teacher always says the play is not about the words," she said. "It's about listening to each other on stage." My grandmother said I was the best detective she had ever seen. I didn't tell her about the four seconds.

I still think about that moment. Forgetting your lines is every actor's nightmare. But I learnt that on stage, like in life, you're not alone.`,
    gloss: [
      { word: "rehearsed", means: "practised a play or performance before showing it" },
      { word: "lines", means: "the words an actor says in a play" },
      { word: "in character", means: "continuing to act as the person in the play" },
      { word: "nightmare", means: "(here) a very bad experience that everyone fears" },
    ],
    questions: [
      { q: "What happened in the middle of the important scene?", options: ["Simón forgot what to say.", "Laura forgot her own lines.", "The lights went out."], answer: 0, why: "\"I opened my mouth and nothing came out.\"" },
      { q: "How did Laura help Simón?", options: ["She whispered his line to him from behind the curtain at the side.", "She asked a question in character that reminded him of the whole plot.", "She told the audience to wait."], answer: 1, why: "She said, still in character, \"Is it about the key you found in the kitchen?\"" },
      { q: "What did Simón learn from the experience?", options: ["Actors should never perform in front of family.", "Learning lines is the most important part of acting.", "Performers support each other and are not alone."], answer: 2, why: "\"On stage, like in life, you're not alone.\"" },
    ],
  },
  {
    id: "b1p-babies-talk", band: "B1+", universe: "words", kind: "article",
    title: "How babies crack the code", blurb: "Before they say a word, babies are already experts at listening.",
    text: `Babies usually say their first real word at around one year old. But long before that, they have already been working hard at learning language. In fact, research suggests that learning starts even before birth.

In the last months of pregnancy, babies can hear sounds from outside the womb. Studies have shown that newborns prefer their mother's voice to other voices, and that they react differently to the language their mother spoke during pregnancy. A French baby and an English baby, just a few days old, already seem to recognise the rhythm of "their" language.

In their first months, babies can hear the difference between almost all the sounds used in human languages, including sounds their parents can't distinguish. A baby in Madrid, for example, can hear the difference between two Hindi sounds that most Spanish-speaking adults hear as the same. But by around their first birthday, this ability changes. Babies become experts in the sounds of the language around them and less sensitive to others. Scientists sometimes call this "perceptual narrowing".

How do babies find words in a continuous stream of speech, where people don't pause between words? One famous experiment found that eight-month-olds can track which syllables tend to appear together. After listening to a stream of made-up syllables for just two minutes, babies could tell the difference between "words" (syllables that always appeared together) and random combinations.

Parents don't need special programmes to help. Researchers agree that the most useful thing is simple: talking to babies a lot, responding to their sounds and taking turns, as if in a real conversation. Babies are listening long before they can answer.`,
    gloss: [
      { word: "womb", means: "the part of a woman's body where a baby grows before birth" },
      { word: "newborns", means: "babies who were born a very short time ago" },
      { word: "distinguish", means: "notice the difference between two things" },
      { word: "syllables", means: "parts of a word with one vowel sound, like 'ba' in 'banana'" },
    ],
    questions: [
      { q: "What can newborn babies already recognise?", options: ["The rhythm of the language their mother spoke.", "The meaning of simple words.", "Every sound in their parents' language perfectly."], answer: 0, why: "Babies \"already seem to recognise the rhythm of 'their' language.\"" },
      { q: "What is 'perceptual narrowing'?", options: ["Babies hearing fewer sounds as they spend more time asleep.", "Babies specialising in the sounds of their own language.", "Parents speaking more slowly to babies."], answer: 1, why: "\"Babies become experts in the sounds of the language around them and less sensitive to others.\"" },
      { q: "What do researchers recommend for parents?", options: ["Using special language programmes and apps from a young age.", "Teaching babies a second language as early as possible.", "Talking to babies often and taking turns in little 'conversations'."], answer: 2, why: "\"Talking to babies a lot, responding to their sounds and taking turns.\"" },
    ],
  },
  {
    id: "b1p-bird-count", band: "B1+", universe: "science", kind: "story",
    title: "The bird count", blurb: "In Kenya, Wanjiru joins a team of volunteers counting birds before sunrise.",
    text: `At 4:45 in the morning, my phone rang. "Are you ready?" It was my biology teacher, Mr Otieno. Two weeks earlier, he had asked if anyone wanted to join a bird count with a local birdwatching club. I had said yes without really thinking. Now, in the dark and the cold, I was regretting it.

We drove to Kakamega Forest, the last piece of rainforest of its kind in Kenya. There were eight of us: a retired doctor, two university students, a taxi driver who had been birdwatching for twenty years and a few others. Each group received a route and a sheet to record every bird we saw or heard.

Kenya has more than a thousand bird species, more than all of Europe. I had never thought much about that. In my mind, there were pigeons and "other birds". But as the sun came up, the forest exploded with sound. Mr Kamau, the taxi driver, identified birds just by their songs. "That's a turaco. That one's a woodpecker. Listen, a sunbird." I couldn't see anything, but he was always right.

By ten o'clock, our group had recorded fifty-three species. I had seen a sunbird with a tail longer than its body and a hornbill eating fruit just a few metres away. My hands were cold, my shoes were wet and I was completely happy.

The data from counts like ours is sent to scientists, who use it to understand which species are increasing or decreasing. Mr Otieno said that ordinary people like us collect information that scientists could never collect alone. On the way home, I downloaded a bird identification app. Next year, I want to identify the songs myself.`,
    gloss: [
      { word: "regretting", means: "feeling sorry that you did something" },
      { word: "rainforest", means: "a thick forest in a hot place where it rains a lot" },
      { word: "identified", means: "recognised and named" },
      { word: "species", means: "a type of animal or plant" },
    ],
    questions: [
      { q: "How did Wanjiru feel at the start of the morning?", options: ["She regretted agreeing to go.", "She was excited to see a toucan.", "She was worried about her biology grade."], answer: 0, why: "\"In the dark and the cold, I was regretting it.\"" },
      { q: "What was special about Mr Kamau?", options: ["He was a biology teacher.", "He could identify birds just from their songs.", "He was the person who organised the whole bird count."], answer: 1, why: "\"Mr Kamau… identified birds just by their songs.\"" },
      { q: "Why is the bird count useful for science?", options: ["It helps sell bird identification apps.", "It brings more tourists and money to the reserve every year.", "Volunteers collect data scientists couldn't gather alone."], answer: 2, why: "\"Ordinary people like us collect information that scientists could never collect alone.\"" },
    ],
  },
  {
    id: "b1p-scrolling", band: "B1+", universe: "screens", kind: "article",
    title: "Why can't I stop scrolling?", blurb: "The design tricks that keep your thumb moving.",
    text: `You open an app to check one message. Forty minutes later, you're still scrolling, watching videos you'll forget in an hour. If this sounds familiar, it isn't only a question of willpower. Many apps are carefully designed to keep you there as long as possible.

One of the most powerful techniques is the infinite scroll. Older websites had pages: when you reached the bottom, you had to click "next". That moment gave your brain a natural chance to stop. Infinite scroll removes it. There is always more, and there is never an end.

Another technique uses what psychologists call variable rewards. If every video were amazing, you'd get bored. If none were good, you'd leave. But when some are great and most are just okay, your brain keeps looking for the next good one, a bit like a slot machine in a casino. Notifications, likes and "someone reacted to your post" work in a similar way: you never know exactly when the next reward will arrive.

Apps also use autoplay, which starts the next video before you've decided whether you want it, and red notification dots, a colour that attracts attention.

The good news is that knowing these tricks makes it easier to resist them. Some simple strategies can help: turning off non-essential notifications, setting time limits in your phone's settings, keeping your phone outside the bedroom at night and replacing "just checking" with a specific plan, such as "I'll answer my messages and then close the app." Technology isn't evil. But it's worth remembering that some of the cleverest people in the world are working to capture your attention, so it makes sense to decide where you want it to go.`,
    gloss: [
      { word: "willpower", means: "the ability to control what you do, even when it's difficult" },
      { word: "infinite", means: "without an end" },
      { word: "slot machine", means: "a gambling machine where you win money by chance" },
      { word: "resist", means: "stop yourself from doing something you want to do" },
    ],
    questions: [
      { q: "Why does infinite scroll make it harder to stop?", options: ["It removes the natural stopping point that a page ending gives.", "It makes the videos load more slowly so you wait longer.", "It shows only the best videos."], answer: 0, why: "Older pages gave \"a natural chance to stop. Infinite scroll removes it.\"" },
      { q: "Why does the writer compare apps to slot machines?", options: ["Both cost money every time you want to use them.", "Both give unpredictable rewards, which keeps us trying.", "Both use bright red colours to catch our attention."], answer: 1, why: "\"Your brain keeps looking for the next good one, a bit like a slot machine.\"" },
      { q: "What is the writer's attitude towards technology?", options: ["It is evil and should be avoided.", "It is harmless as long as you have strong willpower and rules.", "It isn't evil, but we should consciously control our attention."], answer: 2, why: "\"Technology isn't evil… it makes sense to decide where you want it to go.\"" },
    ],
  },
  {
    id: "b1p-ajiaco", band: "B1+", universe: "past", kind: "story",
    title: "Grandma's ajiaco", blurb: "Nobody wrote down the family recipe. Now Juliana has to cook it.",
    text: `Every Sunday for as long as I can remember, my grandmother made ajiaco. The whole family came: uncles, cousins, neighbours, sometimes people I didn't know. The soup was thick and yellow, with three kinds of potato, chicken, corn on the cob and, most importantly, guascas, a herb that gives ajiaco its special taste. At the table, there were always bowls of cream, capers and avocado.

Nobody ever wrote the recipe down. When we asked, my grandmother would laugh and say, "A little of this, a little of that, until it tastes right." Last year, she had an operation on her hand and couldn't cook for three months. On the first Sunday, the family looked at each other in panic. Who was going to make the ajiaco?

I volunteered. I'm not sure why. I had never cooked anything more complicated than eggs. My grandmother sat in the kitchen and gave instructions, but they were very hard to follow. "Add the potatoes when they're ready." "How do I know when they're ready?" "You'll see."

My first ajiaco was a disaster: too watery and with no flavour. The second one was better. By the fifth Sunday, my uncle had a second bowl, which in our family is the highest compliment. I started writing notes in a notebook: the order of the potatoes, how long to cook the chicken, how much guascas to add at the end.

My grandmother's hand is better now, and she's back in the kitchen. But we cook together, and the notebook stays on the counter. Last Sunday she looked at it and said, "Now the recipe will outlive me." I told her not to say that. But I understand why she was smiling.`,
    gloss: [
      { word: "herb", means: "a plant used to give flavour to food" },
      { word: "capers", means: "small green flower buds kept in vinegar, eaten with food" },
      { word: "volunteered", means: "offered to do something without being asked" },
      { word: "outlive", means: "continue to exist after someone has died" },
    ],
    questions: [
      { q: "Why was there a problem when the grandmother had an operation?", options: ["Nobody else knew how to make her ajiaco.", "The family stopped meeting at her house on Sundays.", "She lost her recipe notebook."], answer: 0, why: "\"Nobody ever wrote the recipe down… Who was going to make the ajiaco?\"" },
      { q: "Why were the grandmother's instructions hard to follow?", options: ["She spoke too quickly.", "They came from experience, not exact measurements.", "She didn't want to share the family recipe with anyone."], answer: 1, why: "\"Add the potatoes when they're ready.\" \"How do I know?\" \"You'll see.\"" },
      { q: "Why was the grandmother smiling at the end?", options: ["Her hand was completely better after a few weeks.", "Juliana's ajiaco was better than hers.", "The family recipe would now be passed on."], answer: 2, why: "\"Now the recipe will outlive me.\"" },
    ],
  },
];
