function attachEvents() {

    let getPostBtn = document.getElementById('btnLoadPosts');
    let getViewBtn = document.getElementById('btnViewPost');
    let post = document.getElementById('posts');
    let postTitle = document.getElementById('post-title');
    let postBody = document.getElementById('post-body');
    let postComment = document.getElementById('post-comments');

    getPostBtn.addEventListener('click', showPost);
    getViewBtn.addEventListener('click', showComment)

    async function showPost() {

        [...post.children].forEach(a => a.remove())
        let response = '';

        await fetch('http://localhost:3030/jsonstore/blog/posts')
            .then(a => a.json())
            .then(a => response = a);

        for (let el in response) {

            let createOptions = document.createElement('option');

            createOptions.value = response[el].id;
            createOptions.innerText = response[el].title;
            post.appendChild(createOptions);
        }

    }

    async function showComment() {

        let value = post.value;
        let result = '';

        [...postComment.children].forEach(a => a.remove())

        postTitle.innerText = post.options[post.selectedIndex].text;

        await fetch(`http://localhost:3030/jsonstore/blog/comments/`)
            .then(a => a.json())
            .then(a => result = a)
            .catch(err => err);

        let result2 = '';
        await fetch(`http://localhost:3030/jsonstore/blog/posts`)
            .then(a => a.json())
            .then(a => result2 = a)
            .catch(err => err);

        postBody.innerText = result2[value].body

        for (let el in result) {

            if (result[el].postId === value) {

                let createLi = document.createElement('li');

                createLi.id = el;

                createLi.innerText = result[el].text;

                postComment.appendChild(createLi);

            }
        }
    }
}

attachEvents();