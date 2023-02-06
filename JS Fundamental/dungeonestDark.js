function dungeonestDark(input) {

    let health = 100;

    let coins = 0;

    let index = 0;

    let rooms = input.shift().split('|');

    while (index <= rooms.length - 1) {

        let comand = rooms[index].split(' ').shift();

        let value = Number(rooms[index].split(' ').pop());

        switch (comand) {

            case 'potion':

                let healedFor = 100 - health;

                if (health + value > 100) {

                    console.log(`You healed for ${healedFor} hp.`);

                    health = 100;

                } else {

                    health += value;

                    console.log(`You healed for ${value} hp.`);
                }

                console.log(`Current health: ${health} hp.`);

                break;

            case 'chest':

                coins += value;

                console.log(`You found ${value} coins.`);

                break;

            default:

                health -= value;

                if (health > 0) {

                    console.log(`You slayed ${comand}.`);

                } else {

                    console.log(`You died! Killed by ${comand}.`);

                    index++;

                    console.log(`Best room: ${index}`);

                    return;
                }

                break;

        }

        index++;
    }

    console.log("You've made it!");

    console.log(`Coins: ${coins}`);

    console.log(`Health: ${health}`);

}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);