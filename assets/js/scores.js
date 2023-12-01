const highScores = document.querySelector("#highscores");

let scoreStore = localStorage.getItem("scoreStore");
let initialsStore = localStorage.getItem("initials");

let scoreArray = JSON.parse(scoreStore);
let initialsArray = JSON.parse(initialsStore);

function saveScores() {

    const sortedArray = []
    let sortArray
    if ( scoreStore != null){
        sortArray=arr=>arr.map((v,i)=>
        ({v,i})).sort((a,b)=> typeof a.v=="string"? a.v.localeCompare(b.v) : b.v-a.v).map(v=>v.i);
    
        sortArray(scoreArray).forEach(k=>
            console.log(k, initialsArray[k] + ' - ' + scoreArray[k])
            );
        
            sortArray(scoreArray).forEach(k=>#
            sortedArray.push(scoreArray[k] + ' - ' + initialsArray[k])
            );
    }
    

    

    let scoreCount = 0;
    if ( sortedArray.length > 10 ) {
        scoreCount = 10;
    } else {
        scoreCount = sortedArray.length
    }
    for (let i = 0; i < scoreCount; i++) {
        listItem = document.createElement('li');
        listItem.textContent = sortedArray[i];
        highScores.appendChild(listItem);
    }
}

saveScores();