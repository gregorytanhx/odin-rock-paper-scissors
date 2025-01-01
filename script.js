
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

