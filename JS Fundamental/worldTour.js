function worldTour(input) {

    let string = input.shift();

    let newString = string;

    let index = 0;

    let comand = input[index];

    while (comand !== 'Travel') {

        let getValue = comand.split(':');

        switch (getValue[0]) {

            case 'Add Stop':

                if (Number(getValue[1]) >= 0 && Number(getValue[1]) <= newString.length) {

                    let test = getValue[2] + string.substring(Number(getValue[1]))

                    let replace = string.substring(Number(getValue[1]));

                    newString = string.replace(replace, test);

                }

                break;

            case 'Remove Stop':

                if (Number(getValue[1]) >= 0 && Number(getValue[1]) <= newString.length) {

                    let remove = newString.slice(Number(getValue[1]), Number(getValue[2]) + 1);

                    newString.replace(remove, '');

                    newString = newString.replace(remove, '');

                }

                break;

            case 'Switch':

                let value = getValue[1];

                let regEx = new RegExp(value, 'g');

                let rename = newString.replace(regEx, getValue[2]);

                newString = rename

                break;

        }

        index++;

        comand = input[index];

        console.log(newString);

    }

    console.log(`Ready for world tour! Planned stops: ${newString}`);

}

worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]));