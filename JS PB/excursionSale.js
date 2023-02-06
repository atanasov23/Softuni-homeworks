function excursionSale(input) {
  let packedSea = Number(input[0]);
  let packedMountain = Number(input[1]);

  let index = 0;

  let comand = "";

  let totalSum = 0;

  while (comand !== "Stop") {
    comand = input[index];
    index++;

    switch (comand) {
      case "sea":
        if (packedSea > 0) {
          totalSum += 680;

          packedSea--;
        }

        break;

      case "mountain":
        if (packedMountain > 0) {
          totalSum += 499;

          packedMountain--;
        }

        break;
    }

    if (packedSea == 0 && packedMountain == 0) {
      break;
    }
  }

  if (packedMountain > 0 || packedSea > 0) {
    console.log(`Profit: ${totalSum} leva.`);
  }

  if (packedMountain <= 0 && packedSea <= 0) {
    console.log(`Good job! Everything is sold.`);
    console.log(`Profit: ${totalSum} leva.`);
  }
}


excursionSale([
  "6",
  "3",
  "sea",
  "mountain",
  "mountain",
  "mountain",
  "sea",
  "Stop",
]);
