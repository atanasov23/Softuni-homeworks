import { html } from '../libraryPaths.js';
import { get } from '../api/api.js';
import { getUserData } from '../util.js';



let getDataUrl = '/data/shoes?sortBy=_createdOn%20desc';

let catalogTemplate = (albums, user) => html`
<section id="dashboard">
          <h2>Collectibles</h2>
          <ul class="card-wrapper">
${albums.length == 0 ? html`<h2>There are no items added yet.</h2>` : albums.map(album => html`<li class="card">
<img src=".${album.imageUrl}" alt="travis" />
<p>
  <strong>Brand: </strong><span class="brand">${album.brand}</span>
</p>
<p>
  <strong>Model: </strong
  ><span class="model">${album.model}</span>
</p>
<p><strong>Value:</strong><span class="value">${album.value}</span>$</p>
<a class="details-btn" href="/catalog/${album._id}">Details</a>
</li>`)}
</ul>
</section>`
export async function catalogView(ctx) {

    let albums = await get(getDataUrl);

    let user = await getUserData();

    ctx.render(catalogTemplate(albums, user));
}

