function santasHoliday(input) {
  const roomPrice = 18.0;
  const apartment = 25.0;
  const presidentApartment = 35.0;

  const night = Number(input[0]);
  const room = input[1];
  const grade = input[2];

  let totalPrice = 0;

  let priceAllNight = 0;

  let discount = 0;

  switch (room) {
    case "room for one person":
      priceAllNight = (night - 1) * roomPrice;

      break;

    case "apartment":
      priceAllNight = (night - 1) * apartment;

      break;

    case "president apartment":
      priceAllNight = (night - 1) * presidentApartment;
      break;
  }



  if (night < 10) {
    if (room === "apartment") {
      discount = 0.3;
    } else {
      discount = 0.1;
    }
  } else if (night >= 10 && night <= 15) {
    if (room === "apartment") {
      discount = 0.35;
    } else {
      discount = 0.15;
    }
  } else {
    if (room === "apartment") {
      discount = 0.5;
    } else {
      discount = 0.2;
    }
  }

  if(room === "room for one person"){

    discount = 0;
      }

  let price = priceAllNight - priceAllNight * discount;

  if (grade === "positive") {
    totalPrice = price + price * 0.25;
  } else {
    totalPrice = price - price * 0.1;
  }
  console.log(`${totalPrice.toFixed(2)}`);
  
}

santasHoliday(["12",
    "room for one person",
    "positive"])