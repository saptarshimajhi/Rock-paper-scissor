let userScore = 0;
let compsScore = 0;
const userScore_span = document.getElementById("userscore");
const compScore_span = document.getElementById("compscore");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");

function main() {
    rock.addEventListener('click', function () {
        Game("r");
    })

    paper.addEventListener('click', function () {
        Game("p");
    })

    scissor.addEventListener('click', function () {
        Game("s");
    })
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}




function Game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win();
            break;
        case "sr":
        case "rp":
        case "ps":
            lost();
            break;

        case "ss":
        case "rr":
        case "pp":
            draw();
            break;
    }
}

function win() {
userScore++;
userScore_span.innerHTML=userScore;  
result_div.innerHTML= "User wins";
}

function lost() {
    compsScore++;
    compScore_span.innerHTML=compsScore;  
    result_div.innerHTML= "Computer wins";
    }
    
    function draw() {
        result_div.innerHTML= "It is a draw";
        }
        
main();