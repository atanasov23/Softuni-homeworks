function juice(arr) {

    let fruitObj = new Map();

    let bottles = new Map();

    for (let el of arr) {

        let [fruit, quantity] = el.split(' => ');

        quantity = Number(quantity);

        if (fruitObj.has(fruit)) {

            let value = fruitObj.get(fruit);

            value += quantity

            fruitObj.set(fruit, value);

            let count = 0;

            for (let i = 1000; i <= fruitObj.get(fruit); i += 1000) {

                count++;
            }

            bottles.set(fruit, count);

        } else {

            fruitObj.set(fruit, quantity);

            if (quantity / 1000 >= 1) {

                let count = 0;

                for (let i = 1000; i <= fruitObj.get(fruit); i += 1000) {

                    count++;
                }

                bottles.set(fruit, count);

            }
        }
    }

    for (let el of bottles) {

        console.log(`${el[0]} => ${el[1]}`);

    }

}

juice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);