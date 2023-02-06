function catalogue(arr) {

    let obj = [];

    for (let el of arr) {

        let [nameOfProduct, productPrice] = el.split(' : ');

        obj.push({ name: nameOfProduct, price: productPrice });

    }

    obj.sort((a, b) => a.name.localeCompare(b.name));

    let char = '';

    for (let i = 0; i < obj.length; i++) {

        if (char === obj[i].name[0]) {

            console.log(`  ${obj[i].name}: ${obj[i].price}`);

        } else {

            char = obj[i].name.charAt(0).toUpperCase();
            console.log(char);
            console.log(`  ${obj[i].name}: ${obj[i].price}`)
        }

    }

}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
);