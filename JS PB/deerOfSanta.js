function deerOfSanta(input) {
  const dayOff = Number(input[0]);
  const foodKg = Number(input[1]);
  const deerOne = Number(input[2]);
  const deerTwo = Number(input[3]);
  const deerThree = Number(input[4]);

  const dayOne = deerOne * dayOff;
  const dayTwo = deerTwo * dayOff;
  const dayThree = deerThree * dayOff;

  const allFoodNeeded = dayOne + dayTwo + dayThree;

  const total = Math.abs(allFoodNeeded - foodKg);

  if (total < foodKg) {

     console.log(`${Math.floor(total)} kilos of food left.`);
  } else {
console.log(`${Math.ceil(total)} more kilos of food are needed.`);
  }
}

deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])
