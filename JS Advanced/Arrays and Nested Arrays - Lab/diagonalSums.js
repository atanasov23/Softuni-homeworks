function diagonalSums(arr) {

    let leftDiagonal = 0;
    let rightDiagonal = 0;

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        leftDiagonal += arr[i][i];

        rightDiagonal += arr[i][arr[i].length - 1 - i];

    }

    result.push(leftDiagonal);
    result.push(rightDiagonal);

    console.log(result.join(' '));

}

diagonalSums(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);