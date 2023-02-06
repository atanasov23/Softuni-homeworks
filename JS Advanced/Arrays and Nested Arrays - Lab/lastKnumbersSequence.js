function lastKnumbersSequence(n, k) {

    let result = [1];

    let sum = 0;

    for (let i = 0; i < n - 1; i++) {

        if (result.length <= k) {

            sum += result[i];

            result.push(sum);

        } else {

            sum = 0;

            let index = i;

            for (let j = k; j > 0; j--) {

                sum += result[index--];
            }

            result.push(sum);
        }

    }

    return result;

}

lastKnumbersSequence(8, 2);