function arrayRotation(arr, index) {

    let newArray = [];

    if (index < 0) {

        return;

    }

    if (index === arr.length) {

        for (let element of arr) {

            newArray.push(element);

        }

        console.log(newArray.join(' '));

        return;

    }

    if (index < arr.length) {

        for (let i = index; i < arr.length; i++) {

            newArray.push(arr[i]);

        }

        for (let i = 0; i < index; i++) {

            newArray.push(arr[i]);

        }

    } else {

        if (index % arr.length === 0) {

            console.log(arr.join(' '));

            return;

        }

        for (let i = 0; i <= index; i++) {

            for (let x = 0; x < arr.length - 1; x++) {

                let test2 = arr[0];

                let test = arr[[x + 1]];

                newArray[x] = test

                if (x >= arr.length - 2) {

                    newArray[newArray.length] = test2

                }

            }

            if (i < index) {

                arr = newArray;

                newArray = [];

            } else {

                newArray = arr;
                
            }

        }

    }

    console.log(newArray.join(' '));

}

arrayRotation([2, 4, 15, 31], 17)