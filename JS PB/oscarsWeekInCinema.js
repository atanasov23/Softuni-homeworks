function oscarsWeekInCinema(input) {
  const filmName = input[0];
  const type = input[1];
  const ticketCounter = Number(input[2]);

  let profit = 0;

  switch (filmName) {
    case "A Star Is Born":
      if (type === "normal") {
        profit = ticketCounter * 7.5;
      } else if (type === "luxury") {
        profit = ticketCounter * 10.5;
      } else {
        profit = ticketCounter * 13.5;
      }

      break;

    case "Bohemian Rhapsody":
      if (type === "normal") {
        profit = ticketCounter * 7.35;
      } else if (type === "luxury") {
        profit = ticketCounter * 9.45;
      } else {
        profit = ticketCounter * 12.75;
      }

      break;

    case "Green Book":
      if (type === "normal") {
        profit = ticketCounter * 8.15;
      } else if (type === "luxury") {
        profit = ticketCounter * 10.25;
      } else {
        profit = ticketCounter * 13.25;
      }

      break;

    case "The Favourite":
      if (type === "normal") {
        profit = ticketCounter * 8.75;
      } else if (type === "luxury") {
        profit = ticketCounter * 11.55;
      } else {
        profit = ticketCounter * 13.95;
      }

      break;
  }

  console.log(`${filmName} -> ${profit.toFixed(2)} lv.`);
}

oscarsWeekInCinema(["A Star Is Born", "luxury", "42"]);
