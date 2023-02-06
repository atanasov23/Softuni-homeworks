function arrayManipulations(arr) {

    let modArr = arr.shift().split(' ').map(Number);

    for (let i = 0; i < arr.length; i++) {

        let comand = arr[i].split(' ').shift();

        let index = arr[i].split(' ').slice(1).map(Number);

        switch (comand) {

            case 'Add':

                modArr.push(index[0]);

                break;

            case 'Remove':

                modArr = modArr.filter(a => a !== index[0]);

                break;

            case 'RemoveAt':

                modArr.splice(index[0], 1);

                break;

            case 'Insert':

                modArr.splice(index[1], 0, index[0]);

                break;

        }

    }

    console.log(modArr.join(' '));

}

arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']);