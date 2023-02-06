function aMinerTask(arr) {

    let map = new Map();

    let name = '';

    let value = 0;

    for (let i = 0; i < arr.length ; i++) {

        if (i % 2 === 0) {

            if (!map.has(arr[i])) {

                map.set(arr[i], 0);

                name = arr[i];

            }else{

                value = map.get(arr[i]);

                let test = Number(arr[i + 1]);

                let result = value + test;

                map.set(arr[i], result);

                i++

            }

        } else {


            map.set(name, Number(arr[i]));
            
        }
    }

    for(let el of map){

        console.log(`${el[0]} -> ${el[1]}`)

    }

}

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]);