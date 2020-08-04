const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse( localStorage.getItem('highscores') ) || [];

let high =  highScores.map(function(scores) {
    return `<li class="high-score">${scores.name} - ${scores.score}</li>`;
}).join(); 

highScoresList.innerHTML = high;

