import {cats} from './catSeeder.js';
import {html, render} from '../node_modules/lit-html/lit-html.js';

let allCats = document.getElementById('allCats');
 
let template = html`<ul>${cats.map(a => create(a))}</ul>`;

render(template, allCats)

function create(a){

    return html`<li>
    <img src="./images/${a.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button @click=${show} class="showBtn">Show status code</button>
        <div class="status" style="display: none" id="${a.id}">
            <h4>Status Code: ${a.statusCode}</h4>
            <p>${a.statusMessage}</p>
        </div>
    </div>
</li>`
}


function show(el){

    let element = el.target.parentElement.querySelector('div');
    let state = element.style.display;

    if(state === "none"){

        element.style.display = "block"

        el.target.textContent = "Hide status code"

    }else{

        element.style.display = "none"

        el.target.textContent = "Show status code"

    }
}