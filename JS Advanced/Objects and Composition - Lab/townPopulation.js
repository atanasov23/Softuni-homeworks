function townPopulation(arr) {

    let obj = {};

    for (let el of arr) {

        let split = el.split(' <-> ');

        if (!obj.hasOwnProperty(split[0])) {

            obj[split[0]] = Number(split[1]);

        } else {

            obj[split[0]] += Number(split[1]);
        }

    }

    for (let el in obj) {

        console.log(`${el} : ${obj[el]}`);

    }

}

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);