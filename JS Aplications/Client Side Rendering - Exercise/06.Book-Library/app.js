import { html, render } from '../node_modules/lit-html/lit-html.js';

let editForm = document.getElementById('edit-form');
let tbody = document.querySelector('tbody');
let addForm = document.getElementById('add-form');
let getForms = document.querySelectorAll('input[type=submit]');
let id;

editForm.style.display = 'none';

document.getElementById('loadBooks').addEventListener('click', load);

async function load() {

    let res = await fetch('http://localhost:3030/jsonstore/collections/books')
        .then(a => a.json())
        .then(a => a);

    let template = html`${Object.entries(res).map(a => html`<tr id=${a[0]}>
    <td>${a[1].title}</td>
    <td>${a[1].author}</td>
    <td>
        <button @click=${editBtn}>Edit</button>
        <button @click=${deleteBtn}>Delete</button>
    </td>
</tr>`)}`;

    render(template, tbody);
}

getForms[0].addEventListener('click', addBookForm);

getForms[1].addEventListener('click', editBookForm);

async function addBookForm(e) {

    e.preventDefault();

    let addFormObj = new FormData(addForm);

    let title = addFormObj.get('title');

    let author = addFormObj.get('author');

    if (title !== '' && author !== '') {

        await fetch('http://localhost:3030/jsonstore/collections/books', {

            method: 'POST',
            headers: { 'Content-Type': 'Aplication/json' },
            body: JSON.stringify({
                "author": author,
                "title": title
            }
            )
        });

        load();
    }
}

async function editBookForm(e) {

    e.preventDefault();

    let editFormObj = new FormData(editForm);

    let title = editFormObj.get('title');

    let author = editFormObj.get('author');

    await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {

        method: 'PUT',
        headers: { 'Content-Type': 'Aplication/json' },
        body: JSON.stringify({
            "author": author,
            "title": title
        }
        )
    });

    load();
}

function editBtn(e) {

    editForm.style.display = 'block';
    addForm.style.display = 'none';

    id = e.target.parentElement.parentElement.id;

    let title = e.target.parentElement.parentElement.children[0].textContent;

    let author = e.target.parentElement.parentElement.children[1].textContent;

    //3
    //5
    editForm.children[3].value = title;
    editForm.children[5].value = author;

}

function deleteBtn(e) {

    e.target.parentElement.parentElement.remove();

    fetch(`http://localhost:3030/jsonstore/collections/books/${e.target.parentElement.parentElement.id}`, {

        method: 'DELETE'
    });

}