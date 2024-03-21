function getComputerChoice() {
    // Randomly returns either Rock, Paper or Scissors as a string
    const randomNum = Math.random();
    if (randomNum < .34) {
        return "Rock"
    } else if(randomNum > .66) {
            return "Paper"
        } else {
            return "Scissors"
        }
}

function playRound(playerSelection, computerSelection) {
    //Compares players selection to computers selection and returns the winner of the round
    return playerSelection;
    
}

const playerSelection = prompt("Rock, Paper or Scissors?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(getComputerChoice());
