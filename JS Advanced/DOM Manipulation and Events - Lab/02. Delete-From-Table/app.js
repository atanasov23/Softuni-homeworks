function deleteByEmail() {

    let value = document.getElementsByName('email')[0].value;

    let tr = document.querySelectorAll('tr');

    let result = document.getElementById('result');

    let bool = false;

    for (let i = 1; i < tr.length; i++) {

        let arr = Array.from(tr[i].children);

        if (value === arr[1].innerText) {

            tr[i].remove();

            result.innerText = 'Deleted.';

            bool = true;

        }

    }

    if (!bool) {

        result.innerText = 'Not found.';
    }

}