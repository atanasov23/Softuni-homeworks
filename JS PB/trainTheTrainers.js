function trainTheTrainers(input) {
  let index = 0;

  let juryCount = Number(input[index]);

  index++;

  let problemShow = "";

  let grade = 0;

  let average = 0;

  let test = 0;

  let testTwo = 0;

  let counter = 0;

  while (input[index] !== "Finish") {
    counter++;
    problemShow = input[index];

    average = 0;

    test = 0;

    index++;

    for (let i = 0; i < juryCount; i++) {
      grade = Number(input[index]);

      test += Number(input[index]);

      index++;

      average = test / juryCount;
    }

    testTwo += average;

    console.log(`${problemShow} - ${average.toFixed(2)}.`);
  }

  console.log(
    `Student's final assessment is ${(testTwo / counter).toFixed(2)}.`
  );
}
trainTheTrainers([
  "2",
  "Objects and Classes",
  "5.77",
  "4.23",
  "Dictionaries",
  "4.62",
  "5.02",
  "RegEx",
  "2.88",
  "3.42",
  "Finish",
]);
