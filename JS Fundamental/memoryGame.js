function memoryGame(input) {

    let newArr = input.shift().split(' ');

    let index = 0;

    let comand = input[index];

    let counter = 1;

    while (comand !== 'end') {

        let middle = newArr.length / 2;

        let getComandIndex = input[index].split(' ');

        let index1 = Number(getComandIndex.shift());

        let index2 = Number(getComandIndex.shift());

        if (index1 >= 0 && index2 >= 0 && index1 <= (newArr.length - 1) && index2 <= (newArr.length - 1)) {

            if(index1 === index2){

            console.log("Invalid input! Adding additional elements to the board");
            newArr.splice(middle, 0, `-${counter}a`, `-${counter}a`);

            index++;

            continue;

            }

            if (newArr[index1] === newArr[index2]) {

                console.log(`Congrats! You have found matching elements - ${newArr[index1]}!`)

                if (index1 > index2) {

                    newArr.splice(index1, 1);

                    newArr.splice(index2, 1);

                } else if (index1 < index2) {

                    newArr.splice(index2, 1);

                    newArr.splice(index1, 1);

                } 

            } else {

                console.log('Try again!');

            }

        } else {

            console.log("Invalid input! Adding additional elements to the board");
            newArr.splice(middle, 0, `-${counter}a`, `-${counter}a`);

        }

        index++;

        comand = input[index];

        counter++

        if (newArr.length === 0) {

            console.log(`You have won in ${index} turns!`);

            break;

        }

    }

    if (newArr.length > 1) {

        console.log(`Sorry you lose :(\n${newArr.join(' ')}`)

    }

}

memoryGame( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 10",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]);