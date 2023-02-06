function storeCatalogue(arr){

    let result = [];

    for(let el of arr){

        let split = el.split(' : ');

        let join = `${split[0]}: ${split[1]}`;

       // console.log(join);

        result.push(join);

    }

    let category = '';

    let word = '';

    result.sort().forEach(a =>{

       // category += a[0];

        if(word !== a[0]){

            category += `\n${a[0]}`; 

            word = `${a[0]}`;

        }

        category += `\n  ${a}`;
        
    })

    console.log(`${category}`);
   

}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']

);