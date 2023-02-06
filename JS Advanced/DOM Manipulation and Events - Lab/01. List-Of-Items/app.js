function addItem() {
   
    
    let txt = document.getElementById('newItemText').value;

    let li = document.getElementById('items');

    let create = document.createElement('li');

    create.innerText = txt

    li.appendChild(create);
 
}