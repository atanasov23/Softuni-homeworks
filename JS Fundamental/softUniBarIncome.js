function softUniBarIncome(input) {

    let regEx = /%(?<customer>[A-Z][a-z]*)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/;

    let price = 0;

    for (let i = 0; i < input.length; i++) {

        let line = input[i];

        if (line === 'end of shift') {

            break;

        }

        let order;

        if (order = regEx.exec(line)) {

            let priceNow = 0;

            price += order.groups.count * order.groups.price;

            priceNow = order.groups.count * order.groups.price;

            console.log(`${order.groups.customer}: ${order.groups.product} - ${priceNow.toFixed(2)}`);


        }


    }

    console.log(`Total income: ${price.toFixed(2)}`);

}

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);