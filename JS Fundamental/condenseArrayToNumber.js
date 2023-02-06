function condenseArrayToNumber(arr){

let result = [];

  for(let element of arr){

  result.push(element);

  }

  while(result.length > 1){

    let arr = [];

    for(let i = 0; i < result.length - 1; i++){

        arr[i] = result[i] + result[i + 1];

    }

    result = arr;

  }

  console.log(result[0]);

}

condenseArrayToNumber([5,0,4,1,2]);