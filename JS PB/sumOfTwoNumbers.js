function sumOfTwoNumbers(input) {
  const magicNumber = Number(input[2]);
  let startNumber = Number(input[0]);
  let finalNumber = Number(input[1]);

  let sum = 0;

  let counter = 0;

  let numberOne = 0;
  let numberTwo = 0;

  let boolOne = false;
  let boolTwo = false;
  let boolThree = false;

  for (let i = startNumber; i <= finalNumber; i++) {
    for (let j = startNumber; j <= finalNumber; j++) {
      sum = i + j;

      if (sum === magicNumber) {
        counter++;

        boolOne = true;

        numberOne = i;
        numberTwo = j;

        boolThree = true;
        break;
      } else {
        counter++;
        boolTwo = true;
      }
    }

    if (boolThree) {
      break;
    }
  }

  if (boolOne) {
    console.log(
      `Combination N:${counter} (${numberOne} + ${numberTwo} = ${sum})`
    );
  } else {
    console.log(`${counter} combinations - neither equals ${magicNumber}`);
  }
}

sumOfTwoNumbers(["88", "888", "1000"]);
