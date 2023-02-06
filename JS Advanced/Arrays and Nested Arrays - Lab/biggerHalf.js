function biggerHalf(arr){

    let average = arr.length / 2

    return arr.sort((a,b) => a - b).slice(average)

}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6,10,26]));