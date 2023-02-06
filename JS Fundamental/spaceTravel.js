function spaceTravel(input) {

    let rout = input.shift().split('||');

    let index = 0;

    let fuel = Number(input.shift());

    let ammo = Number(input.shift());

    let end = rout[index];

    while (end !== 'Titan') {

        let line = end.split(' ');

        let comand = line.shift();

        let value = Number(line.shift());

        switch (comand) {

            case 'Travel':

                if (fuel < value) {

                    console.log('Mission failed.');

                } else {

                    console.log(`The spaceship travelled ${value} light-years.`);

                }

                break;

            case 'Enemy':

                if (ammo >= value) {

                    console.log(`An enemy with ${value} armour is defeated.`);

                    ammo -= value

                } else {

                    fuel -= value * 2;

                    if (fuel < value) {

                        console.log('Mission failed.');

                        return;
                    } else {

                        console.log(`An enemy with ${value} armour is outmaneuvered.`);

                    }

                }

                break;

            case 'Repair':

                fuel += value;

                ammo += value * 2;

                console.log(`Ammunitions added: ${value * 2}.`);

                console.log(`Fuel added: ${value}.`)

                break;
        }

        index++;

        end = rout[index];

    }

    console.log('You have reached Titan, all passengers are safe.');

}

spaceTravel(([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
'60', 
'100' ]));