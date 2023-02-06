document.getElementById('user').style.display = 'none';

let registerBtn = document.getElementById('loginBtn');

let form = document.querySelectorAll('form')[0];

registerBtn.addEventListener('click', login);

export async function login(obj) {


    obj.preventDefault();

    let formField = new FormData(form);

    let regObj = {

        email: formField.get('email'),
        password: formField.get('password')

    }

    let request = await fetch('http://localhost:3030/users/login', {
    method: 'POST',
    headers: {'Content-Type': 'Aplication/json'},
    body: JSON.stringify(regObj)

    }).then(res => res.json())
    .then(a => a);

    let accessToken = request.accessToken;

    let id = request._id;

    let createOn = request._createdOn;


    sessionStorage.setItem('accessToken', accessToken);

    sessionStorage.setItem('id', id);

    sessionStorage.setItem('create', createOn);

    //document.getElementById('user').style.display = 'block';

    
  
    if(request.code !== 403){

        document.getElementById('user').style.display = 'inline';
        document.getElementById('guest').style.display = 'none';

  window.location = './index.html';
    }



}