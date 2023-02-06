import { get, put, del } from '../api/api.js';
import { html, render, page } from '../libraryPaths.js';
import { getUserData } from '../util.js';

let detailsUrl = '/data/albums/';
let putId;
let removeId;

let detailsTemplate = (details, user, userId, ownerId) => html`<section id="detailsPage">
<div class="wrapper">
    <div class="albumCover">
        <img src="${details.imgUrl}"
    <div class="albumInfo">
        <div class="albumText">

            <h1>Name: ${details.name}</h1>
            <h3>Artist: ${details.artist}</h3>
            <h4>Genre: ${details.genre}</h4>
            <h4>Price: $${details.price}</h4>
            <h4>Date: ${details.releaseDate}</h4>
            <p>Description: ${details.description}</p>
        </div>

        <!-- Only for registered user and creator of the album-->
        ${user ? html` <div class="actionBtn">

            ${userId === ownerId ? html`
            <a href="/edit/${details._id}" @click=${edit} class="edit">Edit</a>
            <a href="javascript:void(0)" @click=${delelePost} class="remove">Delete</a>`
            : ''}

        </div>` : ''}
       
    </div>
</div>
</section>`;

let editTemplate = (data) => html`<section class="editPage">

<form @submit=${postEditValues}>
    <fieldset>
        <legend>Edit Album</legend>

        <div class="container">
            <label for="name" class="vhide">Album name</label>
            <input id="name" name="name" class="name" type="text" value="${data.name}">

            <label for="imgUrl" class="vhide">Image Url</label>
            <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" value="${data.imgUrl}">

            <label for="price" class="vhide">Price</label>
            <input id="price" name="price" class="price" type="text" value="${data.price}">

            <label for="releaseDate" class="vhide">Release date</label>
            <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" value="${data.releaseDate}">

            <label for="artist" class="vhide">Artist</label>
            <input id="artist" name="artist" class="artist" type="text" value="${data.artist}">

            <label for="genre" class="vhide">Genre</label>
            <input id="genre" name="genre" class="genre" type="text" value="${data.genre}">

            <label for="description" class="vhide">Description</label>
            <textarea name="description" class="description" rows="10"
                cols="10">${data.description}</textarea>

            <button class="edit-album" type="submit">Edit Album</button>
        </div>
    </fieldset>
</form>
</section>`;

export async function detailsView(ctx) {

    let id = ctx.params.id;

    removeId = id;

    let details = await get(detailsUrl + id);

    let user = await getUserData();

    let userId = user._id;

    let ownerId = details._ownerId;

    ctx.render(detailsTemplate(details, user, userId, ownerId));

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