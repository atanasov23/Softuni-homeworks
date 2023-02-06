function attachEvents() {

    let input = document.getElementById('location');

    let send = document.getElementById('submit').addEventListener('click', getLocation);

    async function getLocation() {

        let result;
        let code;
        document.getElementById('forecast').style.display = 'block';

        let curent = document.getElementById('current');
        let upcoming = document.getElementById('upcoming');

        let weatherSign = {

            'Sunny': '&#x2600',
            'Partly sunny': '&#x26C5',
            'Overcast': '&#x2601',
            'Rain': '&#x2614',
            'Degrees': '&#176'
        }

        await fetch(`http://localhost:3030/jsonstore/forecaster/locations/`)
            .then(res => res.json())
            .then(a => result = a);

        for (let el of result) {

            if (el.name === input.value) {

                code = el.code

            }

        }

        let today = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`).then(a => a.json());

        let threeDays = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`).then(a => a.json());

        console.log(today.forecast);
        console.log(threeDays.forecast);

        let condition = today.forecast.condition
        let condition2 = threeDays.forecast[0].condition
        let condition3 = threeDays.forecast[1].condition
        let condition4 = threeDays.forecast[2].condition

        let createDiv = document.createElement('div');

        createDiv.className = 'forecasts';

        let createSpanSymbol = document.createElement('span');

        createSpanSymbol.className = 'condition symbol';

        createSpanSymbol.innerHTML = `${weatherSign[condition]}`

        createDiv.appendChild(createSpanSymbol);

        curent.appendChild(createDiv)

        let createSpanCondition = document.createElement('span');

        createSpanCondition.className = 'condition';

        let createSpanCity = document.createElement('span');

        createSpanCity.className = 'forecast-data'

        createSpanCity.innerHTML = `${today.name}`

        let createSpantemp = document.createElement('span');

        createSpantemp.className = 'forecast-data'

        createSpantemp.innerHTML = `${today.forecast.low}&#176/${today.forecast.high}&#176`

        let createSpanSign = document.createElement('span');

        createSpanSign.className = 'forecast-data'

        createSpanSign.innerHTML = `${today.forecast.condition}`;

        createSpanCondition.appendChild(createSpanCity);
        createSpanCondition.appendChild(createSpantemp);
        createSpanCondition.appendChild(createSpanSign);

        createDiv.appendChild(createSpanCondition)

        let divTwo = document.createElement('div');

        let spanClassUpcomingOne = document.createElement('span');

        let spanUpcomingOne = document.createElement('span');

        let spanUpcomingTwo = document.createElement('span');

        let spanUpcomingThree = document.createElement('span');

        divTwo.className = 'forecast-info';

        spanClassUpcomingOne.className = 'upcoming';

        spanUpcomingOne.className = 'symbol';

        spanUpcomingTwo.className = 'forecast-data'

        spanUpcomingThree.className = 'forecast-data';

        spanUpcomingOne.innerHTML = `${weatherSign[condition2]}`
        spanUpcomingTwo.innerHTML = `${threeDays.forecast[0].low}&#176/${threeDays.forecast[0].high}&#176`
        spanUpcomingThree.innerHTML = `${threeDays.forecast[0].condition}`

        spanClassUpcomingOne.appendChild(spanUpcomingOne);
        spanClassUpcomingOne.appendChild(spanUpcomingTwo);
        spanClassUpcomingOne.appendChild(spanUpcomingThree);

        divTwo.appendChild(spanClassUpcomingOne)

        upcoming.appendChild(divTwo);

        let upcomin = document.createElement('span');

        let one = document.createElement('span');

        let two = document.createElement('span');

        let three = document.createElement('span');

        upcomin.className = 'upcoming';

        one.className = 'symbol';

        two.className = 'forecast-data'

        three.className = 'forecast-data';

        one.innerHTML = `${weatherSign[condition3]}`
        two.innerHTML = `${threeDays.forecast[1].low}&#176/${threeDays.forecast[1].high}&#176`
        three.innerHTML = `${threeDays.forecast[1].condition}`

        upcomin.appendChild(one);
        upcomin.appendChild(two);
        upcomin.appendChild(three);

        divTwo.appendChild(upcomin);

        let upcomin2 = document.createElement('span');

        let o = document.createElement('span');

        let t = document.createElement('span');

        let th = document.createElement('span');

        upcomin2.className = 'upcoming';

        o.className = 'symbol';

        t.className = 'forecast-data'

        th.className = 'forecast-data';

        o.innerHTML = `${weatherSign[condition4]}`
        t.innerHTML = `${threeDays.forecast[2].low}&#176/${threeDays.forecast[2].high}&#176`
        th.innerHTML = `${threeDays.forecast[2].condition}`

        upcomin2.appendChild(o);
        upcomin2.appendChild(t);
        upcomin2.appendChild(th);

        divTwo.appendChild(upcomin2);

    }

}

attachEvents();