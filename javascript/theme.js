// ==================== THEME.JS ====================
// Handles Light/Dark mode toggling

document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem('quizTheme');

    // Apply saved theme
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeBtn.textContent = '☀️'; // Sun icon for light mode
    } else {
        themeBtn.textContent = '🌙'; // Moon icon for dark mode
    }

    // Toggle theme on click
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');

        // Save preference and update icon
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('quizTheme', 'light');
            themeBtn.textContent = '☀️';
        } else {
            localStorage.setItem('quizTheme', 'dark');
            themeBtn.textContent = '🌙';
        }
    });
});
