function amazingNumbers(number) {

    let numToString = String(number);

    let sum = 0;

    let bool = 'False';

    for (let i = 0; i < numToString.length; i++) {

        sum += Number(numToString[i]);

    }

    if (sum.toString().includes('9')) {

        bool = 'True';

    } else {

        bool = 'False';
    }

    console.log(`${number} Amazing? ${bool}`);

}

amazingNumbers(999);