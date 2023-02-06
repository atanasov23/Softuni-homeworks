function wordTracker(arr){

    let obj = {};

    let words = arr.shift().split(' ');

    let counter = 0;

    for(let word of words){

        for(let el of arr){

            if(word === el){

                counter++;

            }

        }

        obj[word] = counter

        counter = 0

    }

    let entries = Object.entries(obj).sort((a,b) => b[1] - a[1]) 
   
    for(let el of entries){

        console.log(`${el[0]} - ${el[1]}`);

    }

}

wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);