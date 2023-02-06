function attachEvents() {

    let loadBtn = document.getElementById('btnLoad');
    let phonebook = document.getElementById('phonebook');
    //let deleteBtn = document.querySelectorAll('button');
    let createBtn = document.getElementById('btnCreate');
    let personName = document.getElementById('person');
    let phoneNumber = document.getElementById('phone');

    loadBtn.addEventListener('click', loadPhoneBook);
    createBtn.addEventListener('click', addNumber);

    async function loadPhoneBook() {

        [...phonebook.children].forEach(el => phonebook.removeChild(el))

        let response = await fetch('http://localhost:3030/jsonstore/phonebook')
            .then(a => a.json()).then(a => a)

        for (let el in response) {

            let creatLi = document.createElement('li');

            creatLi.id = 'phonebook'

            creatLi.innerHTML = `${response[el].person}: ${response[el].phone}<button id=${el}>Delete</button>`;

            phonebook.appendChild(creatLi);

            document.getElementById(el).addEventListener('click', deleteNumber)

        }

    }

    async function deleteNumber(e) {


        let response = await fetch('http://localhost:3030/jsonstore/phonebook')
            .then(a => a.json()).then(a => a)

        let id = response[e.target.id]._id;

        fetch(`http://localhost:3030/jsonstore/phonebook/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.text()) // or res.json()
            .then(res => res)

        e.target.parentElement.remove();
    }



    async function addNumber() {

        let newObj = {
            person: personName.value,
            phone: phoneNumber.value
        }

        let id = '';

        await fetch('http://localhost:3030/jsonstore/phonebook', {
            method: 'POST',
            headers: { 'Content-Type': 'Aplication/json' },
            body: JSON.stringify(newObj)
        }).then(a => a.json())
            .then(a => id = a._id)

        let creatLi = document.createElement('li');

        creatLi.id = 'phonebook'

        creatLi.innerHTML = `${personName.value}: ${phoneNumber.value}<button id = ${id}>Delete</button>`;

        phonebook.appendChild(creatLi);

        document.getElementById(id).addEventListener('click', deleteNumber)


        personName.value = '';
        phoneNumber.value = '';
        location.reload();
    }


}

attachEvents();