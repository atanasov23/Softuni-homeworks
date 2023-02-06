function magic(arr, number) {

    for (let i = 0; i < arr.length; i++) {

        for (let x = i + 1; x < arr.length; x++) {

            if (arr[i] + arr[x] === number) {

                console.log(`${arr[i]} ${arr[x]}`);

            }

        }

    }

}

magic([1, 2, 3, 4, 5, 6],
    6);