const question = document.getElementById("question");
const choices = Array.from( document.getElementsByClassName("choice-text") );
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBar = document.getElementById('progress-bar-full');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript???",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scriptimg>",
        answer: 1
    },
    {
        question: "What is the correct syntax for referring to an external script called 'abc.js'?",
        choice1: "<script href='abc.js'>",
        choice2: "<script name='abc.js'>",
        choice3: "<script src='abc.js'>",
        choice4: "<script file='abc.js'>",
        answer: 3
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4
    },
    {
        question: "What is the name of the person that wrote this code?",
        choice1: "Pelumi",
        choice2: "Folashade",
        choice3: "Mike",
        choice4: "Daniel",
        answer: 1
    },
    {
        question: "How long did it take Pelumi to finish coding this quiz?",
        choice1: "1 month",
        choice2: "2 months",
        choice3: "1week",
        choice4: "3weeks",
        answer: 4
    },
    {
        question: "Who is my favourite DC superhero?",
        choice1: "Superman",
        choice2: "Robin",
        choice3: "Captain Marvel",
        choice4: "Green Lantern",
        answer: 3
    },
    {
        question: "Who is the strongest DC superhero?",
        choice1: "Robin",
        choice2: "Superman",
        choice3: "Captain Marvel",
        choice4: "Green Lantern",
        answer: 2
    },
    {
        question: "What data type does the localStorage method take?",
        choice1: "Numbers",
        choice2: "Strings",
        choice3: "Objects",
        choice4: "Arrays",
        answer: 2
    }
];

//CONSTANTS
const correctBonus = 10;
const maxQuestions = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter >= maxQuestions){
        //Go to the end page
        return window.location.assign("end.html");
    }

    questionCounter++;
    progressText.textContent = `Question: ${questionCounter} / ${maxQuestions}`;
    progressBar.style.width = `${(questionCounter/maxQuestions) * 100}%`;
    
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {

        //This targets the number attached to the dataset attribute in the html tag
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", (e) => {
        if(!acceptingAnswers) return; 

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        let classToApply;

        if (selectedAnswer == currentQuestion.answer) {
            classToApply = 'correct';
            score += correctBonus;
            scoreText.textContent = score;

            //Set use the setItem method attached to the localStorage object
            //The method takes two string parameter, the first being the key
            //and the second being the value
            localStorage.setItem('mostRecentScore', score);
        } else {
            classToApply = 'incorrect';
        }

        selectedChoice.parentNode.classList.add(classToApply);
        setTimeout(function() {
            selectedChoice.parentNode.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

startGame();