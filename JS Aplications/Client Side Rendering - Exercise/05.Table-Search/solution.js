import { html, render } from '../node_modules/lit-html/lit-html.js'

let tbody = document.querySelector('tbody');

async function loadData() {

   let response = await fetch('http://localhost:3030/jsonstore/advanced/table')
      .then(a => a.json())
      .then(a => a);

   let values = Object.values(response);

   let template = html`${values.map(a => html` <tr>
   <td>${a.firstName} ${a.lastName}</td>
   <td>${a.email}</td>
   <td>${a.course}</td>
   </tr>`)}`

   render(template, tbody);

}

loadData();


   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let getInput = document.getElementById('searchField');

      let result = document.getElementById('result');

      let getElements = document.querySelectorAll('.container tr');

      if (document.getElementsByClassName('select').length > 0) {

         let obj = document.getElementsByClassName('select');

         for (let el of obj) {

            el.classList.remove('select');
         }


      }

      for (let i = 1; i < getElements.length; i++) {

         let test = getElements[i].textContent;

         if (test.toLowerCase().includes(getInput.value.toLowerCase())) {

            getElements[i].classList.add('select');

         }

      }

      getInput.value = '';

   }
