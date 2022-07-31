// DOM 
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");
const rock_div = document.getElementById("rock");
const scissors_div = document.getElementById("scissors");
const paper_div = document.getElementById("paper");

function getComputerChoice() {
    const choices = ["rock","scissors","paper"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber]; // access array's index 
}

//Compare user choice with computer choice
function game(userChoice) {
const computerChoice = getComputerChoice(); 
switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
        win(userChoice,computerChoice);
        break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
        lose(userChoice,computerChoice);
        break;
    case "rockrock":
    case " scissorsscissors":
    case "paperpaper":
        draw(userChoice,computerChoice);
        break;
}
}

//What will happen to scoreboard and message when win 
function win(userChoice,computerChoice) {
userScore++; 
userScore_span.innerHTML = userScore; //score board
computerScore_span.innerHTML = computerScore; //score board
const tinyUserWord = "user".fontsize(1).sup();
const tinyCompWord = "comp".fontsize(1).sup();
result_p.innerHTML = userChoice + tinyUserWord +  " beats " + computerChoice + tinyCompWord + ". YOU WIN!"; // change message
}

//What will happen to scoreboard and message when lose 
function lose(userChoice,computerChoice) {
computerScore++;
const tinyUserWord = "user".fontsize(1).sup();
const tinyCompWord = "comp".fontsize(1).sup();
computerScore_span.innerHTML = computerScore; //score board
userScore_span.innerHTML = userScore; //score board
document.getElementById()
result_p.innerHTML = computerChoice + tinyCompWord +  " beats " + userChoice + tinyUserWord + ". YOU LOSE!"; // change message
}

//What will happen to scoreboard and message when draw
function draw(userChoice,computerChoice) {
computerScore_span.innerHTML = computerScore; //score board
userScore_span.innerHTML = userScore; //score board
const tinyUserWord = "user".fontsize(1).sup();
const tinyCompWord = "comp".fontsize(1).sup();
result_p.innerHTML = userChoice + tinyUserWord + " meets " + computerChoice + tinyCompWord + ". It's a DRAW!"; 
}


function main() {
    rock_div.addEventListener('click',function() {
        game("rock");
    })
    scissors_div.addEventListener('click',function() {
        game("scissors");
    })
    
    paper_div.addEventListener('click',function() {
        game("paper");
    })

}



main();