function inventoryObj(arr) {

    let heroesObj = {};

    for (let i = 0; i < arr.length; i++) {

        let heroeRegister = arr[i].split(' / ');

        let heroesName = heroeRegister.shift();

        let heroeLevel = heroeRegister.shift();

        let index = String(i);

        heroesObj[index] = {

            name: heroesName,
            level: Number(heroeLevel)
        }

        let heroeRegisterSplit = heroeRegister[0].split(', ')

        let items = [];

        for (let i = 0; i < heroeRegisterSplit.length; i++) {

            items.push(heroeRegisterSplit[i]);

        }

        heroesObj[index].items = items.join(', ');

    }

    let entries = Object.entries(heroesObj)

    entries.sort((a, b) => a[1].level - b[1].level);

    for (let i = 0; i < entries.length; i++) {

        console.log(`Hero: ${entries[i][1].name}`)
        console.log(`level => ${entries[i][1].level}`)
        console.log(`items => ${entries[i][1].items}`)

    }

}

inventoryObj([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);