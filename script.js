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
    while (choice != 'rock' || choice != 'paper' || choice != 'scissors') {
        choice = prompt('Enter rock, paper or scissors: ');
    }
    return choice;
}

