function houseParty(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        let name = arr[i].split(' ').slice(0, 1);

        let length = arr[i].split(' ').length;

        if (length === 3) {

            if (!newArr.includes(name[0])) {

                newArr.push(name[0]);

            } else {

                console.log(`${name} is already in the list!`);

            }

        } else {

            if (!newArr.includes(name[0])) {

                console.log(`${name} is not in the list!`);

            } else {

                let getIndex = newArr.indexOf(name[0]);

                newArr.splice(getIndex, 1);

            }

        }

    }

    console.log(newArr.join('\n'));

}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);