function negativePositiveNumbers(arr){

    let newArr = [];

    for(let el of arr){

        if(el < 0){

            newArr.unshift(el);

        }else{

            newArr.push(el)

        }

    }

    newArr.forEach(a => console.log(a))

}

negativePositiveNumbers([3, -2, 0, -1]);