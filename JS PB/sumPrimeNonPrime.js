function sumPrimeNonPrime(input) {
  let index = 0;

  let prime = 0;

  let notPrime = 0;

  while (input[index] !== "stop") {
    let number = Number(input[index]);

    if (number < 0) {
      console.log("Number is negative.");
    } else {
      let boolean = true;
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          boolean = false;
          break;
        }
      }
      if (boolean) {
        prime += number;
      } else {
        notPrime += number;
      }
    }

    index++;
  }
  console.log(`Sum of all prime numbers is: ${prime}`);
  console.log(`Sum of all non prime numbers is: ${notPrime}`);
}

sumPrimeNonPrime(["0", "-9", "0", "stop"]);
