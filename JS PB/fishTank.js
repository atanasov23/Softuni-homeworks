function fishTank(input){

    let volume = Number((input[0] * input[1] * input[2])/1000);

    let finalLiters = volume * (1 - (input[3]/100));

    console.log(finalLiters);
}

fishTank(["105", "77", "89", "18.5"]);