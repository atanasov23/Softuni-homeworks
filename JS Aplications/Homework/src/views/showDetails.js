import { get, put, del } from '../api/api.js';
import { html, render, page } from '../libraryPaths.js';
import { getUserData } from '../util.js';

let detailsUrl = '/data/catalog/';
let putId;
let removeId;

let detailsTemplate = (details, user, userId, ownerId) => 

html`<div class="container">
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="../${details.img}" />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${details.make}</span></p>
        <p>Model: <span>${details.model}</span></p>
        <p>Year: <span>${details.year}</span></p>
        <p>Description: <span>${details.description}</span></p>
        <p>Price: <span>${details.price}</span></p>
        <p>Material: <span>${details.material}</span></p>

        ${userId === ownerId ? html`
        <div>
            <a href="/edit/${details._id}" class="btn btn-info">Edit</a>
            <a href=”javascript:void(0)” class="btn btn-red" @click=${delelePost}>Delete</a>
        </div>` : ""}
    </div>
</div>
</div>`;

let editTemplate = (data) => 

html`  <div class="container">
<div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${postEditValues}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control" id="new-make" type="text" name="make" value="${data.make}">
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control is-valid" id="new-model" type="text" name="model" value="${data.model}">
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control is-invalid" id="new-year" type="number" name="year" value="${data.year}">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control" id="new-description" type="text" name="description" value="${data.description}">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control" id="new-price" type="number" name="price" value="${data.price}">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control" id="new-image" type="text" name="img" value="${data.img}">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material" value="${data.material}">
            </div>
            <input type="submit" class="btn btn-info" value="Edit" />
        </div>
    </div>
</form>
</div>`;

export async function detailsView(ctx) {

    let id = ctx.params.id;

    removeId = id;

    let details = await get(detailsUrl + id);

    let user = await getUserData();


    if(user){

    let userId = user._id;

    let ownerId = details._ownerId;

    ctx.render(detailsTemplate(details, user, userId, ownerId));

    }else{

        
    let userId = 0;

    let ownerId = 1;

        ctx.render(detailsTemplate(details, userId, ownerId));

    }


}

export async function edit(ctx) {

    let id = ctx.params.id;

    let getPostValues = await get(`/data/catalog/${id}`);

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

    await put(`/data/catalog/${putId}`, requestObj);
 
}



export async function delelePost() {

    
    await del(`/data/catalog/${removeId}`);

    page.redirect('/catalog');

}