
import { get, put, del } from '../api/api.js';
import { html, render, page } from '../libraryPaths.js';
import { getUserData } from '../util.js';

let detailsUrl = '/data/shoes/';
let putId;
let removeId;

let detailsTemplate = (details, user, userId, ownerId, id) => html`  <section id="details">
<div id="details-wrapper">
  <p id="details-title">Shoe Details</p>
  <div id="img-wrapper">
    <img src=".${details.imageUrl}" alt="example1" />
  </div>
  <div id="info-wrapper">
    <p>Brand: <span id="details-brand">${details.brand}</span></p>
    <p>
      Model: <span id="details-model">${details.model}</span>
    </p>
    <p>Release date: <span id="details-release">${details.release}</span></p>
    <p>Designer: <span id="details-designer">${details.designer}</span></p>
    <p>Value: <span id="details-value">${details.value}</span></p>
  </div>

  <!--Edit and Delete are only for creator-->
  ${details._ownerId == userId ? html`
  <div id="action-buttons">
    <a href="/edit/${id}" id="edit-btn">Edit</a>
    <a href="javascript:void(0)" id="delete-btn" @click=${delelePost}>Delete</a>
  </div>` : ''}
</div>
</section>`;

let editTemplate = (data) => html`<section id="edit">
<div class="form">
  <h2>Edit item</h2>
  <form class="edit-form" @submit=${postEditValues}>
    <input
      type="text"
      value=${data.brand}
      name="brand"
      id="shoe-brand"
      placeholder="Brand"
    />
    <input
      type="text"
      value=${data.model}
      name="model"
      id="shoe-model"
      placeholder="Model"
    />
    <input
      type="text"
      value=${data.imageUrl}
      name="imageUrl"
      id="shoe-img"
      placeholder="Image url"
    />
    <input
      type="text"
      value=${data.release}
      name="release"
      id="shoe-release"
      placeholder="Release date"
    />
    <input
      type="text"
      value=${data.designer}
      name="designer"
      id="shoe-designer"
      placeholder="Designer"
    />
    <input
      type="text"
      value=${data.value}
      name="value"
      id="shoe-value"
      placeholder="Value"
    />

    <button type="submit">post</button>
  </form>
</div>
</section>`;

export async function detailsView(ctx) {

    let id = ctx.params.id;

    removeId = id;

    let details = await get(detailsUrl + id);

    let user = await getUserData();

    let userId;

    if(user == null){

        userId = 0;
         
    }else{
        userId = user._id;
    }

   

    let ownerId = details._ownerId;

    ctx.render(detailsTemplate(details, user, userId, ownerId, id));

}

export async function edit(ctx) {

    let id = ctx.params.id;

    let getPostValues = await get(`/data/shoes/${id}`);

    putId = id;

    ctx.render(editTemplate(getPostValues));

}

export async function postEditValues(e){

    e.preventDefault();

    console.log(e);

    let newForm = new FormData(e.target);

    let requestObj = Object.fromEntries(newForm);

    for(let el in requestObj){

        if(requestObj[el] === ''){

            return;

        }

    }

    await put(`/data/shoes/${putId}`, requestObj);
 
}

export async function delelePost() {

    
    await del(`/data/shoes/${removeId}`);

    page.redirect('/catalog');

}