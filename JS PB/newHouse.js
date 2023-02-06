function newHouse(input) {

const number = Number(input[1]);
const budget = Number(input[2]);
let sum = 0;
let discount = 0;
let totalPrice = 0;


switch(input[0]){

    case "Roses":

    if(number > 80){

        discount = 0.10;
        sum = number * 5;
        totalPrice = sum - (sum * discount);
    }else{

        totalPrice = number * 5;
    }
        
    break;

    case "Dahlias":

    if(number > 90){

        discount = 0.15;
        sum = number * 3.80;
        totalPrice = sum - (sum * discount);

    }else {

        totalPrice = number * 3.80;
    }

    break;

    case "Tulips":

    if(number > 80){

        discount = 0.15;
        sum = number * 2.80;
        totalPrice = sum - (sum * discount);

    }else {

        totalPrice = number * 2.80;
    }

    break;

    case "Narcissus":

    if(number < 120 ){

        sum = number * 3;
        totalPrice = sum + (sum * 0.15);

    }else{

        totalPrice = number * 3

    }

    break;

    case "Gladiolus":

        if(number < 80 ){

            sum = number * 2.50;
            totalPrice = sum + (sum * 0.20);
    
        }else{

            totalPrice = number * 2.50
        }

    break;

}

if(totalPrice <= budget){

    console.log(`Hey, you have a great garden with ${number} ${input[0]} and ${(Math.abs(totalPrice - budget).toFixed(2))} leva left.`)

}else{

    
    console.log(`Not enough money, you need ${(Math.abs(totalPrice - budget).toFixed(2))} leva more.`);

}

}

newHouse(["Narcissus", 

"119", 

"360"]) 
