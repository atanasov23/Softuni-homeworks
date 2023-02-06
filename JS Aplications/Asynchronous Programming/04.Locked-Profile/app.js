function lockedProfile() {
    fetch('http://localhost:3030/jsonstore/advanced/profiles')
        .then(a => a.json())
        .then(showProfile);

    function showProfile(profiles) {

        let arr = Object.entries(profiles);

        let getMain = document.getElementById('main');
        getMain.innerHTML = ''

        for (let i = 0; i < arr.length; i++) {

            getMain.innerHTML += `<div class="profile">
            <img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user1Locked" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="user1Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user1Username" value="${arr[i][1].username}" disabled readonly />
            <div class="${arr[i][1].username}">
                <hr>
                <label>Email:</label>
                <input type="email" name="user1Email" value="${arr[i][1].email}" disabled readonly />
                <label>Age:</label>
                <input type="text" name="user1Age" value="${arr[i][1].age}" disabled readonly />
            </div>
            
            <button>Show more</button>
        </div>`

            document.getElementsByClassName(`${arr[i][1].username}`)[0].style.display = 'none'
        }

        let getButton = Array.from(document.getElementsByTagName('button'));

        for (let el of getButton) {

            el.addEventListener('click', showDetails)
        }

        function showDetails(el) {

            let lock = el.target.parentElement.children[2].checked;
            let unlock = el.target.parentElement.children[4].checked;

            if (unlock) {

                if (el.target.parentElement.children[9].style.display == 'block') {

                    el.target.parentElement.children[9].style.display = 'none'

                    el.target.innerText = 'Show more';

                } else {
                    el.target.parentElement.children[9].style.display = 'block'

                    el.target.innerText = 'Hide it';

                }
            }
        }


    }

}