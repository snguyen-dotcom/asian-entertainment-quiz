// Admin System for Asian Entertainment Quiz App

class AdminSystem {
    constructor(quizApp) {
        this.app = quizApp;
        this.adminPassword = 'admin2024!'; // Change this to your preferred password
        this.isAdminLoggedIn = false;
        this.setupAdminInterface();
    }

    setupAdminInterface() {
        // Add admin button to navigation (hidden by default)
        const navMenu = document.querySelector('.nav-menu');
        const adminBtn = document.createElement('button');
        adminBtn.id = 'adminBtn';
        adminBtn.className = 'nav-btn admin-btn';
        adminBtn.style.display = 'none';
        adminBtn.innerHTML = '<i class="fas fa-cog"></i> Admin';
        adminBtn.addEventListener('click', () => this.showAdminPanel());
        navMenu.appendChild(adminBtn);

        // Add admin login modal
        this.createAdminModal();
        
        // Add admin panel
        this.createAdminPanel();

        // Add admin access button (visible to everyone) - with proper timing
        this.addAdminAccessButton();
    }

    addAdminAccessButton() {
        // Function to add the button when DOM is ready
        const addButton = () => {
            const authContainer = document.querySelector('.auth-container');
            if (!authContainer) {
                setTimeout(addButton, 100); // Retry if container not found
                return;
            }

            // Check if button already exists
            if (document.getElementById('adminAccessBtn')) {
                return;
            }

            // Create admin access button container
            const adminAccess = document.createElement('div');
            adminAccess.className = 'admin-access-login';
            adminAccess.innerHTML = `
                <button id="adminAccessBtn" class="admin-access-btn-login" title="Admin Access">
                    <i class="fas fa-key"></i> Admin Access
                </button>
            `;
            adminAccess.style.cssText = `
                text-align: center;
                margin-top: 1.5rem;
                padding-top: 1rem;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            `;

            // Insert at the end of the auth container (after both forms)
            authContainer.appendChild(adminAccess);

            // Add event listener
            document.getElementById('adminAccessBtn').addEventListener('click', () => {
                this.showAdminLogin();
            });
        };

        // Try to add button when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', addButton);
        } else {
            // DOM is already loaded, try immediately and with retries
            addButton();
        }
    }

    createAdminModal() {
        const modal = document.createElement('div');
        modal.id = 'adminModal';
        modal.className = 'admin-modal';
        modal.innerHTML = `
            <div class="admin-modal-content">
                <div class="admin-modal-header">
                    <h2><i class="fas fa-shield-alt"></i> Admin Login</h2>
                    <button class="admin-close" id="closeAdminModal">&times;</button>
                </div>
                <div class="admin-modal-body">
                    <form id="adminLoginForm">
                        <div class="form-group">
                            <i class="fas fa-lock"></i>
                            <input type="password" id="adminPasswordInput" placeholder="Admin Password" required>
                        </div>
                        <button type="submit" class="admin-btn">
                            <i class="fas fa-sign-in-alt"></i> Login as Admin
                        </button>
                    </form>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Event listeners
        document.getElementById('closeAdminModal').addEventListener('click', () => {
            this.hideAdminLogin();
        });

        document.getElementById('adminLoginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleAdminLogin();
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.hideAdminLogin();
            }
        });
    }

    createAdminPanel() {
        const adminScreen = document.createElement('div');
        adminScreen.id = 'adminScreen';
        adminScreen.className = 'screen';
        adminScreen.innerHTML = `
            <div class="admin-container">
                <div class="admin-header">
                    <h1><i class="fas fa-cog"></i> Admin Panel</h1>
                    <button id="adminLogoutBtn" class="admin-logout-btn">
                        <i class="fas fa-sign-out-alt"></i> Logout
                    </button>
                </div>

                <div class="admin-stats-grid">
                    <div class="admin-stat-card">
                        <i class="fas fa-users"></i>
                        <div class="stat-info">
                            <span class="stat-number" id="totalUsers">0</span>
                            <span class="stat-label">Total Users</span>
                        </div>
                    </div>
                    <div class="admin-stat-card">
                        <i class="fas fa-chart-line"></i>
                        <div class="stat-info">
                            <span class="stat-number" id="totalQuizzes">0</span>
                            <span class="stat-label">Total Quizzes Taken</span>
                        </div>
                    </div>
                    <div class="admin-stat-card">
                        <i class="fas fa-trophy"></i>
                        <div class="stat-info">
                            <span class="stat-number" id="highestScore">0</span>
                            <span class="stat-label">Highest Score</span>
                        </div>
                    </div>
                </div>

                <div class="admin-actions">
                    <div class="admin-section">
                        <h3><i class="fas fa-database"></i> Data Management</h3>
                        <div class="admin-buttons">
                            <button id="resetAllScoresBtn" class="admin-action-btn danger">
                                <i class="fas fa-trash-alt"></i> Reset All Scores
                            </button>
                            <button id="resetLeaderboardBtn" class="admin-action-btn danger">
                                <i class="fas fa-list"></i> Clear Leaderboard
                            </button>
                            <button id="deleteAllUsersBtn" class="admin-action-btn danger">
                                <i class="fas fa-users-slash"></i> Delete All Users
                            </button>
                        </div>
                    </div>

                    <div class="admin-section">
                        <h3><i class="fas fa-download"></i> Data Export/Import</h3>
                        <div class="admin-buttons">
                            <button id="exportDataBtn" class="admin-action-btn">
                                <i class="fas fa-download"></i> Export All Data
                            </button>
                            <button id="importDataBtn" class="admin-action-btn">
                                <i class="fas fa-upload"></i> Import Data
                            </button>
                            <input type="file" id="importFileInput" accept=".json" style="display: none;">
                        </div>
                    </div>

                    <div class="admin-section">
                        <h3><i class="fas fa-users-cog"></i> User Management</h3>
                        <div class="user-list" id="adminUserList">
                            <!-- User list will be populated here -->
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.querySelector('.app-container').appendChild(adminScreen);

        // Add event listeners
        this.setupAdminEventListeners();
    }

    setupAdminEventListeners() {
        document.getElementById('adminLogoutBtn').addEventListener('click', () => {
            this.adminLogout();
        });

        document.getElementById('resetAllScoresBtn').addEventListener('click', () => {
            this.resetAllScores();
        });

        document.getElementById('resetLeaderboardBtn').addEventListener('click', () => {
            this.resetLeaderboard();
        });

        document.getElementById('deleteAllUsersBtn').addEventListener('click', () => {
            this.deleteAllUsers();
        });

        document.getElementById('exportDataBtn').addEventListener('click', () => {
            this.exportData();
        });

        document.getElementById('importDataBtn').addEventListener('click', () => {
            document.getElementById('importFileInput').click();
        });

        document.getElementById('importFileInput').addEventListener('change', (e) => {
            this.importData(e.target.files[0]);
        });
    }

    showAdminLogin() {
        document.getElementById('adminModal').style.display = 'flex';
        document.getElementById('adminPasswordInput').focus();
    }

    hideAdminLogin() {
        document.getElementById('adminModal').style.display = 'none';
        document.getElementById('adminPasswordInput').value = '';
    }

    handleAdminLogin() {
        const password = document.getElementById('adminPasswordInput').value;
        
        if (password === this.adminPassword) {
            this.isAdminLoggedIn = true;
            this.hideAdminLogin();
            this.showAdminButton();
            this.showAdminPanel();
            this.updateAdminStats();
            alert('✅ Admin login successful!');
        } else {
            alert('❌ Invalid admin password!');
            document.getElementById('adminPasswordInput').value = '';
        }
    }

    showAdminButton() {
        document.getElementById('adminBtn').style.display = 'block';
    }

    hideAdminButton() {
        document.getElementById('adminBtn').style.display = 'none';
    }

    showAdminPanel() {
        if (!this.isAdminLoggedIn) {
            this.showAdminLogin();
            return;
        }

        this.app.showScreen('adminScreen');
        this.updateAdminStats();
        this.loadUserList();
    }

    adminLogout() {
        this.isAdminLoggedIn = false;
        this.hideAdminButton();
        this.app.showScreen('homeScreen');
        alert('👋 Admin logged out successfully!');
    }

    updateAdminStats() {
        const users = this.app.loadUsers();
        const userArray = Object.values(users);
        
        // Total users
        document.getElementById('totalUsers').textContent = userArray.length;
        
        // Total quizzes
        const totalQuizzes = userArray.reduce((sum, user) => sum + (user.totalQuizzes || 0), 0);
        document.getElementById('totalQuizzes').textContent = totalQuizzes;
        
        // Highest score
        const highestScore = userArray.reduce((max, user) => Math.max(max, user.bestScore || 0), 0);
        document.getElementById('highestScore').textContent = highestScore;
    }

    loadUserList() {
        const users = this.app.loadUsers();
        const userList = document.getElementById('adminUserList');
        userList.innerHTML = '';

        Object.values(users).forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.className = 'admin-user-item';
            userDiv.innerHTML = `
                <div class="user-info">
                    <strong>${user.username}</strong>
                    <span>${user.email}</span>
                    <small>Best Score: ${user.bestScore || 0} | Quizzes: ${user.totalQuizzes || 0}</small>
                </div>
                <div class="user-actions">
                    <button onclick="adminSystem.resetUserScores('${user.username}')" class="mini-btn">
                        <i class="fas fa-undo"></i> Reset Scores
                    </button>
                    <button onclick="adminSystem.deleteUser('${user.username}')" class="mini-btn danger">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            `;
            userList.appendChild(userDiv);
        });
    }

    resetAllScores() {
        if (!confirm('⚠️ Are you sure you want to reset ALL user scores? This cannot be undone!')) {
            return;
        }

        const users = this.app.loadUsers();
        Object.keys(users).forEach(username => {
            users[username].scores = [];
            users[username].bestScore = 0;
            users[username].totalQuizzes = 0;
        });

        this.app.saveUsers(users);
        this.updateAdminStats();
        this.loadUserList();
        alert('✅ All scores have been reset!');
    }

    resetLeaderboard() {
        this.resetAllScores(); // Same as resetting all scores
    }

    deleteAllUsers() {
        if (!confirm('⚠️ Are you sure you want to delete ALL users? This will completely wipe the database!')) {
            return;
        }

        if (!confirm('🚨 FINAL WARNING: This will delete everything! Are you absolutely sure?')) {
            return;
        }

        localStorage.removeItem('quizUsers');
        this.updateAdminStats();
        this.loadUserList();
        alert('✅ All users have been deleted!');
    }

    resetUserScores(username) {
        if (!confirm(`Reset all scores for user "${username}"?`)) {
            return;
        }

        const users = this.app.loadUsers();
        if (users[username]) {
            users[username].scores = [];
            users[username].bestScore = 0;
            users[username].totalQuizzes = 0;
            this.app.saveUsers(users);
            this.updateAdminStats();
            this.loadUserList();
            alert(`✅ Scores reset for user "${username}"!`);
        }
    }

    deleteUser(username) {
        if (!confirm(`Delete user "${username}" permanently?`)) {
            return;
        }

        const users = this.app.loadUsers();
        delete users[username];
        this.app.saveUsers(users);
        this.updateAdminStats();
        this.loadUserList();
        alert(`✅ User "${username}" has been deleted!`);
    }

    exportData() {
        const users = this.app.loadUsers();
        const dataStr = JSON.stringify(users, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `quiz-data-backup-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        alert('✅ Data exported successfully!');
    }

    importData(file) {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                
                if (!confirm('⚠️ This will overwrite all existing data. Continue?')) {
                    return;
                }

                this.app.saveUsers(importedData);
                this.updateAdminStats();
                this.loadUserList();
                alert('✅ Data imported successfully!');
            } catch (error) {
                alert('❌ Error importing data: Invalid file format!');
            }
        };
        reader.readAsText(file);
    }
}

// Initialize admin system when app loads - improved timing
let adminSystem;

function initializeAdminSystem() {
    if (window.quizAppInstance && !adminSystem) {
        adminSystem = new AdminSystem(window.quizAppInstance);
        console.log('Admin system initialized successfully');
    } else if (!window.quizAppInstance) {
        // QuizApp not ready yet, try again
        setTimeout(initializeAdminSystem, 500);
    }
}

// Start initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAdminSystem);
} else {
    initializeAdminSystem();
}

// Also try after a delay to catch any timing issues
setTimeout(initializeAdminSystem, 2000);
