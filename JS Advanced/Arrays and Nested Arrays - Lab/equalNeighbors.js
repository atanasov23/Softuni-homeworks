function equalNeighbors(matrix) {

    let firstArray = matrix[0];

    let result = 0;

    for (let i = 1; i < matrix.length; i++) {

        

        for (let j = 0; j < matrix[i].length; j++) {

            

            if (firstArray[j] === matrix[i][j]) {

                result++;

            }

          if(firstArray[j] === firstArray[j + 1]){

            result++;
          }


//console.log(matrix[i][j]);
        }

        firstArray = matrix[i];

    }

    for(let k = 0; k < firstArray.length; k++){

        if(firstArray[k] === firstArray[k + 1]){

            result++;
          }

    }

    return result;

}

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]));