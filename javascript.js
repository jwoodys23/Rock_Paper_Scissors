function getComputerChoice() {
    // Randomly returns either Rock, Paper or Scissors as a string
    const randomNum = Math.random();
    if (randomNum < .34) {
        return "ROCK";
    } else if(randomNum > .66) {
            return "PAPER";
        } else {
            return "SCISSORS";
        }
}

function getPlayerChoice () {
    // Promps player for selection and converts to uppercase to account for different capitalization from input
    return prompt("Rock, Paper or Scissors?").toUpperCase();
}

let playerSelection = '';
let computerSelection = '';
let playerScore = 0;
let computerScore = 0;
let winner = '';

function playRound(playerSelection, computerSelection) {
    //Compares players selection to computers selection and returns the winner of the round
    if (playerSelection == computerSelection) {
        winner = 'tie';
    } if ((playerSelection == 'ROCK' && computerSelection == 'SCISSORS' ) || 
          (playerSelection == 'PAPER' && computerSelection == 'ROCK') ||
          (playerSelection == 'SCISSORS' && computerSelection == 'PAPER')
    ) {
        playerScore++
        winner = 'player';
    } if ((playerSelection == 'ROCK' && computerSelection == 'PAPER') ||
          (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') ||
          (playerSelection == 'SCISSORS' && computerSelection == 'ROCK')
    ) {
        computerScore++
        winner = 'computer'
    }
}
function gameOver (playerScore, computerScore) {
    // Determines if player or computer reaches winning score. 
    if (playerScore == 2 || computerScore ==2) {
        console.log('Game Over, ' + winner + " wins!")
        return true;
    } 
    else {
        roundWinnerMessage(winner);
        return false;
    }
}
function roundWinnerMessage(winner) {
    // Returns a message at the end of each round for the result of the round and updated score.
    switch(winner){
        case 'tie':
            console.log('Its a tie! The score is You: ' + playerScore + ' To Computer: ' +computerScore);
            break;
        case 'computer':
            console.log('Computer Wins! The score is You: ' + playerScore + ' To Computer: ' +computerScore);
            break;
        case 'player':
            console.log('Player Wins! The score is You: ' + playerScore + ' To Computer: ' +computerScore)
            break;
    }
}

function playGame(playerSelection, computerSelection){
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

}
while (gameOver(playerScore, computerScore) === false) {
    // Runs the game as long as neither the player or computer reaches the winning score
    playGame();
}





