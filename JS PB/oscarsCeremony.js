function oscarsCeremony(input) {
  const rent = Number(input[0]);

  const figurines = rent - rent * 0.3;
  const catering = figurines - figurines * 0.15;
  const sound = catering / 2;

  console.log((figurines + catering + sound + rent).toFixed(2));
}
oscarsCeremony(["5555"]);
