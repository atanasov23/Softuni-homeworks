function destinationMapper(input) {

    let regEx = /([=\/])([A-Z][A-Za-z]{2,})\1/g;

    let result = [];

    let travelPoints = 0;

    let match = '';

    while((match = regEx.exec(input)) != null){

       let word = /\w+/g;

       let final = word.exec(match);

       result.push(final);

    }

    result.forEach(a => {

        travelPoints += Number(a[0].length)
    })

    console.log(`Destinations: ${result.join(', ')}`);

    console.log(`Travel Points: ${travelPoints}`);

}

destinationMapper(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="))