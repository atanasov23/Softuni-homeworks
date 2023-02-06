function cake(input) {
  const sizeOne = Number(input[0]);

  const sizeTwo = Number(input[1]);

  let index = 2;

  let cakePiece = sizeOne * sizeTwo;

  while (cakePiece > 0) {
    let piece = Number(input[index]);

    index++;

    cakePiece -= piece;

    if (cakePiece < 0) {
      console.log(
        `No more cake left! You need ${Math.abs(cakePiece)} pieces more.`
      );

      break;
    }

    if (input[index] === "STOP") {
      console.log(`${cakePiece} pieces are left.`);

      break;
    }
  }
}

cake(["10", "2", "2", "4", "6", "STOP"]);
