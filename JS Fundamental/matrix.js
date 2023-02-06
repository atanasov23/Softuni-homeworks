function matrix(n) {

    let matrix = [];

    let test = '';

    for (let i = 0; i < n; i++) {

        let arr = [];

        for (let j = 0; j < n; j++) {

            arr.push(n);

        }

        matrix.push(arr);
    }

    for (let el of matrix) {

        test += `${el.join(' ')} \n`;

    }

    console.log(test);
}

matrix(2);