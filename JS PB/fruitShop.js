function fruitShop(input) {

  const pcs = Number(input[2]);

  let price = 0;

  if (
      input[1] == "Monday"|| input[1] == "Tuesday" || input[1] == "Wednesday" || input[1] == "Thursday" || input[1] == "Friday"
  ) {
    switch (input[0]) {
      case "banana":
        price = pcs * 2.5;
        console.log(`${price.toFixed(2)}`);
        break;

      case "apple":
        price = pcs * 1.2;
        console.log(`${price.toFixed(2)}`);
        break;

      case "orange":
        price = pcs * 0.85;
        console.log(`${price.toFixed(2)}`);
        break;

      case "grapefruit":
        price = pcs * 1.45;
        console.log(`${price.toFixed(2)}`);
        break;

      case "kiwi":
        price = pcs * 2.7;
        console.log(`${price.toFixed(2)}`);
        break;
      case "pineapple":
        price = pcs * 5.5;
        console.log(`${price.toFixed(2)}`);
        break;
      case "grapes":
        price = pcs * 3.85;
        console.log(`${price.toFixed(2)}`);
        break;

        default:
            console.log("error");
            break;
    }

    

  } else if(input[1] == "Saturday" || input[1] == "Sunday"){


    switch (input[0]) {
        case "banana":
          price = pcs * 2.7;
          console.log(`${price.toFixed(2)}`);
          break;
  
        case "apple":
          price = pcs * 1.25;
          console.log(`${price.toFixed(2)}`);
          break;
  
        case "orange":
          price = pcs * 0.90;
          console.log(`${price.toFixed(2)}`);
          break;
  
        case "grapefruit":
          price = pcs * 1.60;
          console.log(`${price.toFixed(2)}`);
          break;
  
        case "kiwi":
          price = pcs * 3.00;
          console.log(`${price.toFixed(2)}`);
          break;
        case "pineapple":
          price = pcs * 5.6;
          console.log(`${price.toFixed(2)}`);
          break;
        case "grapes":
          price = pcs * 4.20;
          console.log(`${price.toFixed(2)}`);
          break;
          default:
            console.log("error");
      }

     
  }else{

    console.log("error");

  }
  
}

fruitShop(["tomato","Monday","3"])
