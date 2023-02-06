function stringSubstring(word, text) {

        let split = text.split(' ');

        for(let el of split){

            if(el.toLowerCase() === word.toLowerCase()){
            
            console.log(word);

            return;

            }
        }

        console.log(`${word} not found!`);

    }



stringSubstring('javascript',
'JavaScript is the best programming language');