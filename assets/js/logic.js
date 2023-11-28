const startButton = document.querySelector("#start");
const startScreen = document.querySelector("#start-screen");
const questionsList = document.querySelector("#questions");

const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");

startButton.addEventListener("click", function() {
    startScreen.style.display = "none";
    questionsList.style.display = "block";
    startQuiz();
});

function startQuiz() {
    let counter = 0;
    scrollQuestions(counter);
    counter++
}

function scrollQuestions(counter) {
    questionTitle.innerHTML = questions[counter].question;

    let quizAnswers = '';
    for (let i = 0; i < questions[counter].choices.length; i++) {
        quizAnswers += '<button style="min-width: 120px">' + questions[counter].choices[i] + '</button>';
    }

    choices.innerHTML = quizAnswers;
}