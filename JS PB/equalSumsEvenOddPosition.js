function equalSumsEvenOddPosition(input) {
  const firstNumber = input[0];
  const secondNumber = input[1];
  let sumOne = 0;
  let sumTwo = 0;
  let string = "";
  let result = "";

  for (let i = firstNumber; i <= secondNumber; i++) {
    string = i + "";

    for (let j = 0; j <= string.length - 1; j++) {
      if (j % 2 == 0) {
        sumOne += Number(string[j]);
      } else {
        sumTwo += Number(string[j]);
      }
    }

    if (sumOne === sumTwo) {
      result += `${string} `;
    }

    sumOne = 0;
    sumTwo = 0;
  }

  console.log(result);
}

equalSumsEvenOddPosition(["100115", "100120"]);
