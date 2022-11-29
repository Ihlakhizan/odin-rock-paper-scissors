let playerScore = 0;
let computerScore = 0;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getComputerChoice() { // Randomly returns "rock", "paper", or "scissors"
    let choices = ["rock", "paper", "scissors"];
    let min = 1;
    let max = 3;
    return choices[(Math.floor(Math.random() * (max - min + 1) + min))-1];
}

const buttons = document.querySelectorAll("button"); // This function calls playRound() with the right selection when any button is clicked.
buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.className);
    });
});

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}

function playRound(playerChoice) { // Plays a round of RPS and returns the winner.
    let computerChoice = getComputerChoice();
    const scoreboard = document.querySelector(".scoreboard");
    const results = document.querySelector(".results");
    const roundResult = document.createElement("div");
    const gameResult = document.createElement("div");
    gameResult.setAttribute("style", "padding-top: 10px; font-size: 20px;");

    if (playerChoice === computerChoice) {
        roundResult.textContent = "It's a draw!";
    }

    else if (playerChoice === "rock" && computerChoice === "scissors" ||
    playerChoice === "paper" && computerChoice === "rock" ||
    playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        roundResult.textContent = `You win! ${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}!`;
    }

    else {
        computerScore++;
        roundResult.textContent = `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(playerChoice)}!`;
    }

    results.appendChild(roundResult);
    scoreboard.textContent = `Player Score: ${playerScore}\nComputer Score: ${computerScore}`;

    if (playerScore === 5) {
        gameResult.textContent = "You win the game!";
        gameResult.style.color = "green";
        results.appendChild(gameResult);
        disableButtons();
    }

    if (computerScore === 5) {
        gameResult.textContent = "The computer wins the game!";
        gameResult.style.color = "red";
        results.appendChild(gameResult);
        disableButtons();
    }

    return;
}