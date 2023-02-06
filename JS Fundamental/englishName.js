function englishName(number) {

    let string = String(number);

    let lastWord = '';

    let result = '';

    for (let i = 0; i < string.length; i++) {

        lastWord = string[i];

    }



    switch (Number(lastWord)) {

        case 0:

            result = 'zero';

            break;

        case 1:

            result = 'one';

            break;

        case 2:

            result = 'two';

            break;

        case 3:

            result = 'three';

            break;

        case 4:

            result = 'four';

            break;

        case 5:

            result = 'five';

            break;

        case 6:

            result = 'six';

            break;

        case 7:

            result = 'seven';

            break;

        case 8:

            result = 'eight';

            break;

        case 9:

            result = 'nine'

            break;

            default: result = null;

            break;

    }

    return result;

}

console.log(englishName(1870));