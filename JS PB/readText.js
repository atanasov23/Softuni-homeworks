function readText(input) {
  let name = "";

  let index = 0;

  while (name !== "Stop") {
    index++;

    name = input[index - 1];

    if (name === "Stop") {
      break;
    }

    console.log(name);
  }
}

readText([
  "Sofia",
  "Berlin",
  "Moscow",
  "Athens",
  "Madrid",
  "London",
  "Paris",
  "Stop",
  "AfterStop",
]);
