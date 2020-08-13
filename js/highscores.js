const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse( localStorage.getItem('highscores') ) || [];

let high =  highScores.map(function(scores) {
    return `<li class="high-score">${scores.name} - ${scores.score}</li>`;
}).join(); 

highScoresList.innerHTML = high;

const clear = document.getElementById('clearHighScores');

clear.addEventListener('click', function(e) {
    let areYouSure = prompt('Do you really want to clear all the highscores??');

    if(areYouSure === 'yeah' || areYouSure === 'yes' || areYouSure === 'Yeah' || areYouSure === 'Yes') {
        let last = prompt('Really? Was your scores that bad?!!');
        if(last === 'yeah' || last === 'yes' || last === 'Yeah' || last === 'Yes') {
            let pw = prompt(`Alright...since you've made up your mind, please input the password`, 'Hint password is pretty obvious');
            if(pw === 'password' || pw === 'Password') {
                localStorage.clear();
                alert(`Clap for yourself...you've succeeded in clearing the records :( )`);
            } else {
                alert('Wrong password!');
            }
        } else {
            alert(`Great, I'll return you to the homepage now :)`);
        }
    } else {
        alert(`Great, I'll return you to the homepage now :)`);
    }   
});