// DOM 
let round = 0;
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById("score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const scissors_div = document.getElementById("scissors");
const paper_div = document.getElementById("paper");
const actionmsg_p = document.getElementById("action-msg");

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
round++;
userScore_span.innerHTML = userScore; //score board
//computerScore_span.innerHTML = computerScore; //score board
const tinyUserWord = "user".fontsize(1).sup();
const tinyCompWord = "comp".fontsize(1).sup();
result_p.innerHTML = userChoice + tinyUserWord +  " beats " + computerChoice + tinyCompWord + ". YOU WIN!"; // change message
document.getElementById(userChoice).classList.add("green");  // change border color when win 
setTimeout(() =>  document.getElementById(userChoice).classList.remove("green"),500); // remove the color border after 500ms
checkRound();
}

//What will happen to scoreboard and message when lose 
function lose(userChoice,computerChoice) {
computerScore++;
round++;
const tinyUserWord = "user".fontsize(1).sup();
const tinyCompWord = "comp".fontsize(1).sup();
computerScore_span.innerHTML = computerScore; //score board
//userScore_span.innerHTML = userScore; //score board
result_p.innerHTML = computerChoice + tinyCompWord +  " beats " + userChoice + tinyUserWord + ". YOU LOSE!"; // change message
document.getElementById(userChoice).classList.add("red");  // change border color when win 
setTimeout(() => document.getElementById(userChoice).classList.remove("red"),500); // remove the color border after 500ms
checkRound();
}

//What will happen to scoreboard and message when draw
function draw(userChoice,computerChoice) {
round++;
computerScore_span.innerHTML = computerScore; //score board
userScore_span.innerHTML = userScore; //score board
const tinyUserWord = "user".fontsize(1).sup();
const tinyCompWord = "comp".fontsize(1).sup();
result_p.innerHTML = userChoice + tinyUserWord + " meets " + computerChoice + tinyCompWord + ". It's a DRAW!"; // change message 
document.getElementById(userChoice).classList.add("blue");  // change border color when win 
setTimeout(() =>  document.getElementById(userChoice).classList.remove("blue"),500); // remove the color border after 500ms
checkRound();
}

function checkRound() {
    if (round < 5) {
        console.log("continue");
    } else {
        if(userScore > computerScore) {
            actionmsg_p.innerHTML = "You won! Refresh to play again!";
            endGame();
        } else if(computerScore > userScore) {
            actionmsg_p.innerHTML = "You lose! Refresh to play again!";
            endGame();
        } else {
            actionmsg_p.innerHTML = "It's a draw! Refresh to play again!"
            endGame();
        }
    }
}

function endGame() {
    document.getElementById("choices").style.display = "none";
    result_p.style.display = "none";
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