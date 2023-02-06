function heartDelivery(input) {

    let hood = input.shift().split('@').map(Number);

    let index = 0;

    let endOfLoop = input[index];

    let lastPosition = 0;



    while (endOfLoop !== 'Love!') {

        let getindex = Number(input[index].split(' ').pop());

        
        if (getindex + lastPosition <= hood.length - 1) {

            lastPosition = getindex + lastPosition;

        } else{

            lastPosition = 0;
        }

          if(hood[lastPosition] === 0){

                console.log(`Place ${lastPosition} already had Valentine's day.`);

            }




        if (hood[lastPosition] > 0) {

            hood[lastPosition] -= 2;

              if (hood[lastPosition] === 0) {

                    console.log(`Place ${lastPosition} has Valentine's day.`);


            }


        }

          
            
         
                
           


        index++;

        endOfLoop = input[index];
    }

    let counter = 0;

    for (let el of hood) {

        if (el > 0) {

            counter++;

        }

    }

    console.log(`Cupid's last position was ${lastPosition}.`);

    if (counter === 0) {

        console.log('Mission was successful.');

    } else {

        console.log(`Cupid has failed ${counter} places.`);
    }

}

heartDelivery((["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"]));