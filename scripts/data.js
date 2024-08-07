const categories = [
  {
    name: "Show All",
    filter: "all",
  },
  {
    name: "Italy",
    filter: "italy",
  },
  {
    name: "UAE",
    filter: "uae",
  },
  {
    name: "France",
    filter: "france",
  },
  {
    name: "Israel",
    filter: "israel",
  },
  {
    name: "Japan",
    filter: "japan",
  },
  {
    name: "Germany",
    filter: "germany",
  },
  {
    name: "Thailand",
    filter: "thailand",
  },
  {
    name: "Georgia",
    filter: "georgia",
  },
];

const images = [
  {
    id: "1",
    url: "gallery1.jpg",
    category: "israel",
    title:
      "Mount Tabor Nature Reserve and National Park, Lower Galilee, Israel",
    blog: "Mount Tabor is known for its beautifully round shape rising from the ground in the heart of Lower Galilee. The area is lush and green year-round, with scenic and natural values, history, and archaeological treasures. Due to its height the mountain provides spectacular views. On the Mountaintop path there are wonderful observation points. Furthermore, the mountain itself has a number of caves, some natural, which served as quarries for cutting stones to build the wall. In the northern part, under the Greek church, there is a cave the opening of which is built of chiseled stones, and it is open to visitors.",
  },
  {
    id: "2",
    url: "gallery2.jpg",
    category: "france",
    title: "Strasbourg, France ",
    blog: "Strasbourg is indeed one of Europe's most scenic cities - from the imposing Cathedral with its intricate carvings, to the picturesque houses and canals of Petite France. It is therefore very popular as a tourist destination and a wonderful place to live. There's a lot to see and do in the region, with Strasbourg as your base. Discover the vineyards, lakes and mountains, or visit the region's towns or villages.",
  },
  {
    id: "3",
    url: "gallery3.jpg",
    category: "israel",
    title: "Dead Sea, Israel",
    blog: "The Dead Sea known as the lowest place on earth. It's surrounded by the stunning landscape of the Negev desert. The saline waters of the lake means no fish can survive in the salty waters, hence the name. The other result of the salty water is their renowned health and healing properties of the mud. You can also float naturally in them.",
  },
  {
    id: "4",
    url: "gallery4.jpg",
    category: "japan",
    title: "Matsumoto Castle, Japan",
    blog: "Matsumoto Castle which also originally known as Fukashi Castle, is one of Japan's premier historic castles and is located in the city of the same name, Nagano Prefecture. My parents visited this beautiful castle among other areas in Japan few years ago and my dream is to visit this place someday as well.",
  },
  {
    id: "5",
    url: "gallery5.jpg",
    category: "italy",
    title: "Lago Di Carezza, Italy",
    blog: "Lago Di Carezza is the most beautiful lake in Dolomites, South Tyrol, well at least in my opinion. The water of emerald which sparkle magnificently with the flecks of a rainbow are completely mesmerizing and to fall in love with this place is pretty easy. Visit this place in sunrise or sunset is definitely a magical time. The lake itself small, though the size doesn't really matter as it still beats all the other lakes and by the way swimming there is prohibited. As I've heard, this wondrous place changed from the last time I've visited which was in 2013. In late 2018, a massive storm tore through Northern Italy along other countries. There were winds of more than 200km/h that ruined many forests. Lots of trees were fallen or cut which apparently caused more destruction and earnest consequences for its ecosystem. It will take a long time to fully recover from that storm. I wish there won't be anymore damage to this marvelous place that I love very much and hopefully I'll visit soon.",
  },
  {
    id: "6",
    url: "gallery6.jpg",
    category: "uae",
    title: "Dubai, UAE",
    blog: "Wow what can I say about this gorgeous place that others didn't. I've traveled to Dubai which is in United Arab Emirates or for short UAE, in last november (2022) for the first time ever, and hopefully not the last. It's been such a wonderful time there, traveled and seen a lot in just about 4-5 days. Just the day we arrived, we already went for a boat/cruise sailing in Dubai River at eve including wonderful dinner, great music, company but most of all great scenery. Dubai has a lot to offer, a lot to see and experience, a lot to explore and feel, from the magnificent viewpoint at Burj Khalifa that is known for being the world's tallest building, to Dubai gorgeous marina, the 360 deg panoramic view at the Palm Observatory, to the gorgeous Dubai desert and yes it is gorgeous beauty of sand that I love. Reaching by the train above water at some part, to the magnificent Palm Jumeirah island, it's the time when you just can't stop rubbing your eyes because of the view around you and mainly because this luxury hotel and obviously not cheap lol.",
  },
  {
    id: "7",
    url: "gallery7.jpg",
    category: "italy",
    title: "Sirmione, Italy",
    blog: "Oh Sirmione... What a beautiful resort town I had the pleasure to visit a while ago but soon to be back. This town located in the south side of Lake Garda in northern Italy. There's a lot to explore in Sirmione just like any other place though this town is really special. Sirmione which also refers to as 'the pearl of the islands and peninsulas', is a famous thermal destination that has a lovely spas to unwind and relax. This town has a lot to offer from strolling the historical streets of Sirmione, visiting Scaliger Castle and spending time at the beach behind the castle, to take a boat tour around Sirmione peninsula and swimming at Jamaica beach. You probably wondering why this beach name's not located in Jamaica or maybe I was mistaken, but no this beach indeed named like this because of its white rocks that will give you the feeling of being on a Caribbean island, it's very calm and clean beach with dainty brown sand which good for children's games and building castles. You should spend a day at Gardaland amusement park and trust me it is worth it. To sum it up, Sirmione is a magical place that definitely worth a visit, gorgeous vistas, historical streets and castles, incredible beaches and attractions all around, marvelous food and don't forget to enjoy their ice cream it's one of the best you'll ever taste in my opinion at least. Let's not forget about the people themselves the locals, really kind and wonderful people, always willing to help, happy and respectful. Viva Italia ! Arrivederci",
  },
  {
    id: "8",
    url: "gallery8.jpg",
    category: "japan",
    title: "Kinkaku-Ji Temple, Kyoto, Japan",
    blog: "Kinkaku-Ji Temple which officially named Rokuon-ji is a Zen Buddhist temple in northwestern Kyoto, Japan. I haven't had the chance to travel in Japan yet, but my parents had the pleasure of doing so, and also taking this amazing photo while visiting this mesmerizing zen. This complex, whose gardens and architecture focused around a central Golden Pavilion, was built to evoke paradise on earth and was the destination of such esteemed visitors as Emperor Gokomatsu and is a popular tourist destination. You may wonder just like I was if Kinkaku-Ji is made of real gold, and indeed it is pure gold. It made of gold leaf and in order to stretch it as much as possible, copper and a small portion of silver are mixed into a pure gold. It was said that people can't touch it by hand without causing any cracks. I probably wouldn't have been able to take my eyes off of it haha, though this fragile thinness is what creates a true beauty unlike others when used on items such as decoration or lacquerware. Dekirudakehayaku o ai shimashou !",
  },
  {
    id: "9",
    url: "gallery9.jpg",
    category: "italy",
    title: "Rio di San Felice, Venezia, Italy",
    blog: "Oh my Venezia.. How I miss you.. Such a special place to visit and live. Rio di San Felice name comes from the church located nearby. Venezia changed a lot since the last time I've been there, It became too crowded with travelers about every day depending on the season, but yes. Once the heart of a powerful maritime republic, Venice's main island has lost more than 120,000 residents since the early 1950s, driven away by myriad issues but mainly a focus on mass tourism that has caused the population to be dwarfed by the thousands of visitors who crowd its squares, bridges and narrow walkways each day. These include the increasing cost of living, overcrowded transportation systems, the lack of well-paid job opportunities, retail stores being replaced by tourist souvenir shops, and rising housing costs as tourists compete for accommodation with locals. The Venetians started to fight back, a new tourist tax has been introduced to help their city including daily tourist tax and hotel city tax. I really hope it'll change for the better for the locals. Viva Italia !",
  },
  {
    id: "10",
    url: "gallery10.jpg",
    category: "germany",
    title: "State Museum of Baden, Karlsruhe Palace, Germany",
    blog: "The State Museum of Baden is a museum of cultural and natural history that is located in Karlsruhe Palace, Germany. It's one of the largest and oldest museums in Germany, it was established in 1856 so go figure. So what you can find here are diverse collections that includes artifacts from the Stone Age to the present day, as well as displays on natural history, archaeology, and local history. The museum has a large art collection that includes works by local artists, as well as pieces by international artists such as Albrecht Dürer and Rembrandt. There are archaeological exhibitions which cover the history of the region from prehistory to the Middle Ages, including displays on the Celts, the Roman Empire, and the medieval period as also natural history exhibitions including displays on geology, paleontology, and botany, as well as a large collection of insects and birds.",
  },
  {
    id: "11",
    url: "gallery11.jpg",
    category: "germany",
    title: "Heidelberg, Germany",
    blog: "Heidelberg is a popular tourist destination in Germany that offers a unique blend of history, culture, and natural beauty. The Heidelberg Castle is one of the town's most iconic landmarks and a must-visit for travelers. The castle offers panoramic views of the town and the surrounding landscape, and has a rich history dating back to the 13th century. You can stroll through old town and its charming and historic area that is perfect for strolling and exploring. The visitors can admire the town's historic architecture, visit shops and restaurants, and enjoy the relaxed atmosphere of the town's narrow streets and squares. Also, you can take a River boat tour to experience Heidelberg from a different perspective so in this way you'll enjoy scenic views of the town and its surroundings as you cruise down the Neckar River. During the christmas season, you can visit the annual Christmas market that takes place in Heidelberg castle grounds called Heidelberger Schlossweihnact. The market offers a unique and festive atmosphere, with stalls selling holiday gifts and treats, as well as live music and performances. Overall, Heidelberg offers a wide variety of things to see and do for travelers, from exploring its historic old town and beautiful castle, to enjoying the town's cultural events and natural beauty.",
  },
  {
    id: "12",
    url: "gallery12.jpg",
    category: "japan",
    title: "Statue of Liberty and Rainbow bridge in Odaiba, Tokyo, Japan",
    blog: "The Statue of Liberty and Rainbow Bridge in Odaiba, Tokyo are two popular tourist attractions in Japan that offer unique experiences and breathtaking views. The Statue of Liberty is a smaller replica of the famous statue in New York and offers panoramic views of the city. The Rainbow Bridge is a lit-up suspension bridge that offers views of the city skyline. In Odaiba, the travelers can also enjoy attractions such as the Daikanransha Ferris Wheel, the Toyota Megaweb, DiverCity Tokyo Plaza, and the Odaiba Seaside Park. To sum it up, there is a wide variety of things to see and do in Odaiba, from exploring its shopping and entertainment options to admiring its beautiful views which I hope to experience as soon as I will visit Japan for the first time. Nihon o hōmon suru no o matsu koto ga dekimasu !",
  },
  {
    id: "13",
    url: "gallery13.jpg",
    category: "georgia",
    title: "Batumi, Georgia",
    blog: "Oh Batumi.. What a charming Black Sea resort and port city I had the delight to visit. I really enjoyed Batumi and its area, from the Batumi Boulevard that offers lots of restaurants and cafes along different kind of attractions, to gaze over the great views of Batumi from the Alphabetic Tower. You can explore the historic Old Town, as well as the city's modern and eclectic architecture. In addition, there are many outdoor activities such as visiting the Botanical Garden, take a cable car to the top of Mount Batumi where there is a viewpoint over the city and explore the surrounding Adjara Mountains and waterfalls or you can just go relax and soak up the sun on Batumi scenic Black Sea beaches. To recap, Batumi is a unique and vibrant city that offers a range of cultural, historical, and natural attractions. Whether you're interested in exploring its history, admiring its architecture, or just relaxing on its beaches, Batumi has something for every traveler.",
  },
  {
    id: "14",
    url: "gallery14.jpg",
    category: "thailand",
    title: "Phuket, Thailand",
    blog: "Wow Phuket.. What an amazing place I traveled to for the first time, well technically it was my first time in Thailand in general. It's a popular tourist destination known for its stunning beaches, vibrant nightlife, and rich cultural heritage. Phuket, Thailand is a top tourist destination known for its stunning beaches, vibrant nightlife, cultural heritage, and outdoor activities. Phuket has beautiful beaches i.g Kata, Patong among other iconic ones. You can enjoy from lively nightlife scene, with many bars, clubs, and street markets to explore. Phuket offers many attractions and activities i.g scuba diving, island-hopping, rock climbing along rich cultural heritage at sites like the Old Phuket Town, the Chalong Temple, and the Wat Chalong temple. The local cuisine is delicious, if you like pancakes or crepes you definitely need to try their Roti. There are many stalls on the street offering a wide variety of different types of food including dishes like pad thai, green curry, and mango sticky rice etc. I'll summarize my experience as that Phuket is a vibrant and exciting destination that offers something for every traveler. Whether you're interested in relaxing on its beautiful beaches, exploring its rich culture, or experiencing its adventurous side, Phuket has it all.",
  },
  {
    id: "15",
    url: "gallery15.jpg",
    category: "japan",
    title: "Tokyo Skyline view, Japan",
    blog: "The Tokyo skyline is a must-see for travelers and for me. It features iconic skyscrapers and a mix of traditional and modern architecture. Viewing the Tokyo skyline is a must-do activity for travelers looking to take in the city's unique blend of history and modernity. Whether from the top of an observation deck or from street level, the views of Tokyo's skyline are sure to be a highlight of any trip.",
  },
  {
    id: "16",
    url: "gallery16.jpg",
    category: "france",
    title: "Colmar, France",
    blog: "What a marvelous city is Colmar. Colmar is located in the Alsace region of France and it offers plenty of cultural and scenic attractions for travelers such as the picturesque Old Town, renowned art museums, world-class wine country, festive events, and beautiful surroundings for outdoor activities. Overall, Colmar is a must-visit destination for travelers.",
  },
  {
    id: "17",
    url: "gallery17.jpg",
    category: "georgia",
    title: "Batumi, Georgia",
    blog: "Oh Batumi.. What a charming Black Sea resort and port city I had the delight to visit. I really enjoyed Batumi and its area, from the Batumi Boulevard that offers lots of restaurants and cafes along different kind of attractions, to gaze over the great views of Batumi from the Alphabetic Tower. You can explore the historic Old Town, as well as the city's modern and eclectic architecture. In addition, there are many outdoor activities such as visiting the Botanical Garden, take a cable car to the top of Mount Batumi where there is a viewpoint over the city and explore the surrounding Adjara Mountains and waterfalls or you can just go relax and soak up the sun on Batumi scenic Black Sea beaches. To recap, Batumi is a unique and vibrant city that offers a range of cultural, historical, and natural attractions. Whether you're interested in exploring its history, admiring its architecture, or just relaxing on its beaches, Batumi has something for every traveler.",
  },
  {
    id: "18",
    url: "gallery18.jpg",
    category: "uae",
    title: "Miracle Garden, Dubai, UAE",
    blog: "Wow this incredible Miracle Garden is one of my most favorite Botanical Gardens by far. It's located in Dubai and is the largest flower garden in the world, featuring over 45 million flowers arranged in unique and stunning displays. The visitors can admire the vibrant colors and intricate designs, including desert, tropical, and Mediterranean-style gardens, and take photos of the beautiful landscapes. Note: It is also a family-friendly destination ideal for travelers interested in botanical gardens and unique experiences. In brief, the Miracle Garden is a unique and beautiful attraction in Dubai that is sure to be a highlight of any trip for travelers interested in botanical gardens and unique experiences.",
  },
  {
    id: "19",
    url: "gallery19.jpg",
    category: "uae",
    title: "The Frame, Dubai, UAE",
    blog: "Oh my The Frame.. The Frame that I wanted to take home with me but couldn't because it won't feet my luggage haha.. The Frame in Dubai is a 150-meter tall architectural landmark with a unique picture frame shape that offers visitors an innovative and interactive experience. The visitors can walk through its transparent floor and walls for an interactive experience and stunning views of the city skyline and It is a culturally significant attraction that offers panoramic views, making it ideal for families and groups of all ages. To sum it up, The Frame is an innovative and interactive attraction in Dubai that offers stunning views, cultural significance, and a unique experience for visitors.",
  },
  {
    id: "20",
    url: "gallery20.jpg",
    category: "thailand",
    title: "Doi Tung Palace, Mae Fa Luang, Thailand",
    blog: "Doi Tung Palace in Mae Fa Luang, Thailand is a former royal residence surrounded by beautifully landscaped gardens and showcasing traditional Hill Tribe culture and handicrafts. The visitors can walk through its traditional Lanna-style architecture, see local handicrafts and orchid, coffee and butterfly gardens, making it an ideal destination for culture enthusiasts seeking a traditional Thai experience. Overall, Doi Tung Palace is a unique cultural attraction in Thailand that offers visitors a glimpse into the traditional way of life of the Hill Tribes and showcases the cultural heritage of northern Thailand.",
  },
  {
    id: "21",
    url: "gallery21.jpg",
    category: "thailand",
    title: "Nongnooch Pattaya Garden and Resort, Thailand",
    blog: "Nongnooch Pattaya Garden and Resort in Thailand offers travelers a unique blend of nature and culture, with its 600-acre landscaped gardens, cultural shows, elephants, traditional villages, and Thai culture and traditions. You need at least a whole day to explore this incredible place. To recap, Nongnooch Pattaya Garden and Resort is a unique cultural and nature attraction in Thailand that offers visitors a chance to experience the beauty of Thai nature and culture in one place.",
  },
];
