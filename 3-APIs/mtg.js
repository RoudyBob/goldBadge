const cardsEndpoint = 'https://api.magicthegathering.io/v1/cards';
const setsEndpoint = 'https://api.magicthegathering.io/v1/sets?name=eldraine';

fetch(setsEndpoint)
    .then(response => response.json())
    .then(json => console.log(json))
