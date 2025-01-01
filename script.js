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
        result = 'Rock beats Scissors!';
    } else if (a == 'paper' && b == 'rock') {   
        result = 'Paper beats Rock!';
    }  else if (a == 'scissors' && b == 'paper') {
        result = 'Scissors beats Paper!';
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
        const humanScoreDisplay = document.querySelector(".human .score");
        const computerScoreDisplay = document.querySelector(".computer .score");
        const displayWinner = document.querySelector(".winner");

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
        humanScoreDisplay.textContent = "Human: " + humanScore;
        computerScoreDisplay.textContent = " Computer: " + computerScore;
        
        //TODO: add popup to play again
        if (humanScore == 5 || computerScore == 5) {
            if (humanScore == 5) {
                displayWinner.textContent = "You won!";
            } else {
                displayWinner.textContent = "Computer won!";
            }
            humanScore = 0;
            computerScore = 0;
        } else {
            displayWinner.textContent = "";
        }
    }


}

playGame();
  