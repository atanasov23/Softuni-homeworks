function focused() {

    let element = document.querySelectorAll('input');

    for (let el of element) {

        el.addEventListener('focus', change);

        el.addEventListener('blur', leave);

    }

    function change(a) {

        console.log(a);

        a.target.parentNode.classList.add('focused');

        

    }

    function leave(a) {

        a.target.parentNode.classList.remove('focused');
    }

}