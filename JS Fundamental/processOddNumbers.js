function processOddNumbers(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 !== 0) {

            newArr.unshift(arr[i] * 2);

        }

    }

    console.log(newArr.join(' '));

}

processOddNumbers([10, 15, 20, 25]);