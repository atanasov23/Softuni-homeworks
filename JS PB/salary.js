function salary(input) {

  const salary = Number(input[1]);

  let loseMoney = salary;

  for (let i = 2; i < input.length; i++) {
    switch (input[i]) {
      case "Facebook":
        loseMoney -= 150;

        break;

      case "Instagram":
        loseMoney -= 100;

        break;

      case "Reddit":
        loseMoney -= 50;

        break;
    }

    if (loseMoney <= 0) {
      console.log("You have lost your salary.");

      break;
    }
  }

  if (loseMoney > 0) {
    console.log(loseMoney);
  }

}

salary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
  "Facebook",
  "Facebook",
  "Facebook",
  "Facebook",
]);
