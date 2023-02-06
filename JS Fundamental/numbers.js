function numbers(input) {

    let newArr = input.split(' ').map(Number);

    let sum = 0;

    let count = 0;

    for (let el of newArr) {

        sum += el;

        count++;
    }

    let average = sum / count

    let filtered = newArr.filter(a => a > average).sort((a, b) => b - a).slice(0, 5);

    if(filtered.length > 0){

console.log(filtered.join(' '))
        
    }else{
 console.log('No');

    }
    
}

numbers('');