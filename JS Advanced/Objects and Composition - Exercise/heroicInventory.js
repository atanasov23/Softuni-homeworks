function heroicInventory(str){

    let result = [];

    for(let el of str){

        let [name, level, items] = el.split(' / ')

        level = Number(level);

        items = items ? items.split(', ') : [];

        result.push({name, level, items});
        
    }

    console.log(JSON.stringify(result));

}

heroicInventory(['Isacc / 25 / dada, dadadad',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);