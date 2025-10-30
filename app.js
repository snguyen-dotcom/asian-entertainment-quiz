// Complete Asian Entertainment Quiz App JavaScript

// Quiz Management Methods
QuizApp.prototype.startQuiz = function(category) {
    this.quizCategory = category;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.selectedAnswers = [];
    this.timeStarted = Date.now();
    
    this.currentQuiz = this.getQuizQuestions(category);
    this.showScreen('quizScreen');
    this.displayQuestion();
};

QuizApp.prototype.getQuizQuestions = function(category) {
    let questions = [];

    if (category === 'mixed') {
        // Mix questions from all categories
        Object.values(QUESTIONS_DATABASE).forEach(categoryQuestions => {
            questions = questions.concat(categoryQuestions);
        });
        questions = this.shuffleArray(questions).slice(0, 15);
    } else {
        questions = QUESTIONS_DATABASE[category] || [];
        questions = this.shuffleArray(questions).slice(0, 10);
    }

    return questions;
};

QuizApp.prototype.shuffleArray = function(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

QuizApp.prototype.displayQuestion = function() {
    const question = this.currentQuiz[this.currentQuestionIndex];
    const totalQuestions = this.currentQuiz.length;
    
    // Update progress
    const progress = ((this.currentQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `Question ${this.currentQuestionIndex + 1} of ${totalQuestions}`;
    
    // Update score
    document.getElementById('currentScore').textContent = this.score;
    
    // Display question
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('questionCategory').textContent = question.category;
    
    // Display answers
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        answerDiv.textContent = option;
        answerDiv.addEventListener('click', () => this.selectAnswer(index));
        answersContainer.appendChild(answerDiv);
    });
    
    // Hide next/finish buttons
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('finishBtn').style.display = 'none';
};

QuizApp.prototype.selectAnswer = function(selectedIndex) {
    const question = this.currentQuiz[this.currentQuestionIndex];
    const answerOptions = document.querySelectorAll('.answer-option');
    
    // Remove previous selections
    answerOptions.forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Mark selected answer
    answerOptions[selectedIndex].classList.add('selected');
    
    // Check if correct
    const isCorrect = selectedIndex === question.correctAnswer;
    if (isCorrect) {
        answerOptions[selectedIndex].classList.add('correct');
        this.score += question.points || 10;
    } else {
        answerOptions[selectedIndex].classList.add('incorrect');
        answerOptions[question.correctAnswer].classList.add('correct');
    }
    
    // Store answer
    this.selectedAnswers.push({
        questionIndex: this.currentQuestionIndex,
        selectedAnswer: selectedIndex,
        correctAnswer: question.correctAnswer,
        isCorrect: isCorrect,
        points: isCorrect ? (question.points || 10) : 0
    });
    
    // Show next/finish button
    if (this.currentQuestionIndex < this.currentQuiz.length - 1) {
        document.getElementById('nextBtn').style.display = 'block';
    } else {
        document.getElementById('finishBtn').style.display = 'block';
    }
    
    // Update score display
    document.getElementById('currentScore').textContent = this.score;
};

QuizApp.prototype.nextQuestion = function() {
    this.currentQuestionIndex++;
    this.displayQuestion();
};

QuizApp.prototype.finishQuiz = function() {
    const totalQuestions = this.currentQuiz.length;
    const correctAnswers = this.selectedAnswers.filter(answer => answer.isCorrect).length;
    const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
    const timeSpent = Math.round((Date.now() - this.timeStarted) / 1000);
    
    // Save score to user profile
    const quizResult = {
        category: this.quizCategory,
        score: this.score,
        totalQuestions: totalQuestions,
        correctAnswers: correctAnswers,
        accuracy: accuracy,
        timeSpent: timeSpent,
        date: new Date().toISOString()
    };
    
    this.currentUser.scores.push(quizResult);
    this.currentUser.totalQuizzes++;
    
    if (this.score > this.currentUser.bestScore) {
        this.currentUser.bestScore = this.score;
    }
    
    // Save updated user data
    const users = this.loadUsers();
    users[this.currentUser.username] = this.currentUser;
    this.saveUsers(users);
    
    // Show results
    this.showResults(quizResult);
};

QuizApp.prototype.showResults = function(result) {
    this.showScreen('resultsScreen');
    
    // Update results display
    document.getElementById('finalScore').textContent = result.score;
    document.getElementById('correctAnswers').textContent = `${result.correctAnswers}/${result.totalQuestions}`;
    document.getElementById('accuracy').textContent = `${result.accuracy}%`;
    
    // Update results message based on performance
    let message = '';
    let icon = 'fas fa-trophy';
    
    if (result.accuracy >= 90) {
        message = 'Outstanding! You\'re an Asian entertainment expert!';
        icon = 'fas fa-crown';
    } else if (result.accuracy >= 75) {
        message = 'Excellent work! You know your Asian entertainment well!';
        icon = 'fas fa-trophy';
    } else if (result.accuracy >= 60) {
        message = 'Good job! Keep learning about Asian entertainment!';
        icon = 'fas fa-medal';
    } else {
        message = 'Nice try! There\'s always room to learn more!';
        icon = 'fas fa-star';
    }
    
    document.getElementById('resultsMessage').textContent = message;
    document.getElementById('resultsIcon').className = icon;
};

QuizApp.prototype.loadLeaderboard = function() {
    const users = this.loadUsers();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const leaderboardList = document.getElementById('leaderboardList');
    
    // Get all scores
    let allScores = [];
    Object.values(users).forEach(user => {
        user.scores.forEach(score => {
            if (categoryFilter === 'all' || score.category === categoryFilter) {
                allScores.push({
                    username: user.username,
                    score: score.score,
                    category: score.category,
                    accuracy: score.accuracy,
                    date: score.date
                });
            }
        });
    });
    
    // Sort by score (highest first)
    allScores.sort((a, b) => b.score - a.score);
    
    // Display leaderboard
    leaderboardList.innerHTML = '';
    
    if (allScores.length === 0) {
        leaderboardList.innerHTML = '<div class="no-scores">No scores available for this category.</div>';
        return;
    }
    
    allScores.slice(0, 20).forEach((entry, index) => {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'leaderboard-entry';
        
        if (this.currentUser && entry.username === this.currentUser.username) {
            entryDiv.classList.add('current-user');
        }
        
        const rank = index + 1;
        let rankClass = '';
        if (rank === 1) rankClass = 'gold';
        else if (rank === 2) rankClass = 'silver';
        else if (rank === 3) rankClass = 'bronze';
        
        entryDiv.innerHTML = `
            <div class="leaderboard-rank ${rankClass}">#${rank}</div>
            <div class="leaderboard-info">
                <div class="leaderboard-name">${entry.username}</div>
                <div class="leaderboard-category">${this.getCategoryDisplayName(entry.category)} • ${entry.accuracy}% accuracy</div>
            </div>
            <div class="leaderboard-score">${entry.score}</div>
        `;
        
        leaderboardList.appendChild(entryDiv);
    });
};

QuizApp.prototype.getCategoryDisplayName = function(category) {
    const categoryNames = {
        'kpop': 'K-Pop',
        'jpop': 'J-Pop & Anime',
        'cpop': 'C-Pop',
        'dramas': 'Asian Dramas',
        'movies': 'Asian Cinema',
        'mixed': 'Mixed Challenge'
    };
    return categoryNames[category] || category;
};
