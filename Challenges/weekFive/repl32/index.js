// Game parameters
const minimumGuess = 1;
const maximumGuess = 10;
const maxAttempts = 3;

// Initialize hint variable.
var hint;

// Set gameLost to true and only set to false if they guess correctly.
var gameLost = true;

// Generate random number for right answer.
rightAnswer = Math.floor(Math.random() * (maximumGuess - minimumGuess + 1) + minimumGuess);

for (let i = 0; i < maxAttempts && gameLost == true; i++) {
    if (i == 0) {
        var userGuess = prompt(`Guess a number between ${minimumGuess} and ${maximumGuess}. You have ${(maxAttempts - i)} attempts remaining.`);
    } else {
        var userGuess = prompt(`Guess a number between ${minimumGuess} and ${maximumGuess}. You have ${(maxAttempts - i)} attempts remaining. HINT: ${hint}`);
    };

    if (userGuess == rightAnswer) {
        gameLost = false;
        alert(`You guessed it correctly!`)
    } else if (userGuess < rightAnswer) {
        hint = "A little higher.";
    } else if (userGuess > rightAnswer) {
        hint = "A little lower.";
    };
};

// Only show this if you made it here and gameLost is true.
gameLost == true ? alert(`Sorry. You lost.`) : null;
