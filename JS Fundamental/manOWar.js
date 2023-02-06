function manOWar(input) {

    let piratShip = input.shift().split('>').map(Number);

    let warShip = input.shift().split('>').map(Number);

    let maxHealthCapacity = Number(input.shift());

    let index = 0;

    let end = input[index];
    

    while (end !== 'Retire') {

        let line = input[index].split(' ');

        let comand = line.shift();

        let getIndex = line.map(Number);

        switch (comand) {

            case 'Fire':

                if (getIndex[0] >= 0 && getIndex[0] <= warShip.length - 1) {

                   warShip[getIndex[0]] -= getIndex[1];

                    if (warShip[getIndex[0]] <= 0) {

                      return  console.log('You won! The enemy ship has sunken.');

                        
                    }

                         
                    

                }

                break;

            case 'Defend':

                if (getIndex[0] >= 0 && getIndex[0] <= piratShip.length - 1 && getIndex[1] >= 0 && getIndex[1] <= piratShip.length - 1) {

                    for (let i = getIndex[0]; i <= getIndex[1]; i++) {

                        piratShip[i] -= getIndex[2];


                        if (piratShip[i] < 0) {

                         return   console.log('You lost! The pirate ship has sunken.');

                            
                        }

                    }


                }

                break;

            case 'Repair':


                if (getIndex[0] >= 0 && getIndex[0] <= piratShip.length - 1) {


                    if (piratShip[getIndex[0]] + getIndex[1] <= maxHealthCapacity) {


                
                       piratShip[getIndex[0]] = piratShip[getIndex[0]] + getIndex[1];

                   

                    }else{

                         piratShip[getIndex[0]] = maxHealthCapacity;

                    }

                }

                break;

            case 'Status':

                let porcent = maxHealthCapacity - (maxHealthCapacity * 0.8);

                let result = piratShip.filter(a => a < porcent);

                

                    console.log(`${result.length} sections need repair.`);

                
            

                break;

        }

        index++;

        end = input[index];

    }

    let pirateShipSum = piratShip.reduce((a, b) => a + b);

    let warShipSum = warShip.reduce((a,b) => a + b);



    return console.log(`Pirate ship status: ${pirateShipSum}\nWarship status: ${warShipSum}`);


}


manOWar((["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    //"Fire 2 11",
    "Fire 5 100",
    //"Defend 3 6 11",
   // "Defend 0 3 5",
   // "Repair 3 60",
    "Status",
    "Retire"]));