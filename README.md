# odin-rock-paper-scissors

This project is completed as part of "The Odin Project" online web development curriculum.

Pseudocode

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

CALL user choice function
