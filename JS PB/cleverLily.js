function cleverLily(input) {
  const age = Number(input[0]);
  const washingMachinePrice = Number(input[1]);
  const toyPrice = Number(input[2]);
  let money = 0;
  let money2 = 0;
  let toys = 0;
  let moneyGet = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 !== 0) {
      toys += 1;
    } else {
      money += 10;
      money2 += money;
      moneyGet++;
    }
  }

  let moneyFromToys = toys * toyPrice;

  money = money2 + moneyFromToys - moneyGet;

  let moneySave = Math.abs(money - washingMachinePrice);

  if (money >= washingMachinePrice) {
    console.log(`Yes! ${moneySave.toFixed(2)}`);
  } else {
    console.log(`No! ${moneySave.toFixed(2)}`);
  }
}

cleverLily(["21", "1570.98", "3"]);
