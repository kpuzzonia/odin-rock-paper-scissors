function getComputerChoice() {
    // generate random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    // if statements to give computer output
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

console.log(getComputerChoice());