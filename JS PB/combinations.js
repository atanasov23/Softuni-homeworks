function combinations(input) {
  const number = Number(input[0]);

  let sum = 0;

  let counter = 0;

  for (let i = 0; i <= number; i++) {
    for (let j = 0; j <= number; j++) {
      for (let k = 0; k <= number; k++) {
        sum = i + j + k;

        if (sum === number) {
          counter++;
        }
      }
    }
  }

  console.log(counter);
}
combinations(["5"]);
