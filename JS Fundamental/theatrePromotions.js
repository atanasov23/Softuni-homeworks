function theatrePromotions(day, age) {

    let priceOfTicket = 0;


    if (age >= 0 && age <= 18) {

        switch (day) {

            case "Weekday":

                priceOfTicket = 12;

                break;

            case "Weekend":

                priceOfTicket = 15;

                break;

            case "Holiday":

                priceOfTicket = 5;

                break;


        }

    } else if (age > 18 && age <= 64) {


        switch (day) {

            case "Weekday":

                priceOfTicket = 18;

                break;

            case "Weekend":

                priceOfTicket = 20;

                break;

            case "Holiday":

                priceOfTicket = 12;

                break;


        }

    } else if (age > 64 && age <= 122) {


        switch (day) {

            case "Weekday":

                priceOfTicket = 12;

                break;

            case "Weekend":

                priceOfTicket = 15;

                break;

            case "Holiday":

                priceOfTicket = 10;

                break;


        }

    } else {

        console.log("Error!");

    }

    if (priceOfTicket !== 0) {

        console.log(`${priceOfTicket}$`);

    }

}

theatrePromotions('Weekend', 55);