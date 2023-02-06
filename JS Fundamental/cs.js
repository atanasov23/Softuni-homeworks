function cs(input) {

    let energy = Number(input[0]);

    let winCounter = 0;

    let index = 1;

    let comand = input[index];

    let bool = true;

    while (comand !== 'End of battle') {

        if (energy < Number(input[index])) {

            console.log(`Not enough energy! Game ends with ${winCounter} won battles and ${energy} energy`);

            bool = false;

            break;
        }

        energy -= Number(input[index]);

        winCounter++;


        if (winCounter % 3 === 0) {

            energy += winCounter;

        }

        index++;

        comand = input[index];

    }


    if (bool) {

        console.log(`Won battles: ${winCounter}. Energy left: ${energy}`);

    }



}

cs((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]));