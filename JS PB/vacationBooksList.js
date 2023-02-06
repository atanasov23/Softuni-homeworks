function vacationBooksList(input){

let page = Number(input[0]);
let pagePerHour = Number(input[1]);
let daysForReading = Number(input[2]);

let hoursForReading = page / pagePerHour;
let result = hoursForReading / daysForReading;

console.log(result);
}

vacationBooksList(["432", "15", "4"]);