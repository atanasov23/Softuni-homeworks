function journey(input){

    const budget = Number(input[0]);
    let spendMoney = 0;
    let destination = "";
    let place = "";

    switch(input[1]){

        case "summer":

        if(budget <= 100){

            spendMoney = budget * 0.30;

            destination = "Bulgaria";

            place = "Camp";

        }else if(budget <= 1000){

            spendMoney =budget * 0.40;

            destination = "Balkans";

            place = "Camp";

        }else{

            spendMoney = budget * 0.90;

            destination = "Europe";

            place = "Hotel";

        }

        break;

        case "winter":
            
            if(budget <= 100){

                spendMoney = budget * 0.70;
    
                destination = "Bulgaria";
    
                place = "Hotel";
    
            }else if(budget <= 1000){
    
                spendMoney = budget * 0.80;
    
                destination = "Balkans";
    
                place = "Hotel";
    
            }else{
    
                spendMoney = budget * 0.90;
    
                destination = "Europe";
    
                place = "Hotel";
    
            }
    
        break;
    }

console.log(`Somewhere in ${destination}`);
console.log(`${place} - ${spendMoney.toFixed(2)}`);

}

journey(["1500", "summer"])
