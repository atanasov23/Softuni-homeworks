function palindromeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {

        let element = String(arr[i]);

        let reversedElement = '';

        for (let j = element.length - 1; j >= 0; j--) {

            reversedElement += element[j]

        }

        if (reversedElement === element) {

            console.log(true);
        } else {

            console.log(false);
        }

    }

}

palindromeIntegers([32, 2, 232, 1010]);