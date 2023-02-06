import { post } from '../api/api.js';
import { html, page } from '../libraryPaths.js';

let detailsUrl = '/data/offers';

let createTemplate = () => html`  <section id="create">
<div class="form">
  <h2>Create Offer</h2>
  <form class="create-form" @submit=${addAlbums}>
    <input
      type="text"
      name="title"
      id="job-title"
      placeholder="Title"
    />
    <input
      type="text"
      name="imageUrl"
      id="job-logo"
      placeholder="Company logo url"
    />
    <input
      type="text"
      name="category"
      id="job-category"
      placeholder="Category"
    />
    <textarea
      id="job-description"
      name="description"
      placeholder="Description"
      rows="4"
      cols="50"
    ></textarea>
    <textarea
      id="job-requirements"
      name="requirements"
      placeholder="Requirements"
      rows="4"
      cols="50"
    ></textarea>
    <input
      type="text"
      name="salary"
      id="job-salary"
      placeholder="Salary"
    />

    <button type="submit">post</button>
  </form>
</div>
</section>`;

export async function createView(ctx) {

    ctx.render(createTemplate());

}

export async function addAlbums(e) {

    e.preventDefault();

    let newForm = new FormData(e.target);

    let requestObj = Object.fromEntries(newForm);

    
    for (let el in requestObj) {

        if (requestObj[el] == '') {

            return;

        }

    }

    await post(detailsUrl, requestObj);

}