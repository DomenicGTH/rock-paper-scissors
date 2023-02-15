let computer = 0
let player = 0
let rounds = 0
let draws
let buttonanswer
let computeranswer
let drawsanswer = document.querySelector("#draws");
let playerchoice = document.querySelector("#playerchoice");
let computerscore = document.querySelector('#computerchoice')
let results = document.querySelector('#results')
let draw = document.querySelector('#draw')
const buttonChoice = document.querySelectorAll('.choice');

buttonChoice.forEach(button => button.addEventListener('click', () => {

    buttonanswer = button.textContent;
    computerchoice();
    playerchoice.textContent = `Player chose ${buttonanswer} --- score: ${player}`;
    computerscore.textContent = `Computer chose ${computeranswer} --- score: ${computer}`;
    // draw.textContent = `Draws: ${draws}`;
    results.textContent = comparison();
}));
    // btn.addEventListener('click', function(e){
    //     buttonanswer = e.target.innerText;
    //     console.log(buttonanswer);

function comparison() {

    let a = buttonanswer;
    let b = computeranswer;

    if (a == b) {
        draws++;
    } 
    
    if ((a === "Rock" && b === "Scissors") ||
        (a=== "Paper" && b === "Rock") ||
        (a === "Scissors" && b === "Paper")) {
        player++;
    
    }
    if  ((b === "Rock" && a === "Scissors") ||
        (b === "Paper" && a === "Rock") ||
        (b === "Scissors" && a === "Paper")) {
        computer++;
    }
}
         


// function scoretracker() {
//     for (rounds = 0; rounds < 10; rounds++) {
//         console.log('---')
//         console.log(computer, 'computer')
//         console.log(player, 'player')
//         console.log(rounds, 'rounds')
//         console.log(draws, 'draws')
//         comparison();

//         if (rounds === 9) {
//             console.log("Game over");
//         }
//         if (computer === 5) {
//             rounds = 10
//             console.log("You lost! Total score = player -" + player + "- computer -" + computer + "- and draws -" + draws + "-");
//         }
//         if (player === 5) { 
//             rounds = 10
//             console.log("You won! Total score = player -" + player + "- computer -" + computer + "- and draws -" + draws + "-");
//         }
//     }
// }

function computerchoice () {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        computeranswer = "Rock"
        return "Rock";
    }
    else if (randomNum === 1) {
        computeranswer = "Paper"
        return "Paper";
    }
    else if (randomNum === 2) {
        computeranswer = "Scissors"
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