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
let container = document.querySelector('#container');
let scoreCard = document.querySelector('#scoreCard');
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

container.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'buttonRock':
            userInput = 'rock';
            switch(computerDecision) {
                case 'rock':
                    //display: tie
                    displayTie(); 
                    console.log("rock,rock");
                    break;
                case 'paper':
                    //display: loss
                    displayLoss();
                    computerScore++;
                    console.log("rock,paper");
                    break;
                case 'scissors':
                    //display: win
                    displayWin();
                    humanScore++;
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
                    console.log("paper,rock");
                    break;
                case 'paper':
                    //display: tie
                    displayTie();
                    console.log("paper,paper");
                    break;
                case 'scissors':
                    //display: loss
                    displayLoss();
                    computerScore++;
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
                    console.log("scissors,rock");
                    break;
                case 'paper':
                    //display: win
                    displayWin();
                    humanScore++;
                    console.log("scissors,paper");
                    break;
                case 'scissors':
                    //display: tie
                    displayTie();
                    console.log("scissors, scissors");
                    break;
            }
            break;
    }
    userInput = "";
    computerDecision = "";
});

//Resolution - when user or computer achieves 5 points, victory or loss message displays and user may choose to play again





/*
    let playRound = (userInput, computerDecision) => {
        switch(userInput) {
            case 'rock':
                
                break;

            case 'paper':
                switch(computerDecision) {
                    case 'rock':
                        break;
                    case 'paper':
                        break;
                    case 'scissors':
                        break;
                }
                break;

            case 'scissors':
                switch(computerDecision) {
                    case 'rock':
                        break;
                    case 'paper':
                        break;
                    case 'scissors':
                        break;
                }    
            break;
        }
    }
})

playRound();

//Play a round - a function takes arguments of the human choice and the computer choice. If...else statements are used to decide victory or defeat alert and which score variable is incremented.



let playRound = (humanChoice, computerChoice) => {
    if (userInput.toLowerCase() === "rock" && computerDecision === "rock") {
        console.log("Computer Choice: 'Rock'");
        console.log("It's a draw! Play again?");
    } else if (userInput.toLowerCase() === "rock" && computerDecision === "paper") {
        console.log("Computer Choice: Paper");
        console.log("Oh no! You lost that round. Play again?");
        ++computerScore;
    } else if (userInput.toLowerCase() === "rock" && computerDecision === "scissors") {
        console.log("Computer Choice: Scissors");
        console.log("Hooray! You won that round. Play again?");
        ++humanScore;
    } else if (userInput.toLowerCase() === "paper" && computerDecision === "rock") {
        console.log("Computer Choice: 'Rock'");
        console.log("Hooray! You won that round. Play again?");
        ++humanScore;
    } else if (userInput.toLowerCase() === "paper" && computerDecision === "paper") {
        console.log("Computer Choice: Paper");
        console.log("It's a draw! Play again?");
    } else if (userInput.toLowerCase() === "paper" && computerDecision === "scissors") {
        console.log("Computer Choice: Scissors");
        console.log("Oh no! You lost that round. Play again?")
        ++computerScore;
    } else if (userInput.toLowerCase() === "scissors" && computerDecision === "rock") {
        console.log("Computer Choice: 'Rock'");
        console.log("Oh no! You lost that round. Play again?");
        ++computerScore;
    } else if (userInput.toLowerCase() === "scissors" && computerDecision === "paper") {
        console.log("Computer Choice: Paper");
        console.log("Hooray! You won that round. Play again?");
        ++humanScore;
    } else if (userInput.toLowerCase() === "scissors" && computerDecision === "scissors") {
        console.log("Computer Choice: Scissors");
        console.log("It's a draw! Play again?");
    } else {
        console.log("Error: answer not recognized");
    }
    console.log(humanScore, computerScore)
}


//Play five rounds of play. When the user or the computer reaches a score of 5, the game ends, the prompt to insert an answer disappears, and a final message is displayed. 
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
