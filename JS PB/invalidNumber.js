function invalidNumber(input){

    const number = Number(input[0]);

    if(number < 100 || number > 200){

        if(number !== 0){
            console.log("invalid");
        }
    }

}

invalidNumber(["200"]);