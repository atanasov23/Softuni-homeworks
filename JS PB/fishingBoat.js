function fishingBoat(input) {
  const fisherMan = Number(input[2]);
  const budget = Number(input[0]);
  const season = input[1];
 
  
  let shipPrice = 0;
  

  switch (season) {
    case "Spring":
      shipPrice = 3000;

      break;

    case "Summer":
      shipPrice = 4200;

      break;

    case "Autumn":
      shipPrice = 4200;

      break;

    case "Winter":
      shipPrice = 2600;

      break;
  }

  if (fisherMan <= 6) {

    shipPrice -= shipPrice * 0.10;

  } else if (fisherMan >= 7 && fisherMan <= 11) {

    shipPrice -= shipPrice * 0.15;

  } else if(fisherMan >= 12) {

    shipPrice -= shipPrice * 0.25;

  }

  if (fisherMan % 2 == 0 && !(season == "Autumn")) {
    shipPrice -= shipPrice * 0.05;
  }

  

  if (budget >= shipPrice) {


    

    console.log(
      `Yes! You have ${Math.abs(shipPrice - budget).toFixed(2)} leva left.`
    );
  } else {

    console.log(
      `Not enough money! You need ${Math.abs(shipPrice - budget).toFixed(2)} leva.`
    );
  }
  
}
fishingBoat(["3000", "Summer", "11"]);
