// // Create an ASYNC function...this means I need to deal with it as a promise later
// async function returnPerson() {
//     // Wait on fetch and store result in a variable - we don't deal with it as a 
//     // promise because it's no longer asynchronous
//     let result = await fetch("https://swapi.dev/api/people/5");
//     // Same as above
//     let jsonResult = await result.json();
//     // Console Log the JSON result
//     console.log(jsonResult);
//     // Return the text back from the function
//     return 'this should print last';
// };

// returnPerson()
//     // Just can put console.log here because Javascript is smart enough
//     // to pass the result of the function in this promise into console.log
//     .then (console.log)


let returnPerson = async () => {
    let result = await fetch("https://swapi.dev/api/people/5/");
    let jsonResult = await result.json();
    console.log(jsonResult);
    return 'this should print last';
};

returnPerson()
    .then (console.log)