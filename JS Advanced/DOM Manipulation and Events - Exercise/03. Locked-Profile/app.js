function lockedProfile() {

    let btn = [...document.getElementsByTagName('button')];

    btn.forEach(btn => btn.addEventListener('click', show));

    function show(obj) {

        console.log(obj);

        let btn = obj.target;

        let parent = btn.parentElement;

        let hiddenInfo = parent.getElementsByTagName('div')[0];

        let status = parent.querySelector('input[type="radio"]:checked').value;

        if (status === 'unlock') {

            if (btn.textContent === 'Hide it') {

                hiddenInfo.style.display = '';

                btn.textContent = 'Show more'

            } else {

                hiddenInfo.style.display = 'inline-block';

                btn.textContent = 'Hide it'


            }

        }

    }
}