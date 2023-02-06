import { get, put, del } from '../api/api.js';
import { html, render, page } from '../libraryPaths.js';
import { getUserData } from '../util.js';

let detailsUrl = '/data/offers/';
let putId;
let removeId;

let detailsTemplate = (details, user, userId, ownerId, requirementsNode, descriptionNode) => html`  <section id="details">


<div id="details-wrapper">
  <img id="details-img" src="${details.imageUrl}" alt="example1" />
  <p id="details-title">${details.title}</p>
  <p id="details-category">
    Category: <span id="categories">${details.category}</span>
  </p>
  <p id="details-salary">
    Salary: <span id="salary-number">${details.salary}</span>
  </p>
  <div id="info-wrapper">
    <div id="details-description">
      <h4>Description</h4>
      <span>${details.description}</span>
    </div>
    <div id="details-requirements">
      <h4>Requirements</h4>
      
      <span>${details.requirements}</span>
    </div>
  </div>
  <p>Applications: <strong id="applications">1</strong></p>

        ${user ? html` <div class="actionBtn">

            ${userId === ownerId ? html`<div id="action-buttons">
            <a href="/edit/${details._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${delelePost}>Delete</a>

            <!--Bonus - Only for logged-in users ( not authors )-->
            
          </div>`
            : ''}

        </div>` : ''}
       
    </div>
</div>
</section>`;

let editTemplate = (data) => html` 

<section id="edit">
<div class="form">
  <h2>Edit Offer</h2>
  <form class="edit-form" @submit=${postEditValues}>
    <input
      type="text"
      value=${data.title}
      name="title"
      id="job-title"
      placeholder="Title"
    />
    <input
      type="text"
      value=${data.imageUrl}
      name="imageUrl"
      id="job-logo"
      placeholder="Company logo url"
    />
    <input
      type="text"
      value=${data.category}
      name="category"
      id="job-category"
      placeholder="Category"
    />
    <textarea
      id="job-description"
      .value=${data.description}
      name="description"
      placeholder="Description"
      rows="4"
      cols="50"
    ></textarea>
    <textarea
      id="job-requirements"
      .value=${data.requirements}
      name="requirements"
      placeholder="Requirements"
      rows="4"
      cols="50"
    ></textarea>
    <input
      type="text"
      value=${data.salary}
      name="salary"
      id="job-salary"
      placeholder="Salary"
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

    if (user) {

        let userId = user._id;

        let ownerId = details._ownerId;

        ctx.render(detailsTemplate(details, user, userId, ownerId));

    } else {

        ctx.render(detailsTemplate(details));


    }

}

export async function edit(ctx) {

    let id = ctx.params.id;

    let getPostValues = await get(`/data/offers/${id}`);

    putId = id;

    ctx.render(editTemplate(getPostValues));

}

export async function postEditValues(e) {

    e.preventDefault();

    let newForm = new FormData(e.target);

    let requestObj = Object.fromEntries(newForm);

    for (let el in requestObj) {

        if (requestObj[el] === '') {

            return;

        }

    }

    await put(`/data/offers/${putId}`, requestObj);

}



export async function delelePost() {


    await del(`/data/offers/${removeId}`);

    page.redirect('/catalog');

}