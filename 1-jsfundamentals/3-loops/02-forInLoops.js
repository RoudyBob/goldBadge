/*
FOR IN LOOPS
*/

// in loops does not require that the thing you loop through be numbered.

// let student = {name: "Peter", awesome: true, degree: "javascript", week: 1};

// for (item in student) {
//     console.log(item);
//     console.log(student[item]);
// }

// let catArray = ["tabby", "british shorthair", "burmese", "maine coon", "rag doll"];

// for (cat in catArray) {
//     console.log(cat);
//     console.log(catArray[cat]);
// }

// let's write a for-in loop that capitalizes the first letter of a name

let name = "zacHarY"
let capitalName;

for (letter in name) {
    letter == 0 ? capitalName = name.charAt(letter).toUpperCase() : capitalName += name.charAt(letter).toLowerCase();
}

console.log(capitalName);