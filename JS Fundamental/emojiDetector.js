function emojiDetector(input) {

    let regEx = /([:*]{2})[A-Z][a-z]{2,}\1/g;

    let text = input[0];

    let match = text.match(regEx);

    let regExForDigit = /\d/g;

    let matchForDigit = text.match(regExForDigit);

    let digitSum = 1;

    for (let digit of matchForDigit) {

        digitSum *= Number(digit);

    }


    

    let emoji = [];

    for (let el of match) {

        let sum = 0;

        let lettersRegEx = /\w/g;

        let match = el.match(lettersRegEx);

        for (let i = 0; i < match.length; i++) {

            sum += match[i].charCodeAt();

        }

        if (sum >= digitSum) {

            emoji.push(el);

        }

    }
console.log(`Cool threshold: ${digitSum}`);
    console.log(`${match.length} emojis found in the text. The cool ones are:`);

    emoji.forEach(el => console.log(el));

}

emojiDetector((["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]));