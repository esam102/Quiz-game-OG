// Database holding 10 distinct questions per quiz category
const quizDatabase = {
    'one-piece': [
        { q: "Who is the captain of the Straw Hat Pirates?", a: ["Zoro", "Luffy", "Sanji", "Nami"], correct: 1 },
        { q: "What is Luffy's ultimate dream?", a: ["Find All Blue", "Become Pirate King", "Defeat Akainu", "Collect Gold"], correct: 1 },
        { q: "Which Devil Fruit did Luffy eat?", a: ["Flame-Flame Fruit", "Chop-Chop Fruit", "Gum-Gum Fruit", "Dark-Dark Fruit"], correct: 2 },
        { q: "Who was the first crew member to officially join Luffy?", a: ["Nami", "Usopp", "Zoro", "Chopper"], correct: 2 },
        { q: "What is the name of the Straw Hat's second, current main ship?", a: ["Going Merry", "Thousand Sunny", "Red Force", "Oro Jackson"], correct: 1 },
        { q: "Which crew member is a skeleton and a musician?", a: ["Franky", "Jinbe", "Brook", "Usopp"], correct: 2 },
        { q: "What is Sanji's exact profession on the crew?", a: ["Cook", "Doctor", "Navigator", "Sniper"], correct: 0 },
        { q: "Who handed down the iconic Straw Hat to Luffy?", a: ["Garp", "Shanks", "Ace", "Rayleigh"], correct: 1 },
        { q: "Which sea did Luffy set sail from originally?", a: ["Grand Line", "West Blue", "North Blue", "East Blue"], correct: 3 },
        { q: "Which powerful marine is Luffy's biological grandfather?", a: ["Sengoku", "Koby", "Garp", "Akainu"], correct: 2 }
    ],
    'anime-general': [
        { q: "In Dragon Ball Z, what planet is Goku originally from?", a: ["Earth", "Namek", "Vegeta", "Sadala"], correct: 2 },
        { q: "Who is the main protagonist of Naruto?", a: ["Sasuke", "Kakashi", "Naruto", "Gaara"], correct: 2 },
        { q: "What item grants control over life and death in Death Note?", a: ["A Scythe", "A Notebook", "A Ring", "An Amulet"], correct: 1 },
        { q: "In Attack on Titan, what secret entities are inside the walls?", a: ["Monsters", "Titans", "Cannons", "Gold"], correct: 1 },
        { q: "What system of magic/science is featured in Fullmetal Alchemist?", a: ["Chakra", "Alchemy", "Nen", "Mana"], correct: 1 },
        { q: "Who holds the title of 'Symbol of Peace' in My Hero Academia?", a: ["Endeavor", "Deku", "All Might", "Bakugo"], correct: 2 },
        { q: "What sport is central to the anime Haikyuu!!?", a: ["Basketball", "Soccer", "Tennis", "Volleyball"], correct: 3 },
        { q: "What is Saitama's official hero name in One Punch Man?", a: ["Caped Baldy", "Silver Fang", "Genos", "Blast"], correct: 0 },
        { q: "In Demon Slayer, what is Tanjiro's younger sister's name?", a: ["Shinobu", "Nezuko", "Kanae", "Tamayo"], correct: 1 },
        { q: "What game utilizes card battles in Yu-Gi-Oh?", a: ["Magic", "Hearthstone", "Duel Monsters", "Poker"], correct: 2 }
    ],
    'gaming': [
        { q: "Who serves as Nintendo's primary mascot?", a: ["Sonic", "Link", "Mario", "Kirby"], correct: 2 },
        { q: "Which sandbox game features the 'Ender Dragon'?", a: ["Terraria", "Minecraft", "Roblox", "Fortnite"], correct: 1 },
        { q: "What is the highest-selling video game console of all time?", a: ["PS4", "Nintendo DS", "PlayStation 2", "Xbox 360"], correct: 2 },
        { q: "What is the protagonist hero's name in The Legend of Zelda?", a: ["Zelda", "Link", "Ganon", "Epona"], correct: 1 },
        { q: "Which Battle Royale game features the location 'Tilted Towers'?", a: ["Apex Legends", "PUBG", "Fortnite", "Warzone"], correct: 2 },
        { q: "In classic Pac-Man, how many ghosts chase you?", a: ["2", "3", "4", "5"], correct: 2 },
        { q: "What tech giant company manufactures the Xbox?", a: ["Sony", "Nintendo", "Microsoft", "Sega"], correct: 2 },
        { q: "What underwater dystopian city serves as the setting for BioShock?", a: ["Rapture", "Columbia", "Gotham", "Tamriel"], correct: 0 },
        { q: "Which sci-fi military shooter stars the Master Chief?", a: ["Doom", "Halo", "Gears of War", "Destiny"], correct: 1 },
        { q: "What year did the original PlayStation console launch in Japan?", a: ["1990", "1994", "1998", "2000"], correct: 1 }
    ],
    'movies': [
        { q: "Which movie features the famous line 'I am your father'?", a: ["Star Trek", "The Empire Strikes Back", "The Matrix", "Lord of the Rings"], correct: 1 },
        { q: "What is the highest-grossing film of all time (as of 2024)?", a: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"], correct: 0 },
        { q: "In the Harry Potter series, what is the name of the wizard prison?", a: ["Azkaban", "Hogwarts", "Gringotts", "Durmstrang"], correct: 0 },
        { q: "Which actor plays Iron Man in the Marvel Cinematic Universe?", a: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"], correct: 2 },
        { q: "What is the name of the fictional continent where Game of Thrones primarily takes place?", a: ["Middle-earth", "Narnia", "Westeros", "Pandora"], correct: 2 },
        { q: "In The Matrix, what color pill does Neo take?", a: ["Blue", "Red", "Green", "Yellow"], correct: 1 },
        { q: "Who directed the mind-bending movie 'Inception'?", a: ["Steven Spielberg", "Quentin Tarantino", "Martin Scorsese", "Christopher Nolan"], correct: 3 },
        { q: "Which animated Disney movie features a character named Simba?", a: ["Aladdin", "Mulan", "The Lion King", "Tarzan"], correct: 2 },
        { q: "In the television show 'Breaking Bad', what is Walter White's alias?", a: ["Heisenberg", "Scarface", "The Joker", "Batman"], correct: 0 },
        { q: "What is the name of the magical land in 'The Lord of the Rings'?", a: ["Narnia", "Westeros", "Middle-earth", "Hogwarts"], correct: 2 }
    ]
};

// Game State Tracking
let activeQuestions = [];
let currentQuestionIndex = 0;
let userScore = 0;
let isAnswering = false; // blocks double-clicks while feedback is showing

// Starts a selected quiz
function startQuiz(quizKey) {
    activeQuestions = quizDatabase[quizKey];
    currentQuestionIndex = 0;
    userScore = 0;

    // Switch Screens
    document.getElementById('selector-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');

    loadQuestion();
}

// Renders the current question and option buttons
function loadQuestion() {
    isAnswering = false;
    const currentQuestion = activeQuestions[currentQuestionIndex];

    // Update Header Status
    document.getElementById('progress-text').innerText = `Vraag ${currentQuestionIndex + 1} / ${activeQuestions.length}`;
    document.getElementById('score-text').innerText = `Score: ${userScore}`;

    // Set Question Title
    document.getElementById('question-text').innerText = currentQuestion.q;

    // Clear old buttons and generate new ones
    const container = document.getElementById('options-container');
    container.innerHTML = "";

    currentQuestion.a.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.innerText = optionText;
        button.classList.add('option-btn');
        button.onclick = () => checkAnswer(index, button);
        container.appendChild(button);
    });
}

// Processes answer validation, shows correct/wrong feedback, then advances
function checkAnswer(selectedIndex, buttonEl) {
    if (isAnswering) return;
    isAnswering = true;

    const currentQuestion = activeQuestions[currentQuestionIndex];
    const allButtons = document.querySelectorAll('#options-container .option-btn');
    const isCorrect = selectedIndex === currentQuestion.correct;

    if (isCorrect) {
        userScore++;
        document.getElementById('score-text').innerText = `Score: ${userScore}`;
    }

    // Reveal correct answer and mark the pick, then lock the options
    allButtons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === currentQuestion.correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex) {
            btn.classList.add('wrong');
        }
    });

    // Brief pause so the player sees the result before moving on
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < activeQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 900);
}

// Switches to final score screen
function showResults() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.remove('hidden');
    document.getElementById('final-score-text').innerText = `Je scoorde ${userScore} van de ${activeQuestions.length}`;
}

// Resets back to home dashboard
function resetGame() {
    document.getElementById('results-screen').classList.add('hidden');
    document.getElementById('selector-screen').classList.remove('hidden');
}
