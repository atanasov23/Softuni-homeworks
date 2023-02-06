function inRange(charOne, charTwo) {

    let start = charOne.charCodeAt();

    let end = charTwo.charCodeAt();

    let result = [];

    if (charOne.charCodeAt() > charTwo.charCodeAt()) {

        start = charTwo.charCodeAt();

        end = charOne.charCodeAt();

    }

    for (let i = start + 1; i < end; i++) {

        result.push(String.fromCharCode(i));

    }

    console.log(result.join(' '));

}

inRange('C',
    '#')