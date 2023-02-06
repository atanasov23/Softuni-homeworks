function traveling(input) {
  let index = 0;

  let destination = input[index];

  index++;

  let sum = Number(input[index]);

  let comand = "";

  let saving = 0;

  let firstDestination = "";

  while (firstDestination !== "End") {
    firstDestination = destination;

    comand = input[index];

    index++;

    firstDestination = input[0];

    while (saving <= sum) {
      saving += Number(input[index]);

      comand = input[index];

      index++;

      if (saving >= sum) {
        saving = 0;

        console.log(`Going to ${firstDestination}!`);

        firstDestination = input[index];

        index++;

        sum = Number(input[index]);

        index++;
      }
    }
  }
}

traveling([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End",
]);
