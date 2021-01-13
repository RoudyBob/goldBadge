/*
IF ELSE CONDITIONALS
*/

let weather = 75;

if (weather < 70) {
    console.log('Wear a jacket!');
} else {
    console.log('No jacket necessary.');
}

// You can blend complex conditionals and IfElse statements based upon your need.

if (weather > 70 && typeof weather === 'number') {
    console.log('This weather is amazing.');
} else {
    console.log('Either the temperature is cool, the variable is not a number or both.');
}

// ELSE IF
// Can check for lots of things.

let age = 20;

if (age >= 25) {
    console.log('Yay! You can rent a car.');
} else if (age >= 21) {
    console.log('Yay! You can drink.');
} else if (age >= 20) {
    console.log('Yay! You can vote.');
} else {
    console.log('Sorry. You are too young to do anything fun.');
}