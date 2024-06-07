////Have computer randomly select rock, paper, or scissors
let getComputerChoice = (rockPaperOrScissors) => {
    let computerDecision = Math.random();
        console.log(computerDecision);
        if (computerDecision < 0.33) {
            console.log("Rock");
        } else if (computerDecision > 0.33 && computerDecision < 0.66) {
            console.log("Paper");
        } else {
            console.log("Scissors");
        }
}

getComputerChoice();