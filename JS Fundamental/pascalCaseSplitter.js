function pascalCaseSplitter(str){

    let arr = [];

    let resultWord = '';

    for(let el of str){

        if(el.charCodeAt() >= 65 && el.charCodeAt() <= 90 ){

            resultWord += ', '

            resultWord += el
            
        }else{

            resultWord += el

        }

      
    }

    console.log(resultWord.replace(', ', ''))

}

pascalCaseSplitter('ThisIsSoAnnoyingToDo');