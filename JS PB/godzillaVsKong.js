function  godzillaVsKong(input){

    let budjet = Number(input[0]);
    let statist = Number(input[1]);
    let clothPrice = Number(input[2]);

    let statistClothPrice = statist * clothPrice;
    let finalCost = 0;

    if(statist > 150 ){
      
        finalCost = (statistClothPrice - (statistClothPrice * 0.10)) + budjet * 0.10;
        
    }else{

        finalCost = statistClothPrice + (budjet * 0.10);
    }

    if(finalCost <= budjet){

        console.log("Action!");
        console.log(`Wingard starts filming with ${(budjet - finalCost).toFixed(2)} leva left.`);

    }else{

     console.log("Not enough money!");
     console.log(`Wingard needs ${Math.abs(finalCost - budjet).toFixed(2)} leva more.`);

    }
}

godzillaVsKong(["20000", "120", "55.5"]);