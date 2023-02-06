//http://localhost:3030/data/shoes?where=brand LIKE "nike";

import { html, render } from '../libraryPaths.js';
import { get } from '../api/api.js';
import { getUserData } from '../util.js';


let searchTemplate = (result) => html`<section id="search">
<h2>Search by Brand</h2>

<form class="search-wrapper cf" @submit=${search}>
  <input
    id="#search-input"
    type="text"
    name="search"
    placeholder="Search here..."
    required
  />
  <button type="submit">Search</button>
</form>

<h3>Results:</h3>

<div id="search-container">

</div>`;

export async function searchView(ctx) {

    ctx.render(searchTemplate());

}

export async function search(e) {

    e.preventDefault();

    let user = getUserData();

    let formObj = new FormData(e.target);

    let txt = Object.fromEntries(formObj).search;

    if (txt !== '') {

        let res = await get(`/data/shoes?where=brand LIKE "${txt}"`);

        let div = document.getElementById('search-container');

        let template = () => res.map(a => html`<ul class="card-wrapper">
        <!-- Display a li with information about every post (if any)-->
        <li class="card">
          <img src=".${a.imageUrl}" alt="travis" />
          <p>
            <strong>Brand: </strong><span class="brand">${a.brand}</span>
          </p>
          <p>
            <strong>Model: </strong
            ><span class="model">${a.model}</span>
          </p>
          <p><strong>Value:</strong><span class="value">${a.value}</span>$</p>
          ${user ? html`<a class="details-btn" href="">Details</a>` : ""}
        </li>
      </ul>`);

        render(template(), div);

        if (res.length === 0) {

            render(html`<h2>There are no results found.</h2>`, div)
        }



    }
}