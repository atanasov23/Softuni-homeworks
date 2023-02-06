function towns(arr){

    let town = {}

    for(let el of arr){

       let townPar = el.split('|')

      // console.log(townPar);

       town = {town: townPar[0].trim(), latitude: Number(townPar[1]).toFixed(2), longitude: Number(townPar[2]).toFixed(2)}
      console.log(town);

    }
   
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);