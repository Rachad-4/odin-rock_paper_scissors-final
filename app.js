let choices = ["Rock", "Paper", "Scissors"];
let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let cpuScore = 0;

const rockBtn = document.querySelector("#Rock");
const paperBtn = document.querySelector("#Paper");
const scissorsBtn = document.querySelector("#Scissors");
const roundSec = document.querySelector("#round");

rockBtn.addEventListener(`click`, () => {
    roundSec.textContent = playRound(`Rock`, getComputerChoice());
});

paperBtn.addEventListener(`click`, () => {
    roundSec.textContent = playRound(`Paper`, getComputerChoice());
});

scissorsBtn.addEventListener(`click`, () => {
    roundSec.textContent = playRound(`Scissors`, getComputerChoice());
});

function getComputerChoice () {
    return choices[Math.floor(Math.random() * 3)]; 
}

function playRound (playerSelection, computerSelection) {

    if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            return `${playerSelection} crushes ${computerSelection}.... Player: ${++playerScore}    Computer: 0`;
        } else if (computerSelection == "Paper") {
            return `You Lose! ${computerSelection} covers ${playerSelection}`
        } else return "It is tie!"
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Paper") {
            return `You Won! ${playerSelection} beats ${computerSelection}`
        } else if (computerSelection == "Rock") {
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        } else return "It is tie!"
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            return `You Won! ${playerSelection} beats ${computerSelection}`
        } else if (computerSelection == "Scissors") {
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        } else return "It is tie!"    
    }
}

function game() {
    console.log(`Round ${i}! Fight!!!`);
    playerSelection = prompt("Paper, Scissors, or Rock")
    console.log(playRound(playerSelection, computerSelection));
}

function checkScore (playerScore, computerScore) {
    if (playerScore == 3) {
        return `Game over! You win!!`;
    } else if (computerScore == 3) {
        return `Game over! You lose!!`;
    }
}
