function fancyBarcodes(input) {

    let n = Number(input.shift());

    let regEx0 = /(@{1})(#{1,})[A-Z]{1}[a-z0-9][^_]{3,}[A-Z]{1}@{1}#{1,}/g;

    for (let i = 0; i < input.length; i++) {

        let valid = input[i].match(regEx0);

        if (valid === null) {

            console.log("Invalid barcode");

            continue;

        }

        let regEx = /\d/g;

        let match = input[i].match(regEx);

        if (match === null) {


            console.log('Product group: 00');

        } else {

            let result = '';

            for (let el of match) {

                result += el;

            }

            console.log(`Product group: ${result}`);

        }

    }

}

fancyBarcodes((["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]));