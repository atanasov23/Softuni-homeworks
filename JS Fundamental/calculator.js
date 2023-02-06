function calculator(firstNumber, operator, secondNumber) {

    let totalSum = 0;

    switch (operator) {

        case '+':

            totalSum = firstNumber + secondNumber;

            break;

        case '-':

            totalSum = firstNumber - secondNumber;

            break;

        case '/':

            totalSum = firstNumber / secondNumber;

            break;

        case '*':

            totalSum = firstNumber * secondNumber;

            break;

    }

    console.log(totalSum.toFixed(2));

}

calculator(25.5,
    '-',
    3);