function activationKeys(input) {

    let code = input.shift();

    for (let i = 0; i < input.length; i++) {

        if (input[i] === 'Generate') {

            break;

        }

        let comand = input[i].split('>>>');

        switch (comand[0]) {

            case 'Contains':

                if (code.includes(comand[1])) {

                    console.log(`${code} contains ${comand[1]}`);

                } else {

                    console.log('Substring not found!');

                }

                break;

            case 'Flip':

                let startIndex = Number(comand[2]);

                let endIndex = Number(comand[3])

                let subComand = comand[1];

                let originalSub = code.substring(startIndex, endIndex)

                let substring = code.substring(startIndex, endIndex);

                if (subComand === 'Upper') {

                    substring = code.substring(startIndex, endIndex).toUpperCase();

                } else if (subComand === 'Lower') {

                    substring = code.substring(startIndex, endIndex).toLowerCase();

                }

                code = code.replace(originalSub, substring);

                console.log(code);

                break;

            case 'Slice':

                let startIndex2 = Number(comand[1]);

                let endIndex2 = Number(comand[2]);

                let sub = code.substring(startIndex2, endIndex2);

                code = code.replace(sub, '');

                console.log(code);

                break;

        }

    }

    console.log(`Your activation key is: ${code}`);

}

activationKeys((["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]));