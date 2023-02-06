function aggregateElements(arr) {

    let sumElement = 0;

    let sumOfReverseElement = 0;

    let concatElement = '';

    for (let el of arr) {

        sumOfReverseElement += 1 / el;

        concatElement += String(el);

        sumElement += el;

    }

    console.log(sumElement);
    console.log(sumOfReverseElement);
    console.log(concatElement);

}

aggregateElements([1, 2, 3]);