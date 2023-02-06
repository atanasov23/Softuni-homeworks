function plantDiscovery(input) {

    let n = Number(input[0]);

    let obj = {};

    let index = 1;

    for (let i = 1; i <= n; i++) {

        let split = input[i].split('<->');

        obj[split[0]] = { rarity: split[1] };

        obj[split[0]].Rating = [];

        index++;
    }

    //console.log(obj.Oahu);

    while (true) {

        if (input[index] === 'Exhibition') {

            break;

        }

        let splitComand = input[index].split(': ');

        let splitRate = splitComand[1].split(' - ');

        if (obj.hasOwnProperty(splitRate[0])) {

            if (splitComand[0] === 'Rate') {

                let getPrevValue = obj[splitRate[0]].Rating;

                getPrevValue.push(Number(splitRate[1]))

            } else if (splitComand[0] === 'Update') {

                obj[splitRate[0]].rarity = splitRate[1];

            } else if (splitComand[0] === 'Reset') {

                obj[splitRate[0]].Rating = [];

            }

        } else {

            console.log('error');
        }

        index++;

    }

    console.log('Plants for the exhibition:');

    for (let el in obj) {

        let arrLength = obj[el].Rating.length;

        let sum = 0;

        let result = 0;

        if (arrLength > 0) {

            for (let rate of obj[el].Rating) {

                sum += rate
            }

            result = (sum / arrLength)

        }

        


        console.log(`- ${el}; Rarity: ${obj[el].rarity}; Rating: ${result.toFixed(2)}`);

    }

}

plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"]);