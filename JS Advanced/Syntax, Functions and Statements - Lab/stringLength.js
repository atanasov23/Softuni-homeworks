function stringLength(...input) {

    let sum = 0;

    for (let el of input) {

        sum += el.length;

    }

    console.log(sum);
    console.log(Math.floor(sum / input.length));

}

stringLength('pasta', '5', '22.3');