/*
TYPES

1-grammarAndTypes
    3-types.js

*/

//Boolean
var on = true;
console.log(on);

let off = false;
console.log(off);

//boolean can represent: true/false, yes/no, on/off, 0/1

//undefined
/*
Variable has been declared but has not been assigned a value
*/

let grass;
console.log(grass);

var undef = undefined;
console.log(undef);

//Null
/*
Null means a variable has been declared and assigned a value of null
*/

var empty = null;
console.log(empty);

/*
Null and undefined both represent variables with no value inside. Think of it this way: null values
are for gag gifts that are boxes intentionally given with nothing inside (because that's the gag).
Undefined values are gifts given when the person giving the gift has forgotten to put the gift
inside (oops!).
*/

//Numbers
let myLiteralAge = 90;
console.log(myLiteralAge);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999; //can't go to more than 2^53
console.log(rounded);

let notQuite = 0.2 + 0.1; //javascript has some problems with numbers!
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10; //converted the decimal to a number first!
console.log(numbersAreHard);

// Strings
// A string is any value within quotes. JS spits out the value within the quotes.
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//String Concatenation versus Addition
let first = 1050 + 100;
let second = "1050" + "100";
console.log(first, second);

let third = 1050 + "100"; //Type Coersion: converts the number to a string!
console.log(third);
console.log(typeof third);

// Interpolation
// Lets you use strings with dynamic content (they require backticks)

// Example 1
let age = 32;
let string = `my age is: ${age}`
console.log(string);

// Objects
/*
What is an object?

An object is a container that stores property names and their values and can hold multiple data types.

Denoted by {}
They have keys and values. Key: Color, Value: Blue
Separated by with a colon between the key/value and keys are separated with a comma.
Key-value pair are separated by commas.
*/

let hulk = {
    color: 'green',
    age: 42,
    isStrong: true
}
console.log(hulk);

console.log(hulk.age);
console.log(hulk.color);
console.log(hulk.isStrong);
console.log(typeof hulk);

// Arrays
/*
Arrays store multiple values in an ordered way. Objects aren't ordered. Arrays are!
Denoted by []
Have values  ('blue', 'green', 'yellow'), separated by commas like Objects.
*/

var stepsToBrushTeeth = ['uncap toothpaste', 'squeeze toothpaste', 'rinse brush', 'brush', 'clean toothbrush'];
//array indexing starts with 0
console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[2]);

console.log(typeof stepsToBrushTeeth); //still an Object - inherits from Object

