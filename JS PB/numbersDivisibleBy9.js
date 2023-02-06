function numbersDivisibleBy9(input){

    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);

    let numberSum = 0;
    
    

    for(let i = numberOne; i < numberTwo; i++){

        if(i % 9 == 0){

            numberSum += i;
          numbers = i;
            
        }

    }

console.log(`The sum: ${numberSum}`);

    for(let i = numberOne; i < numberTwo; i++){

 if(i % 9 == 0){

            console.log(i);
        }

    }

}
numbersDivisibleBy9(["100", "200"]);