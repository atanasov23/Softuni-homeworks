function godzillaKong(input) {
  const budget = Number(input[0]);
  const statist = Number(input[1]);
  const clothPrice = Number(input[2]);

  let statistClothPrice = statist * clothPrice;

  let decorePrice = budget * 0.1;

  let discount = 0;

  if (statist > 150) {
    discount = statistClothPrice * 0.1;
  }

  let totalPrice = statistClothPrice + decorePrice - discount;

  if (totalPrice <= budget) {
    console.log(`Action!`);
    console.log(
      `Wingard starts filming with ${Math.abs(totalPrice - budget).toFixed(
        2
      )} leva left.`
    );
  } else {
    console.log(`Not enough money!`);
    console.log(
      `Wingard needs ${Math.abs(totalPrice - budget).toFixed(2)} leva more.`
    );
  }
}
godzillaKong(["9587.88", "222", "55.68"]);
