function moving(input) {
  let index = 2;

  let width = Number(input[0]);

  let length = Number(input[1]);

  let height = Number(input[2]);

  let volume = width * length * height;

  let comand = "";

  let sum = 0;

  let boxes = "";

  while (boxes !== "Done") {
    index++;

    boxes = input[index];

    if (sum >= volume) {
      sum -= volume;

      console.log(
        `No more free space! You need ${Math.abs(sum)} Cubic meters more.`
      );
      break;
    }

    if (boxes === "Done") {
      volume -= sum;

      console.log(`${volume} Cubic meters left.`);

      break;
    }
    sum += Number(boxes);
  }
}

moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122",
"27"])