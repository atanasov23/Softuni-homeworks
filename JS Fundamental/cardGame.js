function cardGame(arr) {

    let personResult = {};

    let powerObj = {

        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 14
    }

    let typeObj = {

        S: 4,
        H: 3,
        D: 2,
        C: 1,
    }

    let newMap = new Map();

    for (let el of arr) {

        let info = el.split(': ');

        let personName = info[0];

        let personCards = info[1].split(', ');

        if (!newMap.has(personName)) {

            newMap.set(personName, new Set);

        }

        for (let cards of personCards) {

            newMap.get(personName).add(cards);

        }

    }

    let score = 0;

    let personName = '';

    for (let el of newMap) {

        let cards = Array.from(el[1]);

        personName = el[0];

        for (let cardPowerSum of cards) {

            if (cardPowerSum.length > 2) {

                let n1 = cardPowerSum[0];

                let n2 = cardPowerSum[1];

                let power = powerObj[n1 + n2];

                let type = typeObj[cardPowerSum[2]];

                score += power * type;

            } else {

                let power = powerObj[cardPowerSum[0]];

                let type = typeObj[cardPowerSum[1]];

                score += power * type;

            }

        }

        personResult[personName] = score;

        score = 0;

    }

    for (let el in personResult) {

        console.log(`${el}: ${personResult[el]}`);

    }
}

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);