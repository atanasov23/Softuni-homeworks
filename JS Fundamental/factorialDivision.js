function factorialDivision(n1, n2) {

    if(n1 < 0 || n2 < 0){

        return

    }

    function fac(number){

        let factorial = 1;

        for (let i = number; i > 1; i--) {

            factorial *= i;
        }

        return factorial;
    }

    return (fac(n1) / fac(n2)).toFixed(2);

}

console.log(factorialDivision(5, 2));