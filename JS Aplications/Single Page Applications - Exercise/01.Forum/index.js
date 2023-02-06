//import {showComment} from './comment.js'

let form = document.querySelector('form');

let cancelBtn = document.getElementsByClassName('cancel')[0];

let publicBtn = document.getElementsByClassName('public')[0];

let topicName = document.getElementById('topicName');
let username = document.getElementById('username');
let postText = document.getElementById('postText');

let topicId;

async function showPost() {

    let response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts')
        .then(a => a.json())
        .then(a => a);

    let topicTitle = document.getElementsByClassName('topic-title')[0];

    topicTitle.innerHTML = '';

    let id;
    for (let el in response) {

        console.log(response[el].username);

        topicTitle.innerHTML += `

        <div class="topic-container" >
    <div class="topic-name-wrapper ">
        <div class="topic-name" id=${response[el]._id}>
            <a href="theme-content.html?id=${response[el]._id}" class="normal" id=${response[el]._id}>
                <h2>${response[el].title}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>2020-10-10T12:08:28.451Z</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${response[el].username}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
    }

    //let topicContainer = document.getElementsByClassName("topic-name");

  //  for (let el of topicContainer) {

      //  el.addEventListener('click', showComment);

   // }


}

showPost();



publicBtn.addEventListener('click', publicPost);

cancelBtn.addEventListener('click', cancel);

async function publicPost(e) {

    e.preventDefault();

    let postObj = {

        title: topicName.value,
        username: username.value,
        content: postText.value

    }

    if (topicName.value !== '' && username.value !== '' & postText.value !== '') {

        let response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {

            method: 'POST',
            headers: { 'Content-Type': 'Aplication/json' },
            body: JSON.stringify(postObj)

        }).then(a => a.json())
            .then(a => a);

        topicName.value = '';
        username.value = '';
        postText.value = '';

        topicId = response._id;

        showPost();
    }


}

function cancel(e) {

    e.preventDefault();

    topicName.value = '';
    username.value = '';
    postText.value = '';

}



