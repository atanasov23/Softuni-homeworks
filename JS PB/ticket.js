function ticket(input) {
  let index = 0;

  let inputLine = input[index];

  let kidTicket = 0;

  let studentTicket = 0;

  let standardTicket = 0;

  while (inputLine !== "Finish") {
    let movie = inputLine;

    index++;

    let allTicket = Number(input[index]);

    let freeSpace = allTicket;

    index++;

    let ticketType = input[index];

    while (ticketType !== "End") {
      switch (ticketType) {
        case "standard":
          standardTicket++;
          break;

        case "kid":
          kidTicket++;

          break;

        case "student":
          studentTicket++;
          break;
      }

      freeSpace--;

      if (freeSpace === 0) {
        break;
      }

      index++;
      ticketType = input[index];
    }

    let boughtTicket = allTicket - freeSpace;
    let percentFull = (boughtTicket / allTicket) * 100;

    console.log(`${movie} - ${percentFull.toFixed(2)}% full.`);
    index++;
    inputLine = input[index];
  }

  let allBoughtTickets = kidTicket + standardTicket + studentTicket;
  console.log(`Total tickets: ${allBoughtTickets}`);
  console.log(
    `${((studentTicket / allBoughtTickets) * 100).toFixed(2)}% student tickets.`
  );
  console.log(
    `${((standardTicket / allBoughtTickets) * 100).toFixed(
      2
    )}% standard tickets.`
  );
  console.log(
    `${((kidTicket / allBoughtTickets) * 100).toFixed(2)}% kids tickets.`
  );
}
ticket([
  "The Matrix",
  "20",
  "student",
  "standard",
  "kid",
  "kid",
  "student",
  "student",
  "standard",
  "student",
  "End",
  "The Green Mile",
  "17",
  "student",
  "standard",
  "standard",
  "student",
  "standard",
  "student",
  "End",
  "Amadeus",
  "3",
  "standard",
  "standard",
  "standard",
  "Finish",
]);
