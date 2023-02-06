function heroesOfCodeAndLogicVII(input) {

    let heroesNumber = Number(input.shift());

    let heroesObj = {};

    for (let i = 0; i < heroesNumber; i++) {

        let [name, hp, mana] = input[i].split(' ')

        heroesObj[name] = { hp, mana }

    }

    for (let i = heroesNumber; i < input.length; i++) {

        if (input[i] === 'End') {

            break;

        }

        let comand = input[i].split(' - ');

        switch (comand[0]) {

            case 'CastSpell':

                let manaNeeded = Number(comand[2]);

                let heroeMana = Number(heroesObj[comand[1]].mana);

                if (heroeMana > manaNeeded) {

                    let manaLeft = heroeMana - manaNeeded;

                    heroesObj[comand[1]].mana = manaLeft

                    console.log(`${comand[1]} has successfully cast ${comand[3]} and now has ${manaLeft} MP!`);

                } else {

                    console.log(`${comand[1]} does not have enough MP to cast ${comand[3]}!`);

                }

                break;

            case 'TakeDamage':

                let damage = Number(comand[2]);

                let heroeHp = Number(heroesObj[comand[1]].hp);

                let hpLeft = heroeHp - damage;

                if (hpLeft > 0) {

                    console.log(`${comand[1]} was hit for ${damage} HP by ${comand[3]} and now has ${hpLeft} HP left!`);

                    heroesObj[comand[1]].hp = hpLeft

                } else {

                    console.log(`${comand[1]} has been killed by ${comand[3]}!`);

                    delete heroesObj[comand[1]]

                }

                break;

            case 'Recharge':

                let heroMana = Number(heroesObj[comand[1]].mana);

                let mana = Number(comand[2]);

                let curentMana = heroMana + mana;

                if (curentMana > 200) {

                    heroesObj[comand[1]].mana = 200;

                    console.log(`${comand[1]} recharged for ${200 - heroMana} MP!`);

                } else {

                    heroesObj[comand[1]].mana = curentMana;

                    console.log(`${comand[1]} recharged for ${comand[2]} MP!`);

                }



                break;

            case 'Heal':

                let heroHealth = Number(heroesObj[comand[1]].hp);

                let health = Number(comand[2]);

                let curenthealth = heroHealth + health;

                if (curenthealth > 100) {

                    heroesObj[comand[1]].hp = 100;

                    console.log(`${comand[1]} healed for ${100 - heroHealth} HP!`);

                } else {

                    heroesObj[comand[1]].hp = curenthealth;

                    console.log(`${comand[1]} healed for ${comand[2]} HP!`);

                }



                break;
        }

    }

    for (let heroe in heroesObj) {

        console.log(heroe);

        console.log(`  HP: ${heroesObj[heroe].hp}`);

        console.log(`  MP: ${heroesObj[heroe].mana}`);
    }
}
heroesOfCodeAndLogicVII([2,
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);