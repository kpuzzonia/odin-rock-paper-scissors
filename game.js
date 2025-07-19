function getComputerChoice() {
    // generate random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    // if statements to give computer output and return it
    let computerChoice;
    if (randomNumber == 1) {
        return computerChoice = "rock";
    }
    else if (randomNumber == 2) {
        return computerChoice = "paper";
    }
    else {
        return computerChoice = "scissors"
    }
}

function getHumanChoice () {
    // gather choice from user and return it
    let userChoice;
    userChoice = prompt("Please enter rock, paper, or scissors:" );

    // make sure it is all lower case to help with error handling
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Rock beats scissors! You get one point!");
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Scissors best paper! You get one point!");
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Paper beats rock! You get one point!");
    }
}

let humanScore = 0;
let computerScore = 0;

let computerChoice = getComputerChoice();
console.log(computerChoice);
let humanChoice = getHumanChoice();
console.log(humanChoice);
playRound(humanChoice, computerChoice);