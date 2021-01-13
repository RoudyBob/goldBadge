// const header = document.getElementById('header');

// console.log(header);

// // document.getElementById("header").style.color = "green";
// header.style.color = "pink";
// header.innerText = "Hello World!";

// const errorList = document.getElementsByClassName('error-list');
// console.log(errorList);

// errorList[1].innerText = "I changed error 2";

// //Example 1 Looping
// for (let i = 0; i < errorList.length; i++) {
//     errorList[i].style.color = "red";
// }

// //Example 2 Looping
// for (error of errorList) {
//     error.style.color = "green";
// }

// //Example 3 Looping forEach // CANNOT DO
// // errorList.forEach(error => error.style.color = "purple");

// const tags = document.getElementsByTagName('p');
// console.log(tags);

// tags[0].innerText = "I changed it!";

// const listItems = document.getElementsByTagName('li');

// for (let i = 0; i < listItems.length; i++) {
//    listItems[i].style.fontStyle = "italic";
// }

const header = document.querySelector('#header');
console.log(header);

const errorList = document.querySelector('.error-list');
console.log(errorList);

const errorList2 = document.querySelector('body > div > ul > li:nth-child(2)');
console.log(errorList2);

const listItems = document.querySelectorAll('.error-list');
console.log(listItems);

//Example One using For Loop
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontStyle = "italic";
}

//Exmaple Two using forEach
listItems.forEach(item => item.style.color = "blue");

header.style.color = "red";