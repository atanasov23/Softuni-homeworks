function serializeString(arr) {

    let string = arr[0];

    let result = [];

    for (let el of string) {

        if (!result.includes(el)) {

            result.push(el);

        }

    }

    for (let el of result) {

        let result = [];

        for (let i = 0; i < string.length; i++) {

            if (el === string[i]) {

                result.push(i)
            }

        }

        console.log(`${el}:${result.join('/')}`);

    }

}

serializeString(["avjavamsdmcalsdm"]);