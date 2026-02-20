// ==================== TIMER.JS ====================
// Handles the countdown timer for each question

// ---- Start the Timer ----
function startTimer(timeLimit) {
    let timeRemaining = timeLimit;
    const timerText = document.getElementById('timer-text');
    const timerCircle = document.getElementById('timer-circle');

    // Set initial display
    timerText.textContent = timeRemaining + 's';
    timerCircle.className = 'timer-circle'; // reset classes
    timerCircle.style.setProperty('--timer-progress', '100%');

    // Clear any existing timer
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
    }

    // Record start time for this question
    state.startTime = Date.now();

    // Update every second
    state.timerInterval = setInterval(function () {
        timeRemaining--;

        // Update text
        timerText.textContent = timeRemaining + 's';

        // Update circular progress (percentage of time remaining)
        const progressPercent = (timeRemaining / timeLimit) * 100;
        timerCircle.style.setProperty('--timer-progress', progressPercent + '%');

        // Change color based on time remaining
        if (timeRemaining <= 5) {
            timerCircle.className = 'timer-circle danger';
        } else if (timeRemaining <= 10) {
            timerCircle.className = 'timer-circle warning';
        }

        // Time's up!
        if (timeRemaining <= 0) {
            clearInterval(state.timerInterval);
            handleTimeUp();
        }
    }, 1000);
}

// ---- Stop the Timer ----
function stopTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
}

// ---- When time runs out ----
function handleTimeUp() {
    // Record time spent as the full time limit
    const currentQuestion = questions[state.currentQuestionIndex];
    state.timeSpent[state.currentQuestionIndex] = currentQuestion.timeLimit;

    // If no answer was selected, mark as -1 (unanswered)
    if (state.answers[state.currentQuestionIndex] === undefined ||
        state.answers[state.currentQuestionIndex] === null) {
        state.answers[state.currentQuestionIndex] = -1;
    }

    // Disable all option buttons
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function (btn) {
        btn.classList.add('disabled');
    });

    // Show correct answer
    showCorrectAnswer();

    // Auto-advance after 1.5 seconds
    setTimeout(function () {
        if (state.currentQuestionIndex < questions.length - 1) {
            goToNextQuestion();
        } else {
            submitQuiz();
        }
    }, 1500);
}
