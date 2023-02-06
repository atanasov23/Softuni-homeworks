function countString(str,word){

    let splitString = str.split(' ');

    let counter = 0;

    for(let el of splitString){

        if(el === word){

            counter++
            
        }

    }

    console.log(counter);

}

countString('softuni is great place for learning new programming languages',
'softuni')