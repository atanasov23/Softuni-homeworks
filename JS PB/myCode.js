function barcodeGenerator(input) {
  let numberOne = input[0];
  let numberTwo = input[1];
  let test = [];
  let arr = [];

  for (let a = numberOne; a < numberTwo; a++) {
    test.push(a);
  }

  for (let c = 0; c < test.length; c++) {
    let test22 = test[c].toString();

    if (
      test22[0] % 2 !== 0 &&
      test22[1] % 2 !== 0 &&
      test22[2] % 2 !== 0 &&
      test22[3] % 2 !== 0
    ) {
      arr.push(test[c]);
    }
  }

  console.log(test);
  console.log(arr);
}


barcodeGenerator(["20", "50"]);
