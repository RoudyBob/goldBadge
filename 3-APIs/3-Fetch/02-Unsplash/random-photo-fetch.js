// Example using Blob Response
// const endpointURL = "https://source.unsplash.com/random";

// let randomImage = document.querySelector('img');
// console.log("randomImage:", randomImage);

// fetch(endpointURL)
//     .then(response => {
//         if (!response.ok) {
//             console.log(response);
//             return new Error(response);
//         }
//         console.log("Response:", response);
//         return response.blob();
//     })
//     .then(photoBlob => {
//         console.log("My Blob:", photoBlob);
//         var objectURL = URL.createObjectURL(photoBlob);
//         console.log("Object URL:", objectURL);
//         randomImage.src = objectURL;
//         console.log("randomImage.src:", randomImage.src);
//     })
//     .catch(function(err) {
//         console.log(err)
//     })

// Example using JSON Response
const endpointURL = "https://api.unsplash.com/photos/random?client_id=c7iLRWjiGe3AZ4y-fl67i1sYVuWyDPp1nCxqVNmPF9A";

let randomImage = document.querySelector('img');
console.log("randomImage:", randomImage);

fetch(endpointURL)
    .then(response => {
        if (!response.ok) {
            console.log(response);
            return new Error(response);
        }
        console.log("Response:", response);
        return response.json();
    })
    .then(photoResponse => {
        console.log("My Photo:", photoResponse);
        objectURL = photoResponse.urls.regular;
        console.log("Object URL:", objectURL);
        randomImage.src = objectURL;
        console.log("randomImage.src:", randomImage.src);
    })
    .catch(function(err) {
        console.log(err)
    })