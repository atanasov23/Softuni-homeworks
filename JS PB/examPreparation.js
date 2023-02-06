function examPreparation(input) {
  let index = 0;

  let maxBadGrade = input[index];

  let problem = "";

  let gradeToProblem = 0;

  let comand = "";

  let sum = 0;

  let countProblem = 0;

  let lastProblem = "";

  let average = 0;

  let boolOne = false;
  let boolTwo = false;

  let badGradeCounter = 0;

  while (comand !== "Enough") {
    problem = input[index + 1];

    gradeToProblem = input[index + 2];

    index++;

    comand = input[index];

    index++;

    countProblem++;

    if (comand === "Enough") {
      boolOne = true;
      break;
    }

    lastProblem = problem;

    sum += Number(gradeToProblem);

    average = sum / countProblem;

    if (gradeToProblem <= 4) {
      badGradeCounter++;

      if (badGradeCounter >= maxBadGrade) {
        boolTwo = true;

        break;
      }
    }
  }

  if (boolOne) {
    console.log(`Average score: ${average.toFixed(2)}`);
    console.log(`Number of problems: ${countProblem - 1}`);
    console.log(`Last problem: ${lastProblem}`);
  }

  if (boolTwo) {
    console.log(`You need a break, ${badGradeCounter} poor grades.`);
  }
}

examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
