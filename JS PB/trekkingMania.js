function trekkingMania(input) {
  let climbers = 0;

  let musala = 0;
  let monblan = 0;
  let kilimandjaro = 0;
  let k2 = 0;
  let everest = 0;

  for (let i = 1; i < input.length; i++) {
    climbers += Number(input[i]);

    if (input[i] <= 5) {
      musala += Number(input[i]);
    } else if (input[i] >= 6 && input[i] <= 12) {
      monblan += Number(input[i]);
    } else if (input[i] >= 13 && input[i] <= 25) {
      kilimandjaro += Number(input[i]);
    } else if (input[i] >= 26 && input[i] <= 40) {
      k2 += Number(input[i]);
    } else if (input[i] >= 41) {
      everest += Number(input[i]);
    }
  }

  let musalaCount = (musala / climbers) * 100;
  let monblanCount = (monblan / climbers) * 100;
  let kilimandjaroCount = (kilimandjaro / climbers) * 100;
  let k2Count = (k2 / climbers) * 100;
  let everestCount = (everest / climbers) * 100;

  console.log(`${musalaCount.toFixed(2)}%`);
  console.log(`${monblanCount.toFixed(2)}%`);
  console.log(`${kilimandjaroCount.toFixed(2)}%`);
  console.log(`${k2Count.toFixed(2)}%`);
  console.log(`${everestCount.toFixed(2)}%`);
}

trekkingMania([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78",
]);
