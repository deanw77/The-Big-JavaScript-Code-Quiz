const startButton = document.querySelector("#start");
const startScreen = document.querySelector("#start-screen");
const questions = document.querySelector("#questions");

startButton.addEventListener("click", function() {
    startScreen.style.display = "none";
    questions.style.display = "block";
    startQuiz();
});

function startQuiz() {
    
}