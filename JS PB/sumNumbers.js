function sumNumbers(input) {
  const firstNumber = Number(input[0]);

  let index = 0;

  let sumNumber = 0;

  while (sumNumber !== firstNumber) {
    index++;

    sumNumber += Number(input[index]);

    if (sumNumber >= firstNumber) {
      break;
    }
  }

  console.log(sumNumber);
}

sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);
