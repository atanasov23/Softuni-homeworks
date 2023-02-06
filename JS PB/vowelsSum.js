function vowelsSum(input){

    let sum = 0;

    for(let i = 0; i < input[0].length; i++){

        switch(input[0][i]){

            case "a":

            sum += 1;
            
            break;

            case "e":

                sum += 2;

            break;

            case "i":

                sum += 3;

            break;

            case "o":

                sum += 4;

            break;

            case "u":

                sum += 5;

            break;

        }
    }

    console.log(sum);
}

vowelsSum(["beer"]);