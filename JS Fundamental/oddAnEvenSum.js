function oddAnEvenSum(number) {

    let numToString = String(number);
    let odd = 0;
    let even = 0;

    for (let i = 0; i < numToString.length; i++) {

        if (Number(numToString[i]) % 2 === 0) {

            even += Number(numToString[i]);

        } else {

            odd += Number(numToString[i]);
        }

    }

    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
    
}

oddAnEvenSum(3495892137259234);
