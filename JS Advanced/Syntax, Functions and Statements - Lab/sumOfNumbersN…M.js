function sumOfNumbers(n1, n2){

    let sum = 0;

    let firstNumber = Number(n1);

    let secondNumber = Number(n2);

    for(let i = firstNumber; i <= secondNumber; i++){

        sum += i; 

    }

    return sum;
}

sumOfNumbers('-8', '20')