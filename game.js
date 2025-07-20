function getComputerChoice() {
    // generate random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    // if statements to give computer output and return it
    let computerChoice;
    if (randomNumber == 1) {
        return computerChoice = "ROCK";
    }
    else if (randomNumber == 2) {
        return computerChoice = "PAPER";
    }
    else {
        return computerChoice = "SCISSORS"
    }
}

function getHumanChoice () {
    // gather choice from user and return it
    let userChoice;
    userChoice = prompt("Please enter ROCK, PAPER, or SCISSORS:" );

    return userChoice;
}


function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toUpperCase();
            console.log("Your choice: " + humanChoice);
            console.log("Computer choice: " + computerChoice);
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        }
        else if (humanChoice === "ROCK" && computerChoice === "SCISSORS" || humanChoice === "SCISSORS" && computerChoice === "PAPER" || humanChoice === "PAPER" && computerChoice === "ROCK") {
            console.log(humanChoice + " beats " + computerChoice + "! You get one point!");
            humanScore += 1;
        }
        else {
            console.log(computerChoice + " beats " + humanChoice + "! Computer gets one point!");
            computerScore += 1;
        }
    }

    for (let i=1; i <= 5; i++) {
        let computerChoice = getComputerChoice();
        let userChoice = getHumanChoice();
        playRound(userChoice, computerChoice);
    }
    
    if (humanScore > computerScore) {
        return ("Computer has " + computerScore + " points and you have " + humanScore + " points. You win!");
    }
    else if (humanScore == computerScore) {
        return ("Computer has " + computerScore + " points and you have " + humanScore + " points. It's a tie!");
    }
    else {
        return ("Computer has " + computerScore + " points and you have " + humanScore + " points. Computer wins!");
    }
}


console.log(playGame());