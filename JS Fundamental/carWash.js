function carWash(arr) {

    let sum = 0;

    let index = 0;

    while (index < arr.length) {

        switch (arr[index]) {

            case 'soap':

                sum += 10;

                break;

            case 'water':

                sum += sum * 0.2;

                break;

            case 'vacuum cleaner':

                sum += sum * 0.25;

                break;

            case 'mud':

                sum -= sum * 0.1;

                break;
        }

        index++;

    }

    console.log(`The car is ${sum.toFixed(2)}% clean.`);

}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);