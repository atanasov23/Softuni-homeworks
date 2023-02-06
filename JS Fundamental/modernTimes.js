function modernTimes(string){

    let split = string.split(' ');

    for(let el of split){

        if(el.length > 1 && el.startsWith('#')){
            
            let toLower = el.toLowerCase();

            let bool = false;

            for(let i = 0; i < toLower.length; i++){
                
                if(toLower.charCodeAt(i) > 97 && toLower.charCodeAt(i) < 122){

                    
                    bool = true;

                    break;
                    
                }
                
            }

            if(bool){

                console.log(el.substring(1))

            }
        }

    }

}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');