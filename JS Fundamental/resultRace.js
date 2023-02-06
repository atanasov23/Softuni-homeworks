function resultRace(input){

    let map = new Map();

    let names = input.shift().split(', ');

    for(let personName of names){

        map.set(personName, 0);

    }

    let letterRegEx = /[A-Za-z]/g;

    let digitsRegEx = /\d/g;

    for(let i = 0; i < input.length; i++){

        let line = input[i];

        if(line === 'end of race'){

            break;

        }

        let name = line.match(letterRegEx).join('');

        let score = line.match(digitsRegEx).reduce((a,b) => {

            return Number(a) + Number(b);
        },0);

        

        if(map.has(name)){

            let previousDistance = map.get(name)

            previousDistance += score;

            map.set(name, previousDistance);
        }
    }

 let sortedArr = Array.from(map).sort((a,b) => {

    return b[1] - a[1];
 });

 let top3 = sortedArr.slice(0,3);

    console.log(`1st place: ${top3[0][0]}`);
    console.log(`2nd place: ${top3[1][0]}`);
    console.log(`3rd place: ${top3[2][0]}`);
}

resultRace(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']);