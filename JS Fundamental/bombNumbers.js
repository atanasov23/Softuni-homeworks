function bombNumbers(firstArray, secondArray) {

    let bomb = secondArray.shift();

    let index = secondArray.shift();

    let newArr = firstArray.slice(0);

    for (let i = 0; i < newArr.length; i++) {


        if (newArr[i] === bomb) {

            let startIndex = i - index;

            if (startIndex < 0) {

                startIndex = 0;

            }

            newArr.splice(i, index + 1);

            newArr.splice(startIndex, index);

            i = 0;

        }

    }

    let sum = 0;

    for (let el of newArr) {

        sum += el;

    }

    console.log(sum);

}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]);