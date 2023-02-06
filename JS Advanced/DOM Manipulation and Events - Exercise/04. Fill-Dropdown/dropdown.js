function addItem() {

    let text = document.getElementById('newItemText');
    let getValue = document.getElementById('newItemValue');

    let dropMenu = document.getElementById('menu');

    let newElement = document.createElement('option');

    newElement.value = getValue.value;

    newElement.textContent = text.value;

    dropMenu.appendChild(newElement);

    text.value = '';
    getValue.value = '';

    
}