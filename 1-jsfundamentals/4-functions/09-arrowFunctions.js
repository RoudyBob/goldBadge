/*
ARROW FUNCTIONS
*/

// normal function declaration:
function coffee() {
    return 'coffee is good!';
}

// normal function expression:
let tea = function() {
    return 'tea is healthy!';
}

console.log(coffee());
console.log(tea());

// arrow functions are always anonymous!
// arrpow function expression:
let hotChocolate = () => {
    return 'hot chocolate is king!';
}

console.log(hotChocolate());

let animals = (kittens, puppies) => {return `I have ${kittens} cat(s) and ${puppies} dog(s)`};

console.log(animals(3,2));

// arrow functions do not get hoisted!!

// concise vs block body
// concise body:
let apples = (x) => `There are ${x} apples!`;
console.log(apples(10));

//block body:
let bananas = (x) => {
    return `There are ${x} bananas!`;
}
console.log(bananas(5));

// in a block body arrow function, you must have return

let func = () => `Hi`;
console.log(func());
// Keep it all on one line!

