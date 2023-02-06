function primeNumberChecker(number) {

    let result = true;

    if (number == 2) {

        return true;

    } else if (number == 1 || number == 0) {

        return false;

    }

    for (let i = 2; i < Math.sqrt(number); i++) {

        if (number % i === 0) {

            result = false;

            break;

        }

    }

    return result;

}

console.log(primeNumberChecker(7));