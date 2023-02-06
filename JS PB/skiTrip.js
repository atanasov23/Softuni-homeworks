function skiTrip(input) {

const days = Number(input[0]);
const place = input[1];
const assessment = input[2];

let price = 0;
let discount = 0;
let totalPrice = 0;


switch(place){

    case "room for one person":

    price = (days - 1) * 18;

    break;

    case "apartment":

        if(days <= 10){

            price = (days - 1) * 25;

            discount = 0.30;

        }else if(days > 10 && days <= 15){

            price = (days - 1) * 25;

            discount = 0.35;


        }else {

            price = (days - 1) * 25;

            discount = 0.50;

        }


    break;

    case "president apartment":

        if(days <= 10){

            price = (days - 1) * 35;

            discount = 0.10;

        }else if(days > 10 && days <= 15){

            price = (days - 1) * 35;

            discount = 0.15;


        }else {

            price = (days - 1) * 35;

            discount = 0.20;

        }

    break;
}

totalPrice = price - (price * discount);

if(assessment === "positive"){

    totalPrice = totalPrice + (totalPrice * 0.25);

}else{

    totalPrice = totalPrice - (totalPrice * 0.10);
}

console.log(`${totalPrice.toFixed(2)}`);

}
skiTrip(["2",
"apartment",
"positive"])