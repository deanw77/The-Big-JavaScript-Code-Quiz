const highScores = document.querySelector("#highscores");
const clear = document.querySelector("#clear");

let scoreArray = JSON.parse(localStorage.getItem("highScores"));
let initialsArray = JSON.parse(localStorage.getItem("initials"));

clear.addEventListener('click', function() {
    localStorage.clear();
    location.reload();
});

function saveScores() {

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

    combineArrays.sort(function (a, b) {
        return b.score - a.score;
    });

    let scoreCount = 0;
    if ( combineArrays.length > 10 ) {
        scoreCount = 10;
    } else {
        scoreCount = combineArrays.length
    }
    for (let i = 0; i < scoreCount; i++) {
        listItem = document.createElement('li');
        listItem.textContent = combineArrays[i].score + " - " +combineArrays[i].name;
        highScores.appendChild(listItem);
    }
}

saveScores();