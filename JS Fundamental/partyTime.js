function partyTime(list){

    let vip = [];

    let regular = [];

    let bool = false;

    for(let el of list){

        if(el === 'PARTY'){

            bool = true;

            continue;
        }

    

    if(!bool){

        if(isNaN(Number(el[0]))){

            regular.push(el);

        }else{

            vip.push(el);

        }


    }else{



        if(isNaN([el[0]])){

            let index = regular.indexOf(el);

            regular.splice(index,1);
            
        }else{

            let index = vip.indexOf(el);

            vip.splice(index,1);

        }
        

    }

}

let size = regular.length + vip.length;

console.log(size);

for(let el of vip){

    console.log(el);

}

for(let el of regular){

    console.log(el);

}

}

partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]);