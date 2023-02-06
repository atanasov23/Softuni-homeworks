function censoredWords(str,word){

    while(str.indexOf(word) >= 0){

        str = str.replace(word, '*'.repeat(word.length));
    
    }

    console.log(str);

}

censoredWords('Find the hidden word', 'hidden');