import { html } from '../libraryPaths.js';
import { get } from '../api/api.js';
import { getUserData } from '../util.js';



let getDataUrl = '/data/albums?sortBy=_createdOn%20desc&distinct=name';

let catalogTemplate = (albums, user) => html`<section id="catalogPage">
<h1>All Albums</h1>

${albums.length == 0 ? html`<p>No Albums in Catalog!</p>` : albums.map(album => html`<div class="card-box">

<img src="..${album.imgUrl}">
<div>
    <div class="text-center">
        <p class="name">Name: ${album.name}</p>
        <p class="artist">Artist: ${album.artist}</p>
        <p class="genre">Genre: ${album.genre}</p>
        <p class="price">Price: $${album.price}</p>
        <p class="date">Release Date: ${album.releaseDate}</p>
    </div>
    ${user ? html` <div class="btn-group">
        <a href="/catalog/${album._id}" id="details">Details</a>
    </div>`: ''}
   
</div>
</div>`)} 

</section>
`;


export async function catalogView(ctx) {

    let albums = await get(getDataUrl);

    let user = await getUserData();

    ctx.render(catalogTemplate(albums, user));
}

