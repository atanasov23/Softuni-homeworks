function reverseAnArrayOfNumbers(reverseNumber, arr){

    let result = '';

    for(let i = reverseNumber - 1; i >= 0; i--){

        result += arr[i] + ' ';

    }

    console.log(result);
    
}

reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);