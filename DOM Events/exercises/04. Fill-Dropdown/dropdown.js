function addItem() {
    const valueField = document.getElementById('newItemValue');
    const textField = document.getElementById('newItemText');
    
    const optionElement = document.createElement('option');
    optionElement.value = valueField.value;
    optionElement.textContent = textField.value;

    document.getElementById('menu').appendChild(optionElement);
    valueField.value = '';
    textField.value = '';
}