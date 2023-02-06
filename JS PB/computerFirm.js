function computerFirm(input) {
  const number = Number(input[0]);

  let sell = 0;

  let allSell = 0;

  let totalSell = 0;

  let average = 0;

  for (let i = 1; i < input.length; i++) {
    //sell += Math.floor(input[i]  % 10);

    //console.log(Math.floor((input[i] / 10) % 10) + Math.floor((input[i] / 100) % 10))

    allSell = Number(input[i][0] + input[i][1]);

    let number = Number(input[i][2]);

    if (number === 2) {
      totalSell += 0;
    } else if (number === 3) {
      totalSell += allSell - allSell * 0.5;
    } else if (number === 4) {
      totalSell += allSell * 0.7;
    } else if (number === 5) {
      totalSell += allSell * 0.85;
    } else if (number === 6) {
      totalSell += allSell;
    }

    average += number;
  }

  console.log(`${totalSell.toFixed(2)}`);

  console.log(`${(average / number).toFixed(2)}`);
}

computerFirm(["3", "103", "103", "103"]);
