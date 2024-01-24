let choices = ["Rock", "Paper", "Scissors"];
let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let cpuScore = 0;
let roundNum = 0;

const rockBtn = document.querySelector("#Rock");
const paperBtn = document.querySelector("#Paper");
const scissorsBtn = document.querySelector("#Scissors");
const roundRes = document.querySelector("#round");
const rounds = document.querySelector("#roundCount");
const pScore = document.querySelector("#pscore");  
const oScore = document.querySelector("#oscore"); 

rockBtn.addEventListener(`click`, () => {
    roundRes.innerHTML = playRound(`Rock`, getComputerChoice());
    displayScore();
    checkScore();
}); //squirtle

paperBtn.addEventListener(`click`, () => {
    roundRes.innerHTML = playRound(`Paper`, getComputerChoice());
    displayScore();
    checkScore();
}); //bulbasaur

scissorsBtn.addEventListener(`click`, () => {
    roundRes.innerHTML = playRound(`Scissors`, getComputerChoice());
    displayScore();
    checkScore();
}); //charmander

function getComputerChoice () {
    return choices[Math.floor(Math.random() * 3)]; 
}

function playRound (playerSelection, computerSelection) {

    if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            ++playerScore;
            return `<span id="squirtle">Squirtle's</span> bubbles extinguised <span id="charmander">Charmander</span>!`;
        } else if (computerSelection == "Paper") {
            ++cpuScore;
            return `<span id="squirtle">Squirtle</span> was tackled by <span id="bulbasuar">Bulbasaur</span>!`
        } else return `It is a tie! <span id="squirtle">Squirtles</span> will not attack each other.`
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Paper") {
            ++playerScore;
            return `<span id="charmander">Charmander</span> scorches <span id="bulbasuar">Bulbasuar</span>!`
        } else if (computerSelection == "Rock") {
            ++cpuScore;
            return `<span id="charmander">Charmander's</span> fire was put out by <span id="squirtle">Squirtle</span>!`
        } else return `It is a tie! <span id="charmander">Charmanders</span> will not attack each other.`
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            ++playerScore;
            return `<span id="bulbasuar">Bulbasuar</span> slices <span id="squirtle">Squirtle</span> with razor leaf!`
        } else if (computerSelection == "Scissors") {
            ++cpuScore;
            return `<span id="bulbasuar">Bulbasuar</span> was roasted by <span id="charmander">Charmander</span>!`
        } else return `It is a tie! <span id="bulbasuar">Bulbasuars</span> will not attack each other.`   
    }
}

function checkScore () {
    const winner = playerScore > cpuScore? "Player" : "Opponent";
    const winningRounds = Math.max(playerScore, cpuScore);

    if (playerScore == 3) {
        alert(`Game over! Player wins!! The score is ${playerScore} to ${cpuScore}`);
        resetGame();
    } else if (cpuScore == 3) {
        alert(`Game over! Player wins!! The score is ${playerScore} to ${cpuScore}`);
        resetGame();
    } else if (roundNum == 5 && playerScore != cpuScore) {
        alert(`The winner is ${winner} with ${winningRounds} rounds!`);
        resetGame();
    } else if (roundNum == 5 && playerScore == cpuScore) {
        alert(`Draw!`);
        resetGame();
    }
}

function displayScore() {
    rounds.textContent = `Round ${++roundNum} Results!`;
    oScore.textContent = `${cpuScore}`;
    pScore.textContent = `${playerScore}`;
}

function resetGame() {
    playerScore = 0;
    cpuScore = 0;
    roundNum = 0;
    rounds.textContent = "Best of 5!!!";
}