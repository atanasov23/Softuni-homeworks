function dayOfWeek(dayOfWeek) {

    if (dayOfWeek === 'Monday') {

        return 1;

    } else if (dayOfWeek === 'Tuesday') {

        return 2;

    } else if (dayOfWeek === 'Wednesday') {

        return 3;

    } else if (dayOfWeek === 'Thursday') {

        return 4;

    } else if (dayOfWeek === 'Friday') {

        return 5;

    } else if (dayOfWeek === 'Saturday') {

        return 6;

    } else if (dayOfWeek === 'Sunday') {

        return 7;

    } else {

        return 'error';

    }

}

console.log(dayOfWeek('Invalid'));