function distinctArray(arr) {

    let duplicate = [];

    for (let i = 0; i < arr.length; i++) {

        if (!duplicate.includes(arr[i])) {

            duplicate.push(arr[i]);

        }

    }

    console.log(duplicate.join(' '))

}

distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);