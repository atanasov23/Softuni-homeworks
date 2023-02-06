function lastNumbersSequence(n1, n2) {

    let arr = [];

    for (let i = 0; i < n1; i++) {

        if (arr.length === 0 || arr.length === 1) {

            arr.push(1);

        } else {

            if (arr.length >= 2) {

                let part = arr.slice(-n2).map(Number);

                let sum = 0;

                for (let el of part) {

                    sum += el;

                }

                arr.push(sum);

            } else {

                arr.push(arr[i - 2] + arr[i - 1]);

            }
        }

    }

    console.log(arr.join(' '));
}

lastNumbersSequence(6, 3);