function greatestCommon(n1, n2) {

  let result = [];

  for (let i = 0; i <= n1; i++) {

    if (n1 % i === 0 && n2 % i === 0) {

      result.push(i);

    }

  }

  console.log(Math.max(...result));

}


greatestCommon(2154, 458);