function lowestPricesInCities(arr) {

    let newObj = {};


    for (let i = 0; i < arr.length; i++) {

        let [name, product, price] = arr[i].split(' | ');

        price = Number(price);

        if (newObj.hasOwnProperty(product)) {

            let currentPrice = newObj[product]['price'];

            if(currentPrice > price){

                newObj[product] = {name, price}

            }

        } else {

            newObj[product] = {name,price }

        }

    }

   for(let el in newObj){

    console.log(`${el} -> ${newObj[el]['price']} (${newObj[el]['name']})`);

   }

}
lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);