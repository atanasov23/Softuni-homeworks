function oscars(input) {

    let index = 0;

    const actorName = input[index];

     index++;

    let startScore = Number(input[index]);

  index++;

    let peopleCount = Number(input[index]);

    index++;
 

    for(let i = 0; i < peopleCount; i++){

        let name = input[index];
        index++;

        let points = input[index];
        index++;

        startScore += name.length * points / 2;

        
        if(startScore > 1250.5){

            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startScore.toFixed(1)}!`)

            break;
        }
    }

    if(startScore < 1250.5){

        console.log(`Sorry, ${actorName} you need ${(Math.abs(startScore - 1250.5)).toFixed(1)} more!`)

    }

}

oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])