function pcStore(input) {
  const processorPrice = Number(input[0]);
  const videoCartPrice = Number(input[1]);
  const ramPrice = Number(input[2]);
  const ramPcs = Number(input[3]);
  const discount = Number(input[4]);

  let procesorLev = processorPrice * 1.57;
  let videoCartLev = videoCartPrice * 1.57;
  let ramLev = ramPrice * 1.57 * ramPcs;

  let processorFinalPrice = procesorLev - procesorLev * discount;
  let videoCartFinalPrice = videoCartLev - videoCartLev * discount;

  let finalPrice = processorFinalPrice + videoCartFinalPrice + ramLev;

  console.log(`Money needed - ${finalPrice.toFixed(2)} leva.`);
}

pcStore(["200", "100", "80", "1", "0.01"]);
