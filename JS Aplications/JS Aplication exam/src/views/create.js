import { post } from '../api/api.js';
import { html, page } from '../libraryPaths.js';

let detailsUrl = '/data/albums';

let createTemplate = () => html`<section id="create">
<div class="form">
  <h2>Add Album</h2>
  <form class="create-form" @submit=${addAlbums}>
    <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
    <input type="text" name="album" id="album-album" placeholder="Album" />
    <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
    <input type="text" name="release" id="album-release" placeholder="Release date" />
    <input type="text" name="label" id="album-label" placeholder="Label" />
    <input type="text" name="sales" id="album-sales" placeholder="Sales" />

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