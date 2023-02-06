function distance(x1, y1, x2, y2) {

    let x = x1 - x2;

    let y = y2 - y1;

    let sum = (Math.pow(x, 2)) + Math.pow(y, 2);

    let finalResult = Math.sqrt(sum);

    console.log(finalResult);


}

distance(2.34, 15.66, -13.55, -2.9985);