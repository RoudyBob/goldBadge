/*
Arrays

Arrays are used to store multiple values in a single variable.
There are array methods that allow us to traverse, as well
as mutate the data behind by an array.

Arrays are zero indexed (first item is 0) adn the last item
will have an index of the arrays length -1.

*/

// let arr = ["This is the first element", "This is the second element", "This is the third element", "This is the fourth element"];

// console.log(arr[0]);

// let test = new Array(); //The Array Class constructor
// test[0] = "did it work?"
// console.log(test);

// let boardGames = ["Monopoly", "Clue", "Risk", "Candy Land", "Catan"];

// for (let i = 0; i < boardGames.length; i++){
//     console.log(boardGames[i]);
// }

// forEach method cannot return anything
// boardGames.forEach(game => {
//     console.log(game);
//  }
// )

// boardGames.forEach(game => console.log(game));

// boardGames.forEach(function (game) {
//     console.log(game);
// });

let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];

//To access a specific element in an array use bracket
console.log(shoppingList[3]);

//Array.length returns number of elements in array
console.log(shoppingList.length);

//Array.push() - adds element to end of array
shoppingList.push("salt");
console.log(shoppingList);

//Array.unshift() - adds elment to beginning of array
shoppingList.unshift("salt");
console.log(shoppingList);

//array.pop() - removes last element of array and returns it
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let removedElement = shoppingList.pop(shoppingList);
console.log(shoppingList);
console.log(removedElement);

//array.shift() - removes first element of the array and returns it
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let removedElement = shoppingList.shift(shoppingList);
console.log(shoppingList);
console.log(removedElement);

//array.map() - transforms the elements in the original array by
//calling the given function for each element in the array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.map(item => item.toUpperCase()));
let newShoppingList = shoppingList.map(item => item.toUpperCase());
console.log(newShoppingList);

//array.filter() - creates a new array with only the elements
// that pass the test in a given function
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let newShoppingList = shoppingList.filter(item => item.startsWith("l"));
console.log(newShoppingList);

//array.find() - return the first element in array that matches
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let newShoppingItem = shoppingList.find(item => item.startsWith("l"));
console.log(newShoppingItem);

//array.includes() - determiens whether array has a specific element
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.includes('limes'));

//array.indexOf() - search the array for a specific element and 
//returns its first index. Returns -1 when not found
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.indexOf("limess"));

//array.findIndex() - returns the index of the first element in
//the array that passes the test in a given function
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let foundIndex = shoppingList.findIndex(item => item.startsWith("g"));

foundIndex !== -1 ? console.log(shoppingList[foundIndex]) : null;

//array.every() - check if all elements in array pass a test
//given as a function
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.every(item => item.length > 1));

//array.concat() - merge two or more arrays and returns
//new array

let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let anotherShoppingList = ["sale", "mint leaves", "olives"];
let combinedArrays = shoppingList.concat(anotherShoppingList);
console.log(combinedArrays);

//array.slice - selects a part of the aray and returns
//a new array. Selects the elements starting at the provided
//start argument and ends at, but does not include, the
//provided argument
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
let newArray = shoppingList.slice(2,4); //includes start not end
console.log(newArray);

//array.splice() - add/remove elements in the array and returns
//the removed elements. First argument takes an integer that
//specifies at what index to add/remove elements. Second
//argument takes in the number of items to be removed. Optional
//third argument that takes in teh new elements to be added.
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
shoppingList.splice(2,1,"grapes","bananas");
console.log(shoppingList);

//array.sort() - softs the items in array. the sort order can
//either be alphabetic or numeric. and ascending or descending
//default is as strings in ascending order
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.sort());
let costs = [3, 2, 13, 4];
console.log(costs.sort((a, b) => b - a));
console.log(costs.sort((a,b) => a - b));

//array.reverse - reverses order of elements in array
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.reverse());

//array.toString - converts array into a string
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.toString());

//array.join() - converts elements into string can accept
//an optional parameter "seperator" which indicates how the
//elements will be seperated - default is comma
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(shoppingList.join("! and "));

//Lastly an ES6 feature: the spread operator
//The spread operator indicated by these 3 dots (...)
//expands the contents of the array and takes it out of the
//arry structure
let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
console.log(...shoppingList);

let numArray = [20, 40, 60];
function sum(numOne, numTwo, numThree) {
    return numOne + numTwo + numThree;
}
console.log(sum(...numArray));

console.log(sum(1, 1, 1));