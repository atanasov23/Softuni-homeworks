function addAndRemove(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        let comand = arr[i];


        if (comand === 'add') {

            newArr.push(i + 1);

        } else {

            newArr.pop();
        }

    }
    if (newArr.length === 0) {

        console.log('Empty');

    } else {

        console.log(newArr.join(' '));
    }

}

addAndRemove(['add', 'add', 'add', 'add']);
