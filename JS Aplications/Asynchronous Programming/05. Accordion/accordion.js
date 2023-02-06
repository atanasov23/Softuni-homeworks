function solution() {

    let getMain = document.getElementById('main');

    fetch('http://localhost:3030/jsonstore/advanced/articles/list')
        .then(a => a.json())
        .then(show)

    function show(details) {

        for (let el of details) {

            getMain.innerHTML += `<div class="accordion">
            <div class="head">
                <span>${el.title}</span>
                <button class="button" id=${el['_id']}>More</button>
            </div>
            <div class="extra">
                <p>Scalable Vector Graphics .....</p>
            </div>
        </div>`
        }

        [...document.getElementsByClassName('button')].forEach(el => el.addEventListener('click', showMore))

        async function showMore(btn) {

            let id = btn.target.id;

            let response = '';

            await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`)
                .then(a => a.json())
                .then(el => response = el);

            let getClassExtra = btn.target.parentElement.parentElement.children[1].children[0];

            getClassExtra.innerHTML = response.content

            if (btn.target.parentElement.parentElement.children[1].style.display === 'block') {

                btn.target.parentElement.parentElement.children[1].style.display = 'none';
                btn.target.textContent = 'MORE'
            } else {

                btn.target.parentElement.parentElement.children[1].style.display = 'block';
                btn.target.textContent = 'LESS'
            }

        }
    }
}

solution();