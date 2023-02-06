function rotateArray(arr) {

    let rotationNumber = Number(arr[arr.length - 1]);

    let newArr = [];

    for (let x = 0; x < arr.length - 1; x++) {

        newArr.push(arr[x]);

    }

    for (let i = 0; i < rotationNumber; i++) {

        let lastElement = newArr[newArr.length - 1];

        newArr.unshift(lastElement);

        newArr.pop();

    }

    console.log(newArr.join(' '));

}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);