
let games = 0
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
       else if (answer  )
       return answer;
    }



    // Notes for my small brain 
    // ? = ternary operator, compares the conditions
    // : splits the conditions, example in line 50/51, will check if the user input is paper, and if not will say the other possible input
    // flawed as a user can type anything and will win
function comparison () {

    if (computerchoice == userInput) {
        return "draw"
    }
    else if (computerchoice() == "Rock") {
        return (userInput() == "Paper") ? "I chose rock, Paper beats rock" : "I chose rock, Rock beats scissors"
    }
    
    else if (computerchoice() == "Paper") {
        return (userInput() == "Scissors") ? "I chose paper, Scissors beats paper" : "I chose paper, Paper beats rock"
    }
    else if (computerchoice() == "Scissors") {
        return (userInput() == "Rock") ? "I chose Scissors, Rock beats Scissors" : "I chose scissors, Scissors beats paper"
    }
}

console.log(comparison());


        




