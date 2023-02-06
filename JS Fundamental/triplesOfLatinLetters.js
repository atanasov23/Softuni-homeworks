function triplesOfLatinLetters(n) {

    let number = Number(n);

    for (let a = 0; a < number; a++) {

        let firstNumber = String.fromCharCode(97 + a);

        for (let b = 0; b < number; b++) {

            let secondNumber = String.fromCharCode(97 + b);

            for (let c = 0; c < number; c++) {

                let thirdNumber = String.fromCharCode(97 + c);

                console.log(`${firstNumber}${secondNumber}${thirdNumber}`);

            }

        }

    }
}

triplesOfLatinLetters(2);