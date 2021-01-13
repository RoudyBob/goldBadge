//setTimeout(() => console.log('This is a test of timeouts!'), 1000);

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if (false) {
            resolve('success');
        } else {
            reject('failure');
        }
    }, 3000);
});

promise 
    .then(blah => console.log('blah')) //blah = 'success'
    .catch(err => console.log(err));

// promises allow this part of your code to wait while the rest of the 
// code runs. Everything in the promise executes in a different
// time than the rest.

console.log('This code is after the promise');

function playFunc() {
    return 5;
}

console.log(playFunc());

// Another vide on YT which talks about this:
// https://www.youtube.com/watch?v=DHvZLI7Db8E&ab_channel=WebDevSimplified

let p = new Promise((resolve,reject) => {
    let a = 1 + 1;
    if (a ==2) {
        resolve('good at math!');
    } else {
        reject ('failed math!'); 
    }
})

p
    .then((message) => {
        console.log(message);
    })
    .catch((message) => {
        console.log(message);
    })

