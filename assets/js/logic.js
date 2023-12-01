const startButton = document.querySelector("#start");
const startScreen = document.querySelector("#start-screen");
const endScreen = document.querySelector("#end-screen")
const questionsList = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");
const goodSound = document.querySelector("#correctAudio");
const badSound = document.querySelector("#incorrectAudio");
const timer = document.querySelector("#time");
const finalScore = document.querySelector("#final-score");
const initials = document.querySelector("#initials")
const submit = document.querySelector("#submit");
const feedback = document.querySelector("#feedback");
const wellDone = document.querySelector('#wellDone');
const playAgain = document.querySelector('#playAgain');

let counter = 0;
let secondsLeft = 60;
let score = 0;
let questionsCounter = 0;
let highScoreStore = [];
let initialsStore = [];

init();

function init() {
    if (localStorage.getItem("scoreStore") != null ){
        highScoreStore = JSON.parse(localStorage.getItem("scoreStore"));
    } else {
        highScoreStore = 00;
    }
    if (localStorage.getItem("initials") != null ){
        initialsStore = JSON.parse(localStorage.getItem("initials"));
    } else {
        initialsStore = AA;
    }
    
}

startButton.addEventListener("click", function(event) {
    event.preventDefault();
    startScreen.style.display = "none";
    questionsList.style.display = "block";
    startQuiz();
});

submit.addEventListener('click', function(event) {
    event.preventDefault();

    feedback.classList.remove("hide");
    wellDone.textContent = `Well done. Your score has been recorded`;

    localStorage.setItem("scoreStore", JSON.stringify(highScoreStore));
    initialsStore.push(initials.value);
    localStorage.setItem("initials", JSON.stringify(initialsStore));
});

playAgain.addEventListener('click', function(event) {
    event.preventDefault();
    restart();
});

function startQuiz() {
    //highScoreStore = JSON.parse(localStorage.getItem("scoreStore"));
    //initialsStore = JSON.parse(localStorage.getItem("initials"));    
    scrollQuestions(counter);
    runTimer();   
}

function restart() {
    feedback.classList.add("hide");
    questionsList.style.display = "block";
    endScreen.style.display = "none";
    counter = 0;
    questionsCounter = 0;
    secondsLeft = 60;
    score = 0;
    startQuiz()
}

function scrollQuestions(counter) {
    if (questionsCounter < questions.length) {
        questionTitle.innerHTML = questions[counter].question;
        choices.textContent = '';
        for (let i = 0; i < questions[counter].choices.length; i++) {
            answrbtn = document.createElement('button');
            answrbtn.setAttribute('id', 'answr'+i);
            answrbtn.textContent = questions[counter].choices[i];
            answrbtn.style.minWidth = '120px';
            choices.appendChild(answrbtn);
            if ( answrbtn.textContent === '') {
                answrbtn.setAttribute("style", "display:none;");
            }
        }

        const answerOne = document.querySelector('#answr0');
        const answerTwo = document.querySelector('#answr1');
        const answerThree = document.querySelector('#answr2');
        const answerFour = document.querySelector('#answr3');
        const correctAnswer = questions[counter].correctAnswer;

        answerOne.addEventListener("click", function() {
            let text = answerOne.textContent;
            if ( text === correctAnswer ) { nailedIt(); } 
            else { unlucky(); }
        });
        answerTwo.addEventListener("click", function() {
            let text = answerTwo.textContent;
            if ( text === correctAnswer ) { nailedIt(); } 
            else { unlucky(); }
        });
        answerThree.addEventListener("click", function() {
            let text = answerThree.textContent;
            if ( text === correctAnswer ) { nailedIt(); } 
            else { unlucky(); }
        });
        answerFour.addEventListener("click", function() {
            let text = answerFour.textContent;
            if ( text === correctAnswer ) { nailedIt(); } 
            else { unlucky(); }
        });
        questionsCounter += 1;  
    } else {
        endGame();
    }
}

function nailedIt() {
    goodSound.play();
    counter++;
    score = score + 5;
    scrollQuestions(counter);
}

function unlucky() {
    badSound.play();
    secondsLeft = secondsLeft - 5;
}

function runTimer() {
    let timerInterval = setInterval(function() {
    secondsLeft--;

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
    timer.textContent = secondsLeft;
  }, 1000);
}

function endGame(){
    questionsList.style.display = "none";
    endScreen.style.display = "block";
    finalScore.innerHTML = score;
    highScoreStore.push(score);
}