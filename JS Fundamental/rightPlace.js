function rightPlace(firstWord, char, secondWord) {

    let word = '';

    for (let i = 0; i < firstWord.length; i++) {

        if (firstWord[i] === '_') {

            word += char;
        } else {

            word += firstWord[i];
        }

    }

    if (word === secondWord) {

        console.log('Matched');

    } else {

        console.log('Not Matched');

    }

}

rightPlace('Str_ng', 'i', 'String');