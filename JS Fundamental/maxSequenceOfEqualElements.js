function maxSequenceOfEqualElements(arr) {

    let newArray = [];

    let left = [];

    let counter = 0;

    let counter2 = 0;

    for(let i = 0; i < arr.length; i++){

        if(arr[i] === arr[i + 1]){

            newArray.push(arr[i]);

            counter++

        } else if (arr[i] === arr[i - 1]) {

           newArray.push(arr[i]);

           counter++;

           counter2 = counter;

           if(counter2 > left.length){

            left = [];

          for(let x = 0; x < newArray.length; x++){

            left.push(newArray[x]);

          }

        }
        
          counter = 0

           newArray = [];

        }

    }

 console.log(left.join(' '));

}

maxSequenceOfEqualElements([4, 4, 4, 4]);