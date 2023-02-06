function histogram(input) {
  const numbers = Number(input[0]);

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let i = 1; i < input.length; i++) {
    let input1 = Number(input[i]);

    if (input1 < 200) {
      p1++;
    } else if (input1 >= 200 && input1 <= 399) {
      p2++;
    } else if (input1 >= 400 && input1 <= 599) {
      p3++;
    } else if (input1 >= 600 && input1 <= 799) {
      p4++;
    } else {
      p5++;
    }
  }

  console.log(`${((p1 / numbers) * 100).toFixed(2)}%`);
  console.log(`${((p2 / numbers) * 100).toFixed(2)}%`);
  console.log(`${((p3 / numbers) * 100).toFixed(2)}%`);
  console.log(`${((p4 / numbers) * 100).toFixed(2)}%`);
  console.log(`${((p5 / numbers) * 100).toFixed(2)}%`);
}

histogram([
  "14",
  "53",
  "7",
  "56",
  "180",
  "450",
  "920",
  "12",
  "7",
  "150",
  "250",
  "680",
  "2",
  "600",
  "200",
]);
