function colorize() {
    let getElements = document.querySelectorAll('table tr');

    let toArray = Array.from(getElements);

    let index = 0;

    for (let el of toArray) {

        index++;

        if (index % 2 === 0) {
            el.style.background = 'Teal';

        }
    }

}

