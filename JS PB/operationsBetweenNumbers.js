function operationsBetweenNumbers(input) {

    const numberOne = Number(input[0]);
    const numberTwo = Number(input[1]);
    let result = 0;
    let boolean = "";

    
    switch(input[2]){

        case "+":

            result  = numberOne + numberTwo;

            if(result % 2 == 0){

                boolean = "even";

            }else{

                boolean = "odd"
            }

            console.log(`${numberOne} + ${numberTwo} = ${result} - ${boolean} `);

            break;

        case "-":

        result  = numberOne - numberTwo;

        if(result % 2 == 0){

            boolean = "even";

        }else{

           boolean = "odd"
        }

        console.log(`${numberOne} - ${numberTwo} = ${result} - ${boolean} `);
       
        break;

        case "*":

            result  = numberOne * numberTwo;

            if(result % 2 == 0){

                boolean = "even";

            }else{

               boolean = "odd";
            }

            console.log(`${numberOne} * ${numberTwo} = ${result} - ${boolean} `);

        break;

    
        case "/":

        if(numberOne == 0 || numberTwo == 0){

            console.log(`Cannot divide ${numberOne} by zero`)
        }else{

        result = numberOne / numberTwo;

        console.log(`${numberOne} / ${numberTwo} = ${result.toFixed(2)}`);

        }

        break;

        case "%":

            if(numberOne == 0 || numberTwo == 0){

                console.log(`Cannot divide ${numberOne} by zero`)

            }else{

        result = numberOne % numberTwo;

        console.log(`${numberOne} % ${numberTwo} = ${result}`);

            }

        break;

    }

}

operationsBetweenNumbers(["20", "0", "/"]);
