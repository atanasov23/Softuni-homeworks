function specialNumber(input) {
  const number = Number(input[0]);

  let specialNumber = "";

  let counter = 0;

  for (let i = 1111; i <= 9999; i++) {
    let numberTwo = i + "";

    if (counter < 4) {
      counter = 0;
    }

    for (let j = 0; j < numberTwo.length; j++) {
      let numberThird = Number(numberTwo[j]);

      if (number % numberThird == 0) {
        counter++;
      }

      if (counter >= 4) {
        specialNumber += `${numberTwo} `;

        counter = 0;
      }
    }
  }
  console.log(specialNumber);
}

specialNumber(["16"]);
