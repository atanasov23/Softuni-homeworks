function extract(content) {

    let getElement = document.getElementById(content).textContent;

    let regex = /\(.*?\)/g;

    let match = getElement.match(regex);

    let result = [];

    for(let el of match){

        let length = el.length - 1;

        result.push(el.substring(1, length));

    }

 
    return result.join('; ');


}

