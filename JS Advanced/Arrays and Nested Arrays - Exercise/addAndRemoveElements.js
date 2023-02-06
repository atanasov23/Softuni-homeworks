function addAndRemoveElements(input){

    let number = 1;
    let result = [];

    for(let el of input){

        if(el === 'add'){

            result.push(number);

            number++;

        }else if(el === 'remove'){

            result.pop();

            number++;
             
        }

    }

    if(result.length === 0){

        console.log('Empty');

    }
    
    result.forEach(a => console.log(a));
}

addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']
);