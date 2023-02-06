function matchPhoneNumber(str){

    let arr = [];

    let regEx = /\+359([ |-])2\1[0-9]{3}\1[0-9]{4}/g

    let text = str[0];

    let match = regEx.exec(text);

    while(match !== null){

        arr.push(match[0]);

        match = regEx.exec(text);

    }

    console.log(arr.join(', '))

}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);