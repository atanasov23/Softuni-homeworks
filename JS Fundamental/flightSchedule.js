function flightSchedule(arr) {

    let flightObject = {};

    let specificSector = arr[0];

    let changeFlight = arr[1];

    let flightStatus = arr[2].join();

    for (let el of specificSector) {

        let [flightNumber, flightDestination, flightDestination2] = el.split(' ');

        if (el.split(' ').length > 2) {

            flightObject[flightNumber] = { Destination: `${flightDestination} ${flightDestination2}`, Status: 'Ready to fly' };

        } else {

            flightObject[flightNumber] = { Destination: flightDestination, Status: 'Ready to fly' };

        }
        
    }

    for (let el of changeFlight) {

        let [flightNumber, flightStatus] = el.split(' ');

        for (let el in flightObject) {

            if (flightNumber === el) {

                flightObject[el].Status = flightStatus;

            }

        }

    }

    if (flightStatus === 'Cancelled') {

        for (let el in flightObject) {

            if (flightObject[el].Status === 'Cancelled') {

                console.log(flightObject[el]);

            }

        }

    } else {

        for (let el in flightObject) {

            if (flightObject[el].Status === 'Ready to fly') {

                console.log(flightObject[el]);

            }

        }

    }

}
flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
]);