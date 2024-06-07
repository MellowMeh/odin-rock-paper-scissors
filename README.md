# odin-rock-paper-scissors

This project is completed as part of "The Odin Project" online web development curriculum.

Pseudocode
//Declare players score variables (global scope)
SET human score variable = 0
SET computer score variable = 0


//Get computer random choice: rock, paper, or scissors
GET computer move: rock, paper, or scissors
    CALCULATE a random number between 0 and 1
        IF number is less than 0.33 THEN print "rock" to console
        IF number is greater than 0.33 but less than 0.66 THEN print "paper" to console
        IF number is anything else THEN print "scissors" to console

CALL computer move function


//Get user choice: rock, paper, or scissors
GET user choice
    DISPLAY prompt for user to input rock, paper, or scissors
        IF user input is "rock" THEN print "rock" to console
        IF user input is "paper" THEN print "paper" to console
        IF user input is "scissors" THEN print "scissors" to console
        IF user input is anything else THEN 
            REPEAT
                Display message "Error: Please type into the box "rock", "paper", or "scissors"
                DISPLAY prompt for user to input rock, paper, or scissors
            UNTIL user has in put "rock", "paper", or "scissor"
        ENDIF 

CALL user choice function


//Play a round - a function takes arguments of the human choice and the computer choice. If...else statements are used to decide victory or defeat alert and which score variable is incremented.

SET function playRound with arguments userChoice and computerChoice
    IF human selection is rock THEN 
        IF computer selection is rock THEN alert(draw)
        IF computer selection is paper THEN alert (lose) and increment computer score
        IF computer selection is scissors THEN alert (win) and increment human score

    IF human selection is paper THEN
        IF computer selection is rock THEN alert(win) and increment human score
        IF computer selection is paper THEN alert(draw)
        IF computer selection is scissors THEN alert (lose) and increment computer score

    IF human selection is scissors THEN
        IF computer selection is rock THEN alert (lose) and increment computer score
        IF computer selection is paper THEN alert (win) and increment human score 
        IF computer selection is scissors THEN alert(draw)
    ENDIF


SET variable humanSelection to the result of the getUserChoice function
SET variable computerSelection to the result of the getComputerChoice

CALL playRound function