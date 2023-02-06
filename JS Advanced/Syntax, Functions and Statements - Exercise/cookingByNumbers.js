function cookingByNumbers(number, ...arr) {

    let convertToNumber = Number(number);

    let result = 0;

    for (let el of arr) {

        if (el === 'chop') {

            convertToNumber = convertToNumber / 2;
            console.log(convertToNumber);
        } else if (el === 'dice') {

            convertToNumber = Math.sqrt(convertToNumber);
            console.log(convertToNumber);
        } else if (el === 'spice') {

            convertToNumber++;
            console.log(convertToNumber);
        } else if (el === 'bake') {

            convertToNumber = convertToNumber * 3;
            console.log(convertToNumber);

        } else if (el === 'fillet') {
            convertToNumber = convertToNumber -= convertToNumber * 0.2;
            console.log(convertToNumber);
        }
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');