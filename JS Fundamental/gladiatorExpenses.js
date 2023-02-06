function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let fightsCounter = 1;

    let helmetCounter = 0;

    let swordCounter = 0;

    let shieldCounter = 0;

    let armorCounter = 0;

    while (fightsCounter <= lostFights) {

        if (fightsCounter % 2 === 0) {

            helmetCounter++;

        }

        if (fightsCounter % 3 === 0) {

            swordCounter++;

        }

        if (fightsCounter % 6 === 0) {

            shieldCounter++;

        }

        if (fightsCounter % 12 === 0) {

            armorCounter++;

        }

        fightsCounter++;

    }

    let sum = (helmetCounter * helmetPrice) + (swordCounter * swordPrice) +

        (shieldCounter * shieldPrice) + (armorCounter * armorPrice);

    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);

    let obj = [10,24,33,245]

    for(let prop of obj){

        console.log(prop);
    }

}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200);
