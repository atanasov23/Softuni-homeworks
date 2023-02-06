function coins(input) {
  let rest = input[0];

  let coin = parseInt(rest * 100);

  let count = 0;

  while (coin > 0) {
    if (coin - 200 >= 0) {
      coin -= 200;

      count++;
    } else if (coin - 100 >= 0) {
      coin -= 100;

      count++;
    } else if (coin - 50 >= 0) {
      coin -= 50;

      count++;
    } else if (coin - 20 >= 0) {
      coin -= 20;

      count++;
    } else if (coin - 10 >= 0) {
      coin -= 10;

      count++;
    } else if (coin - 5 >= 0) {
      coin -= 5;

      count++;
    } else if (coin - 2 >= 0) {
      coin -= 2;

      count++;
    } else if (coin - 1 >= 0) {
      coin -= 1;

      count++;
    }
  }
  console.log(count);
}

coins(["0.56"]);
