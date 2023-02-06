function revealWords(word, string){

    let splitString = string.split(' ');

    let splitWord = word.split(', ')

    for(let el of splitWord){

    for(let i = 0; i < splitString.length; i++){

        if(splitString[i].length === el.length && splitString[i][0] === '*'){
            
            splitString[i] = el;

        }

    }

}

    console.log(splitString.join(' '));


}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');