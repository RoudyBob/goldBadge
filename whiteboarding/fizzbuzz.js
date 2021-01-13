// for (i = 0; i <= 100; i++) {
//     if (i%3 == 0 && i%5 == 0) {
//         console.log('Fizz Buzz!');
//     } else if (i%3 == 0) {
//         console.log('Fizz!');
//     } else if (i%5 == 0) {
//         console.log('Buzz!');
//     } else {
//         console.log(`Sorry. ${i} is not divisible by 3 or 5!`);
//     }
// }

// for (i = 0; i <= 100; i++) {
//     switch (true) {
//         case (i%3 == 0 && i%5 == 0):
//             console.log('Fizz Buzz!');
//             break;
//         case (i%5 == 0):
//             console.log('Buzz!');
//             break;
//         case (i%3 == 0):
//             console.log('Fizz!');
//             break;
//         default:
//             console.log(`Sorry. ${i} is not divisible by 3 or 5!`);
//     };
// };

// function areaOfRectangle(length, width) {
//     let area = length * width;
//     return area;
// }

// console.log(areaOfRectangle(5,5));

// let areaOfRectangle = (width,length) => width * length;


let areaOfRectangle = (width,length) => {
    let area = width*length;
    return area;
}

console.log(areaOfRectangle(5,5));
