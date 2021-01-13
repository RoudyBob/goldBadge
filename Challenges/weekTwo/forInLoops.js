/*
************
 FOR IN LOOPS
************
    - For In Loops count the enumerable properties in an object.
    - Objects contain what are known as enumerable properties - which just means countable. So although properties in an object don't contain an index like arrays, their properties can be simply counted. 
​
    - a key - so think a key in an object - goes IN to a lock for it to correctly work and unlock. So for in loops are best used with objects, and that means for of loops are best used with arrays
*/

/* BRONZE

    - Using a for in loop, console.log the name of each character from the members key in the fellowshipOfTheRing object.

*/

/* SILVER
​
    - Add a conditional to the for in loop that checks if the characters name does not begin with a vowel. Then, using string interpolation, console.log either '__'s name does not begin with a vowel' or '__'s name does begin with a vowel'.
​
*/

/* GOLD

    - Declare a globally scoped variable of arr that is initialized as an empty array. If the characters name does not begin with a vowel, add that character to the new array, and then console.log the array.

*/

let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}

// Bronze

// for (member in fellowshipOfTheRing.members) {
//     console.log(member);
// }

// Silver
// const vowels = ["A","E","I","O","U"]
// for (member in fellowshipOfTheRing.members) {
//     if (!vowels.includes(member.charAt(0))) {
//         console.log(`${member}'s name does not begin with a vowel.`);
//     } else {
//         console.log(`${member}'s name begins with a vowel.`);
//     }
// }

// Gold
var arr = [];
const vowels = ["A","E","I","O","U"];
for (member in fellowshipOfTheRing.members) {
    if (!vowels.includes(member.charAt(0))) {
        arr.push(member);
    } 
}
console.log(arr);
