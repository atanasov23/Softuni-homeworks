function building(input) {
  const floor = Number(input[0]);
  const rooms = Number(input[1]);

  for (let i = floor; i > 0; i--) {
    let room = "";

    for (let j = 0; j < rooms; j++) {
      if (i === floor) {
        room += `L${i}${j} `;
      } else if (i % 2 == 0) {
        room += `O${i}${j} `;
      } else {
        room += `A${i}${j} `;
      }
    }
    console.log(room);
  }
}

building(["6", "4"]);
