function vacation(input) {
  let vacationPrice = Number(input[0]);
  let budget = Number(input[1]);

  let spendCount = 0;

  let daysCount = 0;

  let index = 2;

  while (budget < vacationPrice) {
    let comand = input[index];
    index++;
    let money = Number(input[index]);

    index++;

    daysCount++;

    switch (comand) {
      case "spend":
        budget -= money;

        if (budget < 0) {
          budget = 0;
        }

        spendCount++;

        break;

      case "save":
        budget += money;

        spendCount = 0;

        break;
    }

    if (spendCount >= 5) {
      console.log(`You can't save the money.`);
      console.log(`${daysCount}`);

      break;
    }
  }

  if (budget >= vacationPrice) {
    console.log(`You saved the money for ${daysCount} days.`);
  }
}
vacation([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100",
]);
