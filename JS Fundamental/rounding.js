function rounding(number, param) {

    if (param > 15) {

        param = 15;
    }

    let fixed = number.toFixed(param);

    console.log(parseFloat(fixed));

}

rounding(3.1415926535897932384626433832795, 17);