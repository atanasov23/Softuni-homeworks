import { html, render } from '../node_modules/lit-html/lit-html.js';

let menu = document.getElementById('menu');
let itemText = document.getElementById('itemText');

async function load() {

    let response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown')
        .then(a => a.json())
        .then(a => a);

    
    let template = Object.values(response).map(a => html`<option value=${a._id}>${a.text}</option>`);


    render(template, menu);
}

load();

document.querySelector('input[type="submit"]').addEventListener('click', addItem);

async function addItem(e) {

    e.preventDefault();

    await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {

    method: 'POST',
    headers: {'Content-Type': 'Aplication/json'},
    body:JSON.stringify({text: itemText.value})
    }).then(a => a.json())
    .then(a => a);

    load();

}



