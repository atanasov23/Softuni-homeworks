import { html } from '../libraryPaths.js';
import { get } from '../api/api.js';
import { getUserData } from '../util.js';



let getDataUrl = '/data/offers?sortBy=_createdOn%20desc';

let catalogTemplate = (albums, user) => html`<section id="dashboard">
<h2>Job Offers</h2>

${albums.length == 0 ? html` <h2>No offers yet.</h2>` : albums.map(album => html`        <div class="offer">
<img src="./${album.imageUrl}" alt="example1" />
<p>
  <strong>Title: </strong><span class="title">${album.title}</span>
</p>
<p><strong>Salary:</strong><span class="salary">${album.salary}</span></p>
<a class="details-btn" href="/catalog/${album._id}">Details</a>
</div>`)} 

</section>
`;


export async function catalogView(ctx) {

    let albums = await get(getDataUrl);

    let user = await getUserData();

    console.log(albums);

    ctx.render(catalogTemplate(albums, user));
}

