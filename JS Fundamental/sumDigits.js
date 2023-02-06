function sumDigits(number) {

    let toString = String(number);

    let sum = 0;

    for (let i = 0; i < toString.length; i++) {

        sum += Number(toString[i]);
        
    }

    console.log(sum);

}

sumDigits(97561);