function tradeCommissions(input) {

    const sales = Number(input[1]);
    let commision = 0;

    switch(input[0]){

        case "Sofia":

        if(sales <= 500){

            commision = sales * 0.05;

        }else if(sales > 500 && sales <= 1000){
    
            commision = sales * 0.07;

        }else if(sales > 1000 && sales <= 10000){


            commision = sales * 0.08;
        }else{

            commision = sales * 0.12;

        }
            break;

        case "Varna":

            if(sales <= 500){

                commision = sales * 0.045;
    
            }else if(sales > 500 && sales <= 1000){
        
                commision = sales * 0.075;
    
            }else if(sales > 1000 && sales <= 10000){
    
    
                commision = sales * 0.10;
            }else{
    
                commision = sales * 0.13;
    
            }


            break;

        case "Plovdiv":

            if(sales <= 500){

                commision = sales * 0.055;
    
            }else if(sales > 500 && sales <= 1000){
        
                commision = sales * 0.08;
    
            }else if(sales > 1000 && sales <= 10000){
    
    
                commision = sales * 0.12;
            }else{
    
                commision = sales * 0.145;
    
            }

            break;

    }

    if(commision == 0){

        console.log("error");

    }else if(sales < 0){
       
        console.log("error");

    }else{

 console.log(`${commision.toFixed(2)}`);

    }

}

tradeCommissions(["Varna", 

"-3874.50"]) 
