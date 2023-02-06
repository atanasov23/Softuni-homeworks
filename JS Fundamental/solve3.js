function solve3(input){

    let heroesObj = {};

    for(let i = 0; i < input.length; i++){

        if(input[i] === 'End'){

            break;

        }

        let comand = input[i].split(' ');

        switch(comand[0]){

            case 'Enroll':

            if(heroesObj.hasOwnProperty(comand[1])){

                console.log(`${comand[1]} is already enrolled.`);

            }else{

                heroesObj[comand[1]] = new Set();
            }

            break;

            case 'Learn':

            let spell = heroesObj[comand[1]];

            if(!heroesObj.hasOwnProperty(comand[1])){

                console.log(`${comand[1]} doesn't exist.`);

            }else if(spell.has(comand[2])){

                console.log(`${comand[1]} has already learnt ${comand[2]}.`);

            }else{

                heroesObj[comand[1]].add(comand[2]);
                
            }

            break;

            case 'Unlearn':

                let spell2 = heroesObj[comand[1]];

                if(!heroesObj.hasOwnProperty(comand[1])){
    
                    console.log(`${comand[1]} doesn't exist.`);
    
                }else if(!spell2.has(comand[2])){
    
                    console.log(`${comand[1]} doesn't know ${comand[2]}.`);
    
                }else{
    
                    heroesObj[comand[1]].delete(comand[2]);
                    
                }

            break;

        }

    }
console.log('Heroes:');
    for(let el in heroesObj){

        let heroeSpell = [];

        let spell = heroesObj[el].forEach(element =>  {

            heroeSpell.push(element);
        });

        
        console.log(`== ${el}: ${heroeSpell.join(', ')}`);

    }



    
}

solve3((["Enroll Stefan",
"Enroll Peter",
"Enroll John",
"Learn Stefan Spell",
"Learn Peter Dispel",
"End"]));