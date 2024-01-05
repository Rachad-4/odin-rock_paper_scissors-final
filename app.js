let choices = ["Rock", "Paper", "Scissors"];
let playerSelection = prompt("Paper, Scissors, or Rock");
let computerSelection = getComputerChoice();


function getComputerChoice () {
    return choices[Math.floor(Math.random() * 3)]; 
}

function playRound (playerSelection, computerSelection) {
    let playerChoice = playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1).toLowerCase();

    if (playerChoice == "Rock") {
        if (computerSelection == "Scissors") {
            return `You Won! ${playerChoice} beats ${computerSelection}`
        } else if (computerSelection == "Paper") {
            return `You Lose! ${computerSelection} beats ${playerChoice}`
        } else return "It is tie!"
    } else if (playerChoice == "Scissors") {
        if (computerSelection == "Paper") {
            return `You Won! ${playerChoice} beats ${computerSelection}`
        } else if (computerSelection == "Rock") {
            return `You Lose! ${computerSelection} beats ${playerChoice}`
        } else return "It is tie!"
    } else if (playerChoice == "Paper") {
        if (computerSelection == "Rock") {
            return `You Won! ${playerChoice} beats ${computerSelection}`
        } else if (computerSelection == "Scissors") {
            return `You Lose! ${computerSelection} beats ${playerChoice}`
        } else return "It is tie!"    
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);
        console.log(playRound());
    }
}

console.log("Hello, world");
game();
