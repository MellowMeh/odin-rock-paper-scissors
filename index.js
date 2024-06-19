let humanScore = 0;
let computerScore = 0;
const rockButton = document.querySelector('#buttonRock');
const paperButton = document.querySelector('#buttonPaper')
const scissorsButton = document.querySelector('#buttonScissors')
const scoreTextHuman = document.createElement('p');
const scoreTextComputer = document.createElement('p');
const message = document.createElement('p');
const computerMessage = document.createElement('p');
const userMessage = document.createElement('p');
let container = document.querySelector('#container');
let scoreCard = document.querySelector('#scoreCard');
let userInput;
let currentMessage;
let computerDecision;

let getComputerChoice = () => {
    computerDecision = Math.random();
        if (computerDecision < 0.33) {
            computerDecision = "rock";
        } else if (computerDecision > 0.33 && computerDecision < 0.66) {
            computerDecision = "paper";
        } else {
            computerDecision = "scissors";
        }
}

let displayScore = () => { 
    scoreCard.appendChild(scoreTextHuman);
        scoreTextHuman.textContent = ("Your score: " + humanScore);
    scoreCard.appendChild(scoreTextComputer);
        scoreTextComputer.textContent = ("Computer score: " + computerScore);
}

let removeScoreAndMessages = () => {
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
        container.addEventListener('mousedown', removeScoreAndMessages);
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