function rotateArray(arr, n){

    let array = arr.splice(0);

    

    for(let i = 0; i < n; i++){

        let lastElement = array.pop();

        array.unshift(lastElement)

    }

    console.log(array.join(' '));

}

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15);