function mathOperations(n1, n2, operator) {

    let sum = 0;

    let firstNumber = Number(n1);

    let secondNumber = Number(n2);

    switch (operator) {

        case '+':

            sum = firstNumber + secondNumber;

            break;

        case '-':

            sum = firstNumber - secondNumber;

            break;

        case '*':

            sum = firstNumber * secondNumber;

            break;

        case '/':

            sum = firstNumber / secondNumber;

            break;

        case '%':

            sum = firstNumber % secondNumber;

            break;

        case '**':

            sum = Math.pow(firstNumber, secondNumber);

            break;

    }

    console.log(sum);
}

mathOperations(3, 5.5, '*');