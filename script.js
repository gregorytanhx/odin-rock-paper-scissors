function getComputerChoice(params) {
    let roll = Math.random();
    if (roll < 0.34) {
        return 'rock';
    } else if (roll <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice(params) {
    let choice = 'none';
    while (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
        choice = prompt('Enter rock, paper or scissors: ').toLowerCase();
    }
    return choice;
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("draw");
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log("You win! Scissors beats paper.");\
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
    }
}

let humanScore = 0;
let computerScore = 0;

getHumanChoice();