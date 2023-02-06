function vacation(number, type, day) {

    let price = 0;

    if (number >= 100 && type === "Business") {

        number -= 10;

    }



    if (day === "Friday") {

        if (type === "Students") {

            price = number * 8.45;

        } else if (type === "Business") {

            price = number * 10.90;

        } else {

            price = number * 15;

        }

    } else if (day === "Saturday") {

        if (type === "Students") {

            price = number * 9.80;

        } else if (type === "Business") {

            price = number * 15.60;

        } else {

            price = number * 20;

        }

    } else if (day === "Sunday") {

        if (type === "Students") {

            price = number * 10.46;

        } else if (type === "Business") {

            price = number * 16;

        } else {

            price = number * 22.50;

        }

    }

    if (number >= 30 && type === "Students") {

        price = price * 0.85;

    }

    if (number >= 10 && number <= 20 && type === "Regular") {

        price = price * 0.95;

    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(40,
    "Regular",
    "Saturday");