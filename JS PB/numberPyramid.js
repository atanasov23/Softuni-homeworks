function numberPyramid(input) {
  const number = Number(input[0]);

  let counter = 0;

  let firstLoopBreak = false;

  for (let i = 1; i <= number; i++) {
    let print = "";

    for (let j = 1; j <= i; j++) {
      counter++;
      print += counter + " ";

      if (counter >= number) {
        firstLoopBreak = true;

        break;
      }
    }

    console.log(print);

    if (firstLoopBreak) {
      break;
    }
  }
}

numberPyramid(["15"]);
