function sortingNumbers(arr){

    let newArr = [];

    let sorting = arr.sort((a,b) => a - b);

    console.log(sorting);

    for(let el of sorting){

        let lastElement = arr.pop();
        let firstElement = arr.shift();

        newArr.push(lastElement);
        newArr.push(firstElement);
    }
 
    //console.log(newArr);

}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);