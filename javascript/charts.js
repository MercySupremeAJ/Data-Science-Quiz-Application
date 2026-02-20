// ==================== CHARTS.JS ====================
// Creates result charts using Chart.js library

// ---- Pie Chart: Correct vs Incorrect ----
function createPieChart(correct, incorrect) {
    const canvas = document.getElementById('pie-chart');

    // Destroy existing chart if it exists
    if (canvas._chartInstance) {
        canvas._chartInstance.destroy();
    }

    const ctx = canvas.getContext('2d');
    canvas._chartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
                data: [correct, incorrect],
                backgroundColor: ['#22c55e', '#ef4444'],
                borderColor: ['#16a34a', '#dc2626'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#f8fafc',
                        font: { size: 14 },
                        padding: 20
                    }
                }
            }
        }
    });
}

// ---- Bar Chart: Time Spent per Question ----
function createBarChart() {
    const canvas = document.getElementById('bar-chart');

    // Destroy existing chart if it exists
    if (canvas._chartInstance) {
        canvas._chartInstance.destroy();
    }

    // Prepare labels and data
    const labels = questions.map(function (q, i) {
        return 'Q' + (i + 1);
    });

    // Color bars based on correct/incorrect
    const barColors = questions.map(function (q, i) {
        return state.answers[i] === q.correctIndex ? '#22c55e' : '#ef4444';
    });

    const ctx = canvas.getContext('2d');
    canvas._chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Time (seconds)',
                data: state.timeSpent,
                backgroundColor: barColors,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Seconds',
                        color: '#94a3b8'
                    },
                    ticks: { color: '#94a3b8' },
                    grid: { color: 'rgba(148, 163, 184, 0.1)' }
                },
                x: {
                    ticks: { color: '#94a3b8', maxRotation: 45 },
                    grid: { display: false }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}
