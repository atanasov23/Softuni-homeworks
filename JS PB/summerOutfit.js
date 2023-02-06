function summerOutfit(input) {

    const degrees = Number(input[0]);

    switch(input[1]){

        case "Morning":

        if(degrees >= 10 && degrees <= 18){

            console.log(`It's ${degrees} degrees, get your Sweatshirt and Sneakers.`);

        }else if(degrees >= 18 && degrees <= 24){

            console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);

        }else{
            console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
        }
            break;

        case "Afternoon":

            if(degrees >= 10 && degrees <= 18){

                console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
    
            }else if(degrees >= 18 && degrees <= 24){
    
                console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
    
            }else{
                console.log(`It's ${degrees} degrees, get your Swim Suit and Barefoot.`);
            }

        break;

        case "Evening":

            if(degrees >= 10 && degrees <= 18){

                console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
    
            }else if(degrees >= 18 && degrees <= 24){
    
                console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
    
            }else{
                console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
            }

        break;

    }

}

summerOutfit(["28", 

"Evening"]);
