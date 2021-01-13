/*
HOISTING

1-grammarAndTypes
    04-hoisting.js
*/

// example 1
// console.log(scissors);
// var scissors = "blue";

// example 1 breakdown
// javascript hoists variables / functions to top of code
var scissors;
console.log(scissors);
var scissors = "blue";

// example 2 
function hoistTest() {
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}

hoistTest();

// example 2 breakdown
function hoistTest() {
    var testVar;
    console.log(testVar);
    testVar = 10;
    console.log(testVar);
}

hoistTest(); 