function daysInAmonths(month, year){

    let getDaysOfMonth = (year, month) => {

        return new Date(year, month, 0).getDate();

    }

    return getDaysOfMonth(year, month);

}

console.log(daysInAmonths(2, 2021));