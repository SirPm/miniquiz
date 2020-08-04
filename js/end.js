const saveScoreBtn = document.getElementById('saveScoreBtn');
const username = document.getElementById('username');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('final-score');


let highscores = JSON.parse( localStorage.getItem('highscores') ) || [];


finalScore.textContent = mostRecentScore;

username.addEventListener('keyup', function() {
    //If the username's value is false i.e null, undefined e.t.c
    //Set the btn to disabled
    saveScoreBtn.disabled = !username.value;
});


saveScoreBtn.addEventListener('click', saveHighScore);

function saveHighScore(event) {
    event.preventDefault();

    let maxWidth = 5;
    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highscores.push(score);
    highscores.sort( function(a, b) {
        return b.score - a.score;
    });

    highscores.splice(maxWidth);
    localStorage.setItem('highscores', JSON.stringify(highscores) );
    window.location.assign('index.html');
}