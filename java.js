
// function to choose between 3 numbers
function computerchoice () {
    const randomNum = Math.floor(Math.random() * 3);
    
    if (randomNum == 0) {
        return "Rock" 
    }
    else if (randomNum == 1) {
        return "Paper";
    }
    else if (randomNum == 2) {
        return "Scissors";
    }
    
}

console.log(computerchoice());