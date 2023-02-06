function calorieObject(arr){


    let obj = {};

    let productName = '';

    for(let i = 0; i < arr.length; i++){

        

        if(i % 2 === 0){

            productName = arr[i];

            obj[arr[i]] = '';

        }else{

            obj[productName] = Number(arr[i]);
        }

    }

    console.log(obj);

}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);