import {html, render} from '../../node_modules/lit-html/lit-html.js';

let renderElementField = document.getElementById('root');

let input = document.getElementById('towns');

let btnLoadTowns = document.getElementById('btnLoadTowns');

btnLoadTowns.addEventListener('click', loadTowns);

function loadTowns(e){

    e.preventDefault();

    let splitInput = input.value.split(', ');

    let ul = html`<ul></ul>`;

    render(ul, renderElementField)

    for(let el of splitInput){

        document.querySelector('ul').innerHTML += `<li>${el}</li>`

    }

}


