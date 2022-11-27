function getComputerChoice() { // Randomly returns "Rock", "Paper", or "Scissors"
    let min = 1;
    let max = 3;
    let num = Math.floor(Math.random() * (max - min + 1) + min);

    switch (num) {
        case 1:
            return "Rock";
            break;
        
        case 2:
            return "Paper";
            break;
        
        case 3:
            return "Scissors";
            break;
    }
}

function playRound(playerChoice) { // Plays a round of RPS and returns the winner.
    let whoWon; 
    let computerChoice = getComputerChoice();

    playerChoice = playerChoice.slice(0,1).toUpperCase() + playerChoice.toLowerCase().slice(1);

    while (playerChoice !== "Rock" && playerChoice !== "Paper" && playerChoice !== "Scissors") {
        playerChoice = prompt("Invalid choice. Rock/Paper/Scissors?")
        playerChoice = playerChoice.slice(0,1).toUpperCase() + playerChoice.toLowerCase().slice(1);
    }

    if (playerChoice === computerChoice) {
        console.log(`It's a draw!`);
        return whoWon = 0;
    }

    else if (playerChoice === "Rock" && computerChoice === "Scissors" ||
    playerChoice === "Paper" && computerChoice === "Rock" ||
    playerChoice === "Scissors" && computerChoice === "Paper") {
        console.log(`You win! ${playerChoice} beats ${computerChoice}!`);
        return whoWon = 1;
    }

    else {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}!`);
        return whoWon = 2;
    }
}

function game() { // Plays five rounds of RPS.
    let playerScore = 0;
    let computerScore = 0;
    let whoWon;

    for (let i = 0; i < 5; i++) {
        whoWon = playRound(prompt("Rock, Paper, or Scissors?"),getComputerChoice());

        switch (whoWon) {
            case 1:
                playerScore++;
                console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
                break;
            
            case 2:
                computerScore++;
                console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
                break;

            default:
                console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
        }
        
        /*if (whoWon === 1) {
            playerScore++;
            console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
        }

        else if (whoWon === 2) {
            computerScore++;
            console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
        }

        else {
            console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
        }*/
    }

    if (playerScore === computerScore) {
        console.log("It's a tie!");
    }
    else if (playerScore > computerScore) {
        console.log(`You win! You won ${playerScore} out of 5 games.`);
    }
    else {
        console.log(`You lose! You won ${playerScore} out of 5 games.`);
    }
}

game();