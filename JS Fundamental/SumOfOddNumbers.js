function SumOfOddNumbers(n) {

    let counter = n;

    let sum = 0;

    for (let i = 1; i <= 100; i++) {


        if (i % 2 !== 0) {

            console.log(i);

            counter--;

            sum += i;

        }

        if (counter === 0) {

            break;

        }


    }

    console.log(`Sum: ${sum}`);

}

SumOfOddNumbers(3);