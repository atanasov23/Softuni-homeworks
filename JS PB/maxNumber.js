function maxNumber(input) {
  let index = 0;

  let comand = "";

  let numbers = [];

  let max = 0;

  while (comand !== "Stop") {
    numbers.push(Number(input[index]));

    comand = input[index];

    index++;

    if (comand === "Stop") {
      break;
    }

    max = Math.min(...numbers);
  }
  console.log(max);
}
maxNumber(["999",
"Stop"])