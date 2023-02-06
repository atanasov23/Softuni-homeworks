function storage(arr){

    let obj = {};

    for(let el of arr){

        let [product, quantity] = el.split(' ');

        if(obj.hasOwnProperty(product)){

            obj[product] += Number(quantity);

        }else{

            obj[product] = Number(quantity);
        }

    }

    for(let el in obj){

        console.log(`${el} -> ${obj[el]}`);

    }

}

storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']);