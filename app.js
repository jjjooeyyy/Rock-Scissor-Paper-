// DOM 
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
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
        console.log("win");
        break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
        console.log("lose");
        break;
    case "rockrock":
    case " scissorsscissors":
    case "paperpaper":
        console.log(draw);
        break;
}
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

