function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    let computer = Math.floor(Math.random() * arr.length);
    let computerPlay = arr[computer];
    console.log(computerPlay);
    return computerPlay;
}

function getHumanChoice() {
    let human = prompt("Choose rock, paper or scissors");
    let humanChoiceLowerCase = human.toLowerCase();
    console.log(humanChoiceLowerCase);
    return humanChoiceLowerCase;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        function playRound(humanChoice, computerChoice) {
            if (humanChoice === computerChoice) {
                console.log("It's a tie");
            } else if (
                (humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")
            ) {
                console.log("Human wins");
                humanScore++;
            } else {
                console.log("Computer wins");
                computerScore++;
            }
        }

        playRound(humanSelection, computerSelection);
    }

    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);
}

playGame();
playGame();
playGame();
playGame();
playGame();
