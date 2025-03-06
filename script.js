// Dati fittizi per le domande
const examData = {
    questions: [
        {
            question: 'Chi era il leader della Germania nazista durante la Seconda Guerra Mondiale?',
            options: ['Adolf Hitler', 'Benito Mussolini', 'Winston Churchill', 'Joseph Stalin'],
            correctAnswer: 'Adolf Hitler'
        },
        {
            question: 'Quale evento segnò l\'inizio della Seconda Guerra Mondiale?',
            options: ['L\'invasione della Polonia', 'L\'attacco a Pearl Harbor', 'La battaglia di Stalingrado', 'La conferenza di Yalta'],
            correctAnswer: 'L\'invasione della Polonia'
        }
    ],
    progress: 25 // 25% del materiale studiato
};

// Funzione per caricare le domande nella pagina di simulazione
function loadQuestions() {
    const examResults = document.getElementById('examResults');
    if (examResults) {
        examResults.innerHTML = examData.questions.map(q => `
            <div class="question">
                <h3>${q.question}</h3>
                <div class="options">
                    ${q.options.map(opt => `
                        <label>
                            <input type="radio" name="${q.question}" value="${opt}">
                            ${opt}
                        </label>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }
}

// Funzione per caricare i grafici nella pagina dei risultati
function loadCharts() {
    const ctx1 = document.getElementById('progressChart1');
    if (ctx1) {
        new Chart(ctx1.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Risposte Corrette', 'Risposte Errate'],
                datasets: [{
                    label: 'Risposte',
                    data: [75, 25], // Dati fittizi
                    backgroundColor: ['#36a2eb', '#ff6384'],
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                    }
                }
            }
        });
    }

    const ctx2 = document.getElementById('progressChart2');
    if (ctx2) {
        new Chart(ctx2.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Materiale Studiato', 'Materiale Restante'],
                datasets: [{
                    label: 'Progressi',
                    data: [examData.progress, 100 - examData.progress],
                    backgroundColor: ['#4caf50', '#f44336'],
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                    }
                }
            }
        });
    }
}

// Funzione per simulare l'invio dell'esame
function submitExam() {
    alert('Esame inviato! Verrai reindirizzato ai risultati.');
    window.location.href = 'risultati.html';
}

// Carica tutto al caricamento della pagina
window.onload = () => {
    loadQuestions();
    loadCharts();
};