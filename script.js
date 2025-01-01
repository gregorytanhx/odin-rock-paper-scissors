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

function gameResult(a, b) {
    let result = "";
    let winner = 0;
    if (a == b) {
        result = "Draw" ;
        winner = -1;
    } else if (a == 'rock' && b == 'scissors') {
        result = 'rock beats scissors!';
    } else if (a == 'paper' && b == 'rock') {   
        result = 'paper beats rock!';
    }  else if (a == 'scissors' && b == 'paper') {
        result = 'scissors beats paper!';
    } else {
        return new Array(gameResult(b, a)[0], 1);
    }

    return [result, winner];

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        // add event listener for all
        button.addEventListener("click", () => {
            playRound(button.id, getComputerChoice());
        });
    });

    


    function playRound(humanChoice, computerChoice) {
        const displayResult = document.querySelector(".results");
        const displayScore = document.querySelector(".score");
        let result = gameResult(humanChoice, computerChoice);

        if (result[1] == 0) {
            displayResult.textContent = "You win! " + result[0];
            humanScore++;
        } else if (result[1] == 1) {
            displayResult.textContent = "You lose! " + result[0];
            computerScore++;
        } else {
            displayResult.textContent = result[0];
        }
        displayScore.textContent = "Human: " + humanScore + " Computer: " + computerScore;
    }


}

playGame();
  