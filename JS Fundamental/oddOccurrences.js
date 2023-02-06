function oddOccurrences(string) {

    let arr = string.split(' ');

    let counter = 0;

    let obj = new Set();

    for (let word of arr) {

        for (let el of arr) {

            if (word.toLowerCase() == el.toLowerCase()) {

                counter++;

            }

        }

        if(counter % 2 !== 0){

            let convertWord = word.toLowerCase();

            obj.add(convertWord);

        }

        counter = 0;
        
    }

    let result = '';

    for(let el of obj){

        result += `${el} `

    }

    console.log(result);

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');