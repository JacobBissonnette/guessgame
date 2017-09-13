
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function playGame(player) {
    var Turns = 0;
    var Correct = 0;
    var Answer = getRandomInt(1,100);
    do {
        var Guess = prompt("Guess the integer between 0 and 100!");
        Turns++;
        if (isNaN(Guess) !== true) {
            if (Guess == Answer) {
                alert("CORRECT! You guessed it in "+Turns+" turns.");
                Correct = 1;
            }
            else if (Guess > Answer) {
                alert("Hint: u suc try a lower");
            }
            else {
                alert("Hint:  u suc try a higher ");
            }
        }
        else {
            alert("nah boi");
            player.losses ++;
        }
    }
    while (Correct == 0);
}

function start() {
    var playAgain = 'y';
    do {
        playGame();
        playAgain = prompt("Anotha one? (y or n)");
    }
    while(playAgain == 'y');
}

alert("mihoy me noi me noi mehoiiiii!");
start();