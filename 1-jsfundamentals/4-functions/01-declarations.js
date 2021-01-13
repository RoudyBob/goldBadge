/*
FUNCTIONS
*/

// general ideas:
// at the broadest level, functions do the following: 
// 1 - take some input which the function will process
// 2 - they process the input given to them
// 3 - usually, but not always, return a value
// 4 - invoked or used as many times as we want


// example 1
function newfunc(num) {
    return num + 1;
}

console.log(newfunc(5));
console.log(newfunc(10));
console.log(newfunc(11));
console.log(newfunc(-2));
console.log(newfunc(234));

// example 2
function sentence(firstName, lastName) {
    return `My first name is ${firstName} and my last name is ${lastName}`
}

console.log(sentence("Bob", "Roudebush"));

let superImportantSentence = sentence("Trena", "Roudebush");

console.log(superImportantSentence);
console.log(superImportantSentence.length);

// let's build a function that takes a complex type (array) and console logs each item in the array.
let arr = [1,true, {key: 'string'}, [0, false, null], "heya!"];
let arr2 = [5,6,7,8,9,10];

// functions that don't return a value have a "side effect"
function iteratorFunc(inputArr) {
    for (item of inputArr) {
        console.log(item);
    }
}

iteratorFunc(arr);
iteratorFunc(arr2);

function logNumber(num) {
    console.log(num);
}
  
for (i=0; i <= 10; i++) {
    logNumber(i);
}