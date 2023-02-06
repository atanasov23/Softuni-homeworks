function lift(arr) {

    let people = Number(arr.shift());

    let lift = arr[0].split(' ').map(Number);

    let place = 0

    for (let i = 0; i < lift.length; i++) {

        place = 4 - lift[i];

        if (place > 0) {

            if (people > 0) {

                if (people >= place) {

                    lift[i] += place;

                    people -= place;

                } else {

                    lift[i] += people;

                    people -= place;

                }

            }

        }

    }

    let bool = true;

    for(let el of lift){

        if(el < 4){

            bool = false

        }


    }


    if (people > 0 && bool) {

        console.log(`There isn't enough space! ${people} people in a queue!`);

        console.log(lift.join(' '));

    } 
    
    if(bool && people === 0){

        console.log(lift.join(' '));

    }

    if (people <= 0 && !bool) {

        console.log("The lift has empty spots!")

        console.log(lift.join(' '));

    }


}

lift([
    "1",
    "4 4 4 4 3"
   ]);