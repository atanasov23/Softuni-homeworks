function piccolo(arr){

    let obj = new Set();

    for(let el of arr){

        let split = el.split(', ');

        if(split[0] === 'IN'){

            obj.add(split[1]);

        }else{

            obj.delete(split[1]);
        }
        
    }

    let entries = Array.from(obj).sort();

    for(let el of entries){

        console.log(el);

    }

    if(obj.size <= 0){

        console.log('Parking Lot is Empty');

    }


}


piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);