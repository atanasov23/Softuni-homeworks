function dayOfWeek(days) {

    if (days < 0 || days > 7) {

        console.log('Invalid day!');

    } else {

        let dayOfWeek = [

            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ]

        console.log(dayOfWeek[days - 1]);
    }

}

dayOfWeek(1);