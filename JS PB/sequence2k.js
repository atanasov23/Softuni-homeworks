function sequence2k(input) {
  const number = Number(input[0]);

  let count = 1;

  let numberTwo = 0;

  while (count <= number) {
    numberTwo = numberTwo * 2 + 1;

    count++;
    if (numberTwo > number) {
      break;
    }

    console.log(numberTwo);
  }
}

sequence2k(["31"]);
