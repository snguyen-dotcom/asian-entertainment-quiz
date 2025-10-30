// Asian Entertainment Quiz App
class QuizApp {
    constructor() {
        this.currentUser = null;
        this.currentQuiz = null;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.selectedAnswers = [];
        this.quizCategory = '';
        this.timeStarted = null;
        
        this.init();
    }

    init() {
        this.loadUsers();
        this.setupEventListeners();
        this.showScreen('authScreen');
    }

    // User Management
    loadUsers() {
        const users = localStorage.getItem('quizUsers');
        return users ? JSON.parse(users) : {};
    }

    saveUsers(users) {
        localStorage.setItem('quizUsers', JSON.stringify(users));
    }

    register(username, email, password) {
        const users = this.loadUsers();
        
        if (users[username]) {
            throw new Error('Username already exists');
        }

        users[username] = {
            username,
            email,
            password, // In production, this should be hashed
            scores: [],
            achievements: [],
            totalQuizzes: 0,
            bestScore: 0,
            joinDate: new Date().toISOString()
        };

        this.saveUsers(users);
        return users[username];
    }

    login(username, password) {
        const users = this.loadUsers();
        const user = users[username];

        if (!user || user.password !== password) {
            throw new Error('Invalid username or password');
        }

        this.currentUser = user;
        this.updateUserInterface();
        return user;
    }

    logout() {
        this.currentUser = null;
        this.showScreen('authScreen');
        document.getElementById('userInfo').style.display = 'none';
    }

    updateUserInterface() {
        if (this.currentUser) {
            document.getElementById('currentUser').textContent = this.currentUser.username;
            document.getElementById('userInfo').style.display = 'flex';
            this.updateHomeStats();
            this.updateProfileInfo();
        }
    }

    // Screen Management
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');

        // Update navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        const navMap = {
            'homeScreen': 'homeBtn',
            'quizScreen': 'quizBtn',
            'leaderboardScreen': 'leaderboardBtn',
            'profileScreen': 'profileBtn'
        };

        if (navMap[screenId]) {
            document.getElementById(navMap[screenId]).classList.add('active');
        }
    }

    // Event Listeners
    setupEventListeners() {
        // Auth tabs
        document.getElementById('loginTab').addEventListener('click', () => {
            this.showAuthForm('login');
        });

        document.getElementById('registerTab').addEventListener('click', () => {
            this.showAuthForm('register');
        });

        // Auth forms
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        document.getElementById('registerForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleRegister();
        });

        // Navigation
        document.getElementById('homeBtn').addEventListener('click', () => {
            this.showScreen('homeScreen');
        });

        document.getElementById('quizBtn').addEventListener('click', () => {
            this.showScreen('homeScreen'); // Show categories first
        });

        document.getElementById('leaderboardBtn').addEventListener('click', () => {
            this.showScreen('leaderboardScreen');
            this.loadLeaderboard();
        });

        document.getElementById('profileBtn').addEventListener('click', () => {
            this.showScreen('profileScreen');
        });

        document.getElementById('logoutBtn').addEventListener('click', () => {
            this.logout();
        });

        // Category selection
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                const category = card.dataset.category;
                this.startQuiz(category);
            });
        });

        // Quiz controls
        document.getElementById('nextBtn').addEventListener('click', () => {
            this.nextQuestion();
        });

        document.getElementById('finishBtn').addEventListener('click', () => {
            this.finishQuiz();
        });

        // Results actions
        document.getElementById('playAgainBtn').addEventListener('click', () => {
            this.showScreen('homeScreen');
        });

        document.getElementById('homeFromResultsBtn').addEventListener('click', () => {
            this.showScreen('homeScreen');
        });

        document.getElementById('viewLeaderboardBtn').addEventListener('click', () => {
            this.showScreen('leaderboardScreen');
            this.loadLeaderboard();
        });

        // Leaderboard filter
        document.getElementById('categoryFilter').addEventListener('change', () => {
            this.loadLeaderboard();
        });
    }

    showAuthForm(type) {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const loginTab = document.getElementById('loginTab');
        const registerTab = document.getElementById('registerTab');

        if (type === 'login') {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
            loginTab.classList.add('active');
            registerTab.classList.remove('active');
        } else {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
            loginTab.classList.remove('active');
            registerTab.classList.add('active');
        }
    }

    handleLogin() {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        try {
            this.login(username, password);
            this.showScreen('homeScreen');
        } catch (error) {
            alert(error.message);
        }
    }

    handleRegister() {
        const username = document.getElementById('registerUsername').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }

        try {
            this.register(username, email, password);
            this.login(username, password);
            this.showScreen('homeScreen');
        } catch (error) {
            alert(error.message);
        }
    }

    updateHomeStats() {
        if (!this.currentUser) return;

        document.getElementById('userHighScore').textContent = this.currentUser.bestScore || 0;
        document.getElementById('userQuizzesTaken').textContent = this.currentUser.totalQuizzes || 0;
        
        // Calculate rank
        const users = this.loadUsers();
        const userScores = Object.values(users)
            .map(user => user.bestScore || 0)
            .sort((a, b) => b - a);
        
        const userRank = userScores.indexOf(this.currentUser.bestScore || 0) + 1;
        document.getElementById('userRank').textContent = userRank > 0 ? `#${userRank}` : '-';
    }

    updateProfileInfo() {
        if (!this.currentUser) return;

        document.getElementById('profileUsername').textContent = this.currentUser.username;
        document.getElementById('profileEmail').textContent = this.currentUser.email;
        document.getElementById('profileHighScore').textContent = this.currentUser.bestScore || 0;
        document.getElementById('profileQuizzesTaken').textContent = this.currentUser.totalQuizzes || 0;

        // Calculate average accuracy
        const totalQuestions = this.currentUser.scores.reduce((sum, score) => sum + score.totalQuestions, 0);
        const correctAnswers = this.currentUser.scores.reduce((sum, score) => sum + score.correctAnswers, 0);
        const avgAccuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
        document.getElementById('profileAvgAccuracy').textContent = `${avgAccuracy}%`;

        // Update badge
        let badge = 'Beginner';
        if (this.currentUser.bestScore >= 80) badge = 'Expert';
        else if (this.currentUser.bestScore >= 60) badge = 'Advanced';
        else if (this.currentUser.bestScore >= 40) badge = 'Intermediate';
        
        document.getElementById('profileBadge').textContent = badge;

        this.updateAchievements();
    }

    updateAchievements() {
        const achievementsGrid = document.getElementById('achievementsGrid');
        achievementsGrid.innerHTML = '';

        const achievements = [
            { id: 'first_quiz', name: 'First Steps', icon: '🎯', condition: () => this.currentUser.totalQuizzes >= 1 },
            { id: 'quiz_master', name: 'Quiz Master', icon: '🏆', condition: () => this.currentUser.totalQuizzes >= 10 },
            { id: 'perfect_score', name: 'Perfect Score', icon: '⭐', condition: () => this.currentUser.bestScore >= 100 },
            { id: 'high_scorer', name: 'High Scorer', icon: '🔥', condition: () => this.currentUser.bestScore >= 80 },
            { id: 'dedicated', name: 'Dedicated', icon: '💪', condition: () => this.currentUser.totalQuizzes >= 25 }
        ];

        achievements.forEach(achievement => {
            const earned = achievement.condition();
            const badge = document.createElement('div');
            badge.className = `achievement-badge ${earned ? 'earned' : ''}`;
            badge.innerHTML = `
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-name">${achievement.name}</div>
            `;
            achievementsGrid.appendChild(badge);
        });
    }
}
