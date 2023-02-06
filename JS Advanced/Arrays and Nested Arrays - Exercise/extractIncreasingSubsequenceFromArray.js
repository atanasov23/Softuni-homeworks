function extractIncreasingSubsequenceFromArray(arr) {

    let biggestNumber = 0;

    let result = arr.filter(a => {

        if (a >= biggestNumber) {

            biggestNumber = a;

            return true;

        }

    })

    return result;

}


console.log(extractIncreasingSubsequenceFromArray([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));