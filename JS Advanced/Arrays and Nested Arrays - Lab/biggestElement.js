function biggestElement(arr){

    let result = [];

    for(let el of arr){

        let biggest = Math.max(...el);

        result.push(biggest)

    }

    return Math.max(...result);

}

biggestElement(
    [[20, 50, 10],
    [8, 33, 145]]
    );