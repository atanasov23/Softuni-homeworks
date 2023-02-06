function sortNumbers(n1, n2, n3) {
  let arr = [n1, n2, n3];

  let sort = arr.sort(function (a, b) {
    return b - a;
  });

  for (let i = 0; i < sort.length; i++) {
    console.log(sort[i]);
  }
}

sortNumbers(0, 0, 2);
