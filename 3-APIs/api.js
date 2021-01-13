const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace(e) {
    e.preventDefault();

    fetch(baseURL)
        .then (result => result.json())
        .then (json => {
            console.log(json);
            displayRockets(json);
        })
        .catch(err => console.log(err));
}

function displayRockets(rockets) {
    rockets.forEach(r => {
        let rocketName = document.createElement('li');
        rocketName.innerText = r.name;
        spaceShips.appendChild(rocketName);
        let rocketDescription = document.createElement('p');
        rocketDescription.innerText = r.description;
        spaceShips.appendChild(rocketDescription)
        let rocketFirstFlight = document.createElement('p');
        rocketFirstFlight.innerText = `First Flight: ${r.first_flight}`;
        spaceShips.appendChild(rocketFirstFlight);
    })
}