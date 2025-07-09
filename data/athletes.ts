export interface Athlete {
  id: string
  name: string
  sport: string
  image: string
  shortBio: string
  story: string
  quote?: string
  diagnosisAge?: string
  location?: string
  achievements?: string[]
  diabetesManagement?: string
  advice?: string
  featured?: boolean
  socialLinks?: {
    [key: string]: string
  }
}

export const athletes: Athlete[] = [
  {
    id: "gary-hall-jr",
    name: "Gary Hall Jr.",
    sport: "Swimming",
    image: "/athletes/gary-hall-jr.jpg",
    shortBio:
      "Olympic gold medalist swimmer diagnosed with Type 1 diabetes in 1999, who went on to win multiple Olympic medals after his diagnosis.",
    story:
      "Gary Hall Jr. is one of the most decorated Olympic swimmers in history, with 10 Olympic medals to his name. In 1999, at the height of his swimming career, Hall was diagnosed with Type 1 diabetes at age 25. Doctors initially told him his competitive swimming career was over.\n\nDespite this devastating news, Hall refused to give up. He worked closely with his healthcare team to develop a management plan that would allow him to continue competing at the highest level. His determination paid off when he returned to the Olympics in 2000, winning gold in the 50-meter freestyle.\n\nHall continued to defy expectations, returning to the Olympics again in 2004 and successfully defending his title in the 50-meter freestyle, becoming the first athlete with Type 1 diabetes to medal in the Olympics and an inductee in the U.S. Olympic & Paralympic Hall of Fame.",
    quote:
      "I have type 1 diabetes, and I've been able to compete at the world's highest level. If I can do that, then it's OK for an eight-year-old soccer player or an athlete at a high-school state meet.",
    diagnosisAge: "25",
    location: "United States",
    achievements: [
      "10 Olympic medals (5 gold) across 1996, 2000, and 2004",
      "First athlete with Type 1 diabetes to medal in the Olympics",
      "U.S. Olympic & Paralympic Hall of Fame inductee",
    ],
    diabetesManagement:
      "Hall's approach to diabetes management as an elite athlete involved meticulous monitoring of his blood glucose levels before, during, and after training sessions. He worked with specialists to develop a nutrition plan that supported his intense training regimen while maintaining stable blood sugar levels.\n\nDuring competitions, Hall would check his blood sugar levels as close as 10 minutes before a race. He kept glucose tablets and insulin readily available at poolside and developed a keen awareness of how his body responded to exercise.",
    advice:
      "Don't let anyone tell you what you can't do because of diabetes. Work with your healthcare team to develop a management plan that supports your athletic goals. Listen to your body and learn how different types of training affect your blood sugar levels.",
    featured: true,
    socialLinks: {
      instagram: "https://instagram.com/garyhall.jr",
      twitter: "https://twitter.com/garyhalljr",
    },
  },
  {
    id: "mark-andrews",
    name: "Mark Andrews",
    sport: "American Football",
    image: "/athletes/mark-andrews.jpg",
    shortBio:
      "Star tight end for the Baltimore Ravens who was diagnosed with Type 1 diabetes at age 9 and has become a role model for young athletes with T1D.",
    story:
      "Mark Andrews, star tight end for the Baltimore Ravens, was diagnosed with Type 1 diabetes at age 9. He manages his blood sugar rigorously—checking levels dozens of times during games—and has become a role model for young athletes with T1D.\n\nDespite his early diagnosis, Andrews never let diabetes define his athletic career. He excelled in college football and was drafted by the Baltimore Ravens, where he has established himself as one of the premier tight ends in the NFL.\n\nAndrews has been open about his condition, showing that with proper management, Type 1 diabetes doesn't have to limit athletic achievement. He holds the Baltimore Ravens franchise record for touchdowns by a tight end and has been selected to multiple Pro Bowls, demonstrating that diabetes is not a barrier to elite athletic performance.",
    quote:
      "I adapted a mindset that this disease is a part of who I am, but it's not going to define me and it's never going to stop me in achieving my dreams. Type 1 diabetes is incredibly difficult, but I refuse to let it affect my job or my life in any way.",
    diagnosisAge: "9",
    location: "United States",
    achievements: [
      "3× NFL Pro Bowl selection (2019, 2021, 2022)",
      "First-team All-Pro (2021)",
      "Holds Baltimore Ravens franchise record for TDs by a tight end",
    ],
    diabetesManagement:
      "Andrews wears a continuous glucose monitor during games, with a team staff member monitoring his levels from the sideline. He has a specific protocol for game days, adjusting his insulin and carbohydrate intake based on the timing of the game and expected physical exertion.\n\nDuring games, Andrews keeps glucose tablets and sports drinks nearby for quick access if his blood sugar drops. He has worked with the team's nutritionists to develop meal plans that help maintain stable blood sugar levels before, during, and after games and practices.",
    advice:
      "Communication with coaches and teammates is essential – make sure they understand your condition and know how to recognize signs of low blood sugar. Develop a routine for game days and stick to it, but always be prepared to adapt if your blood sugar isn't cooperating.",
    featured: true,
    socialLinks: {
      instagram: "https://instagram.com/mandrews",
      twitter: "https://twitter.com/Mandrews_81",
    },
  },
  {
    id: "noah-gray",
    name: "Noah Gray",
    sport: "American Football",
    image: "/athletes/noah-gray.jpg",
    shortBio:
      "NFL tight end for the Kansas City Chiefs who was diagnosed with Type 1 diabetes during his freshman year of college and has won two Super Bowl championships.",
    story:
      "Noah Gray was diagnosed with Type 1 diabetes at 18 during his freshman year of college. Despite the late diagnosis, he continued pursuing football and reached the NFL. With careful use of a continuous glucose monitor under his pads during games, Gray has thrived as a pro athlete.\n\nGray's determination and careful management of his condition allowed him to continue his football career at Duke University and eventually be drafted by the Kansas City Chiefs. His success story includes winning two Super Bowl championships (Super Bowl LVII in 2023 and Super Bowl LVIII in 2024).\n\nAs an NFL tight end since 2021 with over 30 career receptions, Gray demonstrates that even a diagnosis in early adulthood doesn't have to derail athletic ambitions. His achievements at the highest level of professional football serve as inspiration for others managing Type 1 diabetes.",
    quote:
      "It's helped me mature... When I got Type 1, I realized I feel so much better when I'm eating cleaner foods.",
    diagnosisAge: "18",
    location: "United States",
    achievements: [
      "2× Super Bowl champion with the Kansas City Chiefs (Super Bowl LVII in 2023, Super Bowl LVIII in 2024)",
      "NFL tight end since 2021; over 30 career receptions",
    ],
    diabetesManagement:
      "Gray uses a continuous glucose monitor during games, carefully placed under his pads to avoid damage during the physical contact of football. He works closely with the Chiefs' medical staff to ensure his blood sugar levels remain stable during games and practices.\n\nHis approach to diabetes management includes a focus on nutrition, which he credits with helping him feel better overall. Gray's experience shows how adapting to a diabetes diagnosis can actually lead to improved health habits that benefit athletic performance.",
    advice:
      "Focus on the positive changes that diabetes management can bring to your life, like better nutrition and increased body awareness. Don't see diabetes as a limitation but as an opportunity to develop discipline that can benefit your athletic performance.",
    featured: false,
    socialLinks: {},
  },
  {
    id: "jay-cutler",
    name: "Jay Cutler",
    sport: "American Football",
    image: "/athletes/jay-cutler.jpg",
    shortBio:
      "NFL quarterback who played 12 seasons, primarily with the Chicago Bears, after being diagnosed with Type 1 diabetes at age 25.",
    story:
      "Jay Cutler was already an NFL quarterback when he was diagnosed with Type 1 at age 25. He managed his condition while continuing to play at a high level in the NFL. Cutler became an advocate off the field as well, partnering with diabetes charities – such as donating per touchdown to send kids with diabetes to camp – and proving that a Type 1 diagnosis didn't end his pro football ambitions.\n\nCutler played 12 seasons in the NFL (2006–2017), including 8 seasons as the Chicago Bears starting quarterback. Throughout his career, he accumulated over 35,000 passing yards and set Chicago Bears franchise records for single-season completions and game-winning drives.\n\nHis success after diagnosis demonstrated that even in a physically demanding sport like football, Type 1 diabetes can be effectively managed while competing at the professional level.",
    quote: "Diabetes is all about insulin levels and sugar levels and what you put in your body.",
    diagnosisAge: "25",
    location: "United States",
    achievements: [
      "12-season NFL career (2006–2017), including 8 seasons as Chicago Bears starting QB",
      "35,000+ career passing yards in the NFL",
      "Chicago Bears franchise records for single-season completions and game-winning drives",
    ],
    diabetesManagement:
      "Cutler had to quickly adapt to managing diabetes while maintaining his NFL career. He worked with team medical staff to develop protocols for monitoring his blood sugar during games and practices.\n\nHis approach emphasized the importance of nutrition and understanding how different foods affect blood sugar levels. Cutler's experience highlights how even a mid-career diagnosis doesn't have to end an athlete's professional trajectory.",
    advice:
      "Be methodical about understanding how your body responds to different foods and activities. Diabetes management is a science, and the more you learn about your own body's patterns, the better you can perform athletically.",
    featured: false,
    socialLinks: {
      instagram: "https://instagram.com/ifjayhadinstagram",
    },
  },
  {
    id: "chris-dudley",
    name: "Chris Dudley",
    sport: "Basketball",
    image: "/athletes/chris-dudley.jpg",
    shortBio:
      "NBA center who played 16 seasons despite being diagnosed with Type 1 diabetes as a teenager, later founding a basketball camp for children with diabetes.",
    story:
      "Chris Dudley was diagnosed with Type 1 at age 16, but went on to a 16-year NBA career as a tenacious center. He became one of the first players with T1D in NBA history. Throughout his career and afterward, Dudley devoted himself to diabetes advocacy – even establishing a special basketball camp for kids with diabetes to inspire them.\n\nDudley played 16 seasons in the NBA (1987–2003) despite his T1D diagnosis as a teen. His journey showed that intensive daily management (including insulin shots during games) could coexist with elite sports.\n\nIn recognition of his community service, Dudley received the J. Walter Kennedy Citizenship Award in 1996. His basketball camp for children with diabetes has provided inspiration and practical guidance for young athletes managing the condition.",
    quote:
      "I wanted to show kids with diabetes that if I could play in the NBA for 16 years, they can achieve their dreams too.",
    diagnosisAge: "16",
    location: "United States",
    achievements: [
      "Played 16 seasons in the NBA (1987–2003) despite T1D diagnosis as a teen",
      "J. Walter Kennedy Citizenship Award (1996) for community service",
      "Founder of a basketball camp for children with diabetes",
    ],
    diabetesManagement:
      "Dudley managed his diabetes during his NBA career by taking insulin injections, sometimes even during games. He developed routines for monitoring his blood sugar levels before, during, and after games and practices.\n\nHis approach to diabetes management in a physically demanding sport like basketball demonstrated that with proper care and attention, Type 1 diabetes doesn't have to limit athletic achievement at the highest levels.",
    advice:
      "Find ways to give back to the diabetes community. Sharing your experiences and successes can inspire others facing the same challenges, creating a positive cycle of support and encouragement.",
    featured: false,
    socialLinks: {
      instagram: "https://instagram.com/therealchrisdudley",
    },
  },
  {
    id: "lauren-cox",
    name: "Lauren Cox",
    sport: "Basketball",
    image: "/athletes/lauren-cox.jpg",
    shortBio:
      "NCAA Women's Basketball Champion and WNBA forward who was diagnosed with Type 1 diabetes at age 17, becoming the first known WNBA player with the condition.",
    story:
      "Lauren Cox was in high school when she learned she had Type 1 diabetes. Initially she felt embarrassed about her condition, but with support from her college coach and teammates she gained confidence. She starred at Baylor University – even leading them to an NCAA championship – all while managing her blood sugar on and off the court.\n\nCox continued to the WNBA as the first player competing at that level with T1D, proving that the condition could be managed even in professional basketball. She was selected as the No. 3 overall pick in the 2020 WNBA Draft by the Los Angeles Sparks.\n\nHer journey from diagnosis in high school to NCAA champion and professional basketball player demonstrates that Type 1 diabetes doesn't have to prevent athletes from reaching the highest levels of their sport.",
    quote:
      "No matter the age you're diagnosed, you can still accomplish anything – I'm living proof on and off the court.",
    diagnosisAge: "17",
    location: "United States",
    achievements: [
      "NCAA Women's Basketball Champion (2019) with Baylor University",
      "No. 3 overall pick in 2020 WNBA Draft (Los Angeles Sparks)",
      "First known WNBA player with Type 1 diabetes",
    ],
    diabetesManagement:
      "Cox manages her diabetes during games and practices with a combination of continuous glucose monitoring and careful attention to nutrition. She works closely with team medical staff to ensure her blood sugar remains stable during the intense physical activity of basketball.\n\nInitially embarrassed about her condition, Cox learned to embrace it and use her platform to raise awareness about Type 1 diabetes. Her experience shows how the support of coaches and teammates can be crucial in helping athletes with diabetes succeed.",
    advice:
      "Don't be embarrassed about your diabetes – it's part of who you are but doesn't define what you can achieve. Surround yourself with supportive people who understand your condition and will help you manage it while pursuing your athletic goals.",
    featured: false,
    socialLinks: {
      instagram: "https://instagram.com/lauren_cox15",
    },
  },
  {
    id: "adam-morrison",
    name: "Adam Morrison",
    sport: "Basketball",
    image: "/athletes/adam-morrison.jpg",
    shortBio:
      "NCAA National Co-Player of the Year and NBA champion who was diagnosed with Type 1 diabetes at age 14 and famously gave himself insulin injections during halftime.",
    story:
      "Adam Morrison was diagnosed with Type 1 diabetes at age 14, just before his rise as a basketball star. He famously had to give himself insulin injections during halftime of high school and college games. Morrison went on to become a collegiate scoring leader and the third pick in the NBA Draft.\n\nHis college career at Gonzaga University was remarkable, earning him NCAA National Co-Player of the Year honors in 2006. Morrison was selected as the No. 3 overall pick in the 2006 NBA Draft and went on to win two NBA Championships (2009, 2010) with the Los Angeles Lakers.\n\nWhile his pro career was shorter than hoped, he earned two NBA championship rings with the Lakers and proved that a kid testing blood sugar on the sidelines could still reach basketball's biggest stages.",
    quote:
      "I wasn't going to let diabetes stop me. I might have to take a shot (of insulin) at halftime, but I could still play ball.",
    diagnosisAge: "14",
    location: "United States",
    achievements: [
      "NCAA National Co-Player of the Year (2006) at Gonzaga University",
      "No. 3 overall pick in 2006 NBA Draft",
      "2× NBA Champion (2009, 2010) with Los Angeles Lakers",
    ],
    diabetesManagement:
      "Morrison managed his diabetes during his basketball career by giving himself insulin injections, sometimes during halftime of games. He developed routines for monitoring his blood sugar levels and ensuring he had the necessary supplies available during games and practices.\n\nHis visible management of diabetes during games helped raise awareness about Type 1 diabetes and showed that the condition doesn't have to prevent athletes from competing at elite levels.",
    advice:
      "Be prepared to manage your diabetes wherever you are, even if that means taking insulin injections during halftime of a game. Don't let the condition stop you from pursuing your athletic dreams.",
    featured: false,
    socialLinks: {},
  },
  {
    id: "nacho-fernandez",
    name: "Nacho Fernández",
    sport: "Football (Soccer)",
    image: "/athletes/nacho-fernandez.jpg",
    shortBio:
      "Real Madrid defender who was diagnosed with Type 1 diabetes at age 12 and went on to become one of the most decorated players in the club's history.",
    story:
      'Nacho (José Ignacio Fernández Iglesias) was diagnosed with Type 1 diabetes at age 12. At first, a doctor told him his "footballing days were over," which devastated him. Days later, a specialist insisted the opposite – that exercise was vital – and Nacho resumed playing.\n\nHe went on to spend over two decades at Real Madrid, winning numerous Champions League and domestic titles. Nacho has been open about his diabetes and is living proof that even at the highest level of world football, T1D is no barrier.\n\nHis career achievements include multiple UEFA Champions League titles and representing Spain in international competitions like the 2018 FIFA World Cup and UEFA Euro 2024. With 26 trophies, he is the second-most decorated player in Real Madrid history.',
    quote: "I have no limitations... diabetes doesn't prevent me from doing anything.",
    diagnosisAge: "12",
    location: "Spain",
    achievements: [
      "Career-long player at Real Madrid, winning 25+ trophies including multiple UEFA Champions League titles",
      "Represented Spain in the 2018 FIFA World Cup and UEFA Euro 2024",
      "Second-most decorated player in Real Madrid history (26 trophies)",
    ],
    diabetesManagement:
      "Nacho manages his diabetes while playing professional soccer at the highest level through careful monitoring of his blood sugar levels and adjusting his insulin dosage based on training and match schedules.\n\nHis approach emphasizes the importance of exercise in managing Type 1 diabetes, directly contradicting the initial advice he received that his football career was over. Nacho's success demonstrates that with proper management, diabetes doesn't have to limit athletic achievement.",
    advice:
      "Don't accept limitations placed on you by others who don't understand diabetes. Find healthcare providers who support your athletic ambitions and will work with you to develop management strategies that allow you to compete at your highest level.",
    featured: true,
    socialLinks: {
      instagram: "https://instagram.com/nachofdez90",
    },
  },
  {
    id: "jordan-morris",
    name: "Jordan Morris",
    sport: "Football (Soccer)",
    image: "/athletes/jordan-morris.jpg",
    shortBio:
      "MLS Cup champion and US National Team player who was diagnosed with Type 1 diabetes at age 9 and actively mentors young players with diabetes.",
    story:
      "Jordan Morris was diagnosed with Type 1 diabetes at age 9. Growing up, he sometimes worried his T1D might hinder a pro soccer career. Instead, Morris excelled – starring for Stanford University, then winning two MLS Cup titles with Seattle. He also plays for the U.S. national team, carrying a glucose monitor and even a service dog during training camps.\n\nMorris actively mentors young players with diabetes, showing that with preparation and support, T1D shouldn't stop anyone from reaching the highest levels. His achievements include being named the 2016 MLS Rookie of the Year and representing the United States in over 50 international matches, scoring more than 10 goals for his country.\n\nHis success in professional soccer demonstrates that with proper management, Type 1 diabetes doesn't have to limit athletic achievement.",
    quote: "To all the young diabetics out there: keep working hard and know that anything is possible! Dream big!",
    diagnosisAge: "9",
    location: "United States",
    achievements: [
      "MLS Cup champion (2016, 2019) with Seattle Sounders",
      "Over 50 caps and 10+ goals for the United States national team",
      "2016 MLS Rookie of the Year",
    ],
    diabetesManagement:
      "Morris wears a continuous glucose monitor during matches and has a specialized routine for game days. He typically adjusts his insulin dosing before matches and carefully plans his pre-game meal to ensure stable blood sugar during play.\n\nDuring games, Morris monitors his levels during breaks in play and at halftime, with team medical staff also keeping track. He keeps fast-acting glucose sources on the sideline for quick access if needed.",
    advice:
      "Find a healthcare team that understands the demands of your sport and can help you develop a management plan that supports your athletic goals. Be proactive in educating coaches and teammates about your condition – their understanding and support can be invaluable.",
    featured: false,
    socialLinks: {
      instagram: "https://instagram.com/jmo.morris13",
      twitter: "https://twitter.com/JmoSmooth13",
    },
  },
  {
    id: "wasim-akram",
    name: "Wasim Akram",
    sport: "Cricket",
    image: "/athletes/wasim-akram.jpg",
    shortBio:
      "Legendary Pakistani fast bowler who was diagnosed with Type 1 diabetes at age 29 and continued to take over 250 wickets after his diagnosis.",
    story:
      'Wasim Akram was at the peak of his cricket career when he was diagnosed with Type 1 diabetes in 1997 at age 29. The news came as a shock – Akram initially thought "no more cricket" – but he adapted with disciplined diet and insulin therapy. He continued to play for several years, taking over 250 wickets after diagnosis and cementing his legacy with over 500 ODI wickets.\n\nAkram remains active in raising diabetes awareness across South Asia. His achievements include taking over 900 international wickets, making him one of cricket\'s greatest fast bowlers, and winning the 1992 Cricket World Cup with Pakistan.\n\nHis induction into the ICC Cricket Hall of Fame recognizes his extraordinary career, much of which was accomplished while managing Type 1 diabetes.',
    quote:
      "I thought my life was gone — no more cricket. But my wife gave me mental strength... with mind discipline you can do anything.",
    diagnosisAge: "29",
    location: "Pakistan",
    achievements: [
      "Over 900 international wickets – regarded as one of cricket's greatest fast bowlers",
      "1992 Cricket World Cup champion with Pakistan",
      "ICC Cricket Hall of Fame inductee",
    ],
    diabetesManagement:
      "Akram managed his diabetes during his cricket career through a disciplined approach to diet and insulin therapy. He worked closely with medical professionals to develop a management plan that allowed him to continue competing at the highest level.\n\nHis experience demonstrates that even a mid-career diagnosis doesn't have to end an athlete's career. With proper management and mental strength, it's possible to continue achieving at elite levels even after being diagnosed with Type 1 diabetes.",
    advice:
      "Mental strength is just as important as physical management when dealing with diabetes. With discipline and determination, you can overcome the challenges of diabetes and continue to excel in your chosen sport.",
    featured: false,
    socialLinks: {
      instagram: "https://instagram.com/wasimakramliveofficial",
      twitter: "https://twitter.com/wasimakramlive",
    },
  },
  {
    id: "charlotte-drury",
    name: "Charlotte Drury",
    sport: "Gymnastics (Trampoline)",
    image: "/athletes/charlotte-drury.jpg",
    shortBio:
      "Trampoline gymnast who was diagnosed with Type 1 diabetes just weeks before the Olympic trials and still secured a spot as an Olympic alternate.",
    story:
      "Charlotte Drury was unexpectedly diagnosed with Type 1 diabetes in 2020, just weeks before the Olympic trials. Despite the late diagnosis and the challenges it brought, Drury managed to compete in the trials and secure a spot as an Olympic alternate – all while learning to manage her blood sugar on the fly.\n\nA former World Cup champion, she balanced training with insulin shots and constant monitoring. Drury now uses her platform to show that even sudden onset of T1D in adulthood cannot erase years of hard-earned athletic achievement.\n\nHer accomplishments include being the first American woman to win a Trampoline World Cup gold medal (Minsk 2014) and becoming the USA Gymnastics national champion in 2014.",
    quote:
      "This felt insurmountable and terrifying... there was just no way I could figure out how to manage a life-changing diabetes diagnosis and get into Olympic shape... But... I started to figure out how to manage it and decided to give everything I had... I became someone who carries a backpack full of juice boxes everywhere I go.",
    diagnosisAge: "24",
    location: "United States",
    achievements: [
      "First American woman to win a Trampoline World Cup gold medal (Minsk 2014)",
      "USA Gymnastics national champion (2014)",
      "Tokyo 2020 Olympic Team alternate",
    ],
    diabetesManagement:
      "Drury had to quickly learn to manage her diabetes while preparing for the Olympic trials, a particularly challenging situation given the precise physical demands of trampoline gymnastics. She adapted by carrying glucose sources with her at all times and learning to monitor her blood sugar levels during training.\n\nHer experience demonstrates the resilience required to handle a sudden diagnosis while maintaining elite athletic performance. Drury's success in qualifying as an Olympic alternate despite her recent diagnosis is a testament to her determination and adaptability.",
    advice:
      "Even when a diagnosis feels insurmountable, take it one step at a time. Focus on figuring out what works for your body and don't be afraid to adapt your approach as you learn more about managing your diabetes.",
    featured: false,
    socialLinks: {
      instagram: "https://instagram.com/charlottedrury",
    },
  },
  {
    id: "kristina-tomic",
    name: "Kristina Tomić",
    sport: "Taekwondo",
    image: "/athletes/kristina-tomic.jpg",
    shortBio:
      "World Taekwondo Championships bronze medalist and Olympian who was diagnosed with Type 1 diabetes in 2019 and qualified for the Tokyo Olympics shortly after.",
    story:
      "Kristina Tomić was diagnosed with Type 1 diabetes in 2019, just as her elite taekwondo career was rising. She didn't let it slow her down – the Croatian fighter won a world championship bronze medal and qualified for the Tokyo Olympics shortly after her diagnosis.\n\nTomić juggles intense training and weight management with blood sugar control, often speaking about the challenges of keeping everything in balance. She is involved in sports-and-diabetes initiatives to inspire others in managing T1D under pressure.\n\nHer achievements include winning a bronze medal at the 2017 World Taekwondo Championships, representing Croatia at the Tokyo 2020 Olympics, and winning a gold medal at the 2018 European Championships.",
    quote:
      "Anyone who knows about diabetes... knows how challenging it is to keep blood glucose levels in the target range at all times... Everything has to be kept in balance: diet, weight, blood sugars and effort.",
    diagnosisAge: "24",
    location: "Croatia",
    achievements: [
      "World Taekwondo Championships bronze medalist (2017)",
      "Olympian – represented Croatia at Tokyo 2020",
      "European Championships gold medalist (2018)",
    ],
    diabetesManagement:
      "Tomić manages her diabetes while competing in taekwondo, a sport that requires precise weight management and intense physical exertion. She balances the demands of maintaining a specific weight class with the need to keep her blood sugar levels stable.\n\nHer approach emphasizes the importance of finding balance in all aspects of diabetes management – diet, weight, blood sugar levels, and physical effort. Tomić's success demonstrates that even in a sport with specific weight requirements, Type 1 diabetes can be effectively managed.",
    advice:
      "Recognize that diabetes management is about finding balance in all aspects of your life. Be patient with yourself as you learn to juggle the demands of your sport with the requirements of diabetes management.",
    featured: false,
    socialLinks: {
      instagram: "https://instagram.com/kika.tomic",
    },
  },
  {
    id: "max-domi",
    name: "Max Domi",
    sport: "Ice Hockey",
    image: "/athletes/max-domi.jpg",
    shortBio:
      "NHL center who was diagnosed with Type 1 diabetes at age 12 and went on to have a successful professional hockey career while advocating for diabetes awareness.",
    story:
      "Max Domi, diagnosed with Type 1 at age 12, entered the National Hockey League determined to prove that diabetes wouldn't hold him back. He even asked his doctor upon diagnosis, \"Can I still play hockey?\" The answer was yes – and Domi went on to have a successful NHL career, including a 72-point season in 2018–19.\n\nHe carefully manages his glucose (using an insulin pump and continuous monitor) around games, and he's shared his experiences in a book and through a foundation to inspire fellow diabetics. Domi was selected as an NHL first-round draft pick in 2013 and has played 9+ seasons in the NHL.\n\nHis advocacy work includes authoring the memoir *No Days Off: My Life with Type 1 Diabetes* and founding The Max Domi Fund for Type 1 Diabetes in Canada.",
    quote:
      "I never gave up on my dream and I want all kids living with T1D to know they should not let diabetes stop them from making their dreams come true.",
    diagnosisAge: "12",
    location: "Canada",
    achievements: [
      "NHL first-round draft pick (2013) and 9+ seasons in the NHL",
      "Author of memoir *No Days Off: My Life with Type 1 Diabetes*",
      "Founder of The Max Domi Fund for Type 1 Diabetes in Canada",
    ],
    diabetesManagement:
      "Domi manages his diabetes during his NHL career using an insulin pump and continuous glucose monitor. He carefully plans his nutrition and insulin dosing around games and practices to maintain optimal blood sugar levels.\n\nHis approach to diabetes management in a physically demanding sport like hockey demonstrates that with proper care and technology, Type 1 diabetes doesn't have to limit athletic achievement at the professional level.",
    advice:
      "Don't be afraid to ask questions about what you can and can't do with diabetes – you might be surprised by the answer. With proper management and support, you can pursue your athletic dreams despite having Type 1 diabetes.",
    featured: false,
    socialLinks: {
      instagram: "https://instagram.com/max",
      twitter: "https://twitter.com/maxdomi",
    },
  },
  {
    id: "charlie-kimball",
    name: "Charlie Kimball",
    sport: "Motorsport",
    image: "/athletes/charlie-kimball.jpg",
    shortBio:
      "First licensed IndyCar driver with Type 1 diabetes who won an IndyCar race and finished third in the Indianapolis 500.",
    story:
      "Charlie Kimball was 22 and racing in Europe when he was diagnosed with Type 1 diabetes. After getting his treatment plan in place, Kimball returned to racing and never let T1D slow him down. He became the first driver with diabetes to win an IndyCar Series race and even stood on the podium at the Indy 500.\n\nKimball races with a glucose monitor in the cockpit and insulin ready, and he often speaks about using technology and planning to turn diabetes into just another part of his race strategy. His achievements include becoming the first licensed IndyCar driver with Type 1 diabetes, winning an IndyCar race at Mid-Ohio in 2013, and finishing 3rd in the 2015 Indianapolis 500.\n\nHis success in motorsport demonstrates that with proper management and technology, Type 1 diabetes doesn't have to prevent athletes from competing in even the most demanding sports.",
    quote: "I got back in the race car, and haven't let it slow me down.",
    diagnosisAge: "22",
    location: "United States",
    achievements: [
      "First licensed IndyCar driver with Type 1 diabetes",
      "IndyCar race winner (Mid-Ohio 2013)",
      "3rd-place finish in 2015 Indianapolis 500",
    ],
    diabetesManagement:
      "Kimball manages his diabetes during races by having a glucose monitor in the cockpit and insulin ready if needed. He works closely with his team to ensure his blood sugar levels remain stable during the physically and mentally demanding environment of IndyCar racing.\n\nHis approach to diabetes management in motorsport demonstrates how technology and planning can turn diabetes into just another part of an athlete's strategy. Kimball's success shows that even in high-stress, endurance sports, Type 1 diabetes can be effectively managed.",
    advice:
      "Incorporate diabetes management into your overall strategy for your sport. With proper planning and the right technology, diabetes becomes just another variable to manage, not a limitation on what you can achieve.",
    featured: false,
    socialLinks: {
      twitter: "https://twitter.com/charliekimball",
    },
  },
  {
    id: "kris-freeman",
    name: "Kris Freeman",
    sport: "Cross-Country Skiing",
    image: "/athletes/kris-freeman.jpg",
    shortBio:
      "Four-time Olympian in cross-country skiing who was diagnosed with Type 1 diabetes at age 19 while training with the U.S. Ski Team.",
    story:
      "Kris Freeman was diagnosed with Type 1 at 19 while training with the U.S. Ski Team. Advised by some that the disease's demands were incompatible with endurance skiing, Freeman proved otherwise – he made four U.S. Olympic teams and had multiple top-5 finishes at World Championships.\n\nHe managed his blood sugar with regimented planning (even checking levels mid-race) and blazed a trail for T1D athletes in winter sports. After retiring from international skiing, Freeman remains active in triathlons and works to mentor young diabetics.\n\nHis achievements include competing in four Winter Olympics (2002, 2006, 2010, 2014), becoming a U23 World Champion in 2003 (the first American to qualify in the World Cup top-20 circuit), and winning multiple US national championships.",
    quote: "I encourage [kids with diabetes] to never set limits for themselves because of their disease.",
    diagnosisAge: "19",
    location: "United States",
    achievements: [
      "4× Olympian in cross-country skiing (2002, 2006, 2010, 2014)",
      "U23 World Champion (2003) – first American to qualify in World Cup top-20 circuit",
      'Multiple US national champion; known as "America\'s best cross-country skier" at his peak',
    ],
    diabetesManagement:
      "Freeman manages his diabetes during endurance skiing events through regimented planning and monitoring. He even checks his blood sugar levels during races to ensure they remain stable during the intense physical exertion of cross-country skiing.\n\nHis approach to diabetes management in a sport that many considered incompatible with Type 1 diabetes demonstrates that with proper planning and monitoring, even the most physically demanding endurance sports are possible with diabetes.",
    advice:
      "Don't accept limitations placed on you because of diabetes. With proper planning and monitoring, even endurance sports that some might consider incompatible with diabetes are possible.",
    featured: false,
    socialLinks: {
      instagram: "https://instagram.com/krisfreebird",
    },
  },
  {
    id: "michelle-mcgann",
    name: "Michelle McGann",
    sport: "Golf",
    image: "/athletes/michelle-mcgann.jpg",
    shortBio:
      "LPGA Tour golfer who was diagnosed with Type 1 diabetes at age 13 and went on to win seven LPGA tournaments while advocating for diabetes awareness.",
    story:
      "Michelle McGann was 13 when she was diagnosed with Type 1 diabetes – by then she was already a top junior golfer. She learned to keep her blood sugar stable during long rounds on the golf course and went on to win multiple LPGA tournaments in the 1990s.\n\nMcGann became a prominent advocate in the golf community, often wearing an insulin pump during play and speaking about diabetes awareness. In 2012 she launched a foundation to send children with T1D to diabetes education camps, coming full circle as an inspiration to the next generation.\n\nHer achievements include winning 7 LPGA Tour titles in her professional career and representing the United States in the Solheim Cup in 1994 and 1996.",
    quote:
      "Having diabetes... it was the biggest help for me because I could focus more – it made me more disciplined on and off the course.",
    diagnosisAge: "13",
    location: "United States",
    achievements: [
      "7 LPGA Tour titles in professional career",
      "2× U.S. Solheim Cup team member (1994, 1996)",
      "Founder of the Michelle McGann Fund supporting kids with T1D camps",
    ],
    diabetesManagement:
      "McGann manages her diabetes during golf tournaments by carefully monitoring her blood sugar levels throughout the long rounds. She became known for wearing an insulin pump during play, helping to raise awareness about Type 1 diabetes.\n\nHer approach to diabetes management in golf demonstrates how the condition can actually lead to increased discipline and focus, potentially benefiting athletic performance. McGann's success shows that with proper management, diabetes doesn't have to limit achievement in sports.",
    advice:
      "Look for the positive aspects of managing diabetes – the discipline and focus required can actually benefit your athletic performance. Use your platform as an athlete to raise awareness and inspire others with diabetes.",
    featured: false,
    socialLinks: {
      instagram: "https://instagram.com/themichellemcgann",
    },
  },
  {
    id: "sam-fuld",
    name: "Sam Fuld",
    sport: "Baseball",
    image: "/athletes/sam-fuld.jpg",
    shortBio:
      "MLB outfielder known for acrobatic catches who was diagnosed with Type 1 diabetes at age 10 and later became General Manager of the Philadelphia Phillies.",
    story:
      "Sam Fuld was diagnosed with Type 1 diabetes at age 10. He grew up without many diabetic athlete role models until he discovered that Hall-of-Famer Ron Santo had also played with T1D. Fuld did not let diabetes stop him from pursuing baseball: he played college ball at Stanford, then carved out a successful MLB career, gaining a fan following for his fearless diving catches.\n\nAfter retiring, he transitioned to the front office and became the GM of the Phillies. Fuld also runs annual sports camps for kids with T1D, emphasizing that careful management allows them to chase any dream.\n\nHis achievements include an 8-year MLB career (2007–2015) known for acrobatic, highlight-reel catches, becoming General Manager of the Philadelphia Phillies in 2020, and founding the Sam Fuld T1D Sports Camp for children with diabetes.",
    quote:
      "No matter how many finger pricks or injections it took, I was going to play baseball. Diabetes was just another challenge to overcome.",
    diagnosisAge: "10",
    location: "United States",
    achievements: [
      "8-year MLB career (2007–2015) known for acrobatic, highlight-reel catches",
      "General Manager of the Philadelphia Phillies (hired 2020)",
      "Founder of the Sam Fuld T1D Sports Camp for children with diabetes",
    ],
    diabetesManagement:
      "Fuld manages his diabetes through careful monitoring of his blood sugar levels and adjusting his insulin dosage based on his activity level. During his playing career, he developed routines for managing his diabetes during games and practices.\n\nHis approach to diabetes management in baseball demonstrates that with proper care and determination, Type 1 diabetes doesn't have to prevent athletes from reaching the highest levels of their sport. Fuld's transition to a front office role after his playing career shows that diabetes doesn't limit career opportunities in sports.",
    advice:
      "Look for role models who have succeeded with diabetes in your sport – their examples can provide both inspiration and practical guidance. Then become that role model for others by sharing your experiences and knowledge.",
    featured: false,
    socialLinks: {
      twitter: "https://twitter.com/SamFuld5",
    },
  },
  {
    id: "ron-santo",
    name: "Ron Santo",
    sport: "Baseball",
    image: "/athletes/ron-santo.jpg",
    shortBio:
      "Chicago Cubs Hall of Fame third baseman who played with Type 1 diabetes in the 1960s and 70s, before modern management techniques were available.",
    story:
      'Ron Santo was diagnosed with Type 1 diabetes in 1959 at age 18, just as he was about to debut in the major leagues. At the time, doctors gave him a dire prognosis – a short lifespan and inevitable complications. Santo resolved to "fight it" and never let on about his condition during his playing career.\n\nHe went on to become a 9-time All-Star with the Chicago Cubs. Though T1D eventually led to significant health challenges after his retirement (including the loss of both legs), Santo\'s playing career and later advocacy (he raised millions for JDRF) demonstrated a courageous life with diabetes.\n\nHis achievements include being a 9-time MLB All-Star and 5-time Gold Glove Award winner, becoming a Chicago Cubs Hall of Fame legend with 342 home runs and 1,331 RBIs in his career, and being inducted into the National Baseball Hall of Fame posthumously in 2012.',
    quote:
      "Life expectancy of a juvenile insulin-dependent diabetic: 25 years... At that point, I said to myself, 'I'm going to fight this thing and beat it.' That's how badly I wanted to live and be a big league ballplayer.",
    diagnosisAge: "18",
    location: "United States",
    achievements: [
      "9× MLB All-Star and 5× Gold Glove Award winner",
      "Chicago Cubs Hall of Fame legend (career 342 HRs, 1,331 RBIs)",
      "National Baseball Hall of Fame inductee (posthumous, 2012)",
    ],
    diabetesManagement:
      "Santo managed his diabetes during his playing career in the 1960s and 70s, before modern management techniques and technology were available. He kept his condition private during his playing days, fearing it might end his career if teams knew about it.\n\nDespite the limited tools available for diabetes management at the time, Santo had a Hall of Fame career. His experience demonstrates the remarkable determination required to succeed as a professional athlete with Type 1 diabetes in an era when the condition was poorly understood and treatment options were limited.",
    advice:
      "Even when faced with dire predictions about your future with diabetes, maintain a fighting spirit and determination to prove the doubters wrong. Your mindset can be as important as your physical management of the condition.",
    featured: false,
    socialLinks: {},
  },
  {
    id: "alexander-zverev",
    name: "Alexander Zverev",
    sport: "Tennis",
    image: "/athletes/alexander-zverev.jpg",
    shortBio:
      "Olympic Gold Medalist and former ATP World No. 2 who was diagnosed with Type 1 diabetes at age 3 and later founded a foundation to support children with diabetes.",
    story:
      'Alexander "Sascha" Zverev was diagnosed with Type 1 diabetes at age 3, but kept his condition private for most of his early career. In 2022 he publicly revealed his T1D and launched a foundation to support diabetic children. Zverev competes at the pinnacle of tennis – he won Olympic gold in 2021 and has reached the world No. 2 ranking – while using an insulin pump off court and taking injections during matches (with official clearance).\n\nHe hopes his openness will inspire others with T1D to pursue their goals without limits. His achievements include winning the Olympic Gold Medal in men\'s singles at Tokyo 2020, becoming a former ATP World No. 2 and winning 21 ATP titles by age 26, and founding the Alexander Zverev Foundation to support children with diabetes.',
    quote: "The only limit is the one you set for yourself.",
    diagnosisAge: "3",
    location: "Germany",
    achievements: [
      "Olympic Gold Medalist (Tokyo 2020 men's singles)",
      "Former ATP World No. 2 and winner of 21 ATP titles by age 26",
      "Founder of the Alexander Zverev Foundation supporting children with diabetes",
    ],
    diabetesManagement:
      "Zverev manages his diabetes by using an insulin pump off court and taking injections during matches. He worked with tennis authorities to get official clearance for his diabetes management tools during competition.\n\nAfter keeping his condition private for most of his early career, Zverev decided to publicly reveal his T1D in 2022 and launch a foundation to support diabetic children. His experience demonstrates that even those diagnosed at a very young age can reach the highest levels of their sport with proper management.",
    advice:
      "Don't let diabetes define you or limit your ambitions. With proper management and determination, you can reach the highest levels of your sport, regardless of how young you were when diagnosed.",
    featured: true,
    socialLinks: {
      instagram: "https://instagram.com/alexzverev123",
    },
  },
  {
    id: "gary-mabbutt",
    name: "Gary Mabbutt",
    sport: "Football (Soccer)",
    image: "/athletes/gary-mabbutt.jpg",
    shortBio:
      "Tottenham Hotspur captain who was told his Type 1 diabetes diagnosis at age 17 meant the end of his football career, but went on to play over 600 matches for the club.",
    story:
      "Gary Mabbutt was a promising 17-year-old footballer when he was told that his Type 1 diabetes diagnosis meant the end of his professional dreams. He proved the doubters wrong – managing his blood sugar with insulin injections in locker rooms and even during halftime of the 1987 FA Cup Final.\n\nMabbutt went on to captain Tottenham for over a decade, win major trophies, and earn 16 caps for England. He became an icon for diabetic athletes, later campaigning with Diabetes UK. His message remains: diabetes should live around your life, not the other way around.\n\nHis achievements include making over 600 appearances for Tottenham Hotspur (1982–1998) and serving as club captain for 11 years, winning the UEFA Cup (1984) and FA Cup (1991) with Tottenham, and becoming the first (and only) England international player with Type 1 diabetes.",
    quote:
      "No matter what you want to do in life, diabetes will not stop you. Do not live your life around diabetes; let it live around you.",
    diagnosisAge: "17",
    location: "England",
    achievements: [
      "Over 600 appearances for Tottenham Hotspur (1982–1998), club captain for 11 years",
      "UEFA Cup (1984) and FA Cup (1991) champion with Tottenham",
      "First (and only) England international player with Type 1 diabetes; MBE honoree (1994)",
    ],
    diabetesManagement:
      "Mabbutt managed his diabetes during his football career by taking insulin injections, sometimes in locker rooms and even during halftime of matches. He developed routines for monitoring his blood sugar levels and ensuring he had the necessary supplies available during games and training.",
    advice:
      "Don't let diabetes define you or limit your ambitions. With proper management and determination, you can reach the highest levels of your sport, regardless of how young you were when diagnosed.",
    featured: true,
    socialLinks: {
      instagram: "https://instagram.com/garymabbutt",
    },
  },
  {
    id: "jj-spaun",
    name: "J.J. Spaun",
    sport: "Golf",
    image: "/athletes/jj-spaun.jpg",
    shortBio:
      "PGA Tour golfer and 2025 U.S. Open Champion who was initially misdiagnosed with Type 2 diabetes in 2018, later correctly diagnosed with Type 1 in 2021.",
    story:
      "J.J. Spaun's golf career took a dramatic turn in 2018 when he was diagnosed with Type 2 diabetes. His form plummeted as he struggled with fatigue and unexplained weight loss for two years. In 2021, doctors discovered he actually had late-onset Type 1 diabetes - a misdiagnosis that had cost him years of proper treatment.\n\nArmed with the correct diagnosis, insulin therapy, and a continuous glucose monitor, Spaun rebuilt his game from the ground up. The transformation was remarkable - he captured his first PGA Tour victory at the 2022 Valero Texas Open, proving that proper diabetes management could restore his competitive edge.\n\nSpaun's ultimate vindication came at the rain-soaked 2025 U.S. Open at Oakmont, where he sealed his first major championship with a dramatic 64-foot birdie putt on the 72nd hole. His journey from misdiagnosis to major champion serves as an inspiring example of perseverance and the importance of proper medical care for athletes with Type 1 diabetes.",
    quote:
      "I went through two years of struggling … I wasn't even getting the right medicine. Once I knew it was Type 1, everything changed.",
    diagnosisAge: "31",
    location: "United States",
    achievements: [
      "2025 U.S. Open Champion — first major title, sealed with a 64-ft birdie putt at Oakmont",
      "Winner, 2022 Valero Texas Open (first PGA Tour victory)",
      "Overcame initial Type 2 mis-diagnosis (2018) to thrive after correct Type 1 diagnosis in 2021",
    ],
    diabetesManagement:
      "After years of struggling with an incorrect Type 2 diabetes diagnosis, Spaun's golf career was transformed when he received proper Type 1 diabetes treatment in 2021. He now uses insulin therapy and a continuous glucose monitor to manage his condition during tournaments.\n\nSpaun's experience highlights the critical importance of accurate diagnosis for athletes. The switch from Type 2 medications to proper Type 1 diabetes management with insulin allowed him to regain his energy, focus, and competitive form on the golf course.",
    advice:
      "If you're not feeling right or your performance is suffering despite treatment, don't be afraid to seek a second opinion. Proper diagnosis and treatment are crucial - you control the disease, the disease doesn't control you.",
    featured: false,
    socialLinks: {
      instagram: "https://instagram.com/jjspaun",
      twitter: "https://twitter.com/JJSpaun",
    },
  },
  {
    id: "kevin-kellerman",
    name: "Kevin Kellerman",
    sport: "Mixed Martial Arts",
    image: "/athletes/kevin-kellerman.jpg",
    shortBio:
      "Professional MMA fighter from Canada who was diagnosed with Type 1 diabetes at age 3 and uses an insulin pump and CGM to manage his condition during intense fight camps.",
    story:
      "Kevin Kellerman was diagnosed with Type 1 diabetes at just 3 years old, but this early diagnosis never deterred him from pursuing his passion for mixed martial arts. Based in Kelowna, Canada, Kellerman has been training since his teens and has developed a sophisticated approach to managing his diabetes during the intense physical demands of MMA.\n\nKellerman made his professional MMA debut at BFL 44: Vendetta in June 2016, scoring an impressive 2nd-round TKO victory. Prior to turning professional, he captured the Battlefield Fight League amateur bantamweight championship in September 2015, establishing himself as a formidable competitor in the bantamweight and featherweight divisions.\n\nIn 2016, Kellerman adopted an insulin pump and continuous glucose monitor (CGM), a change he credits with significantly improving his in-cage performances. Managing diabetes in MMA presents unique challenges, particularly with intense weight-cutting protocols and the adrenaline spikes that occur during fights, but Kellerman has mastered these obstacles.\n\nBeyond his fighting career, Kellerman has become a prominent advocate for Type 1 diabetes awareness in combat sports, being featured in publications like Diabetes.co.uk and Diabetic Muscle & Fitness, as well as appearing on the Diabetics Doing Things podcast. His goal remains reaching the top tiers of MMA while inspiring others with diabetes to pursue their athletic dreams.",
    quote:
      "Believe it or not I don't find it too challenging to manage my blood sugars and train MMA. I don't dwell on the fact that I have to do it.",
    diagnosisAge: "3",
    location: "Canada",
    achievements: [
      "Professional MMA record 1-2-0; scored a 2nd-round TKO win on pro debut at BFL 44: Vendetta (June 2016)",
      "Battlefield Fight League amateur bantamweight champion (September 2015)",
      "Featured advocate for Type 1 diabetes in combat sports (Diabetes.co.uk, Diabetic Muscle & Fitness, Diabetics Doing Things podcast)",
    ],
    diabetesManagement:
      "Kellerman manages his Type 1 diabetes during MMA training and competition using an insulin pump and continuous glucose monitor (CGM), technology he adopted in 2016 that he credits with improving his performance. Managing diabetes in MMA presents unique challenges, particularly during intense weight-cutting phases and dealing with adrenaline-induced blood sugar spikes during fights.\n\nHis approach involves careful monitoring of blood glucose levels throughout training camps, adjusting insulin delivery based on the intensity and duration of training sessions. During fight week, Kellerman must balance the demands of making weight with maintaining stable blood sugar levels, requiring precise coordination between his diabetes management and fight preparation.",
    advice:
      "Don't dwell on having to manage diabetes - make it part of your routine and focus on your goals. The technology available today, like insulin pumps and CGMs, can actually give you better control and performance than you might expect.",
    featured: false,
    socialLinks: {
      instagram: "https://instagram.com/kevinkellermanmma",
      facebook: "https://facebook.com/KevinKellermanMMA",
    },
  },
  {
    id: "team-novo-nordisk",
    name: "Team Novo Nordisk",
    sport: "Road Cycling",
    image: "/athletes/team-novo-nordisk.png",
    shortBio:
      "The world's first and only UCI ProTeam where every rider has Type 1 diabetes, competing at the highest level of professional cycling.",
    story:
      "Team Novo Nordisk stands as a revolutionary force in professional cycling - the world's first and only UCI ProTeam where every single rider has Type 1 diabetes. Founded in 2005 as Team Type 1, this groundbreaking team has been fielding an all-diabetes roster since 2013, proving that Type 1 diabetes is no barrier to competing at the highest levels of professional sport.\n\nThe team's mission extends far beyond racing: to inspire, educate and empower everyone affected by diabetes by racing – and winning – at the highest level. With their principal sponsor Novo Nordisk, a global leader in diabetes care, the team has created a platform that reaches millions of people worldwide with the message that diabetes doesn't have to limit your dreams.\n\nFrom their early success winning the Race Across America three times (2007, 2009, 2010) to becoming a UCI ProTeam competing in world-tour level races, Team Novo Nordisk has consistently broken barriers. Notable achievements include Scott Ambrose's UCI stage victory at Le Tour de Filipinas in 2015 and Joonas Henttala becoming Finnish National Road Race Champion in 2021.\n\nThe 2025 roster features 20 professional riders from around the globe, each managing Type 1 diabetes while competing at the elite level. Led by co-founder and CEO Phil Southerland, the team also maintains a development program and works with over 30 ambassadors - former pros and elite athletes with Type 1 diabetes who continue to spread the team's inspiring message.",
    quote:
      "To inspire, educate and empower everyone affected by diabetes by racing – and winning – at the highest level with an all–Type 1-diabetes roster.",
    diagnosisAge: "Various (team members diagnosed between childhood and adulthood)",
    location: "United States (registered), International roster",
    achievements: [
      "World's first UCI ProTeam with all-Type 1 diabetes roster (since 2013)",
      "3× Race Across America winners (2007, 2009, 2010)",
      "UCI stage victory - Scott Ambrose, Le Tour de Filipinas 2015",
      "National Champion - Joonas Henttala, Finnish Road Race 2021",
      "20-rider professional roster competing at UCI ProTeam level (2025)",
    ],
    diabetesManagement:
      "Team Novo Nordisk riders manage their Type 1 diabetes during professional cycling competition through sophisticated monitoring systems and individualized management plans. Each rider works with the team's medical staff to develop personalized strategies for managing blood glucose during training and racing.\n\nThe team uses continuous glucose monitors, insulin pumps, and careful nutritional planning to ensure riders can perform at their peak while maintaining stable blood sugar levels. During multi-stage races, riders must balance the intense physical demands of professional cycling with the need to manage their diabetes around the clock.\n\nThe team's approach demonstrates that with proper medical support, technology, and planning, athletes with Type 1 diabetes can compete successfully at the highest levels of endurance sports.",
    advice:
      "Don't let anyone tell you that diabetes limits what you can achieve. Surround yourself with people who believe in your dreams and are willing to help you develop the systems and support you need to succeed. Whether you're an aspiring athlete or pursuing any other goal, proper diabetes management combined with determination can take you anywhere.",
    featured: true,
    socialLinks: {
      website: "https://www.teamnovonordisk.com",
      twitter: "https://twitter.com/teamnovonordisk",
      instagram: "https://instagram.com/teamnovonordisk",
      facebook: "https://facebook.com/TeamNovoNordisk",
    },
  },
]
