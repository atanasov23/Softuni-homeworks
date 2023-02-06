import { html } from '../libraryPaths.js';
import { get } from '../api/api.js';
import { getUserData } from '../util.js';



let getDataUrl = '/data/catalog';

let catalogTemplate = (albums, user) => albums.map(a => html`<div class="col-md-4">
<div class="card text-white bg-primary">
    <div class="card-body">
            <img src="${a.img}" />
            <p>${a.description}</p>
            <footer>
                <p>Price: <span>${a.price} $</span></p>
            </footer>
            <div>
                <a href="/catalog/${a._id}" class="btn btn-info">Details</a>
            </div>
    </div>
</div>
</div>`);


export async function catalogView(ctx) {

    let albums = await get(getDataUrl);

    let user = await getUserData();

    ctx.render(catalogTemplate(albums, user));
}

