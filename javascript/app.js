// ==================== APP.JS ====================
// Main quiz application logic

// Global state object - tracks everything
const state = {
    currentUser: null,
    currentQuestionIndex: 0,
    answers: [],           // User's selected answers
    timeSpent: [],         // Seconds spent on each question
    startTime: null,       // When current question started
    timerInterval: null,   // Reference to timer
    isQuizComplete: false,
    currentCategory: 'All', // Default category
    activeQuestions: []     // Questions filtered by category
};

// ==================== Screen Management ====================

function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(function (screen) {
        screen.classList.add('hidden');
    });

    // Show the target screen
    document.getElementById(screenId).classList.remove('hidden');
}

// ==================== Quiz Functions ====================

// ---- Start the Quiz ----
function startQuiz(category = null) {
    if (category) {
        state.currentCategory = category;
        state.activeQuestions = questions.filter(function (q) {
            return q.category === category;
        });
    } else {
        // Fallback if no category selected (shouldn't happen with new flow)
        state.activeQuestions = [...questions];
    }

    // Reset state
    state.currentQuestionIndex = 0;
    state.answers = new Array(state.activeQuestions.length).fill(null);
    state.timeSpent = new Array(state.activeQuestions.length).fill(0);
    state.isQuizComplete = false;

    // Update user display
    document.getElementById('user-display').textContent = 'Welcome, ' + state.currentUser.name;

    // Load first question
    loadQuestion(0);
}

// ---- Load a Question by Index ----
function loadQuestion(index) {
    const question = state.activeQuestions[index];
    state.currentQuestionIndex = index;

    // Update question text
    document.getElementById('question-text').textContent =
        'Q' + (index + 1) + '. ' + question.question;

    // Update progress bar
    const total = state.activeQuestions.length;
    const progressPercent = ((index + 1) / total) * 100;
    document.getElementById('progress-bar').style.setProperty('--progress', progressPercent + '%');
    document.getElementById('progress-text').textContent =
        (index + 1) + '/' + total;

    // Build option buttons
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach(function (option, i) {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;

        // If user already answered this question, show their selection
        if (state.answers[index] === i) {
            button.classList.add('selected');
        }

        button.addEventListener('click', function () {
            selectOption(i);
        });

        optionsContainer.appendChild(button);
    });

    // Update navigation buttons
    updateNavButtons();

    // Start timer for this question
    startTimer(question.timeLimit);
}

// ---- Select an Option ----
function selectOption(optionIndex) {
    // Record the answer
    state.answers[state.currentQuestionIndex] = optionIndex;

    // Record time spent
    const elapsed = Math.round((Date.now() - state.startTime) / 1000);
    state.timeSpent[state.currentQuestionIndex] = elapsed;

    // Update button styles — remove 'selected' from all, add to clicked
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function (btn, i) {
        btn.classList.remove('selected');
        if (i === optionIndex) {
            btn.classList.add('selected');
        }
    });
}

// ---- Show Correct Answer (used when time runs out) ----
function showCorrectAnswer() {
    const question = state.activeQuestions[state.currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');

    buttons.forEach(function (btn, i) {
        if (i === question.correctIndex) {
            btn.classList.add('correct');
        } else if (i === state.answers[state.currentQuestionIndex]) {
            btn.classList.add('wrong');
        }
    });
}

// ---- Update Nav Buttons (Previous / Next / Submit) ----
function updateNavButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const index = state.currentQuestionIndex;

    // Previous button
    prevBtn.disabled = (index === 0);

    // Submit is always visible so user can submit anytime
    submitBtn.classList.remove('hidden');

    // Hide Next on the last question (no more questions after it)
    if (index === state.activeQuestions.length - 1) {
        nextBtn.classList.add('hidden');
    } else {
        nextBtn.classList.remove('hidden');
    }
}

// ---- Go to Next Question ----
function goToNextQuestion() {
    // Save time if not already saved
    if (state.timeSpent[state.currentQuestionIndex] === 0) {
        const elapsed = Math.round((Date.now() - state.startTime) / 1000);
        state.timeSpent[state.currentQuestionIndex] = elapsed;
    }

    stopTimer();

    if (state.currentQuestionIndex < state.activeQuestions.length - 1) {
        loadQuestion(state.currentQuestionIndex + 1);
    }
}

// ---- Go to Previous Question ----
function goToPrevQuestion() {
    // Save time
    if (state.timeSpent[state.currentQuestionIndex] === 0) {
        const elapsed = Math.round((Date.now() - state.startTime) / 1000);
        state.timeSpent[state.currentQuestionIndex] = elapsed;
    }

    stopTimer();

    if (state.currentQuestionIndex > 0) {
        loadQuestion(state.currentQuestionIndex - 1);
    }
}

// ==================== Submit & Score ====================

function submitQuiz() {
    stopTimer();
    state.isQuizComplete = true;

    // Save time for last question
    if (state.timeSpent[state.currentQuestionIndex] === 0) {
        const elapsed = Math.round((Date.now() - state.startTime) / 1000);
        state.timeSpent[state.currentQuestionIndex] = elapsed;
    }

    // Calculate score
    const results = calculateScore();

    // Display results
    displayResults(results);

    // Show results screen
    showScreen('results-screen');
}

function calculateScore() {
    let correctCount = 0;
    let totalPoints = 0;
    let maxPoints = 0;

    state.activeQuestions.forEach(function (question, i) {
        maxPoints += question.points;

        if (state.answers[i] === question.correctIndex) {
            correctCount += question.points;
            totalPoints += question.points;
        }
    });

    // Fix: correctCount logic above was slightly mixed. 
    // Let's count correct ANSWERS and TOTAL POINTS separately.
    correctCount = 0;
    totalPoints = 0;
    state.activeQuestions.forEach(function (question, i) {
        if (state.answers[i] === question.correctIndex) {
            correctCount++;
            totalPoints += question.points;
        }
    });

    const percentage = Math.round((totalPoints / maxPoints) * 100);

    // Update high score in localStorage
    if (state.currentUser && percentage > state.currentUser.highScore) {
        state.currentUser.highScore = percentage;
        saveSession(state.currentUser);

        // Also update in the users list
        const users = getUsers();
        const userIndex = users.findIndex(u => u.id === state.currentUser.id);
        if (userIndex !== -1) {
            users[userIndex].highScore = percentage;
            saveUsers(users);
        }
    }

    return {
        correctCount: correctCount,
        incorrectCount: state.activeQuestions.length - correctCount,
        totalPoints: totalPoints,
        maxPoints: maxPoints,
        percentage: percentage
    };
}

function displayResults(results) {
    // Update score display
    document.getElementById('final-score').textContent = results.percentage;

    // Build answer review
    buildAnswerReview();

    // Build charts
    createPieChart(results.correctCount, results.incorrectCount);
    createBarChart();

    // Build leaderboard
    buildLeaderboard();
}

function buildAnswerReview() {
    const container = document.getElementById('review-container');
    // Keep the h3 heading, clear everything after it
    container.innerHTML = '<h3>Review Your Answers</h3>';

    state.activeQuestions.forEach(function (question, i) {
        const div = document.createElement('div');
        div.className = 'review-item';

        const userAnswer = state.answers[i];
        const isCorrect = userAnswer === question.correctIndex;
        const statusClass = isCorrect ? 'correct' : 'wrong';
        const statusIcon = isCorrect ? '✅' : '❌';

        let userAnswerText = 'Not answered';
        if (userAnswer !== null && userAnswer !== -1 && userAnswer >= 0) {
            userAnswerText = question.options[userAnswer];
        }

        div.innerHTML =
            '<div class="review-question ' + statusClass + '">' +
            '<span class="review-status">' + statusIcon + '</span>' +
            '<strong>Q' + (i + 1) + ':</strong> ' + question.question +
            '</div>' +
            '<div class="review-answer">' +
            '<span>Your answer: ' + userAnswerText + '</span>' +
            (isCorrect ? '' : '<span class="correct-answer">Correct: ' + question.options[question.correctIndex] + '</span>') +
            '</div>';

        container.appendChild(div);
    });
}

function buildLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    list.innerHTML = '';

    const users = getUsers();
    // Sort by high score descending
    users.sort(function (a, b) {
        return b.highScore - a.highScore;
    });

    // Show top 10
    const top = users.slice(0, 10);
    top.forEach(function (user, i) {
        const li = document.createElement('li');
        li.className = 'leaderboard-item';

        const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i + 1) + '.';

        li.innerHTML =
            '<span class="leaderboard-rank">' + medal + '</span>' +
            '<span class="leaderboard-name">' + user.name + '</span>' +
            '<span class="leaderboard-score">' + user.highScore + '%</span>';

        list.appendChild(li);
    });
}

// ==================== Event Listeners ====================

document.addEventListener('DOMContentLoaded', function () {
    // Initialize auth UI (form switching, login/signup handlers)
    if (typeof initAuthUI === 'function') {
        initAuthUI();
    }
    // Check for existing session
    const session = getSession();
    if (session) {
        state.currentUser = session;
        initCategoryScreen(); // Go to Category selection instead of starting quiz immediately
    }

    // Navigation buttons
    document.getElementById('next-btn').addEventListener('click', goToNextQuestion);
    document.getElementById('prev-btn').addEventListener('click', goToPrevQuestion);
    document.getElementById('submit-btn').addEventListener('click', submitQuiz);

    // Logout button
    document.getElementById('logout-btn').addEventListener('click', function () {
        stopTimer();
        clearSession();
        state.currentUser = null;
        state.isQuizComplete = false;
        showScreen('auth-screen');
    });

    // Retry button
    document.getElementById('retry-btn').addEventListener('click', function () {
        showScreen('quiz-screen');
        startQuiz();
    });

    // Back to Home button
    document.getElementById('home-btn').addEventListener('click', function () {
        stopTimer();
        state.isQuizComplete = false;
        initCategoryScreen(); // Go back to categories, don't logout
    });

    // Category Screen Logout
    document.getElementById('cat-logout-btn').addEventListener('click', function () {
        clearSession();
        state.currentUser = null;
        showScreen('auth-screen');
    });

    // Modified Login/Signup success handlers in initAuthUI call initCategoryScreen instead of startQuiz
    // Since we can't easily modify code inside initAuthUI from here without replacing the whole file,
    // we need to override the behavior or assume the user will refresh.
    // Actually, in auth.js, we called startQuiz(). We should change that to use a global function or event.
    // For now, let's just make sure initCategoryScreen is available globally.
});

// ---- Category Screen Logic ----
function initCategoryScreen() {
    showScreen('category-screen');
    document.getElementById('cat-user-display').textContent = 'Welcome, ' + state.currentUser.name;

    // Get unique categories
    const categories = [...new Set(questions.map(q => q.category))];

    const container = document.getElementById('category-container');
    container.innerHTML = '';

    categories.forEach(category => {
        // Count questions in this category
        const count = questions.filter(q => q.category === category).length;

        const card = document.createElement('div');
        card.className = 'category-card';
        // Assign icon based on category name (simple mapping)
        let icon = '📊';
        if (category.includes('Python')) icon = '🐍';
        if (category.includes('Machine')) icon = '🤖';
        if (category.includes('Deep')) icon = '🧠';
        if (category.includes('Statistics')) icon = '📈';

        card.innerHTML = `
            <div class="category-icon">${icon}</div>
            <div class="category-title">${category}</div>
            <div class="category-stats">${count} Questions</div>
        `;

        card.addEventListener('click', () => {
            showScreen('quiz-screen');
            startQuiz(category);
        });

        container.appendChild(card);
    });
}