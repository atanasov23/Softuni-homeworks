function asciiSumator(arr) {

    let start = arr[0].charCodeAt();

    let end = arr[1].charCodeAt();

    let string = arr[2];

    let sum = 0;

    if (start < end) {

        for (let el of string) {

            if (el.charCodeAt() > start && el.charCodeAt() < end) {

                sum += el.charCodeAt()

            }

        }

    } else {

        for (let el of string) {

            if (el.charCodeAt() > end && el.charCodeAt() < start) {

                sum += el.charCodeAt()

            }

        }

    }

    console.log(sum);

}

asciiSumator(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']);