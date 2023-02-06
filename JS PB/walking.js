function walking(input) {
  let index = 0;

  let comand = "";

  let steps = 0;

  while (comand !== "Going home") {
    comand = input[index];

    if (comand !== "Going home") {
      steps += Number(input[index]);
    }

    index++;

    if (steps >= 10000) {
      console.log(`Goal reached! Good job!`);
      console.log(`${steps - 10000} steps over the goal!`);

      break;
    }

    if (comand === "Going home") {
      steps += Number(input[index]);

      if (steps > 10000) {
        console.log(`Goal reached! Good job!`);
        console.log(`${Math.abs(steps - 10000)} steps over the goal!`);
      } else {
        console.log(`${Math.abs(steps - 10000)} more steps to reach goal.`);
      }
    }
  }
}

walking(["125", "250", "4000", "30", "2678", "4682"]);
