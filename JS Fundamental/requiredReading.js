function requiredReading(numberOfPage, pagePerHour, daysForReading) {

    let hourNeeded = numberOfPage / pagePerHour;

    let hourPerDay = hourNeeded / daysForReading;

    console.log(hourPerDay);

}

requiredReading(432,
    15,
    4);