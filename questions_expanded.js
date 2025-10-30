// Asian Entertainment Quiz Questions Database - Expanded Edition
const QUESTIONS_DATABASE = {
    kpop: [
        // Original questions
        {
            question: "Which group is known as the 'Kings of K-pop'?",
            options: ["EXO", "BTS", "BIGBANG", "Super Junior"],
            correctAnswer: 2,
            category: "K-Pop",
            points: 10
        },
        {
            question: "What does 'maknae' mean in K-pop?",
            options: ["Leader", "Oldest member", "Youngest member", "Main vocalist"],
            correctAnswer: 2,
            category: "K-Pop",
            points: 10
        },
        {
            question: "Which girl group sang 'DDU-DU DDU-DU'?",
            options: ["TWICE", "Red Velvet", "BLACKPINK", "(G)I-DLE"],
            correctAnswer: 2,
            category: "K-Pop",
            points: 10
        },
        {
            question: "BTS stands for:",
            options: ["Behind The Scenes", "Bangtan Sonyeondan", "Big Time Stars", "Boys That Sing"],
            correctAnswer: 1,
            category: "K-Pop",
            points: 10
        },
        {
            question: "Which company is part of the 'Big 3' along with SM and YG?",
            options: ["HYBE", "JYP", "Cube", "Pledis"],
            correctAnswer: 1,
            category: "K-Pop",
            points: 10
        },
        {
            question: "Which TWICE member is from Taiwan?",
            options: ["Sana", "Momo", "Tzuyu", "Mina"],
            correctAnswer: 2,
            category: "K-Pop",
            points: 10
        },
        {
            question: "What is the name of BTS's fandom?",
            options: ["ONCE", "ARMY", "BLINK", "EXO-L"],
            correctAnswer: 1,
            category: "K-Pop",
            points: 10
        },
        {
            question: "Which member of BTS is known as the 'Golden Maknae'?",
            options: ["Jimin", "V", "Jungkook", "Jin"],
            correctAnswer: 2,
            category: "K-Pop",
            points: 10
        },
        {
            question: "What was BLACKPINK's debut song?",
            options: ["Boombayah", "Whistle", "Both were released together", "Playing With Fire"],
            correctAnswer: 2,
            category: "K-Pop",
            points: 10
        },
        {
            question: "Which group had the first K-pop music video to reach 1 billion views?",
            options: ["BTS", "PSY (Gangnam Style)", "BLACKPINK", "TWICE"],
            correctAnswer: 1,
            category: "K-Pop",
            points: 10
        },
        {
            question: "What does 'aegyo' mean in K-pop culture?",
            options: ["Cute/charming behavior", "Powerful dance", "High notes", "Stage presence"],
            correctAnswer: 0,
            category: "K-Pop",
            points: 10
        },
        {
            question: "Which SM Entertainment group is known as the 'Princes of K-pop'?",
            options: ["Super Junior", "SHINee", "EXO", "NCT"],
            correctAnswer: 1,
            category: "K-Pop",
            points: 10
        },
        {
            question: "What was the first K-pop song to top the Billboard Hot 100?",
            options: ["Gangnam Style", "Dynamite", "Life Goes On", "Butter"],
            correctAnswer: 1,
            category: "K-Pop",
            points: 15
        },
        {
            question: "Which group's lightstick is called 'Candy Bong'?",
            options: ["Red Velvet", "TWICE", "BLACKPINK", "(G)I-DLE"],
            correctAnswer: 1,
            category: "K-Pop",
            points: 15
        },
        {
            question: "What is the Korean term for the intense training period before debut?",
            options: ["Hoobae", "Sunbae", "Trainee period", "Pre-debut"],
            correctAnswer: 2,
            category: "K-Pop",
            points: 10
        },
        // NEW QUESTIONS START HERE
        {
            question: "Which BLACKPINK member is known as the 'Human Chanel'?",
            options: ["Jennie", "Lisa", "Rosé", "Jisoo"],
            correctAnswer: 0,
            category: "K-Pop",
            points: 10
        },
        {
            question: "What is the name of TWICE's reality show?",
            options: ["TWICE TV", "OOH-AHH", "What is Love?", "TT"],
            correctAnswer: 0,
            category: "K-Pop",
            points: 10
        },
        {
            question: "Which BTS member is the main rapper?",
            options: ["RM", "Suga", "J-Hope", "All of them"],
            correctAnswer: 3,
            category: "K-Pop",
            points: 10
        },
        {
            question: "What does 'sunbae' mean in Korean?",
            options: ["Junior", "Senior/mentor", "Friend", "Classmate"],
            correctAnswer: 1,
            category: "K-Pop",
            points: 10
        },
        {
            question: "Which girl group is known for the song 'Gee'?",
            options: ["Girls' Generation (SNSD)", "Wonder Girls", "KARA", "2NE1"],
            correctAnswer: 0,
            category: "K-Pop",
            points: 10
        },
        {
            question: "What is the name of Red Velvet's fanclub?",
            options: ["ReVeluv", "Red Flavor", "Velvet", "RV"],
            correctAnswer: 0,
            category: "K-Pop",
            points: 10
        },
        {
            question: "Which company does NewJeans belong to?",
            options: ["HYBE", "ADOR", "SM", "YG"],
            correctAnswer: 1,
            category: "K-Pop",
            points: 10
        },
        {
            question: "What is the name of SEVENTEEN's self-producing system?",
            options: ["Self-Made", "DIY", "Self-Producing Idol", "Producer-dol"],
            correctAnswer: 2,
            category: "K-Pop",
            points: 15
        },
        {
            question: "Which member of ITZY is the leader?",
            options: ["Yeji", "Lia", "Ryujin", "Chaeryeong"],
            correctAnswer: 0,
            category: "K-Pop",
            points: 10
        },
        {
            question: "What does 'hoobae' mean?",
            options: ["Senior", "Junior", "Friend", "Enemy"],
            correctAnswer: 1,
            category: "K-Pop",
            points: 10
        },
        {
            question: "Which group sang 'Fantastic Baby'?",
            options: ["BIGBANG", "Super Junior", "SHINee", "TVXQ"],
            correctAnswer: 0,
            category: "K-Pop",
            points: 10
        },
        {
            question: "What is the name of aespa's virtual world?",
            options: ["KWANGYA", "MY", "Next Level", "Savage"],
            correctAnswer: 0,
            category: "K-Pop",
            points: 15
        },
        {
            question: "Which TWICE member is Japanese?",
            options: ["Tzuyu", "Sana", "Dahyun", "Chaeyoung"],
            correctAnswer: 1,
            category: "K-Pop",
            points: 10
        },
        {
            question: "What is the name of (G)I-DLE's fandom?",
            options: ["Neverland", "Idle", "Tomboy", "Queencard"],
            correctAnswer: 0,
            category: "K-Pop",
            points: 10
        },
        {
            question: "Which BTS song was their first Billboard Hot 100 entry?",
            options: ["DNA", "Fake Love", "Idol", "Boy With Luv"],
            correctAnswer: 0,
            category: "K-Pop",
            points: 15
        },
        {
            question: "What does 'bias' mean in K-pop?",
            options: ["Favorite member", "Least favorite", "Leader", "Main vocalist"],
            correctAnswer: 0,
            category: "K-Pop",
            points: 10
        },
        {
            question: "Which group is known for the 'point choreography' in 'TT'?",
            options: ["TWICE", "Red Velvet", "BLACKPINK", "Girls' Generation"],
            correctAnswer: 0,
            category: "K-Pop",
            points: 10
        },
        {
            question: "What is the name of BLACKPINK's reality show?",
            options: ["BLACKPINK House", "24/365 with BLACKPINK", "BLACKPINK Diaries", "All of the above"],
            correctAnswer: 3,
            category: "K-Pop",
            points: 10
        },
        {
            question: "Which member of BTS is known for his deep voice?",
            options: ["V (Taehyung)", "Jin", "Jimin", "Jungkook"],
            correctAnswer: 0,
            category: "K-Pop",
            points: 10
        },
        {
            question: "What does 'comeback' mean in K-pop?",
            options: ["Returning from military", "New album/song release", "Reunion", "Apology"],
            correctAnswer: 1,
            category: "K-Pop",
            points: 10
        },
        {
            question: "Which girl group is known as 'The Nation's Girl Group'?",
            options: ["Girls' Generation", "TWICE", "BLACKPINK", "Red Velvet"],
            correctAnswer: 0,
            category: "K-Pop",
            points: 10
        },
        {
            question: "What is the name of STRAY KIDS' fandom?",
            options: ["STAY", "SKZ", "Stray", "Kids"],
            correctAnswer: 0,
            category: "K-Pop",
            points: 10
        },
        {
            question: "Which company is known for the 'noise music' style?",
            options: ["SM Entertainment", "JYP Entertainment", "YG Entertainment", "HYBE"],
            correctAnswer: 0,
            category: "K-Pop",
            points: 15
        },
        {
            question: "What is the name of IVE's debut song?",
            options: ["ELEVEN", "Love Dive", "After LIKE", "I AM"],
            correctAnswer: 0,
            category: "K-Pop",
            points: 10
        },
        {
            question: "Which member of MAMAMOO is known for her powerful vocals?",
            options: ["Solar", "Moonbyul", "Wheein", "Hwasa"],
            correctAnswer: 0,
            category: "K-Pop",
            points: 10
        },
        {
            question: "What does 'visual' mean in K-pop?",
            options: ["Main dancer", "Most attractive member", "Leader", "Youngest member"],
            correctAnswer: 1,
            category: "K-Pop",
            points: 10
        },
        {
            question: "Which group popularized the 'knife-like choreography' term?",
            options: ["Girls' Generation", "KARA", "Wonder Girls", "All synchronized groups"],
            correctAnswer: 3,
            category: "K-Pop",
            points: 10
        },
        {
            question: "What is the name of LE SSERAFIM's debut song?",
            options: ["FEARLESS", "ANTIFRAGILE", "UNFORGIVEN", "EASY"],
            correctAnswer: 0,
            category: "K-Pop",
            points: 10
        },
        {
            question: "Which BTS member is the oldest?",
            options: ["Jin", "Suga", "RM", "J-Hope"],
            correctAnswer: 0,
            category: "K-Pop",
            points: 10
        },
        {
            question: "What does 'stan' mean in K-pop culture?",
            options: ["Stand up", "Be an obsessive fan", "Support casually", "Criticize"],
            correctAnswer: 1,
            category: "K-Pop",
            points: 10
        },
        {
            question: "Which girl group is known for their 'girl crush' concept?",
            options: ["BLACKPINK", "2NE1", "4Minute", "All of the above"],
            correctAnswer: 3,
            category: "K-Pop",
            points: 10
        },
        {
            question: "What is the name of ENHYPEN's debut album?",
            options: ["BORDER: DAY ONE", "DIMENSION: DILEMMA", "MANIFESTO", "ORANGE BLOOD"],
            correctAnswer: 0,
            category: "K-Pop",
            points: 10
        }
    ],
    
    jpop: [
        // Original questions
        {
            question: "Which anime features the opening song 'Cruel Angel's Thesis'?",
            options: ["Dragon Ball Z", "Neon Genesis Evangelion", "Sailor Moon", "One Piece"],
            correctAnswer: 1,
            category: "J-Pop & Anime",
            points: 10
        },
        {
            question: "Who is known as the 'Queen of J-Pop'?",
            options: ["Ayumi Hamasaki", "Hikaru Utada", "Namie Amuro", "Koda Kumi"],
            correctAnswer: 0,
            category: "J-Pop & Anime",
            points: 10
        },
        {
            question: "Which Studio Ghibli film features the song 'Always With Me'?",
            options: ["My Neighbor Totoro", "Princess Mononoke", "Spirited Away", "Howl's Moving Castle"],
            correctAnswer: 2,
            category: "J-Pop & Anime",
            points: 10
        },
        {
            question: "What does 'J-Pop' stand for?",
            options: ["Japan Pop", "Japanese Popular music", "Jpop", "All of the above"],
            correctAnswer: 3,
            category: "J-Pop & Anime",
            points: 10
        },
        {
            question: "Which group is considered one of the pioneers of modern J-Pop idol groups?",
            options: ["SMAP", "Arashi", "KAT-TUN", "Hey! Say! JUMP"],
            correctAnswer: 0,
            category: "J-Pop & Anime",
            points: 10
        },
        {
            question: "Who composed the music for many Studio Ghibli films?",
            options: ["Yoko Kanno", "Joe Hisaishi", "Yoko Shimomura", "Nobuo Uematsu"],
            correctAnswer: 1,
            category: "J-Pop & Anime",
            points: 10
        },
        {
            question: "Which anime opening is performed by Asian Kung-Fu Generation?",
            options: ["Naruto - Haruka Kanata", "Bleach - After Dark", "Fullmetal Alchemist - Rewrite", "Death Note - What's Up People"],
            correctAnswer: 2,
            category: "J-Pop & Anime",
            points: 15
        },
        {
            question: "What is the name of the popular Japanese music show similar to American Bandstand?",
            options: ["Music Station", "CDTV", "Hey! Hey! Hey!", "All of the above"],
            correctAnswer: 3,
            category: "J-Pop & Anime",
            points: 10
        },
        {
            question: "Which J-Pop artist is known for the song 'First Love'?",
            options: ["Ayumi Hamasaki", "Hikaru Utada", "Namie Amuro", "BoA"],
            correctAnswer: 1,
            category: "J-Pop & Anime",
            points: 10
        },
        {
            question: "What is the largest music label in Japan?",
            options: ["Sony Music Japan", "Avex", "Johnny & Associates", "Universal Music Japan"],
            correctAnswer: 0,
            category: "J-Pop & Anime",
            points: 15
        },
        // NEW J-POP QUESTIONS
        {
            question: "Which anime features the song 'Tank!' by The Seatbelts?",
            options: ["Cowboy Bebop", "Samurai Champloo", "Space Dandy", "Trigun"],
            correctAnswer: 0,
            category: "J-Pop & Anime",
            points: 10
        },
        {
            question: "Who performed the theme song for 'Your Name' (Kimi no Na wa)?",
            options: ["RADWIMPS", "ONE OK ROCK", "L'Arc-en-Ciel", "X Japan"],
            correctAnswer: 0,
            category: "J-Pop & Anime",
            points: 10
        },
        {
            question: "Which J-Pop group is known for the song 'Love So Sweet'?",
            options: ["Arashi", "SMAP", "KAT-TUN", "NEWS"],
            correctAnswer: 0,
            category: "J-Pop & Anime",
            points: 10
        },
        {
            question: "What is the name of the virtual idol created by Crypton Future Media?",
            options: ["Hatsune Miku", "Kagamine Rin", "Megurine Luka", "All of the above"],
            correctAnswer: 3,
            category: "J-Pop & Anime",
            points: 10
        },
        {
            question: "Which anime opening song is performed by LiSA?",
            options: ["Demon Slayer - Gurenge", "Sword Art Online - Crossing Field", "Angel Beats - My Soul Your Beats", "All of the above"],
            correctAnswer: 3,
            category: "J-Pop & Anime",
            points: 10
        },
        {
            question: "Who is known as the 'Empress of J-Pop'?",
            options: ["Namie Amuro", "Ayumi Hamasaki", "Hikaru Utada", "Koda Kumi"],
            correctAnswer: 1,
            category: "J-Pop & Anime",
            points: 10
        },
        {
            question: "Which band performed 'Blue Bird' for Naruto Shippuden?",
            options: ["Ikimono Gakari", "FLOW", "Asian Kung-Fu Generation", "UVERworld"],
            correctAnswer: 0,
            category: "J-Pop & Anime",
            points: 10
        },
        {
            question: "What is the name of AKB48's signature song?",
            options: ["Heavy Rotation", "Koisuru Fortune Cookie", "Aitakatta", "All popular songs"],
            correctAnswer: 2,
            category: "J-Pop & Anime",
            points: 10
        },
        {
            question: "Which composer is famous for Final Fantasy music?",
            options: ["Nobuo Uematsu", "Koji Kondo", "Yasunori Mitsuda", "Yoko Shimomura"],
            correctAnswer: 0,
            category: "J-Pop & Anime",
            points: 10
        },
        {
            question: "What does 'Otaku' originally mean?",
            options: ["Anime fan", "Your house/home", "Obsessive fan", "Japanese person"],
            correctAnswer: 1,
            category: "J-Pop & Anime",
            points: 15
        },
        {
            question: "Which group is known for 'We Are!' the One Piece opening?",
            options: ["Hiroshi Kitadani", "BABYMETAL", "Perfume", "Kyary Pamyu Pamyu"],
            correctAnswer: 0,
            category: "J-Pop & Anime",
            points: 10
        },
        {
            question: "What is the phenomenon of synchronized dancing called in Japan?",
            options: ["Para Para", "Wotagei", "Aidoru", "Cosplay"],
            correctAnswer: 0,
            category: "J-Pop & Anime",
            points: 15
        },
        {
            question: "Which anime features music by Yoko Kanno?",
            options: ["Cowboy Bebop", "Ghost in the Shell SAC", "Macross Plus", "All of the above"],
            correctAnswer: 3,
            category: "J-Pop & Anime",
            points: 15
        },
        {
            question: "Who performed 'Butterfly' for Digimon Adventure?",
            options: ["Wada Koji", "Miyazaki Ayumi", "Takayoshi Tanimoto", "Ikuo"],
            correctAnswer: 0,
            category: "J-Pop & Anime",
            points: 15
        },
        {
            question: "What is the name of the annual J-Pop music festival?",
            options: ["Summer Sonic", "Rock in Japan", "Fuji Rock", "All of the above"],
            correctAnswer: 3,
            category: "J-Pop & Anime",
            points: 10
        }
    ],
    
    cpop: [
        // Original questions
        {
            question: "Who is known as the 'King of Mandopop'?",
            options: ["Andy Lau", "Jacky Cheung", "Aaron Kwok", "Leon Lai"],
            correctAnswer: 1,
            category: "C-Pop",
            points: 10
        },
        {
            question: "Which Taiwanese singer is known as the 'Queen of Mandopop'?",
            options: ["Teresa Teng", "Faye Wong", "Sandy Lam", "Coco Lee"],
            correctAnswer: 0,
            category: "C-Pop",
            points: 10
        },
        {
            question: "What does 'C-Pop' primarily refer to?",
            options: ["Chinese Pop", "Cantonese Pop", "Mandarin Pop", "All Chinese language pop music"],
            correctAnswer: 3,
            category: "C-Pop",
            points: 10
        },
        {
            question: "Which boy group is often called the 'Kings of C-Pop'?",
            options: ["F4", "5566", "Fahrenheit", "SpeXial"],
            correctAnswer: 0,
            category: "C-Pop",
            points: 10
        },
        {
            question: "Who sang the famous song 'The Moon Represents My Heart'?",
            options: ["Teresa Teng", "Faye Wong", "Sandy Lam", "Anita Mui"],
            correctAnswer: 0,
            category: "C-Pop",
            points: 10
        },
        {
            question: "Which streaming platform is most popular for C-Pop in China?",
            options: ["QQ Music", "NetEase Cloud Music", "Kugou", "All of the above"],
            correctAnswer: 3,
            category: "C-Pop",
            points: 10
        },
        {
            question: "What is the Chinese equivalent of the Grammy Awards?",
            options: ["Golden Melody Awards", "Chinese Music Awards", "CCTV-MTV Music Awards", "Sprite Music Awards"],
            correctAnswer: 0,
            category: "C-Pop",
            points: 15
        },
        {
            question: "Which Taiwanese drama boosted F4's popularity across Asia?",
            options: ["Meteor Garden", "Mars", "Lavender", "It Started with a Kiss"],
            correctAnswer: 0,
            category: "C-Pop",
            points: 10
        },
        {
            question: "Who is known for the hit song 'Love You'?",
            options: ["Kimberley Chen", "Jolin Tsai", "Rainie Yang", "Hebe Tien"],
            correctAnswer: 0,
            category: "C-Pop",
            points: 10
        },
        {
            question: "Which city is considered the center of Mandopop?",
            options: ["Beijing", "Shanghai", "Taipei", "Hong Kong"],
            correctAnswer: 2,
            category: "C-Pop",
            points: 10
        },
        // NEW C-POP QUESTIONS
        {
            question: "Which member of F4 is known as 'Dao Ming Si'?",
            options: ["Jerry Yan", "Vic Zhou", "Ken Chu", "Vanness Wu"],
            correctAnswer: 0,
            category: "C-Pop",
            points: 10
        },
        {
            question: "Who is known as the 'Asia's Dancing Queen'?",
            options: ["Jolin Tsai", "A-Mei", "Stefanie Sun", "Fish Leong"],
            correctAnswer: 0,
            category: "C-Pop",
            points: 10
        },
        {
            question: "Which Cantopop singer is known as the 'God of Songs'?",
            options: ["Jacky Cheung", "Andy Lau", "Leslie Cheung", "Alan Tam"],
            correctAnswer: 0,
            category: "C-Pop",
            points: 10
        },
        {
            question: "What is the name of Jay Chou's music style?",
            options: ["Chou Style", "Mandopop Fusion", "Chinese Hip-Hop", "All of the above"],
            correctAnswer: 3,
            category: "C-Pop",
            points: 10
        },
        {
            question: "Which singer is known for 'Mo Li Hua' (Jasmine Flower)?",
            options: ["Traditional folk song", "Faye Wong", "Teresa Teng", "Song Zuying"],
            correctAnswer: 0,
            category: "C-Pop",
            points: 15
        },
        {
            question: "Who is the lead singer of Mayday?",
            options: ["Ashin", "Monster", "Stone", "Masa"],
            correctAnswer: 0,
            category: "C-Pop",
            points: 10
        },
        {
            question: "Which Taiwanese girl group was popular in the 2000s?",
            options: ["S.H.E", "Twins", "At17", "2R"],
            correctAnswer: 0,
            category: "C-Pop",
            points: 10
        },
        {
            question: "What does 'Gan Bei' mean in Chinese culture?",
            options: ["Cheers/Bottoms up", "Thank you", "Goodbye", "Hello"],
            correctAnswer: 0,
            category: "C-Pop",
            points: 10
        },
        {
            question: "Which Chinese reality show is similar to American Idol?",
            options: ["Super Girl", "The Voice of China", "Sing! China", "All of the above"],
            correctAnswer: 3,
            category: "C-Pop",
            points: 10
        },
        {
            question: "Who is known as the 'Little Heavenly King'?",
            options: ["Jay Chou", "JJ Lin", "Leehom Wang", "All of the above"],
            correctAnswer: 3,
            category: "C-Pop",
            points: 10
        },
        {
            question: "Which Hong Kong singer is known for 'Monica'?",
            options: ["Leslie Cheung", "Andy Lau", "Jacky Cheung", "Alan Tam"],
            correctAnswer: 0,
            category: "C-Pop",
            points: 10
        },
        {
            question: "What is the Chinese music streaming giant?",
            options: ["Tencent Music", "NetEase Cloud Music", "Kugou Music", "All major platforms"],
            correctAnswer: 3,
            category: "C-Pop",
            points: 10
        },
        {
            question: "Which Taiwanese singer is known for 'Fairy Tale'?",
            options: ["Guang Liang", "JJ Lin", "Jay Chou", "Leehom Wang"],
            correctAnswer: 0,
            category: "C-Pop",
            points: 10
        },
        {
            question: "Who performed the theme song for 'Crouching Tiger, Hidden Dragon'?",
            options: ["CoCo Lee", "Faye Wong", "A-Mei", "Sandy Lam"],
            correctAnswer: 0,
            category: "C-Pop",
            points: 15
        },
        {
            question: "Which Chinese boy group gained international attention recently?",
            options: ["TFBOYS", "WayV", "INTO1", "All of the above"],
            correctAnswer: 3,
            category: "C-Pop",
            points: 10
        }
    ],
    
    dramas: [
        // Original questions
        {
            question: \
Which
Korean
drama
popularized
the
Korean Wave
globally?\,
            options: [\Winter
Sonata\, \Boys
Over
Flowers\, \My
Love
from
the
Star\, \Descendants
of
the
Sun\],
            correctAnswer: 0,
            category: \Asian
Dramas\,
            points: 10
        },
        {
            question: \Which
K-drama
features
a
North-South
Korea
romance?\,
            options: [\Crash
Landing
on
You\, \Secret
Garden\, \Descendants
of
the
Sun\, \Goblin\],
            correctAnswer: 0,
            category: \Asian
Dramas\,
            points: 10
        }
    ],
    
    movies: [
        {
            question: \Which
Korean
film
won
the
Academy
Award
for
Best
Picture?\,
            options: [\Oldboy\, \The
Handmaiden\, \Parasite\, \Burning\],
            correctAnswer: 2,
            category: \Asian
Cinema\,
            points: 10
        },
        {
            question: \Which
Japanese
director
is
known
for
Tokyo Story
?\,
            options: [\Yasujirō
Ozu\, \Akira
Kurosawa\, \Kenji
Mizoguchi\, \Mikio
Naruse\],
            correctAnswer: 0,
            category: \Asian
Cinema\,
            points: 15
        }
    ]
};
