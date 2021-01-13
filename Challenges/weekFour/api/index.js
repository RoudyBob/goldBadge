const url = "https://api.chucknorris.io/jokes/random"

let jokeButton = document.getElementById('jokeButton');
let jokeText = document.getElementById('joke');

// console.log(jokeButton);
// console.log(jokeText);

jokeButton.addEventListener('click', fetchJoke);

function fetchJoke(e) {
    //e.preventDefault();
    // console.log(e);
    fetch(url)
        .then(response => response.json())
        .then(data => showJoke(data))
        .catch(error => console.log(error));
};

function showJoke(joke) {
    //console.log(joke);
    jokeText.innerText = joke.value;
}