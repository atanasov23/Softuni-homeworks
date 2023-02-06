function toggle() {

    let getTxt = document.getElementById('extra');

    let btn = document.getElementsByClassName('button')[0];

    if (getTxt.style.display === 'none') {

        getTxt.style.display = 'block';

        btn.textContent = 'Less';

    } else {

        getTxt.style.display = 'none';

        btn.textContent = 'More';

    }

}