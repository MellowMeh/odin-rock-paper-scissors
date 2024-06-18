//Declare players score variables (global scope)
let humanScore = 0;
let computerScore = 0;


////Have computer randomly select rock, paper, or scissors
let computerDecision
let getComputerChoice = (rockPaperOrScissors) => {
    computerDecision = Math.random();
        if (computerDecision < 0.33) {
            computerDecision = "rock";
        } else if (computerDecision > 0.33 && computerDecision < 0.66) {
            computerDecision = "paper";
        } else {
            computerDecision = "scissors";
        }
}

getComputerChoice();

//Assign HTML elements to JS variables
const rockButton = document.querySelector('#buttonRock');
const paperButton = document.querySelector('#buttonPaper')
const scissorsButton = document.querySelector('#buttonScissors')


//When user clicks rock, paper, or scissor a round is played - scores are tracked on screen
let body = document.querySelector('#body');
let container = document.querySelector('#container');
let scoreCard = document.querySelector('#scoreCard');
let humanLine = document.querySelector('#humanLine');
let computerLine = document.querySelector('#computerLine');
let userInput;

let displayTie = () => {
    const tieText = document.createElement('p');
    scoreCard.appendChild(tieText);
        tieText.textContent = "It was a tie!"
}

let displayWin = () => {
    const winText = document.createElement('p');
    scoreCard.appendChild(winText);
        winText.textContent = "Congratulations, you won a point!"
}

let displayLoss = () => {
    const lossText = document.createElement('p');
    scoreCard.appendChild(lossText);
        lossText.textContent = "Oh no, the computer won that round."
}

let displayScore = () => {
    const scoreTextHuman = document.createElement('p');
    const scoreTextComputer = document.createElement('p');
    scoreCard.appendChild(scoreTextHuman);
        scoreTextHuman.textContent = ("Your score: " + humanScore);
    scoreCard.appendChild(scoreTextComputer);
        scoreTextComputer.textContent = ("Computer score: " + computerScore);
    }

let playRound = (event) => {
    let target = event.target;

    switch(target.id) {
        case 'buttonRock':
            userInput = 'rock';
            switch(computerDecision) {
                case 'rock':
                    //display: tie
                    displayTie(); 
                    displayScore();
                    console.log("rock,rock");
                    break;
                case 'paper':
                    //display: loss
                    displayLoss();
                    computerScore++;
                    displayScore();
                    console.log("rock,paper");
                    break;
                case 'scissors':
                    //display: win
                    displayWin();
                    humanScore++;
                    displayScore();
                    console.log("rock, scissors");
                    break;
            }
            break;
        case 'buttonPaper':
            userInput = 'paper';
            switch(computerDecision) {
                case 'rock':
                    //display: win
                    displayWin();
                    humanScore++;
                    displayScore();
                    console.log("paper,rock");
                    break;
                case 'paper':
                    //display: tie
                    displayTie();
                    displayScore();
                    console.log("paper,paper");
                    break;
                case 'scissors':
                    //display: loss
                    displayLoss();
                    computerScore++;
                    displayScore();
                    console.log("paper, scissors");
                    break;
            }
            break;
        case 'buttonScissors':
            userInput = 'scissors';
            switch(computerDecision) {
                case 'rock':
                    //display: loss
                    displayLoss();
                    computerScore++;
                    displayScore();
                    console.log("scissors,rock");
                    break;
                case 'paper':
                    //display: win
                    displayWin();
                    humanScore++;
                    displayScore();
                    console.log("scissors,paper");
                    break;
                case 'scissors':
                    //display: tie
                    displayTie();
                    displayScore();
                    console.log("scissors, scissors");
                    break;
            }
            break;
    }
    const resetButton = document.createElement('button');
    resetButton.setAttribute("id", "resetButton")
    resetButton.style.background = "blue";
    resetButton.style.color = "white";
    resetButton.textContent = "Play another round!";
    scoreCard.appendChild(resetButton);
};

container.addEventListener('click', playRound);

let resetScore = () => {
    scoreCard.removeChild(humanLine);
    scoreCard.removeChild(computerLine);
}

scoreCard.addEventListener('click', resetScore);

/*Resolution - when user or computer achieves 5 points, victory or loss message displays and user may choose to play again
let playGame = (fiveRoundsOfPlay) => {
    playRound();
    do {
        getComputerChoice();
        getUserChoice();
        playRound();
    } while (humanScore < 5 && computerScore < 5);
    if (humanScore > 4) {
        console.log("Congratulations! You have won! If you want to play again, refresh the web page.");
    } else if (computerScore = 5) {
        console.log("The computer got the better of you this time. The computer won. If you want to play again, refresh the web page.")
    } else {
        console.log("________________")
    }
}


playGame();
*/

