function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < .34) {
        return "ROCK";
    } else if(randomNum > .66) {
            return "PAPER";
        } else {
            return "SCISSORS";
        }
}

let playerSelection = '';
let computerSelection = '';
let playerScore = 0;
let computerScore = 0;
let winner = '';

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        winner = 'tie';
    } if ((playerSelection == 'ROCK' && computerSelection == 'SCISSORS' ) || 
          (playerSelection == 'PAPER' && computerSelection == 'ROCK') ||
          (playerSelection == 'SCISSORS' && computerSelection == 'PAPER')
    ) {
        playerScore++;
        winner = 'player';
    } if ((playerSelection == 'ROCK' && computerSelection == 'PAPER') ||
          (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') ||
          (playerSelection == 'SCISSORS' && computerSelection == 'ROCK')
    ) {
        computerScore++
        winner = 'computer';
    }
}
function gameOver (playerScore, computerScore) {
    if (playerScore == 5 || computerScore == 5) {
        return true;
    } 
    else {
        return false;
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}
function roundWinnerMessage(winner) {
    if(!gameOver(playerScore, computerScore)){
        switch(winner){
            case 'tie':
                displayResult.textContent = 'Its a tie! The score is Player: ' + playerScore + ' To Computer: ' +computerScore;
                break;
            case 'computer':
                displayResult.textContent = 'Computer Wins! The score is Player: ' + playerScore + ' To Computer: ' +computerScore;
                break;
            case 'player':
                displayResult.textContent = 'Player Wins! The score is Player: ' + playerScore + ' To Computer: ' +computerScore;
                break;
        }} else {
            displayResult.textContent = displayResult.textContent = 'Game Over, ' + winner + " wins!";
        }
    }


const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resetBtn = document.querySelector("#reset");

const result = document.querySelector(".results");
const displayResult = document.createElement("div");
result.appendChild(displayResult);

rockBtn.addEventListener("click", () => {
    playerSelection = "ROCK";
    computerSelection = getComputerChoice();
    if (!gameOver(playerScore, computerScore)){
        playRound(playerSelection, computerSelection);
        roundWinnerMessage(winner);
    }  
});

paperBtn.addEventListener("click", () => {
    playerSelection = "PAPER";
    computerSelection = getComputerChoice();
    if (!gameOver(playerScore, computerScore)){
        playRound(playerSelection, computerSelection);
        roundWinnerMessage(winner);
    }  
});

scissorsBtn.addEventListener("click", () => {
    playerSelection = "SCISSORS";
    computerSelection = getComputerChoice();
    if (!gameOver(playerScore, computerScore)){
        playRound(playerSelection, computerSelection);
        roundWinnerMessage(winner);
    }  
});

resetBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    displayResult.textContent = "Score Reset!"
});




