function addItem() {
    // select input field and read value
    const inputField = document.getElementById('newItemText');

    // create new <li> and set its textContent to inputField.value
    const liElement = document.createElement('li');
    liElement.textContent = inputField.value;

    // select <ul> and append new child
    document.getElementById('items').appendChild(liElement);

    // clear input field after taking its value
    inputField.value = '';
}