let url = 'https://rickandmortyapi.com/api/character/';

let htmlBody = document.querySelector('body');

fetch(url)
  .then(response => response.json())
  .then(json => displayImages(json));
  
function displayImages(characters) {
  let character1 = document.createElement('img');
  let character2 = document.createElement('img');
  console.log(characters);
  
  character1.src = characters.results[2].image;
  character2.src = characters.results[19].image;
  htmlBody.appendChild(character1);
  htmlBody.appendChild(character2);
}