let loadBooks = document.getElementById('loadBooks');
let submitBtn = document.getElementById('submit');
let tbody = document.querySelector('tbody');
let editBtn = document.getElementsByClassName('edit');
let deleteBtn = document.getElementsByClassName('delete');
let getTitle = document.getElementsByName('title')[0];
let getAuthor = document.getElementsByName('author')[0];

loadBooks.addEventListener('click', getBook);
submitBtn.addEventListener('click', createBook);

function editBook(e) {

    let id = e.target.parentElement.parentElement.id;

    let title = e.target.parentElement.parentElement.children[0];
    let author = e.target.parentElement.parentElement.children[1];

    getTitle.value = title.textContent;
    getAuthor.value = author.textContent;

    submitBtn.textContent = 'Save';

    document.getElementsByTagName('h3')[0].textContent = 'Edit Form';

    submitBtn.addEventListener('click', async () => {

        let update = {

            author: getAuthor.value,
            title: getTitle.value

        }

        fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {

            method: 'PUT',
            headers: { 'Content-Type': 'Aplication/json' },
            body: JSON.stringify(update)

        });

        e.target.parentElement.parentElement.innerHTML = `
    
    <tr id = '${id}'>
        <td>${update.title}</td>
        <td>${update.author}</td>
     <td>
        <button class = 'edit'>Edit</button>
        <button class = 'delete'>Delete</button>
     </td>
    </tr>
    `
    })

}

async function getBook() {

    tbody.innerHTML = '';

    let response = await fetch('http://localhost:3030/jsonstore/collections/books')
        .then(a => a.json())
        .then(a => a)

    for (let el in response) {

        tbody.innerHTML += `
        <tr id = '${el}'>
            <td>${response[el].title}</td>
            <td>${response[el].author}</td>
         <td>
            <button class = 'edit'>Edit</button>
            <button class = 'delete'>Delete</button>
         </td>
        </tr>
        `
    }

    addEventDelete();
    addEventEdit();

}

function addEventDelete() {

    [...deleteBtn].forEach(btn => btn.addEventListener('click', deletePost))
}

function addEventEdit() {

    [...editBtn].forEach(btn => btn.addEventListener('click', editBook))
}


function deletePost(el) {

    fetch(`http://localhost:3030/jsonstore/collections/books/${el.target.parentElement.parentElement.id}`, {

        method: 'DELETE',
        headers: { 'Content-Type': 'Aplication/json' }

    })

    el.target.parentElement.parentElement.remove();

}

async function createBook(e) {

    e.preventDefault();

    let newBook = {

        author: getAuthor.value,
        title: getTitle.value
    }

    if (getAuthor.value !== '' && getTitle.value !== '') {

        if (submitBtn.textContent === 'Submit') {

            let response = await fetch('http://localhost:3030/jsonstore/collections/books/', {

                method: 'POST',
                headers: { 'Content-Type': 'Aplication/json' },
                body: JSON.stringify(newBook)

            })
                .then(a => a.json())
                .then(a => a)

            tbody.innerHTML += `
        <tr id = '${response._id}'>
            <td>${newBook.title}</td>
            <td>${newBook.author}</td>
         <td>
            <button class = 'edit'>Edit</button>
            <button class = 'delete'>Delete</button>
         </td>
        </tr>
        `
            addEventDelete();
            addEventEdit();

        }

    }

}



