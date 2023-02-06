function pcStore(input) {

    let index = 0;

    let comand = true;

    let totalPrice = 0;

    let discount = 0;

    while (true) {

        if (input[index] === 'special') {

            discount = 0.10;

            comand = false;

            break;

        } else if (input[index] === 'regular') {

            comand = false;

            break;
        }

        if (Number(input[index]) > 0) {

            totalPrice += Number(input[index]);

        } else {

            console.log("Invalid price!");

        }

        index++;

    }

    let price = totalPrice

    totalPrice += (totalPrice * 0.20);

    let finalPrice = totalPrice - (totalPrice * discount);

    if (finalPrice === 0) {

        console.log("Invalid order!");

    } else {

        console.log("Congratulations you've just bought a new computer!");

        console.log(`Price without taxes: ${price.toFixed(2)}$`);

        console.log(`Taxes: ${(price * 0.2).toFixed(2)}$`);

        console.log("-----------");

        console.log(`Total price: ${finalPrice.toFixed(2)}$`);

    }

}

pcStore(([
    'regular'
]))