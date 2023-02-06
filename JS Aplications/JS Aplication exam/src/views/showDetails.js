import { get, put, del } from '../api/api.js';
import { html, render, page } from '../libraryPaths.js';
import { getUserData } from '../util.js';

let detailsUrl = '/data/albums/';
let putId;
let removeId;

let detailsTemplate = (details, user, userId, ownerId) => 
html`<section id="details">
<div id="details-wrapper">
  <p id="details-title">Album Details</p>
  <div id="img-wrapper">
    <img src="..${details.imageUrl}" alt="example1" />
  </div>
  <div id="info-wrapper">
    <p><strong>Band:</strong><span id="details-singer">${details.singer}</span></p>
    <p>
      <strong>Album name:</strong><span id="details-album">${details.album}</span>
    </p>
    <p><strong>Release date:</strong><span id="details-release">${details.release}</span></p>
    <p><strong>Label:</strong><span id="details-label">${details.label}</span></p>
    <p><strong>Sales:</strong><span id="details-sales">${details.sales}</span></p>
  </div>
  <div id="likes">Likes: <span id="likes-count">0</span></div>
  ${user ? html`<a href="" id="like-btn">Like</a>`: ""}

            ${userId === ownerId ? html`<div id="action-buttons">
            
            <a href="/edit/${details._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${delelePost}>Delete</a>
          </div>
        </div>`: ''}
</div>
</section>`;

let editTemplate = (data) => html`<section id="edit">
<div class="form">
  <h2>Edit Album</h2>
  <form class="edit-form" @submit=${postEditValues}>
    <input type="text" name="singer" value=${data.singer} id="album-singer" placeholder="Singer/Band" />
    <input type="text" name="album" value=${data.album} id="album-album" placeholder="Album" />
    <input type="text" name="imageUrl" value=${data.imageUrl} id="album-img" placeholder="Image url" />
    <input type="text" name="release" value=${data.release} id="album-release" placeholder="Release date" />
    <input type="text" name="label" value=${data.label} id="album-label" placeholder="Label" />
    <input type="text" name="sales" value=${data.sales} id="album-sales" placeholder="Sales" />

    <button type="submit">post</button>
  </form>
</div>
</section>`;

export async function detailsView(ctx) {

    let id = ctx.params.id;

    removeId = id;

    let details = await get(detailsUrl + id);

    let user = await getUserData();

    if(user){

        let userId = user._id;
    
        let ownerId = details._ownerId;

        console.log(details);
    
        ctx.render(detailsTemplate(details, user, userId, ownerId));
    
        }else{
    
            
        let userId = 0;
    
        let ownerId = 1;
    
            ctx.render(detailsTemplate(details, userId, ownerId));
    
        }

    //let userId = user._id;

   // let ownerId = details._ownerId;

   // ctx.render(detailsTemplate(details, user, userId, ownerId));

}

export async function edit(ctx) {

    let id = ctx.params.id;

    let getPostValues = await get(`/data/albums/${id}`);

    putId = id;

    ctx.render(editTemplate(getPostValues));

}

export async function postEditValues(e){

    e.preventDefault();

    let newForm = new FormData(e.target);

    let requestObj = Object.fromEntries(newForm);

    for(let el in requestObj){

        if(requestObj[el] === ''){

            return;

        }

    }

    await put(`/data/albums/${putId}`, requestObj);
 
}



export async function delelePost() {

    
    await del(`/data/albums/${removeId}`);

    page.redirect('/catalog');

}