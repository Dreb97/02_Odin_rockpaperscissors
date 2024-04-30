let humanScore = 0;
let computerScore = 0;
const humanScoreSpan = document.getElementById("human-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultDiv = document.getElementById("result");

function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    let computer = Math.floor(Math.random() * arr.length);
    let computerPlay = arr[computer];
    return computerPlay;
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        resultDiv.textContent = "It's a tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultDiv.textContent = "Human wins";
        humanScore++;
    } else {
        resultDiv.textContent = "Computer wins";
        computerScore++;
    }

    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            resultDiv.textContent = "Human is the winner!";
        } else {
            resultDiv.textContent = "Computer is the winner!";
        }
        // Disable buttons after game over
        document.getElementById("rock-btn").disabled = true;
        document.getElementById("paper-btn").disabled = true;
        document.getElementById("scissors-btn").disabled = true;
        document.getElementById("reset-btn").style.display = "block";
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreSpan.textContent = 0;
    computerScoreSpan.textContent = 0;
    resultDiv.textContent = "";
    // Enable buttons
    document.getElementById("rock-btn").disabled = false;
    document.getElementById("paper-btn").disabled = false;
    document.getElementById("scissors-btn").disabled = false;
    // Hide reset button
    document.getElementById("reset-btn").style.display = "none";
}

document.getElementById("rock-btn").addEventListener("click", function() {
    playRound("rock");
});

document.getElementById("paper-btn").addEventListener("click", function() {
    playRound("paper");
});

document.getElementById("scissors-btn").addEventListener("click", function() {
    playRound("scissors");
});

document.getElementById("reset-btn").addEventListener("click", function() {
    resetGame();
});