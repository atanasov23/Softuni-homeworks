function addAndSubtract(arr) {

    let secondArr = [];

    let originSum = 0;

    let modifyArrSum = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {

            secondArr.push(arr[i] + i);

        } else {

            secondArr.push(arr[i] - i);
        }

        originSum += arr[i];

    }

    for (let sum of secondArr) {

        modifyArrSum += sum

    }

    console.log(secondArr);

    console.log(originSum);

    console.log(modifyArrSum);

}

addAndSubtract([5, 15, 23, 56, 35]);