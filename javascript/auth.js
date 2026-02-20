// ==================== AUTH.JS ====================
// Handles login, signup, and user session using localStorage

// ---- Helper: Get users from localStorage ----
function getUsers() {
    const users = localStorage.getItem('quizUsers');
    return users ? JSON.parse(users) : [];
}

// ---- Helper: Save users to localStorage ----
function saveUsers(users) {
    localStorage.setItem('quizUsers', JSON.stringify(users));
}

// ---- Helper: Save current session ----
function saveSession(user) {
    localStorage.setItem('quizCurrentUser', JSON.stringify(user));
}

// ---- Helper: Get current session ----
function getSession() {
    const user = localStorage.getItem('quizCurrentUser');
    return user ? JSON.parse(user) : null;
}

// ---- Helper: Clear session (logout) ----
function clearSession() {
    localStorage.removeItem('quizCurrentUser');
}

// ---- Signup: Create a new user ----
function signupUser(name, email, password) {
    const users = getUsers();

    // Check if email already exists
    const exists = users.find(u => u.email === email);
    if (exists) {
        return { success: false, message: 'An account with this email already exists.' };
    }

    // Create new user object
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password,  // Note: In a real app, NEVER store plain text passwords
        highScore: 0
    };

    users.push(newUser);
    saveUsers(users);
    saveSession(newUser);

    return { success: true, user: newUser };
}

// ---- Login: Authenticate an existing user ----
function loginUser(email, password, remember = false) {
    const users = getUsers();

    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return { success: false, message: 'Invalid email or password.' };
    }

    saveSession(user);

    // Handle Remember Me
    if (remember) {
        localStorage.setItem('quizRememberedEmail', email);
    } else {
        localStorage.removeItem('quizRememberedEmail');
    }

    return { success: true, user: user };
}

// ---- Switch between Login and Signup forms ----
function initAuthUI() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignupBtn = document.getElementById('show-signup');
    const showLoginBtn = document.getElementById('show-login');
    const loginTab = document.getElementById('login-tab'); // New reference
    const signupTab = document.getElementById('signup-tab'); // New reference
    const loginError = document.getElementById('login-error');
    const signupError = document.getElementById('signup-error');

    // Function to show Login View
    function showLogin() {
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        loginTab.classList.add('active');
        signupTab.classList.remove('active'); // Ensure tabs update
        signupError.textContent = '';
        loginError.textContent = '';
    }

    // Function to show Signup View
    function showSignup() {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        signupTab.classList.add('active'); // Update tabs
        loginTab.classList.remove('active');
        loginError.textContent = '';
        signupError.textContent = '';
    }

    // Switch Handlers
    showSignupBtn.addEventListener('click', showSignup);
    showLoginBtn.addEventListener('click', showLogin);

    // Tab Click Components
    if (loginTab) loginTab.addEventListener('click', showLogin);
    if (signupTab) signupTab.addEventListener('click', showSignup);

    // Forgot Password Handler
    const forgotBtn = document.getElementById('forgot-password');
    if (forgotBtn) {
        forgotBtn.addEventListener('click', function () {
            const email = document.getElementById('login-email').value;
            if (email) {
                alert(`Password reset link sent to ${email} (Mock)`);
            } else {
                alert('Please enter your email address first to reset password.');
            }
        });
    }

    // Pre-fill email if remembered
    const rememberedEmail = localStorage.getItem('quizRememberedEmail');
    if (rememberedEmail) {
        document.getElementById('login-email').value = rememberedEmail;
        document.getElementById('remember-me').checked = true;
    }

    // Handle Login submit
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        loginError.textContent = '';

        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;
        const remember = document.getElementById('remember-me').checked;

        const result = loginUser(email, password, remember);

        if (result.success) {
            state.currentUser = result.user;

            // Redirect to Category Selection
            if (typeof initCategoryScreen === 'function') {
                initCategoryScreen();
            } else {
                showScreen('quiz-screen');
                startQuiz();
            }
        } else {
            loginError.textContent = result.message;
        }
    });

    // Handle Signup submit
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        signupError.textContent = '';

        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value;

        if (name.length < 2) {
            signupError.textContent = 'Name must be at least 2 characters.';
            return;
        }

        const result = signupUser(name, email, password);

        if (result.success) {
            state.currentUser = result.user;

            // Redirect to Category Selection
            if (typeof initCategoryScreen === 'function') {
                initCategoryScreen();
            } else {
                showScreen('quiz-screen');
                startQuiz();
            }
        } else {
            signupError.textContent = result.message;
        }
    });
}
