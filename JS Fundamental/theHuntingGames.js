function theHuntingGames(input){

    let dayOfAdventures = Number(input[0]);

    let playerCount = Number(input[1]);

    let groupEnergy = Number(input[2]);

    let waterPerDay = Number(input[3]);

    let foodPerDay = Number(input[4]);

    let totalFood = (dayOfAdventures * playerCount) * foodPerDay;

    let totalWater = (dayOfAdventures * playerCount) * waterPerDay;


    for(let i = 1; i <= dayOfAdventures; i++){

     groupEnergy -= Number(input[i + 4]);

     if(groupEnergy <= 0){
break
     }

       if(i % 2 === 0){

       groupEnergy += groupEnergy * 0.05;

       totalWater -= totalWater * 0.3;

        }

        if(i % 3 === 0){

            totalFood -= totalFood / playerCount;

            groupEnergy += groupEnergy * 0.1;

        }

        if(groupEnergy < 0){

            break;

        }

    }

    if(groupEnergy > 0){

        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);

    }else{

        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    }
    
}


theHuntingGames((["12",
"6",
"4430",
"9.8",
"5.5",
"620.3",
"840.2",
"960.1",
"220",
"340",
"674",
"365",
"345.5",
"212",
"412.12",
"258",
"496"]));