function sorting(arr){

    let newArr = [];

    let sorting = arr.sort((a,b) => a - b);

    while(sorting.length !== 0){

        newArr.push(sorting[sorting.length-1]) && sorting.pop();
        newArr.push(sorting[0]) && sorting.shift();

    }

console.log(newArr.join(' '))
}








sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);