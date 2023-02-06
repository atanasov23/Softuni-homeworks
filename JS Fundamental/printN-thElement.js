function printNthElement(arr) {

    let step = Number(arr[arr.length - 1]);

    let newArr = [];

    for (let i = 0; i <= arr.length - 2; i += step) {

        newArr.push(arr[i]);

    }

    console.log(newArr.join(' '));

}


printNthElement(['1', '2', '3', '4', '5', '6'])