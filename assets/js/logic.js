const startButton = document.querySelector("#start");
const startScreen = document.querySelector("#start-screen");
const questionsList = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");
const goodSound = document.getElementById("correctAudio");
const badSound = document.getElementById("incorrectAudio");
let counter = 0;

startButton.addEventListener("click", function() {
    startScreen.style.display = "none";
    questionsList.style.display = "block";
    startQuiz();
});

function startQuiz() {
        scrollQuestions(counter);   
}

function scrollQuestions(counter) {
    questionTitle.innerHTML = questions[counter].question;

    choices.textContent = '';
    for (let i = 0; i < questions[counter].choices.length; i++) {
        answrbtn = document.createElement('button');
        answrbtn.textContent = questions[counter].choices[i];
        answrbtn.style.minWidth = '120px';
        answrbtn.setAttribute('id', 'answr'+i);
        choices.appendChild(answrbtn);
    }

    const answerOne = document.querySelector('#answr0');
    const answerTwo = document.querySelector('#answr1');
    const answerThree = document.querySelector('#answr2');
    const answerFour = document.querySelector('#answr3');
    const correctAnswer = questions[counter].correctAnswer;

    answerOne.addEventListener("click", function() {
        let text = answerOne.textContent;
        if ( text === correctAnswer ) {
            goodSound.play();
            counter++;
            scrollQuestions(counter);  
        } else {
            badSound.play();
        }
    });
    answerTwo.addEventListener("click", function() {
        let text = answerTwo.textContent;
        if ( text === correctAnswer ) {
            goodSound.play();
            counter++;
            scrollQuestions(counter); 
        } else {
            badSound.play();
        }
    });
    answerThree.addEventListener("click", function() {
        let text = answerThree.textContent;
        if ( text === correctAnswer ) {
            goodSound.play();
            counter++;
            scrollQuestions(counter); 
        } else {
            badSound.play();
        }
    });
    answerFour.addEventListener("click", function() {
        let text = answerFour.textContent;
        if ( text === correctAnswer ) {
            goodSound.play();
            counter++;
            scrollQuestions(counter); 
        } else {
            badSound.play();
        }
    });
}