function getComputerChoice() {
    let min = 1;
    let max = 3;
    let num = Math.floor(Math.random() * (max - min + 1) + min);

    switch (num) {
        case 1:
            return "rock";
            break;
        
        case 2:
            return "paper";
            break;
        
        case 3:
            return "scissors";
            break;
    }
}

function playRound(playerChoice,computerChoice) {
    let whoWon;
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === computerChoice) {
        return whoWon = 0;
    }

    else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper") {
        return whoWon = 1;
    }

    else {
        return whoWon = 2;
    }
}

const playerChoice = "ROCK";
const computerChoice = getComputerChoice(1,3);

playRound(playerChoice,computerChoice);
