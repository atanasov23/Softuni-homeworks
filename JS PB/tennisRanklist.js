function tennisRanklist(input) {
  let index = 0;

  const turnirs = Number(input[index]);

  index++;

  let startPoints = Number(input[index]);

  index++;

  let sumPoints = 0;
  let winnerCount = 0;

  for (let i = 0; i < turnirs; i++) {
    switch (input[index]) {
      case "W":
        startPoints += 2000;

        sumPoints += 2000;

        winnerCount++;

        break;

      case "F":
        startPoints += 1200;
        sumPoints += 1200;

        break;

      case "SF":
        startPoints += 720;
        sumPoints += 720;

        break;
    }
    index++;
  }

  const average = sumPoints / turnirs;
  const count = (winnerCount / turnirs) * 100;

  console.log(`Final points: ${startPoints}`);
  console.log(`Average points: ${Math.floor(average)}`);
  console.log(`${count.toFixed(2)}%`);
}

tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);
