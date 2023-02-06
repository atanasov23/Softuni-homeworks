function ladybugs(input) {

    let fieldSize = input.shift();

    let initialIndexes = input.shift().split(' ').map(Number);

    let index = 0;

    let result = [];

    for (let i = 0; i < fieldSize; i++) {

        if (initialIndexes.includes(i)) {

            result.push(1);
        } else {

            result.push(0);
        }

    }


    while (index <= input.length - 1) {

        let line = input[index].split(' ');

        let index1 = Number(line.shift());

        let index2 = Number(line.pop());

        let comand = line.shift();

        if (index2 < 0 || index2 > result.length - 1) {

            index++
            continue;

        }

    
        if (result[index1] != '1') {

            index++
            continue;

        }

        switch (comand) {

            case 'right':

                for (let i = index1; i <= result.length - 1; i++) {

                    if (i + index2 === 1 || index1 + index2 >= result.length - 1) {

                        //index++;

                        //result[index1] = 0;
                        if ( index1 + index2 > result.length - 1) {

                            result[index1] = 0;

                            break;

                        }



                        continue;

                    } else {

                        result[index1] = 0;

                        result[i + index2] = 1;

                        break;
                    }

                }



                break;

            case 'left':



                break;

        }

        index++;
    }

    console.log(result.join(' '));

}

ladybugs([ 5, '3',
'3 left 2',
'1 left -2']);