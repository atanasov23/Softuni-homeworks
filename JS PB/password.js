function password(input) {
  const name = input[0];
  const passWord = input[1];

  let index = 0;

  let passIndex = "";

  while (passIndex !== passWord) {
    passIndex = input[index + 2];

    index++;
  }

  console.log(`Welcome ${name}!`);
}

password(["Gosho", "secret", "secret"]);
