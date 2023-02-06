function bonusScore(input){

let number = Number(input[0]);
let bonusScore = 0;
let total = 0;


if(number <= 100){

   bonusScore = 5;

   if(number % 2 == 0){

    bonusScore += 1; 
   
   }if(number % 10 == 5){

   bonusScore += 2;
   }

   total = number + bonusScore;

}else if(number > 100 && number < 1000) {

bonusScore = number * 0.20;

   if(number % 2 == 0){

    bonusScore += 1; 

   } if(number % 10 == 5){

    bonusScore += 2;
    }

    total = number + bonusScore;

}else if(number > 1000){

bonusScore = number * 0.10;

if(number % 2 == 0){

    bonusScore += 1; 

   } if(number % 10 == 5){

    bonusScore += 2;
    }

    total = number + bonusScore;

}
console.log(bonusScore)
console.log(total);

}

bonusScore(["20"]);