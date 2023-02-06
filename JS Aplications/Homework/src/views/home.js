import { html } from '../libraryPaths.js';




let homeTemplate = () => html`
<div class="row space-top">
<div class="col-md-12">
    <h1>Welcome to Furniture System</h1>
    <p>Select furniture from the catalog to view details.</p>
</div>
</div>`

export function homeView(ctx){
    
    ctx.render(homeTemplate());

}

let getDataUrl = '/data/catalog';

let catalogTemplate = (albums, user) => albums.map(a => html`<div class="col-md-4">
<div class="card text-white bg-primary">
    <div class="card-body">
            <img src="${a.img}" />
            <p>Description here</p>
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
