function magicMatrices(matrix) {

    let bool = true;

    let firstSum = matrix[0].reduce((a, b) => a + b);

    for (let i = 0; i < matrix.length; i++) {

        let row = matrix[i].reduce((a, b) => a + b, 0);

        let cow = matrix.map(el => el[i]).reduce((a, b) => a + b);

        if (row !== firstSum || cow !== firstSum) {

            bool = false

            break;

        }

    }

    console.log(bool);

}

magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]);