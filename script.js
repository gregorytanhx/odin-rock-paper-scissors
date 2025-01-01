function getComputerChoice() {
    let roll = Math.random();
    if (roll < 0.34) {
        return 'rock';
    } else if (roll <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let choice = 'none';
    while (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
        choice = prompt('Enter rock, paper or scissors: ');
    }
    return choice;
}




function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log(humanChoice)
        humanChoice = humanChoice.trim().toLowerCase();
        if (humanChoice == computerChoice) {
            console.log("draw");
        } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
            console.log("You win! Rock beats scissors.");
            humanScore++;
        } else if (humanChoice == 'paper' && computerChoice == 'rock') {
            console.log("You win! Paper beats rock.");
            humanScore++;
        } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
            console.log("You win! Scissors beats paper.");
            humanScore++;
        } else if (humanChoice == 'rock' && computerChoice == 'paper') {
            console.log("You lose! Paper beats rock.");
            computerScore++;
        } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
            console.log("You lose! Scissors beats paper.");
            computerScore++;
        } else if (humanChoice == 'scissors' && computerChoice == 'rock') { 
            console.log("You lose! Rock beats scissors.");
            computerScore++;
        } else {
            console.log("Invalid input. Please enter rock, paper or scissors.");
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log("Human score: " + humanScore + " Computer score: " + computerScore);
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore == computerScore) {
        console.log("Draw!");
    } else {
        console.log("You lose!");
    }
}

playGame();