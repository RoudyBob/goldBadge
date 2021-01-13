const storeName = document.getElementById("store");
const productName = document.getElementById("product");
const quantity = document.getElementById("quantity");
const submitBtn = document.getElementById("submitButton");
const outputBox = document.querySelector(".output");

submitBtn.addEventListener('click', createSentence);

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function createSentence(e) {
    e.preventDefault();

    while (outputBox.firstChild) {
        outputBox.removeChild(outputBox.firstChild);
    }

    let store = capitalize(storeName.value);
    let purchaseQuantity = quantity.value;
    let name = productName.value.toLowerCase();
    console.log(store, purchaseQuantity, name);

    let output = document.createElement('p');

    if (quantity.value < 0) {
        var sentence = `You can't buy a negative number of things.`
        output.style.color = "red";
    } else {
        var sentence = `"I shopped at ${store} for ${purchaseQuantity} ${name}."`;
        output.style.color = "black";
    }

    console.log(sentence);

    output.innerText = sentence;
    outputBox.appendChild(output);
}