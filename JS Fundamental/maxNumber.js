function maxNumber(array) {

    let result = [];

    for (let i = 0; i <= array.length - 1; i++) {

        let bool = true;

        for (let j = i + 1; j <= array.length - 1; j++) {

            if (array[i] <= array[j]) {

                bool = false;

            }

        }

        if (bool) {

            result.push(array[i]);

        }

    }

    console.log(result.join(' '));

}

maxNumber([1, 4, 3, 2]);
