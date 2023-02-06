function equalSums(array) {

    let index = 'no';

    for (let i = 0; i < array.length; i++) {

        let left = 0;

        let right = 0;

        for (let j = 0; j < i; j++) {

            left += array[j];

        }

        for (let k = i + 1; k < array.length; k++) {

            right += array[k];

        }

        if (left === right) {

            index = i;

        }

    }

    console.log(index);

}

equalSums([1, 2, 3, 3]);