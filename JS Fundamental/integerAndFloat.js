function integerAndFloat(n1, n2, n3) {

    let sum = n1 + n2 + n3;

    let type = '';

    if (sum % 1 === 0) {

        type = 'Integer';

    } else {

        type = 'Float';
    }

    console.log(`${sum} - ${type}`);

}

integerAndFloat(9, 100, 1.1);