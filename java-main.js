let computer = 0
let player = 0
let rounds = 0
let draws = 0

function comparison() {

    let a = userInput()
    let b = computerchoice()

    if (a === b) {
        draws++;
    } 
    
    if ((a === "Rock" && b === "Scissors") ||
        (a === "Paper" && b === "Rock") ||
        (a === "Scissors" && b === "Paper")) {
        player++;
    
    }
    if  ((b === "Rock" && a === "Scissors") ||
        (b === "Paper" && a === "Rock") ||
        (b === "Scissors" && a === "Paper")) {
        computer++;
    }
}
         


function scoretracker() {
    for (rounds = 0; rounds < 10; rounds++) {
        console.log('---')
        console.log(computer, 'computer')
        console.log(player, 'player')
        console.log(rounds, 'rounds')
        console.log(draws, 'draws')
        comparison();

        if (rounds === 9) {
            console.log("Game over");
        }
        if (computer === 5) {
            rounds = 10
            console.log("You lost! Total score = player -" + player + "- computer -" + computer + "- and draws -" + draws + "-");
        }
        if (player === 5) { 
            rounds = 10
            console.log("You won! Total score = player -" + player + "- computer -" + computer + "- and draws -" + draws + "-");
        }
    }
}

function computerchoice () {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "Rock";
    }
    else if (randomNum === 1) {
        return "Paper";
    }
    else if (randomNum === 2) {
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
scoretracker()