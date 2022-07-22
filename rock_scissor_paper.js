// the computer have to randomly generate a selection for each play 
// the player can choose their moves each time using prompt 
// The game will last for 5 rounds, winner will be announce at last
// Every round should declares a winner

// Initialise mark for computer and player
const computerScore = 0;
const playerScore = 0;

// Generate random choice for computer
function getComputerChoice() {
    const choices = Math.floor(Math.random()*3);
    switch (choices) {
        case 0:
            return "Rock";
            break;

        case 1:
            return "Scissors";
            break;
        
        case 2:
            return "Paper";
            break;
    }
}

const computerSelection = getComputerChoice();

// Get player choice
const playerSelection = prompt("What's your choice?");


// Play single round 
function playRound(playerSelection, compueterSelection) {

}





