function firstAndLastNumbers(arr){

    let k = arr.shift();

    let newArr = [];

    newArr.push(arr.slice(0,k));

    newArr.push(arr.slice(-k));

    console.log(newArr[0].join(' '));

    console.log(newArr[1].join(' '));

}

firstAndLastNumbers([3,
    6, 7, 8, 9]);