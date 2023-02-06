function passwordReset(input) {

    let text = input.shift();

    let index = 0;

    while (true) {

        if (input[index] === 'Done') {

            break;

        }

        let comand = input[index].split(' ');

        switch (comand[0]) {

            
            case 'TakeOdd':

            let newPass = '';

                for (let i = 0; i < text.length; i++) {

                    if (i % 2 !== 0) {

                        newPass += text[i];

                    }

                }

                text = newPass

                console.log(text);

                break;

            case 'Cut':

                let startIndex = Number(comand[1]);

                let endIndex = startIndex + Number(comand[2]);

                let sub = text.slice(startIndex, endIndex);

                let replace = text.replace(sub, '');

                text = replace

                console.log(text);

                break;

            case 'Substitute':

                if (text.includes(comand[1])) {

                    let a = new RegExp(comand[1], 'g');

                    text = text.replace(a, comand[2]);

                    console.log(text);

                } else {

                    console.log('Nothing to replace!');

                }

                break;

        }

        index++;
    }


        console.log(`Your password is: ${text}`);
        

}

passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]));