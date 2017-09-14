
function getRandomInt(min, max) { //the function getrandomint is telling the computer the get a random number between the minimum and maximum values that other code later provides  
  min = Math.ceil(min); //this is clarifying what the minimum is
  max = Math.floor(max); //this is clarifying what the maximum is
  return Math.floor(Math.random() * (max - min)) + min; //this is generating the answer(doing the math) and returning it
}

function playGame(player) { //the function that contains the logic of the game
    var Turns = 0; //it sets the turns to 0
    var Correct = 0; //the counter for games
    var Answer = getRandomInt(1,100); //the answer is the random number created by the program
    do { //begins the while loop
        var Guess = prompt("Guess the integer between 1 and 100!"); //this is prompting the user to guess the random generated number
        Turns++; //adds a turn
        if (isNaN(Guess) !== true) { // this if statement decides what the program should do in the case of three scenarios 1. being what happens when the person wins 2. being what happens when the person gets it right 3. being what happens when the person does not put in a number
            if (Guess == Answer) { //What happens when you get it right
                alert("CORRECT! You guessed it in "+Turns+" turns."); //the statement that ocurs when the person gets it right
                Correct = 1; //the condition that ends the while loop
            }
            else if (Guess > Answer) { // if the guess is greater than answer it provides the alert below
                alert("Hint: Try a lower number!");//if the guess is less than answer it says to try lower
            }
            else { // if the guess is less than the answer it provides the alert below
                alert("Hint: Try a higher number!");// if its higher(or pretty much anything else not including non number characters) it tells you to go higher
            }
        }
        else { // this else statment occurs 
            alert("Quitter!");//this is what happens when the user inputs something other than numbers
            player.losses ++; // this ends the game
        }
    }
    while (Correct == 0); // thats whats making the game continue if they havent gotten it right
}
//THE WHILE LOOP IS SAYING THaT WHEN THE ANSWER(WHAT THE PERSON PUT IN) IS 0 (NOT THE ANSWER) it will continue untill the answer is correct.
function start() { 
    var playAgain = 'y'; //declares the variable play again and sets it to y
    do { //do begins the while loop
        playGame(); //calling the playgame contains the function of the game
        playAgain = prompt("Would you like to play again? (y or n)");// this provides the user the decision to choose either yes or no
    }
    while(playAgain == 'y'); // end loop if play again is not y
}

alert("Steel your mind for this, the ultimate game of skill!"); //this is the alert that initiates the whole game
start(); // starts the game