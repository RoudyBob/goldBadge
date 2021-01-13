// let myString = "this is a string"
// let myNumber = 69;
// let myBoolean = true;
// let myArray = [1, "string", [1,2,3], 2, "string"];
// let myObject = {firstkey : "a string"};
// let myUndefined;
// let myNull = null;

// console.log(myUndefined);

/*
CHALLENGE 2
Types Challenge
​
​
BRONZE
​
​
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
​
​
--------------------------------------------------------------------------
​
SILVER
​
​
Write a conditional that checks the type of one of the values stored in the object
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/


let myObject = {
    name: 'Michael Jordan',
    number: 23,
    isGoat: true,
    highestScores: [69, 64, 63],
    test: undefined,
    shoes: {
        size: 13,
        brand: "Nike",
    }
}

// console.log(myObject.shoes.brand);
// console.log(typeof myObject.isGoat);

let varCheck = myObject.shoes;

console.log(varCheck);

if (typeof varCheck == 'boolean' || typeof varCheck == 'string' || typeof varCheck == 'number' || typeof varCheck == 'object') {
    console.log('The variable type is a ' + typeof varCheck + '.')
} else {
    console.log('What are you?!');
}

