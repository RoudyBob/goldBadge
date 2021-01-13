/*
COMPARISON OPERATORS

5-expressionsAndOperators
    02-comparisonOperators.js
*/

// Equality comparison operator
console.log('3' == 3); //Type Coercison <- String <-> Number
console.log(4 == 4);
console.log(3 == '4');

// Strict Equality comparison operator <- Types and Values!
console.log(3 === 3);
console.log(3 === '3');

// Not Equal Comparison Operator
console.log('3' != 4);
console.log('3' != 3); //Doesn't care about type

// Strict Not Equal Comparison Operator
console.log('3' !== 3);
console.log(3 !== 3);

// Greater Than
console.log (3 > 2);
console.log (2 > 3);

// Less Than
console.log (2 < 3);
console.log (3 < 2);

// Greater Than or Equal
console.log (3 >= 2);
console.log (3 >= 3);

// Less Than or Equal
console.log (2 <= 3);
console.log (3 <= 2);

// And Operator - Both expressions on each side must be true to return TRUE
console.log (1 < 2 && 3 > 0);
console.log (2 < 1 && 3 > 0);

// Or Operator - Either expression on each side can be true to return TRUE
console.log (1 < 2 || 3 < 0);
console.log (2 < 1 || 3 < 0);

let object = {
    key: 'test'
}
console.log(object == {key: 'test'}); //They are two different objects. Like twins - they are the same but not the same person.
console.log(object == object); //These are the same!

let arr = [1,2,3,4];
console.log(arr == [1,2,3,4]);
console.log(arr == arr);

F
