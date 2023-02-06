function Graduation(input) {
  let index = 0;

  const name = input[index];

  index++;

  let grade = 0;

  let sum = 0;

  let total = 0;

  let count = 0;

  let count2 = 0;

  let counter = 1;

  while (counter <= 12) {
    grade = Number(input[index]);

    counter++;
    index++;

    if (grade >= 4.0) {
      sum += grade;

      total = sum / 12;
    }

    if (grade < 4) {
      count++;

      if (count > 1) {
       
        break;
      }
    }

    count2++;
  }

  if (count2 >= 12) {
    console.log(`${name} graduated. Average grade: ${total.toFixed(2)}`);
  }else{
 console.log(`${name} has been excluded at ${count2} grade`);

  }

}

Graduation([
  "Gosho",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
]);
