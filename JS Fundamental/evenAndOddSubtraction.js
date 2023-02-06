function evenAndOddSubtraction(arr) {

    let sumEven = 0;

    let sumOdd = 0;

    for (let i = 0; i <= arr.length - 1; i++) {

        if (arr[i] % 2 === 0) {

            sumEven += arr[i];

        } else {

            sumOdd += arr[i];
        }

    }

    console.log(sumEven - sumOdd);
    
}

evenAndOddSubtraction([2, 4, 6, 8, 10]);