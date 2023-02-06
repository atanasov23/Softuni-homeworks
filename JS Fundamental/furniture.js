function furniture(arr){
    
    let txt = arr.join(' ');

    let resultArr = [];

    let sum = 0;

    let regEx = /[>]{2}(?<furniture>[A-Z][A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/g;

    let valid;

    while((valid = regEx.exec(txt))){

        let name = valid.groups.furniture;
        let price = Number(valid.groups.price);
        let quantity = Number(valid.groups.quantity);

        resultArr.push(name);

        sum += price * quantity;

    }

    console.log(`Bought furniture:`);

    for(let el of resultArr){

        console.log(el);

    }

    console.log(`Total money spend: ${sum.toFixed(2)}`);
    
}

furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']);