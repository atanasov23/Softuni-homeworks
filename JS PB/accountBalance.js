function accountBalance(input) {
  let stopLoop = "";

  let money = 0;

  let index = 0;

  while (stopLoop !== "NoMoreMoney") {
    let sum = Number(input[index]);

    if (sum < 0) {
      console.log("Invalid operation!");

      break;
    }

    index++;

    stopLoop = input[index];

    console.log(`Increase: ${sum.toFixed(2)}`);

    money += sum;
  }

  console.log(`Total: ${money.toFixed(2)}`);
}
accountBalance(["120", "45.55", "-150"]);
