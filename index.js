//Declare players score variables (global scope)
    let humanScore = 0;
    let computerScore = 0;


////Have computer randomly select rock, paper, or scissors
let computerDecision
let getComputerChoice = (rockPaperOrScissors) => {
    computerDecision = Math.random();
        console.log(computerDecision);
        if (computerDecision < 0.33) {
            computerDecision = "rock";
            console.log("Computer Choice: 'Rock'");
        } else if (computerDecision > 0.33 && computerDecision < 0.66) {
            computerDecision = "paper";
            console.log("Computer Choice: 'Paper'");
        } else {
            computerDecision = "scissors";
            console.log("Computer Choice: 'Scissors'");
        }
}

getComputerChoice();

//Get user decision: rock, paper, or scissors. If invalid value is entered alert error and loop prompt and check sequence.
let userInput;
let verdict;
let getUserChoice = (rockPaperOrScissors) => {
    do {
        userInput = prompt("Let's Play a Game: Type one of the following in the box below: 'Rock', 'Paper', or 'Scissors'")
        if (userInput.toLowerCase() === "rock") {
            console.log("User Choice: 'Rock'");
            verdict = "pass";
        } else if (userInput.toLowerCase() === "paper"){
            console.log("User Choice: 'Paper'");
            verdict = "pass";
        } else if (userInput.toLowerCase() === "scissors"){
            console.log("User Choice: 'Scissors'");
            verdict = "pass";
        } else {
            alert("Error: Please type into the box 'Rock', 'Paper', or 'Scissors'");
            verdict = "fail";
        }
    }
    while (verdict === "fail");
}

getUserChoice();

//Play a round - a function takes arguments of the human choice and the computer choice. If...else statements are used to decide victory or defeat alert and which score variable is incremented.
let playRound = (humanChoice, computerChoice) => {
    if (userInput === "rock" && computerDecision === "rock") {
        console.log("It's a draw! Play again?");
    } else if (userInput === "rock" && computerDecision === "paper") {
        console.log("Oh no! You lost that round. Play again?");
        ++computerScore;
    } else if (userInput === "rock" && computerDecision === "scissors") {
        console.log("Hooray! You won that round. Play again?");
        ++humanScore;
    } else if (userInput === "paper" && computerDecision === "rock") {
        console.log("Hooray! You won that round. Play again?");
        ++humanScore;
    } else if (userInput === "paper" && computerDecision === "paper") {
        console.log("It's a draw! Play again?");
    } else if (userInput === "paper" && computerDecision === "scissors") {
        console.log("Oh no! You lost that round. Play again?")
        ++computerScore;
    } else {
        console.log("need more code");
    }
    console.log(humanScore, computerScore)
}

playRound();