function sumAndProduct(input){

    const n = Number(input[0]);

    let sum = 0;

    let number = (n / 1) % 10;

    let counter =0;

    let boolean = false;
    for(let a = 1; a <= 9; a++){

       
        for(let b = 9; b >= a; b--){

            
            
            for(let c = 0; c <= 9; c++){

                for(let d = 9; d >= c; d-- ){

                    numSum = a + b + c + d;
                    num = a * b * c * d;

                    if(numSum == num && number % 10 == 5){

                        counter++;
                        
                        console.log(`${a}${b}${c}${d}`);

                        boolean = true;

                        

                    }else if(numSum / num == 3 && number % 3 == 0){

                        counter++;
                        //console.log(`${d}${c}${b}${a}`)

                        

                        boolean = true;

                        break;

                    }

                }

            }

        }


    }

    if(boolean === false){

        console.log("Nothing found")

    }

}
sumAndProduct(["125"]);