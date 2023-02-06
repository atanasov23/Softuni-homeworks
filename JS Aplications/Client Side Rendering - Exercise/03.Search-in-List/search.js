import { towns } from './towns.js';
import { html, render } from "../node_modules/lit-html/lit-html.js";

let input = document.getElementById("searchText");

let result = document.getElementById("towns");

let counter = 0;

document.querySelector('button').addEventListener('click', search);

let template = html`<ul>${towns.map(a => html`<li>${a}</li>`)}</ul>`;

render(template, result);


function search() {

   let value = input.value;

   counter = 0;

   [...document.getElementsByClassName('active')].forEach(a => a.classList.remove('active'));

   [...document.querySelector('ul').children].forEach(a => {

      if (value !== '') {

         if (a.textContent.includes(value)) {

            counter++;

            a.classList.add('active')
         }
      }
   })

   document.getElementById('result').textContent = `${counter} matches found`

}



