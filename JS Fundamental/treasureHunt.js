function treasureHunt(input) {

    let treasureChest = input.shift().split('|');

    let index = 0;

    let end = input[index];

    while (end !== 'Yohoho!') {

        let line = input[index].split(' ')

        let comand = line.shift();

        let getIndex = Number(line[0]);

        switch (comand) {

            case 'Loot':

                for (let i = 0; i < line.length; i++) {

                    let bool = false;

                    for (let j = 0; j < treasureChest.length; j++) {

                        if (line[i] == treasureChest[j]) {

                            bool = true;

                        }

                    }

                    if (!bool) {

                        treasureChest.unshift(line[i]);

                    }

                }

                break;

            case 'Drop':

                if (getIndex >= 0 && getIndex <= treasureChest.length - 1) {

                    let getValue = treasureChest.splice(getIndex, 1);

                    treasureChest.push(getValue.join(''));

                }

                break;

                

            case 'Steal':

                let getArr = '';

                if(treasureChest.length - 1 < getIndex){

               

                 getArr = treasureChest.splice(0);

                }else{

                   getArr = treasureChest.splice(-getIndex);

                }

                console.log(getArr.join(', '));
                
                break;

        }

        index++;

        end = input[index];

    }

    let sum = 0
    let counterElement = 0;

    for(let el of treasureChest){

        sum += el.length;

        counterElement++;

    }

    let average = sum / counterElement

    if(counterElement > 0){

        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);

    }
    
    if(counterElement <= 0){

        console.log('Failed treasure hunt.');

    }

}

treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"]));