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

//Assign HTML elements to JS variables
const rockButton = document.querySelector('#buttonRock');
const paperButton = document.querySelector('#buttonPaper')
const scissorsButton = document.querySelector('#buttonScissors')
const scoreTextHuman = document.createElement('p');
const scoreTextComputer = document.createElement('p');
const message = document.createElement('p');
const computerMessage = document.createElement('p');
const userMessage = document.createElement('p');

//When user clicks rock, paper, or scissor a round is played - scores are tracked on screen
let body = document.querySelector('#body');
let container = document.querySelector('#container');
let scoreCard = document.querySelector('#scoreCard');
let userInput;
let currentMessage;

let displayScore = () => { 
    scoreCard.appendChild(scoreTextHuman);
        scoreTextHuman.textContent = ("Your score: " + humanScore);
    scoreCard.appendChild(scoreTextComputer);
        scoreTextComputer.textContent = ("Computer score: " + computerScore);
    }

let removeScore = () => {
    scoreCard.removeChild(scoreTextComputer);
    scoreCard.removeChild(scoreTextHuman);
    scoreCard.removeChild(message);
    scoreCard.removeChild(computerMessage);
    scoreCard.removeChild(userMessage);
}

let displayMessage = () => {
    if (currentMessage === "tie") {
        scoreCard.appendChild(message);
            message.textContent = "It is a tie."
        scoreCard.appendChild(userMessage);
            userMessage.textContent = "You chose: " + userInput;
        scoreCard.appendChild(computerMessage);
            computerMessage.textContent = "The computer chose: " +computerDecision;
    } else if (currentMessage === "win") {
        scoreCard.appendChild(message);
            message.textContent = "Congratulations! You won that round."
        scoreCard.appendChild(userMessage);
            userMessage.textContent = "You chose: " + userInput;
        scoreCard.appendChild(computerMessage);
            computerMessage.textContent = "The computer chose: " +computerDecision;
        } else {
        scoreCard.appendChild(message);
            message.textContent = "Oh no! It seems you lost that one."
        scoreCard.appendChild(userMessage);
            userMessage.textContent = "You chose: " + userInput;
        scoreCard.appendChild(computerMessage);
            computerMessage.textContent = "The computer chose: " +computerDecision;
    }
}

let getUserChoice = () => {
    let target = event.target;

    switch(target.id) {
        case 'buttonRock':
            userInput = 'rock';
            switch(computerDecision) {
                case 'rock':
                    currentMessage = "tie";
                    break;
                case 'paper':
                    currentMessage = "loss";
                    computerScore++;
                    break;
                case 'scissors':
                    currentMessage = "win";
                    humanScore++;
                    break;
            }
            break;
        case 'buttonPaper':
            userInput = 'paper';
            switch(computerDecision) {
                case 'rock':
                    currentMessage = "win";
                    humanScore++;
                    break;
                case 'paper':
                    currentMessage = "tie";
                    break;
                case 'scissors':
                    currentMessage = "loss";
                    computerScore++;
                    break;
            }
            break;
        case 'buttonScissors':
            userInput = 'scissors';
            switch(computerDecision) {
                case 'rock':
                    currentMessage = "loss";
                    computerScore++;
                    break;
                case 'paper':
                    currentMessage = "win";
                    humanScore++;
                    break;
                case 'scissors':
                    currentMessage = "tie";
                    break;
            }
            break;
    }
};

let playRound = (event) => {
    if (humanScore < 5 && computerScore < 5) {
        getComputerChoice();
        getUserChoice();
        displayMessage();
        displayScore();
        container.addEventListener('mousedown', removeScore);
    }
    if (humanScore > 4) {
        alert("Congratulations! You won!");
        location.reload()
    }
    
    if (computerScore > 4) {
        alert("The computer has won.");
        location.reload()
    }
}   

container.addEventListener('mouseup', playRound);

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

