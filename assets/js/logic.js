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


let counter = 0;
let secondsLeft = 60;
let score = 0;

startButton.addEventListener("click", function() {
    startScreen.style.display = "none";
    questionsList.style.display = "block";
    startQuiz();
});

function startQuiz() {
    scrollQuestions(counter);
    runTimer();   
}

function scrollQuestions(counter) {
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
}

function nailedIt() {
    //goodSound.play();
    counter++;
    scrollQuestions(counter);
    score = score + 5; 
}

function unlucky() {
    //badSound.play();
    secondsLeft = secondsLeft - 5;
}

function runTimer() {
    let timerInterval = setInterval(function() {
    secondsLeft--;

    if(secondsLeft === 0) {
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
}