/*
functions:

Javascript functions are defined with the function keyword,
and can written as a function declaration or a function
expression.

Function delcarations are hoisted in our code, and run ONLY
when we call them (invoke them).

So any function in our code sits and waits to be ran until
we call it by name. Think of it like as a student with his
or her hand up waiting to ask a question. That student does
not ask the question until they are called upon by the teacher.

Function expressions are NOT hoisted. And are generally stored
in variables.

Functions without names are known as anonymous functions. 
*/

//function declaration
function sayHello() {
    console.log("Hi");
}

sayHello();

//function expression
let greetings = function () {
    console.log('Hello');
}

greetings();


/*
Parameters

Think of parameters as a newly declared variable we have not 
given a value to yet.

The value we pass into our function is known as the argument
and that value then gets assigned to the parameters defined
in the function.

Rule of thumb: general naming convention for function
parameters - the parameter should be named something
related to the information we're passing into the function.
*/

function myDog(husky) {
    console.log(`My dog's name is ${husky}`);
}

myDog("Jake");

function allMyDogs(smallHusky, bigHusky, borderCollie) {
    console.log(`My dogs' names are ${smallHusky}, ${bigHusky}, and ${borderCollie}.`);
}

allMyDogs("Jake","Jake");

/*
Return

Functions can also manipulate the data sent to them and return a new value.
*/

function calculator(one, two, three) {
    let totalWeight = one + two + three;
    let average = Math.round(totalWeight / 3);
    return average;
    console.log("Hello"); // Code after the return doesn't get executed.
}

let averageWeight = calculator(15, 15, 15);
console.log(averageWeight);

/*
Arrow Functions

Arrow functions (or fat arrow functions) were introduced in
ES6. They are basically a more concise way to write function
expressions. NOT DECLARATIONS.

There are two types of arrow functions: consise body and block body
- The return happens AUTOMATICALLY with a concise body arrow function
- The return does NOT HAPPEN AUTOMATICALLY with a block body arrow function
*/

// Concise Body
let speak = (name) => console.log(`${name} goes woooof!`);

speak("Jake");

let nameJoiner = (first, last) => `${first} ${last}`;
let fullName = nameJoiner("Bob", "Roudebush");
console.log(fullName);

// Block Body 
let speaks = (name) => {
    console.log(`${name} goes woooof!`);
}
speaks("Jake");

let nameJoiner = (first, last) => {
    return `${first} ${last}`; // Must have return because it's Block Body!
}

console.log(nameJoiner("Bob", "Roudebush")); 

// Practice I

// Write a function that takes two parameters  (Length and Width) that returns
// the area of the rectangle.
// Create a variable named area1 and area2 that will call the Function and store its return
// console log the variables
// Example :  4 by 8 rectangle will give  32;

function rectangleArea(length, width) {
    return length * width;
}

let area1 = rectangleArea(4,8);
let area2 = rectangleArea(32,24);

console.log(`Area one: ${area1}`);
console.log(`Area two: ${area2}`);

// Practice II
// Write a function that will convert dog years into human years
// Formula for conversion  - Human Age = (Dog Age -2) x 4 + 21

function humanYears(dogAge) {
    let humanAge = (dogAge - 2) * 4 + 21;
    return humanAge;
}

let humanAge = humanYears(12);
console.log(humanAge);