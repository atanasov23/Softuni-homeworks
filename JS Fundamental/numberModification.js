function checkNumber(number) {

    let n = String(number);

    let finalResult = '';

    let sum = 0;

    let bool = false;

    let count = 0;

    while (!bool) {

        for (let i = 0; i < n.length; i++) {

            sum += Number(n[i]);

            count++;

        }

        if ((sum / count) > 5) {

            finalResult = n;

            bool = true;

            return finalResult;

        } else {

            n += 9;
        }

        count = 0

        sum = 0;

    }

}

console.log(checkNumber(5835));



