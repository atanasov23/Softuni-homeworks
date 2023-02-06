function wordOccurrences(arr) {

    let obj = {};

    for (let el of arr) {

        let wordCounter = 0;

        for (let word of arr) {

            if (el === word) {

                wordCounter += 1;

            }

        }

        obj[el] = wordCounter

    }

    let entries = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    for (let el of entries) {

        console.log(`${el[0]} -> ${el[1]} times`);

    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);