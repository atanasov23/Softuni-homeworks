function sumTable() {

    debugger

    let getValue = document.querySelectorAll('table td');

    let result = document.getElementById('sum');

    let index = 0;

    let sum = 0;

    for(let el of getValue){

        index++;

        if(index % 2 == 0){

            sum += Number(el.innerHTML)

        }

    }

    

    result.innerHTML = sum

    
}