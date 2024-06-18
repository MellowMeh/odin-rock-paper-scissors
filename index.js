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


const rockButton = document.querySelector('#buttonRock');
const paperButton = document.querySelector('#buttonPaper')
const scissorsButton = document.querySelector('#buttonScissors')


//Get user decision: rock, paper, or scissors. 
let container = document.querySelector('#container');
let userInput;

container.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'buttonRock':
            userInput = 'rock';
            switch(computerDecision) {
                case 'rock':
                    console.log("rock,rock");
                    //Need to add DOM manipulation to raise or lower scores for each computerDecision case
                    break;
                case 'paper':
                    console.log("rock,paper");
                    break;
                case 'scissors':
                    console.log("rock, scissors");
                    break;
            }
            break;
        case 'buttonPaper':
            userInput = 'paper';
            switch(computerDecision) {
                case 'rock':
                    console.log("paper,rock");
                    //Need to add DOM manipulation to raise or lower scores for each computerDecision case
                    break;
                case 'paper':
                    console.log("paper,paper");
                    break;
                case 'scissors':
                    console.log("paper, scissors");
                    break;
            }
            break;
        case 'buttonScissors':
            userInput = 'scissors';
            switch(computerDecision) {
                case 'rock':
                    console.log("scissors,rock");
                    //Need to add DOM manipulation to raise or lower scores for each computerDecision case
                    break;
                case 'paper':
                    console.log("scissors,paper");
                    break;
                case 'scissors':
                    console.log("scissors, scissors");
                    break;
            }
            break;
    }


    console.log("User Choice: '" + userInput +"'");
    console.log("Computer Choice: '" + computerDecision + "'")

});

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
