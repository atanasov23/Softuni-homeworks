function muOnline(input) {

    let health = 100;

    let bitcoin = 0;

    let rooms = input.split('|');

    let bool = false;

    let counter = 0;

    for (let i = 0; i < rooms.length; i++) {

        let line = rooms[i].split(' ');

        let comand = line.shift();

        let number = Number(line.shift());

        switch (comand) {

            case 'potion':

                if (health + number < 100) {

                    health += number;

                    console.log(`You healed for ${number} hp.`);

                    console.log(`Current health: ${health} hp.`);

                } else {

                    let healedFor = 100 - health;

                    console.log(`You healed for ${healedFor} hp.`);

                    health = 100;

                    console.log(`Current health: ${health} hp.`);

                }

                break;

            case 'chest':

                bitcoin += number;

                console.log(`You found ${number} bitcoins.`);

                break;

            default:

                health -= number;

                if (health > 0) {

                    console.log(`You slayed ${comand}.`);

                } else {

                    console.log(`You died! Killed by ${comand}.`);

                    bool = true;

                }

                break;

        }

        counter++;

        if (bool) {

            console.log(`Best room: ${counter}`);

            break;

        }

    }

    if (!bool) {

        console.log("You've made it!");

        console.log(`Bitcoins: ${bitcoin}`);

        console.log(`Health: ${health}`);
    }

}

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");