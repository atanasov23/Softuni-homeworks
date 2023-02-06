function validityChecker(...arr) {

    let x1 = arr[0];

    let y1 = arr[1];

    let x2 = arr[2];

    let y2 = arr[3];

    function pointOne() {

        return Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));

    }

    function pointTwo() {

        return Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));

    }

    function pointThree() {

        return Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
    }


    let point1 = pointOne();

    let point2 = pointTwo();

    let point3 = pointThree();

    if (point1 === Math.trunc(point1)) {

        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);

    } else {

        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (point2 === Math.trunc(point2)) {

        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);

    } else {

        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (point3 === Math.trunc(point3)) {

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);

    } else {

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

validityChecker(2, 1, 1, 1);