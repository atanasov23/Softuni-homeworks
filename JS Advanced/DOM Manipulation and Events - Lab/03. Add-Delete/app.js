function addItem() {
    let txt = document.getElementById('newItemText').value;

    let li = document.getElementById('items');

    let create = document.createElement('li');

    create.innerText = txt

    let href = document.createElement('a');

    href.href = '#';
    href.innerText = '[Delete]';

    create.appendChild(href);

    li.appendChild(create);

    let remove = document.querySelectorAll('a');

    for (let el of remove) {

        el.addEventListener('click', removeElement);

        function removeElement() {

            this.parentElement.remove();

        }

    }

}