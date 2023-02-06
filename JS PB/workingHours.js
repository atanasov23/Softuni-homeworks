function workingHours(input) {
  const hour = Number(input[0]);

  if (hour >= 10 && hour <= 18) {

    switch (input[1]) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
      case "Saturday":
        console.log("open");
        break;
      case "Sunday":
        console.log("closed");
          break;
    }
  } else {
    console.log("closed");
  }
}

workingHours(["11", "Sunday"]);
