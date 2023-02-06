function specialNumbers(n) {

    let sum = 0;

    let bool = false;

    for (let i = 1; i <= n; ++i) {

        sum = 0;

        let number = String(i)


        for (let x = 0; x < number.length; x++) {

            sum += Number(number[x]);

            if (sum === 5 || sum === 7 || sum === 11) {

                bool = true;

            } else {

                bool = false;
            }

        }

        if (bool) {

            console.log(`${i} -> True`);

        } else {

            console.log(`${i} -> False`);

        }

    }

}

specialNumbers(20);