function solution() {

    let ingredients = {
        carbohydrate: 0,
        flavour: 0,
        protein: 0,
        fat: 0
    }

    return function (input) {

        let [comand, element, quantity] = input.split(' ');

        quantity = Number(quantity);

        switch (comand) {

            case 'restock':

                ingredients[element] += quantity;

                return 'Success';

            case 'prepare':

                let carbohydrate = '';
                let flavour = '';
                let fat = '';
                let protein = '';

                switch (element) {

                    case 'apple':

                        carbohydrate = quantity * 1;
                        flavour = quantity * 2;

                        if (carbohydrate > ingredients.carbohydrate) {

                            return `Error: not enough carbohydrate in stock`;

                        } else if (flavour > ingredients.flavour) {

                            return `Error: not enough flavour in stock`;

                        } else {

                            ingredients.carbohydrate -= carbohydrate;
                            ingredients.flavour -= flavour;

                            return 'Success';
                        }

                    case 'lemonade':

                        carbohydrate = quantity * 10;
                        flavour = quantity * 20;

                        if (carbohydrate > ingredients.carbohydrate) {

                            return `Error: not enough carbohydrate in stock`;

                        } else if (flavour > ingredients.flavour) {

                            return `Error: not enough flavour in stock`;

                        } else {
                            ingredients.carbohydrate -= carbohydrate;
                            ingredients.flavour -= flavour;

                            return 'Success';
                        }

                    case 'burger':

                        carbohydrate = quantity * 5;
                        flavour = quantity * 3;
                        fat = quantity * 7;

                        if (carbohydrate > ingredients.carbohydrate) {

                            return `Error: not enough carbohydrate in stock`;

                        } else if (flavour > ingredients.flavour) {

                            return `Error: not enough flavour in stock`;

                        } else if (fat > ingredients.fat) {

                            return `Error: not enough fat in stock`;

                        } else {

                            ingredients.carbohydrate -= carbohydrate;
                            ingredients.flavour -= flavour;
                            ingredients.fat -= fat;

                            return 'Success';
                        }

                    case 'eggs':

                        protein = quantity * 5;
                        flavour = quantity * 1;
                        fat = quantity * 1;

                        if (protein > ingredients.carbohydrate) {

                            return `Error: not enough protein in stock`;

                        } else if (flavour > ingredients.flavour) {

                            return `Error: not enough flavour in stock`;

                        } else if (fat > ingredients.fat) {

                            return `Error: not enough fat in stock`;

                        } else {

                            ingredients.protein -= protein;
                            ingredients.flavour -= flavour;
                            ingredients.fat -= fat;

                            return 'Success';
                        }

                    case 'turkey':

                        carbohydrate = quantity * 10;
                        flavour = quantity * 10;
                        fat = quantity * 10;
                        protein = quantity * 10;

                        if (carbohydrate > ingredients.carbohydrate) {

                            return `Error: not enough carbohydrate in stock`;

                        } else if (flavour > ingredients.flavour) {

                            return `Error: not enough flavour in stock`;

                        } else if (fat > ingredients.fat) {

                            return `Error: not enough fat} in stock`;


                        } else if (protein > ingredients.protein) {

                            return `Error: not enough protein in stock`;

                        } else {

                            ingredients.carbohydrate -= carbohydrate;
                            ingredients.flavour -= flavour;
                            ingredients.fat -= fat;
                            ingredients.protein -= protein

                            return 'Success';
                        }
                }

                break;

            case 'report':

                return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`

        }


    }
}

let manager = solution();

console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));
