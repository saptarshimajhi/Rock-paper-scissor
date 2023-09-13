let userScore = 0;
let compsScore = 0;
let userStat = 0;
let compStat = 0;
const userScore_span = document.getElementById("userscore");
const userStat_span = document.getElementById("userstat");
const compScore_span = document.getElementById("compscore");
const compStat_span = document.getElementById("compstat");
const scoreboard_div = document.querySelector(".scoreboard");
const leaderBoard_div = document.querySelector(".leaderboard");
const logbox = document.querySelector(".logbox");
const result_div = document.querySelector(".result");
const stat_div = document.querySelector(".stat");
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
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lost(userChoice, computerChoice);
            break;

        case "ss":
        case "rr":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}


function convert(letter) {
    if (letter == "s") return "&#9988";
    if (letter == "r") return "&#9994";
    if (letter == "p") return "&#9995";
}


function win(_user, _computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    userStat++;
    userStat_span.innerHTML = userStat;
    if (userStat == 5 && compStat < 5) {
        userStat_span.innerHTML = userStat + " User  Winner  &#127942";
        result_div.innerHTML = " User  Winner  &#127942";
        compStat = 6;
        const newLogEntry = document.createElement('li');
        newLogEntry.textContent = result_div.innerHTML;
        logbox.appendChild(newLogEntry);
    }
    else if (userStat > 5) {
        if (compStat <= 5) {
            userStat = 0;
            compStat = 0;
            userScore = 0;
            compsScore = 0;
            userScore_span.innerHTML = userScore;
            compScore_span.innerHTML = compsScore;
            userStat_span.innerHTML = userStat;
            compStat_span.innerHTML = compStat;
        }
        userStat = 0;
        compStat = 0;
        userScore = 0;
        compsScore = 0;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compsScore;
        userStat_span.innerHTML = userStat;
        compStat_span.innerHTML = compStat;
    }
    else if (userStat < 5) {
        result_div.innerHTML = "user wins by  " + convert(_user);
        const newLogEntry = document.createElement('li');
        newLogEntry.textContent = result_div.innerHTML;
        logbox.appendChild(newLogEntry);
    }
}

function lost(_user, _computer) {
    compsScore++;
    compScore_span.innerHTML = compsScore;
    compStat++;
    compStat_span.innerHTML = compStat;
    if (compStat == 5 && userStat < 5) {
        compStat_span.innerHTML = compStat + " Computer  Winner  &#127942";
        userStat = 6;
        result_div.innerHTML = " Computer  Winner  &#127942";
        const newLogEntry = document.createElement('li');
        newLogEntry.textContent = result_div.innerHTML;
        logbox.appendChild(newLogEntry);
    }
    else if (compStat > 5) {
        if (userStat <= 5) {
            userStat = 0;
            compStat = 0;
            userScore = 0;
            compsScore = 0;
            userScore_span.innerHTML = userScore;
            compScore_span.innerHTML = compsScore;
            userStat_span.innerHTML = userStat;
            compStat_span.innerHTML = compStat;
        }
        userStat = 0;
        compStat = 0;
        userScore = 0;
        compsScore = 0;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compsScore;
        userStat_span.innerHTML = userStat;
        compStat_span.innerHTML = compStat;
    }
    else if (compStat < 5) {
        result_div.innerHTML = "computer wins by  " + convert(_computer);
        const newLogEntry = document.createElement('li');
        newLogEntry.textContent = result_div.innerHTML;
        logbox.appendChild(newLogEntry);
    }
}

function draw(_user, _computer) {
    if (userStat == 5 || compStat == 5) {
        userStat = 0;
        compStat = 0;
        userScore = 0;
        compsScore = 0;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compsScore;
        userStat_span.innerHTML = userStat;
        compStat_span.innerHTML = compStat;
        result_div.innerHTML = "it is a draw";
        const newLogEntry = document.createElement('li');
        newLogEntry.textContent = result_div.innerHTML;
        logbox.appendChild(newLogEntry);
    }
    else if (userStat < 5 && compStat < 5) {
        result_div.innerHTML = "it is a draw";
        const newLogEntry = document.createElement('li');
        newLogEntry.textContent = result_div.innerHTML;
        logbox.appendChild(newLogEntry);
    }
}

main();