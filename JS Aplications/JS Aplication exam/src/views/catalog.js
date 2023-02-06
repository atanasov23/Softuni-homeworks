import { html } from '../libraryPaths.js';
import { get } from '../api/api.js';
import { getUserData } from '../util.js';



let getDataUrl = '/data/albums?sortBy=_createdOn%20desc';

let catalogTemplate = (albums, user) => html`   <section id="dashboard">
<h2>Albums</h2>
<ul class="card-wrapper">

${albums.length == 0 ? html`<h2>There are no albums added yet.</h2>` : albums.map(album => html`
<li class="card">
            <img src=".${album.imageUrl}" alt="travis" />
            <p>
              <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
            </p>
            <p>
              <strong>Album name: </strong><span class="album">${album.album}</span>
            </p>
            <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
            <a class="details-btn" href="/catalog/${album._id}">Details</a>
          </li>`)} 


</ul>
</section>

`;


export async function catalogView(ctx) {

    let albums = await get(getDataUrl);

    let user = await getUserData();

    console.log(albums);

    ctx.render(catalogTemplate(albums, user));
}

