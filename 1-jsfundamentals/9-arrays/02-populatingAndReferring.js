/*
ARRAYS
*/

// What is an array?
// An array has []
// They can hold multiple data types
// Arrays hold data types in an ordered (iterative) way

// let students = ["Tony", "Marshall", "Rhys", "Ray", 23, ["Ryan", "Iesha"]];

// console.log(typeof students); //doesn't tell me my variable is an array
// console.log(students instanceof Array); //instanceof tells me my array is an array - if I want to check an array, use this

// console.log(students[2]);
// console.log(students[5]);

// let name = students[5];
// console.log(name[0]);

// console.log(`Hello ${name}, you look nice today.`);

//recall for-of loop: returns values of array
let food = ["pecan pie","shrimp","quesadillas","cheesecake", "hotdog"];

// for (f of food) {
//     console.log(`${f} is amazing!`);
// }

// // array methods
// food.push('Pizza'); //add elements to an array
// console.log(food);

// food.splice(1, 1, "bananas"); //go to 1st element, remove 1, add bananas
// console.log(food);
// food.splice(2, 0, "sweet potato"); //go to 2nd element, remove none, add sweet potato
// console.log(food);
// food.pop(); //removes last element of an array
// console.log(food);

// food = food.slice(2,4); //the first number is the first element to slice from teh array while the second number is the stop position and NOT included
// console.log(food);

// forEach loops
// Allows us to iterate with loops specifically and we can directly grab both the elements and their index numbers
// It's like forIn and forOf had a baby

//food.forEach(f => console.log(f));

// food.forEach((food, i) => {
//     console.log(food);
//     console.log(i);
// });

// food.forEach((food, i) => {
//     console.log(`The ${food} in our array is at position ${i}.`);
// });

let movies = ["300", "Snow White", "The Phantom Menace", "The Watchmen", "The Sound of Music"];

movies.push("The Force Awakens");

movies.splice(3,1,"The League of Extraordinary Gentlemen");
console.log(movies);

movies.forEach(movie => console.log(movie));
console.log(movies.length);

//Let's do the following: 
// We will check if we are working with an array
// Flip the values within the array - 4 <-> 0
// Using method only, let's print the values of the new array

let arr = new Array(1,2,3,4,5);

if (arr instanceof Array) {
    let revArr = arr.reverse();
    revArr.forEach(num => console.log(num));
}
