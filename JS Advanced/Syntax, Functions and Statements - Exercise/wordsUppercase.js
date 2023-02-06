function wordsUppercase(str){

    let regex = /\w+/g;

    let arr = str.match(regex);

    let result = [];

    for(let el of arr){

        result.push(el.toUpperCase())

    }

    console.log(result.join(', '));

}

wordsUppercase('hello');