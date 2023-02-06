function simpleCalculator(n1, n2, operator) {

    let obj = {

        multiply: () => n1 * n2,
        divide: () => n1 / n2,
        add: () => n1 + n2,
        subtract: () => n1 - n2

    }

    for (let element in obj) {

        if (element === operator) {

            console.log(obj[element]());

        }

    }
}

simpleCalculator(50,
    13,
    'subtract');