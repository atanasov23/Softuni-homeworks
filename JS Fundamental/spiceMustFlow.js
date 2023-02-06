function spiceMustFlow(startingYield) {

    let startYield = startingYield;

    let yield = 0;

    let dayCounter = 0;

    while (startYield >= 100) {

        yield += startYield - 26;

        dayCounter++;

        startYield -= 10;

    }

    if(yield >= 26){

        yield -= 26;
    }

    

    console.log(dayCounter);

    console.log(yield);

}

spiceMustFlow(450);