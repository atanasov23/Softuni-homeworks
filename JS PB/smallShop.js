function smallShop(input){

    const pcs = Number(input[2]);

    let price = 0;

    if(input[1] == "Sofia"){

        switch(input[0]){

            case "coffee":
                price = pcs * 0.50;
                break;

            case "water":
                price = pcs * 0.80;
                break;

            case "beer":
                price = pcs * 1.20;
                break;

            case "sweets":
                price = pcs * 1.45;
                break;

            case "peanuts":
                price = pcs * 1.60;
                break;

        }

    }else if(input[1] == "Plovdiv"){

        switch(input[0]){

            case "coffee":
                price = pcs * 0.40;
                break;

            case "water":
                price = pcs * 0.70;
                break;

            case "beer":
                price = pcs * 1.15;
                break;

            case "sweets":
                price = pcs * 1.30;
                break;

            case "peanuts":
                price = pcs * 1.50;
                break;

        }


    }else if(input[1] == "Varna"){

        switch(input[0]){

            case "coffee":
                price = pcs * 0.45;
                break;

            case "water":
                price = pcs * 0.70;
                break;

            case "beer":
                price = pcs * 1.10;
                break;

            case "sweets":
                price = pcs * 1.35;
                break;

            case "peanuts":
                price = pcs * 1.55;
                break;

        }

    }

    console.log(price);
}

smallShop(["water",
"Plovdiv",
"2"])

