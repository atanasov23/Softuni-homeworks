function travelTime(arr) {

    let destination = {};

    for (let el of arr) {

        let destinationInfo = el.split(' > ');

        destination[destinationInfo[0]] = new Map();

    }

    let test = [];

    for (let el of arr) {

        let destinationInfo = el.split(' > ');

        for (let el of arr) {

            let town = el.split(' > ');

            if (destinationInfo[1] === town[1]){

              
                test.push(Number(town[2]))

            }

        }

        let arrFilter = Math.min(...test);

        destination[destinationInfo[0]].set(destinationInfo[1], arrFilter)

        test = []

    }

    let entries = Object.entries(destination).sort();

    for (let el of entries) {

        let result = '';

        let arrKeys = Array.from(el[1]).sort().forEach(el => result += `${el.join(' -> ')} `);

        console.log(`${el[0]} -> ${result}`)

    }

}

travelTime(['Bulgaria > Sofia > 25000',
    'aaa > Sofia > 1',
    'aa > Orgrimar > 0',
    'Albania > Tirana > 25000',
    'zz > Aarna > 25010',
    'Bulgaria > Lukovit > 10']);