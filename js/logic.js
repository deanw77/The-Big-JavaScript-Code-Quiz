"use strict";
// Get the elements required from HTML
const startButton = document.querySelector("#start");
const startScreen = document.querySelector("#start-screen");
const questionsList = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");
const endScreen = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score");
const timer = document.querySelector("#time");
const initials = document.querySelector("#initials");
const goodSound = document.querySelector("#correctAudio");
const badSound = document.querySelector("#incorrectAudio");
const submit = document.querySelector("#submit");
const feedback = document.querySelector("#feedback");
const wellDone = document.querySelector('#wellDone');
const playAgain = document.querySelector('#playAgain');

// Declare Variables
let counter = 0;
let secondsLeft = 60;
let score = 0;
let questionsCounter = 0;
let answrbtn;
let highScoreStore = [];
let initialsStore = [];

// Set up the init function firstand run it
init();

// Clear both arrays and get the up-to-date arrays from localStorage
function init() {
    highScoreStore = [];
    initialsStore = [];

    let storedHighScores = JSON.parse(localStorage.getItem("highScores"));
    let storedInitials = JSON.parse(localStorage.getItem("initials"));

    if (storedHighScores !== null) {
        highScoreStore = storedHighScores;
    }
    if (storedInitials !== null) {
        initialsStore = storedInitials;
    }
}

// Hide start screen, show questions & run the start quiz
startButton.addEventListener("click", function (event) {
    event.preventDefault();
    startScreen.style.display = "none";
    questionsList.style.display = "block";
    startQuiz();
});

// startQuiz begins both the scroll questions code and the timer
function startQuiz() {
    scrollQuestions(counter);
    runTimer();
}

// Scroll through each question
function scrollQuestions(counter) {
    if (questionsCounter < questions.length) {
        // Display question title
        questionTitle.innerHTML = questions[counter].question;
        choices.textContent = "";
        // Display one button for each answers option
        for (let i = 0; i < questions[counter].choices.length; i++) {
            answrbtn = document.createElement("button");
            // Set id for each answer so I can check for answer
            answrbtn.setAttribute("id", "answr" + i);
            answrbtn.textContent = questions[counter].choices[i];
            answrbtn.style.minWidth = "120px";
            choices.appendChild(answrbtn);
            if (answrbtn.textContent === "") {
                answrbtn.setAttribute("style", "display:none;");
            }
        }

        // Create a variablefor each answer
        const answerOne = document.querySelector("#answr0");
        const answerTwo = document.querySelector("#answr1");
        const answerThree = document.querySelector("#answr2");
        const answerFour = document.querySelector("#answr3");
        const correctAnswer = questions[counter].correctAnswer;

        // Check for button clicks and test if it = correct answer
        // Correct run nailIt code, incorrect run unlucky code
        answerOne.addEventListener("click", function () {
            let text = answerOne.textContent;
            if (text === correctAnswer) {
                nailedIt();
            } else {
                unlucky();
            }
        });
        answerTwo.addEventListener("click", function () {
            let text = answerTwo.textContent;
            if (text === correctAnswer) {
                nailedIt();
            } else {
                unlucky();
            }
        });
        answerThree.addEventListener("click", function () {
            let text = answerThree.textContent;
            if (text === correctAnswer) {
                nailedIt();
            } else {
                unlucky();
            }
        });
        answerFour.addEventListener("click", function () {
            let text = answerFour.textContent;
            if (text === correctAnswer) {
                nailedIt();
            } else {
                unlucky();
            }
        });
        // Increase questions counter so we can stop when all questions asked
        questionsCounter += 1;
    } else {
        // If all questions asked run endGame function
        endGame();
    }
}

// Start a timer and display to screen
function runTimer() {
    let timerInterval = setInterval(function () {
        secondsLeft--;

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
        timer.textContent = secondsLeft;
    }, 1000);
}

// Correct - play correct sound, increase counter so next question shows
// Run scrollQuestions again 
function nailedIt() {
    goodSound.play();
    counter++;
    scrollQuestions(counter);
}

// Incorrect - play incorrect sound & deduct ten seconds
function unlucky() {
    badSound.play();
    secondsLeft = secondsLeft - 10;
}

// endGame when timer runs out or all questions asked
function endGame() {
    init();
    questionsList.style.display = "none";
    endScreen.style.display = "block";
    score = secondsLeft;
    finalScore.innerHTML = score;
}

// On submit to highscores, store the score and initials
// Show a confirmation message and a Play Again button
submit.addEventListener("click", function (event) {
    event.preventDefault();
    init();

    feedback.classList.remove("hide");
    wellDone.textContent = `Well done. Your score has been recorded`;

    highScoreStore.push(score);
    localStorage.setItem("highScores", JSON.stringify(highScoreStore));

    initialsStore.push(initials.value);
    localStorage.setItem("initials", JSON.stringify(initialsStore));
});

// If playing again, rerun the init then run the restart
playAgain.addEventListener("click", function (event) {
    event.preventDefault();
    init();
    restart();
});

// When restarting, reset counters and timers and score
function restart() {
    feedback.classList.add("hide");
    questionsList.style.display = "block";
    endScreen.style.display = "none";
    counter = 0;
    questionsCounter = 0;
    secondsLeft = 60;
    score = 0;
    startQuiz();
}