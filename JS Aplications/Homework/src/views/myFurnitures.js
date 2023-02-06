import { html } from '../libraryPaths.js';
import { get } from "../api/api.js";
import { getUserData } from "../util.js"


//let url = 'http://localhost:3030/data/catalog?where=_ownerId LIKE "35c62d76-8152-4626-8712-eeb96381bea8"'

let myFurnituresTemplate =  (albums, user, ) => albums.map(a => html`
<div class="col-md-4">
<div class="card text-white bg-primary">
    <div class="card-body">
            <img src="${a.img}"/>
            <p>${a.description}</p>
            <footer>
                <p>Price: <span>${a.price} $</span></p>
            </footer>
            <div>
                <a href="/myFurnitures/${a._id}" class="btn btn-info">Details</a>
            </div>
    </div>
</div>
</div>`);

export async function myFurnitures(ctx) {

    let user = await getUserData();

    let id = user._id;

    let albums = await get(`/data/catalog?where=_ownerId LIKE "${id}"`);

    ctx.render(myFurnituresTemplate(albums, user, ctx));
}