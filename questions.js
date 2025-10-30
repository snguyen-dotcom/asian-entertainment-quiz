// Asian Entertainment Quiz Questions Database
const QUESTIONS_DATABASE = {
    kpop: [
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
        }
    ],
    
    jpop: [
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
        }
    ],
    
    cpop: [
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
        }
    ],
    
    dramas: [
        {
            question: "Which Korean drama popularized the 'Korean Wave' globally?",
            options: ["Winter Sonata", "Boys Over Flowers", "My Love from the Star", "Descendants of the Sun"],
            correctAnswer: 0,
            category: "Asian Dramas",
            points: 10
        },
        {
            question: "What does 'K-Drama' stand for?",
            options: ["Korean Drama", "Korea Drama", "Korean TV Drama", "All of the above"],
            correctAnswer: 3,
            category: "Asian Dramas",
            points: 10
        },
        {
            question: "Which streaming platform made Korean dramas globally accessible?",
            options: ["Viki", "DramaFever", "Netflix", "All of the above"],
            correctAnswer: 3,
            category: "Asian Dramas",
            points: 10
        },
        {
            question: "What is the typical length of a Korean drama episode?",
            options: ["30 minutes", "45 minutes", "60-70 minutes", "90 minutes"],
            correctAnswer: 2,
            category: "Asian Dramas",
            points: 10
        },
        {
            question: "Which Japanese drama genre focuses on workplace stories?",
            options: ["Dorama", "Trendy Drama", "Morning Drama", "All of the above"],
            correctAnswer: 1,
            category: "Asian Dramas",
            points: 10
        },
        {
            question: "What is the Chinese equivalent of Korean dramas called?",
            options: ["C-Drama", "Chinese Drama", "Mainland Drama", "All of the above"],
            correctAnswer: 3,
            category: "Asian Dramas",
            points: 10
        },
        {
            question: "Which Korean drama won an Emmy Award?",
            options: ["Squid Game", "Kingdom", "Crash Landing on You", "Parasite"],
            correctAnswer: 0,
            category: "Asian Dramas",
            points: 15
        },
        {
            question: "What is the most popular drama streaming service in Asia?",
            options: ["Viu", "iQiyi", "Netflix", "WeTV"],
            correctAnswer: 2,
            category: "Asian Dramas",
            points: 10
        },
        {
            question: "Which Thai drama genre is known for dramatic storylines?",
            options: ["Lakorn", "BL Drama", "Rom-Com", "Historical Drama"],
            correctAnswer: 0,
            category: "Asian Dramas",
            points: 10
        },
        {
            question: "What does 'OST' stand for in drama context?",
            options: ["Original Sound Track", "Official Song Title", "Opening Song Theme", "Original Series Theme"],
            correctAnswer: 0,
            category: "Asian Dramas",
            points: 10
        }
    ],
    
    movies: [
        {
            question: "Which Korean film won the Academy Award for Best Picture?",
            options: ["Oldboy", "The Handmaiden", "Parasite", "Burning"],
            correctAnswer: 2,
            category: "Asian Cinema",
            points: 10
        },
        {
            question: "Who directed the film 'Seven Samurai'?",
            options: ["Akira Kurosawa", "Yasujirō Ozu", "Kenji Mizoguchi", "Masaki Kobayashi"],
            correctAnswer: 0,
            category: "Asian Cinema",
            points: 10
        },
        {
            question: "Which Hong Kong actor is known as the 'King of Comedy'?",
            options: ["Jackie Chan", "Stephen Chow", "Chow Yun-fat", "Tony Leung"],
            correctAnswer: 1,
            category: "Asian Cinema",
            points: 10
        },
        {
            question: "What is the highest-grossing Asian film of all time?",
            options: ["Your Name", "Spirited Away", "Wolf Warrior 2", "The Battle at Lake Changjin"],
            correctAnswer: 3,
            category: "Asian Cinema",
            points: 15
        },
        {
            question: "Which director is known for films like 'In the Mood for Love'?",
            options: ["John Woo", "Wong Kar-wai", "Tsui Hark", "Johnnie To"],
            correctAnswer: 1,
            category: "Asian Cinema",
            points: 10
        },
        {
            question: "What is the Japanese film industry commonly called?",
            options: ["J-Cinema", "Japanese Cinema", "Nihon Eiga", "All of the above"],
            correctAnswer: 3,
            category: "Asian Cinema",
            points: 10
        },
        {
            question: "Which Studio Ghibli film won the Academy Award for Best Animated Feature?",
            options: ["My Neighbor Totoro", "Princess Mononoke", "Spirited Away", "Howl's Moving Castle"],
            correctAnswer: 2,
            category: "Asian Cinema",
            points: 10
        },
        {
            question: "Who is known as the 'Godfather of Hong Kong Cinema'?",
            options: ["Bruce Lee", "Jackie Chan", "John Woo", "Run Run Shaw"],
            correctAnswer: 3,
            category: "Asian Cinema",
            points: 15
        },
        {
            question: "Which Thai film won the Palme d'Or at Cannes?",
            options: ["Uncle Boonmee", "Tropical Malady", "Blissfully Yours", "Cemetery of Splendour"],
            correctAnswer: 0,
            category: "Asian Cinema",
            points: 15
        },
        {
            question: "What does 'Wuxia' refer to in Chinese cinema?",
            options: ["Martial arts films", "Historical dramas", "Fantasy films", "All of the above"],
            correctAnswer: 0,
            category: "Asian Cinema",
            points: 10
        }
    ]
};
