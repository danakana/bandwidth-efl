/** More graded reading for B1 (set 3). Original texts for Bandwidth EFL. For teacher review. */
import type { Story } from "./types";

export const B1_EXTRA: Story[] = [
  {
    id: "b1-group-chat", band: "B1", universe: "screens", kind: "story",
    title: "The message that went to everyone", blurb: "Sofía sends a joke to the wrong group chat.",
    text: `On Thursday night, Sofía was lying in bed, scrolling through her phone. Her best friend Mariana had sent her a photo of their maths teacher, Mr Rojas, wearing a very bright orange jacket. Sofía laughed and typed a quick reply: "He looks like a traffic cone lol" Then she sent it and turned off the light.

The next morning, she woke up to forty-three notifications. Her stomach dropped. She hadn't sent the message to Mariana. She had sent it to the class group, the one that included the class representative and two parents.

At school, nobody talked about anything else. Some people thought it was hilarious. Others said it was mean. Mariana tried to help: "Just say it was a joke." But Sofía knew that wasn't enough. Mr Rojas was strict, but he had always been fair to her.

At the end of the maths class, she waited until everyone had left. "Mr Rojas," she said, "I sent a message about your jacket last night. It was rude, and I'm sorry." He looked at her for a long moment. Then he smiled slightly. "My daughter chose this jacket," he said. "She told me it was 'brave'. I think you agree with her." Sofía didn't know whether to laugh or cry.

Since then, she has a new rule: before she sends anything about another person, she asks herself one question. Would I say this to their face?`,
    gloss: [
      { word: "notifications", means: "messages on your phone that tell you something new has happened" },
      { word: "her stomach dropped", means: "she suddenly felt worried or afraid" },
      { word: "hilarious", means: "extremely funny" },
      { word: "fair", means: "treating people equally and correctly" },
    ],
    questions: [
      { q: "What was Sofía's mistake?", options: ["She sent a private joke to the whole class group.", "She took a photo of the teacher during the maths class.", "She forgot to do her maths homework."], answer: 0, why: "\"She had sent it to the class group\" instead of to Mariana." },
      { q: "Why did Sofía decide that saying 'it was a joke' wasn't enough?", options: ["Her parents told her to apologise.", "She felt Mr Rojas had always treated her well.", "The class representative reported her to the head teacher."], answer: 1, why: "\"Mr Rojas was strict, but he had always been fair to her.\"" },
      { q: "What is the main lesson of the story?", options: ["Teachers should not wear bright clothes to school.", "Group chats for a class should never include the students' parents.", "Think about how the person will feel before you send it."], answer: 2, why: "Her new rule: \"Would I say this to their face?\"" },
    ],
  },
  {
    id: "b1-yawning", band: "B1", universe: "science", kind: "article",
    title: "Why is yawning contagious?", blurb: "You've probably yawned just reading the title.",
    text: `Try this experiment: watch a video of someone yawning, and count how long it takes before you yawn too. For many people, it happens in less than a minute. Some people even yawn just by reading or thinking about yawning. Are you yawning now?

Scientists still don't completely agree on why we yawn at all. For a long time, people believed it was a way to get more oxygen, but experiments haven't supported that idea. One popular theory today is that yawning helps to cool the brain. When we take a deep breath with our mouth wide open, cooler air may lower the temperature of the blood going to the head. Some studies have found that people yawn more when the air is a little warmer than the body, and less when it's very hot or very cold.

The contagious part is even more interesting. Humans aren't the only ones who catch yawns: chimpanzees, dogs and some other animals do it too. Several studies suggest that we catch yawns more easily from family and friends than from strangers. For this reason, some researchers think contagious yawning may be connected to empathy, our ability to understand and share other people's feelings.

However, not everyone is convinced. Other studies have found that age matters more than empathy: older people seem to catch yawns less often. As one scientist joked, yawning is something everybody does, but nobody fully understands.`,
    gloss: [
      { word: "contagious", means: "passing easily from one person to another" },
      { word: "theory", means: "an idea that tries to explain why something happens" },
      { word: "empathy", means: "the ability to understand and share someone else's feelings" },
      { word: "convinced", means: "completely sure that something is true" },
    ],
    questions: [
      { q: "What do experiments say about the oxygen idea?", options: ["They have not supported it.", "They have proved it is correct.", "They show it only applies to animals."], answer: 0, why: "\"Experiments haven't supported that idea.\"" },
      { q: "Why do some researchers connect contagious yawning to empathy?", options: ["Chimpanzees only yawn when they are sad or very tired.", "We catch yawns more easily from the people we are close to.", "People who yawn a lot are kinder than people who don't."], answer: 1, why: "\"We catch yawns more easily from family and friends than from strangers.\"" },
      { q: "What is the writer's overall point?", options: ["Yawning is mainly a sign that a person is bored or sleepy.", "The brain-cooling theory has now been proved by scientists.", "There are theories, but yawning isn't fully understood."], answer: 2, why: "\"Yawning is something everybody does, but nobody fully understands.\"" },
    ],
  },
  {
    id: "b1-coffee-harvest", band: "B1", universe: "past", kind: "story",
    title: "Harvest time", blurb: "Juan Pablo spends his holidays picking coffee on his uncle's farm.",
    text: `Every December, when school finishes, my parents send me to my uncle's coffee farm near Manizales. When I was younger, I hated it. There was no good internet, the mornings were cold and my uncle woke everyone up at half past four. This year, I'm sixteen, and for the first time I'm working as a picker, like everyone else.

The work is much harder than it looks. Coffee grows on very steep hills, and you have to pick only the red cherries, one by one, leaving the green ones for later. You carry a basket around your waist, and when it's full you empty it into a big sack. On my first day I picked eleven kilos. Doña Marleny, who has picked coffee for thirty years, picked over a hundred.

In the evenings, after dinner, the pickers tell stories. Some come from other regions and travel from farm to farm following the harvest. Don Ernesto told me he has worked on coffee farms in four different departments. "Each farm is different," he said, "but the coffee always tells you when it's ready."

By the end of the second week, I was picking forty kilos a day. My hands were rough and my back hurt, but I was proud. On my last morning, my uncle gave me a small bag of coffee from the hill I had picked. "This one is yours," he said. Now, every time my mum makes coffee, I think about the people whose hands picked it.`,
    gloss: [
      { word: "harvest", means: "the time when crops are collected from the fields" },
      { word: "steep", means: "rising or falling sharply, not flat" },
      { word: "cherries", means: "(here) the small fruit of the coffee plant, which contains the bean" },
      { word: "departments", means: "(in Colombia) the main regions of the country" },
    ],
    questions: [
      { q: "Why did Juan Pablo hate the farm when he was younger?", options: ["No internet, and the mornings started very early.", "His uncle made him work as a picker every single day.", "He didn't like the taste of coffee."], answer: 0, why: "\"There was no good internet, the mornings were cold and my uncle woke everyone up at half past four.\"" },
      { q: "What does the story say about Doña Marleny?", options: ["She was new to coffee picking, like Juan Pablo.", "She picked much more coffee than Juan Pablo on his first day.", "She was the owner of the farm, together with his uncle."], answer: 1, why: "\"Doña Marleny… picked over a hundred\" kilos." },
      { q: "How has the experience changed Juan Pablo?", options: ["He wants to own a coffee farm of his own one day.", "He has decided never to drink coffee.", "He now values the work behind every cup."], answer: 2, why: "\"I think about the people whose hands picked it.\"" },
    ],
  },
  {
    id: "b1-vallenato", band: "B1", universe: "arts", kind: "article",
    title: "Songs that tell the news", blurb: "How vallenato grew from local stories into Colombian heritage.",
    text: `Long before radio arrived in the villages of Colombia's Caribbean region, there was another way to spread news: songs. Travelling musicians moved from town to town with an accordion, a small drum called a caja and a scraper called a guacharaca. They sang about love, fights, funny events, floods and the people they met on the way. These songs became known as vallenato, from the city of Valledupar.

The three instruments tell part of the story of Colombia itself. The accordion came from Europe, the caja drum is connected to African traditions, and the guacharaca comes from Indigenous peoples of the region. Like many Colombian musical styles, vallenato is a mix.

Over the twentieth century, vallenato moved from village parties to the radio and then to huge concerts. Every year, the Vallenato Legend Festival in Valledupar brings together the best accordion players, singers and composers in a famous competition. Some vallenato songs, especially by composers like Rafael Escalona, are still sung by people of all ages.

In 2015, UNESCO added traditional vallenato to its list of intangible cultural heritage that needs urgent protection. This might sound strange for such popular music. But experts worry that the traditional style, with its stories and its local way of playing, is being replaced by more commercial versions that sound alike. Today, music schools in the region teach young people to play the accordion the old way, so that the songs that once carried the news don't disappear.`,
    gloss: [
      { word: "accordion", means: "a musical instrument you squeeze, with keys or buttons" },
      { word: "composers", means: "people who write music" },
      { word: "intangible cultural heritage", means: "traditions, music and knowledge (not buildings) that a culture passes on" },
      { word: "commercial", means: "made mainly to sell and make money" },
    ],
    questions: [
      { q: "What was one early purpose of vallenato songs?", options: ["To share news and stories between different towns.", "To teach children to play the accordion.", "To advertise festivals on the radio."], answer: 0, why: "\"There was another way to spread news: songs.\"" },
      { q: "Why does the writer say vallenato is 'a mix'?", options: ["It mixes love songs and sad songs in the same performance.", "Its instruments come from European, African and Indigenous traditions.", "It is played at festivals in many different cities around Colombia."], answer: 1, why: "The accordion is from Europe, the caja is linked to African traditions and the guacharaca to Indigenous peoples." },
      { q: "Why did UNESCO say traditional vallenato needs protection?", options: ["Fewer people listen to music on the radio.", "The vallenato festival in Valledupar was cancelled this year.", "Commercial versions may replace the traditional style."], answer: 2, why: "Experts worry it \"is being replaced by more commercial versions that sound alike.\"" },
    ],
  },
  {
    id: "b1-sign-language", band: "B1", universe: "words", kind: "story",
    title: "Hello with my hands", blurb: "Leon learns sign language to talk to his new neighbour.",
    text: `When the Becker family moved into the flat next door, I noticed that their son, Jonas, never answered when people said hello. I thought he was rude. Then one afternoon I saw him in the lift, moving his hands quickly while talking with his mother. Jonas was deaf.

That night I looked up German Sign Language online. I was surprised to learn that sign languages are real languages, with their own grammar, and that they are different in each country. A person who signs in Germany can't automatically understand someone who signs in Britain or the United States.

I started with the alphabet and simple words: hello, thank you, football, friend. I practised in front of the mirror, feeling a bit silly. A week later, I saw Jonas in the park and signed "Hello, my name is Leon." My hands were shaking. He looked surprised, then laughed and signed something very fast. I didn't understand a thing. He noticed, slowed down and spelled his name letter by letter.

Now we play football together on Saturdays. He's teaching me new signs, and I'm getting faster. Some of my friends have started learning too, because Jonas is the best goalkeeper in the building. The hardest part isn't the signs; it's remembering to look at people's faces, because in sign language your expression is part of the grammar.

I used to think Jonas was rude for not saying hello. Now I realise that, for months, nobody had said hello in a way he could understand.`,
    gloss: [
      { word: "deaf", means: "not able to hear" },
      { word: "sign language", means: "a language that uses hand movements and facial expressions" },
      { word: "spelled", means: "said or showed the letters of a word in order" },
      { word: "goalkeeper", means: "the player who stops the ball going into the goal" },
    ],
    questions: [
      { q: "Why did Leon first think Jonas was rude?", options: ["Jonas didn't answer when people said hello.", "Jonas laughed at his signing.", "Jonas didn't want to play football with the other students."], answer: 0, why: "\"Their son, Jonas, never answered when people said hello. I thought he was rude.\"" },
      { q: "What surprised Leon about sign languages?", options: ["They only use the alphabet.", "They are different in each country.", "They are easy to learn in a week."], answer: 1, why: "\"They are different in each country.\"" },
      { q: "What does the last paragraph suggest?", options: ["Jonas had been rude to his classmates for months.", "Leon still doesn't understand anything Jonas signs to him.", "The problem was communication, not Jonas's attitude."], answer: 2, why: "\"Nobody had said hello in a way he could understand.\"" },
    ],
  },
  {
    id: "b1-vertical-farms", band: "B1", universe: "futures", kind: "article",
    title: "Farms that grow up, not out", blurb: "Can we grow lettuce in a building in the middle of a city?",
    text: `Imagine a farm with no fields, no tractors and no sun. Instead, there are tall shelves of plants inside a building, with purple LED lights shining on them day and night. This is a vertical farm, and some people believe this is how cities will grow more of their food in the future.

Vertical farms have some clear advantages. Because the plants grow indoors, the weather doesn't matter: there are no droughts, storms or frosts. Many vertical farms grow plants without soil, with their roots in water full of nutrients, and they can recycle most of that water. They usually don't need pesticides, because insects can't get in. And because the farms are inside cities, the food doesn't have to travel hundreds of kilometres to reach supermarkets.

But there are also serious problems. The biggest is energy. On a normal farm, the sun gives light for free. In a vertical farm, every hour of light has to be paid for with electricity, and the buildings need air conditioning too. That makes the food expensive, and if the electricity comes from coal or gas, it isn't very good for the environment either. In the last few years, several well-known vertical farming companies have closed because they couldn't make enough money.

For now, vertical farms mostly grow fast, light plants like lettuce, herbs and strawberries. Growing rice, wheat or potatoes this way is still far too expensive. So vertical farms probably won't replace traditional farms, but they might become a useful part of how cities feed themselves.`,
    gloss: [
      { word: "droughts", means: "long periods with no rain" },
      { word: "nutrients", means: "substances that plants or animals need to grow" },
      { word: "pesticides", means: "chemicals used to kill insects that damage plants" },
      { word: "herbs", means: "plants used to give flavour to food, like basil or mint" },
    ],
    questions: [
      { q: "Why don't vertical farms usually need pesticides?", options: ["Insects can't get into the building.", "The purple lights kill any insects that come inside.", "The plants grow without roots."], answer: 0, why: "\"They usually don't need pesticides, because insects can't get in.\"" },
      { q: "What is the biggest problem with vertical farms?", options: ["They use too much water compared with normal farms.", "They need a lot of expensive energy.", "Their food travels too far."], answer: 1, why: "\"The biggest is energy.\"" },
      { q: "What is the writer's conclusion?", options: ["Vertical farms will soon replace traditional farms.", "Vertical farms are a failed idea that cities will soon abandon.", "They may help cities, but won't replace normal farms."], answer: 2, why: "\"Vertical farms probably won't replace traditional farms, but they might become a useful part of how cities feed themselves.\"" },
    ],
  },
  {
    id: "b1-audition", band: "B1", universe: "arts", kind: "story",
    title: "Thirty seconds", blurb: "Lerato has thirty seconds to show a dance company what she can do.",
    text: `The email said: "Each dancer will have thirty seconds of free choreography." Lerato read it five times. Thirty seconds. She had been dancing since she was seven, first in her neighbourhood's community centre in Soweto, then in a youth company. Now one of the most famous dance companies in the country was holding auditions, and she had thirty seconds to show them everything.

For two weeks, she practised every evening on the roof of her building. Her first idea was to include all her most difficult moves. Her teacher, Mr Dlamini, watched and shook his head. "It's impressive," he said, "but who are you? I can't see you in it." Lerato was annoyed. She had worked hard on those moves.

That night she couldn't sleep. She thought about why she had started dancing: her grandmother dancing to old jazz records in the kitchen, the music from the street on Sunday afternoons. The next day she threw away her plan and created something new: a short piece that started slowly, like her grandmother's steps, and ended with the fast footwork of pantsula, the street dance of Soweto.

On the day of the audition, there were almost two hundred dancers. When her turn came, her legs were shaking, but as soon as the music started she forgot about the judges. Thirty seconds later, it was over. One of the judges wrote something and said only, "Thank you."

Three weeks later, she got another email. It started with the word "Congratulations".`,
    gloss: [
      { word: "choreography", means: "the planned steps and movements of a dance" },
      { word: "auditions", means: "short performances to choose actors, dancers or musicians" },
      { word: "impressive", means: "making people admire you because it is very good or difficult" },
      { word: "footwork", means: "the way you move your feet, especially in dancing or sport" },
    ],
    questions: [
      { q: "What was Mr Dlamini's criticism of her first plan?", options: ["It showed difficult moves but not her personality.", "It was too slow and calm for a contemporary dance audition.", "It was longer than thirty seconds."], answer: 0, why: "\"It's impressive, but who are you? I can't see you in it.\"" },
      { q: "What inspired Lerato's new piece?", options: ["A video of a famous company.", "Her memories of her grandmother and of her own neighbourhood.", "The other dancers she watched on the day of the audition."], answer: 1, why: "She thought about \"her grandmother dancing to old jazz records in the kitchen, the music from the street.\"" },
      { q: "What can we understand from the last line?", options: ["She was asked to come back and audition again.", "The company rejected her politely.", "She was chosen by the dance company."], answer: 2, why: "An email starting with \"Congratulations\" means she was successful." },
    ],
  },
  {
    id: "b1-axolotl", band: "B1", universe: "science", kind: "article",
    title: "The animal that grows back", blurb: "The axolotl can rebuild legs, and even parts of its heart.",
    text: `The axolotl looks like a cartoon character: a small salamander with a wide smile, tiny eyes and feathery pink or dark gills on each side of its head. But scientists are interested in it for a much more serious reason. If an axolotl loses a leg, it can grow a completely new one, with bones, muscles and nerves. It can also repair parts of its heart, its spinal cord and even its brain.

Axolotls come from just one place in the world: the lakes and canals of Xochimilco, in Mexico City. There, they have lived for thousands of years. Unusually, axolotls keep many features of young animals for their whole lives. Most salamanders lose their gills and move onto land as adults, but axolotls usually stay in the water and keep their gills forever.

Researchers around the world keep axolotls in laboratories to study how their bodies rebuild themselves. When an axolotl is injured, cells near the wound seem to "remember" what they need to become. Understanding this process could one day help doctors treat serious injuries in humans, although that is still a long way off.

Sadly, while axolotls are common in laboratories and as pets, they are critically endangered in the wild. Pollution, the growth of Mexico City and fish introduced into the canals have destroyed much of their habitat. Local farmers and scientists are now working together to create clean water areas where wild axolotls can survive. It would be a strange situation if an animal that can rebuild almost any part of its body disappeared because we couldn't protect its home.`,
    gloss: [
      { word: "gills", means: "the parts that fish and some animals use to breathe in water" },
      { word: "spinal cord", means: "the nerves that go down the middle of your back" },
      { word: "wound", means: "an injury where the skin is cut or damaged" },
      { word: "critically endangered", means: "at very high risk of disappearing completely" },
    ],
    questions: [
      { q: "What makes axolotls different from most other salamanders?", options: ["They stay in the water and keep their gills even as adults.", "They live in many lakes and rivers all around the world.", "They can only grow back their legs."], answer: 0, why: "\"Axolotls usually stay in the water and keep their gills forever.\"" },
      { q: "Why do scientists study axolotls?", options: ["To protect the canals of Mexico City from pollution and tourists.", "To understand how their bodies rebuild damaged parts.", "To find new pets for families."], answer: 1, why: "\"To study how their bodies rebuild themselves.\"" },
      { q: "What situation does the writer call 'strange'?", options: ["Axolotls now live in laboratories instead of in the lakes of Mexico City.", "Farmers working with scientists.", "An animal that can heal itself is dying out because its home is being damaged."], answer: 2, why: "\"It would be a strange situation if an animal that can rebuild almost any part of its body disappeared…\"" },
    ],
  },
  {
    id: "b1-library-robot", band: "B1", universe: "futures", kind: "story",
    title: "Ask Libby", blurb: "The school library gets a robot assistant. Not everyone is happy.",
    text: `In March, our school library got a new assistant. It was a white robot about the size of a refrigerator, with a screen for a face and a soft, friendly voice. The director called it Libby. Libby could find any book in seconds, recommend novels based on what you liked and answer questions in four languages.

At first, everyone loved Libby. Students who never went to the library started going just to talk to it. But some people were worried, especially Señora Beatriz, the librarian. She had worked there for twenty-two years. "If the robot does everything," she asked at a meeting, "what am I for?"

One day, my friend Kevin asked Libby for help with a history project about his town. Libby gave him a list of fifteen books and articles. Kevin looked at the list and sighed. He didn't know where to start. Señora Beatriz noticed him from her desk. She came over, asked him some questions about what he really wanted to find out and then said, "Forget the list for now. Your grandmother lived through this. Start by interviewing her."

Kevin's project won a prize. In his presentation, he thanked his grandmother, Señora Beatriz and, last of all, Libby.

Libby is still in the library. It's very good at finding things. But we've learnt that finding information and knowing what to do with it are not the same. These days, there's a small sign on Libby's screen. Señora Beatriz wrote it. It says: "Ask Libby. Then ask a human."`,
    gloss: [
      { word: "refrigerator", means: "a fridge, the machine that keeps food cold" },
      { word: "librarian", means: "a person whose job is to work in a library" },
      { word: "sighed", means: "breathed out loudly because he was tired or frustrated" },
      { word: "interviewing", means: "asking someone questions to get information" },
    ],
    questions: [
      { q: "Why was Señora Beatriz worried about Libby?", options: ["She thought the robot might replace her.", "The robot recommended bad books.", "Students stopped going to the library because of the robot."], answer: 0, why: "\"If the robot does everything, what am I for?\"" },
      { q: "Why didn't Libby's list help Kevin at first?", options: ["The books were in the wrong language.", "He didn't know where to begin with so many sources.", "The list didn't have anything about the history of his town."], answer: 1, why: "\"He didn't know where to start.\"" },
      { q: "What does the sign 'Ask Libby. Then ask a human.' suggest?", options: ["Robots are better than people at finding the right books for students.", "Students should stop using Libby.", "Technology helps, but people add understanding and guidance."], answer: 2, why: "\"Finding information and knowing what to do with it are not the same.\"" },
    ],
  },
  {
    id: "b1-guatavita", band: "B1", universe: "past", kind: "article",
    title: "The real El Dorado", blurb: "The legend of a city of gold started with a ceremony on a lake.",
    text: `For centuries, European explorers searched South America for El Dorado, a lost city made entirely of gold. Many died in jungles and mountains looking for it. They never found it, because the city never existed. But the legend did start with something real: a ceremony of the Muisca people, who lived in the highlands of what is now central Colombia.

According to Spanish writers of the sixteenth century, when a new Muisca leader took power, a special ceremony took place at the Guatavita lagoon, a round lake not far from where Bogotá is today. The new leader's body was covered in a sticky substance and then in gold dust, so that he shone in the sun. He sailed on a raft to the middle of the lake with offerings of gold and precious stones, and threw them into the water as a gift to the gods. "El Dorado" means "the golden one": it first referred to a person, not a place.

When the Spanish heard this story, they imagined enormous treasures at the bottom of the lagoon. Several people tried to drain it to find the gold. One attempt cut a huge gap in the side of the lake, which you can still see today, but very little gold was found.

In 1969, three farmers found a small gold object in a cave near Bogotá. It shows a raft with a leader and his companions. Today it's called the Muisca Raft, and it is one of the most famous pieces in Bogotá's Gold Museum. The real treasure of El Dorado, it seems, is the knowledge it gives us about the people who made it.`,
    gloss: [
      { word: "legend", means: "an old story that many people believe, which may or may not be true" },
      { word: "lagoon", means: "a small lake" },
      { word: "offerings", means: "gifts given to a god or spirit" },
      { word: "drain", means: "take all the water out of something" },
    ],
    questions: [
      { q: "What did 'El Dorado' originally refer to?", options: ["A leader covered in gold.", "A whole city built from gold.", "A lake full of treasure."], answer: 0, why: "\"It first referred to a person, not a place.\"" },
      { q: "What happened when people tried to drain the lagoon?", options: ["They found enormous treasures at the bottom of the lake.", "They made a large cut in the lake but found little gold.", "The lake disappeared completely after they tried to drain it."], answer: 1, why: "\"One attempt cut a huge gap in the side of the lake… but very little gold was found.\"" },
      { q: "What is the writer's final point?", options: ["The gold of El Dorado is still hidden.", "The Spanish were right: the lake was full of treasure after all.", "Its real value is what it teaches us about the Muisca."], answer: 2, why: "\"The real treasure… is the knowledge it gives us about the people who made it.\"" },
    ],
  },
  {
    id: "b1-streak", band: "B1", universe: "screens", kind: "story",
    title: "Day 412", blurb: "Felipe has played the same game every day for over a year. Then his phone breaks.",
    text: `Felipe had a streak of 411 days. Every single day for more than a year, he had logged into the same mobile game to collect his daily reward. He played on birthdays, on holidays and once, at two in the morning, with a fever. His friends joked that the game was his real girlfriend.

On day 412, his phone fell out of his pocket on the bus and the screen broke completely. It wouldn't even turn on. His first thought wasn't about his photos or his messages. It was: "My streak!"

He tried everything. He borrowed his sister's phone, but he couldn't remember his password. He went to an internet café, but the game only worked on phones. At midnight, he watched the clock change and knew it was over. Four hundred and eleven days, gone.

He expected to feel terrible. And for one evening, he did. But the next morning, something strange happened. He woke up and didn't have to do anything. He read a comic on the bus instead of tapping his screen. He went to football practice without worrying about getting home in time.

When he got a new phone two weeks later, the game was still there, waiting for him. "Start a new streak today!" it said, with bright colours and a cheerful sound. Felipe looked at it for a long time. Then he pressed and held the icon until it started shaking, and deleted it. He still plays games, but now he plays when he wants to, not when an app tells him to.`,
    gloss: [
      { word: "streak", means: "a period of doing something without stopping, day after day" },
      { word: "logged into", means: "entered an app or website with your account" },
      { word: "fever", means: "a high body temperature when you are ill" },
      { word: "cheerful", means: "happy and positive" },
    ],
    questions: [
      { q: "What did Felipe think about first when his phone broke?", options: ["Losing his game streak.", "His photos and messages.", "The cost of a new phone."], answer: 0, why: "\"His first thought… was: 'My streak!'\"" },
      { q: "How did Felipe feel the morning after he lost the streak?", options: ["Angry with his sister.", "Free from an obligation.", "Worried about football practice."], answer: 1, why: "\"He woke up and didn't have to do anything\" and enjoyed his time." },
      { q: "Why did Felipe delete the game?", options: ["The game stopped working properly after he bought a new phone.", "His friends laughed at him.", "He wanted to play because he chose to, not because the app pushed him."], answer: 2, why: "\"Now he plays when he wants to, not when an app tells him to.\"" },
    ],
  },
  {
    id: "b1-english-spelling", band: "B1", universe: "words", kind: "article",
    title: "Why is English spelling so strange?", blurb: "Through, though, thought, tough: there's a reason.",
    text: `If you're learning English, you have probably asked this question: why don't English words sound the way they're written? In Spanish, if you can read a word, you can usually say it. In English, "through", "though", "thought" and "tough" all look similar but sound completely different. There's a reason for this chaos, and it's a long story.

First, English has borrowed words from many languages: from Latin, French, Greek, Norse and many more. Often, English kept the original spelling of these words, even when the pronunciation changed. That's why "ballet" comes from French and doesn't sound like "pallet".

Second, the way people pronounced English changed dramatically between about 1400 and 1700. During this period, called the Great Vowel Shift, the long vowel sounds moved. For example, "bite" was once pronounced more like "beet". But spelling had already started to become fixed, partly because of the printing press, which arrived in England in the 1470s. So the spelling stayed the same while the sounds kept moving.

Third, some early printers and scholars added letters to make words look more like Latin. The "b" in "debt" was added because the Latin word was "debitum", even though English speakers never pronounced it.

Is there anything good about this mess? Actually, yes. English spelling often shows where a word comes from and how it's connected to other words. "Sign" and "signature" share a "g" because they're related. Knowing this won't make English spelling easy, but it might make it a little less mysterious.`,
    gloss: [
      { word: "chaos", means: "a situation with no order" },
      { word: "borrowed", means: "(of a language) took a word from another language" },
      { word: "printing press", means: "a machine for printing books, invented in the 1400s" },
      { word: "scholars", means: "people who study a subject in great detail" },
    ],
    questions: [
      { q: "What was the Great Vowel Shift?", options: ["A period when the pronunciation of the long vowels changed.", "A decision to make English spelling more like Spanish.", "A time when English borrowed thousands of French words."], answer: 0, why: "\"During this period… the long vowel sounds moved.\"" },
      { q: "Why does 'debt' have a 'b'?", options: ["People in the Middle Ages once pronounced the 'b' clearly.", "Scholars added it to look like the Latin word.", "It came from a French spelling."], answer: 1, why: "\"The 'b' in 'debt' was added because the Latin word was 'debitum'.\"" },
      { q: "What positive point does the writer make about English spelling?", options: ["It is easier to learn than Spanish spelling is.", "It will soon become simpler.", "It can show a word's history and connections."], answer: 2, why: "\"English spelling often shows where a word comes from and how it's connected to other words.\"" },
    ],
  },
  {
    id: "b1-dark-sky", band: "B1", universe: "science", kind: "story",
    title: "A night in the desert", blurb: "In Namibia, Luisa sees the Milky Way for the first time.",
    text: `I live in London, and I'd never really seen the stars. On a good night, I could see the Moon and maybe five or six bright points. So when my aunt invited me on a trip to the NamibRand Nature Reserve in Namibia, I didn't expect much. A desert? I imagined endless sand and nothing else, like in films.

The NamibRand isn't like that at all. There are huge red sand dunes, but also golden grasslands, rocky mountains and strange round patches with no grass, called "fairy circles", that make it look like another planet. During the day, it was incredibly hot. We walked in the morning and hid in the shade in the afternoon, drinking cold juice.

But the real reason people go there is the night. Because there are almost no towns nearby and very little light, the sky is incredibly dark. In fact, it is one of the darkest places on Earth. At about eight o'clock, a guide called Johannes showed us the sky through a telescope. He pointed out Saturn, and I could actually see its rings. I couldn't believe something so far away could look so clear.

Then Johannes turned off all the lights and told us to wait. Slowly, my eyes got used to the darkness, and the sky filled with thousands of stars. Across the middle there was a pale, cloudy band. "That's the Milky Way," he said. "Our own galaxy. You're looking at it from the inside."

I lay on the ground for an hour without speaking. Back in London, the sky looks empty again. But now I know what's hiding behind the lights.`,
    gloss: [
      { word: "dunes", means: "hills of sand made by the wind" },
      { word: "telescope", means: "an instrument that makes faraway things look bigger and closer" },
      { word: "pale", means: "light in colour, not bright" },
      { word: "galaxy", means: "a huge group of stars; ours is the Milky Way" },
    ],
    questions: [
      { q: "What did Luisa expect the desert to look like?", options: ["Endless sand and nothing else.", "Grasslands and red dunes.", "A busy town with hotels."], answer: 0, why: "\"I imagined endless sand and nothing else, like in films.\"" },
      { q: "Why is the night sky so dark in the NamibRand?", options: ["It's very high up in the mountains.", "There are few towns and little light nearby.", "The guide turns off all the lights in the desert every night."], answer: 1, why: "\"Because there are almost no towns nearby and very little light.\"" },
      { q: "What does Luisa mean by 'what's hiding behind the lights'?", options: ["Planets are only visible through large telescopes, not with your eyes.", "London has a secret observatory.", "City lights hide the stars that are really there."], answer: 2, why: "The stars are still there; the city's lights stop her seeing them." },
    ],
  },
  {
    id: "b1-game-music", band: "B1", universe: "screens", kind: "article",
    title: "Music that listens to you", blurb: "How video game soundtracks change while you play.",
    text: `When you watch a film, the music is always the same. Every time a character opens a door, the same notes play at exactly the same moment. But video games have a problem: the composer doesn't know what the player will do or how long they will take. You might cross a bridge in ten seconds or stand there for ten minutes. So how do you write music for that?

The answer is something called adaptive music. Instead of writing one long piece, game composers create music in layers and small sections. A quiet layer might play while you explore. When an enemy appears, the game adds drums and a faster rhythm. If you're losing health, the music might become more tense. When the danger is over, the extra layers slowly fade away. The player usually doesn't notice these changes consciously, but they feel them.

Getting this right is surprisingly difficult. The music has to change smoothly, without strange jumps, and it must not become boring when the same section repeats many times. Some composers write hundreds of short pieces for one game. Others work with programmers to create rules that decide which piece should play next.

Many players say that game music is a big reason why they remember certain games for years. Today, orchestras around the world, including in Latin America, give concerts of video game music, and some music schools offer courses in composing for games. For young musicians who love both music and technology, it's a career that didn't exist a few decades ago.`,
    gloss: [
      { word: "composer", means: "a person who writes music" },
      { word: "layers", means: "different parts placed on top of each other" },
      { word: "tense", means: "making you feel nervous or worried" },
      { word: "consciously", means: "with full awareness; knowing that you are doing or feeling something" },
    ],
    questions: [
      { q: "What problem do game composers have that film composers don't?", options: ["They can't know what the player will do or when.", "Their music has to be much shorter than music for films.", "They have to use orchestras."], answer: 0, why: "\"The composer doesn't know what the player will do or how long they will take.\"" },
      { q: "How does adaptive music work?", options: ["The player chooses the songs.", "Layers and sections change with what happens in the game.", "One long piece repeats from the beginning until the level ends."], answer: 1, why: "\"When an enemy appears, the game adds drums and a faster rhythm.\"" },
      { q: "What does the last paragraph suggest about game music?", options: ["It is still much less popular than music written for films.", "Only programmers can compose it.", "It has become a respected art form and a new career."], answer: 2, why: "Orchestras give concerts of it and schools offer courses: \"a career that didn't exist a few decades ago.\"" },
    ],
  },
];
