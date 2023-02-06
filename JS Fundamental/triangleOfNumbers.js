function triangleOfNumbers(n) {

    for (let i = 1; i <= n; i++) {

        let show = '';

        for (let x = 1; x <= i; x++) {

            show += `${i} `;

        }

        console.log(show);
    }

}

triangleOfNumbers(6);