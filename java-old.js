
let rounds = 0
let computer = 0
let player = 0

// function to choose between 3 numbers


function computerchoice () {
    const randomNum = Math.floor(Math.random() * 3);
    

    if (randomNum == 0) {
        return "Rock";
    }
    else if (randomNum == 1) {
        return "Paper";
    }
    else if (randomNum == 2) {
        return "Scissors";
    }
}
    
function userInput () {
       let input = prompt ("Rock, paper, scissors");
       let answer = input .charAt(0).toUpperCase() + input .slice(1).toLowerCase();
       if (answer === "Rock") {
        return "Rock";
       }
       else if (answer === "Paper") {
        return "Paper";
       }
       else if (answer === "Scissors") {
        return "Scissors";
       }
}



    // Notes for my small brain 
    // ? = ternary operator, compares the conditions
    // : splits the conditions, example in line 50/51, will check if the user input is paper, and if not will say the other possible input
    // flawed as a user can type anything and will win
function comparison () {
    
    if (computerchoice() === userInput()) {
    return "draw", rounds++;
    }
    
    if (userInput() === "Rock" && computerchoice() === "Scissors") {
        return "You win", 
        rounds++, player++;
    }
    else if (userInput() === "Paper" && computerchoice() === "Rock") {
       return "You win",
       rounds++, player++;
     
    }
    else if (userInput() === "Scissors" && computerchoice() === "Paper") {
        return "You win",
        score++,
        playerscore++;
    
    }
    else if (computerchoice() === "Rock" && userInput() === "Scissors") {
       return "You lose",
       rounds++,
       computer++;
     
    }
    else if (computerchoice() === "Paper" && userInput() === "Rock") {
        return "You lose",
        rounds++,
        computer++;
    
    }
    else if (computerchoice() === "Scissors" && userInput() === "Paper") {
        return "You lose",
        rounds++,
        computer++;
    }


   }

function scoretracker() {
    for (rounds = 0; rounds < 5; rounds++)

        if (computer === 5) {
            return "game over, you lost";
    }
        if (player === 5) {
            return "game over, you won";
        }
        

    }








    // if (computerchoice == userInput) {
    //     return "draw"; 
    // }
    // else if (computerchoice() == "Rock") {
    //     return (userInput() == "Paper") ? "I chose rock, Paper beats rock" : "I chose rock, Rock beats scissors"
    // }
    
    // else if (computerchoice() == "Paper") {
    //     return (userInput() == "Scissors") ? "I chose paper, Scissors beats paper" : "I chose paper, Paper beats rock"
    // }
    // else if (computerchoice() == "Scissors") {
    //     return (userInput() == "Rock") ? "I chose Scissors, Rock beats Scissors" : "I chose scissors, Scissors beats paper"
    // }

console.log(userInput());
console.log(computerchoice());
console.log(comparison());
console.log(scoretracker());
console.log(player);
console.log(computer);


        

