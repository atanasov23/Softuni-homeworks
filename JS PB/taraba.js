function solve(a, b , c, d, e) {

  const one = Number(a)
  const two = Number(b)
  const three = Number(c)
  const four = Number(d)
  const five = Number(e)

  let priceB = 24 - (0.8 * 24);
  let priceP = 24 - (0.4 * 24);
  let priceM = 24;
  let priceQ = one;

  let totalPrice = (two * priceB) + (three * priceP) + (four * priceM) + (five * priceQ);

  console.log(totalPrice.toFixed(2));
  
}
solve(63.5,
    3.57,
    6.35,
    8.15,
    2.5,
);
