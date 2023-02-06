function extractText() {
    
    let select = document.querySelectorAll('#items li');

    let toArray = Array.from(select);

    let result = document.getElementById('result');

    let txt = '';


    for(let el of toArray){

        txt += `${el.innerHTML}\n`

    }

        
    result.innerHTML = txt
    


    console.log(txt);
}