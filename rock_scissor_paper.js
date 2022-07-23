// the computer have to randomly generate a selection for each play 
// the player can choose their moves each time using prompt 
// The game will last for 5 rounds, winner will be announce at last
// Every round should declares a winner

// Initialise mark for computer and player
const computerScore = 0;
const playerScore = 0;
const result = "";

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
const playerSelection = prompt("What's your choice? rock, scissors, paper").toLowerCase();
return playerSelection;

// Play single round 
function playRound(playerSelection, compueterSelection) {

    //When tie 
if(playerSelection == compueterSelection) {
   result = ("It's a tie! " + "\n" + "You both chose " + playerSelection + "\n" + "Player Score: " + playerScore + "\n" + "Computer Score: " + computerScore);
}
  
   //When player win
if((playerSelection === "rock" && computerSelection === "Scissors") ||
   (playerSelection === "paper" && compueterSelection === "Rock") || 
   (playerSelection === "scissors" && compueterSelection === "Paper")) {
    playerScore++;
    result = ("You win! " + playerSelection + " beats " + compueterSelection + "\n" + "Player Score: " + playerScore + "\n" + "Computer Score: " + computerScore);
   }

   //When computer win
if((compueterSelection === "rock" && playerSelection === "Scissors") ||
  (computerSelection === "paper" && playerSelection === "Rock") || 
  (compueterSelection === "scissors" && playerSelection === "Paper")) {
   computerScore++;
   result = ("You lose! " + compueterSelection + " beats " + playerSelection + "\n" + "Player Score: " + playerScore + "\n" + "Computer Score: " + computerScore);
}
}





