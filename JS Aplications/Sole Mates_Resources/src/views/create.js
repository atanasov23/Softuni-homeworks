import { post } from '../api/api.js';
import { html, page } from '../libraryPaths.js';

let detailsUrl = '/data/shoes';

let createTemplate = () => html`    <section id="create">
<div class="form">
  <h2>Add item</h2>
  <form class="create-form" @submit=${addAlbums}>
    <input
      type="text"
      name="brand"
      id="shoe-brand"
      placeholder="Brand"
    />
    <input
      type="text"
      name="model"
      id="shoe-model"
      placeholder="Model"
    />
    <input
      type="text"
      name="imageUrl"
      id="shoe-img"
      placeholder="Image url"
    />
    <input
      type="text"
      name="release"
      id="shoe-release"
      placeholder="Release date"
    />
    <input
      type="text"
      name="designer"
      id="shoe-designer"
      placeholder="Designer"
    />
    <input
      type="text"
      name="value"
      id="shoe-value"
      placeholder="Value"
    />

    <button type="submit">post</button>
  </form>
</div>
</section>
`;

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