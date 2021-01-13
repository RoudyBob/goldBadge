var numbersArray = [1,2,3,4,5];
var meObject = {
    name: "Bob Roudebush",
    coolGuy: true,
    age: 44,
}

var players = [
    {
    name: "Philip Rivers",
    position: "QB",
    number: 17,
    team: "Colts"
    },
    {
    name: "TY Hilton",
    position: "WR",
    number: 13,
    team: "Colts"
    }
];

// for (let i = 0; i < players.length; i++) {
//     console.log(players[i].name);
// };

// for (number of numbersArray) {
//     console.log(number);
// };

// for (player in players) {
//     console.log(players[player].name);
// };

// function areaOfRectangle(base, height) {
//     let area = .5 * base * height;
//     return area;
// }

let areaOfRectangle = (base,height) => (base * .5 * height);

console.log(areaOfRectangle(23,12));

// for (let i = 0; i <= 100; i++) {
//     switch (true) {
//         case (i%15 == 0):
//             console.log('Fizz Buzz');
//             break;
//         case (i%3 == 0):
//             console.log('Fizz');
//             break;
//         case (i%5 == 0):
//             console.log('Buzz');
//             break;
//         default:
//             console.log('Sorry!');
//     }
// };

// players.forEach(p => console.log(p.name));

// for (let i = 0; i <= 100; i++) {
//     (i%15 == 0) ? console.log("Fizz Buzz") : (i%3 == 0) ? console.log("Fizz") : (i%5 == 0) ? console.log("Buzz") : console.log("Nope")
// }

// let i = 0;
// i;
// console.log(i);

// let x = 4;
// let y = 2;
// console.log(x *= y);

// let s1 = "Bob";
// let s2 = "Roudebush";
// console.log(s1+s2+"e");