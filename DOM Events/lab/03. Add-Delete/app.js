function addItem() {
    // select input field and read value
    const inputField = document.getElementById('newItemText');

    // create new <li> and set its textContent to inputField.value
    const liElement = document.createElement('li');
    liElement.textContent = inputField.value;
    
    // create delete btn
    const del = document.createElement('a');
    del.href = '#';
    del.textContent = '[Delete]';
    del.addEventListener('click', removeLi);

    liElement.appendChild(del);

    // select <ul> and append new child
    document.getElementById('items').appendChild(liElement);

    // clear input field after taking its value
    inputField.value = '';

    function removeLi(event) {
        // optional confirmation
        // not working with SoftUni's judge system
        const answer = confirm('Are you sure?');

        if (answer == true) {
            const parent = event.target.parentNode;
            parent.remove();
        }   
    }
}