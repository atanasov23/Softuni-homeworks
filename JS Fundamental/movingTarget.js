function movingTarget(input) {

    let target = input.shift().split(' ').map(Number);

    let index = 0;

    let endOfLoop = input[index];

    while (endOfLoop !== 'End') {

        let inputComand = input[index].split(' ');

        let comand = inputComand.shift();

        let givenIndex = Number(inputComand.shift());

        let value = Number(inputComand.shift());

        switch (comand) {

            case 'Shoot':

                if (givenIndex >= 0 && givenIndex <= target.length - 1) {

                    target[givenIndex] -= value;

                    if (target[givenIndex] <= 0) {

                        target.splice(givenIndex, 1);

                    }

                }

                break;

            case 'Add':

                if (givenIndex >= 0 && givenIndex <= target.length - 1) {

                    target.splice(givenIndex, 0, value);

                } else {

                    console.log("Invalid placement!");
                }

                break;

            case 'Strike':

                let leftValid = givenIndex - value;

                let rightValid = givenIndex + value;

                if (leftValid < 0 || rightValid > target.length - 1) {

                    console.log('Strike missed!');


                } else {

                    //target.splice(givenIndex, value + value);

                    //target.splice(givenIndex - 1, value );

                    target.splice(givenIndex + 1, value);

                    target.splice(givenIndex , value);

                    target.splice(givenIndex - 1, value);

                }

                break;

        }

        index++;

        endOfLoop = input[index];

    }

    console.log(target.join('|'));


}

movingTarget(["52 74 23 44 96 110",
"Strike 4 1",
"End"]);