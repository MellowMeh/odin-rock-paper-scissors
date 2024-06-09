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

playRound();