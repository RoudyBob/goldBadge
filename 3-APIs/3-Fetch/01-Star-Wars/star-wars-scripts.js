const baseURL = "https://swapi.dev/api/";
const peopleEndpoint = "https://swapi.dev/api/people";
const planetsEndpoint = "https://swapi.dev/api/planets";

let starWarsList = document.querySelectorAll('ul');

fetch(peopleEndpoint)
    .then(response => response.json())
    .then(function(json) {
        let people = json.results;
        people.forEach(p => {
            let listItem = document.createElement('li');
            listItem.innerHTML = '<p>' + p.name + '</p>';
            starWarsList[0].appendChild(listItem);
        });
    })

fetch(planetsEndpoint)
    .then(response => response.json())
    .then(function(json) {
        let people = json.results;
        people.forEach(p => {
            let listItem = document.createElement('li');
            listItem.innerHTML = '<p>' + p.name + '</p>';
            starWarsList[1].appendChild(listItem);
        });
    })