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
            console.log("Rock");
        } else if (computerDecision > 0.33 && computerDecision < 0.66) {
            computerDecision = "paper";
            console.log("Paper");
        } else {
            computerDecision = "scissors";
            console.log("Scissors");
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