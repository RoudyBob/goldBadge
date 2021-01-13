/*

For Of Loops

For Of Loops parse through an iterable list of numbers. So that makes them great for working with arrays.

Arrays contain what are known as iterable properties
Each property or value in the array each contains its own index. Starting at 0.

let arr = ["chicken", "turkey", "duck"];

*/
let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd'];

const fruitpies = ['apple', 'blueberry', 'peach', 'cherry'];

// Bronze
for (pie of pies) {
    console.log(`${pie} pie`);
}

// Silver
let pieCheck = "oreo";

for (pie of pies) {
    if (pie == pieCheck) {
        if (fruitpies.includes(pie)) {
            console.log(`The ${pie} is a fruit pie.`);
        } else {
            console.log(`The ${pie} is not a fruit pie. :-(`);
        }
    }
}

// Gold
// for (pie of pies) {
//     if (fruitpies.includes(pie)) {
//         console.log(`The ${pie} is a fruit pie.`);
//     } else {
//         console.log(`The ${pie} is not a fruit pie. :-(`);
//     }
// }