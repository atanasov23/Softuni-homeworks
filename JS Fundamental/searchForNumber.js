function searchForNumber(arr1, arr2) {

    let numberOfElement = arr2.shift();

    let deleteCounter = arr2.shift();

    let numberInCollection = arr2.shift();

    let counter = 0;

    let newArr = arr1.slice(0, numberOfElement);

    newArr.splice(0, deleteCounter);

    newArr.filter(el => {

        if (el === numberInCollection) {

            counter++;

        }
    });

    console.log(`Number ${numberInCollection} occurs ${counter} times.`);

}

searchForNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);