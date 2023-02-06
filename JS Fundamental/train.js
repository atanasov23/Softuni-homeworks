function train(arr) {

    let train = arr.shift().split(' ').map(Number);

    let capacity = +arr.shift();

    for (let i = 0; i < arr.length; i++) {

        let comand = arr[i].split(' ');

        if (comand[0] === 'Add') {

            train.push(Number(comand[1]));

        } else {

            for (let j = 0; j < train.length; j++) {

                if (train[j] + Number(comand[0]) <= capacity) {

                    let a = train[j] + Number(comand[0]);

                    train.splice(j, 1, a);

                    break;

                }

            }

        }
    }
    console.log(train.join(' '));
}

train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']);