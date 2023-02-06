function sumSeconds(input){

    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    let numberThird = Number(input[2]);

    let sum = numberOne + numberTwo + numberThird;
    


    let minutes = Math.floor(sum / 60);
    let seconds = sum % 60;
    

    if(seconds < 10){

        console.log(`${minutes}:0${seconds}`);

    }else{

        console.log(`${minutes}:${seconds}`);
    }


    console.log(seconds);

}

sumSeconds(["14", "12", "10"]);