function valueOfaString(arr) {

    let string = arr[0];

    let comand = arr[1];

    switch (comand) {

        case 'LOWERCASE':

            let sum = 0;

            for (let el of string) {

                if (el.charCodeAt() >= 97 && el.charCodeAt() <= 122) {

                    sum += el.charCodeAt();


                }
            }

            console.log(`The total sum is: ${sum}`);

            break;

        case 'UPPERCASE':

            let sum2 = 0;

            for (let el of string) {

                if (el.charCodeAt() >= 65 && el.charCodeAt() <= 90) {

                    sum2 += el.charCodeAt();


                }
            }

            console.log(`The total sum is: ${sum2}`);

            break;
    }

}

valueOfaString(['AC/DC',
    'UPPERCASE']);