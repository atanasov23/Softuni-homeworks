function classStorage() {

    class Storage {

        storage = {};

        totalCost = 0;

        constructor(capacity) {

            this.capacity = capacity;

        }

  

        addProduct(product) {

            let productName = product.name;

            this.storage[productName] = product

            this.capacity -= this.storage[productName].quantity

            this.totalCost += this.storage[productName].price * this.storage[productName].quantity;

        }

        getProducts() {

            let stringify = [];

            for(let key in this.storage){

                stringify.push(JSON.stringify(this.storage[key]))

            }

            return stringify.join('\n');

        }

    }

    let productOne = {name: 'Tomato', price: 0.90, quantity: 19};
    let productTwo = {name: 'Potato', price: 1.10, quantity: 10};
    let storage = new Storage(30);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    console.log(storage.totalCost);
}

classStorage();