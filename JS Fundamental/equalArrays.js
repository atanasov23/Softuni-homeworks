function equalArrays(arrOne, arrTwo){

    let sum = 0;

    for(let i = 0; i <= arrOne.length - 1; i++){

        if(arrOne[i] === arrTwo[i]){

            sum += Number(arrOne[i]);

        }else{

            console.log( `Arrays are not identical. Found difference at ${i} index`);

            return;
        }
     
    }

    console.log(`Arrays are identical. Sum: ${sum}`);

}

equalArrays(['1'], ['10']);