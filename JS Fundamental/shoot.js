function shoot(input) {

    let target = input.shift().split(' ').map(Number);

    let index = 0;

    let comand = input[index];

    let considered = [];

    let count = 0;

    while (comand !== 'End') {

        if (Number(input[index]) <= target.length - 1 && Number(input[index]) >= 0) {

            let bool = true;

            for (let el of considered) {

                if (el === Number(input[index])) {

                    bool = false;

                }

            }

            let value = target[Number(input[index])];

            if (bool) {

                count++;

                considered.push(Number(input[index]));

                target[Number(input[index])] = -1;

                target = target.map(a => {

                    if (a !== -1) {

                        if (a > value) {

                            return a -= value;

                        } else if (a <= value) {

                            return a += value;
                        }

                    } else {

                        return -1
                    }

                }
                );

            }

        }

        index++;

        comand = input[index];

    }

    console.log(`Shot targets: ${count} -> ${target.join(' ')}`);
}

shoot((["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"]));