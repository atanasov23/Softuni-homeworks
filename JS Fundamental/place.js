function place(arr) {

    let k = arr.length - 1;

    for (let i = 0; i < arr.length / 2; i++) {

        let leftElement = arr[i];

        let rightElement = arr[k];

        arr[i] = rightElement;

        arr[k] = leftElement;

        k--;

    }

    let result = '';

    for (let element of arr) {

        result += element + ' ';

    }

    console.log(result);

}

place(['33', '123', '0', 'dd']);