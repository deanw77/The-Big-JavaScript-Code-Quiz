const highScores = document.querySelector("#highscores");
const clear = document.querySelector("#clear");

let scoreArray = JSON.parse(localStorage.getItem("highScores"));
let initialsArray = JSON.parse(localStorage.getItem("initials"));

// Have the clear High Score button clear the localStorage then 
// automatcally refresh page to show it is cleared
clear.addEventListener('click', function() {
    localStorage.clear();
    // Refreshes the page
    location.reload();
});

function saveScores() {

    // Create a new array of objectswith each object containing a high score
    // and a user name/initials
    let combineArrays = [];
    let eachUser = {};
    if (scoreArray !== null) {
        for (let i = 0; i < scoreArray.length; i++) {
            let score = scoreArray[i];
            let name = initialsArray[i];
            eachUser = {score, name};
            combineArrays.push(eachUser);
        }
    }

    // Sort the array so th ehighest scores are always at the top
    combineArrays.sort(function (a, b) {
        return b.score - a.score;
    });

    // Make sure that a maximum of ten high scores are displayed
    let scoreCount = 0;
    if ( combineArrays.length > 10 ) {
        scoreCount = 10;
    } else {
        scoreCount = combineArrays.length
    }

    // Display the high scores to screen
    for (let i = 0; i < scoreCount; i++) {
        listItem = document.createElement('li');
        listItem.textContent = combineArrays[i].score + " - " +combineArrays[i].name;
        highScores.appendChild(listItem);
    }
}

saveScores();