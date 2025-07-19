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
    
    return userChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if (humanChoice === "ROCK" && computerChoice === "SCISSORS" || humanChoice === "SCISSORS" && computerChoice === "PAPER" || humanChoice === "PAPER" && computerChoice === "ROCK") {
        console.log(humanChoice + " beats " + computerChoice + "! You get one point!");
    }
    else {
        console.log(computerChoice + " beats " + humanChoice + "! Computer gets one point!");
    }
}

let humanScore = 0;
let computerScore = 0;

let computerChoice = getComputerChoice();
console.log(computerChoice);
let humanChoice = getHumanChoice();
console.log(humanChoice);
playRound(humanChoice, computerChoice);