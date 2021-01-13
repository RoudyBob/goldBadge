/*
Using the API documentation see how you can fetch from the Adventure Time Quote API. 
You will need to use DOM manipulation to display a random quote and the character photo of who said the quote. 
Each time you refresh the page a new quote and photo should be displayed.
Documentation URL: https://adventure-time-quote-api.glitch.me
Suggested Work Flow
1. See what URL you need to use to get a random quote to display.
2. Get the results to console.log
3. Find out how you you will use these results to display the quote to the page.
4. What part of the document will you need to select? How can you insert the quote to this portion of the document?
5. Once you get the quote to display add in the pictures depending on which character is saying the quote. 
Character pictures links: 
finn : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7e/Finn_with_bionic_arm-0.png/revision/latest?cb=20190807133126",
tartToter : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7d/Toter.png/revision/latest?cb=20120713195935",
lady : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/a/ad/1ATLadyRainicornLook.png/revision/latest?cb=20190807133156",
marceline : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/e/e0/Marceline_Stock_Night.png/revision/latest/scale-to-width-down/95?cb=20190807133150",
lsp : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/9/9f/Lumpy_Space.png/revision/latest?cb=20110730224431",
lemongrab : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f5/Earl.png/revision/latest?cb=20120723061821",
dukeOfNuts : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/5/57/Prince-of-nuts.png/revision/latest?cb=20100402183002",
fionna : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/c3/Fionna_new_design.png/revision/latest?cb=20140704073319",
princessBubblegum : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/0/00/Princess_Bubblegum.png/revision/latest/scale-to-width-down/100?cb=20190807133134",
iceKing : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/64/Original_Ice_King.png/revision/latest/scale-to-width-down/150?cb=20160405041324",
bmo : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/81/BMO.png/revision/latest?cb=20190807133145",
jake : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest/scale-to-width-down/310?cb=20190807133015"
*/

baseURL = "https://adventure-time-quote-api.glitch.me/api/random";

const imageLinks = [
    {name: "Finn", link: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7e/Finn_with_bionic_arm-0.png/revision/latest?cb=20190807133126"},
    {name: "Tart Toter", link: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7d/Toter.png/revision/latest?cb=20120713195935"},
    {name: "Lady", link: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/a/ad/1ATLadyRainicornLook.png/revision/latest?cb=20190807133156"},
    {name: "Marceline", link: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/e/e0/Marceline_Stock_Night.png/revision/latest/scale-to-width-down/95?cb=20190807133150"},
    {name: "Lumpy Space Princess", link: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/9/9f/Lumpy_Space.png/revision/latest?cb=20110730224431"},
    {name: "Lemongrab", link: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f5/Earl.png/revision/latest?cb=20120723061821"},
    {name: "Duke of Nuts", link: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/5/57/Prince-of-nuts.png/revision/latest?cb=20100402183002"},
    {name: "Fionna", link: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/c3/Fionna_new_design.png/revision/latest?cb=20140704073319"},
    {name: "Princess Bubblegum", link: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/0/00/Princess_Bubblegum.png/revision/latest/scale-to-width-down/100?cb=20190807133134"},
    {name: "Ice King", link: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/64/Original_Ice_King.png/revision/latest/scale-to-width-down/150?cb=20160405041324"},
    {name: "BMO", link: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/81/BMO.png/revision/latest?cb=20190807133145"},
    {name: "Jake the Dog", link: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest/scale-to-width-down/310?cb=20190807133015"}
];

const quotesDiv = document.getElementById("quotes");

fetch(baseURL)
    .then(response => response.json())
    .then(data => displayQuote(data));

function displayQuote(quote) {
    console.log(`Original Response: ${quote}`);
    let splitQuote = quote.split(": ");

    characters = Object.keys(imageLinks);
    images = Object.values(imageLinks);
    let imageLink;

    for (let i = 0; i < imageLinks.length; i++) {
        if (splitQuote[0] == imageLinks[i].name) {
            imageLink = imageLinks[i].link;
        }
    }

    let imageElement = document.createElement('img');
    imageElement.src = imageLink;
    quotesDiv.appendChild(imageElement);

    let paragraph = document.createElement('p');
    paragraph.innerText = `"${splitQuote[1].trim()}"`;
    quotesDiv.appendChild(paragraph);



}
