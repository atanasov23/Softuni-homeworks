let queryString = window.location.search;

let id = queryString.split('').splice(4).join('');

let id2;

async function showComment() {

    let header = document.getElementsByClassName('header')[0];

    let res = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${id}`)
        .then(a => a.json())
        .then(a => a);

        //console.log(res);

    //header.children[1].children[0].textContent = res.username;

    id2 = res._id;

    let commentResponse = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments/`)
    .then(a => a.json())
    .then(a => a);

    

    for(let el in res){


        if(res[el] === id){

            console.log(res.title);

            document.getElementById('themeName').textContent = res.title
            document.getElementById('name').textContent = res.username


        }
    }
        document.querySelectorAll('span')[1].textContent = res.username;

}

showComment();




let btn = document.querySelector('button')

btn.addEventListener('click', createComment);

async function createComment(btn) {

    let textarea = document.getElementById('comment');
let userName = document.getElementById('username');

    btn.preventDefault();

    let comment = {

        text: textarea.value,
        username: userName.value,
        id: id2
    }

    if(textarea.value !== '' && userName.value !== ''){

    let res = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`, {

        method: 'POST',
        headers: { 'Content-Type': 'Aplication/json' },
        body: JSON.stringify(comment)

    });

        document.getElementById('comment').innerHTML += ` 
        
        
        `

//document.querySelector('strong').textContent = userName.value;

}
    


}




